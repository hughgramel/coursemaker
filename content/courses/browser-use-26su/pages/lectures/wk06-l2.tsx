import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Structured output and safe inputs",
  date: "Week 6 Lecture 2",
  week: 6,
  topics: [
    "output_model_schema: giving the agent a Pydantic class and getting back validated JSON instead of prose",
    "How the framework enhances the task prompt with the output schema and validates the final result",
    "Accessing the result: history.final_result(), history.structured_output, and model_validate_json()",
    "sensitive_data: the two formats (flat and domain-scoped), placeholder mechanics, and the <secret> tag protocol",
    "allowed_domains on BrowserProfile: scope, wildcard patterns, and the security warning when omitted with sensitive_data",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk06-l2.pdf",
  readings: [
    {
      title: "Week 6 reading: Custom tools and structured results",
      href: "/c/browser-use-26su/readings/wk06",
      note: "Required. The output model and sensitive_data sections are directly tied to this lecture.",
    },
    {
      title: "browser_use/agent/service.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py",
      note: "Agent.__init__ signature: output_model_schema, sensitive_data; _enhance_task_with_schema; domain validation logic",
    },
    {
      title: "browser_use/agent/views.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py",
      note: "AgentHistoryList.structured_output property and get_structured_output(); AgentStructuredOutput TypeVar",
    },
  ],
  followups: [
    "Outcome (Apply): An agent is given output_model_schema=Posts where Posts is a Pydantic model. Write the two lines of Python that (1) run the agent and (2) parse the final result back into a Posts instance.",
    "Outcome (Apply): You pass sensitive_data={'api_key': 'sk-abc123'} to Agent. Describe exactly what the LLM sees when the agent needs to enter the API key. What does the browser receive?",
    "Outcome (Evaluate): You have a task that logs into a site and extracts a table. Decide which of the four mechanisms to use: built-in actions only, a custom action, output_model_schema, sensitive_data, or some combination. Justify each choice.",
  ],
};

export function Wk06L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk06L2SearchBody =
  "output_model_schema structured output Pydantic validation JSON prose sensitive_data placeholder secret tag domain-scoped credentials allowed_domains BrowserProfile security warning week 6 lecture 2 browser-use";
