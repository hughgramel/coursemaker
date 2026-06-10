import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Color, context, and the capsule wardrobe",
  date: "Week 7 Lecture 2",
  week: 7,
  topics: [
    "Undertone and contrast: how to read your skin tone and what it tells you about color choices",
    "Neutrals as a foundation: why navy, grey, and olive do the heavy lifting",
    "The three-color rule: a practical constraint for assembling outfits that read intentional",
    "Dressing for context: casual, smart-casual, business-casual, and when each applies",
    "Building a five-look capsule wardrobe on a $300 budget",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk07-l2.pdf",
  readings: [
    {
      title: "Week 7 reading: Fit, color, and the five-look capsule",
      href: "/c/looksmaxxing-26au/readings/wk07",
      note: "Required before section",
    },
    {
      title:
        "COLOR THEORY basics FOR FASHION (Justine Leconte, 2017)",
      href: "https://www.youtube.com/watch?v=TnXDLThgiTU",
      note: "Color temperature, warm vs. cool hues, complementary and analogous pairings applied to wardrobe building",
    },
    {
      title:
        "All 12 Seasonal Colour Palettes for Men Explained (The VOU, 2023)",
      href: "https://thevou.com/blog/seasonal-colour-analysis-men-guide-find-your-colour-season/",
      note: "Undertone + contrast level framework for finding your color season; use lightly, tier-3 source",
    },
  ],
  followups: [
    "Outcome (Recommend): State your undertone (warm, cool, or neutral) using the vein-color test and recommend three neutrals and two accent colors suited to it.",
    "Outcome (Design): List the five looks in your capsule wardrobe, identify the garments needed for each, and total the estimated cost.",
  ],
};

export function Wk07L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk07L2SearchBody =
  "color theory undertone contrast skin tone warm cool neutral capsule wardrobe five looks three-color rule dressing for context casual smart casual business casual navy grey olive $300 budget seasonal color palette Week 7 lecture 2 looksmaxxing";
