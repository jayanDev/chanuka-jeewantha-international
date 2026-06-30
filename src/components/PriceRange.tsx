"use client";

import { useCurrency } from "@/components/CurrencyProvider";
import { formatPrice, parseUsd } from "@/lib/currency";

type Props = {
  /** USD range string like "$179 - $1,499" or a single "$349". */
  range: string;
  className?: string;
};

/**
 * Renders a USD price range/string (from the SEO page data) localized to the
 * visitor's currency. Handles both "$179 - $1,499" and single "$349".
 */
export default function PriceRange({ range, className }: Props) {
  const { currency } = useCurrency();
  const parts = range.split(/\s*[-–]\s*/).map((p) => parseUsd(p)).filter((n) => n > 0);

  if (parts.length === 0) {
    return <span className={className}>{range}</span>;
  }

  if (parts.length === 1) {
    return (
      <span className={className} suppressHydrationWarning>
        {formatPrice(parts[0], currency)}
      </span>
    );
  }

  return (
    <span className={className} suppressHydrationWarning>
      {formatPrice(parts[0], currency)} – {formatPrice(parts[parts.length - 1], currency)}
    </span>
  );
}
