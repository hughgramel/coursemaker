import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Type systems: scales, line-height, measure",
  date: "Week 3, Lecture 2",
  week: 3,
  topics: [
    "Modular type scales: how a single ratio produces a consistent size ladder",
    "Line-height ratios: why 1.5 is wrong for headlines and right for nothing in particular",
    "Measure (45-75ch): the column-width rule that controls reading comfort",
    "Pairing two typefaces: contrast strategies and the one rule that prevents chaos",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk03-l2.pdf",
  readings: [
    {
      title: "Week 3 reading: typography for product builders",
      href: "/c/design-for-builders-26au/readings/wk03",
    },
    {
      title: "Butterick&rsquo;s Practical Typography: line spacing",
      href: "https://practicaltypography.com/line-spacing.html",
    },
    {
      title: "Refactoring UI: line-height is proportional (Wathan &amp; Schoger 2019)",
      href: "https://refactoringui.com/previews/line-height-is-proportional",
    },
    {
      title: "Figma best practices: typography systems in Figma",
      href: "https://www.figma.com/best-practices/typography-systems-in-figma/",
    },
  ],
  followups: [
    "Build a five-step type scale in Figma using a 1.25 ratio (Major Third) starting at 16px. What are the five sizes? Now build a second scale using 1.333 (Perfect Fourth) from the same base. At which step do the two scales diverge enough to make a visible difference in a real UI?",
    "Butterick (2019) says optimal line-height is 120-145% of point size. Wathan &amp; Schoger (2019) add that narrow layouts can use tighter leading and wide layouts need more. Set a paragraph at 16px with three different line-heights: 1.2, 1.5, and 1.75. Which one reads best at 60ch measure? At 35ch?",
    "The measure rule says 45-75 characters per line. In CSS, &ldquo;1ch&rdquo; equals the width of the &ldquo;0&rdquo; character. Set a text block to &ldquo;max-width: 65ch&rdquo; in a browser. Does the actual character count per line match 65? If not, why might it vary?",
    "Choose two typefaces for a product you work on. One should be the body face, one the display face. Using the terms from this week, write 3-4 sentences justifying the pairing: what contrast strategy did you use (serif/sans, geometric/humanist, high-contrast/low-contrast), and what shared characteristic keeps them from clashing?",
    "Wathan &amp; Schoger (2019) show that small text needs more leading than large text. Explain why, using the concept of x-height from Lecture 1. A headline at 48px and body text at 14px: which needs a higher line-height ratio? Show the numbers.",
  ],
};

export function Wk03L2() {
  return <LecturePage spec={spec} />;
}

export const wk03L2SearchBody =
  "modular type scale ratio line-height leading measure ch column width reading comfort typeface pairing contrast serif sans-serif Figma typography system design tokens body text headline proportional Week 3 Lecture 2 design for builders founders engineers";
