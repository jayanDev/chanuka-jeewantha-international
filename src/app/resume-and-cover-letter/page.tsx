import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import PageHero from "@/components/PageHero";
import Price from "@/components/Price";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

const TITLE = "Resume and Cover Letter Writing Service (US) | One Aligned Story";
const DESCRIPTION =
  "Professional resume and cover letter writing for US roles. Get both documents written together so they tell one consistent story - ATS-optimized, tailored, and recruiter-ready.";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: "/resume-and-cover-letter",
    keywords: [
      "resume and cover letter",
      "cover letter for resume",
      "cv letter",
      "cv application letter",
      "cv with covering letter",
      "cv and letter of application",
      "resume and application letter",
      "cv job letter",
      "cover letter for resume example",
    ],
  }),
  title: { absolute: TITLE },
};

const whyTogether = [
  {
    title: "One consistent story",
    body: "When the resume and cover letter are written separately, they drift - different positioning, different emphasis, sometimes different job titles. Written together, they reinforce a single narrative the recruiter reads twice.",
  },
  {
    title: "The cover letter fills the gaps",
    body: "A resume states facts; the cover letter explains fit, motivation, and anything the resume can't - a career change, a relocation, a gap. Together they answer more of the hiring manager's questions before the first call.",
  },
  {
    title: "Both tuned to the same role",
    body: "We tailor both documents to the same target job description and keywords, so your application reads as purpose-built for that role rather than mass-sent.",
  },
];

const whatYouGet = [
  "ATS-optimized resume written in achievement-based bullets",
  "A tailored cover letter matched to your target role and its keywords",
  "Consistent positioning, titles, and tone across both documents",
  "US resume and letter conventions (format, length, no personal details)",
  "A version you can adapt for similar roles without starting over",
  "90-day interview guarantee - 100% money-back",
];

const FAQS = [
  {
    q: "Do I really need a cover letter in the US?",
    a: "It depends on the role, but a strong cover letter rarely hurts and often helps - especially for career changes, senior roles, and applications where you want to explain fit or motivation. When one is expected and you don't send it, or send a weak one, it counts against you. Writing it alongside the resume is the efficient way to get both right.",
  },
  {
    q: "What's the difference between a CV letter and a cover letter?",
    a: "They're the same thing - 'CV letter', 'covering letter', 'letter of application', and 'cover letter' all describe the one-page letter you send with your resume or CV. In the US it's almost always called a cover letter.",
  },
  {
    q: "Can you write just the cover letter?",
    a: "Yes, a cover letter can be written on its own. But most people get better results when the resume and cover letter are written together, because the two documents can be aligned to one story and one target role. Bundles that include both are usually better value than buying each separately.",
  },
  {
    q: "Will the cover letter be tailored or generic?",
    a: "Tailored. A generic 'to whom it may concern' letter is worse than none. Yours is written around your target role, your strongest fit, and the language of the job description, with a structure you can adapt for similar roles.",
  },
];

export default function ResumeAndCoverLetterPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Resume & Cover Letter", path: "/resume-and-cover-letter" },
  ]);
  const serviceLd = buildServiceSchema({
    name: "Resume and Cover Letter Writing Service",
    description: DESCRIPTION,
    path: "/resume-and-cover-letter",
    priceRange: "$179 - $1,499",
  });
  const faqLd = buildFaqPageSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <PageHero
        title={<>Resume and Cover Letter, <span className="text-[#C9A961]">Written Together</span></>}
        description="Your resume and cover letter should tell one story, not two. We write both around the same target role and keywords - ATS-optimized, tailored, and consistent - so your application reads as purpose-built."
        marqueeText="RESUME + COVER LETTER"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resume & Cover Letter" }]}
      >
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A961]/40 bg-[#C9A961]/10 px-3 py-1 font-semibold text-[#C9A961]">
            Included in every bundle from <Price usd={179} />
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/80">
            90-day interview guarantee
          </span>
        </div>
      </PageHero>

      {/* Why together */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Why write them together</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Two documents, one story.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyTogether.map((item) => (
              <article key={item.title} className="rounded-[18px] border border-zinc-200/80 bg-[#FAF8F3] p-6">
                <h3 className="font-heading text-[19px] font-bold text-[#0A2540]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">What's included</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            A complete, aligned application.
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-[12px] bg-white border border-zinc-200/80 p-4 text-sm text-zinc-700">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C9A961]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-[10px] bg-[#C9A961] px-6 py-3 text-sm font-bold text-[#0A2540] transition-colors hover:bg-[#0A2540] hover:text-white">
              See packages that include both
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            Resume &amp; cover letter FAQs
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
          { title: "Resume writing service", href: "/", blurb: "The full US resume service and how it works." },
          { title: "Resume examples", href: "/resume-examples", blurb: "What strong resumes look like by level." },
          { title: "CV writing service", href: "/cv-writing-service", blurb: "The CV-branded version of the service." },
          { title: "LinkedIn optimization", href: "/services/packages/linkedin-optimization", blurb: "Round out resume + cover letter with LinkedIn." },
          { title: "Packages & pricing", href: "/pricing", blurb: "Bundles that include both documents." },
          { title: "Request a profile review", href: "/contact", blurb: "Get a personal recommendation first." },
        ]}
      />

      <PageCTA
        heading="Get a resume and cover letter that pull in the same direction."
        subheading="Submit your current documents and target role for a personal review. Backed by a 90-day interview guarantee."
      />
    </>
  );
}
