import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Why a browser needs an agent",
  date: "Week 1, Lecture 1",
  week: 1,
  topics: [
    "Websites as the universal interface: why so much useful data and action lives behind a browser",
    "Two approaches: scripted automation versus LLM-driven agents",
    "What browser-use is: task, LLM, and a browser that acts",
    "Who built it: Magnus Müller and Gregor Žunič, the ETH Zurich origin, and the YC W25 trajectory",
    "The shape of the project: open-source library, hosted cloud, and a fast-moving community",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk01-l1.pdf",
  readings: [
    {
      title: "Week 1 reading: what browser-use is and the perceive-decide-act loop",
      href: "/c/browser-use-26su/readings/wk01",
      note: "Required before section",
    },
    {
      title: "browser-use/browser-use (GitHub README)",
      href: "https://github.com/browser-use/browser-use",
      note: "The canonical quickstart and architecture overview",
    },
    {
      title: "Browser Use docs: Quickstart (browser-use team, 2026)",
      href: "https://docs.browser-use.com/quickstart",
      note: "Install, set an API key, and run a first agent",
    },
    {
      title: "Investing in Browser Use (Felicis Ventures, 2025)",
      href: "https://www.felicis.com/blog/investing-in-browser-use",
      note: "Origin story and product positioning",
    },
  ],
  followups: [
    "Outcome (Explain): Describe in two sentences why a traditional automation script breaks when a website changes its layout, and why an LLM-driven agent is more tolerant of that change.",
    "Outcome (Apply): Install browser-use and run the quickstart example from the docs. Note which LLM you used and what the agent did at each step.",
    "Outcome (Analyze): Look at the Hacker News launch thread. What was the main technical debate in the top comments? What two approaches were being compared?",
    "Outcome (Explain): Explain to a classmate what browser-use is in three sentences: what it takes as input, what it does, and what it returns.",
  ],
};

export function Wk01L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk01L1SearchBody =
  "browser agent LLM automation scripted versus agent-driven websites universal interface Magnus Müller Gregor Žunič ETH Zurich YC W25 browser-use open source hosted cloud task prompt perceive decide act Week 1 Lecture 1 browser-use course";
