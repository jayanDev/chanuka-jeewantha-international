import Link from "next/link";
import Image from "next/image";
import React from "react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = buildPageMetadata({
  title: "About Chanuka Jeewantha | Founder-Led Premium Career Branding",
  description:
    "Founder-led premium resume, CV, LinkedIn optimization, and executive career branding for senior professionals competing in competitive job markets.",
  path: "/about",
});

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
                    alt="Chanuka Jeewantha profile"
                    fill
                    sizes="(max-width: 1024px) 100vw, 75vw"
                    className="object-cover object-[center_10%]"
                    priority
                  />
                </div>
              </div>
              <p className="text-[20px] md:text-[24px] text-foreground font-medium leading-relaxed">
                I am Chanuka Jeewantha, a founder-led premium career branding specialist helping senior professionals present themselves clearly, confidently, and competitively.
              </p>
              <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed">
                With 8+ years of experience, I help candidates align their resume, CV, LinkedIn profile, portfolio, and personal brand to how modern hiring actually works. The approach is practical and strategy-first — built around ATS performance, recruiter readability, market-specific direction, and achievement-based positioning.
              </p>
              <p className="text-text-body text-[16px] md:text-[18px] leading-relaxed">
                I support high-performing graduates, mid-career professionals, senior leaders, executives, C-suite hires, and founders through role-specific strategy, clear communication, and proof-driven career storytelling.
              </p>
            </div>
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
