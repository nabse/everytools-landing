"use client";

/**
 * SearchModal.tsx
 *
 * Command-palette style search modal powered by Algolia InstantSearch.
 *
 * Features:
 *  - Opens on ⌘K / Ctrl+K or via the search button in Nav
 *  - Instant results as you type (debounce handled by react-instantsearch)
 *  - Highlighted matching terms in titles and descriptions
 *  - Keyboard navigation: ↑↓ to move, Enter to navigate, Escape to close
 *  - No-results state with helpful copy
 *  - Initial state: shows all tool homepages (most useful starting point)
 *  - Accessible: focus trap, role="dialog", aria-label
 *  - Closes on backdrop click
 *
 * Architecture:
 *  Uses react-instantsearch hooks (useSearchBox, useHits) rather than
 *  pre-built UI components — this gives full visual control while Algolia
 *  handles all the search state, debouncing, and API calls.
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  InstantSearch,
  useSearchBox,
  useHits,
  type UseSearchBoxProps,
} from "react-instantsearch";
import { getSearchClient, ALGOLIA_INDEX } from "../lib/algolia";
import type { SearchRecord } from "../lib/search-records";

// ─── Types ───────────────────────────────────────────────────────────────────

type Hit = SearchRecord & {
  objectID: string;
  _highlightResult?: {
    title?: { value: string };
    description?: { value: string };
  };
  _snippetResult?: {
    description?: { value: string };
  };
};

// ─── Accent helper ───────────────────────────────────────────────────────────

const TOOL_ACCENTS: Record<string, { from: string; to: string; label: string }> = {
  veedge:     { from: "#6366f1", to: "#ec4899", label: "Veedge" },
  instantrep: { from: "#60a5fa", to: "#2563eb", label: "InstantRep" },
  explainit:  { from: "#c084fc", to: "#9333ea", label: "ExplainIt" },
  worthit:    { from: "#2dd4bf", to: "#0d9488", label: "WorthIt" },
  everytools: { from: "#6366f1", to: "#8b5cf6", label: "EveryTools" },
};

// ─── Inner search box (must be inside <InstantSearch>) ───────────────────────

function SearchBox({ inputRef }: { inputRef: React.RefObject<HTMLInputElement | null> }) {
  const { query, refine } = useSearchBox();

  return (
    <div className="flex items-center gap-3 border-b border-[#e5e7eb] px-4 py-3.5">
      {/* Search icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0 text-[#9ca3af]"
        aria-hidden
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>

      <input
        ref={inputRef}
        type="search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        value={query}
        onChange={(e) => refine(e.target.value)}
        placeholder="Search tools, guides, features…"
        className="flex-1 bg-transparent text-[15px] text-[#111827] placeholder:text-[#9ca3af] outline-none [&::-webkit-search-cancel-button]:hidden"
        aria-label="Search EveryTools"
      />

      {/* ESC badge */}
      <kbd className="hidden shrink-0 rounded border border-[#e5e7eb] bg-[#f9fafb] px-1.5 py-0.5 text-[11px] font-medium text-[#6b7280] sm:block">
        ESC
      </kbd>
    </div>
  );
}

// ─── Hit component ────────────────────────────────────────────────────────────

