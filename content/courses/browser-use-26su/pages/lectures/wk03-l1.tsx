import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "BrowserSession and the browser-state summary",
  date: "Week 3 Lecture 1",
  week: 3,
  topics: [
    "What a BrowserSession owns: the browser process, context, and active page",
    "The browser-state summary: URL, title, serialized DOM, optional screenshot",
    "Playwright for launch and lifecycle vs CDP for DOM intelligence",
    "How the DOM service builds a state object each step",
    "Headless vs visible sessions and common configuration options",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk03-l1.pdf",
  readings: [
    {
      title: "Week 3 reading: The session layer and the context budget",
      href: "/c/browser-use-26su/readings/wk03",
      note: "Required before section",
    },
    {
      title:
        "Browser Use docs: Browser Settings (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/browser-settings",
      note: "BrowserSession configuration reference: headless, profiles, persistence, recording",
    },
    {
      title:
        "browser_use/dom/service.py (browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/dom/service.py",
      note: "CDP-based DOM extraction, accessibility tree, and selector map source",
    },
  ],
  followups: [
    "Outcome (Explain): Describe in one paragraph what a BrowserSession captures into a browser-state summary at each agent step. Name all four fields of the summary and explain which one is optional and why.",
    "Outcome (Apply): Instantiate a BrowserSession with headless=False and use_vision=False. Print the state summary after loading a page. Identify the selector_map keys in the output.",
    "Outcome (Analyze): The DOM service uses CDP to pull the snapshot rather than asking Playwright to serialize the page. Explain why that division of labor exists and what it buys the agent.",
  ],
};

export function Wk03L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk03L1SearchBody =
  "BrowserSession browser-state summary URL title DOM screenshot CDP Playwright headless visible session configuration selector map DOM service interactive elements week 3 lecture 1 browser use session layer";
