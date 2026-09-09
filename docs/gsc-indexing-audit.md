# GSC indexing audit - 9 September 2026

## Scope and evidence

Next.js 16.2.4 App Router (`src/app`), with `src/proxy.ts`, dynamic metadata, robots and sitemap routes. Local Next.js documentation was checked before changing routing behavior.

The supplied `chanukajeewantha.com-Coverage-2026-09-09.xlsx` is an aggregate export, not a URL export. Its latest chart row (4 September) has 395 indexed and 793 not-indexed pages. Critical-issue counts: noindex 401; robots blocked 50; redirects 12; soft 404 8; Google-selected alternate canonical 192; crawled/not indexed 79; redirect errors 5; alternate with proper canonical 3; duplicate without selected canonical 6; server error 1; discovered/not indexed 36. Another 8 indexed URLs are reported blocked by robots.

These counts overlap reporting concepts and must not be treated as a list of verified code defects. No individual affected URLs were included, so the export alone cannot identify the particular 5xx or redirect-error requests.

## Confirmed defects and fixes

- Baseline HTTP crawl of all 638 sitemap entries found eight failing entries: four retired offers, `/services/packages`, and blog categories `branding`, `ui-ux-design`, `web-development`.
- Removed retired offers from sitemap; those URLs now have explicit 404 handling. `/services/packages` permanently redirects to `/pricing` and is excluded from sitemap.
- Removed three old blog redirects whose destination articles no longer exist. Both the retired guides and their missing former replacements return real 404s rather than forwarding crawlers to another missing page.
- Category metadata now uses the same published listing as the page, including database categories, instead of only bundled categories.
- Shared article lookup enforces publication and nonempty content, with consistent metadata/page decisions. Database-only content outages remain temporary failures, not invented 404s.
- Blog listing, pagination and sitemap now share one publication policy. Draft database overrides cannot reappear through the normal bundled-list merge. Sinhala and retired articles remain out of the international discovery listing.
- Valid archive pages have self-referencing canonicals and can be indexed; malformed/out-of-range pagination and nonexistent categories return 404. Category query variants redirect to the category's canonical URL.
- Static data-backed dynamic routes use `dynamicParams = false` plus pre-render entity validation; database-backed blog routes also validate before streaming. Production testing showed the route setting alone was insufficient with this application's dynamic root layout. Streamed `notFound()` can otherwise return HTTP 200 in Next.js.
- Root metadata retains `metadataBase` and uses a relative self canonical. Portfolio and tutorial metadata now declare their own canonicals. Broken tutorial category-ID links use category slugs, with permanent redirects for old links.
- Public rendering no longer crashes on session-store outages. Protected pages still fail closed. Invalid session tokens are rejected early, stale cookies no longer bounce sign-in back to protected pages, and return destinations are sanitized across password and OAuth flows.
- Added root-layout error boundary and temporary-unavailable handling for session API and article lookup failures.
- Sitemap refreshes hourly, includes country pages, international landing pages, valid English tutorials, populated tutorial categories, checklists and paginated blog archives. It excludes redirected, retired, private and intentionally noindexed pages.
- Country hero/robots work was committed and pushed separately as `f5284b2`: all 20 country heroes follow the main homepage's visual design; all 180 country URLs are included and public catalogue/tutorial paths are crawlable.

## Key modified files

- `src/components/markets/CountryHero.tsx`, `CountryPages.tsx`, `country.module.css`: country homepage hero design.
- `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/layout.tsx`, `next.config.ts`: crawl rules, discovery, canonical inheritance and package-hub redirect.
- `src/proxy.ts`, `src/lib/public-request.ts`, public dynamic `page.tsx` files: real missing-entity responses and redirect validation.
- `src/lib/blog-post.ts`, `blog-listing.ts`, `blog-pagination.ts`, `retired-blog-posts.ts`, blog page/category routes: publication, archive and canonical consistency.
- `src/lib/auth.ts`, `auth-server.ts`, `return-to.ts`, authentication pages and OAuth/session API routes: error containment and redirect safety.
- `src/app/error.tsx`, `src/app/global-error.tsx`: page and root-layout recovery.
- `src/app/tutorials/` and `src/app/p/[username]/page.tsx`: tutorial links and explicit page canonicals.
- `scripts/audit-indexability.cjs`, `scripts/verify-seo-routing.cjs`, regression tests: repeatable HTTP, metadata and routing verification.

## Intentional exclusions

Do not remove every noindex tag. Account, admin, checkout, search/results and error states are not public acquisition pages. Sinhala articles previously excluded from the international site remain excluded. Authentication is enforced by the server, not by robots.txt.

The `/catalogue` root is a redirect to `/contact`, not an indexable catalogue page; country `/en-*/catalogue` pages remain indexable. A redirect appearing in GSC is not itself an error when its destination is intentional.

## Deployment and Search Console

1. Ensure `NEXT_PUBLIC_SITE_URL` (and `SITE_URL` if set) is `https://www.chanukajeewantha.com`. The live apex was observed redirecting to www; keep canonical host, sitemap, internal links and Vercel domain settings consistent.
2. Vercel currently serves an apex-to-www 307. Configure a permanent domain redirect in Vercel if this is the long-term host choice; do not add an opposite www-to-apex application redirect.
3. Verify the production deployment, then submit `https://www.chanukajeewantha.com/sitemap.xml` in GSC. Inspect representative country, category, article and archive URLs with the live URL test.
4. Export URL examples for each failing issue, especially the single server error and five redirect errors, and compare those exact URLs with deployment logs. This aggregate workbook cannot establish their causes.
5. Start Validate Fix only for corrected issues. Indexing and canonical selection remain Google's decisions; neither code changes nor sitemap submission guarantees indexing or ranking.
6. Legacy content outside the new country sites still includes local-language/local-market material. Review its content and migration destinations separately rather than mass-redirecting unrelated pages to the homepage.

The contact API already catches database and email failures, but its existing best-effort delivery can report success even when both fail. That is a separate delivery-reliability risk, not a proven cause of this GSC report; verify production email/storage configuration and address it in a focused form-delivery change.

## Reproducible checks

Verified on 10 September: production build passed; 62 unit tests passed; typecheck passed; lint had no errors (three existing unused-import warnings). The production sitemap crawl checked 714 URLs with no status, canonical, noindex or missing-heading failures. Routing checks passed 26 real 404s, two single-hop permanent redirects and stale-cookie sign-in. Country QA passed all 180 routes and 44 desktop/mobile viewports, including country switching and intercepted enquiry submissions.

Run `npx vitest run`, `npm run typecheck`, `npm run lint`, and `npm run build`. Start production preview on port 3100, then run `node scripts/audit-indexability.cjs` with `SEO_AUDIT_STRICT=1`, `node scripts/verify-seo-routing.cjs`, and `node scripts/verify-country-sites.cjs`. Reports and screenshots are written under ignored `test-results/`.

The sitemap audit checks HTTP status, self canonical, robots/noindex and H1 presence. It is not a guarantee of content quality or Google's selected canonical.

References: [Google robots metadata](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [canonical consolidation](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [Next.js not-found behavior](https://nextjs.org/docs/app/api-reference/file-conventions/not-found).
