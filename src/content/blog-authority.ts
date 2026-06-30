import type { BlogPost } from "./blog-posts";

/**
 * Bespoke authority articles - hand-written, research-backed content
 * designed to rank for high-intent comparison/keyword queries and to be
 * citation-worthy for AI search (answer-first, specific, market-aware).
 */

const authorityInternalLinks = [
  { label: "ATS Resume & CV Writing", href: "/services/cv-writing" },
  { label: "Compare Packages & Pricing", href: "/pricing" },
  { label: "Run the free ATS CV Audit", href: "/tools/ats-cv-audit" },
];

const authorityCtas = [
  { label: "View Resume & CV Packages", href: "/pricing" },
  { label: "Request Career Support", href: "/contact" },
];

export const authorityPosts: BlogPost[] = [
  {
    slug: "us-resume-vs-uk-cv",
    title: "US Resume vs UK CV: Key Differences (2026 Guide)",
    excerpt:
      "A US resume and a UK CV are not the same document. Here are the differences in terminology, length, format, spelling, and content - and what to change when you apply across markets.",
    content:
      "A US resume and a UK CV target the same goal - getting you shortlisted - but they follow different conventions. In the US, a 'resume' is a concise one-to-two-page document. In the UK, a 'CV' is typically two pages led by a personal profile. Using the wrong format for the market is one of the most common reasons strong candidates get overlooked.",
    category: "Career Strategy",
    publishedAt: "2026-06-18",
    author: "Chanuka Jeewantha",
    keywords: [
      "US resume vs UK CV",
      "resume vs CV difference",
      "US resume format",
      "UK CV format",
      "applying for jobs US UK",
    ],
    sections: [
      {
        heading: "Resume vs CV: the core difference",
        paragraphs: [
          "In the United States, a resume is a short, targeted marketing document - one page for most candidates, two for senior or executive profiles. The word 'CV' in the US is reserved for academic, scientific, and research roles and can run many pages.",
          "In the United Kingdom (and across much of the Commonwealth - Australia, New Zealand, Ireland), the standard job-application document is called a CV and is usually two pages, opening with a concise personal profile or personal statement.",
        ],
        bullets: [
          "US: 'resume', 1-2 pages, achievement-led, no personal profile required",
          "UK: 'CV', ~2 pages, opens with a personal profile/statement",
          "Both: no photo, no date of birth, no marital status",
        ],
      },
      {
        heading: "Format, length, and spelling",
        paragraphs: [
          "US resumes prioritise tight, scannable formatting and reverse-chronological experience with quantified bullet points (the X-Y-Z impact format: accomplished X, measured by Y, by doing Z). UK CVs allow a little more context and a personal profile up top, but still reward measurable results.",
          "Spelling and terminology must match the market. Use American spelling (organize, program, analyze) and US terms for a US resume; use British spelling (organise, programme, analyse) and UK terms for a UK CV. Small mismatches signal a copy-pasted application.",
        ],
        bullets: [
          "Match spelling to the market (US vs UK English)",
          "US: lead with a summary + achievements; keep to 1-2 pages",
          "UK: lead with a personal profile; ~2 pages is normal",
          "Both: tailor keywords to the specific job description for ATS",
        ],
      },
      {
        heading: "What to change when you apply across markets",
        paragraphs: [
          "If you are converting a UK CV into a US resume, tighten it to one or two pages, replace the personal profile with a sharp professional summary, switch to American spelling, and make every bullet outcome-focused.",
          "If you are converting a US resume into a UK CV, you can add a short personal profile, expand to two pages where it adds value, and switch to British spelling. In both directions, re-map your keywords to the target market's job descriptions so you pass that market's applicant tracking systems.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a CV the same as a resume?",
        answer:
          "Not in the US. In the US a resume is a short 1-2 page document and a CV is a longer academic document. In the UK, Australia, and New Zealand, 'CV' is the standard term for the everyday job-application document.",
      },
      {
        question: "How long should a US resume be?",
        answer:
          "One page for most candidates and two pages for senior or executive professionals. US employers expect concise, achievement-led resumes.",
      },
      {
        question: "Do I need a different document for US and UK applications?",
        answer:
          "Yes. Beyond terminology, the length, structure, spelling, and keyword targeting differ, so a US resume and a UK CV should be tailored separately for the best results.",
      },
    ],
    internalLinks: authorityInternalLinks,
    ctaButtons: authorityCtas,
  },
  {
    slug: "top-ats-resume-keywords-2026",
    title: "Top ATS Resume Keywords for 2026 (and How to Use Them)",
    excerpt:
      "ATS keywords in 2026 are about semantic relevance, not stuffing. Here are the keyword themes that matter, why modern ATS reads meaning, and how to use them without sounding robotic.",
    content:
      "Applicant tracking systems are used by an estimated 98% of Fortune 500 companies, and they now rank resumes by semantic relevance rather than exact-match keyword counting. The 2026 priority is contextual, natural language that mirrors the target job description - not keyword stuffing.",
    category: "ATS CV Writing",
    publishedAt: "2026-06-12",
    author: "Chanuka Jeewantha",
    keywords: [
      "ATS resume keywords 2026",
      "ATS keywords",
      "resume keywords",
      "ATS optimization",
      "ATS friendly resume",
    ],
    sections: [
      {
        heading: "ATS 2.0: from keyword stuffing to semantic relevance",
        paragraphs: [
          "Modern applicant tracking systems use semantic analysis - they understand meaning and related terms, not just exact string matches. That makes old tactics like cramming a keyword list or hiding white-text keywords both ineffective and risky.",
          "Studies show roughly 52% of target-job keywords are missing from the average unoptimised resume. The fix is not more keywords - it is the right keywords, used naturally, backed by evidence.",
        ],
        bullets: [
          "ATS now reads context and synonyms, not just exact matches",
          "Keyword stuffing can hurt readability and recruiter trust",
          "Aim for natural language that mirrors the job description",
        ],
      },
      {
        heading: "Keyword themes that matter in 2026",
        paragraphs: [
          "Across industries, the strongest 2026 resume keyword themes combine durable professional skills with the new language hiring managers are screening for.",
        ],
        bullets: [
          "Core professional skills: project management, data analysis, process optimization, stakeholder communication, budget management, team leadership",
          "AI literacy: AI tools, AI-powered workflows, prompt engineering, AI business strategy",
          "Sustainability / ESG: ESG reporting, sustainable operations (where relevant to your field)",
          "Skills-first language: tools, certifications, and measurable outcomes tied to each skill",
        ],
      },
      {
        heading: "How to use keywords the right way",
        paragraphs: [
          "Collect 5-8 real job descriptions for your target role and note the skills, tools, and outcomes that repeat. Those repeated terms are what the ATS and the recruiter are looking for.",
          "Then weave them into your summary, experience bullets, and skills section as evidence - 'cut onboarding time 30% by redesigning the process' beats a bare 'process optimization' tag. Mirror the employer's wording where it is honest and accurate.",
        ],
        bullets: [
          "Map your keywords to each target role family, not one generic list",
          "Prove each keyword with a quantified achievement",
          "Use standard section headings so the ATS parses cleanly",
          "Avoid tables, text boxes, and graphics that break ATS parsing",
        ],
      },
    ],
    faqs: [
      {
        question: "How many keywords should a resume have?",
        answer:
          "There is no fixed number. Focus on covering the skills, tools, and outcomes that repeat across your target job descriptions, used naturally and backed by evidence - not a maximum keyword count.",
      },
      {
        question: "Does keyword stuffing still work for ATS?",
        answer:
          "No. Modern ATS systems use semantic analysis and rank by relevance, so keyword stuffing is ineffective and can reduce readability and recruiter trust.",
      },
      {
        question: "What are the most important resume keywords in 2026?",
        answer:
          "Durable skills like project management, data analysis, and stakeholder communication, plus emerging AI-literacy terms - always matched to your specific target role and proven with measurable results.",
      },
    ],
    internalLinks: authorityInternalLinks,
    ctaButtons: authorityCtas,
  },
];
