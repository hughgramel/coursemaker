import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The looksmaxxing landscape and how to read it",
  date: "Week 1 Lecture 2",
  week: 1,
  topics: [
    "Soft vs hardmaxxing: where the evidence supports each",
    "An evidence hierarchy for evaluating self-improvement claims",
    "Forum claims vs peer review: how to spot the difference",
    "Bonesmashing debunked: absence of disproof is not proof",
    "Mewing debunked: zero peer-reviewed studies support structural change in adults",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk01-l2.pdf",
  readings: [
    {
      title: "Week 1 reading: Attractiveness research and what you can actually change",
      href: "/c/looksmaxxing-26au/readings/wk01",
      note: "Required before section",
    },
    {
      title: "Does Mewing Actually Reshape Your Jaw? (AAO, 2023)",
      href: "https://aaoinfo.org/whats-trending/is-mewing-bad-for-you/",
      note: "Official AAO position: zero peer-reviewed studies support mewing for structural change",
    },
    {
      title: "There’s no good evidence against bonesmashing (looksmax.org, 2022)",
      href: "https://looksmax.org/threads/theres-no-good-evidence-against-bonesmashing.1051845/",
      note: "Primary document used as a critique exercise; read as an example of reversed burden of proof",
    },
  ],
  followups: [
    "Outcome (Distinguish): Distinguish features under behavioral control from features that are genetically fixed, using the soft vs hardmaxxing framework.",
    "Outcome (Critique): Apply the evidence hierarchy from lecture to one claim in a looksmaxxing forum post, labeling it supported, suggestive, or unfounded.",
  ],
};

export function Wk01L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk01L2SearchBody =
  "soft hardmaxxing evidence hierarchy forum claims peer review bonesmashing mewing debunk AAO jawline myth looksmaxxing landscape burden of proof week 1 lecture 2";
