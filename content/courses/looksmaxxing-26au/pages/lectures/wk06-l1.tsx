import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Mouth basics: hygiene, gums, and breath",
  date: "Week 6 Lecture 1",
  week: 6,
  topics: [
    "Plaque biofilm: what it is, how it forms, and why brushing alone cannot eliminate it",
    "Brushing technique: 45-degree angle, short strokes, two minutes twice daily per ADA guidance",
    "Flossing evidence: what the 2019 Cochrane systematic review actually found about gingivitis reduction",
    "Interdental brushes versus floss: comparative efficacy from the same Cochrane review",
    "Tongue cleaning and the microbial sources of halitosis",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk06-l1.pdf",
  readings: [
    {
      title: "Week 6 reading: Dental, whitening, and the jawline myths",
      href: "/c/looksmaxxing-26au/readings/wk06",
      note: "Required before section",
    },
    {
      title: "Brushing Your Teeth (American Dental Association, MouthHealthy.org, 2023)",
      href: "https://www.mouthhealthy.org/all-topics-a-z/brushing-your-teeth",
      note: "Official ADA technique guidance: angle, stroke length, frequency, and brush type",
    },
    {
      title:
        "Home use of interdental cleaning devices (Worthington et al., Cochrane, 2019)",
      href: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD012018.pub2/full",
      note: "Systematic review of flossing and interdental brushing: evidence quality, gingivitis outcomes",
    },
  ],
  followups: [
    "Outcome (Implement): Describe the ADA-recommended brushing technique in your own words: brush angle, stroke type, duration, and frequency. Explain what plaque biofilm is and why two-minute brushing twice daily targets it.",
    "Outcome (Implement): Summarize what the Cochrane 2019 review found about interdental cleaning. What was the evidence quality, and which device type showed stronger results? How does this change your recommendation for your own routine?",
  ],
};

export function Wk06L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk06L1SearchBody =
  "plaque biofilm brushing technique ADA oral hygiene flossing evidence Cochrane 2019 interdental brushing gingivitis halitosis tongue cleaning breath gum health lecture week 6 looksmaxxing dental";
