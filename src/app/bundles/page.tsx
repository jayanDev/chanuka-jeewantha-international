import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bundle Packages | Chanuka Jeewantha",
  description:
    "Premium resume, LinkedIn, cover letter, cross-border career-move, executive, and C-suite career-branding bundles in USD.",
  path: "/bundles",
});

const bundles = [
  {
    name: "Starter Pack",
    price: "$179",
    label: "For graduates and early-career candidates",
    includes: ["ATS Resume / CV — graduate level", "Cover Letter", "LinkedIn Optimization", "7-day delivery", "Save $98 vs separate services"],
    cta: "Choose Starter Pack",
  },
  {
    name: "Career Pack",
    price: "$349",
    label: "Most Popular",
    audience: "Mid-career professionals",
    highlighted: true,
    includes: ["Premium ATS Resume / CV — professional level", "LinkedIn Optimization", "Cover Letter", "30-day support", "1 round of revisions", "Save $128 vs separate services"],
    cta: "Choose Career Pack",
  },
  {
    name: "Career Move Pack",
    price: "$499",
    audience: "Professionals making a cross-border move",
    includes: ["ATS Resume tailored to your target market", "Modern CV format for cross-border applications", "LinkedIn Optimization", "Cover Letter — 2 versions for different roles", "60-day support", "Save $176 vs separate services"],
    cta: "Choose Career Move Pack",
  },
  {
    name: "Executive Brand Suite",
    price: "$899",
    audience: "Senior professionals and executives",
    includes: ["Executive ATS Resume / CV", "Executive LinkedIn Optimization", "Executive Cover Letter", "Modern CV format for senior hiring panels", "1-Hour Strategy Consultation", "90-day premium support", "Save $327 vs separate services"],
    cta: "Choose Executive Brand Suite",
  },
  {
    name: "C-Suite Premium",
    price: "$1,499",
    audience: "C-Suite, directors, and founders",
    premium: true,
    includes: ["C-Suite Premium Resume / CV", "Executive LinkedIn Optimization with content strategy", "Cover Letter", "Modern CV format for executive-level panels", "2-Hour Strategy Sessions", "6-month support", "Quarterly LinkedIn refresh", "Save $647 vs separate services"],
    cta: "Choose C-Suite Premium",
  },
];

export default function BundlesPage() {
  return (
    <>
      <section className="w-full bg-foreground px-4 py-[72px] text-center text-background sm:px-6 md:py-[96px]">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-[0.18em] text-brand-main">Bundle Packages</p>
          <h1 className="mt-4 font-heading text-[38px] font-bold leading-tight text-white md:text-[68px]">
            Premium career-branding bundles.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-white/75">
            Complete resume, CV, LinkedIn, cover letter, and strategy bundles — built for senior candidates and competitive job markets.
          </p>
        </div>
      </section>

      <section className="w-full bg-white py-[72px] md:py-[96px]">
        <div className="mx-auto grid max-w-[1512px] grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-5">
          {bundles.map((bundle) => (
            <article
              key={bundle.name}
              className={`flex h-full flex-col rounded-[18px] border p-6 shadow-sm transition-transform hover:-translate-y-1 ${
                bundle.premium
                  ? "border-zinc-900 bg-zinc-950 text-white"
                  : bundle.highlighted
                    ? "border-[#C9A961] bg-[#FFFCF3] shadow-lg"
                    : "border-zinc-200 bg-white"
              }`}
            >
              {bundle.highlighted && <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-dark-gold">Most Popular</p>}
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
                className={`mt-7 btn w-full ${
                  bundle.premium
                    ? "btn-primary hover:bg-white hover:text-primary hover:scale-[1.02]"
                    : bundle.highlighted
                      ? "btn-primary hover:bg-foreground hover:text-white hover:scale-[1.02]"
                      : "btn-secondary hover:scale-[1.02]"
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
