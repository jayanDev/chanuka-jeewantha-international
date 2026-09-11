import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  testMatch: "contact-form.spec.ts",
  outputDir: "test-results/seo-playwright",
  workers: 1,
  timeout: 90000,
  reporter: "list",
  use: { ...devices["Desktop Chrome"], baseURL: process.env.SEO_TEST_BASE_URL || "http://localhost:3101" },
});
