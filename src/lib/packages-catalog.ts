export type ServiceKey =
  | "ats-cv"
  | "linkedin"
  | "cover-letter"
  | "foreign-cv"
  | "graphical-cv"
  | "consultation";

export type ExperienceKey =
  | "student"
  | "fresh-graduate"
  | "professional"
  | "senior-professional"
  | "executive"
  | "c-suite";

export type ServiceOptionKey = "founder-led" | "supervised";

export type PackageCategoryKey =
  | ServiceKey
  | "cv-writing"
  | "cover-letter"
  | "bundle-discount"
  | "bulk-discount"
  | "cv-review";

export type PackageProduct = {
  slug: string;
  code: string;
  name: string;
  category: string;
  categoryKey: PackageCategoryKey;
  serviceKey: ServiceKey;
  experienceKey: ExperienceKey;
  optionKey: ServiceOptionKey;
  audience: string;
  description?: string;
  idealFor?: string;
  priceLkr: number;
  priceNote?: string;
  delivery: string;
  features: string[];
  cta: string;
  isMostPopular?: boolean;
};

export type PackageCategory = {
  key: PackageCategoryKey;
  title: string;
  description: string;
  isPriority?: boolean;
  packages: PackageProduct[];
};

export type CatalogueSelection = {
  serviceKeys: ServiceKey[];
  experienceKey: ExperienceKey;
  optionKey: ServiceOptionKey;
};

export const paymentInstructions = {
  bank: "International payment method to be confirmed",
  accountName: "Chanuka Jeewantha",
  accountNumber: "Shared after enquiry approval",
  branch: "Global remote service",
  methodNote:
    "International payment options such as Wise, PayPal, Payoneer, Stripe, or bank transfer can be confirmed after your profile review.",
};

export const serviceOptions: Array<{
  key: ServiceKey;
  number: number;
  title: string;
  shortTitle: string;
  categoryTitle: string;
  description: string;
}> = [
  {
    key: "ats-cv",
    number: 1,
    title: "International ATS Resume / CV Writing",
    shortTitle: "ATS CV Writing",
    categoryTitle: "ATS CV Writing",
    description:
      "Premium ATS-friendly CV and resume writing tailored to your target role, industry, country, and career level.",
  },
  {
    key: "linkedin",
    number: 2,
    title: "LinkedIn Profile Optimization",
    shortTitle: "LinkedIn Optimization",
    categoryTitle: "LinkedIn Optimization",
    description:
      "A recruiter-focused LinkedIn profile rewrite designed to improve positioning, keyword strength, and global visibility.",
  },
  {
    key: "cover-letter",
    number: 3,
    title: "Cover Letter Writing",
    shortTitle: "Cover Letter Writing",
    categoryTitle: "Cover Letter Writing",
    description:
      "Professionally written cover letters tailored to target roles, industries, and international job applications.",
  },
  {
    key: "foreign-cv",
    number: 4,
    title: "Foreign Job CV / International Format",
    shortTitle: "Foreign Job CV",
    categoryTitle: "Foreign Job CV / International Format",
    description:
      "Country-specific CV and resume writing for candidates applying to global markets, migration-based opportunities, and international employers.",
  },
  {
    key: "graphical-cv",
    number: 5,
    title: "Graphical CV / Premium Design",
    shortTitle: "Graphical CV",
    categoryTitle: "Graphical CV / Premium Design",
    description:
      "A premium visual CV option for selected industries where professional presentation and personal branding matter.",
  },
  {
    key: "consultation",
    number: 6,
    title: "Career Consultation",
    shortTitle: "Career Consultation",
    categoryTitle: "Career Consultation",
    description:
      "Founder-led career strategy sessions for professionals, senior professionals, executives, and C-suite leaders who need direction and job market clarity.",
  },
];

export const experienceOptions: Array<{
  key: ExperienceKey;
  number: number;
  title: string;
  shortTitle: string;
}> = [
  { key: "student", number: 1, title: "Student", shortTitle: "Student" },
  { key: "fresh-graduate", number: 2, title: "Fresh Graduate", shortTitle: "Fresh Graduate" },
  { key: "professional", number: 3, title: "Professional", shortTitle: "Professional" },
  { key: "senior-professional", number: 4, title: "Senior Professional", shortTitle: "Senior Professional" },
  { key: "executive", number: 5, title: "Executive", shortTitle: "Executive" },
  { key: "c-suite", number: 6, title: "C-Suite / Director", shortTitle: "C-Suite / Director" },
];

export const serviceOptionChoices: Array<{
  key: ServiceOptionKey;
  number: number;
  title: string;
  shortTitle: string;
  description: string;
}> = [
  {
    key: "founder-led",
    number: 1,
    title: "International Signature Series",
    shortTitle: "Signature Series",
    description:
      "Premium, personally crafted by Chanuka for global resume, CV, LinkedIn, and executive career branding needs.",
  },
];

const signaturePrices: Partial<Record<ServiceKey, Array<number | null | { thirtyMin?: number; oneHour: number; label?: string }>>> = {
  "ats-cv": [89, 129, 189, 279, 449, 749],
  linkedin: [89, 129, 189, 279, 449, 749],
  "cover-letter": [59, 79, 119, 159, 249, 349],
  "foreign-cv": [129, 169, 239, 329, 499, 849],
  "graphical-cv": [79, 109, 159, 219, 349, null],
  consultation: [
    null,
    null,
    { thirtyMin: 99, oneHour: 149 },
    { thirtyMin: 129, oneHour: 199 },
    { thirtyMin: 179, oneHour: 279 },
    { oneHour: 399, label: "1 hour strategy session" },
  ],
};

