import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Paid acquisition basics",
  date: "Week 7 Lecture 2",
  week: 7,
  topics: [
    "When paid makes sense: almost never before $5k MRR, and why",
    "Calculating your CAC ceiling from a credible LTV estimate",
    "Meta/Google fundamentals: bid types, conversion API, attribution windows",
    "Creative is the variable: 80% of paid performance lives in the ad, not the targeting",
    "The small-spend, fast-iteration loop: $50-$200 tests, five creative variants",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk07-l2.pdf",
  readings: [
    {
      title: "Week 7 reading: Social, virality, and the basics of paid",
      href: "/c/b2c-10k-mrr-26au/readings/wk07",
      note: "Required before section",
    },
    {
      title: "Drive Growth by Picking the Right Lane (Hockenmaier &amp; Rachitsky, First Round Review, 2019)",
      href: "https://review.firstround.com/drive-growth-by-picking-the-right-lane-a-customer-acquisition-playbook-for-consumer-startups/",
      note: "Three growth lanes for consumer companies; paid as one of them, with validation timelines",
    },
    {
      title: "Kickstarting and scaling a consumer business, Step 6: SCALE (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/growth-engines",
      note: "Growth engines overview: virality, SEO, and paid; why most startups master one before expanding",
    },
  ],
  followups: [
    "Outcome (Evaluate): Compute your CAC ceiling: take your LTV (from Week 2) and multiply by a target LTV:CAC ratio of 3:1. Write the resulting CAC ceiling in dollars. Then write two sentences on whether your current organic acquisition costs are above or below that ceiling and what that implies.",
    "Outcome (Apply): If you ran a $100 paid test today, which platform (Meta, Google, TikTok Ads) would you choose and why? Base your answer on where your activation-event users already spend time, not where you personally prefer to advertise.",
    "Outcome (Evaluate): The Hockenmaier / Rachitsky framework says companies should become 'world-class at one engine before expanding.' Given your channel commitment from Week 6, write one paragraph on whether adding paid testing now would accelerate or dilute your primary channel effort.",
  ],
};

export function Wk07L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk07L2SearchBody =
  "paid acquisition CAC ceiling LTV conversion API Meta Google creative leverage bid types attribution small spend fast iteration paid marketing lecture Week 7";
