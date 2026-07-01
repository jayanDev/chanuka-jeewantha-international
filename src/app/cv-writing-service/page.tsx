import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import PageHero from "@/components/PageHero";
import Price from "@/components/Price";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "CV Writing Service | Professional CV Writing & Rewrite (US)";
const DESCRIPTION =
  "Professional CV writing, rewrite, and preparation service for US and global roles. Personally written, ATS-optimized, and tailored to your target market - with a 90-day interview guarantee.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/cv-writing-service",
    keywords: [
      "cv writing service",
      "cv rewrite service",
      "cv preparation services",
      "professional cv writing",
      "cv writing services",
      "resume rewrite service",
    ],
  }),
  title: { absolute: TITLE },
};

const options = [
  {
    title: "CV writing from scratch",
    body: "Starting fresh or your current CV isn't working? We build the whole document from your background up - structure, positioning, and achievement-based content tailored to your target roles.",
  },
  {
    title: "CV rewrite",
    body: "You have a CV, but it's not landing interviews. We rebuild it around ATS performance, recruiter readability, and quantified impact, keeping what works and fixing what doesn't.",
  },
  {
    title: "CV preparation for a specific market",
    body: "Applying in the US, UK, or another market? Formats and conventions differ. We prepare your CV to the norms of your target market so it reads as a serious local candidate.",
  },
];

const process = [
  { step: "Share your current CV and target roles", note: "A short profile review before any writing begins." },
  { step: "Strategy and positioning", note: "We map your background to what your target roles actually screen for." },
  { step: "Personal writing and ATS optimization", note: "Written personally - never outsourced or templated." },
  { step: "Review and refinement", note: "Revisions included per your package until it's right." },
];

const FAQS = [
  {
    q: "Is a CV the same as a resume?",
    a: "In the US, 'CV' and 'resume' usually mean the same short, targeted document for most jobs. A true academic CV (long, publication-focused) is only expected for academic, research, and some medical roles. This service covers both - we build the right document for your target roles and market.",
  },
  {
    q: "What's the difference between CV writing and a CV rewrite?",
    a: "CV writing builds the document from scratch, ideal if you're starting fresh or your current CV isn't usable. A CV rewrite rebuilds an existing CV - keeping the useful parts and fixing structure, positioning, and impact. Both are personally written.",
  },
  {
    q: "How long does CV writing take?",
    a: "Typical delivery is 7 to 14 days depending on the package and seniority, with revisions included. Faster turnaround can be requested during your enquiry.",
  },
  {
    q: "Do you also write the cover letter and LinkedIn?",
    a: "Yes. Most packages include a matching cover letter and a LinkedIn rewrite, so your CV, letter, and profile tell one consistent story. Bundles are usually better value than buying each separately.",
  },
];

export default function CvWritingServicePage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "CV Writing Service", path: "/cv-writing-service" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "CV Writing Service",
    description: DESCRIPTION,
    path: "/cv-writing-service",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <PageHero
        title={<>Professional CV Writing &amp; <span className="text-[#C9A961]">Rewrite Service</span></>}
        description="Whether you need a CV written from scratch, a rewrite that finally lands interviews, or preparation for a specific market - every CV is written personally, ATS-optimized, and tailored to your target roles."
        marqueeText="CV WRITING SERVICE"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "CV Writing Service" }]}
      >
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A961]/40 bg-[#C9A961]/10 px-3 py-1 font-semibold text-[#C9A961]">
            From <Price usd={179} />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/80">
            5.0 on Google · 69 reviews
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/80">
            90-day interview guarantee
          </span>
        </div>
      </PageHero>

      {/* Options */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Three ways we help</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Written from scratch, rewritten, or prepared for your market.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {options.map((o) => (
              <article key={o.title} className="rounded-[18px] border border-zinc-200/80 bg-[#FAF8F3] p-6">
                <h3 className="font-heading text-[19px] font-bold text-[#0A2540]">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">How it works</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            A simple, four-step process.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <article key={p.step} className="rounded-[16px] border border-zinc-200/80 bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A2540] font-heading text-base font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-heading text-[17px] font-bold leading-tight text-[#0A2540]">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.note}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-[10px] bg-[#C9A961] px-6 py-3 text-sm font-bold text-[#0A2540] transition-colors hover:bg-[#0A2540] hover:text-white">
              View CV packages &amp; pricing
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            CV writing FAQs
          </h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group rounded-[14px] border border-zinc-200/80 bg-[#FAF8F3] p-5 open:bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-start justify-between gap-4 font-heading text-base font-bold text-[#0A2540] sm:text-lg">
                  {faq.q}
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[#8C6D30] transition-colors group-open:bg-[#C9A961] group-open:text-[#0A2540]">
                    <svg className="h-4 w-4 transition-transform group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages
        pages={[
          { title: "Resume writing service", href: "/", blurb: "The US resume version of this service." },
          { title: "Resume & cover letter", href: "/resume-and-cover-letter", blurb: "Both documents, written together." },
          { title: "Resume examples", href: "/resume-examples", blurb: "What strong CVs and resumes look like." },
          { title: "Resume vs CV in the USA", href: "/blog/resume-vs-cv-usa", blurb: "Which one US employers expect." },
          { title: "Academic CV format", href: "/blog/academic-cv-format", blurb: "For faculty, research, and scientific roles." },
          { title: "Packages & pricing", href: "/pricing", blurb: "Compare packages in your local currency." },
        ]}
      />

      <PageCTA
        heading="Get a CV that finally lands interviews."
        subheading="Send your current CV and target roles for a personal review. Every package is backed by a 90-day interview guarantee."
      />
    </>
  );
}
