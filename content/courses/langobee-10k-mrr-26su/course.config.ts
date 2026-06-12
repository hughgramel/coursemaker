import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "langobee-10k-mrr-26su",
  title: "LangoBee to $10K MRR",
  fullTitle: "LangoBee to $10K MRR: Operating a Solo Language App from Zero Revenue",
  term: "Summer 2026",
  weeks: 12,
  description:
    "A 12-week operator course taking LangoBee from ~50 real users, 4 weekly actives, and $0 MRR to a working revenue engine: honest metrics, retention, first dollar, distribution, and the operating cadence that holds it together.",
  hero: {
    src: "/c/langobee-10k-mrr-26su/hero.svg",
    alt: "A stepped line climbing from $0 to $10K MRR across twelve weeks and five phases",
  },
  // Flat sidebar. NO children/dropdowns.
  navGroups: [
    {
      items: [
        { label: "Home", href: "" },
        { label: "Tasks", href: "tasks" },
        { label: "Syllabus", href: "syllabus" },
        { label: "Lectures", href: "lectures" },
        { label: "Sections", href: "sections" },
        { label: "Assignments", href: "hw" },
        { label: "Readings", href: "readings" },
        { label: "Glossary", href: "glossary" },
      ],
    },
  ],
  footer: {
    lines: ["Built with generate-course. Grounded in LangoBee's live June 2026 data."],
  },
};
