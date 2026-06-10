import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Grids, columns, and responsive layout in Figma",
  date: "Week 5, Lecture 2",
  week: 5,
  topics: [
    "The 12-column layout grid: column count, gutter width, and margin at each breakpoint",
    "Constraints and auto-layout together: when to use each and why combining them is not redundant",
    "Responsive breakpoints: desktop (1440px), tablet (768px), and mobile (390px) as first-class frames",
    "Macro-grid (page structure) vs micro-grid (component internals): two separate systems that must stay consistent",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk05-l2.pdf",
  readings: [
    {
      title: "Week 5 reading: spacing, grids, and layout",
      href: "/c/design-for-builders-26au/readings/wk05",
    },
    {
      title: "Required: Figma, Guide to Auto Layout",
      href: "https://help.figma.com/hc/en-us/articles/360040451373-Guide-to-auto-layout",
    },
    {
      title:
        "Supplemental: 8 Point Grid System in Figma (community tutorial, 2023)",
      href: "https://www.youtube.com/watch?v=FhGdLUW_8S0",
    },
  ],
  followups: [
    "Set up a 12-column layout grid in Figma on a 1440px desktop frame. Use 24px gutters and 80px margins. Count how many pixels wide a single column is (including its share of gutters). Now set up the same grid on a 768px tablet frame with 16px gutters and 32px margins. How wide is a single column now? What changed and what stayed the same?",
    "The Figma auto-layout guide (Figma, 2023) covers resizing behaviors: Hug, Fill, Fixed, and Min/Max. For a card component inside a 3-column grid, what resizing behavior should the card’s width use? What about the card’s height? Explain your reasoning.",
    "Build a hero section in Figma at 1440px with a headline and a CTA button spanning 6 of 12 columns. Duplicate the frame to 390px mobile and adapt the layout. Which elements collapsed to full width? Which kept a narrower span? Describe what you changed in the constraints or auto-layout settings to make it work.",
    "The lecture distinguishes macro-grid (page-level structure) from micro-grid (component internals). Find a real product screen and identify at least two places where a component’s internal spacing breaks the page-level grid. Is that break intentional or accidental? How would you tell the difference?",
    "A feature section uses three cards in a row at desktop width. At tablet width (768px), the designer wants two cards per row. At mobile (390px), one card per row. Using auto-layout with wrap enabled, describe the Figma settings you would need to achieve this behavior without creating three separate frames.",
  ],
};

export function Wk05L2() {
  return <LecturePage spec={spec} />;
}

export const wk05L2SearchBody =
  "12-column layout grid responsive layout Figma breakpoints desktop tablet mobile constraints auto-layout macro-grid micro-grid gutters margins columns responsive breakpoints 1440px 768px 390px wrap layout grid Week 5 Lecture 2 design for builders founders engineers";
