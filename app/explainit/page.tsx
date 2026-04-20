import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
import PrivacySection from "../components/PrivacySection";
import { getTool } from "../lib/tools";

const tool = getTool("explainit")!;

export const metadata: Metadata = {
  title: `${tool.name} — ${tool.tagline}`,
  description: tool.description,
  openGraph: {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    url: "/explainit",
  },
};

export default function ExplainItPage() {
  return (
    <ToolPage
      tool={tool}
      tailSlot={
        <PrivacySection
          toolName={tool.name}
          processedTitle="Pages are processed, not stored"
          processedBody="The extension accesses the currently open page only when you actively use it. The content is processed temporarily to generate an explanation and discarded right after — it is never retained."
        />
      }
    />
  );
}
