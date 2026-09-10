import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import CountryWritersArticle from "./CountryWritersArticle";
import { getMarket } from "@/lib/markets";
import { getMarketArticles } from "@/lib/market-articles";

afterEach(cleanup);

describe("writer comparison article", () => {
  it("leads with our featured service and gives every entry a real destination", () => {
    const market = getMarket("en-uk")!;
    render(<CountryWritersArticle market={market} article={getMarketArticles(market)[3]} />);
    expect(screen.queryByText("How to read this list")).toBeNull();
    expect(screen.getByText("Our featured service")).toBeDefined();
    expect(screen.getByText("Why choose Chanuka")).toBeDefined();
    expect(screen.getByText(/Created by Chanuka Jeewantha, this guide features our founder-led/)).toBeDefined();
    const list = screen.getByRole("list", { name: "10 CV writers and companies for UK" });
    const cards = within(list).getAllByRole("listitem").filter((item) => item.parentElement === list);
    expect(cards).toHaveLength(10);
    expect(within(cards[0]).getByRole("link", { name: "Visit Website" }).getAttribute("href")).toBe("/en-uk");
    for (const card of cards.slice(1)) {
      const link = within(card).getByRole("link", { name: "Visit Website" });
      expect(link.getAttribute("href")).toMatch(/^https:\/\//);
      expect(link.getAttribute("rel")).toContain("noopener");
      expect(within(card).getByRole("img").getAttribute("alt")).toBeTruthy();
    }
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });
});
