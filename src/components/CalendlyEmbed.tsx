"use client";

import { useEffect, useRef, useState } from "react";
import { trackCareerEvent } from "@/lib/analytics";
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
  subheading = "Pick a time that suits you - book a career-branding consultation directly.",
  className = "",
}: CalendlyEmbedProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const completed = useRef(new Set<string>());
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      const frame = containerRef.current?.querySelector("iframe");
      if (event.origin !== "https://calendly.com" || !frame || event.source !== frame.contentWindow) return;
      if (event.data?.event !== "calendly.event_scheduled") return;
      const uri = event.data?.payload?.event?.uri;
      if (typeof uri !== "string" || completed.current.has(uri)) return;
      completed.current.add(uri);
      trackCareerEvent("booking_completed");
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, []);

  useEffect(() => {
    if (!CALENDLY_URL || !shouldLoad) return;
    const url = CALENDLY_URL;

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
          style={{ minWidth: 0, width: "100%", height: shouldLoad ? "760px" : "180px" }}
        >
          {!shouldLoad ? (
            <button type="button" className="btn btn-secondary-gold" onClick={() => setShouldLoad(true)}>Open Scheduling Calendar</button>
          ) : null}
        </div>
        <p className="mt-4 text-center text-sm text-zinc-600">Scheduling is provided by Calendly. <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline">Book directly on Calendly</a></p>
      </div>
    </section>
  );
}
