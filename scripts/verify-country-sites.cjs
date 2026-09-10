const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { chromium } = require("playwright");
const { JSDOM } = require("jsdom");

async function main() {
  const { markets, marketSections, articleTopics } = await import(pathToFileURL(path.resolve(__dirname, "../src/lib/markets.ts")).href);
  const base = process.env.COUNTRY_TEST_URL || "http://localhost:3100";
  const output = path.resolve(__dirname, "../test-results/country-sites");
  await fs.mkdir(output, { recursive: true });
  const routes = markets.flatMap((market) => [...marketSections, ...articleTopics.map((topic) => `blog/${topic}`)].map((section) => ({ market, section, pathname: `/${market.slug}${section ? `/${section}` : ""}` })));
  const knownPaths = new Set(routes.map((route) => route.pathname));
  let position = 0;
  const report = [];
  const failures = [];
  await Promise.all(Array.from({ length: 3 }, async () => {
    while (position < routes.length) {
      const route = routes[position++];
      try {
        const response = await fetch(`${base}${route.pathname}`, { redirect: "manual", signal: AbortSignal.timeout(45000) });
        assert.equal(response.status, 200, route.pathname);
        const html = await response.text();
        const dom = new JSDOM(html);
        try {
          const document = dom.window.document;
          assert.equal(document.querySelectorAll("h1").length, 1, `${route.pathname}: h1`);
          const canonical = document.querySelector('link[rel="canonical"]')?.href;
          assert.equal(new URL(canonical).pathname, route.pathname, `${route.pathname}: canonical`);
          assert.ok(document.title.includes(route.market.label), `${route.pathname}: country title`);
          assert.equal(document.querySelector("[data-market]")?.getAttribute("data-market"), route.market.slug);
          assert.equal(document.querySelector("[data-market]")?.getAttribute("data-currency"), route.market.currency);
          assert.equal(document.querySelector('link[hreflang="en-GB"]')?.href.endsWith(`/en-uk${route.section ? `/${route.section}` : ""}`), true);
          assert.equal(document.querySelectorAll('link[rel="alternate"][hreflang]:not([hreflang="x-default"])').length, markets.length);
          const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')].map((element) => JSON.parse(element.textContent));
          assert.ok(schemas.some((schema) => schema["@graph"]?.some((entry) => entry["@type"] === "WebPage")));
          for (const anchor of document.querySelectorAll('nav[aria-label$="navigation"] a')) assert.ok(anchor.getAttribute("href").startsWith(`/${route.market.slug}`));
          for (const anchor of document.querySelectorAll("a[href]")) {
            const target = new URL(anchor.getAttribute("href"), `${base}${route.pathname}`);
            if (target.origin !== new URL(base).origin) continue;
            if (target.pathname.startsWith("/en-")) assert.ok(knownPaths.has(target.pathname), `Broken country link: ${target.pathname}`);
            if (target.pathname === route.pathname && target.hash) assert.ok(document.getElementById(decodeURIComponent(target.hash.slice(1))), `Missing anchor: ${target.hash}`);
          }
          if (route.section === "catalogue") {
            const tables = [...document.querySelectorAll("table")];
            assert.equal(tables.length, 6);
            for (const cell of document.querySelectorAll("table td")) assert.ok(cell.textContent.includes(route.market.currency));
            assert.equal(document.querySelectorAll("table tbody tr").length, 36);
          }
          report.push({ path: route.pathname, status: response.status, title: document.title, canonical });
        } finally { dom.window.close(); }
        if (report.length % 30 === 0) console.log(`Checked ${report.length} country pages`);
      } catch (error) { failures.push(`${route.pathname}: ${error.message}`); }
    }
  }));
  for (const pathname of ["/en-xx", "/en-xx/services", "/en-uk/not-a-page", "/en-uk/blog/not-an-article"]) {
    const response = await fetch(`${base}${pathname}`);
    if (response.status !== 404) failures.push(`${pathname}: expected 404, got ${response.status}`);
  }
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  const xml = new JSDOM(sitemap, { contentType: "text/xml" });
  const sitemapPaths = new Set([...xml.window.document.querySelectorAll("loc")].map((entry) => new URL(entry.textContent).pathname));
  xml.window.close();
  for (const route of routes) if (!sitemapPaths.has(route.pathname)) failures.push(`Missing sitemap entry: ${route.pathname}`);
  await fs.writeFile(path.join(output, "routes.json"), JSON.stringify({ checked: report.length, report, failures }, null, 2));

  const browser = await chromium.launch({ headless: true });
  const ui = [];
  try {
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 768, height: 1024 }, { width: 390, height: 844 }, { width: 320, height: 740 }]) {
      const context = await browser.newContext({ viewport });
      // Prevent real analytics and email delivery during QA.
      await context.route(/google-analytics\.com|googletagmanager\.com|ipwho\.is/, (route) => route.fulfill({ status: 204, body: "" }));
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      for (const pathname of ["/en-uk", "/en-uk/catalogue", "/en-uk/services", "/en-uk/about", "/en-uk/blog", "/en-uk/blog/cv-guide", "/en-uk/contact?package=International%20Career%20Pack", "/en-vn/catalogue", "/en-kw/catalogue", "/en-bh/catalogue", "/en-jp/catalogue", "/en-kr/services", "/en-br/blog/cv-guide", "/international", "/"]) {
        await page.goto(`${base}${pathname}`, { waitUntil: "domcontentloaded", timeout: 60000 });
        await page.getByRole("heading", { level: 1 }).waitFor();
        await page.evaluate(() => document.fonts.ready);
        const size = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
        const overflow = size.scroll > size.client + 1;
        if (overflow) failures.push(`${viewport.width}px overflow ${pathname}: ${JSON.stringify(size)}`);
        if (pathname.startsWith("/en-")) {
          assert.equal(await page.getByRole("heading", { level: 1 }).count(), 1);
          assert.equal(await page.getByRole("main").count(), 1);
        }
        const filename = `${viewport.width}-${pathname.split("?")[0].replace(/\//g, "-") || "home"}.png`;
        await page.screenshot({ path: path.join(output, filename), fullPage: true });
        if (["/en-uk", "/en-uk/catalogue", "/en-vn/catalogue"].includes(pathname)) {
          if (pathname.endsWith("/catalogue")) await page.locator("#bundles").scrollIntoViewIfNeeded();
          await page.screenshot({ path: path.join(output, `viewport-${filename}`) });
        }
        ui.push({ viewport: viewport.width, path: pathname, overflow, screenshot: filename });
      }
      await page.goto(`${base}/international`, { waitUntil: "domcontentloaded" });
      await page.getByLabel("Country or currency").fill("Czech Republic");
      await page.getByRole("navigation", { name: "Choose a country website" }).getByRole("link", { name: /Czechia/ }).click();
      await page.waitForURL("**/en-cz");
      await page.getByLabel("Choose country website").selectOption("en-bh");
      await page.waitForURL("**/en-bh");
      await page.getByRole("link", { name: "View BHD Packages", exact: true }).click();
      await page.waitForURL("**/en-bh/catalogue");
      assert.ok((await page.locator("table").first().innerText()).includes("71.064"));
      await page.goto(`${base}/en-uk/catalogue`, { waitUntil: "domcontentloaded" });
      await page.getByLabel("Choose country website").selectOption("en-au");
      await page.waitForURL("**/en-au/catalogue");
      await page.getByRole("heading", { name: "A consistent career brand, built together." }).waitFor();
      assert.ok((await page.locator("table").first().innerText()).includes("AUD"));
      await page.goto(`${base}/en-uk/blog/cv-guide`, { waitUntil: "domcontentloaded" });
      await page.getByLabel("Choose country website").selectOption("en-ca");
      await page.waitForURL("**/en-ca/blog/cv-guide");
      await page.getByRole("heading", { level: 1 }).waitFor();
      if (viewport.width < 760) {
        await page.getByRole("button", { name: "Open navigation" }).click();
        await page.getByRole("navigation", { name: "Canada navigation" }).getByRole("link", { name: "Services", exact: true }).click();
        await page.waitForURL("**/en-ca/services");
        await page.getByRole("button", { name: "Open navigation" }).waitFor();
      }
      await page.goto(`${base}/en-uk/catalogue`, { waitUntil: "domcontentloaded" });
      await page.getByRole("article").filter({ has: page.getByRole("heading", { name: "International Career Pack", exact: true }) }).getByRole("link", { name: "Request This Package" }).click();
      await page.waitForURL("**/en-uk/contact?**");
      assert.equal(await page.getByLabel("Selected Service or Package").inputValue(), "International Career Pack");
      assert.equal(await page.getByLabel("Target Market").inputValue(), "United Kingdom");
      let submission = "";
      await context.route("https://api.web3forms.com/submit", (route) => {
        submission = route.request().postData() || "";
        return route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) });
      });
      await page.getByLabel("Full Name *").fill("Country Website QA");
      await page.getByLabel("Email Address *").fill("test@example.com");
      await page.getByLabel("Upload Current CV / Resume (optional)").setInputFiles({ name: "qa-resume.pdf", mimeType: "application/pdf", buffer: Buffer.from("%PDF-1.4\nQA attachment, not a real CV") });
      await page.getByRole("button", { name: "Submit International Enquiry" }).click();
      await page.getByText("Enquiry sent successfully!").waitFor();
      assert.ok(submission.includes("Country Website: United Kingdom"));
      assert.ok(submission.includes("Pricing Currency: GBP"));
      assert.ok(submission.includes("qa-resume.pdf"));
      assert.ok(submission.includes("International Career Pack"));
      assert.equal(await page.getByLabel("Target Market").inputValue(), "United Kingdom");
      assert.equal(await page.getByLabel("Upload Current CV / Resume (optional)").inputValue(), "");
      assert.deepEqual(errors, [], `Browser runtime errors at ${viewport.width}px`);
      await context.close();
    }
    for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
      const context = await browser.newContext({ viewport });
      await context.route(/google-analytics\.com|googletagmanager\.com|ipwho\.is/, (route) => route.fulfill({ status: 204, body: "" }));
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      for (const market of markets.slice(20)) {
        const pathname = `/${market.slug}`;
        await page.goto(`${base}${pathname}`, { waitUntil: "domcontentloaded", timeout: 60000 });
        const heading = page.getByRole("heading", { level: 1 });
        await heading.waitFor();
        await page.evaluate(() => document.fonts.ready);
        const portrait = page.getByRole("img", { name: "Chanuka Jeewantha, founder and career document writer", exact: true });
        await portrait.scrollIntoViewIfNeeded();
        await portrait.evaluate((image) => image.decode());
        const dimensions = await portrait.evaluate((image) => ({ width: image.naturalWidth, height: image.naturalHeight }));
        assert.ok(dimensions.width > 0 && dimensions.height > 0, `${pathname}: portrait loaded`);
        await page.evaluate(() => window.scrollTo(0, 0));
        const size = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
        assert.ok(size.scroll <= size.client + 1, `${pathname}: ${viewport.width}px overflow`);
        const filename = `${viewport.width}-${market.slug}-hero.png`;
        await page.screenshot({ path: path.join(output, filename) });
        ui.push({ viewport: viewport.width, path: pathname, overflow: false, screenshot: filename, portrait: dimensions });
      }
      assert.deepEqual(errors, [], `New country runtime errors at ${viewport.width}px`);
      await context.close();
    }
  } finally { await browser.close(); }
  await fs.writeFile(path.join(output, "browser.json"), JSON.stringify(ui, null, 2));
  assert.deepEqual(failures, [], "Route checks failed");
  console.log(`PASS: ${report.length} pages, 4 invalid routes, sitemap, ${ui.length} viewport checks, country switching and intercepted enquiries.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
