import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "Resume Writer Cost: How Much to Pay in 2026 (US Guide)";
const DESCRIPTION =
  "What a US resume writer actually costs in 2026 - pricing tiers, what each tier includes, and how to spot underpriced and overpriced services.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/resume-writer-cost",
  }),
  title: { absolute: TITLE },
};

const FAQS = [
  {
    q: "What's the average cost of a professional resume writer in the US?",
    a: "Mid-market is $300-$600 for a mid-career resume + LinkedIn rewrite. Entry-level packages start around $150-$250. Executive resumes run $700-$1,500. C-suite engagements typically $1,500-$3,500+. Below $100 is almost always a template or junior outsourced writer; above $3,500 is usually a boutique firm with overhead, not necessarily better writing.",
  },
  {
    q: "Is a more expensive resume writer always better?",
    a: "No. Above a certain price point, you're paying for brand, overhead, and account managers rather than better writing. What matters is whether your writer has actually written for your seniority and industry - and whether they back the work with a guarantee.",
  },
  {
    q: "Why do prices vary so much?",
    a: "Three reasons. First, who actually writes the document - a senior founder vs a junior subcontractor. Second, how much customization is involved - template fills are cheap, real research-led writing is not. Third, what's bundled - a $150 standalone resume is not comparable to a $349 bundle that includes the resume, LinkedIn, and cover letter.",
  },
  {
    q: "What should I avoid?",
    a: "Avoid any service that promises a fast template fill for under $100, any service that won't tell you who is actually writing the document, and any service with no money-back guarantee. The interview-guarantee question is the cleanest filter - services that won't stand behind their work usually have a reason.",
  },
  {
    q: "Do I really need to spend $500+ for a mid-career resume?",
    a: "Not always. If you have one specific job in mind and a strong existing resume, a $179-$349 package is enough. If you're competing at the senior end of the market or for very specific roles (FAANG, federal, top-tier banking), the $500+ tier is justified - the difference is meaningful.",
  },
];

export default function ResumeWriterCostPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Resume Writer Cost", path: "/resume-writer-cost" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "US Resume Writing Service - Cost Guide",
    description: DESCRIPTION,
    path: "/resume-writer-cost",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <ComparisonPageLayout
        breadcrumbLabel="Resume Writer Cost"
        eyebrow="Buying guide · 2026"
        h1={<>How Much Does a <span className="text-[#C9A961]">US Resume Writer Cost?</span></>}
        intro="The short answer: between $150 and $3,500 depending on seniority and what's bundled. The longer answer is below, including which tier you actually need and what to avoid."
      >
        {/* Price tier table */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Pricing tiers in 2026</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              Five common tiers, plotted honestly.
            </h2>

            <div className="mt-10 overflow-hidden rounded-[18px] border border-zinc-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0A2540] text-white">
                  <tr>
                    <th className="px-5 py-4 font-bold">Tier</th>
                    <th className="px-5 py-4 font-bold">Typical price</th>
                    <th className="px-5 py-4 font-bold">What you get</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  <tr className="bg-white">
                    <td className="px-5 py-4 font-bold text-[#0A2540]">Template / DIY</td>
                    <td className="px-5 py-4 text-zinc-700">$0 - $50</td>
                    <td className="px-5 py-4 text-zinc-600">A template, possibly with light feedback. Best for very early career or extremely simple cases. Not enough for competitive US hiring.</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="px-5 py-4 font-bold text-[#0A2540]">Outsourced bulk service</td>
                    <td className="px-5 py-4 text-zinc-700">$80 - $200</td>
                    <td className="px-5 py-4 text-zinc-600">Junior writer (often subcontracted), 24-48h turnaround, light customization. Quality varies wildly.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-4 font-bold text-[#0A2540]">Mid-market bundle</td>
                    <td className="px-5 py-4 text-zinc-700">$250 - $600</td>
                    <td className="px-5 py-4 text-zinc-600">Resume + LinkedIn + cover letter. Senior writer, real customization, revisions included. Best price-to-value tier for mid-career US candidates.</td>
                  </tr>
                  <tr className="bg-zinc-50">
                    <td className="px-5 py-4 font-bold text-[#0A2540]">Executive tier</td>
                    <td className="px-5 py-4 text-zinc-700">$700 - $1,500</td>
                    <td className="px-5 py-4 text-zinc-600">Senior-level positioning, executive LinkedIn, strategy call, longer support window. Right tier for Director / VP / SVP candidates.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-4 font-bold text-[#0A2540]">C-suite / Boutique</td>
                    <td className="px-5 py-4 text-zinc-700">$1,500 - $3,500+</td>
                    <td className="px-5 py-4 text-zinc-600">CEO / CFO / founder-level work. Multiple documents (resume, board bio, executive bio). Above $3,500 is usually agency overhead, not better writing.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Where we sit */}
            <div className="mt-12 rounded-[18px] border-2 border-[#C9A961] bg-gradient-to-br from-[#FFFCF3] to-white p-7">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#8C6D30]">Our pricing</span>
              <h3 className="mt-3 font-heading text-[22px] font-bold leading-tight text-[#0A2540] sm:text-[28px]">
                $179 to $1,499, founder-led, with a 90-day interview guarantee.
              </h3>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                Five bundles covering graduate through C-suite. Every package is personally written by the founder - no outsourcing - and backed by a 90-day, 100% money-back guarantee if you don&apos;t receive interview calls.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/pricing" className="inline-flex items-center justify-center bg-[#0A2540] text-white px-5 py-2.5 rounded-[10px] text-sm font-bold transition-colors hover:bg-[#C9A961] hover:text-[#0A2540]">
                  See All Packages
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center border border-[#0A2540] text-[#0A2540] px-5 py-2.5 rounded-[10px] text-sm font-bold transition-colors hover:bg-[#0A2540] hover:text-white">
                  Request a Profile Review
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What drives the price */}
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">What drives the price</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              Three things, not five.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  title: "1. Who actually writes the document",
                  body: "A founder or senior writer charges more - but you get the seniority. A bulk service charges less because the writer is junior or outsourced. Always ask who is writing.",
                },
                {
                  title: "2. How much customization is included",
                  body: "A template fill is cheap. Research, role-targeting, achievement extraction, and rewriting in your voice take real time and cost real money.",
                },
                {
                  title: "3. What's actually bundled",
                  body: "A $179 standalone resume is not the same product as a $349 bundle with resume + LinkedIn + cover letter + 30-day support. Compare like for like.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[16px] bg-white p-6 border border-zinc-200/80">
                  <h3 className="font-heading text-base font-bold text-[#0A2540]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">FAQ</span>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
                Common questions on price.
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
            { title: "Is a Resume Writer Worth It?", href: "/is-a-resume-writer-worth-it", blurb: "Honest answer on when it's worth paying - and when it isn't." },
            { title: "Resume Writer vs ChatGPT", href: "/resume-writer-vs-chatgpt", blurb: "When AI is enough and when it isn't." },
            { title: "Best Resume Writing Services 2026", href: "/best-resume-writing-services-2026", blurb: "How we compare to TopResume, ResumeWriters, and others." },
          ]}
        />

        <PageCTA
          heading="Ready to invest in the right tier?"
          subheading="See all five packages from $179 to $1,499 - every one backed by the 90-day interview guarantee."
          primaryLabel="See All Packages"
          primaryHref="/pricing"
          secondaryLabel="Request a Profile Review"
          secondaryHref="/contact"
        />
      </ComparisonPageLayout>
    </>
  );
}
