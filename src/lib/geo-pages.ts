/**
 * GEO landing page content - per-country resume/CV writing pages.
 * Targets the brand's five core English-speaking markets with
 * market-specific conventions, keywords, and FAQ for local + AI search.
 */

import type { FaqItem } from "@/lib/aeo-faqs";

export type GeoPage = {
  slug: string;
  country: string;
  demonym: string;
  docTerm: "resume" | "CV"; // dominant local term
  lang: string; // BCP-47 hreflang code, e.g. "en-US"
  title: string;
  description: string;
  heroEyebrow: string;
  heroHeading: string;
  heroSub: string;
  conventions: string[];
  atsSystems: string[];
  cities: string[];
  salaryContext: string;
  /** High-value role/sector specialisms shown as chips and used for natural keyword coverage. */
  specialisms: string[];
  keywords: string[];
  faqs: FaqItem[];
};

export const geoPages: Record<string, GeoPage> = {
  usa: {
    slug: "usa",
    country: "United States",
    demonym: "American",
    docTerm: "resume",
    lang: "en-US",
    title: "Resume Writing Service USA - ATS Resumes",
    description:
      "Professional, ATS-optimized resume writing for the US job market. Founder-led and personally written for American recruiters, hiring managers, and applicant tracking systems.",
    heroEyebrow: "Resume Writing Service · United States",
    heroHeading: "ATS Resume Writing for the US Job Market",
    heroSub:
      "Personally written, ATS-optimized resumes engineered for US recruiters, hiring managers, and the applicant tracking systems used by 98% of Fortune 500 companies.",
    conventions: [
      "US employers expect a one-page resume (two pages for senior or executive roles), not a multi-page CV.",
      "No photo, date of birth, marital status, or other personal details - these can trigger bias-screening issues.",
      "Reverse-chronological format with quantified, achievement-led bullet points (the X-Y-Z impact format).",
      "Heavy ATS optimization: clean structure, standard headings, and role-relevant keywords that pass parsing.",
    ],
    atsSystems: ["Workday", "Oracle Taleo", "iCIMS", "Greenhouse", "Lever", "SAP SuccessFactors"],
    cities: ["New York", "Los Angeles", "Chicago", "San Francisco", "Austin", "Seattle"],
    salaryContext:
      "US resumes are read against a wide salary band - from roughly $45,000 at entry level to $200,000+ for executive roles. Your resume's job is to justify the next band by framing scope, budget ownership, and measurable impact the way American hiring managers and compensation committees expect to see it.",
    specialisms: ["Executive & C-suite", "Tech & Engineering", "Finance", "Healthcare", "Federal & Government"],
    keywords: [
      "resume writing service USA",
      "professional resume writer USA",
      "ATS resume writer",
      "executive resume writer USA",
      "tech resume writer",
      "federal resume writer",
      "American resume writing service",
    ],
    faqs: [
      {
        q: "How much does a professional resume cost in the US?",
        a: "US professional resume writing typically ranges from about $150 for entry-level to $1,000+ for executive resumes. Chanuka Jeewantha's packages run from $179 to $1,499, each written personally and tailored to your target US role.",
      },
      {
        q: "Do US employers want a resume or a CV?",
        a: "In the US a one-page (or two-page senior) resume is standard. A multi-page 'CV' is only used for academic, scientific, or research roles.",
      },
      {
        q: "Will my resume pass ATS systems used by US companies?",
        a: "Yes. Every resume is built ATS-first - clean structure, standard headings, and role-relevant keywords - while staying recruiter- and hiring-manager-readable.",
      },
      {
        q: "Which ATS systems do you optimize US resumes for?",
        a: "We optimize for the platforms US employers use most - Workday, Oracle Taleo, iCIMS (used by about a quarter of Fortune 500 companies), Greenhouse, and Lever - with clean parsing and role-relevant keywords.",
      },
      {
        q: "Should a US resume include a photo or personal details?",
        a: "No. US resumes should never include a photo, date of birth, or marital status, which can trigger bias-screening concerns. We follow US hiring norms exactly.",
      },
      {
        q: "How long does resume writing take?",
        a: "Standard turnaround is 3 to 5 business days, with an express option available, and every package includes revisions until you are satisfied.",
      },
    ],
  },
  uk: {
    slug: "uk",
    country: "United Kingdom",
    demonym: "British",
    docTerm: "CV",
    lang: "en-GB",
    title: "CV Writing Service UK - Professional CVs",
    description:
      "Professional, ATS-friendly CV writing for the UK job market. Founder-led and personally written for British recruiters, hiring managers, and applicant tracking systems.",
    heroEyebrow: "CV Writing Service · United Kingdom",
    heroHeading: "Professional CV Writing for the UK Job Market",
    heroSub:
      "Personally written, ATS-friendly CVs built around UK conventions - a strong personal profile, two-page structure, and the language British recruiters expect.",
    conventions: [
      "UK CVs are typically two pages, led by a concise personal profile / personal statement.",
      "No photo, date of birth, or marital status - UK employers omit these to support fair recruitment.",
      "British spelling and terminology throughout (e.g. 'organised', 'programme', 'CV' not 'resume').",
      "Achievement-focused, ATS-friendly structure with clear section headings and relevant keywords.",
    ],
    atsSystems: ["Workday", "SAP SuccessFactors", "Oracle Taleo", "Tribepad", "Eploy", "Greenhouse"],
    cities: ["London", "Manchester", "Birmingham", "Edinburgh", "Leeds", "Bristol"],
    salaryContext:
      "UK salary expectations run from around £22,000 for early-career roles to £100,000+ at executive level. We position your CV around British norms - a results-led personal profile, realistic salary banding, and notice-period awareness - so it reads correctly to UK recruiters and in-house talent teams.",
    specialisms: ["Executive & C-suite", "Graduate", "NHS & Healthcare", "Academic", "Finance & Banking"],
    keywords: [
      "CV writing service UK",
      "professional CV writer UK",
      "executive CV writing service UK",
      "graduate CV writing UK",
      "NHS CV writing",
      "ATS CV UK",
      "British CV writing service",
    ],
    faqs: [
      {
        q: "How much does a professional CV cost in the UK?",
        a: "UK CV writing typically ranges from around £70 for early-career CVs to £199+ for executive CVs. Chanuka Jeewantha prices in USD globally - from $179 to $1,499 - with the same transparent rate for UK clients.",
      },
      {
        q: "What format do UK employers expect for a CV?",
        a: "UK employers expect a two-page CV led by a personal profile, in British English, with no photo or date of birth.",
      },
      {
        q: "Do you write CVs for executive and senior roles in the UK?",
        a: "Yes. The service specialises in senior, executive, and C-suite CVs positioned for competitive UK and cross-border roles.",
      },
      {
        q: "Which ATS systems do you optimize UK CVs for?",
        a: "We format CVs to parse cleanly through Workday, SAP SuccessFactors, and Oracle Taleo, as well as UK-native systems such as Tribepad and Eploy, which UK employers and the NHS use widely.",
      },
      {
        q: "How long should a UK CV be?",
        a: "A UK CV should be two pages for most professionals. One page suits graduates, while senior and academic roles may extend further. We tailor length to your field.",
      },
      {
        q: "How fast can you write my CV?",
        a: "Standard turnaround is 3 to 5 business days with an express option, and every CV includes revisions until you are happy with it.",
      },
    ],
  },
  australia: {
    slug: "australia",
    country: "Australia",
    demonym: "Australian",
    docTerm: "resume",
    lang: "en-AU",
    title: "Resume & CV Writing Service Australia",
    description:
      "Professional resume and CV writing for the Australian job market, including selection-criteria responses. Founder-led, personally written, and ATS-optimized.",
    heroEyebrow: "Resume & CV Writing · Australia",
    heroHeading: "Resume & CV Writing for the Australian Job Market",
    heroSub:
      "Personally written, ATS-optimized resumes and CVs built for Australian recruiters - including support for selection criteria used by government and large organisations.",
    conventions: [
      "In Australia 'resume' and 'CV' are used interchangeably; documents typically run two to three pages.",
      "Government and large-organisation roles often require addressing selection criteria or key capabilities.",
      "No photo or personal details; Australian spelling and terminology throughout.",
      "Achievement-led content with metrics, ATS-friendly structure, and role-relevant keywords.",
    ],
    atsSystems: ["Workday", "SAP SuccessFactors", "PageUp", "JobAdder", "Greenhouse"],
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"],
    salaryContext:
      "Australian roles span roughly A$55,000 at entry to A$200,000+ for executives, often with superannuation and award classifications in the mix. For government and large-organisation applications we also address key selection criteria in STAR format alongside the resume.",
    specialisms: ["APS & Government", "Executive & C-suite", "Mining & Resources", "Healthcare", "Graduate"],
    keywords: [
      "resume writing service Australia",
      "professional resume writer Australia",
      "APS resume writer",
      "selection criteria writing Australia",
      "government resume Australia",
      "executive resume writer Australia",
      "CV writing service Australia",
    ],
    faqs: [
      {
        q: "How much does a professional resume cost in Australia?",
        a: "Australian resume writing ranges widely - from a few hundred dollars to $2,500+ at premium executive agencies. Chanuka Jeewantha offers executive-grade, founder-led writing from $179 to $1,499 USD.",
      },
      {
        q: "Do you write to selection criteria for Australian roles?",
        a: "Yes. Australian government and large-organisation applications often require selection-criteria or key-capability responses, which can be addressed alongside your resume.",
      },
      {
        q: "Resume or CV for Australian jobs?",
        a: "In Australia the terms are used interchangeably; most roles expect a two-to-three-page document tailored to the position and industry.",
      },
      {
        q: "Which ATS systems do you optimize Australian resumes for?",
        a: "We optimize for PageUp and JobAdder - both widely used across Australia - as well as Workday and SAP SuccessFactors, with keywords drawn from your target role.",
      },
      {
        q: "How long should an Australian resume be?",
        a: "Australian resumes commonly run two to three pages, longer than a US resume, with fuller detail on achievements and responsibilities matched to your seniority.",
      },
      {
        q: "How fast is your turnaround?",
        a: "Standard turnaround is 3 to 5 business days with an express option, and selection-criteria responses can be added alongside your resume.",
      },
    ],
  },
  canada: {
    slug: "canada",
    country: "Canada",
    demonym: "Canadian",
    docTerm: "resume",
    lang: "en-CA",
    title: "Resume Writing Service Canada - ATS Resumes",
    description:
      "Professional, ATS-optimized resume writing for the Canadian job market. Founder-led and personally written for Canadian recruiters and applicant tracking systems.",
    heroEyebrow: "Resume Writing Service · Canada",
    heroHeading: "ATS Resume Writing for the Canadian Job Market",
    heroSub:
      "Personally written, ATS-optimized resumes built for Canadian recruiters and hiring managers across Toronto, Vancouver, Calgary, Montreal, and remote-first employers.",
    conventions: [
      "Canadian resumes are typically one to two pages, reverse-chronological, with no photo or personal details.",
      "ATS optimization is essential - most mid-to-large Canadian employers screen with applicant tracking systems.",
      "Achievement-led bullet points with metrics and role-relevant keywords.",
      "Bilingual (English/French) positioning can be considered for roles that require it.",
    ],
    atsSystems: ["Workday", "Oracle Taleo", "iCIMS", "Greenhouse", "SAP SuccessFactors"],
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa", "Edmonton"],
    salaryContext:
      "Canadian salaries range from about C$45,000 at entry to C$180,000+ for senior roles, with federal and provincial hiring processes differing in their requirements. Where a role calls for it, we can position a bilingual English/French resume for federal and Quebec-based employers.",
    specialisms: ["Executive & C-suite", "Tech & IT", "Bilingual (EN/FR)", "Healthcare", "Government & Public Sector"],
    keywords: [
      "resume writing service Canada",
      "professional resume writer Canada",
      "ATS resume Canada",
      "bilingual resume Canada",
      "executive resume writer Canada",
      "IT resume writer Canada",
      "Canadian resume writing service",
    ],
    faqs: [
      {
        q: "How much does a professional resume cost in Canada?",
        a: "Canadian resume writing typically ranges from about CAD $200 to $1,000+ for executive resumes. Chanuka Jeewantha prices in USD - from $179 to $1,499 - with each resume personally written.",
      },
      {
        q: "What do Canadian employers expect in a resume?",
        a: "Canadian employers expect a concise one-to-two-page, ATS-friendly resume with no photo or personal information, focused on quantified achievements.",
      },
      {
        q: "Do you optimize resumes for ATS used in Canada?",
        a: "Yes. Every resume is ATS-optimized for the tracking systems used by Canadian employers while remaining clear and recruiter-readable.",
      },
      {
        q: "Do you write bilingual English/French resumes for Canada?",
        a: "Yes. Bilingual English/French resumes are available and are often essential for federal government roles and many Quebec-based employers.",
      },
      {
        q: "Which ATS systems do you optimize Canadian resumes for?",
        a: "We format for Workday, Oracle Taleo, iCIMS, and Greenhouse, which Canadian employers use most, with keywords matched to your target job description.",
      },
      {
        q: "How fast can you deliver my resume?",
        a: "Standard turnaround is 3 to 5 business days with an express option, and every resume includes revisions until you are satisfied.",
      },
    ],
  },
  "new-zealand": {
    slug: "new-zealand",
    country: "New Zealand",
    demonym: "New Zealand",
    docTerm: "CV",
    lang: "en-NZ",
    title: "CV Writing Service New Zealand",
    description:
      "Professional, ATS-friendly CV writing for the New Zealand job market. Founder-led and personally written for NZ recruiters and hiring managers.",
    heroEyebrow: "CV Writing Service · New Zealand",
    heroHeading: "Professional CV Writing for the New Zealand Job Market",
    heroSub:
      "Personally written, ATS-friendly CVs built around New Zealand conventions - a clear personal profile, locally-aligned tone, and recruiter-ready structure.",
    conventions: [
      "New Zealand CVs typically run two to three pages, often opening with a short personal profile.",
      "No photo or date of birth; references may be listed or available on request.",
      "NZ spelling and terminology, with awareness of local market and (where relevant) bicultural context.",
      "Achievement-focused, ATS-friendly structure with role-relevant keywords.",
    ],
    atsSystems: ["Workday", "SAP SuccessFactors", "JobAdder", "Snaphire", "Oracle Taleo"],
    cities: ["Auckland", "Wellington", "Christchurch", "Hamilton", "Tauranga", "Dunedin"],
    salaryContext:
      "New Zealand salaries run from around NZ$50,000 at entry to NZ$160,000+ for senior roles. We align your CV to the local market - a concise personal profile, NZ spelling, and referees where appropriate - so it lands well with New Zealand recruiters and hiring managers.",
    specialisms: ["Executive & C-suite", "Government & Public Sector", "Graduate", "Healthcare", "Trades & Engineering"],
    keywords: [
      "CV writing service New Zealand",
      "professional CV writer NZ",
      "CV writer Auckland",
      "executive CV writer New Zealand",
      "government CV NZ",
      "resume writing service New Zealand",
      "NZ CV writing service",
    ],
    faqs: [
      {
        q: "How much does a professional CV cost in New Zealand?",
        a: "New Zealand CV writing typically ranges from a few hundred dollars upward. Chanuka Jeewantha prices in USD globally - from $179 to $1,499 - with each CV personally written for the NZ market.",
      },
      {
        q: "What format do New Zealand employers expect?",
        a: "NZ employers expect a two-to-three-page CV, usually led by a brief personal profile, with no photo and NZ spelling throughout.",
      },
      {
        q: "Do you write CVs for senior roles in New Zealand?",
        a: "Yes. The service covers senior, executive, and specialist CVs positioned for competitive New Zealand and cross-border roles.",
      },
      {
        q: "Which ATS systems do you optimize NZ CVs for?",
        a: "We format for JobAdder, Snaphire, and Workday, which New Zealand employers commonly use, with keywords aligned to your target role.",
      },
      {
        q: "Do New Zealand CVs need referees?",
        a: "Referees are commonly listed on NZ CVs or noted as available on request. We advise on the best approach for your situation.",
      },
      {
        q: "How fast is your CV turnaround?",
        a: "Standard turnaround is 3 to 5 business days with an express option, and every CV includes revisions until you are happy with it.",
      },
    ],
  },
};

export const geoPageSlugs = Object.keys(geoPages);

/**
 * hreflang alternates for the whole geo landing cluster.
 * Every market page emits the full set (plus x-default) so Google can tell the
 * five English variants apart and stop them cannibalising each other in search.
 * Paths are relative; Next.js resolves them against metadataBase.
 */
export const geoHreflangAlternates: Record<string, string> = {
  ...Object.fromEntries(
    Object.values(geoPages).map((page) => [page.lang, `/cv-writing/${page.slug}`]),
  ),
  "x-default": "/cv-writing/usa",
};
