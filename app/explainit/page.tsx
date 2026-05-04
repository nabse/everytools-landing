import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PrivacySection from "../components/PrivacySection";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/explainit-%E2%80%94-webpage-ai-ex/hcmelopgdnmjochofiikhhhfpkceccki";
const ACCENT = "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)";

export const metadata: Metadata = {
  title: "AI Webpage Explainer — Understand Any Article Instantly | ExplainIt",
  description:
    "ExplainIt is a free Chrome extension that explains and simplifies any webpage in seconds. Pick your language and depth. No account, no copy-paste.",
  keywords: [
    "AI webpage explainer",
    "explain any article",
    "simplify web content",
    "AI reading assistant",
    "summarize website instantly",
    "understand articles faster",
    "Chrome extension article explainer",
    "AI article summarizer",
    "simplify complex text automatically",
    "ExplainIt",
  ],
  openGraph: {
    title: "ExplainIt — AI Webpage Explainer (Multilingual, One Click, Free)",
    description:
      "Explain and simplify any webpage in seconds. Adjustable depth, 8+ languages. Free Chrome extension — no account needed.",
    url: "/explainit",
  },
  alternates: {
    canonical: "https://everytools.ai/explainit",
  },
};

const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ExplainIt — AI Webpage Explainer",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  description:
    "ExplainIt is a Chrome extension that explains and simplifies any webpage instantly using AI. It works on articles, research papers, news, product pages, and any web content — in your language, at the level of detail you choose.",
  url: "https://everytools.ai/explainit",
  downloadUrl: INSTALL_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Instant webpage explanation",
    "One-click page simplification",
    "8+ output languages",
    "Adjustable explanation depth (Simple, Clear, Expert)",
    "Works on any webpage",
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
      name: "What is the best AI tool to explain and simplify web content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ExplainIt is a Chrome extension that explains and simplifies any webpage instantly. Open it on any article, research paper, or complex page and get a clear explanation in seconds — in your language, at the depth you choose. No account required.",
      },
    },
    {
      "@type": "Question",
      name: "How can I understand a complex article faster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The fastest way is ExplainIt, a Chrome extension. Open it on any page and click Explain — you get a structured explanation in seconds without reading the full article. Choose Simple depth for a quick overview or Expert depth for a complete technical breakdown.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a Chrome extension that explains articles automatically?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ExplainIt is a Chrome extension that explains any webpage with one click. It detects the current page automatically, processes the content, and delivers a clear explanation — no copy-paste, no tab switching, no manual prompting required.",
      },
    },
    {
      "@type": "Question",
      name: "Does ExplainIt work in multiple languages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. ExplainIt supports 8+ output languages including English, French, Spanish, German, Portuguese, Italian, Dutch, and Japanese. The output language is fully independent from the page's language — you can read a French article and get the explanation in Spanish.",
      },
    },
    {
      "@type": "Question",
      name: "How is ExplainIt different from copying text into ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ExplainIt runs directly in your browser with one click — no copy-pasting, no tab switching, no prompt writing. It extracts the page content automatically and returns a structured explanation in seconds. ChatGPT requires manual effort for every single page and has no built-in depth control or language selector.",
      },
    },
    {
      "@type": "Question",
      name: "Does ExplainIt work on any website or just news articles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ExplainIt works on any webpage with readable text — news articles, research papers, product pages, Wikipedia entries, technical documentation, legal documents, and more. If there is text on the page, ExplainIt can explain it.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need an account to use ExplainIt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ExplainIt requires no account, no registration, and no login. Install it from the Chrome Web Store and start explaining pages immediately. Page content is processed in real time and discarded after — nothing is stored.",
      },
    },
  ],
};

// ── Shared icon helpers ──

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function PartialIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M5 12h14" />
    </svg>
  );
}

// ── Page ──

