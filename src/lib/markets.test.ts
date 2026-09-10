import { describe, expect, it } from "vitest";
import { marketEditorial } from "@/content/market-editorial";
import { additionalMarketEditorial } from "@/content/additional-market-editorial";
import { getMarketArticles, getMarketContentDate } from "@/lib/market-articles";
import { articleTopics, getMarket, marketAlternates, marketFromPath, marketPath, markets, marketSections, switchMarketPath } from "@/lib/markets";
import { marketAmount, marketBundles, marketEnquiryLink, marketPrice, marketServices } from "@/lib/market-pricing";
import { buildMarketMetadata, marketPageSchema, marketSitemapEntries } from "@/lib/market-seo";

describe("country website integrity", () => {
  it("defines 70 markets with unique valid regional codes", () => {
    expect(markets).toHaveLength(70);
    expect(new Set(markets.map((market) => market.slug)).size).toBe(70);
    expect(new Set(markets.map((market) => market.locale)).size).toBe(70);
    expect(Object.keys(additionalMarketEditorial)).toHaveLength(30);
    expect(getMarket("en-uk")?.locale).toBe("en-GB");
    expect(getMarket("en-gb")).toBeUndefined();
    expect(marketFromPath("/en-uk-invalid/blog")).toBeUndefined();
    expect(marketFromPath("/blog/en-uk")).toBeUndefined();
  });

  it.each(markets)("has complete content, services, articles and metadata for $label", (market) => {
    const editorial = marketEditorial[market.slug];
    expect(editorial.cv).toHaveLength(3);
    expect(editorial.sources.length).toBeGreaterThan(0);
    const articles = getMarketArticles(market);
    expect(articles.map((article) => article.slug)).toEqual([...articleTopics]);
    for (const article of articles) {
      const words = article.sections.flatMap((section) => section.paragraphs ?? []).join(" ").split(/\s+/);
      if (article.slug !== "top-10-cv-writers") expect(words.length).toBeGreaterThan(250);
      const metadata = buildMarketMetadata(market, "blog", article);
      expect(metadata.alternates?.canonical).toBe(marketPath(market, `blog/${article.slug}`));
      expect(new Map(Object.entries(metadata.alternates?.languages ?? {})).get(market.locale)).toBe(marketPath(market, `blog/${article.slug}`));
    }
    const services = marketServices(market);
    expect(services).toHaveLength(6);
    expect(services.find((service) => service.key === "consultation")?.prices).toHaveLength(7);
    expect(services.find((service) => service.key === "graphical-cv")?.prices).toHaveLength(5);
    expect(services.find((service) => service.key === "ats-cv")?.prices.map((price) => price.usd)).toEqual([89,129,189,279,449,749]);
    for (const service of services) for (const price of service.prices) {
      expect(marketAmount(price.usd, market)).toBeGreaterThan(0);
      expect(marketPrice(price.usd, market)).toContain(market.currency);
    }
    for (const section of marketSections) {
      const metadata = buildMarketMetadata(market, section);
      expect(metadata.alternates?.canonical).toBe(marketPath(market, section));
      expect(new Map(Object.entries(metadata.alternates?.languages ?? {})).get(market.locale)).toBe(marketPath(market, section));
    }
    expect(new Set(marketSections.map((section) => buildMarketMetadata(market, section).description)).size).toBe(marketSections.length);
  });

  it("keeps country content distinct and all 700 URLs discoverable", () => {
    expect(new Set(Object.values(marketEditorial).map((item) => item.intro)).size).toBe(70);
    expect(new Set(markets.flatMap(getMarketArticles).map((article) => article.title)).size).toBe(280);
    const entries = marketSitemapEntries();
    expect(entries).toHaveLength(700);
    expect(new Set(entries.map((entry) => entry.url)).size).toBe(700);
    const urls = new Set(entries.map((entry) => entry.url));
    for (const entry of entries) for (const [locale, url] of Object.entries(entry.alternates?.languages ?? {})) {
      if (locale !== "x-default") expect(typeof url === "string" && urls.has(url)).toBe(true);
    }
  });

  it("preserves equivalent subpages and articles when switching country", () => {
    const target = getMarket("en-au")!;
    expect(switchMarketPath("/en-uk/catalogue", target)).toBe("/en-au/catalogue");
    expect(switchMarketPath("/en-uk/blog/cv-guide", target)).toBe("/en-au/blog/cv-guide");
    expect(switchMarketPath("/en-uk/not-real", target)).toBe("/en-au");
    expect(switchMarketPath("/admin", target)).toBe("/en-au");
    expect(marketAlternates("services")["en-GB"]).toBe("/en-uk/services");
  });

  it("uses the approved bundle prices and retains enquiry selection", () => {
    expect(marketBundles.map((bundle) => bundle.usd)).toEqual([179,349,499,899,1499]);
    const market = getMarket("en-uk")!;
    const url = new URL(marketEnquiryLink(market, "International Career Pack"), "https://example.com");
    expect(url.pathname).toBe("/en-uk/contact");
    expect(url.searchParams.get("package")).toBe("International Career Pack");
    expect(marketPrice(189, getMarket("en-us")!)).toContain("189");
    expect(marketPrice(189, getMarket("en-om")!)).toMatch(/72\.670/);
    expect(marketPrice(189, getMarket("en-kw")!)).toMatch(/58\.204/);
    expect(marketPrice(189, getMarket("en-bh")!)).toMatch(/71\.064/);
    expect(marketAmount(189, getMarket("en-jp")!)).toBe(29000);
    expect(marketAmount(189, getMarket("en-kr")!)).toBe(253000);
    expect(() => marketAmount(NaN, market)).toThrow();
  });

  it("uses substantive distinct expansion content and preserves original publication dates", () => {
    const records = Object.values(additionalMarketEditorial);
    const entries = marketSitemapEntries();
    for (const field of ["focus", "example", "question"] as const) expect(new Set(records.map((item) => item[field])).size).toBe(30);
    expect(new Set(records.flatMap((item) => [...item.cv, ...item.linkedin, ...item.strategy])).size).toBe(210);
    for (const [slug, item] of Object.entries(additionalMarketEditorial)) {
      const market = getMarket(slug)!;
      expect(market).toBeDefined();
      expect(item.cv.join(" ").split(/\s+/).length).toBeGreaterThan(95);
      expect(item.keywords.length).toBeGreaterThanOrEqual(5);
      expect(item.intro).toContain(market.label);
      expect(getMarketContentDate(market)).toBe("2026-09-10");
      const schema = marketPageSchema(market, "blog", getMarketArticles(market)[0]);
      expect(schema["@graph"].find((node) => node["@type"] === "BlogPosting")).toMatchObject({ datePublished: "2026-09-10T00:00:00+00:00" });
      expect(entries.find((entry) => entry.url.endsWith(`/${slug}`))?.lastModified).toEqual(new Date("2026-09-10T00:00:00Z"));
    }
    expect(getMarketContentDate(getMarket("en-uk")!)).toBe("2026-09-09");
  });
});
