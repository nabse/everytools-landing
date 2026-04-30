"use client";

export default function VeedgeSummaryDemo() {
  return (
    <section className="border-t border-border/60 bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        {/* Section header */}
        <div className="no-print mb-12 max-w-2xl">
          <span className="eyebrow">See it in action</span>
          <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
            Your summary,{" "}
            <span className="text-muted">ready to use.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-muted">
            Veedge generates a clean, structured summary of any YouTube video.
            Copy it, save it, or print it — all in one click.
          </p>
        </div>

        {/* Summary card */}
        <div className="relative">
          <div
            aria-hidden
            className="no-print pointer-events-none absolute -inset-8 opacity-[0.12] blur-3xl"
            style={{
              background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
            }}
          />

          <div className="veedge-print-area relative rounded-[22px] border border-border-strong/70 bg-white p-6 shadow-pop sm:p-8">
            {/* Card header */}
            <div className="no-print mb-6 flex items-center justify-between border-b border-border/60 pb-5">
              <div className="flex items-center gap-2.5">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                  }}
                  aria-hidden
                >
                  V
                </span>
                <span className="text-[13.5px] font-semibold tracking-tight">
                  Veedge · Summary
                </span>
              </div>
              <span className="rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-strong">
                Example output
              </span>
            </div>

            {/* Video title */}
            <h2 className="text-[18px] font-semibold leading-snug tracking-tight sm:text-[20px]">
              The Psychology of Habit Formation — How to Make Any Habit Stick
            </h2>

            {/* Summary */}
            <div className="mt-5">
              <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                Summary
              </h3>
              <p className="text-[15px] leading-[1.75] text-foreground/85">
                This video explores the science of habit formation using research
                from behavioral psychology. The speaker breaks down how habits
                are built through a cue–routine–reward loop, and how
                understanding that structure makes it possible to build new
                habits deliberately or break unwanted ones. Key emphasis is
                placed on the role of identity in sustaining long-term behavior
                change.
              </p>
            </div>

            {/* Key takeaways */}
            <div className="mt-6">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                Key Takeaways
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Habits are built on three components: cue, routine, and reward — the habit loop.",
                  "Identity-based habits are more durable than outcome-based ones: focus on who you want to become.",
                  "Small environment changes are more reliable than willpower for triggering new behaviors.",
                  "Habit stacking — anchoring a new habit to an existing one — dramatically increases consistency.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14.5px] leading-relaxed text-foreground/80"
                  >
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366f1]"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Timestamps */}
            <div className="mt-6">
              <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                Timestamps
              </h3>
              <ul className="space-y-2">
                {[
                  {
                    time: "0:00",
                    label: "Introduction — why habits are hard to change",
                  },
                  { time: "2:14", label: "The habit loop: cue, routine, reward" },
                  { time: "6:30", label: "Identity vs. outcome-based habits" },
                  {
                    time: "11:05",
                    label: "Environmental design for automatic behavior",
                  },
                  { time: "15:48", label: "Habit stacking in practice" },
                  {
                    time: "20:12",
                    label: "Breaking bad habits using the same loop",
                  },
                ].map(({ time, label }) => (
                  <li key={time} className="flex items-baseline gap-3 text-[14px]">
                    <span className="shrink-0 font-mono text-[12.5px] font-semibold text-[#6366f1]">
                      {time}
                    </span>
                    <span className="text-foreground/75">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Print-only branding footer */}
            <div className="print-only mt-8 border-t border-gray-200 pt-4 text-[12px] text-gray-500">
              Generated with Veedge · everytools.ai/veedge
            </div>

            {/* Action buttons */}
            <div className="no-print mt-8 flex flex-wrap items-center gap-3 border-t border-border/60 pt-5">
              <button
                type="button"
                onClick={() => window.print()}
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-[13.5px] font-semibold text-foreground shadow-soft transition hover:border-border-strong hover:bg-surface"
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
                  <polyline points="6 9 6 2 18 2 18 9" />
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                  <rect x="6" y="14" width="12" height="8" />
                </svg>
                Print summary
              </button>
              <span className="text-[12px] text-muted">
                Example of what the real extension produces
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
