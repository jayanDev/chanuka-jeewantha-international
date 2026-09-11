import type { Metadata } from "next";
import { Suspense } from "react";
import { buildNoIndexMetadata } from "@/lib/seo";

export const metadata: Metadata = buildNoIndexMetadata({
  title: "Sign In",
  description: "Sign in to access your orders and checkout.",
  path: "/auth/signin",
});

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<section className="min-h-[70vh] px-6 py-20"><h1 className="text-3xl font-bold">Sign In</h1><p className="mt-4" role="status">Loading sign-in form...</p></section>}>{children}</Suspense>;
}
