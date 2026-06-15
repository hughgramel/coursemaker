import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Putting the loop to work",
  date: "Week 10 Lecture 1",
  week: 10,
  topics: [
    "Scoping a real multi-step task: what makes a task agent-ready and how to decompose one that is not",
    "Choosing built-in vs custom tools: when click/navigate/extract is enough and when to write a @tools.action handler",
    "Designing the output schema: from prose done to a typed Pydantic output model with validated fields",
    "Auth and secrets in production: persistent profiles, sensitive_data placeholders, and allowed_domains",
    "Connecting all ten weeks: perceive-decide-act, selector map, AgentOutput, tools, reliability guards",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk10-l1.pdf",
  readings: [
    {
      title: "Week 10 reading: designing a complete agent end to end",
      href: "/c/browser-use-26su/readings/wk10",
      note: "Required before section. Covers scoping, output schema design, auth, reliability, and the full worked example.",
    },
    {
      title: "Browser Use docs: Agent Settings (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/agent-settings",
      note: "Every Agent constructor parameter: llm, tools, max_steps, max_failures, planner, sensitive_data, output_model",
    },
    {
      title: "browser_use/agent/service.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py",
      note: "The run loop tying all ten weeks together: perceive, decide, act, and stop conditions",
    },
    {
      title: "The Bitter Lesson of Agent Frameworks (Gregor Žunič, browser-use team, 2026)",
      href: "https://browser-use.com/posts/bitter-lesson-agent-frameworks",
      note: "The design philosophy behind a minimal loop and a maximal action space",
    },
  ],
  followups: [
    "Outcome (Create): Pick a real multi-step task you want to automate. Write a one-paragraph task string that would pass the agent-ready checklist from lecture: clear goal, named stopping condition, no ambiguous pronouns, and one task per agent.",
    "Outcome (Evaluate): For your chosen task, list every distinct action needed. Sort them into two columns: covered by built-in actions, and needs a custom tool. State the criterion you used to put each action in its column.",
    "Outcome (Analyze): Design a Pydantic output model for your task. Name each field, its type, and whether it is Optional. Explain why you chose typed fields over a prose done string for this particular task.",
  ],
};

export function Wk10L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk10L1SearchBody =
  "scoping real task agent-ready multi-step decompose built-in vs custom tools @tools.action output schema Pydantic output model auth secrets production persistent profiles sensitive_data allowed_domains perceive-decide-act selector map AgentOutput reliability guards capstone design week 10 lecture 1 browser-use synthesis";
