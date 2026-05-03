import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/worthit-%E2%80%94-ai-decision-ass/mfdhjpglphhbeplnljlhimcgppjbbdng";
const ACCENT = "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)";

export const metadata: Metadata = {
  title: "SaaS Pricing Decision Tool — AI-Powered Verdict in Seconds | WorthIt",
  description:
    "WorthIt evaluates any SaaS pricing page and tells you whether it's worth paying for — based on your actual use case. Instant verdict, hidden cost flags, and smart alternatives.",
  keywords: [
    "SaaS pricing decision tool",
    "SaaS worth it tool",
    "SaaS pricing analysis",
    "is this SaaS worth it",
    "SaaS buying decision AI",
    "SaaS pricing verdict",
    "evaluate SaaS pricing",
  ],
  openGraph: {
    title: "SaaS Pricing Decision Tool — AI-Powered Verdict in Seconds | WorthIt",
    description:
      "Open WorthIt on any SaaS pricing page. Get an instant verdict — Worth it, Not worth it, or Depends — tailored to your use case.",
    url: "/worthit/saas-worth-it-decision",
  },
  alternates: {
    canonical: "https://everytools.ai/worthit/saas-worth-it-decision",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a tool to help decide if a SaaS product is worth paying for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WorthIt is a Chrome extension that analyzes any SaaS pricing page and gives an instant AI verdict — Worth it, Not worth it, or Depends — based on your specific use case and needs. It flags hidden costs like annual-only billing, per-seat minimums, and feature gates, and suggests alternatives when the product doesn't make the cut.",
      },
    },
    {
      "@type": "Question",
      name: "How does WorthIt evaluate a SaaS pricing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WorthIt reads the SaaS pricing page you're on, extracts the core value proposition, pricing structure, included features, and hidden billing conditions. It then weighs these against your stated needs — role, use case, team size, budget — and delivers a direct verdict with pros, cons, risk flags, and alternative suggestions.",
      },
    },
    {
      "@type": "Question",
      name: "What SaaS pricing traps does WorthIt detect?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WorthIt flags common SaaS pricing traps including: annual-only pricing presented as a monthly price, per-seat costs that scale aggressively, key features locked to higher tiers, usage caps that trigger overages, and cancellation or data export restrictions.",
      },
    },
    {
      "@type": "Question",
      name: "Can WorthIt compare SaaS alternatives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. When a SaaS product doesn't make the cut for your needs, WorthIt suggests alternatives worth considering based on the product category and your stated requirements.",
      },
    },
  ],
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function SaasWorthItDecisionPage() {
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
          <div className="relative mx-auto w-full max-w-4xl px-5 py-20 sm:px-8 sm:py-28">

            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-muted">
              <Link href="/" className="transition hover:text-foreground">EveryTools</Link>
              <span aria-hidden>/</span>
              <Link href="/worthit" className="transition hover:text-foreground">WorthIt</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">SaaS Worth It Decision</span>
            </nav>

            <span className="eyebrow">SaaS Pricing Decision Tool</span>

            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              SaaS pricing decision tool —{" "}
              <span className="text-gradient">AI verdict in seconds.</span>
            </h1>

            {/* Direct answer */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Direct answer</p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">WorthIt is a Chrome extension that evaluates any SaaS pricing page and tells you whether it&apos;s worth paying for — based on your actual use case.</strong>{" "}
                It flags hidden costs, extracts pros and cons, suggests alternatives, and
                delivers a direct verdict — Worth it, Not worth it, or Depends — in under
                15 seconds.
              </p>
            </div>
          </div>
        </section>

        {/* ================== WHY SAAS DECISIONS ARE HARD ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="problem-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="problem-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Why SaaS pricing decisions are hard to make quickly
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-muted">
              <p>
                SaaS pricing pages are structured to obscure the real cost. The monthly price
                is shown prominently — but it's billed annually. The plan you want requires
                a tier above the one you're looking at. The feature you need is an add-on.
                Usage limits aren't mentioned until you hit them.
              </p>
              <p>
                WorthIt reads through all of that. It identifies what the product actually
                costs for your situation, flags what's missing, and tells you directly
                whether it's worth subscribing.
              </p>
            </div>

            {/* SaaS pricing traps */}
            <div className="mt-12">
              <h3 className="mb-6 text-[18px] font-semibold tracking-tight">
                Common SaaS pricing traps WorthIt detects
              </h3>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    trap: "Annual-only monthly pricing",
                    detail: 'The "$8/month" price requires annual commitment — actual monthly billing is $14.',
                  },
                  {
                    trap: "Per-seat cost scaling",
                    detail: "The plan looks cheap for one user but triples in cost as your team grows.",
                  },
                  {
                    trap: "Key features locked to higher tiers",
                    detail: "The feature you actually need — SSO, API access, analytics — is on the Enterprise plan.",
                  },
                  {
                    trap: "Usage caps with overage fees",
                    detail: "The plan includes 10,000 requests. After that, it's $0.02 per request — at scale, that adds up fast.",
                  },
                  {
                    trap: "No free tier after trial",
                    detail: "14-day trial with no free plan — you're billed from day 15 unless you cancel.",
                  },
                  {
                    trap: "Data export restrictions",
                    detail: "Switching tools later requires a paid plan to export your data.",
                  },
                ].map(({ trap, detail }) => (
                  <li key={trap} className="flex gap-3 rounded-xl border border-amber-200/60 bg-amber-50/50 p-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden>
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    <div>
                      <p className="text-[14.5px] font-semibold tracking-tight text-amber-900">{trap}</p>
                      <p className="mt-1 text-[13.5px] text-amber-800/80">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================== WHO IT'S FOR ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="audience-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="audience-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Who uses WorthIt for SaaS decisions
            </h2>
            <p className="mt-4 text-[16px] leading-[1.7] text-muted">
              WorthIt adapts its verdict to your context. The same pricing page gets
              a different verdict for different users — because the right answer is different.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  audience: "Solo founders and freelancers",
                  context: "You need to know if a tool justifies the cost when every subscription adds up. WorthIt tells you if a SaaS is worth it for a one-person operation — and suggests free or cheaper alternatives when it isn't.",
                },
                {
                  audience: "Startup teams",
                  context: "You're evaluating tools fast, often on a limited budget. WorthIt surfaces per-seat costs, team size limits, and whether the plan you're looking at actually covers your team.",
                },
                {
                  audience: "Product and engineering managers",
                  context: "You're comparing multiple SaaS options and need to cut through feature marketing. WorthIt extracts what each plan actually includes and flags the gaps.",
                },
                {
                  audience: "Finance and ops teams",
                  context: "You need to validate purchases before approving them. WorthIt identifies hidden costs, billing conditions, and annual commitment traps before anything is signed.",
                },
              ].map(({ audience, context }) => (
                <div key={audience} className="rounded-2xl border border-border bg-white p-6 shadow-elevate">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
                      style={{ background: ACCENT }}
                      aria-hidden
                    >
                      <CheckIcon />
                    </span>
                    <h3 className="text-[15px] font-semibold tracking-tight">{audience}</h3>
                  </div>
                  <p className="text-[14px] leading-relaxed text-muted">{context}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== FEATURES ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="features-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="features-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              What WorthIt gives you on a SaaS pricing page
            </h2>
            <ul className="mt-10 space-y-5">
              {[
                {
                  title: "Direct verdict — Worth it, Not worth it, or Depends",
                  body: "Not a feature score or a list of things to consider. A direct answer to: should I subscribe to this, given what I need?",
                },
                {
                  title: "Real cost breakdown",
                  body: "WorthIt shows you the actual cost for your situation — including annual billing, per-seat math, and add-ons — not the marketing price.",
                },
                {
                  title: "Feature gap analysis",
                  body: "It identifies which features are included in the plan you're viewing and which require a more expensive tier.",
                },
                {
                  title: "Risk and hidden cost flags",
                  body: "Cancellation policy, data portability, overage fees, usage caps — WorthIt surfaces what the pricing page doesn't make obvious.",
                },
                {
                  title: "Alternatives when it doesn't make the cut",
                  body: "If a SaaS isn't worth it for your needs, WorthIt suggests what else is worth evaluating — based on the category and your context.",
                },
              ].map(({ title, body }) => (
                <li key={title} className="flex gap-4 rounded-2xl border border-border bg-surface p-6 shadow-elevate">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ background: ACCENT }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3" aria-hidden>
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================== FAQ ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="faq-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="faq-heading" className="mb-10 text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {[
                {
                  q: "Is there a tool to help decide if a SaaS product is worth paying for?",
                  a: "Yes. WorthIt is a Chrome extension that analyzes any SaaS pricing page and gives a direct verdict — Worth it, Not worth it, or Depends — based on your use case. It flags hidden costs and suggests alternatives when relevant.",
                },
                {
                  q: "How does WorthIt evaluate a SaaS pricing page?",
                  a: "WorthIt reads the page content automatically, extracts pricing structure, included features, and billing conditions, then weighs them against your stated needs. You get a verdict with pros, cons, cost flags, and alternatives — all from one click.",
                },
                {
                  q: "What SaaS pricing traps does WorthIt detect?",
                  a: "WorthIt flags annual-only pricing shown as monthly, per-seat cost scaling, features locked to higher tiers, usage caps with overage fees, and cancellation or data export restrictions.",
                },
                {
                  q: "Does WorthIt work on all SaaS pricing pages?",
                  a: "WorthIt works on any publicly accessible SaaS pricing page in Chrome. It reads the page content directly — no copy-pasting required.",
                },
                {
                  q: "Can WorthIt help me compare two SaaS options?",
                  a: "WorthIt analyzes one page at a time — open it on each pricing page separately. It suggests alternatives when a product doesn't make the cut, giving you a starting point for comparison.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-2xl border border-border bg-white p-6 shadow-elevate">
                  <dt className="text-[16px] font-semibold tracking-tight">{q}</dt>
                  <dd className="mt-2 text-[14.5px] leading-relaxed text-muted">{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ================== INTERNAL LINKS ================== */}
        <section className="bg-white px-5 py-16 sm:px-8" aria-labelledby="related-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="related-heading" className="mb-6 text-[18px] font-semibold text-muted-strong">Related WorthIt use cases</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/worthit/is-this-worth-it-tool" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">AI tool that tells you if something is worth it</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link href="/worthit/pricing-verdict-tool" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">Pricing verdict tool</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link href="/worthit" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20 sm:col-span-2">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">View all WorthIt features — AI decision assistant</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ================== CTA ================== */}
        <section className="px-5 pb-28 sm:px-8 sm:pb-32">
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[28px] bg-cta-gradient px-8 py-16 text-white shadow-pop sm:px-14 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50" style={{ background: "radial-gradient(600px 260px at 80% 0%, rgba(255,255,255,0.25), transparent 60%)" }} />
            <div className="relative">
              <h2 className="max-w-xl text-[28px] font-semibold leading-[1.1] sm:text-[40px]">
                Stop guessing on SaaS pricing. Get a verdict.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                WorthIt is a free Chrome extension. Open it on any SaaS pricing page and
                get a direct AI decision in seconds — tailored to your use case.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-on-cta focus-ring">
                  Install WorthIt on Chrome — free
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
                <Link href="/worthit" className="btn-ghost-white focus-ring">View all WorthIt features</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
