import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Fitting the page into a prompt",
  date: "Week 3 Lecture 2",
  week: 3,
  topics: [
    "Why raw HTML overflows a model context window",
    "The context budget: tokens available after system prompt and history",
    "Ephemeral messages and the last-N browser-state retention strategy",
    "Token cost of vision vs DOM: when screenshots help and when they cost too much",
    "How the agent loop uses the state summary as the 'eyes' of the LLM",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk03-l2.pdf",
  readings: [
    {
      title: "Week 3 reading: The session layer and the context budget",
      href: "/c/browser-use-26su/readings/wk03",
      note: "Required before section",
    },
    {
      title:
        "browser_use/agent/service.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/agent/service.py",
      note: "The run loop: where state is captured, assembled into messages, and fed to the LLM",
    },
    {
      title:
        "browser-use: Give Your LLM a Browser and Watch It Go (Gonsalvez, 2025)",
      href: "https://dev.to/stevengonsalvez/browser-use-give-your-llm-a-browser-and-watch-it-go-51hb",
      note: "Explains the DOM-first approach and per-action token cost tradeoffs",
    },
  ],
  followups: [
    "Outcome (Analyze): A GPT-4o context window holds around 128,000 tokens. A raw HTML dump of a medium-complexity page can exceed 30,000 tokens. Explain, using the browser-use DOM approach, how the agent keeps its page representation well under that ceiling.",
    "Outcome (Explain): Define ephemeral messages in the context of browser-use. How many browser-state summaries are typically retained in the message history at any one step? What happens to older states?",
    "Outcome (Apply): Toggle use_vision=True on a BrowserSession and run one step. Compare the token count of the message to a DOM-only step on the same page. Which is larger and by roughly how much?",
  ],
};

export function Wk03L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk03L2SearchBody =
  "context budget token limit raw HTML ephemeral messages browser-state retention vision DOM token cost context window last-N states message manager week 3 lecture 2 browser use fitting page into prompt";
