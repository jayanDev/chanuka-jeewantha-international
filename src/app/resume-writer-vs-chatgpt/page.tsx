import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "Resume Writer vs ChatGPT: Honest 2026 Comparison";
const DESCRIPTION =
  "Should you use ChatGPT to write your resume, or hire a professional? Honest US-focused comparison covering ATS detection, recruiter behavior, and when each one wins.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/resume-writer-vs-chatgpt",
  }),
  title: { absolute: TITLE },
};

const FAQS = [
  {
    q: "Can ATS systems detect AI-written resumes?",
    a: "Some yes, most not directly — but ATS systems are increasingly trained to flag low-information resumes that match the AI pattern (heavy buzzwords, weak metrics, generic structure). Recruiters absolutely can spot it. Senior recruiters see 50+ resumes a day and the AI pattern is recognizable to them.",
  },
  {
    q: "What does ChatGPT do well?",
    a: "Three things. (1) Polish — fixing grammar, tightening sentences. (2) First drafts — taking your raw experience notes and turning them into resume-shaped bullets. (3) Cover letter starting points. For all three, AI is a real productivity gain.",
  },
  {
    q: "What does ChatGPT do poorly?",
    a: "Five things. (1) Knowing what hiring managers at a specific company / level actually care about. (2) Cutting bullets that don't earn their place (AI bias is to keep everything). (3) Achieving the right tone for senior/executive positioning (AI defaults to overconfident generic). (4) Surfacing numbers and outcomes you actually have but didn't think to mention. (5) Holding a coherent positioning thesis across the whole document.",
  },
  {
    q: "If I just need a quick first draft, isn't ChatGPT enough?",
    a: "For entry-level and early-career? Often yes — combine ChatGPT with a strong template and you'll get something usable. For mid-career and above where positioning and judgment matter, you'll likely want a real writer involved before the final version goes out.",
  },
  {
    q: "Does the 90-day interview guarantee apply if I used AI tools too?",
    a: "Yes — the guarantee is on the documents we deliver. What you do alongside the engagement (AI tools, networking, applications) doesn't affect eligibility. You just need to actually apply to 20+ relevant roles using our documents in the 90-day window.",
  },
];

export default function VsChatGPTPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Resume Writer vs ChatGPT", path: "/resume-writer-vs-chatgpt" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "Professional Resume Writing vs AI Tools",
    description: DESCRIPTION,
    path: "/resume-writer-vs-chatgpt",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <ComparisonPageLayout
        breadcrumbLabel="Resume Writer vs ChatGPT"
        eyebrow="Comparison · 2026"
        h1={<>Professional Resume Writer vs <span className="text-[#C9A961]">ChatGPT</span></>}
        intro="ChatGPT genuinely changed what you can do for free. The honest comparison: AI is good for drafts and polish; it's weaker at positioning and senior judgment. Here's where each one wins."
      >
        {/* Side-by-side comparison */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Where each one wins</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              Side by side, honestly.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* ChatGPT */}
              <article className="rounded-[18px] border border-zinc-200/80 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 font-bold">AI</span>
                  <h3 className="font-heading text-[20px] font-bold text-[#0A2540]">ChatGPT</h3>
                </div>
                <p className="mt-3 text-sm font-semibold text-emerald-700 uppercase tracking-wide">Wins at</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {["Free", "First drafts", "Grammar polish", "Cover letter starting points", "Tightening individual sentences"].map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-semibold text-rose-700 uppercase tracking-wide">Loses at</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {["Knowing what specific hiring managers care about", "Cutting weak bullets (AI keeps everything)", "Senior / executive tone", "Surfacing outcomes you didn't think to mention", "Holding a coherent positioning across the document"].map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* Professional writer */}
              <article className="rounded-[18px] border-2 border-[#C9A961] bg-gradient-to-br from-[#FFFCF3] to-white p-6 shadow-[0_20px_50px_rgba(201,169,97,0.15)]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A961] text-[#0A2540] font-bold">CJ</span>
                  <h3 className="font-heading text-[20px] font-bold text-[#0A2540]">Founder-led writer</h3>
                </div>
                <p className="mt-3 text-sm font-semibold text-emerald-700 uppercase tracking-wide">Wins at</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {["Strategic positioning for the role you actually want", "Cutting bullets that don't earn their place", "Senior / executive tone calibration", "Surfacing outcomes you didn't think to mention", "Achievement bullets that sound like you, not a template", "Money-back interview guarantee"].map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm font-semibold text-rose-700 uppercase tracking-wide">Loses at</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                  {["Free", "Instant turnaround (7–14 day delivery)"].map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* When to use which */}
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Pick the right tool</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              When to use which.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="rounded-[16px] bg-white border border-zinc-200/80 p-6">
                <h3 className="font-heading text-base font-bold text-[#0A2540]">Use ChatGPT when…</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 list-disc pl-5">
                  <li>You&apos;re entry-level or 0–2 years experience</li>
                  <li>You already have a strong existing resume and need a polish</li>
                  <li>You want a fast first draft you&apos;ll then edit heavily</li>
                  <li>Budget is genuinely zero</li>
                </ul>
              </article>
              <article className="rounded-[16px] bg-white border border-zinc-200/80 p-6">
                <h3 className="font-heading text-base font-bold text-[#0A2540]">Hire a writer when…</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 list-disc pl-5">
                  <li>You&apos;re mid-career or more senior</li>
                  <li>You&apos;re changing industry, function, or seniority</li>
                  <li>You&apos;re targeting high-screening employers (FAANG, federal, MBB, IB, PE)</li>
                  <li>Your last six months of applications haven&apos;t produced interviews</li>
                  <li>The cost is small relative to the role you&apos;re competing for</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">FAQ</span>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
                Common questions about AI vs human writers.
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
            { title: "Resume Writer Cost in 2026", href: "/resume-writer-cost", blurb: "Pricing tiers and what to avoid." },
            { title: "Is a Resume Writer Worth It?", href: "/is-a-resume-writer-worth-it", blurb: "Three situations where it pays for itself." },
            { title: "Resume Writer vs Template", href: "/professional-resume-writer-vs-template", blurb: "When a $50 template is enough — and when it isn't." },
          ]}
        />

        <PageCTA
          heading="Want a writer who beats ChatGPT?"
          subheading="Every package is personally written and backed by the 90-day interview guarantee. ChatGPT doesn't offer that."
        />
      </ComparisonPageLayout>
    </>
  );
}
