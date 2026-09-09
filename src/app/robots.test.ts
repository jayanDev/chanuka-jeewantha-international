import { expect, it } from "vitest";
import robots from "./robots";
import { markets, marketPath } from "@/lib/markets";
import { getBaseUrl } from "@/lib/site-url";

it("permits every country edition and advertises the canonical sitemap", () => {
  const result = robots();
  const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules;
  expect(result.sitemap).toBe(`${getBaseUrl()}/sitemap.xml`);
  for (const market of markets) expect(rules.allow).toContain(marketPath(market));
  expect(rules.disallow).not.toContain("/tutorials");
  expect(rules.disallow).not.toContain("/catalogue");
  expect(rules.disallow).toContain("/api/");
});
