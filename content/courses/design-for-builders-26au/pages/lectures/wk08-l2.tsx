import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Brand systems beyond the logo",
  date: "Week 8, Lecture 2",
  week: 8,
  topics: [
    "Voice and tone: what your brand says and how it says it across every surface",
    "Brand colors vs UI colors: why your primary brand color is probably wrong for buttons",
    "Photography and illustration style: the visual language that surrounds the logo",
    "The one-page brand sheet: what goes on it, how to build it in Figma, and why it is the output that counts",
  ],
  slidesHref: "/c/design-for-builders-26au/slides/wk08-l2.pdf",
  readings: [
    {
      title: "Week 8 reading: brand identity for product builders",
      href: "/c/design-for-builders-26au/readings/wk08",
    },
    {
      title:
        "How to Build a Brand Guidelines System in Figma (2024)",
      href: "https://m.youtube.com/watch?v=v2wKJTppDOA",
    },
    {
      title: "Chris Do (The Futur): The Power of Design, Chris Do on Brand Logos (2022)",
      href: "https://thefutur.com/content/the-power-of-design-chris-do-on-brand-logos",
    },
  ],
  followups: [
    "Write three sentences of marketing copy for your product in each of two distinct voices: one clinical and precise, one warm and conversational. Show both to someone who has never seen your product. Which voice matches the product they imagine?",
    "Open the Figma file from your Week 4 color work. Your brand primary color sits somewhere in your palette. Now open your Week 6 landing page. Is the color you used for buttons the same shade, a lighter shade, or a darker shade? Is that the right choice for accessibility and for brand expression? Justify your answer with a contrast ratio.",
    "The How to Build a Brand Guidelines System video (2024) structures the one-page brand sheet as: logo lockups, color palette, typography specimen, photography direction, and voice summary. Pick one of those sections you think is hardest to execute well for your product and explain why.",
    "Describe the illustration style of two competing products in your category. Use at least four specific terms: line weight, palette range (monochromatic vs full color), figure complexity (flat vs isometric vs detailed), and mood (playful vs neutral vs serious). Which style is unclaimed in your category?",
    "A brand sheet is a decision-making tool, not a gallery piece. For your own product, write one sentence for each of the five brand sheet sections (logo, color, type, photography, voice) that a new contractor could act on without asking you a follow-up question. Is each sentence specific enough to produce a consistent output?",
  ],
};

export function Wk08L2() {
  return <LecturePage spec={spec} />;
}

export const wk08L2SearchBody =
  "brand system voice tone brand colors UI colors photography illustration style brand sheet one-page brand guidelines Figma brand identity Week 8 Lecture 2 design for builders founders engineers";
