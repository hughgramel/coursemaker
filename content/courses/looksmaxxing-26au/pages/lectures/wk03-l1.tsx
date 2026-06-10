import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Skin biology for the impatient",
  date: "Week 3 Lecture 1",
  week: 3,
  topics: [
    "The skin barrier: stratum corneum, lipids, and what breaks it",
    "Sebum, microbiome, and the root cause of most common acne",
    "Photoaging: UV damage, collagen degradation, cumulative risk",
    "Cell turnover and why speed matters for appearance",
    "How retinoids accelerate turnover and repair the barrier",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk03-l1.pdf",
  readings: [
    {
      title: "Week 3 reading: Skincare from skin biology forward",
      href: "/c/looksmaxxing-26au/readings/wk03",
      note: "Required before section",
    },
    {
      title: "SKINCARE RESET 2023: How to HEAL YOUR SKIN (Dr. Dray, 2023)",
      href: "https://www.youtube.com/watch?v=DVerMPTyACk",
      note: "Board-certified dermatologist on barrier repair and minimum-viable routine",
    },
    {
      title: "How to Start on Retinoids (Michelle Wong PhD, Lab Muffin Beauty Science, 2019)",
      href: "https://www.youtube.com/watch?v=I2XV3nMyb9Y",
      note: "Evidence base for retinoids; retinoid ladder from retinol to tretinoin",
    },
  ],
  followups: [
    "Outcome (Explain): Describe the skin barrier in your own words: what it is made of, what damages it, and which ingredients help repair it.",
    "Outcome (Implement): Write out a draft AM and PM routine for your skin type. Include only products you can name a mechanism for.",
    "Outcome (Compare): List three sunscreen products and compare them on SPF number, UVA rating, and one ingredient difference.",
  ],
};

export function Wk03L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk03L1SearchBody =
  "skin biology skin barrier stratum corneum sebum acne photoaging UV cell turnover retinoids tretinoin retinol lecture Week 3 dermatology barrier repair ceramides";
