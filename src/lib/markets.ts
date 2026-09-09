export type Market = {
  slug: string;
  name: string;
  label: string;
  region: string;
  locale: string;
  currency: string;
  dialCode: string;
  document: "CV" | "resume";
  optimisation: "optimisation" | "optimization";
};

export const markets: Market[] = [
  { slug: "en-uk", name: "United Kingdom", label: "UK", region: "GB", locale: "en-GB", currency: "GBP", dialCode: "+44", document: "CV", optimisation: "optimisation" },
  { slug: "en-au", name: "Australia", label: "Australia", region: "AU", locale: "en-AU", currency: "AUD", dialCode: "+61", document: "resume", optimisation: "optimisation" },
  { slug: "en-us", name: "United States", label: "US", region: "US", locale: "en-US", currency: "USD", dialCode: "+1", document: "resume", optimisation: "optimization" },
  { slug: "en-ca", name: "Canada", label: "Canada", region: "CA", locale: "en-CA", currency: "CAD", dialCode: "+1", document: "resume", optimisation: "optimization" },
  { slug: "en-nz", name: "New Zealand", label: "New Zealand", region: "NZ", locale: "en-NZ", currency: "NZD", dialCode: "+64", document: "CV", optimisation: "optimisation" },
  { slug: "en-ae", name: "United Arab Emirates", label: "UAE", region: "AE", locale: "en-AE", currency: "AED", dialCode: "+971", document: "CV", optimisation: "optimization" },
  { slug: "en-sa", name: "Saudi Arabia", label: "Saudi Arabia", region: "SA", locale: "en-SA", currency: "SAR", dialCode: "+966", document: "CV", optimisation: "optimization" },
  { slug: "en-mv", name: "Maldives", label: "Maldives", region: "MV", locale: "en-MV", currency: "MVR", dialCode: "+960", document: "CV", optimisation: "optimization" },
  { slug: "en-sg", name: "Singapore", label: "Singapore", region: "SG", locale: "en-SG", currency: "SGD", dialCode: "+65", document: "resume", optimisation: "optimisation" },
  { slug: "en-my", name: "Malaysia", label: "Malaysia", region: "MY", locale: "en-MY", currency: "MYR", dialCode: "+60", document: "resume", optimisation: "optimisation" },
  { slug: "en-ru", name: "Russia", label: "Russia", region: "RU", locale: "en-RU", currency: "RUB", dialCode: "+7", document: "CV", optimisation: "optimization" },
  { slug: "en-qa", name: "Qatar", label: "Qatar", region: "QA", locale: "en-QA", currency: "QAR", dialCode: "+974", document: "CV", optimisation: "optimization" },
  { slug: "en-om", name: "Oman", label: "Oman", region: "OM", locale: "en-OM", currency: "OMR", dialCode: "+968", document: "CV", optimisation: "optimization" },
  { slug: "en-kw", name: "Kuwait", label: "Kuwait", region: "KW", locale: "en-KW", currency: "KWD", dialCode: "+965", document: "CV", optimisation: "optimization" },
  { slug: "en-ie", name: "Ireland", label: "Ireland", region: "IE", locale: "en-IE", currency: "EUR", dialCode: "+353", document: "CV", optimisation: "optimisation" },
  { slug: "en-fi", name: "Finland", label: "Finland", region: "FI", locale: "en-FI", currency: "EUR", dialCode: "+358", document: "CV", optimisation: "optimisation" },
  { slug: "en-in", name: "India", label: "India", region: "IN", locale: "en-IN", currency: "INR", dialCode: "+91", document: "resume", optimisation: "optimization" },
  { slug: "en-bd", name: "Bangladesh", label: "Bangladesh", region: "BD", locale: "en-BD", currency: "BDT", dialCode: "+880", document: "CV", optimisation: "optimization" },
  { slug: "en-vn", name: "Vietnam", label: "Vietnam", region: "VN", locale: "en-VN", currency: "VND", dialCode: "+84", document: "CV", optimisation: "optimization" },
  { slug: "en-it", name: "Italy", label: "Italy", region: "IT", locale: "en-IT", currency: "EUR", dialCode: "+39", document: "CV", optimisation: "optimisation" },
];

export const marketSections = ["", "about", "contact", "blog", "catalogue", "services"] as const;
export type MarketSection = (typeof marketSections)[number];
export const articleTopics = ["cv-guide", "linkedin-profile", "career-strategy"] as const;
export type ArticleTopic = (typeof articleTopics)[number];

export function getMarket(slug: string): Market | undefined {
  return markets.find((market) => market.slug === slug);
}

export function marketFromPath(path: string): Market | undefined {
  return getMarket(path.split("/")[1]);
}

export function marketPath(market: Market, section = ""): string {
  return `/${market.slug}${section ? `/${section}` : ""}`;
}

export function isMarketPath(path: string): boolean {
  if (!marketFromPath(path)) return false;
  const suffix = path.split("/").slice(2).join("/");
  return marketSections.some((section) => section === suffix) || articleTopics.some((topic) => suffix === `blog/${topic}`);
}

export function switchMarketPath(path: string, market: Market): string {
  const current = marketFromPath(path);
  const suffix = current ? path.split("/").slice(2).join("/") : "";
  const valid = marketSections.some((section) => section === suffix) || articleTopics.some((topic) => suffix === `blog/${topic}`);
  return marketPath(market, valid ? suffix : "");
}

export function marketAlternates(section = ""): Record<string, string> {
  return { ...Object.fromEntries(markets.map((market) => [market.locale, marketPath(market, section)])), ...(section === "" ? { "x-default": "/" } : {}) };
}
