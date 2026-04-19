import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://everytools.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "EveryTools — Flexible, multilingual AI browser extensions for everyday tasks",
    template: "%s · EveryTools",
  },
  description:
    "EveryTools is a suite of four AI browser extensions — multilingual and fully customizable. Reply to emails, summarize YouTube videos, explain any webpage, or extract to-dos — in your preferred language, at the level of detail you choose.",
  keywords: [
    "AI browser extensions",
    "multilingual AI extensions",
    "customizable AI extensions",
    "productivity extensions",
    "email reply extension",
    "YouTube summary extension",
    "webpage explanation extension",
    "to-do extraction extension",
    "everyday AI extensions",
    "Chrome extensions for productivity",
    "InstantRep",
    "Veedge",
    "ExplainIt",
    "ToDoIt",
    "EveryTools",
  ],
  authors: [{ name: "EveryTools" }],
  creator: "EveryTools",
  openGraph: {
    type: "website",
    url: siteUrl,
    title:
      "EveryTools — Flexible, multilingual AI browser extensions for everyday tasks",
    description:
      "A suite of four AI browser extensions. Multilingual and customizable — choose your language, your level of detail, and the style that fits the moment.",
    siteName: "EveryTools",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "EveryTools — Flexible, multilingual AI browser extensions for everyday tasks",
    description:
      "Four AI browser extensions, each adapted to your language, your level of detail, and your context.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
