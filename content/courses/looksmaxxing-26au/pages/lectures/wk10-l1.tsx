import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Body dysmorphia, comparison, and the looksmaxxing rabbit hole",
  date: "Week 10 Lecture 1",
  week: 10,
  topics: [
    "BDD signs and prevalence: ~2% of adults, higher in appearance-focused communities (Phillips, 2021)",
    "Diagnostic criteria: preoccupation with perceived flaws, repetitive behaviors, distress or functional impairment",
    "Forum culture as a risk factor: how comparison loops amplify dissatisfaction",
    "When to step away: warning signs that a habit has become compulsive",
    "Therapy and clinical referral: CBT with ERP and SSRIs; the IOCDF BDD resource hub",
    "Self-talk that survives a bad-photo day: calibrated honesty versus catastrophizing",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk10-l1.pdf",
  readings: [
    {
      title: "Week 10 reading: Body dysmorphia and the twelve-week plan",
      href: "/c/looksmaxxing-26au/readings/wk10",
      note: "Required before section",
    },
    {
      title:
        "Body Dysmorphic Disorder with Katharine Phillips, MD (IOCDF OCD Awareness Day, 2021)",
      href: "https://www.youtube.com/watch?v=im-T6suALyQ",
      note: "Prevalence, diagnostic criteria, BDD in men, evidence-based treatments",
    },
    {
      title: "Body Dysmorphic Disorder (BDD) Resource Hub (IOCDF, 2024)",
      href: "https://bdd.iocdf.org/",
      note: "Treatment directory, symptom checklist, and support for young adults",
    },
  ],
  followups: [
    "Outcome (Assess): Assess your week-zero versus week-ten photos and measurements honestly, naming two changes you can verify objectively",
    "Outcome (Critique): Critique your own progress, naming what worked and what stalled and why, without catastrophizing or inflating results",
  ],
};

export function Wk10L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk10L1SearchBody =
  "body dysmorphic disorder BDD body dysmorphia prevalence 2% Katharine Phillips Weill Cornell OCD awareness diagnostic criteria preoccupation repetitive behaviors CBT ERP SSRIs IOCDF resource hub forum culture comparison trap looksmaxxing rabbit hole self-talk bad photo day clinical referral therapy warning signs Week 10 lecture 1";
