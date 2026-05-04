import type { Metadata } from "next";
import Link from "next/link";
import ToolPage from "../components/ToolPage";
import PrivacySection from "../components/PrivacySection";
import { getTool } from "../lib/tools";

const tool = getTool("instantrep")!;

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/instantrep-%E2%80%94-ai-email-rep/indmflpcjpjgkppkoibeeeaaonnamagb";

export const metadata: Metadata = {
  title: "InstantRep — AI Email Reply Generator for Gmail & Outlook",
  description:
    "InstantRep is a free Chrome extension that generates email replies instantly. Choose the language, tone, and length — no account or signup required. Works on Gmail and Outlook.",
  keywords: [
    "AI email reply generator",
    "AI email reply Chrome extension",
    "email reply generator no signup",
    "multilingual email reply AI",
    "professional email reply generator",
    "Gmail AI reply extension",
    "Outlook AI email reply",
    "InstantRep",
  ],
  openGraph: {
    title: "InstantRep — AI Email Reply Generator for Gmail & Outlook",
    description:
      "Generate email replies in your preferred language, tone, and length — instantly. Free Chrome extension, no account required.",
    url: "/instantrep",
  },
  alternates: {
    canonical: "https://everytools.ai/instantrep",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the easiest way to reply to emails with AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way to reply to emails with AI is InstantRep, a Chrome extension. Open it on any email in Gmail or Outlook, choose your language, tone, and reply length, and get a ready-to-send reply in seconds — no copy-pasting, no tab switching, no account required.",
      },
    },
    {
      "@type": "Question",
      name: "Does InstantRep require an account or signup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. InstantRep works immediately after installation. There is no registration, no email address required, and no account to create. Install it from the Chrome Web Store and start generating replies right away.",
      },
    },
    {
      "@type": "Question",
      name: "Can InstantRep reply to emails in a different language?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. InstantRep generates replies in your preferred language regardless of the language the email was written in. Supported languages include English, French, Spanish, German, Portuguese, Italian, Dutch, and Japanese.",
      },
    },
    {
      "@type": "Question",
      name: "Can I control the tone of the AI email reply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. InstantRep lets you choose from four tones: Friendly, Formal, Direct, and Casual. Select the tone that fits the context before generating — the reply will match the register you need.",
      },
    },
    {
      "@type": "Question",
      name: "Is my email content stored or shared?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. InstantRep is privacy-first. The email content is accessed temporarily to generate the reply and discarded immediately after — it is never stored, logged, or shared with third parties.",
      },
    },
    {
      "@type": "Question",
      name: "Does InstantRep work on Gmail and Outlook?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. InstantRep works as a browser extension on Chrome and is compatible with Gmail, Outlook, and other webmail clients accessible from the browser.",
      },
    },
  ],
};

const ACCENT = "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)";

