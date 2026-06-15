import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Making the model answer in a known shape",
  date: "Week 4 Lecture 1",
  week: 4,
  topics: [
    "Free text vs structured output: what changes when you constrain the reply",
    "Pydantic schemas: turning a Python class into a contract",
    "Function calling and tool calling: how providers enforce the schema",
    "Why structure makes the agent loop reliable and parse-safe",
    "The AgentOutput type and how it is built from the tools registry",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk04-l1.pdf",
  readings: [
    {
      title: "Week 4 reading: The decision step and structured output",
      href: "/c/browser-use-26su/readings/wk04",
      note: "Required before section",
    },
    {
      title: "browser_use/agent/views.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py",
      note: "AgentOutput, AgentBrain, and all agent data models",
    },
    {
      title: "Browser Use docs: Agent Settings (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/agent-settings",
      note: "Every Agent constructor parameter, including LLM and output options",
    },
  ],
  followups: [
    "Outcome (Explain): In your own words, explain why returning free text from the LLM would break the perceive-decide-act loop. What would the framework have no way to do?",
    "Outcome (Analyze): Pydantic's ConfigDict(extra='forbid') appears on AgentOutput. What does that guarantee, and why does it matter at parse time?",
    "Outcome (Apply): Sketch the AgentOutput you would expect the model to produce for step 1 of the task 'Go to news.ycombinator.com and find the top post title.' Include all fields.",
  ],
};

export function Wk04L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk04L1SearchBody =
  "structured output free text Pydantic schema function calling tool calling AgentOutput agent loop reliable parse-safe tools registry ActionModel browser-use agent views week 4 lecture 1 decision step LLM shape contract";
