import { describe, expect, it, vi, beforeEach } from "vitest";
import { CURRENCIES, convertFromUsd, isCurrencyCode } from "@/lib/currency";
import { marketAmount, marketBundles } from "@/lib/market-pricing";
import { markets } from "@/lib/markets";
import { internationalBundles, bundleSavings } from "@/lib/international-bundles";
import { resourceGuides } from "@/lib/resource-guides";
import { getResourceBySlug } from "@/lib/resources";
import { reviewedArticles } from "@/content/blog-reviewed";
import { getPostBySlug } from "@/content/blog-posts";
import { caseStudies } from "@/lib/case-studies";
import { buildPageMetadata, buildNoIndexMetadata } from "@/lib/seo";
import { usArticleReviews } from "@/content/blog-us-reviewed";
import { usCareerBlogPosts } from "@/content/blog-us-career-library";
import { analyticsAllowed, publicAnalyticsPath, trackCareerEvent, ANALYTICS_CONSENT_KEY } from "@/lib/analytics";

describe("SEO repair invariants", () => {
  it("allows public previews without removing private noindex controls", () => {
    expect(buildPageMetadata({ title: "Public", description: "Public page", path: "/" }).robots).toMatchObject({ index: true, "max-snippet": -1, "max-image-preview": "large" });
    expect(buildNoIndexMetadata({ title: "Private", description: "Private page", path: "/profile" }).robots).toMatchObject({ index: false, googleBot: { nosnippet: true } });
  });
  it("applies the twelve individual US article revisions to existing URLs", () => {
    expect(Object.keys(usArticleReviews)).toHaveLength(12);
    for (const [id, review] of Object.entries(usArticleReviews)) {
      const post = usCareerBlogPosts.find(p => p.slug.startsWith(`us-${id}-`));
      expect(post?.content).toBe(review.answer);
      expect(post?.sections).toEqual(review.sections);
      expect(post?.updatedAt).toBe("2026-09-11");
      expect(post?.faqs).toEqual([]);
    }
  });
  it("uses the same bundles and currency amounts globally and in country editions", () => {
    expect(marketBundles).toBe(internationalBundles);
    expect(internationalBundles.map(b => b.usd)).toEqual([179, 349, 499, 899, 1499]);
    for (const market of markets) {
      if (!isCurrencyCode(market.currency)) continue;
      for (const amount of [59, 89, 349, 1499]) {
        expect(convertFromUsd(amount, market.currency)).toBe(marketAmount(amount, market));
      }
    }
    expect(Object.keys(CURRENCIES)).not.toContain("LKR");
    expect(isCurrencyCode("constructor")).toBe(false);
    expect(() => convertFromUsd(NaN, "USD")).toThrow();
    expect(bundleSavings(internationalBundles[0])).toBe(158);
    expect(bundleSavings(internationalBundles[1])).toBe(148);
    expect(bundleSavings(internationalBundles[2])).toBeUndefined();
  });
  it("resolves all five previously broken resource links", () => {
    expect(resourceGuides).toHaveLength(5);
    for (const guide of resourceGuides) {
      expect(getResourceBySlug(guide.slug)).toBe(guide);
      expect(guide.contentSections?.length).toBeGreaterThanOrEqual(3);
    }
  });
  it("publishes the nine reviewed articles with their real modification date", () => {
    expect(Object.keys(reviewedArticles)).toHaveLength(9);
    for (const [slug, revision] of Object.entries(reviewedArticles)) {
      expect(getPostBySlug(slug)?.title).toBe(revision.title);
      expect(getPostBySlug(slug)?.updatedAt).toBe("2026-09-11");
    }
  });
  it("does not publish unverified case-study outcomes", () => {
    expect(caseStudies.every(study => study.evidenceVerified === true)).toBe(true);
  });
});

describe("privacy-safe analytics", () => {
  beforeEach(() => { localStorage.clear(); window.gtag = vi.fn(); });
  it("requires explicit consent and removes query strings", () => {
    expect(analyticsAllowed()).toBe(false);
    trackCareerEvent("generate_lead");
    expect(window.gtag).not.toHaveBeenCalled();
    localStorage.setItem(ANALYTICS_CONSENT_KEY, "accepted");
    trackCareerEvent("generate_lead");
    expect(window.gtag).toHaveBeenCalledOnce();
    expect(publicAnalyticsPath("/en-uk/contact?email=private@example.com#details")).toBe("/en-uk/contact");
    for (const path of ["/auth/signin", "/orders/123", "/api/contact", "/p/somebody", "/profile", "/notifications"]) {
      expect(publicAnalyticsPath(path)).toBeNull();
    }
  });
});
