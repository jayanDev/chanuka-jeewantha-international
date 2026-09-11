import { expect, test } from "@playwright/test";

test("confirmed enquiry counts once without exposing form contents", async ({ page }) => {
  let submissions = 0;
  await page.addInitScript(() => {
    localStorage.setItem("career-analytics-consent", "accepted");
    (window as unknown as { events: unknown[][] }).events = [];
    window.gtag = (...args: unknown[]) => (window as unknown as { events: unknown[][] }).events.push(args);
  });
  await page.route("https://api.web3forms.com/submit", async route => {
    submissions++;
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) });
  });
  await page.goto("/contact?package=Executive%20Brand%20Suite");
  await expect(page.getByLabel("Selected Service or Package")).toHaveValue("Executive Brand Suite");
  await page.getByLabel("Full Name *", { exact: true }).fill("SEO Test Applicant");
  await page.getByLabel("Email Address *", { exact: true }).fill("seo-test@example.invalid");
  await page.getByRole("button", { name: "Submit International Enquiry", exact: true }).click();
  await expect(page.getByText(/Thank you - your details have been received/)).toBeVisible();
  expect(submissions).toBe(1);
  const events = await page.evaluate(() => (window as unknown as { events: unknown[][] }).events);
  expect(events.filter(e => e[1] === "generate_lead")).toHaveLength(1);
  expect(JSON.stringify(events)).not.toContain("seo-test@example.invalid");
  expect(JSON.stringify(events)).not.toContain("Executive");
});

test("failed enquiry preserves the draft and does not count as a lead", async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem("career-analytics-consent", "accepted");
    (window as unknown as { events: unknown[][] }).events = [];
    window.gtag = (...args: unknown[]) => (window as unknown as { events: unknown[][] }).events.push(args);
  });
  await page.route("https://api.web3forms.com/submit", route => route.fulfill({
    status: 503, contentType: "application/json", body: JSON.stringify({ success: false, message: "Please try again." }),
  }));
  await page.goto("/contact");
  await page.getByLabel("Full Name *", { exact: true }).fill("SEO Test Applicant");
  await page.getByLabel("Email Address *", { exact: true }).fill("seo-test@example.invalid");
  await page.getByRole("button", { name: "Submit International Enquiry", exact: true }).click();
  await expect(page.getByRole("alert").filter({ hasText: "Please try again." })).toBeVisible();
  await expect(page.getByLabel("Full Name *", { exact: true })).toHaveValue("SEO Test Applicant");
  expect(await page.evaluate(() => (window as unknown as { events: unknown[][] }).events.filter(e => e[1] === "generate_lead").length)).toBe(0);
});
