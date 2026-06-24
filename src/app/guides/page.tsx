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
    blurb: "How résumé and CV conventions differ across the US, UK, and Australia — length, photo, spelling, and the ATS systems each market uses.",
    tag: "Cross-market",
    read: "6 min read",
  },
  {
    href: "/guides/ats-cv-vs-normal-cv",
    title: "ATS CV vs Normal CV",
    blurb: "What makes a CV ATS-friendly, why designer CVs fail applicant tracking systems, and a checklist to fix yours.",
    tag: "ATS",
    read: "5 min read",
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

      <section className="w-full bg-[#0A2540] pt-[44px] pb-[80px] sm:pt-[60px] sm:pb-[104px] relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-brand-main/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-main/5 blur-3xl translate-x-1/3 translate-y-1/3" aria-hidden="true" />

        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-main/30 bg-brand-main/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-main">
            Career &amp; CV Guides
          </span>
          <h1 className="font-heading text-[32px] sm:text-[44px] md:text-[56px] font-bold leading-[1.08] max-w-4xl text-white">
            Reference guides for résumés, CVs &amp; ATS
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
            Clear, practical answers on how résumés and CVs work across markets and applicant tracking systems — written by
            a professional resume writer, not generated filler.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[64px] sm:py-[88px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6">
            {guides.map((g, i) => (
              <Link
                key={g.href}
                href={g.href}
                className="group relative flex gap-5 overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-sm transition-all hover:border-brand-main hover:shadow-md"
              >
                <span className="absolute left-0 top-0 h-full w-[3px] bg-brand-main opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0A2540] text-[15px] font-bold text-brand-main">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-main/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-brand-dark">{g.tag}</span>
                    <span className="text-xs text-text-body/70">{g.read}</span>
                  </div>
                  <h2 className="mt-2 font-heading text-[20px] sm:text-[22px] font-bold text-foreground group-hover:text-brand-main transition-colors">
                    {g.title}
                  </h2>
                  <p className="mt-2 text-text-body text-base leading-relaxed">{g.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-main">
                    Read the guide
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-7 text-center">
            <h2 className="font-heading text-[22px] sm:text-[26px] font-bold text-foreground">Need it done for you?</h2>
            <p className="mt-3 text-text-body text-base leading-relaxed max-w-xl mx-auto">
              Get a personally written, ATS-optimized resume or CV tailored to your target market and role.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-brand-main px-7 py-3 text-[15px] font-semibold text-[#0A2540] shadow-lg shadow-brand-main/20 transition-all hover:bg-[#0A2540] hover:text-white">
                View packages
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-zinc-300 px-7 py-3 text-[15px] font-semibold text-foreground transition-colors hover:border-brand-main">
                Talk to Chanuka
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
