import type { BlogPost, BlogSection } from "./blog-posts";

type Review = { title?: string; answer: string; sections: BlogSection[]; sources?: { label: string; href: string }[] };
const s = (heading: string, text: string, bullets?: string[]): BlogSection => ({ heading, paragraphs: [text], bullets });
const parsingSource = { label: "Greenhouse: unsuccessful resume parsing", href: "https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse" };
const federalSource = { label: "USAJOBS: current resume requirements", href: "https://help.usajobs.gov/faq/application/documents/resume/what-to-include" };
const skillsSource = { label: "LinkedIn: managing profile skills", href: "https://www.linkedin.com/help/linkedin/answer/a549047/add-and-remove-skills-on-your-profile?lang=en" };

// Keys refer to the existing stable us-N article IDs, not a new URL series.
export const usArticleReviews: Record<number, Review> = {
  4: {
    answer: "For most US corporate applications, leave out a photograph, birth date, marital status, identity numbers and unrelated personal history. Keep information that establishes your fit and lets an employer contact you. Follow any legitimate, role-specific application instructions separately from the resume.",
    sections: [
      s("Remove sensitive information from the resume", "Use a city or region instead of a full residential address when a precise address is unnecessary. Do not attach a passport, Social Security number or work-authorisation document to a publicly shared resume. An employer's secure application or onboarding process is a separate channel, not a reason to publish those details."),
      s("Replace weak content with evidence", "Delete unsupported adjectives and long lists of unrelated duties. Replace 'excellent communicator' with a genuine example of explaining a technical decision, resolving a customer issue or coordinating stakeholders. Do not invent a percentage merely because a template has a space for one.", ["Omit references and their private contact details unless specifically requested.", "Remove outdated skills that do not support the target role.", "Keep relevant volunteer work or projects even when they were unpaid."]),
      s("Decide whether an exception is relevant", "An academic CV may need publications, teaching and research details that a commercial resume would omit. A performing-arts application may request a separate headshot. Read the vacancy rather than assuming a single rule covers every occupation. If you are unsure about a request for sensitive data, verify the employer and channel first."),
    ],
  },
  6: {
    answer: "An achievement-based resume bullet explains what you changed, how you contributed and why the result mattered. Start with an action, add the relevant scope or method, then include a result you can substantiate. A useful outcome does not always need a percentage.",
    sections: [
      s("Move from responsibility to contribution", "A responsibility says what the job involved; an achievement shows your contribution. 'Responsible for monthly reporting' does not explain what you improved. Ask what you built, corrected, simplified or delivered, then identify who used it and what changed."),
      s("A worked example", "Illustrative example, not a client result: 'Reconciled supplier invoices in Excel and introduced an exception log, reducing unresolved discrepancies from 24 to 8 over three monthly closes.' The numbers give a baseline and period. Use this pattern only with your own accurate figures; otherwise describe the verified improvement without a fabricated metric."),
      s("Use evidence when numbers are unavailable", "Scope can make a bullet specific: a quarterly reporting cycle, three stakeholder teams, an approved procedure or a launch milestone. Explain your own role if the result belonged to a team. For confidential work, use an approved general description rather than exposing customer names or financial records.", ["Check that the result occurred within the employment dates shown.", "Separate your action from the wider team's outcome.", "Keep a private evidence note so you can discuss the claim in an interview."]),
    ],
  },
  9: {
    answer: "A US resume header usually needs your name, professional email, reachable phone number and truthful location. Add a LinkedIn or portfolio link when it supports the application. Keep this information in the document body rather than relying on a decorative header or text box.",
    sources: [parsingSource],
    sections: [
      s("A simple header pattern", "Illustrative layout: 'Alex Morgan | Toronto, Canada | +1 [number] | alex@example.com | linkedin.com/in/[profile]'. Replace every placeholder and use your real location. An international number should include its country code; buying a US number does not establish US residence or work authorisation."),
      s("Explain relocation without pretending to be local", "If true, add a short line such as 'Open to relocation to Chicago'. Do not list a friend's address as your current residence. A remote role may still have location restrictions, so check the posting before presenting yourself as eligible. Keep immigration documents out of the resume."),
      s("Check the exported file", "Open the actual PDF or DOCX you intend to send. Select and copy the contact line into plain text, test the links and check that neither email nor phone was split across lines. Greenhouse documents parsing problems involving contact details in headers, footers and text boxes; this is a practical reason to keep the layout simple.", ["Use an inbox you check and a working voicemail.", "Check portfolio permissions in a signed-out browser.", "Remove broken, obsolete or private profile links."]),
    ],
  },
  15: {
    title: "How to Write a Two-Page USAJOBS Federal Resume",
    answer: "The current USAJOBS resume limit is two pages. Build your document around the specific vacancy's qualification requirements, relevant employment details and evidence of the work you performed. Older advice recommending a three-to-eight-page federal resume is no longer appropriate for standard USAJOBS uploads.",
    sources: [federalSource],
    sections: [
      s("Read the announcement before selecting evidence", "Review Qualifications, Required Documents and How to Apply. Identify which examples demonstrate the specialised experience and any education requirements. Check eligibility and hiring-path instructions separately; a well-written document cannot create an eligibility status you do not have."),
      s("Keep the required employment details", "For relevant work, provide the employer, title, month/year dates and hours per week. Add series and grade for previous federal roles. Use the announcement to identify any additional requirements. Avoid treating salary or supervisor contact details as universal requirements when the vacancy does not ask for them."),
      s("Make two pages readable", "Prioritise the most relevant examples, reduce repetition and remove unrelated older work before shrinking the font. Verify the exported page count and upload preview. Keep classified information, identity numbers and sensitive eligibility evidence out of documents sent for editing. Submit any separately required records only through the official application process."),
    ],
  },
  23: {
    answer: "For many US applications, a single-column, reverse-chronological resume is a practical starting point: contact details, relevant summary or skills, recent experience, education and qualifications. It is not a universal ATS pass. Follow the employer's file instructions and check the uploaded information yourself.",
    sources: [parsingSource],
    sections: [
      s("Choose a predictable reading order", "Give each employer, job title and date range a clear place. Use ordinary section names such as Experience and Education. Put important information in the main body, not only in graphics, icons or a footer. Avoid a second column when it makes the intended order difficult to follow."),
      s("A layout you can adapt", "An experienced analyst might begin with a short summary, then technical skills and recent work. A graduate may put education and relevant projects before employment. The order should reflect the strongest evidence for the vacancy; it need not follow a purchased template's decorative structure.", ["Use consistent dates and legible text at ordinary zoom.", "Keep links readable even when printed.", "Avoid proficiency bars that do not explain actual experience."]),
      s("Test the file, not an ATS score promise", "Greenhouse documents parsing difficulties with image-based content, complex formatting and some header or text-box content. Export a text-based document, copy it into a plain-text editor and inspect its order. If an application autofills employment fields, correct any mistakes before submitting. Parsing success is not the same as meeting a role's requirements."),
    ],
  },
  28: {
    answer: "Use the file type requested by the employer. When both PDF and DOCX are accepted, a text-based PDF can preserve presentation and DOCX can be a useful editable alternative. Neither extension alone makes a resume ATS-friendly; a scanned image inside a PDF is still an image.",
    sources: [parsingSource],
    sections: [
      s("Decide from the application instructions", "Check the accepted formats and size limit before uploading. If a portal requires DOCX, submit DOCX even if your PDF looks better. If the recruiter asks for a PDF by email, send a clean PDF rather than a link that requires login. Keep both versions generated from the same current master."),
      s("Perform a quick extraction check", "In the exported PDF, select a sentence and copy it into a text editor. Verify that words, job titles and dates remain intelligible. In Word, inspect the document without editing marks and confirm that essential details are not embedded only in shapes. This check identifies obvious issues; it does not reproduce every employer's parser."),
      s("Finish with an upload check", "Use a filename such as 'Alex-Morgan-Data-Analyst-Resume.pdf'. Remove password protection unless the recipient specifically requires it. Review the portal's preview and autofilled fields before the final submission. Keep sensitive identity documents separate, and retain the submitted version so you know what the interviewer received."),
    ],
  },
  44: {
    answer: "Choose LinkedIn keywords from the roles you genuinely want and the work you can demonstrate. Use recognisable role titles, specialisms and skills in the appropriate profile sections. Repetition alone is not a visibility strategy, and no keyword list guarantees recruiter contact or a search ranking.",
    sources: [skillsSource],
    sections: [
      s("Build a small, evidence-based vocabulary", "Read several relevant US vacancies and note recurring requirements. Separate a role title, a specialism and tools you have actually used. For an analyst, these might be business intelligence, SQL and Power BI. A required skill you do not possess is a development gap, not something to paste into your profile."),
      s("Give each section a different job", "Use the headline to communicate direction, About to explain your strengths, Experience to demonstrate work and Skills to identify relevant capabilities. LinkedIn lets members associate skills with where they used them. Keep employment dates and credentials consistent with your resume.", ["Avoid a headline containing a long list of unrelated job titles.", "Spell out an unfamiliar abbreviation once when it helps readers.", "Use your actual location and accurate employment status."]),
      s("Measure relevance, not only impressions", "Review whether incoming messages concern appropriate roles and whether profile visitors can understand your work. Search appearances can vary for many reasons; an increase is not proof that a specific keyword caused it. Revisit your vocabulary when your target changes rather than rewriting the profile every time a new posting appears."),
    ],
  },
  49: {
    answer: "A healthcare LinkedIn profile should make your role, specialty, accurately described credentials and professional interests clear without exposing patient information. Keep public career branding separate from credential verification and clinical documentation. Requirements depend on the profession, employer and jurisdiction.",
    sections: [
      s("Describe scope without implying unheld credentials", "Name the clinical or administrative setting and work you are qualified to discuss. Distinguish an active credential from an application, course or exam preparation. International qualifications should not be relabelled as US licences. Confirm any public credential wording against the issuing body's record."),
      s("Show professional contribution safely", "Discuss a training programme, workflow improvement or approved quality project at an appropriate level of detail. Do not publish patient stories, charts, identifiable images or internal records as portfolio evidence. Removing a name alone may not make a clinical example safe to share. Follow your employer's confidentiality and publication rules."),
      s("A focused profile structure", "An illustrative headline is 'Healthcare Operations Coordinator | Patient Access and Scheduling'. The About section can describe your responsibilities, the settings in which you have worked and your next career direction. In Experience, explain coordination, systems or team support with substantiated examples. Keep enquiries about licences or eligibility with the relevant official body rather than relying on LinkedIn wording."),
    ],
  },
  50: {
    answer: "For US finance opportunities, position your LinkedIn profile around the kind of financial work you perform: accounting, FP&A, treasury, risk or another defined area. Explain the decisions you support, the tools you use and your verified contribution. Avoid publishing confidential financial or client information.",
    sections: [
      s("Choose a finance role rather than a list of titles", "A headline such as 'FP&A Analyst | Forecasting, Variance Analysis and Business Partnering' communicates a clearer direction than 'Finance | Accounting | Banking | Investment | Data'. Use that wording only when it reflects your experience. Do not imply a CPA, CFA or other designation that you have not earned."),
      s("Explain an analytical contribution", "Illustrative example: 'Built a monthly variance report that helped department managers identify recurring purchasing exceptions.' A stronger version could include an approved scope or verified time saving. Describe how your work informed a decision; do not claim sole credit for an organisation-wide financial result you cannot attribute."),
      s("Select public proof carefully", "Use a project made with public or synthetic data, an approved presentation, or a published article. Label demonstrations clearly. A spreadsheet screenshot from your employer can disclose commercially sensitive information even when company names are removed. Keep certifications, dates and employment history aligned with your application documents."),
    ],
  },
  66: {
    title: "US Recruiter Outreach Messages: Examples and Follow-Up",
    answer: "A useful recruiter message names a relevant vacancy or role family, offers one credible reason for fit and asks a small, clear question. Keep it concise and personalised. The aim is to make a relevant conversation easier, not to promise a reply or pressure someone into a referral.",
    sections: [
      s("Use a vacancy-specific opening", "Illustrative message: 'Hello [name], I saw your [role] vacancy, reference [ID]. My recent work includes [relevant contribution]. Is experience in [your specialism] relevant to this team's search? I can share a focused resume. Thank you, [name].' Replace the placeholders and check that the recruiter actually covers the role before sending."),
      s("Give enough context without sending everything", "A short message can state your role, relevant background and one question. A long biography, multiple attachments and a list of unrelated target jobs make it harder to assess fit. Be accurate about location and availability; do not imply a referral or prior relationship that does not exist."),
      s("Follow up respectfully", "If the contact has given a timeline, use it. Otherwise allow a reasonable interval before one brief follow-up with genuinely useful information, such as the correct vacancy reference or an updated availability date. Stop when asked, do not automate repeated messages, and continue other applications. Silence does not establish that your resume or qualifications are the problem."),
    ],
  },
  92: {
    answer: "An HR resume should identify your specialism, the workforce or recruitment scope you supported and the work you personally delivered. Distinguish talent acquisition, HR operations, employee relations and people analytics rather than presenting every HR function as an equal strength.",
    sections: [
      s("Choose evidence that fits the role", "A recruiting application may emphasise requisition workload and hiring-process improvements. An HR operations role may need onboarding accuracy, HRIS administration and service delivery. Compare the vacancy with your actual duties and prioritise the overlap; a software name by itself does not prove that you can administer it."),
      s("Write a meaningful HR bullet", "Illustrative example: 'Introduced a new-starter checklist with payroll and IT, reducing unresolved onboarding tasks at the first-week review.' Add a verified baseline or team size when useful. A retention figure needs a defined population and period; do not attribute every change in turnover to a single programme."),
      s("Protect people information", "Do not include employee names, grievance details, compensation spreadsheets or candidate records. Describe sensitive projects at the level your employer permits. State credentials accurately and distinguish knowledge of a process from legal expertise. Keep dates, responsibilities and claimed system access consistent with what a reference could substantiate."),
    ],
  },
  94: {
    answer: "A supply-chain resume should connect planning, procurement, logistics or inventory work to a clear operational result. Identify the part of the supply chain you influenced and the measures used, rather than listing every system and improvement method without context.",
    sections: [
      s("Match the role's operating problem", "For a planning role, explain forecasting inputs, replenishment decisions and how exceptions were handled. For procurement, describe sourcing, supplier coordination and the category scope. For logistics, focus on delivery planning and service reliability. Use the vacancy to choose relevant evidence; these functions are related but not interchangeable."),
      s("Define the metric before claiming a result", "Illustrative example: 'Built an overdue-order review with suppliers and customer service, reducing unresolved exceptions from [verified baseline] to [verified result] over [period].' Explain whether an on-time-delivery measure concerns orders, lines or shipments. Separate negotiated savings from avoided costs and projected benefits."),
      s("Make systems knowledge credible", "Name an ERP, planning tool or reporting platform alongside the task performed: purchase-order management, demand reporting or inventory analysis. Identify your contribution to a team result and keep customer, supplier and commercially sensitive data confidential. A non-confidential process explanation can be stronger than an impressive but unverifiable percentage."),
    ],
  },
};

export function applyUsArticleReview(post: BlogPost, id: number): BlogPost {
  const review = usArticleReviews[id];
  if (!review) return post;
  return {
    ...post, title: review.title ?? post.title,
    excerpt: review.answer.split(/(?<=\.)\s/)[0], content: review.answer,
    sections: review.sections, faqs: [], updatedAt: "2026-09-11",
    internalLinks: [...(review.sources ?? []), ...(post.internalLinks ?? [])],
  };
}
