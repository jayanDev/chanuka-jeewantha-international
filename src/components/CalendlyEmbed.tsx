"use client";

import { useEffect, useRef, useState } from "react";
import { CALENDLY_URL } from "@/lib/booking-config";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

type CalendlyEmbedProps = {
  heading?: string;
  subheading?: string;
  className?: string;
};

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Inline Calendly scheduling embed using Calendly's official widget with an
 * explicit initInlineWidget() call (auto-scan is unreliable in React, and raw
 * iframes are blocked by Calendly's X-Frame-Options).
 * Renders nothing until CALENDLY_URL is set (src/lib/booking-config.ts or
 * NEXT_PUBLIC_CALENDLY_URL), so it is safe to place anywhere.
 */
export default function CalendlyEmbed({
  heading = "Book a consultation",
  subheading = "Pick a time that suits you — book a career-branding consultation directly.",
  className = "",
}: CalendlyEmbedProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Defer the heavy Calendly widget (script + iframe) until the section is
  // near the viewport. This keeps it off the initial mobile load, which is
  // a major Lighthouse TBT/LCP win on pages where the embed is below the fold.
  useEffect(() => {
    if (!CALENDLY_URL || shouldLoad) return;
    const el = sectionRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    if (!CALENDLY_URL || !shouldLoad) return;
    const url = `${CALENDLY_URL}${CALENDLY_URL.includes("?") ? "&" : "?"}hide_gdpr_banner=1`;

    const init = () => {
      if (window.Calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({ url, parentElement: containerRef.current });
      }
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = WIDGET_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => {
      script?.removeEventListener("load", init);
    };
  }, [shouldLoad]);

  if (!CALENDLY_URL) return null;

  return (
    <section ref={sectionRef} className={`w-full bg-white py-[64px] sm:py-[88px] ${className}`}>
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-brand-main font-semibold uppercase tracking-wider text-sm">Booking</span>
          <h2 className="mt-3 font-heading text-[28px] sm:text-[40px] font-bold leading-tight text-foreground">
            {heading}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-text-body">{subheading}</p>
        </div>
        <div
          ref={containerRef}
          className="flex items-center justify-center overflow-hidden rounded-[20px] border border-zinc-200 shadow-sm bg-zinc-50"
          style={{ minWidth: "320px", height: "760px" }}
        >
          {!shouldLoad ? (
            <span className="text-sm text-zinc-400">Loading scheduling calendar…</span>
          ) : null}
        </div>
      </div>
    </section>
  );
}
