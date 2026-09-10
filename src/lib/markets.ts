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
  { slug: "en-de", name: "Germany", label: "Germany", region: "DE", locale: "en-DE", currency: "EUR", dialCode: "+49", document: "CV", optimisation: "optimisation" },
  { slug: "en-fr", name: "France", label: "France", region: "FR", locale: "en-FR", currency: "EUR", dialCode: "+33", document: "CV", optimisation: "optimisation" },
  { slug: "en-nl", name: "Netherlands", label: "Netherlands", region: "NL", locale: "en-NL", currency: "EUR", dialCode: "+31", document: "CV", optimisation: "optimisation" },
  { slug: "en-ch", name: "Switzerland", label: "Switzerland", region: "CH", locale: "en-CH", currency: "CHF", dialCode: "+41", document: "CV", optimisation: "optimisation" },
  { slug: "en-se", name: "Sweden", label: "Sweden", region: "SE", locale: "en-SE", currency: "SEK", dialCode: "+46", document: "CV", optimisation: "optimisation" },
  { slug: "en-no", name: "Norway", label: "Norway", region: "NO", locale: "en-NO", currency: "NOK", dialCode: "+47", document: "CV", optimisation: "optimisation" },
  { slug: "en-dk", name: "Denmark", label: "Denmark", region: "DK", locale: "en-DK", currency: "DKK", dialCode: "+45", document: "CV", optimisation: "optimisation" },
  { slug: "en-be", name: "Belgium", label: "Belgium", region: "BE", locale: "en-BE", currency: "EUR", dialCode: "+32", document: "CV", optimisation: "optimisation" },
  { slug: "en-at", name: "Austria", label: "Austria", region: "AT", locale: "en-AT", currency: "EUR", dialCode: "+43", document: "CV", optimisation: "optimisation" },
  { slug: "en-es", name: "Spain", label: "Spain", region: "ES", locale: "en-ES", currency: "EUR", dialCode: "+34", document: "CV", optimisation: "optimisation" },
  { slug: "en-pt", name: "Portugal", label: "Portugal", region: "PT", locale: "en-PT", currency: "EUR", dialCode: "+351", document: "CV", optimisation: "optimisation" },
  { slug: "en-pl", name: "Poland", label: "Poland", region: "PL", locale: "en-PL", currency: "PLN", dialCode: "+48", document: "CV", optimisation: "optimisation" },
  { slug: "en-cz", name: "Czechia", label: "Czechia", region: "CZ", locale: "en-CZ", currency: "CZK", dialCode: "+420", document: "CV", optimisation: "optimisation" },
  { slug: "en-lu", name: "Luxembourg", label: "Luxembourg", region: "LU", locale: "en-LU", currency: "EUR", dialCode: "+352", document: "CV", optimisation: "optimisation" },
  { slug: "en-mt", name: "Malta", label: "Malta", region: "MT", locale: "en-MT", currency: "EUR", dialCode: "+356", document: "CV", optimisation: "optimisation" },
  { slug: "en-bh", name: "Bahrain", label: "Bahrain", region: "BH", locale: "en-BH", currency: "BHD", dialCode: "+973", document: "CV", optimisation: "optimization" },
  { slug: "en-jp", name: "Japan", label: "Japan", region: "JP", locale: "en-JP", currency: "JPY", dialCode: "+81", document: "resume", optimisation: "optimization" },
  { slug: "en-kr", name: "South Korea", label: "South Korea", region: "KR", locale: "en-KR", currency: "KRW", dialCode: "+82", document: "resume", optimisation: "optimization" },
  { slug: "en-ph", name: "Philippines", label: "Philippines", region: "PH", locale: "en-PH", currency: "PHP", dialCode: "+63", document: "resume", optimisation: "optimization" },
  { slug: "en-id", name: "Indonesia", label: "Indonesia", region: "ID", locale: "en-ID", currency: "IDR", dialCode: "+62", document: "CV", optimisation: "optimization" },
  { slug: "en-th", name: "Thailand", label: "Thailand", region: "TH", locale: "en-TH", currency: "THB", dialCode: "+66", document: "resume", optimisation: "optimization" },
  { slug: "en-pk", name: "Pakistan", label: "Pakistan", region: "PK", locale: "en-PK", currency: "PKR", dialCode: "+92", document: "CV", optimisation: "optimization" },
  { slug: "en-np", name: "Nepal", label: "Nepal", region: "NP", locale: "en-NP", currency: "NPR", dialCode: "+977", document: "CV", optimisation: "optimization" },
  { slug: "en-za", name: "South Africa", label: "South Africa", region: "ZA", locale: "en-ZA", currency: "ZAR", dialCode: "+27", document: "CV", optimisation: "optimisation" },
  { slug: "en-ng", name: "Nigeria", label: "Nigeria", region: "NG", locale: "en-NG", currency: "NGN", dialCode: "+234", document: "CV", optimisation: "optimization" },
  { slug: "en-ke", name: "Kenya", label: "Kenya", region: "KE", locale: "en-KE", currency: "KES", dialCode: "+254", document: "CV", optimisation: "optimisation" },
  { slug: "en-gh", name: "Ghana", label: "Ghana", region: "GH", locale: "en-GH", currency: "GHS", dialCode: "+233", document: "CV", optimisation: "optimization" },
  { slug: "en-br", name: "Brazil", label: "Brazil", region: "BR", locale: "en-BR", currency: "BRL", dialCode: "+55", document: "resume", optimisation: "optimization" },
  { slug: "en-mx", name: "Mexico", label: "Mexico", region: "MX", locale: "en-MX", currency: "MXN", dialCode: "+52", document: "resume", optimisation: "optimization" },
  { slug: "en-cl", name: "Chile", label: "Chile", region: "CL", locale: "en-CL", currency: "CLP", dialCode: "+56", document: "CV", optimisation: "optimization" },
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
