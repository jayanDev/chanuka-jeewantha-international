import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site-url";
import { markets, marketPath } from "@/lib/markets";

const baseUrl = getBaseUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // The sitemap lists individual URLs; these prefixes allow every country edition.
        allow: ["/", "/international", ...markets.map((market) => marketPath(market))],
        disallow: [
          "/api/",
          "/admin/",
          "/reviews-admin/",
          "/auth/",
          "/cart/",
          "/checkout/",
          "/orders/",
          "/notifications/",
          // /ebooks is intentionally NOT disallowed: it 301-redirects to
          // /resources, and Googlebot must be able to crawl it to process the
          // redirect and drop the old ebook URLs from the index.
        ],
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
