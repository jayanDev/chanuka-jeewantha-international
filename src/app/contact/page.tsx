import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { buildBreadcrumbList } from "@/lib/structured-data";
import { getBaseUrl } from "@/lib/site-url";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = buildPageMetadata({
  title: "Request Career Branding Support | Chanuka Jeewantha",
  description:
    "Submit an enquiry for premium resume writing, ATS-optimized CVs, LinkedIn optimization, cover letters, and executive career branding.",
  path: "/contact",
});

const baseUrl = getBaseUrl();

export default function ContactPage() {
  const breadcrumbLd = buildBreadcrumbList([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  const contactPageLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Chanuka Jeewantha",
    url: `${baseUrl}/contact`,
    description:
      "Enquiry page for premium resume writing, LinkedIn optimization, and executive career branding services by Chanuka Jeewantha.",
    mainEntity: {
      "@type": "Person",
      name: "Chanuka Jeewantha",
      url: `${baseUrl}/about`,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: ["United States", "United Kingdom", "Australia", "Canada", "New Zealand"],
        availableLanguage: ["English"],
        url: `${baseUrl}/contact`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageLd) }}
      />

      <PageHero
        title={<>Request <span className="text-[#C9A961]">premium career support</span></>}
        description="Submit your current CV or resume, target role, target market, and preferred package for a personal review."
        marqueeText="CONTACT"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]}
      />

      {/* Client Contact Form Component */}
      <ContactForm />
    </>
  );
}
