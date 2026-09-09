"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Globe2, Menu, X, ArrowUpRight } from "lucide-react";
import CurrencyProvider from "@/components/CurrencyProvider";
import { markets, marketFromPath, marketPath, switchMarketPath, type Market } from "@/lib/markets";
import styles from "./country.module.css";

function CountryHeader({ market, pathname }: { market: Market; pathname: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const links = [["", "Home"], ["services", "Services"], ["catalogue", "Catalogue"], ["blog", "Blog"], ["about", "About"], ["contact", "Apply Now"]];
  return (
    <header className={styles.header}>
      <div className={styles.utility}>
        <span>English service for {market.name} <span className={styles.currencyTag}>{market.currency}</span></span>
        <label className={styles.marketSelect}>
          <Globe2 size={15} aria-hidden="true" />
          <span className="sr-only">Choose country website</span>
          <select value={market.slug} onChange={(event) => {
            const next = markets.find((item) => item.slug === event.target.value);
            if (next) router.push(switchMarketPath(pathname, next));
          }}>
            {markets.map((item) => <option key={item.slug} value={item.slug}>{item.label} ({item.currency})</option>)}
          </select>
        </label>
      </div>
      <div className={styles.navRow}>
        <Link href={marketPath(market)} className={styles.brand} aria-label={`Chanuka Jeewantha ${market.label} home`}>Chanuka<span>.</span><small>{market.label} Career Services</small></Link>
        <button className={styles.menuButton} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="country-navigation" title={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        <nav id="country-navigation" aria-label={`${market.label} navigation`} className={`${styles.nav} ${open ? styles.navOpen : ""}`} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
          {links.map(([section, label]) => {
            const href = marketPath(market, section);
            const active = pathname === href || (section === "blog" && pathname.startsWith(`${href}/`));
            return <Link key={label} href={href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined} className={section === "contact" ? styles.navCta : undefined}>{label}{section === "contact" && <ArrowUpRight size={16} aria-hidden="true" />}</Link>;
          })}
        </nav>
      </div>
    </header>
  );
}

function CountryFooter({ market }: { market: Market }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div><Link href={marketPath(market)} className={styles.footerBrand}>Chanuka Jeewantha</Link><p>Premium, personally crafted career documents for {market.name}.<br />Delivered remotely in English.</p></div>
          <Link href={marketPath(market, "contact")} className={styles.goldButton}>Request a Profile Review <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <nav className={styles.footerLinks} aria-label={`${market.label} footer`}>
          <Link href={marketPath(market, "services")}>Services</Link><Link href={marketPath(market, "catalogue")}>Packages & {market.currency} pricing</Link><Link href={marketPath(market, "blog")}>Career articles</Link><Link href={marketPath(market, "about")}>About Chanuka</Link><Link href={marketPath(market, "contact")}>Contact</Link><Link href="/international">All country websites</Link>
        </nav>
        <details className={styles.countryLinks}><summary>Explore another country</summary><nav aria-label="Country websites">{markets.map((item) => <Link key={item.slug} href={marketPath(item)} hrefLang={item.locale}>{item.label}</Link>)}</nav></details>
        <div className={styles.footerBottom}><span>© {new Date().getFullYear()} Chanuka Jeewantha</span><div><Link href="/privacy-policy">Privacy</Link><Link href="/terms-and-conditions">Terms</Link><Link href="/refund-policy">Refund policy</Link><Link href="/">Global website</Link></div></div>
        <p className={styles.localLink}>For Sri Lankan clients, visit <a href="https://chanukajeewantha.lk">chanukajeewantha.lk</a></p>
      </div>
    </footer>
  );
}

export default function CountrySiteChrome({ children, globalHeader, globalFooter }: { children: ReactNode; globalHeader: ReactNode; globalFooter: ReactNode }) {
  const pathname = usePathname();
  const market = marketFromPath(pathname);
  if (!market) return <CurrencyProvider>{globalHeader}<main id="main-content" className="flex-grow flex flex-col">{children}</main>{globalFooter}</CurrencyProvider>;
  return <div className={styles.site} lang={market.locale} data-market={market.slug} data-currency={market.currency}><CountryHeader key={pathname} market={market} pathname={pathname} /><main id="main-content">{children}</main><CountryFooter market={market} /></div>;
}
