import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/instantrep-%E2%80%94-ai-email-rep/indmflpcjpjgkppkoibeeeaaonnamagb";
const ACCENT = "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)";

export const metadata: Metadata = {
  title: "Professional Email Reply Generator with Tone Control — InstantRep",
  description:
    "Generate professional, formal, friendly, or casual email replies in seconds. InstantRep lets you choose the tone and length for every reply — no templates, no copy-pasting, no account required.",
  keywords: [
    "professional email reply generator",
    "AI formal email reply",
    "friendly email reply AI",
    "email reply tone control",
    "AI write professional email",
    "formal email reply generator Chrome extension",
    "InstantRep tone",
  ],
  openGraph: {
    title: "Professional Email Reply Generator with Tone Control — InstantRep",
    description:
      "Choose Formal, Friendly, Direct, or Casual — InstantRep generates the right reply in seconds. No account required.",
    url: "/instantrep/professional-email-reply-generator",
  },
  alternates: {
    canonical: "https://everytools.ai/instantrep/professional-email-reply-generator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the easiest way to write a professional email reply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way to write a professional email reply is with InstantRep — a Chrome extension. Open it on any email, select Formal tone and your preferred length, and get a professionally written reply in seconds. No templates, no rewriting, no account required.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI generate a formal email reply for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. InstantRep can generate formal email replies automatically. Select Formal as your tone before clicking Generate, and the reply will use professional language appropriate for business correspondence — no matter what language the original email was in.",
      },
    },
    {
      "@type": "Question",
      name: "What tones does InstantRep support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "InstantRep supports four tones: Formal (professional, business-appropriate), Friendly (warm and approachable), Direct (clear and to the point), and Casual (relaxed and conversational). Choose the tone that fits the context — it applies immediately to the generated reply.",
      },
    },
  ],
};

const TONES = [
  {
    name: "Formal",
    emoji: "🎩",
    description: "Professional, business-appropriate language for official correspondence, client communications, and senior stakeholder emails.",
    example: "Thank you for reaching out. I would be pleased to schedule a call at your earliest convenience.",
    when: ["Client emails", "Management replies", "Legal or HR matters", "First contact with new contacts"],
  },
  {
    name: "Friendly",
    emoji: "😊",
    description: "Warm and approachable — maintains professionalism while feeling human. Good for colleagues and ongoing collaborations.",
    example: "Hey, thanks for the update! Happy to jump on a call if that helps — let me know what works for you.",
    when: ["Team communications", "Regular clients", "Collaborative partners", "Follow-ups"],
  },
  {
    name: "Direct",
    emoji: "⚡",
    description: "Clear and to the point. No filler, no padding. Answers the question and nothing more.",
    example: "Available Tuesday 2pm or Thursday morning. Let me know which works.",
    when: ["Quick decisions", "Busy recipients", "Internal coordination", "Time-sensitive threads"],
  },
  {
    name: "Casual",
    emoji: "👋",
    description: "Relaxed and conversational. Works for informal teams, close colleagues, and contexts where warmth matters more than formality.",
    example: "Sounds good to me! Let's do it.",
    when: ["Close colleagues", "Creative teams", "Informal threads", "Slack-style email environments"],
  },
];

