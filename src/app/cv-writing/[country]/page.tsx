import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FAQSection from "@/components/FAQSection";
import SubscribeForm from "@/components/SubscribeForm";
import { geoPages, geoPageSlugs } from "@/lib/geo-pages";
import { buildNoIndexMetadata, buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return geoPageSlugs.map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const entry = geoPages[country];

  if (!entry) {
    return buildNoIndexMetadata({
      title: "Page Not Found",
      description: "The requested page is unavailable.",
      path: `/cv-writing/${country}`,
    });
  }

  return buildPageMetadata({
    title: entry.title,
    description: entry.description,
    path: `/cv-writing/${entry.slug}`,
    keywords: [...entry.keywords, "Chanuka Jeewantha"],
  });
}

const serviceLinks = [
  { href: "/services/cv-writing", label: "ATS Resume & CV Writing" },
  { href: "/services/linkedin-optimization", label: "LinkedIn Profile Optimization" },
  { href: "/services/cover-letter-writing", label: "Cover Letter Writing" },
  { href: "/services/cv-review", label: "CV Review & ATS Audit" },
];

export default async function GeoLandingPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const entry = geoPages[country];

  if (!entry) {
    notFound();
  }

  const doc = entry.docTerm;

  return (
    <>
      <section className="w-full bg-[#0A2540] pt-[40px] pb-[72px] sm:pt-[56px] sm:pb-[96px] relative overflow-hidden">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-white/70 font-medium mb-6 text-sm">
            <Link href="/" className="hover:text-brand-main transition-colors">Home</Link>
            <span className="text-brand-main text-xs">/</span>
            <Link href="/services" className="hover:text-brand-main transition-colors">Services</Link>
            <span className="text-brand-main text-xs">/</span>
            <span className="text-brand-main">{entry.country}</span>
          </div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-main">{entry.heroEyebrow}</p>
          <h1 className="font-heading text-[32px] sm:text-[44px] md:text-[56px] font-bold leading-[1.08] max-w-4xl text-white">
            {entry.heroHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            {entry.heroSub}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-brand-main px-7 py-3 text-[15px] font-semibold text-[#0A2540] transition-colors hover:bg-white"
            >
              Request Career Support
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-white/30 px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:border-brand-main hover:text-brand-main"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-brand-main font-semibold uppercase tracking-wider text-sm">Overview</span>
          <h2 className="mt-3 font-heading text-[28px] sm:text-[40px] font-bold leading-tight text-foreground">
            {doc === "resume" ? "Resume" : "CV"} writing built for the {entry.country} job market
          </h2>
          <p className="mt-5 text-text-body text-lg leading-relaxed">
            Applying for roles in {entry.country} means competing against candidates who tailor their {doc} to local
            hiring conventions and the applicant tracking systems employers rely on. This service delivers a personally
            written, ATS-optimized {doc} aligned to {entry.demonym} recruiter expectations — no templates, no junior
            outsourcing.
          </p>
        </div>
      </section>

      <section className="w-full border-y border-zinc-200 bg-zinc-50 py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-brand-main font-semibold uppercase tracking-wider text-sm">What {entry.country} Employers Expect</span>
          <h2 className="mt-3 font-heading text-[26px] sm:text-[36px] font-bold leading-tight text-foreground">
            {entry.country} {doc} conventions we build around
          </h2>
          <ul className="mt-8 flex flex-col gap-5">
            {entry.conventions.map((point) => (
              <li key={point} className="flex gap-3 text-text-body text-base leading-relaxed">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-main" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full bg-white py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-brand-main font-semibold uppercase tracking-wider text-sm">Services</span>
          <h2 className="mt-3 font-heading text-[26px] sm:text-[36px] font-bold leading-tight text-foreground">
            Career services for {entry.demonym} professionals
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-[14px] border border-zinc-200 bg-white p-5 transition-colors hover:border-brand-main"
              >
                <span className="font-heading text-[18px] font-bold text-foreground group-hover:text-brand-main transition-colors">
                  {service.label}
                </span>
                <span className="mt-2 block text-sm text-text-body">Explore the service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection
        heading={`${entry.country} ${doc === "resume" ? "Resume" : "CV"} Writing — Common Questions`}
        items={entry.faqs}
        className="bg-zinc-50 border-t border-zinc-200"
      />

      <SubscribeForm />
    </>
  );
}
