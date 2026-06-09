import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Release management",
  date: "Week 5 Lecture 2",
  week: 5,
  topics: [
    "CI/CD for one person: GitHub Actions + Vercel/Fly/EAS auto-deploy on green main",
    "Feature flags: PostHog, Statsig, or a hand-rolled config table",
    "Phased rollouts: 1% to 10% to 100% with explicit rollback criteria at each gate",
    "Crash-loop recovery and the kill-switch pattern: from decision to reverted prod in 5 minutes",
    "TestFlight and Play internal testing as your safety net before a full rollout",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk05-l2.pdf",
  readings: [
    {
      title: "Week 5 reading: Experimentation + release management",
      href: "/c/b2c-10k-mrr-26au/readings/wk05",
      note: "Required before section",
    },
    {
      title: "How to do a phased rollout (PostHog team, 2024)",
      href: "https://posthog.com/docs/feature-flags/phased-rollout",
      note: "Step-by-step: create flag, set percentage conditions, progress phases, rollback",
    },
    {
      title: "Kill switches and rollouts: when feature flags are overkill (Statsig team, 2026)",
      href: "https://www.statsig.com/perspectives/kill-switches-rollouts-feature-flags-overkill-techniques",
      note: "When kill switches add value vs overhead; toggle sprawl and how to avoid it",
    },
    {
      title: "Shape Up: Stop Running in Circles and Ship Work that Matters (Ryan Singer, Basecamp, 2019)",
      href: "https://basecamp.com/shapeup",
      note: "Fixed time, flexible scope: the Shape Up model for one-person ship discipline",
    },
  ],
  followups: [
    "Outcome: Apply, Install a feature flag for one feature currently in your product. Set it to 10% rollout. Write the rollback criterion: what number in your analytics would trigger you to set the flag to 0%?",
    "Outcome: Create, Write a 1-page rollback runbook for your most recent release. It must answer: who makes the decision, which command or button reverts the deploy, and how you confirm the rollback succeeded. Time yourself: can you execute it in under 5 minutes?",
    "Outcome: Apply, Describe your CI/CD pipeline in three sentences. Where is the first automated gate (lint, tests, build)? What happens when that gate fails?",
  ],
};

export function Wk05L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk05L2SearchBody =
  "CI/CD continuous integration deployment feature flags phased rollout kill switch rollback runbook GitHub Actions Vercel Fly EAS TestFlight Play internal testing toggle sprawl lecture Week 5 B2C growth release management";
