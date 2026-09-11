import { cache } from "react";
import { prisma } from "@/lib/prisma";
import { getPostBySlug } from "@/content/blog-posts";
import { isIndexableFallbackBlogPost } from "@/lib/blog-discovery";
import { retiredBlogSlugs } from "@/lib/retired-blog-posts";

function validDate(value: string | Date | null | undefined): Date | null {
  if (!value) return null;
  const date = new Date(value);
  return Number.isFinite(date.getTime()) ? date : null;
}

// Metadata and the page share one lookup and one publication decision per render.
export const getPublicBlogPost = cache(async (slug: string) => {
  if (retiredBlogSlugs.has(slug)) return null;
  const fallback = getPostBySlug(slug);
  if (process.env.DATABASE_URL) {
    try {
      const post = await prisma.post.findUnique({ where: { slug } });
      if (post) {
        if (!post.isPublished || !post.content.trim()) return null;
        return { ...post, publishedAt: validDate(post.publishedAt), updatedAt: validDate(post.updatedAt) };
      }
    } catch {
      // Serve a real bundled article during an outage, never turn unknown DB content into a 404.
      if (!fallback || !isIndexableFallbackBlogPost(fallback)) {
        console.error("[blog] Published article lookup unavailable");
        throw new Error("The article service is temporarily unavailable.");
      }
    }
  }
  if (!fallback || !isIndexableFallbackBlogPost(fallback)) return null;
  return {
    id: fallback.slug, slug: fallback.slug, title: fallback.title,
    excerpt: fallback.excerpt, content: fallback.content, category: fallback.category,
    publishedAt: validDate(fallback.publishedAt), updatedAt: validDate(fallback.updatedAt ?? fallback.publishedAt),
    coverImage: fallback.coverImage ?? null,
  };
});
