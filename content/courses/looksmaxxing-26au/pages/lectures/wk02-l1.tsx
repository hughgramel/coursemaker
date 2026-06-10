import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Measuring what you can't see day to day",
  date: "Week 2 Lecture 1",
  week: 2,
  topics: [
    "Front, side, and three-quarter reference photos: setup and consistency",
    "Lighting variables that break comparisons across weeks",
    "Tape-measurement points: neck, chest, waist, hip, arm, thigh",
    "Bodyweight trend lines versus single-day noise",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk02-l1.pdf",
  readings: [
    {
      title: "Week 2 reading: Baseline, sleep, and the habit machine",
      href: "/c/looksmaxxing-26au/readings/wk02",
      note: "Required before section",
    },
    {
      title: "Negative effects of restricted sleep on facial appearance and social appeal (Sundelin, Lekander, Sorjonen, Axelsson, 2017)",
      href: "https://royalsocietypublishing.org/rsos/article/4/5/160918/66370/Negative-effects-of-restricted-sleep-on-facial",
      note: "Royal Society Open Science study linking two nights of five-hour sleep to measurable drops in rated attractiveness and health",
    },
    {
      title: "Recommended Amount of Sleep for a Healthy Adult (AASM and Sleep Research Society, 2015)",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4434546/",
      note: "Consensus statement establishing seven or more hours as the adult minimum for optimal health",
    },
  ],
  followups: [
    "Outcome (Apply): Capture a standardized weekly photo set using consistent position, distance, and lighting so that week-to-week comparisons are valid.",
    "Outcome (Apply): Record a body-measurement baseline at six or more tape points and log bodyweight for at least three days to establish a trend.",
    "Outcome (Explain): Explain why single-day weight readings mislead and how a seven-day rolling average removes glycogen, hydration, and meal-timing noise.",
  ],
};

export function Wk02L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk02L1SearchBody =
  "baseline photo documentation front side three-quarter lighting consistency tape measurement bodyweight trend line week zero progress tracking measurement lecture Week 2 looksmaxxing";
