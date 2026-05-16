import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildOfferCatalogSchema } from "@/lib/structured-data";
import { packageCategories } from "@/lib/packages-catalog";

export const metadata: Metadata = buildPageMetadata({
  title: "Resume Writing & LinkedIn Packages | Chanuka Jeewantha",
  description:
    "View premium USD-priced resume writing, ATS-optimized CV writing, LinkedIn optimization, cover letter, and executive career-branding packages.",
  path: "/pricing",
});

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ]);

  const offerCatalogLd = buildOfferCatalogSchema(
    packageCategories.map((category) => ({
      name: category.title,
      items: category.packages.map((item) => ({
        name: item.name,
        path: `/packages/${item.slug}`,
        priceLkr: item.priceLkr,
        description: item.description ?? item.audience,
      })),
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogLd) }}
      />
      {children}
    </>
  );
}
