import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import PageHero from "@/components/PageHero";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "Resume Examples: Good, Bad & What Actually Gets Interviews (US)";
const DESCRIPTION =
  "Real US resume examples and the structure behind them - what a good resume looks like by career level, the mistakes that get resumes rejected, and how to apply it to yours.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/resume-examples",
    keywords: [
      "resume examples",
      "good resume examples",
      "best resume examples",
      "manager resume examples",
      "cv examples",
      "curriculum vitae example",
      "resume example",
    ],
  }),
  title: { absolute: TITLE },
};

const beforeAfter = [
  {
    label: "Weak (responsibility-based)",
    text: "Responsible for managing the sales team and handling client accounts.",
    tone: "bad" as const,
  },
  {
    label: "Strong (achievement-based)",
    text: "Led an 8-person sales team to 137% of quota, growing a $4.2M book of business 28% year over year.",
    tone: "good" as const,
  },
];

const levelExamples = [
  {
    level: "Entry-level / graduate",
    structure: [
      "Header: name, city/state, phone, email, LinkedIn",
      "Short summary framing your direction, not your history",
      "Education first, with GPA (if strong), honors, and relevant coursework",
      "Projects, internships, and part-time work written as achievements",
      "Skills section recruiters can scan",
    ],
    note: "One page. Lead with potential and proof - projects, internships, and measurable wins from any role.",
  },
  {
    level: "Mid-career professional",
    structure: [
      "Summary that names your role, specialization, and level",
      "Experience in reverse-chronological order, achievement-led bullets",
      "Numbers on every bullet that has them: %, $, scale, time",
      "Skills and tools aligned to your target job descriptions",
      "Education and certifications near the bottom",
    ],
    note: "One page (two if 10+ years). Experience carries the resume; every bullet should show impact, not duties.",
  },
  {
    level: "Manager / director",
    structure: [
      "Positioning statement: scope, teams, and business ownership",
      "Leadership impact - people led, budgets owned, outcomes delivered",
      "Cross-functional results, not just team output",
      "A short 'core competencies' band for recruiter scanning",
      "Selected achievements that prove you operate at the next level",
    ],
    note: "One to two pages. Shift the language from 'what I did' to 'what changed because I led it.'",
  },
  {
    level: "Executive / C-suite",
    structure: [
      "Sharp executive summary: the level you operate at and your edge",
      "Quantified enterprise impact - revenue, P&L, transformation, scale",
      "Board, investor, and org-wide leadership signals",
      "A clean, senior format that earns two pages",
      "Consistency with your LinkedIn and any board bio",
    ],
    note: "Two pages, standard at this level. Scope and outcomes over detail; positioning is the product.",
  },
];

const FAQS = [
  {
    q: "What does a good resume example look like?",
    a: "A good US resume is one page (two for senior roles), single-column, and written in achievement-based bullets that lead with impact and numbers. It uses the language of the target job description, stays ATS-parseable, and omits photos and personal details. The examples on this page show the structure by career level.",
  },
  {
    q: "Are resume examples and CV examples the same in the US?",
    a: "For most US jobs they're the same thing - people say 'CV' but mean a resume. A true CV (long, academic, publication-focused) is only expected for academic, research, and some medical or scientific roles. For everything else, follow the resume examples here.",
  },
  {
    q: "Can I just copy a resume example?",
    a: "Use examples for structure and phrasing, not content. Copying a sample word-for-word produces a generic resume that reads like everyone else's. The value is in the format and the achievement-based writing style - then fill it with your own quantified results.",
  },
  {
    q: "How many pages should my resume be?",
    a: "One page for entry-level and most mid-career candidates, two pages for senior professionals and executives. Length should follow scope, not padding - a tight one-page resume beats a padded two-pager for early-career roles.",
  },
];

