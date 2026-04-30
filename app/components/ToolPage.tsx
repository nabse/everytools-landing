import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import InstallHashRedirect from "./InstallHashRedirect";
import { DETAIL_LEVELS, LANGUAGES, type Tool } from "../lib/tools";

type ToolPageProps = {
  tool: Tool;
  /**
   * Optional extra content rendered at the end of <main>, after the CTA and
   * before the global footer. Used by per-tool pages (e.g. InstantRep) to
   * append sections like Privacy Policy without touching the shared layout.
   */
  tailSlot?: React.ReactNode;
};

export default function ToolPage({ tool, tailSlot }: ToolPageProps) {
  return (
    <>
      <InstallHashRedirect installUrl={tool.installUrl} />
      <Nav />
      <main className="flex-1">
        {/* ================== HERO ================== */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
            {/* Parent brand chip + back link */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium shadow-soft transition hover:border-border-strong"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-cta-gradient text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-2.5 w-2.5"
                    aria-hidden
                  >
                    <path d="m14 7 3-3 3 3-3 3z" />
                    <path d="m4 17 3-3 9 9-3 3z" />
                  </svg>
                </span>
                <span className="text-muted-strong">Part of</span>
                <span className="font-semibold tracking-tight text-foreground">
                  EveryTools
                </span>
              </Link>
              <Link
                href="/#extensions"
                className="inline-flex items-center gap-1 text-[13px] text-muted transition hover:text-foreground"
              >
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                All extensions
              </Link>
            </div>

            <div className="mt-12 flex flex-col items-start gap-7">
              <div className="flex items-center gap-4">
                <div
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-elevate ring-1 ring-white/30"
                  style={{ background: tool.accent }}
                  aria-hidden
                >
                  <span className="[&_svg]:h-8 [&_svg]:w-8">{tool.icon}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Browser extension
                </span>
              </div>

              <h1 className="max-w-3xl text-[48px] font-semibold leading-[1.02] sm:text-[72px]">
                {tool.name}.
                <span className="block text-gradient">{tool.tagline}.</span>
              </h1>

              <p className="max-w-2xl text-[19px] font-medium leading-[1.45] text-foreground sm:text-[22px]">
                {tool.valueProp}
              </p>

              <p className="max-w-2xl text-[16px] leading-[1.7] text-muted sm:text-[17px]">
                {tool.longDescription}
              </p>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                {tool.comingSoon ? (
                  <a href="#coming-soon" className="btn-primary focus-ring">
                    Get notified
                    <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
                      Coming soon
                    </span>
                  </a>
                ) : (
                  <a
                    href={tool.installUrl ?? "#install"}
                    className="btn-primary focus-ring"
                    {...(tool.installUrl
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    Install {tool.name} — free
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                )}
                <Link href="/" className="btn-secondary focus-ring">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to EveryTools
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================== CUSTOMIZE ================== */}
        <section className="border-y border-border/60 bg-surface">
          <div className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 sm:py-28">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="eyebrow">Make it yours</span>
                <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                  Simple options.
                  <br />
                  <span className="text-muted">Real flexibility.</span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.7] text-muted">
                  Every EveryTools extension has the same simple options. Set
                  the language, pick the level of detail, and
                  {tool.tones ? " choose the tone —" : " "}
                  {tool.name} will adapt the output to your context.
                </p>
                <ul className="mt-7 space-y-3 text-[14.5px] text-foreground/85">
                  {[
                    "Choose from several output languages",
                    "Pick a level of detail that fits your time",
                    tool.tones
                      ? "Shape the tone so it suits the moment"
                      : "Adapt the format to how you work",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-[5px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ background: tool.accent }}
                        aria-hidden
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-2.5 w-2.5"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customize form mockup */}
              <div className="lg:col-span-7">
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-8 opacity-60 blur-3xl"
                    style={{ background: tool.accent, opacity: 0.15 }}
                  />
                  <div className="relative rounded-[22px] border border-border-strong/70 bg-white p-6 shadow-pop sm:p-8">
                    {/* Form header */}
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
                          style={{ background: tool.accent }}
                          aria-hidden
                        >
                          <span className="[&_svg]:h-[14px] [&_svg]:w-[14px]">
                            {tool.icon}
                          </span>
                        </span>
                        <span className="text-[13.5px] font-semibold tracking-tight">
                          {tool.name} · Options
                        </span>
                      </div>
                      <span className="text-[11px] font-medium text-muted">
                        Simple form
                      </span>
                    </div>

                    {/* Output language */}
                    <div>
                      <label className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                        Output language
                      </label>
                      <div className="mt-2 flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                        <span className="text-[14.5px] font-medium">
                          English
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-muted"
                          aria-hidden
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {LANGUAGES.slice(1, 7).map((lang) => (
                          <span
                            key={lang}
                            className="rounded-full border border-border bg-white px-2.5 py-1 text-[11.5px] text-muted-strong"
                          >
                            {lang}
                          </span>
                        ))}
                        <span className="rounded-full border border-dashed border-border px-2.5 py-1 text-[11.5px] text-muted">
                          +{Math.max(0, LANGUAGES.length - 7)} more
                        </span>
                      </div>
                    </div>

                    {/* Level of detail */}
                    <div className="mt-7">
                      <label className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                        Level of detail
                      </label>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {DETAIL_LEVELS.map((level, i) => {
                          const active = i === 1;
                          return (
                            <button
                              key={level}
                              type="button"
                              disabled
                              className={[
                                "rounded-xl border px-3 py-2.5 text-[13.5px] font-medium transition",
                                active
                                  ? "border-transparent bg-foreground text-background shadow-soft"
                                  : "border-border bg-white text-foreground/80 hover:border-border-strong",
                              ].join(" ")}
                            >
                              {level}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Tone (optional per-extension) */}
                    {tool.tones && tool.tones.length > 0 && (
                      <div className="mt-7">
                        <label className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                          Tone
                        </label>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {tool.tones.map((t, i) => {
                            const active = i === 0;
                            return (
                              <button
                                key={t}
                                type="button"
                                disabled
                                className={[
                                  "rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition",
                                  active
                                    ? "border-transparent bg-foreground text-background"
                                    : "border-border bg-white text-foreground/80",
                                ].join(" ")}
                              >
                                {t}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Mock action row */}
                    <div className="mt-8 flex items-center justify-between border-t border-border/70 pt-5">
                      <span className="text-[12px] text-muted">
                        Changes apply to every run
                      </span>
                      <span
                        className="inline-flex h-9 items-center gap-2 rounded-full px-4 text-[13px] font-semibold text-white shadow-soft"
                        style={{ background: tool.accent }}
                        aria-hidden
                      >
                        Run {tool.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== BENEFITS ================== */}
        <section className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">Why {tool.name}</span>
            <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
              Flexible by design.{" "}
              <span className="text-muted">Simple by default.</span>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
            {tool.features.map((f, i) => (
              <div
                key={f.title}
                className="group relative flex flex-col rounded-3xl border border-border/80 bg-white p-7 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover"
              >
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30"
                  style={{ background: tool.accent }}
                  aria-hidden
                >
                  <span className="text-[13px] font-semibold tracking-tight">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-[18px] font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================== CTA / COMING SOON ================== */}
        {tool.comingSoon ? (
          /* ── Coming soon block ── */
          <section id="coming-soon" className="px-5 pb-28 sm:px-8 sm:pb-32">
            <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] border border-border bg-white px-8 py-14 shadow-elevate sm:px-14 sm:py-18">
              {/* Subtle accent glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 opacity-[0.12] blur-3xl"
                style={{ background: tool.accent }}
              />

              <div className="relative max-w-xl">
                {/* Status badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ background: tool.accent }}
                  />
                  In development
                </span>

                <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[44px]">
                  Coming soon 🚀
                </h2>

                <p className="mt-4 text-[17px] leading-[1.7] text-muted">
                  {tool.name} is currently in development and will be available
                  very soon. We&apos;re making sure it&apos;s genuinely useful
                  before we ship it.
                </p>

                {/* Reassuring bullets */}
                <ul className="mt-7 space-y-3.5">
                  {[
                    "We're polishing the experience to make it really useful for you.",
                    "Be the first to try it when it launches.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] text-foreground/85"
                    >
                      <span
                        className="mt-[5px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white"
                        style={{ background: tool.accent }}
                        aria-hidden
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-2.5 w-2.5"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Early access CTA */}
                <div className="mt-9 rounded-2xl border border-border bg-surface px-6 py-5">
                  <p className="text-[14.5px] leading-relaxed text-muted-strong">
                    <span className="mr-1">💌</span>
                    <strong className="font-semibold text-foreground">
                      Want early access?
                    </strong>{" "}
                    Reach out and we&apos;ll let you know the moment it&apos;s
                    ready.{" "}
                    <a
                      href="mailto:contact@everytools.ai"
                      className="font-semibold text-brand underline underline-offset-2 transition hover:text-brand-strong"
                    >
                      contact@everytools.ai
                    </a>
                  </p>
                </div>

                <div className="mt-7">
                  <Link href="/" className="btn-secondary focus-ring">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                    Explore other extensions
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* ── Standard install CTA ── */
          <section id="install" className="px-5 pb-28 sm:px-8 sm:pb-32">
            <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] bg-cta-gradient px-8 py-16 text-white shadow-pop sm:px-14 sm:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(600px 260px at 80% 0%, rgba(255,255,255,0.25), transparent 60%)",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  An EveryTools extension
                </span>
                <h2 className="mt-5 max-w-2xl text-[32px] font-semibold leading-[1.1] sm:text-[48px]">
                  Add {tool.name} to your browser.
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                  A standalone extension. Multilingual by default. Customizable
                  in a click.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={tool.installUrl ?? "#"}
                    className="btn-on-cta focus-ring"
                    {...(tool.installUrl
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    Install {tool.name} — free
                  </a>
                  <Link href="/" className="btn-ghost-white focus-ring">
                    Back to EveryTools
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {tailSlot}
      </main>
      <Footer />
    </>
  );
}
