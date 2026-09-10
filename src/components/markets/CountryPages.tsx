import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FileText, BriefcaseBusiness, PenLine, PanelsTopLeft, Compass, UserRoundCheck, Globe2, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CountryHero from "./CountryHero";
import { marketEditorial } from "@/content/market-editorial";
import { marketPath, type Market, type MarketSection } from "@/lib/markets";
import { marketBundles, marketEnquiryLink, marketPrice, marketServices } from "@/lib/market-pricing";
import { marketRateDate, marketRateSource } from "@/lib/market-rates";
import { getMarketArticles, getMarketContentDate, type MarketArticle } from "@/lib/market-articles";
import { marketPageSchema, marketPageTitle } from "@/lib/market-seo";
import styles from "./country.module.css";
import { featuredReviews, GOOGLE_REVIEWS_URL } from "@/lib/featured-reviews";

function JsonLd({ value }: { value: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}

function PageHeading({ market, section, title, description }: { market: Market; section: MarketSection; title?: string; description: string }) {
  return <section className={styles.titleBand}><div className={styles.container}><nav className={styles.breadcrumbs} aria-label="Breadcrumb"><Link href={marketPath(market)}>{market.label} Home</Link><span aria-hidden="true">/</span><span>{section === "catalogue" ? "Catalogue" : section.charAt(0).toUpperCase() + section.slice(1)}</span></nav><p className={styles.eyebrow}>{market.label} / Founder-led career branding</p><h1>{title ?? marketPageTitle(market, section)}</h1><p>{description}</p></div></section>;
}

function PriceNote({ market }: { market: Market }) {
  return <p className={styles.priceNote}>{market.currency === "USD" ? "Prices are in USD." : `${market.currency} prices are reference estimates converted from our USD service prices, rounded for display. Rates dated ${marketRateDate}.`} Final scope, invoice currency, applicable taxes or fees and supported payment method are confirmed before payment. {market.currency !== "USD" && <>Reference rates by <a href={marketRateSource} rel="noreferrer" target="_blank">ExchangeRate-API</a>.</>}</p>;
}

function Cta({ market }: { market: Market }) {
  return <section className={styles.ctaBand}><div className={styles.container}><div><h2>Your next {market.label} opportunity starts with a clearer story.</h2><p>Share your current document, target role and career goals for a personal review.</p></div><Link href={marketPath(market, "contact")} className={styles.button}>Request a Profile Review <ArrowUpRight size={17} aria-hidden="true" /></Link></div></section>;
}

function Services({ market, detailed = false }: { market: Market; detailed?: boolean }) {
  const editorial = marketEditorial[market.slug];
  const descriptions = [
    `A clear, ATS-friendly ${market.document} tailored to your ${market.label} target role, with achievement-led writing and relevant industry language.`,
    `Headline, About and Experience copy aligned with your ${market.label} career direction. You retain control of your account; no password is requested.`,
    `A role-specific letter that connects your experience to the employer's requirements and explains why the opportunity is a considered next step.`,
    `A ${market.label}-focused version of your career document for cross-border applications. ${editorial.focus}`,
    "A premium visual presentation for suitable creative or client-facing applications. An application portal may still need a separate text-focused document.",
    `Personal guidance on role fit, positioning and career development for ${market.label} opportunities. A practical plan built around your experience and goals.`,
  ];
  const icons = [FileText, BriefcaseBusiness, PenLine, Globe2, PanelsTopLeft, Compass];
  return <div className={styles.grid}>{marketServices(market).map((service, index) => {
    const Icon = icons[index];
    return <article key={service.key} className={styles.service}><Icon className={styles.serviceIcon} size={27} strokeWidth={1.5} aria-hidden="true" /><h3>{service.title}</h3><p>{descriptions[index]}</p><p className={styles.price}>From {marketPrice(Math.min(...service.prices.map((price) => price.usd)), market)}</p><Link className={styles.textLink} href={`${marketPath(market, "catalogue")}#${service.key}`}>Compare career levels <ArrowUpRight size={16} aria-hidden="true" /></Link>{detailed && <div><Link href={marketEnquiryLink(market, service.title)} className={styles.textLink}>Apply for This Service <ArrowUpRight size={16} aria-hidden="true" /></Link></div>}</article>;
  })}</div>;
}

function Bundles({ market, preview = false }: { market: Market; preview?: boolean }) {
  const bundles = preview ? marketBundles.filter((bundle) => ["career", "executive", "c-suite"].includes(bundle.id)) : marketBundles;
  return <div className={styles.bundleGrid}>{bundles.map((bundle) => <article key={bundle.id} className={`${styles.bundle} ${bundle.popular ? styles.popular : ""} ${bundle.premium ? styles.premium : ""}`}><p className={styles.badge}>{bundle.popular ? "Most Popular" : bundle.premium ? "Signature leadership service" : "Founder-led"}</p><h3>{bundle.name}</h3><p>{bundle.audience}</p><p className={styles.bundlePrice}>{marketPrice(bundle.usd, market)}</p><ul className={styles.list}>{bundle.features.map((feature) => <li key={feature}>{feature.replace("optimisation", market.optimisation)}</li>)}</ul><Link href={marketEnquiryLink(market, bundle.name)} className={bundle.premium ? styles.goldButton : styles.button}>Request This Package <ArrowUpRight size={16} aria-hidden="true" /></Link></article>)}</div>;
}

function Process({ market }: { market: Market }) {
  const steps = [
    ["Share your direction", `Send your current ${market.document}, a ${market.label} vacancy and your career goals.`],
    ["Personal profile review", "Your career level, experience and target requirements shape the service recommendation."],
    ["Strategic writing", "Your evidence becomes clear, role-focused documents and profile copy."],
    ["Review & refinement", "Check the facts and refine the work within your confirmed revision scope."],
    ["Make your next move", "Use the documents for applications, professional conversations and recruiter outreach."],
  ];
  return <section className={`${styles.band} ${styles.tint}`} id="process"><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>A considered process</p><h2>How your {market.label} service works</h2></div><div className={styles.steps}>{steps.map(([title, text], index) => <div key={title}><div className={styles.stepNumber}>0{index + 1}</div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>;
}

function Faq({ market }: { market: Market }) {
  const editorial = marketEditorial[market.slug];
  const items = [
    { q: `Is this a local office in ${market.name}?`, a: `This is Chanuka Jeewantha's English-language service for professionals targeting ${market.name}. The service is delivered remotely; this country section does not represent a local physical office.` },
    { q: editorial.question, a: editorial.answer },
    { q: `How much does ${market.label} ${market.document} writing cost?`, a: `ATS ${market.document} writing starts at ${marketPrice(89, market)} for students, with separate professional, senior, executive and C-suite levels. ${market.currency === "USD" ? "Prices are in USD." : `${market.currency} amounts are reference conversions from USD.`} Your scope and final invoice are confirmed before payment.` },
    { q: "Can you guarantee a job, interview or recruiter response?", a: "No. Writing improves document clarity, positioning and recruiter-readiness. Outcomes also depend on experience, applications, market conditions and employer decisions. Visa and migration outcomes are not part of this service." },
    { q: "How are payment and delivery arranged?", a: "After reviewing your requirements, Chanuka confirms the package, delivery schedule, revision support and supported payment arrangements. A currency estimate does not guarantee that a particular payment provider is available in your country." },
    { q: `How do I start a ${market.label} enquiry?`, a: "Use this country section's contact form. Your target market and selected package are carried into the enquiry; you can also share your current document, a vacancy and the outcome you want to work towards." },
  ];
  return <section className={styles.band} id="faq"><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>Before you apply</p><h2>{market.label} career service questions</h2></div><JsonLd value={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }} />{items.map((item) => <details className={styles.faq} key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>;
}

function ArticleCards({ market }: { market: Market }) {
  return <div className={styles.grid}>{getMarketArticles(market).map((article) => <article key={article.slug} className={styles.articleCard}><p className={styles.eyebrow}>{article.category}</p><h3><Link href={marketPath(market, `blog/${article.slug}`)}>{article.title}</Link></h3><p>{article.description}</p><Link className={styles.textLink} href={marketPath(market, `blog/${article.slug}`)}>Read the guide <ArrowUpRight size={16} aria-hidden="true" /></Link></article>)}</div>;
}

export function CountryHome({ market }: { market: Market }) {
  const editorial = marketEditorial[market.slug];
  return <>
    <JsonLd value={marketPageSchema(market)} />
    <CountryHero market={market} />
    <div className={styles.trustStrip}><div className={styles.container}><span><UserRoundCheck size={19} aria-hidden="true" /> Personally crafted by Chanuka</span><span><ShieldCheck size={19} aria-hidden="true" /> ATS-friendly, evidence-led writing</span><span><Globe2 size={19} aria-hidden="true" /> Remote service / English</span><span>{market.currency} pricing estimates</span></div></div>
    <section className={styles.band}><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>Your market. Your next step.</p><h2>Career documents with a {market.label} direction.</h2><p>{editorial.focus}</p></div><div className={styles.twoColumns}><div><p>{editorial.cv[0]}</p><p>Support for professionals targeting {editorial.cities.join(", ")}, and suitable remote roles. Each engagement begins with your target position and the evidence behind your experience.</p></div><div><ul className={styles.list}><li>Students and graduates turning projects into relevant evidence</li><li>Professionals making a considered career transition</li><li>Senior specialists and executives clarifying their next level</li><li>Directors, founders and C-suite leaders shaping a public professional profile</li></ul></div></div></div></section>
    <section className={`${styles.band} ${styles.tint}`}><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>Premium services</p><h2>One clear story, across every career touchpoint.</h2><p>Choose a focused service or bring your documents together in a premium bundle.</p></div><Services market={market} /></div></section>
    <section className={styles.band}><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>International Signature Series</p><h2>Personally written. Priced for your career level.</h2><p>Compare every service and all five premium bundles in {market.currency}. Your chosen market stays with you from the catalogue to your enquiry.</p></div><Bundles market={market} preview /><div className={styles.actions}><Link href={marketPath(market, "catalogue")} className={styles.textLink}>View the complete catalogue <ArrowUpRight size={16} aria-hidden="true" /></Link></div><div className={styles.scope}><PriceNote market={market} /></div></div></section>
    <section className={`${styles.band} ${styles.tint}`}><div className={styles.container}><div className={styles.twoColumns}><div><p className={styles.eyebrow}>Why work with Chanuka</p><div className={styles.heading}><h2>A personal review before a professional rewrite.</h2></div><p>{editorial.example}</p><Link href={marketPath(market, "about")} className={styles.textLink}>Meet your writer <ArrowUpRight size={16} aria-hidden="true" /></Link></div><ul className={styles.list}><li>Founder-led review and writing</li><li>A target role and market agreed before drafting</li><li>Clear career storytelling supported by your real experience</li><li>Consistent positioning across CV, LinkedIn and cover letter</li><li>Scope, price and revision terms confirmed before payment</li></ul></div></div></section>
    <Process market={market} />
    <section className={`${styles.band} ${styles.tint}`}><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>Client feedback</p><h2>Care in the writing. Clarity in the communication.</h2><p>Selected feedback from Chanuka's wider client base, not presented as {market.label}-specific results.</p></div><div className={styles.grid}>{featuredReviews.slice(0, 3).map((review) => <figure key={review.name} className={styles.articleCard}><blockquote><p>{review.quote}</p></blockquote><figcaption className={styles.byline}>{review.name} / Google review</figcaption></figure>)}</div><a className={styles.textLink} href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">Read client reviews <ArrowUpRight size={16} aria-hidden="true" /></a></div></section>
    <section className={styles.band}><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>{market.label} career insights</p><h2>Understand the application before you send it.</h2></div><ArticleCards market={market} /></div></section>
    <Faq market={market} /><Cta market={market} />
  </>;
}

export function CountryServices({ market }: { market: Market }) {
  return <><JsonLd value={marketPageSchema(market, "services")} /><PageHeading market={market} section="services" description={`Premium ${market.document} writing, LinkedIn ${market.optimisation} and career development support for ${market.name}. Choose the work your next application actually needs.`} /><section className={styles.band}><div className={styles.container}><Services market={market} detailed /><div className={styles.scope}><PriceNote market={market} /></div></div></section><Process market={market} /><Faq market={market} /><Cta market={market} /></>;
}

export function CountryCatalogue({ market }: { market: Market }) {
  const services = marketServices(market);
  return <><JsonLd value={marketPageSchema(market, "catalogue")} /><PageHeading market={market} section="catalogue" description={`International Signature Series: premium career documents and complete branding packages for ${market.name}, with transparent ${market.currency} price estimates.`} /><section className={styles.band}><div className={styles.container}><PriceNote market={market} /><nav className={styles.anchorNav} aria-label="Catalogue sections"><a href="#bundles">Bundle packages</a>{services.map((service) => <a href={`#${service.key}`} key={service.key}>{service.title}</a>)}</nav></div></section><section className={`${styles.band} ${styles.tint}`} id="bundles"><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>Premium bundles</p><h2>A consistent career brand, built together.</h2><p>Five packages for different stages of your career. The Global Migration Pack covers career documents, not immigration advice.</p></div><Bundles market={market} /></div></section><section className={styles.band}><div className={styles.container}><div className={styles.heading}><p className={styles.eyebrow}>Individual services</p><h2>International Signature Series</h2><p>Choose the service and career level that match your scope. All work is personally crafted by Chanuka.</p></div>{services.map((service) => <section key={service.key} id={service.key} className={styles.pricingGroup}><h2>{service.title}</h2><p>{service.description}</p><table className={styles.table}><caption>{market.label} service prices in {market.currency}{market.currency !== "USD" ? " (reference estimates)" : ""}</caption><thead><tr><th scope="col">Career level / session</th><th scope="col">{market.currency}</th></tr></thead><tbody>{service.prices.map((price) => <tr key={price.label}><th scope="row">{price.label}</th><td>{marketPrice(price.usd, market)}</td></tr>)}</tbody></table><Link className={styles.button} href={marketEnquiryLink(market, service.title)}>Apply for This Service <ArrowUpRight size={16} aria-hidden="true" /></Link></section>)}</div></section><Faq market={market} /><Cta market={market} /></>;
}

export function CountryAbout({ market }: { market: Market }) {
  const editorial = marketEditorial[market.slug];
  return <><JsonLd value={marketPageSchema(market, "about")} /><PageHeading market={market} section="about" title={`Chanuka Jeewantha. Your ${market.label} career story, personally crafted.`} description={`Founder-led ${market.document} writing, LinkedIn ${market.optimisation} and career strategy for professionals targeting ${market.name}. Delivered remotely in English.`} /><section className={styles.band}><div className={styles.container}><div className={styles.twoColumns}><div><Image src="/images/hero-chanuka.jpg" alt="Chanuka Jeewantha" width={1200} height={1500} sizes="(max-width: 760px) 100vw, 540px" className={styles.founderImage} /><h2 className={styles.founderName}>Chanuka Jeewantha</h2><p>Founder / Career document writer</p></div><div><div className={styles.heading}><p className={styles.eyebrow}>The person behind the work</p><h2>Your experience deserves a careful reading.</h2></div><p>I provide premium resume and CV writing, LinkedIn profile optimisation, cover letters and career strategy. Each engagement starts with a review of where you are now and what you want your next move to achieve.</p><p>For professionals targeting {market.name}, that means {editorial.focus.charAt(0).toLowerCase() + editorial.focus.slice(1)}</p><p>{editorial.strategy[0]}</p><p>The writing process is built around your real achievements. You help verify the facts, review the draft and refine the result within the agreed scope. Qualifications, results and experience are never invented to make an application sound stronger.</p><p>This is a remote service for the {market.label} market, not a claim of a physical office there. Documents are written in English, and any specialist format or additional language requirement is discussed before the work is accepted.</p><Link href={marketPath(market, "contact")} className={styles.button}>Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></Link></div></div></div></section><Process market={market} /><Cta market={market} /></>;
}

export function CountryBlog({ market }: { market: Market }) {
  return <><JsonLd value={marketPageSchema(market, "blog")} /><PageHeading market={market} section="blog" description={`Practical guidance for ${market.name}: how to present your experience, strengthen your LinkedIn profile and plan your next career move.`} /><section className={styles.band}><div className={styles.container}><ArticleCards market={market} /></div></section><Cta market={market} /></>;
}

export function CountryArticle({ market, article }: { market: Market; article: MarketArticle }) {
  const editorial = marketEditorial[market.slug];
  const publishedAt = getMarketContentDate(market);
  const publishedLabel = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(publishedAt));
  return <><JsonLd value={marketPageSchema(market, "blog", article)} /><PageHeading market={market} section="blog" title={article.title} description={article.description} /><section className={styles.band}><div className={styles.container}><div className={styles.articleLayout}><article className={styles.articleBody}><div className={styles.byline}>By <Link href={marketPath(market, "about")}>Chanuka Jeewantha</Link> / <time dateTime={publishedAt}>{publishedLabel}</time> / {market.label}</div><div className={styles.answer}><h2>The short answer</h2><p>{article.answer}</p></div>{article.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items && <ul className={styles.list}>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}<div className={styles.sources}><h2>Sources & further reading</h2><p>These resources provide application and profile guidance. Examples in this guide are illustrative; employer instructions take priority.</p>{editorial.sources.map((source) => <a key={source.url} href={source.url} rel="noreferrer" target="_blank">{source.title}</a>)}</div><Link href={marketPath(market, "blog")} className={styles.textLink}>All {market.label} career guides</Link></article><aside className={styles.articleAside}><h2>In this guide</h2><nav aria-label="Article contents">{article.sections.map((section, index) => <a key={section.heading} href={`#section-${index + 1}`}>{section.heading}</a>)}</nav><p>Put the guidance into practice with a personal review of your target role and current document.</p><Link href={marketPath(market, "contact")} className={styles.textLink}>Request a Profile Review <ArrowUpRight size={16} aria-hidden="true" /></Link><Link href={marketPath(market, "catalogue")} className={styles.textLink}>Explore {market.currency} packages</Link></aside></div></div></section><Cta market={market} /></>;
}

export function CountryContact({ market, selection, careerLevel }: { market: Market; selection?: string; careerLevel?: string }) {
  const options = [...marketServices(market).map((service) => service.title), ...marketBundles.map((bundle) => bundle.name)];
  return <><JsonLd value={marketPageSchema(market, "contact")} /><PageHeading market={market} section="contact" description={`Tell Chanuka about your ${market.label} target role, experience and the support you need. Your package, schedule and payment arrangements are confirmed after a personal review.`} /><div className={styles.contact}><ContactForm key={`${market.slug}:${selection ?? ""}:${careerLevel ?? ""}`} marketContext={{ name: market.name, currency: market.currency, path: marketPath(market, "contact") }} defaultTargetCountry={market.name} defaultDialCode={market.dialCode} defaultService={selection && options.includes(selection) ? selection : "International Career Pack"} defaultCareerLevel={careerLevel} serviceChoices={options} /></div><section className={styles.band}><div className={styles.container}><PriceNote market={market} /><p className={styles.scope}>English documents and remote delivery. Please do not send passport numbers, banking details or account passwords with an enquiry. <Link href="/privacy-policy">Privacy policy</Link>.</p></div></section></>;
}