export default function ResumeExamplesPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Resume Examples", path: "/resume-examples" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "Professional Resume Writing Service",
    description: DESCRIPTION,
    path: "/resume-examples",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <PageHero
        title={<>Resume Examples That Actually <span className="text-[#C9A961]">Get Interviews</span></>}
        description="Good resume examples aren't about templates - they're about structure and achievement-based writing. Here's what strong US resumes look like by career level, and the difference between a bullet that works and one that doesn't."
        marqueeText="RESUME EXAMPLES"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resume Examples" }]}
      />

      {/* Before / after */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">The one change that matters most</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Good vs weak: it's the bullets.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            The single biggest difference between a resume that gets interviews and one that doesn&apos;t is achievement-based writing. Same job, two ways to describe it:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {beforeAfter.map((item) => (
              <div
                key={item.label}
                className={`rounded-[16px] border p-6 ${item.tone === "good" ? "border-[#C9A961] bg-[#FFFCF3]" : "border-zinc-200 bg-zinc-50"}`}
              >
                <span className={`text-xs font-bold uppercase tracking-[0.14em] ${item.tone === "good" ? "text-[#8C6D30]" : "text-zinc-400"}`}>
                  {item.label}
                </span>
                <p className={`mt-3 text-lg leading-relaxed ${item.tone === "good" ? "text-[#0A2540] font-medium" : "text-zinc-500"}`}>
                  &quot;{item.text}&quot;
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Lead with the result, quantify it, then explain how. Apply that to every bullet and an ordinary resume becomes a strong one.
          </p>
        </div>
      </section>

      {/* Examples by level */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Resume examples by career level</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            The right structure changes with your level.
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            An entry-level resume and an executive resume are different documents. Here&apos;s the structure that works for each, and what to lead with.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {levelExamples.map((ex) => (
              <article key={ex.level} className="flex h-full flex-col rounded-[18px] border border-zinc-200/80 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-[20px] font-bold text-[#0A2540]">{ex.level}</h3>
                <ul className="mt-4 flex-grow space-y-2.5 text-sm text-zinc-700">
                  {ex.structure.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C9A961]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-[10px] bg-[#FAF8F3] p-3 text-xs leading-relaxed text-zinc-600">{ex.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Want it done for you */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 text-center">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">From example to interview</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Rather have it written for you?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            Examples show you the target. If you&apos;d rather have a resume built to it - ATS-optimized, achievement-led, and tailored to your roles - every package is personally written and backed by a 90-day interview guarantee.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-[10px] bg-[#C9A961] px-6 py-3 text-sm font-bold text-[#0A2540] transition-colors hover:bg-[#0A2540] hover:text-white">
              View Packages
            </Link>
            <Link href="/tools/ats-cv-audit" className="inline-flex items-center justify-center rounded-[10px] border border-zinc-300 px-6 py-3 text-sm font-bold text-[#0A2540] transition-colors hover:border-[#C9A961]">
              Run the free ATS audit
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-t border-zinc-200/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Resume example FAQs
          </h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group rounded-[14px] border border-zinc-200/80 bg-white p-5 [&_summary::-webkit-details-marker]:hidden">
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
          { title: "Resume writing service", href: "/", blurb: "See how the full US resume service works." },
          { title: "Resume & cover letter writing", href: "/resume-and-cover-letter", blurb: "Get both documents aligned as one story." },
          { title: "ATS resume writing guide", href: "/blog/ats-resume-writer-guide", blurb: "How to pass applicant tracking systems." },
          { title: "Resume vs CV in the USA", href: "/blog/resume-vs-cv-usa", blurb: "Which one US employers actually expect." },
          { title: "Resume writers by industry", href: "/resume-writer", blurb: "Tech, finance, healthcare, executive, federal." },
          { title: "Packages & pricing", href: "/pricing", blurb: "Compare packages in your local currency." },
        ]}
      />

      <PageCTA
        heading="Turn the example into your interview-winning resume."
        subheading="Submit your current resume and target role for a personal review. Every package is backed by a 90-day interview guarantee."
      />
    </>
  );
}
