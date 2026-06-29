import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import ComparisonPageLayout from "@/components/ComparisonPageLayout";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "Professional Resume Writer vs Template: 2026 Comparison";
const DESCRIPTION =
  "Free template vs professional resume writer. When a $50 template is enough, when it isn't, and what each one actually delivers for your US job search.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/professional-resume-writer-vs-template",
  }),
  title: { absolute: TITLE },
};

const FAQS = [
  {
    q: "Aren't free resume templates good enough?",
    a: "For early-career and uncomplicated cases, often yes. A clean Google Docs or Word template fills the structure you need and you can do the writing yourself. The limitation is that a template gives you a container, not a strategy — it can't tell you whether to lead with your education, your last role, or your latest project.",
  },
  {
    q: "What does a writer give you that a template can't?",
    a: "Judgment. A template can't decide which of your bullets earn their place, which to cut, how to frame a career change, or what a hiring manager at your target company will actually scan for. That decision-making is the work.",
  },
  {
    q: "Do I need a Canva-style designed template, or a plain one?",
    a: "Plain. Canva-style designs with columns, icons, and headshots tend to break ATS parsing at large US employers. Stick to a single-column Word or Google Docs template with standard headings. The visual polish doesn't help — and often hurts.",
  },
  {
    q: "Are paid templates better than free ones?",
    a: "Sometimes — better paid templates are cleaner and pre-tested against common ATS systems. But you're still doing all the writing yourself. The template isn't the bottleneck; the strategic judgment is.",
  },
  {
    q: "When does a writer actually pay back?",
    a: "When the cost is small relative to the role you're competing for, when you've been actively applying without results, when you're changing industry / function / seniority, and when the role requires senior-level positioning the template can't help you with.",
  },
];

export default function VsTemplatePage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Resume Writer vs Template", path: "/professional-resume-writer-vs-template" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "Professional Resume Writing vs Template",
    description: DESCRIPTION,
    path: "/professional-resume-writer-vs-template",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <ComparisonPageLayout
        breadcrumbLabel="Resume Writer vs Template"
        eyebrow="Comparison · 2026"
        h1={<>Professional Resume Writer vs <span className="text-[#C9A961]">Template</span></>}
        intro="A clean template plus your own writing can absolutely work — for the right situation. Here's the honest comparison and when each one is the right move."
      >
        {/* Comparison table */}
        <section className="w-full bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <div className="overflow-hidden rounded-[18px] border border-zinc-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0A2540] text-white">
                  <tr>
                    <th className="px-5 py-4 font-bold">Dimension</th>
                    <th className="px-5 py-4 font-bold">Template</th>
                    <th className="px-5 py-4 font-bold">Professional writer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {[
                    ["Cost", "$0 – $50", "$179 – $1,499"],
                    ["Time investment from you", "8–15 hours of writing", "1–2 hours of input"],
                    ["ATS-clean structure", "If you pick a good template, yes", "Always"],
                    ["Strategic positioning", "Up to you", "Done for you"],
                    ["Cuts weak bullets", "Up to you", "Done for you"],
                    ["Senior / executive tone", "Hard to do yourself", "Built in"],
                    ["Career-change reframing", "Very hard", "Core competence"],
                    ["LinkedIn rewrite", "Not included", "Included in bundle"],
                    ["Money-back guarantee", "No", "90-day interview guarantee"],
                  ].map(([dim, t, w], i) => (
                    <tr key={String(dim)} className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}>
                      <td className="px-5 py-3.5 font-semibold text-[#0A2540]">{dim}</td>
                      <td className="px-5 py-3.5 text-zinc-700">{t}</td>
                      <td className="px-5 py-3.5 text-zinc-700">{w}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When each works */}
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Decision rule</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              When a template is enough, when it isn&apos;t.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              <article className="rounded-[16px] bg-white border border-zinc-200/80 p-6">
                <h3 className="font-heading text-base font-bold text-[#0A2540]">Template is enough when…</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 list-disc pl-5">
                  <li>You&apos;re a graduate or 0–2 years in</li>
                  <li>Your role is simple and well-understood</li>
                  <li>You have time and patience to write the content yourself</li>
                  <li>You&apos;re not targeting hyper-competitive employers</li>
                </ul>
              </article>
              <article className="rounded-[16px] bg-white border border-zinc-200/80 p-6">
                <h3 className="font-heading text-base font-bold text-[#0A2540]">Hire a writer when…</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 list-disc pl-5">
                  <li>You&apos;re mid-career or senior</li>
                  <li>You&apos;re changing industry, function, or seniority</li>
                  <li>You&apos;re competing for high-screening roles</li>
                  <li>Your applications haven&apos;t been getting interviews</li>
                  <li>The role you&apos;re competing for is worth multiples of the writer&apos;s cost</li>
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
                Common questions.
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
            { title: "Resume Writer vs ChatGPT", href: "/resume-writer-vs-chatgpt", blurb: "When AI is enough and when it isn't." },
            { title: "Is a Resume Writer Worth It?", href: "/is-a-resume-writer-worth-it", blurb: "Three situations where the math is clear." },
          ]}
        />

        <PageCTA
          heading="Ready for more than a template?"
          subheading="See all five packages from $179 to $1,499 — each with the 90-day interview guarantee."
          primaryLabel="See All Packages"
          primaryHref="/pricing"
          secondaryLabel="Request a Profile Review"
          secondaryHref="/contact"
        />
      </ComparisonPageLayout>
    </>
  );
}
