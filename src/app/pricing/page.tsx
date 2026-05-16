import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import PricingClient from "./PricingClient";
import { getBaseUrl } from "@/lib/site-url";
import { packageProducts } from "@/lib/packages-catalog";

export const metadata: Metadata = buildPageMetadata({
  title: "Resume Writing & LinkedIn Packages | Chanuka Jeewantha",
  description:
    "Premium resume writing, ATS-optimized CVs, LinkedIn optimization, cover letters, and executive career-branding packages for senior professionals.",
  path: "/pricing",
});

export default function PricingPage() {
  const prices = packageProducts.map((p) => p.priceLkr).filter((p) => typeof p === "number" && !isNaN(p));
  const lowPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const highPrice = prices.length > 0 ? Math.max(...prices) : 0;
  const offerCount = packageProducts.length;

  const aggregateOfferLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Premium Resume and Career Branding Packages",
    description: "Premium resume, CV, LinkedIn, cover letter, and career-branding packages",
    provider: {
      "@type": "Person",
      name: "Chanuka Jeewantha",
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: offerCount,
      lowPrice: lowPrice,
      highPrice: highPrice,
      priceCurrency: "USD",
      url: `${getBaseUrl()}/pricing`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferLd) }}
      />
      <PricingClient />
    </>
  );
}
