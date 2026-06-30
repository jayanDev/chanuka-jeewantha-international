import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";
import { aeoFaqs } from "@/lib/aeo-faqs";
import FAQSection from "@/components/FAQSection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = buildPageMetadata({
  title: "Resume Writing FAQ | Pricing, Delivery & 90-Day Guarantee",
  description:
    "Answers about premium resume writing for US professionals - pricing, delivery timelines, payment methods, the 90-day interview guarantee, and how the process works.",
  path: "/faq",
});

export default function FAQPage() {
  const faqs = [
    {
      q: "Do you work with clients anywhere in the world?",
      a: "Yes. The service is delivered fully remotely and designed for professionals applying to roles in competitive job markets, including English-speaking developed economies and remote-first companies."
    },
    {
      q: "Do you write resumes or CVs?",
      a: "Both. The document structure is adapted to your target market, industry, career level, and application purpose."
    },
    {
      q: "Can you tailor a CV for a specific target market?",
      a: "Yes. Each document is built around the conventions of your target market - format, length, tone, and what recruiters in that market actually look for."
    },
    {
      q: "Do you guarantee interviews or jobs?",
      a: "No. The service improves the quality, positioning, ATS compatibility, and recruiter-readiness of your career documents. Outcomes still depend on market conditions, your applications, and employer decisions."
    },
    {
      q: "What payment methods are available?",
      a: "Wise, PayPal, Payoneer, Stripe, and bank transfer are supported. Specific payment details are confirmed after your enquiry is reviewed."
    },
    {
      q: "How do I start?",
      a: "Submit your current CV or resume, target role, target market, and preferred package through the enquiry form."
    }
  ];

  // Merge original + AEO items into one FAQPage JSON-LD block (no duplicates)
  const allFaqs = [...faqs, ...aeoFaqs];
  const faqLd = buildFaqPageSchema(
    allFaqs.map((item) => ({
      question: item.q,
      answer: item.a,
    }))
  );

  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <PageHero
        title={<>Frequently Asked <span className="text-[#C9A961]">Questions</span></>}
        marqueeText="FAQ'S"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ Area" }
        ]}
      />

 <section className="w-full py-[64px] sm:py-[80px] md:py-[96px] bg-white">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-4xl flex flex-col gap-6">
            {faqs.map((faq, index) => (
 <details key={index} className="group bg-zinc-50 border border-zinc-200 rounded-[20px] p-6 hover:border-brand-main transition-colors cursor-pointer open:bg-white [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center font-bold text-[20px] md:text-[24px] font-heading text-foreground outline-none">
                  {faq.q}
                  <span className="relative flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 group-open:bg-brand-main group-open:text-white transition-colors text-brand-dark">
                    <svg className="w-5 h-5 transition-transform group-open:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-text-body text-lg leading-relaxed animate-fadeInUp">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AEO-optimized country-specific FAQ - schema suppressed (merged above) */}
      <FAQSection
        heading="Pricing, Markets & Getting Started"
        items={aeoFaqs}
        renderSchema={false}
        className="bg-zinc-50 border-t border-zinc-200"
      />

 <section className="w-full bg-white py-[64px] sm:py-[80px] md:py-[96px]">
        <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
 <div className="mx-auto max-w-4xl text-center bg-zinc-50 p-12 rounded-[24px] border border-zinc-200">
             <h3 className="text-[28px] font-bold font-heading mb-4 text-foreground">Still have questions?</h3>
             <p className="text-text-body mb-8 text-lg">Submit an enquiry and we will review the best service direction for your goals.</p>
             <Link href="/contact" className="px-[32px] py-[16px] bg-brand-main hover:bg-brand-dark text-white rounded-[10px] font-medium transition-colors inline-block">
               Submit an Enquiry
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
