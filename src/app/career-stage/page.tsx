import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import { careerStagePages } from "@/lib/career-stage-pages";
import PageCTA from "@/components/PageCTA";
import Price from "@/components/Price";
import { parseUsd } from "@/lib/currency";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Resume Writer by Career Stage - Entry, Mid, Executive, Pivots",
    description:
      "Resume writing matched to your career stage. Entry-level, mid-career, executive, and career changer engagements - each with stage-specific positioning.",
    path: "/career-stage",
  }),
  title: { absolute: "Resume Writer by Career Stage - Entry, Mid, Executive, Pivots" },
};

export default function CareerStageHubPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Career Stage", path: "/career-stage" },
  ]);

  const serviceLd = buildServiceSchema({
    name: "Resume Writing by Career Stage",
    description: "Stage-specific resume writing for entry-level, mid-career, executive, and career-change candidates in the US.",
    path: "/career-stage",
    priceRange: "$179 - $1,499",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <section className="w-full bg-[#0A2540] text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.08),transparent_50%)] pointer-events-none" />
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 relative z-10 text-center">
          <nav className="mb-6 flex justify-center items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C9A961]">Career Stage</span>
          </nav>

          <h1 className="font-heading text-[36px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[60px] tracking-tight">
            Resume Writing by <span className="text-[#C9A961]">Career Stage</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl font-light">
            A graduate&apos;s resume doesn&apos;t read like a VP&apos;s, and a VP&apos;s shouldn&apos;t read like a graduate&apos;s. Pick your stage to see how we write for it.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {careerStagePages.map((page) => (
              <Link
                key={page.slug}
                href={`/career-stage/${page.slug}`}
                className="group flex h-full flex-col rounded-[18px] border border-zinc-200/80 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9A961]/60 hover:shadow-md"
              >
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#8C6D30]">
                  Recommended: {page.recommendedPackage.name} · <Price usd={parseUsd(page.recommendedPackage.price)} />
                </span>
                <h2 className="mt-3 font-heading text-[24px] font-bold text-[#0A2540] group-hover:text-[#8C6D30]">
                  {page.h1}
                </h2>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-zinc-600">
                  {page.intro}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C6D30] group-hover:text-[#C9A961]">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        heading="Not sure which career-stage page fits?"
        subheading="Submit your current resume and target role. You'll get a personal recommendation in 1 business day."
      />
    </>
  );
}
