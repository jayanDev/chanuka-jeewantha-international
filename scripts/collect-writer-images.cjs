const fs = require("node:fs/promises");
const path = require("node:path");
const { JSDOM } = require("jsdom");
const sharp = require("sharp");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");
const directory = path.join(root, "public/images/cv-writers");
const manifestPath = path.join(root, "src/content/writer-images.json");
const requested = new Set(process.argv.slice(2));

async function response(url) {
  const result = await fetch(url, { signal: AbortSignal.timeout(18000), headers: { "User-Agent": "Mozilla/5.0 (compatible; CareerDirectoryImageCheck/1.0)" } });
  if (!result.ok) throw new Error(`HTTP ${result.status}`);
  return result;
}

async function main() {
  const { providers } = JSON.parse(await fs.readFile(path.join(root, "src/content/cv-writers.json"), "utf8"));
  const manifest = await fs.readFile(manifestPath, "utf8").then(JSON.parse).catch(() => ({}));
  await fs.mkdir(directory, { recursive: true });
  const pending = [];
  for (const [id, provider] of Object.entries(providers)) {
    if (requested.size ? !requested.has(id) : manifest[id]) continue;
    try {
      const page = await response(provider.website);
      const document = new JSDOM(await page.text(), { url: page.url }).window;
      const candidates = [];
      for (const img of document.document.querySelectorAll('header img, img[alt*="logo" i], img[class*="logo" i], img[src*="logo" i]')) {
        const src = img.getAttribute("data-src") || img.getAttribute("src");
        if (src && !/google|trustpilot|review|partner|client/i.test(`${src} ${img.alt}`)) candidates.push({ url: new URL(src, page.url).href, kind: "Official logo" });
      }
      for (const link of [...document.document.querySelectorAll('link[rel*="icon"]')].sort((a, b) => (parseInt(b.getAttribute("sizes")) || 0) - (parseInt(a.getAttribute("sizes")) || 0))) {
        const src = link.getAttribute("href");
        if (src) candidates.push({ url: new URL(src, page.url).href, kind: "Official brand icon" });
      }
      if (requested.has(id) && !["purplecv", "mzansi", "resume-de"].includes(id)) candidates.sort((a, b) => Number(b.kind === "Official brand icon") - Number(a.kind === "Official brand icon"));
      const og = document.document.querySelector('meta[property="og:image"]')?.content;
      if (og) candidates.push({ url: new URL(og, page.url).href, kind: og.includes("company-logo") ? "Official logo" : "Official website image" });
      document.close();
      let saved = false;
      for (const candidate of candidates.slice(0, 12)) {
        try {
          if (!/^https?:/.test(candidate.url)) continue;
          const image = await response(candidate.url);
          const data = Buffer.from(await image.arrayBuffer());
          if (data.length > 8_000_000) continue;
          const metadata = await sharp(data).metadata();
          if (!metadata.width || !metadata.height || metadata.width < 32 || metadata.height < 24) continue;
          await sharp(data).resize({ width: 480, height: 320, fit: "inside", withoutEnlargement: true }).webp({ quality: 86 }).toFile(path.join(directory, `${id}.webp`));
          manifest[id] = { src: `/images/cv-writers/${id}.webp`, sourceUrl: candidate.url, pageUrl: page.url, kind: candidate.kind, checkedAt: "2026-09-10" };
          saved = true;
          console.log(`${id}: ${candidate.kind}`);
          break;
        } catch { /* Try the next image published by the same provider. */ }
      }
      if (!saved) pending.push([id, provider]);
    } catch (error) {
      console.log(`${id}: image fetch pending (${error.message})`);
      pending.push([id, provider]);
    }
    await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }
  const browser = pending.length ? await chromium.launch({ headless: true }) : null;
  for (const [id, provider] of pending) {
    const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
    try {
      const result = await page.goto(provider.website, { waitUntil: "domcontentloaded", timeout: 30000 });
      if (!result?.ok()) throw new Error(`HTTP ${result?.status()}`);
      await page.waitForTimeout(1200);
      const title = await page.title();
      if (/just a moment|access denied|forbidden|security check|sign in.*linkedin/i.test(title)) throw new Error(`Challenge page: ${title}`);
      await page.screenshot({ path: path.join(directory, `${id}.png`) });
      manifest[id] = { src: `/images/cv-writers/${id}.png`, sourceUrl: page.url(), pageUrl: page.url(), kind: "Website preview", checkedAt: "2026-09-10" };
      console.log(`${id}: Website preview (${title})`);
    } catch (error) { console.log(`${id}: NEEDS REVIEW (${error.message})`); }
    finally { await page.close(); }
  }
  await browser?.close();
  await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  const missing = Object.keys(providers).filter((id) => !manifest[id]);
  console.log(JSON.stringify({ saved: Object.keys(manifest).length, missing }));
  if (missing.length) process.exitCode = 1;
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
