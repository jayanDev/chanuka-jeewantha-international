import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site-url";
import { buildPageMetadata } from "@/lib/seo";
import { getCachedPublicReviews } from "@/lib/reviews";

export const metadata: Metadata = buildPageMetadata({
  title: "Global Resume & LinkedIn Optimization Services | Chanuka Jeewantha",
  description:
    "Premium international resume writing, ATS CV writing, LinkedIn optimization, cover letters, foreign job CVs, and executive career branding for global professionals.",
  path: "/",
  keywords: [
    "international resume writing",
    "global CV writing",
    "ATS resume writing",
    "LinkedIn profile optimization",
    "executive resume writing",
    "foreign job CV",
    "country-specific CV",
    "UAE CV writing",
    "UK CV writing",
    "Canada resume writing",
    "Australia resume writing",
    "executive career branding",
    "C-suite resume writing",
  ],
});

const audiences = [
  "Students applying for global internships or graduate roles",
  "Fresh graduates targeting international opportunities",
  "Professionals applying to UAE, UK, Australia, Canada, Europe, or remote jobs",
  "Senior professionals preparing for career transitions or migration",
  "Executives targeting leadership opportunities",
  "C-Suite leaders, directors, founders, and consultants needing premium career branding",
];

const services = [
  {
    title: "ATS CV / Resume Writing",
    desc: "Premium ATS-friendly CV and resume writing tailored to your target role, industry, country, and career level.",
  },
  {
    title: "LinkedIn Profile Optimization",
    desc: "A recruiter-focused LinkedIn profile rewrite designed to improve positioning, keyword strength, and global visibility.",
  },
  {
    title: "Cover Letter Writing",
    desc: "Professionally written cover letters tailored to target roles, industries, and international job applications.",
  },
  {
    title: "Foreign Job CV / International Format CV",
    desc: "Country-specific CV and resume writing for candidates applying to global markets, migration-based opportunities, and international employers.",
  },
  {
    title: "Graphical CV / Premium Design CV",
    desc: "A premium visual CV option for selected industries where professional presentation and personal branding matter.",
  },
  {
    title: "Career Consultation",
    desc: "Founder-led career strategy sessions for professionals, senior professionals, executives, and C-suite leaders who need direction, positioning, and job market clarity.",
  },
];

const bundles = [
  ["International Starter Pack", "$179", "For Students & Fresh Graduates"],
  ["International Career Pack", "$349", "Most Popular"],
  ["Global Migration Pack", "$499", "For professionals moving between countries"],
  ["Executive Brand Suite", "$899", "For senior professionals and executives"],
  ["C-Suite Premium", "$1,499", "For C-suite, directors, and founders"],
];

const reasons = [
  "Founder-led premium service, not generic template editing",
  "ATS-friendly, recruiter-focused writing",
  "International job market positioning",
  "Country-specific CV and resume direction",
  "LinkedIn profile optimization for global visibility",
  "Clear career storytelling for students, professionals, executives, and C-suite leaders",
  "Premium personal branding approach",
  "Strategy-first document development",
];

const processSteps = [
  ["Submit Your Current CV / Resume", "Share your existing document, target role, target country, and career goals."],
  ["Profile Review & Direction", "Your career level, industry, strengths, gaps, and target market requirements are reviewed."],
  ["Strategic Writing & Optimization", "Your CV, LinkedIn, cover letter, or package documents are rewritten with ATS, recruiter, and international positioning in mind."],
  ["Review & Refinement", "You receive the completed documents with revision support based on your selected package."],
  ["Apply With Confidence", "Use your improved career documents for international applications, recruiter outreach, and career opportunities."],
];

const faqs = [
  [
    "Do you work with clients outside Sri Lanka?",
    "Yes. This international service is designed for professionals targeting global job markets including the UAE, UK, Canada, Australia, Europe, New Zealand, and remote roles.",
  ],
  [
    "Do you write resumes or CVs?",
    "Both. The document structure is adapted based on your target country, industry, career level, and application purpose.",
  ],
  [
    "Can you create a country-specific CV?",
    "Yes. The Foreign Job CV / International Format service is designed for country-specific applications and global job markets.",
  ],
  [
    "Do you guarantee interviews or jobs?",
    "No. The service improves the quality, positioning, ATS compatibility, and recruiter-readiness of your career documents, but job outcomes depend on market conditions, experience, applications, and employer decisions.",
  ],
  [
    "What payment methods are available?",
    "International payment methods such as Wise, PayPal, Payoneer, Stripe, or bank transfer can be confirmed after your enquiry is reviewed.",
  ],
  [
    "How do I start?",
    "Submit your current CV / resume, target role, target country, and preferred package through the enquiry form.",
  ],
];

