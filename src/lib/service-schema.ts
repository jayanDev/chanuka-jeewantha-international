import { getBaseUrl } from "@/lib/site-url";
import { featuredReviews, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/featured-reviews";

type ServiceSchemaInput = {
  /** Service name shown in the schema, e.g. "Federal Resume Writing Service" */
  name: string;
  /** Short description used by Google for the rich snippet */
  description: string;
  /** Canonical path of the page, e.g. "/resume-writer/federal" */
  path: string;
  /** Optional area the service is offered in (defaults to United States) */
  areaServed?: string;
  /** Optional explicit price range hint, e.g. "$179 - $1,499" */
  priceRange?: string;
};

/**
 * Build a Schema.org Service JSON-LD object with AggregateRating + reviews.
 *
 * Use on every commercial-intent page (home, industry pages, city pages,
 * comparison pages) so each one is eligible for Google star snippets.
 */
export function buildServiceSchema(input: ServiceSchemaInput) {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${input.path.startsWith("/") ? input.path : `/${input.path}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url,
    provider: {
      "@type": "Organization",
      name: "Chanuka Jeewantha",
      url: baseUrl,
    },
    areaServed: input.areaServed ?? "United States",
    ...(input.priceRange ? { offers: { "@type": "AggregateOffer", priceCurrency: "USD", priceRange: input.priceRange } } : {}),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(GOOGLE_RATING),
      reviewCount: String(GOOGLE_REVIEW_COUNT),
      bestRating: "5",
      worstRating: "1",
    },
    review: featuredReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
      reviewBody: r.quote,
    })),
  };
}
