import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import PackagesPageClient from "./PackagesPageClient";

export const metadata: Metadata = buildPageMetadata({
  title: "Browse International Signature Series Packages | Chanuka Jeewantha",
  description:
    "Browse premium USD International Signature Series resume, CV, LinkedIn, cover letter, foreign job CV, graphical CV, and consultation packages.",
  path: "/packages",
});

export default function PackagesIndexPage() {
  return <PackagesPageClient />;
}
