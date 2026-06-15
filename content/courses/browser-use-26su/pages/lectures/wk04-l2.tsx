import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Inside AgentOutput",
  date: "Week 4 Lecture 2",
  week: 4,
  topics: [
    "evaluation_previous_goal, memory, next_goal: what each field does",
    "The action list and ActionModel: how the agent picks and parameterizes actions",
    "AgentBrain and the current_state property",
    "The MessageManager: how the system prompt and history become LLM input",
    "The native LLM layer: ChatOpenAI, ChatAnthropic, ChatGoogle (not LangChain)",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk04-l2.pdf",
  readings: [
    {
      title: "Week 4 reading: The decision step and structured output",
      href: "/c/browser-use-26su/readings/wk04",
      note: "Required before section",
    },
    {
      title: "Browser Use docs: Supported Models (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/supported-models",
      note: "ChatOpenAI, ChatAnthropic, ChatGoogle, and the full native model list",
    },
    {
      title: "GitHub issue #2137: migrate from LangChain to native LLM wrappers (browser-use community, 2025)",
      href: "https://github.com/browser-use/browser-use/issues/2137",
      note: "Documents the move away from LangChain as a core dependency",
    },
  ],
  followups: [
    "Outcome (Explain): What is the difference between AgentOutput and AgentBrain? Which one does the LLM produce, and which one is a view onto it?",
    "Outcome (Apply): Open agent.history after a three-step run. For each step, read evaluation_previous_goal and say whether the agent judged its last action successful.",
    "Outcome (Analyze): The MessageManager assembles messages each step. Name three sources of content it pulls from and explain why the order in which they appear in the prompt matters.",
  ],
};

export function Wk04L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk04L2SearchBody =
  "AgentOutput AgentBrain evaluation_previous_goal memory next_goal action list ActionModel current_state MessageManager system prompt history native LLM layer ChatOpenAI ChatAnthropic ChatGoogle LangChain removed browser-use week 4 lecture 2 inside agent output";
