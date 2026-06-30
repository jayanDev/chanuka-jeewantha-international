import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Refund Policy & 90-Day Interview Guarantee | Chanuka Jeewantha",
  description:
    "Our 90-day interview guarantee, full refund terms, eligibility, and claim process for every resume, CV, LinkedIn, and career-branding package.",
  path: "/refund-policy",
  keywords: ["refund policy", "interview guarantee", "money-back guarantee", "resume writing refund"],
});

export default function RefundPolicyPage() {
  return (
    <section className="w-full bg-zinc-50 py-[90px]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-main">Legal</p>
        <h1 className="text-[34px] font-bold font-heading text-foreground md:text-[48px]">
          Refund Policy &amp; 90-Day Interview Guarantee
        </h1>
        <p className="mt-4 leading-relaxed text-text-body">
          Every package sold on this site is backed by a 100% money-back guarantee. If you don&apos;t receive any interview calls within 90 days of delivery, you get a full refund - on every package, no exceptions. Full terms are below.
        </p>

        {/* Headline guarantee card */}
        <div className="mt-8 rounded-[18px] border-2 border-[#C9A961] bg-gradient-to-br from-[#FFFCF3] to-white p-6 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8C6D30]">The Guarantee, In One Sentence</p>
          <p className="mt-3 font-heading text-[20px] font-bold leading-snug text-[#0A2540] md:text-[24px]">
            If you don&apos;t receive any interview calls within 90 days of delivery and you have applied to at least 20 relevant roles using our documents, we refund 100% of what you paid.
          </p>
        </div>

        <div className="mt-8 space-y-6 rounded-[18px] border border-zinc-200 bg-white p-6 md:p-8">
          <article>
            <h2 className="text-[22px] font-bold font-heading text-zinc-900">1. What the guarantee covers</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              The 90-day interview guarantee applies to every paid service on this site, including all bundle packages (Starter Pack, Career Pack, Career Move Pack, Executive Brand Suite, C-Suite Premium) and every single service (ATS Resume / CV Writing, LinkedIn Optimization, Cover Letter Writing, Modern CV Format, Graphical CV, and Career Consultation).
            </p>
          </article>

          <article>
            <h2 className="text-[22px] font-bold font-heading text-zinc-900">2. What &quot;an interview call&quot; means</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Any direct contact from a real employer or a recruiter representing a real employer that proposes a call, screening, or in-person meeting connected to a specific role. This includes phone calls, scheduled video interviews, in-person meetings, and recruiter messages that request your availability for a screening conversation.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              The following do <span className="font-semibold">not</span> count as interview calls: generic recruiter mass-messages, automated &quot;your application has been received&quot; emails, marketing emails, networking requests, or contact unrelated to a specific role.
            </p>
          </article>

          <article>
            <h2 className="text-[22px] font-bold font-heading text-zinc-900">3. Eligibility requirements</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              To claim a refund under the 90-day guarantee, all of the following must be true:
            </p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed text-zinc-600 space-y-1.5">
              <li>You have used the documents we delivered (you cannot apply with a different resume or LinkedIn and claim against us).</li>
              <li>You have applied to at least <span className="font-semibold">20 relevant roles</span> within the 90-day window, where &quot;relevant&quot; means roles that broadly match the target market, seniority, and industry agreed at the start of the engagement.</li>
              <li>You can produce a simple application log (a spreadsheet, screenshots, LinkedIn application history, or email confirmations are all acceptable).</li>
              <li>You raise the claim within <span className="font-semibold">14 days after the 90-day window ends</span> (so the claim window closes on day 104 from delivery).</li>
            </ul>
          </article>

          <article>
            <h2 className="text-[22px] font-bold font-heading text-zinc-900">4. How to claim a refund</h2>
            <ol className="mt-2 list-decimal pl-5 text-sm leading-relaxed text-zinc-600 space-y-1.5">
              <li>Email <span className="font-semibold text-zinc-800">chanukajeewantha00@gmail.com</span> or contact us through the <Link href="/contact" className="font-semibold text-[#8C6D30] underline hover:text-[#C9A961]">contact form</Link> with the subject &quot;90-Day Guarantee Claim&quot;.</li>
              <li>Include your order details, delivery date, and your application log covering the 20+ relevant roles.</li>
              <li>We review the claim within 5 business days.</li>
              <li>If approved, the full amount you paid is refunded to your original payment method within 7 business days.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-[22px] font-bold font-heading text-zinc-900">5. Cancellation before delivery</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              You can cancel and receive a full refund at any time <span className="font-semibold">before document writing begins</span>. Once writing has begun, partial refunds may apply based on work completed. Once the documents are delivered, the 90-day interview guarantee becomes the refund mechanism.
            </p>
          </article>

          <article>
            <h2 className="text-[22px] font-bold font-heading text-zinc-900">6. Limits and fair use</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              The guarantee is offered in good faith and is intended to reward serious job seekers. It does not cover situations where the agreed target role, industry, or seniority changed after delivery, where the documents have been substantially altered by the candidate or a third party, or where market conditions in a specific industry are obviously the cause (for example, a sector-wide hiring freeze affecting the target market).
            </p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              We reserve the right to decline claims that show clear signs of bad-faith use, such as duplicate orders submitted only to claim the guarantee, or claims supported by fabricated application logs.
            </p>
          </article>

          <article>
            <h2 className="text-[22px] font-bold font-heading text-zinc-900">7. Contact</h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600">
              Questions about the guarantee or the refund process? Reach out via the <Link href="/contact" className="font-semibold text-[#8C6D30] underline hover:text-[#C9A961]">contact page</Link> or email us directly. We aim to respond within 1 business day.
            </p>
          </article>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-[10px] bg-brand-main px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark">Contact Support</Link>
          <Link href="/terms-and-conditions" className="rounded-[10px] border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-brand-main hover:text-brand-main">Terms &amp; Conditions</Link>
          <Link href="/privacy-policy" className="rounded-[10px] border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:border-brand-main hover:text-brand-main">Privacy Policy</Link>
        </div>
      </div>
    </section>
  );
}
