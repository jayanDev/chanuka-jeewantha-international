import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildNoIndexMetadata, buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { buildServiceSchema } from "@/lib/service-schema";
import { cityPages, getCityPage, type CityPage } from "@/lib/city-resume-pages";
import { industryPages, getIndustryPage } from "@/lib/industry-resume-pages";
import RelatedPages from "@/components/RelatedPages";
import PageCTA from "@/components/PageCTA";

type PageProps = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cityPages.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const page = getCityPage(city);
  if (!page) {
    return buildNoIndexMetadata({
      title: "Page not found",
      description: "The requested page is not available.",
      path: `/locations/${city}`,
    });
  }
  return {
    ...buildPageMetadata({
      title: page.metaTitle,
      description: page.metaDescription,
      path: `/locations/${city}`,
    }),
    title: { absolute: page.metaTitle },
  };
}

function buildCityFaqs(page: CityPage) {
  return [
    {
      q: `Do you write resumes for clients in ${page.city}?`,
      a: `Yes. The service is fully remote and used by professionals across ${page.city} and the wider ${page.state} metro. Document delivery happens by email, with one or two short video or phone calls during the engagement.`,
    },
    {
      q: `Do you understand ${page.city}'s hiring market specifically?`,
      a: `${page.localContext} We adjust resume framing, keyword strategy, and seniority signal to match the patterns recruiters and hiring managers in ${page.city} actually look for.`,
    },
    {
      q: `What's your most-requested package for ${page.city} professionals?`,
      a: `It depends on seniority. For mid-career professionals, the Career Pack ($349) is the most common choice. For senior leaders and executives in ${page.city}, the Executive Brand Suite ($899) is the right fit. For C-suite candidates, C-Suite Premium ($1,499).`,
    },
    {
      q: `How long does the engagement take?`,
      a: `Standard delivery is 7-14 days depending on package. Faster turnarounds can be requested during the enquiry.`,
    },
    {
      q: `Is the 90-day interview guarantee available in ${page.city}?`,
      a: `Yes. Every package on the site - including engagements with ${page.city} clients - is backed by a 90-day, 100% money-back interview guarantee. Full terms are on the refund policy page.`,
    },
  ];
}

