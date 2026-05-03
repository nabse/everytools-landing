import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/worthit-%E2%80%94-ai-decision-ass/mfdhjpglphhbeplnljlhimcgppjbbdng";
const ACCENT = "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)";

export const metadata: Metadata = {
  title: "Pricing Page Analysis Tool With Instant AI Verdict | WorthIt",
  description:
    "WorthIt analyzes any pricing page and delivers an instant verdict: Worth it, Not worth it, or Depends. Pros, cons, hidden costs, and alternatives — all from the page you're already on.",
  keywords: [
    "pricing page analysis tool",
    "pricing verdict tool",
    "AI pricing analysis",
    "pricing page decision tool",
    "analyze pricing page",
    "pricing page verdict",
    "SaaS pricing analysis",
  ],
  openGraph: {
    title: "Pricing Page Analysis Tool With Instant AI Verdict | WorthIt",
    description:
      "Open WorthIt on any pricing page and get an instant verdict: Worth it, Not worth it, or Depends — with pros, cons, and hidden cost flags.",
    url: "/worthit/pricing-verdict-tool",
  },
  alternates: {
    canonical: "https://everytools.ai/worthit/pricing-verdict-tool",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a tool that analyzes pricing pages and gives a verdict?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WorthIt is a Chrome extension that reads any pricing page and gives an instant AI verdict — Worth it, Not worth it, or Depends — along with extracted pros and cons, hidden cost warnings, and alternative suggestions. It works on any pricing page you're currently viewing in your browser.",
      },
    },
    {
      "@type": "Question",
      name: "What does WorthIt extract from a pricing page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WorthIt extracts the core value proposition, the pricing structure, included and excluded features, any hidden costs or billing conditions (such as annual-only pricing or per-seat minimums), and risk factors. It then weighs these against your stated needs to produce a personalized verdict.",
      },
    },
    {
      "@type": "Question",
      name: "Does WorthIt work on all pricing pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WorthIt works on any publicly accessible pricing page in Chrome — SaaS pricing, e-commerce products, online course checkout pages, subscription services, and more. It reads the page content directly, so no copy-pasting is required.",
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
function CrossIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function PricingVerdictToolPage() {
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
              <span className="text-foreground">Pricing Verdict Tool</span>
            </nav>

            <span className="eyebrow">Pricing Page Analysis</span>

            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              Pricing page analysis with{" "}
              <span className="text-gradient">an instant AI verdict.</span>
            </h1>

            {/* Direct answer */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Direct answer</p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">WorthIt reads any pricing page you&apos;re on and delivers an immediate verdict: Worth it, Not worth it, or Depends.</strong>{" "}
                It extracts pros and cons, flags hidden costs and billing risks, and
                suggests alternatives when relevant — all in under 15 seconds, directly
                in your browser.
              </p>
            </div>
          </div>
        </section>

        {/* ================== WHAT GETS ANALYZED ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="analysis-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="analysis-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              What WorthIt analyzes on a pricing page
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-muted">
              Most pricing pages are designed to sell — not to inform. WorthIt reads between
              the lines and extracts what you actually need to make a decision.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Core value proposition",
                  body: "What the product actually does, who it's built for, and whether that matches your use case.",
                  color: "bg-teal-100 text-teal-800",
                },
                {
                  title: "Pricing structure",
                  body: "Monthly vs. annual billing, per-seat costs, usage limits, and how the price scales as your needs grow.",
                  color: "bg-teal-100 text-teal-800",
                },
                {
                  title: "Included vs. excluded features",
                  body: "Which features are locked to higher tiers, which are missing entirely, and what you'd actually get on the plan you're looking at.",
                  color: "bg-teal-100 text-teal-800",
                },
                {
                  title: "Hidden costs and risk flags",
                  body: "Annual commitment traps, seat minimums, overage fees, and any other conditions buried below the fold.",
                  color: "bg-amber-100 text-amber-800",
                },
                {
                  title: "Competitive context",
                  body: "Whether the price is in line with alternatives, or whether you're paying a premium for branding.",
                  color: "bg-teal-100 text-teal-800",
                },
                {
                  title: "Your specific situation",
                  body: "If you add context (role, use case, budget), WorthIt weighs all of the above against what you actually need.",
                  color: "bg-brand-soft text-brand",
                },
              ].map(({ title, body, color }) => (
                <div key={title} className="rounded-2xl border border-border bg-white p-6 shadow-elevate">
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${color} mb-3`}>
                    Analyzed
                  </span>
                  <h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== EXAMPLE OUTPUT ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="example-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="example-heading" className="mb-10 text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              What a WorthIt pricing verdict looks like
            </h2>

            <div className="relative">
              <div aria-hidden className="pointer-events-none absolute -inset-6 opacity-[0.10] blur-3xl" style={{ background: ACCENT }} />
              <div className="relative rounded-[22px] border border-border-strong/70 bg-white p-6 shadow-pop sm:p-8">

                <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg text-white" style={{ background: ACCENT }} aria-hidden>
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                        <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.7 7.7a1 1 0 0 0-1.4-1.4L10 13.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-[13.5px] font-semibold tracking-tight">WorthIt · Pricing Verdict</span>
                  </div>
                  <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-strong">Example output</span>
                </div>

                <p className="text-[12px] font-medium text-muted">Analyzed: Notion AI — Plus plan ($16/month/member)</p>

                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-[15px] font-bold text-amber-800">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
                    Depends
                  </span>
                  <span className="text-[13px] text-muted">on whether your team already uses Notion</span>
                </div>

                <p className="mt-4 text-[14.5px] leading-[1.7] text-foreground/85">
                  At $16/seat/month, Notion AI Plus is only worth it if your team is already
                  using Notion daily and needs AI natively in your workspace. For new users,
                  the learning curve and cost outpace the benefit.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-emerald-700">Pros</p>
                    <ul className="space-y-1.5">
                      {["AI inside your existing workspace", "Unlimited blocks", "90-day version history"].map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[13px] text-foreground/80">
                          <span className="mt-0.5 shrink-0 text-emerald-600"><CheckIcon /></span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-red-600">Cons</p>
                    <ul className="space-y-1.5">
                      {["Expensive for large teams", "No offline mode", "Steep learning curve for new users"].map((c) => (
                        <li key={c} className="flex items-start gap-2 text-[13px] text-foreground/80">
                          <span className="mt-0.5 shrink-0 text-red-500"><CrossIcon /></span>{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden>
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <p className="text-[13px] leading-relaxed text-amber-800">
                    <strong className="font-semibold">Hidden cost:</strong> AI features require the Plus plan or above — not available on Free or Starter.
                  </p>
                </div>

                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-border bg-surface px-4 py-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden>
                    <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                  </svg>
                  <p className="text-[13px] leading-relaxed text-muted-strong">
                    <strong className="font-semibold text-foreground">Alternative:</strong> If you need AI writing only, Craft or Obsidian with a standalone AI plugin costs less at scale.
                  </p>
                </div>

                <p className="mt-5 text-[12px] text-muted">Example of what WorthIt produces — actual output adapts to the page and your context.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================== COMPARISON ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="comparison-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="comparison-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              WorthIt vs. other ways to analyze a pricing page
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
              <table className="w-full text-[14.5px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Tool / Method</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Reads the page</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Gives verdict</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Flags hidden costs</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Personalized</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "WorthIt", reads: true, verdict: true, costs: true, personal: true, highlight: true },
                    { tool: "G2 / Capterra", reads: false, verdict: false, costs: false, personal: false, highlight: false },
                    { tool: "ChatGPT (manual)", reads: false, verdict: "partial", costs: "partial", personal: "partial", highlight: false },
                    { tool: "Vendor comparison page", reads: false, verdict: false, costs: false, personal: false, highlight: false },
                    { tool: "Reddit / forums", reads: false, verdict: false, costs: "partial", personal: false, highlight: false },
                  ].map((row) => {
                    const Cell = ({ val }: { val: boolean | string }) =>
                      val === true ? (
                        <span className="inline-flex justify-center text-emerald-600"><CheckIcon /></span>
                      ) : val === false ? (
                        <span className="inline-flex justify-center text-muted/50"><CrossIcon /></span>
                      ) : (
                        <span className="inline-flex justify-center text-amber-500">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden><path d="M5 12h14" /></svg>
                        </span>
                      );
                    return (
                      <tr key={row.tool} className={row.highlight ? "bg-teal-50/50" : "odd:bg-white even:bg-surface/30"}>
                        <td className="px-5 py-3.5 font-semibold">
                          <span className={row.highlight ? "text-teal-700" : "text-foreground/90"}>{row.tool}</span>
                          {row.highlight && <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ACCENT }}>Best</span>}
                        </td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.reads} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.verdict} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.costs} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.personal} /></td>
                      </tr>
                    );
                  })}
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
                  q: "Is there a tool that analyzes pricing pages and gives a verdict?",
                  a: "Yes. WorthIt is a Chrome extension that reads any pricing page you're on and delivers an instant verdict — Worth it, Not worth it, or Depends — with extracted pros, cons, hidden cost warnings, and alternative suggestions.",
                },
                {
                  q: "What does WorthIt extract from a pricing page?",
                  a: "WorthIt extracts the core value proposition, pricing structure, included and excluded features, hidden billing conditions, and risk factors. It then weighs these against your stated needs to produce a personalized verdict.",
                },
                {
                  q: "Does WorthIt work on all pricing pages?",
                  a: "WorthIt works on any publicly accessible pricing page in Chrome — SaaS tools, e-commerce products, online courses, subscriptions, and more.",
                },
                {
                  q: "How long does a WorthIt pricing analysis take?",
                  a: "Under 15 seconds in most cases. WorthIt reads the page content automatically — no copy-pasting or manual prompting required.",
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
                Get an instant verdict on any pricing page.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                WorthIt is a free Chrome extension. Open it on any pricing page and get a direct AI analysis in under 15 seconds.
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
