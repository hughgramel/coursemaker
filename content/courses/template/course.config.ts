import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "template",
  title: "Template",
  fullTitle: "Sample Course Template",
  term: "Sample term",
  weeks: 6,
  description:
    "Sample course showing every page type — home calendar, syllabus, a sample reading, a sample lecture, a sample section, a sample assignment, and a populated tasks checklist. Use it as the visual reference when authoring your own course.",
  hero: null,
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
        { label: "Staff",       href: "staff" },
      ],
    },
  ],
  footer: {
    lines: ["Built with coursemaker."],
  },
};
