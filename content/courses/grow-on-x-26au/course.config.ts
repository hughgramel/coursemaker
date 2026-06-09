import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "grow-on-x-26au",
  title: "Grow on X",
  fullTitle: "Grow on X: From Zero to 10,000 Followers",
  term: "Autumn 2026",
  description:
    "A 6-week practical course for solo creators going from near-zero to 10,000 followers on X. Niche and positioning, post craft, the algorithm, the reply game, sustainable weekly systems, analytics, and a 90-day playbook. Sources from Paul Graham, Kevin Kelly, the open-sourced X algorithm, Justin Welsh, Dickie Bush, Nicolas Cole, David Perell, Dan Koe, Andrew Chen, and recent X algorithm reporting.",
  hero: {
    src: "/c/grow-on-x-26au/hero.svg",
    alt: "A small node growing into a network of connected accounts",
  },
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
      ],
    },
  ],
  footer: {
    lines: [
      "A course website built with coursemaker.",
      "© 2026 Course staff.",
    ],
  },
};
