import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
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
  return <ToolPage tool={tool} />;
}
