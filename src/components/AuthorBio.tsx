import Image from "next/image";
import Link from "next/link";

/**
 * Author bio block - E-E-A-T signal for readers and search engines.
 * Content uses only verified facts from the site (founder-led service,
 * placements, markets, rating). Pairs with the BlogPosting author schema.
 */
export default function AuthorBio() {
  return (
    <aside className="not-prose mt-10 rounded-[20px] border border-zinc-200 bg-zinc-50 p-6 md:p-8">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-main">About the author</p>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-brand-main">
          <Image
            src="/images/hero-chanuka.jpg"
            alt="Chanuka Jeewantha, founder and lead resume and CV writer"
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-heading text-[20px] font-bold text-foreground">Chanuka Jeewantha</h3>
          <p className="text-sm font-semibold text-brand-main">Founder &amp; Lead Resume / CV Writer</p>
          <p className="mt-3 text-text-body leading-relaxed">
            Chanuka personally writes every resume, CV, and LinkedIn profile - a founder-led premium service, not template
            editing or junior outsourcing. With a 4.9/5 rating across 380+ senior and executive placements, he helps
            professionals compete for roles in the United States, United Kingdom, Australia, Canada, and New Zealand.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <Link href="/about" className="text-brand-main hover:text-brand-dark transition-colors">
              About Chanuka
            </Link>
            <a
              href="https://www.linkedin.com/in/chanuka-jeewantha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-main hover:text-brand-dark transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/chanukajeewan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-main hover:text-brand-dark transition-colors"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
