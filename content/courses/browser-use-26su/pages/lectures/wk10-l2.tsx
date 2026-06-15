import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Capstone studio and review",
  date: "Week 10 Lecture 2",
  week: 10,
  topics: [
    "Worked example: tracing a complete agent end to end from task string to validated output",
    "Adding reliability guards: max_steps, max_failures, a planner model, and task framing that prevents loops",
    "Measuring success with a task-set scorecard: what to count, how to categorize failures, and when a score misleads",
    "Presenting and defending a design: the agent-scorecard rubric and the questions to expect",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk10-l2.pdf",
  readings: [
    {
      title: "Week 10 reading: designing a complete agent end to end",
      href: "/c/browser-use-26su/readings/wk10",
      note: "Required before section. The worked example and scorecard design are covered in full.",
    },
    {
      title: "An Illusion of Progress? Assessing the Current State of Web Agents (COLM 2025, arXiv 2504.01382)",
      href: "https://arxiv.org/abs/2504.01382",
      note: "Why task-set scores can mislead on live websites versus cached snapshots",
    },
    {
      title: "browser_use/agent/views.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py",
      note: "AgentOutput and AgentBrain: the structured shape the loop relies on at every step",
    },
  ],
  followups: [
    "Outcome (Evaluate): Run your capstone agent against five tasks from your task set. For each failure, classify it as: wrong action selected, stuck in a loop, auth failure, output schema mismatch, or step-limit hit. Say which class points to a task-framing fix versus a code fix.",
    "Outcome (Analyze): A peer shows you a task-set score of 80%. Ask three questions before deciding whether that score is meaningful. Ground each question in something from the reading or lecture.",
    "Outcome (Create): Prepare a three-minute defense of your agent design. Explain the task, justify one tool choice, show the output schema, describe one reliability guard, and report two scorecard results including one failure.",
  ],
};

export function Wk10L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk10L2SearchBody =
  "worked example complete agent end to end reliability guards max_steps max_failures planner model task framing loops task-set scorecard measuring success failure categories agent-scorecard rubric presenting defending design capstone studio review week 10 lecture 2 browser-use synthesis";
