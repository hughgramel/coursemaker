import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Persistent profiles and real browsers",
  date: "Week 7 Lecture 1",
  week: 7,
  topics: [
    "Headless vs visible browser: when each mode is appropriate",
    "user_data_dir and BrowserSession profiles: carrying cookies and login state across runs",
    "storage_state and keep_alive: two ways to preserve authentication",
    "Keeping secrets out of the model: combining persistent profiles with sensitive_data from week 6",
    "Profile hygiene: when to clear state and when to reuse it",
  ],
  slidesHref: "/c/browser-use-26su/slides/wk07-l1.pdf",
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
        "Full BrowserSession parameter reference: user_data_dir, profile_directory, storage_state, keep_alive, headless, accept_downloads, record_video_dir",
    },
  ],
  followups: [
    "Outcome (Apply): Write the code to start a BrowserSession with user_data_dir pointing to a local Chrome profile directory and headless=False. Run it against a site you are already logged into. Confirm the session opens without a login prompt.",
    "Outcome (Analyze): Explain in two paragraphs what a browser profile directory contains (cookies, local storage, IndexedDB, cached credentials) and how setting user_data_dir makes that state available to the next agent run.",
    "Outcome (Explain): Describe the difference between keep_alive=True and storage_state as two strategies for carrying login state forward. When would you prefer one over the other?",
    "Outcome (Apply): Take the sensitive_data pattern from week 6 and apply it to an agent that logs into a site using a persisted profile. Show where sensitive_data is still necessary even when a profile exists.",
  ],
};

export function Wk07L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk07L1SearchBody =
  "persistent profiles real browser headless visible browser user_data_dir BrowserSession cookies login state storage_state keep_alive profile directory authentication sensitive_data secrets profile hygiene week 7 lecture 1 browser use driving a real browser";
