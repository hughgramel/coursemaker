import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "b2c-10k-mrr-26au",
  title: "B2C → $10k MRR",
  fullTitle: "B2C to $10k MRR: A 10-Week Growth Manual for Technical Founders",
  term: "Autumn 2026",
  description:
    "A 10-week growth manual for technical founders shipping a B2C product. Each week is a concrete task; case studies of real journeys to $10k MRR (Nomad List, Typing Mind, Tony Dinh's apps, Marc Lou's portfolio) get applied to your own product.",
  hero: {
    src: "/c/b2c-10k-mrr-26au/hero.svg",
    alt: "A revenue curve compounding from zero toward ten thousand",
  },
  navGroups: [
    {
      items: [
        { label: "Home",        href: "" },
        { label: "Syllabus",    href: "syllabus" },
        { label: "Lectures",    href: "lectures" },
        { label: "Sections",    href: "sections" },
        { label: "Assignments", href: "hw" },
        { label: "Readings",    href: "readings" },
        { label: "Tasks",       href: "tasks" },
        { label: "Staff",       href: "staff" },
      ],
    },
  ],
  footer: {
    lines: [
      "A course website built with coursemaker.",
    ],
  },
};
