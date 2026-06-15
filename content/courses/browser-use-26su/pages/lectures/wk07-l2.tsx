import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Multi-tab work and getting data out",
  date: "Week 7 Lecture 2",
  week: 7,
  topics: [
    "Opening and switching tabs: the built-in open_tab and switch_tab actions",
    "Sharing login state across tabs in one session",
    "Downloads: accept_downloads, downloads_path, and the file_system injected dependency",
    "Recording runs with record_video_dir and record_har_path for debugging",
    "When a task crosses the boundary into custom-tool territory",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk07-l2.pdf",
  readings: [
    {
      title: "Week 7 reading: profiles, logins, tabs, and downloads",
      href: "/c/browser-use-26su/readings/wk07",
      note: "Required before section",
    },
    {
      title:
        "Browser Use docs: Browser Settings, All Parameters (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/browser-settings",
      note:
        "accept_downloads, downloads_path, record_video_dir, record_har_path, and file injection parameters",
    },
    {
      title:
        "Browser Use docs: Custom Functions (browser-use team, 2026)",
      href: "https://docs.browser-use.com/customize/custom-functions",
      note:
        "file_system injected dependency; writing custom download-handling tools",
    },
  ],
  followups: [
    "Outcome (Create): Write a task prompt that instructs the agent to open two tabs: one to log in and one to use the session. Run it. Observe whether the second tab inherits the authenticated state from the first.",
    "Outcome (Apply): Configure a BrowserSession with accept_downloads=True and downloads_path pointing to a local directory. Run a task that downloads a CSV. Verify the file appears in the expected path.",
    "Outcome (Analyze): Record a five-step agent run with record_video_dir. Play it back. Identify one step where the agent's choice was not what you expected. What would you change in the task prompt to correct it?",
    "Outcome (Evaluate): You need to scrape a table from a site that requires authentication and save it to a database. List the steps: which are handled by built-in actions, which need a custom tool, and which need a persistent profile? Justify each decision.",
  ],
};

export function Wk07L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk07L2SearchBody =
  "multi-tab tabs open_tab switch_tab login state session downloads accept_downloads downloads_path file_system recording record_video_dir record_har_path custom tool boundary debugging week 7 lecture 2 browser use driving a real browser";