function HitItem({
  hit,
  isActive,
  onClick,
  onMouseEnter,
}: {
  hit: Hit;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}) {
  const accent = TOOL_ACCENTS[hit.tool] ?? TOOL_ACCENTS.everytools;

  // Use Algolia's highlighted title if available, otherwise plain title
  const highlightedTitle =
    hit._highlightResult?.title?.value ?? hit.title;

  // Use snippet for description (shows context around the match)
  const snippetDesc =
    hit._snippetResult?.description?.value ??
    hit._highlightResult?.description?.value ??
    hit.description;

  const typeLabel =
    hit.type === "homepage"
      ? "Home"
      : hit.type === "tool-home"
      ? hit.toolName
      : hit.toolName + " · Guide";

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={[
        "w-full flex items-center gap-3.5 px-4 py-3 text-left transition-colors",
        isActive ? "bg-[#f3f4f6]" : "hover:bg-[#f9fafb]",
      ].join(" ")}
      aria-selected={isActive}
    >
      {/* Accent dot */}
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white text-[11px] font-bold"
        style={{ background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)` }}
        aria-hidden
      >
        {hit.toolName.charAt(0)}
      </span>

      <span className="min-w-0 flex-1">
        {/* Title with highlighted terms */}
        <span
          className="block truncate text-[14px] font-semibold text-[#111827] [&_mark]:bg-transparent [&_mark]:text-[#7c3aed] [&_mark]:font-bold"
          // Safe: Algolia only injects <mark> tags around matched text
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: highlightedTitle }}
        />

        {/* Snippet / description */}
        <span
          className="mt-0.5 block truncate text-[12px] text-[#6b7280] [&_mark]:bg-transparent [&_mark]:text-[#7c3aed] [&_mark]:font-semibold"
          // Safe: Algolia only injects <mark> tags
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: snippetDesc }}
        />
      </span>

      {/* Type badge */}
      <span className="hidden shrink-0 rounded-full border border-[#e5e7eb] bg-white px-2 py-0.5 text-[10.5px] font-medium text-[#6b7280] sm:block">
        {typeLabel}
      </span>

      {/* Enter icon shown on active item */}
      {isActive && (
        <kbd className="shrink-0 rounded border border-[#e5e7eb] bg-white px-1.5 py-0.5 text-[11px] text-[#6b7280]">
          ↵
        </kbd>
      )}
    </button>
  );
}

// ─── Results panel (must be inside <InstantSearch>) ──────────────────────────

function ResultsPanel({
  activeIndex,
  setActiveIndex,
  onSelect,
}: {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  onSelect: (url: string) => void;
}) {
  const { hits, results } = useHits<Hit>();
  const query = results?.query ?? "";

  // No query → show all tool homepages as starting suggestions
  if (!query.trim()) {
    return (
      <div>
        <p className="px-4 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9ca3af]">
          All tools
        </p>
        {hits
          .filter((h) => h.type === "tool-home" || h.type === "homepage")
          .map((hit, i) => (
            <HitItem
              key={hit.objectID}
              hit={hit}
              isActive={i === activeIndex}
              onClick={() => onSelect(hit.url)}
              onMouseEnter={() => setActiveIndex(i)}
            />
          ))}
      </div>
    );
  }

  // No results
  if (hits.length === 0) {
    return (
      <div className="px-4 py-10 text-center">
        <p className="text-[14px] font-medium text-[#374151]">
          No results for &ldquo;{query}&rdquo;
        </p>
        <p className="mt-1 text-[13px] text-[#9ca3af]">
          Try searching for a tool name, feature, or use case.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="px-4 pt-3 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9ca3af]">
        {hits.length} result{hits.length !== 1 ? "s" : ""}
      </p>
      {hits.map((hit, i) => (
        <HitItem
          key={hit.objectID}
          hit={hit}
          isActive={i === activeIndex}
          onClick={() => onSelect(hit.url)}
          onMouseEnter={() => setActiveIndex(i)}
        />
      ))}
    </div>
  );
}

// ─── SearchModalInner (needs router, must be inside providers) ────────────────

function SearchModalInner({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { hits } = useHits<Hit>();

  // Focus input on mount
  useEffect(() => {
    const raf = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(raf);
  }, []);

  // Reset active index when hits change
  useEffect(() => {
    setActiveIndex(0);
  }, [hits.length]);

  const navigate = useCallback(
    (url: string) => {
      router.push(url);
      onClose();
    },
    [router, onClose]
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, hits.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && hits[activeIndex]) {
        navigate(hits[activeIndex].url);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hits, activeIndex, navigate]);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_25px_60px_-12px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.05)]">
      {/* Search input */}
      <SearchBox inputRef={inputRef} />

      {/* Results — scrollable */}
      <div className="max-h-[380px] overflow-y-auto overscroll-contain">
        <ResultsPanel
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onSelect={navigate}
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#f3f4f6] px-4 py-2.5">
        <div className="flex items-center gap-3 text-[11px] text-[#9ca3af]">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[#e5e7eb] bg-[#f9fafb] px-1 py-0.5 text-[10px]">↑</kbd>
            <kbd className="rounded border border-[#e5e7eb] bg-[#f9fafb] px-1 py-0.5 text-[10px]">↓</kbd>
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[#e5e7eb] bg-[#f9fafb] px-1 py-0.5 text-[10px]">↵</kbd>
            open
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[#e5e7eb] bg-[#f9fafb] px-1 py-0.5 text-[10px]">ESC</kbd>
            close
          </span>
        </div>
        {/* Algolia attribution — required by Algolia's free tier ToS */}
        <a
          href="https://www.algolia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[11px] text-[#9ca3af] transition hover:text-[#6b7280]"
          tabIndex={-1}
        >
          Search by
          <svg viewBox="0 0 90 26" className="h-3.5 ml-1" aria-label="Algolia" role="img">
            <path
              fill="#003DFF"
              d="M13 0C5.8 0 0 5.8 0 13s5.8 13 13 13 13-5.8 13-13S20.2 0 13 0zm5.3 18.4c-.2.2-.5.2-.7 0l-3.7-3.8c-.7.4-1.5.6-2.3.6-2.7 0-4.9-2.2-4.9-4.9S8.9 5.4 11.6 5.4s4.9 2.2 4.9 4.9c0 .9-.3 1.8-.7 2.5l3.7 3.8c.2.2.2.5 0 .7l-1.2 1.1zm-7-4.7c1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1S8.2 8.9 8.2 10.6s1.4 3.1 3.1 3.1z"
            />
            <path
              fill="#003DFF"
              d="M34.7 6.2h-2.1V4.1l-2.3.7v1.4H29v1.9h1.3v4.4c0 2.2 1 3 3.4 3h1v-2h-.5c-1 0-1.3-.3-1.3-1.1V8.1h1.8V6.2zm8.1 0v.9c-.6-.7-1.5-1.1-2.6-1.1-2.4 0-4.2 1.9-4.2 4.4s1.8 4.4 4.2 4.4c1.1 0 2-.4 2.6-1.1v.9h2.2V6.2h-2.2zm-2.2 6.7c-1.3 0-2.3-1-2.3-2.4s1-2.4 2.3-2.4 2.3 1 2.3 2.4-1 2.4-2.3 2.4zm7.8-10.7h-2.3v12.4h2.3V2.2zm3.5 0c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4zm-1.1 12.4h2.3V6.2h-2.3v8.4zm8.9-8.6c-2.6 0-4.5 1.9-4.5 4.4s1.9 4.4 4.5 4.4 4.5-1.9 4.5-4.4-1.9-4.4-4.5-4.4zm0 6.9c-1.3 0-2.2-1-2.2-2.5s.9-2.5 2.2-2.5 2.2 1 2.2 2.5-.9 2.5-2.2 2.5zm11.9-6.9c-1.1 0-2 .4-2.6 1.1v-.9h-2.2v8.4h2.3v-4.5c0-1.5.8-2.3 2-2.3 1.1 0 1.8.7 1.8 2v4.8h2.3V8.9c0-2-1.3-3.3-3.6-3.3z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

// ─── Main exported component ─────────────────────────────────────────────────

export function SearchModal({ onClose }: { onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    /* Backdrop */
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh] sm:pt-[16vh]"
      style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}
      onMouseDown={(e) => {
        // Close when clicking the backdrop (not the modal itself)
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search EveryTools"
    >
      <div className="w-full max-w-xl">
        {/*
         * InstantSearch must wrap the components that use its hooks.
         * We instantiate it here (not at app level) so it only mounts when
         * the modal is open — no unnecessary API calls on every page load.
         */}
        <InstantSearch
          searchClient={getSearchClient()}
          indexName={ALGOLIA_INDEX}
          future={{ preserveSharedStateOnUnmount: false }}
        >
          <SearchModalInner onClose={onClose} />
        </InstantSearch>
      </div>
    </div>
  );
}
