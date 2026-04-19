import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
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
  return <ToolPage tool={tool} />;
}
