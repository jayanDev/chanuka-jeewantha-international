import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  breadcrumbLabel: string;
  eyebrow: string;
  h1: ReactNode;
  intro: string;
  children: ReactNode;
};

/**
 * Shared layout shell for /best-resume-writing-services-2026,
 * /resume-writer-cost, etc. Provides the dark hero + breadcrumb so
 * each comparison page can focus on its own content body.
 */
export default function ComparisonPageLayout({ breadcrumbLabel, eyebrow, h1, intro, children }: Props) {
  return (
    <>
      <section className="w-full bg-[#0A2540] text-white pt-16 pb-20 md:pt-20 md:pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.08),transparent_50%)] pointer-events-none" />
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 relative z-10">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#C9A961]">{breadcrumbLabel}</span>
          </nav>
          <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#C9A961] to-transparent" />
          <span className="text-[#C9A961] font-semibold uppercase tracking-[0.16em] text-xs">{eyebrow}</span>
          <h1 className="mt-3 font-heading text-[36px] font-bold leading-[1.05] text-white sm:text-[48px] md:text-[60px] tracking-tight max-w-3xl">
            {h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl font-light">
            {intro}
          </p>
        </div>
      </section>
      {children}
    </>
  );
}
