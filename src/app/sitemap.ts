import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { getBaseUrl } from "@/lib/site-url";
import { blogPosts } from "@/content/blog-posts";
import { packageProducts } from "@/lib/packages-catalog";
import { digitalResources } from "@/lib/resources";
import { caseStudies } from "@/lib/case-studies";
import { getBlogCategoryPath, getIndexableFallbackBlogPosts } from "@/lib/blog-discovery";
import { careerTools } from "@/lib/tools";
import { industryLandingPages } from "@/lib/industry-pages";
import { industryPages as resumeWriterIndustries } from "@/lib/industry-resume-pages";
import { cityPages } from "@/lib/city-resume-pages";
import { careerStagePages } from "@/lib/career-stage-pages";

const baseUrl = getBaseUrl();
const siteLastUpdated = new Date("2026-05-21T00:00:00.000Z");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/cv-writing",
    "/services/cover-letter-writing",
    "/services/linkedin-optimization",
    "/services/cv-review",
    "/services/packages/cv-writing",
    "/services/packages/cover-letter-writing",
    "/services/packages/linkedin-optimization",
    "/services/packages/cv-review",
    "/services/personal-website",
    "/services/industries",
    "/businesses",
    "/resources",
    "/tools",
    "/booking",
    "/reviews",
    "/career-quiz",
    "/results",
    "/workshops",
    "/portfolio",
    "/offers",
    "/offers/bundles",
    "/offers/bulk-discount-packages",
    "/offers/bundle-discount-packages",
    "/offers/bulk-cv-5-pack",
    "/offers/bulk-cv-10-pack",
    "/offers/career-brand-trinity-bundle",
    "/offers/application-duo-bundle",
    "/pricing",
    "/fiverr-orders",
    "/affiliate",
    "/case-studies",
    "/testimonials",
    "/faq",
    "/contact",
    "/help",
    "/privacy-policy",
    "/terms-and-conditions",
    "/resume",
    "/services/packages",
    "/cv-writing/usa",
    "/cv-writing/uk",
    "/cv-writing/australia",
    "/cv-writing/canada",
    "/cv-writing/new-zealand",
    "/guides",
    "/guides/us-resume-vs-uk-cv-vs-australian-resume",
    "/guides/ats-cv-vs-normal-cv",
    // US SEO network - hub pages
    "/resume-writer",
    "/locations",
    "/career-stage",
    // Comparison / buying-decision pages
    "/best-resume-writing-services-2026",
    "/resume-writer-cost",
    "/is-a-resume-writer-worth-it",
    "/resume-writer-vs-chatgpt",
    "/professional-resume-writer-vs-template",
    // Keyword-cluster landing pages
    "/resume-examples",
    "/resume-and-cover-letter",
    "/cv-writing-service",
    "/build-your-resume",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: siteLastUpdated,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const fallbackPosts: Array<{ slug: string; publishedAt: Date | null; updatedAt: Date; category: string }> = getIndexableFallbackBlogPosts(blogPosts).map((post) => {
    const date = post.publishedAt ? new Date(post.publishedAt) : new Date();
    return {
      slug: post.slug,
      publishedAt: date,
      updatedAt: date,
      category: post.category,
    };
  });

  let posts: Array<{ slug: string; publishedAt: Date | null; updatedAt: Date; category: string }> = fallbackPosts;
  if (process.env.DATABASE_URL) {
    try {
      const dbPosts = await prisma.post.findMany({
        where: { isPublished: true },
        select: { slug: true, publishedAt: true, updatedAt: true, category: true },
      });

      const dbSlugs = new Set(dbPosts.map((item: { slug: string }) => item.slug));
      posts = [
        ...dbPosts,
        ...fallbackPosts.filter((item) => !dbSlugs.has(item.slug)),
      ];
    } catch {
      posts = fallbackPosts;
    }
  }

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt ?? siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const blogIndexEntries = [{
    url: `${baseUrl}/blog`,
    lastModified: siteLastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.72,
  }];

  const categoryEntries = Array.from(new Set(posts.map((post) => post.category)))
    .sort()
    .map((category) => ({
      url: `${baseUrl}${getBlogCategoryPath(category)}`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.69,
    }));

  const packageEntries = packageProducts.map((item) => ({
    url: `${baseUrl}/packages/${item.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.72,
  }));

  const resourceEntries = digitalResources.map((item) => ({
    url: `${baseUrl}/resources/${item.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));

  const toolEntries = careerTools.map((item) => ({
    url: `${baseUrl}/tools/${item.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.69,
  }));

  const industryEntries = industryLandingPages.map((item) => ({
    url: `${baseUrl}/services/industries/${item.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.71,
  }));

  const resumeWriterIndustryEntries = resumeWriterIndustries.map((item) => ({
    url: `${baseUrl}/resume-writer/${item.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const cityEntries = cityPages.map((item) => ({
    url: `${baseUrl}/locations/${item.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const careerStageEntries = careerStagePages.map((item) => ({
    url: `${baseUrl}/career-stage/${item.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.74,
  }));

  const caseStudyEntries = caseStudies.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(`${item.year}-01-01T00:00:00.000Z`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const entries = [
    ...staticEntries,
    ...blogIndexEntries,
    ...categoryEntries,
    ...blogEntries,
    ...packageEntries,
    ...resourceEntries,
    ...toolEntries,
    ...industryEntries,
    ...resumeWriterIndustryEntries,
    ...cityEntries,
    ...careerStageEntries,
    ...caseStudyEntries,
  ];

  return Array.from(new Map(entries.map((entry) => [entry.url, entry])).values());
}
