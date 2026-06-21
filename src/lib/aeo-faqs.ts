/**
 * AEO-optimized FAQ content — country-specific, conversational Q&A
 * designed for AI search engine extraction (ChatGPT, Perplexity, Google AI Overviews).
 *
 * Each answer leads with the direct answer in the first sentence.
 * Countries/markets are mentioned explicitly for GEO relevance.
 */

export type FaqItem = { q: string; a: string };

// ─── All 8 AEO FAQ items ───────────────────────────────────────────

export const aeoFaqs: FaqItem[] = [
  {
    q: "How much does a professional resume cost in the US?",
    a: "Professional resume writing in the US typically ranges from about $150 for entry-level to $1,000+ for executive and C-suite resumes. Chanuka Jeewantha's packages run from $179 (Starter) to $1,499 (C-Suite Premium), each written personally and tailored to your target US role and industry.",
  },
  {
    q: "How much does a CV writer cost in the UK / Australia / Canada / New Zealand?",
    a: "Pricing is set in USD and applies globally, so UK, Australian, Canadian, and New Zealand clients pay the same transparent rates: from $179 for early-career CVs to $1,499 for C-suite career-branding suites. Each CV follows the conventions recruiters expect in your specific market.",
  },
  {
    q: "What is an ATS-friendly CV / resume?",
    a: "An ATS-friendly CV is formatted so Applicant Tracking Systems can parse it correctly — clean structure, standard headings, relevant keywords, and no elements (tables, graphics, columns) that break parsing. Every resume written here is ATS-optimized while staying recruiter- and hiring-manager-readable.",
  },
  {
    q: "Do you write resumes for the US and CVs for the UK/Australia?",
    a: "Yes. In the US a \"resume\" is standard; in the UK, Australia, New Zealand, and much of the Commonwealth a \"CV\" is expected. Documents are built to the format, length, and tone of your target market.",
  },
  {
    q: "Can you optimize my LinkedIn profile for recruiters in the US and UK?",
    a: "Yes. LinkedIn optimization includes a recruiter-facing rewrite with market-specific positioning and the keywords senior hires are searched on in your target country.",
  },
  {
    q: "How long does it take to get my resume or CV?",
    a: "Turnaround depends on the package and your responsiveness during the brief; exact timelines are confirmed after your enquiry is reviewed. Rush options can be discussed.",
  },
  {
    q: "Is this service worth it for senior and executive roles?",
    a: "It is built specifically for senior professionals, executives, C-suite hires, and founders competing for serious roles. The work is founder-led and personally written — not template editing or junior outsourcing.",
  },
  {
    q: "How do I book a consultation or get started?",
    a: "Submit your current CV/resume, target role, target market, and preferred package via the enquiry form at /contact. Your profile is reviewed personally before the most suitable package is confirmed.",
  },
];

// ─── Named subsets for money pages ─────────────────────────────────

/** CV Writing page: Q1 (US pricing), Q3 (ATS-friendly), Q4 (resume vs CV) */
export const cvWritingFaqs: FaqItem[] = [
  aeoFaqs[0],
  aeoFaqs[2],
  aeoFaqs[3],
];

/** LinkedIn Optimization page: Q5 (LinkedIn optimization), Q7 (senior roles) */
export const linkedinFaqs: FaqItem[] = [
  aeoFaqs[4],
  aeoFaqs[6],
];

/** Pricing page: Q1 (US pricing), Q2 (UK/AUS/CA/NZ pricing), Q8 (getting started) */
export const pricingFaqs: FaqItem[] = [
  aeoFaqs[0],
  aeoFaqs[1],
  aeoFaqs[7],
];
