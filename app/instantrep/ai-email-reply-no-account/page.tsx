import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/instantrep-%E2%80%94-ai-email-rep/indmflpcjpjgkppkoibeeeaaonnamagb";
const ACCENT = "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)";

export const metadata: Metadata = {
  title: "AI Email Reply Without an Account — InstantRep",
  description:
    "Generate AI email replies with no account, no signup, and no data stored. InstantRep is a Chrome extension that works immediately after installation — privacy-first, no registration required.",
  keywords: [
    "AI email reply without account",
    "AI email reply no signup",
    "email reply generator no login",
    "privacy-first email AI",
    "AI email assistant no registration",
    "InstantRep no account",
  ],
  openGraph: {
    title: "AI Email Reply Without an Account — InstantRep",
    description:
      "No account. No signup. No data stored. InstantRep generates AI email replies instantly — install and use right away.",
    url: "/instantrep/ai-email-reply-no-account",
  },
  alternates: {
    canonical: "https://everytools.ai/instantrep/ai-email-reply-no-account",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there an AI email reply tool that doesn't require an account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. InstantRep is a Chrome extension that generates AI email replies without any account or signup. Install it from the Chrome Web Store and start using it immediately — no email address, no registration, no password required.",
      },
    },
    {
      "@type": "Question",
      name: "Does InstantRep store my emails?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. InstantRep is privacy-first by design. Your email content is accessed only when you actively use the extension, processed temporarily to generate a reply, and discarded immediately after. It is never stored, logged, or shared with third parties.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use an AI email reply extension without logging in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. InstantRep requires no login of any kind. It does not connect to a user account, does not require an email address, and has no dashboard to manage. Install the extension and use it on any email — that's it.",
      },
    },
  ],
};

