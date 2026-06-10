import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Landing-page anatomy: hero, social proof, features, CTA",
  date: "Week 6, Lecture 1",
  week: 6,
  topics: [
    "Hero patterns that work: centered, split, and hero-with-product-shot",
    "Social proof placement: where the band lives and why it matters",
    "Feature triplets: three-column layout, icon choice, and copy discipline",
    "Bottom-of-page CTAs: how to end a page so visitors convert",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk06-l1.pdf",
  readings: [
    {
      title: "Week 6 reading: the anatomy of a converting landing page",
      href: "/c/design-for-builders-26au/readings/wk06",
    },
    {
      title:
        "Required: Ran Segall (Flux Academy), How to Design a Landing Page (live session)",
      href: "https://www.youtube.com/watch?v=akLlA0wcOlQ",
    },
    {
      title:
        "Required: Steve Schoger (CSS Day 2019), Refactoring UI",
      href: "https://www.youtube.com/watch?v=7Z9rrryIOC4",
    },
  ],
  followups: [
    "Open three SaaS landing pages you use or admire. For each one, draw a wireframe skeleton (hero, social proof band, features, FAQ, CTA) on paper or in Figma. Which sections are in the same order across all three? Which ones vary? Why do you think the order converged?",
    "Segall (2023) narrates each decision as he designs: hero copy before hero imagery, social proof before feature detail. Pick one decision he makes that surprised you and write one paragraph explaining why you think he made that choice rather than the alternative.",
    "Schoger (CSS Day 2019) opens with a series of UI makeovers. Apply his whitespace and contrast reasoning to a hero section you find visually cluttered. Name two specific changes from the lecture you would make and predict the visual effect of each.",
    "The lecture covers three hero layouts: centered text, text-left product-right split, and full-bleed product shot. Find a real SaaS product that uses each. For your own product, which layout fits best and why? Use terms from the lecture: hierarchy, visual weight, and the F-pattern scan.",
    "Build the skeleton of a landing page in Figma using the five sections from lecture: hero, social proof band, feature triplet, FAQ, and bottom CTA. Do not design the content yet. Use only gray rectangles, correctly sized, on an 8-point grid. Measure the vertical rhythm between sections. What spacing value creates the clearest sense of section separation?",
  ],
};

export function Wk06L1() {
  return <LecturePage spec={spec} />;
}

export const wk06L1SearchBody =
  "landing page anatomy hero social proof features CTA section layout hero patterns centered split product shot social proof band feature triplet bottom CTA converting landing page SaaS Week 6 Lecture 1 design for builders founders engineers";
