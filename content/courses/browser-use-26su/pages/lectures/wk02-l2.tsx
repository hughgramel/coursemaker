import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Numbered elements and the vision option",
  date: "Week 2 Lecture 2",
  week: 2,
  topics: [
    "The indexed selector map: how integer indices are assigned to interactive elements",
    "Element index as the agent's vocabulary: why 'click element 5' replaces CSS selectors",
    "Optional screenshots and the use_vision flag",
    "DOM-first vs pure-screenshot tradeoffs: token cost, model requirements, and coverage",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk02-l2.pdf",
  readings: [
    {
      title: "Week 2 reading: From rendered page to numbered elements",
      href: "/c/browser-use-26su/readings/wk02",
      note: "Required before section",
    },
    {
      title: "browser-use: Give Your LLM a Browser and Watch It Go (Steven Gonsalvez, 2025)",
      href: "https://dev.to/stevengonsalvez/browser-use-give-your-llm-a-browser-and-watch-it-go-51hb",
      note: "DOM-first approach, per-action cost, and agent token economics",
    },
    {
      title: "browser-use/browser-use GitHub README (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use",
      note: "Project overview including use_vision flag and DOM-first design rationale",
    },
  ],
  followups: [
    "Outcome (Explain): Describe in your own words why the integer index system is easier for an LLM to use than CSS selectors or XPath expressions.",
    "Outcome (Compare): List two tasks where you would enable use_vision=True and two where you would leave it off. State the reason for each choice in terms of token cost and model capability.",
    "Outcome (Apply): In a browser-use run you completed in week 1, find a click action in the history. What was the element index? Open the same page now and try to locate the corresponding element on screen.",
  ],
};

export function Wk02L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk02L2SearchBody =
  "selector map element index numbered elements vision screenshot use_vision DOM-first token cost LLM vocabulary CSS selectors XPath click element index browser-use agent perceive week 2 lecture 2 foundations how an agent sees a web page";
