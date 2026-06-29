import Link from "next/link";

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

/**
 * Shared dark-navy closing CTA. Used at the bottom of every new SEO page
 * (industry, city, career-stage, comparison) so the conversion path is
 * consistent.
 */
export default function PageCTA({
  eyebrow = "Get started",
  heading,
  subheading,
  primaryHref = "/contact",
  primaryLabel = "Request a Profile Review",
  secondaryHref = "/pricing",
  secondaryLabel = "View Packages",
}: Props) {
  return (
    <section className="w-full bg-[#0A2540] py-20 text-center text-white relative overflow-hidden md:py-24">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,169,97,0.06),transparent_60%)] pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 flex flex-col items-center">
        <div className="mb-6 h-px w-12 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />
        <span className="text-[#C9A961] font-semibold uppercase tracking-wider text-xs mb-4">{eyebrow}</span>
        <h2 className="font-heading text-[28px] font-bold leading-tight text-white sm:text-[36px] md:text-[48px] tracking-tight">
          {heading}
        </h2>
        {subheading ? (
          <p className="mx-auto mt-5 max-w-2xl text-white/75 leading-relaxed">{subheading}</p>
        ) : null}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#C9A961] to-[#E0C882] hover:from-[#E0C882] hover:to-[#C9A961] text-[#0A2540] font-bold text-base px-8 py-4 rounded-[12px] shadow-[0_4px_24px_rgba(201,169,97,0.35)] hover:shadow-[0_8px_32px_rgba(201,169,97,0.55)] transform hover:-translate-y-0.5 transition-all duration-300"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center border border-white/30 px-8 py-4 rounded-[12px] text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
