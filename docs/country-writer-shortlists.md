# Country writer shortlists and 70-market expansion

Research and implementation date: 10 September 2026.

## Scope

- Expanded the country registry from 50 to 70 markets.
- Every market has Home, About, Contact, Blog, Catalogue and Services pages.
- Preserved the three original country guides and added `/en-xx/blog/top-10-cv-writers` in every market.
- Result: 70 writer-comparison articles, 280 country articles in total and 700 country URLs.
- Country navigation, directory search, reciprocal hreflang, static route generation, sitemap and robots rules read the shared registry.
- Base service and bundle prices remain the approved USD amounts. Country amounts are labelled reference estimates, not a promise of local payment availability.

## Editorial Method and Brand Positioning

The title uses **for [country]**, not a claim that every listed provider has a physical office there. Each list contains Chanuka plus nine other writers or companies.

Chanuka appears first as **Our featured service**, supported by a founder-led introduction, personal-writing benefits and a **Why choose Chanuka** section. The byline and short **About this guide** note identify this as Chanuka's own business guide. The copy focuses on the service's strengths without claiming independent testing or an externally awarded number-one position. The first Visit Website link goes to that exact country's home page. Other links go to the provider's website or official public company profile.

Country-focused providers were discovered through web searches and checked against their own service descriptions. Lists also include international online options, explicitly labelled, whose country, language and sector suitability readers should confirm directly. A country service page is not treated as proof of a local office.

Descriptions summarise the published writing specialism. Founding dates are used only where the provider states them. We do not manufacture years of writing experience, ratings, endorsements, interview success rates or credentials. Companies and writer-led practices are both included. DIY-only builders, government advice pages and generic freelancer marketplaces were not used as substitute writers.

No current Google position, search volume, AEO placement or GEO visibility was independently measured. Keywords reflect observed service language and country-specific application intent, not claimed ranking data. No search or indexing outcome is guaranteed.

## New Markets

