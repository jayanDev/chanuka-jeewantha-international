import type { Metadata } from "next";
import { Suspense } from "react";
import { buildNoIndexMetadata } from "@/lib/seo";

export const metadata: Metadata = buildNoIndexMetadata({
  title: "Create Account",
  description: "Create an account to place and manage orders.",
  path: "/auth/signup",
});

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<section className="min-h-[70vh] px-6 py-20"><h1 className="text-3xl font-bold">Create Account</h1><p className="mt-4" role="status">Loading registration form...</p></section>}>{children}</Suspense>;
}
