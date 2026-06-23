import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site-url";
import { buildPageMetadata } from "@/lib/seo";
import { featuredReviews, GOOGLE_REVIEWS_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/featured-reviews";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { CALENDLY_URL } from "@/lib/booking-config";

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
      "https://x.com/chanukajeewan",
    ],
  };

  const googleRatingLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Resume, CV & LinkedIn Writing Services",
    provider: {
      "@type": "Organization",
      name: "Chanuka Jeewantha",
      url: getBaseUrl(),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "69",
      bestRating: "5",
      worstRating: "1",
    },
    review: featuredReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
      reviewBody: r.quote,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(googleRatingLd) }}
      />

      {/* 1. Hero Section */}
      <section className="w-full bg-[#0A2540] text-white pt-16 pb-24 md:pt-24 md:pb-32 relative overflow-hidden">
        {/* Layered background depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.08),transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,169,97,0.05),transparent_60%)] pointer-events-none" />

        <div className="mx-auto grid max-w-[1512px] grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] relative z-10">
          <div>
            {/* Editorial gold accent line */}
            <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#C9A961] to-transparent" />
            <h1 className="font-heading text-[40px] font-bold leading-[1.08] text-white sm:text-[54px] md:text-[68px] tracking-tight max-w-4xl">
              Premium Resume, LinkedIn & Career Branding for Professionals Competing at the Top
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl font-light">
              ATS-optimized resumes, executive CVs, LinkedIn profiles, cover letters, and career-branding suites engineered personally for senior candidates targeting competitive global markets.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row items-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#E0C882] hover:from-[#E0C882] hover:to-[#C9A961] text-[#0A2540] font-bold w-full sm:w-auto rounded-[12px] shadow-[0_4px_24px_rgba(201,169,97,0.3)] hover:shadow-[0_8px_32px_rgba(201,169,97,0.5)] transform hover:-translate-y-0.5 transition-all duration-300 border-none"
              >
                Free Consultation
              </a>
              <Link href="/pricing" className="btn btn-secondary-gold w-full sm:w-auto">
                View Premium Packages
              </Link>
            </div>

            {/* Scannable Hero Trust Indicator */}
            <div className="mt-12 flex flex-wrap items-center gap-4 text-white/80 text-sm border-t border-white/10 pt-8">
              <div className="flex items-center gap-1">
                <span className="flex items-center text-[#C9A961]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4.5 w-4.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                <span className="text-white font-bold ml-1">4.9/5 Rating</span>
              </div>
              <span className="h-4 w-px bg-white/20 hidden sm:inline" />
              <span>
                Based on 380+ senior & executive placements in <span className="text-[#C9A961] font-semibold">US, UK, AUS, CA, NZ</span>
              </span>
              <span className="h-4 w-px bg-white/20 hidden sm:inline" />
              <a
                href="https://maps.app.goo.gl/7osd53bHxoc9jQwaA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
              >
                <span className="text-[#C9A961] font-bold">5.0 ★</span>
                <span>on Google · 69 reviews</span>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper relative mx-auto w-full max-w-[440px]">
            {/* Elegant backdrop offset frame with hover glow */}
            <div className="absolute -inset-3 rounded-[24px] border border-[#C9A961]/25 translate-x-3 translate-y-3 pointer-events-none" />
            <div className="hero-frame-glow absolute -inset-4 rounded-[28px] bg-[#C9A961]/10 blur-xl pointer-events-none" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-white/10 shadow-2xl bg-[#0A2540]">
              <Image
                src="/images/hero-chanuka.jpg"
                alt="Chanuka Jeewantha — premium career branding for senior professionals"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Scannable Trust Strip */}
      <section className="w-full bg-[#FAF8F3] py-10 border-y border-zinc-200/50">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-x-0 text-center md:text-left">
            {[
              ["Resume & CV Writing", "Founder-led premium service"],
              ["ATS-Optimized Resumes", "Recruiter-approved formats"],
              ["LinkedIn Optimization", "Profile strategy & key signals"],
              ["Executive Career Branding", "For competitive global roles"],
            ].map(([title, sub], idx) => (
              <div key={title} className={`flex flex-col md:flex-row items-center md:items-start gap-3 px-4 ${idx > 0 ? "md:border-l md:border-zinc-300/60" : ""}`}>
                <span className="text-[#C9A961] text-2xl font-serif font-bold">{String(idx + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-sm font-bold text-[#0A2540] uppercase tracking-wide">{title}</p>
                  <p className="mt-1 text-xs text-zinc-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-16 text-center">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-wider text-xs">Premium Services</span>
            <h2 className="mt-3 font-heading text-[36px] font-bold leading-tight text-[#0A2540] md:text-[52px] tracking-tight">
              Premium Career Branding Services
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="service-card group relative flex h-full flex-col rounded-[20px] bg-white p-10 border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-[#C9A961]/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#FAF8F3] to-[#F0EBD8] text-[#C9A961] group-hover:bg-[#C9A961] group-hover:from-[#C9A961] group-hover:to-[#C9A961] group-hover:text-[#0A2540] transition-colors duration-300">
                  {index === 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  )}
                  {index === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                  )}
                  {index === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  )}
                  {index === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
                  )}
                  {index === 4 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  )}
                  {index === 5 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  )}
                </div>
                <h3 className="font-heading text-[22px] font-bold text-[#0A2540]">{service.title}</h3>
                <p className="mt-4 flex-grow text-sm leading-relaxed text-zinc-600">{service.desc}</p>
                <Link href={`/contact?service=${encodeURIComponent(service.title)}`} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#8C6D30] hover:text-[#C9A961] transition-colors">
                  Request a Profile Review <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">➔</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Who This Is For Section */}
      <section className="w-full bg-[#FAF8F3] py-20 md:py-28 border-t border-zinc-200/50">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-16 max-w-3xl">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-wider text-xs">Who This Is For</span>
            <h2 className="mt-3 font-heading text-[36px] font-bold leading-tight text-[#0A2540] md:text-[52px] tracking-tight">
              Built for professionals competing at the senior end of the market.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <article 
                key={audience} 
                className="audience-item group rounded-[16px] border-l-4 border-l-[#C9A961] border-y border-r border-zinc-200/80 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#C9A961]/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
              >
                <p className="text-lg font-semibold leading-relaxed text-[#0A2540]">{audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Work With Chanuka Section */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-[1512px] grid-cols-1 gap-16 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] relative">
          <div>
            <span className="text-[#8C6D30] font-semibold uppercase tracking-wider text-xs">Why Work With Chanuka</span>
            <h2 className="mt-3 font-heading text-[36px] font-bold leading-tight text-[#0A2540] md:text-[52px] tracking-tight">
              Why senior professionals choose Chanuka Jeewantha
            </h2>
            <p className="mt-6 text-zinc-600 leading-relaxed max-w-md">
              Every document is personally strategized and written by the founder. No outsourced writing, no generic templates, and no junior staff hand-offs.
            </p>
            {/* Decorative vertical gold line — desktop only */}
            <div className="hidden lg:block absolute right-[54%] top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-[#C9A961]/30 to-transparent" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {reasons.map((reason, idx) => (
              <article 
                key={reason} 
                className="reason-item group rounded-[16px] border border-zinc-200/80 bg-[#FAF8F3] p-6 flex gap-4 items-start hover:bg-white hover:border-[#C9A961]/40 hover:shadow-md transition-all duration-300"
              >
                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#C9A961] text-white text-xs font-bold select-none shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-zinc-800 leading-relaxed">{reason}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Signature Series Divider */}
      <section className="w-full bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="relative rounded-[24px] border border-zinc-200/80 bg-[#FAF8F3] p-8 md:p-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between shadow-sm overflow-hidden">
            {/* Subtle corner gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_top_right,rgba(201,169,97,0.08),transparent_70%)] pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <span className="text-[#8C6D30] font-semibold uppercase tracking-wider text-xs">Signature Series</span>
              <h2 className="mt-2 font-heading text-[28px] font-bold leading-tight text-[#0A2540] md:text-[36px] tracking-tight">
                Premium career documents, personally written.
              </h2>
              <p className="mt-3 text-zinc-600 max-w-2xl text-sm md:text-base">
                Executive resumes, modern CV formats, LinkedIn rewrites, and cover letters — built personally for senior candidates, not outsourced.
              </p>
            </div>
            <Link href="/pricing#signature-series" className="btn btn-secondary-gold shrink-0 text-center relative z-10">
              View Premium Packages
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Bundle Packages (Dark Navy Section) */}
      <section id="bundles" className="w-full bg-[#0A2540] py-20 md:py-28 text-white scroll-mt-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,169,97,0.06),transparent_50%)] pointer-events-none" />

        <div className="mx-auto max-w-[1512px] px-4 sm:px-6 relative z-10">
          <div className="mb-16 text-center">
            <span className="text-[#C9A961] font-semibold uppercase tracking-wider text-xs">Bundle Packages</span>
            <h2 className="mt-3 font-heading text-[36px] font-bold leading-tight text-white md:text-[52px] tracking-tight">
              Choose a complete career-branding package.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 items-stretch">
            {bundles.map(([name, price, label]) => {
              const isPopular = name === "Career Pack";
              const isPremium = name === "C-Suite Premium";
              return (
                <article
                  key={name}
                  className={`relative flex flex-col justify-between rounded-[20px] p-8 transition-all duration-300 transform hover:-translate-y-1.5 ${
                    isPopular
                      ? "border-2 border-[#C9A961] bg-[#FFFCF3] text-[#0A2540] lg:scale-105 lg:-translate-y-2.5 shadow-[0_20px_50px_rgba(201,169,97,0.25)] z-10"
                      : isPremium
                        ? "bundle-card-dark bundle-card-gold text-white"
                        : "bundle-card-dark text-white"
                  }`}
                >
                  <div>
                    {isPopular && (
                      <span className="mb-4 inline-block rounded-full bg-[#8C6D30] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                        Most Popular
                      </span>
                    )}
                    <h3 className={`font-heading text-[22px] font-bold ${isPopular ? "text-[#0A2540]" : "text-white"}`}>
                      {name}
                    </h3>
                    <p className={`mt-4 font-bold ${isPopular ? "text-[#0A2540]" : "text-white"}`}>
                      <span className="text-[24px] font-normal opacity-60">{price?.charAt(0)}</span>
                      <span className="text-[36px]">{price?.slice(1)}</span>
                    </p>
                  </div>
                  {/* Subtle separator */}
                  <div className={`my-6 h-px ${isPopular ? "bg-zinc-200" : "bg-white/10"}`} />
                  <p className={`text-sm leading-relaxed ${isPopular ? "text-zinc-600" : "text-white/70"}`}>
                    {label}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link 
              href="/pricing#bundles" 
              className="btn inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#E0C882] hover:from-[#E0C882] hover:to-[#C9A961] text-[#0A2540] font-bold text-base px-8 py-4 rounded-[12px] shadow-[0_4px_24px_rgba(201,169,97,0.35)] hover:shadow-[0_8px_32px_rgba(201,169,97,0.55)] transform hover:-translate-y-0.5 transition-all duration-300 border-none"
            >
              View Bundle Packages
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Process Section */}
      <section id="process" className="w-full bg-[#FAF8F3] py-20 md:py-28 border-y border-zinc-200/50 scroll-mt-28">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-16 text-center">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-wider text-xs">Process</span>
            <h2 className="mt-3 font-heading text-[36px] font-bold leading-tight text-[#0A2540] md:text-[52px] tracking-tight">
              How the service works.
            </h2>
          </div>
          <div className="process-grid grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {processSteps.map(([title, desc], index) => (
              <article key={title} className="process-step group relative rounded-[20px] bg-white p-8 border border-zinc-200/80 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A961] text-sm font-bold text-[#0A2540] group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </p>
                <h3 className="font-heading text-[18px] font-bold text-[#0A2540]">{title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-zinc-500">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials Section */}
      <section className="w-full bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-wider text-xs">Client Trust</span>
            <p className="mt-4 font-heading font-bold leading-none text-[#0A2540] text-[88px] md:text-[140px]">
              {GOOGLE_RATING}<span className="text-[#C9A961]">/5</span>
            </p>
            <div className="mt-3 flex items-center gap-1 text-[#C9A961]">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-7 w-7 md:h-8 md:w-8 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="mt-5 text-lg md:text-2xl font-semibold text-zinc-700">
              Rated <span className="text-[#0A2540] font-bold">5.0 / 5</span> across <span className="text-[#0A2540] font-bold">{GOOGLE_REVIEW_COUNT} verified Google reviews</span>
            </p>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-gold text-sm mt-7">
              Read all {GOOGLE_REVIEW_COUNT} reviews on Google
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredReviews.map((item) => (
              <article key={item.name} className="testimonial-card-premium relative rounded-[20px] border border-zinc-200/60 bg-[#FAF8F3] p-8 shadow-sm flex flex-col justify-between overflow-hidden">
                <span className="text-[#C9A961]/15 font-heading text-[120px] leading-none absolute -top-4 -left-2 select-none pointer-events-none">&ldquo;</span>
                <div className="relative z-10 pt-4">
                  {/* 5-star rating */}
                  <div className="mb-4 flex items-center gap-0.5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-[#C9A961]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-700 italic">&quot;{item.quote}&quot;</p>
                </div>
                <div className="mt-8 border-t border-zinc-200/60 pt-4 relative z-10 flex items-center justify-between">
                  <p className="text-sm font-bold text-[#0A2540]">{item.name}</p>
                  <span className="text-xs font-semibold text-[#8C6D30]">Verified on Google</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section id="faq" className="w-full bg-[#FAF8F3] py-20 md:py-28 border-t border-zinc-200/50 scroll-mt-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-wider text-xs">FAQ</span>
            <h2 className="mt-3 font-heading text-[36px] font-bold leading-tight text-[#0A2540] md:text-[52px] tracking-tight">
              Common questions.
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <details key={q} className="faq-item group rounded-[16px] border border-zinc-200/80 bg-white p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer font-heading text-[18px] md:text-[20px] font-bold text-[#0A2540] list-none focus-visible:outline-none select-none">
                  <span>{q}</span>
                  {/* SVG chevron — rotates on open via CSS */}
                  <svg className="faq-chevron h-5 w-5 flex-shrink-0 text-[#C9A961]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </summary>
                <div className="mt-4 text-sm leading-relaxed text-zinc-600 border-t border-zinc-150 pt-4">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CalendlyEmbed />

      {/* 11. Final Closing CTA */}
      <section className="w-full bg-[#0A2540] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,169,97,0.06),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 flex flex-col items-center">
          {/* Decorative gold line */}
          <div className="mb-6 h-px w-12 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
          <span className="text-[#C9A961] font-semibold uppercase tracking-wider text-xs mb-4">Engage</span>
          <h2 className="font-heading text-[36px] font-bold leading-tight text-white md:text-[56px] tracking-tight">
            Start your career-branding engagement.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/75 leading-relaxed">
            Submit your current CV, target role, target market, and preferred service direction for review.
          </p>
          <div className="mt-10">
            <Link 
              href="/contact" 
              className="btn inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#E0C882] hover:from-[#E0C882] hover:to-[#C9A961] text-[#0A2540] font-bold text-base px-8 py-4 rounded-[12px] shadow-[0_4px_24px_rgba(201,169,97,0.35)] hover:shadow-[0_8px_32px_rgba(201,169,97,0.55)] transform hover:-translate-y-0.5 transition-all duration-300 border-none"
            >
              Submit an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
