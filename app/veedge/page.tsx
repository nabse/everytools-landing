import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import VeedgeSummaryDemo from "../components/VeedgeSummaryDemo";
import PrivacySection from "../components/PrivacySection";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/veedge-%E2%80%94-youtube-ai-summa/nllgadlfnebcjkilfoanbaknkkpdmflk";

const ACCENT = "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)";

export const metadata: Metadata = {
  title: "AI YouTube Video Summarizer — Fast, Multilingual, With Timestamps | Veedge",
  description:
    "Veedge is a Chrome extension that summarizes any YouTube video in seconds. Get key ideas, timestamps, and takeaways in your preferred language — at the level of detail you choose.",
  keywords: [
    "AI YouTube summarizer",
    "YouTube video summarizer extension",
    "fast YouTube summarizer",
    "YouTube summarizer with timestamps",
    "multilingual YouTube summarizer",
    "Chrome extension YouTube summary",
    "YouTube summary AI",
    "Veedge",
  ],
  openGraph: {
    title: "Veedge — AI YouTube Video Summarizer (Fast, Multilingual, With Timestamps)",
    description:
      "Summarize any YouTube video in seconds. Key ideas, timestamps, and takeaways in your preferred language.",
    url: "/veedge",
  },
  alternates: {
    canonical: "https://everytools.ai/veedge",
  },
  verification: {
    google: "WZrdMKFSNTVIPUmh0n20YadnGbZtcz37rj1QTvH8DpY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Veedge — AI YouTube Video Summarizer",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  description:
    "Veedge is a Chrome extension that summarizes any YouTube video in seconds. It generates structured summaries with key takeaways and timestamps in your preferred language, at the level of detail you choose.",
  url: "https://everytools.ai/veedge",
  downloadUrl: INSTALL_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Instant video summarization",
    "Timestamps for key moments",
    "8+ output languages",
    "Adjustable summary depth (Quick, Standard, Detailed)",
    "Works on any YouTube video",
  ],
};

// ---- Components ----

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function PartialIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M5 12h14" />
    </svg>
  );
}

// ---- Page ----

