import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "What a thesis is for",
  date: "Week 2 Lecture 1",
  week: 2,
  topics: [
    "Locked decisions vs re-revisable ones: why the distinction matters",
    "The THESIS.md discipline: writing commitments in version-controlled text",
    "LangoBee's current premium-library thesis stated precisely",
    "Drift: how the shorts direction emerged without a decision",
    "Changing your mind on purpose vs changing by default",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk02-l1.pdf",
  readings: [
    {
      title: "Week 2 reading: Thesis discipline and the fork decision",
      href: "/c/langobee-10k-mrr-26su/readings/wk02",
      note: "Required before section",
    },
    {
      title: "Pivot, Don't Jump to a New Vision (Eric Ries, 2009)",
      href: "http://www.startuplessonslearned.com/2009/06/pivot-dont-jump-to-new-vision.html",
      note: "The founding text on thesis discipline: a pivot is a structured experiment, not a crisis response",
    },
    {
      title: "Why Everything We've Been Taught About Quitting Is Wrong (Annie Duke / First Round, 2022)",
      href: "https://review.firstround.com/podcast/why-everything-weve-been-taught-about-quitting-is-wrong-annie-duke/",
      note: "Kill-criteria framework: write state-plus-date conditions before the experiment starts",
    },
  ],
  followups: [
    "Outcome (Analyze): State LangoBee's current premium-library thesis as a single falsifiable sentence. What metric would confirm it? What metric would falsify it? If you cannot answer both questions, the thesis is not written yet.",
    "Outcome (Apply): Open a new file called THESIS.md in your repo. Write the locked claim, the win condition, and the kill threshold for the current library direction. Version-control it. If you decide to update it, update it intentionally with a commit message that names what changed and why.",
    "Outcome (Explain): What is the difference between a locked decision and a permanent one? Give a concrete example from LangoBee's current situation.",
  ],
};

export function Wk02L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk02L1SearchBody =
  "thesis locked decision THESIS.md drift pivot persevere premium library shorts feed falsifiable hypothesis win condition kill threshold week 2 lecture 1 LangoBee foundations";
