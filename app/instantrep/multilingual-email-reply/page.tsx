import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/instantrep-%E2%80%94-ai-email-rep/indmflpcjpjgkppkoibeeeaaonnamagb";
const ACCENT = "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)";

export const metadata: Metadata = {
  title: "Reply to Emails in Any Language — AI Multilingual Email Reply | InstantRep",
  description:
    "InstantRep generates AI email replies in your preferred language — English, French, Spanish, German, Portuguese, Italian, Dutch, Japanese, and more. Receive in any language, reply in yours.",
  keywords: [
    "AI email reply in French",
    "AI email reply in Spanish",
    "multilingual email reply generator",
    "reply email different language",
    "write email reply in another language",
    "AI email reply multilingual",
    "InstantRep multilingual",
  ],
  openGraph: {
    title: "Reply to Emails in Any Language — InstantRep",
    description:
      "Receive an email in English, reply in French. Or any combination. InstantRep generates email replies in 8+ languages — output language is fully independent from the email's language.",
    url: "/instantrep/multilingual-email-reply",
  },
  alternates: {
    canonical: "https://everytools.ai/instantrep/multilingual-email-reply",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I reply to an email in a different language than the one it was written in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. InstantRep generates your reply in your chosen language, regardless of the language the email was written in. Receive in English and reply in French, Spanish, German, or any of 8+ supported languages — the output language is fully independent.",
      },
    },
    {
      "@type": "Question",
      name: "Is there an AI tool that writes email replies in French?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. InstantRep is a Chrome extension that can generate email replies in French (Français). Select Français as your output language, and every reply will be written in French — regardless of the language of the original email.",
      },
    },
    {
      "@type": "Question",
      name: "Which languages does InstantRep support for email replies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "InstantRep supports English, Français (French), Español (Spanish), Deutsch (German), Português (Portuguese), Italiano (Italian), Nederlands (Dutch), and 日本語 (Japanese). Additional languages may be added — check the extension for the current list.",
      },
    },
  ],
};

const LANGUAGES = [
  { name: "English", flag: "🇬🇧" },
  { name: "Français", flag: "🇫🇷" },
  { name: "Español", flag: "🇪🇸" },
  { name: "Deutsch", flag: "🇩🇪" },
  { name: "Português", flag: "🇧🇷" },
  { name: "Italiano", flag: "🇮🇹" },
  { name: "Nederlands", flag: "🇳🇱" },
  { name: "日本語", flag: "🇯🇵" },
];

