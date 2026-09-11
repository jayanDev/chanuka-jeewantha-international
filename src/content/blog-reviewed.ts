import type { BlogPost, BlogSection } from "./blog-posts";

type Revision = Pick<BlogPost, "title" | "excerpt" | "content" | "sections">;
const section = (heading: string, paragraphs: string[], bullets?: string[]): BlogSection => ({ heading, paragraphs, bullets });

// Individually reviewed replacements for pages prioritised in the supplied GSC export.
export const reviewedArticles: Record<string, Revision> = {
  "what-is-a-cv": {
    title: "What Is a CV? Meaning, Sections and CV vs Resume",
    excerpt: "CV means curriculum vitae. Learn how a job-application CV differs from a US academic CV, what to include and when to use a resume.",
    content: "A CV, short for curriculum vitae, summarises your education, experience and relevant skills. Its meaning depends on the application: in the UK and many other markets it is the usual job-application document; in the US, most non-academic jobs ask for a resume, while an academic CV records research, teaching and scholarly work.",
    sections: [
      section("CV or resume: follow the application context", ["Do not choose a document solely from its label. Read the vacancy instructions and consider the country and profession. A research appointment may request publications and teaching; a commercial role needs a focused account of relevant contributions. Oxford's careers guidance distinguishes standard CVs, North American resumes and academic CVs." ]),
      section("What belongs in a job-application CV?", ["Start with your name and professional contact details. Make the most relevant evidence easy to locate. A graduate might put education and projects first; an experienced applicant might begin with recent work."], ["A concise profile when it adds useful context.", "Experience with role, organisation, dates and specific contributions.", "Education, relevant qualifications and skills you can substantiate.", "Projects, volunteering or other evidence relevant to the vacancy."]),
      section("How long should it be?", ["Use the employer's limit where one is specified. Otherwise, select the space needed for relevant evidence rather than filling a template. Academic CVs have different requirements and may be longer. Do not shrink text to hide an unfocused draft." ]),
      section("A practical starting point", ["List the vacancy's main requirements, then identify one genuine example for each. Draft your experience before polishing the summary. Check dates, remove private or irrelevant details, and submit the requested file type. A CV supports your application; it does not guarantee an interview." ]),
    ],
  },
  "cv-and-cover-letter-combination": {
    title: "CV and Cover Letter: What Goes in Each Document?",
    excerpt: "Use your CV for evidence and your cover letter for motivation and role fit. Learn when to upload separate files or a combined document.",
    content: "A CV and cover letter should tell a consistent story without repeating each other. The CV presents your relevant experience and evidence. The cover letter explains why this role interests you and connects selected examples to the employer's needs. Upload separate files unless the application specifically requests a combined document.",
    sections: [
      section("Give each document a job", ["Put the full chronology, qualifications and core achievements in the CV. In the letter, choose one or two examples that explain your fit. Avoid copying the CV summary into the first paragraph: use that space to identify the role and your reason for applying." ]),
      section("Check consistency before exporting", ["Job titles, dates, qualifications and contact details must match. You can change emphasis for a vacancy, but the underlying facts should stay consistent. If you mention a project in both documents, use the letter to explain a relevant decision rather than repeating the same bullet." ]),
      section("Separate files or one PDF?", ["Follow the upload instructions. When there are separate fields, use them. If one combined file is explicitly requested, put the letter before the CV, insert a page break and inspect the exported file. Do not combine files simply because it feels tidier if the portal asks for separate documents." ], ["Use descriptive filenames with your name and document type.", "Open every attachment after exporting.", "Remove comments, tracked changes and placeholders."]),
    ],
  },
  "canva-cv-maker-free-best-choice": {
    title: "Canva CV Maker: When to Use It and What to Check",
    excerpt: "Canva offers a resume builder, but layout and export choices matter. Compare visual presentation with readability and application requirements.",
    content: "Canva can be useful for designing a CV, particularly when visual presentation matters. It is not automatically the best option for every application. Evaluate the actual template, the exported file and the employer's requirements, rather than assuming that the tool name establishes ATS compatibility.",
    sections: [
      section("What Canva provides", ["Canva's official resume builder offers templates and editing tools. Check the current plan and asset restrictions before choosing a design: not every element is necessarily included in a free account. Product options can change." ]),
      section("Inspect the finished document", ["Select and copy text from the exported file into a plain-text editor. Look for missing information and a confusing reading order. A successful copy is a useful check, not proof that every recruitment system will parse the file identically." ], ["Keep essential contact details as text.", "Avoid graphics as the only way to communicate a skill.", "Check that dates and role headings stay connected."]),
      section("When a Word document is simpler", ["If the employer requests DOCX, work in a tool that provides a reliable editable DOCX file. A straightforward layout is easier to adapt for repeated applications. Keep a separate visual version for appropriate portfolio-led conversations instead of forcing one format into every situation." ]),
    ],
  },
  "cover-letter-job-application-example": {
    title: "Cover Letter for a Job Application: Example and Structure",
    excerpt: "A short illustrative cover letter with an opening, evidence paragraph and closing. Adapt the facts and motivation to your own application.",
    content: "A useful cover letter names the role, explains your interest and supports your fit with specific evidence. It should add context to your CV. The example below is illustrative, not a real client's letter: replace every placeholder and never copy experience you do not have.",
    sections: [
      section("Opening: identify the role and your reason", ["Dear Hiring Team, I am applying for the Operations Coordinator role at [Company]. Your focus on [specific activity from the vacancy] interests me because my recent work has involved [relevant area you can substantiate]." ]),
      section("Evidence: explain a relevant contribution", ["In my role at [Organisation], I [specific action] to address [problem]. This involved [your contribution and tools], with [a defensible result or observed improvement]. That experience would help me contribute to your requirement for [vacancy requirement]." ]),
      section("Closing: invite a conversation", ["I have attached my CV with further detail about my experience. I would welcome the opportunity to discuss how I could contribute to your team. Thank you for considering my application. Kind regards, [Name]." ]),
      section("Before you send it", ["Replace the example with a natural account of your own work. Verify the company and role name, remove placeholders and read the letter aloud. Explain a genuine connection to the employer instead of praising a company you have not researched. Follow any stated length or submission rules." ]),
    ],
  },
  "best-cv-formats-for-freshers-and-experienced-professionals": {
    title: "CV Formats for Freshers and Experienced Professionals",
    excerpt: "Choose a CV structure based on your evidence: education and projects for early careers, relevant work and outcomes for experienced applicants.",
    content: "The best CV format makes your most relevant evidence easy to find. Fresh graduates can lead with education, projects and internships. Experienced professionals usually give more space to recent relevant work. A career change may need a short skills-led introduction without hiding the employment history.",
    sections: [
      section("Fresh graduate structure", ["Start with contact details, then a short target-specific introduction if useful. Present education, selected projects, internships and other relevant experience. A project can show analytical or teamwork skills when you explain your actual contribution." ], ["Identify the project objective and your role.", "Name relevant tools only where you used them.", "Keep volunteering and part-time work when it demonstrates the requirements."]),
      section("Experienced professional structure", ["Lead with a concise professional summary, then recent relevant experience. Show scope, decisions and outcomes before long lists of duties. Compress older roles when they add little to the current application, without creating a misleading chronology." ]),
      section("Career-change structure", ["Use a focused introduction to explain the connection between your previous work and the new direction. Support transferable skills with examples. Keep role titles and dates clear so the reader can understand where that experience came from." ]),
      section("What every format needs", ["Use consistent headings, readable text and the employer's requested file type. A format cannot compensate for inaccurate claims or irrelevant content. Review the evidence before spending time on visual decoration." ]),
    ],
  },
  "edit-cv-online-free-tools": {
    title: "How to Edit Your CV Online: A Practical Checklist",
    excerpt: "Choose an editor, protect your personal data and inspect the final file. A simple process for updating a CV without losing its structure.",
    content: "To edit a CV online, choose a document editor that supports the required file format, make a working copy and update the content before changing the design. Check current account requirements, export restrictions and privacy settings before uploading personal information.",
    sections: [
      section("Choose by the output you need", ["If an employer requests an editable Word file, test the editor's DOCX export before committing to a template. For a PDF application, verify that text remains selectable and the layout survives export. Canva is one visual editing option; its official product page describes current features." ]),
      section("Update in a useful order", ["Correct contact details and dates first. Add recent work, then remove material that no longer supports your target role. Rewrite the introduction last, once you know which evidence remains." ], ["Keep a master copy separate from role-specific versions.", "Remove comments and tracked changes.", "Test email, portfolio and LinkedIn links."]),
      section("Protect your information", ["Do not upload identity documents, account credentials or unnecessary confidential employer information. Check sharing permissions: a document link should not be public unless you intend it to be. Before applying, download the final file and inspect it outside the editor." ]),
    ],
  },
  "curriculum-vitae-example-for-students": {
    title: "Student CV Example: Education, Projects and First Experience",
    excerpt: "An illustrative student CV outline with project and experience prompts. Build a credible first application without inventing employment history.",
    content: "A student CV can demonstrate potential through education, projects, part-time work and volunteering. Paid professional experience is not the only useful evidence. Choose examples that connect to the internship or graduate vacancy and explain your own contribution clearly.",
    sections: [
      section("Student CV outline", ["Use the following as an outline, not as fabricated personal content. Reorder sections when a relevant internship is stronger evidence than academic work." ], ["Name, professional email and relevant profile or portfolio link.", "Education: qualification, institution and expected completion date.", "Selected projects: purpose, your contribution, tools and result.", "Experience: internships, employment or volunteering with dates.", "Relevant skills and activities you can discuss confidently."]),
      section("Illustrative project bullet", ["Analysed [dataset or problem] for a [module or project], using [tool] to compare [options] and present [recommendation] to [audience]. Replace the brackets with facts from your own project; include an outcome only when you can explain how it was assessed." ]),
      section("What to leave out", ["Avoid empty skill ratings, invented job titles and a long objective about what you hope to receive. Include interests only when they add relevant detail. Before applying, compare each section against the vacancy and check the required format." ]),
    ],
  },
  "industry-cv-guide-5-banking": {
    title: "Banking CV Guide: Show Relevant Experience and Evidence",
    excerpt: "Tailor a banking CV to the actual role, from operations to relationship management or analysis, without exposing confidential financial information.",
    content: "A banking CV should reflect the specific role, not a generic image of the banking industry. Identify whether the vacancy emphasises operations, analysis, customer relationships, risk or another discipline. Select evidence from your actual responsibilities and describe it without disclosing confidential client information.",
    sections: [
      section("Read the vacancy by function", ["An operations role may value process accuracy and exception handling. An analytical role may require evidence of modelling and recommendations. A relationship role may call for account management and communication. Treat these as drafting prompts, then follow the actual vacancy rather than assuming every bank uses the same criteria." ]),
      section("Describe scope and contribution", ["For each relevant role, explain the activity, your responsibility and the improvement or result you can substantiate. Distinguish individual work from team outcomes. Do not suggest that you held approval authority, qualifications or regulated responsibilities you did not hold." ]),
      section("Protect confidentiality", ["Use anonymised descriptions where necessary. Do not include customer identities, account information or restricted internal measures. Where a financial figure cannot be shared, describe the operational scope or improvement in appropriate qualitative terms." ], ["Verify qualifications and dates.", "Explain specialist abbreviations where useful.", "Separate software familiarity from formal certification."]),
    ],
  },
  "industry-cv-guide-14-hospitality": {
    title: "Hospitality CV Guide: Service, Operations and Leadership",
    excerpt: "Present hospitality experience through guest service, shift responsibilities, operational improvements and genuine evidence of leadership.",
    content: "A hospitality CV should show what you did, the setting you worked in and the responsibilities you can handle. Match the emphasis to the vacancy: front-office, food and beverage, housekeeping and management roles need different evidence. Avoid treating every role as a generic customer-service position.",
    sections: [
      section("Describe the working environment", ["Give useful context such as the property or venue type, department and shift responsibilities. Explain the systems you actually used. Only include occupancy, revenue or guest metrics when they are accurate, shareable and connected to your own work." ]),
      section("Turn duties into useful examples", ["Instead of 'responsible for guests', describe how you handled an arrival issue, coordinated with another department or improved a handover. Leadership examples can include staff training, roster coordination and service recovery, provided those were genuinely your responsibilities." ]),
      section("Prepare for international applications", ["Check the employer's location, working arrangement and document instructions. State language proficiency honestly rather than using decorative skill bars. Do not imply work authorisation or professional certification that you do not hold; answer eligibility questions accurately through the application process." ], ["Keep employer names, job titles and dates consistent.", "Make service and operational evidence easy to scan.", "Choose examples relevant to the advertised department."]),
    ],
  },
};

export function applyReviewedArticle(post: BlogPost): BlogPost {
  const revision = reviewedArticles[post.slug];
  if (!revision) return post;
  const sources = post.slug.includes("canva") || post.slug.includes("online")
    ? [{ label: "Canva: official resume builder", href: "https://www.canva.com/create/resumes/" }]
    : post.slug === "what-is-a-cv"
      ? [{ label: "Oxford Careers: CVs and North American resumes", href: "https://www.ox.ac.uk/careers/careers-guidance/job-search-and-applications/writing-applications/cvs" }]
      : [];
  return { ...post, ...revision, updatedAt: "2026-09-11", faqs: [],
    internalLinks: [...sources, { label: "ATS CV checklist", href: "/resources/ats-cv-quick-checklist" }, { label: "International writing services", href: "/services" }],
    ctaButtons: [{ label: "Request a Profile Review", href: "/contact" }],
  };
}
