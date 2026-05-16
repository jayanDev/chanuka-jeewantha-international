import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import PricingClient from "./PricingClient";
import { getBaseUrl } from "@/lib/site-url";
import { packageProducts } from "@/lib/packages-catalog";

export const metadata: Metadata = buildPageMetadata({
  title: "International Resume Writing & LinkedIn Packages | Chanuka Jeewantha",
  description:
    "Premium international resume writing, ATS CV writing, LinkedIn optimization, cover letters, foreign job CVs, and executive career branding packages for global professionals.",
  path: "/pricing",
  keywords: [
    "international resume writing",
    "global CV writing",
    "ATS resume writing",
    "LinkedIn profile optimization",
    "executive resume writing",
    "foreign job CV",
    "country-specific CV",
    "UAE CV writing",
    "UK CV writing",
    "Canada resume writing",
    "Australia resume writing",
    "executive career branding",
    "C-suite resume writing",
  ],
});

export default function PricingPage() {
  const prices = packageProducts.map((p) => p.priceLkr).filter((p) => typeof p === "number" && !isNaN(p));
  const lowPrice = prices.length > 0 ? Math.min(...prices) : 0;
  const highPrice = prices.length > 0 ? Math.max(...prices) : 0;
  const offerCount = packageProducts.length;

  const aggregateOfferLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "International Resume and Career Branding Packages",
    description: "Premium international resume, CV, LinkedIn, cover letter, and career branding packages",
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
