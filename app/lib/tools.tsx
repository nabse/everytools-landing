import type { ReactNode } from "react";

export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  valueProp: string;
  href: string;
  accent: string;
  icon: ReactNode;
  features: { title: string; body: string }[];
  tones?: string[];
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
  "aria-hidden": true,
};

/** Shared across every extension page: the customization options users can set. */
export const LANGUAGES = [
  "English",
  "Français",
  "Español",
  "Deutsch",
  "Português",
  "Italiano",
  "Nederlands",
  "日本語",
];

export const DETAIL_LEVELS = ["Quick", "Standard", "Detailed"] as const;

export const tools: Tool[] = [
  {
    slug: "instantrep",
    name: "InstantRep",
    tagline: "Email replies, made easy",
    description:
      "Generate email replies in your preferred language, at the level of detail you choose, in the tone that fits.",
    longDescription:
      "InstantRep is a dedicated browser extension, part of the EveryTools suite. Open it on any email and get a clean, natural reply in seconds — in the language you prefer, at the level of detail you need, and in the tone that fits the conversation.",
    valueProp:
      "Reply to any email in any language — at the depth and tone you choose.",
    href: "/instantrep",
    accent: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M13 2 4 14h7l-1 8 10-12h-7z" />
      </svg>
    ),
    features: [
      {
        title: "Write back in any language",
        body: "Draft replies in your preferred language, regardless of the one the email was written in.",
      },
      {
        title: "Choose the level of detail",
        body: "A quick one-liner, a standard reply, or a fuller message — pick what fits the thread.",
      },
      {
        title: "Match the tone to the moment",
        body: "Friendly, formal, direct, or casual — adapt the output to your context in a click.",
      },
    ],
    tones: ["Friendly", "Formal", "Direct", "Casual"],
  },
  {
    slug: "veedge",
    name: "Veedge",
    tagline: "Video summaries, on demand",
    description:
      "Summarize any YouTube video in your preferred language, at the level of detail that fits your time.",
    longDescription:
      "Veedge is a dedicated browser extension, part of the EveryTools suite. Open it on any YouTube video and get the key ideas, moments, and takeaways — in the language you prefer, at the level of detail that matches your time.",
    valueProp:
      "Summarize any YouTube video in your preferred language — at the depth you choose.",
    href: "/veedge",
    accent: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M7 5v14l12-7z" />
      </svg>
    ),
    features: [
      {
        title: "Summaries in your language",
        body: "Read a clear summary in the language that works for you, whatever the video was originally spoken in.",
      },
      {
        title: "Choose the level of detail",
        body: "A quick overview, a standard summary, or a detailed breakdown — adapt the output to your context.",
      },
      {
        title: "Jump straight to key moments",
        body: "Timestamps take you right to the parts worth watching — no scrubbing required.",
      },
    ],
  },
  {
    slug: "explainit",
    name: "ExplainIt",
    tagline: "Clear explanations, on any page",
    description:
      "Get a clear explanation of any webpage in your preferred language, at the level of detail that fits your context.",
    longDescription:
      "ExplainIt is a dedicated browser extension, part of the EveryTools suite. Use it on any article, document, or long read and get a clear explanation — in the language you prefer, at the level of detail that fits your time and context.",
    valueProp:
      "Understand any webpage in your preferred language — at the level of detail you need.",
    href: "/explainit",
    accent: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="2.4" rx="1.2" />
        <rect x="3" y="10.8" width="18" height="2.4" rx="1.2" />
        <rect x="3" y="16.6" width="12" height="2.4" rx="1.2" />
      </svg>
    ),
    features: [
      {
        title: "Explanations in your language",
        body: "Get a clear explanation of any page in the language that works for you — not the page's default.",
      },
      {
        title: "Choose the level of detail",
        body: "A quick overview, a standard read, or a detailed walkthrough — pick what fits your time.",
      },
      {
        title: "Works on anything with text",
        body: "News, docs, research papers, product pages — ExplainIt adapts to whatever you're reading.",
      },
    ],
  },
  {
    slug: "todoit",
    name: "ToDoIt",
    tagline: "To-do lists, instantly",
    description:
      "Turn any email or page into a to-do list — in your preferred language, at the level of detail that fits your workflow.",
    longDescription:
      "ToDoIt is a dedicated browser extension, part of the EveryTools suite. Drop in an email, meeting note, or article and get a clean list of next steps — in the language you prefer, at the level of detail that fits how you work.",
    valueProp:
      "Turn any email or page into a clear to-do list — in your language, in your format.",
    href: "/todoit",
    accent: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden
      >
        <path d="M20.3 6.3a1.2 1.2 0 0 1 0 1.7l-10 10a1.2 1.2 0 0 1-1.7 0l-5-5a1.2 1.2 0 1 1 1.7-1.7L9.5 15.3l9.1-9.1a1.2 1.2 0 0 1 1.7 0z" />
      </svg>
    ),
    features: [
      {
        title: "Export in any language",
        body: "Generate tasks in the language you use to work — yours, your team's, or your client's.",
      },
      {
        title: "Choose the level of detail",
        body: "A quick checklist, a standard list, or a detailed breakdown with context and owners.",
      },
      {
        title: "Paste into any tool",
        body: "Works with the to-do app, doc, or chat you already use — no retyping, no switching.",
      },
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
