/**
 * InstantRep Privacy Policy section.
 *
 * Rendered via ToolPage's `tailSlot` — sits between the main CTA and the
 * global footer. Keeps the disclosure discoverable (reachable via
 * everytools.ai/instantrep#privacy) without breaking the shared layout used
 * by other tool pages.
 */
export default function PrivacySection() {
  const points: { title: string; body: string }[] = [
    {
      title: "No personal data collected",
      body: "We do not collect, store, or share any personal user data. InstantRep does not require an account.",
    },
    {
      title: "Emails are processed, not stored",
      body: "The extension accesses the currently open email only when you actively use it. The content is processed temporarily to generate a reply and discarded right after — it is never retained.",
    },
    {
      title: "No tracking, no profiling",
      body: "We do not use tracking technologies, and we do not use your data for advertising, analytics, or profiling of any kind.",
    },
    {
      title: "Anonymous usage identifier",
      body: "A temporary anonymous identifier may be used only to manage free-usage limits and credits. It contains no personal information and cannot be traced back to you.",
    },
    {
      title: "Secure processing",
      body: "All processing happens securely through our backend. No sensitive data is retained on our servers.",
    },
  ];

  return (
    <section id="privacy" className="scroll-mt-24 border-t border-border/60 bg-surface">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-muted-strong">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          <span>No account needed · Privacy-first · No data stored</span>
        </div>

        {/* Heading */}
        <h2 className="text-[32px] font-semibold leading-[1.1] tracking-tight sm:text-[40px]">
          Privacy Policy
        </h2>

        <p className="mt-5 max-w-2xl text-[16px] leading-[1.7] text-muted sm:text-[17px]">
          InstantRep respects your privacy and is built to minimize data usage.
          Here is exactly what happens to your data — in plain language.
        </p>

        {/* Points */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {points.map((p, i) => (
            <li
              key={p.title}
              className="rounded-2xl border border-border/80 bg-white p-6 shadow-soft"
            >
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-[12px] font-semibold text-muted-strong ring-1 ring-border"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[15.5px] font-semibold tracking-tight">
                  {p.title}
                </h3>
              </div>
              <p className="text-[14.5px] leading-[1.65] text-muted">{p.body}</p>
            </li>
          ))}
        </ul>

        {/* Contact */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-white p-6 sm:p-7">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-[15.5px] font-semibold tracking-tight">
                Questions about your data?
              </h3>
              <p className="mt-1 text-[14px] text-muted">
                Reach us any time — we reply personally.
              </p>
            </div>
            <a
              href="mailto:contact@everytools.ai"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong/80 bg-white px-4 py-2 text-[13.5px] font-semibold text-foreground transition hover:border-foreground hover:bg-surface"
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              contact@everytools.ai
            </a>
          </div>
        </div>

        {/* Fine print */}
        <p className="mt-10 text-[12.5px] text-muted">
          This summary describes InstantRep's current practices and may be
          updated to reflect product changes or legal requirements. Material
          changes will be communicated on this page.
        </p>
      </div>
    </section>
  );
}
