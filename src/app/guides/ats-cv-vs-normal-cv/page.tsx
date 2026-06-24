import Link from "next/link";
import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "ATS CV vs Normal CV: What's the Difference? (2026)",
  description:
    "An ATS CV is formatted so applicant tracking software can read it; a normal or designer CV prioritises visual design and often fails to parse. Here's how they differ and how to fix yours.",
  path: "/guides/ats-cv-vs-normal-cv",
  keywords: ["ATS CV vs normal CV", "ATS-friendly CV", "what is an ATS CV", "applicant tracking system CV", "Chanuka Jeewantha"],
});

const rows: [string, string, string][] = [
  ["Layout", "Single column", "Multi-column"],
  ["Section headings", "Standard (Experience, Education, Skills)", "Creative / custom labels"],
  ["Graphics & icons", "Avoided in the parse layer", "Heavy use"],
  ["Photo", "No", "Sometimes"],
  ["Fonts", "Standard, web-safe", "Decorative"],
  ["Keywords", "Mapped from the job description", "Often missing"],
  ["Tables & text boxes", "Avoided", "Common"],
  ["File type", "Text-based PDF or .docx", "Image-heavy PDF"],
  ["Parse success", "High", "Low / unpredictable"],
  ["Best for", "Online applications via an ATS", "In-person, networking, or direct creative submissions"],
];

const faqs = [
  {
    q: "Do all companies use an ATS?",
    a: "Most mid-to-large employers do, and many small companies use one through their job board. Because you usually can't tell from the outside, an ATS-friendly format is the safe default for any online application.",
  },
  {
    q: "Will a PDF pass an ATS?",
    a: "A text-based PDF exported from a word processor usually parses fine. A PDF that is really an image, or one built from heavy graphics and text boxes, often does not — a .docx is the safest format when in doubt.",
  },
  {
    q: "Should my CV have two columns?",
    a: "Avoid two columns for online applications. Many ATS parsers read left-to-right across the full page and scramble multi-column layouts, mixing your dates and job titles together.",
  },
  {
    q: "Can a CV be both ATS-friendly and well-designed?",
    a: "Yes, within limits. Clean typography, subtle colour, and clear hierarchy are fine. The rule is that anything carrying real information — headings, dates, achievements — must be live, selectable text in a single-column flow, not inside an image or text box.",
  },
  {
    q: "Is an ATS CV worse for human readers?",
    a: "No. A well-written ATS CV is just as readable for recruiters and hiring managers — it simply avoids design choices that break the software in between.",
  },
];

export default function AtsCvGuide() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: "ATS CV vs Normal CV", path: "/guides/ats-cv-vs-normal-cv" },
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
            ATS CV vs Normal CV
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/85 leading-relaxed">
            An ATS CV is formatted so applicant tracking software can read it — single column, standard headings, no text
            trapped in images, standard fonts, and keywords drawn from the job description. A &ldquo;normal&rdquo; or
            designer CV prioritises visual design, which often fails to parse. Since most employers screen applications
            with an ATS, an ATS-friendly format is safer for online applications.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[56px] sm:py-[80px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-[26px] sm:text-[34px] font-bold leading-tight text-foreground">
            ATS-friendly CV vs designer CV
          </h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#0A2540] text-white">
                  <th className="p-3 font-semibold">Feature</th>
                  <th className="p-3 font-semibold">ATS-friendly CV</th>
                  <th className="p-3 font-semibold">Designer / normal CV</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r[0]} className={i % 2 ? "bg-zinc-50" : "bg-white"}>
                    <td className="p-3 font-semibold text-foreground border-b border-zinc-200">{r[0]}</td>
                    <td className="p-3 text-text-body border-b border-zinc-200">{r[1]}</td>
                    <td className="p-3 text-text-body border-b border-zinc-200">{r[2]}</td>
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
            <h2 className="font-heading text-[24px] sm:text-[30px] font-bold text-foreground">What is an ATS?</h2>
            <p className="mt-3 text-text-body text-lg leading-relaxed">
              An applicant tracking system (ATS) is software employers use to collect, parse, and rank job applications.
              When you apply online, your CV is usually read by the ATS before any human sees it — it extracts your details
              into a database and scores them against the role. If the software can&rsquo;t read your CV correctly, strong
              experience can be missed entirely.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-[24px] sm:text-[30px] font-bold text-foreground">Why designer CVs fail</h2>
            <p className="mt-3 text-text-body text-lg leading-relaxed">
              Multi-column layouts, text inside graphics, icons standing in for words, headers and footers carrying key
              details, and decorative tables all confuse ATS parsers. The result is scrambled dates, missing job titles, or
              an application that scores poorly through no fault of your actual experience.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-[24px] sm:text-[30px] font-bold text-foreground">When a designed CV is fine</h2>
            <p className="mt-3 text-text-body text-lg leading-relaxed">
              If you are handing a CV directly to a person — at a networking event, an interview, or for a creative role
              reviewed by a human — a designed CV can work well. The risk is only with online applications that pass through
              an ATS first.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-[24px] sm:text-[30px] font-bold text-foreground">How to make a CV ATS-friendly</h2>
            <ul className="mt-3 flex flex-col gap-3">
              {[
                "Use a single-column layout and standard section headings.",
                "Keep all key information as live, selectable text — never inside an image or text box.",
                "Mirror the wording of the job description for skills and titles, naturally.",
                "Use a standard font and avoid header/footer content for anything important.",
                "Export as a text-based PDF or .docx, not an image.",
              ].map((tip) => (
                <li key={tip} className="flex gap-3 text-text-body text-base leading-relaxed">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-main" aria-hidden="true" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-[56px] sm:py-[80px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-[24px] sm:text-[32px] font-bold text-foreground">
            Want a CV that passes the ATS and impresses the recruiter?
          </h2>
          <p className="mt-4 text-text-body text-lg leading-relaxed">
            Every CV is built ATS-first and written to stay sharp for the human who reads it next.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/tools/ats-cv-audit" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-zinc-300 px-6 py-3 text-[15px] font-semibold text-foreground transition-colors hover:border-brand-main">Free ATS CV audit</Link>
            <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-brand-main px-6 py-3 text-[15px] font-semibold text-[#0A2540] transition-colors hover:bg-[#0A2540] hover:text-white">View packages</Link>
          </div>
        </div>
      </section>

      <FAQSection heading="ATS CV vs Normal CV — FAQ" items={faqs} className="bg-zinc-50 border-t border-zinc-200" />
    </>
  );
}
