import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "When agents go wrong",
  date: "Week 8 Lecture 1",
  week: 8,
  topics: [
    "Loop detection: how browser-use spots repeated actions and stagnant pages",
    "max_steps caps total work; max_failures caps consecutive errors",
    "final_response_after_failure: forcing a done action instead of a silent abort",
    "Reading failure signals from the agent history after a run",
    "The pattern: cap, detect, force, diagnose",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk08-l1.pdf",
  readings: [
    {
      title: "Week 8 reading: Making agents reliable",
      href: "/c/browser-use-26su/readings/wk08",
      note: "Required before section",
    },
    {
      title: "Browser Use docs: Agent Settings (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/agent-settings",
      note: "max_failures, final_response_after_failure, loop_detection_enabled, and all reliability parameters",
    },
    {
      title: "browser_use/agent/service.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py",
      note: "The run loop: where loop detection, failure counting, and forced done are implemented",
    },
  ],
  followups: [
    "Outcome (Analyze): An agent runs 20 steps without calling done, then stops. Explain two distinct mechanisms that could have halted it and how you would tell them apart by reading the history.",
    "Outcome (Apply): Set max_failures=2 and final_response_after_failure=True on a real agent. Run it against a page where an action will fail (e.g., click a non-existent element index). Observe what the agent emits as its final output.",
    "Outcome (Explain): Describe in plain words what loop_detection_enabled does and why turning it off might cause an agent to consume all its steps on a page that never changes.",
  ],
};

export function Wk08L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk08L1SearchBody =
  "loop detection repeated actions stagnant page max_steps max_failures final_response_after_failure agent history failure signals forced done reliability week 8 lecture 1 browser use when agents go wrong";
