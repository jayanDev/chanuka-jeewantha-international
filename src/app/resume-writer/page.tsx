import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import { industryPages } from "@/lib/industry-resume-pages";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Resume Writer for Every US Industry — Federal, Tech, Finance, Healthcare",
    description:
      "Industry-specific resume writing for US professionals. Federal, executive, software engineering, healthcare, finance, military transition, marketing, sales, MBA.",
    path: "/resume-writer",
  }),
  title: { absolute: "Resume Writer for Every US Industry — Federal, Tech, Finance, Healthcare" },
};

export default function ResumeWriterHubPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Resume Writer", path: "/resume-writer" },
  ]);

  const serviceLd = buildServiceSchema({
    name: "US Resume Writing Service",
    description: "Industry-specific resume writing for US professionals across federal, tech, finance, healthcare, executive, military, marketing, sales, and MBA tracks.",
    path: "/resume-writer",
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
            <span className="text-[#C9A961]">Resume Writer</span>
          </nav>

          <h1 className="font-heading text-[36px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[60px] tracking-tight">
            Resume Writer for <span className="text-[#C9A961]">Every US Industry</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl font-light">
            Choose your industry to see how we write for it — federal, executive, tech, healthcare, finance, military transition, marketing, sales, MBA. Each page covers what we do, what&apos;s included, and the right package for your situation.
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

      {/* Industry grid */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">By industry</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Pick the page that fits your search.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industryPages.map((page) => (
              <Link
                key={page.slug}
                href={`/resume-writer/${page.slug}`}
                className="group flex h-full flex-col rounded-[16px] border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9A961]/60 hover:shadow-md"
              >
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#8C6D30]">
                  USD {page.priceRange.split(" - ")[0]}+
                </span>
                <h3 className="mt-3 font-heading text-[20px] font-bold text-[#0A2540] group-hover:text-[#8C6D30]">
                  {page.h1}
                </h3>
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
        heading="Not sure which industry page fits you?"
        subheading="Submit your current resume and target role. You'll get a personal recommendation in 1 business day."
      />
    </>
  );
}
