import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Does it actually work? Evaluating web agents",
  date: "Week 9 Lecture 1",
  week: 9,
  topics: [
    "WebVoyager and Mind2Web: what they measure and how they are scored",
    "Why benchmark numbers mislead: cached snapshots vs live sites",
    "The Online-Mind2Web critique and the COLM 2025 findings",
    "Cost and latency per task: the real production numbers",
    "Prompt injection: when the page tries to hijack the agent",
    "What a trustworthy eval actually looks like",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk09-l1.pdf",
  readings: [
    {
      title: "Week 9 reading: Evaluating, deploying, and the wider ecosystem",
      href: "/c/browser-use-26su/readings/wk09",
      note: "Required before section",
    },
    {
      title:
        "An Illusion of Progress? Assessing the Current State of Web Agents (COLM 2025, arXiv 2504.01382)",
      href: "https://arxiv.org/abs/2504.01382",
      note: "Key paper showing live-site scores fall sharply below cached-snapshot scores",
    },
    {
      title:
        "browser-use: Give Your LLM a Browser and Watch It Go (Steven Gonsalvez, DEV.to, 2025)",
      href: "https://dev.to/stevengonsalvez/browser-use-give-your-llm-a-browser-and-watch-it-go-51hb",
      note: "Covers the DOM-first approach and an early WebVoyager benchmark figure",
    },
  ],
  followups: [
    "Outcome (Evaluate): A paper reports 85% success on WebVoyager. Name two reasons that number might not predict real-world performance. Cite the COLM 2025 paper in your answer.",
    "Outcome (Analyze): Explain the prompt-injection attack surface that browser agents face. Describe one concrete scenario and one mitigation you could add to a browser-use agent.",
    "Outcome (Apply): Estimate the LLM token cost of one browser-use task that takes 12 steps, assuming a DOM-only state summary of roughly 2,000 tokens per step and a model priced at $3 per million input tokens. Show your arithmetic.",
  ],
};

export function Wk09L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk09L1SearchBody =
  "evaluating web agents WebVoyager Mind2Web benchmark scores cached snapshots live sites Online-Mind2Web COLM 2025 illusion of progress cost latency per task token cost prompt injection page hijack trustworthy eval week 9 lecture 1 browser use evaluation";
