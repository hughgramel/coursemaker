import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Teeth, alignment, and the jawline myth",
  date: "Week 6 Lecture 2",
  week: 6,
  topics: [
    "Whitening pathways: in-office peroxide, OTC strips, and toothpaste compared on cost, efficacy, and risk",
    "Intrinsic versus extrinsic staining and why OTC products fail on dentin discoloration",
    "Modern orthodontics: what braces and aligners can and cannot change in adults",
    "Mewing: zero peer-reviewed evidence per the AAO, and what happened to Mike Mew",
    "Masseter hypertrophy from chewing: real but small, often asymmetric",
    "Body-recomposition effects on jaw definition: the most honest path to a sharper jawline",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk06-l2.pdf",
  readings: [
    {
      title: "Week 6 reading: Dental, whitening, and the jawline myths",
      href: "/c/looksmaxxing-26au/readings/wk06",
      note: "Required before section",
    },
    {
      title:
        "Why Your Teeth Won’t Whiten (Dr. Joyce Kahng DDS, 2022)",
      href: "https://www.youtube.com/watch?v=3nJOG_7pro0",
      note: "Clinical decision framework: intrinsic vs extrinsic staining, OTC vs professional options",
    },
    {
      title:
        "Does Mewing Actually Reshape Your Jaw? (American Association of Orthodontists, 2023)",
      href: "https://aaoinfo.org/whats-trending/is-mewing-bad-for-you/",
      note: "AAO position: zero peer-reviewed studies support mewing for structural change in adults",
    },
  ],
  followups: [
    "Outcome (Compare): Compare in-office peroxide whitening, OTC whitening strips, and whitening toothpaste on three dimensions: mechanism of action, evidence of efficacy, and cost per treatment cycle. Give a concrete recommendation for someone with mild extrinsic staining.",
    "Outcome (Critique): Evaluate these three claims using the evidence hierarchy from week one: (1) mewing will reshape your jaw if you do it consistently; (2) chewing gum will give you a defined jawline; (3) adult braces can change your mandible shape. What does the evidence actually support for each?",
  ],
};

export function Wk06L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk06L2SearchBody =
  "teeth whitening pathways in-office OTC strips toothpaste whitening orthodontics adults mewing AAO jawline myths masseter hypertrophy chewing gum body recomposition jaw definition intrinsic extrinsic staining lecture week 6 looksmaxxing";
