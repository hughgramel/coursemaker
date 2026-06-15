import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Writing a custom action",
  date: "Week 6 Lecture 1",
  week: 6,
  topics: [
    "The @tools.action() decorator: registering a function on a Tools instance and passing tools to Agent",
    "Typed parameters: when to use a plain function signature vs. a Pydantic param_model",
    "ActionResult fields: extracted_content, long_term_memory, is_done, and error",
    "Restricting an action with allowed_domains: domain globs, per-action scope, and the LLM's visibility",
    "When a custom tool is the right choice over a built-in action, and when it is not",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk06-l1.pdf",
  readings: [
    {
      title: "Week 6 reading: Custom tools and structured results",
      href: "/c/browser-use-26su/readings/wk06",
      note: "Required before section. Covers @tools.action, Pydantic parameters, output_model_schema, sensitive_data, and allowed_domains.",
    },
    {
      title: "Browser Use docs: Custom Functions (Tools) (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/custom-functions",
      note: "The @tools.action decorator, allowed_domains per-action, injected dependencies, and how to pass tools to Agent",
    },
    {
      title: "browser_use/agent/views.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py",
      note: "ActionResult definition: extracted_content, long_term_memory, is_done, error, and success fields",
    },
  ],
  followups: [
    "Outcome (Create): Write a custom action that accepts a Pydantic param_model with two fields. Register it on a Tools instance and pass that instance to an Agent. Name the exact parameter that Agent() takes for the tools object.",
    "Outcome (Apply): A custom action is decorated with allowed_domains=['docs.python.org']. The agent is on github.com. Does the LLM see this action in its prompt? Explain what happens step by step.",
    "Outcome (Evaluate): A user asks you to write a custom action that clicks a button. Explain why the built-in click action already handles this and when you would instead write a custom action for clicking.",
  ],
};

export function Wk06L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk06L1SearchBody =
  "custom action tools.action decorator Tools instance Pydantic param_model ActionResult extracted_content long_term_memory allowed_domains domain restriction per-action scope week 6 lecture 1 browser-use extending agent";
