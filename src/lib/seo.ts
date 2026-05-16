import type { Metadata } from "next";
import { getBaseUrl } from "@/lib/site-url";

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  type?: "website" | "article" | "profile";
  /** hreflang language alternates, e.g. { 'si': '/blog/some-sinhala-slug' } */
  alternateLanguages?: Record<string, string>;
};

const SITE_NAME = "Chanuka Jeewantha";
const DEFAULT_OG_IMAGE = "/images/hero-chanuka.jpg";

export const TARGET_SEO_KEYWORDS = [
  "Chanuka Jeewantha",
  "ATS resume writing",
  "ATS friendly CV",
  "professional CV writing",
  "executive resume writing",
  "executive CV writing",
  "LinkedIn profile optimization",
  "cover letter writing",
  "personal branding services",
  "executive career branding",
  "C-suite resume writing",
  "senior leadership resume",
  "career strategist",
  "professional resume writer",
  "modern resume design",
  "ATS resume checker",
  "career development services",
];

function normalizePath(path: string): string {
  if (!path) return "/";
  if (path === "/") return "/";
  return path.startsWith("/") ? path : `/${path}`;
}

function toAbsoluteUrl(path: string): string {
  const normalizedPath = normalizePath(path);
  return `${getBaseUrl()}${normalizedPath}`;
}

export function buildPageMetadata(input: BuildPageMetadataInput): Metadata {
  const canonicalPath = normalizePath(input.path);
  const absoluteUrl = toAbsoluteUrl(canonicalPath);
  const noIndex = input.noIndex === true;

  const mergedKeywords = Array.from(
    new Set([...TARGET_SEO_KEYWORDS, ...(input.keywords || [])])
  );

  return {
    title: input.title,
    description: input.description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalPath,
      ...(input.alternateLanguages && Object.keys(input.alternateLanguages).length > 0
        ? { languages: input.alternateLanguages }
        : {}),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            nosnippet: true,
          },
        }
      : {
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
      title: input.title,
      description: input.description,
      url: absoluteUrl,
      siteName: SITE_NAME,
      locale: "en",
      type: input.type ?? "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function buildNoIndexMetadata(input: Omit<BuildPageMetadataInput, "noIndex">): Metadata {
  return buildPageMetadata({
    ...input,
    noIndex: true,
  });
}
