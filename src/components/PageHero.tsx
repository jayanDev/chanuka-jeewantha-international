import Link from "next/link";
import React from "react";

export type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  title: React.ReactNode;
  description?: string;
  marqueeText?: string;
  breadcrumbs: Breadcrumb[];
  children?: React.ReactNode;
};

export default function PageHero({
  title,
  description,
  marqueeText,
  breadcrumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="w-full bg-navy gradient-hero text-white pt-16 pb-24 relative overflow-hidden">
      {/* Elegant background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,169,97,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,169,97,0.04),transparent_50%)] pointer-events-none" />

      {/* Background Marquee Text */}
      {marqueeText && (
        <div
          className="absolute top-[150px] left-0 w-full overflow-hidden opacity-5 pointer-events-none select-none flex whitespace-nowrap"
          aria-hidden="true"
        >
          <div className="animate-[marquee_30s_linear_infinite] flex gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <span
                key={i}
                className="text-[72px] sm:text-[120px] md:text-[200px] font-heading font-extrabold uppercase leading-none"
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-[1512px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-white/80 font-medium mb-6" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={crumb.label}>
                {idx > 0 && (
                  <span className="text-[#C9A961] text-xs" aria-hidden="true">
                    /
                  </span>
                )}
                {isLast || !crumb.href ? (
                  <span className="text-[#C9A961]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#C9A961] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Editorial gold accent line */}
        <div className="mb-6 h-px w-12 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent" />

        {/* Title */}
        <h1 className="font-heading text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] max-w-5xl text-white">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-6 max-w-3xl text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        )}

        {/* Extra children */}
        {children}
      </div>
    </section>
  );
}
