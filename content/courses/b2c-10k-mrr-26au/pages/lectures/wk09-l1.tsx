import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Lifecycle messaging",
  date: "Week 9 Lecture 1",
  week: 9,
  topics: [
    "Transactional vs marketing vs lifecycle: the legal and UX difference",
    "The five-message starter set: welcome, day-3 nudge, paywall hit, churn-risk, win-back",
    "Push vs email vs in-app: which channel lifts what metric",
    "Triggered vs scheduled: why event-driven messages compound and batch schedules decay",
    "Open/click/conversion math: realistic B2C benchmarks",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk09-l1.pdf",
  readings: [
    {
      title: "Week 9 reading: Lifecycle messaging and referral loops",
      href: "/c/b2c-10k-mrr-26au/readings/wk09",
      note: "Required before section",
    },
    {
      title: "Six essential ongoing lifecycle campaigns (Customer.io, Evola 2024)",
      href: "https://customer.io/learn/lifecycle-marketing/essential-lifecycle-marketing-campaigns",
      note: "The six-campaign framework: welcome, activation deepening, retention nurture, trial expiry, churn prevention, win-back",
    },
    {
      title: "Deciding when and how to use email vs push notifications (OneSignal, Langholz 2021)",
      href: "https://onesignal.com/blog/deciding-when-and-how-to-use-email-vs-push-notifications/",
      note: "Seven-factor decision framework; push 20% open rate vs email under 2%; frequency guidance",
    },
  ],
  followups: [
    "Outcome: Analyze, List every automated message your product currently sends (transactional, marketing, or lifecycle). For each, state whether it is triggered by an event or scheduled on a calendar. Which ones would become more relevant if you switched the non-triggered ones to triggered?",
    "Outcome: Apply, Using the five-message starter set from lecture, identify which of the five messages would have the highest expected impact on your D7 retention. Write the trigger condition in one sentence: 'Send when [user_event] and [time_condition].' If no event data exists yet, name the one instrumentation change needed.",
    "Outcome: Analyze, OneSignal reports push notifications open at roughly 20% vs email under 2% for most B2C apps. Does that make push strictly better? Name two scenarios where email is the correct choice even given the open-rate gap, and explain the reasoning for each.",
  ],
};

export function Wk09L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk09L1SearchBody =
  "lifecycle messaging transactional email marketing lifecycle triggered scheduled welcome day-3 churn-risk win-back push email in-app open rate click rate conversion lifecycle campaign starter set lecture Week 9";
