import Link from "next/link";
import type { ReactNode } from "react";

type ToolCardProps = {
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: ReactNode;
  accent: string;
};

export default function ToolCard({
  name,
  tagline,
  description,
  href,
  icon,
  accent,
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-white p-7 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-elevate-hover sm:p-8"
    >
      {/* Subtle hover gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px 200px at 100% 0%, rgba(79,70,229,0.06), transparent 60%)",
        }}
      />

      {/* Top row: icon + arrow */}
      <div className="relative flex items-start justify-between">
        <div
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30"
          style={{ background: accent }}
          aria-hidden
        >
          <span className="[&_svg]:h-[22px] [&_svg]:w-[22px]">{icon}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-muted-strong">
            <span className="h-1 w-1 rounded-full bg-brand" />
            Extension
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-white text-muted transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 -rotate-45"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="relative mt-7 text-[22px] font-semibold tracking-tight text-foreground">
        {name}
      </h3>
      <p className="relative mt-1 text-[13px] font-medium text-brand">
        {tagline}
      </p>

      {/* Description */}
      <p className="relative mt-3 text-[15px] leading-relaxed text-muted">
        {description}
      </p>
    </Link>
  );
}
