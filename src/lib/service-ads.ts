export type ServiceAd = {
  title: string;
  description: string;
  href: string;
};

export const serviceAds: ServiceAd[] = [
  {
    title: "Professional CV Writing",
    description: "100% ATS-friendly CV packages for students to executives.",
    href: "/services/packages/ats-cv",
  },
  {
    title: "Cover Letter Writing",
    description: "Role-focused cover letters that improve shortlisting potential.",
    href: "/services/packages/cover-letter",
  },
  {
    title: "LinkedIn Optimization",
    description: "Profile SEO and positioning to attract recruiters consistently.",
    href: "/services/packages/linkedin",
  },
  {
    title: "CV Review Service",
    description: "Expert feedback and improvement roadmap for your current CV.",
    href: "/services/cv-review",
  },
];
