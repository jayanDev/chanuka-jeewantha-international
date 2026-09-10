const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");

async function main() {
  const { markets } = await import(pathToFileURL(path.resolve(__dirname, "../src/lib/markets.ts")).href);
  const base = process.env.COUNTRY_TEST_URL || "http://localhost:3100";
  const output = path.resolve(__dirname, "../test-results/writer-articles");
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const report = [];
  try {
    for (const width of [390, 1440, 320]) {
      const context = await browser.newContext({ viewport: { width, height: 950 } });
      await context.route(/google-analytics\.com|googletagmanager\.com|ipwho\.is/, (route) => route.fulfill({ status: 204, body: "" }));
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      const selected = width === 390 ? markets : markets.filter((m) => ["en-uk", "en-us", "en-ae", "en-sg", "en-gr", "en-mu", "en-cn", "en-bg", "en-il", "en-co"].includes(m.slug));
      for (const market of selected) {
        const pathname = `/${market.slug}/blog/top-10-cv-writers`;
        const response = await page.goto(`${base}${pathname}`, { waitUntil: "domcontentloaded", timeout: 60000 });
        assert.equal(response.status(), 200);
        const cards = page.locator("[data-writer]");
        assert.equal(await cards.count(), 10);
        assert.ok((await cards.first().textContent()).includes("Our featured service"));
        assert.equal(await page.getByText("How to read this list", { exact: true }).count(), 0);
        await page.evaluate(async () => {
          await document.fonts.ready;
          const images = [...document.querySelectorAll("[data-writer] img")];
          for (const image of images) image.loading = "eager";
          await Promise.all(images.map((image) => image.decode()));
        });
        const issues = await page.evaluate(() => {
          const issues = [];
          if (document.documentElement.scrollWidth > innerWidth + 1) issues.push("Page overflow");
          for (const card of document.querySelectorAll("[data-writer]")) {
            const bounds = card.getBoundingClientRect();
            for (const element of card.querySelectorAll("h2, h3, p, a, figure")) {
              const rect = element.getBoundingClientRect();
              if (rect.left < bounds.left - 1 || rect.right > bounds.right + 1) issues.push(`Card overflow: ${card.dataset.writer}`);
            }
            const image = card.querySelector("img");
            if (!image.naturalWidth || !image.naturalHeight) issues.push(`Blank image: ${card.dataset.writer}`);
          }
          return issues;
        });
        assert.deepEqual(issues, [], `${width}px ${pathname}`);
        const firstLink = cards.first().getByRole("link", { name: "Visit Website" });
        assert.equal(await firstLink.getAttribute("href"), `/${market.slug}`);
        if (width !== 390 || ["en-uk", "en-co", "en-bg"].includes(market.slug)) {
          await page.screenshot({ path: path.join(output, `${width}-${market.slug}.png`), fullPage: true });
          await cards.first().scrollIntoViewIfNeeded();
          await page.screenshot({ path: path.join(output, `${width}-${market.slug}-cards.png`) });
        }
        report.push({ path: pathname, width, entries: 10, images: 10, overflow: false });
      }
      await page.goto(`${base}/en-uk/blog/top-10-cv-writers`);
      await page.getByLabel("Choose country website").selectOption("en-co");
      await page.waitForURL("**/en-co/blog/top-10-cv-writers");
      await page.locator("[data-writer]").first().getByRole("link", { name: "Visit Website" }).click();
      await page.waitForURL("**/en-co");
      assert.deepEqual(errors, []);
      await context.close();
      console.log(`Checked writer articles at ${width}px`);
    }
  } finally { await browser.close(); }
  await fs.writeFile(path.join(output, "report.json"), `${JSON.stringify(report, null, 2)}\n`);
  console.log(`PASS: ${report.length} article viewports, images, branded positioning, country switching and featured CTAs.`);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
