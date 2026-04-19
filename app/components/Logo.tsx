"use client";

import { useId } from "react";

type LogoProps = {
  /** Size of the icon square in px. Wordmark scales proportionally. */
  size?: number;
  /** Whether to show the "everytools" wordmark next to the icon. */
  showWordmark?: boolean;
  /** Color of the wordmark. Defaults to currentColor. */
  wordmarkClassName?: string;
  /** Accessible label. Omit to hide from AT (e.g., when wrapped in a labelled link). */
  label?: string;
};

export default function Logo({
  size = 32,
  showWordmark = true,
  wordmarkClassName = "text-foreground",
  label,
}: LogoProps) {
  return (
    <span
      className="inline-flex items-center gap-2.5"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <LogoIcon size={size} />
      {showWordmark && (
        <span
          className={`text-[1.05em] font-semibold tracking-tight ${wordmarkClassName}`}
          style={{ fontSize: Math.round(size * 0.56) }}
        >
          everytools
        </span>
      )}
    </span>
  );
}

export function LogoIcon({ size = 32 }: { size?: number }) {
  const uid = useId();
  const ids = {
    tl: `et-tl-${uid}`,
    tr: `et-tr-${uid}`,
    bl: `et-bl-${uid}`,
    br: `et-br-${uid}`,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={ids.tl} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2e52" />
          <stop offset="100%" stopColor="#3c416f" />
        </linearGradient>
        <linearGradient id={ids.tr} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6a8ced" />
          <stop offset="100%" stopColor="#a8bdf0" />
        </linearGradient>
        <linearGradient id={ids.bl} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9a4ca0" />
          <stop offset="100%" stopColor="#c56cbf" />
        </linearGradient>
        <linearGradient id={ids.br} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d187c9" />
          <stop offset="100%" stopColor="#ecaadb" />
        </linearGradient>
      </defs>

      {/* 2x2 grid: each cell ~13x13 with a 2px gap; corner-radius large to read
          as "rounded square / near-circle" per the brand sheet. */}
      <rect x="1.5" y="1.5" width="13" height="13" rx="5" fill={`url(#${ids.tl})`} />
      <rect x="17.5" y="1.5" width="13" height="13" rx="5" fill={`url(#${ids.tr})`} />
      <rect x="1.5" y="17.5" width="13" height="13" rx="5" fill={`url(#${ids.bl})`} />
      <rect x="17.5" y="17.5" width="13" height="13" rx="5" fill={`url(#${ids.br})`} />
    </svg>
  );
}
