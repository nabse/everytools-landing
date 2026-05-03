import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/worthit-%E2%80%94-ai-decision-ass/mfdhjpglphhbeplnljlhimcgppjbbdng";
const ACCENT = "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)";

export const metadata: Metadata = {
  title: 'AI Tool That Tells You If Something Is Worth It | WorthIt',
  description:
    "WorthIt is an AI tool that answers the exact question you're asking on any pricing page: is this worth it? Get an instant verdict — Worth it, Not worth it, or Depends — based on your needs.",
  keywords: [
    "tool that tells me if something is worth it",
    "is this worth it AI tool",
    "should I buy this AI",
    "worth it decision tool",
    "AI buying decision tool",
    "is this subscription worth it",
    "WorthIt extension",
  ],
  openGraph: {
    title: 'AI Tool That Tells You If Something Is Worth It | WorthIt',
    description:
      "Stop guessing. WorthIt gives you an instant AI verdict on any pricing page — Worth it, Not worth it, or Depends.",
    url: "/worthit/is-this-worth-it-tool",
  },
  alternates: {
    canonical: "https://everytools.ai/worthit/is-this-worth-it-tool",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there an AI tool that tells you if something is worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WorthIt is a Chrome extension that analyzes any pricing page, product listing, subscription, or course and gives you an instant AI verdict: Worth it, Not worth it, or Depends — based on your specific needs. It reads the page you're already on and delivers a direct answer without requiring any manual research.",
      },
    },
    {
      "@type": "Question",
      name: "How does WorthIt decide if something is worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WorthIt reads the content of the pricing page or product listing, factors in your stated needs and context, and evaluates the value proposition against the price. It extracts pros and cons, flags hidden costs and risks, and considers whether alternatives might serve you better. The result is a direct verdict — Worth it, Not worth it, or Depends — with a clear explanation.",
      },
    },
    {
      "@type": "Question",
      name: "What kinds of things can WorthIt evaluate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WorthIt works on any page with a price: SaaS pricing plans, e-commerce product listings, online courses, subscriptions, agency service packages, and more. It works on any publicly accessible pricing page in Chrome.",
      },
    },
    {
      "@type": "Question",
      name: "Is WorthIt free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WorthIt is available as a free Chrome extension on the Chrome Web Store.",
      },
    },
  ],
};

