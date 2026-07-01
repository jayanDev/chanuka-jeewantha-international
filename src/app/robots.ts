import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/site-url";

const baseUrl = getBaseUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
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
          "/catalogue/",
          "/catalogue",
          "/tutorials/",
          "/tutorials",
        ],
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
