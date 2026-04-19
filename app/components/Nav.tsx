import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 glass">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="EveryTools — home" className="inline-flex">
          <Logo size={30} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#extensions"
            className="text-sm text-muted transition hover:text-foreground"
          >
            Extensions
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm text-muted transition hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="/#use-cases"
            className="text-sm text-muted transition hover:text-foreground"
          >
            Use cases
          </Link>
        </nav>

        <a
          href="#extensions"
          className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-foreground px-4 text-[13px] font-semibold text-background transition hover:opacity-90"
          style={{
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.15) inset, 0 4px 12px -4px rgba(10,10,21,0.4)",
          }}
        >
          Explore extensions
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}
