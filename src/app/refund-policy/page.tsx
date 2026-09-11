import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Refunds, Cancellations and Existing Agreements",
  description: "How to request a cancellation or refund, review your agreed service terms, and contact Chanuka Jeewantha about an existing engagement.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-[36px] font-bold">Refunds and Cancellations</h1>
      <p className="mt-4 text-zinc-600">Updated 11 September 2026.</p>
      <div className="mt-10 space-y-8 text-zinc-700">
        <section>
          <h2 className="text-2xl font-semibold">Existing client agreements remain unchanged</h2>
          <p className="mt-3">We honour the terms agreed when you purchased your service. If your existing agreement includes an interview or refund guarantee, that agreement and its original eligibility terms continue to apply. This update does not remove or restrict those commitments.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">New enquiries and engagements</h2>
          <p className="mt-3">We do not offer an interview, job, visa, migration or recruiter-response guarantee for new engagements. The service covers the career documents and consultation specified in your written quote. Deliverables, delivery schedule, revision support and cancellation terms are confirmed before you pay.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Request a cancellation or refund</h2>
          <p className="mt-3">Contact us with your order reference, purchase date and the reason for your request. We review the request against the terms agreed for your engagement and the work already completed. Keep your confirmation and original terms for reference. Nothing on this page limits rights that apply under applicable law.</p>
          <Link href="/contact" className="btn btn-secondary-gold mt-5">Contact Chanuka</Link>
        </section>
      </div>
    </section>
  );
}
