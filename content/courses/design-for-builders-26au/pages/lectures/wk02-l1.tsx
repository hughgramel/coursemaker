import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "CRAP and the four moves every designer makes",
  date: "Week 2, Lecture 1",
  week: 2,
  topics: [
    "Contrast: size, weight, color, and space as signals of importance",
    "Repetition: how recurring visual elements create a readable system",
    "Alignment: why every element should belong to an invisible grid",
    "Proximity: using whitespace to say &ldquo;these things are related&rdquo;",
    "Why beginners ignore alignment and how to stop",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk02-l1.pdf",
  readings: [
    {
      title: "Week 2 reading, Visual literacy: CRAP, Gestalt, and visual hierarchy",
      href: "/c/design-for-builders-26au/readings/wk02",
    },
    {
      title: "Required: Kelley Gordon (NN/G), 5 Principles of Visual Design in UX",
      href: "https://www.nngroup.com/articles/principles-visual-design/",
    },
    {
      title: "Required: Adam Wathan &amp; Steve Schoger (Refactoring UI), 7 Practical Tips for Cheating at Design",
      href: "https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886",
    },
  ],
  followups: [
    "Open the Figma starter kit you built in Week 1. Find one place where the contrast is too low to signal hierarchy. What would you change: size, weight, color, or space?",
    "Gordon (2020) says contrast is the most important visual tool for directing attention. Pick any screen in your phone. What element has the highest contrast? Is that the element you are supposed to look at first?",
    "Find one interface where repetition is broken: a button style, a heading style, or a spacing value that appears only once. Why does the inconsistency bother the eye even when the user cannot name it?",
    "Malewicz (2022) calls alignment the hardest principle for beginners to respect because &ldquo;it looks fine to me.&rdquo; Pick a layout you have built or admired. Toggle grid overlay on. Is everything actually on the grid?",
    "Take a card component with a label, a value, and a description. Rearrange just the whitespace (not the content) so the label and value read as one group and the description reads as a separate group. What changed?",
  ],
};

export function Wk02L1() {
  return <LecturePage spec={spec} />;
}

export const wk02L1SearchBody =
  "CRAP principles contrast repetition alignment proximity visual hierarchy designer moves beginners grid whitespace weight size color importance signal Week 2 Lecture 1 design for builders";
