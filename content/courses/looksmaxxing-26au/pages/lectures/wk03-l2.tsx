import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The four-product routine and why most people overcomplicate it",
  date: "Week 3 Lecture 2",
  week: 3,
  topics: [
    "Cleansers: surfactant types, pH, and how to choose without drying out",
    "Sunscreen: SPF, broad-spectrum, PA ratings, and why application amount matters",
    "Moisturizer: occlusion, humectants, emollients, and barrier support",
    "Topical retinoids: OTC retinol vs prescription tretinoin, start protocols",
    "Active acne treatment: salicylic acid vs benzoyl peroxide, who needs what",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk03-l2.pdf",
  readings: [
    {
      title: "Week 3 reading: Skincare from skin biology forward",
      href: "/c/looksmaxxing-26au/readings/wk03",
      note: "Required before section",
    },
    {
      title: "10 Sunscreen Mistakes to Avoid (Dr. Sam Ellis, 2022)",
      href: "https://www.youtube.com/watch?v=fF4k2hP79j4",
      note: "Common application errors, SPF math, and the PA system explained",
    },
    {
      title: "SALICYLIC ACID VERSUS BENZOYL PEROXIDE (Dr. Dray, 2020)",
      href: "https://www.youtube.com/watch?v=MyPm5CUfEOU",
      note: "When to use each OTC acne treatment and how they interact with retinoids",
    },
    {
      title: "SIMPLE 4 STEP SKINCARE ROUTINE (James Welsh, 2019)",
      href: "https://www.youtube.com/watch?v=9R7EGdTtTe4",
      note: "Four-product framework targeted at male beginners",
    },
  ],
  followups: [
    "Outcome (Explain): Describe the skin barrier and how cleansers, sunscreen, and retinoids act on it. Use the mechanism, not just the product name.",
    "Outcome (Implement): Implement a minimum-viable AM and PM skincare routine for your skin type, then write one sentence per product defending why it is in the routine.",
    "Outcome (Compare): Compare a mineral and a chemical sunscreen of your choice on SPF, PA or PPD rating, and texture. State which you would use daily and why.",
  ],
};

export function Wk03L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk03L2SearchBody =
  "four-product routine cleanser surfactant sunscreen SPF broad-spectrum PA UVA moisturizer occlusion humectant retinoid tretinoin retinol salicylic acid benzoyl peroxide acne treatment lecture Week 3 skincare routine men beginners";
