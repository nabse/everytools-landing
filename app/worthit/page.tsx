import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PrivacySection from "../components/PrivacySection";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/worthit-%E2%80%94-ai-decision-ass/mfdhjpglphhbeplnljlhimcgppjbbdng";
const ACCENT = "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)";

export const metadata: Metadata = {
  title: 'AI "Worth It?" Decision Assistant for Pricing Pages | WorthIt',
  description:
    "WorthIt is a Chrome extension that analyzes any pricing page, product, subscription, or course and gives an instant AI verdict: Worth it, Not worth it, or Depends — based on your needs.",
  keywords: [
    "is this worth it tool",
    "pricing page analysis tool",
    "AI decision assistant",
    "SaaS pricing decision tool",
    "worth it AI tool",
    "pricing verdict tool",
    "should I buy this AI",
    "WorthIt extension",
    "AI buying decision tool",
  ],
  openGraph: {
    title: 'WorthIt — AI "Worth It?" Decision Assistant for Pricing Pages',
    description:
      "Instant AI verdict on any pricing page. Worth it, Not worth it, or Depends — based on what you actually need.",
    url: "/worthit",
  },
  alternates: {
    canonical: "https://everytools.ai/worthit",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WorthIt — AI Decision Assistant",
  applicationCategory: "BrowserApplication",
  operatingSystem: "Chrome",
  description:
    "WorthIt is a Chrome extension that analyzes any pricing page, product listing, subscription, or course and delivers an instant AI verdict — Worth it, Not worth it, or Depends — with pros, cons, hidden cost warnings, and smart alternatives.",
  url: "https://everytools.ai/worthit",
  downloadUrl: INSTALL_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Instant verdict: Worth it / Not worth it / Depends",
    "Personalized analysis based on your stated needs",
    "Pros and cons extracted from the pricing page",
    "Hidden cost and risk detection",
    "Smart alternative suggestions",
    "8+ output languages",
    "Adjustable analysis depth",
  ],
};

// ---- Shared sub-components ----

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
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
function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M5 12h14" />
    </svg>
  );
}

