export type IndustryPage = {
  slug: string;
  /** SEO meta title - keep under 60 chars */
  metaTitle: string;
  /** SEO meta description - keep under 160 chars */
  metaDescription: string;
  /** Visible H1 */
  h1: string;
  /** Short positioning line under H1 */
  intro: string;
  /** What the industry searches for / who reads this page */
  audience: string;
  /** USD price band shown in Service schema, e.g. "$179 - $1,499" */
  priceRange: string;
  /** Pain points / problems we solve - 3-5 bullets */
  problems: string[];
  /** The approach we take - long paragraph */
  approachHeading: string;
  approachParagraphs: string[];
  /** "What's included" bullets - 5-7 items */
  whatsIncluded: string[];
  /** Recommended package slug from /packages */
  recommendedPackage: {
    name: string;
    price: string;
    blurb: string;
    href: string;
  };
  /** 4-5 FAQ entries - used both visually and in JSON-LD */
  faqs: Array<{ q: string; a: string }>;
  /** Slugs of related industry / city / comparison pages for cross-linking */
  relatedSlugs?: string[];
};

export const industryPages: IndustryPage[] = [
  // ============================================================
  // FEDERAL RESUME WRITER - highest-intent US-only search
  // ============================================================
  {
    slug: "federal",
    metaTitle: "Federal Resume Writer - US Government Resumes That Pass",
    metaDescription:
      "Federal resume writing for USAJOBS applications. KSA, specialized experience, and Schedule A formatting handled by a senior writer. 90-day interview guarantee.",
    h1: "Federal Resume Writer",
    intro:
      "USAJOBS applications fail more often for formatting reasons than for experience reasons. We write federal resumes that survive the HR screen and read clearly to the rating panel.",
    audience:
      "GS-7 through SES candidates, contractors moving to federal positions, military transitioning to federal civilian roles, and current federal employees pursuing internal promotions.",
    priceRange: "$349 - $1,499",
    problems: [
      "Federal HR rejects most resumes for length, structure, or missing KSAs - not lack of experience.",
      "Private-sector resumes (one page, achievement-led) get auto-screened out of USAJOBS.",
      "Specialized Experience statements need to mirror the announcement language word-for-word.",
      "Schedule A, veterans' preference, and security clearance details are usually placed wrong or omitted.",
      "Months of waiting only to be marked &quot;not qualified&quot; with no feedback.",
    ],
    approachHeading: "How we approach federal resumes",
    approachParagraphs: [
      "A federal resume is not a private-sector resume with a longer page count. It is a separate document with its own conventions: detailed work history, hours per week, supervisor information, GS-level mapping, and specialized experience statements written in the same vocabulary as the job announcement.",
      "Every engagement begins with a detailed review of the target announcement. We extract the &quot;specialized experience&quot; statement, the KSAs, the rating criteria, and the OPM qualification standard. Your resume is then written to address each of these directly, with concrete metrics, scope of responsibility, and outcome statements that the rating panel can score.",
      "Veterans' preference, Schedule A, and security clearance information are placed where HR expects to find them. Length is calibrated to the seniority of the role - five to seven pages is common for GS-13 and above; fewer for entry roles.",
    ],
    whatsIncluded: [
      "Federal resume formatted for USAJOBS upload (paste-safe)",
      "Specialized Experience statement written to the announcement",
      "KSA / competency narratives where required",
      "Veterans' preference and Schedule A formatting",
      "Security clearance and citizenship placement",
      "Cover letter aligned to the federal hiring panel",
      "90-day interview guarantee - full refund if no calls",
    ],
    recommendedPackage: {
      name: "Career Move Pack",
      price: "$499",
      blurb: "Best fit for federal applicants - includes a tailored resume in federal format, LinkedIn refresh, and two cover-letter versions for different announcements.",
      href: "/contact?package=Career%20Move%20Pack",
    },
    faqs: [
      {
        q: "What's the difference between a federal resume and a regular resume?",
        a: "A federal resume is longer (3-8 pages depending on seniority), includes hours per week, supervisor contact info, GS-level mapping, and detailed Specialized Experience statements. Private-sector style - one page, brief bullets - gets auto-screened out. Vocabulary mirrors the announcement exactly.",
      },
      {
        q: "Do you write resumes for USAJOBS?",
        a: "Yes. Every federal resume we deliver is paste-safe for the USAJOBS resume builder and uploads cleanly as a PDF, depending on which option the announcement requires.",
      },
      {
        q: "Can you handle SES applications?",
        a: "Yes. SES applications include the resume, the five Executive Core Qualifications (ECQs) narrative, and Technical Qualifications. We write all three to OPM standard.",
      },
      {
        q: "How long does a federal resume take?",
        a: "Standard turnaround is 10-14 days. Faster delivery can be requested during your enquiry for announcements with short windows.",
      },
      {
        q: "Is the 90-day interview guarantee available on federal resumes?",
        a: "Yes. Every package on the site is backed by a 90-day, 100% money-back interview guarantee. See the refund policy for terms.",
      },
    ],
    relatedSlugs: ["executive", "military-to-civilian"],
  },

  // ============================================================
  // EXECUTIVE RESUME WRITER
  // ============================================================
  {
    slug: "executive",
    metaTitle: "Executive Resume Writer - VP, SVP & Director Level",
    metaDescription:
      "Executive resume writing for senior leaders, VPs, SVPs, and directors competing for $200K+ roles. Founder-led, 90-day interview guarantee.",
    h1: "Executive Resume Writer",
    intro:
      "At VP and SVP level the resume is not selling skills - it is selling business outcomes, scope of P&L, and team scale. Most senior candidates still write like a manager. We fix that.",
    audience:
      "VPs, SVPs, GMs, division heads, and senior directors competing for $200K+ roles in the United States and global markets.",
    priceRange: "$499 - $1,499",
    problems: [
      "The resume reads like a job description, not a track record of decisions.",
      "Scope is vague - &quot;led teams&quot; instead of &quot;led a 42-person product org across three time zones&quot;.",
      "Revenue, P&L, and headcount numbers are buried or missing.",
      "The narrative does not match the seniority being claimed.",
      "LinkedIn is weaker than the resume, so recruiter search never finds you.",
    ],
    approachHeading: "How we write executive resumes",
    approachParagraphs: [
      "Executive resumes are read by three audiences in sequence: a junior recruiter doing a 20-second scan, a hiring manager looking for fit and proof, and ultimately a board or compensation committee deciding on an offer. The same document has to work for all three.",
      "We start with a positioning conversation - what role you are actually competing for, what your three or four signature outcomes are, and what the market currently pays for that kind of operator. Then we build the resume around those outcomes, with scope of responsibility (revenue managed, team size, business unit, geography) attached to every meaningful entry.",
      "The opening summary does most of the conversion work. It states what kind of executive you are, in language a board member would use, and immediately backs it up with two or three concrete proof points. The rest of the document supports that claim.",
    ],
    whatsIncluded: [
      "Executive resume - 2 to 3 pages with senior-level positioning",
      "Executive summary written for board / hiring-committee reading",
      "Achievement-led bullets with revenue, P&L, headcount, and scope",
      "Executive LinkedIn rewrite (About, headline, experience, skills)",
      "Executive cover letter template you can adapt per application",
      "1-hour strategy consultation included on the Executive Brand Suite",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Executive Brand Suite",
      price: "$899",
      blurb: "Built specifically for senior leaders. Includes executive resume, executive LinkedIn, executive cover letter, modern format for hiring panels, and a 1-hour strategy call.",
      href: "/contact?package=Executive%20Brand%20Suite",
    },
    faqs: [
      {
        q: "What makes an executive resume different from a senior manager resume?",
        a: "Three things. First, scope: an executive resume quantifies what you owned (P&L, headcount, business unit, geography). Second, decisions: it shows the calls you made, not just the work that happened. Third, narrative: a senior manager resume lists responsibilities; an executive resume tells a story of operator capability.",
      },
      {
        q: "How long should an executive resume be?",
        a: "Two to three pages is standard in the US for VP / SVP / GM roles. Longer is fine for C-suite if there is substantive content; never pad. Federal executives are an exception - see the federal resume page.",
      },
      {
        q: "Do you handle confidential job searches?",
        a: "Yes. We work directly with you, your documents are not shared, and we can structure the LinkedIn rewrite to be discoverable without telegraphing that you're actively looking.",
      },
      {
        q: "What if I'm transitioning from corporate to a PE-backed or startup role?",
        a: "Common engagement. We reframe corporate scope into the language of operating leverage, growth rate, and capital efficiency that PE and startup boards look for.",
      },
      {
        q: "Is the C-Suite Premium package different from the Executive Brand Suite?",
        a: "Yes. C-Suite Premium is for sitting or aspiring CEOs, CFOs, and founders and includes content strategy support, quarterly LinkedIn refreshes, and 6-month post-delivery support.",
      },
    ],
    relatedSlugs: ["c-suite", "federal", "software-engineer"],
  },

  // ============================================================
  // C-SUITE
  // ============================================================
  {
    slug: "c-suite",
    metaTitle: "C-Suite Resume Writer - CEO, CFO, COO & Founder",
    metaDescription:
      "C-suite and founder resume writing. Built for board-level reading, executive search firms, and PE/VC introductions. 90-day interview guarantee.",
    h1: "C-Suite Resume Writer",
    intro:
      "At the CEO, CFO, and founder level, the resume is less a job application and more a credential document - read by boards, search firms, and investors. It has to carry weight at first glance.",
    audience:
      "Sitting and aspiring CEOs, CFOs, COOs, CMOs, CTOs, division presidents, founders, and consultants positioning for board or operator roles.",
    priceRange: "$1,499",
    problems: [
      "The resume reads like a long-form executive resume - too dense, no clear narrative.",
      "Achievements are scattered instead of organized around two or three thesis statements.",
      "No board-relevant content (governance, capital, M&A, strategic decisions).",
      "LinkedIn does not match the seniority claimed on the resume.",
      "No supporting layer (board bio, one-page summary, executive bio) that recruiters and investors actually request.",
    ],
    approachHeading: "How we write C-suite documents",
    approachParagraphs: [
      "C-suite engagement is a multi-document project, not a resume rewrite. By the time someone is competing for a CEO seat, they often need a resume, a board bio, a one-page executive summary, and a LinkedIn that supports all three. Each document is read by a different audience for a different decision.",
      "We start with three positioning questions: what kind of operator are you, what is your thesis on the role, and what evidence carries the most weight. From there, the resume is organized around two or three signature outcomes - not a chronological list of jobs.",
      "Quarterly LinkedIn support is included because at this level the search is rarely one-and-done. Boards and investors return to your LinkedIn months after the first conversation. The profile needs to hold up as a credibility document over time, not just clear an ATS screen.",
    ],
    whatsIncluded: [
      "C-suite resume - multi-page, narrative-led, board-readable",
      "Executive LinkedIn with content strategy support",
      "Cover letter - used for direct outreach to search firms and boards",
      "Modern CV format for international / hiring-panel use",
      "Two 1-hour strategy sessions during the engagement",
      "6-month support window for adjustments and follow-up rewrites",
      "Quarterly LinkedIn refresh for the first year",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "C-Suite Premium",
      price: "$1,499",
      blurb: "Our highest-tier package - for sitting CEOs/CFOs, founders, and senior board candidates. Includes everything in the Executive Brand Suite plus content strategy, quarterly LinkedIn refreshes, and 6-month post-delivery support.",
      href: "/contact?package=C-Suite%20Premium",
    },
    faqs: [
      {
        q: "Do search firms read the resume or the LinkedIn first?",
        a: "Both. Search firms triangulate. Your LinkedIn is the discovery surface; your resume is the credential document they ask for once you are on a shortlist. The two need to tell the same story.",
      },
      {
        q: "I'm a founder - should I have a resume at all?",
        a: "Yes, especially if you are positioning for board seats, advisory work, or an operator role at another company. A founder's resume has different conventions - it foregrounds outcomes, capital raised, and exits rather than chronological job titles.",
      },
      {
        q: "What's included in the quarterly LinkedIn refresh?",
        a: "Each quarter we review and update your LinkedIn to reflect new outcomes, board appointments, public commentary, and shifts in your positioning. Search firms revisit profiles months apart and notice when nothing has changed.",
      },
      {
        q: "Is there a board bio included?",
        a: "Yes, on request. The standard C-Suite Premium package includes a one-page board bio and a longer executive bio suitable for company websites and investor decks.",
      },
      {
        q: "What's the typical engagement length?",
        a: "Initial documents are delivered in 14-21 days. The 6-month support window covers follow-up rewrites and one quarterly LinkedIn refresh during that period.",
      },
    ],
    relatedSlugs: ["executive", "federal"],
  },

  // ============================================================
  // SOFTWARE ENGINEER - biggest tech category in the US
  // ============================================================
  {
    slug: "software-engineer",
    metaTitle: "Software Engineer Resume Writer - Tech & FAANG",
    metaDescription:
      "Resume writing for software engineers, senior engineers, staff, and engineering leadership. ATS-clean, FAANG-aware, founder-led. 90-day interview guarantee.",
    h1: "Software Engineer Resume Writer",
    intro:
      "Engineering resumes fail for two reasons: they read like a stack list, or they read like a project diary. Recruiters are looking for impact, scope, and decision quality. We write to that.",
    audience:
      "Software engineers, senior engineers, staff engineers, principal engineers, and engineering managers / directors targeting FAANG, fintech, scale-ups, and remote-first US roles.",
    priceRange: "$179 - $899",
    problems: [
      "Resume reads like a tech stack - &quot;Python, Go, Kafka, K8s...&quot; - with no outcome attached.",
      "Bullets describe tasks (&quot;built service X&quot;) instead of impact (&quot;reduced p99 latency from 480ms to 90ms, unblocking the SLA the team had missed for three quarters&quot;).",
      "Scope is invisible - no team size, no traffic numbers, no business context.",
      "Senior engineers get screened as mid-level because the resume reads like a mid-level resume.",
      "LinkedIn says &quot;Software Engineer at X&quot; with no headline differentiation - recruiter search misses you entirely.",
    ],
    approachHeading: "How we write engineering resumes",
    approachParagraphs: [
      "Engineering hiring at competitive US companies - FAANG, top fintech, well-funded startups - is fast and pattern-matched. A recruiter looks for level signal first (staff vs senior vs mid), then domain match (distributed systems, infra, mobile, ML), then proof. If any of the three is unclear, the resume gets passed over.",
      "We rewrite around outcomes that hiring managers can verify. Numbers go on the resume - latency, scale, throughput, revenue impact, headcount you influenced. The system you worked on is described in business terms first, technical terms second. The stack is present but not the headline.",
      "For senior, staff, and principal candidates, scope of influence matters more than lines of code. We surface the decisions you made, the systems you owned, the engineers you mentored, and the cross-team work you led. That's the level signal recruiters and hiring managers are looking for.",
    ],
    whatsIncluded: [
      "ATS-clean resume tuned to your seniority (mid / senior / staff / EM)",
      "Achievement bullets with scale, latency, and business-impact numbers",
      "Skills section that survives keyword screens without looking like a stack list",
      "LinkedIn rewrite that ranks in recruiter search",
      "Cover letter template you can adapt per company",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Pack",
      price: "$349",
      blurb: "Most-popular bundle for mid-career engineers. Premium ATS resume, LinkedIn rewrite, cover letter, 30-day support, and one revision round.",
      href: "/contact?package=Career%20Pack",
    },
    faqs: [
      {
        q: "Do you write resumes that pass FAANG screens?",
        a: "Yes. FAANG companies use both ATS keyword screens and human recruiter triage. We write for both - the resume passes the keyword filter, then converts on the human read.",
      },
      {
        q: "I'm a Staff or Principal engineer. Do you handle that level?",
        a: "Yes. Staff+ resumes need different positioning - scope of influence, technical leadership, cross-team impact, mentoring. The Executive Brand Suite is the right fit for Staff+, EM, and engineering director roles.",
      },
      {
        q: "Can you handle resumes for non-traditional backgrounds (bootcamp, self-taught)?",
        a: "Yes. The positioning is different but the principles are the same. We write the resume to highlight production-grade work, contribution, and outcomes - not where you learned to code.",
      },
      {
        q: "What about LinkedIn for engineers?",
        a: "Critical. Most senior engineering offers in the US start as inbound recruiter outreach. The LinkedIn rewrite is included in every bundle and is often higher-leverage than the resume alone.",
      },
      {
        q: "Do you do ML / AI engineer resumes?",
        a: "Yes. ML positioning is more about the problem you solved (and the metric you moved) than the model architecture you used. We write that way.",
      },
    ],
    relatedSlugs: ["executive", "healthcare", "finance"],
  },

  // ============================================================
  // HEALTHCARE
  // ============================================================
  {
    slug: "healthcare",
    metaTitle: "Healthcare Resume Writer - Nurses, Physicians & Admins",
    metaDescription:
      "Healthcare resume writing for RNs, NPs, physicians, healthcare administrators, and US travel-nurse and locum applications. 90-day interview guarantee.",
    h1: "Healthcare Resume Writer",
    intro:
      "Healthcare hiring in the US sits between two worlds: a strict credentialing process that needs everything documented, and a competitive talent market where the resume still has to sell. We write for both.",
    audience:
      "Registered nurses, nurse practitioners, physicians, PAs, healthcare administrators, hospital operations leaders, and clinical-research professionals targeting US health systems, travel-nurse agencies, and locum positions.",
    priceRange: "$179 - $899",
    problems: [
      "Credentials, certifications, and clinical hours are buried in the resume body instead of being scannable in seconds.",
      "Travel-nurse and locum applications miss specialty-specific competency language the agencies search for.",
      "Healthcare admin resumes read like clinical CVs and lose to candidates who present as operators.",
      "License state, BLS / ACLS / PALS expiry dates, and EMR systems are formatted inconsistently.",
      "No clear differentiation between specialty experience (ICU vs ED vs Med-Surg) and general nursing experience.",
    ],
    approachHeading: "How we write healthcare resumes",
    approachParagraphs: [
      "Healthcare recruiters scan a resume looking for three things in the first ten seconds: are the licenses and certifications current and clearly listed, does the specialty experience match, and is there any leadership or quality-improvement signal beyond patient hours. Everything else is secondary. We surface those three first.",
      "For travel-nurse and locum applications, the credentialing section comes early, formatted exactly the way agency platforms parse it: state, license number format, expiry date, BLS/ACLS/PALS status, charting systems used (Epic, Cerner, MEDITECH). Specialty competencies appear as a separate block, with shift type, patient load, and unit acuity.",
      "For physicians and NPs, the structure is closer to a CV - fellowship, residency, publications if relevant - but the framing is operational: outcomes you contributed to, protocols you helped design, populations you served. For healthcare administrators, we drop the clinical-CV format entirely and write a business resume: budget owned, FTE managed, quality metrics moved.",
    ],
    whatsIncluded: [
      "Healthcare resume with credentials, licenses, and certifications front-loaded",
      "Specialty-specific competency block (unit acuity, patient load, charting systems)",
      "Travel-nurse / locum agency-ready format",
      "Healthcare-admin track for non-clinical leadership roles",
      "LinkedIn rewrite optimized for healthcare recruiter search",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Pack",
      price: "$349",
      blurb: "Right fit for most US healthcare professionals - premium resume, LinkedIn rewrite, cover letter, and 30-day support.",
      href: "/contact?package=Career%20Pack",
    },
    faqs: [
      {
        q: "Do you write travel-nurse resumes?",
        a: "Yes. Travel-nurse resumes have specific conventions - license-by-state listing, agency-ready format, unit specialty and acuity detail. We follow them.",
      },
      {
        q: "Can you write physician CVs?",
        a: "Yes. Physician CVs follow academic-CV conventions (training, board certification, publications, fellowships). The framing is operational where it can be - outcomes, populations, protocols - to support the application.",
      },
      {
        q: "I'm a clinician moving into healthcare administration. Can you reposition my resume?",
        a: "Yes. This is one of the most common engagements in healthcare. We translate clinical experience into operational language - budget, throughput, quality metrics, team leadership - so the resume reads as an administrator's resume, not a nurse's resume.",
      },
      {
        q: "Do you handle US licensing and visa-related applications?",
        a: "The resume side, yes. We do not provide immigration advice or NCLEX / boards prep, but we structure the resume so credentials and visa eligibility (where relevant) are clear to a US healthcare employer.",
      },
      {
        q: "What about LinkedIn for healthcare roles?",
        a: "Increasingly important, especially for travel nurses (agencies search LinkedIn), NPs, and healthcare admins. Included in every bundle.",
      },
    ],
    relatedSlugs: ["executive", "software-engineer", "finance"],
  },

  // ============================================================
  // FINANCE
  // ============================================================
  {
    slug: "finance",
    metaTitle: "Finance Resume Writer - IB, PE, Asset Management & FP&A",
    metaDescription:
      "Finance resume writing for investment banking, private equity, asset management, FP&A, and corporate finance roles in the United States.",
    h1: "Finance Resume Writer",
    intro:
      "Finance resumes get rejected for structural reasons more than experience reasons. Deal sheets in the wrong place, no transaction sizing, no closing-team scope - and the candidate looks junior to a senior reader. We fix that.",
    audience:
      "Investment banking analysts and associates, private-equity professionals, asset-management and hedge-fund candidates, FP&A and corporate-finance roles, CFOs, and finance transformation leaders at US firms.",
    priceRange: "$349 - $1,499",
    problems: [
      "Deal experience is described as &quot;supported transaction&quot; instead of with size, role, and outcome.",
      "No clean deal sheet - the most-asked-for document in IB / PE recruiting - is included.",
      "Senior finance candidates write like analysts because their resume hasn't been updated since their analyst years.",
      "FP&A resumes describe processes (&quot;managed forecasting cycle&quot;) instead of impact (&quot;cut quarterly close from 12 to 5 business days&quot;).",
      "LinkedIn doesn't show deal closure markers (vesting milestones, board observerships, exits), so recruiter outreach misses you.",
    ],
    approachHeading: "How we write finance resumes",
    approachParagraphs: [
      "Finance hiring is heavily pattern-matched. Investment banking, private equity, and hedge-fund recruiters look for very specific signals: transaction sizing, role on the deal team, sector, and outcome. Anything that doesn't have a number next to it gets skimmed past. We write every bullet to those four signals.",
      "For analyst-to-associate and associate-to-VP transitions, the resume needs to read like the next-level role you want, not the role you currently hold. Bullets that say &quot;built model&quot; get rewritten as &quot;led modeling workstream for a $1.4B carve-out, working directly with the lead partner.&quot; The work is the same; the framing makes the difference.",
      "For senior finance and CFO candidates, the resume shifts toward operating outcomes - capital raised, IPO or M&A involvement, audit and SOX leadership, FP&A transformation, treasury and capital-allocation decisions. The deal sheet becomes a separate appendix.",
    ],
    whatsIncluded: [
      "Finance resume with deal sizing, role on deal team, and outcome attached to every bullet",
      "Optional separate deal sheet (IB / PE candidates)",
      "FP&A / corporate finance resumes framed around operating impact",
      "Senior / CFO positioning with capital, M&A, and audit content",
      "LinkedIn rewrite tuned to finance recruiter search behavior",
      "Cover letter template adaptable per firm and per role type",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Pack",
      price: "$349",
      blurb: "Most popular for analysts, associates, and FP&A. Senior finance and CFO candidates should look at the Executive Brand Suite ($899) or C-Suite Premium ($1,499).",
      href: "/contact?package=Career%20Pack",
    },
    faqs: [
      {
        q: "Do you write deal sheets?",
        a: "Yes. For IB and PE candidates we include a separate one-page deal sheet on request - sized transactions, role on the team, sector, outcome. It's the document interviewers always ask for.",
      },
      {
        q: "Are you familiar with the FAQ format of bulge-bracket and PE recruiting?",
        a: "Yes. Resume format expectations differ between IB (one page, dense, deal-led), PE (slightly more narrative, thesis-driven), and hedge funds (idea generation, P&L attribution where possible). We adjust accordingly.",
      },
      {
        q: "Can you handle CFO and senior finance roles?",
        a: "Yes. CFO resumes belong in the Executive Brand Suite or C-Suite Premium tier - they're less about deal sheets and more about capital, audit, FP&A transformation, and board-facing work.",
      },
      {
        q: "I'm moving from corporate finance to PE or VC. Can you reposition?",
        a: "Yes - common transition. Corporate FP&A work gets reframed as operating expertise that PE platforms value, and we surface any deal-adjacent work you've done (M&A integration, due diligence support, fundraising).",
      },
      {
        q: "What about LinkedIn for finance?",
        a: "Finance recruiters use LinkedIn heavily for sourcing. The headline and the experience section need to signal seniority and sector at a glance.",
      },
    ],
    relatedSlugs: ["executive", "c-suite", "software-engineer"],
  },

  // ============================================================
  // MILITARY TO CIVILIAN
  // ============================================================
  {
    slug: "military-to-civilian",
    metaTitle: "Military to Civilian Resume Writer - Veteran Transition",
    metaDescription:
      "Military-to-civilian resume writing for transitioning service members. We translate MOS / AFSC / rating into civilian language. 90-day interview guarantee.",
    h1: "Military to Civilian Resume Writer",
    intro:
      "Civilian recruiters do not know what a Battalion S-3 does, what TS/SCI means in practice, or what scope sits behind a senior NCO billet. The translation problem is real. We solve it.",
    audience:
      "Service members and recent veterans transitioning from the US Army, Navy, Air Force, Marines, Coast Guard, or Space Force into civilian roles - federal and private-sector.",
    priceRange: "$179 - $499",
    problems: [
      "Civilian recruiters skim past MOS / AFSC / NEC / rating codes because they don't know what they mean.",
      "Scope is invisible - a service member who managed a 60-person platoon and a $4M equipment account looks junior on a resume because none of that is on the page.",
      "Acronyms, base names, and unit citations dominate the resume; civilian context is missing.",
      "Security clearance, deployments, and combat / non-combat experience are placed where civilian HR doesn't expect to find them.",
      "Resume looks federal-style on a private-sector application, or private-sector-style on a federal application.",
    ],
    approachHeading: "How we write military transition resumes",
    approachParagraphs: [
      "The translation has to be deliberate. A service member's day-to-day responsibilities - operations planning, logistics, personnel management, training pipelines, budget - map cleanly to civilian operations and project-management vocabulary. We write the resume in that vocabulary first, then note the military role for context.",
      "Scope gets surfaced in numbers: people supervised, equipment value, mission tempo, multinational coordination. A combat-arms officer with multiple deployments often has more direct operational responsibility than a civilian VP - the resume needs to show that without the reader needing a glossary.",
      "Two versions are often delivered: one tuned for federal civilian applications (USAJOBS-ready, veterans' preference, longer format) and one tuned for the private sector (shorter, achievement-led, fewer acronyms). Many transitioning veterans need both.",
    ],
    whatsIncluded: [
      "Civilian-translated resume - MOS / AFSC / billet rewritten in private-sector language",
      "Scope surfaced: personnel, budget, equipment, tempo, geography",
      "Security-clearance formatting (TS, TS/SCI, Q, etc.)",
      "Optional second version tuned for federal civilian applications",
      "LinkedIn rewrite that civilian recruiters can actually read",
      "Cover letter framework for civilian outreach",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Move Pack",
      price: "$499",
      blurb: "Best fit for transitioning service members - includes both a civilian-translated resume and a second federal-ready version, plus LinkedIn and two cover-letter versions.",
      href: "/contact?package=Career%20Move%20Pack",
    },
    faqs: [
      {
        q: "I'm still on active duty. Should I wait until I separate to start?",
        a: "No. Most successful transitions start 6-12 months before separation. Getting the resume and LinkedIn done early lets you start networking, applying, and interviewing while you still have the structure of active duty.",
      },
      {
        q: "Do you handle clearance-required roles?",
        a: "Yes. Security clearance is one of the strongest civilian-market signals you have. We format it clearly and place it where civilian HR looks for it.",
      },
      {
        q: "Can you handle senior NCO and officer transitions equally?",
        a: "Yes. Senior NCOs translate well into operations, training, and field-management roles. Officers often translate into program management, consulting, and operations leadership. The translation pattern is different but the principles are the same.",
      },
      {
        q: "What about federal civilian transitions?",
        a: "Federal civilian applications need a federal-style resume (3-8 pages, USAJOBS-ready). We deliver that as an optional second version in the Career Move Pack. See the federal resume page for details.",
      },
      {
        q: "Do you work with the DoD SkillBridge program?",
        a: "Yes. SkillBridge candidates often need a transition-ready resume for the host company and a clean civilian LinkedIn before the program starts. Both are covered.",
      },
    ],
    relatedSlugs: ["federal", "executive", "software-engineer"],
  },

  // ============================================================
  // MARKETING
  // ============================================================
  {
    slug: "marketing",
    metaTitle: "Marketing Resume Writer - Brand, Growth & Performance",
    metaDescription:
      "Marketing resume writing for brand, growth, performance, content, and product-marketing roles. Outcomes-led, ATS-clean. 90-day interview guarantee.",
    h1: "Marketing Resume Writer",
    intro:
      "Marketing resumes either read as &quot;ran campaigns&quot; or as a list of platforms - neither helps a hiring manager assess fit. We rewrite around what actually moved.",
    audience:
      "Brand marketers, growth and performance marketers, product marketers, content marketers, and marketing leadership (Director, VP, CMO) at US-based companies.",
    priceRange: "$179 - $1,499",
    problems: [
      "Resume reads like a tool list - &quot;HubSpot, Marketo, Google Ads, GA4&quot; - instead of outcomes those tools produced.",
      "Campaign work is described, not quantified - no CPA, no CAC, no ROAS, no revenue.",
      "The candidate is positioned as &quot;a marketer&quot; in general when the market is hiring for specific archetypes (brand vs growth vs PMM vs content).",
      "Senior marketers and CMOs let their resume read like a director's, weakening their case.",
      "LinkedIn doesn't carry the same outcomes the resume claims, so the inbound flow is weak.",
    ],
    approachHeading: "How we write marketing resumes",
    approachParagraphs: [
      "Modern marketing is fragmented enough that &quot;marketer&quot; isn't a useful self-description. Brand, growth, performance, lifecycle, content, and product marketing each have different hiring conventions. The first job of the resume is to position you clearly within one or two of those archetypes.",
      "Then the outcomes. Every bullet gets a number - pipeline generated, payback period, ARR influence, CAC movement, LTV/CAC, engagement rate, brand-lift study results, content-driven inbound, retention lift. Without numbers, marketing experience looks like effort, not impact.",
      "For senior marketing and CMO candidates, the framing shifts. The resume is no longer a campaign list; it's about how you architected the marketing function - team, budget, channel mix, brand-vs-performance balance, attribution maturity. We write accordingly.",
    ],
    whatsIncluded: [
      "Marketing resume positioned to a specific archetype (brand / growth / PMM / content / leadership)",
      "Outcome-led bullets with the metrics hiring managers ask about",
      "LinkedIn rewrite for marketing-recruiter search",
      "Cover letter framework adaptable per company stage and ICP",
      "Senior / CMO positioning available on the Executive Brand Suite",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Pack",
      price: "$349",
      blurb: "Most marketers land here. Senior leaders (Director / VP / CMO) should look at the Executive Brand Suite.",
      href: "/contact?package=Career%20Pack",
    },
    faqs: [
      {
        q: "Brand vs growth - does the archetype really matter?",
        a: "Yes. Brand teams hire brand-shaped resumes; growth teams hire growth-shaped resumes. Trying to be both usually reads as neither. The first thing we do is establish which lane you're targeting.",
      },
      {
        q: "What about product marketing?",
        a: "PMM is one of the fastest-growing roles in B2B SaaS. PMM resumes need to lead with positioning, launches, win-rate impact, and competitive intelligence - not campaign volume.",
      },
      {
        q: "How do I show campaign results when I'm under NDA?",
        a: "Use directional metrics - &quot;reduced CPA by 60% on a $1M+ monthly spend&quot; without naming the brand. We write resumes that respect confidentiality without losing the impact signal.",
      },
      {
        q: "Do you write CMO resumes?",
        a: "Yes - CMO and VP Marketing belong in the Executive Brand Suite or C-Suite Premium tier. Different framing, different document length, different audience.",
      },
      {
        q: "How important is LinkedIn for marketers?",
        a: "Critical. Marketers are often hired through inbound recruiter outreach and through their own networks. A weak LinkedIn costs you both channels.",
      },
    ],
    relatedSlugs: ["executive", "software-engineer", "finance"],
  },

  // ============================================================
  // SALES
  // ============================================================
  {
    slug: "sales",
    metaTitle: "Sales Resume Writer - AE, AM, SDR & Sales Leadership",
    metaDescription:
      "Sales resume writing for AEs, AMs, SDRs, sales managers, and VPs of Sales. Quota attainment, deal size, and pipeline numbers front and center.",
    h1: "Sales Resume Writer",
    intro:
      "A sales resume without numbers is a sales resume that doesn't get hired. Quota, attainment, ACV, deal size, ramp time - these are the four or five numbers a sales recruiter looks for first.",
    audience:
      "AEs, senior AEs, AMs, SDRs/BDRs, sales managers, sales directors, and VPs of Sales / CROs at US SaaS, fintech, and enterprise companies.",
    priceRange: "$179 - $1,499",
    problems: [
      "Resume lists what you sold but not quota, attainment, or quota-to-attainment ratio.",
      "Deal size and ACV are missing - recruiters can't tell if you're SMB, mid-market, or enterprise.",
      "Pipeline generation, ramp time, and win rate are nowhere on the page.",
      "Sales-leadership resumes describe team management without team size, quota, or attainment.",
      "LinkedIn headline says &quot;Account Executive&quot; with no segment, no industry, no number - invisible in recruiter search.",
    ],
    approachHeading: "How we write sales resumes",
    approachParagraphs: [
      "Every sales role has four or five numbers that decide whether your resume gets a callback: quota, attainment, average deal size, sales cycle, and win rate. We surface all of them, in the first half of the document, in language that maps cleanly to the company you're applying to.",
      "Segment matters. SMB, mid-market, and enterprise sales are different jobs with different conventions. A resume that says &quot;closed deals up to $500K ACV&quot; reads completely differently to an enterprise recruiter than to an SMB recruiter. We position you to the segment you're targeting.",
      "For sales-leadership candidates (Director, VP, CRO), the framing changes from individual attainment to team performance: team quota, team attainment, ramp-time improvement, top-of-funnel build-out, comp-plan design, and territory architecture. The resume reads as an operator's resume, not a quota-carrier's.",
    ],
    whatsIncluded: [
      "Sales resume with quota, attainment, ACV, segment, and win-rate numbers",
      "Positioning to a specific sales segment (SMB / mid-market / enterprise)",
      "Sales-leadership track for Director / VP / CRO candidates",
      "LinkedIn rewrite optimized for sales-recruiter search",
      "Cover letter framework you can adapt per company",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Pack",
      price: "$349",
      blurb: "Right fit for individual contributors. Sales leadership (Director / VP / CRO) should consider the Executive Brand Suite.",
      href: "/contact?package=Career%20Pack",
    },
    faqs: [
      {
        q: "I'm under NDA on my numbers. Can the resume still work?",
        a: "Yes. Directional metrics - &quot;115% of quota in a $1.2M annual carry&quot; or &quot;top 8% of global team&quot; - work without disclosing exact figures. We respect NDAs without losing the impact signal.",
      },
      {
        q: "Do you handle SDR / BDR resumes?",
        a: "Yes. SDR resumes use different metrics - meetings booked, pipeline generated, opp-to-close conversion, ramp time. We frame around those, not quota.",
      },
      {
        q: "Can you reposition me from SMB to mid-market or enterprise?",
        a: "Possible, with the right experience to support the move. We surface enterprise-relevant patterns in your past work - complex deals, multi-stakeholder cycles, technical depth - to make the segment shift defensible.",
      },
      {
        q: "Do you write sales-leadership resumes?",
        a: "Yes - sales Director, VP Sales, and CRO. These belong in the Executive Brand Suite tier. Framing shifts from individual attainment to team and territory architecture.",
      },
      {
        q: "How important is LinkedIn for sales?",
        a: "Very. Inbound recruiter outreach is one of the biggest sourcing channels for senior sales roles. A weak LinkedIn shuts that channel off.",
      },
    ],
    relatedSlugs: ["marketing", "executive", "finance"],
  },

  // ============================================================
  // MBA
  // ============================================================
  {
    slug: "mba",
    metaTitle: "MBA Resume Writer - Pre-MBA, MBA & Post-MBA Roles",
    metaDescription:
      "MBA resume writing for top-tier business school applications, internship recruiting, and post-MBA placements in consulting, banking, and PE.",
    h1: "MBA Resume Writer",
    intro:
      "MBA recruiting compresses three resume rewrites into eighteen months: the school application, the internship recruit, and the full-time recruit. Each needs different framing. We handle all three.",
    audience:
      "Pre-MBA candidates applying to top US programs, current MBAs recruiting for internships and full-time roles, and post-MBA professionals positioning into consulting, banking, PE, VC, product, or industry leadership.",
    priceRange: "$349 - $899",
    problems: [
      "Pre-MBA resume reads like a regular resume - admissions committees expect a specific format and structure.",
      "Internship recruiting resume isn't differentiated from the application resume, costing interviews at McKinsey, BCG, Bain, GS, MS, JPM.",
      "Post-MBA resume doesn't reflect the MBA itself as a credential - just bolted on at the top.",
      "Outcomes are missing - bullets describe responsibilities instead of decisions and impact.",
      "Career switchers (industry to consulting, military to PE, engineering to product) don't reframe well enough to compete.",
    ],
    approachHeading: "How we write MBA resumes",
    approachParagraphs: [
      "MBA admissions resumes follow a specific one-page format that top US programs (HBS, Stanford, Wharton, Booth, Kellogg, MIT, Columbia, Tuck, Haas) expect: chronological, business-school-style, with a clear demonstration of impact, leadership, and trajectory. We write to that convention.",
      "For internship and full-time recruiting on campus, the resume gets reworked again - this time tuned to the firm category. Consulting resumes (McKinsey, BCG, Bain) emphasize structured problem-solving, ambiguity, and quantitative depth. Banking and PE resumes emphasize deal exposure, modeling, and scope. Tech / product resumes emphasize product judgment and metric movement. Each gets its own framing.",
      "Post-MBA, the framing shifts again. The MBA stops being a degree and starts being a credential that signals general management capability. The resume needs to integrate it accordingly - pre-MBA work, the MBA itself, and post-MBA work read as one coherent operator story.",
    ],
    whatsIncluded: [
      "Pre-MBA application resume formatted for top US programs",
      "MBA recruiting resume tuned per firm category (consulting / banking / PE / tech)",
      "Post-MBA resume that integrates the degree as operator credibility",
      "Cover letter framework adapted per recruiting cycle",
      "LinkedIn rewrite for MBA recruiter visibility",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Move Pack",
      price: "$499",
      blurb: "Best fit for MBA candidates because the cycle requires two or three resume versions. Includes a tailored resume, modern format, LinkedIn rewrite, and two cover-letter versions.",
      href: "/contact?package=Career%20Move%20Pack",
    },
    faqs: [
      {
        q: "What format do top US MBA programs expect?",
        a: "One page, chronological, business-school standard. Most top US programs publish a sample resume in their application materials - we follow that convention strictly while writing the content to your story.",
      },
      {
        q: "Can you handle consulting recruiting resumes for McKinsey, BCG, Bain?",
        a: "Yes. MBB resumes follow strong conventions - quantitative scope, ambiguity navigation, structured problem-solving. We write to those.",
      },
      {
        q: "What about banking and PE on campus?",
        a: "Yes. Banking resumes emphasize deal exposure and modeling. PE resumes emphasize investment thesis, due diligence work, and operating exposure. We've covered both for years.",
      },
      {
        q: "I'm a career switcher (e.g. engineering to product, military to consulting). Can you reposition me?",
        a: "Common engagement. We surface transferable patterns - quantitative depth, ambiguity, leadership, customer impact - and frame the existing experience in the language of the target career.",
      },
      {
        q: "Do you work with applicants to non-US MBA programs (INSEAD, LBS, IESE)?",
        a: "Yes, though the conventions are slightly different. We adapt to the program - for the US you'll typically see HBS-style; for European programs the format flexes a little but the underlying structure holds.",
      },
    ],
    relatedSlugs: ["finance", "executive", "marketing"],
  },
];

/**
 * Lookup helper. Returns the page or null.
 */
export function getIndustryPage(slug: string): IndustryPage | null {
  return industryPages.find((p) => p.slug === slug) ?? null;
}
