import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
import { getTool } from "../lib/tools";
import PrivacySection from "./PrivacySection";

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
  return <ToolPage tool={tool} tailSlot={<PrivacySection />} />;
}
