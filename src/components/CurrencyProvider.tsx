"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { BASE_CURRENCY, isCurrencyCode, type CurrencyCode } from "@/lib/currency";

const STORAGE_KEY = "preferred_currency";
type CurrencyContextValue = { currency: CurrencyCode; setCurrency: (code: CurrencyCode) => void; ready: boolean };
const CurrencyContext = createContext<CurrencyContextValue>({ currency: BASE_CURRENCY, setCurrency: () => {}, ready: true });
export function useCurrency() { return useContext(CurrencyContext); }

export default function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(BASE_CURRENCY);
  const setCurrency = useCallback((code: CurrencyCode) => {
    if (!isCurrencyCode(code)) return;
    setCurrencyState(code);
    try { window.localStorage.setItem(STORAGE_KEY, code); } catch { /* Storage may be disabled. */ }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (isCurrencyCode(saved)) setCurrencyState(saved);
      } catch { /* USD remains the international default. */ }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => { document.documentElement.dataset.currency = currency; }, [currency]);
  return <CurrencyContext.Provider value={{ currency, setCurrency, ready: true }}>{children}</CurrencyContext.Provider>;
}
