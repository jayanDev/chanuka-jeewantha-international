import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2 } from "lucide-react";
import { marketEditorial } from "@/content/market-editorial";
import { type MarketArticle } from "@/lib/market-articles";
import { marketPath, type Market } from "@/lib/markets";
import { getWriterEntries, writersCheckedAt, writersGuideDescription } from "@/lib/cv-writers";
import { marketPageSchema } from "@/lib/market-seo";
import styles from "./country.module.css";
import comparison from "./writers.module.css";

export default function CountryWritersArticle({ market, article }: { market: Market; article: MarketArticle }) {
  const editorial = marketEditorial[market.slug];
  const entries = getWriterEntries(market);
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(marketPageSchema(market, "blog", article)).replace(/</g, "\\u003c") }} />
    <header className={styles.titleBand}><div className={styles.container}>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href={marketPath(market)}>{market.label}</Link><span>/</span><Link href={marketPath(market, "blog")}>Career guides</Link></nav>
      <p className={styles.eyebrow}>Chanuka Jeewantha / CV writing guide</p>
      <h1>{article.title}</h1>
      <p>Your next career move deserves more than a template. Our premium {market.label} career branding service brings together personally crafted {market.document} writing, LinkedIn profiles and a clear professional strategy. Explore our founder-led approach alongside other writing services below.</p>
      <div className={styles.byline}>By <Link href={marketPath(market, "about")}>Chanuka Jeewantha</Link> / Reviewed <time dateTime={writersCheckedAt}>10 September 2026</time></div>
    </div></header>
    <article className={styles.band}><div className={styles.container}>
      <ol className={comparison.list} aria-label={`10 CV writers and companies for ${market.label}`}>
        {entries.map((entry, index) => <li key={entry.id} className={`${comparison.card} ${entry.featured ? comparison.featured : ""}`} data-writer={entry.id}>
          <figure className={comparison.figure}><div className={`${comparison.imageFrame} ${entry.image.darkBackground ? comparison.darkImage : ""}`}><Image src={entry.image.src} alt={entry.featured ? entry.name : `${entry.name}: ${entry.image.kind.toLowerCase()}`} width={240} height={180} sizes="(max-width: 600px) 112px, 160px" className={entry.featured ? comparison.portrait : comparison.logo} /></div><figcaption>{entry.image.kind}</figcaption></figure>
          <div className={comparison.details}><p className={comparison.kicker}>{entry.featured ? "Our featured service" : entry.kind}</p><h2><span className={comparison.number}>{index + 1}.</span> {entry.name}</h2><p className={comparison.scope}><Globe2 size={14} aria-hidden="true" />{entry.scope}</p><h3>{entry.featured ? "Why choose Chanuka" : "Experience & focus"}</h3><p>{entry.experience}</p>{entry.featured && <ul className={comparison.benefits}>{["Personal attention from your writer", "ATS-friendly, recruiter-focused documents", "One consistent career brand"].map((benefit) => <li key={benefit}><Check size={14} aria-hidden="true" />{benefit}</li>)}</ul>}<a className={comparison.source} href={entry.sourceUrl} target={entry.featured ? undefined : "_blank"} rel={entry.featured ? undefined : "noopener noreferrer"}>{entry.featured ? "Meet your writer" : "Service information (provider source)"}</a></div>
          <div className={comparison.cardAction}>{entry.featured ? <Link href={entry.website} className={styles.goldButton}>Visit Website <ArrowUpRight size={16} aria-hidden="true" /></Link> : <a href={entry.website} className={styles.outlineButton} target="_blank" rel="noopener noreferrer">Visit Website <ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
        </li>)}
      </ol>
      <section className={comparison.context}><h2>Choosing a writer for {market.label}</h2><p>{editorial.focus} For roles in {editorial.sectors.slice(0, 3).join(", ").toLowerCase()}, ask for a relevant anonymised sample and an explanation of who will write your document.</p><p>{editorial.question} {editorial.answer}</p></section>
      <section className={comparison.method}><h2>Your career story, personally crafted.</h2><div className={comparison.checks}>{["A personal profile review before the writing begins.", "Documents shaped around your target role, country and career level.", "A consistent professional story across CV, LinkedIn and cover letter.", "Clear scope, delivery and revision support agreed from the start."].map((item) => <p key={item}><Check size={18} aria-hidden="true" />{item}</p>)}</div><p>At Chanuka Jeewantha, we start with the person behind the document. Your experience, achievements and ambitions shape the work, bringing a considered, personal approach to every career move.</p><details className={comparison.guideNotes}><summary>About this guide</summary><p>{writersGuideDescription}</p><p>Other providers are described using their published service information, linked in each entry. Check current scope, language, availability and terms directly. Images identify the respective providers; any founding dates are provider-reported.</p></details></section>
      <section className={comparison.related}><div><p className={styles.eyebrow}>A personal starting point</p><h2>Explore Chanuka&apos;s {market.label} service.</h2><p>Review the scope, see {market.currency} estimates and share the role you are targeting.</p></div><div className={styles.actions}><Link className={styles.button} href={marketPath(market, "contact")}>Request a Profile Review <ArrowUpRight size={16} aria-hidden="true" /></Link><Link className={styles.textLink} href={marketPath(market, "catalogue")}>View {market.currency} packages</Link><Link className={styles.textLink} href={marketPath(market, "blog/cv-guide")}>{market.label} {market.document} guide</Link></div></section>
    </div></article>
  </>;
}
