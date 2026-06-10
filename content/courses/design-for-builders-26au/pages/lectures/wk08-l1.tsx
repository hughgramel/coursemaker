import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Logos: wordmarks, marks, and lockups",
  date: "Week 8, Lecture 1",
  week: 8,
  topics: [
    "Wordmark vs mark vs combo mark: how each type works and why most startups choose a wordmark",
    "Negative space and silhouette: the two tests every logo must pass before it ships",
    "Designing for favicon size and OG image size: why small beats complex every time",
    "Lockups: horizontal, stacked, and icon-only, and when to use each",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk08-l1.pdf",
  readings: [
    {
      title: "Week 8 reading: brand identity for product builders",
      href: "/c/design-for-builders-26au/readings/wk08",
    },
    {
      title:
        "Chris Do (The Futur): The Power of Design, Chris Do on Brand Logos (2022)",
      href: "https://thefutur.com/content/the-power-of-design-chris-do-on-brand-logos",
    },
    {
      title: "Zimri Mayfield: Design a Perfect Original Logo with These Steps (2022)",
      href: "https://www.youtube.com/watch?v=ZPEiw_CeHxo",
    },
    {
      title: "Wordmark Logo Design in Figma, tutorial (2023)",
      href: "https://www.youtube.com/watch?v=jxjVidIzDVU",
    },
  ],
  followups: [
    "Chris Do (The Futur, 2022) says a logo must work as a silhouette. Take any logo you like. Open Figma, paste the SVG, and fill every layer with a solid black. Does the shape still read clearly? If not, what detail is doing work that the silhouette cannot hold?",
    "Describe three products where a wordmark is the right choice and one where a standalone mark works better. For the mark exception, name the specific reason: does the brand have enough visual equity, enough context, or does the product’s name resist readable letterforms at small size?",
    "At 16x16px a favicon can render at most about four or five letterforms before the type becomes illegible. Pick a five-word product name. Design three favicon candidates: one initial, one abstract mark, one letterform. Which reads best at 16x16? Why?",
    "Mayfield (2022) starts every logo project with concept sketching before opening any software. Sketch five rough wordmark concepts for your product using only a pen. Do not worry about letterform quality. What did sketching reveal about the product name’s visual potential that you did not know before you started?",
    "Find a logo that uses a combo mark (wordmark plus a separate mark). Export the mark alone at 32x32px. Does it work without the wordmark, or does it depend on the wordmark for context? What does that tell you about how much visual equity the mark has built independently?",
  ],
};

export function Wk08L1() {
  return <LecturePage spec={spec} />;
}

export const wk08L1SearchBody =
  "wordmark mark combo mark logo lockup silhouette negative space favicon OG image startup logo design brand identity horizontal stacked icon-only lockups Week 8 Lecture 1 design for builders founders engineers";
