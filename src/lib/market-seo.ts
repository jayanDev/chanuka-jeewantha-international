import type { Metadata, MetadataRoute } from "next";
import { marketEditorial } from "@/content/market-editorial";
import { getMarketArticles, getMarketContentDate, type MarketArticle } from "@/lib/market-articles";
import { marketAlternates, marketPath, markets, marketSections, type Market, type MarketSection } from "@/lib/markets";
import { buildPageMetadata } from "@/lib/seo";
import { getBaseUrl } from "@/lib/site-url";
import { getWriterEntries, writersGuideDescription } from "@/lib/cv-writers";

export function marketPageTitle(market: Market, section: MarketSection): string {
  const document = market.document === "CV" ? "CV" : "Resume";
  const titles: Record<MarketSection, string> = {
    "": `${market.label} ${document} Writing & LinkedIn Services`,
    about: `About Your ${market.label} ${document} Writer`,
    contact: `Enquire About ${market.label} Career Services`,
    blog: `${market.label} ${document}, LinkedIn & Career Guides`,
    catalogue: `${market.label} ${document} Packages & Prices in ${market.currency}`,
    services: `${document} Writing & Career Services for ${market.label}`,
  };
  return titles[section];
}

export function buildMarketMetadata(market: Market, section: MarketSection = "", article?: MarketArticle): Metadata {
  const path = article ? `blog/${article.slug}` : section;
  const title = article?.title ?? marketPageTitle(market, section);
  const descriptions: Record<MarketSection, string> = {
    "": `${marketEditorial[market.slug].focus} Discover personally crafted ${market.label} career branding by Chanuka Jeewantha.`,
    about: `Meet Chanuka Jeewantha, your founder-led ${market.label} ${market.document} writer. Personal profile reviews, English documents and remote career support.`,
    contact: `Request a personal review for ${market.label} opportunities. Share your current ${market.document}, target role and preferred package with Chanuka Jeewantha.`,
    blog: `Read ${market.label} ${market.document} guides, LinkedIn profile advice and career development articles with practical examples for your next application.`,
    catalogue: `Compare ${market.label} ${market.document} writing and LinkedIn packages with ${market.currency} prices. Explore the International Signature Series and five premium bundles.`,
    services: `Explore ${market.label} ${market.document} writing, LinkedIn ${market.optimisation}, cover letters and career consultation with ${market.currency} estimates.`,
  };
  const description = article?.description ?? descriptions[section];
  return {
    ...buildPageMetadata({
      title, description, path: marketPath(market, path),
      alternateLanguages: marketAlternates(path),
      ogLocale: market.locale.replace("-", "_"),
      keywords: marketEditorial[market.slug].keywords,
      type: article ? "article" : "website",
    }),
    title: { absolute: `${title} | Chanuka Jeewantha` },
    authors: [{ name: "Chanuka Jeewantha", url: marketPath(market, "about") }],
  };
}

export function marketPageSchema(market: Market, section: MarketSection = "", article?: MarketArticle) {
  const base = getBaseUrl();
  const suffix = article ? `blog/${article.slug}` : section;
  const url = `${base}${marketPath(market, suffix)}`;
  const title = article?.title ?? marketPageTitle(market, section);
  const breadcrumbs = [
    { name: market.label, url: `${base}${marketPath(market)}` },
    ...(article ? [{ name: "Blog", url: `${base}${marketPath(market, "blog")}` }] : []),
    ...(suffix ? [{ name: title, url }] : []),
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url, name: title,
        inLanguage: market.locale,
        isPartOf: { "@id": `${base}#website` },
        about: { "@type": "Country", name: market.name },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })),
      },
      ...(article ? [{
        "@type": "BlogPosting", "@id": `${url}#article`, headline: article.title,
        description: article.description, mainEntityOfPage: url, inLanguage: market.locale,
        datePublished: `${article.publishedAt ?? getMarketContentDate(market)}T00:00:00+00:00`, dateModified: `${article.publishedAt ?? getMarketContentDate(market)}T00:00:00+00:00`,
        author: { "@type": "Person", name: "Chanuka Jeewantha", url: `${base}${marketPath(market, "about")}` },
        publisher: { "@id": `${base}#organization` },
        image: `${base}/images/hero-chanuka.jpg`,
      }] : []),
      ...(article?.slug === "top-10-cv-writers" ? [{
        "@type": "ItemList", "@id": `${url}#shortlist`, name: article.title,
        description: writersGuideDescription, numberOfItems: 10,
        itemListElement: getWriterEntries(market).map((entry, index) => ({
          "@type": "ListItem", position: index + 1,
          item: { "@type": entry.kind === "Individual writer" ? "Person" : "Organization", name: entry.name, url: entry.featured ? `${base}${entry.website}` : entry.website, image: `${base}${entry.image.src}`, description: entry.experience },
        })),
      }] : []),
      ...(!article && ["", "services", "catalogue"].includes(section) ? [{
        "@type": "Service", "@id": `${base}${marketPath(market)}#service`,
        name: `${market.label} ${market.document} writing and career branding`,
        serviceType: ["Resume and CV writing", `LinkedIn ${market.optimisation}`, "Career strategy consultation"],
        provider: { "@id": `${base}#organization` }, areaServed: { "@type": "Country", name: market.name },
        availableChannel: { "@type": "ServiceChannel", serviceUrl: `${base}${marketPath(market, "contact")}`, availableLanguage: "English" },
      }] : []),
    ],
  };
}

export function marketSitemapEntries(): MetadataRoute.Sitemap {
  const base = getBaseUrl();
  return markets.flatMap((market) => [...marketSections, ...getMarketArticles(market).map((article) => `blog/${article.slug}`)].map((section) => ({
    url: `${base}${marketPath(market, section)}`,
    lastModified: new Date(`${["", "blog", "catalogue", "services", "contact", "blog/top-10-cv-writers"].includes(section) ? "2026-09-10" : getMarketContentDate(market)}T00:00:00Z`),
    changeFrequency: "monthly" as const, priority: section === "" ? 0.8 : 0.65,
    alternates: { languages: Object.fromEntries(Object.entries(marketAlternates(section)).map(([language, path]) => [language, `${base}${path}`])) },
  })));
}
