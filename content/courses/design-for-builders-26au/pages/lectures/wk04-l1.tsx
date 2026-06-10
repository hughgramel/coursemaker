import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Color theory for screens, not paintings",
  date: "Week 4, Lecture 1",
  week: 4,
  topics: [
    "HSL and OKLCH: the two color models you actually need",
    "Hue rotation and perceptual uniformity: why equal steps in HSL look unequal on screen",
    "Why pure black (#000000) and pure white (#ffffff) are wrong for UI",
    "Accent vs neutral: the two-ramp structure every product palette needs",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk04-l1.pdf",
  readings: [
    {
      title: "Week 4 reading: color, palettes, contrast, and dark mode",
      href: "/c/design-for-builders-26au/readings/wk04",
    },
    {
      title:
        "Required: Daryl Koopersmith &amp; Wilson Miner (Stripe Design), Designing Accessible Color Systems (2019)",
      href: "https://stripe.com/blog/accessible-color-systems",
    },
    {
      title:
        "Required: Adam Wathan &amp; Steve Schoger (Refactoring UI), Building Your Color Palette",
      href: "https://refactoringui.com/previews/building-your-color-palette/",
    },
  ],
  followups: [
    "Open the Tailwind CSS color documentation and find the Slate family. Pick any two adjacent steps (e.g. Slate 400 and Slate 500). Convert both hex values to HSL. How much does lightness change between them? How much does hue change? Does the difference feel perceptually equal on screen?",
    "Koopersmith &amp; Miner (Stripe, 2019) found that equal HSL lightness values produced unequal perceived brightness. In their CIELAB-based tool, they adjusted each ramp stop individually. What does that tell you about relying on a fixed lightness formula to generate a ramp automatically?",
    "Pick the brand color for a product you admire. Convert it to OKLCH using a browser devtools color picker or an online converter. What is its chroma value? What happens to the color&rsquo;s vibrancy if you reduce chroma by 30% while keeping hue and lightness constant?",
    "Wathan &amp; Schoger (Refactoring UI, 2019) recommend choosing a base shade first, then defining the darkest and lightest use cases, then filling the middle stops by eye. Try this process with a blue of your choice. Where did you find yourself overriding the algorithm and trusting your eye instead?",
    "Open a product you use regularly. Find one place where the background is either pure white or very close to it (#ffffff or #fafafa). Now find one place where the text is either pure black or very close to it. Replace both with slightly shifted values. Does the overall feel change? What changed?",
  ],
};

export function Wk04L1() {
  return <LecturePage spec={spec} />;
}

export const wk04L1SearchBody =
  "HSL HSB OKLCH color models hue rotation perceptual uniformity pure black pure white accent neutral ramp color theory screens UI color palette product design Week 4 Lecture 1 design for builders founders engineers";
