"use client";

import Link from "next/link";
import { formatUsd, packageCategories } from "@/lib/packages-catalog";

const bundles = [
  {
    name: "International Starter Pack",
    price: "$179",
    label: "For Students & Fresh Graduates",
    includes: [
      "ATS CV / Resume, Fresh Graduate level",
      "Cover Letter",
      "LinkedIn Optimization",
      "7-day delivery",
      "Save $98 vs separate services",
    ],
    cta: "Choose Starter Pack",
  },
  {
    name: "International Career Pack",
    price: "$349",
    label: "Most Popular",
    audience: "Working Professionals",
    highlighted: true,
    includes: [
      "Premium ATS CV / Resume, Professional level",
      "LinkedIn Optimization",
      "Cover Letter",
      "30-day support",
      "1 round of revisions",
      "Save $128 vs separate services",
    ],
    cta: "Choose Career Pack",
  },
  {
    name: "Global Migration Pack",
    price: "$499",
    audience: "Professionals migrating between countries",
    includes: [
      "Country-Specific ATS CV",
      "International Foreign Job CV",
      "LinkedIn Optimization",
      "Cover Letter, 2 versions for different roles",
      "60-day support",
      "Save $176 vs separate services",
    ],
    cta: "Choose Migration Pack",
  },
  {
    name: "Executive Brand Suite",
    price: "$899",
    audience: "Senior Professionals & Executives",
    includes: [
      "Executive ATS CV / Resume",
      "Executive LinkedIn Optimization",
      "Executive Cover Letter",
      "International Foreign Job CV",
      "1-Hour Strategy Consultation",
      "90-day premium support",
      "Save $327 vs separate services",
    ],
    cta: "Choose Executive Brand Suite",
  },
  {
    name: "C-Suite Premium",
    price: "$1,499",
    audience: "C-Suite, Directors, Founders",
    premium: true,
    includes: [
      "C-Suite Premium CV / Resume",
      "Executive LinkedIn Optimization with content strategy",
      "Cover Letter",
      "International Foreign Job CV",
      "2-Hour Strategy Sessions",
      "6-month support",
      "Quarterly LinkedIn refresh",
      "Save $647 vs separate services",
    ],
    cta: "Choose C-Suite Premium",
  },
];

export default function PricingClient() {
  return (
    <>
      <section className="w-full bg-foreground text-background pt-[36px] sm:pt-[50px] pb-[72px] sm:pb-[96px] relative overflow-hidden">
        <div className="absolute top-[150px] left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none flex whitespace-nowrap">
          <div className="animate-[marquee_30s_linear_infinite] flex gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-[72px] sm:text-[120px] md:text-[200px] font-heading font-extrabold uppercase leading-none">
                INTERNATIONAL PACKAGES
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-text-light font-medium mb-6">
            <Link href="/" className="hover:text-brand-main transition-colors">Home</Link>
            <span className="text-brand-main text-xs">/</span>
            <span className="text-brand-main">International Packages</span>
          </div>
          <h1 className="font-heading text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] max-w-5xl !text-white">
            International Signature Series <span className="text-brand-main">Pricing</span>
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
            Premium international career documents personally crafted for global job markets.
          </p>
        </div>
      </section>

      <section id="bundles" className="w-full bg-white py-[64px] sm:py-[80px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="mb-2 block font-semibold uppercase tracking-wider text-brand-main">Premium Bundles</span>
            <h2 className="font-heading text-[30px] font-bold leading-[1.1] text-foreground sm:text-[40px] md:text-[56px]">
              International Bundle Packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              Complete document suites for professionals who want stronger global positioning across CV, LinkedIn, cover letters, and strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
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
                <div className="min-h-[88px]">
                  {bundle.highlighted && (
                    <span className="mb-3 inline-flex rounded-full bg-[#C9A961] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                      Most Popular
                    </span>
                  )}
                  {bundle.premium && (
                    <span className="mb-3 inline-flex rounded-full border border-[#C9A961]/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A961]">
                      Premium
                    </span>
                  )}
                  <h3 className={`font-heading text-[23px] font-bold leading-tight ${bundle.premium ? "text-white" : "text-foreground"}`}>
                    {bundle.name}
                  </h3>
                  <p className={`mt-2 text-sm ${bundle.premium ? "text-white/70" : "text-zinc-600"}`}>
                    {bundle.label ?? bundle.audience}
                  </p>
                </div>
                <p className={`mt-6 font-heading text-[34px] font-bold ${bundle.premium ? "text-white" : "text-foreground"}`}>
                  {bundle.price}
                </p>
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
                  className={`mt-7 inline-flex min-h-11 items-center justify-center rounded-[10px] px-4 py-3 text-center text-sm font-semibold transition-colors ${
                    bundle.premium
                      ? "bg-[#C9A961] text-zinc-950 hover:bg-white"
                      : bundle.highlighted
                        ? "bg-[#C9A961] text-white hover:bg-foreground"
                        : "border border-zinc-300 text-foreground hover:border-brand-main hover:text-brand-main"
                  }`}
                >
                  {bundle.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="signature-series" className="w-full bg-zinc-50 py-[64px] sm:py-[80px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-2 block font-semibold uppercase tracking-wider text-brand-main">International Signature Series</span>
              <h2 className="font-heading text-[30px] font-bold leading-[1.1] text-foreground sm:text-[40px] md:text-[56px]">
                Compare Premium Services
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-600">
                All pricing is shown in USD. Select a single service or request a complete bundle after your profile review.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[10px] bg-brand-main px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Apply for International Career Support
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {packageCategories.map((category) => (
              <article key={category.key} className="rounded-[18px] border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-main">
                  {category.isPriority ? "Priority Service" : "Premium Service"}
                </p>
                <h3 className="mt-3 font-heading text-[27px] font-bold leading-tight text-foreground">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{category.description}</p>

                <div className="mt-6 overflow-hidden rounded-[14px] border border-zinc-200">
                  {category.packages.map((pkg) => (
                    <div key={pkg.slug} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-zinc-100 px-4 py-3 last:border-b-0">
                      <span className="text-sm font-semibold text-zinc-800">{pkg.audience}</span>
                      <span className="text-sm font-bold text-foreground">{pkg.priceNote ?? formatUsd(pkg.priceLkr)}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(category.title)}`}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-[10px] bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand-dark"
                >
                  Apply for This Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
