import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 5 section: pixel-grid drill",
  tagline:
    "Rebuild three real product screens on an 8-point grid. Every padding, gap, and margin value must land on the scale.",
  outDate: "Week 5",
  overview: [
    "Knowing the 8-point grid as a concept and applying it under pressure are different skills. This section develops the second one. You will choose three screens from real products, analyze their spacing, and rebuild each screen in Figma with every measurement constrained to an 8-point or 4-point value. The process of enforcing that constraint on real designs teaches you more than any perfectly constructed example could, because real products have spacing errors, and finding them is the skill.",
    "The section has two phases. In the first phase you work individually, rebuilding your screens and annotating any value that does not land on the grid. In the second phase you share your findings with a partner and compare: did you find the same violations? Did you interpret any ambiguous measurement differently? The debrief is where the vocabulary from Lecture 1 gets tested against real evidence.",
    "HW2 is due this week. Bring your type-only redesign to section for a brief check-in before you submit.",
  ],
  goals: [
    "Identify every spacing value on a real product screen as either on-grid (multiple of 8 or 4) or off-grid",
    "Rebuild at least two of the three screens in Figma using spacing tokens that correspond to the 8-point scale",
    "Use the correct token names (xs, sm, md, lg, xl) for each spacing value in your rebuilt frames",
    "Distinguish inner padding (within a component) from outer margin (between components in a layout)",
    "Name at least one specific violation in each screen and describe what it costs visually",
  ],
  instructions: [
    {
      title: "Choose your three screens (before section)",
      body: "Pick three screens from three different apps or products. Each screen should have at least 10 distinct spacing relationships you can measure: cards, lists, navigation bars, input fields, and headers are all good candidates. Avoid screens that are mostly illustration or full-bleed photography with minimal UI structure. Take a screenshot of each screen at native resolution. You will use these screenshots as reference images in Figma.",
    },
    {
      title: "Audit each screenshot for spacing (20 min)",
      body: "For each of the three screenshots, do a written audit before rebuilding anything. Go through the screen and list every spacing value you can identify by eye:",
      steps: [
        "Inner padding: the space between a container&rsquo;s edge and its content (e.g., the padding inside a button or a card).",
        "Gap: the space between sibling elements within a container (e.g., the gap between an icon and a label, or between list items).",
        "Outer margin: the space between a component and the surrounding layout (e.g., the margin between a card and the column it sits in).",
        "For each value, estimate the pixel amount and classify it: 8-point grid (8, 16, 24, 32, 40, 48), 4-point step (4, 12, 20, 28, 36), or off-grid (anything else).",
        "Write your estimates in a column next to the screen. You do not need precise measurements yet. The point is to train your eye.",
      ],
    },
    {
      title: "Rebuild two screens in Figma (30 min)",
      body: "Pick the two most structure-rich screens from your three. For each one, create a Figma frame at the correct device width (390px for mobile, 1440px for desktop). Enable the 8-point layout grid on the frame (Layout Grid, 8px grid, 10% opacity). Then rebuild the screen using auto-layout with all spacing values snapped to the 8-point scale:",
      steps: [
        "Set up spacing variables in Figma: xs=4, sm=8, md=16, lg=24, xl=32. Apply these as local variables to your padding and gap values.",
        "Start with the outermost container and work inward. Set every padding and gap value to the nearest 8-point token before adding child content.",
        "When you encounter a spacing value that appears to be off-grid (say, 14px), decide whether to round it to 16px (the nearest 8-point value) or to 12px (the nearest 4-point value). Document your decision in a note frame on the canvas.",
        "Place your reference screenshot next to your rebuilt frame so you can compare side by side.",
      ],
    },
    {
      title: "Annotate violations (10 min)",
      body: "Review the third screenshot (the one you did not rebuild) and identify what you now believe are its three most significant spacing violations. For each one, write:",
      steps: [
        "The location in the screen (e.g., &ldquo;the padding inside the primary button&rdquo;).",
        "The estimated actual value (e.g., &ldquo;approximately 11px top and bottom&rdquo;).",
        "What value it should be on the 8-point grid (e.g., &ldquo;should be 12px, a 4-point step&rdquo;).",
        "One sentence describing the visual cost: does it make the button feel too tight, inconsistent with other components, or just slightly wrong in a way that is hard to name?",
      ],
    },
    {
      title: "Pair debrief (15 min)",
      body: "Find a partner who rebuilt different screens than you. Share your violation annotations. Discuss: Did you apply the same rule for rounding off-grid values? Did you choose the same token for a given measurement? If you rebuilt the same screen, compare your Figma frames side by side and explain any differences in token choice. The TA will call time and ask two pairs to share one finding each with the group.",
    },
  ],
  deliverables: [
    "Three screenshots with written spacing audits identifying at least 5 spacing values per screen and classifying each as 8-point, 4-point, or off-grid",
    "Two Figma frames (rebuilt screens) with auto-layout, 8-point grid overlay enabled, and spacing tokens applied throughout",
    "A violation annotation for the third screen naming three off-grid values, their correct on-grid replacements, and one sentence on the visual cost of each",
    "HW2 (type-only redesign) submitted before or during section",
  ],
  rubric: [
    {
      dimension: "Spacing audit completeness",
      points: 20,
      notes:
        "All three screenshots have written audits. At least 5 spacing values are identified per screen. Each value is classified as 8-point, 4-point, or off-grid with a pixel estimate.",
    },
    {
      dimension: "Figma rebuild: grid compliance",
      points: 30,
      notes:
        "Both rebuilt frames have the 8-point grid overlay. All padding and gap values are set to 8-point or 4-point tokens. No freehand pixel values are used except where explicitly annotated as a deliberate rounding decision.",
    },
    {
      dimension: "Token naming and application",
      points: 20,
      notes:
        "Spacing variables are defined with the correct T-shirt size names (xs, sm, md, lg, xl). Tokens are applied to frame properties rather than overriding with raw pixel values.",
    },
    {
      dimension: "Violation annotations",
      points: 20,
      notes:
        "Three violations identified in the third screen. Each has a location, an estimated actual value, a corrected on-grid value, and a one-sentence description of the visual cost.",
    },
    {
      dimension: "Section participation",
      points: 10,
      notes:
        "Brings work to section, contributes one specific observation during the pair debrief or group discussion.",
    },
  ],
  hints: [
    "If a padding value looks like it might be 14px or 10px, it is probably intentional off-grid spacing. Ask yourself: is this a rounding decision, a half-step on the 4-point grid, or a genuine violation? The answer matters for the annotation.",
    "Mobile apps often use the 4-point grid more aggressively than desktop because screen real estate is tighter. Do not assume every value should be a multiple of 8. The 4-point half-steps (4, 12, 20, 28) are legitimate choices.",
    "Auto-layout gap and padding are two different places to set spacing. If a card&rsquo;s children look correctly spaced but the gap is set to 0, check whether the spacing is coming from margins on the children instead. That is an anti-pattern on the 8-point grid.",
    "The 8-point grid overlay in Figma (Shift+G to toggle) shows you a visual grid but does not snap to it automatically. You still have to type the correct values. The grid is a checking tool, not an enforcement tool.",
    "HW2 is due this week. If you are close to done but not quite, use the first 10 minutes of section to finish. The teaching staff will accept submissions during section.",
  ],
  late: "Section deliverables are due at the end of section. Late work is accepted up to 48 hours afterward with a 10-point deduction. HW2 is a separate submission with its own deadline.",
};

export function Wk05Section() {
  return <ProjectPage spec={spec} />;
}

export const wk05SectionSearchBody =
  "pixel-grid drill 8-point grid spacing audit violations rebuild product screens auto-layout spacing tokens xs sm md lg xl inner padding outer margin T-shirt sizing spacing scale alignment discipline Figma layout grid Week 5 section design for builders";