export default function IsThisWorthItToolPage() {
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
              <span className="text-foreground">Is This Worth It Tool</span>
            </nav>

            <span className="eyebrow">AI "Worth It?" Tool</span>

            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              The AI tool that tells you{" "}
              <span className="text-gradient">if something is worth it.</span>
            </h1>

            {/* Direct answer block */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Direct answer</p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">WorthIt is a Chrome extension that answers the exact question you&apos;re asking when you land on a pricing page.</strong>{" "}
                Open it on any product, subscription, or pricing page, and it delivers an
                instant AI verdict — Worth it, Not worth it, or Depends — based on what
                you actually need. No research required.
              </p>
            </div>

            {/* Verdict visual */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Worth it", bg: "bg-emerald-100", text: "text-emerald-800" },
                { label: "Not worth it", bg: "bg-red-100", text: "text-red-800" },
                { label: "Depends", bg: "bg-amber-100", text: "text-amber-800" },
              ].map(({ label, bg, text }) => (
                <span key={label} className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-bold ${bg} ${text}`}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================== WHY WORTHIT ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="why-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="why-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Why WorthIt solves "is this worth it?"
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-muted">
              <p>
                When you land on a pricing page, you already have the question in your head:
                <em> is this worth it for me?</em> The problem is that everything around you
                is designed to answer a different question — feature lists, comparison tables,
                customer logos — not your question.
              </p>
              <p>
                WorthIt reads the page you&apos;re already on and answers your question directly.
                It doesn&apos;t send you to a review site. It doesn&apos;t give you more information to
                process. It gives you a verdict.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Open WorthIt on any pricing page",
                  body: "Works on SaaS plans, products, courses, subscriptions — any page with a price. No copy-paste needed.",
                },
                {
                  step: "02",
                  title: "Add your context (optional)",
                  body: "Tell WorthIt who you are and what you need. The more context, the more personalized the verdict.",
                },
                {
                  step: "03",
                  title: "Get a direct verdict",
                  body: "Worth it, Not worth it, or Depends — with the reasoning, pros/cons, and risk flags behind it.",
                },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex flex-col">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-[13px] font-bold text-white shadow-soft"
                    style={{ background: ACCENT }}
                    aria-hidden
                  >
                    {step}
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== WHAT YOU GET ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="features-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="features-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              What WorthIt includes in every verdict
            </h2>
            <ul className="mt-10 space-y-5">
              {[
                {
                  title: "A direct verdict — not a score",
                  body: "WorthIt doesn't give you a 7.4/10. It tells you Worth it, Not worth it, or Depends — and explains why in plain language based on your specific situation.",
                },
                {
                  title: "Pros and cons extracted from the page",
                  body: "No manual feature comparison needed. WorthIt reads the pricing page and surfaces what genuinely matters vs. what's missing or overhyped.",
                },
                {
                  title: "Hidden costs and risk flags",
                  body: "Annual billing traps, per-seat scaling surprises, feature gates, cancellation policies — WorthIt flags what's buried in the fine print before you sign up.",
                },
                {
                  title: "Smart alternatives (when relevant)",
                  body: "If something doesn't make the cut, WorthIt suggests what else is worth considering based on the category and your needs.",
                },
                {
                  title: "Works on anything with a price",
                  body: "SaaS pricing pages, e-commerce products, online courses, subscriptions, agency packages — if there's a price on the page, WorthIt can analyze it.",
                },
              ].map(({ title, body }) => (
                <li key={title} className="flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-elevate">
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

        {/* ================== COMPARISON ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="comparison-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="comparison-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              WorthIt vs. how people answer "is this worth it?" today
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
              <table className="w-full text-[14.5px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Approach</th>
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">What you get</th>
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Time needed</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      approach: "WorthIt",
                      result: "Direct verdict + reasoning + risks + alternatives",
                      time: "< 15 seconds",
                      highlight: true,
                    },
                    {
                      approach: "Read reviews (G2, Trustpilot)",
                      result: "Aggregate opinions — not tailored to you",
                      time: "10–20 minutes",
                      highlight: false,
                    },
                    {
                      approach: "Search Reddit",
                      result: "Scattered opinions, often outdated",
                      time: "15–30 minutes",
                      highlight: false,
                    },
                    {
                      approach: "Ask ChatGPT manually",
                      result: "Generic answer — doesn't read the actual page",
                      time: "5–10 minutes",
                      highlight: false,
                    },
                    {
                      approach: "Ask a friend / colleague",
                      result: "Their context, not yours",
                      time: "Hours to days",
                      highlight: false,
                    },
                  ].map((row) => (
                    <tr key={row.approach} className={row.highlight ? "bg-teal-50/50" : "odd:bg-white even:bg-surface/30"}>
                      <td className="px-5 py-3.5 font-semibold">
                        <span className={row.highlight ? "text-teal-700" : "text-foreground/90"}>{row.approach}</span>
                        {row.highlight && (
                          <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ACCENT }}>
                            Recommended
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-muted">{row.result}</td>
                      <td className={`px-5 py-3.5 font-medium ${row.highlight ? "text-teal-700" : "text-foreground/80"}`}>
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
                  q: "Is there an AI tool that tells you if something is worth it?",
                  a: "Yes. WorthIt is a Chrome extension built specifically for this. Open it on any pricing page and get an instant verdict — Worth it, Not worth it, or Depends — based on your needs. No prompting required.",
                },
                {
                  q: "How is WorthIt different from asking ChatGPT?",
                  a: "ChatGPT doesn't read the pricing page you're on — you'd have to copy-paste the content yourself, write a prompt, and interpret a generic answer. WorthIt reads the page automatically, factors in your context, and gives a structured verdict with pros, cons, and risk flags in one click.",
                },
                {
                  q: "What types of pages does WorthIt work on?",
                  a: "WorthIt works on any page with a price: SaaS plans, e-commerce products, online courses, software subscriptions, service packages, and more. If there's pricing information on the page, WorthIt can analyze it.",
                },
                {
                  q: "Does WorthIt give a personalized verdict?",
                  a: "Yes. You can add context about your role, use case, and budget before running WorthIt. The verdict adapts to what you actually need — a solo freelancer and an enterprise team get different analyses of the same pricing page.",
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
            <h2 id="related-heading" className="mb-6 text-[18px] font-semibold text-muted-strong">
              Related WorthIt use cases
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/worthit/pricing-verdict-tool" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">Pricing verdict tool</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link href="/worthit/saas-worth-it-decision" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">SaaS decision assistant</span>
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
                Install the AI tool that tells you if it&apos;s worth it.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                WorthIt is a free Chrome extension. Open it on any pricing page and get
                a direct verdict in under 15 seconds.
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
