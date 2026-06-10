import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Demo day and your twelve-week plan",
  date: "Week 10 Lecture 2",
  week: 10,
  topics: [
    "Before-and-after presentations: reading your own data honestly, not selectively",
    "Plan-on-a-page structure: seven pillars plus mental health across twelve weeks",
    "Habit retention: Fogg Behavior Model and why setting the bar low prevents the all-or-nothing failure cycle",
    "Quarterly review cadence: scheduling the check-in before you need it",
    "Wrapping the course: what progress looks like at three months versus ten weeks",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk10-l2.pdf",
  readings: [
    {
      title: "Week 10 reading: Body dysmorphia and the twelve-week plan",
      href: "/c/looksmaxxing-26au/readings/wk10",
      note: "Required before section; the plan-on-a-page template is in this reading",
    },
    {
      title:
        "Build Good Habits: BJ Fogg PhD, Stanford Behavior Design Lab (Episode 107, 2021)",
      href: "https://www.youtube.com/watch?v=9jFHwS0mzns",
      note: "Fogg Behavior Model: motivation x ability x prompt; tiny habits and the celebration mechanism",
    },
  ],
  followups: [
    "Outcome (Design): Design a personal twelve-week plan to extend your gains past the course, covering all seven pillars plus mental health",
    "Outcome (Create): Create a written commitment doc that integrates skin, hair, body, dental, style, posture, and sleep with specific weekly habits and a quarterly review date",
  ],
};

export function Wk10L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk10L2SearchBody =
  "demo day before and after presentations plan on a page twelve-week plan seven pillars habit retention BJ Fogg Stanford Behavior Design Lab Fogg Behavior Model tiny habits motivation ability prompt quarterly review cadence skincare haircare body composition dental style posture sleep mental health capstone Week 10 lecture 2";
