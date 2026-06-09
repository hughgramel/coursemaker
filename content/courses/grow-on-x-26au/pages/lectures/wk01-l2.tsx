import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Niche, voice, and bio craft",
  date: "Week 1, Lecture 2",
  week: 1,
  topics: [
    "Picking a niche narrow enough to be remembered",
    "The who-you-serve / what-you-say / how-you-sound triangle",
    "Bio as a conversion landing page: name, headline, proof, and CTA",
    "Profile photo and header as silent signals",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk01-l2.pdf",
  readings: [
    {
      title: "Week 1 reading: funnel, niche, and bio",
      href: "/c/grow-on-x-26au/readings/wk01",
    },
    {
      title: "Justin Welsh: The counterintuitive approach to uncovering your profitable niche",
      href: "https://www.justinwelsh.me/newsletter/the-counterintuitive-approach-to-uncovering-your-profitable-niche",
    },
    {
      title: "Dan Koe: The most profitable niche is you",
      href: "https://thedankoe.com/letters/the-most-profitable-niche-is-you-how-to-create-your-niche/",
    },
  ],
  followups: [
    "Apply the who/what/how triangle to your own account. Write one sentence for each corner. Where is the triangle weakest?",
    "Rewrite your current bio using the name-headline-proof-CTA structure from the reading. Bring both versions to section.",
    "Koe (2023) argues that your authentic self is a defensible niche. Where does that claim hold? Where does it break down for someone just starting out?",
    "Find a creator whose header image communicates a clear positioning without any text. Describe what the image signals and why it works.",
    "Welsh (2024) says the best niche ideas come from customer conversations, not solo brainstorming. What is the X equivalent of a customer conversation for a solo creator?",
  ],
};

export function Wk01L2() {
  return <LecturePage spec={spec} />;
}

export const wk01L2SearchBody =
  "niche voice bio craft positioning who you serve ideal reader personal monopoly headline proof CTA profile photo header conversion X Twitter Week 1 Lecture 2";