export default function MultilingualEmailReplyPage() {
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
              <span className="text-foreground">Multilingual email reply</span>
            </nav>

            <span className="eyebrow">Multilingual AI email reply</span>

            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              Reply to any email{" "}
              <span className="text-gradient">in your language.</span>
            </h1>

            {/* Direct answer */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                Direct answer
              </p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">
                  Yes — you can reply to an email in a different language than the one it was written in.
                </strong>{" "}
                InstantRep generates your reply in your preferred language, regardless of the
                email's original language. Receive in English, reply in French, Spanish, German,
                or any of 8+ supported languages — the output is always in the language you choose.
              </p>
            </div>

            {/* Language chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {LANGUAGES.map(({ name, flag }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-[13px] font-medium shadow-soft"
                >
                  <span aria-hidden>{flag}</span>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================== WHY LANGUAGE INDEPENDENCE MATTERS ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="why-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="why-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Why reply language should be your choice — not the email's
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-muted">
              <p>
                Most AI email tools generate replies in the same language as the email
                they're responding to. That works when everyone writes in your language —
                but not when you collaborate with international teams, clients in other
                countries, or receive newsletters and updates in English while you prefer
                to write in French, Spanish, or German.
              </p>
              <p>
                InstantRep separates the input language from the output language. You choose
                how to reply — not the email sender.
              </p>
            </div>

            {/* Example cards */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                {
                  from: "Email in English",
                  to: "Reply in Français",
                  example: "An English-language email from a colleague, answered in French for a French-speaking team.",
                },
                {
                  from: "Email in Español",
                  to: "Reply in Deutsch",
                  example: "A Spanish partner email, answered in German for a German-speaking executive.",
                },
                {
                  from: "Email in Italiano",
                  to: "Reply in English",
                  example: "An Italian supplier email, answered in English when that's your working language.",
                },
              ].map(({ from, to, example }) => (
                <div key={from} className="rounded-2xl border border-border bg-surface p-6 shadow-elevate">
                  <div className="flex items-center gap-2 text-[14px]">
                    <span className="font-medium text-muted-strong">{from}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted shrink-0" aria-hidden>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                    <span
                      className="font-semibold"
                      style={{ background: ACCENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                    >
                      {to}
                    </span>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== FEATURES ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="features-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="features-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              What makes InstantRep's multilingual support different
            </h2>

            <ul className="mt-10 space-y-5">
              {[
                {
                  title: "Output language is independent from the email's language",
                  body: "InstantRep reads the email in whatever language it's written in, and generates your reply in the language you choose. The two are completely separate settings.",
                },
                {
                  title: "8+ supported output languages",
                  body: "English, Français, Español, Deutsch, Português, Italiano, Nederlands, 日本語 — and more. Select your language once and InstantRep remembers it for every reply.",
                },
                {
                  title: "Language preference saved automatically",
                  body: "Set your preferred output language once. InstantRep uses it for every email you reply to — no need to reselect it each time.",
                },
                {
                  title: "Tone and length work across all languages",
                  body: "You can set Formal tone in French, Casual tone in Spanish, or Direct tone in German. Language selection and tone selection are independent — both apply to the output.",
                },
                {
                  title: "No translation tool required",
                  body: "InstantRep is not a translator — it generates a native reply in your chosen language directly from the email context. The output reads naturally, not like a translated version.",
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
              Multilingual email reply: InstantRep vs. alternatives
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted">
              Most AI email tools reply in the same language as the incoming email, or in English only.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Tool</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Choose output language</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Independent from email language</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Languages</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "InstantRep", choose: true, independent: true, langs: "8+", highlight: true },
                    { tool: "ChatGPT (manual prompt)", choose: true, independent: true, langs: "Many (manual)", highlight: false },
                    { tool: "Gmail Smart Reply", choose: false, independent: false, langs: "Email's language", highlight: false },
                    { tool: "Superhuman AI", choose: false, independent: false, langs: "English only", highlight: false },
                    { tool: "Lavender", choose: false, independent: false, langs: "English only", highlight: false },
                  ].map((row) => {
                    const BoolCell = ({ val }: { val: boolean }) =>
                      val ? (
                        <span className="inline-flex items-center justify-center text-emerald-600">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="Yes"><path d="M20 6 9 17l-5-5" /></svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center text-muted/50">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="No"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        </span>
                      );
                    return (
                      <tr key={row.tool} className={row.highlight ? "bg-brand-soft/40" : "odd:bg-white even:bg-surface/30"}>
                        <td className="px-5 py-3.5 font-semibold">
                          <span className={row.highlight ? "text-brand" : "text-foreground/90"}>{row.tool}</span>
                          {row.highlight && (
                            <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ACCENT }}>Best</span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-center"><BoolCell val={row.choose} /></td>
                        <td className="px-5 py-3.5 text-center"><BoolCell val={row.independent} /></td>
                        <td className="px-5 py-3.5 text-center text-muted">{row.langs}</td>
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
                  q: "Can I reply to an email in French even if the email was in English?",
                  a: "Yes. Select Français as your output language in InstantRep, and your reply will be written in French — regardless of the language the original email was written in.",
                },
                {
                  q: "Which languages can InstantRep reply in?",
                  a: "Supported languages include English, Français (French), Español (Spanish), Deutsch (German), Português (Portuguese), Italiano (Italian), Nederlands (Dutch), and 日本語 (Japanese).",
                },
                {
                  q: "Do I have to select the language every time?",
                  a: "No. InstantRep saves your language preference automatically. Set it once and it applies to every reply you generate — until you change it.",
                },
                {
                  q: "Can I also control the tone when replying in another language?",
                  a: "Yes. Tone and language are independent settings. You can choose Formal in French, Casual in Spanish, or Direct in German — any combination works.",
                },
                {
                  q: "Is there an AI that writes professional emails in Spanish?",
                  a: "Yes. Select Español and Formal tone in InstantRep. The reply will be written in professional Spanish — not a translation, but a natively generated reply.",
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
              <Link href="/instantrep/ai-email-reply-no-account" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">No account required</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link href="/instantrep/professional-email-reply-generator" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">Professional email reply with tone control</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </Link>
              <Link href="/instantrep" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20 sm:col-span-2">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">View all InstantRep features — AI email reply generator</span>
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
                Reply to any email in your language.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                InstantRep is a free Chrome extension with 8+ output languages.
                No account required — install and start replying immediately.
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
