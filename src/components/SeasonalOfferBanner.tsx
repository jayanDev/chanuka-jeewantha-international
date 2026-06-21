"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { buildOfferPreviewHeaders, withOfferPreviewUrl } from "@/lib/offer-preview-client";

const INITIAL_NOW_MS = Date.now();

type ActiveOffer = {
  id: string;
  title: string;
  discountPercent: number;
  scope: "all" | "selected" | "category";
  selectedServiceSlugs: string[];
  selectedCategories: string[];
  startAtMs: number;
  endAtMs: number;
};

function formatRemaining(ms: number): string {
  if (ms <= 0) return "00d 00h 00m 00s";

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (value: number) => String(value).padStart(2, "0");
  return `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

async function readJsonSafely(response: Response): Promise<Record<string, unknown>> {
  const raw = await response.text();
  if (!raw) return {};

  try {
    return JSON.parse(raw) as Record<string, unknown>;
  } catch {
    return {};
  }
}

export default function SeasonalOfferBanner() {
  const [offer, setOffer] = useState<ActiveOffer | null>(null);
  const [isDismissed, setIsDismissed] = useState(true); // Default to true (hidden) to prevent layout flashes
  const [now, setNow] = useState(INITIAL_NOW_MS);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(withOfferPreviewUrl("/api/offers/active"), {
          cache: "no-store",
          headers: buildOfferPreviewHeaders(),
        });
        const payload = await readJsonSafely(response);
        if (!response.ok || !payload.offer || typeof payload.offer !== "object") {
          setOffer(null);
          return;
        }

        const next = payload.offer as {
          id?: unknown;
          title?: unknown;
          discountPercent?: unknown;
          scope?: unknown;
          selectedServiceSlugs?: unknown;
          selectedCategories?: unknown;
          startAtMs?: unknown;
          endAtMs?: unknown;
        };

        if (
          typeof next.id !== "string" ||
          typeof next.title !== "string" ||
          typeof next.discountPercent !== "number" ||
          typeof next.startAtMs !== "number" ||
          typeof next.endAtMs !== "number"
        ) {
          setOffer(null);
          return;
        }

        const activeOffer: ActiveOffer = {
          id: next.id,
          title: next.title,
          discountPercent: next.discountPercent,
          scope: next.scope === "selected" ? "selected" : next.scope === "category" ? "category" : "all",
          selectedServiceSlugs: Array.isArray(next.selectedServiceSlugs)
            ? next.selectedServiceSlugs.filter((item): item is string => typeof item === "string")
            : [],
          selectedCategories: Array.isArray(next.selectedCategories)
            ? next.selectedCategories.filter((item): item is string => typeof item === "string")
            : [],
          startAtMs: next.startAtMs,
          endAtMs: next.endAtMs,
        };

        setOffer(activeOffer);

        // Check if this specific offer has been dismissed by the user
        const dismissed = localStorage.getItem(`dismissed-offer-${activeOffer.id}`);
        if (dismissed !== "true") {
          setIsDismissed(false);
        }

        void fetch("/api/offers/impression", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...Object.fromEntries(new Headers(buildOfferPreviewHeaders()).entries()),
          },
          body: JSON.stringify({ offerId: next.id }),
        });
      } catch {
        setOffer(null);
      }
    };

    void load();
  }, []);

  useEffect(() => {
    if (!offer || isDismissed) return;
    const timer = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [offer, isDismissed]);

  // Adjust body margins dynamically to prevent covering critical viewport content
  useEffect(() => {
    if (offer && !isDismissed && offer.endAtMs > now) {
      document.body.classList.add("has-bottom-banner");
    } else {
      document.body.classList.remove("has-bottom-banner");
    }
    return () => {
      document.body.classList.remove("has-bottom-banner");
    };
  }, [offer, isDismissed, now]);

  const remaining = useMemo(() => {
    if (!offer) return "";
    return offer.startAtMs > now
      ? formatRemaining(offer.startAtMs - now)
      : formatRemaining(offer.endAtMs - now);
  }, [offer, now]);

  const handleDismiss = () => {
    if (offer) {
      localStorage.setItem(`dismissed-offer-${offer.id}`, "true");
    }
    setIsDismissed(true);
  };

  if (!offer || isDismissed || offer.endAtMs <= now) {
    return null;
  }

  const offerScopeText =
    offer.scope === "all"
      ? "All services included"
      : offer.scope === "selected"
        ? `${offer.selectedServiceSlugs.length} selected services included`
        : `${offer.selectedCategories.length} categories included`;

  return (
    <section 
      className="fixed bottom-0 left-0 right-0 z-30 w-full border-t border-red-900/30 bg-red-600 text-white shadow-[0_-4px_20px_rgba(0,0,0,0.15)] animate-slideUp"
      aria-label="Seasonal Offer"
    >
      <div className="mx-auto flex max-w-[1512px] flex-row items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 min-w-0">
          <span className="inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-white animate-bounce" aria-hidden="true" />
          <p className="font-semibold text-sm md:text-base leading-relaxed truncate">
            {offer.title}: {offer.discountPercent}% OFF
            <span className="hidden sm:inline font-normal opacity-90"> - {offerScopeText}</span>
          </p>
        </div>

        <div className="flex flex-shrink-0 items-center gap-3">
          <p className="font-heading text-xs sm:text-sm md:text-base font-bold tracking-wide">
            {offer.startAtMs > now ? "Starts in" : "Ends in"} {remaining}
          </p>
          <Link
            href="/offers"
            className="rounded-[10px] border border-white/70 bg-white px-3 py-1.5 text-xs font-semibold text-red-700 transition-colors hover:bg-zinc-100 hover:text-red-800"
          >
            View Offers
          </Link>
          <button
            onClick={handleDismiss}
            className="p-1.5 text-white hover:text-zinc-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-[6px]"
            aria-label="Close seasonal offer banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
