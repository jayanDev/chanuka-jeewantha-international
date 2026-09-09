import { notFound } from "next/navigation";
import { markets, getMarket, articleTopics } from "@/lib/markets";
import { getMarketArticles } from "@/lib/market-articles";
import { buildMarketMetadata } from "@/lib/market-seo";
import { CountryArticle } from "@/components/markets/CountryPages";

type Props = { params: Promise<{ landingSlug: string; articleSlug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return markets.flatMap((market) => articleTopics.map((articleSlug) => ({ landingSlug: market.slug, articleSlug })));
}

async function resolveArticle(params: Props["params"]) {
  const { landingSlug, articleSlug } = await params;
  const market = getMarket(landingSlug);
  if (!market) notFound();
  const article = getMarketArticles(market).find((item) => item.slug === articleSlug);
  if (!article) notFound();
  return { market, article };
}

export async function generateMetadata({ params }: Props) {
  const { market, article } = await resolveArticle(params);
  return buildMarketMetadata(market, "blog", article);
}

export default async function ArticlePage({ params }: Props) {
  const { market, article } = await resolveArticle(params);
  return <CountryArticle market={market} article={article} />;
}
