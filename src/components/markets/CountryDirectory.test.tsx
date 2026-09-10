import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import CountryDirectory from "./CountryDirectory";

afterEach(cleanup);

describe("country directory", () => {
  it("renders all 50 crawlable country links before filtering", () => {
    render(<CountryDirectory />);
    const navigation = screen.getByRole("navigation", { name: "Choose a country website" });
    expect(within(navigation).getAllByRole("link")).toHaveLength(50);
    expect(screen.getByRole("status").textContent).toBe("50 markets");
  });

  it("filters by currency and country aliases, clears and handles no matches", () => {
    render(<CountryDirectory />);
    const search = screen.getByRole("searchbox", { name: "Country or currency" });
    fireEvent.change(search, { target: { value: "  bhd  " } });
    expect(screen.getByRole("link", { name: /Bahrain/ }).getAttribute("href")).toBe("/en-bh");
    expect(screen.getByRole("status").textContent).toBe("1 market");
    fireEvent.change(search, { target: { value: "Czech Republic" } });
    expect(screen.getByRole("link", { name: /Czechia/ }).getAttribute("href")).toBe("/en-cz");
    fireEvent.change(search, { target: { value: "no-such-country" } });
    expect(screen.getByText("No matching countries.")).toBeDefined();
    expect(screen.queryAllByRole("link")).toHaveLength(0);
    fireEvent.click(screen.getByRole("button", { name: "Clear country search" }));
    expect(screen.getAllByRole("link")).toHaveLength(50);
  });
});
