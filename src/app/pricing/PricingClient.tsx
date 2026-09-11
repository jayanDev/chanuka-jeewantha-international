"use client";

import Link from "next/link";
import { packageCategories } from "@/lib/packages-catalog";
import PageHero from "@/components/PageHero";
import Price from "@/components/Price";
import { internationalBundles } from "@/lib/international-bundles";

// Sinhala/LKR ebooks are hidden on the international .com site (they move to the .lk site).
const SHOW_LOCAL_EBOOKS = false;

const bundles = internationalBundles.map(bundle => ({
  ...bundle, priceUsd: bundle.usd, highlighted: bundle.popular,
  label: bundle.audience, includes: bundle.features, cta: `Choose ${bundle.name}`,
}));

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
        <p className="mt-6 text-white/80">Founder-Led Premium Career Branding</p>
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
                  <Price usd={bundle.priceUsd} />
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
                Prices are shown in your local currency (USD is the base). Select a single service or request a complete bundle after your profile review.
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
                      <span className="text-sm font-bold text-foreground">
                        <Price usd={pkg.priceLkr} suffix={pkg.priceNote ? "+" : undefined} />
                      </span>
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

      {/* Free & Paid Resources / Ebooks Section - hidden on .com (Sinhala/LKR products move to .lk) */}
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
