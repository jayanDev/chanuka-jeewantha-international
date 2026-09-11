import { experienceOptions, serviceOptions, signaturePrices, type ServiceKey } from "@/lib/packages-catalog";
import type { Market } from "@/lib/markets";
import { marketRates } from "@/lib/market-rates";

export function marketAmount(usd: number, market: Market): number {
  const rate = marketRates[market.currency];
  if (!rate || !Number.isFinite(usd) || usd < 0) throw new Error("Invalid market price");
  return Number((Math.round(usd * rate.rate / rate.roundTo) * rate.roundTo).toFixed(3));
}

export function marketPrice(usd: number, market: Market): string {
  const fractionDigits = marketRates[market.currency]?.roundTo === 0.001 ? 3 : 0;
  return new Intl.NumberFormat(market.locale, {
    style: "currency", currency: market.currency, currencyDisplay: "code",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(marketAmount(usd, market));
}

export function serviceName(key: ServiceKey, market: Market): string {
  const document = market.document === "CV" ? "CV" : "Resume";
  const names: Record<ServiceKey, string> = {
    "ats-cv": `ATS ${document} Writing`,
    linkedin: `LinkedIn Profile ${market.optimisation === "optimisation" ? "Optimisation" : "Optimization"}`,
    "cover-letter": "Cover Letter Writing",
    "foreign-cv": `Country-Specific ${document}`,
    "graphical-cv": "Graphical CV / Premium Design",
    consultation: "Career Strategy Consultation",
  };
  return names[key];
}

export function marketServices(market: Market) {
  return serviceOptions.map((service) => ({
    ...service, title: serviceName(service.key, market),
    prices: (signaturePrices[service.key] ?? []).flatMap((price, index) => {
      if (price === null) return [];
      const level = experienceOptions[index].title;
      if (typeof price === "number") return [{ label: level, usd: price }];
      return [
        ...(price.thirtyMin ? [{ label: `${level} - 30 minutes`, usd: price.thirtyMin }] : []),
        { label: `${level} - ${price.label ?? "1 hour"}`, usd: price.oneHour },
      ];
    }),
  }));
}

export { internationalBundles as marketBundles } from "@/lib/international-bundles";

export function marketEnquiryLink(market: Market, selection: string, level?: string): string {
  const query = new URLSearchParams({ package: selection });
  if (level) query.set("level", level);
  return `/${market.slug}/contact?${query}`;
}