const signatureFeatures: Record<ServiceKey, string[]> = {
  "ats-cv": [
    "ATS-friendly structure for international job platforms",
    "Role, industry, and country-specific positioning",
    "Achievement-led career storytelling",
    "Premium, personally crafted by Chanuka",
  ],
  linkedin: [
    "Recruiter-focused headline and About section rewrite",
    "Keyword strategy for global visibility",
    "Experience section repositioning",
    "Premium, personally crafted by Chanuka",
  ],
  "cover-letter": [
    "Role-aligned cover letter writing",
    "International application tone and structure",
    "Clear value proposition for target employers",
    "Premium, personally crafted by Chanuka",
  ],
  "foreign-cv": [
    "Country-specific CV or resume direction",
    "International employer and migration-market positioning",
    "ATS and recruiter readability review",
    "Premium, personally crafted by Chanuka",
  ],
  "graphical-cv": [
    "Premium visual CV presentation",
    "Personal branding focused layout",
    "Best suited for selected creative and client-facing roles",
    "Premium, personally crafted by Chanuka",
  ],
  consultation: [
    "Founder-led career strategy session",
    "Target role, market, and positioning review",
    "Practical next-step direction",
    "Premium, personally crafted by Chanuka",
  ],
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getPriceValue(
  serviceKey: ServiceKey,
  experienceIndex: number
): { priceLkr: number; priceNote?: string } | null {
  const value = signaturePrices[serviceKey]?.[experienceIndex];
  if (!value) return null;

  if (typeof value === "number") {
    return { priceLkr: value };
  }

  if (value.thirtyMin) {
    return {
      priceLkr: value.thirtyMin,
      priceNote: `${formatLkr(value.thirtyMin)} (30 min) / ${formatLkr(value.oneHour)} (1 hour)`,
    };
  }

  return {
    priceLkr: value.oneHour,
    priceNote: `${formatLkr(value.oneHour)} (${value.label ?? "1 hour"})`,
  };
}

function makePackage(
  service: (typeof serviceOptions)[number],
  experience: (typeof experienceOptions)[number],
  experienceIndex: number
): PackageProduct | null {
  const price = getPriceValue(service.key, experienceIndex);
  if (!price) return null;

  const code = `${service.number}${experience.number}1`;
  const name = `${experience.shortTitle} ${service.shortTitle} - International Signature Series`;
  const delivery = service.key === "consultation" ? "Scheduled after enquiry approval" : "Premium timeline confirmed after profile review";

  return {
    slug: slugify(`${service.key}-${experience.key}-founder-led`),
    code,
    name,
    category: service.shortTitle,
    categoryKey: service.key,
    serviceKey: service.key,
    experienceKey: experience.key,
    optionKey: "founder-led",
    audience: experience.title,
    description: `${service.title} for ${experience.title.toLowerCase()} clients targeting international opportunities.`,
    idealFor:
      service.key === "consultation"
        ? "Ideal when you need direct career direction before selecting documents, target countries, or job market strategy."
        : `Ideal for ${experience.title.toLowerCase()} clients who need premium international ${service.shortTitle.toLowerCase()} with founder-led positioning.`,
    priceLkr: price.priceLkr,
    priceNote: price.priceNote,
    delivery,
    features: signatureFeatures[service.key],
    cta: "Apply for This Service",
    isMostPopular: service.key === "ats-cv" && experience.key === "professional",
  };
}

export const packageProducts: PackageProduct[] = serviceOptions.flatMap((service) =>
  experienceOptions
    .map((experience, experienceIndex) => makePackage(service, experience, experienceIndex))
    .filter((item): item is PackageProduct => Boolean(item))
);

export const packageCategories: PackageCategory[] = serviceOptions.map((service) => ({
  key: service.key,
  title: service.categoryTitle,
  description: service.description,
  isPriority: service.key === "ats-cv",
  packages: packageProducts.filter((item) => item.serviceKey === service.key),
}));

export function formatLkr(price: number): string {
  return `$${price.toLocaleString("en-US")}`;
}

export const formatUsd = formatLkr;

export function getPackageDisplayPrice(pkg: PackageProduct): string {
  return pkg.priceNote ?? formatLkr(pkg.priceLkr);
}

export function getServiceByKey(key: ServiceKey) {
  return serviceOptions.find((item) => item.key === key) ?? null;
}

export function getExperienceByKey(key: ExperienceKey) {
  return experienceOptions.find((item) => item.key === key) ?? null;
}

export function getServiceOptionByKey(key: ServiceOptionKey) {
  return serviceOptionChoices.find((item) => item.key === key) ?? null;
}

export function getFilteredPackages(selection: CatalogueSelection): PackageProduct[] {
  const selectedServices = new Set(selection.serviceKeys);
  return packageProducts.filter(
    (pkg) =>
      selectedServices.has(pkg.serviceKey) &&
      pkg.experienceKey === selection.experienceKey &&
      pkg.optionKey === selection.optionKey
  );
}

export function getSupervisedBundleDiscount(): number {
  return 0;
}

export function calculateCatalogueTotal(packages: PackageProduct[]): {
  subtotalLkr: number;
  discountPercent: number;
  discountLkr: number;
  totalLkr: number;
} {
  const subtotalLkr = packages.reduce((sum, pkg) => sum + pkg.priceLkr, 0);

  return {
    subtotalLkr,
    discountPercent: 0,
    discountLkr: 0,
    totalLkr: subtotalLkr,
  };
}

export function getFounderLedAvailabilityLabel(): string {
  return "Premium international intake slots are reviewed before confirmation";
}
