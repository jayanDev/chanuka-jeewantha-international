import Link from "next/link";
import { markets, marketPath } from "@/lib/markets";
import { buildPageMetadata } from "@/lib/seo";
import styles from "@/components/markets/country.module.css";

export const metadata = buildPageMetadata({ title: "Country Websites | Global CV & Career Services", description: "Choose your target country for premium CV, resume, LinkedIn and career services with local-currency estimates and country-specific career guides.", path: "/international" });

export default function InternationalDirectory() {
  return <div className={styles.site}><section className={styles.titleBand}><div className={styles.container}><p className={styles.eyebrow}>Chanuka Jeewantha / Global career branding</p><h1>Career services for your next market.</h1><p>Choose the country you are targeting for focused career guidance, premium packages and prices in its currency. All country services are delivered remotely in English.</p></div></section><section className={styles.band}><div className={styles.container}><nav className={styles.directory} aria-label="Choose a country website">{markets.map((market) => <Link key={market.slug} href={marketPath(market)} hrefLang={market.locale}><strong>{market.name}</strong><span>{market.currency} / English services</span></Link>)}</nav></div></section></div>;
}
