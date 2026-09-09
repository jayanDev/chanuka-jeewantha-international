import { notFound } from "next/navigation";
import { markets, getMarket, marketSections } from "@/lib/markets";
import { buildMarketMetadata } from "@/lib/market-seo";
import { CountryAbout, CountryBlog, CountryCatalogue, CountryContact, CountryServices } from "@/components/markets/CountryPages";

type Props = { params: Promise<{ landingSlug: string; countryPage: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> };
export const dynamicParams = false;

export function generateStaticParams() {
  return markets.flatMap((market) => marketSections.filter(Boolean).map((section) => ({ landingSlug: market.slug, countryPage: section })));
}

export async function generateMetadata({ params }: Props) {
  const { landingSlug, countryPage } = await params;
  const market = getMarket(landingSlug);
  const section = marketSections.find((item) => item === countryPage);
  if (!market || !section) notFound();
  return buildMarketMetadata(market, section);
}

export default async function CountrySubpage({ params, searchParams }: Props) {
  const { landingSlug, countryPage } = await params;
  const market = getMarket(landingSlug);
  if (!market) notFound();
  switch (countryPage) {
    case "about": return <CountryAbout market={market} />;
    case "blog": return <CountryBlog market={market} />;
    case "catalogue": return <CountryCatalogue market={market} />;
    case "services": return <CountryServices market={market} />;
    case "contact": {
      const query = await searchParams;
      return <CountryContact market={market} selection={typeof query.package === "string" ? query.package : undefined} careerLevel={typeof query.level === "string" ? query.level : undefined} />;
    }
    default: notFound();
  }
}
