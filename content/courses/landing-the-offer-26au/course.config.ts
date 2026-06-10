import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "landing-the-offer-26au",
  title: "Landing the Offer",
  fullTitle: "Landing the Offer: SWE Job Search for Senior CS Students",
  term: "Autumn 2026",
  weeks: 10,
  description: "A ten-week course for senior CS students aiming at a new-grad software engineering offer: interview prep, system design, behavioral, side-door paths, negotiation.",
  hero: { src: "/c/landing-the-offer-26au/hero.svg", alt: "A doorway and a side door on the same building, two paths to the same offer" },
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
      ],
    },
  ],
  footer: {
    lines: ["Built with coursemaker."],
  },
};
