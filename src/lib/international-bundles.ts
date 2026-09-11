import { signaturePrices } from "@/lib/packages-catalog";

export type InternationalBundle = {
  id: string;
  name: string;
  usd: number;
  audience: string;
  delivery: string;
  features: string[];
  popular?: boolean;
  premium?: boolean;
  comparableLevel?: number;
};

export const internationalBundles: InternationalBundle[] = [
  { id: "starter", name: "International Starter Pack", usd: 179, audience: "Students & fresh graduates", delivery: "7-day delivery", comparableLevel: 1, features: ["Fresh Graduate ATS CV / resume", "Cover letter", "LinkedIn optimization", "7-day delivery"] },
  { id: "career", name: "International Career Pack", usd: 349, audience: "Working professionals", delivery: "30-day support", comparableLevel: 2, popular: true, features: ["Professional ATS CV / resume", "LinkedIn optimization", "Cover letter", "30-day support", "1 round of revisions"] },
  { id: "migration", name: "Global Migration Pack", usd: 499, audience: "Professionals making a cross-border move", delivery: "60-day support", features: ["Country-specific ATS CV", "International Foreign Job CV", "LinkedIn optimization", "2 role-specific cover letters", "60-day support"] },
  { id: "executive", name: "Executive Brand Suite", usd: 899, audience: "Senior professionals & executives", delivery: "90-day premium support", features: ["Executive ATS CV / resume", "Executive LinkedIn optimization", "Executive cover letter", "International Foreign Job CV", "1-hour strategy consultation", "90-day premium support"] },
  { id: "c-suite", name: "C-Suite Premium", usd: 1499, audience: "Directors, founders & C-suite leaders", delivery: "6-month support", premium: true, features: ["C-suite CV / resume", "Executive LinkedIn with content strategy", "Cover letter", "International Foreign Job CV", "2 hours of strategy sessions", "6-month support", "Quarterly LinkedIn refresh"] },
];

// Compare only bundles with exactly specified, separately priced service levels.
export function bundleSavings(bundle: InternationalBundle): number | undefined {
  if (bundle.comparableLevel === undefined) return undefined;
  const level = bundle.comparableLevel;
  const values = (["ats-cv", "linkedin", "cover-letter"] as const).map(key => signaturePrices[key]?.[level]);
  if (!values.every((value): value is number => typeof value === "number")) return undefined;
  return Math.max(0, values.reduce((total, price) => total + price, 0) - bundle.usd);
}
