import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
import PrivacySection from "../components/PrivacySection";
import { getTool } from "../lib/tools";

const tool = getTool("worthit")!;

export const metadata: Metadata = {
  title: `${tool.name} — ${tool.tagline}`,
  description: tool.description,
  openGraph: {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    url: "/worthit",
  },
};

export default function WorthItPage() {
  return (
    <ToolPage
      tool={tool}
      tailSlot={
        <PrivacySection
          toolName="WorthIt"
          processedTitle="Pages are analyzed, not stored"
          processedBody="When you run WorthIt, the visible content of the current page is sent to our secure backend for analysis. The result is returned to you immediately — nothing is retained on our servers after the response is delivered."
        />
      }
    />
  );
}
