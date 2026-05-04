import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/veedge-%E2%80%94-youtube-ai-summa/nllgadlfnebcjkilfoanbaknkkpdmflk";
const ACCENT = "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)";

export const metadata: Metadata = {
  title: "Multilingual YouTube Summarizer — Summaries in Your Language | Veedge",
  description:
    "Veedge summarizes any YouTube video in your preferred language — English, French, Spanish, German, Arabic, Japanese, and more. The output language is fully independent from the video's spoken language.",
  keywords: [
    "multilingual YouTube summarizer",
    "YouTube summary in French",
    "YouTube summary in Spanish",
    "YouTube summary in Arabic",
    "YouTube video summary different language",
    "AI YouTube summarizer multilingual",
    "Veedge multilingual",
  ],
  openGraph: {
    title: "Multilingual YouTube Summarizer — Summaries in Your Language | Veedge",
    description:
      "Get any YouTube video summarized in your language. Veedge supports 8+ output languages, independent from the video's spoken language.",
    url: "/veedge/multilingual-youtube-summary",
  },
  alternates: {
    canonical: "https://everytools.ai/veedge/multilingual-youtube-summary",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there a YouTube summarizer that works in multiple languages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge is a Chrome extension that generates YouTube video summaries in your preferred language. It supports English, French, Spanish, German, Portuguese, Italian, Dutch, Japanese, and more. The output language is fully independent from the language the video was recorded in.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a YouTube summary in French (or Spanish, Arabic, etc.)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge lets you choose your output language before summarizing. Select French, Spanish, Arabic, German, or any supported language, and the summary will be generated in that language — even if the video was recorded in English or another language entirely.",
      },
    },
    {
      "@type": "Question",
      name: "Does the video need to be in my language for Veedge to summarize it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Veedge's output language is independent from the video's spoken language. You can watch a video in English and get the summary in French, Spanish, Japanese, or any other supported language. The extension handles the translation automatically.",
      },
    },
    {
      "@type": "Question",
      name: "Is it worth using a multilingual summarizer instead of auto-captions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Auto-captions give you a raw transcript in the video's language — you still have to read everything and understand the original language. Veedge gives you a structured summary in your preferred language with key takeaways extracted automatically. It is faster, more readable, and does not require you to understand the video's spoken language.",
      },
    },
  ],
};

const LANGUAGES = [
  { name: "English", code: "EN", flag: "🇬🇧" },
  { name: "Français", code: "FR", flag: "🇫🇷" },
  { name: "Español", code: "ES", flag: "🇪🇸" },
  { name: "Deutsch", code: "DE", flag: "🇩🇪" },
  { name: "Português", code: "PT", flag: "🇧🇷" },
  { name: "Italiano", code: "IT", flag: "🇮🇹" },
  { name: "Nederlands", code: "NL", flag: "🇳🇱" },
  { name: "日本語", code: "JA", flag: "🇯🇵" },
];

