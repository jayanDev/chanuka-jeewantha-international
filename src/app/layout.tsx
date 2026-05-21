import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Poppins, Playfair_Display, Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeartbeatAnalytics from "@/components/AnalyticsHeartbeat";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import SeasonalOfferBanner from "@/components/SeasonalOfferBanner";
import AnnouncementBar from "@/components/AnnouncementBar";
import { getServerUser } from "@/lib/auth-server";
import { getBaseUrl } from "@/lib/site-url";

const siteUrl = getBaseUrl();
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const heartbeatAnalyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_HEARTBEAT_ANALYTICS === "true";
const organizationId = `${siteUrl}#organization`;
const websiteId = `${siteUrl}#website`;

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": organizationId,
  name: "Chanuka Jeewantha",
  url: siteUrl,
  image: `${siteUrl}/images/hero-chanuka.jpg`,
  logo: `${siteUrl}/images/hero-chanuka.jpg`,
  description:
    "Premium resume writing, ATS CV writing, LinkedIn optimization, cover letters, and executive career branding by Chanuka Jeewantha.",
  areaServed: "Worldwide",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
    url: `${siteUrl}/contact`,
  },
  sameAs: [
    "https://www.linkedin.com/in/chanuka-jeewantha/",
    "https://www.facebook.com/share/15vdmdB4oE/",
    "https://www.youtube.com/@chanukajeewantha",
    "https://www.fiverr.com/s/kLBDGAb",
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: siteUrl,
  name: "Chanuka Jeewantha",
  inLanguage: "en",
  publisher: {
    "@id": organizationId,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/blog/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "optional",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "optional",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport = {
  themeColor: "#0A2540",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Premium Resume, CV & LinkedIn Services | Chanuka Jeewantha",
    template: "%s | Chanuka Jeewantha",
  },
  applicationName: "Chanuka Jeewantha",
  manifest: "/site.webmanifest",
  description:
    "Premium resume writing, ATS-optimized CVs, LinkedIn optimization, cover letters, and executive career branding for senior professionals pursuing roles in global markets.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/icon-192.svg", type: "image/svg+xml" },
    ],
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  authors: [{ name: "Chanuka Jeewantha", url: siteUrl }],
  creator: "Chanuka Jeewantha",
  publisher: "Chanuka Jeewantha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Chanuka Jeewantha — Premium Career Branding",
    description:
      "Premium ATS-friendly resumes, executive CVs, LinkedIn optimization, cover letters, and career branding for senior professionals.",
    type: "website",
    url: siteUrl,
    siteName: "Chanuka Jeewantha",
    locale: "en",
    images: [
      {
        url: "/images/hero-chanuka.jpg",
        width: 1200,
        height: 630,
        alt: "Chanuka Jeewantha career services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanuka Jeewantha — Premium Career Branding",
    description:
      "Premium resume, CV, LinkedIn, cover letter, and career strategy services for senior professionals pursuing global opportunities.",
    images: ["/images/hero-chanuka.jpg"],
    creator: "@chanukajeewantha",
    site: "@chanukajeewantha",
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getServerUser();

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${poppins.variable} ${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="alternate" type="application/rss+xml" title="Chanuka Jeewantha Blog RSS Feed" href={`${siteUrl}/feed.xml`} />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:z-[9999] focus:top-4 focus:left-4 focus:rounded-lg focus:bg-brand-main focus:px-4 focus:py-2 focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {gaMeasurementId ? (
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={gaMeasurementId} />
          </Suspense>
        ) : null}
        {heartbeatAnalyticsEnabled ? (
          <Suspense fallback={null}>
            <HeartbeatAnalytics />
          </Suspense>
        ) : null}
        <AnnouncementBar />
        <div id="site-nav">
          <Header initialUser={currentUser} />
          <SeasonalOfferBanner />
          <Breadcrumbs />
        </div>
        <main id="main-content" className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
