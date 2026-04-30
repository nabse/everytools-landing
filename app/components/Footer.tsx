import Link from "next/link";
import Logo from "./Logo";

const tools = [
  { name: "InstantRep", href: "/instantrep" },
  { name: "Veedge", href: "/veedge" },
  { name: "ExplainIt", href: "/explainit" },
  { name: "WorthIt", href: "/worthit" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Link href="/" aria-label="EveryTools — home" className="inline-flex">
              <Logo size={32} />
            </Link>
            <p className="mt-5 max-w-sm text-[14.5px] leading-[1.7] text-muted">
              A suite of AI browser extensions for everyday tasks.
              <br />
              Multilingual, customizable, and adapted to your needs.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
              Extensions
            </h4>
            <ul className="mt-5 space-y-3">
              {tools.map((t) => (
                <li key={t.href}>
                  <Link
                    href={t.href}
                    className="text-[14.5px] text-foreground/80 transition hover:text-foreground"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
              Contact
            </h4>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="mailto:contact@everytools.ai"
                  className="text-[14.5px] text-foreground/80 transition hover:text-foreground"
                >
                  contact@everytools.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-8 text-[12.5px] text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} EveryTools. All rights reserved.</p>
          <p>Built for people who want their time back.</p>
        </div>
      </div>
    </footer>
  );
}
