import { marketEditorial } from "@/content/market-editorial";
import { articleTopics, type ArticleTopic, type Market } from "@/lib/markets";

export const marketContentDate = "2026-09-09";
export type MarketArticle = {
  slug: ArticleTopic;
  title: string;
  description: string;
  category: string;
  answer: string;
  sections: { heading: string; paragraphs?: string[]; items?: string[] }[];
};

export function getMarketArticles(market: Market): MarketArticle[] {
  const editorial = marketEditorial[market.slug];
  const document = market.document;
  return [
    {
      slug: articleTopics[0],
      title: `${market.label} ${document} guide: format, evidence and common mistakes`,
      description: `Plan a clear ${document} for ${market.name}: relevant experience, application requirements and practical examples for your target role.`,
      category: "CV & resume guidance",
      answer: `A strong ${market.label} ${document} connects the requirements of one target role to evidence from your experience. ${editorial.focus} Start with the employer's instructions, then decide the structure and level of detail.`,
      sections: [
        { heading: `Start with the ${market.label} application`, paragraphs: [editorial.cv[0], editorial.cv[1]] },
        { heading: "Check the format before writing", paragraphs: [editorial.cv[2], "Use conventional section headings and selectable text. Keep the reading order straightforward, and check that contact details survive a plain-text copy of the file. Submit the file type the employer requests. There is no universal ATS score or layout that guarantees shortlisting."] },
        { heading: "Turn a duty into useful evidence", paragraphs: [editorial.example, "For each important claim, record the context, your own action and a result you can explain. When a numerical result is unavailable, use a concrete outcome such as a completed implementation, a resolved issue or an approved process. The purpose is accuracy and relevance, not a number in every sentence."] },
        { heading: "Before you submit", items: ["Match the target title to your actual capabilities.", "Check employer names, dates and qualification details.", "Explain unfamiliar employers or project settings briefly.", "Remove claims you cannot support in an interview.", "Check links, spelling, file format and any separate application questions."] },
        { heading: "When professional support is useful", paragraphs: [`A rewrite is useful when your experience is strong but its relevance to the ${market.label} role is hard to see. It can also help with a change of sector or a move into leadership. Bring your existing ${document}, a representative vacancy and an evidence list to the profile review.`, "Writing cannot replace missing qualifications or experience. The service improves the clarity and positioning of the application; employers still decide which candidates progress."] },
      ],
    },
    {
      slug: articleTopics[1],
      title: `LinkedIn ${market.optimisation} for ${market.label}: a profile with a clear direction`,
      description: `Build a consistent professional profile for ${market.label} opportunities, with a focused headline, readable About section and evidence behind your experience.`,
      category: "LinkedIn & professional brand",
      answer: `LinkedIn ${market.optimisation} means aligning the headline, About section, experience and skills with a truthful professional direction. For a ${market.label} search, use the language of relevant vacancies where it accurately describes your work.`,
      sections: [
        { heading: "Choose a professional direction", paragraphs: [editorial.linkedin[0], editorial.linkedin[1]] },
        { heading: "A headline example to adapt", paragraphs: [editorial.headline, "This is an illustrative structure, not a claim about your experience. Use a recognisable role family, one or two substantiated specialisms and a clear professional focus. Avoid copying it if the capabilities do not fit your background."] },
        { heading: "Make the About section do a different job", paragraphs: ["The About section can explain the connection between earlier experience and your next step. Open with the problems you work on, add a few representative contributions and explain the direction you are pursuing. Keep the tone professional and conversational rather than repeating the resume summary word for word.", `Use terminology from suitable ${market.label} vacancies naturally. A skill belongs in the profile when it reflects real work or training. Repeating location names and job titles throughout the text makes the profile harder to read and does not establish expertise.`] },
        { heading: "Align the public evidence", items: ["Keep job dates and employer names consistent with your application documents.", "Separate work you delivered personally from wider team results.", "Use only approved, public material in Featured or project links.", "State location and language capabilities accurately.", "Keep account access and passwords under your own control."] },
        { heading: "What a rewrite can and cannot do", paragraphs: ["The service provides profile copy and recommendations for positioning. You review the facts and publish changes through your own account. No password is requested, and automated recruiter messaging is not part of the profile-writing package.", "A clear profile can help a reader understand your fit, but no writer can guarantee recruiter searches, messages, interviews or a particular platform ranking. Revisit the profile when your responsibilities or career direction change."] },
      ],
    },
    {
      slug: articleTopics[2],
      title: `Career strategy for ${market.label}: turn your next move into a focused plan`,
      description: `Plan your ${market.label} job search around role fit, evidence, priorities and a practical review process, from career transitions to leadership moves.`,
      category: "Career development",
      answer: `A useful career strategy identifies the role you want, the evidence that supports it and the gaps you need to address. For ${market.label}, begin with a small set of relevant vacancies rather than rewriting documents before choosing a direction.`,
      sections: [
        { heading: `Define your ${market.label} target`, paragraphs: [editorial.strategy[0], editorial.strategy[1]] },
        { heading: "Compare scope, not just titles", paragraphs: [`Use examples in ${editorial.sectors.slice(0,3).join(", ")} where they match your background. Record the responsibilities, stakeholder relationships and expected level of independence. Two employers can use the same title for substantially different work.`, "Choose a primary direction and a realistic alternative. This makes it easier to decide which achievements belong in your documents and which conversations are worth pursuing. Keep your current location, commitments and available time in the plan."] },
        { heading: "Build an evidence bank", paragraphs: [editorial.example, "For each example, note the situation, your decisions, the people involved and the outcome. Keep a version that protects confidential details. These notes can support your CV, LinkedIn profile, cover letters and interview preparation without making the documents identical."] },
        { heading: "A practical four-part review", items: ["Target: are the vacancies aligned with your skills and level?", "Evidence: can you demonstrate the recurring requirements?", "Application: are documents and responses specific and accurate?", "Feedback: what are recruiter conversations and interviews telling you?"] },
        { heading: "Prepare for a strategy consultation", paragraphs: ["Bring your current document, a few target vacancies and the questions you are trying to resolve. Include the constraints that matter to you, such as location, working arrangement, time frame and responsibilities. This lets the discussion focus on decisions rather than a general introduction to your career.", "A consultation provides direction and priorities. You remain responsible for applications and factual accuracy. Hiring, registration and immigration outcomes are outside the scope of career writing and are not guaranteed."] },
      ],
    },
  ];
}