export default function AiEmailReplyNoAccountPage() {
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
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-[13px] text-muted">
              <Link href="/" className="transition hover:text-foreground">EveryTools</Link>
              <span aria-hidden>/</span>
              <Link href="/instantrep" className="transition hover:text-foreground">InstantRep</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">No account required</span>
            </nav>

            <span className="eyebrow">Privacy-first AI email reply</span>

            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              Generate AI email replies{" "}
              <span className="text-gradient">without an account.</span>
            </h1>

            {/* Direct answer */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                Direct answer
              </p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">
                  Yes — you can generate AI email replies without creating an account.
                </strong>{" "}
                InstantRep is a Chrome extension that works immediately after installation.
                No registration, no email address, no login. Open it on any email and get
                a reply in seconds.
              </p>
            </div>

            {/* Trust signals */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                "No account",
                "No signup",
                "No data stored",
                "No tracking",
                "Free to install",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[13px] font-medium shadow-soft"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-emerald-600" aria-hidden>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================== WHY NO ACCOUNT MATTERS ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="why-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="why-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Why an account-free email AI matters
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-muted">
              <p>
                Most AI email tools require you to create an account, verify an email,
                connect your inbox, and agree to data retention policies before you can
                use them. That introduces friction — and more importantly, it means your
                emails pass through a service that stores or processes them over time.
              </p>
              <p>
                InstantRep takes a different approach. It runs as a browser extension
                with no backend account. There is nothing to sign up for, nothing to
                manage, and nothing stored after each reply is generated.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Install the extension",
                  body: "Find InstantRep on the Chrome Web Store and click Add to Chrome. No form, no email address, no account creation.",
                },
                {
                  step: "02",
                  title: "Open any email",
                  body: "Navigate to any email in Gmail, Outlook, or another webmail client. Click the InstantRep icon.",
                },
                {
                  step: "03",
                  title: "Generate your reply",
                  body: "Choose language, tone, and length. Click Generate. A ready-to-send reply appears in seconds.",
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

        {/* ================== PRIVACY DETAILS ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="privacy-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="privacy-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              How InstantRep keeps your emails private
            </h2>

            <ul className="mt-10 space-y-5">
              {[
                {
                  title: "No account, no user profile",
                  body: "InstantRep does not create or maintain a user profile. There is no account linked to your identity — the extension has no concept of \"your emails\" because it stores nothing.",
                },
                {
                  title: "Email content is never stored",
                  body: "When you click Generate, the email content is sent to the AI model to generate a reply. That content is discarded immediately after the reply is returned — it is not retained on any server.",
                },
                {
                  title: "No training on your data",
                  body: "Your emails are not used to train or improve any AI model. The processing is one-directional: in to generate the reply, then gone.",
                },
                {
                  title: "Works without inbox access",
                  body: "InstantRep does not connect to your Gmail or Outlook account. It reads only the email currently visible in your browser tab — nothing more.",
                },
                {
                  title: "No tracking or analytics on your content",
                  body: "Usage analytics are anonymous and contain no email content. We know that the extension was used — we do not know what the emails contained.",
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
              InstantRep vs. AI email tools that require an account
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Tool</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Account required</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Emails stored</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Inbox access</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Works in seconds</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "InstantRep", account: false, stored: false, inboxAccess: false, fast: true, highlight: true },
                    { tool: "ChatGPT", account: true, stored: "session", inboxAccess: false, fast: false, highlight: false },
                    { tool: "Superhuman AI", account: true, stored: true, inboxAccess: true, fast: true, highlight: false },
                    { tool: "Lavender", account: true, stored: true, inboxAccess: true, fast: false, highlight: false },
                    { tool: "Gmail Smart Reply", account: true, stored: true, inboxAccess: true, fast: true, highlight: false },
                  ].map((row) => {
                    const BoolCell = ({ val, invert }: { val: boolean | string; invert?: boolean }) => {
                      const isGood = invert ? val === false : val === true;
                      const isBad = invert ? val === true : val === false;
                      return isGood ? (
                        <span className="inline-flex items-center justify-center text-emerald-600">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="Yes"><path d="M20 6 9 17l-5-5" /></svg>
                        </span>
                      ) : isBad ? (
                        <span className="inline-flex items-center justify-center text-red-400">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="No"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        </span>
                      ) : (
                        <span className="text-[13px] text-muted">{val}</span>
                      );
                    };
                    return (
                      <tr key={row.tool} className={row.highlight ? "bg-brand-soft/40" : "odd:bg-white even:bg-surface/30"}>
                        <td className="px-5 py-3.5 font-semibold">
                          <span className={row.highlight ? "text-brand" : "text-foreground/90"}>{row.tool}</span>
                          {row.highlight && (
                            <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ACCENT }}>
                              Best for privacy
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-center"><BoolCell val={row.account} invert /></td>
                        <td className="px-5 py-3.5 text-center"><BoolCell val={row.stored} invert /></td>
                        <td className="px-5 py-3.5 text-center"><BoolCell val={row.inboxAccess} invert /></td>
                        <td className="px-5 py-3.5 text-center"><BoolCell val={row.fast} /></td>
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
            <dl className="space-y-5">
              {[
                {
                  q: "Is there an AI email reply tool that doesn't require an account?",
                  a: "Yes. InstantRep is a Chrome extension that generates AI email replies without any account or registration. Install it and use it immediately — no email address, no login, no signup flow.",
                },
                {
                  q: "Do I need to give InstantRep access to my Gmail or Outlook inbox?",
                  a: "No. InstantRep does not request access to your inbox. It reads only the email visible in your current browser tab, and only when you actively use the extension.",
                },
                {
                  q: "Are my emails stored or logged anywhere?",
                  a: "No. Email content is processed in real time to generate your reply and discarded immediately after. Nothing is stored on any server.",
                },
                {
                  q: "Can I use InstantRep on a work computer without creating personal accounts?",
                  a: "Yes. Since InstantRep requires no account, it's safe to install on a work device without linking any personal credentials. It runs independently as a browser extension.",
                },
                {
                  q: "Is InstantRep free?",
                  a: "Yes, InstantRep is free to install from the Chrome Web Store. You get a number of free generations to start, with optional paid credits if you need more.",
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
              More InstantRep features
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/instantrep/multilingual-email-reply" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">Reply in any language</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link href="/instantrep/professional-email-reply-generator" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">Professional email reply generator</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link href="/instantrep" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20 sm:col-span-2">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">View all InstantRep features</span>
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
                Reply to emails instantly — no account needed.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                InstantRep is free to install. No signup, no inbox access, no data stored.
                Open it on any email and generate a reply in seconds.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-on-cta focus-ring">
                  Install InstantRep — free
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
                <Link href="/instantrep" className="btn-ghost-white focus-ring">View all features</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
