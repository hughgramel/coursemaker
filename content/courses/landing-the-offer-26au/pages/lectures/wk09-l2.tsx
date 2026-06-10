import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Negotiation, leveling, multi-offer dynamics",
  date: "Week 9, Lecture 2",
  week: 9,
  topics: [
    "Total comp and leveling: what L3/L4/E3/E4 mean, and why your level matters more than your starting number",
    "Equity vesting schedules: 4-year cliff, front-loaded grants, and how to compute year-1 expected value",
    "Signing bonuses: why they are easier to give than base and how to use them in a negotiation",
    "Competing offers: how to raise the BATNA conversation without poisoning the relationship",
    "The &ldquo;best offer&rdquo; pushback: what it actually means and the response that keeps the door open",
    "Exploding offers: how to ask for time without burning the relationship",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk09-l2.pdf",
  readings: [
    {
      title: "Week 9 reading: total compensation, leveling, and negotiation",
      href: "/c/landing-the-offer-26au/readings/wk09",
    },
    {
      title: "Patrick McKenzie: salary negotiation (patio11)",
      href: "https://www.kalzumeus.com/2012/01/23/salary-negotiation/",
    },
    {
      title: "Haseeb Qureshi: ten rules for negotiating a job offer (part 1)",
      href: "https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/",
    },
    {
      title: "Haseeb Qureshi: how not to bomb your offer negotiation (part 2)",
      href: "https://haseebq.com/how-not-to-bomb-your-offer-negotiation/",
    },
    {
      title: "Levels.fyi ultimate negotiation guide",
      href: "https://www.levels.fyi/blog/ultimate-negotiation-guide.html",
    },
  ],
  followups: [
    "McKenzie (2012) argues that negotiating as a consistent policy is more valuable than deciding case by case whether a specific offer is worth negotiating. What is the psychological and financial argument for treating negotiation as a policy rather than a choice?",
    "A company offers you $145,000 base, a $20,000 signing bonus, and 100 RSUs vesting over four years with a one-year cliff. The current stock price is $40 per share. Compute your expected year-1 total compensation. What assumptions are you making about bonus and stock price?",
    "Qureshi (2016) says that &ldquo;the company is praying with bated breath that you will sign.&rdquo; From the company&rsquo;s side, what does a failed hire actually cost them? How should that cost inform your confidence level during a negotiation?",
    "A recruiter says: &ldquo;This is our best offer, we do not have any more room.&rdquo; Write out a two-sentence response that acknowledges the recruiter, keeps you positive, and moves the conversation forward without accepting or rejecting the offer.",
    "You have an offer from Company A expiring Friday and you expect an offer from Company B early next week. Using Qureshi&rsquo;s Part 2 framework, draft the email you would send to Company A asking for more time. What do you say to Company B to accelerate their process?",
    "Levels.fyi data suggests that the level you enter at matters more than your starting compensation for long-term earnings, because each promotion starts from the prior level&rsquo;s ceiling. How would you push for a higher level (e.g., L4 instead of L3) during the offer stage?",
  ],
};

export function Wk09L2() {
  return <LecturePage spec={spec} />;
}

export const wk09L2SearchBody =
  "negotiation leveling total compensation equity vesting RSU signing bonus competing offers BATNA exploding offer best offer pushback L3 L4 E3 E4 level matters recruiter negotiation tactics Week 9 Lecture 2 landing the offer";
