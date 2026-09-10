import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { getWriterEntries, writersGuideDescription } from "@/lib/cv-writers";
import { markets, getMarket, marketPath, switchMarketPath } from "@/lib/markets";
import { getMarketArticles } from "@/lib/market-articles";
import { buildMarketMetadata, marketPageSchema, marketSitemapEntries } from "@/lib/market-seo";
import { newMarketEditorial } from "@/content/new-market-editorial";
import { marketRates, marketRateDate } from "@/lib/market-rates";

const sitemapEntries = marketSitemapEntries();

describe("country writer shortlists", () => {
  it.each(markets)("has ten sourced entries and the right featured destination for $label", (market) => {
    const entries = getWriterEntries(market);
    expect(entries).toHaveLength(10);
    expect(new Set(entries.map((entry) => entry.id)).size).toBe(10);
    expect(entries[0]).toMatchObject({ id: "chanuka-jeewantha", featured: true, website: marketPath(market) });
    expect(entries.filter((entry) => entry.featured)).toHaveLength(1);
    for (const entry of entries) {
      expect(entry.experience.length).toBeGreaterThan(35);
      expect(existsSync(path.join(process.cwd(), "public", entry.image.src))).toBe(true);
      if (!entry.featured) {
        expect(new URL(entry.website).protocol).toBe("https:");
        expect(new URL(entry.sourceUrl).protocol).toBe("https:");
        expect(entry.image.sourceUrl).toMatch(/^https?:\/\//);
      }
    }
    const article = getMarketArticles(market).find((item) => item.slug === "top-10-cv-writers")!;
    expect(buildMarketMetadata(market, "blog", article).alternates?.canonical).toBe(marketPath(market, "blog/top-10-cv-writers"));
    const schema = marketPageSchema(market, "blog", article);
    expect(schema["@graph"].find((item) => item["@type"] === "ItemList")).toMatchObject({ numberOfItems: 10, description: writersGuideDescription });
    expect(schema["@graph"].find((item) => item["@type"] === "BlogPosting")).toMatchObject({ datePublished: "2026-09-10T00:00:00+00:00" });
    expect(JSON.stringify(schema)).not.toMatch(/AggregateRating|ratingValue|reviewRating/);
    expect(sitemapEntries.find((entry) => entry.url.endsWith(marketPath(market, "blog/top-10-cv-writers")))?.lastModified).toEqual(new Date("2026-09-10T00:00:00Z"));
  });

  it("adds twenty distinct complete markets and current reference currencies", () => {
    expect(Object.keys(newMarketEditorial)).toHaveLength(20);
    for (const [slug, editorial] of Object.entries(newMarketEditorial)) {
      const market = getMarket(slug)!;
      expect(market).toBeDefined();
      expect(editorial.cv.join(" ").split(/\s+/).length).toBeGreaterThan(95);
      expect(editorial.sources.length).toBeGreaterThan(0);
      expect(editorial.keywords.length).toBeGreaterThanOrEqual(5);
      expect(marketRates[market.currency].rate).toBeGreaterThan(0);
    }
    expect(new Set(Object.values(newMarketEditorial).flatMap((item) => [...item.cv, ...item.linkedin, ...item.strategy])).size).toBe(140);
    expect(getMarket("en-bg")?.currency).toBe("EUR");
    expect(getMarket("en-jo")?.currency).toBe("JOD");
    expect(marketRates.JOD.roundTo).toBe(0.001);
    expect(marketRateDate).toBe("2026-09-10");
    expect(switchMarketPath("/en-uk/blog/top-10-cv-writers", getMarket("en-co")!)).toBe("/en-co/blog/top-10-cv-writers");
  });
});
