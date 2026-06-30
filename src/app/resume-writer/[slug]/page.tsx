import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildNoIndexMetadata, buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import { industryPages, getIndustryPage, type IndustryPage } from "@/lib/industry-resume-pages";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";
import Price from "@/components/Price";
import PriceRange from "@/components/PriceRange";
import { parseUsd } from "@/lib/currency";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) {
    return buildNoIndexMetadata({
      title: "Page not found",
      description: "The requested page is not available.",
      path: `/resume-writer/${slug}`,
    });
  }
  return {
    ...buildPageMetadata({
      title: page.metaTitle,
      description: page.metaDescription,
      path: `/resume-writer/${slug}`,
    }),
    // Override template so the meta title shows exactly as written
    title: { absolute: page.metaTitle },
  };
}

function buildRelatedPages(page: IndustryPage) {
  const slugs = page.relatedSlugs ?? [];
  return slugs
    .map((s) => industryPages.find((p) => p.slug === s))
    .filter((p): p is IndustryPage => Boolean(p))
    .map((p) => ({
      title: `${p.h1} — Premium Service`,
      href: `/resume-writer/${p.slug}`,
      blurb: p.intro,
    }));
}

export default async function ResumeWriterIndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getIndustryPage(slug);
  if (!page) notFound();

  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Resume Writer", path: "/resume-writer" },
    { name: page.h1, path: `/resume-writer/${page.slug}` },
  ]);

  const serviceLd = buildServiceSchema({
    name: page.h1,
    description: page.metaDescription,
    path: `/resume-writer/${page.slug}`,
    priceRange: page.priceRange,
  });

  const faqLd = buildFaqPageSchema(
    page.faqs.map((f) => ({ question: f.q, answer: f.a }))
  );

  const related = buildRelatedPages(page);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="w-full bg-[#0A2540] text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.08),transparent_50%)] pointer-events-none" />

        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C9A961]">{page.h1}</span>
          </nav>

          <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#C9A961] to-transparent" />
          <h1 className="font-heading text-[36px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[60px] tracking-tight max-w-3xl">
            {page.h1} <span className="text-[#C9A961]">in the United States</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl font-light">
            {page.intro}
          </p>

          {/* Audience line */}
          <p className="mt-8 max-w-3xl text-sm text-white/70 border-l-2 border-[#C9A961]/40 pl-4">
            <span className="font-semibold text-white">Who this is for:</span> {page.audience}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#E0C882] hover:from-[#E0C882] hover:to-[#C9A961] text-[#0A2540] font-bold text-base px-7 py-3.5 rounded-[10px] shadow-[0_4px_20px_rgba(201,169,97,0.3)] transition-all"
            >
              Request a Profile Review
            </Link>
            <Link
              href={page.recommendedPackage.href}
              className="inline-flex items-center justify-center border border-white/30 px-7 py-3.5 rounded-[10px] text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              See Recommended Package
            </Link>
          </div>

          {/* Guarantee + price chips */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A961]/40 bg-[#C9A961]/10 px-3 py-1 text-[#C9A961] font-semibold">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
              90-Day Interview Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/80">
              <PriceRange range={page.priceRange} className="font-bold text-[#C9A961]" />
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/80">
              <svg className="h-3.5 w-3.5 text-[#C9A961]" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              5.0 on Google · 69 reviews
            </span>
          </div>
        </div>
      </section>

      {/* Problems section */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Why your resume isn&apos;t getting calls</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            What we see every week.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {page.problems.map((problem, i) => (
              <article key={i} className="flex items-start gap-4 rounded-[14px] border border-zinc-200/80 bg-[#FAF8F3] p-5">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#C9A961] text-xs font-bold text-[#0A2540]">{i + 1}</span>
                <p className="text-sm leading-relaxed text-zinc-700" dangerouslySetInnerHTML={{ __html: problem }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Our approach</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[40px]">
              {page.approachHeading}
            </h2>
          </div>
          <div className="space-y-5 text-zinc-700 leading-relaxed md:text-lg">
            {page.approachParagraphs.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">What you get</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[40px]">
              Included in this engagement.
            </h2>
            <ul className="mt-8 space-y-3.5">
              {page.whatsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-700">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#C9A961]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommended package card */}
          <article className="relative rounded-[20px] border-2 border-[#C9A961] bg-gradient-to-br from-[#FFFCF3] to-white p-7 shadow-[0_20px_50px_rgba(201,169,97,0.18)]">
            <span className="absolute -top-3 left-7 rounded-full bg-[#C9A961] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0A2540] shadow-sm">
              Recommended
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8C6D30]">Best Fit Package</span>
            <h3 className="mt-3 font-heading text-[24px] font-bold leading-tight text-[#0A2540]">
              {page.recommendedPackage.name}
            </h3>
            <p className="mt-5 font-heading text-[42px] font-bold leading-none text-[#0A2540]">
              <Price usd={parseUsd(page.recommendedPackage.price)} />
            </p>
            <p className="mt-5 text-sm leading-relaxed text-zinc-700">
              {page.recommendedPackage.blurb}
            </p>
            <Link
              href={page.recommendedPackage.href}
              className="mt-7 inline-flex w-full items-center justify-center rounded-[10px] bg-[#0A2540] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#C9A961] hover:text-[#0A2540]"
            >
              Choose This Package
            </Link>
            <Link
              href="/pricing"
              className="mt-3 block text-center text-xs font-semibold text-[#8C6D30] hover:text-[#C9A961]"
            >
              Compare all packages →
            </Link>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-t border-zinc-200/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">FAQ</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              Questions we get on {page.h1.toLowerCase().replace("resume writer", "resumes")}.
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {page.faqs.map((faq, i) => (
              <details key={i} className="group rounded-[14px] border border-zinc-200/80 bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-start justify-between gap-4 cursor-pointer font-heading text-base font-bold text-[#0A2540] sm:text-lg select-none">
                  {faq.q}
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[#8C6D30] transition-colors group-open:bg-[#C9A961] group-open:text-[#0A2540]">
                    <svg className="h-4 w-4 transition-transform group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 border-t border-zinc-100 pt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <RelatedPages
          heading="Other resume writing services"
          intro="Different industry or career stage? Explore the page that fits your search."
          pages={related}
        />
      ) : null}

      <PageCTA
        heading={`Ready to start your ${page.h1.toLowerCase()} engagement?`}
        subheading="Submit your current resume, target role, and target market. You'll receive a personal recommendation before any commitment."
      />
    </>
  );
}
