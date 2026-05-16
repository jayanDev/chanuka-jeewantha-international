import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site-url";
import { buildPageMetadata } from "@/lib/seo";
import { getCachedPublicReviews } from "@/lib/reviews";

export const metadata: Metadata = buildPageMetadata({
  title: "Premium Resume, CV & LinkedIn Services | Chanuka Jeewantha",
  description:
    "Premium resume writing, ATS-optimized CVs, LinkedIn optimization, cover letters, and executive career branding for senior professionals pursuing competitive global roles.",
  path: "/",
});

const audiences = [
  "High-performing graduates pursuing premium graduate or early-career roles",
  "Mid-career professionals stepping into senior positions or new industries",
  "Senior professionals preparing for cross-border moves and career transitions",
  "Executives and directors competing for leadership and board-level mandates",
  "Founders, consultants, and C-suite leaders rebuilding their professional brand",
  "Specialists positioning themselves for remote-first and globally distributed teams",
];

const services = [
  {
    title: "ATS Resume & CV Writing",
    desc: "ATS-optimized resumes and CVs engineered for recruiter scrutiny, hiring-manager logic, and the seniority you are actually competing for.",
  },
  {
    title: "LinkedIn Profile Optimization",
    desc: "A recruiter-facing LinkedIn rewrite built around clear positioning, keyword strength, and the credibility signals senior hires are searched on.",
  },
  {
    title: "Cover Letter Writing",
    desc: "Tailored cover letters that translate your experience into the language of the role, the company, and the hiring committee.",
  },
  {
    title: "Executive Resume & Modern CV Format",
    desc: "Senior-level resume and CV formats built for cross-border applications, hiring panels, and recruiter-led searches in competitive markets.",
  },
  {
    title: "Graphical CV / Premium Design CV",
    desc: "A premium visual CV for industries where presentation, narrative, and personal brand carry real weight in the hiring decision.",
  },
  {
    title: "Career Consultation",
    desc: "Founder-led strategy sessions for professionals, executives, and founders who need clarity on positioning, market fit, and their next move.",
  },
];

const bundles = [
  ["Starter Pack", "$179", "For graduates and early-career candidates"],
  ["Career Pack", "$349", "Most Popular"],
  ["Career Move Pack", "$499", "For professionals making a cross-border move"],
  ["Executive Brand Suite", "$899", "For senior professionals and executives"],
  ["C-Suite Premium", "$1,499", "For C-suite, directors, and founders"],
];

const reasons = [
  "Founder-led premium service — not template editing or junior outsourcing",
  "ATS-optimized, recruiter-readable writing that survives keyword screens",
  "Positioning built for competitive senior and executive-level hiring",
  "Modern CV and resume formats accepted by global hiring panels",
  "LinkedIn rewrites designed for recruiter search and inbound opportunity flow",
  "Clear career storytelling across graduate, professional, and executive levels",
  "Premium personal branding, not a one-size-fits-all rewrite",
  "Strategy first, documents second — every page earns its place",
];

const processSteps = [
  ["Submit Your Current CV / Resume", "Share your existing document, target role, target market, and career goals."],
  ["Profile Review & Direction", "Your career level, industry, strengths, gaps, and target-role requirements are reviewed in detail."],
  ["Strategic Writing & Optimization", "Your CV, LinkedIn, cover letter, or full package is rewritten with ATS, recruiter, and senior-market positioning in mind."],
  ["Review & Refinement", "You receive the completed documents with revision support based on your selected package."],
  ["Apply With Confidence", "Use your refined career documents for applications, recruiter outreach, and inbound opportunities."],
];

const faqs = [
  [
    "Do you work with clients anywhere in the world?",
    "Yes. The service is delivered remotely and designed for professionals applying to roles in competitive global job markets, including English-speaking developed economies and remote-first companies.",
  ],
  [
    "Do you write resumes or CVs?",
    "Both. The document structure is adapted to your target market, industry, career level, and application purpose.",
  ],
  [
    "Can you produce a CV for a specific target market?",
    "Yes. Each document is tailored to the conventions of your target market — format, length, tone, and what recruiters in that market actually look for.",
  ],
  [
    "Do you guarantee interviews or jobs?",
    "No. The service improves the quality, positioning, ATS compatibility, and recruiter-readiness of your career documents. Outcomes still depend on market conditions, your applications, and employer decisions.",
  ],
  [
    "What payment methods are available?",
    "Wise, PayPal, Payoneer, Stripe, and bank transfer are all supported. Specific payment details are confirmed after your enquiry is reviewed.",
  ],
  [
    "How do I start?",
    "Submit your current CV or resume, target role, target market, and preferred package through the enquiry form.",
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
              Premium Resume, LinkedIn & Career Branding for Professionals Competing at the Top of the Market
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/78 md:text-xl">
              ATS-optimized resumes, executive CVs, LinkedIn profiles, cover letters, and full career-branding packages built for senior candidates and remote-first opportunities in competitive global markets.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Request Career Support
              </Link>
              <Link href="/pricing" className="btn btn-secondary border-white/40 text-white hover:bg-white hover:text-foreground">
                View Premium Packages
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[18px] border border-white/15 shadow-2xl">
            <Image
              src="/images/hero-chanuka.jpg"
              alt="Chanuka Jeewantha — premium career branding for senior professionals"
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
          {["Resume & CV Writing", "ATS-Optimized Resumes", "LinkedIn Optimization", "Executive Career Branding"].map((item) => (
            <div key={item} className="rounded-[12px] border border-zinc-200 bg-white px-4 py-5 shadow-sm">
              <p className="text-sm font-bold text-foreground">{item}</p>
              <p className="mt-1 text-xs text-zinc-500">Founder-led premium service</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-[72px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <span className="text-brand-main font-semibold uppercase tracking-wider">Who This Is For</span>
            <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
              Built for professionals competing at the senior end of the market.
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
              Premium Career Branding Services
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
              <span className="text-brand-main font-semibold uppercase tracking-wider">Signature Series</span>
              <h2 className="mt-3 font-heading text-[34px] font-bold leading-tight text-foreground md:text-[52px]">
                Premium career documents, personally written.
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-600">
                Executive resumes, modern CV formats, LinkedIn rewrites, and cover letters — built personally for senior candidates, not outsourced.
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
              Choose a complete career-branding package.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
            {bundles.map(([name, price, label]) => (
              <article key={name} className={`rounded-[16px] border p-6 ${name === "C-Suite Premium" ? "border-[#C9A961] bg-white text-foreground" : name === "Career Pack" ? "border-[#C9A961] bg-[#FFFCF3] text-foreground" : "border-white/15 bg-white/5 text-white"}`}>
                {name === "Career Pack" && <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A961]">Most Popular</p>}
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
              Why senior professionals choose Chanuka Jeewantha
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
              How the service works.
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
            Start your career-branding engagement.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/75">
            Submit your current CV, target role, target market, and preferred service direction for review.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-[10px] bg-brand-main px-6 py-3 font-semibold text-white hover:bg-white hover:text-foreground">
            Submit an Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
