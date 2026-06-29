export type CityPage = {
  slug: string;
  /** City display name as used in copy, e.g. "New York City" */
  city: string;
  /** Short label for nav and cards, e.g. "NYC" */
  shortName: string;
  /** US state, e.g. "New York" */
  state: string;
  /** Optional state abbreviation, e.g. "NY" */
  stateAbbr: string;
  /** SEO meta title — keep under 60 chars */
  metaTitle: string;
  /** SEO meta description — keep under 160 chars */
  metaDescription: string;
  /** One-line local context — what hiring looks like here */
  localContext: string;
  /** 3-5 bullet local hiring landscape (employers, industries, dynamics) */
  localLandscape: string[];
  /** Highest-demand industry in this city (slug from industry-resume-pages.ts) */
  topIndustrySlug: string;
  /** 2-3 secondary industry slugs that also matter in this city */
  alsoStrongSlugs: string[];
};

export const cityPages: CityPage[] = [
  {
    slug: "new-york",
    city: "New York City",
    shortName: "NYC",
    state: "New York",
    stateAbbr: "NY",
    metaTitle: "Resume Writer in New York City — Wall Street, Tech & Media",
    metaDescription:
      "Premium resume writing in NYC for finance, tech, media, consulting, and executive roles. Founder-led, 90-day interview guarantee.",
    localContext:
      "NYC hiring is concentrated, fast, and dominated by finance, big tech, media, and consulting. Resumes get screened harder here than almost anywhere else in the country.",
    localLandscape: [
      "Wall Street and the alternative-asset world (Blackstone, KKR, Apollo, GS, MS, JPM, Citi) hire on a strict template — deal sheets, transaction sizing, sector exposure.",
      "Big-tech offices in Hudson Yards, SoHo, and Midtown (Google, Meta, Amazon, Bloomberg, Spotify) push the same FAANG-style screening as the West Coast.",
      "Media, advertising, and publishing (Condé Nast, NYT, Hearst, WPP) want brand-led narrative resumes with measurable audience or revenue outcomes.",
      "Consulting bench at MBB, Deloitte, Accenture, and the Big Four hires year-round, with structured campus and lateral cycles.",
      "Remote-first startup HQs registered in NYC widen the pool — resumes need to read as both city-based and remote-ready.",
    ],
    topIndustrySlug: "finance",
    alsoStrongSlugs: ["software-engineer", "executive", "marketing"],
  },
  {
    slug: "san-francisco",
    city: "San Francisco",
    shortName: "SF",
    state: "California",
    stateAbbr: "CA",
    metaTitle: "Resume Writer in San Francisco — Tech, AI & VC-Backed Startups",
    metaDescription:
      "Resume writing for SF Bay Area software, AI, and startup roles. FAANG-aware, ATS-clean, 90-day interview guarantee.",
    localContext:
      "SF and the broader Bay Area hire engineers, product, and growth talent at a higher density than anywhere else on the planet. Resumes are pattern-matched aggressively.",
    localLandscape: [
      "FAANG and big-tech (Google, Apple, Meta, Salesforce, OpenAI, Anthropic, Stripe) hire on tight signals — level, domain, and concrete impact.",
      "Series A through F startups dominate the rest of the market — resumes need to show ownership, ambiguity, and shipping speed.",
      "AI and ML hiring is currently the hottest segment in the country — positioning and recent work matter more than years of experience.",
      "Senior engineers, staff engineers, and engineering managers compete for $400K–$900K total comp roles. Resume format and seniority signal decide the screen.",
      "Product, design, and growth roles in SF expect outcomes-led resumes with explicit metrics on every bullet.",
    ],
    topIndustrySlug: "software-engineer",
    alsoStrongSlugs: ["executive", "marketing", "finance"],
  },
  {
    slug: "los-angeles",
    city: "Los Angeles",
    shortName: "LA",
    state: "California",
    stateAbbr: "CA",
    metaTitle: "Resume Writer in Los Angeles — Entertainment, Tech & Aerospace",
    metaDescription:
      "Resume writing for LA professionals — entertainment, media, tech, aerospace, healthcare. Founder-led, 90-day interview guarantee.",
    localContext:
      "LA hiring is more diverse than its reputation suggests. Entertainment and media are still anchors, but tech, aerospace, healthcare, and finance all hire heavily.",
    localLandscape: [
      "Entertainment hiring (Netflix, Disney, WB, Paramount, Sony, agencies) wants narrative-led resumes that demonstrate creative judgment and project scale.",
      "Tech and growth roles at Snap, Activision, Riot, SpaceX, Headspace, GoodRx push the same screening as SF, slightly less aggressive.",
      "Aerospace (SpaceX, Northrop Grumman, Aerospace Corp, Boeing) hires engineers with clearances — resume formatting is more conservative.",
      "Healthcare systems (Cedars-Sinai, UCLA Health, Kaiser) hire clinicians and administrators on credentialing-first formats.",
      "Finance and PE roles at Oaktree, Ares, Hellman & Friedman, Capital Group expect deal-sheet-grade resumes.",
    ],
    topIndustrySlug: "software-engineer",
    alsoStrongSlugs: ["marketing", "healthcare", "executive"],
  },
  {
    slug: "chicago",
    city: "Chicago",
    shortName: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    metaTitle: "Resume Writer in Chicago — Consulting, Finance & Healthcare",
    metaDescription:
      "Resume writing for Chicago professionals — consulting, finance, healthcare, manufacturing, tech. Founder-led, 90-day interview guarantee.",
    localContext:
      "Chicago is one of the deepest US business cities — strong consulting, finance, healthcare, manufacturing, and a growing tech scene around the West Loop and Fulton Market.",
    localLandscape: [
      "Consulting hubs at McKinsey, BCG, Bain, Deloitte, Accenture, A.T. Kearney run the largest Midwest hiring engine.",
      "Finance and exchanges (CME, Citadel, Citadel Securities, Northern Trust, BMO, Discover) hire heavily in quant, trading, and corp-fin tracks.",
      "Healthcare giants (Abbott, AbbVie, Walgreens Boots Alliance, Northwestern Medicine, Rush) keep clinician and admin pipelines deep.",
      "Manufacturing and industrials (Boeing, Caterpillar adjacency, Mondelez, Kraft Heinz) still drive senior ops and supply-chain hiring.",
      "Tech and SaaS (Salesforce Tower, Tempus, Tovala, G2, Cameo) push the West Loop / Fulton Market scene.",
    ],
    topIndustrySlug: "finance",
    alsoStrongSlugs: ["healthcare", "executive", "marketing"],
  },
  {
    slug: "houston",
    city: "Houston",
    shortName: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    metaTitle: "Resume Writer in Houston — Energy, Healthcare & Aerospace",
    metaDescription:
      "Resume writing for Houston professionals — energy, oil & gas, healthcare, aerospace, finance. Founder-led, 90-day interview guarantee.",
    localContext:
      "Houston hiring is dominated by energy, the Texas Medical Center, and aerospace — three of the largest sectoral hiring engines in the South.",
    localLandscape: [
      "Energy and oil & gas (ExxonMobil, Chevron, Shell, ConocoPhillips, Halliburton, Schlumberger) hire engineers, geologists, finance, and project leaders on traditional-format resumes.",
      "Texas Medical Center — the largest medical complex in the world — drives massive hiring at MD Anderson, Memorial Hermann, Baylor College of Medicine, and Houston Methodist.",
      "Aerospace (NASA Johnson Space Center, Lockheed Martin, Boeing) hires cleared engineers with federal-adjacent resume conventions.",
      "Renewable energy and transition hiring (BP, Shell New Energies, EDF Renewables) is the fastest-growing energy sub-sector.",
      "Finance and corporate roles at Texas-based firms (Hines, Crescent, Quanta Services) round out the executive market.",
    ],
    topIndustrySlug: "executive",
    alsoStrongSlugs: ["healthcare", "finance", "software-engineer"],
  },
  {
    slug: "boston",
    city: "Boston",
    shortName: "Boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    metaTitle: "Resume Writer in Boston — Biotech, Education & Finance",
    metaDescription:
      "Resume writing for Boston professionals — biotech, pharma, healthcare, finance, tech, education. Founder-led, 90-day interview guarantee.",
    localContext:
      "Boston punches above its weight on hiring depth — biotech and pharma rival SF in density, the financial sector is strong, and the academic-to-industry pipeline is unmatched.",
    localLandscape: [
      "Biotech and pharma in Kendall Square (Moderna, Vertex, Biogen, Takeda, Novartis NIBR) hire scientists, clinical, regulatory, and commercial talent at scale.",
      "Healthcare systems (Mass General Brigham, Beth Israel Deaconess, Boston Children's) anchor clinical hiring.",
      "Finance (Fidelity, State Street, Wellington, Bain Capital) drives a deep finance and PE hiring market.",
      "Tech (HubSpot, Wayfair, Klaviyo, DraftKings) hires engineers, product, and growth across multiple stages.",
      "Academic-to-industry transitions (PhDs and postdocs from MIT, Harvard, BU moving into biotech/tech) are a constant pipeline that needs specific resume framing.",
    ],
    topIndustrySlug: "healthcare",
    alsoStrongSlugs: ["software-engineer", "finance", "executive"],
  },
  {
    slug: "washington-dc",
    city: "Washington DC",
    shortName: "DC",
    state: "District of Columbia",
    stateAbbr: "DC",
    metaTitle: "Resume Writer in Washington DC — Federal, Defense & Policy",
    metaDescription:
      "Federal and DC-area resume writing — government, contractors, policy, defense, international development. 90-day interview guarantee.",
    localContext:
      "DC hiring is unique: federal-style resumes, security clearances, and a sharp line between government work and government-contracting work.",
    localLandscape: [
      "Federal civilian agencies hire through USAJOBS with strict resume conventions (3–8 pages, KSAs, specialized experience statements).",
      "Defense contractors (Booz Allen, BAH, SAIC, Leidos, GDIT, Northrop Grumman, RTX) hire cleared professionals on private-sector format.",
      "Think tanks, NGOs, and policy organizations (Brookings, AEI, RAND, CSIS, USIP) want academic-style CVs with publications.",
      "International development (USAID partners, World Bank, IFC, IDB) expects a development-CV format with country experience and language proficiency.",
      "Capitol Hill and lobbying roles want concise, policy-fluent resumes with legislative or campaign exposure quantified.",
    ],
    topIndustrySlug: "federal",
    alsoStrongSlugs: ["military-to-civilian", "executive", "finance"],
  },
  {
    slug: "seattle",
    city: "Seattle",
    shortName: "Seattle",
    state: "Washington",
    stateAbbr: "WA",
    metaTitle: "Resume Writer in Seattle — Tech, Aerospace & Cloud",
    metaDescription:
      "Resume writing for Seattle tech professionals — Amazon, Microsoft, Boeing, cloud, AI. Founder-led, 90-day interview guarantee.",
    localContext:
      "Seattle is one of the densest tech-hiring markets in the US — Amazon and Microsoft alone employ tens of thousands of engineers, and the wave of AI startups around Lake Union is growing fast.",
    localLandscape: [
      "Amazon (AWS, retail, devices, advertising) drives the largest single hiring footprint in the city — Leadership Principles and bar-raiser interviews need very specific resume framing.",
      "Microsoft (Azure, Office, Xbox, GitHub) hires engineers and PMs across all seniority levels with a strong East-Side presence.",
      "Boeing and aerospace adjacency keeps cleared engineering hiring strong, including federal-style formats.",
      "AI startups (clustered around Pioneer Square, Lake Union, Bellevue) are pulling staff and senior engineers out of FAANG.",
      "Cloud, infrastructure, and security roles are a city specialty — resumes need scale numbers (throughput, latency, customer count).",
    ],
    topIndustrySlug: "software-engineer",
    alsoStrongSlugs: ["executive", "federal", "finance"],
  },
  {
    slug: "austin",
    city: "Austin",
    shortName: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    metaTitle: "Resume Writer in Austin — Tech, SaaS & Semiconductor",
    metaDescription:
      "Resume writing for Austin professionals — tech, SaaS, semiconductor, startups. ATS-clean, founder-led, 90-day interview guarantee.",
    localContext:
      "Austin is the fastest-growing US tech city of the last five years — Apple, Tesla, Oracle, Indeed, plus a wave of SaaS startups have pushed hiring volume well past Bay Area density per capita.",
    localLandscape: [
      "Tesla's Gigafactory and Apple's Austin campus are the two largest tech employers, hiring engineers, ops, and manufacturing leaders.",
      "Semiconductor manufacturing (Samsung, NXP, AMD, GlobalFoundries adjacency) is a growing specialty around Taylor and Round Rock.",
      "SaaS scene (Indeed, Procore, Bazaarvoice, Workrise, Cloudflare ATX) hires across engineering, product, sales, and customer success.",
      "Remote-first startups headquartered or registered in Austin widen the engineering pool considerably.",
      "Healthcare and life sciences (Dell Med, ABC, Pelago) are a smaller but growing segment.",
    ],
    topIndustrySlug: "software-engineer",
    alsoStrongSlugs: ["executive", "marketing", "sales"],
  },
  {
    slug: "atlanta",
    city: "Atlanta",
    shortName: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    metaTitle: "Resume Writer in Atlanta — Fintech, Logistics & Consulting",
    metaDescription:
      "Resume writing for Atlanta professionals — fintech, logistics, healthcare, consulting, marketing. 90-day interview guarantee.",
    localContext:
      "Atlanta is the financial-services and logistics capital of the Southeast — fintech is the fastest-growing local segment, with Coca-Cola, Delta, UPS, and Home Depot anchoring the corporate base.",
    localLandscape: [
      "Fintech (NCR, FIS, Global Payments, Greenlight, Calendly) drives the most active local engineering and product hiring.",
      "Fortune 500 headquarters (Coca-Cola, Delta, UPS, Home Depot, Truist, Inspire Brands) keep senior corporate hiring steady.",
      "Logistics and supply-chain leadership (UPS, Norfolk Southern, Genuine Parts) is a city specialty — resumes need scope and throughput numbers.",
      "Healthcare (Emory Healthcare, Piedmont, CDC) hires clinicians and public-health professionals.",
      "Film and media (Tyler Perry Studios, EUE/Screen Gems, BET) bring a smaller but visible creative-industry talent flow.",
    ],
    topIndustrySlug: "finance",
    alsoStrongSlugs: ["software-engineer", "marketing", "executive"],
  },
  {
    slug: "dallas",
    city: "Dallas",
    shortName: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    metaTitle: "Resume Writer in Dallas / Fort Worth — Corporate HQ & Finance",
    metaDescription:
      "Resume writing for DFW professionals — corporate HQ roles, finance, energy, healthcare, defense. 90-day interview guarantee.",
    localContext:
      "DFW concentrates more Fortune 500 headquarters than almost any other US metro, with a particularly strong corporate-finance, energy, and defense base.",
    localLandscape: [
      "Corporate headquarters (AT&T, ExxonMobil, AAdvantage, Texas Instruments, McKesson, Charles Schwab) drive senior corporate hiring.",
      "Finance and wealth management (Schwab HQ, USAA adjacency, Fidelity Westlake, Goldman Dallas campus) push a strong financial-services market.",
      "Defense and aerospace (Lockheed Martin, Bell Textron, Raytheon) hire cleared engineers on federal-adjacent formats.",
      "Healthcare (Baylor Scott & White, Children's Health, UT Southwestern) anchors a deep clinical and admin market.",
      "Tech is growing fast — Toyota IT HQ, State Farm tech campuses, and a wave of SaaS startups in Frisco / Plano.",
    ],
    topIndustrySlug: "executive",
    alsoStrongSlugs: ["finance", "software-engineer", "healthcare"],
  },
  {
    slug: "philadelphia",
    city: "Philadelphia",
    shortName: "Philly",
    state: "Pennsylvania",
    stateAbbr: "PA",
    metaTitle: "Resume Writer in Philadelphia — Healthcare, Pharma & Finance",
    metaDescription:
      "Resume writing for Philadelphia professionals — healthcare, pharma, finance, biotech, federal. 90-day interview guarantee.",
    localContext:
      "Philadelphia has one of the deepest healthcare and pharma hiring markets in the US, with a strong finance and federal-adjacent base.",
    localLandscape: [
      "Healthcare systems (Penn Medicine, Jefferson, CHOP, Temple) hire clinicians and admins at scale.",
      "Pharma corridor (GSK, Merck, J&J, Spark Therapeutics) drives science, regulatory, and commercial hiring.",
      "Comcast / NBCUniversal HQ creates a large media, tech, and corporate-comms hiring footprint.",
      "Finance (Vanguard in Malvern, Lincoln Financial, Independence Blue Cross) anchors steady financial-services hiring.",
      "Federal and quasi-federal (Federal Reserve Philadelphia, Naval Yard, ONR, Wharton-adjacent research) supports federal-style resume work.",
    ],
    topIndustrySlug: "healthcare",
    alsoStrongSlugs: ["finance", "federal", "executive"],
  },
  {
    slug: "miami",
    city: "Miami",
    shortName: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    metaTitle: "Resume Writer in Miami — Finance, LatAm & Hospitality",
    metaDescription:
      "Resume writing for Miami professionals — finance, real estate, Latin America business, hospitality, healthcare. 90-day interview guarantee.",
    localContext:
      "Miami has become a major US financial-services hub in the last five years — bilingual roles, Latin America regional positions, and remote-first hires drive much of the market.",
    localLandscape: [
      "Finance, PE, and crypto (Citadel relocation, Blackstone Miami, Ken Griffin, FTX adjacency, Founders Fund Miami) drive a fast-growing senior finance market.",
      "Latin America regional HQs (Visa LatAm, Mastercard LatAm, big-pharma LatAm) hire bilingual professionals across functions.",
      "Real estate development and hospitality (Soffer, Related, Marriott regional, Loews) is a long-standing local specialty.",
      "Healthcare (Baptist Health, Jackson Health, UMHealth) anchors the clinical market.",
      "Remote-first tech (a wave of NYC and SF founders relocating) widens the engineering pool.",
    ],
    topIndustrySlug: "finance",
    alsoStrongSlugs: ["executive", "marketing", "healthcare"],
  },
  {
    slug: "denver",
    city: "Denver",
    shortName: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    metaTitle: "Resume Writer in Denver — Tech, Aerospace & Energy",
    metaDescription:
      "Resume writing for Denver and Boulder professionals — tech, aerospace, renewable energy, defense, healthcare. 90-day interview guarantee.",
    localContext:
      "Denver and the Front Range combine a strong tech scene, federal aerospace contractors, and a growing renewable-energy sector that's pulling talent from coastal cities.",
    localLandscape: [
      "Tech (Palantir HQ relocation, Google Boulder, Salesforce, Workday, Twilio) drives the bulk of engineering hiring.",
      "Aerospace and defense (Lockheed Martin Space, Ball Aerospace, Northrop Grumman, Sierra Space) hires cleared engineers.",
      "Renewable energy (NREL, Vestas, Schneider, Xcel Energy) is the fastest-growing local segment.",
      "Healthcare (UCHealth, HCA Healthone, Children's Hospital Colorado) anchors clinical hiring.",
      "Outdoor industry (VF Corp, Patagonia adjacency, Black Diamond) is a smaller but distinctive local specialty.",
    ],
    topIndustrySlug: "software-engineer",
    alsoStrongSlugs: ["federal", "executive", "healthcare"],
  },
  {
    slug: "san-diego",
    city: "San Diego",
    shortName: "San Diego",
    state: "California",
    stateAbbr: "CA",
    metaTitle: "Resume Writer in San Diego — Biotech, Defense & Tech",
    metaDescription:
      "Resume writing for San Diego professionals — biotech, life sciences, defense, naval, tech. 90-day interview guarantee.",
    localContext:
      "San Diego is one of the top biotech clusters in the US, with the largest naval base on the West Coast and a strong life-sciences talent flow from UCSD and Salk.",
    localLandscape: [
      "Biotech and life sciences (Illumina, Thermo Fisher, Pfizer Vaccines, Neurocrine, Mirati) dominate science and clinical hiring.",
      "Defense and naval (Naval Base San Diego, General Atomics, Northrop Grumman, SPAWAR) supports cleared engineering and military-transition hiring.",
      "Tech (Qualcomm, ServiceNow, Tealium, ClickUp) is a strong secondary engine.",
      "Tourism and hospitality leadership (Hyatt, Marriott regional, theme-park ops) is steady.",
      "Cross-border roles with Tijuana and the broader CaliBaja region create bilingual operations and supply-chain hiring.",
    ],
    topIndustrySlug: "healthcare",
    alsoStrongSlugs: ["software-engineer", "military-to-civilian", "executive"],
  },
];

export function getCityPage(slug: string): CityPage | null {
  return cityPages.find((c) => c.slug === slug) ?? null;
}
