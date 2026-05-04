export default function VeedgeSummaryDemo() {
  return (
    <section className="border-t border-border/60 bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto w-full max-w-5xl">
        {/* Section header */}
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow">See it in action</span>
          <h2 className="mt-5 text-[32px] font-semibold leading-[1.1] sm:text-[40px]">
            Open it. Click Summarize.{" "}
            <span className="text-muted">Done.</span>
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-muted">
            This is what Veedge looks like when you open it on a YouTube video.
            Choose your language and depth, then generate — no setup, no account.
          </p>
        </div>

        {/* Extension popup mockup */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[400px]">
            {/* Glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 opacity-[0.15] blur-3xl"
              style={{ background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)" }}
            />

            {/* Popup shell */}
            <div className="relative overflow-hidden rounded-2xl border border-border-strong/60 bg-[#f3f3f8] shadow-pop">

              {/* ── Top bar ── */}
              <div className="flex items-center justify-between border-b border-border/50 bg-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)" }}
                    aria-hidden
                  >
                    V
                  </span>
                  <span className="text-[14px] font-semibold tracking-tight text-foreground">Veedge</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {/* Pin icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-muted/60" aria-hidden>
                    <path d="m12 17-1-4-4-1 9-9-4 14z" />
                  </svg>
                  {/* Close icon */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-muted/60" aria-hidden>
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11.5px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
                    7 credits
                  </span>
                </div>
              </div>

              <div className="space-y-3 p-4">

                {/* ── Video card ── */}
                <div className="flex items-start gap-3 rounded-xl border border-border bg-white p-3">
                  {/* Thumbnail — warm gradient to suggest real video */}
                  <div
                    className="relative flex h-[52px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-lg"
                    style={{ background: "linear-gradient(135deg, #7c3aed 0%, #db2777 60%, #f97316 100%)" }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5 opacity-70" aria-hidden>
                      <path d="M7 5v14l12-7z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[12.5px] font-semibold text-foreground leading-snug">
                      How to Get Whatever You Want
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted">GrindBuddy</p>
                    <p className="mt-0.5 truncate text-[10px] text-muted/60">https://www.youtube.com/watch?v=…</p>
                  </div>
                  <button type="button" disabled className="shrink-0 rounded-lg border border-border bg-[#f3f3f8] px-2.5 py-1.5 text-[11.5px] font-semibold text-foreground/70">
                    Change
                  </button>
                </div>

                {/* ── Language ── */}
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                    Summary Language
                  </label>
                  {/* Dropdown — purple border to show focused/active state */}
                  <div className="flex items-center justify-between rounded-xl border-2 bg-white px-3 py-2.5" style={{ borderColor: "#6366f1" }}>
                    <span className="text-[13px] font-medium text-foreground">Auto-detect</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted" aria-hidden>
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <div className="mt-2 rounded-xl border border-border bg-white px-3 py-2.5">
                    <p className="text-[12px] text-muted-strong">
                      Detected: <strong className="font-semibold text-foreground">English</strong> — is this correct?
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button type="button" disabled className="inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11.5px] font-semibold text-emerald-700">
                        ✓ Yes
                      </button>
                      <button type="button" disabled className="inline-flex items-center gap-1 rounded-lg border border-border bg-[#f3f3f8] px-2.5 py-1 text-[11.5px] font-semibold text-foreground/70">
                        ↩ Change
                      </button>
                    </div>
                  </div>
                </div>

                {/* ── Depth ── */}
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                    Summary Depth
                  </label>
                  <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-border bg-white">
                    {["Quick", "Balanced", "Deep"].map((d, i) => (
                      <button
                        key={d}
                        type="button"
                        disabled
                        className={[
                          "py-2.5 text-[12.5px] transition",
                          i === 0
                            ? "bg-white font-bold text-foreground"
                            : "font-medium text-muted/60",
                          i > 0 ? "border-l border-border" : "",
                        ].join(" ")}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  <p className="mt-1.5 text-[11px] text-muted">
                    Very concise · ~30 sec read · 1 credit/hr of video
                  </p>
                </div>

                {/* ── Custom instructions ── */}
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-strong">
                    Custom Instructions{" "}
                    <span className="font-normal normal-case tracking-normal text-muted">(optional)</span>
                  </label>
                  <div className="min-h-[60px] rounded-xl border border-border bg-white px-3 py-2.5">
                    <p className="text-[11.5px] text-muted/50">
                      e.g. "Summarize in bullet points" · "Extract action items only" · "Make it very concise"
                    </p>
                  </div>
                </div>

                {/* ── Generate button ── */}
                <button
                  type="button"
                  disabled
                  className="w-full rounded-xl py-3.5 text-[14px] font-bold text-white shadow-soft"
                  style={{ background: "linear-gradient(90deg, #6366f1 0%, #ec4899 100%)" }}
                >
                  🌸 Generate summary
                </button>

                {/* ── Footer ── */}
                <p className="text-center text-[11px] text-muted">
                  4m · 1 credit · No account needed
                </p>
              </div>

              {/* ── Bottom contact bar ── */}
              <div className="border-t border-border/40 bg-white px-4 py-2.5 text-center">
                <p className="text-[10.5px] text-muted/70">
                  💬 Need help or have feedback?{" "}
                  <span className="font-medium text-brand/80">contact@everytools.ai</span>
                </p>
                <p className="mt-0.5 text-[9.5px] text-muted/40">v0.5.2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
