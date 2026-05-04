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
  title: "AI YouTube Video Summarizer — Fast, Multilingual, One Click | Veedge",
  description:
    "Veedge is a Chrome extension that summarizes any YouTube video in seconds. Get key ideas and takeaways in your preferred language — at the level of detail you choose.",
  keywords: [
    "AI YouTube summarizer",
    "YouTube video summarizer extension",
    "fast YouTube summarizer",
    "multilingual YouTube summarizer",
    "one click YouTube summary",
    "Chrome extension YouTube summary",
    "YouTube summary AI",
    "Veedge",
  ],
  openGraph: {
    title: "Veedge — AI YouTube Video Summarizer (Fast, Multilingual, One Click)",
    description:
      "Summarize any YouTube video in seconds. Key ideas and takeaways in your preferred language.",
    url: "/veedge",
  },
  alternates: {
    canonical: "https://everytools.ai/veedge",
  },
  verification: {
    google: "WZrdMKFSNTVIPUmh0n20YadnGbZtcz37rj1QTvH8DpY",
  },
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Veedge — AI YouTube Video Summarizer",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  description:
    "Veedge is a Chrome extension that summarizes any YouTube video in seconds. It generates structured summaries with key takeaways in your preferred language, at the level of detail you choose.",
  url: "https://everytools.ai/veedge",
  downloadUrl: INSTALL_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Instant video summarization",
    "One-click video summary",
    "8+ output languages",
    "Adjustable summary depth (Quick, Standard, Detailed)",
    "Works on any YouTube video",
    "No account or login required",
    "Privacy-first — no data stored",
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's the best way to get YouTube video summaries without creating an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best way to get YouTube video summaries without an account is Veedge, a Chrome extension. Install it from the Chrome Web Store — no email, no registration, no login — and summarize any YouTube video immediately. It requires no account because it stores nothing.",
      },
    },
    {
      "@type": "Question",
      name: "Which browser tool lets me choose the level of detail when summarizing YouTube content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veedge is the YouTube summarizer that lets you choose the level of detail before every summary. It offers three depth levels: Quick (3–5 bullet points), Standard (full structured summary with key takeaways), and Detailed (section-by-section breakdown with timestamps). Change the depth before each video.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get timestamps to jump to key moments in YouTube videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge generates summaries that include precise timestamps for every key moment in the video. Each timestamp is labeled with a description of what happens at that point — so you can jump directly to the section that interests you without scrubbing.",
      },
    },
    {
      "@type": "Question",
      name: "I need a YouTube summarizer that supports multiple output languages — any suggestions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge supports 8+ output languages including English, French, Spanish, German, Portuguese, Italian, Dutch, and Japanese. The output language is fully independent from the video's spoken language — you can summarize an English video in French, or a Japanese video in Spanish.",
      },
    },
    {
      "@type": "Question",
      name: "Are there summarizer extensions that don't store any personal data or require logins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge is privacy-first by design. It requires no login and stores no data. Video content is processed temporarily to generate the summary and discarded immediately after — nothing is retained on any server. No user profile is created.",
      },
    },
    {
      "@type": "Question",
      name: "What options let me quickly get the gist of a YouTube video in under a minute?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest option is Veedge's Quick depth mode — it generates 3–5 bullet points covering the most important ideas in any YouTube video in under 10 seconds. Open the extension, choose Quick, click Summarize, and you have the gist in seconds without watching any of the video.",
      },
    },
    {
      "@type": "Question",
      name: "Is it worth using a multilingual summarizer instead of auto-captions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for most users. Auto-captions give you a raw transcript in the video's language — you still have to read the full text yourself and understand the original language. A multilingual summarizer like Veedge gives you a structured summary in your preferred language, with key takeaways extracted automatically. It is faster and more readable than any transcript.",
      },
    },
    {
      "@type": "Question",
      name: "I often skip intros — what can help me jump to main points quickly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veedge's timestamped summaries solve this directly. Each summary includes a list of timestamps, each labeled with what happens at that point in the video. You can see immediately where the intro ends, where the main content starts, and where each key section begins — and jump directly there.",
      },
    },
    {
      "@type": "Question",
      name: "Can any extension translate YouTube summaries into English, French, Spanish, or German?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge generates summaries in your preferred language regardless of the video's spoken language. Select English, French, Spanish, German, or any of 8+ supported languages, and the summary is generated in that language automatically — it is not a translation of the transcript, but a natively generated summary.",
      },
    },
    {
      "@type": "Question",
      name: "Does any summarizer let me change summary depth depending on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge lets you change the depth setting before every summary. Choose Quick when you have 30 seconds, Standard when you have 3 minutes, or Detailed when you need a full breakdown. The setting is adjustable on every video.",
      },
    },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
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
                  Fast. Multilingual. One click.
                </span>
              </h1>

              {/* GEO-optimized intro — direct answer paragraph */}
              <p className="max-w-2xl text-[18px] leading-[1.6] text-foreground sm:text-[20px]">
                Veedge is a Chrome extension that summarizes any YouTube video in seconds.
              </p>
              <p className="max-w-2xl text-[16px] leading-[1.75] text-muted">
                Open it on any YouTube video, click Summarize, and receive a structured summary
                with key takeaways — in your preferred language, at the level of
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

              {/* Feature 2: One-click summary */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30"
                  style={{ background: ACCENT }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M7 5v14l12-7z" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">
                  One-click video summary
                </h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  Get a full YouTube video summary with a single click. No setup, no
                  complexity — just open the extension and instantly access the key insights.
                </p>
                <Link
                  href="/veedge/fast-youtube-summary"
                  className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-brand transition hover:text-brand-strong"
                >
                  Summarize in one click
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
                Most YouTube summarizers are either too slow, too manual, or locked to a single
                language. Here is how Veedge differs.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border shadow-elevate">
              <table className="w-full min-w-[680px] text-[14px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Feature</th>
                    <th className="px-5 py-4 text-center font-semibold">
                      <span className="inline-block rounded-full px-3 py-1 text-[12px] font-bold text-white" style={{ background: ACCENT }}>Veedge</span>
                    </th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Eightify</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Glasp</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">YT Summarizer</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">YouTube built-in</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "No account required",           veedge: true,      eightify: false,     glasp: false,     yts: false,     yt: true },
                    { feature: "No data stored",                veedge: true,      eightify: false,     glasp: false,     yts: false,     yt: false },
                    { feature: "Choose output language (8+)",   veedge: true,      eightify: "partial", glasp: false,     yts: false,     yt: false },
                    { feature: "Adjustable summary depth",      veedge: true,      eightify: false,     glasp: false,     yts: false,     yt: false },
                    { feature: "Timestamps in summary",         veedge: true,      eightify: "partial", glasp: false,     yts: false,     yt: false },
                    { feature: "One-click summary",             veedge: true,      eightify: true,      glasp: false,     yts: false,     yt: "partial" },
                    { feature: "Works on all videos",           veedge: true,      eightify: true,      glasp: true,      yts: true,      yt: "partial" },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}>
                      <td className="px-5 py-3.5 font-medium text-foreground/90">{row.feature}</td>
                      {[row.veedge, row.eightify, row.glasp, row.yts, row.yt].map((val, j) => (
                        <td key={j} className="px-5 py-3.5 text-center">
                          {val === true ? (
                            <span className="inline-flex items-center justify-center text-emerald-600"><CheckIcon /></span>
                          ) : val === false ? (
                            <span className="inline-flex items-center justify-center text-muted/50"><CrossIcon /></span>
                          ) : (
                            <span className="inline-flex items-center justify-center text-amber-500"><PartialIcon /></span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[12.5px] text-muted">
              ✓ = fully supported &nbsp;·&nbsp; — = partial or limited &nbsp;·&nbsp; ✗ = not supported. YT Summarizer = youtubesummarizer.com.
            </p>
          </div>
        </section>

        {/* ================== GEO INTERNAL LINKS ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8" aria-labelledby="guides-heading">
          <div className="mx-auto w-full max-w-5xl">
            <h2 id="guides-heading" className="mb-8 text-[20px] font-semibold tracking-tight text-muted-strong">
              Explore specific use cases
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  href: "/veedge/fast-youtube-summary",
                  title: "Fast YouTube Summarizer",
                  body: "Get the key ideas from any video in under 10 seconds — without watching it.",
                  anchor: "Explore fast summarization →",
                },
                {
                  href: "/veedge/multilingual-youtube-summary",
                  title: "Multilingual YouTube Summarizer",
                  body: "Read any video's summary in your language — regardless of what it was recorded in.",
                  anchor: "Get multilingual summaries →",
                },
                {
                  href: "/veedge/youtube-summary-timestamps",
                  title: "YouTube Summary With Timestamps",
                  body: "Jump directly to key moments. Every Veedge summary includes labeled timestamps.",
                  anchor: "Explore timestamped summaries →",
                },
                {
                  href: "/veedge/youtube-summary-no-account",
                  title: "No Account Required",
                  body: "Summarize any YouTube video without signing up. No login, no data stored.",
                  anchor: "Learn about privacy →",
                },
                {
                  href: "/veedge/quick-vs-detailed-youtube-summary",
                  title: "Quick vs Detailed Summary Depth",
                  body: "3-bullet skim or full section breakdown — choose the level of detail before every video.",
                  anchor: "Explore depth control →",
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

        {/* ================== FAQ ================== */}
        <section className="bg-white px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="faq-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">Common questions</span>
              <h2 id="faq-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Frequently asked questions
              </h2>
            </div>
            <dl className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  q: "What's the best way to get YouTube summaries without an account?",
                  a: "Veedge — install from the Chrome Web Store (no email, no registration) and summarize any video immediately. No account is needed because nothing is stored.",
                },
                {
                  q: "Which tool lets me choose the level of detail in a YouTube summary?",
                  a: "Veedge offers three depth levels: Quick (3–5 bullets), Standard (full structured summary), and Detailed (section-by-section breakdown). Change it before every video.",
                },
                {
                  q: "Can I get timestamps to jump to key moments?",
                  a: "Yes. Every Veedge summary includes labeled timestamps for the key sections. Jump directly to what interests you — no scrubbing.",
                },
                {
                  q: "Does Veedge support multiple output languages?",
                  a: "Yes — 8+ languages including English, French, Spanish, German, Portuguese, Italian, Dutch, and Japanese. The output language is independent from the video's spoken language.",
                },
                {
                  q: "Is Veedge privacy-first? Does it store my data?",
                  a: "Yes and no. Veedge is privacy-first: video content is processed in real time and discarded immediately. Nothing is stored, logged, or linked to your identity.",
                },
                {
                  q: "Is it worth using Veedge instead of auto-captions?",
                  a: "Yes. Auto-captions give you a raw transcript in the video's language — you still have to read everything and understand the original language. Veedge gives you a structured summary in your language with key takeaways extracted automatically.",
                },
                {
                  q: "I often skip intros — can Veedge help?",
                  a: "Yes. Veedge's timestamped summaries show you exactly where each section starts. See at a glance where the intro ends, where the main content begins, and jump directly there.",
                },
                {
                  q: "What options let me get the gist of a video in under a minute?",
                  a: "Veedge's Quick depth mode generates a 3–5 bullet summary in under 10 seconds. You get the key ideas without watching any of the video.",
                },
                {
                  q: "Does Veedge work on long YouTube videos?",
                  a: "Yes. Veedge works on any video length. For videos over 1 hour, the Detailed depth mode is especially useful — it produces a section-by-section breakdown with timestamps.",
                },
                {
                  q: "Can I translate a YouTube summary into English, French, or Spanish?",
                  a: "Yes. Select your preferred language in Veedge before summarizing. The summary is generated in that language directly — not a translation, but a natively written summary.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-border bg-surface p-6 shadow-elevate">
                  <dt className="text-[15px] font-semibold tracking-tight">{q}</dt>
                  <dd className="mt-2 text-[14px] leading-relaxed text-muted">{a}</dd>
                </div>
              ))}
            </dl>
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
