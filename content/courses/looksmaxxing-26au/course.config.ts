import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "looksmaxxing-26au",
  title: "Looksmaxxing",
  fullTitle: "Looksmaxxing: A Ten-Week Evidence-Based Self-Improvement Course",
  term: "Autumn 2026",
  description:
    "Ten weeks of research-backed self-improvement for men aged 18 to 30. Skin, hair, body, dental, style, posture, sleep. No surgery, no pseudoscience, no rabbit holes.",
  hero: { src: "/c/looksmaxxing-26au/hero.svg", alt: "A man's silhouette framed by the seven pillars of softmaxxing." },
  navGroups: [
    {
      items: [
        { label: "Home",        href: "" },
        { label: "Tasks",       href: "tasks" },
        { label: "Habits",      href: "habits" },
        { label: "Syllabus",    href: "syllabus" },
        { label: "Lectures",    href: "lectures" },
        { label: "Sections",    href: "sections" },
        { label: "Assignments", href: "hw" },
        { label: "Readings",    href: "readings" },
      ],
    },
  ],
  footer: {
    lines: ["Built with coursemaker."],
  },
};
