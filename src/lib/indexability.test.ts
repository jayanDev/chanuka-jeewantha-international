import { describe, expect, it, vi, beforeEach } from "vitest";
import { parseBlogPage } from "@/lib/blog-pagination";
import { safeReturnTo } from "@/lib/return-to";

vi.mock("@/lib/blog-post", () => ({ getPublicBlogPost: vi.fn() }));
vi.mock("@/lib/blog-listing", () => ({ loadMergedBlogListing: vi.fn() }));
import { getPublicBlogPost } from "@/lib/blog-post";
import { loadMergedBlogListing } from "@/lib/blog-listing";
import { checkPublicRequest } from "@/lib/public-request";

describe("indexability request validation", () => {
  beforeEach(() => {
    vi.mocked(loadMergedBlogListing).mockResolvedValue(Array.from({ length: 13 }, (_, i) => ({
      slug: `post-${i}`, title: "Article", excerpt: "Article", category: "Branding", publishedAt: null,
    })));
    vi.mocked(getPublicBlogPost).mockResolvedValue(null);
  });
  it.each(["0", "-1", "2x", "1.2", "", ["1", "2"], "999999999999999999999"])("rejects invalid page %s", (value) => {
    expect(parseBlogPage(value)).toBeNull();
  });
  it("accepts valid pages and defaults", () => {
    expect(parseBlogPage(null)).toBe(1);
    expect(parseBlogPage("2")).toBe(2);
  });
  it("rejects missing articles and out-of-range archives before streaming", async () => {
    for (const path of ["/blog/missing", "/blog/constructor", "/blog/missing/extra", "/blog?page=3", "/blog/category/missing", "/offers/bulk-cv-5-pack", "/tools/missing", "/services/missing", "/resources/missing", "/locations/missing"]) {
      expect(await checkPublicRequest(new URL(path, "https://example.com"))).toBe(404);
    }
    expect(await checkPublicRequest(new URL("https://example.com/blog?page=2"))).toBeNull();
    expect(await checkPublicRequest(new URL("https://example.com/blog/category/branding"))).toBeNull();
  });
  it("preserves valid tools, service groups, hubs and image endpoints", async () => {
    for (const path of ["/tools/ats-cv-audit", "/services/cv-writing", "/services/packages/ats-cv", "/services/industries", "/resources/checklists", "/resources/-/opengraph-image"]) {
      expect(await checkPublicRequest(new URL(path, "https://example.com"))).toBeNull();
    }
  });
  it("canonicalizes category filters and legacy tutorial links", async () => {
    expect(await checkPublicRequest(new URL("https://example.com/blog?category=Branding"))).toBe("/blog/category/branding");
    expect(await checkPublicRequest(new URL("https://example.com/tutorials/category/a"))).toBe("/tutorials/category/cv-writing");
  });
  it("does not disguise unavailable article storage as a missing page", async () => {
    vi.mocked(getPublicBlogPost).mockRejectedValue(new Error("Unavailable"));
    await expect(checkPublicRequest(new URL("https://example.com/blog/db-article"))).rejects.toThrow("Unavailable");
  });
  it("rejects unsafe return destinations and auth loops", () => {
    for (const value of ["//example.com", "/\\example.com", "/auth/signin", "https://example.com"]) expect(safeReturnTo(value)).toBe("/");
    expect(safeReturnTo("/profile?tab=orders")).toBe("/profile?tab=orders");
  });
});
