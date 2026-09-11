import type { DigitalResource } from "@/lib/resources";

export const resourceGuides: DigitalResource[] = [
  {
    slug: "ats-cv-quick-checklist", title: "ATS CV Quick Checklist", subtitle: "Check your document before submitting it.",
    description: "A practical checklist for document structure, role relevance and a final application check. No automated score can guarantee shortlisting.",
    resourceType: "Guide", category: "free", coverImage: "/images/cv-after-ats-template.svg",
    highlights: ["Reading-order check", "Vacancy requirements", "File and contact checks"],
    contentSections: [
      { heading: "Check the file", paragraphs: ["Follow the employer's requested file type. Copy the document into a plain-text editor and check the reading order, dates and contact information. This is a useful diagnostic, not a simulation of every ATS."], bullets: ["Use conventional headings: Experience, Education and Skills.", "Keep important information out of images and decorative text boxes.", "Open the final file on another device before sending."] },
      { heading: "Check the evidence", paragraphs: ["Highlight the essential requirements in the vacancy. For each relevant requirement, identify an example from your experience. Use the employer's terminology only when it accurately describes your work."], bullets: ["Replace unsupported adjectives with a specific contribution.", "Check every date, qualification and numerical result.", "Remove confidential client or employer information."] },
      { heading: "Check the application", paragraphs: ["Confirm the role title, company name, email address and working links. Use a clear filename such as Firstname-Lastname-Resume.pdf. Check any application questions separately: a well-written CV does not replace them."] },
    ], primaryActionLabel: "Try the CV Audit", primaryActionHref: "/tools/ats-cv-audit",
  },
  {
    slug: "interview-story-bank-template", title: "Interview Story Bank Worksheet", subtitle: "Prepare evidence before practising answers.",
    description: "Build a reusable bank of interview examples with prompts for situation, responsibility, action, results and lessons.",
    resourceType: "Guide", category: "free", coverImage: "/images/about-page-chanuka.jpg",
    highlights: ["STAR prompts", "Evidence checks", "Role-specific practice"],
    contentSections: [
      { heading: "Choose six experiences", paragraphs: ["Choose examples of a difficult problem, collaboration, a mistake, leadership, a competing priority and an improvement. Early-career examples can come from projects, volunteering or study, provided you describe the context honestly."] },
      { heading: "Complete one story at a time", paragraphs: ["Write short notes under each prompt. Distinguish your contribution from the team's work; do not memorise an exaggerated script."], bullets: ["Situation: What was happening, and why did it matter?", "Task: What were you personally responsible for?", "Action: What did you decide, do and change?", "Result: What changed, and what evidence supports that?", "Reflection: What would you repeat or improve?"] },
      { heading: "Practise and adapt", paragraphs: ["Match each story to requirements in the vacancy. Practise a concise spoken version, then ask a listener which part was unclear. Keep confidential details anonymous and use qualitative results when no defensible number exists."] },
    ], primaryActionLabel: "Open the Story Bank Tool", primaryActionHref: "/tools/interview-story-bank",
  },
  {
    slug: "linkedin-headline-formula-sheet", title: "LinkedIn Headline Formula Sheet", subtitle: "Explain your focus without a list of buzzwords.",
    description: "Headline structures and illustrative examples for graduates, specialists and leaders. Choose wording that matches your real experience.",
    resourceType: "Guide", category: "free", coverImage: "/images/hero-chanuka.jpg",
    highlights: ["Three headline structures", "Accurate role terminology", "Profile consistency"],
    contentSections: [
      { heading: "Start with a recognisable role", paragraphs: ["A reader should understand your professional focus before encountering slogans. Use a role you hold or clearly identify your intended direction. Do not present an aspiration as an existing job title."] },
      { heading: "Choose a structure", paragraphs: ["These are illustrative patterns, not client results or promises of search visibility."], bullets: ["Graduate: Accounting Graduate | Financial Reporting Projects | Excel", "Specialist: Backend Engineer | Java and Distributed Systems | Payments", "Leader: Operations Director | Supply Chain Improvement | Multi-site Teams"] },
      { heading: "Make it consistent", paragraphs: ["Read your headline alongside your About section, experience and CV. They should support the same direction. Remove skills you cannot discuss in an interview and keep the most relevant terms near the beginning. Review the headline when your target changes."] },
    ], primaryActionLabel: "Try the Headline Tool", primaryActionHref: "/tools/linkedin-headline-generator",
  },
  {
    slug: "linkedin-authority-system", title: "LinkedIn Profile and Content Planning Guide", subtitle: "Connect your profile to the expertise you can demonstrate.",
    description: "Plan a coherent LinkedIn profile, useful professional posts and a sustainable review routine without artificial engagement or invented authority.",
    resourceType: "Guide", category: "free", coverImage: "/images/hero-chanuka.jpg",
    highlights: ["Profile positioning", "Content planning", "Meaningful review"],
    contentSections: [
      { heading: "Define your audience", paragraphs: ["Choose the roles, teams or professional peers you want to reach. Write down their recurring questions and the work you have done that could help answer them. Align your headline, About section and recent experience with that focus."] },
      { heading: "Publish useful evidence", paragraphs: ["Start with a lesson from a project, a reasoned explanation of a work problem or a resource you can assess firsthand. Anonymise confidential details and obtain permission before sharing employer material."], bullets: ["Explain the problem and the decision you made.", "Separate your observations from sourced facts.", "Use Featured for relevant work samples you have permission to share."] },
      { heading: "Review monthly", paragraphs: ["Track relevant conversations and profile enquiries alongside available platform metrics. Reach alone does not establish career value. Refine topics using useful responses, not follower targets or automated engagement."] },
    ], primaryActionLabel: "Explore LinkedIn Support", primaryActionHref: "/services/packages/linkedin",
  },
  {
    slug: "ats-cv-mastery-toolkit", title: "ATS CV Planning Toolkit", subtitle: "Turn a vacancy and your experience into a focused first draft.",
    description: "A guided workflow for vacancy analysis, evidence selection, CV structure and final review, with practical checks and a Word template.",
    resourceType: "Guide", category: "free", coverImage: "/images/cv-after-ats-template.svg",
    highlights: ["Requirements map", "Achievement drafting", "Final document review"],
    contentSections: [
      { heading: "Build a requirements map", paragraphs: ["Create three columns: vacancy requirement, your relevant evidence and where that evidence belongs in the CV. Leave a gap where you do not meet a requirement; do not manufacture experience to fill it."] },
      { heading: "Draft achievement bullets", paragraphs: ["Use action, context and outcome. For example, 'Reconciled invoice exceptions by introducing a weekly review with purchasing' is more informative than 'Responsible for invoices'. Add a number only when you can explain its basis."], bullets: ["Prioritise evidence that matters to the target role.", "Expand unfamiliar abbreviations on first use.", "Separate personal contributions from team outcomes."] },
      { heading: "Review structure and submission rules", paragraphs: ["Use a straightforward reverse-chronological structure unless your situation calls for another format. Check the employer's instructions and target-country conventions. Read the final document aloud, test text extraction and confirm every claim before submitting."] },
    ], primaryActionLabel: "Get the Word CV Template", primaryActionHref: "/resources/ats-friendly-cv-template-free",
  },
];
