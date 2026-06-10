import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Beards, stubble, and the eyebrow line",
  date: "Week 8 Lecture 1",
  week: 8,
  topics: [
    "Patchy beard reality check: genetics, age, and what actually changes between 18 and 28",
    "Stubble length progression by week: sandpaper to soft, and where each stage lands",
    "Cheek lines and neck lines: how high, how clean, and the neckbeard trap",
    "Face-shape-matched beard shaping: what adds length, what adds width (Matty Conrad / GQ, 2024)",
    "Eyebrow shape preservation: work beneath the brow, never reshape the arch",
    "Razor vs trimmer: which tool belongs where",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk08-l1.pdf",
  readings: [
    {
      title: "Week 8 reading: Beard, brows, fragrance, hands",
      href: "/c/looksmaxxing-26au/readings/wk08",
      note: "Required before section",
    },
    {
      title:
        "TRANSFORM YOUR BEARD! 3 BEARD SHAPES YOU NEED TO KNOW (Matty Conrad / GQ, 2024)",
      href: "https://www.youtube.com/watch?v=TqhSR8zmo_g",
      note: "Face-shape matching for beards and stubble; cheek and neck line mechanics",
    },
    {
      title:
        "How to Shape Men's Eyebrows: Grooming Tutorial for Barbers (2025)",
      href: "https://www.youtube.com/watch?v=zik4_AgvsQ4",
      note: "Spoolie, scissors, tweezers , preserve the natural arch; treat source with caution (anonymous barber channel)",
    },
  ],
  followups: [
    "Outcome (Apply): Given a face shape and current beard density, choose the beard or stubble style that matches and explain the cheek and neck line placement",
    "Outcome (Demonstrate): Describe the correct tool and motion for eyebrow tidying that avoids overplucking the top arch",
  ],
};

export function Wk08L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk08L1SearchBody =
  "beard stubble eyebrows facial hair patchy beard genetics beard density cheek line neck line neckbeard face shape oval round square heart oblong beard shaping stubble progression razor trimmer spoolie tweezers eyebrow arch grooming Week 8 lecture 1";
