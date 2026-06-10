import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Designing the hero: copy, image, and call-to-action together",
  date: "Week 6, Lecture 2",
  week: 6,
  topics: [
    "Headline writing for designers: specific outcome over clever wordplay",
    "The subhead as proof: one sentence that answers “why you?”",
    "Primary CTA design: button copy, color, size, and surrounding whitespace",
    "Hero imagery: product screenshot vs. illustration vs. abstract background",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk06-l2.pdf",
  readings: [
    {
      title: "Week 6 reading: the anatomy of a converting landing page",
      href: "/c/design-for-builders-26au/readings/wk06",
    },
    {
      title:
        "Required: Ran Segall (Flux Academy), How to Design a Landing Page (live session)",
      href: "https://www.youtube.com/watch?v=akLlA0wcOlQ",
    },
    {
      title:
        "Required: Adam Wathan & Steve Schoger (Refactoring UI), Labels Are a Last Resort",
      href: "https://refactoringui.com/previews/labels-are-a-last-resort/",
    },
  ],
  followups: [
    "Write three headline variants for your product. Variant A: outcome-focused (“Ship a landing page your customers actually read”). Variant B: problem-focused (“Stop shipping landing pages that bounce”). Variant C: audience-focused (“For founders who can code but freeze in Figma”). Which one do you find most compelling, and what does that tell you about your customer?",
    "Segall (2023) argues that the subhead should answer the headline’s implicit question. Take one of your three headlines and write a subhead that completes the thought. Then test it: read the headline and subhead aloud to someone unfamiliar with your product. Can they describe back to you what the product does? If not, what was missing?",
    "Wathan & Schoger argue that labels are a last resort: format and context should communicate meaning before you add a label. Apply this to your hero CTA. If your button currently says “Get started”, rewrite it using the specific action the user takes. What does a more specific label do to the button’s visual weight?",
    "The lecture covers three hero imagery strategies: product screenshot, illustration, and abstract background. For each strategy, name one type of product it suits and one type it does not. Where does your own product fall, and what evidence from the lecture supports that choice?",
    "Build a full hero section in Figma: headline, subhead, CTA button, and one supporting image. Apply the type scale and color ramp from your starter kit. Measure the visual hierarchy: does the headline have the most visual weight? Is the CTA the second most prominent element? If not, what one change would fix it?",
  ],
};

export function Wk06L2() {
  return <LecturePage spec={spec} />;
}

export const wk06L2SearchBody =
  "hero design headline writing subhead proof CTA button copy image product screenshot illustration abstract background hero section copywriting for designers visual weight hierarchy Week 6 Lecture 2 design for builders founders engineers";
