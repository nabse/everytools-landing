import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
import PrivacySection from "../components/PrivacySection";
import { getTool } from "../lib/tools";

const tool = getTool("instantrep")!;

export const metadata: Metadata = {
  title: `${tool.name} — ${tool.tagline}`,
  description: tool.description,
  openGraph: {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    url: "/instantrep",
  },
};

export default function InstantRepPage() {
  return (
    <ToolPage
      tool={tool}
      tailSlot={
        <PrivacySection
          toolName={tool.name}
          processedTitle="Emails are processed, not stored"
          processedBody="The extension accesses the currently open email only when you actively use it. The content is processed temporarily to generate a reply and discarded right after — it is never retained."
        />
      }
    />
  );
}
