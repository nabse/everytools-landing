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
  /**
   * Chrome Web Store URL (or any external install URL). When set, both
   * install buttons on ToolPage deep-link here in a new tab. When unset,
   * they fall back to the in-page `#install` CTA section — the right
   * default for tools that aren't published yet.
   */
  installUrl?: string;
  /**
   * When true, the tool is not yet available. Install buttons scroll to a
   * dedicated "Coming soon" section instead of the Chrome Web Store, and
   * both ToolPage and ToolCard surface a visual "Coming soon" indicator.
   */
  comingSoon?: boolean;
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
    installUrl:
      "https://chromewebstore.google.com/detail/instantrep-%E2%80%94-ai-email-rep/indmflpcjpjgkppkoibeeeaaonnamagb",
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
    installUrl:
      "https://chromewebstore.google.com/detail/veedge-%E2%80%94-youtube-ai-summa/nllgadlfnebcjkilfoanbaknkkpdmflk",
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
    comingSoon: true,
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
    slug: "worthit",
    name: "WorthIt",
    tagline: "Know if it's worth it — instantly.",
    description:
      "Analyze any pricing page, product, course, or subscription and get a clear verdict: Worth it, Not worth it, or Depends.",
    longDescription:
      "WorthIt is a dedicated browser extension, part of the EveryTools suite. Open it on any pricing page, product listing, course, or subscription and get a clear, personalized verdict — with smart alternatives and tailored advice based on what you actually need.",
    valueProp:
      "Get a clear verdict on any page — Worth it, Not worth it, or Depends.",
    href: "/worthit",
    accent: "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.7 7.7a1 1 0 0 0-1.4-1.4L10 13.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l6-6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    installUrl: "/worthit",
    features: [
      {
        title: "Clear verdict on anything",
        body: "Analyze SaaS pricing pages, e-commerce products, courses, or subscriptions and get a direct answer: Worth it, Not worth it, or Depends.",
      },
      {
        title: "Personalized to your needs",
        body: "WorthIt factors in what you're actually looking for — not just the price tag — and surfaces smart alternatives when something doesn't make the cut.",
      },
      {
        title: "No research required",
        body: "Save time and avoid bad decisions. Get the clarity you need in seconds, without opening 10 comparison tabs.",
      },
    ],
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
