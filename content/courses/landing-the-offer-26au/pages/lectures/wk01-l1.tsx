import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "How SWE hiring actually works",
  date: "Week 1, Lecture 1",
  week: 1,
  topics: [
    "Funnel anatomy: the four stages every applicant moves through",
    "Where applicants die: drop-off rates at each stage",
    "The side doors at every stage: referrals, open source, prior public work",
    "Where your time goes in a typical search, and whether that allocation is right",
    "Lead time: why you need to start earlier than you think",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk01-l1.pdf",
  readings: [
    {
      title: "Week 1 reading: how the hiring funnel works and where you fit",
      href: "/c/landing-the-offer-26au/readings/wk01",
    },
    {
      title: "Gergely Orosz: The tech interview inside out",
      href: "https://blog.pragmaticengineer.com/the-tech-interview-inside-out/",
    },
    {
      title: "Dan Luu: We only hire the trendiest",
      href: "https://danluu.com/programmer-moneyball/",
    },
  ],
  followups: [
    "Draw the four-stage hiring funnel from memory. At each stage, name the single biggest reason applicants are cut. What does that tell you about where to invest preparation time?",
    "Luu (2015) argues that companies compete for the same narrow pool of candidates while ignoring underrated talent. From the applicant side, what does that mean for your strategy?",
    "Pick one company on your tentative target list. Identify at least two side-door paths into that company that do not require submitting through the careers portal.",
    "Orosz (2020) points out that most prep materials focus almost entirely on the coding interview while neglecting the surrounding loop. What does the full loop look like, and which stage should you prepare for first?",
    "If you start a new-grad search six months before graduation, sketch a rough timeline. When should each major activity start? Where does the math break down if you start three months late?",
    "HW 1 is out this week: resume and portfolio audit. Start gathering your current resume and any project materials you want to assess.",
  ],
};

export function Wk01L1() {
  return <LecturePage spec={spec} />;
}

export const wk01L1SearchBody =
  "hiring funnel anatomy applicant drop-off stages side doors referral open source prior public work lead time new-grad SWE job search recruiter pipeline interview loop Week 1 Lecture 1 landing the offer";