export default function ProfessionalEmailReplyGeneratorPage() {
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
              <span className="text-foreground">Professional email reply generator</span>
            </nav>

            <span className="eyebrow">AI email reply with tone control</span>

            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              Generate the right email reply{" "}
              <span className="text-gradient">in the right tone.</span>
            </h1>

            {/* Direct answer */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                Direct answer
              </p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">
                  The easiest way to write a professional email reply is with InstantRep.
                </strong>{" "}
                Choose Formal, Friendly, Direct, or Casual — and get a ready-to-send reply
                in seconds. No templates, no rewriting, no account required.
              </p>
            </div>

            {/* Tone pills */}
            <div className="mt-7 flex flex-wrap gap-2">
              {TONES.map(({ name, emoji }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[14px] font-semibold shadow-soft"
                >
                  <span aria-hidden>{emoji}</span>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================== TONES IN DETAIL ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="tones-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="tones-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Four tones — one click to apply
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-muted">
              The right tone can determine whether an email lands well or creates friction.
              InstantRep gives you explicit control over tone so the reply always fits the context.
            </p>

            <div className="mt-12 space-y-6">
              {TONES.map(({ name, emoji, description, example, when }) => (
                <div key={name} className="rounded-2xl border border-border bg-surface p-6 shadow-elevate sm:p-8">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white text-[18px] shadow-soft"
                      style={{ background: ACCENT }}
                      aria-hidden
                    >
                      {emoji}
                    </span>
                    <h3 className="text-[19px] font-semibold tracking-tight">{name}</h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-[1.7] text-muted">{description}</p>
                  <div className="mt-5 rounded-xl border border-border bg-white px-5 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong mb-2">Example reply</p>
                    <p className="text-[14.5px] leading-relaxed text-foreground/80 italic">"{example}"</p>
                  </div>
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong mb-3">Best for</p>
                    <div className="flex flex-wrap gap-2">
                      {when.map((w) => (
                        <span key={w} className="rounded-full border border-border bg-white px-3 py-1 text-[12.5px] text-muted-strong">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== HOW IT WORKS ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="how-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="how-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              How to generate a professional email reply in seconds
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-4">
              {[
                { step: "01", title: "Open any email", body: "Navigate to any email in Gmail or Outlook. Click the InstantRep icon in your browser toolbar." },
                { step: "02", title: "Choose your tone", body: "Select Formal, Friendly, Direct, or Casual — whichever fits the conversation." },
                { step: "03", title: "Set length", body: "Choose Short for a quick acknowledgment, Standard for a complete reply, or Long for a detailed response." },
                { step: "04", title: "Generate and send", body: "Click Generate. Your reply appears in seconds. Copy it or paste it directly into your reply composer." },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex flex-col">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-[13px] font-bold text-white shadow-soft"
                    style={{ background: ACCENT }}
                    aria-hidden
                  >
                    {step}
                  </div>
                  <h3 className="mt-5 text-[16px] font-semibold tracking-tight">{title}</h3>
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
              InstantRep vs. other ways to write professional emails
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Method</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Tone control</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Length control</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">No account</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Time to reply</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: "InstantRep", tone: true, length: true, noAccount: true, time: "< 5 sec", highlight: true },
                    { method: "Writing manually", tone: true, length: true, noAccount: true, time: "5–15 min", highlight: false },
                    { method: "ChatGPT (manual)", tone: "manual prompt", length: "manual prompt", noAccount: false, time: "2–4 min", highlight: false },
                    { method: "Gmail Smart Reply", tone: false, length: false, noAccount: true, time: "instant", highlight: false },
                    { method: "Grammarly", tone: "partial", length: false, noAccount: false, time: "varies", highlight: false },
                  ].map((row) => {
                    const Cell = ({ val }: { val: boolean | string }) =>
                      val === true ? (
                        <span className="inline-flex items-center justify-center text-emerald-600">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="Yes"><path d="M20 6 9 17l-5-5" /></svg>
                        </span>
                      ) : val === false ? (
                        <span className="inline-flex items-center justify-center text-muted/50">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-label="No"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        </span>
                      ) : (
                        <span className="text-[12px] text-muted">{val}</span>
                      );
                    return (
                      <tr key={row.method} className={row.highlight ? "bg-brand-soft/40" : "odd:bg-white even:bg-surface/30"}>
                        <td className="px-5 py-3.5 font-semibold">
                          <span className={row.highlight ? "text-brand" : "text-foreground/90"}>{row.method}</span>
                          {row.highlight && (
                            <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ACCENT }}>Recommended</span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.tone} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.length} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.noAccount} /></td>
                        <td className="px-5 py-3.5 text-center font-medium text-muted">{row.time}</td>
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
                  q: "What is the easiest way to write a professional email reply?",
                  a: "The easiest way is InstantRep — a Chrome extension. Open it on any email, select Formal tone and your preferred length, and get a professional reply in seconds. No account, no templates, no rewriting.",
                },
                {
                  q: "Can AI write a formal email reply for me?",
                  a: "Yes. Select Formal in InstantRep's tone selector and click Generate. The reply will use professional, business-appropriate language without any filler or casual phrasing.",
                },
                {
                  q: "What if I want a friendly reply instead of a formal one?",
                  a: "Just switch to Friendly tone before generating. InstantRep generates warm, approachable replies that maintain professionalism while feeling more human.",
                },
                {
                  q: "Can I control how long the reply is?",
                  a: "Yes. InstantRep has three length settings: Short (a quick, concise reply), Standard (a complete, natural response), and Long (a detailed reply covering all points). Length and tone are independent — combine them freely.",
                },
                {
                  q: "Does tone work in all languages?",
                  a: "Yes. Tone applies independently of output language. You can generate a Formal reply in French, a Casual reply in Spanish, or a Direct reply in German — any combination of language and tone.",
                },
                {
                  q: "Do I need an account to use InstantRep?",
                  a: "No. InstantRep requires no registration or login. Install it from the Chrome Web Store and start generating replies immediately.",
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
              <Link href="/instantrep/multilingual-email-reply" className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">Reply in any language</span>
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
                Generate professional email replies in seconds.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                Formal, friendly, direct, or casual — InstantRep generates the right reply
                with one click. Free Chrome extension, no account required.
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
