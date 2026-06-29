import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "Is a Professional Resume Writer Worth It? Honest Answer (2026)";
const DESCRIPTION =
  "Is hiring a professional resume writer worth the money? Honest US-focused answer with the three situations where it pays for itself and the two where it doesn't.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/is-a-resume-writer-worth-it",
  }),
  title: { absolute: TITLE },
};

const FAQS = [
  {
    q: "What's the actual ROI of hiring a resume writer?",
    a: "For most US mid-career candidates, the ROI is faster offers and a higher offer ceiling. A resume that gets you to interviews two weeks earlier in a senior search effectively pays for itself many times over in earned compensation. For executives the numbers are larger.",
  },
  {
    q: "Can't I just use ChatGPT to write my resume?",
    a: "You can, and many people do. The honest limitation is that AI-written resumes follow a recognizable pattern that recruiters and ATS systems are increasingly trained to flag, and AI can't honestly judge what a hiring manager at a specific company at a specific seniority will care about. AI is a useful starting point. It's not a substitute for the strategic judgment of someone who's read 1,000+ resumes for the role you're competing for.",
  },
  {
    q: "When is hiring a resume writer NOT worth it?",
    a: "Two cases. First, when you already have a strong resume and just need light polishing — DIY or a $50 review is fine. Second, when the bottleneck isn't your resume but your candidate profile (e.g. you're applying to roles you're not qualified for). A resume writer can't manufacture experience you don't have.",
  },
  {
    q: "What about the 90-day interview guarantee — is that real?",
    a: "Yes. Every package on this site is backed by a 90-day, 100% money-back guarantee. If you apply to 20+ relevant roles within 90 days and receive zero interview calls, you get a full refund. Full terms on the refund policy page.",
  },
  {
    q: "How do I know if my current resume is the problem?",
    a: "Three signals. (1) You're applying to roles you're objectively qualified for and getting auto-rejected. (2) You're getting screening calls but not advancing. (3) You haven't updated the resume since the last major career change. Any one of these means the resume is worth investing in.",
  },
];

export default function IsItWorthItPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Is a Resume Writer Worth It?", path: "/is-a-resume-writer-worth-it" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "Professional Resume Writing Service",
    description: DESCRIPTION,
    path: "/is-a-resume-writer-worth-it",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <ComparisonPageLayout
        breadcrumbLabel="Is a Resume Writer Worth It?"
        eyebrow="Buying decision · 2026"
        h1={<>Is a Professional Resume Writer <span className="text-[#C9A961]">Worth It?</span></>}
        intro="Short answer: yes, in three specific situations. No, in two others. Here's the honest breakdown — written by someone who would prefer you only buy if it actually pays back."
      >
        {/* Worth it */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">When it's worth it</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              Three situations where the math is clear.
            </h2>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "1. You're competing at the senior end of the market",
                  body: "At Director, VP, SVP, and above, the resume is the credential. A two-week delay in landing your next $250K+ role costs more than every resume package on this site combined. Senior candidates almost always recoup the investment in earned salary alone.",
                },
                {
                  title: "2. You're making a deliberate career change",
                  body: "Industry pivots, function changes, military-to-civilian, and post-MBA shifts all require active reframing. A resume that still reads as your previous role costs you months of interview cycles. This is the engagement type with the most leverage per dollar.",
                },
                {
                  title: "3. You're applying to high-screening companies",
                  body: "FAANG, top-tier consulting (MBB, Big Four), elite banking, and federal hiring all use either heavy ATS filtering or highly experienced human recruiters scanning at speed. Resumes that look generic get filtered out before a hiring manager ever sees them.",
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[18px] border-l-4 border-[#C9A961] bg-[#FAF8F3] p-6">
                  <h3 className="font-heading text-[20px] font-bold leading-tight text-[#0A2540]">{item.title}</h3>
                  <p className="mt-3 text-zinc-700 leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Not worth it */}
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">When it's NOT worth it</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              Two cases where we'd tell you to save your money.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="rounded-[18px] bg-white border border-zinc-200/80 p-6">
                <h3 className="font-heading text-[20px] font-bold leading-tight text-[#0A2540]">Your resume is already strong</h3>
                <p className="mt-3 text-zinc-700 leading-relaxed">If you have a recent, well-structured resume that's already getting interviews at your target level, you don't need a full rewrite. A free ATS audit or a $50 second-set-of-eyes review is plenty. Save the $349 for negotiating your offer.</p>
                <Link href="/tools/ats-cv-audit" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6D30] hover:text-[#C9A961]">
                  Try our free ATS audit →
                </Link>
              </article>

              <article className="rounded-[18px] bg-white border border-zinc-200/80 p-6">
                <h3 className="font-heading text-[20px] font-bold leading-tight text-[#0A2540]">The bottleneck isn't your resume</h3>
                <p className="mt-3 text-zinc-700 leading-relaxed">If you're applying to roles you're not qualified for, no resume rewrite will fix the underlying gap. The honest move is to focus on building the experience (or applying to roles that match what you have). A great writer can sharpen what's there — we can't manufacture what isn't.</p>
              </article>
            </div>
          </div>
        </section>

        {/* The math */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">The math</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              One paragraph of honest cost-benefit.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-700">
              The Career Pack costs $349. If a stronger resume gets you a $90K offer two weeks earlier than a weaker one would have, you've earned about $3,400 in extra time-in-role compensation. If it gets you a $5K higher offer in the same job, you've earned $5,000 in year-one comp alone. Most candidates clear either bar without thinking about it. The math gets cleaner at higher seniorities. The math gets worse if you spend money on a writer when the actual bottleneck is something else — which is why we tell people honestly when it isn&apos;t worth it.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-t border-zinc-200/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="text-center">
              <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">FAQ</span>
              <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
                Common questions.
              </h2>
            </div>
            <div className="mt-10 space-y-3">
              {FAQS.map((faq, i) => (
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

        <RelatedPages
          heading="Other buying-decision guides"
          pages={[
            { title: "Resume Writer Cost in 2026", href: "/resume-writer-cost", blurb: "What you should expect to pay at each tier, and what to avoid." },
            { title: "Resume Writer vs ChatGPT", href: "/resume-writer-vs-chatgpt", blurb: "When AI is enough and when it isn't." },
            { title: "Best Resume Writing Services 2026", href: "/best-resume-writing-services-2026", blurb: "How we compare to other services." },
          ]}
        />

        <PageCTA
          heading="Ready to find out if it's worth it for you?"
          subheading="Submit your current resume for a personal review. We'll tell you honestly whether a rewrite is the right move."
        />
      </ComparisonPageLayout>
    </>
  );
}
