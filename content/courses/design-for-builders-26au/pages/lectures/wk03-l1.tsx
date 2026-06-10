import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "How type works: anatomy, classification, and voice",
  date: "Week 3, Lecture 1",
  week: 3,
  topics: [
    "Serif, sans-serif, and display: how classification predicts character and where it breaks down",
    "X-height, cap height, and apparent size: why two fonts at the same point size look different",
    "Stress and contrast: the diagonal axis and thick-to-thin stroke variation",
    "Choosing a typeface that matches the brand voice of your product",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk03-l1.pdf",
  readings: [
    {
      title: "Week 3 reading: typography for product builders",
      href: "/c/design-for-builders-26au/readings/wk03",
    },
    {
      title: "Flux Academy: how to choose fonts, step by step (Segall 2024)",
      href: "https://www.youtube.com/watch?v=OUp7ale49lI",
    },
    {
      title: "Smashing Magazine: typographic hierarchies (Hoffmann 2022)",
      href: "https://www.smashingmagazine.com/2022/10/typographic-hierarchies/",
    },
  ],
  followups: [
    "Find two typefaces on Google Fonts: one with a large x-height and one with a small x-height. Set both at 16px body size in Figma. Which one reads larger? Measure the cap height in pixels and compare.",
    "Hoffmann (2022) names six variables for typographic hierarchy: proximity/space, weight, size, combined size and weight, color, and visual punctuation. Find a real product homepage and identify which three variables it uses most. Which one is missing?",
    "Describe the &ldquo;voice&rdquo; of a humanist sans-serif versus a geometric sans-serif in your own words. Name one product brand that fits each and justify the match using at least one anatomical term from the lecture.",
    "Segall (2024) walks through choosing a typeface by first identifying brand voice, then searching Google Fonts by classification. Apply that sequence to your own product. What three adjectives describe your brand voice? Which two Google Font categories are most consistent with those adjectives?",
    "A typeface has high stroke contrast (thick verticals, thin horizontals) and a pronounced diagonal stress axis. Is it more likely to be a humanist serif, a transitional serif, or a geometric sans? Explain why the stress axis gives you that information.",
  ],
};

export function Wk03L1() {
  return <LecturePage spec={spec} />;
}

export const wk03L1SearchBody =
  "type anatomy classification serif sans-serif display x-height cap height apparent size stress contrast stroke diagonal axis humanist transitional geometric typeface voice brand typography Week 3 Lecture 1 design for builders founders engineers";
