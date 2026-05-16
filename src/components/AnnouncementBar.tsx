"use client";

import Link from "next/link";
import { useState } from "react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="announcement-bar sticky top-0 z-[9999] w-full bg-gradient-to-r from-[#C9A961] to-[#B8985A]"
      id="announcement-bar"
    >
      <div className="announcement-content mx-auto flex max-w-[1512px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="announcement-text text-sm font-medium text-[#0A2540] sm:text-base">
            <strong>Signature Series packages now available.</strong>
            <span className="hidden sm:inline"> Premium USD pricing for executive resumes, CVs, LinkedIn, and full career-branding suites.</span>
            <Link href="/pricing" className="announcement-link ml-2 font-semibold underline hover:no-underline">
              View Packages
            </Link>
          </span>
        </div>
        <button
          className="announcement-close flex-shrink-0 text-2xl leading-none text-[#0A2540] transition-opacity hover:opacity-70"
          onClick={() => setIsVisible(false)}
          aria-label="Close announcement"
        >
          x
        </button>
      </div>
    </div>
  );
}
