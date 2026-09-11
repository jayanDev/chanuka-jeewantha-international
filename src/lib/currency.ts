// USD is the base price. Currency estimates share the dated market rate table.
import { marketRates } from "@/lib/market-rates";

export type CurrencyCode =
  | "USD"
  | "CAD"
  | "GBP"
  | "AUD"
  | "NZD"
  | "EUR"
  | "INR"
  | "AED"
  | "SGD";

export type CurrencyConfig = {
  code: CurrencyCode;
  /** Symbol shown to users, e.g. "$", "CA$", "£" */
  symbol: string;
  /** Human label for the switcher, e.g. "US Dollar" */
  label: string;
  /** USD -> this currency multiplier. Maintained in market-rates.ts. */
  rate: number;
  /** Round the converted price to the nearest N for clean pricing. */
  roundTo: number;
  /** Intl locale used for digit grouping. */
  locale: string;
};

export const BASE_CURRENCY: CurrencyCode = "USD";

// --- MAINTAINED RATE TABLE -------------------------------------------------
// Approximate rates. Update periodically. 1 USD = `rate` units of the currency.
export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  USD: { code: "USD", symbol: "$", label: "US Dollar", ...marketRates.USD, locale: "en-US" },
  CAD: { code: "CAD", symbol: "CA$", label: "Canadian Dollar", ...marketRates.CAD, locale: "en-CA" },
  GBP: { code: "GBP", symbol: "£", label: "British Pound", ...marketRates.GBP, locale: "en-GB" },
  AUD: { code: "AUD", symbol: "A$", label: "Australian Dollar", ...marketRates.AUD, locale: "en-AU" },
  NZD: { code: "NZD", symbol: "NZ$", label: "NZ Dollar", ...marketRates.NZD, locale: "en-NZ" },
  EUR: { code: "EUR", symbol: "€", label: "Euro", ...marketRates.EUR, locale: "en-IE" },
  INR: { code: "INR", symbol: "₹", label: "Indian Rupee", ...marketRates.INR, locale: "en-IN" },
  AED: { code: "AED", symbol: "AED", label: "UAE Dirham", ...marketRates.AED, locale: "en-AE" },
  SGD: { code: "SGD", symbol: "S$", label: "Singapore Dollar", ...marketRates.SGD, locale: "en-SG" },
};

export const CURRENCY_LIST: CurrencyConfig[] = Object.values(CURRENCIES);

// --- COUNTRY -> CURRENCY MAP ----------------------------------------------
// ISO-3166 alpha-2 country code -> currency. Anything not listed falls back
// to USD, which is also the primary (US) audience default.
const COUNTRY_TO_CURRENCY: Record<string, CurrencyCode> = {
  US: "USD",
  CA: "CAD",
  GB: "GBP",
  IE: "EUR",
  AU: "AUD",
  NZ: "NZD",
  IN: "INR",
  AE: "AED",
  SG: "SGD",
  // Eurozone
  DE: "EUR", FR: "EUR", ES: "EUR", IT: "EUR", NL: "EUR", BE: "EUR",
  AT: "EUR", PT: "EUR", FI: "EUR", GR: "EUR", LU: "EUR",
};

export function currencyForCountry(countryCode: string | null | undefined): CurrencyCode {
  if (!countryCode) return BASE_CURRENCY;
  return COUNTRY_TO_CURRENCY[countryCode.toUpperCase()] ?? BASE_CURRENCY;
}

export function isCurrencyCode(value: string | null | undefined): value is CurrencyCode {
  return !!value && Object.hasOwn(CURRENCIES, value);
}

function roundNice(amount: number, roundTo: number): number {
  if (roundTo <= 1) return Math.round(amount);
  return Math.round(amount / roundTo) * roundTo;
}

/** Convert a USD amount into the target currency, rounded to a clean value. */
export function convertFromUsd(usd: number, code: CurrencyCode): number {
  if (!Number.isFinite(usd) || usd < 0) throw new Error("Invalid price");
  const cfg = CURRENCIES[code] ?? CURRENCIES[BASE_CURRENCY];
  return roundNice(usd * cfg.rate, cfg.roundTo);
}

/** Parse a USD price string like "$1,499" or "$349" into a number. Returns 0 if none. */
export function parseUsd(value: string): number {
  const digits = value.replace(/[^0-9.]/g, "");
  const n = Number.parseFloat(digits);
  return Number.isFinite(n) ? n : 0;
}

/** Format a USD amount as a localized currency string, e.g. "CA$485", "AED 660". */
export function formatPrice(usd: number, code: CurrencyCode): string {
  const cfg = CURRENCIES[code] ?? CURRENCIES[BASE_CURRENCY];
  const converted = convertFromUsd(usd, code);
  const grouped = new Intl.NumberFormat(cfg.locale, { maximumFractionDigits: 0 }).format(converted);
  // Symbols with letters (CA$, NZ$, AED) read better with a space.
  const needsSpace = /[A-Za-z]/.test(cfg.symbol) && cfg.symbol !== "$";
  return `${cfg.symbol}${needsSpace ? " " : ""}${grouped}`;
}
