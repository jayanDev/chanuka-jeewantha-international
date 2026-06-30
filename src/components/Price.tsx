"use client";

import { useCurrency } from "@/components/CurrencyProvider";
import { formatPrice } from "@/lib/currency";

type PriceProps = {
  /** Base price in USD. */
  usd: number;
  className?: string;
  /** Optional suffix, e.g. "+" for "from" pricing. */
  suffix?: string;
};

/**
 * Renders a USD base price formatted into the visitor's selected currency.
 * Reactive to the CurrencyProvider - updates everywhere when the user switches.
 */
export default function Price({ usd, className, suffix }: PriceProps) {
  const { currency } = useCurrency();
  return (
    <span className={className} suppressHydrationWarning>
      {formatPrice(usd, currency)}
      {suffix ?? ""}
    </span>
  );
}
