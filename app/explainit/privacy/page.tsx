import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { getTool } from "../../lib/tools";

const tool = getTool("explainit")!;

export const metadata: Metadata = {
  title: "ExplainIt — Privacy Policy",
  description:
    "ExplainIt privacy policy. No unnecessary data storage. No selling or sharing of personal data. Secure, minimal processing.",
  openGraph: {
    title: "ExplainIt — Privacy Policy",
    description:
      "ExplainIt privacy policy. No unnecessary data storage. No selling or sharing of personal data.",
    url: "/explainit/privacy",
  },
  robots: { index: true, follow: true },
};

const sections: { title: string; body: string | string[] }[] = [
  {
    title: "No personal data collected",
    body: "ExplainIt does not collect, store, or share any personal user data. No account is required to use the extension. We do not ask for your name, email address, or any other identifying information.",
  },
  {
    title: "Only required webpage content is processed",
    body: [
      'When you click “Explain this page”, the extension reads the visible text of the current webpage and sends it to our secure backend for processing.',
      "This content is used solely to generate your explanation. It is discarded immediately after — it is never stored, indexed, or associated with any identifier.",
      "We never access pages you have not explicitly asked us to process.",
    ],
  },
  {
    title: "No selling or sharing of personal data",
    body: "We do not sell, rent, trade, or share any data with third parties for advertising, analytics, or any other commercial purpose. Your content and your browsing activity remain entirely yours.",
  },
  {
    title: "Secure processing",
    body: "All communication between the extension and our backend is encrypted in transit (HTTPS/TLS). Processing is handled on Cloudflare's global infrastructure. No sensitive data is retained on our servers after a request completes.",
  },
  {
    title: "Anonymous usage identifier",
    body: "A random anonymous identifier is generated locally on your device and stored in the extension's local storage. It is used only to track free-usage credits and manage your credit balance. It contains no personal information and cannot be traced back to you.",
  },
  {
    title: "No tracking, no profiling",
    body: "ExplainIt does not use tracking pixels, cookies, fingerprinting, or any other technology to follow you across websites. We do not build profiles, and we do not use your data for advertising of any kind.",
  },
  {
    title: "Third-party services",
    body: [
      "ExplainIt uses the following third-party services to operate:",
      "• Anthropic Claude API — to generate explanations. Webpage content is sent to Anthropic for processing. Anthropic's privacy policy applies to this processing.",
      "• Stripe — for optional credit purchases. Payment data is handled entirely by Stripe and never touches our servers. Stripe's privacy policy applies.",
      "• Cloudflare Workers & D1 — for backend infrastructure and anonymous credit tracking.",
    ],
  },
  {
    title: "Your rights",
    body: "Since we do not collect personal data, there is nothing to request, correct, or delete. If you have any concern, you can contact us and we will respond personally.",
  },
  {
    title: "Changes to this policy",
    body: "This policy describes ExplainIt's current practices. If we make material changes, we will update this page and note the date of the revision. We will not make changes that reduce your privacy rights without clear notice.",
  },
];

export default function ExplainItPrivacyPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* ── Header ── */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div className="relative mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
              <Link href="/" className="transition hover:text-foreground">
                EveryTools
              </Link>
              <span aria-hidden>/</span>
              <Link
                href="/explainit"
                className="transition hover:text-foreground"
              >
                ExplainIt
              </Link>
              <span aria-hidden>/</span>
              <span className="text-foreground font-medium">Privacy Policy</span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-elevate ring-1 ring-white/30"
                style={{ background: tool.accent }}
                aria-hidden
              >
                <span className="[&_svg]:h-6 [&_svg]:w-6">{tool.icon}</span>
              </div>
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                  ExplainIt
                </p>
                <h1 className="text-[28px] font-semibold leading-tight tracking-tight sm:text-[36px]">
                  Privacy Policy
                </h1>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-muted sm:text-[17px]">
              ExplainIt is built on a simple principle: process only what is
              strictly necessary, retain nothing, and never share your data.
              This page explains exactly what happens when you use the
              extension.
            </p>

            <p className="mt-3 text-[13px] text-muted">
              Last updated: May 2026
            </p>
          </div>
        </section>

        {/* ── Policy sections ── */}
        <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2">
            {sections.map((s, i) => (
              <div
                key={s.title}
                className={[
                  "rounded-2xl border border-border/80 bg-white p-6 shadow-soft",
                  // Make "No selling or sharing" span full width for emphasis
                  i === 2 ? "sm:col-span-2" : "",
                ].join(" ")}
              >
                <div className="mb-3 flex items-start gap-3">
                  <span
                    className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[12px] font-semibold text-muted-strong ring-1 ring-border"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[15.5px] font-semibold tracking-tight">
                    {s.title}
                  </h2>
                </div>
                {Array.isArray(s.body) ? (
                  <div className="space-y-2 pl-10 text-[14.5px] leading-[1.65] text-muted">
                    {s.body.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="pl-10 text-[14.5px] leading-[1.65] text-muted">
                    {s.body}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Contact + back */}
          <div className="mt-10 rounded-2xl border border-border/80 bg-white p-6 sm:p-7">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-[15.5px] font-semibold tracking-tight">
                  Questions about your privacy?
                </h2>
                <p className="mt-1 text-[14px] text-muted">
                  We reply personally — no bots, no templates.
                </p>
              </div>
              <a
                href="mailto:explainit@everytools.ai"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border-strong/80 bg-white px-4 py-2 text-[13.5px] font-semibold text-foreground transition hover:border-foreground hover:bg-surface"
              >
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                explainit@everytools.ai
              </a>
            </div>
          </div>

          {/* Nav back */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/explainit" className="btn-secondary focus-ring">
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
              Back to ExplainIt
            </Link>
            <Link
              href="/"
              className="text-[13.5px] font-medium text-muted transition hover:text-foreground"
            >
              EveryTools home →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
