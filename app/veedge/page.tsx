import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
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
  return <ToolPage tool={tool} />;
}