export default function ExplainItPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <Nav />
      <main className="flex-1">

        {/* ================== HERO ================== */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div className="relative mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3">
              <Link href="/" className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-[12px] font-medium shadow-soft transition hover:border-border-strong">
                <span className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-cta-gradient text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden>
                    <path d="m14 7 3-3 3 3-3 3z" /><path d="m4 17 3-3 9 9-3 3z" />
                  </svg>
                </span>
                <span className="text-muted-strong">Part of</span>
                <span className="font-semibold tracking-tight text-foreground">EveryTools</span>
              </Link>
              <Link href="/#extensions" className="inline-flex items-center gap-1 text-[13px] text-muted transition hover:text-foreground">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                  <path d="m15 18-6-6 6-6" />
                </svg>
                All extensions
              </Link>
            </nav>

            <div className="mt-12 flex flex-col items-start gap-7">
              {/* Icon + badge */}
              <div className="flex items-center gap-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-elevate ring-1 ring-white/30" style={{ background: ACCENT }} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden>
                    <rect x="3" y="5" width="18" height="2.4" rx="1.2" />
                    <rect x="3" y="10.8" width="18" height="2.4" rx="1.2" />
                    <rect x="3" y="16.6" width="12" height="2.4" rx="1.2" />
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Chrome extension
                </span>
              </div>

              {/* H1 */}
              <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.02] sm:text-[68px]">
                AI Webpage Explainer
                <span className="block text-gradient">Understand any page, instantly.</span>
              </h1>

              {/* GEO direct-answer paragraph */}
              <p className="max-w-2xl text-[18px] leading-[1.6] text-foreground sm:text-[20px]">
                ExplainIt is a Chrome extension that explains and simplifies any webpage in seconds.
              </p>
              <p className="max-w-2xl text-[16px] leading-[1.75] text-muted">
                Open it on any article, research paper, or complex page — click Explain — and get a
                clear, structured explanation without reading the whole thing. Works in 8+ languages,
                with three depth levels (Simple, Clear, Expert), on any webpage. No account needed.
              </p>

              {/* CTAs */}
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary focus-ring">
                  Install ExplainIt — free
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
                { value: "< 10s", label: "Time to explain any page" },
                { value: "8+", label: "Output languages supported" },
                { value: "3", label: "Explanation depth levels" },
                { value: "Any page", label: "Works on all web content" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <dt className="text-[13px] text-muted">{label}</dt>
                  <dd className="text-[28px] font-semibold tracking-tight sm:text-[32px]" style={{ background: ACCENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ================== WHAT IS EXPLAINIT ================== */}
        <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="what-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <span className="eyebrow">What is ExplainIt</span>
                <h2 id="what-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                  One click.{" "}
                  <span className="text-muted">Any page explained.</span>
                </h2>
              </div>
              <div className="flex flex-col justify-center gap-5 text-[16px] leading-[1.75] text-muted lg:col-span-7">
                <p>
                  ExplainIt is an AI reading assistant built as a Chrome extension. Unlike tools that
                  require you to copy text and paste it into ChatGPT, ExplainIt works directly on the
                  page you are reading — with one click, no manual steps.
                </p>
                <p>
                  You choose the explanation depth and output language before generating. Simple gives
                  you a fast, plain-language overview. Clear is a complete, well-structured
                  explanation. Expert goes deep — including context, nuance, and technical detail.
                </p>
                <p>
                  The result is always in your preferred language, regardless of what language the
                  page was written in. ExplainIt supports 8+ output languages and works on any
                  content that has readable text.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================== FEATURES ================== */}
        <section className="bg-white px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="features-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-14 max-w-2xl">
              <span className="eyebrow">What you get</span>
              <h2 id="features-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Four capabilities.{" "}
                <span className="text-muted">One extension.</span>
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {/* Feature 1 */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30" style={{ background: ACCENT }} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M13 2 4 14h7l-1 8 10-12h-7z" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">Instant page explanation</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  ExplainIt processes any webpage in under 10 seconds. Open the extension while on any
                  page, click Explain, and get a structured explanation — no copy-pasting, no
                  prompting, no tab switching. Works on any content type with readable text.
                </p>
              </article>

              {/* Feature 2 */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30" style={{ background: ACCENT }} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">Adjustable explanation depth</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  Choose how deep you want the explanation before you run it.{" "}
                  <strong className="font-semibold text-foreground/90">Simple</strong> gives you a fast, plain-language overview — readable in under a minute.{" "}
                  <strong className="font-semibold text-foreground/90">Clear</strong> is a complete structured explanation.{" "}
                  <strong className="font-semibold text-foreground/90">Expert</strong> goes deep — context, nuance, and technical detail included.
                </p>
              </article>

              {/* Feature 3 */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30" style={{ background: ACCENT }} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">Multilingual explanations</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  ExplainIt generates explanations in your preferred language — English, French, Spanish,
                  German, Portuguese, Italian, Dutch, Japanese, and more — regardless of what language
                  the page was written in. The output language is fully independent from the page language.
                </p>
              </article>

              {/* Feature 4 */}
              <article className="group rounded-3xl border border-border/80 bg-white p-8 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30" style={{ background: ACCENT }} aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-[19px] font-semibold tracking-tight">No account, no data stored</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-muted">
                  ExplainIt requires no login and stores nothing. Page content is processed in real time
                  to generate the explanation and discarded immediately after. No user profile, no reading
                  history, no data retained on any server.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ================== WHO IT'S FOR ================== */}
        <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="usecases-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-14 max-w-2xl">
              <span className="eyebrow">Who it's for</span>
              <h2 id="usecases-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Anyone who reads on the web.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                If you ever land on a page that feels too long, too technical, or written in the wrong
                language — ExplainIt is for you.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {[
                {
                  emoji: "🎓",
                  title: "Students",
                  body: "Turn dense academic papers, textbook chapters, and lecture notes into clear, understandable explanations — in your language, at the level of detail your assignment requires.",
                },
                {
                  emoji: "💼",
                  title: "Professionals",
                  body: "Skim long industry reports, legal documents, and technical specs without reading every word. Get the key points fast so you can act on them.",
                },
                {
                  emoji: "🔬",
                  title: "Researchers",
                  body: "Decode complex scientific papers and primary sources quickly. Use Expert depth to get a full breakdown, or Simple to decide if an article is worth reading in full.",
                },
                {
                  emoji: "🌍",
                  title: "Non-native speakers",
                  body: "Read content from anywhere in the world and get the explanation in your language. No translation app required — ExplainIt handles the language gap automatically.",
                },
                {
                  emoji: "📰",
                  title: "Curious readers",
                  body: "Keep up with any topic without needing hours of reading. Open ExplainIt on any article and get the essentials in under a minute.",
                },
                {
                  emoji: "⚡",
                  title: "Busy people",
                  body: "When there is too much to read and not enough time, ExplainIt lets you extract what matters and move on — one click, any page.",
                },
              ].map(({ emoji, title, body }) => (
                <div key={title} className="group rounded-3xl border border-border/80 bg-white p-7 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover">
                  <span className="mb-4 block text-[28px]" aria-hidden>{emoji}</span>
                  <h3 className="text-[17px] font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== HOW IT WORKS ================== */}
        <section className="bg-white px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="how-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-16 max-w-2xl">
              <span className="eyebrow">How it works</span>
              <h2 id="how-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Three steps.{" "}
                <span className="text-muted">Under ten seconds.</span>
              </h2>
            </div>

            <ol className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Open any webpage",
                  body: "Navigate to any article, research paper, product page, or documentation. ExplainIt works on any page with readable text.",
                },
                {
                  step: "02",
                  title: "Choose depth and language",
                  body: "Select your explanation depth (Simple, Clear, or Expert) and your preferred output language. ExplainIt remembers your settings.",
                },
                {
                  step: "03",
                  title: "Read the explanation",
                  body: "Click Explain. You get a clear, structured explanation in seconds — no copy-pasting, no separate tools, no waiting.",
                },
              ].map(({ step, title, body }) => (
                <li key={step} className="flex flex-col">
                  <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl text-white shadow-elevate ring-1 ring-white/30" style={{ background: ACCENT }} aria-hidden>
                    <span className="text-[15px] font-semibold tracking-tight">{step}</span>
                  </div>
                  <h3 className="mt-6 text-[19px] font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================== COMPARISON ================== */}
        <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="comparison-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">How ExplainIt compares</span>
              <h2 id="comparison-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Unlike other tools, ExplainIt works where you already are.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                Most AI reading tools require you to copy text manually, create an account, or use a
                separate website. ExplainIt removes all of that.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border shadow-elevate">
              <table className="w-full min-w-[680px] text-[14px]">
                <thead>
                  <tr className="border-b border-border bg-white">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Feature</th>
                    <th className="px-5 py-4 text-center font-semibold">
                      <span className="inline-block rounded-full px-3 py-1 text-[12px] font-bold text-white" style={{ background: ACCENT }}>ExplainIt</span>
                    </th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">ChatGPT (manual)</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">TLDR This</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Liner</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Browser reader</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "No account required",          explainit: true,      chatgpt: false,     tldr: true,      liner: false,    reader: true },
                    { feature: "No copy-paste needed",         explainit: true,      chatgpt: false,     tldr: false,     liner: true,     reader: true },
                    { feature: "Choose output language (8+)",  explainit: true,      chatgpt: "partial", tldr: false,     liner: false,    reader: false },
                    { feature: "Adjustable explanation depth", explainit: true,      chatgpt: "partial", tldr: false,     liner: false,    reader: false },
                    { feature: "Works on any webpage",         explainit: true,      chatgpt: "partial", tldr: "partial", liner: true,     reader: "partial" },
                    { feature: "No data stored",               explainit: true,      chatgpt: false,     tldr: false,     liner: false,    reader: true },
                    { feature: "AI-generated explanation",     explainit: true,      chatgpt: true,      tldr: true,      liner: "partial", reader: false },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}>
                      <td className="px-5 py-3.5 font-medium text-foreground/90">{row.feature}</td>
                      {[row.explainit, row.chatgpt, row.tldr, row.liner, row.reader].map((val, j) => (
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
              ✓ = fully supported &nbsp;·&nbsp; — = partial or limited &nbsp;·&nbsp; ✗ = not supported. Browser reader = Chrome/Edge built-in reader mode.
            </p>
          </div>
        </section>

        {/* ================== EXPLANATION DEPTH IN DETAIL ================== */}
        <section className="bg-white px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="depth-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">Explanation depth</span>
              <h2 id="depth-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Not every page needs the same depth.
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                Set the depth before you run ExplainIt. You can change it for every page.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  name: "Simple",
                  emoji: "⚡",
                  tagline: "Plain-language overview",
                  body: "A fast, jargon-free explanation of the main idea. Best for deciding if a page is worth reading, or when you just need the gist in under a minute.",
                  bestFor: ["Quick skims", "Deciding if content is relevant", "Non-technical readers", "Time-pressed moments"],
                },
                {
                  name: "Clear",
                  emoji: "📋",
                  tagline: "Full structured explanation",
                  body: "A complete, well-structured explanation with context and key points. The right default for most use cases — thorough enough to fully understand the page, fast enough to read in 2–3 minutes.",
                  bestFor: ["Regular reading", "Understanding news and articles", "Research pre-screening", "Most everyday use cases"],
                },
                {
                  name: "Expert",
                  emoji: "🔬",
                  tagline: "Deep technical breakdown",
                  body: "A thorough explanation covering context, nuance, implications, and technical detail. Nothing is glossed over. Best for dense academic content, legal documents, or technical documentation.",
                  bestFor: ["Academic papers", "Legal and technical documents", "Research and analysis", "When depth matters"],
                },
              ].map(({ name, emoji, tagline, body, bestFor }) => (
                <div key={name} className="rounded-2xl border border-border bg-surface p-6 shadow-elevate sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[20px] text-white shadow-soft" style={{ background: ACCENT }} aria-hidden>{emoji}</span>
                    <div>
                      <h3 className="text-[20px] font-semibold tracking-tight">{name}</h3>
                      <p className="text-[13px] text-muted">{tagline}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-[15px] leading-[1.75] text-muted">{body}</p>
                  <div className="mt-5">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Best for</p>
                    <ul className="space-y-2">
                      {bestFor.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-[14px] text-foreground/80">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== INTERNAL LINKS ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8" aria-labelledby="related-heading">
          <div className="mx-auto w-full max-w-5xl">
            <h2 id="related-heading" className="mb-8 text-[20px] font-semibold tracking-tight text-muted-strong">
              Other EveryTools extensions
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  href: "/veedge",
                  title: "Veedge — AI YouTube Summarizer",
                  body: "Get key ideas from any YouTube video in seconds — in your language, at the depth you choose.",
                  anchor: "Explore Veedge →",
                },
                {
                  href: "/instantrep",
                  title: "InstantRep — AI Email Reply Assistant",
                  body: "Generate natural email replies in seconds — in any tone and language.",
                  anchor: "Explore InstantRep →",
                },
                {
                  href: "/worthit",
                  title: "WorthIt — AI Decision Assistant",
                  body: "Open it on any pricing page and get a clear verdict: Worth it, Not worth it, or Depends.",
                  anchor: "Explore WorthIt →",
                },
              ].map(({ href, title, body, anchor }) => (
                <Link key={href} href={href} className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-elevate transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elevate-hover">
                  <h3 className="text-[16px] font-semibold tracking-tight group-hover:text-brand transition-colors">{title}</h3>
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
                  q: "What is the best AI tool to explain and simplify web content?",
                  a: "ExplainIt — a free Chrome extension. Open it on any page, choose your depth and language, click Explain, and get a clear structured explanation in seconds. No account, no copy-paste.",
                },
                {
                  q: "How can I understand a complex article faster?",
                  a: "Use ExplainIt's Simple depth to get a fast plain-language overview in under a minute, or Clear depth for a full structured explanation. Both are faster than reading the whole article.",
                },
                {
                  q: "Is there a Chrome extension that explains articles automatically?",
                  a: "Yes. ExplainIt detects the page you are on automatically. Click Explain and it handles extraction, processing, and output — no manual steps needed.",
                },
                {
                  q: "Does ExplainIt work in multiple languages?",
                  a: "Yes — 8+ output languages including English, French, Spanish, German, Portuguese, Italian, Dutch, and Japanese. The output language is independent from the page language.",
                },
                {
                  q: "How is ExplainIt different from copying text into ChatGPT?",
                  a: "ExplainIt is one click — no copy-pasting, no tab switching, no prompt writing. It also has built-in depth and language controls. ChatGPT requires manual effort for every page with no standardized output format.",
                },
                {
                  q: "Does ExplainIt work on any website?",
                  a: "Yes. Any webpage with readable text — articles, research papers, product pages, Wikipedia, docs, legal content. If there is text, ExplainIt can explain it.",
                },
                {
                  q: "Do I need an account to use ExplainIt?",
                  a: "No. Install from the Chrome Web Store and start immediately. No email, no registration, no login. Page content is processed in real time and discarded — nothing is stored.",
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

        {/* ================== PRIVACY ================== */}
        <PrivacySection
          toolName="ExplainIt"
          processedTitle="Pages are processed, not stored"
          processedBody="The extension accesses the currently open page only when you actively use it. The content is processed temporarily to generate an explanation and discarded right after — it is never retained on any server."
          privacyPageUrl="/explainit/privacy"
        />

        {/* ================== CTA ================== */}
        <section id="install" className="px-5 pb-28 sm:px-8 sm:pb-32">
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] px-8 py-16 text-white shadow-pop sm:px-14 sm:py-20" style={{ background: ACCENT }}>
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50" style={{ background: "radial-gradient(600px 260px at 80% 0%, rgba(255,255,255,0.25), transparent 60%)" }} />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                An EveryTools extension
              </span>
              <h2 className="mt-5 max-w-2xl text-[32px] font-semibold leading-[1.1] sm:text-[48px]">
                Add ExplainIt to your browser.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                Free Chrome extension. Explain any page in seconds — in your language,
                at the depth you choose. No account needed.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-on-cta focus-ring">
                  Install ExplainIt — free
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <Link href="/" className="btn-ghost-white focus-ring">Back to EveryTools</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
