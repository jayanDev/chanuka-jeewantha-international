import Link from "next/link";

export type RelatedPage = {
  title: string;
  href: string;
  blurb?: string;
};

type Props = {
  heading?: string;
  intro?: string;
  pages: RelatedPage[];
};

/**
 * Shared "Related pages" block for internal linking on industry, city,
 * comparison, and career-stage pages. Drives keyword-rich anchor text
 * and link equity across the US SEO page network.
 */
export default function RelatedPages({ heading = "Related career resources", intro, pages }: Props) {
  if (pages.length === 0) return null;

  return (
    <section className="w-full bg-[#FAF8F3] py-16 md:py-20 border-t border-zinc-200/50">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-[#8C6D30] font-semibold uppercase tracking-[0.16em] text-xs">Continue reading</span>
          <h2 className="mt-3 font-heading text-[26px] font-bold leading-tight text-[#0A2540] sm:text-[34px]">
            {heading}
          </h2>
          {intro ? (
            <p className="mt-3 text-zinc-600">{intro}</p>
          ) : null}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group flex h-full flex-col rounded-[16px] border border-zinc-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C9A961]/60 hover:shadow-md"
            >
              <h3 className="font-heading text-[18px] font-bold text-[#0A2540] group-hover:text-[#8C6D30]">
                {page.title}
              </h3>
              {page.blurb ? (
                <p className="mt-2 flex-grow text-sm leading-relaxed text-zinc-600">{page.blurb}</p>
              ) : null}
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8C6D30] group-hover:text-[#C9A961]">
                Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
