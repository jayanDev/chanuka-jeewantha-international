# SEO report follow-up: 12 September 2026

## Evidence and limits

Reviewed all 18 pages of the owner-supplied `chanukajeewantha.pdf`, dated 11 September 2026 at 20:35 UTC. This is a third-party homepage checklist, not a Google ranking report, sitewide crawl or proof of visibility in AI answers. Its 77% combined score uses the publisher's own weighting.

The report records simulated mobile Lighthouse results: performance 84, accessibility 96, best practices 100, SEO 100, LCP 4.1 seconds, FCP 2.4 seconds, CLS 0. It explicitly has no real-user data. These numbers must not be presented as current field Core Web Vitals or compared directly with an unthrottled local browser run.

Several checks contradict themselves: Analytics is both present and 'not detected'; Person schema is both present and absent; hreflang is both present and undetected. N/A checks are sometimes awarded 100. Treat individual findings as leads to verify, not requirements to satisfy at any cost.

## Finding-by-finding decisions

| Report finding | Verification and action |
| --- | --- |
| Consent defaults set after GA loads | Corrected. The consent command queue is prepared before the external Script can be rendered. All four consent types default to denied; only analytics storage is granted after explicit consent. No Google download occurs before acceptance. |
| GA script not render-blocking | Retained `afterInteractive`, gated by production configuration, public route and consent. Config uses `send_page_view: false`; routing sends manual, sanitised page views. |
| Missing security.txt, Contact and Expires | Added `public/.well-known/security.txt`. Owner confirmed `chanukajeewantha00@gmail.com` as the contact. Fixed expiry is 1 September 2027; renew before then. Canonical and preferred language are included. This is vulnerability-disclosure hygiene, not a search-ranking requirement. |
| Missing max-snippet and image-preview settings | They were already present in the Googlebot directive, which the checker apparently missed. Added the same public preview permissions to generic robots metadata. Explicit private-page noindex/nosnippet remains intact. |
| AI crawlers not explicitly allowed | The wildcard rule already permits public content. No bot-specific allow-all group was added because that can supersede private-path restrictions. Training access is not the same as search visibility. |
| Missing llms.txt alternate link | Added a link to the existing maintained directory. This is optional discoverability for tools that use it, not an AI citation or ranking boost. |
| '82% AI probability' | Not a Google ranking metric and not proof of authorship. Replaced jargon-heavy homepage service descriptions with concrete deliverables. Editorial review focuses on accuracy, useful examples and original expertise, not detector evasion. |
| Missing AggregateRating | Deliberately absent: unsupported figures and self-serving review markup were removed. Do not invent reviews or relabel the business as a Product to obtain stars. Keep the verified destination for reading Google reviews. |
| Missing Organization address | No verified public office address was provided. The business is described as remote with areaServed. Do not invent an office in each country. |
| Missing knowsAbout / offer catalog | Optional schema properties are not prerequisites for indexing or AI visibility. Existing truthful service/pricing markup is preferable to redundant keyword lists. |
| Images not WebP/AVIF | Next.js already negotiates AVIF/WebP through its image optimiser; a source `.jpg` URL alone does not establish the delivered format. Verify the actual response Content-Type. |
| Image width/height missing | Homepage portrait now includes explicit intrinsic dimensions and retains its fixed 4:5 container, responsive sizes, eager loading and high fetch priority. Other `fill` images with reserved aspect-ratio containers are not automatically layout-shift defects. |
| Mobile LCP 4.1 seconds | Genuine performance follow-up, not yet certified resolved. Repeat mobile Lighthouse on the deployed revision and inspect the actual LCP element, font timing and main-thread work. Calendly is already interaction-loaded. Field results require real traffic over time. |
| Missing COEP/CORP headers | Not SEO requirements. Do not enable cross-origin isolation indiscriminately: it can break third-party scheduling and embedded content. Existing CSP and other security headers remain. GA's regional collection endpoint is explicitly permitted in CSP. |
| Title 66 / description 164 characters | Length heuristics, not hard character limits or indexing errors. Preserve meaningful, user-requested international positioning; assess query-level CTR and real snippet truncation before changing successful titles. |
| Missing noscript fallback | Public pages are server-rendered; earlier no-JavaScript samples retained headings and content. A redundant noscript element is not a substitute for server-rendered content and is not required here. |
| Legal pages in sitemap | Public, indexable legal pages are legitimate sitemap entries. No blanket noindex/removal was added just to satisfy this heuristic. |
| Missing FAQ markup | Visible FAQ content need not receive FAQPage markup merely to satisfy a checker. Rich-result eligibility and accurate visible content matter more than adding every schema type. |
| SPF / DKIM / DMARC / MTA-STS | Root TXT lookup found no SPF; `_dmarc` did not resolve. Owner supplied a Gmail address, not a domain mailbox provider. Gmail authentication belongs to gmail.com; no guessed domain DNS records or MX changes were made. Common-selector DKIM checks cannot establish that every possible selector is absent. Domain anti-spoofing for a confirmed non-sending domain is a separate owner-approved DNS task. |
| HTTPS, canonicals, sitemap, headings, links, cache, 404 and social metadata pass | Preserve the working implementation and cover it with regression checks. These passes do not prove every URL is indexed. |

