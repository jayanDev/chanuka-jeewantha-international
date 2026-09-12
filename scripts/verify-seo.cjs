const fs = require('node:fs/promises');
const path = require('node:path');
const { chromium } = require('playwright');

const base = process.env.SEO_TEST_BASE_URL || 'http://localhost:3101';
const output = path.resolve('test-results/seo-repairs');
const decode = text => text.replaceAll('&amp;', '&');
const attr = (tag, name) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
async function request(url) {
  const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(60000) });
  return { status: response.status, location: response.headers.get('location'), html: await response.text() };
}

async function main() {
  await fs.mkdir(output, { recursive: true });
  const sitemap = await request(`${base}/sitemap.xml`);
  if (sitemap.status !== 200) throw Error(`Sitemap returned ${sitemap.status}`);
  const urls = [...sitemap.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => decode(m[1]));
  const failures = [], results = [], links = new Set();
  let cursor = 0;
  async function worker() {
    while (cursor < urls.length) {
      const canonicalUrl = urls[cursor++];
      const pathname = new URL(canonicalUrl).pathname + new URL(canonicalUrl).search;
      try {
        const r = await request(base + pathname);
        const tags = r.html.match(/<(?:link|meta)\b[^>]*>/g) || [];
        const canonical = tags.find(tag => attr(tag, 'rel') === 'canonical');
        const noindex = tags.some(tag => ['robots', 'googlebot'].includes(attr(tag, 'name')) && /noindex/.test(attr(tag, 'content') || ''));
        const record = { path: pathname, status: r.status, canonical: decode(attr(canonical || '', 'href') || ''), noindex };
        results.push(record);
        if (r.status !== 200 || noindex || record.canonical !== canonicalUrl) failures.push(record);
        for (const match of r.html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
          const href = decode(match[1]);
          if (!href.startsWith('/') && !href.startsWith(new URL(canonicalUrl).origin)) continue;
          const url = new URL(href, canonicalUrl);
          if (!/^\/(api|auth|admin|profile|checkout|cart|orders|notifications|reviews-admin)(\/|$)/.test(url.pathname)) links.add(url.pathname);
        }
      } catch (error) { failures.push({ path: pathname, error: error.message }); }
      if (results.length % 100 === 0) console.log(`Checked ${results.length}/${urls.length} sitemap URLs`);
    }
  }
  await Promise.all(Array.from({ length: 3 }, worker));
  const knownPaths = new Set(urls.map(url => new URL(url).pathname));
  const brokenLinks = [];
  for (const href of links) {
    if (knownPaths.has(href) || /\.(svg|jpg|png|pdf|docx|webp)$/.test(href)) continue;
    const r = await request(base + href);
    if (r.status >= 400) brokenLinks.push({ path: href, status: r.status });
  }
  const probes = [];
  for (const [pathname, expected] of [
    ['/missing-seo-test-page', 404], ['/en-zz', 404], ['/blog/missing-seo-test-page', 404],
    ['/en-uk/blog/missing-seo-test-page', 404], ['/feed.xml', 200], ['/robots.txt', 200],
    ['/services/packages/cv-writing', 308], ['/cv-writing/uk', 308], ['/offers/bundles', 308],
  ]) {
    const r = await request(base + pathname);
    probes.push({ path: pathname, status: r.status, expected, location: r.location });
    if (r.status !== expected) failures.push(probes.at(-1));
  }

  const browser = await chromium.launch({ headless: true });
  const visual = [];
  try {
    for (const width of [390, 1440]) {
      const context = await browser.newContext({ viewport: { width, height: 900 } });
      for (const pathname of ['/', '/en-uk', '/pricing', '/en-uk/catalogue', '/blog/what-is-a-cv', '/contact']) {
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', e => errors.push(e.message));
        await page.addInitScript(() => {
          window.layoutShifts = [];
          new PerformanceObserver(list => window.layoutShifts.push(...list.getEntries().filter(e => !e.hadRecentInput).map(e => e.value))).observe({ type: 'layout-shift', buffered: true });
        });
        await page.goto(base + pathname, { waitUntil: 'load', timeout: 60000 });
        await page.waitForTimeout(1200);
        const state = await page.evaluate(() => ({
          h1: document.querySelector('h1')?.textContent,
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          cls: window.layoutShifts.reduce((a, b) => a + b, 0),
          heroImageLoaded: [...document.images].filter(i => i.getBoundingClientRect().top < innerHeight && i.getBoundingClientRect().bottom > 0).every(i => i.complete && i.naturalWidth > 0),
        }));
        visual.push({ path: pathname, width, ...state, errors });
        if (errors.length || state.overflow || !state.h1 || !state.heroImageLoaded) failures.push(visual.at(-1));
        await page.screenshot({ path: path.join(output, `${width}-${pathname.replaceAll('/', '_')}.png`) });
        await page.close();
      }
      await context.close();
    }
    const context = await browser.newContext({ javaScriptEnabled: false });
    for (const pathname of ['/', '/en-uk', '/blog/what-is-a-cv']) {
      const page = await context.newPage();
      await page.goto(base + pathname);
      const h1 = await page.locator('h1:visible').count();
      const text = await page.locator('main').innerText();
      const record = { path: pathname, noJavaScript: true, h1, textLength: text.length };
      visual.push(record);
      if (h1 !== 1 || text.length < 500) failures.push(record);
      await page.close();
    }
    await context.close();
  } finally { await browser.close(); }
  const report = { base, capturedAt: new Date().toISOString(), sitemapUrls: urls.length, failures, brokenLinks, probes, visual, results };
  await fs.writeFile(path.join(output, 'verification.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ ...report, results: undefined }, null, 2));
  if (failures.length || brokenLinks.length) process.exitCode = 1;
}
main().catch(error => { console.error(error); process.exitCode = 1; });
