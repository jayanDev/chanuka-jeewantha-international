import CountryDirectory from "@/components/markets/CountryDirectory";
import { buildPageMetadata } from "@/lib/seo";
import styles from "@/components/markets/country.module.css";

export const metadata = buildPageMetadata({ title: "Country Websites | Global CV & Career Services", description: "Choose your target country for premium CV, resume, LinkedIn and career services with local-currency estimates and country-specific career guides.", path: "/international" });

export default function InternationalDirectory() {
  return <div className={styles.site}><section className={styles.titleBand}><div className={styles.container}><p className={styles.eyebrow}>Chanuka Jeewantha / Global career branding</p><h1>Career services for your next market.</h1><p>Premium CV, resume and LinkedIn services for 50 markets. Founder-led, delivered remotely in English, with country-specific guidance and local-currency estimates.</p></div></section><section className={styles.band}><div className={styles.container}><CountryDirectory /></div></section></div>;
}
