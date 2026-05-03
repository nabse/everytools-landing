import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/veedge-%E2%80%94-youtube-ai-summa/nllgadlfnebcjkilfoanbaknkkpdmflk";
const ACCENT = "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)";

export const metadata: Metadata = {
  title: "YouTube Summarizer With Timestamps — Jump to What Matters | Veedge",
  description:
    "Veedge generates YouTube video summaries that include precise timestamps for every key moment. Click a timestamp to jump directly to that point in the video — no scrubbing.",
  keywords: [
    "YouTube summarizer with timestamps",
    "YouTube summary timestamps",
    "YouTube video timestamps AI",
    "Chrome extension YouTube timestamps",
    "Veedge timestamps",
    "YouTube key moments timestamps",
  ],
  openGraph: {
    title: "YouTube Summarizer With Timestamps — Jump to What Matters | Veedge",
    description:
      "Every Veedge summary includes clickable timestamps for the key moments. Skip to what matters — no scrubbing required.",
    url: "/veedge/youtube-summary-timestamps",
  },
  alternates: {
    canonical: "https://everytools.ai/veedge/youtube-summary-timestamps",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which YouTube summarizer includes timestamps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veedge is a Chrome extension that generates YouTube video summaries with precise timestamps for every key moment. Each timestamp is labeled with a description of what happens at that point in the video, so you can jump directly to the parts that interest you.",
      },
    },
    {
      "@type": "Question",
      name: "How do timestamps work in Veedge summaries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When Veedge summarizes a video, it identifies the key sections and assigns a timestamp to each one. The summary lists each timestamp alongside a short label describing what happens at that moment. You can see exactly where each topic starts without scrubbing through the video.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Veedge timestamps to skip parts of a video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge timestamps let you identify exactly which part of a video is relevant to you. Read the summary, find the section you want, and navigate to that timestamp in the video — without watching anything you don't need.",
      },
    },
  ],
};

