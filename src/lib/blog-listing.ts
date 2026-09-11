import { unstable_cache } from "next/cache";
import { blogPosts, getPostBySlug } from "@/content/blog-posts";
import { prisma } from "@/lib/prisma";
import { getIndexableFallbackBlogPosts } from "@/lib/blog-discovery";
import { getBlogPostLanguage } from "@/lib/blog-i18n";
import { retiredBlogSlugs } from "@/lib/retired-blog-posts";
import { contentDate } from "@/lib/content-date";

export type BlogListingPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: Date | null;
  updatedAt?: Date | null;
  coverImage?: string | null;
  packageSlug?: string;
  keywords?: string[];
};

function sortPostsByDate<T extends { publishedAt: Date | null }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const aTime = a.publishedAt ? a.publishedAt.getTime() : 0;
    const bTime = b.publishedAt ? b.publishedAt.getTime() : 0;
    return bTime - aTime;
  });
}

function isPublicListingPost(post: { slug: string }): boolean {
  return getBlogPostLanguage(post.slug) !== "si" && !retiredBlogSlugs.has(post.slug);
}

const fallbackPosts: BlogListingPost[] = getIndexableFallbackBlogPosts(blogPosts).filter(isPublicListingPost).map((post) => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  category: post.category,
  publishedAt: post.publishedAt ? new Date(post.publishedAt) : null,
  updatedAt: contentDate(post.updatedAt ?? post.publishedAt) ?? null,
  coverImage: post.coverImage,
  packageSlug: post.packageSlug,
  keywords: post.keywords,
}));

export async function loadMergedBlogListing(): Promise<BlogListingPost[]> {
  const fallbackSorted = sortPostsByDate(fallbackPosts);

  if (!process.env.DATABASE_URL) {
    return fallbackSorted;
  }

  try {
    const dbPostsRaw = await prisma.post.findMany({
      orderBy: { publishedAt: "desc" },
      select: {
        slug: true,
        title: true,
        excerpt: true,
        category: true,
        publishedAt: true,
        coverImage: true,
        updatedAt: true,
        isPublished: true,
        content: true,
      },
    });

    const dbPosts: BlogListingPost[] = dbPostsRaw.filter((item) => item.isPublished && item.content.trim() && isPublicListingPost(item)).map((item) => {
      const contentPost = getPostBySlug(item.slug);

      return {
        ...item,
        coverImage: item.coverImage ?? contentPost?.coverImage,
        packageSlug: contentPost?.packageSlug,
        keywords: contentPost?.keywords,
      };
    });

    const dbSlugs = new Set(dbPostsRaw.map((item) => item.slug));
    const merged = [...dbPosts, ...fallbackPosts.filter((item) => !dbSlugs.has(item.slug))];

    return sortPostsByDate(merged);
  } catch {
    return fallbackSorted;
  }
}

const cachedBlogListing = unstable_cache(loadMergedBlogListing, ["blog-listing:published-global-v3"], {
  revalidate: 3600,
  tags: ["blog-listing"],
});

export async function getCachedBlogListing(): Promise<BlogListingPost[]> {
  return (await cachedBlogListing()).map((post) => ({
    ...post,
    publishedAt: contentDate(post.publishedAt) ?? null,
    updatedAt: contentDate(post.updatedAt) ?? null,
  }));
}
