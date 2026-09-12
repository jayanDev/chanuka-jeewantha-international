const fs = require('node:fs/promises');
const { chromium } = require('playwright');

const base = process.env.SEO_TEST_BASE_URL || 'http://localhost:3101';
const measurementId = 'G-JBG5EY2YXW';

async function main() {
  await fs.mkdir('test-results/seo-repairs', { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const report = { base, capturedAt: new Date().toISOString(), scriptRequests: 0, collections: [], errors: [], images: [] };
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    page.on('request', request => {
      if (request.url().startsWith('https://www.googletagmanager.com/gtag/js')) report.scriptRequests++;
    });
    page.on('pageerror', error => report.errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error' && /Content Security Policy/.test(message.text())) report.errors.push(message.text());
    });
    page.on('response', response => {
      const url = new URL(response.url());
      if (url.pathname === '/_next/image') report.images.push({ type: response.headers()['content-type'], status: response.status() });
      if (!url.hostname.endsWith('.google-analytics.com') || !url.pathname.endsWith('/collect')) return;
      const params = new URLSearchParams(url.search);
      for (const [key, value] of new URLSearchParams(response.request().postData() || '')) params.set(key, value);
      // Deliberately do not retain GA client IDs, cookies or complete requests.
      report.collections.push({ status: response.status(), measurementId: params.get('tid'), event: params.get('en'), location: params.get('dl'), referrer: params.get('dr') });
    });
    await page.goto(`${base}/?seo_verification=1`, { waitUntil: 'load', timeout: 90000 });
    await page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
    await page.waitForTimeout(2000);
    if (report.scriptRequests || report.collections.length) throw Error('Google loaded before consent');
    report.noRequestsBeforeConsent = true;
    await page.getByRole('button', { name: 'Analytics preferences', exact: true }).click();
    await page.getByRole('button', { name: 'Allow analytics', exact: true }).click();
    await page.waitForFunction(() => window.dataLayer?.some(item => item[0] === 'event' && item[1] === 'page_view'), null, { timeout: 45000 });
    for (let i = 0; i < 30 && !report.collections.some(event => event.event === 'page_view'); i++) await page.waitForTimeout(1000);
    const views = report.collections.filter(event => event.event === 'page_view');
    if (views.length !== 1 || views[0].status !== 204 || views[0].measurementId !== measurementId) throw Error('Expected one acknowledged page_view in the correct GA4 stream');
    if (views[0].location !== `${new URL(base).origin}/`) throw Error('Page location was not sanitised');
    report.acceptedPageViewVerified = true;
    await page.getByRole('button', { name: 'Analytics preferences', exact: true }).click();
    await page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Analytics preferences', exact: true }).waitFor();
    await page.waitForTimeout(2000);
    if (report.scriptRequests !== 1) throw Error('Google reloaded after consent revocation');
    report.revocationVerified = true;
    await page.screenshot({ path: 'test-results/seo-repairs/analytics-mobile.png', fullPage: false });
    report.passed = report.errors.length === 0;
    if (!report.passed) throw Error('Browser errors detected');
  } catch (error) {
    report.passed = false;
    report.failure = error.message;
    process.exitCode = 1;
  } finally {
    await browser.close();
    await fs.mkdir('test-results/seo-repairs', { recursive: true });
    await fs.writeFile('test-results/seo-repairs/analytics-verification.json', JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
