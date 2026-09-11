import type { MetadataRoute } from "next";
import { getCachedBlogListing } from "@/lib/blog-listing";
import { BLOG_PAGE_SIZE } from "@/lib/blog-pagination";
import { checklists } from "@/lib/checklists";
import { tutorials, tutorialCategories } from "@/lib/tutorials";
import { landingPages } from "@/lib/landing-pages";
import { getBaseUrl } from "@/lib/site-url";
import { packageProducts } from "@/lib/packages-catalog";
import { digitalResources } from "@/lib/resources";
import { caseStudies } from "@/lib/case-studies";
import { getBlogCategoryPath } from "@/lib/blog-discovery";
import { getBlogPostLanguage } from "@/lib/blog-i18n";
import { careerTools } from "@/lib/tools";
import { industryLandingPages } from "@/lib/industry-pages";
import { industryPages as resumeWriterIndustries } from "@/lib/industry-resume-pages";
import { cityPages } from "@/lib/city-resume-pages";
import { careerStagePages } from "@/lib/career-stage-pages";
import { marketSitemapEntries } from "@/lib/market-seo";

const baseUrl = getBaseUrl();

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/international",
    "/about",
    "/services",
    "/services/cv-writing",
    "/services/cover-letter-writing",
    "/services/linkedin-optimization",
    "/services/cv-review",
    "/services/packages/ats-cv",
    "/services/packages/linkedin",
    "/services/packages/cover-letter",
    "/services/packages/foreign-cv",
    "/services/packages/graphical-cv",
    "/services/packages/consultation",
    "/services/personal-website",
    "/services/industries",
    "/businesses",
    "/resources",
    "/resources/checklists",
    "/tutorials",
    "/refund-policy",
    "/bundles",
    "/tools",
    "/booking",
    "/reviews",
    "/career-quiz",
    "/results",
    "/workshops",
    "/portfolio",
    "/offers",
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
    "/guides",
    "/guides/us-resume-vs-uk-cv-vs-australian-resume",
    "/guides/ats-cv-vs-normal-cv",
    // US SEO network - hub pages
    "/resume-writer",
    "/locations",
    "/career-stage",
    // Comparison / buying-decision pages
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
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const posts = await getCachedBlogListing();

  const blogEntries = posts
    // Sinhala posts are noindexed on the US .com, so keep them out of the sitemap.
    .filter((post) => getBlogPostLanguage(post.slug) !== "si")
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt ?? undefined,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }));

  const blogIndexEntries = [{
    url: `${baseUrl}/blog`,
    changeFrequency: "weekly" as const,
    priority: 0.72,
  }];

  const categoryEntries = Array.from(new Set(posts.map((post) => post.category)))
    .sort()
    .map((category) => ({
      url: `${baseUrl}${getBlogCategoryPath(category)}`,
        changeFrequency: "weekly" as const,
      priority: 0.69,
    }));

  const packageEntries = packageProducts.map((item) => ({
    url: `${baseUrl}/packages/${item.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.72,
  }));

  const resourceEntries = digitalResources.map((item) => ({
    url: `${baseUrl}/resources/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));

  const toolEntries = careerTools.map((item) => ({
    url: `${baseUrl}/tools/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.69,
  }));

  const industryEntries = industryLandingPages.map((item) => ({
    url: `${baseUrl}/services/industries/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.71,
  }));

  const resumeWriterIndustryEntries = resumeWriterIndustries.map((item) => ({
    url: `${baseUrl}/resume-writer/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const cityEntries = cityPages.map((item) => ({
    url: `${baseUrl}/locations/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const careerStageEntries = careerStagePages.map((item) => ({
    url: `${baseUrl}/career-stage/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.74,
  }));

  const caseStudyEntries = caseStudies.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const entries = [
    ...landingPages.filter((item) => !/(sri-lanka|sinhala)/.test(item.slug))
      .map((item) => ({ url: `${baseUrl}/${item.slug}` })),
    ...tutorials.map((item) => ({ url: `${baseUrl}/tutorials/${item.en.slug}` })),
    ...tutorialCategories.filter((category) => tutorials.some((item) => item.categoryId === category.id))
      .map((category) => ({ url: `${baseUrl}/tutorials/category/${category.slug}` })),
    ...checklists.map((item) => ({ url: `${baseUrl}/resources/checklists/${item.slug}` })),
    ...Array.from({ length: Math.max(0, Math.ceil(posts.length / BLOG_PAGE_SIZE) - 1) }, (_, index) => ({
      url: `${baseUrl}/blog?page=${index + 2}`,
    })),
    ...marketSitemapEntries(),
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
