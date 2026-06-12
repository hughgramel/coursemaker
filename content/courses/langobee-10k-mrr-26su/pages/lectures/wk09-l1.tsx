import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Launching where learners live",
  date: "Week 9 Lecture 1",
  week: 9,
  topics: [
    "Community norms and give-before-ask: why self-promotion kills posts before they land",
    "The comprehensible-input community as ideological home: r/dreamingspanish, Refold, and why ideology matters",
    "r/languagelearning and r/Spanish: reading the rules before you write a word",
    "Show HN mechanics: what qualifies, how the shownew queue works, and why frictionless tryout wins",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk09-l1.pdf",
  readings: [
    {
      title: "Week 9 reading: Community launch and channel fit",
      href: "/c/langobee-10k-mrr-26su/readings/wk09",
      note: "Required before section",
    },
    {
      title: "Show HN Guidelines (Y Combinator, 2012)",
      href: "https://news.ycombinator.com/showhn.html",
      note: "The authoritative rules: what qualifies, how submissions progress, community norms",
    },
    {
      title: "How the biggest consumer apps got their first 1,000 users (Lenny Rachitsky, 2020)",
      href: "https://www.lennysnewsletter.com/p/how-the-biggest-consumer-apps-got",
      note: "40+ case studies; community-oriented tactics with concrete examples",
    },
    {
      title: "How to Launch (Again and Again) (Kat Manalac, 2019)",
      href: "https://www.youtube.com/watch?v=3xU050kMbHM",
      note: "Multi-launch framework: soft, community, press, broad -- each with distinct message-match",
    },
    {
      title: "How to Get Your First Customers (Gustaf Alstromer, 2022)",
      href: "https://www.youtube.com/watch?v=hyYCn_kAngI",
      note: "Founder-led outreach, community message-match copy, UTM discipline from 600+ YC companies",
    },
  ],
  followups: [
    "Outcome (Apply): Using the community norms documented in the course materials, write a one-paragraph Reddit post for r/languagelearning that gives value first and mentions LangoBee only in the last sentence. Does it pass the self-promotion gate?",
    "Outcome (Analyze): Rank r/languagelearning, r/Spanish, r/dreamingspanish, and Show HN by channel fit for LangoBee. Use three criteria: audience overlap with your target user, platform norms on self-promotion, and prior reception of tool launches in that community.",
    "Outcome (Explain): Why is a Show HN post a community launch and not a press launch? What does that distinction mean for how you write the title and what you put in the top comment?",
  ],
};

export function Wk09L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk09L1SearchBody =
  "community launch Reddit r/languagelearning r/Spanish r/dreamingspanish Show HN Hacker News community norms give-before-ask comprehensible input ideological home channel fit message match self-promotion karma subreddit rules launch week 9 lecture 1";
