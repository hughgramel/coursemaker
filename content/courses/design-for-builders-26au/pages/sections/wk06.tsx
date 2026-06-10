import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 6 section: hero-section critique",
  tagline:
    "Tear down three real SaaS hero sections using the anatomy framework, then rebuild one of them in Figma using what you know.",
  outDate: "Week 6",
  dueDate: "Week 6 (bring your critique sheet and rebuild to section)",
  overview: [
    "This section applies the landing-page anatomy from lecture to real products. You arrive with a written critique of three SaaS hero sections and a Figma rebuild of one of them. The critique names specific failures in message hierarchy and CTA design. The rebuild corrects those failures using your type scale, color ramp, spacing scale, and 8-point grid.",
    "HW3 (full landing page design) goes out this week. The rebuild you do in section is the warmup for that assignment. The patterns you identify in critique will inform the choices you make in your own landing page.",
    "The goal is to move from passive observation to active diagnosis. Any founder can say a landing page “looks off.” After this section you can name what is off, explain why it fails to convert, and demonstrate the fix in Figma.",
  ],
  goals: [
    "Identify at least three friction points in a real hero section using the hero-pattern and cta-design frameworks from lecture",
    "Name the specific element responsible for each friction point: headline, subhead, CTA copy, CTA visual weight, or hero imagery",
    "Rebuild a hero section in Figma that corrects the diagnosed failures while preserving the product’s core message",
    "Give structured feedback to two peers on their critiques, naming one diagnosis you agree with and one you would argue differently",
    "Connect the rebuild to the vocabulary of the course: type scale, color ramp, spacing scale, 8-point grid, visual hierarchy",
  ],
  instructions: [
    {
      title: "Choose three SaaS hero sections before section (before section)",
      body: "Select three real SaaS products in a market you know. Each must have a publicly accessible landing page with a visible hero section. At least one should be a product you find genuinely compelling. At least one should be a product whose hero you find weak. Take a full-page screenshot of each hero at 1440px width.",
      steps: [
        "Product 1: a product you find genuinely compelling. What does the hero do well?",
        "Product 2: a product in the same market whose hero you find weak. Where does it fail?",
        "Product 3: a product from a different market that you think has design lessons for your own product.",
      ],
    },
    {
      title: "Critique each hero using the five-point framework (before section)",
      body: "For each of your three hero sections, score it on five dimensions from the lecture. Write one sentence of evidence for each score. Do not write generic praise or criticism. Name the specific element.",
      steps: [
        "Headline: does it name a specific outcome for a specific customer? Score 1-3.",
        "Subhead: does it answer “why you?” in one sentence? Score 1-3.",
        "CTA: is the button copy specific, is the button visually dominant, and is there adequate whitespace around it? Score 1-3.",
        "Hero imagery: does the image reinforce the headline or compete with it? Score 1-3.",
        "Overall hierarchy: does the eye move from headline to subhead to CTA in that order? Score 1-3.",
      ],
    },
    {
      title: "Rebuild one hero section in Figma (before section)",
      body: "Pick the hero section with the lowest total score from your three critiques. Rebuild it in Figma addressing the failures you named. You are not redesigning the product or inventing new copy. You are fixing the design execution of the existing message.",
      steps: [
        "Use your type scale from Week 3. The headline must use the largest step in your scale.",
        "Use your color ramp from Week 4. The CTA button must use your primary accent color.",
        "Use your spacing scale on an 8-point grid from Week 5. Every spacing value is a multiple of 8.",
        "Preserve the product’s actual headline and subhead copy. Fix the hierarchy, not the words.",
        "Annotate your frame with three notes: what you changed, why you changed it, and how it addresses the specific friction point from your critique.",
      ],
    },
    {
      title: "Peer critique round 1 (20 min in section)",
      body: "Pair with a partner who critiqued different products than you. Each person has 5 minutes to walk through one of their critiques. Present the original screenshot and your score sheet. Do not show your rebuild yet. The listener scores the same hero on the five-point framework independently while you present.",
    },
    {
      title: "Compare scores and discuss (10 min in section)",
      body: "Compare your five-point scores against your partner’s independent scores for the same hero. For any dimension where you scored differently, spend 60 seconds each defending your score. The goal is not consensus, it is understanding what specific evidence leads to different diagnoses.",
    },
    {
      title: "Reveal the rebuild (10 min in section)",
      body: "Show your Figma rebuild to your partner. Your partner gives feedback using exactly two prompts: one thing the rebuild fixes clearly, and one thing the original had that the rebuild accidentally lost. Note both pieces of feedback in your file.",
    },
    {
      title: "Second pair rotation (20 min in section)",
      body: "Repeat the critique-and-reveal sequence with a second partner who has not seen your work. Fresh eyes on the rebuild often catch things the first reviewer missed. Note where both partners agree: that is your highest-signal feedback.",
    },
  ],
  deliverables: [
    "Screenshots of three SaaS hero sections at 1440px width (attached to your critique sheet)",
    "Five-point critique sheet for each of the three heroes, with one sentence of evidence per score",
    "Figma rebuild of the lowest-scoring hero, on an 8-point grid, with three annotation notes",
    "Written notes from two peer critiques, including the one-thing-fixed and one-thing-lost feedback for your rebuild",
  ],
  rubric: [
    {
      dimension: "Critique quality: specific, evidence-backed, using lecture vocabulary",
      points: 30,
      notes:
        "Each of the five dimensions scored for each hero, with one sentence of evidence. Evidence must name a specific element (not “it looks cluttered” but “the headline and subhead are the same size, so the eye has no signal about which to read first”).",
    },
    {
      dimension: "Rebuild: corrects the diagnosed failures on an 8-point grid",
      points: 35,
      notes:
        "All spacing values are multiples of 8. Type scale applied correctly. CTA button uses primary accent. Annotations present for three changes. Rebuild preserves the original copy.",
    },
    {
      dimension: "Peer feedback given: specific, names the fix and the trade-off",
      points: 20,
      notes:
        "Evidence of written notes for two peers. Each note names one thing that works and one thing lost. Generic praise (“looks clean”) does not count.",
    },
    {
      dimension: "Connection to course vocabulary: type scale, color ramp, spacing scale, hierarchy",
      points: 15,
      notes:
        "At least one annotation in the Figma rebuild explicitly names a concept from weeks 3-5 and explains how it applies here.",
    },
  ],
  hints: [
    "The most common critique failure is vagueness. “The CTA is weak” is not a critique. “The CTA button uses a neutral gray that has lower visual weight than the hero image, so the eye never lands on it” is a critique.",
    "The most common rebuild failure is changing the copy. Fix the design execution of the existing words. If you rewrite the headline, you are doing copywriting, not design critique.",
    "Annotations are not optional. The three annotations in your rebuild are how your instructor and peers understand your reasoning. A rebuild without annotations is a redesign with no argument.",
    "When comparing scores with your partner, focus on the evidence, not the number. A 2 and a 3 on CTA design are both defensible if the evidence differs. What matters is whether your evidence is specific.",
    "HW3 (full landing page design) goes out this week. The rebuild you finish in section is a proof of concept for your own landing page. Save it and reference it when you start the assignment.",
  ],
  late: "Critique sheets and screenshots submitted after the section start time receive a 10-point deduction. Figma rebuild submitted more than 24 hours after section receives a 20-point deduction. Peer feedback notes cannot be completed after section.",
};

export function Wk06Section() {
  return <ProjectPage spec={spec} />;
}

export const wk06SectionSearchBody =
  "hero section critique tear down rebuild SaaS landing page five-point framework headline subhead CTA imagery hierarchy 8-point grid type scale color ramp Figma rebuild peer critique HW3 landing page design Week 6 section design for builders founders engineers";
