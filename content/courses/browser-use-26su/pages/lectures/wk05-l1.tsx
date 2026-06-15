import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The tools registry and built-in actions",
  date: "Week 5 Lecture 1",
  week: 5,
  topics: [
    "The Tools registry: mapping action names to handler functions and parameter models",
    "Built-in actions: click, type, scroll, navigate, go back, search, extract content, switch tab, open tab, done",
    "ActionModel: how registered actions become the structured choice the LLM picks from",
    "ActionResult: what an action returns and how it flows back to the loop",
    "How action descriptions reach the LLM prompt via get_prompt_description()",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk05-l1.pdf",
  readings: [
    {
      title: "Week 5 reading: The tools registry and dispatch",
      href: "/c/browser-use-26su/readings/wk05",
      note: "Required before section. Covers the registry, built-in actions, ActionModel, ActionResult, multi_act, and parameter injection.",
    },
    {
      title: "Browser Use docs: Custom Functions (Tools) (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/custom-functions",
      note: "The @tools.action decorator, injected dependencies, and how tool descriptions reach the model",
    },
    {
      title: "browser_use/tools/registry/views.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/tools/registry/views.py",
      note: "ActionModel construction, RegisteredAction, and get_prompt_description()",
    },
  ],
  followups: [
    "Outcome (Explain): In your own words, describe what the Tools registry stores for each registered action. Name the three things a RegisteredAction object holds besides its name.",
    "Outcome (Apply): Open browser_use/tools/registry/views.py and find get_prompt_description(). Write out what format each action's description takes in the system prompt.",
    "Outcome (Analyze): The done action has is_done=True in its ActionResult. Trace what the agent loop does differently when it receives an ActionResult with is_done=True versus one with is_done=False.",
  ],
};

export function Wk05L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk05L1SearchBody =
  "tools registry built-in actions ActionModel ActionResult click type scroll navigate go back search extract content switch tab open tab done action descriptions LLM prompt RegisteredAction get_prompt_description week 5 lecture 1 browser-use";
