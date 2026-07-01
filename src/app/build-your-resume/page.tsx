import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import PageHero from "@/components/PageHero";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "Build Your Resume: Free Step-by-Step Guide + ATS Check (US)";
const DESCRIPTION =
  "Build your resume the right way. A free step-by-step guide to structure, achievement bullets, and ATS-safe formatting - plus a free ATS check, or have it written for you.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/build-your-resume",
    keywords: [
      "build your resume",
      "build resume online",
      "resume help",
      "resume making",
      "how to build a resume",
    ],
  }),
  title: { absolute: TITLE },
};

const steps = [
  {
    title: "1. Start with the target, not the template",
    body: "Before you write anything, pull 5 to 8 job descriptions for the role you want. The repeated skills, tools, and phrases tell you exactly what to emphasize. Build the resume around that overlap - it's the difference between a resume and a document.",
  },
  {
    title: "2. Use a clean, ATS-safe structure",
    body: "One column. Standard headings: Summary, Experience, Skills, Education, Certifications. No tables, text boxes, columns, or graphics - they break the applicant tracking system's parser. Save graphic flourishes for a portfolio, not the resume.",
  },
  {
    title: "3. Write achievement bullets, not duties",
    body: "Lead each bullet with the result, quantify it, then explain how. 'Managed the email program' becomes 'Grew email revenue 34% ($120K/quarter) by rebuilding the segmentation strategy.' Do this for every bullet that can carry a number.",
  },
  {
    title: "4. Match length to your level",
    body: "One page for entry and most mid-career candidates, two for senior and executive roles. Cut anything older than ~10-15 years unless it's directly relevant. Density beats padding.",
  },
  {
    title: "5. Test it before you send it",
    body: "Run the finished resume through an ATS check to see how the software parses it, then read it out loud to catch anything that sounds like a duty instead of a win. Fix, then apply.",
  },
];

const FAQS = [
  {
    q: "Can I build a good resume myself for free?",
    a: "Yes. If you follow a clean ATS-safe structure and write achievement-based bullets tuned to your target roles, you can build a strong resume yourself. This guide plus a free ATS check will get most people to a solid result. Where a professional helps most is senior positioning, career changes, and knowing what a specific hiring market screens for.",
  },
  {
    q: "Are online resume builders any good?",
    a: "Some produce clean output, but many push graphic, multi-column templates that look nice and break in applicant tracking systems. If you use a builder, choose a simple single-column format and always run the export through an ATS check before applying.",
  },
  {
    q: "How do I know if my resume is ATS-friendly?",
    a: "Run it through an ATS audit that shows how the parser reads your file. If your name, titles, dates, and skills come through cleanly and the keywords from your target job appear naturally, you're in good shape. If sections scramble or content goes missing, simplify the layout.",
  },
  {
    q: "When should I stop DIY and get help?",
    a: "When you're applying to roles you're qualified for and still not getting interviews, when you're changing careers or levels, or when you're competing for senior and executive roles where positioning is the product. In those cases a personally written resume usually pays for itself quickly.",
  },
];

export default function BuildYourResumePage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Build Your Resume", path: "/build-your-resume" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "Resume Writing Service",
    description: DESCRIPTION,
    path: "/build-your-resume",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <PageHero
        title={<>Build Your Resume, <span className="text-[#C9A961]">the Right Way</span></>}
        description="A free, no-nonsense guide to building a US resume that passes the ATS and reads well to a recruiter - five steps, plus a free ATS check. Prefer it done for you? That option's here too."
        marqueeText="BUILD YOUR RESUME"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Build Your Resume" }]}
      >
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/tools/ats-cv-audit" className="inline-flex items-center justify-center rounded-[10px] bg-[#C9A961] px-6 py-3 text-sm font-bold text-[#0A2540] transition-colors hover:bg-white">
            Run the free ATS check
          </Link>
          <Link href="/pricing" className="inline-flex items-center justify-center rounded-[10px] border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10">
            Have it written for me
          </Link>
        </div>
      </PageHero>

      {/* Steps */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">The five-step build</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Build it once, build it right.
          </h2>
          <div className="mt-10 space-y-5">
            {steps.map((s) => (
              <article key={s.title} className="rounded-[18px] border-l-4 border-[#C9A961] bg-[#FAF8F3] p-6">
                <h3 className="font-heading text-[20px] font-bold leading-tight text-[#0A2540]">{s.title}</h3>
                <p className="mt-3 text-zinc-700 leading-relaxed">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIY vs done-for-you */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6">
          <h2 className="text-center font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Do it yourself, or have it done.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <article className="rounded-[18px] border border-zinc-200/80 bg-white p-7">
              <h3 className="font-heading text-[20px] font-bold text-[#0A2540]">Build it yourself (free)</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                Follow the five steps above, then run your draft through the free ATS check to confirm it parses cleanly. Perfect if your background is straightforward and you just need structure and an honest check.
              </p>
              <Link href="/tools/ats-cv-audit" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6D30] hover:text-[#C9A961]">
                Run the free ATS check →
              </Link>
            </article>
            <article className="rounded-[18px] border-2 border-[#C9A961] bg-[#FFFCF3] p-7">
              <h3 className="font-heading text-[20px] font-bold text-[#0A2540]">Have it written for you</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">
                For senior roles, career changes, or when you&apos;re not getting interviews, a personally written resume is worth it. ATS-optimized, achievement-led, tailored to your roles, and backed by a 90-day interview guarantee.
              </p>
              <Link href="/pricing" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6D30] hover:text-[#C9A961]">
                View packages &amp; pricing →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Building your resume: FAQs
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
          { title: "Resume examples", href: "/resume-examples", blurb: "See the structure by career level." },
          { title: "ATS resume writing guide", href: "/blog/ats-resume-writer-guide", blurb: "How to pass applicant tracking systems." },
          { title: "Free ATS resume audit", href: "/tools/ats-cv-audit", blurb: "Check how the ATS reads your resume." },
          { title: "Resume writing service", href: "/", blurb: "Have your resume written for you." },
          { title: "Should a resume be 2 pages?", href: "/blog/resume-length-2-pages", blurb: "How long a US resume should be." },
          { title: "Packages & pricing", href: "/pricing", blurb: "Compare done-for-you packages." },
        ]}
      />

      <PageCTA
        heading="Stuck building it yourself?"
        subheading="Send your draft and target role for a personal review. We'll tell you honestly whether it's ready - or write it for you, guaranteed."
        primaryLabel="Request a Profile Review"
        secondaryLabel="Run the ATS Check"
        secondaryHref="/tools/ats-cv-audit"
      />
    </>
  );
}
