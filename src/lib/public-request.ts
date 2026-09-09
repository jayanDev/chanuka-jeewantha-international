import { getPublicBlogPost } from "@/lib/blog-post";
import { loadMergedBlogListing } from "@/lib/blog-listing";
import { getBlogCategoryPath } from "@/lib/blog-discovery";
import { BLOG_PAGE_SIZE, parseBlogPage } from "@/lib/blog-pagination";
import { getTutorialBySlug, tutorialCategories, tutorials } from "@/lib/tutorials";
import { getPortfolioByUsername } from "@/lib/portfolios";
import { getCareerToolBySlug } from "@/lib/tools";
import { getResourceBySlug } from "@/lib/resources";
import { getChecklistBySlug } from "@/lib/checklists";
import { packageProducts, serviceOptions } from "@/lib/packages-catalog";
import { getCaseStudyBySlug } from "@/lib/case-studies";
import { getCityPage } from "@/lib/city-resume-pages";
import { getCareerStagePage } from "@/lib/career-stage-pages";
import { getIndustryPage } from "@/lib/industry-resume-pages";
import { getIndustryLandingPageBySlug } from "@/lib/industry-pages";
import { geoPageSlugs } from "@/lib/geo-pages";

const staticEntityLookups: Record<string, (slug: string) => unknown> = {
  tools: getCareerToolBySlug,
  packages: (slug) => packageProducts.find((item) => item.slug === slug),
  "case-studies": getCaseStudyBySlug,
  locations: getCityPage,
  "career-stage": getCareerStagePage,
  "resume-writer": getIndustryPage,
  "cv-writing": (slug) => geoPageSlugs.includes(slug),
};

export async function checkPublicRequest(url: URL): Promise<404 | string | null> {
  const path = url.pathname;
  const [, root, slug, ...rest] = path.split("/");
  if (staticEntityLookups[root] && slug) {
    return rest.length === 0 && staticEntityLookups[root](slug) ? null : 404;
  }
  if (root === "services" && slug) {
    if (slug === "personal-website" && rest.length === 0) return null;
    if (slug === "industries") return rest.length === 0 || (rest.length === 1 && getIndustryLandingPageBySlug(rest[0])) ? null : 404;
    if (slug === "packages") return rest.length === 1 && serviceOptions.some((item) => item.key === rest[0]) ? null : 404;
    return rest.length === 0 && ["cv-writing", "cover-letter-writing", "linkedin-optimization", "cv-review"].includes(slug) ? null : 404;
  }
  if (root === "resources" && slug) {
    if (rest.length === 1 && rest[0].startsWith("opengraph-image")) return null;
    if (slug === "checklists") {
      if (!rest.length) return null;
      return getChecklistBySlug(rest[0]) && (rest.length === 1 || (rest.length === 2 && rest[1] === "read")) ? null : 404;
    }
    return rest.length === 0 && getResourceBySlug(slug) ? null : 404;
  }
  if (path.startsWith("/offers/")) return 404; // Matcher contains only the four retired offers.
  if (path === "/blog" || path.startsWith("/blog/category/")) {
    const posts = await loadMergedBlogListing();
    if (path.startsWith("/blog/category/")) {
      return posts.some((post) => getBlogCategoryPath(post.category) === path) ? null : 404;
    }
    const category = url.searchParams.get("category");
    if (category !== null) {
      return posts.some((post) => post.category === category) ? getBlogCategoryPath(category) : 404;
    }
    const page = parseBlogPage(url.searchParams.get("page"));
    if (url.searchParams.getAll("page").length > 1) return 404;
    return page && page <= Math.max(1, Math.ceil(posts.length / BLOG_PAGE_SIZE)) ? null : 404;
  }
  if (path.startsWith("/blog/") && path !== "/blog/search") {
    const [, , slug, suffix] = path.split("/");
    if (suffix) return rest.length === 1 && suffix.startsWith("opengraph-image") ? null : 404;
    return await getPublicBlogPost(slug) ? null : 404;
  }
  if (path.startsWith("/p/")) return getPortfolioByUsername(path.slice(3)) ? null : 404;
  if (path.startsWith("/tutorials/category/")) {
    const legacyCategory = tutorialCategories.find((item) => item.id === path.slice(20));
    if (legacyCategory) return `/tutorials/category/${legacyCategory.slug}`;
    const category = tutorialCategories.find((item) => item.slug === path.slice(20));
    return category && tutorials.some((item) => item.categoryId === category.id) ? null : 404;
  }
  if (path.startsWith("/tutorials/")) return getTutorialBySlug(path.slice(11)) ? null : 404;
  return null;
}
