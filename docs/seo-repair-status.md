# SEO audit repair status

Based on the 10-11 September 2026 SEO, AEO and GEO audit.

## Implemented

- [x] Removed the global loading overlay and root authentication lookup. Public content no longer depends on the global cookie lookup. Query-dependent private forms have scoped Suspense boundaries.
- [x] Normalised cached blog dates; RSS handles invalid dates and returns a retryable 503 rather than an unhandled exception.
- [x] Repaired the four shared service-link aliases, breadcrumb category links and empty tutorial-category navigation. Added real guides for all five missing resource destinations.
- [x] Consolidated five legacy country landing pages into their matching country editions. Retired bundle hubs redirect to relevant current destinations; retired individual offers remain real 404s.
- [x] Added a permanent apex-to-www application redirect. Vercel's upstream domain settings still need checking.
- [x] Removed unsupported aggregate-rating schema and promotional review/placement totals. The owner-supplied Google review link is retained; its current total and individual quotes were not independently verified.
- [x] Removed promotional interview/refund guarantees for new engagements. The refund policy explicitly preserves existing client agreements, as authorised by the owner.
- [x] Withheld unverified case studies until evidence and sharing permission are recorded. The portfolio retains an explicitly illustrative document sample, not invented client outcomes.
- [x] Centralised the five international bundles; global and country prices use the same dated rate table. Removed automatic IP-based currency selection and the global LKR option. Payment availability is confirmed through the written quote.
- [x] Removed the automatic generic blog-enrichment pass. Rewrote nine GSC-priority articles with individual answers and examples, retaining publication dates and recording the actual revision date.
- [x] Removed unsubstantiated sitemap last-modified dates and redirected/withheld URLs. Current resource guides are included automatically. Existing country hreflang and robots crawl access are retained.
- [x] Added consent-aware, query-free analytics events. Enquiries count only on provider-confirmed success; failed requests and the honeypot do not count as leads. Calendly completion requires a matching frame and origin.
- [x] Calendly loads on explicit interaction and retains its privacy banner. Enquiry forms retain a failed draft, validate attachments and preselect the requested global bundle.
- [x] Updated the auxiliary llms.txt to match the public service, pricing and outcome boundaries. This file is not a substitute for indexable HTML or evidence of AI visibility.
- [x] Unit tests: 195 passed across 14 files. Lint: zero errors and zero warnings. Git whitespace checks passed.
- [x] Final production build: 985 static pages generated successfully. The build used the existing generated Prisma client because an older local preview held the Windows Prisma DLL open; a fresh `prisma generate` remains part of the normal deployment build.
- [x] Local production crawl: all 1,214 sitemap URLs returned 200, matched their self-canonicals and had no unintended noindex. No broken internal HTML links were found by the verification script. Unknown global/country/blog routes returned 404; tested legacy redirects returned 308; robots and RSS returned 200.
- [x] Twelve browser samples across 390px and 1440px widths passed without horizontal overflow, JavaScript runtime errors or failed visible images. Three representative pages retained visible headings and substantive main content without JavaScript. Local measured layout-shift totals were below 0.053; these are lab observations, not field Core Web Vitals certification.
- [x] Two mocked enquiry browser tests passed: successful submission counts once without form contents in analytics, and failed submission retains the draft without counting a lead. No real customer enquiry was sent.

Verification commands: `npx vitest run --pool=threads --maxWorkers=1`, `npm run lint`, `node scripts/next-wrapper.cjs build --webpack`, `node scripts/verify-seo.cjs`, and `npx playwright test --config=playwright.seo.config.ts`. The crawl used the production preview at `http://localhost:3101`. Results and screenshots are in `test-results/seo-repairs`; browser test output is isolated in `test-results/seo-playwright`.

## GA4 Activation

Analytics deliberately stays off until configuration is confirmed. The form works without analytics.

1. In the existing GA4 web data stream, disable automatic page-view history-change tracking and automatic form interactions. Manual page views plus automatic history events would double-count visits and could send query strings.
2. Confirm that `G-JBG5EY2YXW` is the intended property. This is the existing site's measurement ID, not a newly created account.
3. Set `NEXT_PUBLIC_GA_MANUAL_EVENTS_READY=true` in the deployment environment and redeploy. Do not enable a second GA tag through another container.
4. Test accept, reject and preference revocation. Verify `page_view`, `form_start`, `form_error`, `generate_lead` and `booking_completed` in DebugView using a test property or an approved test submission.
5. Mark `generate_lead` as a key event. Report bookings separately; do not add enquiry and booking totals together as unique customers. Connect qualified enquiries and sales through a consented CRM process before reporting revenue or lead quality.

## Deployment Checks

1. Deploy the tested revision. In Vercel, make HTTPS www the canonical host with a permanent redirect from the apex; check HTTP and HTTPS variants for loops or extra temporary hops.
2. Submit `/sitemap.xml` in the correct GSC property. Inspect representative global, country, service and revised blog URLs. Check Google's selected canonical and rendered HTML before requesting reindexing.
3. Compare indexing and query/page performance after recrawl. Historical excluded counts are not proof of a current code defect, and an export without affected URLs cannot identify each excluded page.
4. Verify real Web3Forms delivery, attachment support for the current plan, and the selected Calendly event. Automated tests mock submissions and do not send real client enquiries.
5. Review provider processing, retention, supported payments and the policy text with the business owner. No unverified payment integration has been enabled.
6. If production has database-managed copies of the nine reviewed article slugs, review and update those records through the existing publishing workflow. Published database records take precedence over bundled articles; this repair does not overwrite administrator-authored database content.

## Editorial Follow-Through

The nine rewritten pages are `what-is-a-cv`, `cv-and-cover-letter-combination`, `canva-cv-maker-free-best-choice`, `cover-letter-job-application-example`, `best-cv-formats-for-freshers-and-experienced-professionals`, `edit-cv-online-free-tools`, `curriculum-vitae-example-for-students`, `industry-cv-guide-5-banking` and `industry-cv-guide-14-hospitality`.

The much larger existing article library has not been individually rewritten or fact-checked in full. In particular, the 100-article generated US career library still needs intent-by-intent editorial consolidation or substantive rewriting. Do not mass-redirect unrelated articles, fabricate experience or expand more country pages to compensate for thin material. Review GSC page/query evidence and actual destinations before choosing redirects. Refresh competitor availability and official sources periodically; country pages must not imply physical offices where none are verified.

## Requires external evidence or account access

- GSC affected-URL examples, selected canonicals and validation after deployment.
- GA4 property settings, qualified enquiries and revenue attribution.
- Vercel host redirect configuration, logs and field Core Web Vitals.
- Supported payments and proof/permission for review excerpts, certifications and case-study figures. The owner approved removal of promotional guarantees and preservation of existing agreements.
- Consented original case studies, third-party authority and ongoing editorial review.
- Local .lk migration mappings after confirming actual destination content.

No ranking, indexing, citation, job or interview result can be guaranteed by these repairs.

## Audit Artifact Recovery

Playwright's original default output cleanup removed older generated audit files. The original report and scripts were recovered from task history, and GSC analysis was regenerated from the untouched source spreadsheet. Earlier raw crawl captures and screenshots have not been restored. See `test-results/seo-audit-2026/RECOVERY.md`; the recovered historical report is distinct from the newly verified repair results above.
