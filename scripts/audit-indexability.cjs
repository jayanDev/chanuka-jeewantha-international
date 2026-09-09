const fs = require("node:fs/promises");
const path = require("node:path");
const { JSDOM } = require("jsdom");

async function main() {
  const base = process.env.SEO_AUDIT_URL || "http://localhost:3100";
  const output = process.env.SEO_AUDIT_REPORT || "test-results/seo-audit.json";
  const xml = new JSDOM(await (await fetch(`${base}/sitemap.xml`)).text(), { contentType: "text/xml" });
  const urls = [...xml.window.document.querySelectorAll("loc")].map((node) => node.textContent);
  xml.window.close();
  const results = [];
  for (const url of urls) {
    const source = new URL(url);
    const pathname = source.pathname + source.search;
    try {
      const response = await fetch(`${base}${pathname}`, { redirect: "manual", signal: AbortSignal.timeout(45000) });
      const dom = new JSDOM(await response.text());
      const document = dom.window.document;
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href");
      const robots = [...document.querySelectorAll('meta[name="robots"], meta[name="googlebot"]')].map((node) => node.getAttribute("content") || "").join(",");
      const problems = [];
      if (response.status !== 200) problems.push(`HTTP ${response.status}`);
      if (canonical !== url && canonical !== url + "/") problems.push(`canonical: ${canonical || "missing"}`);
      if (/noindex/i.test(`${robots},${response.headers.get("x-robots-tag") || ""}`)) problems.push("noindex");
      if (!document.querySelector("h1")) problems.push("missing h1");
      results.push({ url, status: response.status, canonical, robots, location: response.headers.get("location"), problems });
      dom.window.close();
    } catch (error) { results.push({ url, problems: [error.message] }); }
    if (results.length % 50 === 0) console.log(`Audited ${results.length}/${urls.length}`);
  }
  const failures = results.filter((item) => item.problems.length);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, JSON.stringify({ base, total: urls.length, failures, results }, null, 2));
  console.log(JSON.stringify({ total: urls.length, failures }, null, 2));
  if (process.env.SEO_AUDIT_STRICT === "1" && failures.length) process.exitCode = 1;
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
