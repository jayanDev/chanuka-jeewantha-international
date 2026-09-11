import type { Metadata } from "next";
import { Suspense } from "react";
import { buildNoIndexMetadata } from "@/lib/seo";

export const metadata: Metadata = buildNoIndexMetadata({
  title: "Checkout",
  description: "Secure checkout for career service orders.",
  path: "/checkout",
});

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<section className="min-h-[70vh] px-6 py-20"><h1 className="text-3xl font-bold">Checkout</h1><p className="mt-4" role="status">Loading checkout...</p></section>}>{children}</Suspense>;
}
