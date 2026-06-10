import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Eating for a visible jawline",
  date: "Week 5 Lecture 2",
  week: 5,
  topics: [
    "Caloric balance: maintenance, surplus, and deficit, and why the number matters",
    "Protein intake research: ISSN 1.4-2.0 g/kg recommendation and how to hit it",
    "Body recomposition vs deliberate cut or bulk: when each approach fits",
    "Hydration and sodium: water retention, face puffiness, and what you can actually control",
    "Realistic timelines: what ten weeks of consistent work actually delivers",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk05-l2.pdf",
  readings: [
    {
      title: "Week 5 reading: Strength, protein, and body recomposition",
      href: "/c/looksmaxxing-26au/readings/wk05",
      note: "Required before section. Includes the protein and calorie calculation example.",
    },
    {
      title: "International Society of Sports Nutrition Position Stand: Protein and Exercise (Jäger et al., 2017)",
      href: "https://link.springer.com/article/10.1186/s12970-017-0177-8",
      note: "ISSN consensus on 1.4-2.0 g/kg/day protein for exercising individuals",
    },
    {
      title: "The Ultimate Guide to Body Recomposition (Jeff Nippard, 2020)",
      href: "https://www.youtube.com/watch?v=OHeArouYfN0",
      note: "30-min guide to simultaneous fat loss and muscle gain: conditions, protein targets, timelines",
    },
  ],
  followups: [
    "Outcome (Calculate): Calculate your maintenance calories and daily protein target from your body weight. Show the arithmetic.",
    "Outcome (Differentiate): Differentiate a cut, a bulk, and a recomposition by their goal, caloric balance, and realistic ten-week expectation.",
  ],
};

export function Wk05L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk05L2SearchBody =
  "caloric balance maintenance calories protein intake ISSN 1.4 2.0 grams per kilogram body recomposition cut bulk fat loss muscle gain jawline water retention sodium hydration timeline lecture week 5 looksmaxxing nutrition";
