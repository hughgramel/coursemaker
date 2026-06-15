import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Dispatch, multi-act, and injection",
  date: "Week 5 Lecture 2",
  week: 5,
  topics: [
    "multi_act: executing several actions in one step and the terminates_sequence abort rule",
    "Pydantic validation of action parameters before dispatch",
    "Parameter injection by name: browser_session, page_extraction_llm, file_system, available_file_paths",
    "How an ActionResult feeds extracted_content and long_term_memory back to the next step",
    "Foreshadowing: the @tools.action decorator and custom actions (covered in depth in week 6)",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk05-l2.pdf",
  readings: [
    {
      title: "Week 5 reading: The tools registry and dispatch",
      href: "/c/browser-use-26su/readings/wk05",
      note: "Required. The multi_act and injection sections are directly tied to this lecture.",
    },
    {
      title: "browser_use/agent/views.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/views.py",
      note: "ActionResult fields: extracted_content, long_term_memory, is_done, error, success",
    },
    {
      title: "browser_use/agent/service.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py",
      note: "The run loop, multi_act execution, and how results feed the next step",
    },
  ],
  followups: [
    "Outcome (Analyze): max_actions_per_step defaults to 4. Explain what happens when the agent emits 3 actions in one step and the second action is navigate (which terminates_sequence=True). Which actions execute and which are skipped?",
    "Outcome (Apply): Write a custom action signature that injects both browser_session and file_system. Name the exact parameter names required and explain why name matching (not type matching) is what the injector uses.",
    "Outcome (Explain): An ActionResult has extracted_content='Price: $42'. Describe the path that content takes: where does it appear in the next step's prompt?",
  ],
};

export function Wk05L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk05L2SearchBody =
  "multi_act dispatch terminates_sequence parameter injection browser_session page_extraction_llm file_system available_file_paths ActionResult extracted_content long_term_memory Pydantic validation week 5 lecture 2 browser-use";
