import type { Metadata } from "next";
import CareerQuizClient from "./CareerQuizClient";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import { getBaseUrl } from "@/lib/site-url";
import PageHero from "@/components/PageHero";

const baseUrl = getBaseUrl();

export const metadata: Metadata = buildPageMetadata({
  title: "Career Quiz | Find the Right CV, LinkedIn, or Personal Brand Service",
  description:
    "Take a quick career quiz to discover the best next step for your CV, LinkedIn profile, interview preparation, or digital presence.",
  path: "/career-quiz",
  keywords: [
    "career quiz",
    "cv service recommender",
    "linkedin service finder",
    "career package quiz",
  ],
});

export default function CareerQuizPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Career Quiz", path: "/career-quiz" },
  ]);

  const quizLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Career Quiz",
    url: `${baseUrl}/career-quiz`,
    description:
      "A browser-based decision quiz that recommends the best next step for CV writing, LinkedIn optimization, interview preparation, and digital presence.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizLd) }}
      />

      <PageHero
        title={<>Not sure what you need? <span className="text-[#C9A961]">Use the quiz</span></>}
        description="Answer a few quick questions and get a practical next-step recommendation across CV writing, LinkedIn optimization, interview prep, and digital presence."
        marqueeText="CAREER QUIZ"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Career Quiz" }
        ]}
      />

 <section className="w-full bg-zinc-50 py-[64px] sm:py-[80px] md:py-[96px]">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <CareerQuizClient />
        </div>
      </section>
    </>
  );
}