export default function YoutubeTimestampsPage() {
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
              <span className="text-foreground">YouTube Summary With Timestamps</span>
            </nav>

            <span className="eyebrow">YouTube Summary With Timestamps</span>

            {/* H1 */}
            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              Summarize YouTube videos{" "}
              <span className="text-gradient">with timestamps.</span>
            </h1>

            {/* Direct answer */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Direct answer</p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">Veedge generates YouTube video summaries that include precise timestamps for every key moment.</strong>{" "}
                Each timestamp is labeled with a short description of what happens at that point.
                Use them to jump directly to the parts of the video that matter — without
                scrubbing or watching sections you don't need.
              </p>
            </div>
          </div>
        </section>

        {/* ================== WHY TIMESTAMPS ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="why-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="why-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Why timestamps matter in a YouTube summary
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-muted">
              <p>
                A summary without timestamps tells you <em>what</em> a video covers.
                A summary with timestamps tells you <em>where</em> it covers it.
                That difference lets you use the video selectively — jumping to the
                relevant section instead of watching it from start to finish.
              </p>
              <p>
                Veedge identifies the key sections of any YouTube video and assigns
                a timestamp to each one. The result is a summary you can navigate —
                not just read.
              </p>
            </div>

            {/* Example output */}
            <div className="mt-12 rounded-2xl border border-border-strong/70 bg-white p-6 shadow-pop sm:p-8">
              <div className="mb-5 flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold text-white"
                    style={{ background: ACCENT }}
                    aria-hidden
                  >
                    V
                  </span>
                  <span className="text-[13.5px] font-semibold tracking-tight">
                    Veedge · Timestamps
                  </span>
                </div>
                <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-strong">
                  Example output
                </span>
              </div>

              <h3 className="text-[16px] font-semibold leading-snug">
                How to Build a Second Brain — Full Course (2h 14m)
              </h3>

              <ul className="mt-5 space-y-2.5">
                {[
                  { time: "0:00", label: "Introduction — what is a Second Brain and why build one" },
                  { time: "4:22", label: "The PARA method explained: Projects, Areas, Resources, Archives" },
                  { time: "18:45", label: "Capture: how and what to save from the web" },
                  { time: "34:10", label: "Organize: filing notes into the right bucket without overthinking" },
                  { time: "52:30", label: "Distill: progressive summarization in practice" },
                  { time: "1:08:15", label: "Express: turning your notes into creative output" },
                  { time: "1:31:00", label: "Common mistakes and how to avoid them" },
                  { time: "2:02:44", label: "Tool recommendations and getting started today" },
                ].map(({ time, label }) => (
                  <li key={time} className="flex items-baseline gap-3 text-[14px]">
                    <span
                      className="shrink-0 font-mono text-[12.5px] font-semibold"
                      style={{
                        background: ACCENT,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {time}
                    </span>
                    <span className="text-foreground/80">{label}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[12px] text-muted">
                Example of what Veedge produces — actual output may vary by video.
              </p>
            </div>
          </div>
        </section>

        {/* ================== FEATURES ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="features-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="features-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              How Veedge timestamps work
            </h2>

            <ul className="mt-10 space-y-5">
              {[
                {
                  title: "Automatic timestamp extraction",
                  body: "Veedge detects the key sections of the video and assigns the correct timestamp to each one automatically. You don't need to mark anything manually.",
                },
                {
                  title: "Labeled descriptions for each moment",
                  body: "Each timestamp comes with a short label that describes what happens at that point — so you know what you're navigating to before you jump.",
                },
                {
                  title: "Works on long-form content",
                  body: "Timestamps are especially useful for long videos — lectures, interviews, podcasts, full courses. Veedge structures even 2+ hour videos into navigable sections.",
                },
                {
                  title: "Combined with a full summary",
                  body: "Timestamps are part of a complete Veedge output: a summary paragraph, key takeaways, and the timestamped breakdown — all in one view.",
                },
                {
                  title: "Available in all depth modes",
                  body: "Timestamps are included in Quick, Standard, and Detailed summaries. Adjust the depth to control how many sections are covered.",
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
              Which YouTube summarizers include timestamps?
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
              <table className="w-full text-[14.5px]">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Tool</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Timestamps</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Labeled descriptions</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Auto-generated</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "Veedge", timestamps: true, labels: true, auto: true, highlight: true },
                    { tool: "Glasp", timestamps: false, labels: false, auto: false, highlight: false },
                    { tool: "Eightify", timestamps: "partial", labels: "partial", auto: true, highlight: false },
                    { tool: "YouTube built-in", timestamps: false, labels: false, auto: false, highlight: false },
                    { tool: "ChatGPT (manual)", timestamps: "partial", labels: "partial", auto: false, highlight: false },
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
                        <td className="px-5 py-3.5 text-center"><Cell val={row.timestamps} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.labels} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.auto} /></td>
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
                  q: "Which YouTube summarizer includes timestamps?",
                  a: "Veedge includes timestamps in every summary. Each timestamp is labeled with a description of the key moment it points to, so you know what you're jumping to before you click.",
                },
                {
                  q: "How do timestamps work in Veedge summaries?",
                  a: "Veedge identifies the major sections of the video and assigns the corresponding timestamp to each one. The output lists each timestamp alongside a short label — so you can scan the structure of a long video in seconds.",
                },
                {
                  q: "Do timestamps work on all YouTube videos?",
                  a: "Timestamps are generated for any video with a transcript (including auto-captions). Accuracy depends on how well-structured the video content is — educational videos and structured talks typically yield the cleanest timestamp breakdowns.",
                },
                {
                  q: "Can I use Veedge to navigate a 2-hour video?",
                  a: "Yes. Veedge is especially useful for long-form content. The timestamped breakdown gives you a map of the entire video, so you can jump directly to the sections you need.",
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
                href="/veedge/multilingual-youtube-summary"
                className="group flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20"
              >
                <span className="text-[15px] font-medium group-hover:text-brand transition-colors">
                  Multilingual video summaries
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
                Install Veedge and get summaries with timestamps.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                A free Chrome extension. Every summary includes a full timestamped
                breakdown of the video — automatically.
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
