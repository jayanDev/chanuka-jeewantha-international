/**
 * Booking configuration.
 *
 * Set CALENDLY_URL to the brand's Calendly scheduling link
 * (e.g. "https://calendly.com/chanukajeewantha/consultation").
 * While it is an empty string, the <CalendlyEmbed /> component renders
 * nothing - so the site stays clean until the real link is added.
 *
 * Can be overridden at deploy time with NEXT_PUBLIC_CALENDLY_URL.
 */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || "https://calendly.com/chanukajeewantha00/30min";
