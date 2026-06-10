import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Fit is the whole game",
  date: "Week 7 Lecture 1",
  week: 7,
  topics: [
    "The shoulder seam test: the one point that determines whether a garment fits",
    "Pant rise and break: the two measurements most men get wrong",
    "Tailoring 101: what is alterable, what is not, and what it costs",
    "Body proportions and visual balance: dressing the frame you have now",
    "What a rotating wardrobe actually looks like in a small closet",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk07-l1.pdf",
  readings: [
    {
      title: "Week 7 reading: Fit, color, and the five-look capsule",
      href: "/c/looksmaxxing-26au/readings/wk07",
      note: "Required before section",
    },
    {
      title:
        "The Ultimate Guide For How Your Clothes Should Fit (Brian Sacawa, He Spoke Style, 2022)",
      href: "https://hespokestyle.com/how-clothes-should-fit/",
      note: "Written fit guide covering every garment category, from shoulder to pant break",
    },
    {
      title:
        "How Men's Clothing Should Fit , Playlist (Antonio Centeno, Real Men Real Style, 2022)",
      href: "https://www.youtube.com/playlist?list=PLbAUemeg-KycrJ-tcoDdfqnL32_7HvvLN",
      note: "Visual before/after comparisons for shoulder seam, sleeve length, shirt taper, trouser rise",
    },
  ],
  followups: [
    "Outcome (Apply): Run a four-point fit check (shoulder seam, chest, sleeve length, pant rise/break) on a jacket or shirt and state what passes and what fails.",
    "Outcome (Apply): Identify one item in your closet that can be corrected by a tailor and one that cannot, and explain the difference.",
  ],
};

export function Wk07L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk07L1SearchBody =
  "fit clothing shoulder seam test pant rise pant break tailoring body proportions visual balance rotating wardrobe capsule wardrobe men style fit check jacket shirt trouser sleeve length chest alteration budget Week 7 lecture 1 looksmaxxing";