## Rollout and Google account actions

- Production revision `9184a16` was already deployed and Ready when this continuation began. Its live crawl checked 1,207 sitemap URLs: all returned 200, matched canonicals and were indexable. No broken internal HTML links were found by that crawl. Evidence: local `test-results/seo-repairs/production-9184a16.json`.
- Vercel apex-domain redirect changed from temporary 307 to permanent 308, targeting the existing www production domain. Legacy country paths have a bounded host-plus-path redirect chain, not a loop.
- Resubmitted `https://www.chanukajeewantha.com/sitemap.xml` in the domain GSC property on 11 September. Submission succeeded; historical discovered counts are not proof of a completed reread.
- Started GSC validation for eight soft-404 examples (now genuine retired-page 404s) and five redirect-error examples (now reaching their country landing pages). GSC showed validation Started, not Passed.
- The single server-error example is `/feed.xml`, now returning 200; its existing validation was already in progress.
- Started review-snippet validation on 12 September after checking all 35 items across eight URLs. Each live destination returned 200 without the removed Review/AggregateRating markup. GSC confirmed validation Started, not Passed.
- Homepage URL inspection on 12 September reported 'URL is on Google', successful smartphone crawl, indexing allowed and Google-selected canonical equal to the inspected www homepage. This verifies the homepage, not all country pages.
- Inspected all 50 robots-blocked examples: 48 tutorial URLs, one catalogue query URL and one intentionally blocked sign-up URL. Do not unblock authentication to make the aggregate count disappear.
- Inspected all 401 noindex examples: many are retired local pages, old packages, search or filtered URLs. Do not globally remove noindex. Google must recrawl repaired public pages and retire obsolete ones.
- Confirmed GA4 account 242401093, property 542433498, stream 15121407819 and measurement ID `G-JBG5EY2YXW`. No account or stream was replaced.
- Disabled enhanced-measurement history changes, forms, scrolls, outbound clicks, search, video and downloads in this stream. Created `generate_lead` as a key event, once per event, with no invented monetary value.
- Set `NEXT_PUBLIC_GA_MANUAL_EVENTS_READY=true` for Vercel Production only. New code must be deployed before collection is considered activated. Do not add a second tag or activate previews by default.

## Verification before deployment

- Lint passed with zero warnings/errors. Production build passed TypeScript and generated 985 static pages.
- Unit suite: 201 tests passed across 15 files using a single fork worker. An earlier threads-worker startup timeout was resolved by rerunning the complete suite with forks; no test failure was ignored.
- Four browser tests passed: consent defaults before Google download, rejection/revocation, private-route suppression, and mocked successful/failed enquiries. Synthetic leads were not transmitted to Google or Web3Forms.
- Local built homepage exposes generic and Googlebot preview directives plus the llms.txt alternate. Security contact file returns 200 with text/plain.
- Actual production collection and post-deployment crawl must be checked after this revision deploys; the earlier 1,207-URL production crawl belongs to `9184a16`.

## Editorial work and remaining scope

The earlier repair individually rewrote nine GSC-priority articles. This continuation adds twelve individual US-library revisions, retaining existing URLs: IDs 4, 6, 9, 15, 23, 28, 44, 49, 50, 66, 92 and 94. Each has a direct answer, topic-specific sections and examples; relevant technical claims link to official sources. Shared generic FAQs are removed from these twelve.

Corrected outdated multi-page federal-resume guidance in the federal service page, Washington DC page, career-stage guidance and federal keyword-series article. Current USAJOBS guidance specifies a two-page resume limit; qualifications and separate required documents remain announcement-specific.

The remaining 88 articles in the generated US library and the rest of the larger article registry are NOT fully individually reviewed. Prioritise overlapping ATS/keyword guides, country comparison lists and older package guidance. Some specialist service pages still use shortened/legacy bundle labels and need reconciliation with the central package catalog. Do not expand more near-identical pages, claim competitor rankings or silently overwrite administrator-managed articles. Confirmed database posts can override bundled content.

For each remaining article, record its actual query intent, GSC evidence, competing internal pages, factual sources, owner examples, decision (retain/rewrite/merge/retire), canonical destination and verification. A low word count alone is not grounds for deletion, and unobserved performance in an export is not proof of zero traffic.

## Primary references

- [Google consent implementation](https://developers.google.com/tag-platform/security/guides/consent)
- [Google generative AI search guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google review structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Google snippets and descriptions](https://developers.google.com/search/docs/appearance/snippet)
- [RFC 9116 security.txt](https://www.rfc-editor.org/info/rfc9116/)
- [USAJOBS resume requirements](https://help.usajobs.gov/faq/application/documents/resume/what-to-include)

No ranking, indexing, AI citation or client employment outcome is guaranteed.
