export type CareerStagePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  audience: string;
  problems: string[];
  approachHeading: string;
  approachParagraphs: string[];
  whatsIncluded: string[];
  recommendedPackage: {
    name: string;
    price: string;
    blurb: string;
    href: string;
  };
  faqs: Array<{ q: string; a: string }>;
};

export const careerStagePages: CareerStagePage[] = [
  {
    slug: "entry-level",
    metaTitle: "Entry-Level Resume Writer - Recent Grads & First Jobs",
    metaDescription:
      "Entry-level resume writing for recent graduates and first US jobs. ATS-clean, internship-aware, founder-led. 90-day interview guarantee.",
    h1: "Entry-Level Resume Writer",
    intro:
      "Early-career resumes get rejected for two reasons: no proof, or no positioning. We solve both - surfacing what you actually did and naming what you're competing for.",
    audience:
      "Recent US graduates, current seniors recruiting for full-time roles, and early-career professionals (0-2 years of work experience) targeting first or second roles in the US market.",
    problems: [
      "Resume reads like a transcript - coursework listed, projects buried, internships under-described.",
      "No clear &quot;positioning&quot; - the reader doesn't know what role you're competing for.",
      "Internship work is described as &quot;assisted with&quot; instead of with the actual scope and outcome.",
      "Extracurriculars and leadership are missing or under-leveraged.",
      "Resume formatting fails ATS screens at large US employers before a human ever sees it.",
    ],
    approachHeading: "How we write entry-level resumes",
    approachParagraphs: [
      "Early-career resumes have to compete with thousands of similar resumes that all show the same degree, the same GPA range, and the same one or two internships. Your edge isn't experience - it's positioning and proof.",
      "We start with the role you're actually targeting. A grad targeting investment banking at Goldman, a grad targeting a Product Manager APM program at Google, and a grad targeting a federal pathway at the GAO write three completely different resumes. Pick the lane first, then the resume.",
      "Then we surface proof. Internships get rewritten with the same achievement structure as a senior resume - scope, action, outcome, metric. Projects get framed in production terms (&quot;built and deployed&quot; not &quot;built&quot;). Leadership and extracurriculars get quantified.",
    ],
    whatsIncluded: [
      "One-page ATS-clean resume tuned to your target role",
      "Internship and project bullets rewritten with scope and outcome",
      "Skills, certifications, and academic distinctions placed correctly for entry-level US screens",
      "LinkedIn profile rewrite that helps recruiter outreach",
      "Cover letter framework for your target lane",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Starter Pack",
      price: "$179",
      blurb: "Built for graduates and early-career candidates. Includes the ATS resume, cover letter, LinkedIn rewrite, and 7-day delivery.",
      href: "/contact?package=Starter%20Pack",
    },
    faqs: [
      {
        q: "I don't have much work experience. What goes on the resume?",
        a: "More than you think. Internships, capstone or final-year projects, leadership in clubs and organizations, paid part-time work, research roles, hackathons, and volunteer work all count if framed with scope and outcome. We write the resume around what you actually did, not what you wish you had done.",
      },
      {
        q: "Should I include my GPA?",
        a: "If it's 3.5+ at a competitive US program, yes - especially for consulting, banking, and tech. Below that, leave it off and lean on stronger signals (projects, internships, leadership). For non-US degrees, we recommend including class rank or equivalent only when it helps.",
      },
      {
        q: "How long should an entry-level resume be?",
        a: "One page. Always. Federal entry-level applications are the exception (longer is expected) - see the federal resume page.",
      },
      {
        q: "Is the Starter Pack enough, or do I need a bigger package?",
        a: "The Starter Pack is right for most graduates. If you're targeting MBB consulting, top-tier banking, or a hyper-competitive APM program, the Career Pack ($349) is worth the upgrade for the 30-day support window and extra revision round.",
      },
      {
        q: "Does the 90-day guarantee apply to entry-level resumes?",
        a: "Yes. Every package, every career stage. Full terms on the refund policy page.",
      },
    ],
  },
  {
    slug: "mid-career",
    metaTitle: "Mid-Career Resume Writer - 3 to 10 Years Experience",
    metaDescription:
      "Mid-career resume writing for US professionals with 3-10 years of experience. Achievement-led, ATS-clean. 90-day interview guarantee.",
    h1: "Mid-Career Resume Writer",
    intro:
      "Mid-career is the slot where most resumes get stuck - too senior for entry-level patterns, not senior enough to read as a leader. We rewrite for the role you're actually competing for, not the one you're leaving.",
    audience:
      "US professionals with 3-10 years of experience targeting mid-level individual-contributor roles, first-line management roles, or specialist tracks.",
    problems: [
      "Resume reads like a list of responsibilities, not a track record of impact.",
      "The positioning hasn't kept up with your career - you're writing as the candidate you were three years ago.",
      "Outcomes are missing or vague (&quot;improved performance&quot; instead of a number).",
      "LinkedIn says the same thing as the resume but worse, costing inbound recruiter outreach.",
      "Career changes (industry, function, geography) read as gaps because the reframing is missing.",
    ],
    approachHeading: "How we write mid-career resumes",
    approachParagraphs: [
      "Mid-career resumes have to do three things at once. They need to show seniority growth (you're not where you started), they need to surface measurable impact (the work, in numbers), and they need to position you for the next move - not the last one.",
      "We start with the target role. The resume is rewritten as if you're already in that role, looking back at your past work for the evidence that you can do it. Bullets get the achievement structure: situation, action, outcome, metric. Every entry shows scope.",
      "If there's a transition involved - industry change, function change, geography change - the reframing happens here. We surface the transferable patterns and write the resume in the vocabulary of the destination, not the origin.",
    ],
    whatsIncluded: [
      "Mid-career resume - 1 to 2 pages, achievement-led",
      "Bullets rewritten with scope, action, outcome, and metric",
      "Positioning aligned to your target role, not your last role",
      "LinkedIn rewrite optimized for recruiter search",
      "Cover letter template adaptable per company",
      "Optional positioning for career changes (industry / function / geography)",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Pack",
      price: "$349",
      blurb: "Our most-popular package. Built for mid-career professionals - premium ATS resume, LinkedIn rewrite, cover letter, 30-day support, 1 round of revisions.",
      href: "/contact?package=Career%20Pack",
    },
    faqs: [
      {
        q: "I'm changing industries. Can the resume still work?",
        a: "Yes. Industry changes are one of the most common mid-career engagements. We surface transferable patterns - quantitative depth, ambiguity, leadership, customer impact, scope - and frame the existing experience in the vocabulary of the destination industry.",
      },
      {
        q: "How long should a mid-career resume be?",
        a: "One or two pages, depending on your experience and target role. We default to one page unless the role explicitly calls for more (federal, academic, some consulting).",
      },
      {
        q: "What if I have a gap in employment?",
        a: "Gaps are framable. We address them directly if needed - caregiving, layoff, sabbatical, education - and place the surrounding work to make the gap a non-issue rather than a question mark.",
      },
      {
        q: "Should I include a summary at the top?",
        a: "Usually yes for mid-career. A two- or three-line summary that names what you do and the value you bring earns more reader attention than a list of skills. We write it.",
      },
      {
        q: "Is the Career Pack enough, or do I need more?",
        a: "Career Pack is right for most mid-career candidates. If you're moving across borders or changing markets, the Career Move Pack ($499) is the upgrade - it includes a market-specific second resume version.",
      },
    ],
  },
  {
    slug: "executive",
    metaTitle: "Executive-Level Resume Writer - VP, SVP, Director",
    metaDescription:
      "Senior leadership resume writing for VP, SVP, Director, and GM candidates in the US. Founder-led, 90-day interview guarantee.",
    h1: "Executive-Level Resume Writer",
    intro:
      "At Director, VP, and SVP level the resume sells operator capability - scope of P&L, headcount, business unit. Most senior candidates still write like a manager. We fix that.",
    audience:
      "Directors, Senior Directors, VPs, SVPs, GMs, division heads, and business-unit leaders in the US, competing for $200K+ roles.",
    problems: [
      "Resume reads like a long-form mid-career resume - same structure, just more bullets.",
      "Scope is vague. &quot;Led teams&quot; instead of &quot;led a 60-person engineering org across three regions.&quot;",
      "Revenue, P&L, headcount, and budget numbers aren't on the page.",
      "Summary at the top is generic - could belong to any senior candidate.",
      "LinkedIn lags the resume, so recruiter search misses you entirely.",
    ],
    approachHeading: "How we write executive-level resumes",
    approachParagraphs: [
      "An executive-level resume isn't a longer mid-career resume. It's a different document, read by a different audience, for a different decision. Recruiters, hiring managers, and (increasingly) boards or committees read it. The framing has to work for all three.",
      "We start with positioning. What kind of operator are you? What are your three or four signature outcomes? What does the market currently pay for that profile? Then the resume gets built around those answers - with scope of responsibility (revenue, headcount, geography, business unit) attached to every meaningful entry.",
      "The opening summary does most of the conversion work at this level. It states what kind of executive you are, in language a board would use, and immediately backs it up with two or three concrete proofs. The rest of the document supports that claim.",
    ],
    whatsIncluded: [
      "Executive-level resume - 2 to 3 pages with senior positioning",
      "Executive summary written for board / hiring-committee reading",
      "Bullets with revenue, P&L, headcount, and scope numbers",
      "Executive LinkedIn rewrite (About, headline, experience, skills)",
      "Executive cover letter template you can adapt per role",
      "1-hour strategy consultation on the Executive Brand Suite",
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
        q: "How long should an executive-level resume be?",
        a: "Two to three pages is standard in the US for VP / SVP / GM / Director level. Federal executive is an exception - see the federal resume page.",
      },
      {
        q: "I'm doing a confidential search. Can the engagement stay private?",
        a: "Yes. We work directly with you, your documents are never shared, and we can structure the LinkedIn rewrite to be discoverable to recruiters without telegraphing that you're actively looking.",
      },
      {
        q: "Can you handle transitions into PE-backed or startup operator roles?",
        a: "Yes. We reframe corporate scope into the language of operating leverage, growth rate, and capital efficiency that PE and startup boards look for.",
      },
      {
        q: "Should I still have a cover letter at this level?",
        a: "Yes - for direct outreach to search firms, board chairs, and CEO peers. The cover letter is less &quot;application document&quot; and more &quot;networking introduction.&quot; We write a flexible template.",
      },
      {
        q: "Is the Executive Brand Suite or C-Suite Premium right for me?",
        a: "Executive Brand Suite ($899) is right for Director / VP / SVP / GM. C-Suite Premium ($1,499) is right for sitting or aspiring CEOs, CFOs, COOs, and founders. The C-Suite tier adds content strategy and a 6-month support window.",
      },
    ],
  },
  {
    slug: "career-changer",
    metaTitle: "Career Changer Resume Writer - Industry & Function Pivots",
    metaDescription:
      "Resume writing for US career changers - industry pivots, function changes, post-MBA shifts. Reframing-first approach. 90-day interview guarantee.",
    h1: "Career Changer Resume Writer",
    intro:
      "Career-change resumes fail because they read like a history book - the past is loud, the future is invisible. We rewrite around where you're going, then back-fill the past with the patterns that prove you can get there.",
    audience:
      "US professionals making a deliberate change - industry to industry, function to function, military to civilian, corporate to startup, post-MBA pivots, or moves into senior roles from adjacent disciplines.",
    problems: [
      "Resume reads as your current job, not your target role.",
      "Transferable skills are buried in past responsibilities, not surfaced as evidence.",
      "Vocabulary belongs to the origin industry, not the destination industry.",
      "Hiring managers in the new field can't tell why you're credible - the resume forces them to do the translation work.",
      "LinkedIn still positions you as your old role, so inbound search never finds you for the new one.",
    ],
    approachHeading: "How we write career-changer resumes",
    approachParagraphs: [
      "Reframing has to be deliberate, not subtle. The summary at the top of the resume names the destination role explicitly - &quot;Product manager bringing 8 years of engineering and customer-research experience&quot; reads differently from a resume that lists your last engineering job at the top and leaves the reader to infer the move.",
      "Then we audit the past for transferable patterns. Quantitative depth, ambiguity navigation, stakeholder management, customer impact, operating outcomes - these are the patterns that translate across industries and functions. Every bullet gets rewritten to surface one of those, in the vocabulary of the destination.",
      "Origin-industry jargon gets stripped or translated. If the destination industry uses different language for the same thing - &quot;sprint planning&quot; vs &quot;operations planning,&quot; &quot;customer&quot; vs &quot;client,&quot; &quot;product&quot; vs &quot;program&quot; - the resume speaks the destination's language, not yours.",
    ],
    whatsIncluded: [
      "Career-changer resume - reframed for the destination role",
      "Summary written to name the target role explicitly",
      "Bullets rewritten to surface transferable patterns",
      "Vocabulary translated to the destination industry / function",
      "LinkedIn rewrite that supports inbound recruiter outreach in the new field",
      "Cover letter template that addresses the change directly and confidently",
      "90-day interview guarantee",
    ],
    recommendedPackage: {
      name: "Career Move Pack",
      price: "$499",
      blurb: "Built specifically for career changers - includes a target-market resume, a modern CV format for cross-context applications, LinkedIn rewrite, and two cover-letter versions for different angles of the same pivot.",
      href: "/contact?package=Career%20Move%20Pack",
    },
    faqs: [
      {
        q: "I have no direct experience in the new field. Is the change still possible?",
        a: "Yes, with the right reframing. Most successful career changes are built on transferable patterns - quantitative depth, ambiguity, leadership, customer outcomes - not direct experience. We surface those patterns and write the resume in the destination's vocabulary.",
      },
      {
        q: "Should I address the change in a cover letter or let the resume do it?",
        a: "Both. The resume does the heavy positioning work; the cover letter addresses the change directly in two or three sentences (&quot;I'm making a deliberate move from X to Y, here's why, here's why I'll be good at it&quot;). The cover letter saves you from having to explain the change in every initial recruiter conversation.",
      },
      {
        q: "What about LinkedIn - should I update it before the resume is ready?",
        a: "Update them together. A LinkedIn that says one thing and a resume that says another reads as confusion. We deliver both in the same engagement.",
      },
      {
        q: "I'm military transitioning to civilian. Is that the same as a career change?",
        a: "Same principle, dedicated page. See the Military to Civilian resume page for the specific patterns and translation work that applies.",
      },
      {
        q: "I'm post-MBA pivoting from consulting to industry (or industry to consulting). Same template?",
        a: "Similar principles, slightly different framing. See the MBA resume page for post-MBA-specific reframing patterns.",
      },
    ],
  },
];

export function getCareerStagePage(slug: string): CareerStagePage | null {
  return careerStagePages.find((p) => p.slug === slug) ?? null;
}
