import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FAQSection from "@/components/FAQSection";
import SubscribeForm from "@/components/SubscribeForm";
import { geoPages, geoPageSlugs, geoHreflangAlternates } from "@/lib/geo-pages";
import { buildNoIndexMetadata, buildPageMetadata } from "@/lib/seo";
import { buildAggregateRatingSchema, buildBreadcrumbList } from "@/lib/structured-data";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/lib/featured-reviews";

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
    alternateLanguages: geoHreflangAlternates,
    ogLocale: entry.lang.replace("-", "_"),
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

  const ratingLd = buildAggregateRatingSchema(
    `${doc === "resume" ? "Resume" : "CV"} Writing Service — ${entry.country}`,
    `/cv-writing/${entry.slug}`,
    { ratingValue: Number(GOOGLE_RATING), reviewCount: GOOGLE_REVIEW_COUNT },
  );

  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: entry.country, path: `/cv-writing/${entry.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <section className="w-full bg-[#0A2540] pt-[40px] pb-[72px] sm:pt-[56px] sm:pb-[96px] relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-brand-main/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-main/5 blur-3xl translate-x-1/3 translate-y-1/3" aria-hidden="true" />

        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-white/70 font-medium mb-6 text-sm">
            <Link href="/" className="hover:text-brand-main transition-colors">Home</Link>
            <span className="text-brand-main text-xs">/</span>
            <Link href="/services" className="hover:text-brand-main transition-colors">Services</Link>
            <span className="text-brand-main text-xs">/</span>
            <span className="text-brand-main">{entry.country}</span>
          </div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-main/30 bg-brand-main/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-main">
            {entry.heroEyebrow}
          </span>
          <h1 className="font-heading text-[32px] sm:text-[44px] md:text-[56px] font-bold leading-[1.08] max-w-4xl text-white">
            {entry.heroHeading}
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            {entry.heroSub}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/75">
            <span className="inline-flex items-center gap-2">
              <span className="text-brand-main tracking-tight" aria-hidden="true">★★★★★</span>
              <span className="font-semibold text-white">{GOOGLE_RATING}/5</span>
              <span>· {GOOGLE_REVIEW_COUNT} Google reviews</span>
            </span>
            <span className="hidden sm:inline text-white/25">|</span>
            <span>Personally written · ATS-optimized</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-brand-main px-7 py-3 text-[15px] font-semibold text-[#0A2540] shadow-lg shadow-brand-main/20 transition-all hover:bg-white hover:shadow-xl"
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

          <div className="mt-10 w-full max-w-3xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Specialist support for</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {entry.specialisms.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-white/85 backdrop-blur-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-10 rounded-2xl border border-zinc-200 border-t-[3px] border-t-brand-main bg-white p-6 sm:p-7 shadow-sm">
            <p className="text-text-body text-lg leading-relaxed">
              <strong className="text-foreground">Chanuka Jeewantha</strong> is a professional {doc} writer and
              career-branding specialist who works remotely with {entry.demonym} professionals — providing ATS-optimized{" "}
              {doc} writing, LinkedIn profile optimization, and cover letters. Backed by 380+ senior and executive
              placements across the USA, UK, Australia, Canada, and New Zealand, and rated {GOOGLE_RATING}/5 from{" "}
              {GOOGLE_REVIEW_COUNT} Google reviews.
            </p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-text-body">
              <li><span className="font-semibold text-foreground">Markets served:</span> USA, UK, Australia, Canada, New Zealand (remote)</li>
              <li><span className="font-semibold text-foreground">Best for:</span> {entry.specialisms.slice(0, 3).join(", ")} &amp; more</li>
              <li><span className="font-semibold text-foreground">Proof:</span> 380+ placements · {GOOGLE_RATING}/5 from {GOOGLE_REVIEW_COUNT} reviews</li>
              <li><span className="font-semibold text-foreground">Turnaround:</span> 3–5 business days (express available)</li>
              <li><span className="font-semibold text-foreground">Includes:</span> ATS optimization + cover letter</li>
            </ul>
          </div>
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
          <p className="mt-5 text-text-body text-lg leading-relaxed">
            Every {doc} is written from scratch around your target roles in {entry.country}, your seniority, and your
            industry. That means the right length and format for the local market, the keywords {entry.demonym} employers
            and their applicant tracking systems screen for, and achievement-led content that frames your impact in terms
            hiring managers recognise. The result is a document that gets past the software and convinces the person on
            the other side of it.
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
          <p className="mt-7 text-text-body text-base">
            Related guides:{" "}
            <Link href="/guides/us-resume-vs-uk-cv-vs-australian-resume" className="font-semibold text-brand-main hover:underline">
              US Resume vs UK CV vs Australian Resume
            </Link>{" "}
            ·{" "}
            <Link href="/guides/ats-cv-vs-normal-cv" className="font-semibold text-brand-main hover:underline">
              ATS CV vs Normal CV
            </Link>
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-brand-main font-semibold uppercase tracking-wider text-sm">ATS Systems</span>
          <h2 className="mt-3 font-heading text-[26px] sm:text-[36px] font-bold leading-tight text-foreground">
            Applicant tracking systems used across {entry.country}
          </h2>
          <p className="mt-5 text-text-body text-lg leading-relaxed">
            Most mid-to-large {entry.demonym} employers screen applications through an applicant tracking system before a
            human reads them. Your {doc} is written and formatted to parse cleanly through the platforms {entry.demonym}
            recruiters rely on most, with role-relevant keywords mapped from the job description so it ranks well inside
            the system while staying clear for the hiring manager who reads it next.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {entry.atsSystems.map((system) => (
              <span
                key={system}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-brand-main"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-main" aria-hidden="true" />
                {system}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-y border-zinc-200 bg-zinc-50 py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-brand-main font-semibold uppercase tracking-wider text-sm">Salary &amp; Seniority</span>
          <h2 className="mt-3 font-heading text-[26px] sm:text-[36px] font-bold leading-tight text-foreground">
            Positioned for your level in the {entry.country} market
          </h2>
          <p className="mt-5 text-text-body text-lg leading-relaxed">{entry.salaryContext}</p>
        </div>
      </section>

      <section className="w-full bg-white py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-brand-main font-semibold uppercase tracking-wider text-sm">Where We Help</span>
          <h2 className="mt-3 font-heading text-[26px] sm:text-[36px] font-bold leading-tight text-foreground">
            {doc === "resume" ? "Resume" : "CV"} writing for professionals across {entry.country}
          </h2>
          <p className="mt-5 text-text-body text-lg leading-relaxed">
            The service supports {entry.demonym} professionals nationwide and in every major hiring hub — including{" "}
            {entry.cities.slice(0, -1).join(", ")}, and {entry.cities[entry.cities.length - 1]} — as well as remote-first
            employers. Wherever you are targeting roles, your {doc} is tailored to local conventions and the expectations
            of recruiters in that market.
          </p>
        </div>
      </section>

      <section className="w-full border-y border-zinc-200 bg-zinc-50 py-[64px] sm:py-[88px]">
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

      <section className="w-full bg-white py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-brand-main font-semibold uppercase tracking-wider text-sm">How It Works</span>
          <h2 className="mt-3 font-heading text-[26px] sm:text-[36px] font-bold leading-tight text-foreground">
            How your {entry.country} {doc} comes together
          </h2>
          <ol className="mt-8 flex flex-col gap-6">
            {[
              {
                t: "Discovery",
                d: `We start with your goals, target roles, and the ${entry.country} employers you want to reach, so the ${doc} is built around real opportunities rather than a generic template.`,
              },
              {
                t: "Strategy & keywords",
                d: `Your experience is mapped against the roles you are targeting and the keywords ${entry.demonym} applicant tracking systems screen for, so nothing important is lost in parsing.`,
              },
              {
                t: "Writing & ATS formatting",
                d: `Each section is written from scratch with quantified, achievement-led content and formatted to the conventions ${entry.demonym} recruiters expect.`,
              },
              {
                t: "Review & revisions",
                d: "You review the draft and we refine it together until it is ready to send — revisions are included.",
              },
            ].map((step, i) => (
              <li key={step.t} className="flex gap-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-main text-[15px] font-bold text-[#0A2540]">
                  {i + 1}
                </span>
                <div>
                  <span className="font-heading text-[18px] font-bold text-foreground">{step.t}</span>
                  <p className="mt-1 text-text-body text-base leading-relaxed">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
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
