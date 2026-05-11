"use client";

/**
 * SearchTrigger.tsx
 *
 * Client component that renders the search button in the Nav and manages
 * the SearchModal's open state.
 *
 * Kept separate from Nav.tsx so Nav can stay a Server Component.
 *
 * Keyboard shortcut: ⌘K (Mac) / Ctrl+K (Windows/Linux)
 */

import { useState, useEffect, useCallback } from "react";
import { SearchModal } from "./SearchModal";

export default function SearchTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Register ⌘K / Ctrl+K global shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Search button */}
      <button
        type="button"
        onClick={open}
        aria-label="Search (⌘K)"
        className="group inline-flex h-9 items-center gap-2 rounded-full border border-border bg-surface px-3 text-[13px] text-muted transition hover:border-border-strong hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
      >
        {/* Search icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        {/* Label — hidden on small screens */}
        <span className="hidden sm:inline">Search</span>

        {/* Keyboard shortcut hint */}
        <kbd className="hidden rounded border border-border bg-white px-1.5 py-0.5 text-[10px] font-medium text-muted/70 transition group-hover:border-border-strong sm:inline">
          ⌘K
        </kbd>
      </button>

      {/* Modal — portalled via conditional render */}
      {isOpen && <SearchModal onClose={close} />}
    </>
  );
}
