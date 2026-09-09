const assert = require("node:assert/strict");
const { JSDOM } = require("jsdom");

async function main() {
  const base = process.env.SEO_AUDIT_URL || "http://localhost:3100";
  const missing = [
    "/tools/nonexistent-audit-entity", "/packages/nonexistent-audit-entity",
    "/services/nonexistent-audit-entity", "/services/packages/nonexistent-audit-entity",
    "/resources/nonexistent-audit-entity", "/case-studies/nonexistent-audit-entity",
    "/locations/nonexistent-audit-entity", "/career-stage/nonexistent-audit-entity",
    "/resume-writer/nonexistent-audit-entity", "/cv-writing/nonexistent-audit-entity",
    "/blog/nonexistent-audit-entity", "/blog/category/nonexistent-audit-entity",
    "/blog?page=999999", "/blog?page=2x", "/blog?category=nonexistent-audit-entity",
    "/tutorials/nonexistent-audit-entity", "/tutorials/category/nonexistent-audit-entity",
    "/p/nonexistent-audit-entity", "/en-xx", "/en-uk/blog/nonexistent-audit-entity",
    "/offers/bulk-cv-5-pack", "/offers/bulk-cv-10-pack",
    "/offers/career-brand-trinity-bundle", "/offers/application-duo-bundle",
    "/blog/package-guide-starter-cv-package", "/blog/package-guide-student-cv-package",
  ];
  for (const path of missing) {
    const response = await fetch(`${base}${path}`, { redirect: "manual" });
    await response.text();
    assert.equal(response.status, 404, `${path}: must be a real HTTP 404`);
  }
  const redirects = [
    ["/services/packages", "/pricing"],
    ["/tutorials/category/a", "/tutorials/category/cv-writing"],
  ];
  for (const [path, target] of redirects) {
    const response = await fetch(`${base}${path}`, { redirect: "manual" });
    await response.text();
    assert.equal(response.status, 308, path);
    assert.equal(new URL(response.headers.get("location"), base).pathname, target);
    const final = await fetch(`${base}${target}`, { redirect: "manual" });
    await final.text();
    assert.equal(final.status, 200, `${path}: destination must not redirect again`);
  }
  const signIn = await fetch(`${base}/auth/signin`, { redirect: "manual", headers: { cookie: "session_token=expired" } });
  assert.equal(signIn.status, 200, "Stale cookie must not cause sign-in loop");
  const dom = new JSDOM(await signIn.text());
  assert.match(dom.window.document.querySelector('meta[name="robots"]')?.content || "", /noindex/);
  dom.window.close();
  console.log(`Passed ${missing.length} real 404s, ${redirects.length} single-hop redirects and stale-cookie sign-in.`);
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
