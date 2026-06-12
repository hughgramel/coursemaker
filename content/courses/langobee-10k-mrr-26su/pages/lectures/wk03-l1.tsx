import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Quality is binary",
  date: "Week 3, Lecture 1",
  week: 3,
  topics: [
    "The broken-vacuum problem: what early Discord users were actually handed",
    "Must-work checklists: the minimum bar before inviting anyone",
    "Dogfooding vs the user's shoes: why founder eyes miss breakage",
    "Reading rageclicks: where session recordings tell the truth",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk03-l1.pdf",
  readings: [
    {
      title: "Week 3 reading: The broken-vacuum bar and the guided first session",
      href: "/c/langobee-10k-mrr-26su/readings/wk03",
      note: "Required before section",
    },
    {
      title: "How to Plan an MVP (Y Combinator / Michael Seibel, 2019)",
      href: "https://www.youtube.com/watch?v=1hHMwLxN6EM",
      note: "The quality bar for a narrow first use case: it must actually work",
    },
    {
      title: "How Superhuman Built an Engine to Find Product/Market Fit (First Round / Vohra, 2018)",
      href: "https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/",
      note: "Diagnosing onboarding barriers through the 'very disappointed' survey",
    },
  ],
  followups: [
    "Outcome (Apply): Open PostHog and pull the last 30 days of rageclick events. List every element that triggered more than 3 rageclicks. Write one sentence on what each element probably looked like to the user.",
    "Outcome (Apply): Write LangoBee's must-work checklist covering the five surfaces: feed loads, captions render, word-tap popup works, content never runs out, signup works on iPhone Safari PWA and desktop Chrome. Each item is a binary pass or fail.",
    "Outcome (Analyze): LangoBee has a 34-second median session. Name the three most likely explanations, in order of probability, based on what PostHog's session recordings would show.",
  ],
};

export function Wk03L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk03L1SearchBody =
  "broken vacuum quality binary must-work checklist dogfooding session recordings rageclicks onboarding breakage LangoBee feed captions word tap popup iPhone Safari PWA desktop Chrome lecture Week 3";
