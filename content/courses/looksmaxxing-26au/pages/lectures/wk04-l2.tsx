import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Wash, cut, style",
  date: "Week 4 Lecture 2",
  week: 4,
  topics: [
    "Hair typing: the Andre Walker system and its practical purpose",
    "Shampoo and conditioner basics: surfactants, protein, moisture balance",
    "Wash frequency by hair type: why straight and coily hair have opposite needs",
    "Face-shape-matched cuts: oval, round, square, heart, diamond, oblong",
    "Talking to your barber: vocabulary, reference photos, growth-pattern awareness",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk04-l2.pdf",
  readings: [
    {
      title: "Week 4 reading: Hair, hair loss, and a haircut that fits your face",
      href: "/c/looksmaxxing-26au/readings/wk04",
      note: "Required before section",
    },
    {
      title:
        "Andre Talks hair and the infamous hair typing system (Andre Walker, 2021)",
      href: "https://www.youtube.com/watch?v=WOrm2N9KKl0",
      note: "Primary source on the four-category hair typing system and its product-matching purpose",
    },
    {
      title:
        "How to choose the best haircut for your face shape (Matty Conrad / GQ, 2023)",
      href: "https://www.youtube.com/watch?v=zXIofF28eYk",
      note: "Face-shape identification and cut matching; hairline recession in early AGA",
    },
  ],
  followups: [
    "Outcome (Apply): Identify your hair type using the Andre Walker 1-4 A/B/C system and name one product or wash-frequency adjustment it implies",
    "Outcome (Recommend): Given a described face shape and hairline, state the cut goal (add length, add width, or reduce bulk) and name one specific cut that achieves it",
  ],
};

export function Wk04L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk04L2SearchBody =
  "hair typing Andre Walker system straight wavy curly coily wash frequency shampoo conditioner surfactant protein moisture face shape oval round square heart diamond oblong haircut barber reference photo growth pattern styling products Week 4 lecture 2";
