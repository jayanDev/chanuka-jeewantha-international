"use client";

import { useCurrency } from "@/components/CurrencyProvider";
import { CURRENCY_LIST, type CurrencyCode } from "@/lib/currency";

type Props = {
  className?: string;
  /** "light" for dark backgrounds (footer), "dark" for light backgrounds (header). */
  tone?: "light" | "dark";
};

/**
 * Compact currency selector. Lets visitors override auto-detection.
 */
export default function CurrencySwitcher({ className = "", tone = "dark" }: Props) {
  const { currency, setCurrency } = useCurrency();

  const base =
    tone === "light"
      ? "bg-white/10 text-white border-white/20 hover:border-white/40"
      : "bg-white text-foreground border-zinc-300 hover:border-brand-main";

  return (
    <label className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="sr-only">Currency</span>
      <svg className={`h-4 w-4 ${tone === "light" ? "text-white/60" : "text-zinc-400"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
        aria-label="Select currency"
        className={`cursor-pointer rounded-[8px] border px-2 py-1 text-xs font-semibold outline-none transition-colors ${base}`}
      >
        {CURRENCY_LIST.map((c) => (
          <option key={c.code} value={c.code} className="text-foreground">
            {c.code} · {c.symbol}
          </option>
        ))}
      </select>
    </label>
  );
}
