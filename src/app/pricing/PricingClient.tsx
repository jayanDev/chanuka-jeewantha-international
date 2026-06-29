"use client";

import Link from "next/link";
import { formatUsd, packageCategories } from "@/lib/packages-catalog";
import PageHero from "@/components/PageHero";

// Sinhala/LKR ebooks are hidden on the international .com site (they move to the .lk site).
const SHOW_LOCAL_EBOOKS = false;

const bundles = [
  {
    name: "Starter Pack",
    price: "$179",
    label: "For graduates and early-career candidates",
    includes: [
      "ATS Resume / CV — graduate level",
      "Cover Letter",
      "LinkedIn Optimization",
      "7-day delivery",
      "Save $98 vs separate services",
      "90-day interview guarantee — 100% money-back",
    ],
    cta: "Choose Starter Pack",
  },
  {
    name: "Career Pack",
    price: "$349",
    label: "Most Popular",
    audience: "Mid-career professionals",
    highlighted: true,
    includes: [
      "Premium ATS Resume / CV — professional level",
      "LinkedIn Optimization",
      "Cover Letter",
      "30-day support",
      "1 round of revisions",
      "Save $128 vs separate services",
      "90-day interview guarantee — 100% money-back",
    ],
    cta: "Choose Career Pack",
  },
  {
    name: "Career Move Pack",
    price: "$499",
    audience: "Professionals making a cross-border move",
    includes: [
      "ATS Resume tailored to your target market",
      "Modern CV format for cross-border applications",
      "LinkedIn Optimization",
      "Cover Letter — 2 versions for different roles",
      "60-day support",
      "Save $176 vs separate services",
      "90-day interview guarantee — 100% money-back",
    ],
    cta: "Choose Career Move Pack",
  },
  {
    name: "Executive Brand Suite",
    price: "$899",
    audience: "Senior professionals and executives",
    includes: [
      "Executive ATS Resume / CV",
      "Executive LinkedIn Optimization",
      "Executive Cover Letter",
      "Modern CV format for senior hiring panels",
      "1-Hour Strategy Consultation",
      "90-day premium support",
      "Save $327 vs separate services",
      "90-day interview guarantee — 100% money-back",
    ],
    cta: "Choose Executive Brand Suite",
  },
  {
    name: "C-Suite Premium",
    price: "$1,499",
    audience: "C-Suite, directors, and founders",
    premium: true,
    includes: [
      "C-Suite Premium Resume / CV",
      "Executive LinkedIn Optimization with content strategy",
      "Cover Letter",
      "Modern CV format for executive-level panels",
      "2-Hour Strategy Sessions",
      "6-month support",
      "Quarterly LinkedIn refresh",
      "Save $647 vs separate services",
      "90-day interview guarantee — 100% money-back",
    ],
    cta: "Choose C-Suite Premium",
  },
];

