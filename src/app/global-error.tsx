"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- Root failures need a full document reload. */

import { useEffect } from "react";

export default function GlobalError({ error, unstable_retry }: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => { console.error("[RootLayoutError]", error); }, [error]);
  return (
    <html lang="en">
      <head><meta name="robots" content="noindex" /><title>Temporarily unavailable | Chanuka Jeewantha</title></head>
      <body style={{ margin: 0, padding: "64px 24px", fontFamily: "Arial, sans-serif", color: "#0a2540", background: "#fff" }}>
        <main style={{ maxWidth: 640, margin: "auto" }}>
          <h1>This page is temporarily unavailable</h1>
          <p>Please try again in a moment.</p>
          <button onClick={unstable_retry} style={{ padding: "12px 20px", cursor: "pointer" }}>Try again</button>
          <p><a href="/">Return to the homepage</a></p>
          {error.digest && <p>Reference: {error.digest}</p>}
        </main>
      </body>
    </html>
  );
}
