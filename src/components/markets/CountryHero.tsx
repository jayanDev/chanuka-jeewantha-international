import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, UserRoundCheck } from "lucide-react";
import { marketEditorial } from "@/content/market-editorial";
import { marketPath, type Market } from "@/lib/markets";
import styles from "./country.module.css";

export default function CountryHero({ market }: { market: Market }) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${styles.heroLayout}`}>
        <div className={styles.heroCopy}>
          <div className={styles.heroAccent} aria-hidden="true" />
          <p className={styles.eyebrow}>Chanuka Jeewantha / {market.label}</p>
          <h1>Premium ATS {market.document === "CV" ? "CV" : "Resume"} Writing &amp; LinkedIn Services for <span>{market.name}</span></h1>
          <p className={styles.heroIntro}>{marketEditorial[market.slug].intro}</p>
          <div className={styles.actions}>
            <Link href={marketPath(market, "contact")} className={styles.goldButton}>Apply for Career Support <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link href={marketPath(market, "catalogue")} className={styles.outlineButton}>View {market.currency} Packages</Link>
          </div>
          <div className={styles.heroProof}>
            <span><UserRoundCheck size={18} aria-hidden="true" /> Personally written by Chanuka</span>
            <span><ShieldCheck size={18} aria-hidden="true" /> ATS-friendly career documents</span>
          </div>
        </div>
        <Image src="/images/hero-chanuka.jpg" alt="Chanuka Jeewantha, founder and career document writer" width={1200} height={1500} sizes="(max-width: 760px) 260px, (max-width: 1000px) 34vw, 440px" priority className={styles.heroPortrait} />
      </div>
    </section>
  );
}
