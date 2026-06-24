import Link from "next/link";
import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "US Resume vs UK CV vs Australian Resume (2026 Guide)",
  description:
    "The key differences between a US resume, a UK CV, and an Australian resume — length, photo, spelling, structure, and the ATS systems each market uses.",
  path: "/guides/us-resume-vs-uk-cv-vs-australian-resume",
  keywords: [
    "US resume vs UK CV",
    "Australian resume format",
    "resume vs CV differences",
    "CV vs resume by country",
    "Chanuka Jeewantha",
  ],
});

const rows: [string, string, string, string][] = [
  ["Document name", "Resume", "CV", "Resume or CV (used interchangeably)"],
  ["Typical length", "1 page (2 for senior)", "2 pages", "2–4 pages"],
  ["Photo", "No", "No", "No"],
  ["Date of birth / marital status", "No", "No", "No"],
  ["Spelling", "US English", "British English", "Australian English"],
  ["Opening section", "Professional summary", "Personal profile / statement", "Career summary"],
  ["Detail level", "Concise, achievement-led", "Moderate, profile-led", "Detailed; selection criteria for gov roles"],
  ["Common ATS", "Workday, Taleo, iCIMS, Greenhouse", "Workday, SAP, Tribepad, Eploy", "PageUp, JobAdder, Workday"],
];

const faqs = [
  {
    q: "Can I use the same resume for the US, UK, and Australia?",
    a: "Not without changes. The core experience is the same, but length, terminology (resume vs CV), spelling, and format differ by market — so each version should be tailored to the country you are applying in.",
  },
  {
    q: "Is a CV the same as a resume?",
    a: "It depends on the country. In the US a 'CV' means a long academic document and most jobs want a short resume; in the UK, Australia, and New Zealand 'CV' is the standard term for the everyday job-application document.",
  },
  {
    q: "Do any of these use a photo?",
    a: "No. US, UK, and Australian resumes and CVs should not include a photo, date of birth, or marital status, as this can raise anti-discrimination concerns.",
  },
  {
    q: "Which document is the longest?",
    a: "The Australian resume is typically the longest at two to four pages, followed by the two-page UK CV, with the US resume the shortest at one to two pages.",
  },
  {
    q: "Do all three need ATS optimization?",
    a: "Yes. Most mid-to-large employers in all three countries screen applications with an applicant tracking system, so a clean, keyword-aligned format matters everywhere — only the specific ATS platforms differ.",
  },
];

export default function ResumeComparisonGuide() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: "US Resume vs UK CV vs Australian Resume", path: "/guides/us-resume-vs-uk-cv-vs-australian-resume" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <section className="w-full bg-[#0A2540] pt-[40px] pb-[64px] sm:pt-[56px] sm:pb-[80px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-white/70 font-medium mb-6 text-sm">
            <Link href="/" className="hover:text-brand-main transition-colors">Home</Link>
            <span className="text-brand-main text-xs">/</span>
            <Link href="/guides" className="hover:text-brand-main transition-colors">Guides</Link>
          </div>
          <h1 className="font-heading text-[30px] sm:text-[44px] font-bold leading-[1.1] text-white">
            US Resume vs UK CV vs Australian Resume
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed">
            A US resume is a concise one-to-two-page document, a UK CV is a two-page document led by a personal profile,
            and an Australian resume is a longer two-to-four-page document that often addresses selection criteria. All
            three avoid photos and personal details, but they differ in length, terminology, and spelling.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[56px] sm:py-[80px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-[26px] sm:text-[34px] font-bold leading-tight text-foreground">
            Side-by-side comparison
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#0A2540] text-white">
                  <th className="p-3 font-semibold">Feature</th>
                  <th className="p-3 font-semibold">US Resume</th>
                  <th className="p-3 font-semibold">UK CV</th>
                  <th className="p-3 font-semibold">Australian Resume</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-zinc-50" : "bg-white"}>
                    <td className="p-3 font-semibold text-foreground border-b border-zinc-200">{r[0]}</td>
                    <td className="p-3 text-text-body border-b border-zinc-200">{r[1]}</td>
                    <td className="p-3 text-text-body border-b border-zinc-200">{r[2]}</td>
                    <td className="p-3 text-text-body border-b border-zinc-200">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-zinc-200 bg-zinc-50 py-[56px] sm:py-[80px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-8">
          <div>
            <h2 className="font-heading text-[24px] sm:text-[30px] font-bold text-foreground">The US résumé</h2>
            <p className="mt-3 text-text-body text-lg leading-relaxed">
              US employers expect a concise, one-page resume (two pages for senior or executive roles), written in US
              English, with a short professional summary and reverse-chronological, achievement-led bullet points. A
              multi-page &ldquo;CV&rdquo; is reserved for academic, scientific, or research roles. No photo or personal
              details, and heavy ATS optimization for systems like Workday, Taleo, iCIMS, and Greenhouse.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-[24px] sm:text-[30px] font-bold text-foreground">The UK CV</h2>
            <p className="mt-3 text-text-body text-lg leading-relaxed">
              In the UK the document is always called a CV and runs to about two pages, opening with a concise personal
              profile. It uses British spelling throughout and omits photos and dates of birth. UK employers and the NHS
              commonly use Workday, SAP SuccessFactors, and UK-native systems such as Tribepad and Eploy.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-[24px] sm:text-[30px] font-bold text-foreground">The Australian resume</h2>
            <p className="mt-3 text-text-body text-lg leading-relaxed">
              Australian resumes are the most detailed of the three, often running two to four pages, and government and
              large-organisation roles frequently require you to address key selection criteria in STAR format. Australian
              spelling is used, and common ATS platforms include the locally built PageUp and JobAdder alongside Workday.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[56px] sm:py-[80px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-[24px] sm:text-[32px] font-bold text-foreground">
            Applying in one of these markets?
          </h2>
          <p className="mt-4 text-text-body text-lg leading-relaxed">
            Get a personally written, ATS-optimized resume or CV tailored to the conventions of your target country.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/cv-writing/usa" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-zinc-300 px-6 py-3 text-[15px] font-semibold text-foreground transition-colors hover:border-brand-main">USA</Link>
            <Link href="/cv-writing/uk" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-zinc-300 px-6 py-3 text-[15px] font-semibold text-foreground transition-colors hover:border-brand-main">UK</Link>
            <Link href="/cv-writing/australia" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-zinc-300 px-6 py-3 text-[15px] font-semibold text-foreground transition-colors hover:border-brand-main">Australia</Link>
            <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-brand-main px-6 py-3 text-[15px] font-semibold text-[#0A2540] transition-colors hover:bg-[#0A2540] hover:text-white">View packages</Link>
          </div>
        </div>
      </section>

      <FAQSection heading="US Resume vs UK CV vs Australian Resume — FAQ" items={faqs} className="bg-zinc-50 border-t border-zinc-200" />
    </>
  );
}
