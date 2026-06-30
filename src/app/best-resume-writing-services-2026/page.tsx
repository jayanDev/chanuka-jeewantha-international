import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "Best Resume Writing Services in the US (2026 Comparison)";
const DESCRIPTION =
  "Honest 2026 comparison of US resume writing services. Pricing, quality signals, and what to watch out for. Includes Chanuka Jeewantha, TopResume, and others.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/best-resume-writing-services-2026",
  }),
  title: { absolute: TITLE },
};

const FAQS = [
  {
    q: "What's the best resume writing service in the US right now?",
    a: "There isn't a single best - it depends on your seniority, industry, and budget. The honest filter is three questions: (1) Who actually writes the document? (2) What guarantees back the work? (3) Is the price aligned with what you're competing for? Anyone who can answer all three clearly is a serious option.",
  },
  {
    q: "Why are TopResume reviews so mixed?",
    a: "TopResume runs a high-volume operation with many subcontracted writers. Quality varies wildly between assignments. Some clients get strong senior writers; others get junior writers. The price point doesn't tell you which you'll get.",
  },
  {
    q: "How do I know if a service is legitimate?",
    a: "Three signals. (1) The website tells you who the writers are - by name, with credentials. (2) There's a money-back guarantee with clear terms. (3) Sample work is available or recent client testimonials are verifiable. If a service hides all three, walk away.",
  },
  {
    q: "What's the cheapest legitimate service?",
    a: "Below $150 you're almost certainly getting a template fill or a junior subcontractor. The cheapest tier where you can reasonably expect senior writing is $179-$250. We start at $179.",
  },
  {
    q: "Does the 90-day interview guarantee really pay out?",
    a: "Yes. Every package we deliver is backed by a 100% money-back guarantee if you don't receive interview calls in 90 days. Full terms - including the requirement to actually apply to 20+ relevant roles - are on the refund policy page.",
  },
];

const SERVICES = [
  {
    rank: 1,
    name: "Chanuka Jeewantha (this site)",
    rating: "5.0/5",
    priceRange: "$179 - $1,499",
    strengths: ["Founder-led - every document personally written, no outsourcing", "90-day interview guarantee on every package", "Industry, city, and career-stage-specific pages with deep content", "40,000+ LinkedIn followers - verifiable public track record"],
    weaknesses: ["7-14 day turnaround (not instant)"],
    badge: "Recommended",
    href: "/pricing",
  },
  {
    rank: 2,
    name: "TopResume",
    rating: "Mixed reviews",
    priceRange: "$149 - $699",
    strengths: ["High volume - easy to find", "Free resume review tool", "Multiple package tiers"],
    weaknesses: ["Heavily subcontracted - quality varies by writer", "No interview guarantee", "Hard to know who is writing your document"],
    href: null,
  },
  {
    rank: 3,
    name: "ResumeWriters.com",
    rating: "Mixed reviews",
    priceRange: "$170 - $700",
    strengths: ["Longer track record", "Multiple price tiers", "Some industry specialization claims"],
    weaknesses: ["Similar quality-variance issues as other high-volume providers", "Limited guarantees", "Generic industry expertise claims hard to verify"],
    href: null,
  },
  {
    rank: 4,
    name: "LinkedIn ProFinder / freelance marketplaces",
    rating: "Highly variable",
    priceRange: "$50 - $2,000+",
    strengths: ["Wide price range", "Can find specialists for niche industries", "Direct relationship with the writer"],
    weaknesses: ["No quality floor - anyone can list", "No platform-level guarantees", "You have to vet each writer yourself"],
    href: null,
  },
  {
    rank: 5,
    name: "Boutique executive firms",
    rating: "Generally strong",
    priceRange: "$1,500 - $5,000+",
    strengths: ["Senior writers", "Executive focus", "More customized engagement"],
    weaknesses: ["Often paying for brand/overhead, not better writing", "Above $3,500 the price-to-quality curve flattens", "Slower delivery"],
    href: null,
  },
];

