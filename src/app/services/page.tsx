import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import AnimatedServiceTextVisual from "@/components/AnimatedServiceTextVisual";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import { industryLandingPages } from "@/lib/industry-pages";
import ServicesPackageFilter from "@/app/services/ServicesPackageFilter";

export const metadata: Metadata = buildPageMetadata({
  title: "Premium Career Branding Services | Resume, CV & LinkedIn Optimization",
  description:
    "Premium resume, CV, LinkedIn optimization, cover letter, and executive career-branding services by Chanuka Jeewantha.",
  path: "/services",
});

export default function ServicesPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);
  const industryHighlights = industryLandingPages.slice(0, 3);

  const services = [
    {
      title: "ATS Resume & CV Writing",
      desc: "ATS-optimized resumes and CVs engineered for recruiter scrutiny, hiring-manager logic, and the seniority you are actually competing for.",
      isMostPopular: true,
      href: "/services/packages/ats-cv",
    },
    {
      title: "LinkedIn Profile Optimization",
      desc: "A recruiter-facing LinkedIn rewrite built around clear positioning, keyword strength, and the credibility signals senior hires are searched on.",
      href: "/services/packages/linkedin",
    },
    {
      title: "Cover Letter Writing",
      desc: "Tailored cover letters that translate your experience into the language of the role, the company, and the hiring committee.",
      href: "/services/packages/cover-letter",
    },
    {
      title: "Modern CV Format for Cross-Border Applications",
      desc: "Senior-level resume and CV formats tailored to the conventions of your target market — for cross-border applications and recruiter-led searches.",
      href: "/services/packages/foreign-cv",
    },
    {
      title: "Graphical CV / Premium Design CV",
      desc: "A premium visual CV for industries where presentation, narrative, and personal brand carry real weight in the hiring decision.",
      href: "/services/packages/graphical-cv",
    },
    {
      title: "Career Consultation",
      desc: "Founder-led strategy sessions for professionals, executives, and founders who need clarity on positioning, market fit, and their next move.",
      href: "/services/packages/consultation",
    },
    {
      title: "Personal Website & Career Portfolio",
      desc: "A portfolio-style personal website that gives your career brand a public proof layer beyond the CV, LinkedIn profile, and application documents.",
      href: "/services/personal-website",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="reveal-section w-full bg-foreground text-background pt-[36px] sm:pt-[50px] pb-[72px] sm:pb-[96px] relative overflow-hidden">
        <div className="absolute top-[150px] left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none flex whitespace-nowrap">
          <div className="animate-[marquee_30s_linear_infinite] flex gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="text-[72px] sm:text-[120px] md:text-[200px] font-heading font-extrabold uppercase leading-none">
                SERVICES
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-text-light font-medium mb-6">
            <Link href="/" className="hover:text-brand-main transition-colors">Home</Link>
            <span className="text-brand-main text-xs">/</span>
            <span className="text-brand-main">Services</span>
          </div>
          <h1 className="font-heading text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] max-w-5xl !text-white">
            Premium Career Branding Services for <span className="text-brand-main">Senior Professionals</span>
          </h1>
        </div>
      </section>

 <section className="reveal-section w-full py-[64px] sm:py-[80px] md:py-[96px] bg-white">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-brand-main font-semibold tracking-wider uppercase mb-2 block">Premium Services</span>
              <h2 className="text-[30px] sm:text-[40px] md:text-[56px] font-bold font-heading text-foreground leading-[1.1]">
                Resume, CV, LinkedIn, and Career Strategy Support.
              </h2>
              <span className="mt-3 inline-block rounded-full bg-brand-main/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
                Priority Service: ATS Resume / CV Writing
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-[#f0f9ff]/40 rounded-[20px] p-8 md:p-12 hover:shadow-xl transition-shadow flex flex-col group border ${
                  service.isMostPopular ? "border-brand-main" : "border-[#e1f5fe]"
                }`}
              >
                {service.isMostPopular && (
 <div className="mb-5 inline-flex items-center gap-2 rounded-[10px] border border-brand-main/40 bg-white px-3 py-1.5 shadow-sm">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-main text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark">Client Favorite</span>
                  </div>
                )}
 <div className="relative mb-8 h-[250px] w-full overflow-hidden rounded-[15px] border border-zinc-200 bg-zinc-100">
                  <AnimatedServiceTextVisual label={service.title} className="h-full min-h-full transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
                <h3 className="text-[28px] font-bold font-heading mb-4 text-foreground">{service.title}</h3>
                <p className="text-text-body mb-8 flex-grow text-lg leading-relaxed">
                  {service.desc}
                </p>
                <Link href={service.href} className="text-brand-dark hover:text-brand-main font-semibold flex items-center gap-2 group-hover:translate-x-2 transition-transform text-lg">
                  See More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[16px] border border-[#e1f5fe] bg-[#f0f9ff]/60 p-6 text-center">
            <p className="text-text-body text-lg">
              Use the filters below to compare Signature Series pricing by service type and career level.
            </p>
          </div>

          <ServicesPackageFilter />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
 <article className="rounded-[18px] border border-zinc-200 bg-zinc-50 p-6">
              <span className="inline-flex rounded-full bg-brand-main/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
                Free Visibility Layer
              </span>
              <h2 className="mt-4 text-[26px] font-bold font-heading text-foreground">Use free career tools before you buy</h2>
              <p className="mt-3 text-text-body">
                Try the ATS audit, LinkedIn headline generator, and interview story bank to improve readiness before requesting premium support.
              </p>
              <Link href="/tools" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark transition-colors hover:text-brand-main">
                Explore Free Tools
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </article>

 <article className="rounded-[18px] border border-zinc-200 bg-zinc-50 p-6">
              <span className="inline-flex rounded-full bg-brand-main/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
                Group Programs
              </span>
              <h2 className="mt-4 text-[26px] font-bold font-heading text-foreground">Book workshops for campuses and institutes</h2>
              <p className="mt-3 text-text-body">
                Extend premium career strategy to student communities, university career units, and professional groups through practical workshops.
              </p>
              <Link href="/workshops" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark transition-colors hover:text-brand-main">
                View Workshops
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </article>
          </div>

 <section className="mt-10 rounded-[18px] border border-zinc-200 bg-white p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-brand-main/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
                  SEO Growth Layer
                </span>
                <h2 className="mt-4 text-[28px] font-bold font-heading text-foreground">Browse audience-specific service pages</h2>
                <p className="mt-3 text-text-body">
                  Explore tailored guidance for different industries and role groups instead of relying on one generic service path.
                </p>
              </div>
              <Link href="/services/industries" className="rounded-[10px] bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-brand-main">
                View All Industry Pages
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {industryHighlights.map((item) => (
 <article key={item.slug} className="rounded-[16px] border border-zinc-200 bg-zinc-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-main">{item.name}</p>
 <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.heroSummary}</p>
                  <Link href={`/services/industries/${item.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark transition-colors hover:text-brand-main">
                    Open Page
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </article>
              ))}
            </div>
          </section>

 <aside className="mt-8 rounded-[16px] border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-[24px] font-bold font-heading text-foreground mb-3">Plan Your Next Step</h2>
            <p className="text-text-body mb-5">
              Compare packages, check free and paid resources, or contact me for custom guidance.
            </p>
            <div className="flex flex-wrap gap-3">
 <Link href="/pricing" className="rounded-[10px] border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-main hover:text-brand-main">
                Compare Pricing
              </Link>
 <Link href="/tools" className="rounded-[10px] border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-main hover:text-brand-main">
                Use Free Tools
              </Link>
 <Link href="/resources" className="rounded-[10px] border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-main hover:text-brand-main">
                Browse Resources
              </Link>
 <Link href="/services/industries" className="rounded-[10px] border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-main hover:text-brand-main">
                Industry Pages
              </Link>
 <Link href="/workshops" className="rounded-[10px] border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-main hover:text-brand-main">
                Book Workshops
              </Link>
 <Link href="/contact" className="rounded-[10px] border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-main hover:text-brand-main">
                Contact for Advice
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
