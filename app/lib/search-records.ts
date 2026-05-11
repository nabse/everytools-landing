/**
 * search-records.ts
 *
 * Single source of truth for every page that gets indexed in Algolia.
 * This file is pure data (no JSX) so it can be imported by both:
 *   - the frontend search UI (React)
 *   - the Node.js indexing script (scripts/algolia-index.ts)
 *
 * Architecture decision: keeping records here (rather than parsing page files
 * at build time) gives us full control over what gets indexed, how it's
 * described, and its ranking — without coupling to JSX/markdown parsing.
 */

export type PageType = "homepage" | "tool-home" | "guide";

export type SearchRecord = {
  /** Stable unique identifier — the URL path. */
  objectID: string;
  /** Page <title> without the site suffix (e.g. "| EveryTools"). */
  title: string;
  /** Meta description — what gets shown under the result title. */
  description: string;
  /** Additional keyword strings to broaden search coverage. */
  keywords: string[];
  /** Tool slug — used for filtering & coloring results. */
  tool: "everytools" | "veedge" | "instantrep" | "explainit" | "worthit";
  /** Human-readable tool name for display. */
  toolName: string;
  /** Page type — used for filtering and custom ranking. */
  type: PageType;
  /** Canonical URL path (same as objectID for pages). */
  url: string;
  /** Gradient start color for the accent dot in search results. */
  accentFrom: string;
  /** Gradient end color. */
  accentTo: string;
  /**
   * Custom ranking signal — higher = more prominent in results.
   * homepage: 20 | tool-home: 15 | guide: 8
   */
  rank: number;
};

