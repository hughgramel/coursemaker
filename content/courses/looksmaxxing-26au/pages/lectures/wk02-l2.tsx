import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Sleep, circadian rhythm, and recovery",
  date: "Week 2 Lecture 2",
  week: 2,
  topics: [
    "Sleep duration meta-analyses and the AASM seven-hour minimum",
    "What happens to skin, hormones, and mood during restricted sleep",
    "Circadian rhythm, light hygiene, and consistent sleep timing",
    "Caffeine half-life and its effect on sleep quality",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk02-l2.pdf",
  readings: [
    {
      title: "Week 2 reading: Baseline, sleep, and the habit machine",
      href: "/c/looksmaxxing-26au/readings/wk02",
      note: "Required before section",
    },
    {
      title: "Negative effects of restricted sleep on facial appearance and social appeal (Sundelin, Lekander, Sorjonen, Axelsson, 2017)",
      href: "https://royalsocietypublishing.org/rsos/article/4/5/160918/66370/Negative-effects-of-restricted-sleep-on-facial",
      note: "Blinded raters scored sleep-deprived faces as paler, less healthy, and less attractive than the same faces after full sleep",
    },
    {
      title: "Atomic Habits: How to Get 1% Better Every Day (James Clear, 2021)",
      href: "https://www.youtube.com/watch?v=U_nzqnXWvSo",
      note: "Habit-stacking formula and cue-craving-response-reward loop; anchors the sleep routine implementation section",
    },
  ],
  followups: [
    "Outcome (Explain): Explain how two consecutive nights of five-hour sleep alter rated facial attractiveness, skin pallor, and perceived health, citing Sundelin et al. (2017).",
    "Outcome (Explain): Describe the circadian mechanism by which late-night bright light delays sleep onset and what practical steps reverse it.",
    "Outcome (Implement): Build a written habit-stack that anchors a consistent bedtime to an existing evening anchor behavior using James Clear's formula.",
  ],
};

export function Wk02L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk02L2SearchBody =
  "sleep duration circadian rhythm light hygiene caffeine half-life recovery skin appearance attractiveness AASM seven hours habit stacking sleep timing lecture Week 2 looksmaxxing";
