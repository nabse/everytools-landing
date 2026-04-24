"use client";

import { useEffect } from "react";

/**
 * Client-only redirect: if the page loads with `#install` in the URL AND
 * the tool has a real Chrome Web Store listing, bounce the user straight
 * to the store instead of scrolling to the in-page CTA section.
 *
 * Rendered as a zero-DOM component so ToolPage can stay a Server Component.
 */
export default function InstallHashRedirect({ installUrl }: { installUrl?: string }) {
  useEffect(() => {
    if (!installUrl) return;
    if (typeof window === "undefined") return;
    if (window.location.hash === "#install") {
      // Replace so the Back button doesn't ping-pong between the store and us.
      window.location.replace(installUrl);
    }
  }, [installUrl]);

  return null;
}
