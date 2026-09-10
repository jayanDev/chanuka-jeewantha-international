"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { markets, marketPath } from "@/lib/markets";
import styles from "./country.module.css";

const alphabeticalMarkets = [...markets].sort((a, b) => a.name.localeCompare(b.name, "en"));

export default function CountryDirectory() {
  const [query, setQuery] = useState("");
  const search = query.trim().toLocaleLowerCase("en");
  const matches = alphabeticalMarkets.filter((market) =>
    `${market.name} ${market.label} ${market.currency} ${market.region} ${market.slug} ${market.slug === "en-cz" ? "Czech Republic" : ""}`.toLocaleLowerCase("en").includes(search),
  );

  return <>
    <div className={styles.directoryToolbar}>
      <div className={styles.directorySearch}>
        <label htmlFor="country-search">Country or currency</label>
        <span className={styles.directorySearchField}>
          <Search size={18} aria-hidden="true" />
          <input id="country-search" type="search" aria-controls="country-results" value={query} onChange={(event) => setQuery(event.target.value)} />
          <button type="button" aria-label="Clear country search" title="Clear country search" onClick={() => setQuery("")} disabled={!query}><X size={18} aria-hidden="true" /></button>
        </span>
      </div>
      <p role="status" aria-live="polite">{matches.length} {matches.length === 1 ? "market" : "markets"}</p>
    </div>
    <nav id="country-results" className={styles.directory} aria-label="Choose a country website">
      {matches.map((market) => <Link key={market.slug} href={marketPath(market)} hrefLang={market.locale}><strong>{market.name}</strong><span>{market.currency} / English services</span></Link>)}
    </nav>
    {matches.length === 0 && <p>No matching countries.</p>}
  </>;
}