export default async function Home() {
  const publicReviews = await getCachedPublicReviews();
  const testimonialHighlights = publicReviews.slice(0, 3);

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chanuka Jeewantha",
    jobTitle: "Founder-Led Premium Career Branding Specialist",
    url: getBaseUrl(),
    sameAs: [
      "https://www.linkedin.com/in/chanuka-jeewantha/",
      "https://www.facebook.com/share/15vdmdB4oE/",
      "https://www.youtube.com/@chanukajeewantha",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      <section className="w-full bg-foreground text-background pt-[56px] pb-[88px] md:pt-[80px] md:pb-[120px]">
        <div className="mx-auto grid max-w-[1512px] grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-brand-main/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-main">
              Founder-Led Premium Career Branding
            </span>
            <h1 className="font-heading text-[36px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[64px]">
              Global Resume, LinkedIn & Career Branding Services for Professionals Targeting International Opportunities
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/78 md:text-xl">
              Premium ATS-friendly CVs, international resumes, LinkedIn profiles, cover letters, and executive career branding documents crafted for global job markets including the UAE, UK, Canada, Australia, Europe, New Zealand, and remote roles.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Apply for International Career Support
              </Link>
              <Link href="/pricing" className="btn btn-secondary border-white/40 text-white hover:bg-white hover:text-foreground">
                View International Packages
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[18px] border border-white/15 shadow-2xl">
            <Image
              src="/images/hero-chanuka.jpg"
              alt="Chanuka Jeewantha premium international career branding"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAF8F3] py-8">
        <div className="mx-auto grid max-w-[1512px] grid-cols-2 gap-5 px-4 text-center sm:px-6 md:grid-cols-4">
          {["Global Resume & CV Writing", "International ATS Resume / CV", "LinkedIn Profile Optimization", "Executive Career Branding"].map((item) => (
            <div key={item} className="rounded-[12px] border border-zinc-200 bg-white px-4 py-5 shadow-sm">
              <p className="text-sm font-bold text-foreground">{item}</p>
              <p className="mt-1 text-xs text-zinc-500">Premium international support</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <span className="text-brand-main font-semibold uppercase tracking-wider">Who This Is For</span>
            <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
              Built for professionals competing in global job markets.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience} className="rounded-[16px] border border-zinc-200 bg-zinc-50 p-6">
                <p className="text-lg font-semibold leading-relaxed text-foreground">{audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-y border-zinc-200 bg-zinc-50 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-brand-main font-semibold uppercase tracking-wider">Premium Services</span>
            <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
              Global Career Branding Services
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="flex h-full flex-col rounded-[16px] border border-zinc-200 bg-white p-7 shadow-sm">
                <h3 className="font-heading text-[24px] font-bold text-foreground">{service.title}</h3>
                <p className="mt-4 flex-grow text-sm leading-relaxed text-zinc-600">{service.desc}</p>
                <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="mt-6 text-sm font-semibold text-brand-dark hover:text-brand-main">
                  Request a Profile Review
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-brand-main font-semibold uppercase tracking-wider">International Signature Series</span>
              <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
                Premium international career documents.
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-600">
                Personally crafted for international resumes, global CV writing, LinkedIn optimization, foreign job CVs, and executive career branding.
              </p>
            </div>
            <Link href="/pricing#signature-series" className="rounded-[10px] bg-foreground px-5 py-3 text-sm font-semibold text-background hover:bg-brand-dark">
              View Premium Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-zinc-950 py-[72px] text-white md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-brand-main font-semibold uppercase tracking-wider">Bundle Packages</span>
            <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-white md:text-[52px]">
              Choose a complete international package.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
            {bundles.map(([name, price, label]) => (
              <article key={name} className={`rounded-[16px] border p-6 ${name === "C-Suite Premium" ? "border-[#C9A961] bg-white text-foreground" : name === "International Career Pack" ? "border-[#C9A961] bg-[#FFFCF3] text-foreground" : "border-white/15 bg-white/5 text-white"}`}>
                {name === "International Career Pack" && <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A961]">Most Popular</p>}
                <h3 className="font-heading text-[22px] font-bold">{name}</h3>
                <p className="mt-3 text-[32px] font-bold">{price}</p>
                <p className="mt-3 text-sm opacity-80">{label}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/pricing#bundles" className="inline-flex rounded-[10px] bg-brand-main px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-foreground">
              View Bundle Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1512px] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="text-brand-main font-semibold uppercase tracking-wider">Why Work With Chanuka</span>
            <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
              Why Global Professionals Choose Chanuka Jeewantha
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-[14px] border border-zinc-200 bg-zinc-50 p-5 text-sm font-semibold text-zinc-800">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="w-full border-y border-zinc-200 bg-zinc-50 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-brand-main font-semibold uppercase tracking-wider">Process</span>
            <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
              How the International Service Works
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
            {processSteps.map(([title, desc], index) => (
              <article key={title} className="rounded-[16px] border border-zinc-200 bg-white p-6">
                <p className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-main text-sm font-bold text-white">
                  {index + 1}
                </p>
                <h3 className="font-heading text-[20px] font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-brand-main font-semibold uppercase tracking-wider">Client Trust</span>
              <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
                Testimonials and proof.
              </h2>
            </div>
            <Link href="/testimonials" className="rounded-[10px] border border-zinc-300 px-5 py-3 text-sm font-semibold text-foreground hover:border-brand-main hover:text-brand-main">
              See Client Reviews
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonialHighlights.map((item) => (
              <article key={item.id} className="rounded-[16px] border border-zinc-200 bg-zinc-50 p-6">
                <p className="text-sm leading-relaxed text-zinc-700">&quot;{item.message}&quot;</p>
                <p className="mt-5 text-sm font-bold text-foreground">{item.name}</p>
                {item.outcome ? <p className="mt-1 text-xs font-semibold text-brand-dark">{item.outcome}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="w-full bg-zinc-50 py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <span className="text-brand-main font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
              Common questions.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="rounded-[14px] border border-zinc-200 bg-white p-6">
                <summary className="cursor-pointer font-heading text-[20px] font-bold text-foreground">{q}</summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-foreground py-[72px] text-center text-white md:py-[96px]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-heading text-[34px] font-bold leading-tight text-white md:text-[56px]">
            Start Your International Career Branding
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            Submit your current CV, target country, target role, and preferred service direction for review.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-[10px] bg-brand-main px-6 py-3 font-semibold text-white hover:bg-white hover:text-foreground">
            Submit International Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