| Market | Home | Reference currency | Country-focused comparison source |
| --- | --- | --- | --- |
| Romania | `/en-ro` | RON | [Career Partner Romania](https://ro.linkedin.com/company/careerpartner-romania) |
| Hungary | `/en-hu` | HUF | [Agnes Talbot / Rook CV](https://www.rook-cv.com/hu) |
| Greece | `/en-gr` | EUR | [Work Science / CVexperts](https://workscience.gr/en/services/writing/) |
| Croatia | `/en-hr` | EUR | [Zivotopis.com.hr](https://zivotopis.com.hr/) |
| Slovakia | `/en-sk` | EUR | [CV Doctor Czechia](https://cvdoctor.cz/my-services/) |
| Bulgaria | `/en-bg` | EUR | [Maria Ilieva / Nameri Rabota](https://namerirabota.com/uslugi/izgotvyane-na-linkedin) |
| Estonia | `/en-ee` | EUR | [Katlin Pall / Connexa](https://connexa.ee/en/home/) |
| Peru | `/en-pe` | PEN | [CVMaker Peru writing service](https://www.cvmaker.pe/servicio-de-creacion-de-cvs) |
| Lithuania | `/en-lt` | EUR | [Profesionalus CV](https://profesionaluscv.lt/paslaugos) |
| Cyprus | `/en-cy` | EUR | [Emerald Zebra](https://emeraldzebra.cy/improve-your-professional-image-with-emerald-zebras-cv-writing-and-linkedin-profile-services/) |
| Jordan | `/en-jo` | JOD | [CV Makers Jordan](https://jo.linkedin.com/company/cvmakersjo) |
| Turkey | `/en-tr` | TRY | [RecoverCV](https://www.linkedin.com/company/recovercv) |
| Israel | `/en-il` | ILS | [English For Israel](https://www.linkedin.com/company/english4il) |
| Taiwan | `/en-tw` | TWD | [Career Plus Taiwan](https://www.careerplus.com.tw/) |
| China | `/en-cn` | CNY | [HighMark Career](https://www.highmarkcareer.cn/en/about.html) |
| Mauritius | `/en-mu` | MUR | [Island Pro Consulting](https://islandproconsulting.mu/services/cv-cover-letter) |
| Egypt | `/en-eg` | EGP | [Job Snatchers](https://www.jobsnatchers.com/) |
| Morocco | `/en-ma` | MAD | [CV Consultant Morocco](https://www.linkedin.com/company/cv-consultant/) |
| Argentina | `/en-ar` | ARS | [Rivara Consultora](https://carrera.rivaraconsultora.com.ar/) |
| Colombia | `/en-co` | COP | [Mi Hoja de Vida Colombia](https://co.linkedin.com/company/mihojadevida) |

Bulgaria uses EUR, following its euro adoption on 1 January 2026: [European Central Bank announcement](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260101~c830245e42.en.html). It does not use a stale BGN price table.

The conversion snapshot is from [ExchangeRate-API's USD reference feed](https://open.er-api.com/v6/latest/USD), timestamp 10 September 2026 00:02:31 UTC. Existing country reference rates were refreshed at the same time; the underlying USD prices were not changed. JOD, OMR, KWD and BHD use three fractional digits.

## Sources and Images

- `src/content/cv-writers.json`: provider descriptions, direct sources, country selections and shared international options.
- `src/content/writer-images.json`: image provenance, capture date, original URL, page URL and image type.
- `src/content/new-market-editorial.ts`: original English content for the new twenty markets, with service-language research sources.
- Earlier country research remains in `docs/country-websites.md` and `docs/market-expansion-research.md`.

Images identify the provider using an official portrait, published company image, logo, icon or website preview. Stock or generated faces are not presented as named writers. Images are stored locally so the article does not depend on a third-party image service at runtime. They do not imply partnership or endorsement. Confirm any applicable brand-asset permissions before wider promotional reuse; replace assets if a rights holder requests removal.

The image collector is a maintenance aid, not an unattended publishing pipeline. Always inspect its outputs: client logos, social-platform icons, blank challenge pages and unrelated redirects must not be published as provider identities. The contact-sheet utility supports that review. Low-contrast white logos use a dark image background.

During checks, stale or unavailable candidate URLs were excluded or replaced, including CV na mieru, Max Drive Force, Turkseven IK, an old Resume People Canada service path, UK CV Writing's Malta page and a blank Recruit Maldives response. A former Germany source redirected to another brand and was not reused in the comparison. These observations describe this check, not permanent claims about those businesses.

## SEO and Route Behaviour

- Explicit self-canonical and country hreflang on every new page.
- BlogPosting plus an ItemList that matches the ten visible entries.
- No Review or AggregateRating markup.
- New comparison publication dates are 10 September 2026; original guide publication dates are preserved.
- Sitemap modification dates reflect new articles, refreshed pricing pages and the expanded directory.
- Unknown countries and unknown article slugs retain real 404 responses.
- Robots allows the new country prefixes through the registry and points to the canonical sitemap. Private application routes remain disallowed as before.

## Verification

Run from the repository:

```text
npx vitest run
npm run lint
npm run typecheck
npm run build
node scripts/verify-country-sites.cjs
node scripts/verify-writer-articles.cjs
node scripts/audit-indexability.cjs
```

Browser checks expect a local production preview at port 3100, or `COUNTRY_TEST_URL`. Enquiry submissions are intercepted in tests and are not sent to the real enquiry service.

Completed checks for this change:

- All 187 tests across 12 files passed with `npx vitest run --maxWorkers=2`. The default-concurrency retry encountered worker startup timeouts on the local machine; the bounded run completed successfully.
- Production build and TypeScript validation passed, with 989 generated route entries.
- Lint passed with three pre-existing unused-import warnings in unrelated pages.
- The country-site audit passed for 700 country URLs, four invalid-route 404 cases and 160 browser viewports before the final brand-copy revision.
- The final brand copy passed 90 article viewports across 390px, 1440px and 320px, including image decoding, overflow checks, country switching and the featured home-page CTA.
- The production-preview sitemap contains 1,234 URLs, including all 70 writer articles. Robots includes the new country prefixes and canonical sitemap URL.

The full 1,234-URL indexability script is provided above but was not rerun for this change. These are local production-preview checks, not a claim that Google has indexed the new pages.

## Maintenance

Check external provider services, names, availability, founding claims and image rights periodically. Replace retired providers explicitly in the source data; do not silently manufacture a tenth entry. Updates to source claims should update the article review date and image provenance where applicable.

No new API keys, database migrations, translation service or payment integrations are required. The enquiry workflow remains unchanged.
