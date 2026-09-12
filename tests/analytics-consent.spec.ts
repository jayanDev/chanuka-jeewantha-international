import { expect, test } from "@playwright/test";

test("consent precedes script download and revocation stops loading", async ({ page }) => {
  let scriptLoads = 0;
  let consentAtDownload: unknown;
  await page.route("https://www.googletagmanager.com/**", async route => {
    scriptLoads++;
    consentAtDownload = await page.evaluate(() => Array.from(window.dataLayer[0] as ArrayLike<unknown>));
    await route.fulfill({ status: 200, contentType: "application/javascript", body: "" });
  });
  await page.goto("/contact?email=private-test@example.invalid");
  await page.getByRole("button", { name: "Reject analytics", exact: true }).click();
  expect(scriptLoads).toBe(0);
  await page.getByRole("button", { name: "Analytics preferences", exact: true }).click();
  await page.getByRole("button", { name: "Allow analytics", exact: true }).click();
  await expect.poll(() => scriptLoads).toBe(1);
  await expect.poll(() => consentAtDownload).toEqual(["consent", "default", {
    analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  }]);
  await expect.poll(async () => page.evaluate(() => window.dataLayer.map(x => Array.from(x as ArrayLike<unknown>)).filter(x => x[1] === "page_view").length)).toBe(1);
  const queue = await page.evaluate(() => window.dataLayer.map(x => Array.from(x as ArrayLike<unknown>)));
  expect(JSON.stringify(queue)).not.toContain("private-test");
  await page.getByRole("button", { name: "Analytics preferences", exact: true }).click();
  await page.getByRole("button", { name: "Reject analytics", exact: true }).click();
  await page.waitForLoadState("load");
  await expect(page.getByRole("button", { name: "Analytics preferences", exact: true })).toBeVisible();
  expect(scriptLoads).toBe(1);
  expect(await page.evaluate(() => localStorage.getItem("career-analytics-consent"))).toBe("rejected");
});

test("saved consent does not load Google on private routes", async ({ page }) => {
  let scriptLoads = 0;
  await page.addInitScript(() => localStorage.setItem("career-analytics-consent", "accepted"));
  await page.route("https://www.googletagmanager.com/**", route => { scriptLoads++; return route.abort(); });
  await page.goto("/auth/signin");
  await expect(page.getByRole("button", { name: "Analytics preferences", exact: true })).toBeVisible();
  expect(scriptLoads).toBe(0);
});
