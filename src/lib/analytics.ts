export const ANALYTICS_CONSENT_KEY = "career-analytics-consent";
export type CareerEvent = "form_start" | "form_error" | "generate_lead" | "booking_completed";

export function analyticsReferrer(referrer: string, origin: string): string {
  try {
    const url = new URL(referrer);
    return /^https?:$/.test(url.protocol) && url.origin !== origin ? `${url.origin}/` : "";
  } catch { return ""; }
}

export function setAnalyticsDisabled(measurementId: string, disabled: boolean): void {
  (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = disabled;
}

export function analyticsAllowed(): boolean {
  try { return window.localStorage.getItem(ANALYTICS_CONSENT_KEY) === "accepted"; }
  catch { return false; }
}

export function publicAnalyticsPath(path: string): string | null {
  const clean = path.split(/[?#]/)[0];
  if (!/^\/[a-z0-9/-]*$/i.test(clean)) return null;
  if (/^\/(api|admin|reviews-admin|auth|account|dashboard|orders?|cart|profile|notifications|checkout|payment|p|login|register|reset-password|verify-email)(\/|$)/i.test(clean)) return null;
  return clean;
}

// No form values, query strings, booking payloads or user identifiers are accepted.
export function trackCareerEvent(event: CareerEvent): void {
  if (typeof window === "undefined" || !analyticsAllowed() || !window.gtag) return;
  const path = publicAnalyticsPath(window.location.pathname);
  if (!path) return;
  window.gtag("event", event, {
    page_location: `${window.location.origin}${path}`,
    page_path: path,
    page_referrer: "",
    form_id: event === "booking_completed" ? "career_booking" : "international_enquiry",
  });
}
