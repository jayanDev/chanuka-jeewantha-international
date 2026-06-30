// -----------------------------------------------------------------------------
// Currency localization
//
// All package prices on the site are defined in USD (the base/source of truth).
// This module converts a USD amount into the visitor's local currency for
// display, using a MAINTAINED rate table below. Update the rates here whenever
// they drift - no external API is required.
//
// Checkout is manual (a Wise / PayPal / Stripe payment link is sent after the
// enquiry), so the invoice can be issued in the displayed currency.
// -----------------------------------------------------------------------------

export type CurrencyCode =
  | "USD"
  | "CAD"
  | "GBP"
  | "AUD"
  | "NZD"
  | "EUR"
  | "INR"
  | "LKR"
  | "AED"
  | "SGD";

export type CurrencyConfig = {
  code: CurrencyCode;
  /** Symbol shown to users, e.g. "$", "CA$", "£" */
  symbol: string;
  /** Human label for the switcher, e.g. "US Dollar" */
  label: string;
  /** USD -> this currency multiplier. EDIT THESE as rates move. */
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
  USD: { code: "USD", symbol: "$", label: "US Dollar", rate: 1, roundTo: 1, locale: "en-US" },
  CAD: { code: "CAD", symbol: "CA$", label: "Canadian Dollar", rate: 1.39, roundTo: 5, locale: "en-CA" },
  GBP: { code: "GBP", symbol: "£", label: "British Pound", rate: 0.79, roundTo: 5, locale: "en-GB" },
  AUD: { code: "AUD", symbol: "A$", label: "Australian Dollar", rate: 1.53, roundTo: 5, locale: "en-AU" },
  NZD: { code: "NZD", symbol: "NZ$", label: "NZ Dollar", rate: 1.66, roundTo: 5, locale: "en-NZ" },
  EUR: { code: "EUR", symbol: "€", label: "Euro", rate: 0.92, roundTo: 5, locale: "en-IE" },
  INR: { code: "INR", symbol: "₹", label: "Indian Rupee", rate: 86, roundTo: 100, locale: "en-IN" },
  LKR: { code: "LKR", symbol: "Rs", label: "Sri Lanka Rupee", rate: 300, roundTo: 500, locale: "en-LK" },
  AED: { code: "AED", symbol: "AED", label: "UAE Dirham", rate: 3.67, roundTo: 5, locale: "en-AE" },
  SGD: { code: "SGD", symbol: "S$", label: "Singapore Dollar", rate: 1.34, roundTo: 5, locale: "en-SG" },
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
  LK: "LKR",
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
  return !!value && value in CURRENCIES;
}

function roundNice(amount: number, roundTo: number): number {
  if (roundTo <= 1) return Math.round(amount);
  return Math.round(amount / roundTo) * roundTo;
}

/** Convert a USD amount into the target currency, rounded to a clean value. */
export function convertFromUsd(usd: number, code: CurrencyCode): number {
  const cfg = CURRENCIES[code] ?? CURRENCIES[BASE_CURRENCY];
  return roundNice(usd * cfg.rate, cfg.roundTo);
}

/** Parse a USD price string like "$1,499" or "$349" into a number. Returns 0 if none. */
export function parseUsd(value: string): number {
  const digits = value.replace(/[^0-9.]/g, "");
  const n = Number.parseFloat(digits);
  return Number.isFinite(n) ? n : 0;
}

/** Format a USD amount as a localized currency string, e.g. "CA$485", "Rs 53,500". */
export function formatPrice(usd: number, code: CurrencyCode): string {
  const cfg = CURRENCIES[code] ?? CURRENCIES[BASE_CURRENCY];
  const converted = convertFromUsd(usd, code);
  const grouped = new Intl.NumberFormat(cfg.locale, { maximumFractionDigits: 0 }).format(converted);
  // Symbols with letters (CA$, NZ$, AED, Rs) read better with a space.
  const needsSpace = /[A-Za-z]/.test(cfg.symbol) && cfg.symbol !== "$";
  return `${cfg.symbol}${needsSpace ? " " : ""}${grouped}`;
}
