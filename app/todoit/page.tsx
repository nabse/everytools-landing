import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
import PrivacySection from "../components/PrivacySection";
import { getTool } from "../lib/tools";

const tool = getTool("todoit")!;

export const metadata: Metadata = {
  title: `${tool.name} — ${tool.tagline}`,
  description: tool.description,
  openGraph: {
    title: `${tool.name} — ${tool.tagline}`,
    description: tool.description,
    url: "/todoit",
  },
};

export default function ToDoItPage() {
  return (
    <ToolPage
      tool={tool}
      tailSlot={
        <PrivacySection
          toolName={tool.name}
          processedTitle="Your content is processed, not stored"
          processedBody="The extension accesses the currently open email or page only when you actively use it. The content is processed temporarily to generate a to-do list and discarded right after — it is never retained."
        />
      }
    />
  );
}
