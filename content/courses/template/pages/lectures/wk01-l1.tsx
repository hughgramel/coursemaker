import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "A sample lecture: how lecture pages are structured",
  date: "Week 1, Lecture 1",
  week: 1,
  topics: [
    "Title, week label, and the topics array as the table of contents",
    "Linking to the slide deck PDF rendered by the Marp pipeline",
    "Pointing at the week's reading and any external readings",
    "Closing with follow-up questions that drive discussion",
  ],
  slidesHref: "/c/template/slides/wk01-l1.pdf",
  readings: [
    {
      title: "Week 1 reading: a sample reading",
      href: "/c/template/readings/wk01",
    },
    {
      title: "Just the Docs theme reference (the visual inspiration)",
      href: "https://just-the-docs.com/",
    },
  ],
  followups: [
    "Pick a topic you know well. Write four topic-bullet entries for a 50-minute lecture on it. Each entry is one concrete idea, not a section heading.",
    "Open one of the live courses' lecture pages and identify the four sections it renders. Which three would you keep if you had to cut one?",
    "The slide deck and the lecture page are different artifacts. What belongs only in the deck? What belongs only on the page?",
  ],
};

export function Wk01L1() {
  return <LecturePage spec={spec} />;
}

export const wk01L1SearchBody =
  "Week 1 lecture 1 sample lecture structure topics slides readings follow-up questions";
