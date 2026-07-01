import type { BlogPost } from "./blog-posts";

// -----------------------------------------------------------------------------
// US keyword series - part 2 (long-tail informational)
//
// Five hand-written guides covering long-tail US keyword clusters that are
// better served as blog posts than landing pages (definitions, length, format,
// LinkedIn+resume). Each links to the relevant service/landing page, /pricing,
// and home.
// -----------------------------------------------------------------------------

const AUTHOR = "Chanuka Jeewantha";

export const usKeywordBlogPosts2: BlogPost[] = [
  // What is a CV
  {
    slug: "what-is-a-cv",
    title: "What Is a CV? Meaning, Format, and How It Differs From a Resume",
    excerpt:
      "What a CV is, what goes in one, and how it differs from a resume in the US - plus how to know which document your target job actually needs.",
    content:
      "A CV (curriculum vitae) is a document that summarizes your professional and academic background for job applications. But what a 'CV' means depends heavily on where you are: in most of the US it's used interchangeably with 'resume', while in academia and much of the world it means something longer and more detailed. Here's what a CV actually is and how to build the right one.",
    category: "US Resume Writing",
    publishedAt: "2026-06-08",
    author: AUTHOR,
    keywords: ["what is a cv", "cv", "curriculum vitae", "my cv", "cv for job", "cv meaning"],
    sections: [
      {
        heading: "What a CV is",
        paragraphs: [
          "A CV is a written summary of your qualifications, experience, education, and skills, used to apply for jobs. The term is Latin for 'course of life.' In everyday US usage, most people say 'CV' but mean a short, targeted resume - one to two pages built for a specific role.",
          "In academia, research, medicine, and much of Europe and Asia, a CV means something different: a long, comprehensive record of your entire professional and academic history, including publications, presentations, grants, and teaching.",
        ],
        bullets: [
          "Everyday US usage: 'CV' usually means a resume",
          "Academic/international usage: a long, complete history",
          "Both summarize your background to apply for roles",
        ],
      },
      {
        heading: "What goes in a CV",
        paragraphs: [
          "For a standard (resume-style) CV, keep it targeted: a short summary, work experience in reverse-chronological order written as achievements, skills, education, and certifications. Omit personal details like photos, age, and marital status for US applications.",
          "For an academic CV, add the sections that prove scholarly output: publications, conference presentations, research, grants and funding, teaching experience, and professional memberships. Length follows completeness, not brevity.",
        ],
      },
      {
        heading: "Which one do you actually need?",
        paragraphs: [
          "For almost all US jobs - corporate, tech, finance, healthcare staff, and beyond - you need a short, targeted resume-style document, even if the posting says 'CV.' Use a full academic CV only for faculty, research, postdoctoral, and certain medical or scientific roles.",
          "If you're applying to US government jobs through USAJOBS, that's a third category with its own detailed federal-resume format.",
        ],
      },
    ],
    internalLinks: [
      { label: "CV writing service", href: "/cv-writing-service" },
      { label: "Resume vs CV in the USA", href: "/blog/resume-vs-cv-usa" },
      { label: "Resume examples by level", href: "/resume-examples" },
      { label: "Packages and pricing", href: "/pricing" },
    ],
    ctaButtons: [
      { label: "CV Writing Service", href: "/cv-writing-service" },
      { label: "View Pricing", href: "/pricing" },
    ],
    faqs: [
      {
        question: "Is a CV the same as a resume?",
        answer:
          "In the US, usually yes - for most jobs 'CV' and 'resume' mean the same short, targeted document. A true academic CV is long and comprehensive and is only expected for academic, research, and some medical or scientific roles.",
      },
      {
        question: "How long should a CV be?",
        answer:
          "A resume-style CV is one to two pages. An academic CV can run many pages because it lists your full record of publications, research, and teaching. Match the length to the type your target role expects.",
      },
    ],
  },

  // Academic CV format
  {
    slug: "academic-cv-format",
    title: "Academic CV Format: How to Structure a CV for Faculty and Research Roles",
    excerpt:
      "The academic CV format explained - the sections to include, the order they go in, and how it differs from a standard resume for faculty, postdoc, and research applications.",
    content:
      "An academic CV is a different document from a resume. Applying for faculty positions, postdocs, research roles, and fellowships means presenting a complete record of your scholarly work - publications, research, teaching, grants - in a specific, expected order. Here's how to structure an academic CV.",
    category: "US Industry Resumes",
    publishedAt: "2026-06-06",
    author: AUTHOR,
    keywords: ["academic cv formats", "academic cv", "cv for faculty", "research cv", "curriculum vitae format"],
    sections: [
      {
        heading: "How an academic CV differs from a resume",
        paragraphs: [
          "A resume is short, targeted, and achievement-focused. An academic CV is long, comprehensive, and complete - it documents your entire scholarly record rather than tailoring to a single role. Length is expected; a strong academic CV can run many pages.",
          "The audience is different too. Hiring committees and department chairs read academic CVs for evidence of research productivity, teaching ability, funding, and fit with the department.",
        ],
      },
      {
        heading: "Standard academic CV sections, in order",
        paragraphs: [
          "Order can vary by field and by whether the role is research- or teaching-focused, but a standard academic CV generally follows this structure:",
        ],
        bullets: [
          "Contact information",
          "Education (degrees, institutions, dates, dissertation title)",
          "Academic and professional appointments",
          "Publications (peer-reviewed articles, books, chapters)",
          "Grants and funding",
          "Research experience and interests",
          "Teaching experience",
          "Conference presentations and invited talks",
          "Awards and honors",
          "Professional service, memberships, and references",
        ],
      },
      {
        heading: "Formatting an academic CV",
        paragraphs: [
          "Keep it clean and consistent: a single readable font, clear section headings, and a consistent citation style for publications (match your field's convention). Put the sections that matter most for the specific role earlier - research output for research roles, teaching for teaching-focused positions.",
          "Unlike a resume, you don't cut older material; the academic CV is cumulative. Keep it current and complete, and tailor the emphasis - not the length - to each application.",
        ],
      },
    ],
    internalLinks: [
      { label: "What is a CV?", href: "/blog/what-is-a-cv" },
      { label: "CV writing service", href: "/cv-writing-service" },
      { label: "Resume vs CV in the USA", href: "/blog/resume-vs-cv-usa" },
      { label: "Packages and pricing", href: "/pricing" },
    ],
    ctaButtons: [
      { label: "CV Writing Service", href: "/cv-writing-service" },
      { label: "View Pricing", href: "/pricing" },
    ],
    faqs: [
      {
        question: "How long should an academic CV be?",
        answer:
          "As long as it needs to be to document your full record - often several pages, and longer as your career grows. Unlike a resume, academic CVs are cumulative and completeness is expected.",
      },
      {
        question: "Do I need an academic CV or a resume?",
        answer:
          "Use an academic CV for faculty, postdoc, research, and fellowship applications. For industry roles - including industry jobs outside academia - use a short, targeted resume instead.",
      },
    ],
  },

  // Resume length / 2 pages
  {
    slug: "resume-length-2-pages",
    title: "Should a Resume Be 2 Pages? How Long a US Resume Should Be",
    excerpt:
      "One page or two? The real rule on US resume length by career level - when two pages is right, when it hurts you, and how to decide.",
    content:
      "The 'resume must be one page' rule is one of the most repeated - and most misunderstood - pieces of job-search advice. The honest answer for the US market is: it depends on your level. Here's when a resume should be one page, when two pages is right, and how to decide.",
    category: "US Resume Writing",
    publishedAt: "2026-06-04",
    author: AUTHOR,
    keywords: ["resume on 2 pages", "resume length", "how long should a resume be", "two page resume", "one page resume"],
    sections: [
      {
        heading: "The real rule on resume length",
        paragraphs: [
          "Length should follow your experience, not an arbitrary limit. One page is right for students, recent graduates, and most professionals with under roughly ten years of experience. Two pages is appropriate - and expected - for senior professionals, managers, and executives with a deeper record to show.",
          "The mistake isn't having two pages; it's padding one page's worth of content into two, or cramming three pages of experience onto one and making it unreadable.",
        ],
        bullets: [
          "One page: students, graduates, early to mid-career",
          "Two pages: senior professionals, managers, executives",
          "Rarely three: extensive federal, academic, or medical records",
        ],
      },
      {
        heading: "When two pages helps",
        paragraphs: [
          "A second page earns its place when you have enough quantified, relevant achievements to fill it - typically ten or more years of experience, leadership scope, or a track record that genuinely needs the room. Recruiters at the senior level expect the depth.",
          "If you go to two pages, make the first page strong enough to stand alone. Many recruiters scan the first page and only continue if it earns their attention.",
        ],
      },
      {
        heading: "When to cut back to one",
        paragraphs: [
          "If your second page is thin, repetitive, or padded with old or irrelevant roles, cut it. A tight one-page resume beats a padded two-pager every time. Trim experience older than roughly ten to fifteen years unless it's directly relevant, and remove duties that don't show impact.",
        ],
      },
    ],
    internalLinks: [
      { label: "Build your resume (free guide)", href: "/build-your-resume" },
      { label: "Resume examples by level", href: "/resume-examples" },
      { label: "Executive resume writer", href: "/resume-writer/executive" },
      { label: "Packages and pricing", href: "/pricing" },
    ],
    ctaButtons: [
      { label: "Resume Examples", href: "/resume-examples" },
      { label: "View Pricing", href: "/pricing" },
    ],
    faqs: [
      {
        question: "Is a two-page resume ever okay?",
        answer:
          "Yes. For senior professionals, managers, and executives, two pages is standard and expected. The key is that the length is justified by quantified, relevant content - not padding.",
      },
      {
        question: "Should a recent graduate use two pages?",
        answer:
          "No. Students and recent graduates should keep it to one page. At that stage, a tight, well-structured one-page resume is stronger than stretching to fill two.",
      },
    ],
  },

  // LinkedIn + resume
  {
    slug: "linkedin-and-resume",
    title: "LinkedIn and Your Resume: How to Make Them Work Together",
    excerpt:
      "Your resume and LinkedIn are read side by side by US recruiters. Here's how to align them - what should match, what shouldn't, and why the two must tell one story.",
    content:
      "US recruiters almost always check your LinkedIn against your resume. When the two don't line up - different titles, different dates, a stronger story in one than the other - it raises questions. When they reinforce each other, they build trust. Here's how to make your resume and LinkedIn work as one.",
    category: "LinkedIn USA",
    publishedAt: "2026-06-02",
    author: AUTHOR,
    keywords: ["linkedin resume", "resume and linkedin", "linkedin and resume", "linkedin profile resume"],
    sections: [
      {
        heading: "Why they're read together",
        paragraphs: [
          "A resume is what you send; LinkedIn is what recruiters check. Before a screening call, a recruiter typically opens both. Consistency signals credibility; mismatches - different job titles, gaps that don't line up, achievements on one but not the other - create doubt at exactly the wrong moment.",
          "LinkedIn also works proactively: recruiters search it to find candidates. A strong profile generates inbound opportunities your resume never could on its own.",
        ],
      },
      {
        heading: "What should match - and what shouldn't",
        paragraphs: [
          "Match the facts: job titles, companies, and dates should be identical across both. Match the positioning: the story of who you are and what you're great at should be the same.",
          "What shouldn't be identical is the format and voice. A resume is tight and formal, tailored to a specific role. LinkedIn is broader, written in the first person, and optimized for recruiter search with keywords in your headline, About section, and experience.",
        ],
        bullets: [
          "Match: titles, companies, dates, and core positioning",
          "Differ: LinkedIn is first-person, keyword-rich, and broader",
          "LinkedIn headline and About drive recruiter search - use them",
        ],
      },
      {
        heading: "Getting both right",
        paragraphs: [
          "The efficient approach is to write them together, so the resume and LinkedIn share one strategy. That's why most premium packages include a LinkedIn rewrite alongside the resume - it's the fastest way to make sure the two documents recruiters compare tell exactly the same story.",
        ],
      },
    ],
    internalLinks: [
      { label: "LinkedIn optimization service", href: "/services/packages/linkedin-optimization" },
      { label: "Resume writing service", href: "/" },
      { label: "Resume & cover letter", href: "/resume-and-cover-letter" },
      { label: "Packages and pricing", href: "/pricing" },
    ],
    ctaButtons: [
      { label: "LinkedIn Optimization", href: "/services/packages/linkedin-optimization" },
      { label: "View Pricing", href: "/pricing" },
    ],
    faqs: [
      {
        question: "Should my LinkedIn match my resume exactly?",
        answer:
          "The facts should match exactly - titles, companies, and dates. The format shouldn't: LinkedIn is first-person, broader, and written for recruiter search, while a resume is tight and tailored to a specific role. Same story, different delivery.",
      },
      {
        question: "Do recruiters really check LinkedIn against my resume?",
        answer:
          "Yes, routinely. Most US recruiters open both before a screening call. Inconsistencies between them are a common reason candidates get passed over, so the two need to align.",
      },
    ],
  },

  // Business resume
  {
    slug: "business-resume-guide",
    title: "Business Resume Guide: How to Write a Resume for Business Roles",
    excerpt:
      "How to write a business resume for the US market - what hiring managers in operations, strategy, consulting, and general management look for, and how to show impact.",
    content:
      "A business resume covers a wide range of roles - operations, strategy, general management, consulting, business development, and more. What ties them together is that US business hiring rewards measurable impact and commercial judgment. Here's how to write a resume that shows both.",
    category: "US Industry Resumes",
    publishedAt: "2026-05-31",
    author: AUTHOR,
    keywords: ["business resume", "job resume", "resume for business roles", "management resume", "operations resume"],
    sections: [
      {
        heading: "What business employers look for",
        paragraphs: [
          "Business roles are judged on outcomes: revenue moved, costs cut, processes improved, teams led, problems solved. A business resume that lists responsibilities buries exactly what hiring managers are scanning for. Lead with the result and the number.",
          "Commercial judgment matters as much as execution. Show that you understand the business impact of your work - not just that you did a task, but that it moved a metric that mattered.",
        ],
        bullets: [
          "Quantify impact: revenue, cost, growth, efficiency, scale",
          "Show ownership - projects, teams, budgets, and outcomes",
          "Connect your work to business results, not just activity",
          "Keep it ATS-clean and tuned to the target job description",
        ],
      },
      {
        heading: "Structure for a business resume",
        paragraphs: [
          "Use a clean, single-column format: a summary that names your function and level, experience in reverse-chronological order with achievement bullets, a skills band, and education. One page for most professionals; two for senior and management roles.",
          "For management and leadership roles, shift the emphasis from tasks to scope - people led, budgets owned, and the business outcomes you were accountable for.",
        ],
      },
      {
        heading: "Tailor to the specific business role",
        paragraphs: [
          "'Business' covers a lot of ground, so tailor to the exact role. An operations resume emphasizes efficiency and process; a strategy or consulting resume emphasizes analysis and impact; a general management resume emphasizes P&L and cross-functional leadership. Pull the language from the job descriptions you're targeting.",
        ],
      },
    ],
    internalLinks: [
      { label: "Executive resume writer", href: "/resume-writer/executive" },
      { label: "Resume examples by level", href: "/resume-examples" },
      { label: "Resume writing service", href: "/" },
      { label: "Packages and pricing", href: "/pricing" },
    ],
    ctaButtons: [
      { label: "Resume Examples", href: "/resume-examples" },
      { label: "View Pricing", href: "/pricing" },
    ],
    faqs: [
      {
        question: "What makes a business resume different?",
        answer:
          "Business hiring is outcome-driven, so a business resume has to foreground measurable impact and commercial judgment - revenue, cost, efficiency, and the business results of your work - rather than a list of responsibilities.",
      },
      {
        question: "How long should a business resume be?",
        answer:
          "One page for most professionals, two for senior and management roles where scope and leadership justify the length. Keep it tight and impact-focused either way.",
      },
    ],
  },
];
