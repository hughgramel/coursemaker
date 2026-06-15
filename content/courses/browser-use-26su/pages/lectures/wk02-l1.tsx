import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The DOM, the accessibility tree, and what gets kept",
  date: "Week 2 Lecture 1",
  week: 2,
  topics: [
    "DOM tree basics: nodes, elements, and the tree structure",
    "The accessibility tree: roles, names, and ARIA semantics",
    "Detecting interactive elements: links, buttons, inputs, and click handlers",
    "Visibility filtering: hidden, off-viewport, and what gets kept",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk02-l1.pdf",
  readings: [
    {
      title: "Week 2 reading: From rendered page to numbered elements",
      href: "/c/browser-use-26su/readings/wk02",
      note: "Required before section",
    },
    {
      title: "browser_use/dom/service.py (DOM extraction source, browser-use contributors, 2026)",
      href: "https://github.com/browser-use/browser-use/blob/main/browser_use/dom/service.py",
      note: "The actual CDP extraction code: accessibility tree, interactive-element detection, visibility filtering",
    },
    {
      title: "The Three Architectures of Browser Agents (Alexey Sokolov, 2025)",
      href: "https://dev.to/alexey_sokolov_10deecd763/runtime-snapshots-16-the-three-architectures-of-browser-agents-4gkc",
      note: "Compares screenshot-only, accessibility-tree, and runtime-DOM architectures",
    },
  ],
  followups: [
    "Outcome (Explain): Without looking it up, describe in two sentences how the accessibility tree differs from the raw DOM tree. Then check against the reading.",
    "Outcome (Apply): Open DevTools on any page, run document.querySelectorAll('a, button, input, select, textarea') and count the results. Notice how many are hidden or outside the viewport.",
    "Outcome (Analyze): Look at a browser-use run's step log. Find one step where the agent clicked an element by index. Trace what information the DOM service would have extracted for that element.",
  ],
};

export function Wk02L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk02L1SearchBody =
  "DOM tree accessibility tree interactive elements visibility filtering browser-use CDP Chrome DevTools Protocol ARIA roles semantic HTML links buttons inputs hidden elements viewport perceive week 2 lecture 1 foundations how an agent sees a web page";
