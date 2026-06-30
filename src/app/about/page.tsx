import Link from "next/link";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = buildPageMetadata({
  title: "About Chanuka Jeewantha | Premium US Resume Writer",
  description:
    "Founder-led premium resume writing for US professionals. 8+ years of experience, 40,000+ LinkedIn followers, and a 5.0-star Google rating across 69 reviews.",
  path: "/about",
});

const aboutStats = [
  { value: "8+", label: "Years writing for senior hires" },
  { value: "40,000+", label: "LinkedIn followers" },
  { value: "5.0★", label: "Google rating · 69 reviews" },
  { value: "90-day", label: "Interview guarantee" },
];

export default function AboutPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <PageHero
        title={<>Senior careers are built through <span className="text-[#C9A961]">strategy, proof, and positioning</span></>}
        marqueeText="ABOUT US"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]}
      />

      {/* 2. My Mission / Story Section */}
      <section className="w-full py-[64px] sm:py-[80px] md:py-[96px] bg-white">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Column (Sticky/Small) */}
            <div className="w-full lg:w-1/4 flex-shrink-0">
              <span className="text-brand-main font-semibold tracking-wider uppercase mb-2 block">My Story</span>
              <h2 className="text-[32px] md:text-[40px] font-bold font-heading text-foreground leading-[1.2] lg:sticky lg:top-32">
                About Chanuka Jeewantha
              </h2>
            </div>
            
            {/* Right Column (Content) */}
            <div className="w-full lg:w-3/4 flex flex-col gap-8">
              <div className="hero-image-wrapper relative w-full max-w-2xl">
                {/* Elegant backdrop offset frame with hover glow */}
                <div className="absolute -inset-3 rounded-[24px] border border-[#C9A961]/25 translate-x-3 translate-y-3 pointer-events-none" />
                <div className="hero-frame-glow absolute -inset-4 rounded-[28px] bg-[#C9A961]/10 blur-xl pointer-events-none" />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] border border-zinc-200 bg-black shadow-lg">
                  <Image
                    src="/images/about-page-chanuka.jpg"
                    alt="Chanuka Jeewantha, premium US resume writer and career branding specialist"
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-cover object-[center_10%]"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-[20px] md:text-[24px] text-foreground font-medium leading-relaxed">
                I am Chanuka Jeewantha, a founder-led resume writer and career branding specialist helping US professionals present themselves clearly, confidently, and competitively.
              </p>
              <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed">
                Over the last 8+ years I&apos;ve written and rebuilt resumes, executive CVs, and LinkedIn profiles for candidates competing in the US job market - from software engineers and healthcare professionals to finance leaders, federal applicants, and C-suite executives. Every document is written personally by me. No outsourcing, no junior staff, no AI-generated filler.
              </p>
              <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed">
                My approach is practical and strategy-first - built around the systems that actually decide US hiring: applicant tracking systems (ATS), recruiter scanning behavior, and the achievement-based positioning that hiring managers respond to. I study how US recruiters search, what keywords matter for each role, and how to frame your experience so it reads as senior, credible, and worth a call.
              </p>
              <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed">
                That work has built a following of <strong>40,000+ professionals</strong> on LinkedIn who rely on my career advice, and a <strong>5.0-star rating across 69 verified Google reviews</strong>. I stand behind every package with a 90-day interview guarantee: if you don&apos;t land interview calls, you get your money back.
              </p>

              {/* Verifiable proof links */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/in/chanuka-jeewantha/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-[#0A66C2] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#084d92]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                  Verify on LinkedIn
                </a>
                <a
                  href="https://maps.app.goo.gl/7osd53bHxoc9jQwaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[10px] border border-zinc-300 bg-white px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:border-brand-main hover:text-brand-main"
                >
                  <span className="text-[#C9A961]">★</span>
                  Read 69 Google Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="w-full bg-[#0A2540] py-12 md:py-16">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-[34px] font-bold leading-none text-[#C9A961] md:text-[44px]">{stat.value}</p>
                <p className="mt-2 text-xs text-white/70 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="w-full bg-white py-[64px] sm:py-[80px] md:py-[96px]">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[#8C6D30] font-semibold tracking-wider uppercase text-xs">How I Work</span>
            <h2 className="mt-3 text-[28px] md:text-[40px] font-bold font-heading text-foreground leading-tight">
              What you get when you work with me directly.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Written personally - never outsourced",
                desc: "Every resume, CV, and LinkedIn profile is written by me from scratch. You work with the person whose name is on the door, not a rotating pool of freelancers.",
              },
              {
                title: "Built for US hiring systems",
                desc: "ATS-optimized formatting, US-market keywords, and recruiter-tested structure - so your resume survives the screen and reads as senior to the hiring manager.",
              },
              {
                title: "Backed by a real guarantee",
                desc: "A 90-day interview guarantee on every package. If the documents don't generate interview calls, you get a full refund. The risk sits with me, not you.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-[16px] border border-zinc-200/80 bg-[#FAF8F3] p-7">
                <h3 className="font-heading text-[19px] font-bold text-[#0A2540]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-[40px] sm:py-[56px] bg-[#FAF8F3] border-t border-zinc-200/50">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <h2 className="text-[24px] md:text-[30px] font-bold font-heading text-foreground mb-3">
            Explore More Career Support
          </h2>
          <p className="text-text-body mb-5">
            Continue with service details, free tools, workshop options, or practical career insights.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/services" className="btn btn-secondary-gold text-sm">
              Explore Services
            </Link>
            <Link href="/tools" className="btn btn-secondary-gold text-sm">
              Use Free Tools
            </Link>
            <Link href="/workshops" className="btn btn-secondary-gold text-sm">
              View Workshops
            </Link>
            <Link href="/blog" className="btn btn-secondary-gold text-sm">
              Read Career Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
