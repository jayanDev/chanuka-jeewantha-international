"use client";

import Link from "next/link";
import { useState } from "react";
import {
  packageCategories,
  serviceOptionChoices,
} from "@/lib/packages-catalog";
import PackagesFilterBar from "./PackagesFilterBar";
import Price from "@/components/Price";

// Sinhala/LKR ebooks are hidden on the international .com site (they move to the .lk site).
const SHOW_LOCAL_EBOOKS = false;

export default function PackagesPageClient() {
  const [activeTier, setActiveTier] = useState("all");

  return (
    <>
      <section className="w-full bg-primary px-4 py-14 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold uppercase tracking-[0.18em] text-brand-main">Premium Packages</p>
          <h1 className="mt-4 font-heading text-[34px] font-bold leading-[1.08] text-white sm:text-[44px] md:text-[56px]">
            Browse every Signature Series package
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Transparent pricing in your local currency, premium inclusions, and the full career-branding service line - visible upfront.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-secondary !border-white/40 !text-white hover:!bg-white/10">
              Request a Profile Review
            </Link>
          </div>
        </div>
      </section>

      <PackagesFilterBar activeTier={activeTier} onTierChange={setActiveTier} />

      {packageCategories.map((category) => (
        <section
          key={category.key}
          id={`section-${category.key}`}
          className="w-full px-4 py-12 sm:px-6 md:py-16 odd:bg-bg-cream even:bg-white scroll-mt-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-dark-gold">
                {category.isPriority ? "Priority Service" : "Premium Service"}
              </p>
              <h2 className="mt-2 font-heading text-[26px] font-bold text-foreground sm:text-[34px]">
                {category.title}
              </h2>
              <p className="mt-2 text-text-body">{category.description}</p>
            </div>

            {serviceOptionChoices.map((option) => {
              const pkgs = category.packages.filter((p) => p.optionKey === option.key);
              if (pkgs.length === 0) return null;
              if (activeTier !== "all" && activeTier !== option.key) return null;

              return (
                <div key={option.key} className="mb-10 last:mb-0">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="badge badge-premium">Signature Series</span>
                    <h3 className="font-heading text-[20px] font-semibold text-foreground">
                      {option.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {pkgs.map((pkg) => (
                      <Link
                        key={pkg.slug}
                        href={`/packages/${pkg.slug}`}
                        className="group relative flex flex-col rounded-[12px] border-2 border-brand-main bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        <span className="absolute inset-x-0 top-0 h-1 rounded-t-[12px] bg-brand-main" aria-hidden="true" />
                        {pkg.isMostPopular && <span className="badge badge-popular absolute -top-2 right-4">Popular</span>}

                        <h4 className="font-heading text-[18px] font-semibold text-foreground">
                          {pkg.name}
                        </h4>
                        {pkg.description && (
                          <p className="mt-2 text-sm leading-relaxed text-text-body line-clamp-3">
                            {pkg.description}
                          </p>
                        )}

                        <span className="mt-4 font-heading text-[24px] font-bold text-primary">
                          <Price usd={pkg.priceLkr} suffix={pkg.priceNote ? "+" : undefined} />
                        </span>
                        <p className="mt-1 text-xs uppercase tracking-wider text-text-secondary">
                          {pkg.delivery}
                        </p>

                        <ul className="mt-4 space-y-1.5 text-sm text-text-body">
                          {pkg.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-main" />
                              <span className="line-clamp-1">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-main group-hover:gap-2 transition-all">
                          View details
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Free & Paid Resources / Ebooks Section - hidden on .com (Sinhala/LKR products move to .lk) */}
      {SHOW_LOCAL_EBOOKS && (
      <section className="w-full bg-white border-t border-zinc-200 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center md:text-left md:flex md:items-end md:justify-between">
            <div>
              <span className="text-brand-dark-gold font-semibold uppercase tracking-wider text-xs block mb-2">Guides & Templates</span>
              <h2 className="font-heading text-[26px] font-bold text-foreground sm:text-[34px]">
                Free & Paid Resources / Ebooks
              </h2>
              <p className="mt-2 text-text-body max-w-2xl">
                Self-paced digital products, CV templates, and career strategy books. These are instant digital downloads, separate from our personalized career-writing services.
              </p>
            </div>
            <Link
              href="/ebooks"
              className="mt-4 md:mt-0 btn btn-secondary text-sm !py-2.5 !px-5"
            >
              Explore All Digital Products
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[12px] border border-zinc-200 bg-zinc-50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <span className="inline-flex rounded bg-zinc-200 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Digital Guide
                </span>
                <h3 className="mt-4 font-heading text-[18px] font-bold text-foreground">
                  කෝටිපතියෙක් වීමේ වේගවත් මග
                </h3>
                <p className="mt-2 text-sm text-text-body line-clamp-3">
                  Fastlane to Wealth - ධනවත් වීමේ කෙටිමග ගවේෂණය. සාමාන්‍ය වේගයෙන් නොව, වේගවත් මාර්ගයක් ඔස්සේ ධනවත් වීම ගැන කියාදෙන ප්‍රායෝගික අදහස් සහ පරිච්ඡේද 60කට වඩා අඩංගු මාර්ගෝපදේශක ebook එකක්.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <span className="text-base font-bold text-foreground">LKR 950</span>
                <Link href="/ebooks/kotipathiyek-vime-vegawath-maga" className="text-sm font-semibold text-brand-dark-gold hover:text-brand-main">
                  View Ebook &rarr;
                </Link>
              </div>
            </div>

            <div className="rounded-[12px] border border-zinc-200 bg-zinc-50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <span className="inline-flex rounded bg-zinc-200 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Digital Guide
                </span>
                <h3 className="mt-4 font-heading text-[18px] font-bold text-foreground">
                  ගැඹුරු කාර්යය (Deep Work)
                </h3>
                <p className="mt-2 text-sm text-text-body line-clamp-3">
                  අවධානය කැඩී යන ලෝකයේ ගැඹුරු වැඩ පුරුද්දක් ලෙස ගොඩනගාගෙන, ඉක්මනින් ඉගෙනගෙන, උසස් මට්ටමේ ප්‍රතිඵල ලබාගැනීමට උපකාරී වන ප්‍රායෝගික නීති සහ ක්‍රමවල මාර්ගෝපදේශය.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <span className="text-base font-bold text-foreground">LKR 950</span>
                <Link href="/ebooks/gaburu-karyaya" className="text-sm font-semibold text-brand-dark-gold hover:text-brand-main">
                  View Ebook &rarr;
                </Link>
              </div>
            </div>

            <div className="rounded-[12px] border border-zinc-200 bg-zinc-50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <span className="inline-flex rounded bg-zinc-200 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Digital Template
                </span>
                <h3 className="mt-4 font-heading text-[18px] font-bold text-foreground">
                  Premium ATS CV Templates
                </h3>
                <p className="mt-2 text-sm text-text-body line-clamp-3">
                  Ready-to-use, recruiter-approved resume and CV templates formatted for ATS screening and professional industries.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <span className="text-base font-bold text-foreground">Free & Paid</span>
                <Link href="/ebooks" className="text-sm font-semibold text-brand-dark-gold hover:text-brand-main">
                  View Templates &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      <section className="w-full bg-primary px-4 py-14 text-white sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[26px] font-bold text-white sm:text-[34px]">
            Still not sure which one fits?
          </h2>
          <p className="mt-3 text-white/80">
            Submit your current CV, target market, and target role for a personal profile review.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Submit an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
