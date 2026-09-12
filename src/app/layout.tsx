import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
import CountrySiteChrome from "@/components/markets/CountrySiteChrome";
import { markets } from "@/lib/markets";
import { getBaseUrl } from "@/lib/site-url";

const siteUrl = getBaseUrl();
// GA4 Measurement ID for chanukajeewantha.com. Hardcoded so the correct property
// is always used, regardless of any stale NEXT_PUBLIC_GA_MEASUREMENT_ID env value.
const gaMeasurementId = "G-JBG5EY2YXW";
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const heartbeatAnalyticsEnabled = process.env.NEXT_PUBLIC_ENABLE_HEARTBEAT_ANALYTICS === "true";
const organizationId = `${siteUrl}#organization`;
const websiteId = `${siteUrl}#website`;

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: "Chanuka Jeewantha",
  url: siteUrl,
  image: `${siteUrl}/images/hero-chanuka.jpg`,
  logo: `${siteUrl}/images/hero-chanuka.jpg`,
  description:
    "Premium remote resume writing, ATS CV writing, LinkedIn optimization, cover letters, and executive career branding by Chanuka Jeewantha for professionals targeting international opportunities.",
  founder: { "@type": "Person", "@id": `${siteUrl}/#person`, name: "Chanuka Jeewantha", url: `${siteUrl}/about` },
  areaServed: markets.map((market) => market.name),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: markets.map((market) => market.name),
    availableLanguage: ["English"],
    url: `${siteUrl}/contact`,
  },
  sameAs: [
    "https://www.linkedin.com/in/chanuka-jeewantha/",
    "https://www.facebook.com/share/15vdmdB4oE/",
    "https://www.youtube.com/@chanukajeewantha",
    "https://x.com/chanukajeewan",
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

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
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
    canonical: "./",
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
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Chanuka Jeewantha - Premium Career Branding",
    description:
      "Premium ATS-friendly resumes, executive CVs, LinkedIn optimization, cover letters, and career branding for senior professionals.",
    type: "website",
    url: siteUrl,
    siteName: "Chanuka Jeewantha",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_AU", "en_CA", "en_NZ"],
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
    title: "Chanuka Jeewantha - Premium Career Branding",
    description:
      "Premium resume, CV, LinkedIn, cover letter, and career strategy services for senior professionals pursuing global opportunities.",
    images: ["/images/hero-chanuka.jpg"],
    creator: "@chanukajeewan",
    site: "@chanukajeewan",
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <meta name="trustpilot-one-time-domain-verification-id" content="8cebe28a-5167-496a-8a5d-ce46b6d12acf" />
        <link rel="alternate" type="application/rss+xml" title="Chanuka Jeewantha Blog RSS Feed" href={`${siteUrl}/feed.xml`} />
        <link rel="alternate" type="text/plain" title="Service and content directory" href={`${siteUrl}/llms.txt`} />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-body">
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

        {heartbeatAnalyticsEnabled ? (
          <Suspense fallback={null}>
            <HeartbeatAnalytics />
          </Suspense>
        ) : null}
        <CountrySiteChrome
          globalHeader={<><AnnouncementBar /><div id="site-nav"><Header /><SeasonalOfferBanner /><Breadcrumbs /></div></>}
          globalFooter={<><Footer /><BackToTop /></>}
        >
          {children}
        </CountrySiteChrome>
        {gaMeasurementId ? (
          <Suspense fallback={null}>
            <GoogleAnalytics measurementId={gaMeasurementId} />
          </Suspense>
        ) : null}
      </body>
    </html>
  );
}
