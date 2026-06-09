import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Retention",
  date: "Week 4 Lecture 1",
  week: 4,
  topics: [
    "D1/D7/D30 retention: why each interval tells a different story about your product",
    "The retention curve: smiling, flat, or decaying, and what each shape predicts about MRR",
    "Net revenue retention vs logo retention: expansion revenue as a churn offset",
    "Habit loops (Nir Eyal's Hook Model) and what survives empirical scrutiny",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk04-l1.pdf",
  readings: [
    {
      title: "Week 4 reading: Retention, cohort analysis, and habit loops",
      href: "/c/b2c-10k-mrr-26au/readings/wk04",
      note: "Required before section",
    },
    {
      title: "What is good retention? (Lenny Rachitsky, 2020)",
      href: "https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29",
      note: "Evidence-based benchmarks: consumer social 25/45%, subscription 40/70% at 6 months",
    },
    {
      title: "How to kickstart and scale a consumer business, Step 5: RETAIN (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/how-to-kickstart-and-scale-a-consumer-9c8",
      note: "Four PMF signals tied to retention; founder quotes on what product-market fit feels like",
    },
  ],
  followups: [
    "Outcome: Analyze — Pull your D1, D7, and D30 retention numbers. Write one sentence naming the curve shape (smiling, flat, or decaying) and one hypothesis for why the curve has that shape.",
    "Outcome: Apply — Calculate your net revenue retention for the last rolling 30 days. Is it above or below 100%? What would need to change about your expansion or churn to move it across that line?",
    "Outcome: Evaluate — Nir Eyal's Hook Model identifies four steps: trigger, action, variable reward, investment. Map your product onto each step. Where does the loop break down for users who churn before day 7?",
  ],
};

export function Wk04L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk04L1SearchBody =
  "retention D1 D7 D30 retention curve smiling flat decaying net revenue retention logo retention habit loop hook model trigger action variable reward investment Nir Eyal lecture Week 4";
