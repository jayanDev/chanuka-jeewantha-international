import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimatedServiceTextVisual from "@/components/AnimatedServiceTextVisual";
import FAQSection from "@/components/FAQSection";
import SubscribeForm from "@/components/SubscribeForm";
import { cvWritingFaqs, linkedinFaqs } from "@/lib/aeo-faqs";
import { formatLkr, packageProducts } from "@/lib/packages-catalog";
import { buildNoIndexMetadata, buildPageMetadata } from "@/lib/seo";

const serviceMetadataMap: Record<string, { label: string; title: string; description: string; keywords: string[] }> = {
  "cv-writing": {
    label: "Resume & CV Writing",
    title: "ATS Resume & CV Writing Service",
    description:
      "ATS-optimized resume and CV writing for professionals targeting roles in the US, UK, Australia, Canada, and New Zealand. Founder-led, personally written, recruiter-ready.",
    keywords: [
      "ATS resume writer",
      "professional resume writing service",
      "CV writing service",
      "ATS-friendly CV",
      "executive resume writer",
      "resume writing service USA",
      "CV writing service UK",
    ],
  },
  "cover-letter-writing": {
    label: "Cover Letter Writing",
    title: "Professional Cover Letter Writing",
    description:
      "Professional cover letter writing tailored to your target role, company, and market — for candidates applying across the US, UK, Australia, Canada, and New Zealand.",
    keywords: [
      "professional cover letter writing service",
      "cover letter writer",
      "executive cover letter",
      "cover letter writing service USA",
      "cover letter writing service UK",
    ],
  },
  "linkedin-optimization": {
    label: "LinkedIn Profile Optimization",
    title: "LinkedIn Profile Optimization Service",
    description:
      "Recruiter-facing LinkedIn profile optimization with keyword strategy, positioning, and personal branding for senior professionals in the US, UK, Australia, Canada, and New Zealand.",
    keywords: [
      "LinkedIn profile optimization",
      "LinkedIn optimization service",
      "LinkedIn makeover",
      "LinkedIn profile writer",
      "executive LinkedIn optimization",
    ],
  },
  "cv-review": {
    label: "CV Review",
    title: "CV Review & ATS Resume Audit",
    description:
      "Expert CV review and ATS resume audit with practical fixes for ATS compatibility, recruiter readiness, and stronger interview conversion across global job markets.",
    keywords: [
      "CV review service",
      "resume review",
      "free resume review",
      "ATS resume audit",
      "professional CV review",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(serviceMetadataMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const entry = serviceMetadataMap[slug];

  if (!entry) {
    return buildNoIndexMetadata({
      title: "Service Not Found",
      description: "The requested service page is unavailable.",
      path: `/services/${slug}`,
    });
  }

  return buildPageMetadata({
    title: entry.title,
    description: entry.description,
    path: `/services/${slug}`,
    keywords: [...entry.keywords, "Chanuka Jeewantha"],
  });
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = serviceMetadataMap[slug];

  if (!entry) {
    notFound();
  }

  const serviceCategoryMap: Record<string, string[]> = {
    "cv-writing": ["CV Writing"],
    "cover-letter-writing": ["Cover Letter Writing"],
    "linkedin-optimization": ["LinkedIn Optimization"],
    "cv-review": ["CV Review"],
  };

  const categoryMatch = serviceCategoryMap[slug] ?? [];
  const relatedPackages = packageProducts.filter((pkg) => categoryMatch.includes(pkg.category));
  const oneRowServiceSlugs = ["cv-writing", "cover-letter-writing", "linkedin-optimization"];
  const relatedPackagesGridClass =
    oneRowServiceSlugs.includes(slug) && relatedPackages.length === 3
      ? "not-prose grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3"
      : "not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mt-4";

  return (
    <>
      <section className="w-full bg-foreground text-background pt-[36px] sm:pt-[50px] pb-[72px] sm:pb-[96px] relative overflow-hidden">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-text-light font-medium mb-6">
            <Link href="/" className="hover:text-brand-main transition-colors">Home</Link>
            <span className="text-brand-main text-xs">/</span>
            <Link href="/services" className="hover:text-brand-main transition-colors">Services</Link>
            <span className="text-brand-main text-xs">/</span>
            <span className="text-brand-main">{entry.label}</span>
          </div>
          <h1 className="font-heading text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] max-w-4xl !text-white">
            {entry.label} <span className="text-brand-main">Service.</span>
          </h1>
        </div>
      </section>

      <section className="w-full py-[64px] sm:py-[80px] md:py-[96px] bg-white">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl relative w-full aspect-[21/9] bg-zinc-200 rounded-[24px] mb-12 overflow-hidden">
            <AnimatedServiceTextVisual label={entry.label} variant="dark" className="h-full min-h-full rounded-[24px]" />
          </div>

          <article className="prose prose-lg mx-auto max-w-4xl prose-headings:font-heading prose-headings:text-foreground prose-p:text-text-body prose-a:text-brand-main">
            <h2>Overview</h2>
            <p>
              In today&#39;s hiring environment, your professional profile must be clear, role-aligned, and results-focused. This {entry.label.toLowerCase()} service is designed to improve how recruiters and hiring managers understand your value.
            </p>
            {slug === "cv-writing" && (
              <p>
                CV writing is now organized into three clear package levels: Student, Professional, and Executive. Each package has its own positioning depth, ATS target, delivery window, and content strategy so candidates can choose the right level for their current career stage.
              </p>
            )}
            {slug === "cover-letter-writing" && (
              <p>
                Cover letter writing is now organized into three clear package levels: Student, Professional, and Executive. Each package is written around your career stage, target role, and the kind of first impression you need to create.
              </p>
            )}
            {slug === "linkedin-optimization" && (
              <p>
                LinkedIn account optimization is now organized into three clear package levels: Student, Professional, and Executive. Each package improves profile clarity, keyword direction, visibility, and personal branding for a different career stage.
              </p>
            )}

            <h3>My Approach</h3>
            <p>
              My method is practical and strategy-driven. I combine role targeting, achievement-focused storytelling, and hiring-market expectations so your profile performs in real selection processes.
            </p>

            <ul>
              <li><strong>Role Clarity:</strong> Define target roles and realistic positioning.</li>
              <li><strong>Content Strategy:</strong> Prioritize proof, metrics, and relevant keywords.</li>
              <li><strong>Execution:</strong> Build recruiter-friendly and ATS-compatible outputs.</li>
              <li><strong>Refinement:</strong> Improve messaging based on market response.</li>
            </ul>

            <h3>The Outcome</h3>
            <p>
              The outcome is a stronger professional identity that improves shortlisting potential, interview conversion, and career direction confidence.
            </p>

            {relatedPackages.length > 0 && (
              <>
                <h3>Explore Related Packages</h3>
                <div className={relatedPackagesGridClass}>
                  {relatedPackages.map((pkg) => (
                    <div key={pkg.slug} className="rounded-[14px] border border-zinc-200 p-4 bg-zinc-50">
                      <AnimatedServiceTextVisual label={pkg.name} className="mb-4 min-h-[120px] rounded-[12px]" />
                      <p className="font-semibold text-foreground mb-2">{pkg.name}</p>
                      <p className="text-sm text-text-body mb-3">{pkg.description ?? pkg.audience}</p>
                      <div className="mb-4 grid grid-cols-2 gap-2 text-xs">
                        <span className="rounded-[10px] bg-white px-3 py-2 font-semibold text-foreground">{formatLkr(pkg.priceLkr)}</span>
                        <span className="rounded-[10px] bg-white px-3 py-2 font-semibold text-foreground">{pkg.delivery}</span>
                      </div>
                      <Link
                        href={`/packages/${pkg.slug}`}
                        className="inline-flex items-center gap-2 rounded-[10px] bg-brand-main px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-brand-dark"
                      >
                        See More
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            )}
          </article>
        </div>
      </section>

      {slug === "cv-writing" && (
        <FAQSection
          heading="CV & Resume Writing — Common Questions"
          items={cvWritingFaqs}
          className="bg-zinc-50 border-t border-zinc-200"
        />
      )}
      {slug === "linkedin-optimization" && (
        <FAQSection
          heading="LinkedIn Optimization — Common Questions"
          items={linkedinFaqs}
          className="bg-zinc-50 border-t border-zinc-200"
        />
      )}

      <SubscribeForm />
    </>
  );
}
