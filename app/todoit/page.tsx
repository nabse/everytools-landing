import type { Metadata } from "next";
import ToolPage from "../components/ToolPage";
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
  return <ToolPage tool={tool} />;
}
