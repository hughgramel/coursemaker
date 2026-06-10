import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Sustainable growth and life after 10k",
  date: "Week 6, Lecture 2",
  week: 6,
  topics: [
    "Avoiding burnout: the posting cadence that survives a year, not a sprint",
    "Monetization options at 10k: newsletter, digital products, and sponsorships with real revenue numbers from creators who have done it",
    "Audience loyalty versus audience size: why a small, trusting audience outearns a large, indifferent one",
    "When to stay on X and when to diversify off it: owning your audience versus renting it",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk06-l2.pdf",
  readings: [
    {
      title: "Week 6 reading: your 90-day playbook",
      href: "/c/grow-on-x-26au/readings/wk06",
    },
    {
      title: "Kevin Kelly: 1,000 True Fans (2008)",
      href: "https://kk.org/thetechnium/1000-true-fans/",
    },
    {
      title: "Jay Clouse: The Audience Trust Battery (2023)",
      href: "https://creatorscience.com/trust-battery/",
    },
    {
      title: "Casey Newton: What I Learned in the First Five Years of Platformer (2025)",
      href: "https://www.platformer.news/platformer-year-five-lessons/",
    },
  ],
  followups: [
    "Kelly (2008) argues that 1,000 true fans each paying $100 per year generates $100k annually. Li Jin (2020) updates this to 100 fans at $1,000 each. Which model fits your niche better? What would it take to move a follower from free to paying $100? From $100 to $1,000?",
    "Clouse (2023) warns that financial pressure drains the audience’s trust battery. Describe a concrete scenario where a creator at 10k followers crosses from “monetizing from abundance” to “monetizing from desperation.” What is the reader’s signal?",
    "Newton (2025) kept Platformer’s subscriber price flat for five years while building deep loyalty. What does that strategy cost in year one? What does it pay in year five?",
    "A creator at 12,000 X followers has an email list of 400 subscribers. Which audience do they actually own? What would a plan to triple the email list in 90 days look like without abandoning X?",
    "The lecture introduces two strategies for avoiding burnout: batching content and defining a “minimum viable week.” Design your own minimum viable week: the fewest posts per week that keeps your account active and growing. Justify the number.",
  ],
};

export function Wk06L2() {
  return <LecturePage spec={spec} />;
}

export const wk06L2SearchBody =
  "sustainable growth life after 10k burnout posting cadence monetization newsletter digital products sponsorships revenue 1000 true fans audience loyalty trust battery diversify off platform own your audience email list Week 6 Lecture 2";