export default function PricingClient() {
  return (
    <>
      <PageHero
        title={<>Signature Series <span className="text-[#C9A961]">Pricing</span></>}
        description="Premium career documents personally written for senior candidates and competitive job markets."
        marqueeText="PREMIUM PACKAGES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Premium Packages" }
        ]}
      >
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-white/80 text-sm">
          <span className="flex items-center text-[#C9A961]">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </span>
          <span>Based on 380+ executive reviews (4.9/5 Rating)</span>
        </div>
      </PageHero>

      <section id="bundles" className="w-full bg-white py-[64px] sm:py-[80px] md:py-[96px] scroll-mt-28">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="mb-2 block font-semibold uppercase tracking-wider text-brand-dark-gold">Premium Bundles</span>
            <h2 className="font-heading text-[30px] font-bold leading-[1.1] text-foreground sm:text-[40px] md:text-[56px]">
              Bundle Packages
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
              Complete document suites for professionals who want stronger positioning across CV, LinkedIn, cover letters, and strategy.
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
                    <span className="mb-3 inline-flex rounded-full bg-[#0A2540] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A961]">
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
        </div>
      </section>

      <section id="signature-series" className="w-full bg-zinc-50 py-[64px] sm:py-[80px] md:py-[96px] scroll-mt-28">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="mb-2 block font-semibold uppercase tracking-wider text-brand-dark-gold">Signature Series</span>
              <h2 className="font-heading text-[30px] font-bold leading-[1.1] text-foreground sm:text-[40px] md:text-[56px]">
                Compare Premium Services
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-600">
                All pricing is shown in USD. Select a single service or request a complete bundle after your profile review.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              Request Career Support
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {packageCategories.map((category) => (
              <article key={category.key} className="rounded-[18px] border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark-gold">
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
                  className="mt-6 btn btn-secondary w-full"
                >
                  Apply for This Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free & Paid Resources / Ebooks Section — hidden on .com (Sinhala/LKR products move to .lk) */}
      {SHOW_LOCAL_EBOOKS && (
      <section className="w-full bg-white border-t border-zinc-200 py-[64px] sm:py-[80px] md:py-[96px]">
        <div className="mx-auto max-w-[1512px] px-4 sm:px-6">
          <div className="mb-10 text-center md:text-left md:flex md:items-end md:justify-between">
            <div>
              <span className="mb-2 block font-semibold uppercase tracking-wider text-brand-dark-gold">Guides & Templates</span>
              <h2 className="font-heading text-[30px] font-bold leading-[1.1] text-foreground sm:text-[40px]">
                Free & Paid Resources / Ebooks
              </h2>
              <p className="mt-3 max-w-2xl text-zinc-600">
                Self-paced digital products, CV templates, and career strategy books. These are instant digital downloads, separate from our personalized career-writing services.
              </p>
            </div>
            <Link
              href="/ebooks"
              className="mt-6 md:mt-0 btn btn-secondary text-sm !py-2.5 !px-5"
            >
              Explore All Digital Products
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[16px] border border-zinc-200 bg-zinc-50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <span className="inline-flex rounded bg-zinc-200 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Digital Guide
                </span>
                <h3 className="mt-4 font-heading text-[20px] font-bold text-foreground">
                  කෝටිපතියෙක් වීමේ වේගවත් මග
                </h3>
                <p className="mt-2 text-sm text-zinc-600 line-clamp-3">
                  Fastlane to Wealth - ධනවත් වීමේ කෙටිමග ගවේෂණය. සාමාන්‍ය වේගයෙන් නොව, වේගවත් මාර්ගයක් ඔස්සේ ධනවත් වීම ගැන කියාදෙන ප්‍රායෝගික අදහස් සහ පරිච්ඡේද 60කට වඩා අඩංගු මාර්ගෝපදේශක ebook එකක්.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">LKR 950</span>
                <Link href="/ebooks/kotipathiyek-vime-vegawath-maga" className="text-sm font-semibold text-brand-dark-gold hover:text-brand-main">
                  View Ebook &rarr;
                </Link>
              </div>
            </div>

            <div className="rounded-[16px] border border-zinc-200 bg-zinc-50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <span className="inline-flex rounded bg-zinc-200 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Digital Guide
                </span>
                <h3 className="mt-4 font-heading text-[20px] font-bold text-foreground">
                  ගැඹුරු කාර්යය (Deep Work)
                </h3>
                <p className="mt-2 text-sm text-zinc-600 line-clamp-3">
                  අවධානය කැඩී යන ලෝකයේ ගැඹුරු වැඩ පුරුද්දක් ලෙස ගොඩනගාගෙන, ඉක්මනින් ඉගෙනගෙන, උසස් මට්ටමේ ප්‍රතිඵල ලබාගැනීමට උපකාරී වන ප්‍රායෝගික නීති සහ ක්‍රමවල මාර්ගෝපදේශය.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">LKR 950</span>
                <Link href="/ebooks/gaburu-karyaya" className="text-sm font-semibold text-brand-dark-gold hover:text-brand-main">
                  View Ebook &rarr;
                </Link>
              </div>
            </div>

            <div className="rounded-[16px] border border-zinc-200 bg-zinc-50 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-200">
              <div>
                <span className="inline-flex rounded bg-zinc-200 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  Digital Template
                </span>
                <h3 className="mt-4 font-heading text-[20px] font-bold text-foreground">
                  Premium ATS CV Templates
                </h3>
                <p className="mt-2 text-sm text-zinc-600 line-clamp-3">
                  Ready-to-use, recruiter-approved resume and CV templates formatted for ATS screening and professional industries.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">Free & Paid</span>
                <Link href="/ebooks" className="text-sm font-semibold text-brand-dark-gold hover:text-brand-main">
                  View Templates &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
}
