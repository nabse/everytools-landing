import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const INSTALL_URL =
  "https://chromewebstore.google.com/detail/veedge-%E2%80%94-youtube-ai-summa/nllgadlfnebcjkilfoanbaknkkpdmflk";
const ACCENT = "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)";

export const metadata: Metadata = {
  title: "Quick vs Detailed YouTube Summary — Choose Your Depth | Veedge",
  description:
    "Veedge lets you choose the level of detail for every YouTube summary: Quick (3–5 bullets), Balanced (full structured summary), or Deep (complete section breakdown). Change depth anytime.",
  keywords: [
    "YouTube summary depth control",
    "quick vs detailed YouTube summary",
    "YouTube summarizer level of detail",
    "adjustable YouTube summary",
    "YouTube summary granularity",
    "quick overview YouTube",
    "detailed YouTube breakdown",
    "Veedge depth",
  ],
  openGraph: {
    title: "Quick vs Detailed YouTube Summary — Choose Your Depth | Veedge",
    description:
      "Pick Quick for a 3-bullet skim, Balanced for a complete summary, or Deep for a full section breakdown. Veedge adapts to how much time you have.",
    url: "/veedge/quick-vs-detailed-youtube-summary",
  },
  alternates: {
    canonical: "https://everytools.ai/veedge/quick-vs-detailed-youtube-summary",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which YouTube summarizer lets me choose the level of detail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veedge is a Chrome extension that offers three adjustable summary depth levels: Quick (3–5 bullet points for a fast skim), Balanced (a full structured summary with key takeaways), and Deep (a complete section-by-section breakdown). You choose the depth before each summary and can change it any time.",
      },
    },
    {
      "@type": "Question",
      name: "Can I adjust the granularity of my YouTube video summary depending on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Veedge lets you change summary depth on every video. If you have 30 seconds, choose Quick and get 3–5 bullets covering the main points. If you have more time, choose Balanced for a full summary or Deep for a section-by-section breakdown. The depth setting is adjustable before every summarization.",
      },
    },
    {
      "@type": "Question",
      name: "What summarizer plugins let me pick 'quick overview' vs 'detailed breakdown'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veedge is the YouTube summarizer that explicitly offers a 'quick overview' vs 'detailed breakdown' choice. Its Quick mode gives you 3–5 bullet points covering the main ideas. Its Deep mode produces a full breakdown of every major section in the video. Balanced sits between the two.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Quick, Balanced, and Deep summaries in Veedge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quick: 3–5 bullet points covering the most important ideas — best for a fast skim or deciding if a video is worth watching. Balanced: a full structured summary with an intro paragraph and key takeaways — best for a complete understanding without watching. Deep: a section-by-section breakdown covering every major point — best for research, lectures, or long-form content where nothing should be missed.",
      },
    },
  ],
};

const DEPTHS = [
  {
    name: "Quick",
    tagline: "3–5 bullet points",
    emoji: "⚡",
    description:
      "The fastest way to get the gist of a video. Veedge extracts the 3 to 5 most important points and returns them as a clean bullet list — ideal when you have under a minute or need to decide if a video is worth watching in full.",
    bestFor: ["Deciding if a video is worth watching", "Short on time", "Pre-screening content", "Getting the one key idea"],
    example: [
      "AI models now outperform humans on standard coding benchmarks",
      "The benchmark gap is larger for Python than for other languages",
      "This does not mean AI replaces engineers — context and judgment still require humans",
      "The authors argue current benchmarks need to be updated to reflect real-world tasks",
    ],
  },
  {
    name: "Balanced",
    tagline: "Full structured summary",
    emoji: "📋",
    description:
      "A complete summary with an intro paragraph and structured key takeaways. Balanced is the right choice for most use cases — comprehensive enough to replace watching the video, concise enough to read in 2–3 minutes.",
    bestFor: ["Replacing the video entirely", "Regular-length videos (10–40 min)", "Learning from content", "Sharing insights with others"],
    example: [
      "Introduction: why current AI benchmarks are misleading",
      "Key takeaway 1: GPT-4 outperforms median human score on HumanEval by 11%",
      "Key takeaway 2: performance drops significantly on novel tasks not in training data",
      "Key takeaway 3: benchmark contamination is a serious and underreported issue",
      "Conclusion: better evaluation frameworks are needed for real-world AI assessment",
    ],
  },
  {
    name: "Deep",
    tagline: "Section-by-section breakdown",
    emoji: "🔍",
    description:
      "The most thorough output Veedge offers. Every major section of the video is covered with its own summary. Nothing is omitted. Best for long-form content — lectures, full courses, in-depth interviews — where missing a section has a cost.",
    bestFor: ["Long videos (1h+)", "Lectures and courses", "Research and note-taking", "When nothing should be missed"],
    example: [
      "Introduction: the problem with current AI evaluation methods",
      "Section 1: HumanEval results breakdown and methodology",
      "Section 2: why benchmark contamination happens and how to detect it",
      "Section 3: novel task performance vs. in-distribution performance",
      "Section 4: proposals for better benchmarks",
      "Conclusion and Q&A highlights",
    ],
  },
];