export default function BestResumeServicesPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Best Resume Writing Services 2026", path: "/best-resume-writing-services-2026" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "Best Resume Writing Services in the US (2026)",
    description: DESCRIPTION,
    path: "/best-resume-writing-services-2026",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <ComparisonPageLayout
        breadcrumbLabel="Best Services 2026"
        eyebrow="Comparison · Updated 2026"
        h1={<>Best Resume Writing Services in the <span className="text-[#C9A961]">United States</span></>}
        intro="A short, honest comparison of the resume-writing landscape in 2026. We rank Chanuka Jeewantha first - for transparent reasons. The other services are described honestly so you can decide what fits."
      >
        {/* Disclosure */}
        <section className="w-full bg-[#FAF8F3] py-8 border-b border-zinc-200/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <p className="text-xs text-zinc-500 leading-relaxed">
              <span className="font-semibold text-zinc-700">Disclosure:</span> This is a comparison page on our own website. We&apos;re biased in our own favor - that&apos;s honest. We&apos;ve written about the other services factually and without inventing weaknesses. If you spot anything inaccurate, email us and we&apos;ll correct it.
            </p>
          </div>
        </section>

        {/* Ranked list */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">The list</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              Five services compared honestly.
            </h2>

            <div className="mt-10 space-y-6">
              {SERVICES.map((s) => (
                <article
                  key={s.rank}
                  className={`relative rounded-[18px] border p-7 ${
                    s.badge
                      ? "border-2 border-[#C9A961] bg-gradient-to-br from-[#FFFCF3] to-white shadow-[0_20px_50px_rgba(201,169,97,0.18)]"
                      : "border-zinc-200/80 bg-white"
                  }`}
                >
                  {s.badge ? (
                    <span className="absolute -top-3 left-7 rounded-full bg-[#C9A961] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0A2540] shadow-sm">
                      {s.badge}
                    </span>
                  ) : null}
                  <div className="flex items-start gap-4">
                    <span className={`inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-heading text-xl font-bold ${
                      s.rank === 1 ? "bg-[#C9A961] text-[#0A2540]" : "bg-zinc-100 text-[#0A2540]"
                    }`}>
                      {s.rank}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-3">
                        <h3 className="font-heading text-[22px] font-bold leading-tight text-[#0A2540]">{s.name}</h3>
                        <div className="text-sm">
                          <span className="font-semibold text-[#8C6D30]">{s.rating}</span>
                          <span className="text-zinc-400"> · </span>
                          <span className="text-zinc-600">{s.priceRange}</span>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">Strengths</p>
                          <ul className="mt-2 space-y-1.5">
                            {s.strengths.map((str) => (
                              <li key={str} className="flex items-start gap-2 text-sm text-zinc-700">
                                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                <span>{str}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-rose-700">Limitations</p>
                          <ul className="mt-2 space-y-1.5">
                            {s.weaknesses.map((wk) => (
                              <li key={wk} className="flex items-start gap-2 text-sm text-zinc-700">
                                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                <span>{wk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {s.href ? (
                        <Link
                          href={s.href}
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6D30] hover:text-[#C9A961]"
                        >
                          See our packages →
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How to choose */}
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">How to choose</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              Three questions that tell you the truth.
            </h2>
            <ol className="mt-8 space-y-4 text-left">
              {[
                "Who actually writes the document? A name and credentials, or a black box?",
                "What's the guarantee? Specific terms, or vague language?",
                "Does the price match the role you're competing for? A $5,000 service for a $90K role is overkill; a $79 service for a $250K role is naive.",
              ].map((q, i) => (
                <li key={q} className="flex items-start gap-4 rounded-[14px] bg-white border border-zinc-200/80 p-5">
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C9A961] text-sm font-bold text-[#0A2540]">{i + 1}</span>
                  <p className="text-zinc-700 leading-relaxed">{q}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">FAQ</span>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
                Common questions on choosing a service.
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {FAQS.map((faq, i) => (
                <details key={i} className="group rounded-[14px] border border-zinc-200/80 bg-[#FAF8F3] p-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer font-heading text-base font-bold text-[#0A2540] sm:text-lg select-none">
                    {faq.q}
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[#8C6D30] transition-colors group-open:bg-[#C9A961] group-open:text-[#0A2540]">
                      <svg className="h-4 w-4 transition-transform group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 border-t border-zinc-200/60 pt-3">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <RelatedPages
          heading="Other buying-decision guides"
          pages={[
            { title: "Resume Writer Cost in 2026", href: "/resume-writer-cost", blurb: "Pricing tiers explained, with what to avoid." },
            { title: "Is a Resume Writer Worth It?", href: "/is-a-resume-writer-worth-it", blurb: "Three situations where the math is clear." },
            { title: "Resume Writer vs ChatGPT", href: "/resume-writer-vs-chatgpt", blurb: "When AI is enough and when it isn't." },
          ]}
        />

        <PageCTA
          heading="Already decided?"
          subheading="See our five packages from $179 to $1,499 - each backed by the 90-day interview guarantee."
          primaryLabel="See All Packages"
          primaryHref="/pricing"
          secondaryLabel="Request a Profile Review"
          secondaryHref="/contact"
        />
      </ComparisonPageLayout>
    </>
  );
}