// ---- Verdict card example ----
function VerdictCardExample() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-8 opacity-[0.13] blur-3xl"
        style={{ background: ACCENT }}
      />
      <div className="relative rounded-[22px] border border-border-strong/70 bg-white p-6 shadow-pop sm:p-8">
        {/* Card header */}
        <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-5">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
              style={{ background: ACCENT }}
              aria-hidden
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.7 7.7a1 1 0 0 0-1.4-1.4L10 13.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-[13.5px] font-semibold tracking-tight">WorthIt · Analysis</span>
          </div>
          <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-strong">
            Example output
          </span>
        </div>

        {/* Page analyzed */}
        <p className="text-[12px] font-medium text-muted">Analyzed: Linear — Pro Plan ($8/month)</p>

        {/* Verdict */}
        <div className="mt-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-[15px] font-bold text-emerald-800">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
              <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.7 7.7a1 1 0 0 0-1.4-1.4L10 13.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6z" clipRule="evenodd" />
            </svg>
            Worth it
          </span>
          <span className="text-[13px] text-muted">for a solo developer shipping regularly</span>
        </div>

        {/* Summary */}
        <p className="mt-4 text-[14.5px] leading-[1.7] text-foreground/85">
          Linear Pro removes the member cap and adds Git integrations, making it a clear
          upgrade for active solo devs. At $8/month, it costs less than a coffee per week
          and replaces multiple manual tools.
        </p>

        {/* Pros / Cons */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-700">Pros</p>
            <ul className="space-y-1.5">
              {["Unlimited members", "Git sync included", "Priority support"].map((p) => (
                <li key={p} className="flex items-start gap-2 text-[13px] text-foreground/80">
                  <span className="mt-0.5 text-emerald-600 shrink-0"><CheckIcon /></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-red-600">Cons</p>
            <ul className="space-y-1.5">
              {["No offline mode", "Overkill for hobby projects"].map((c) => (
                <li key={c} className="flex items-start gap-2 text-[13px] text-foreground/80">
                  <span className="mt-0.5 text-red-500 shrink-0"><CrossIcon /></span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hidden cost warning */}
        <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mt-0.5 shrink-0 text-amber-600" aria-hidden>
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p className="text-[13px] leading-relaxed text-amber-800">
            <strong className="font-semibold">Watch out:</strong> Annual billing required for this price — monthly is $10/seat.
          </p>
        </div>

        {/* Alternative */}
        <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-border bg-surface px-4 py-3">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mt-0.5 shrink-0 text-brand" aria-hidden>
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
          </svg>
          <p className="text-[13px] leading-relaxed text-muted-strong">
            <strong className="font-semibold text-foreground">If budget is tight:</strong> Linear Free covers solo projects with no time limit — try it first.
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- Page ----

export default function WorthItPage() {
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
                <div
                  className="inline-flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-elevate ring-1 ring-white/30"
                  style={{ background: ACCENT }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden>
                    <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.7 7.7a1 1 0 0 0-1.4-1.4L10 13.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  Chrome extension
                </span>
              </div>

              {/* H1 */}
              <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.02] sm:text-[68px]">
                AI &ldquo;Worth It?&rdquo; Decision Assistant
                <span className="block text-gradient">for Pricing Pages.</span>
              </h1>

              {/* GEO-optimized intro */}
              <p className="max-w-2xl text-[18px] leading-[1.6] text-foreground sm:text-[20px]">
                WorthIt tells you whether a product, subscription, or pricing page is worth it — instantly.
              </p>
              <p className="max-w-2xl text-[16px] leading-[1.75] text-muted">
                Open WorthIt on any pricing page, product listing, SaaS plan, course, or subscription.
                It reads the page, factors in your needs, and delivers a direct AI verdict:
                <strong className="font-semibold text-foreground"> Worth it</strong>,
                <strong className="font-semibold text-foreground"> Not worth it</strong>, or
                <strong className="font-semibold text-foreground"> Depends</strong> — with
                pros, cons, hidden cost warnings, and smart alternatives. No tab switching.
                No manual research.
              </p>

              {/* Verdict pills */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-4 py-2 text-[13px] font-semibold text-emerald-800">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden><path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.7 7.7a1 1 0 0 0-1.4-1.4L10 13.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6z" clipRule="evenodd" /></svg>
                  Worth it
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-4 py-2 text-[13px] font-semibold text-red-800">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden><path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm-1-5h2v6h-2zm0 8h2v2h-2z" clipRule="evenodd" /></svg>
                  Not worth it
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-4 py-2 text-[13px] font-semibold text-amber-800">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
                  Depends
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-primary focus-ring">
                  Install WorthIt — free
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

        {/* ================== WHAT IT DOES ================== */}
        <section className="border-y border-border/60 bg-white" aria-label="How WorthIt works">
          <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="eyebrow">What WorthIt does</span>
                <h2 className="mt-5 text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
                  A verdict in seconds.{" "}
                  <span className="text-muted">Not a list of features.</span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-muted">
                  Most tools give you more information — feature tables, comparison pages, review
                  aggregators. WorthIt gives you a decision. It reads the page you&apos;re already
                  on, understands what you need, and tells you directly: is this worth paying for?
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    { label: "Open on any pricing page", sub: "SaaS plans, product listings, courses, subscriptions — any page with a price." },
                    { label: "State what you need (optional)", sub: "Add context — your role, use case, budget — and WorthIt personalizes the verdict." },
                    { label: "Get a direct verdict", sub: "Worth it, Not worth it, or Depends — with the reasoning behind it." },
                  ].map(({ label, sub }, i) => (
                    <li key={label} className="flex gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[12px] font-bold text-white"
                        style={{ background: ACCENT }}
                        aria-hidden
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[15px] font-semibold tracking-tight">{label}</p>
                        <p className="mt-0.5 text-[14px] text-muted">{sub}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <VerdictCardExample />
            </div>
          </div>
        </section>

        {/* ================== FEATURES ================== */}
        <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="features-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-14 max-w-2xl">
              <span className="eyebrow">What you get</span>
              <h2 id="features-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                Every verdict includes. <span className="text-muted">By default.</span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {[
                {
                  title: "Instant verdict",
                  body: "Worth it, Not worth it, or Depends — delivered in seconds. Not a score, not a rating scale. A direct answer to: should I pay for this?",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                      <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.7 7.7a1 1 0 0 0-1.4-1.4L10 13.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6z" clipRule="evenodd" />
                    </svg>
                  ),
                  href: "/worthit/is-this-worth-it-tool",
                  anchor: "Learn how the verdict works",
                },
                {
                  title: "Personalized to your needs",
                  body: "The verdict adapts to your context. A solo founder and an enterprise team get different analyses of the same pricing page — because the right answer is different.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                  ),
                  href: "/worthit/pricing-verdict-tool",
                  anchor: "See the full pricing analysis",
                },
                {
                  title: "Pros and cons extracted",
                  body: "WorthIt reads the pricing page and extracts what's genuinely useful vs. what's missing — without you having to compare feature tables manually.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  ),
                  href: null,
                  anchor: null,
                },
                {
                  title: "Hidden costs and risks flagged",
                  body: "Annual billing traps, per-seat scaling costs, feature gates, overage fees — WorthIt surfaces what's buried in the pricing page before you commit.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  ),
                  href: "/worthit/saas-worth-it-decision",
                  anchor: "See SaaS pricing analysis",
                },
                {
                  title: "Smart alternative suggestions",
                  body: "When something doesn't make the cut, WorthIt suggests alternatives worth considering — based on the category and your stated needs.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                      <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
                      <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                    </svg>
                  ),
                  href: null,
                  anchor: null,
                },
                {
                  title: "Multilingual output",
                  body: "WorthIt delivers verdicts in your preferred language — English, French, Spanish, German, Arabic, and more — regardless of the page's original language.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden>
                      <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                  href: null,
                  anchor: null,
                },
              ].map(({ title, body, icon, href, anchor }) => (
                <article
                  key={title}
                  className="group flex flex-col rounded-3xl border border-border/80 bg-white p-7 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover"
                >
                  <div
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft ring-1 ring-white/30"
                    style={{ background: ACCENT }}
                    aria-hidden
                  >
                    {icon}
                  </div>
                  <h3 className="text-[18px] font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-muted">{body}</p>
                  {href && anchor && (
                    <Link
                      href={href}
                      className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-brand transition hover:text-brand-strong"
                    >
                      {anchor}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================== WHAT WORTHIT IS NOT ================== */}
        <section className="bg-white px-5 py-20 sm:px-8" aria-labelledby="positioning-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-200/70 bg-red-50/50 p-7">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-red-700">WorthIt is NOT</p>
                <ul className="space-y-3">
                  {[
                    "A pricing comparison directory",
                    "A review aggregator (like G2 or Capterra)",
                    "A feature table generator",
                    "A generic AI chatbot you need to prompt",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-foreground/80">
                      <span className="mt-0.5 shrink-0 text-red-500"><CrossIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/50 p-7">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-700">WorthIt IS</p>
                <ul className="space-y-3">
                  {[
                    "An AI decision assistant — it gives you an answer",
                    "Context-aware — it reads the actual page you're on",
                    "Personalized — the verdict adapts to your needs",
                    "Direct — Worth it, Not worth it, or Depends",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[14.5px] text-foreground/80">
                      <span className="mt-0.5 shrink-0 text-emerald-600"><CheckIcon /></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================== COMPARISON ================== */}
        <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="comparison-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="mb-12 max-w-2xl">
              <span className="eyebrow">How WorthIt compares</span>
              <h2 id="comparison-heading" className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
                WorthIt vs. how people research buying decisions today
              </h2>
              <p className="mt-4 text-[16px] leading-[1.7] text-muted">
                Most research methods give you more data to process. WorthIt gives you a decision.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border shadow-elevate">
              <table className="w-full min-w-[640px] text-[14.5px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Method</th>
                    <th className="px-5 py-4 text-center font-semibold">
                      <span className="inline-block rounded-full px-3 py-1 text-[12px] font-bold text-white" style={{ background: ACCENT }}>
                        WorthIt
                      </span>
                    </th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">G2 / Reviews</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Reddit research</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">ChatGPT (manual)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Reads the page you're on",
                      wi: true, g2: false, reddit: false, gpt: false,
                    },
                    {
                      feature: "Gives a direct verdict",
                      wi: true, g2: false, reddit: false, gpt: "partial",
                    },
                    {
                      feature: "Personalized to your needs",
                      wi: true, g2: false, reddit: false, gpt: "partial",
                    },
                    {
                      feature: "Flags hidden costs",
                      wi: true, g2: false, reddit: "partial", gpt: "partial",
                    },
                    {
                      feature: "Suggests alternatives",
                      wi: true, g2: false, reddit: "partial", gpt: "partial",
                    },
                    {
                      feature: "Works in your browser instantly",
                      wi: true, g2: false, reddit: false, gpt: false,
                    },
                    {
                      feature: "No manual research required",
                      wi: true, g2: false, reddit: false, gpt: false,
                    },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-surface/50"}>
                      <td className="px-5 py-3.5 font-medium text-foreground/90">{row.feature}</td>
                      {[row.wi, row.g2, row.reddit, row.gpt].map((val, j) => (
                        <td key={j} className="px-5 py-3.5 text-center">
                          {val === true ? (
                            <span className="inline-flex items-center justify-center text-emerald-600"><CheckIcon /></span>
                          ) : val === false ? (
                            <span className="inline-flex items-center justify-center text-muted/50"><CrossIcon /></span>
                          ) : (
                            <span className="inline-flex items-center justify-center text-amber-500"><MinusIcon /></span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[12.5px] text-muted">
              ✓ = fully supported &nbsp;·&nbsp; — = partial &nbsp;·&nbsp; ✗ = not supported
            </p>
          </div>
        </section>

        {/* ================== GEO INTERNAL LINKS ================== */}
        <section className="bg-white px-5 py-20 sm:px-8" aria-labelledby="usecases-heading">
          <div className="mx-auto w-full max-w-5xl">
            <h2 id="usecases-heading" className="mb-8 text-[20px] font-semibold tracking-tight text-muted-strong">
              What are you trying to decide?
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  href: "/worthit/is-this-worth-it-tool",
                  title: "Is this worth it?",
                  body: "A general-purpose AI tool that answers the question you're already asking when you land on a pricing page.",
                  anchor: "AI tool that tells you if something is worth it →",
                },
                {
                  href: "/worthit/pricing-verdict-tool",
                  title: "Should I pay for this plan?",
                  body: "Instant AI analysis of any pricing page — pros, cons, risks, and a direct recommendation.",
                  anchor: "Pricing verdict tool →",
                },
                {
                  href: "/worthit/saas-worth-it-decision",
                  title: "Is this SaaS worth the price?",
                  body: "Evaluate SaaS subscriptions before you commit — based on your actual use case, not just the feature list.",
                  anchor: "SaaS decision assistant →",
                },
              ].map(({ href, title, body, anchor }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-elevate transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-elevate-hover"
                >
                  <h3 className="text-[16px] font-semibold tracking-tight group-hover:text-brand transition-colors">{title}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{body}</p>
                  <span className="mt-4 text-[13px] font-medium text-brand">{anchor}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================== PRIVACY ================== */}
        <PrivacySection
          toolName="WorthIt"
          processedTitle="Pages are analyzed, not stored"
          processedBody="When you run WorthIt, the visible content of the current page is sent to our secure backend for analysis. The result is returned to you immediately — nothing is retained on our servers after the response is delivered."
        />

        {/* ================== CTA ================== */}
        <section id="install" className="px-5 pb-28 sm:px-8 sm:pb-32">
          <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px] bg-cta-gradient px-8 py-16 text-white shadow-pop sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{ background: "radial-gradient(600px 260px at 80% 0%, rgba(255,255,255,0.25), transparent 60%)" }}
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                An EveryTools extension
              </span>
              <h2 className="mt-5 max-w-2xl text-[32px] font-semibold leading-[1.1] sm:text-[48px]">
                Stop guessing. Start deciding.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">
                Install WorthIt and get an instant AI verdict on any pricing page —
                Worth it, Not worth it, or Depends.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-on-cta focus-ring">
                  Install WorthIt — free
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
