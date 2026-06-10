import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The reply game and reaching out first",
  date: "Week 3, Lecture 2",
  week: 3,
  topics: [
    "Why commenting matters more than posting at zero followers: borrowed distribution explained",
    "Picking targets: accounts 10x-100x your size, same niche, active comment sections",
    "Manual outreach: Paul Graham’s “do things that don’t scale” applied to creator growth",
    "Reply patterns that generate profile clicks: specific, additive, not sycophantic",
    "DMs and follow-firsts: how to reach out without making it weird",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk03-l2.pdf",
  readings: [
    {
      title: "Week 3 reading: the X algorithm and the reply game",
      href: "/c/grow-on-x-26au/readings/wk03",
    },
    {
      title: "Paul Graham: Do Things that Don’t Scale (2013)",
      href: "https://paulgraham.com/ds.html",
    },
  ],
  followups: [
    "Graham (2013) says the most common unscalable thing founders do at the start is recruit users manually. Translate that to creator growth: what is the exact creator equivalent of manual user recruitment?",
    "Write two replies to the same hypothetical post: one that is sycophantic (“great point!”), one that adds genuine value. Identify what makes the second one likely to generate a profile click.",
    "A creator in your niche has 25,000 followers and posts regularly. Write a DM you would actually send them. Then rewrite it after removing any line that could be read as asking for something.",
    "At zero followers, every post you publish reaches near-zero people cold. Replying to a 20,000-follower account’s post exposes your name to that account’s audience. Estimate the reach difference in orders of magnitude.",
    "The reading describes the reply-to-follow funnel. Identify the step in that funnel where you have the most control right now. What would you optimize first?",
  ],
};

export function Wk03L2() {
  return <LecturePage spec={spec} />;
}

export const wk03L2SearchBody =
  "reply game reaching out commenting borrowed distribution target accounts manual outreach do things that don't scale Paul Graham DMs follow-firsts profile clicks reply patterns network effects Week 3 Lecture 2";
