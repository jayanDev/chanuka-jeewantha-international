const LOCAL_FALLBACK = "http://localhost:3000";
const PRODUCTION_FALLBACK = "https://www.chanukajeewantha.com";

export function getBaseUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    (process.env.NODE_ENV === "production" ? PRODUCTION_FALLBACK : LOCAL_FALLBACK);

  return raw.replace(/\/$/, "");
}
