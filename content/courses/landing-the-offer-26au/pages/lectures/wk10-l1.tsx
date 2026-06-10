import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The application sprint",
  date: "Week 10, Lecture 1",
  week: 10,
  topics: [
    "Running the last mile: why the final week of a search requires a different operating mode than the preceding nine",
    "Concentration over volume: why 15 quality applications beat 60 cold portal submissions",
    "Daily cadence: a morning pipeline review, an outreach block, and a practice block that you run every day of the sprint",
    "Pipeline review: what a live pipeline looks like at week 10, how to read it honestly, and which levers still move",
    "Combining formal and side-door moves in one week: sequencing referral asks, portal submissions, and one unconventional move so they reinforce each other",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk10-l1.pdf",
  readings: [
    {
      title: "Week 10 reading: your personal hiring playbook",
      href: "/c/landing-the-offer-26au/readings/wk10",
    },
    {
      title: "Paul Graham: Do Things That Don’t Scale (2013)",
      href: "https://paulgraham.com/ds.html",
    },
    {
      title: "Paul Graham: How to Do Great Work (2023)",
      href: "https://paulgraham.com/greatwork.html",
    },
  ],
  followups: [
    "Graham (2013) argues that the most effective early moves are the ones that cannot scale: recruiting users one by one, doing things for free to prove value, reaching out directly with specific solutions. Map three job-search equivalents of these moves onto your current target list.",
    "A one-week sprint has five working days. Write out what you would do each morning and each afternoon of each day to end the week with at least three live conversations. Be specific: name which companies, which contacts, which side-door moves.",
    "The lecture distinguishes quality applications from volume applications. For your current target list, identify the five companies where a quality application (referral, specific cover message, or public artifact) is possible this week. What specifically makes each one quality?",
    "Graham (2023) writes: “If you’re excited about some possibility that everyone else ignores, and you have enough expertise to say precisely what they’re all overlooking, that’s as good a bet as you’ll find.” Name one company where you have that kind of specific, non-generic enthusiasm. What is your unconventional move there?",
    "By week 10 you have a pipeline in some state: some conversations in progress, some dead ends, some never started. Audit yours honestly. Which stage has the most contacts stalled? What is the highest-leverage action to unblock that stage this week?",
    "Capstone is due this week. Confirm you have all three components: the application sprint log, the mock loop recording and critique, and the documentation of your one unconventional move.",
  ],
};

export function Wk10L1() {
  return <LecturePage spec={spec} />;
}

export const wk10L1SearchBody =
  "application sprint last mile concentration volume daily cadence pipeline review formal side-door moves referral portal unconventional move one week sprint quality applications capstone synthesis Week 10 Lecture 1 landing the offer";
