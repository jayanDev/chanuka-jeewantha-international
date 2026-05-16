import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList, buildFaqPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ | Resume, CV & LinkedIn Services",
  description:
    "Answers about premium resume writing, CV formats, LinkedIn optimization, payments, delivery timelines, and the career-branding process.",
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
      a: "Yes. Each document is built around the conventions of your target market — format, length, tone, and what recruiters in that market actually look for."
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

  const faqLd = buildFaqPageSchema(
    faqs.map((item) => ({
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

      <section className="w-full bg-foreground text-background pt-[36px] sm:pt-[50px] pb-[72px] sm:pb-[96px] relative overflow-hidden">
        <div className="absolute top-[150px] left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none flex whitespace-nowrap">
          <div className="animate-[marquee_30s_linear_infinite] flex gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span key={i} className="text-[72px] sm:text-[120px] md:text-[200px] font-heading font-extrabold uppercase leading-none">
                FAQ'S
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-[1512px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-text-light font-medium mb-6">
            <Link href="/" className="hover:text-brand-main transition-colors">Home</Link>
            <span className="text-brand-main text-xs">/</span>
            <span className="text-brand-main">FAQ Area</span>
          </div>
          <h1 className="font-heading text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] max-w-4xl !text-white">
            Frequently Asked <span className="text-brand-main">Questions.</span>
          </h1>
        </div>
      </section>

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

 <div className="mx-auto mt-16 max-w-4xl text-center bg-zinc-50 p-12 rounded-[24px] border border-zinc-200">
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
