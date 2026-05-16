import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "International Bundle Packages | Chanuka Jeewantha",
  description:
    "Premium international resume, LinkedIn, cover letter, foreign job CV, migration, executive, and C-suite career branding bundles in USD.",
  path: "/bundles",
});

const bundles = [
  {
    name: "International Starter Pack",
    price: "$179",
    label: "For Students & Fresh Graduates",
    includes: ["ATS CV / Resume, Fresh Graduate level", "Cover Letter", "LinkedIn Optimization", "7-day delivery", "Save $98 vs separate services"],
    cta: "Choose Starter Pack",
  },
  {
    name: "International Career Pack",
    price: "$349",
    label: "Most Popular",
    audience: "Working Professionals",
    highlighted: true,
    includes: ["Premium ATS CV / Resume, Professional level", "LinkedIn Optimization", "Cover Letter", "30-day support", "1 round of revisions", "Save $128 vs separate services"],
    cta: "Choose Career Pack",
  },
  {
    name: "Global Migration Pack",
    price: "$499",
    audience: "Professionals migrating between countries",
    includes: ["Country-Specific ATS CV", "International Foreign Job CV", "LinkedIn Optimization", "Cover Letter, 2 versions for different roles", "60-day support", "Save $176 vs separate services"],
    cta: "Choose Migration Pack",
  },
  {
    name: "Executive Brand Suite",
    price: "$899",
    audience: "Senior Professionals & Executives",
    includes: ["Executive ATS CV / Resume", "Executive LinkedIn Optimization", "Executive Cover Letter", "International Foreign Job CV", "1-Hour Strategy Consultation", "90-day premium support", "Save $327 vs separate services"],
    cta: "Choose Executive Brand Suite",
  },
  {
    name: "C-Suite Premium",
    price: "$1,499",
    audience: "C-Suite, Directors, Founders",
    premium: true,
    includes: ["C-Suite Premium CV / Resume", "Executive LinkedIn Optimization with content strategy", "Cover Letter", "International Foreign Job CV", "2-Hour Strategy Sessions", "6-month support", "Quarterly LinkedIn refresh", "Save $647 vs separate services"],
    cta: "Choose C-Suite Premium",
  },
];

export default function BundlesPage() {
  return (
    <>
      <section className="w-full bg-foreground px-4 py-[72px] text-center text-background sm:px-6 md:py-[96px]">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-brand-main">International Bundles</p>
          <h1 className="mt-4 font-heading text-[38px] font-bold leading-tight text-white md:text-[68px]">
            Premium bundle packages for global career branding.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-white/75">
            Complete resume, CV, LinkedIn, cover letter, foreign job CV, and strategy bundles for international applications and leadership positioning.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1512px] grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-5">
          {bundles.map((bundle) => (
            <article
              key={bundle.name}
              className={`flex h-full flex-col rounded-[18px] border p-6 shadow-sm ${
                bundle.premium
                  ? "border-zinc-900 bg-zinc-950 text-white"
                  : bundle.highlighted
                    ? "border-[#C9A961] bg-[#FFFCF3] shadow-lg"
                    : "border-zinc-200 bg-white"
              }`}
            >
              {bundle.highlighted && <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A961]">Most Popular</p>}
              {bundle.premium && <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A961]">Premium</p>}
              <h2 className={`font-heading text-[24px] font-bold ${bundle.premium ? "text-white" : "text-foreground"}`}>{bundle.name}</h2>
              <p className={`mt-2 text-sm ${bundle.premium ? "text-white/70" : "text-zinc-600"}`}>{bundle.label ?? bundle.audience}</p>
              <p className={`mt-6 font-heading text-[36px] font-bold ${bundle.premium ? "text-white" : "text-foreground"}`}>{bundle.price}</p>
              <ul className={`mt-6 flex-grow space-y-3 text-sm ${bundle.premium ? "text-white/80" : "text-zinc-700"}`}>
                {bundle.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-main" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?package=${encodeURIComponent(bundle.name)}`}
                className={`mt-7 inline-flex min-h-11 items-center justify-center rounded-[10px] px-4 py-3 text-center text-sm font-semibold ${
                  bundle.premium ? "bg-[#C9A961] text-zinc-950 hover:bg-white" : "bg-brand-main text-white hover:bg-foreground"
                }`}
              >
                {bundle.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
