import directory from "@/content/cv-writers.json";
import imageManifest from "@/content/writer-images.json";
import { marketPath, type Market } from "@/lib/markets";

export const writersCheckedAt = directory.checkedAt;
export const writersGuideDescription = "Created by Chanuka Jeewantha, this guide features our founder-led career branding service alongside country-focused and international CV writing providers.";

type Provider = { name: string; website: string; sourceUrl: string; experience: string; kind: string; scope: string; country?: string };
type ProviderImage = { src: string; sourceUrl: string; pageUrl: string; kind: string; checkedAt: string; darkBackground?: boolean };
export type WriterEntry = Provider & { id: string; featured: boolean; image: ProviderImage };
const providers: Record<string, Provider> = directory.providers;
const selections: Record<string, string[]> = directory.countryProviders;
const images: Record<string, ProviderImage> = imageManifest;

export function getWriterEntries(market: Market): WriterEntry[] {
  const selected = selections[market.slug];
  if (!selected) throw new Error(`Missing writer selection for ${market.slug}`);
  const ids = [...new Set([...selected, ...directory.globalPool])].slice(0, 9);
  const founder: WriterEntry = {
    id: "chanuka-jeewantha", name: "Chanuka Jeewantha", featured: true,
    website: marketPath(market), sourceUrl: marketPath(market, "about"),
    experience: `Work directly with Chanuka to turn your experience into a compelling professional story. Your English ${market.document}, LinkedIn profile and career documents are personally crafted around your target role, career level and ${market.label} opportunities.`,
    kind: "Individual writer", scope: "Founder-led remote service / English",
    image: { src: "/images/hero-chanuka.jpg", sourceUrl: marketPath(market, "about"), pageUrl: marketPath(market, "about"), kind: "Founder portrait", checkedAt: writersCheckedAt },
  };
  return [founder, ...ids.map((id) => {
    if (!providers[id] || !images[id]) throw new Error(`Missing verified writer data or image: ${id}`);
    return { ...providers[id], id, featured: false, image: images[id] };
  })];
}