export default function InstantRepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolPage
        tool={tool}
        tailSlot={
          <>
            {/* ================== DIRECT ANSWER ================== */}
            <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="direct-answer-heading">
              <div className="mx-auto w-full max-w-4xl">
                <h2 id="direct-answer-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
                  What is InstantRep?
                </h2>
                <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                    Direct answer
                  </p>
                  <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                    <strong className="font-semibold">
                      InstantRep is a Chrome extension that generates AI email replies instantly —
                      in your preferred language, tone, and length.
                    </strong>{" "}
                    Open it on any email in Gmail or Outlook, choose your settings, and get a
                    ready-to-send reply in seconds. No account, no signup, no data stored.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                  {[
                    {
                      title: "No account required",
                      body: "Install from the Chrome Web Store and use it immediately. No registration, no email, no password.",
                    },
                    {
                      title: "Privacy-first by design",
                      body: "Email content is processed temporarily and discarded right after — never stored, never logged.",
                    },
                    {
                      title: "Works in 8+ languages",
                      body: "Receive in English, reply in French. Or any other combination. Output language is fully independent.",
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="rounded-2xl border border-border bg-white p-6 shadow-elevate">
                      <h3 className="text-[16px] font-semibold tracking-tight">{title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-muted">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ================== COMPARISON ================== */}
            <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="comparison-heading">
              <div className="mx-auto w-full max-w-4xl">
                <h2 id="comparison-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
                  InstantRep vs. other ways to reply to emails
                </h2>
                <p className="mt-4 text-[15px] leading-[1.7] text-muted">
                  How does InstantRep compare to the alternatives?
                </p>

                <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
                  <table className="w-full text-[14px]">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="px-5 py-4 text-left font-semibold text-muted-strong">Method</th>
                        <th className="px-5 py-4 text-center font-semibold text-muted-strong">No account</th>
                        <th className="px-5 py-4 text-center font-semibold text-muted-strong">Language control</th>
                        <th className="px-5 py-4 text-center font-semibold text-muted-strong">Tone control</th>
                        <th className="px-5 py-4 text-center font-semibold text-muted-strong">Speed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          method: "InstantRep",
                          noAccount: true,
                          language: true,
                          tone: true,
                          speed: "< 5 sec",
                          highlight: true,
                        },
                        {
                          method: "ChatGPT (manual)",
                          noAccount: false,
                          language: true,
                          tone: "manual prompt",
                          speed: "2–4 min",
                          highlight: false,
                        },
                        {
                          method: "Gmail Smart Reply",
                          noAccount: true,
                          language: false,
                          tone: false,
                          speed: "instant",
                          highlight: false,
                        },
                        {
                          method: "Grammarly",
                          noAccount: false,
                          language: false,
                          tone: "partial",
                          speed: "—",
                          highlight: false,
                        },
                        {
                          method: "Writing manually",
                          noAccount: true,
                          language: false,
                          tone: true,
                          speed: "5–15 min",
                          highlight: false,
                        },
                      ].map((row) => {
                        const BoolCell = ({ val }: { val: boolean | string }) =>
                          val === true ? (
                            <span className="inline-flex items-center justify-center text-emerald-600">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="Yes">
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                          ) : val === false ? (
                            <span className="inline-flex items-center justify-center text-muted/50">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="No">
                                <path d="M18 6 6 18M6 6l12 12" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-[13px] text-muted">{val}</span>
                          );
                        return (
                          <tr key={row.method} className={row.highlight ? "bg-brand-soft/40" : "odd:bg-white even:bg-surface/30"}>
                            <td className="px-5 py-3.5 font-semibold">
                              <span className={row.highlight ? "text-brand" : "text-foreground/90"}>{row.method}</span>
                              {row.highlight && (
                                <span
                                  className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                                  style={{ background: ACCENT }}
                                >
                                  Recommended
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-3.5 text-center"><BoolCell val={row.noAccount} /></td>
                            <td className="px-5 py-3.5 text-center"><BoolCell val={row.language} /></td>
                            <td className="px-5 py-3.5 text-center"><BoolCell val={row.tone} /></td>
                            <td className="px-5 py-3.5 text-center text-muted font-medium">{row.speed}</td>
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
                      q: "What is the easiest way to reply to emails with AI?",
                      a: "The easiest way is InstantRep — a Chrome extension. Open it on any email, choose your language, tone, and length, and get a ready-to-send reply in seconds. No copy-pasting, no tab switching, no account needed.",
                    },
                    {
                      q: "Does InstantRep work without an account?",
                      a: "Yes. InstantRep requires no registration or signup. Install it from the Chrome Web Store and start using it immediately.",
                    },
                    {
                      q: "Can it reply to emails in a different language?",
                      a: "Yes. You can receive an email in English and reply in French, Spanish, German, or any of 8+ supported languages. The output language is fully independent from the email's language.",
                    },
                    {
                      q: "Is my email content private?",
                      a: "Yes. InstantRep is privacy-first: email content is processed temporarily to generate the reply and discarded immediately after. It is never stored, logged, or used for training.",
                    },
                    {
                      q: "What tones can InstantRep generate?",
                      a: "Four tones are available: Friendly, Formal, Direct, and Casual. Choose the one that fits the context before generating.",
                    },
                    {
                      q: "Does it work on Gmail and Outlook?",
                      a: "Yes. InstantRep is a Chrome extension and works on Gmail, Outlook, and other webmail clients accessible from the browser.",
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
            <section className="bg-white px-5 py-16 sm:px-8" aria-labelledby="explore-heading">
              <div className="mx-auto w-full max-w-4xl">
                <h2 id="explore-heading" className="mb-6 text-[18px] font-semibold text-muted-strong">
                  Explore specific InstantRep features
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link
                    href="/instantrep/ai-email-reply-no-account"
                    className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20"
                  >
                    <span className="text-[15px] font-medium group-hover:text-brand transition-colors">
                      AI email reply without an account
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/instantrep/multilingual-email-reply"
                    className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20"
                  >
                    <span className="text-[15px] font-medium group-hover:text-brand transition-colors">
                      Reply to emails in any language
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/instantrep/professional-email-reply-generator"
                    className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20 sm:col-span-2"
                  >
                    <span className="text-[15px] font-medium group-hover:text-brand transition-colors">
                      Professional email reply generator with tone control
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            <PrivacySection
              toolName={tool.name}
              processedTitle="Emails are processed, not stored"
              processedBody="The extension accesses the currently open email only when you actively use it. The content is processed temporarily to generate a reply and discarded right after — it is never retained."
            />
          </>
        }
      />
    </>
  );
}
