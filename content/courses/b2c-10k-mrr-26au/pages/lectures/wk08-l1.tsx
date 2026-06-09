import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "App store mechanics",
  date: "Week 8 Lecture 1",
  week: 8,
  topics: [
    "Submission economy: Apple review, Google Play review, and the rejections that kill week-8 milestones",
    "Pricing tiers, in-app purchase vs subscriptions, family sharing: what the stores let you do and what they take",
    "TestFlight and Play internal-testing: the one-person team release pipeline",
    "Release notes as marketing copy: how to turn a changelog into conversion",
    "When NOT to be on the app store: PWA-first as a legitimate distribution decision",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk08-l1.pdf",
  readings: [
    {
      title: "Week 8 reading: App store mechanics, ASO, and the capstone scaffold",
      href: "/c/b2c-10k-mrr-26au/readings/wk08",
      note: "Required before section — covers all three paths (Apple, Google, PWA) plus the Friday capstone scaffold",
    },
    {
      title: "App Review Guidelines (Apple, 2026)",
      href: "https://developer.apple.com/app-store/review/guidelines/",
      note: "The authoritative reference for rejection criteria, IAP rules, and what TestFlight allows",
    },
    {
      title: "Set up an open, closed, or internal test (Google, 2026)",
      href: "https://support.google.com/googleplay/android-developer/answer/9845334?hl=en",
      note: "Internal testing available within minutes; personal accounts after Nov 2023 need 12 closed testers first",
    },
    {
      title: "Trigger installation from your PWA (MDN Web Docs, 2025)",
      href: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt",
      note: "BeforeInstallPromptEvent API, installability criteria, and how to intercept the default prompt",
    },
  ],
  followups: [
    "Outcome: Apply — Which path did you ship today: TestFlight, Play internal-testing, or PWA install prompt? Write one sentence explaining the choice, and name the single rejection risk you mitigated before submitting.",
    "Outcome: Evaluate — Open the Apple Review Guidelines section 3 (Business) or the Google Play policy center. Find the one rule most likely to affect your monetization model. Write a one-sentence plan for staying inside it.",
    "Outcome: Analyze — Read 20 reviews of two competitor apps on the same store. List five recurring complaints and five recurring compliments. Which complaint is one you could fix this week?",
  ],
};

export function Wk08L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk08L1SearchBody =
  "app store mechanics Apple review Google Play review rejection TestFlight Play internal testing beta tracks release notes marketing PWA install prompt distribution decision submission economy pricing tiers IAP subscriptions family sharing lecture Week 8";
