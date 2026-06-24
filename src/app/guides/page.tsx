import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Career & CV Guides | Chanuka Jeewantha",
  description:
    "Reference guides on resume and CV writing across markets — US resume vs UK CV vs Australian resume, ATS CV vs normal CV, and more.",
  path: "/guides",
  keywords: ["CV writing guides", "resume vs CV", "ATS CV guide", "Chanuka Jeewantha"],
});

const guides = [
  {
    href: "/guides/us-resume-vs-uk-cv-vs-australian-resume",
    title: "US Resume vs UK CV vs Australian Resume",
    blurb: "How résumé and CV conventions differ across the US, UK, and Australia — length, photo, spelling, and ATS.",
  },
  {
    href: "/guides/ats-cv-vs-normal-cv",
    title: "ATS CV vs Normal CV",
    blurb: "What makes a CV ATS-friendly, why designer CVs fail applicant tracking systems, and how to fix yours.",
  },
];

export default function GuidesIndexPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <section className="w-full bg-[#0A2540] pt-[40px] pb-[72px] sm:pt-[56px] sm:pb-[96px]">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-main">Career & CV Guides</p>
          <h1 className="font-heading text-[32px] sm:text-[44px] md:text-[56px] font-bold leading-[1.08] max-w-4xl text-white">
            Reference guides for résumés, CVs, and ATS
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            Clear, practical answers on how résumés and CVs work across markets and applicant tracking systems — written by
            a professional resume writer.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 grid grid-cols-1 gap-5">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group rounded-[16px] border border-zinc-200 bg-white p-6 transition-colors hover:border-brand-main"
            >
              <span className="font-heading text-[20px] font-bold text-foreground group-hover:text-brand-main transition-colors">
                {g.title}
              </span>
              <p className="mt-2 text-text-body text-base leading-relaxed">{g.blurb}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-main">Read the guide →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
