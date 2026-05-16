import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Submit an Enquiry | Chanuka Jeewantha",
  description:
    "Submit a career-branding enquiry for premium resume writing, CV writing, LinkedIn optimization, and executive career branding.",
  path: "/catalogue",
});

export default function CataloguePage() {
  redirect("/contact");
}
