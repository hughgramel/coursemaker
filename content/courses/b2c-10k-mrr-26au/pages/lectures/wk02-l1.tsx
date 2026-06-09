import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Activation",
  date: "Week 2 Lecture 1",
  week: 2,
  topics: [
    "Defining the activation event for YOUR product",
    "Time-to-value and why it dominates retention",
    "The 'aha moment' framing and its failure modes",
    "Activation rate as the highest-leverage metric early",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk02-l1.pdf",
  readings: [
    {
      title: "Week 2 reading: Activation — the first 60 seconds",
      href: "/c/b2c-10k-mrr-26au/readings/wk02",
      note: "Required before section",
    },
    {
      title: "What is a good activation rate (Lenny Rachitsky & Yuriy Timen, 2022)",
      href: "https://www.lennysnewsletter.com/p/what-is-a-good-activation-rate",
      note: "Survey of 500+ products; average 34%, median 25%",
    },
    {
      title: "How to determine your activation metric (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/how-to-determine-your-activation",
      note: "Three-step methodology with examples from Figma, Slack, Airtable",
    },
  ],
  followups: [
    "Outcome: Apply — Write your product's activation event in one sentence a new user would recognize. What data do you already have that confirms it?",
    "Outcome: Analyze — Lenny Rachitsky distinguishes a 'good' activation metric (causal) from a correlative one. Name one metric in your current analytics that is correlative but not causal, and explain why.",
    "Outcome: Create — Your current activation rate is X%. Name the one onboarding step you would change first, and describe how you would measure whether that change worked.",
  ],
};

export function Wk02L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk02L1SearchBody =
  "activation event aha moment time-to-value activation rate onboarding retention lecture Week 2 B2C growth";
