"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { ANALYTICS_CONSENT_KEY, publicAnalyticsPath } from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<string | null>(null);
  const [settings, setSettings] = useState(false);
  const [ready, setReady] = useState(false);
  const lastPath = useRef<string | null>(null);
  // Enable only after disabling automatic history and form events in GA4.
  const configured = /^G-[A-Z0-9]+$/.test(measurementId) &&
    process.env.NEXT_PUBLIC_GA_MANUAL_EVENTS_READY === "true";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { setConsent(localStorage.getItem(ANALYTICS_CONSENT_KEY)); } catch { /* Consent remains unset. */ }
    }, 0);
    const sync = (event: StorageEvent) => {
      if (event.key === ANALYTICS_CONSENT_KEY) window.location.reload();
    };
    window.addEventListener("storage", sync);
    return () => { clearTimeout(timer); window.removeEventListener("storage", sync); };
  }, []);

  useEffect(() => {
    if (!ready || consent !== "accepted") return;
    const path = publicAnalyticsPath(pathname);
    if (!path || path === lastPath.current) return;
    lastPath.current = path;
    window.gtag?.("event", "page_view", {
      page_path: path, page_location: window.location.origin + path, page_referrer: "",
    });
  }, [pathname, consent, ready]);

  function choose(value: "accepted" | "rejected") {
    try { localStorage.setItem(ANALYTICS_CONSENT_KEY, value); } catch { return; }
    setConsent(value);
    setSettings(false);
    if (value === "rejected" && ready) {
      window.gtag?.("consent", "update", { analytics_storage: "denied", ad_storage: "denied" });
      // Reload removes the already-loaded third-party runtime after revocation.
      window.location.reload();
    }
  }

  if (!configured) return null;
  return <>
    {consent === "accepted" && <Script
      id="career-ga"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
      onReady={() => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = (...args: unknown[]) => { window.dataLayer.push(args); };
        window.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
        window.gtag("js", new Date());
        window.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_referrer: "" });
        setReady(true);
      }}
    />}
    <div className="w-full bg-zinc-100 px-4 py-3 text-center text-sm text-zinc-700">
      <button type="button" onClick={() => setSettings(true)} className="underline underline-offset-4">Analytics preferences</button>
    </div>
    {(consent === null || settings) && <section role="dialog" aria-modal="false" aria-labelledby="analytics-choice" className="fixed bottom-4 left-4 right-4 z-[9999] max-w-lg rounded-lg border border-zinc-300 bg-white p-5 text-zinc-900 shadow-xl">
      <h2 id="analytics-choice" className="text-lg font-semibold">Optional analytics</h2>
      <p className="mt-2 text-sm">Allow Google Analytics to measure visits and enquiries? The enquiry form works without it. <Link className="underline" href="/privacy-policy">Privacy policy</Link></p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("accepted")} className="rounded border border-zinc-400 px-4 py-2">Allow analytics</button>
        <button type="button" onClick={() => choose("rejected")} className="rounded border border-zinc-400 px-4 py-2">Reject analytics</button>
      </div>
    </section>}
  </>;
}
