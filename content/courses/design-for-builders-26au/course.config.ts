import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "design-for-builders-26au",
  title: "Design for Builders",
  fullTitle: "Design for Builders: Ship Beautiful Products as a Founder",
  term: "Autumn 2026",
  weeks: 10,
  description:
    "A 10-week, shipping-heavy course for founders, indie hackers, and engineers who can code but freeze when they open Figma. Each week produces a real Figma artifact: a starter kit, a type-only redesign, a landing page, an app flow, a brand sheet, App Store screenshots, and a launch package. Covers Figma as your design environment, visual literacy, typography, color, layout, landing pages, app UI, brand identity, marketing assets, and where to legally source fonts, icons, photos, and illustrations.",
  hero: {
    src: "/c/design-for-builders-26au/hero.svg",
    alt: "A grid of design primitives composing into a product screen",
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
    ],
  },
};
