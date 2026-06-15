import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Planning, memory, and task framing",
  date: "Week 8 Lecture 2",
  week: 8,
  topics: [
    "The planner: enable_planning, PlanItem, and when replanning fires",
    "Procedural memory: the memory field in AgentOutput across steps",
    "Task framing as reliability lever: clarity, scope, and expected output",
    "Decomposing a hard task into sequenced sub-goals the agent can track",
    "The bitter-lesson argument: minimal loop, maximal action space",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk08-l2.pdf",
  readings: [
    {
      title: "Week 8 reading: Making agents reliable",
      href: "/c/browser-use-26su/readings/wk08",
      note: "Required before section",
    },
    {
      title: "browser_use/agent/views.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py",
      note: "AgentOutput fields: memory, next_goal, plan_update, PlanItem; AgentBrain structure",
    },
    {
      title: "The Bitter Lesson of Agent Frameworks (browser-use team, Gregor Zunič, 2026)",
      href: "https://browser-use.com/posts/bitter-lesson-agent-frameworks",
      note: "Argues for a minimal loop with a maximal action space rather than heavy abstraction layers",
    },
  ],
  followups: [
    "Outcome (Apply): Enable planning on an agent (enable_planning=True). Run a multi-step task and inspect the plan field in AgentState after the run. Print each PlanItem and its status. Which items were marked done, which were skipped?",
    "Outcome (Explain): After three consecutive failed steps, planning_replan_on_stall fires. Explain in two sentences what replanning does differently from the default step loop and why a stall is a good trigger for it.",
    "Outcome (Evaluate): You have a task: 'Do useful research on the web.' Rewrite it in a way that gives the agent a better chance of succeeding. State at least three concrete changes you made and the reasoning behind each.",
  ],
};

export function Wk08L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk08L2SearchBody =
  "planner model enable_planning PlanItem replan stall procedural memory memory field task framing task decomposition sub-goals bitter lesson minimal loop maximal action space week 8 lecture 2 browser use planning memory reliability";
