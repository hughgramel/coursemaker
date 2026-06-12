import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Why they come back",
  date: "Week 4 Lecture 1",
  week: 4,
  topics: [
    "The Hooked model: trigger, action, variable reward, investment",
    "External vs internal triggers: why external triggers must come first",
    "Streaks done honestly: what Duolingo learned and what it cost them",
    "The notification machine: channel protection and the CURR finding",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk04-l1.pdf",
  readings: [
    {
      title: "Week 4 reading: Hooks, triggers, and retention mechanics",
      href: "/c/langobee-10k-mrr-26su/readings/wk04",
      note: "Required before section",
    },
    {
      title: "Optimize App Retention with the Hooked Model (Nir Eyal, 2021)",
      href: "https://medium.com/googleplaydev/optimize-app-retention-with-the-hooked-model-a0781f8e5d29",
      note: "The four Hook Model stages translated into mobile app retention mechanics",
    },
    {
      title: "How Duolingo Reignited User Growth (Jorge Mazal, 2023)",
      href: "https://www.lennysnewsletter.com/p/how-duolingo-reignited-user-growth",
      note: "Primary source: CURR finding, streak optimization, notification channel protection",
    },
    {
      title: "How to explode growth twice: Duolingo (Jorge Mazal, 2023)",
      href: "https://www.youtube.com/watch?v=BIagRI_uQ3w",
      note: "Video companion: walking the growth model that produced 4.5x DAU growth",
    },
  ],
  followups: [
    "Outcome (Apply): For LangoBee's three candidate hooks (PWA push, daily email, streak surface), write one sentence per hook naming its external trigger and the internal trigger it aims to cultivate. Which hook has the shortest path from external to internal?",
    "Outcome (Explain): In your own words, explain why Duolingo's growth team concluded that Current User Retention Rate had 5x the impact on DAU of any other input metric. What does that imply for where you should spend the next sprint?",
    "Outcome (Analyze): Duolingo protected the notification channel by limiting send frequency. LangoBee has sent zero push notifications. Describe one rule you would set for push notification sends before you flip the switch, and why that rule matters at small scale.",
  ],
};

export function Wk04L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk04L1SearchBody =
  "Hooked model trigger action variable reward investment external trigger internal trigger streak Duolingo CURR current user retention rate notification channel protection push notification PWA hooks retention week 4 lecture 1";
