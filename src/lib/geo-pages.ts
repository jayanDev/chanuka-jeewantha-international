/**
 * GEO landing page content — per-country resume/CV writing pages.
 * Targets the brand's five core English-speaking markets with
 * market-specific conventions, keywords, and FAQ for local + AI search.
 */

import type { FaqItem } from "@/lib/aeo-faqs";

export type GeoPage = {
  slug: string;
  country: string;
  demonym: string;
  docTerm: "resume" | "CV"; // dominant local term
  title: string;
  description: string;
  heroEyebrow: string;
  heroHeading: string;
  heroSub: string;
  conventions: string[];
  keywords: string[];
  faqs: FaqItem[];
};

export const geoPages: Record<string, GeoPage> = {
  usa: {
    slug: "usa",
    country: "United States",
    demonym: "American",
    docTerm: "resume",
    title: "Resume Writing Service USA — ATS Resumes",
    description:
      "Professional, ATS-optimized resume writing for the US job market. Founder-led and personally written for American recruiters, hiring managers, and applicant tracking systems.",
    heroEyebrow: "Resume Writing Service · United States",
    heroHeading: "ATS Resume Writing for the US Job Market",
    heroSub:
      "Personally written, ATS-optimized resumes engineered for US recruiters, hiring managers, and the applicant tracking systems used by 98% of Fortune 500 companies.",
    conventions: [
      "US employers expect a one-page resume (two pages for senior or executive roles), not a multi-page CV.",
      "No photo, date of birth, marital status, or other personal details — these can trigger bias-screening issues.",
      "Reverse-chronological format with quantified, achievement-led bullet points (the X-Y-Z impact format).",
      "Heavy ATS optimization: clean structure, standard headings, and role-relevant keywords that pass parsing.",
    ],
    keywords: [
      "resume writing service USA",
      "professional resume writer USA",
      "ATS resume writer",
      "executive resume writer USA",
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
        a: "Yes. Every resume is built ATS-first — clean structure, standard headings, and role-relevant keywords — while staying recruiter- and hiring-manager-readable.",
      },
    ],
  },
  uk: {
    slug: "uk",
    country: "United Kingdom",
    demonym: "British",
    docTerm: "CV",
    title: "CV Writing Service UK — Professional CVs",
    description:
      "Professional, ATS-friendly CV writing for the UK job market. Founder-led and personally written for British recruiters, hiring managers, and applicant tracking systems.",
    heroEyebrow: "CV Writing Service · United Kingdom",
    heroHeading: "Professional CV Writing for the UK Job Market",
    heroSub:
      "Personally written, ATS-friendly CVs built around UK conventions — a strong personal profile, two-page structure, and the language British recruiters expect.",
    conventions: [
      "UK CVs are typically two pages, led by a concise personal profile / personal statement.",
      "No photo, date of birth, or marital status — UK employers omit these to support fair recruitment.",
      "British spelling and terminology throughout (e.g. 'organised', 'programme', 'CV' not 'resume').",
      "Achievement-focused, ATS-friendly structure with clear section headings and relevant keywords.",
    ],
    keywords: [
      "CV writing service UK",
      "professional CV writer UK",
      "executive CV writing service UK",
      "ATS CV UK",
      "British CV writing service",
    ],
    faqs: [
      {
        q: "How much does a professional CV cost in the UK?",
        a: "UK CV writing typically ranges from around £70 for early-career CVs to £199+ for executive CVs. Chanuka Jeewantha prices in USD globally — from $179 to $1,499 — with the same transparent rate for UK clients.",
      },
      {
        q: "What format do UK employers expect for a CV?",
        a: "UK employers expect a two-page CV led by a personal profile, in British English, with no photo or date of birth.",
      },
      {
        q: "Do you write CVs for executive and senior roles in the UK?",
        a: "Yes. The service specialises in senior, executive, and C-suite CVs positioned for competitive UK and cross-border roles.",
      },
    ],
  },
  australia: {
    slug: "australia",
    country: "Australia",
    demonym: "Australian",
    docTerm: "resume",
    title: "Resume & CV Writing Service Australia",
    description:
      "Professional resume and CV writing for the Australian job market, including selection-criteria responses. Founder-led, personally written, and ATS-optimized.",
    heroEyebrow: "Resume & CV Writing · Australia",
    heroHeading: "Resume & CV Writing for the Australian Job Market",
    heroSub:
      "Personally written, ATS-optimized resumes and CVs built for Australian recruiters — including support for selection criteria used by government and large organisations.",
    conventions: [
      "In Australia 'resume' and 'CV' are used interchangeably; documents typically run two to three pages.",
      "Government and large-organisation roles often require addressing selection criteria or key capabilities.",
      "No photo or personal details; Australian spelling and terminology throughout.",
      "Achievement-led content with metrics, ATS-friendly structure, and role-relevant keywords.",
    ],
    keywords: [
      "resume writing service Australia",
      "professional resume writer Australia",
      "CV writing service Australia",
      "executive resume writer Australia",
      "selection criteria writing Australia",
    ],
    faqs: [
      {
        q: "How much does a professional resume cost in Australia?",
        a: "Australian resume writing ranges widely — from a few hundred dollars to $2,500+ at premium executive agencies. Chanuka Jeewantha offers executive-grade, founder-led writing from $179 to $1,499 USD.",
      },
      {
        q: "Do you write to selection criteria for Australian roles?",
        a: "Yes. Australian government and large-organisation applications often require selection-criteria or key-capability responses, which can be addressed alongside your resume.",
      },
      {
        q: "Resume or CV for Australian jobs?",
        a: "In Australia the terms are used interchangeably; most roles expect a two-to-three-page document tailored to the position and industry.",
      },
    ],
  },
  canada: {
    slug: "canada",
    country: "Canada",
    demonym: "Canadian",
    docTerm: "resume",
    title: "Resume Writing Service Canada — ATS Resumes",
    description:
      "Professional, ATS-optimized resume writing for the Canadian job market. Founder-led and personally written for Canadian recruiters and applicant tracking systems.",
    heroEyebrow: "Resume Writing Service · Canada",
    heroHeading: "ATS Resume Writing for the Canadian Job Market",
    heroSub:
      "Personally written, ATS-optimized resumes built for Canadian recruiters and hiring managers across Toronto, Vancouver, Calgary, Montreal, and remote-first employers.",
    conventions: [
      "Canadian resumes are typically one to two pages, reverse-chronological, with no photo or personal details.",
      "ATS optimization is essential — most mid-to-large Canadian employers screen with applicant tracking systems.",
      "Achievement-led bullet points with metrics and role-relevant keywords.",
      "Bilingual (English/French) positioning can be considered for roles that require it.",
    ],
    keywords: [
      "resume writing service Canada",
      "professional resume writer Canada",
      "ATS resume Canada",
      "executive resume writer Canada",
      "Canadian resume writing service",
    ],
    faqs: [
      {
        q: "How much does a professional resume cost in Canada?",
        a: "Canadian resume writing typically ranges from about CAD $200 to $1,000+ for executive resumes. Chanuka Jeewantha prices in USD — from $179 to $1,499 — with each resume personally written.",
      },
      {
        q: "What do Canadian employers expect in a resume?",
        a: "Canadian employers expect a concise one-to-two-page, ATS-friendly resume with no photo or personal information, focused on quantified achievements.",
      },
      {
        q: "Do you optimize resumes for ATS used in Canada?",
        a: "Yes. Every resume is ATS-optimized for the tracking systems used by Canadian employers while remaining clear and recruiter-readable.",
      },
    ],
  },
  "new-zealand": {
    slug: "new-zealand",
    country: "New Zealand",
    demonym: "New Zealand",
    docTerm: "CV",
    title: "CV Writing Service New Zealand",
    description:
      "Professional, ATS-friendly CV writing for the New Zealand job market. Founder-led and personally written for NZ recruiters and hiring managers.",
    heroEyebrow: "CV Writing Service · New Zealand",
    heroHeading: "Professional CV Writing for the New Zealand Job Market",
    heroSub:
      "Personally written, ATS-friendly CVs built around New Zealand conventions — a clear personal profile, locally-aligned tone, and recruiter-ready structure.",
    conventions: [
      "New Zealand CVs typically run two to three pages, often opening with a short personal profile.",
      "No photo or date of birth; references may be listed or available on request.",
      "NZ spelling and terminology, with awareness of local market and (where relevant) bicultural context.",
      "Achievement-focused, ATS-friendly structure with role-relevant keywords.",
    ],
    keywords: [
      "CV writing service New Zealand",
      "professional CV writer NZ",
      "resume writing service New Zealand",
      "executive CV writer New Zealand",
      "NZ CV writing service",
    ],
    faqs: [
      {
        q: "How much does a professional CV cost in New Zealand?",
        a: "New Zealand CV writing typically ranges from a few hundred dollars upward. Chanuka Jeewantha prices in USD globally — from $179 to $1,499 — with each CV personally written for the NZ market.",
      },
      {
        q: "What format do New Zealand employers expect?",
        a: "NZ employers expect a two-to-three-page CV, usually led by a brief personal profile, with no photo and NZ spelling throughout.",
      },
      {
        q: "Do you write CVs for senior roles in New Zealand?",
        a: "Yes. The service covers senior, executive, and specialist CVs positioned for competitive New Zealand and cross-border roles.",
      },
    ],
  },
};

export const geoPageSlugs = Object.keys(geoPages);
