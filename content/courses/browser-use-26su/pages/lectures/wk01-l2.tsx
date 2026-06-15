import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The loop in three moves",
  date: "Week 1, Lecture 2",
  week: 1,
  topics: [
    "Perceive: how a BrowserSession captures the current page as a browser-state summary",
    "Decide: how the LLM receives a structured prompt and must reply in a known shape",
    "Act: how the chosen action runs in the browser and its result feeds back into the next step",
    "max_steps and the stopping condition: when the loop ends",
    "Reading the agent history: what each step's record tells you",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk01-l2.pdf",
  readings: [
    {
      title: "Week 1 reading: what browser-use is and the perceive-decide-act loop",
      href: "/c/browser-use-26su/readings/wk01",
      note: "Required before section",
    },
    {
      title: "browser_use/agent/service.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py",
      note: "The core run loop: state capture, decision, action dispatch, and feedback",
    },
    {
      title: "Browser Use docs: Agent Settings (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/agent-settings",
      note: "All Agent constructor parameters including max_steps and max_failures",
    },
  ],
  followups: [
    "Outcome (Explain): Draw the perceive-decide-act loop from memory. Label what data moves between each phase and which part of browser-use is responsible for each phase.",
    "Outcome (Apply): Run a browser-use agent on a task that takes at least three steps. Print or inspect the history after the run. For each step, name the phase (perceive, decide, act) and what happened.",
    "Outcome (Analyze): Set max_steps=2 on a task that would normally take five steps. What does the agent do when it hits the limit? What does the history show?",
    "Outcome (Explain): Explain why the agent must reply in a structured shape rather than free text, and what would break if it returned plain prose instead.",
  ],
};

export function Wk01L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk01L2SearchBody =
  "perceive decide act loop browser state summary LLM controller structured output max_steps stopping condition agent history BrowserSession step feedback run loop Week 1 Lecture 2 browser-use course";
