import Link from "next/link";
import type { Metadata } from "next";
import ResultsHubClient from "./ResultsHubClient";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import { buildResultsHubItems, getResultsHubFocusAreas } from "@/lib/results-hub";
import { getCachedPublicReviews } from "@/lib/reviews";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = buildPageMetadata({
  title: "Results | Case Studies, Testimonials, and Career Proof",
  description:
    "Explore proof-driven results from Chanuka Jeewantha through case studies, testimonials, and practical transformation stories across CVs, LinkedIn, and digital presence.",
  path: "/results",
  keywords: [
    "career results",
    "cv writing case studies",
    "linkedin testimonials",
    "career proof examples",
  ],
});

export default async function ResultsPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Results", path: "/results" },
  ]);

  const reviews = await getCachedPublicReviews();
  const items = buildResultsHubItems(reviews);
  const focusAreas = getResultsHubFocusAreas(items);

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Career Results and Proof",
    description:
      "A collection of case studies and testimonial proof for CV writing, LinkedIn optimization, interview preparation, and digital presence services.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }}
      />

      <PageHero
        title={<>Proof, not promises. <span className="text-[#C9A961]">See the results</span></>}
        description="Explore case studies, testimonials, and career proof stories across ATS CV writing, LinkedIn optimization, career strategy, and digital presence services."
        marqueeText="RESULTS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Results" }
        ]}
      />

 <section className="w-full bg-zinc-50 py-[64px] sm:py-[80px] md:py-[96px]">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <ResultsHubClient items={items} focusAreas={focusAreas} />

 <aside className="mt-10 rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-[24px] font-bold font-heading text-foreground">What to do after reviewing proof</h2>
            <p className="mt-3 text-text-body">
              If you have seen enough to know the direction, take the quiz for a tailored recommendation or go straight to services and pricing.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/career-quiz" className="rounded-[10px] bg-brand-main px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">
                Take Career Quiz
              </Link>
 <Link href="/services" className="rounded-[10px] border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-main hover:text-brand-main">
                Explore Services
              </Link>
 <Link href="/pricing" className="rounded-[10px] border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-brand-main hover:text-brand-main">
                Compare Pricing
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
