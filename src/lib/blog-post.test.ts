// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
vi.mock("@/lib/prisma", () => ({ prisma: { post: { findUnique: vi.fn() } } }));
vi.mock("@/content/blog-posts", () => ({ getPostBySlug: vi.fn() }));
import { prisma } from "@/lib/prisma";
import { getPublicBlogPost } from "@/lib/blog-post";

describe("public article publication checks", () => {
  beforeEach(() => { vi.stubEnv("DATABASE_URL", "file:test.db"); vi.clearAllMocks(); });
  afterEach(() => vi.unstubAllEnvs());
  it("hides unpublished articles", async () => {
    vi.mocked(prisma.post.findUnique).mockResolvedValue({ isPublished: false, content: "Draft" } as never);
    expect(await getPublicBlogPost("draft")).toBeNull();
  });
  it("hides empty published articles", async () => {
    vi.mocked(prisma.post.findUnique).mockResolvedValue({ isPublished: true, content: "  " } as never);
    expect(await getPublicBlogPost("empty")).toBeNull();
  });
  it("returns missing entities without inventing content", async () => {
    vi.mocked(prisma.post.findUnique).mockResolvedValue(null);
    expect(await getPublicBlogPost("missing")).toBeNull();
  });
  it("returns 404-ready null for retired guides rather than redirecting to missing replacements", async () => {
    expect(await getPublicBlogPost("package-guide-starter-cv-package")).toBeNull();
    expect(await getPublicBlogPost("package-guide-student-cv-package")).toBeNull();
    expect(prisma.post.findUnique).not.toHaveBeenCalled();
  });
  it("preserves storage errors for temporary-unavailable handling", async () => {
    vi.mocked(prisma.post.findUnique).mockRejectedValue(new Error("Storage down"));
    await expect(getPublicBlogPost("database-only")).rejects.toThrow("temporarily unavailable");
  });
});
