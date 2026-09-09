// @vitest-environment node
import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { unstable_doesMiddlewareMatch as unstable_doesProxyMatch } from "next/experimental/testing/server";
import { config, proxy } from "./proxy";
import { articleTopics, marketSections, markets } from "@/lib/markets";

describe("country routing proxy", () => {
  it("matches all country pages without changing valid routes", async () => {
    for (const market of markets) {
      for (const section of [...marketSections, ...articleTopics.map((topic) => `blog/${topic}`)]) {
        const url = `https://chanukajeewantha.com/${market.slug}${section ? `/${section}` : ""}`;
        expect(unstable_doesProxyMatch({ config, nextConfig: {}, url })).toBe(true);
        expect((await proxy(new NextRequest(url))).headers.get("x-middleware-next")).toBe("1");
      }
    }
  });

  it.each(["/en-xx", "/en-xx/services", "/en-uk/not-a-page", "/en-uk/blog/not-an-article", "/en-au/services/extra"])("returns a noindex 404 for %s", async (path) => {
    const url = `https://chanukajeewantha.com${path}`;
    expect(unstable_doesProxyMatch({ config, nextConfig: {}, url })).toBe(true);
    const response = await proxy(new NextRequest(url));
    expect(response.status).toBe(404);
    expect(response.headers.get("x-middleware-rewrite")).toBe("https://chanukajeewantha.com/404");
    expect(response.headers.get("x-robots-tag")).toBe("noindex");
  });

  it("preserves existing protected-route authentication", async () => {
    const response = await proxy(new NextRequest("https://chanukajeewantha.com/profile"));
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/auth/signin?returnTo=%2Fprofile");
    expect(unstable_doesProxyMatch({ config, nextConfig: {}, url: "/international" })).toBe(false);
  });
  it("does not bounce stale cookies away from sign-in", async () => {
    const response = await proxy(new NextRequest("https://chanukajeewantha.com/auth/signin", {
      headers: { cookie: "session_token=expired" },
    }));
    expect(response.headers.get("x-middleware-next")).toBe("1");
  });
});
