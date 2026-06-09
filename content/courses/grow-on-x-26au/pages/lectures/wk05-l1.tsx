import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "What to measure",
  date: "Week 5, Lecture 1",
  week: 5,
  topics: [
    "Vanity metrics versus signal metrics: why follower count and raw likes hide more than they reveal",
    "Impressions per follower as a quality gauge: the ratio that tells you whether your content is reaching beyond your existing audience",
    "Profile-visit-to-follow rate as your conversion rate: the leading indicator most creators ignore",
    "Reading the analytics dashboard without lying to yourself: how to avoid confirmation bias in your own data",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk05-l1.pdf",
  readings: [
    {
      title: "Week 5 reading, Analytics, experiments, and iteration",
      href: "/c/grow-on-x-26au/readings/wk05",
    },
    {
      title: "Justin Welsh: Metrics that Matter: Going Beyond Followers and Likes (2023)",
      href: "https://www.justinwelsh.me/newsletter/metrics-that-matter-going-beyond-followers-likes",
    },
    {
      title: "Statweestics: Twitter/X Analytics Dashboard: The Metrics That Actually Predict Account Growth (2026)",
      href: "https://statweestics.com/blog/twitter-x-analytics-dashboard-the-metrics-that-actually-predict-account-growth/",
    },
  ],
  followups: [
    "Your account gained 200 followers this week. Your profile-visit-to-follow rate is 2%. How many profile visits did that require? What does that tell you about how many impressions you need to generate one follower?",
    "Welsh (2023) argues that follower count is top-of-funnel only. Name two metrics that measure activity deeper in the funnel than follower count, and explain what each one tells you that follower count cannot.",
    "Your impressions per follower rose from 0.8x to 2.1x over four weeks. List three possible causes: one content-related, one timing-related, one algorithm-related. How would you distinguish between them?",
    "Statweestics (2026) puts the healthy profile-visit-to-follow rate threshold at 5%. If your rate is 1.5%, what does that suggest about your profile page versus your content? What would you test first?",
    "Describe one concrete way a creator could deceive themselves when reading their own analytics dashboard. What rule or habit would guard against that specific bias?",
  ],
};

export function Wk05L1() {
  return <LecturePage spec={spec} />;
}

export const wk05L1SearchBody =
  "what to measure vanity metrics signal metrics impressions per follower profile visit to follow rate conversion analytics dashboard confirmation bias follower count likes Week 5 Lecture 1";