export default function MultilingualYoutubeSummaryPage() {
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
              <Link href="/veedge" className="transition hover:text-foreground">Veedge</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">Multilingual YouTube Summary</span>
            </nav>

            <span className="eyebrow">Multilingual YouTube Summarizer</span>

            {/* H1 */}
            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              YouTube summaries{" "}
              <span className="text-gradient">in your language.</span>
            </h1>

            {/* Direct answer */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Direct answer</p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">Veedge generates YouTube video summaries in your preferred language, regardless of what language the video was recorded in.</strong>{" "}
                Select your output language before summarizing — English, French, Spanish,
                German, Portuguese, Italian, Dutch, Japanese, and more — and the summary
                will be delivered in that language automatically.
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

        {/* ================== WHY MULTILINGUAL ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="why-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="why-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Why output language matters in a YouTube summarizer
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-muted">
              <p>
                Most YouTube summarizers generate output in the same language as the video.
                That works if you consume content in your native language — but not if you
                follow English-only channels, international educators, or creators from
                other regions.
              </p>
              <p>
                Veedge separates the video's spoken language from the summary's output language.
                Watch content in any language; read the summary in yours.
              </p>
            </div>

            {/* Language independence illustration */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                {
                  from: "English video",
                  to: "Summary in Français",
                  example: "A tech tutorial from a US creator, summarized in French for a French-speaking viewer.",
                },
                {
                  from: "Spanish video",
                  to: "Summary in Deutsch",
                  example: "A Spanish-language educational lecture, summarized in German.",
                },
                {
                  from: "Japanese video",
                  to: "Summary in English",
                  example: "A Japanese product review, summarized in English without watching subtitles.",
                },
              ].map(({ from, to, example }) => (
                <div key={from} className="rounded-2xl border border-border bg-surface p-6 shadow-elevate">
                  <div className="flex items-center gap-2 text-[14px]">
                    <span className="font-medium text-muted-strong">{from}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted" aria-hidden>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                    <span
                      className="font-semibold"
                      style={{
                        background: ACCENT,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
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
              What makes Veedge's multilingual support different
            </h2>

            <ul className="mt-10 space-y-5">
              {[
                {
                  title: "Output language is independent from video language",
                  body: "Veedge does not require the video to be in your language. The output language setting controls the summary — not the video. Any video, any output language.",
                },
                {
                  title: "8+ languages supported",
                  body: "English, Français, Español, Deutsch, Português, Italiano, Nederlands, 日本語 — and more. Select your preferred language once, and Veedge remembers it for every future summary.",
                },
                {
                  title: "Works with auto-generated captions",
                  body: "Veedge works with auto-generated YouTube captions, which are available in dozens of languages. Even without manual subtitles, most videos can be summarized and translated.",
                },
                {
                  title: "Consistent format across languages",
                  body: "The summary structure — title, paragraph, key takeaways, timestamps — is the same regardless of output language. You always get a structured, readable result.",
                },
                {
                  title: "Language preference saved automatically",
                  body: "Set your language once. Veedge remembers it and uses it for every video you summarize — no need to select it again each time.",
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
              Multilingual support: Veedge vs. alternatives
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted">
              Most YouTube summarizers are language-locked — they output in the same
              language as the video or in English only.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
              <table className="w-full text-[14.5px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Tool</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Choose output language</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Independent from video language</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Languages supported</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "Veedge", chooseLang: true, independent: true, count: "8+", highlight: true },
                    { tool: "Glasp", chooseLang: false, independent: false, count: "1 (video lang)", highlight: false },
                    { tool: "Eightify", chooseLang: "partial", independent: false, count: "Limited", highlight: false },
                    { tool: "YouTube built-in", chooseLang: false, independent: false, count: "1 (video lang)", highlight: false },
                    { tool: "ChatGPT (manual)", chooseLang: true, independent: true, count: "Many (manual prompt)", highlight: false },
                  ].map((row) => {
                    const BoolCell = ({ val }: { val: boolean | string }) =>
                      val === true ? (
                        <span className="inline-flex items-center justify-center text-emerald-600">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="Yes"><path d="M20 6 9 17l-5-5" /></svg>
                        </span>
                      ) : val === false ? (
                        <span className="inline-flex items-center justify-center text-muted/50">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="No"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center text-amber-500">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="Partial"><path d="M5 12h14" /></svg>
                        </span>
                      );
                    return (
                      <tr key={row.tool} className={row.highlight ? "bg-brand-soft/40" : "odd:bg-white even:bg-surface/30"}>
                        <td className="px-5 py-3.5 font-semibold">
                          <span className={row.highlight ? "text-brand" : "text-foreground/90"}>{row.tool}</span>
                          {row.highlight && (
                            <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ACCENT }}>
                              Best
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-center"><BoolCell val={row.chooseLang} /></td>
                        <td className="px-5 py-3.5 text-center"><BoolCell val={row.independent} /></td>
                        <td className="px-5 py-3.5 text-center text-muted">{row.count}</td>
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
                  q: "Is there a YouTube summarizer that works in multiple languages?",
                  a: "Yes. Veedge supports 8+ output languages including English, French, Spanish, German, Portuguese, Italian, Dutch, and Japanese. The output language is independent from the video's spoken language.",
                },
                {
                  q: "Can I get a YouTube summary in French?",
                  a: "Yes. Select Français as your output language in Veedge before summarizing. The summary will be generated in French regardless of what language the video was recorded in.",
                },
                {
                  q: "Does the video need to be in my language?",
                  a: "No. Veedge's output language is fully independent from the video's spoken language. You can summarize an English video in Spanish, a Japanese video in English, or any combination of supported languages.",
                },
                {
                  q: "Which languages does Veedge support?",
                  a: "Veedge currently supports English, Français, Español, Deutsch, Português, Italiano, Nederlands, and 日本語. Additional languages may be available — check the extension for the current list.",
                },
                {
                  q: "Do I need to set the language every time?",
                  a: "No. Veedge saves your language preference automatically. Set it once and it applies to every video you summarize.",
                },
                {
                  q: "Is it worth using a multilingual summarizer instead of auto-captions?",
                  a: "Yes, for most users. Auto-captions give you a raw transcript in the video's language — you still have to read the full text yourself and understand the original language. Veedge gives you a structured summary in your preferred language, with key takeaways extracted automatically. It is faster, more readable, and does not require you to understand the video's spoken language.",
                },
                {
                  q: "Do summarizing tools work well for multilingual YouTube videos?",
                  a: "Yes. Veedge works on any YouTube video with a transcript, including auto-generated captions in any language. The output language you choose is completely independent — Veedge reads the transcript in whatever language it is, and generates the summary in your language.",
                },
                {
                  q: "Can any extension translate YouTube summaries into English, French, Spanish, or German?",
                  a: "Yes. Veedge generates summaries in English, French (Français), Spanish (Español), German (Deutsch), and 4+ other languages. It is not a translation of the transcript — it generates a natively written summary in your chosen language directly from the video content.",
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
              Related Veedge features
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/veedge/fast-youtube-summary"
                className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20"
              >
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">
                  Fast YouTube summarizer
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden>
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/veedge/youtube-summary-timestamps"
                className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20"
              >
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">
                  Summarize videos with timestamps
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden>
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/veedge"
                className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20 sm:col-span-2"
              >
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">
                  View all Veedge features — AI YouTube Video Summarizer
                </span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden>
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ================== CTA ================== */}
        <section className="px-5 pb-28 sm:px-8 sm:pb-32">
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[28px] bg-cta-gradient px-8 py-16 text-white shadow-pop sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{ background: "radial-gradient(600px 260px at 80% 0%, rgba(255,255,255,0.25), transparent 60%)" }}
            />
            <div className="relative">
              <h2 className="max-w-xl text-[28px] font-semibold leading-[1.1] sm:text-[40px]">
                Summarize any YouTube video in your language.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                Veedge is a free Chrome extension with 8+ output languages.
                The output is always in your language — regardless of the video.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={INSTALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-on-cta focus-ring"
                >
                  Install Veedge on Chrome — free
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <Link href="/veedge" className="btn-ghost-white focus-ring">
                  View all Veedge features
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