export default function VeedgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main className="flex-1">
        {/* ================== HERO ================== */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium shadow-soft transition hover:border-border-strong"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-cta-gradient text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden>
                    <path d="m14 7 3-3 3 3-3 3z" /><path d="m4 17 3-3 9 9-3 3z" />
                  </svg>
                </span>
                <span className="text-muted-strong">Part of</span>
                <span className="font-semibold tracking-tight text-foreground">EveryTools</span>
              </Link>
              <Link
                href="/#extensions"
                className="inline-flex items-center gap-1 text-[13px] text-muted transition hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                  <path d="m15 18-6-6 6-6" />
                </svg>
                All extensions
              </Link>
            </nav>

            <div className="mt-12 flex flex-col items-start gap-7">
              {/* Icon + badge */}
              <div className="flex items-center gap-4">
                <div
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-elevate ring-1 ring-white/30"
                  style={{ background: ACCENT }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden>
                    <path d="M7 5v14l12-7z" />
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Chrome extension
                </span>
              </div>

              {/* H1 */}
              <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.02] sm:text-[68px]">
                AI YouTube Video Summarizer
                <span className="block text-gradient">
                  Fast. Multilingual. With Timestamps.
                </span>
              </h1>

              {/* GEO-optimized intro — direct answer paragraph */}
              <p className="max-w-2xl text-[18px] leading-[1.6] text-foreground sm:text-[20px]">
                Veedge is a Chrome extension that summarizes any YouTube video in seconds.
              </p>
              <p className="max-w-2xl text-[16px] leading-[1.75] text-muted">
                Open it on any YouTube video, click Summarize, and receive a structured summary
                with key takeaways and timestamps — in your preferred language, at the level of
                detail you choose. Veedge supports 8+ output languages and three depth levels
                (Quick, Standard, Detailed), regardless of the language the video was recorded in.
              </p>

              {/* CTAs */}
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a
                  href={INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary focus-ring"
                >
                  Install Veedge — free
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <Link href="/" className="btn-secondary focus-ring">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to EveryTools
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================== QUICK FACTS ================== */}
        <section className="border-y border-border/60 bg-white" aria-label="Key facts">
          <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8">
            <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {[
                { value: "< 10s", label: "Time to generate a summary" },
                { value: "8+", label: "Output languages supported" },
                { value: "3", label: "Summary depth levels" },
                { value: "Any video", label: "Works on all YouTube content" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="text-[13px] text-muted">{label}</dt>
                  <dd
                    className="text-[28px] font-semibold tracking-tight sm:text-[32px]"
                    style={{
                      background: ACCENT,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ================== FEATURES ================== */}
        <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="features-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-14 max-w-2xl">
              <span className="eyebrow">How it works</span>
              <h2 id="features-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Four capabilities. <span className="text-muted">One extension.</span>
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* Feature 1: Speed */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30"
                  style={{ background: ACCENT }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M13 2 4 14h7l-1 8 10-12h-7z" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">
                  Instant summarization
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  Veedge generates a full summary in under 10 seconds. Open the extension
                  while on any YouTube video, click Summarize, and get structured key ideas
                  and takeaways — without watching the video or copying a transcript manually.
                  Works on any video length.
                </p>
                <Link
                  href="/veedge/fast-youtube-summary"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-brand transition hover:text-brand-strong"
                >
                  Learn more about fast YouTube summarization
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </article>

              {/* Feature 2: Timestamps */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30"
                  style={{ background: ACCENT }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">
                  Timestamps for every key moment
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  Every Veedge summary includes precise timestamps linked to the key sections
                  of the video. Jump directly to the part that matters — no scrubbing required.
                  Each timestamp is labeled with a short description of what happens at that moment.
                </p>
                <Link
                  href="/veedge/youtube-summary-timestamps"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-brand transition hover:text-brand-strong"
                >
                  Summarize videos with timestamps
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </article>

              {/* Feature 3: Multilingual */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30"
                  style={{ background: ACCENT }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">
                  Multilingual video summaries
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  Veedge generates summaries in your preferred language — English, French, Spanish,
                  German, Portuguese, Italian, Dutch, Japanese, and more — regardless of the
                  language the video was recorded in. The output language is independent from the
                  video's spoken language.
                </p>
                <Link
                  href="/veedge/multilingual-youtube-summary"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-brand transition hover:text-brand-strong"
                >
                  Get multilingual video summaries
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </article>

              {/* Feature 4: Depth */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30"
                  style={{ background: ACCENT }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">
                  Adjustable summary depth
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  Choose how much detail you need before running Veedge. <strong className="font-semibold text-foreground/90">Quick</strong> gives
                  you 3–5 bullet points for a fast skim. <strong className="font-semibold text-foreground/90">Standard</strong> provides a
                  structured paragraph summary with key takeaways. <strong className="font-semibold text-foreground/90">Detailed</strong> delivers
                  a full breakdown with every major section covered.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================== COMPARISON ================== */}
        <section className="bg-white px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="comparison-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">How Veedge compares</span>
              <h2 id="comparison-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Veedge vs. other YouTube summarizers
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                Most YouTube summarizers are either too manual, language-locked, or lack
                timestamps. Here is how Veedge differs.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border shadow-elevate">
              <table className="w-full min-w-[600px] text-[14.5px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Feature</th>
                    <th className="px-5 py-4 text-center font-semibold">
                      <span
                        className="inline-block rounded-full px-3 py-1 text-[12px] font-bold text-white"
                        style={{ background: ACCENT }}
                      >
                        Veedge
                      </span>
                    </th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Glasp</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Eightify</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">YouTube built-in</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "One-click summary",
                      veedge: true, glasp: false, eightify: true, youtube: "partial",
                    },
                    {
                      feature: "Timestamps for key moments",
                      veedge: true, glasp: false, eightify: "partial", youtube: false,
                    },
                    {
                      feature: "Choose output language (8+)",
                      veedge: true, glasp: false, eightify: "partial", youtube: false,
                    },
                    {
                      feature: "Adjustable summary depth",
                      veedge: true, glasp: false, eightify: false, youtube: false,
                    },
                    {
                      feature: "Works on all videos",
                      veedge: true, glasp: true, eightify: true, youtube: "partial",
                    },
                    {
                      feature: "No manual transcript copy",
                      veedge: true, glasp: false, eightify: true, youtube: true,
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}
                    >
                      <td className="px-5 py-3.5 font-medium text-foreground/90">{row.feature}</td>
                      {[row.veedge, row.glasp, row.eightify, row.youtube].map((val, j) => (
                        <td key={j} className="px-5 py-3.5 text-center">
                          {val === true ? (
                            <span className="inline-flex items-center justify-center text-emerald-600">
                              <CheckIcon />
                            </span>
                          ) : val === false ? (
                            <span className="inline-flex items-center justify-center text-muted/50">
                              <CrossIcon />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center text-amber-500">
                              <PartialIcon />
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[12.5px] text-muted">
              ✓ = fully supported &nbsp;·&nbsp; — = partial or limited &nbsp;·&nbsp; ✗ = not supported
            </p>
          </div>
        </section>

        {/* ================== GEO INTERNAL LINKS ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8" aria-labelledby="guides-heading">
          <div className="mx-auto w-full max-w-5xl">
            <h2 id="guides-heading" className="mb-8 text-[20px] font-semibold tracking-tight text-muted-strong">
              Explore specific use cases
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  href: "/veedge/fast-youtube-summary",
                  title: "Fast YouTube Summarizer",
                  body: "Get the key ideas from any video in under 10 seconds — without watching it.",
                  anchor: "Explore fast YouTube summarization →",
                },
                {
                  href: "/veedge/youtube-summary-timestamps",
                  title: "YouTube Summary With Timestamps",
                  body: "Every summary includes clickable timestamps. Jump to what matters, skip what doesn't.",
                  anchor: "Summarize videos with timestamps →",
                },
                {
                  href: "/veedge/multilingual-youtube-summary",
                  title: "Multilingual YouTube Summarizer",
                  body: "Read any video's summary in your language — regardless of what it was recorded in.",
                  anchor: "Get multilingual video summaries →",
                },
              ].map(({ href, title, body, anchor }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-elevate transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elevate-hover"
                >
                  <h3 className="text-[16px] font-semibold tracking-tight group-hover:text-brand transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{body}</p>
                  <span className="mt-4 text-[13px] font-medium text-brand">{anchor}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================== DEMO ================== */}
        <VeedgeSummaryDemo />

        {/* ================== PRIVACY ================== */}
        <PrivacySection
          toolName="Veedge"
          processedTitle="Videos are processed, not stored"
          processedBody="The extension accesses the currently open YouTube video only when you actively use it. The content is processed temporarily to generate a summary and discarded right after — it is never retained."
        />

        {/* ================== CTA ================== */}
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
                Add Veedge to your browser.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                A standalone Chrome extension. Multilingual by default. Customizable in a click.
                Summarize any YouTube video in seconds.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-on-cta focus-ring"
                >
                  Install Veedge — free
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <Link href="/" className="btn-ghost-white focus-ring">
                  Back to EveryTools
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
