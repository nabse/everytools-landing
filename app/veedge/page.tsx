import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
import PrivacySection from "../components/PrivacySection";
import { getTool } from "../lib/tools";

const tool = getTool("veedge")!;

export const metadata: Metadata = {
  title: `${tool.name} — ${tool.tagline}`,
  description: tool.description,
  openGraph: {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    url: "/veedge",
  },
};

export default function VeedgePage() {
  return (
    <ToolPage
      tool={tool}
      tailSlot={
        <PrivacySection
          toolName={tool.name}
          processedTitle="Videos are processed, not stored"
          processedBody="The extension accesses the currently open YouTube video only when you actively use it. The content is processed temporarily to generate a summary and discarded right after — it is never retained."
        />
      }
    />
  );
}
