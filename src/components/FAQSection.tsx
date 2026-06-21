import { buildFaqPageSchema } from "@/lib/structured-data";

type FAQSectionProps = {
  /** Section heading displayed above the accordion. */
  heading?: string;
  /** FAQ items to render. */
  items: { q: string; a: string }[];
  /** Whether to emit FAQPage JSON-LD for these items. Default: true.
   *  Set to false when the parent page already emits a merged FAQPage schema. */
  renderSchema?: boolean;
  /** Extra wrapper class names. */
  className?: string;
};

/**
 * Reusable FAQ accordion section with optional FAQPage JSON-LD.
 * Server component — no "use client" directive.
 */
export default function FAQSection({
  heading = "Frequently Asked Questions",
  items,
  renderSchema = true,
  className,
}: FAQSectionProps) {
  const faqLd = renderSchema
    ? buildFaqPageSchema(items.map((item) => ({ question: item.q, answer: item.a })))
    : null;

  return (
    <section className={`w-full py-16 sm:py-20 md:py-24 ${className ?? ""}`}>
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <div className="max-w-[1512px] mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[1.15] text-foreground">
              {heading}
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {items.map((faq, index) => (
              <details
                key={index}
                className="group bg-zinc-50 border border-zinc-200 rounded-[20px] p-6 hover:border-brand-main transition-colors cursor-pointer open:bg-white [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex justify-between items-center font-bold text-[18px] md:text-[22px] font-heading text-foreground outline-none">
                  {faq.q}
                  <span className="relative flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 group-open:bg-brand-main group-open:text-white transition-colors text-brand-dark">
                    <svg className="w-5 h-5 transition-transform group-open:-rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </summary>
                <p className="mt-4 text-text-body text-base sm:text-lg leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
