import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Onboarding teardown",
  date: "Week 2 Lecture 2",
  week: 2,
  topics: [
    "Three teardowns: a category leader, a recent indie hit, the student's own product",
    "Sign-up friction taxonomy: account vs guest vs deferred",
    "Empty-state design: the demo data trap",
    "Activation experiments worth running in week 2",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk02-l2.pdf",
  readings: [
    {
      title: "Week 2 reading: Activation, the first 60 seconds",
      href: "/c/b2c-10k-mrr-26au/readings/wk02",
      note: "Full textbook chapter for this week",
    },
    {
      title: "App onboarding: how to fix drop-off points (PostHog / Amorim, 2025)",
      href: "https://posthog.com/blog/how-to-find-and-fix-app-onboarding-drop-off",
      note: "Nine-step recipe: define, funnel, replay, fix, measure",
    },
    {
      title: "Do things that don't scale (Paul Graham, 2013)",
      href: "http://paulgraham.com/ds.html",
      note: "Why manual onboarding is not a temporary substitute but a discovery mechanism",
    },
  ],
  followups: [
    "Outcome: Analyze, Pick the single biggest drop-off step in your own onboarding. Is it friction (UX), value gap (the user doesn't see why to continue), or trust gap (the user isn't sure it's safe)? How do you know?",
    "Outcome: Create, Describe one empty-state design change you could ship this week. What would the before and after look like, and what activation metric would you watch?",
    "Outcome: Apply, Paul Graham argues that founders should do manual, unscalable onboarding early. Name one unscalable thing you could do for the next 10 new sign-ups that would teach you something no session-replay tool can.",
  ],
};

export function Wk02L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk02L2SearchBody =
  "onboarding teardown sign-up friction empty state demo data activation experiment drop-off session replay lecture Week 2 B2C growth";
