// @vitest-environment node
import { beforeEach, describe, expect, it, vi } from "vitest";
vi.mock("@/lib/blog-listing", () => ({ getCachedBlogListing: vi.fn() }));
import { getCachedBlogListing } from "@/lib/blog-listing";
import { GET } from "./route";

describe("public RSS feed", () => {
  beforeEach(() => vi.clearAllMocks());
  it("handles cached ISO dates and XML escaping", async () => {
    vi.mocked(getCachedBlogListing).mockResolvedValue([{ slug: "example", title: "CV & Resume", category: "CV", excerpt: "<example>", publishedAt: "2026-09-11T00:00:00Z" as unknown as Date }]);
    const response = await GET();
    const xml = await response.text();
    expect(response.status).toBe(200);
    expect(xml).toContain("CV &amp; Resume");
    expect(xml).toContain("&lt;example&gt;");
    expect(xml).toContain("<pubDate>Fri, 11 Sep 2026 00:00:00 GMT</pubDate>");
    expect(xml).toContain("<language>en</language>");
  });
  it("omits unavailable dates instead of inventing publication dates", async () => {
    vi.mocked(getCachedBlogListing).mockResolvedValue([{ slug: "example", title: "CV", category: "CV", excerpt: "Example", publishedAt: new Date("invalid") }]);
    expect(await (await GET()).text()).not.toContain("<pubDate>");
  });
  it("returns a retryable error when the listing fails", async () => {
    vi.mocked(getCachedBlogListing).mockRejectedValue(new Error("offline"));
    const response = await GET();
    expect(response.status).toBe(503);
    expect(response.headers.get("cache-control")).toBe("no-store");
  });
});
