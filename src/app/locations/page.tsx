import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import { cityPages } from "@/lib/city-resume-pages";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Resume Writer Locations Across the United States",
    description:
      "Premium resume writing service for US professionals — 15 major metros covered. Federal, executive, tech, finance, healthcare, and more.",
    path: "/locations",
  }),
  title: { absolute: "Resume Writer Locations Across the United States" },
};

// Group cities by region for the index page
const REGIONS = [
  {
    name: "Northeast",
    slugs: ["new-york", "boston", "philadelphia", "washington-dc"],
  },
  {
    name: "West",
    slugs: ["san-francisco", "los-angeles", "seattle", "san-diego", "denver"],
  },
  {
    name: "South",
    slugs: ["houston", "dallas", "austin", "atlanta", "miami"],
  },
  {
    name: "Midwest",
    slugs: ["chicago"],
  },
];

export default function LocationsIndexPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
  ]);

  const serviceLd = buildServiceSchema({
    name: "US Resume Writing Service — All Cities",
    description: "Premium resume writing service available across 15 major US metros, with city-specific hiring intelligence.",
    path: "/locations",
    priceRange: "$179 - $1,499",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      {/* Hero */}
      <section className="w-full bg-[#0A2540] text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.08),transparent_50%)] pointer-events-none" />
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 relative z-10 text-center">
          <nav className="mb-6 flex justify-center items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C9A961]">Locations</span>
          </nav>

          <h1 className="font-heading text-[36px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[60px] tracking-tight">
            Resume Writing Across the <span className="text-[#C9A961]">United States</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl font-light">
            The service is fully remote — used by professionals in every major US metro. Pick the city closest to your target market to see how local hiring works.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#E0C882] hover:from-[#E0C882] hover:to-[#C9A961] text-[#0A2540] font-bold text-base px-7 py-3.5 rounded-[10px] shadow-[0_4px_20px_rgba(201,169,97,0.3)] transition-all"
            >
              Request a Profile Review
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-white/30 px-7 py-3.5 rounded-[10px] text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* City grid grouped by region */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">By region</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            15 major US metros covered.
          </h2>

          <div className="mt-12 space-y-12">
            {REGIONS.map((region) => {
              const regionCities = region.slugs
                .map((s) => cityPages.find((c) => c.slug === s))
                .filter((c): c is NonNullable<typeof c> => Boolean(c));
              if (regionCities.length === 0) return null;
              return (
                <div key={region.name}>
                  <div className="flex items-baseline gap-3 border-b border-zinc-200 pb-3">
                    <h3 className="font-heading text-[22px] font-bold text-[#0A2540] sm:text-[26px]">{region.name}</h3>
                    <span className="text-sm text-zinc-500">{regionCities.length} {regionCities.length === 1 ? "city" : "cities"}</span>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {regionCities.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/locations/${c.slug}`}
                        className="group flex h-full flex-col rounded-[16px] border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9A961]/60 hover:shadow-md"
                      >
                        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#8C6D30]">
                          {c.shortName}, {c.stateAbbr}
                        </span>
                        <h4 className="mt-3 font-heading text-[20px] font-bold text-[#0A2540] group-hover:text-[#8C6D30]">
                          Resume Writer in {c.city}
                        </h4>
                        <p className="mt-3 flex-grow text-sm leading-relaxed text-zinc-600">
                          {c.localContext}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C6D30] group-hover:text-[#C9A961]">
                          Read more
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Note for cities not listed */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Don&apos;t see your city?</span>
          <h2 className="mt-3 font-heading text-[26px] font-bold leading-tight text-[#0A2540] sm:text-[34px]">
            We serve clients in every US metro.
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            These 15 cities have dedicated pages because they have the largest concentration of senior hiring activity. We work with clients in every US state remotely — submit a profile review and your engagement is structured around your target market, not where you live.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center bg-[#0A2540] text-white px-7 py-3.5 rounded-[10px] text-sm font-bold transition-colors hover:bg-[#C9A961] hover:text-[#0A2540]"
          >
            Request a Profile Review
          </Link>
        </div>
      </section>

      <PageCTA
        heading="Ready to engage in your city?"
        subheading="The service is fully remote — fast turnaround, US-tuned writing, 90-day interview guarantee."
      />
    </>
  );
}
