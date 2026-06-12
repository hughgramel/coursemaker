import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Do things that don't scale",
  date: "Week 5 Lecture 1",
  week: 5,
  topics: [
    "Manual recruiting as the only proven channel: 174 direct-attributed people, all hand-recruited",
    "Why founders under-recruit: the passive-traction fallacy",
    "The Collison installation: concierge onboarding as the unscalable advantage",
    "LangoBee's diagnosis: recruits handed a debugging task, not an onboarded product",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk05-l1.pdf",
  readings: [
    {
      title: "Week 5 reading: The 10-user test",
      href: "/c/langobee-10k-mrr-26su/readings/wk05",
      note: "Required before section",
    },
    {
      title: "Do Things That Don't Scale (Paul Graham, 2013)",
      href: "https://www.paulgraham.com/ds.html",
      note: "The Collison installation and four unscalable tactics that shape company culture",
    },
    {
      title: "How to Talk to Users (Eric Migicovsky, 2019)",
      href: "https://www.youtube.com/watch?v=MT4Ig2uqjTc",
      note: "Three stages of user conversations; how to recruit and extract insight",
    },
  ],
  followups: [
    "Outcome (Apply): Write a one-paragraph outreach message for the Refold Espanol Discord. It must give value to the community before it asks for anything. Check it against the give-before-ask rule.",
    "Outcome (Analyze): LangoBee's 174 direct-attributed signups were hand-recruited, but the May cohort returned at only 24%. Write one sentence diagnosing the gap between recruiting and onboarding.",
    "Outcome (Evaluate): Paul Graham argues that the unscalable move also shapes company culture. Based on your diagnosis, what does concierge onboarding the next 10 users teach you that no analytics dashboard can?",
  ],
};

export function Wk05L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk05L1SearchBody =
  "do things that don't scale manual recruiting concierge onboarding Collison installation passive traction Discord outreach LangoBee 174 direct signups under-recruit week 5 lecture 1";