export default async function CityResumeWriterPage({ params }: PageProps) {
  const { city } = await params;
  const page = getCityPage(city);
  if (!page) notFound();

  const topIndustry = getIndustryPage(page.topIndustrySlug);
  const alsoStrong = page.alsoStrongSlugs
    .map((s) => getIndustryPage(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: page.city, path: `/locations/${page.slug}` },
  ]);

  const serviceLd = buildServiceSchema({
    name: `Resume Writing Service in ${page.city}`,
    description: page.metaDescription,
    path: `/locations/${page.slug}`,
    areaServed: `${page.city}, ${page.stateAbbr}`,
    priceRange: "$179 - $1,499",
  });

  const faqs = buildCityFaqs(page);
  const faqLd = buildFaqPageSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));

  // Cross-link to top industry pages + 2-3 other nearby cities
  const relatedCities = cityPages.filter((c) => c.slug !== page.slug).slice(0, 3);
  const related = [
    ...alsoStrong.map((p) => ({
      title: `${p.h1} in ${page.city}`,
      href: `/resume-writer/${p.slug}`,
      blurb: p.intro,
    })),
    ...relatedCities.map((c) => ({
      title: `Resume Writer in ${c.city}`,
      href: `/locations/${c.slug}`,
      blurb: c.localContext,
    })),
  ].slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero */}
      <section className="w-full bg-[#0A2540] text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.08),transparent_50%)] pointer-events-none" />
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 relative z-10">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/locations" className="hover:text-white">Locations</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C9A961]">{page.city}</span>
          </nav>

          <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#C9A961] to-transparent" />
          <h1 className="font-heading text-[36px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[60px] tracking-tight max-w-3xl">
            Resume Writer in <span className="text-[#C9A961]">{page.city}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl font-light">
            {page.localContext}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#E0C882] hover:from-[#E0C882] hover:to-[#C9A961] text-[#0A2540] font-bold text-base px-7 py-3.5 rounded-[10px] shadow-[0_4px_20px_rgba(201,169,97,0.3)] transition-all"
            >
              Request a Profile Review
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-white/30 px-7 py-3.5 rounded-[10px] text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              See Pricing
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C9A961]/40 bg-[#C9A961]/10 px-3 py-1 text-[#C9A961] font-semibold">
              90-Day Interview Guarantee
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-white/80">
              <span className="font-bold text-[#C9A961]">{page.shortName}, {page.stateAbbr}</span> &nbsp;·&nbsp; Remote delivery
            </span>
          </div>
        </div>
      </section>

      {/* Local landscape */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">{page.city} hiring landscape</span>
          <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
            What recruiters in {page.shortName} are actually looking for.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {page.localLandscape.map((item, i) => (
              <article key={i} className="flex items-start gap-4 rounded-[14px] border border-zinc-200/80 bg-[#FAF8F3] p-5">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#C9A961] text-xs font-bold text-[#0A2540]">{i + 1}</span>
                <p className="text-sm leading-relaxed text-zinc-700" dangerouslySetInnerHTML={{ __html: item }} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Top industries in this city */}
      {topIndustry ? (
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-y border-zinc-200/50">
          <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Most common in {page.shortName}</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              The biggest hiring track in {page.city}.
            </h2>

            <div className="mt-10 rounded-[20px] border-2 border-[#C9A961] bg-white p-7 shadow-[0_20px_50px_rgba(201,169,97,0.15)]">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#8C6D30]">Top industry</span>
              <h3 className="mt-3 font-heading text-[24px] font-bold leading-tight text-[#0A2540] sm:text-[30px]">
                {topIndustry.h1} in {page.city}
              </h3>
              <p className="mt-3 text-zinc-700 leading-relaxed">
                {topIndustry.intro}
              </p>
              <Link
                href={`/resume-writer/${topIndustry.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#8C6D30] hover:text-[#C9A961]"
              >
                See full {topIndustry.h1} page
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {alsoStrong.length > 0 ? (
              <>
                <p className="mt-12 text-xs font-bold uppercase tracking-[0.14em] text-[#8C6D30]">Also strong in this market</p>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {alsoStrong.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/resume-writer/${ind.slug}`}
                      className="group rounded-[14px] border border-zinc-200/80 bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#C9A961]/60 hover:shadow-md"
                    >
                      <h4 className="font-heading text-base font-bold text-[#0A2540] group-hover:text-[#8C6D30]">
                        {ind.h1}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-zinc-600 line-clamp-3">
                        {ind.intro}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#8C6D30] group-hover:text-[#C9A961]">
                        Read more →
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">FAQ</span>
            <h2 className="mt-3 font-heading text-[28px] font-bold leading-tight text-[#0A2540] sm:text-[36px] md:text-[42px]">
              {page.city} resume writing - common questions.
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-[14px] border border-zinc-200/80 bg-[#FAF8F3] p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-start justify-between gap-4 cursor-pointer font-heading text-base font-bold text-[#0A2540] sm:text-lg select-none">
                  {faq.q}
                  <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 text-[#8C6D30] transition-colors group-open:bg-[#C9A961] group-open:text-[#0A2540]">
                    <svg className="h-4 w-4 transition-transform group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 border-t border-zinc-200/60 pt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <RelatedPages
          heading={`More for ${page.city} and nearby markets`}
          intro="Browse other industries we cover or jump to a nearby city."
          pages={related}
        />
      ) : null}

      <PageCTA
        heading={`Hiring in ${page.city}? Start with a profile review.`}
        subheading="Submit your current resume, target role, and target company. You'll get a personal recommendation in 1 business day."
      />
    </>
  );
}