export const searchRecords: SearchRecord[] = [
  // ─── Homepage ───────────────────────────────────────────────────────────────
  {
    objectID: "/",
    title: "EveryTools — AI Browser Extensions for Email, Video, Web & Decisions",
    description:
      "A suite of four AI browser extensions — multilingual and fully customizable. Reply to emails, summarize YouTube videos, explain any webpage, or decide if something is worth it.",
    keywords: [
      "AI browser extensions",
      "multilingual AI tools",
      "Chrome extension productivity",
      "EveryTools",
    ],
    tool: "everytools",
    toolName: "EveryTools",
    type: "homepage",
    url: "/",
    accentFrom: "#6366f1",
    accentTo: "#8b5cf6",
    rank: 20,
  },

  // ─── Veedge ─────────────────────────────────────────────────────────────────
  {
    objectID: "/veedge",
    title: "Veedge — AI YouTube Video Summarizer",
    description:
      "Summarize any YouTube video in your preferred language, at the level of detail that fits your time. Quick, Balanced, or Deep — one click, no account needed.",
    keywords: [
      "AI YouTube summarizer",
      "YouTube video summary",
      "summarize YouTube video",
      "video summary Chrome extension",
      "YouTube summary tool",
    ],
    tool: "veedge",
    toolName: "Veedge",
    type: "tool-home",
    url: "/veedge",
    accentFrom: "#6366f1",
    accentTo: "#ec4899",
    rank: 15,
  },
  {
    objectID: "/veedge/fast-youtube-summary",
    title: "Fast YouTube Summarizer — Get Key Ideas in Seconds",
    description:
      "Get the key ideas from any YouTube video in under 10 seconds. Veedge reads the transcript and delivers a structured summary instantly — no scrubbing required.",
    keywords: [
      "fast YouTube summarizer",
      "quick video summary",
      "YouTube summary in seconds",
      "instant YouTube summary",
    ],
    tool: "veedge",
    toolName: "Veedge",
    type: "guide",
    url: "/veedge/fast-youtube-summary",
    accentFrom: "#6366f1",
    accentTo: "#ec4899",
    rank: 8,
  },
  {
    objectID: "/veedge/multilingual-youtube-summary",
    title: "Multilingual YouTube Summarizer — Summaries in Your Language",
    description:
      "Read YouTube video summaries in any language — regardless of the language the video was recorded in. Supports 8+ languages out of the box.",
    keywords: [
      "multilingual YouTube summarizer",
      "YouTube summary in French",
      "YouTube summary in Spanish",
      "translate YouTube video summary",
      "foreign language video summary",
    ],
    tool: "veedge",
    toolName: "Veedge",
    type: "guide",
    url: "/veedge/multilingual-youtube-summary",
    accentFrom: "#6366f1",
    accentTo: "#ec4899",
    rank: 8,
  },
  {
    objectID: "/veedge/quick-vs-detailed-youtube-summary",
    title: "Quick vs Deep YouTube Summary — Choose Your Depth",
    description:
      "Not all videos deserve the same attention. Veedge lets you choose between a Quick overview, a Balanced summary, or a Deep breakdown before every video.",
    keywords: [
      "YouTube summary depth control",
      "quick vs detailed YouTube summary",
      "deep YouTube breakdown",
      "adjustable video summary",
    ],
    tool: "veedge",
    toolName: "Veedge",
    type: "guide",
    url: "/veedge/quick-vs-detailed-youtube-summary",
    accentFrom: "#6366f1",
    accentTo: "#ec4899",
    rank: 8,
  },
  {
    objectID: "/veedge/youtube-summary-no-account",
    title: "YouTube Summarizer Without an Account — Free & Private",
    description:
      "Summarize YouTube videos without creating an account. Veedge works immediately after install — no signup, no email, no data stored.",
    keywords: [
      "YouTube summarizer without account",
      "free YouTube summary tool",
      "private YouTube summarizer",
      "no signup YouTube summary",
    ],
    tool: "veedge",
    toolName: "Veedge",
    type: "guide",
    url: "/veedge/youtube-summary-no-account",
    accentFrom: "#6366f1",
    accentTo: "#ec4899",
    rank: 8,
  },

  // ─── InstantRep ─────────────────────────────────────────────────────────────
  {
    objectID: "/instantrep",
    title: "InstantRep — AI Email Reply Generator for Gmail & Outlook",
    description:
      "Generate natural email replies in seconds — in your preferred language, at the level of detail you need, and in the tone that fits the conversation.",
    keywords: [
      "AI email reply generator",
      "email reply assistant",
      "Gmail AI reply",
      "Outlook email assistant",
      "automated email reply Chrome extension",
    ],
    tool: "instantrep",
    toolName: "InstantRep",
    type: "tool-home",
    url: "/instantrep",
    accentFrom: "#60a5fa",
    accentTo: "#2563eb",
    rank: 15,
  },
  {
    objectID: "/instantrep/professional-email-reply-generator",
    title: "Professional Email Reply Generator with Tone Control",
    description:
      "Write professional email replies with the right tone — Friendly, Formal, Direct, or Casual. InstantRep adapts the output to your context in a click.",
    keywords: [
      "professional email reply generator",
      "email tone selector",
      "formal email reply AI",
      "friendly email reply generator",
    ],
    tool: "instantrep",
    toolName: "InstantRep",
    type: "guide",
    url: "/instantrep/professional-email-reply-generator",
    accentFrom: "#60a5fa",
    accentTo: "#2563eb",
    rank: 8,
  },
  {
    objectID: "/instantrep/multilingual-email-reply",
    title: "Reply to Emails in Any Language — AI Multilingual Email Reply",
    description:
      "Reply in your preferred language regardless of what the email was written in. InstantRep handles translation and tone automatically.",
    keywords: [
      "AI email reply in French",
      "multilingual email reply",
      "reply to emails in Spanish",
      "translate email reply automatically",
    ],
    tool: "instantrep",
    toolName: "InstantRep",
    type: "guide",
    url: "/instantrep/multilingual-email-reply",
    accentFrom: "#60a5fa",
    accentTo: "#2563eb",
    rank: 8,
  },
  {
    objectID: "/instantrep/ai-email-reply-no-account",
    title: "AI Email Reply Without an Account — InstantRep",
    description:
      "Start generating email replies immediately after install — no account, no email address required. InstantRep respects your privacy by design.",
    keywords: [
      "AI email reply without account",
      "free email reply extension",
      "no signup email AI",
      "private email assistant",
    ],
    tool: "instantrep",
    toolName: "InstantRep",
    type: "guide",
    url: "/instantrep/ai-email-reply-no-account",
    accentFrom: "#60a5fa",
    accentTo: "#2563eb",
    rank: 8,
  },

  // ─── ExplainIt ──────────────────────────────────────────────────────────────
  {
    objectID: "/explainit",
    title: "ExplainIt — AI Webpage Explainer, Understand Any Article Instantly",
    description:
      "Open ExplainIt on any article, research paper, or complex page and get a clear explanation in seconds — in your language, at the depth you choose.",
    keywords: [
      "AI webpage explainer",
      "explain any article",
      "simplify web content",
      "AI reading assistant",
      "summarize website instantly",
      "understand articles faster",
      "Chrome extension article explainer",
    ],
    tool: "explainit",
    toolName: "ExplainIt",
    type: "tool-home",
    url: "/explainit",
    accentFrom: "#c084fc",
    accentTo: "#9333ea",
    rank: 15,
  },

  // ─── WorthIt ─────────────────────────────────────────────────────────────────
  {
    objectID: "/worthit",
    title: 'WorthIt — AI "Worth It?" Decision Assistant for Pricing Pages',
    description:
      'Open WorthIt on any pricing page and get an instant AI verdict: Worth it, Not worth it, or Depends — with pros, cons, and smart alternatives.',
    keywords: [
      "is this worth it tool",
      "AI buying decision assistant",
      "pricing page analysis",
      "worth it checker",
      "product verdict AI",
    ],
    tool: "worthit",
    toolName: "WorthIt",
    type: "tool-home",
    url: "/worthit",
    accentFrom: "#2dd4bf",
    accentTo: "#0d9488",
    rank: 15,
  },
  {
    objectID: "/worthit/is-this-worth-it-tool",
    title: "AI Tool That Tells You If Something Is Worth It",
    description:
      "Stop second-guessing online purchases. WorthIt analyzes any product, subscription, or pricing page and gives you a direct answer — Worth it, Not worth it, or Depends.",
    keywords: [
      "tool that tells me if something is worth it",
      "AI purchase decision",
      "is it worth buying",
      "worth it AI verdict",
    ],
    tool: "worthit",
    toolName: "WorthIt",
    type: "guide",
    url: "/worthit/is-this-worth-it-tool",
    accentFrom: "#2dd4bf",
    accentTo: "#0d9488",
    rank: 8,
  },
  {
    objectID: "/worthit/pricing-verdict-tool",
    title: "Pricing Page Analysis Tool With Instant AI Verdict",
    description:
      "Analyze any SaaS pricing page in seconds. WorthIt extracts value propositions, flags hidden costs, and gives you a verdict you can act on immediately.",
    keywords: [
      "pricing page analysis tool",
      "SaaS pricing analyzer",
      "instant pricing verdict",
      "AI pricing page review",
    ],
    tool: "worthit",
    toolName: "WorthIt",
    type: "guide",
    url: "/worthit/pricing-verdict-tool",
    accentFrom: "#2dd4bf",
    accentTo: "#0d9488",
    rank: 8,
  },
  {
    objectID: "/worthit/saas-worth-it-decision",
    title: "SaaS Pricing Decision Tool — AI-Powered Verdict in Seconds",
    description:
      "Evaluate any SaaS plan before you commit. WorthIt considers your use case, flags lock-in risks, and surfaces comparable alternatives.",
    keywords: [
      "SaaS pricing decision tool",
      "SaaS worth it checker",
      "evaluate SaaS subscription",
      "SaaS buying decision AI",
    ],
    tool: "worthit",
    toolName: "WorthIt",
    type: "guide",
    url: "/worthit/saas-worth-it-decision",
    accentFrom: "#2dd4bf",
    accentTo: "#0d9488",
    rank: 8,
  },
];
