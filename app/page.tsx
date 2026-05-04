import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ToolCard from "./components/ToolCard";
import { tools } from "./lib/tools";

const steps = [
  {
    title: "Pick the right extension",
    body: "Choose the EveryTools extension that matches your task — emails, videos, webpages, or buying decisions.",
  },
  {
    title: "Set it to your needs",
    body: "Pick your output language, choose how detailed you want the result, and — where it matters — set the style.",
  },
  {
    title: "Get a result you can use",
    body: "A clear output, adapted to your context. Copy it, send it, save it, or check it off.",
  },
];

const useCases = [
  {
    audience: "Busy professionals",
    body: "Reply to emails, skim reports, and leave meetings with actions — in the language and level of detail that fit the moment.",
  },
  {
    audience: "Students & learners",
    body: "Summarize lectures, decode dense readings, and turn sources into notes — in your preferred language, at the depth you need.",
  },
  {
    audience: "Creators & founders",
    body: "Work across languages with clients and audiences, and adapt every output to the tone the moment calls for.",
  },
  {
    audience: "Everyday browsers",
    body: "When a page, video, or inbox feels like too much — one click, adapted to your needs, and it's handled.",
  },
];

function BrowserMockup() {
  return (
    <div className="relative mx-auto mt-20 w-full max-w-3xl">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-24 -top-16 bottom-[-40px] blur-3xl"
        style={{
          background:
            "radial-gradient(700px 320px at 50% 20%, rgba(124, 58, 237, 0.22), transparent 65%), radial-gradient(500px 260px at 20% 80%, rgba(79, 70, 229, 0.18), transparent 60%)",
        }}
      />

      {/* Browser window */}
      <div className="relative overflow-hidden rounded-[22px] border border-border-strong/80 bg-white shadow-pop float-slow">
        {/* Chrome */}
        <div className="flex items-center gap-3 border-b border-border/80 bg-surface px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
            <span className="h-[11px] w-[11px] rounded-full bg-[#28c840]" />
          </div>

          <div className="hidden items-center gap-1 text-muted/70 sm:flex">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
          </div>

          <div className="flex flex-1 items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-[11.5px] text-muted ring-1 ring-border">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
              aria-hidden
            >
              <rect x="4" y="11" width="16" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
            <span className="truncate">everytools.ai</span>
          </div>

          {/* Pinned extension icons (the real message: 4 separate extensions) */}
          <div className="flex items-center gap-1.5">
            {tools.map((t) => (
              <span
                key={t.slug}
                className="flex h-7 w-7 items-center justify-center rounded-[8px] text-white shadow-soft ring-1 ring-white/30"
                style={{ background: t.accent }}
                aria-hidden
                title={t.name}
              >
                <span className="[&_svg]:h-[14px] [&_svg]:w-[14px]">
                  {t.icon}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Body — extensions listed as 4 standalone cards */}
        <div className="bg-white px-5 py-5 sm:px-6 sm:py-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
              4 extensions pinned
            </p>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All ready
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {tools.map((t) => (
              <div
                key={t.slug}
                className="flex flex-col rounded-xl border border-border/80 bg-white p-3 shadow-soft"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-[10px] text-white ring-1 ring-white/30"
                  style={{ background: t.accent }}
                  aria-hidden
                >
                  <span className="[&_svg]:h-[18px] [&_svg]:w-[18px]">
                    {t.icon}
                  </span>
                </span>
                <p className="mt-3 text-[13px] font-semibold tracking-tight">
                  {t.name}
                </p>
                <p className="mt-0.5 text-[11px] text-muted">Extension</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main className="flex-1">
        {/* ================== HERO ================== */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div aria-hidden className="absolute inset-0 bg-grid" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:pt-32">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3.5 py-1.5 text-[12px] font-medium text-muted-strong shadow-soft backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                Flexible, multilingual AI browser extensions
              </span>

              <h1 className="mt-7 max-w-4xl text-[44px] font-semibold leading-[1.03] sm:text-[72px] lg:text-[84px]">
                One task.{" "}
                <span className="text-gradient">Your way.</span>
              </h1>

              <p className="mt-7 max-w-xl text-[17px] leading-[1.65] text-muted sm:max-w-2xl sm:text-xl">
                EveryTools is a suite of four AI browser extensions —{" "}
                <span className="text-foreground">InstantRep</span>,{" "}
                <span className="text-foreground">Veedge</span>,{" "}
                <span className="text-foreground">ExplainIt</span>, and{" "}
                <span className="text-foreground">WorthIt</span>. AI tools
                that understand what you&apos;re looking at — and act
                instantly. Multilingual and customizable — choose your
                language, the level of detail, and the style that fits the
                moment.
              </p>

              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                <a href="#extensions" className="btn-primary focus-ring">
                  Explore the extensions
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <Link href="#how-it-works" className="btn-secondary focus-ring">
                  How it works
                </Link>
              </div>

              <p className="mt-6 text-[12.5px] text-muted">
                Multilingual · Customizable · Install only the ones you need
              </p>
            </div>

            {/* Visual mockup */}
            <BrowserMockup />
          </div>
        </section>

        {/* ================== WHAT IS ================== */}
        <section className="border-y border-border/60 bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
            <div className="grid gap-14 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <span className="eyebrow">What is EveryTools</span>
                <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[44px]">
                  Flexible by design.
                  <br />
                  <span className="text-muted">
                    Customizable by default.
                  </span>
                </h2>
              </div>
              <div className="flex flex-col justify-center gap-5 text-[17px] leading-[1.7] text-muted md:col-span-7 md:text-[18px]">
                <p>
                  EveryTools brings together four focused AI browser
                  extensions — InstantRep, Veedge, ExplainIt, and WorthIt —
                  each designed for one common online task.
                </p>
                <p>
                  Every extension is multilingual and fully customizable. You
                  choose the output language, the level of detail, and — when
                  it matters — the style. One job each, adapted to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================== EXTENSIONS GRID ================== */}
        <section id="extensions" className="bg-surface">
          <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="mb-14 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-xl">
                <span className="eyebrow">The extensions</span>
                <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[44px]">
                  Four extensions.{" "}
                  <span className="text-muted">All adapted to you.</span>
                </h2>
              </div>
              <p className="max-w-md text-[15px] leading-relaxed text-muted">
                Each extension runs on the same principle: pick your language,
                choose how detailed you want the result, and — where it
                matters — adjust the style.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
              {tools.map((t) => (
                <ToolCard
                  key={t.slug}
                  name={t.name}
                  tagline={t.tagline}
                  description={t.description}
                  href={t.href}
                  icon={t.icon}
                  accent={t.accent}
                  comingSoon={t.comingSoon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================== VEEDGE SPOTLIGHT ================== */}
        <section className="bg-white border-y border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
              <div className="lg:col-span-6">
                <span className="eyebrow">Featured extension</span>
                <h2 className="mt-5 text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
                  Veedge —{" "}
                  <span className="text-gradient">AI YouTube Summarizer</span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-muted">
                  Veedge summarizes any YouTube video in seconds — key ideas
                  and takeaways in your preferred language, at the level of
                  detail you choose.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    { href: "/veedge/fast-youtube-summary", label: "Fast YouTube summarizer", sub: "Get key ideas in under 10 seconds" },
                    { href: "/veedge/quick-vs-detailed-youtube-summary", label: "Adjustable summary depth", sub: "Quick overview or full detailed breakdown" },
                    { href: "/veedge/multilingual-youtube-summary", label: "Multilingual video summaries", sub: "Summaries in your language, for any video" },
                  ].map(({ href, label, sub }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="group flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition hover:border-brand/30 hover:bg-brand-soft/20"
                      >
                        <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cta-gradient text-white">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden>
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                        <span>
                          <span className="block text-[14.5px] font-semibold text-foreground group-hover:text-brand transition-colors">{label}</span>
                          <span className="block text-[13px] text-muted mt-0.5">{sub}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Link href="/veedge" className="btn-primary focus-ring inline-flex">
                    Explore Veedge
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Mini summary card preview */}
              <div className="lg:col-span-6">
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-8 opacity-[0.14] blur-3xl"
                    style={{ background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)" }}
                  />
                  <div className="relative rounded-[20px] border border-border-strong/70 bg-white p-6 shadow-pop">
                    <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                          style={{ background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)" }}
                          aria-hidden
                        >V</span>
                        <span className="text-[13px] font-semibold">Veedge · Summary</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-strong">Quick · EN</span>
                        <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-strong">Example</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-muted">youtube.com · 14 min</p>
                    <p className="mt-1 text-[14px] font-semibold leading-snug">The Psychology of Habit Formation</p>
                    <p className="mt-2 text-[13.5px] leading-[1.7] text-muted">
                      Habits form through a cue–routine–reward loop. Identity-based habits
                      outlast outcome-based ones — become the person, not just the goal.
                    </p>
                    <ul className="mt-4 space-y-2">
                      {[
                        "The habit loop: cue, routine, reward — and how to hack it",
                        "Identity-based habits outlast goal-based ones",
                        "Environmental design beats willpower every time",
                        "Start smaller than you think you need to",
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2 text-[12.5px]">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#6366f1]" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
                          <span className="text-muted">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== WORTHIT SPOTLIGHT ================== */}
        <section className="bg-surface border-y border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">

              {/* Verdict card preview */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 opacity-[0.12] blur-3xl"
                    style={{ background: "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)" }}
                  />
                  <div className="relative rounded-[20px] border border-border-strong/70 bg-white p-6 shadow-pop">
                    <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-md text-white"
                          style={{ background: "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)" }}
                          aria-hidden
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                            <path fillRule="evenodd" d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.7 7.7a1 1 0 0 0-1.4-1.4L10 13.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-[13px] font-semibold">WorthIt · Verdict</span>
                      </div>
                      <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-strong">Example</span>
                    </div>
                    <p className="text-[12px] text-muted">Analyzed: Notion AI — Plus plan</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-[13px] font-bold text-emerald-800">
                        Worth it
                      </span>
                      <span className="text-[12px] text-muted">for daily Notion users</span>
                    </div>
                    <p className="mt-3 text-[13.5px] leading-[1.65] text-foreground/80">
                      At $16/seat, it's justified if your team lives in Notion already.
                      The AI saves more time than it costs — for new users, the learning
                      curve outweighs the benefit.
                    </p>
                    <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" aria-hidden>
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      <p className="text-[12px] text-amber-800"><strong className="font-semibold">Watch out:</strong> Annual billing required for this rate.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="eyebrow">Featured extension</span>
                <h2 className="mt-5 text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
                  WorthIt —{" "}
                  <span className="text-gradient">AI Decision Assistant</span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-muted">
                  Open WorthIt on any pricing page and get an instant AI verdict:
                  Worth it, Not worth it, or Depends — based on what you actually need.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    { href: "/worthit/is-this-worth-it-tool", label: "AI tool that tells you if something is worth it", sub: "Direct verdict, not more information to process" },
                    { href: "/worthit/pricing-verdict-tool", label: "Pricing verdict tool", sub: "Instant analysis with pros, cons, and hidden cost flags" },
                    { href: "/worthit/saas-worth-it-decision", label: "SaaS decision assistant", sub: "Evaluate any SaaS pricing plan before you commit" },
                  ].map(({ href, label, sub }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="group flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3.5 transition hover:border-brand/30 hover:bg-brand-soft/20"
                      >
                        <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cta-gradient text-white">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden>
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                        <span>
                          <span className="block text-[14.5px] font-semibold text-foreground group-hover:text-brand transition-colors">{label}</span>
                          <span className="block text-[13px] text-muted mt-0.5">{sub}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Link href="/worthit" className="btn-primary focus-ring inline-flex">
                    Explore WorthIt
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================== INSTANTREP SPOTLIGHT ================== */}
        <section className="bg-white border-y border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
              {/* Text */}
              <div className="lg:col-span-6">
                <span className="eyebrow">Featured extension</span>
                <h2 className="mt-5 text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
                  InstantRep —{" "}
                  <span className="text-gradient">AI Email Reply Assistant</span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-muted">
                  Open InstantRep on any email and get a natural, ready-to-send reply in
                  seconds — in the tone that fits the conversation, in your language.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    { href: "/instantrep/professional-email-reply-generator", label: "Tone selection", sub: "Professional, friendly, direct, or casual — match the moment" },
                    { href: "/instantrep/multilingual-email-reply", label: "Multilingual replies", sub: "Reply in any language, whatever the email was written in" },
                    { href: "/instantrep/ai-email-reply-no-account", label: "No account required", sub: "Install and reply — no signup, no data stored" },
                  ].map(({ href, label, sub }) => (
                    <li key={href}>
                      <Link href={href} className="group flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition hover:border-brand/30 hover:bg-brand-soft/20">
                        <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cta-gradient text-white">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </span>
                        <span>
                          <span className="block text-[14.5px] font-semibold text-foreground group-hover:text-brand transition-colors">{label}</span>
                          <span className="block text-[13px] text-muted mt-0.5">{sub}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Link href="/instantrep" className="btn-primary focus-ring inline-flex">
                    Explore InstantRep
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              {/* Preview card */}
              <div className="lg:col-span-6">
                <div className="relative">
                  <div aria-hidden className="pointer-events-none absolute -inset-8 opacity-[0.14] blur-3xl" style={{ background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)" }} />
                  <div className="relative rounded-[20px] border border-border-strong/70 bg-white p-6 shadow-pop">
                    <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)" }} aria-hidden>
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden><path d="M13 2 4 14h7l-1 8 10-12h-7z" /></svg>
                        </span>
                        <span className="text-[13px] font-semibold">InstantRep · Reply</span>
                      </div>
                      <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-strong">Example</span>
                    </div>
                    {/* Email context */}
                    <div className="mb-3 rounded-lg border border-border bg-surface px-3 py-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-strong">Replying to</p>
                      <p className="mt-0.5 text-[12.5px] font-semibold text-foreground">Re: Q3 Budget Review</p>
                      <p className="text-[11px] text-muted">sarah@company.com · 2h ago</p>
                      <p className="mt-1.5 text-[11.5px] italic text-muted/80">"Can you confirm the figures before our 3pm call?"</p>
                    </div>
                    {/* Tone selector */}
                    <div className="mb-3 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-medium text-muted-strong">Tone:</span>
                      {["Professional", "Friendly", "Direct", "Casual"].map((tone, i) => (
                        <span
                          key={tone}
                          className={i === 0 ? "rounded-full px-2.5 py-1 text-[10.5px] font-bold text-white" : "rounded-full border border-border bg-surface px-2.5 py-1 text-[10.5px] font-medium text-muted"}
                          style={i === 0 ? { background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)" } : {}}
                        >{tone}</span>
                      ))}
                    </div>
                    {/* Reply output */}
                    <div className="rounded-lg border border-blue-100 bg-blue-50/60 px-3 py-3">
                      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-700">Generated reply</p>
                      <p className="text-[12.5px] leading-[1.65] text-foreground/85">Hi Sarah, confirmed — I'll send the updated Q3 figures by 2:30 pm. See you at 3.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== EXPLAINIT SPOTLIGHT ================== */}
        <section className="bg-surface border-y border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
              {/* Preview card */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative">
                  <div aria-hidden className="pointer-events-none absolute -inset-6 opacity-[0.12] blur-3xl" style={{ background: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)" }} />
                  <div className="relative rounded-[20px] border border-border-strong/70 bg-white p-6 shadow-pop">
                    <div className="mb-4 flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full text-white" style={{ background: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)" }} aria-hidden>
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                            <rect x="3" y="5" width="18" height="2.4" rx="1.2" />
                            <rect x="3" y="10.8" width="18" height="2.4" rx="1.2" />
                            <rect x="3" y="16.6" width="12" height="2.4" rx="1.2" />
                          </svg>
                        </span>
                        <span className="text-[13px] font-semibold">ExplainIt · Explanation</span>
                      </div>
                      <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-medium text-muted-strong">Example</span>
                    </div>
                    {/* Page detected */}
                    <div className="mb-3 rounded-lg border border-border bg-surface px-3 py-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted-strong">Page detected</p>
                      <p className="mt-0.5 text-[12.5px] font-semibold text-foreground">What Is Quantum Entanglement?</p>
                      <p className="text-[11px] text-muted">scientificamerican.com · 12 min read</p>
                    </div>
                    {/* Depth selector */}
                    <div className="mb-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-medium text-muted-strong">Depth:</span>
                      {["Simple", "Clear", "Expert"].map((d, i) => (
                        <span
                          key={d}
                          className={i === 0 ? "rounded-full px-2.5 py-1 text-[10.5px] font-bold text-white" : "rounded-full border border-border bg-surface px-2.5 py-1 text-[10.5px] font-medium text-muted"}
                          style={i === 0 ? { background: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)" } : {}}
                        >{d}</span>
                      ))}
                    </div>
                    {/* Explanation output */}
                    <div className="rounded-lg border border-purple-100 bg-purple-50/50 px-3 py-3">
                      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-purple-700">Explanation · Simple</p>
                      <p className="text-[12.5px] leading-[1.65] text-foreground/85">Two particles can be "linked" so that measuring one instantly tells you about the other — no matter how far apart they are. Einstein called it "spooky action at a distance."</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="eyebrow">Featured extension</span>
                <h2 className="mt-5 text-[28px] font-semibold leading-[1.1] sm:text-[36px]">
                  ExplainIt —{" "}
                  <span className="text-gradient">AI Webpage Explainer</span>
                </h2>
                <p className="mt-5 text-[16px] leading-[1.75] text-muted">
                  Open ExplainIt on any article, research paper, or complex page and get a
                  clear, readable explanation — in your language, at the depth you choose.
                </p>
                <ul className="mt-7 space-y-3">
                  {[
                    { label: "Explains any page", sub: "Articles, docs, research papers, product pages — all supported" },
                    { label: "Adjustable explanation depth", sub: "Simple overview or expert-level breakdown — your choice" },
                    { label: "Multilingual by default", sub: "Explanations in your language, regardless of what the page was written in" },
                  ].map(({ label, sub }) => (
                    <li key={label} className="flex items-start gap-3 rounded-xl border border-border bg-white px-4 py-3.5">
                      <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cta-gradient text-white">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
                      </span>
                      <span>
                        <span className="block text-[14.5px] font-semibold text-foreground">{label}</span>
                        <span className="block text-[13px] text-muted mt-0.5">{sub}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <Link href="/explainit" className="btn-primary focus-ring inline-flex">
                    Explore ExplainIt
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================== HOW IT WORKS ================== */}
        <section id="how-it-works" className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="mb-16 max-w-2xl">
              <span className="eyebrow">How it works</span>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[44px]">
                Pick. Customize.{" "}
                <span className="text-muted">Done.</span>
              </h2>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div
                aria-hidden
                className="absolute left-[26px] top-10 hidden h-[2px] bg-gradient-to-r from-brand/40 via-accent/40 to-transparent sm:block"
                style={{ right: "16%" }}
              />

              <ol className="relative grid gap-6 sm:grid-cols-3 sm:gap-8">
                {steps.map((s, i) => (
                  <li key={s.title} className="relative flex flex-col">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-cta-gradient text-white shadow-elevate ring-1 ring-white/30">
                      <span className="text-[15px] font-semibold tracking-tight">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[19px] font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ================== USE CASES ================== */}
        <section id="use-cases" className="bg-surface">
          <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <div className="mb-14 max-w-2xl">
              <span className="eyebrow">Who it&apos;s for</span>
              <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[44px]">
                Made for anyone with{" "}
                <span className="text-muted">too many tabs open.</span>
              </h2>
              <p className="mt-5 text-[16px] leading-[1.7] text-muted">
                If you read, write, watch, or plan on the web — the EveryTools
                extensions slot into your day, in your language, at the depth
                you choose.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {useCases.map((u) => (
                <div
                  key={u.audience}
                  className="group rounded-3xl border border-border/80 bg-white p-7 shadow-elevate transition-all duration-300 hover:-translate-y-1 hover:shadow-elevate-hover"
                >
                  <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-[18px] w-[18px]"
                      aria-hidden
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight">
                    {u.audience}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
                    {u.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== CTA ================== */}
        <section id="get-started" className="bg-white px-5 py-24 sm:px-8 sm:py-32">
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[32px] bg-cta-gradient px-8 py-20 text-white shadow-pop sm:px-16 sm:py-24">
            {/* Decorative highlights */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(700px 320px at 85% 0%, rgba(255,255,255,0.28), transparent 60%), radial-gradient(500px 240px at 5% 100%, rgba(255,255,255,0.12), transparent 60%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                background:
                  "linear-gradient(to right, rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
            <div className="relative max-w-2xl">
              <h2 className="text-[36px] font-semibold leading-[1.05] sm:text-[56px]">
                Your tools. Your way.
              </h2>
              <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                Four EveryTools extensions. Multilingual, customizable, and
                adapted to your needs — install the ones you want.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="#extensions" className="btn-on-cta focus-ring">
                  Explore the extensions
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
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <a
                  href="mailto:contact@everytools.ai"
                  className="btn-ghost-white focus-ring"
                >
                  contact@everytools.ai
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
