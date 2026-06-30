"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  BASE_CURRENCY,
  CURRENCIES,
  currencyForCountry,
  isCurrencyCode,
  type CurrencyCode,
} from "@/lib/currency";

const STORAGE_KEY = "preferred_currency";
// Free, no-key, HTTPS, CORS-enabled IP geolocation. Must be allow-listed in
// next.config.ts CSP connect-src. Returns { country_code }.
const GEO_ENDPOINT = "https://ipwho.is/?fields=country_code";

type CurrencyContextValue = {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  /** True once detection/restore has finished (avoids a flash for non-US users). */
  ready: boolean;
};

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: BASE_CURRENCY,
  setCurrency: () => {},
  ready: false,
});

export function useCurrency() {
  return useContext(CurrencyContext);
}

export default function CurrencyProvider({ children }: { children: React.ReactNode }) {
  // Default to USD so the primary US audience never sees a flash/switch.
  const [currency, setCurrencyState] = useState<CurrencyCode>(BASE_CURRENCY);
  const [ready, setReady] = useState(false);

  const setCurrency = useCallback((code: CurrencyCode) => {
    setCurrencyState(code);
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      /* ignore storage errors (private mode) */
    }
  }, []);

  useEffect(() => {
    // 1. Honour an explicit saved preference first.
    let saved: string | null = null;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (isCurrencyCode(saved)) {
      setCurrencyState(saved);
      setReady(true);
      return;
    }

    // 2. Otherwise detect the visitor's country once, then remember it.
    let cancelled = false;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4000);

    (async () => {
      try {
        const res = await fetch(GEO_ENDPOINT, { signal: controller.signal });
        const data = (await res.json()) as { country_code?: string };
        if (cancelled) return;
        const detected = currencyForCountry(data?.country_code);
        setCurrencyState(detected);
        try {
          window.localStorage.setItem(STORAGE_KEY, detected);
        } catch {
          /* ignore */
        }
      } catch {
        // Network/geo failure -> stay on USD. No user-visible error.
        if (!cancelled) setCurrencyState(BASE_CURRENCY);
      } finally {
        window.clearTimeout(timeout);
        if (!cancelled) setReady(true);
      }
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  // Keep <html data-currency> in sync (handy for debugging / future CSS hooks).
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.currency = CURRENCIES[currency]?.code ?? BASE_CURRENCY;
    }
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, ready }}>
      {children}
    </CurrencyContext.Provider>
  );
}
