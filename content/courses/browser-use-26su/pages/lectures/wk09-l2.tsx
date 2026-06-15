import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Shipping it: CLI, MCP, cloud, and design philosophy",
  date: "Week 9 Lecture 2",
  week: 9,
  topics: [
    "The browser-use CLI: running agents from the command line",
    "browser-use as an MCP server: exposing browser control to other agents",
    "The hosted cloud product: when to use it instead of the library",
    "browser-use vs Stagehand vs raw Playwright: a tool-selection guide",
    "The bitter-lesson argument: minimal loop, maximal action space",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk09-l2.pdf",
  readings: [
    {
      title: "Week 9 reading: Evaluating, deploying, and the wider ecosystem",
      href: "/c/browser-use-26su/readings/wk09",
      note: "Required before section",
    },
    {
      title:
        "Stagehand vs Browser Use: AI Browser Agent Guide (Scrapfly, 2026)",
      href: "https://scrapfly.io/blog/posts/stagehand-vs-browser-use",
      note: "Architecture comparison: CDP-native Stagehand vs browser-use, plus ecosystem tradeoffs",
    },
    {
      title:
        "Stagehand vs Browser Use vs Playwright: AI Browser Automation Compared 2026 (NxCode, 2026)",
      href: "https://www.nxcode.io/resources/news/stagehand-vs-browser-use-vs-playwright-ai-browser-automation-2026",
      note: "Architecture, cost per task, and a decision guide across all three tools",
    },
    {
      title:
        "The Bitter Lesson of Agent Frameworks (browser-use team, Gregor Žunič, 2026)",
      href: "https://browser-use.com/posts/bitter-lesson-agent-frameworks",
      note: "The design philosophy behind browser-use: minimal loop, maximal action space",
    },
  ],
  followups: [
    "Outcome (Explain): Describe the four deployment surfaces for browser-use (library, CLI, MCP server, hosted cloud). For each, state one scenario where it is the right choice.",
    "Outcome (Compare): A colleague wants to scrape a TypeScript-heavy SPA with deeply nested iframes for a production pipeline that runs 10,000 times per day. Which tool do you recommend: browser-use, Stagehand, or Playwright? Justify the choice with cost, reliability, and language-ecosystem factors.",
    "Outcome (Evaluate): Explain the bitter-lesson argument in your own words. What does it predict will happen to frameworks that add heavy abstraction layers? Do you agree? Give one counter-argument.",
  ],
};

export function Wk09L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk09L2SearchBody =
  "browser-use CLI command line MCP server model context protocol hosted cloud deployment library Stagehand Playwright comparison bitter lesson agent frameworks minimal loop maximal action space design philosophy autonomous agent TypeScript Python ecosystem week 9 lecture 2 browser use shipping deployment";
