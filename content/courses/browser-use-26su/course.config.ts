import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "browser-use-26su",
  title: "Browser Use",
  fullTitle: "Browser Use: How LLM Agents Drive the Web",
  term: "Summer 2026",
  weeks: 10,
  description:
    "A 10-week course on browser-use, the open-source library that lets LLM agents drive a real web browser. Half architecture and internals (the agent loop, DOM serialization, tools, the browser layer), half hands-on building: run agents, write custom tools, return structured data, drive logged-in sites, and ship a reliable end-to-end agent.",
  hero: {
    src: "/c/browser-use-26su/hero.svg",
    alt: "A loop of perceive, decide, and act turning a web page into a numbered list of actionable elements for an LLM",
  },
  // Flat sidebar. NO children/dropdowns. Each parent links to a real
  // landing page that the scaffolder writes as a stub.
  navGroups: [
    {
      items: [
        { label: "Home",        href: "" },
        { label: "Tasks",       href: "tasks" },
        { label: "Syllabus",    href: "syllabus" },
        { label: "Lectures",    href: "lectures" },
        { label: "Sections",    href: "sections" },
        { label: "Assignments", href: "hw" },
        { label: "Readings",    href: "readings" },
        { label: "Glossary",    href: "glossary" },
      ],
    },
  ],
  footer: {
    lines: ["Built with generate-course. Grounded in browser-use's public docs and source as of June 2026."],
  },
};