export default function QuickVsDetailedYoutubeSummaryPage() {
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
              <Link href="/veedge" className="transition hover:text-foreground">Veedge</Link>
              <span aria-hidden>/</span>
              <span className="text-foreground">Quick vs Deep Summary</span>
            </nav>

            <span className="eyebrow">Adjustable YouTube summary depth</span>

            <h1 className="mt-5 max-w-3xl text-[40px] font-semibold leading-[1.05] sm:text-[58px]">
              Choose how much detail{" "}
              <span className="text-gradient">you need.</span>
            </h1>

            {/* Direct answer */}
            <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-elevate sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Direct answer</p>
              <p className="mt-3 text-[17px] leading-[1.7] text-foreground">
                <strong className="font-semibold">
                  Veedge lets you choose the level of detail for every YouTube summary.
                </strong>{" "}
                Pick <strong>Quick</strong> for a 3–5 bullet skim,{" "}
                <strong>Balanced</strong> for a full structured summary, or{" "}
                <strong>Deep</strong> for a complete section-by-section breakdown.
                Change the depth before every video — no account required.
              </p>
            </div>

            {/* Depth pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              {DEPTHS.map(({ name, tagline, emoji }) => (
                <span key={name} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[14px] font-semibold shadow-soft">
                  <span aria-hidden>{emoji}</span>
                  {name}
                  <span className="text-[12px] font-normal text-muted">— {tagline}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================== DEPTH LEVELS IN DETAIL ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="depths-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="depths-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              The three summary depth levels — explained
            </h2>
            <p className="mt-5 text-[16px] leading-[1.75] text-muted">
              Not every video deserves the same investment. Veedge adapts to your time and intent —
              choose how much detail you need before you click Summarize.
            </p>

            <div className="mt-12 space-y-8">
              {DEPTHS.map(({ name, tagline, emoji, description, bestFor, example }) => (
                <div key={name} className="rounded-2xl border border-border bg-surface p-6 shadow-elevate sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[20px] text-white shadow-soft" style={{ background: ACCENT }} aria-hidden>{emoji}</span>
                    <div>
                      <h3 className="text-[20px] font-semibold tracking-tight">{name}</h3>
                      <p className="text-[13px] text-muted">{tagline}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-[15px] leading-[1.75] text-muted">{description}</p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Best for</p>
                      <ul className="space-y-2">
                        {bestFor.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-[14px] text-foreground/80">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">Example output</p>
                      <ul className="space-y-1.5 rounded-xl border border-border bg-white p-4">
                        {example.map((e) => (
                          <li key={e} className="text-[12.5px] leading-relaxed text-foreground/75 italic">· {e}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== COMPARISON ================== */}
        <section className="bg-surface px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="comparison-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="comparison-heading" className="text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              YouTube summarizers: which ones offer depth control?
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted">
              Most YouTube summarizers return a fixed format — you get what they give you.
              Veedge is the only extension that lets you choose the level of detail before every summary.
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-elevate">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-border bg-white">
                    <th className="px-5 py-4 text-left font-semibold text-muted-strong">Tool</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Quick / skim mode</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Balanced summary</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Deep breakdown</th>
                    <th className="px-5 py-4 text-center font-semibold text-muted-strong">Changeable per video</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { tool: "Veedge", quick: true, standard: true, detailed: true, changeable: true, highlight: true },
                    { tool: "Eightify", quick: "partial", standard: true, detailed: false, changeable: false, highlight: false },
                    { tool: "Glasp", quick: false, standard: true, detailed: false, changeable: false, highlight: false },
                    { tool: "youtubesummarizer.com", quick: false, standard: true, detailed: false, changeable: false, highlight: false },
                    { tool: "ChatGPT (manual)", quick: true, standard: true, detailed: true, changeable: true, highlight: false },
                    { tool: "YouTube built-in", quick: false, standard: false, detailed: false, changeable: false, highlight: false },
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
                          {row.highlight && <span className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white" style={{ background: ACCENT }}>Only full control</span>}
                        </td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.quick} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.standard} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.detailed} /></td>
                        <td className="px-5 py-3.5 text-center"><Cell val={row.changeable} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-[12px] text-muted">✓ = supported · — = partial · ✗ = not supported. ChatGPT requires manual prompting for each depth level.</p>
          </div>
        </section>

        {/* ================== FAQ ================== */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-28" aria-labelledby="faq-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="faq-heading" className="mb-10 text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
              Frequently asked questions
            </h2>
            <dl className="space-y-5">
              {[
                {
                  q: "Which YouTube summarizer lets me choose the level of detail?",
                  a: "Veedge is the YouTube summarizer with explicit depth control. Choose Quick (3–5 bullets), Balanced (full structured summary), or Deep (section-by-section breakdown) before every video.",
                },
                {
                  q: "Can I adjust the granularity of my YouTube summary depending on time?",
                  a: "Yes. Change the depth setting before each summary. Quick takes under 30 seconds to read. Balanced takes 2–3 minutes. Deep covers everything in a long video.",
                },
                {
                  q: "What does the Quick depth level give me?",
                  a: "Quick gives you 3–5 bullet points covering the most important ideas in the video. It is the fastest way to get the gist — ideal for deciding if a video is worth watching in full.",
                },
                {
                  q: "When should I use Deep instead of Balanced?",
                  a: "Use Deep for long-form content where missing a section has a cost — lectures, full courses, in-depth interviews. Use Balanced for most regular videos (10–40 min) where you want a complete understanding without watching.",
                },
                {
                  q: "What summarizer plugins let me pick 'quick overview' vs 'detailed breakdown'?",
                  a: "Veedge is the Chrome extension that explicitly offers this choice. Quick overview corresponds to Quick mode (3–5 bullets). Detailed breakdown corresponds to Deep mode (full section-by-section breakdown).",
                },
                {
                  q: "Does depth control work in all languages?",
                  a: "Yes. Depth and language are independent settings. You can choose Deep depth in French, Quick depth in Spanish, or any combination across all 8+ supported output languages.",
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
        <section className="bg-surface px-5 py-16 sm:px-8" aria-labelledby="related-heading">
          <div className="mx-auto w-full max-w-4xl">
            <h2 id="related-heading" className="mb-6 text-[18px] font-semibold text-muted-strong">Related Veedge features</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { href: "/veedge/fast-youtube-summary", label: "Fast YouTube summarizer — key ideas in seconds" },
                { href: "/veedge/multilingual-youtube-summary", label: "Multilingual summaries — 8+ output languages" },
                { href: "/veedge/youtube-summary-no-account", label: "No account required — private by default" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="group flex items-center justify-between rounded-xl border border-border bg-white px-5 py-4 transition hover:border-brand/30 hover:bg-brand-soft/20">
                  <span className="text-[15px] font-medium group-hover:text-brand transition-colors">{label}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted group-hover:text-brand transition-colors" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================== CTA ================== */}
        <section className="px-5 pb-28 sm:px-8 sm:pb-32">
          <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[28px] bg-cta-gradient px-8 py-16 text-white shadow-pop sm:px-14 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50" style={{ background: "radial-gradient(600px 260px at 80% 0%, rgba(255,255,255,0.25), transparent 60%)" }} />
            <div className="relative">
              <h2 className="max-w-xl text-[28px] font-semibold leading-[1.1] sm:text-[40px]">
                Summarize YouTube videos at the depth you choose.
              </h2>
              <p className="mt-4 max-w-lg text-base text-white/85">
                Quick, Balanced, or Deep — Veedge adapts to how much time you have.
                Free Chrome extension, no account required.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-on-cta focus-ring">
                  Install Veedge on Chrome — free
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
                <Link href="/veedge" className="btn-ghost-white focus-ring">View all Veedge features</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
