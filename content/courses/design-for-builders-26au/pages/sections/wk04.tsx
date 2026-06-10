import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 4 section: build your product’s full palette",
  tagline:
    "Create a complete light- and dark-mode color system as Figma variables, then apply it to every component in your starter kit.",
  outDate: "Week 4",
  overview: [
    "Choosing colors is not the hard part. Organizing them so they survive a design system is. This section moves from the palette you designed on paper in lecture to a working Figma variable collection with primitive and semantic layers. By the end of the session, every fill and stroke in your starter kit will reference a semantic token rather than a hardcoded hex value.",
    "You will build two ramps (neutral and accent) of nine steps each, map them to a semantic layer that names colors by their function rather than their shade, and then add a second variable mode for dark mode. The mode switch should change the look of the entire file with one click.",
    "The test at the end of section is simple: flip between light and dark mode. If everything looks intentional, your semantic layer is working. If something looks broken or inverted, your primitive values need to be reconsidered for that mode.",
  ],
  goals: [
    "Build a 9-step neutral ramp and a 9-step accent ramp in a Figma variable collection named “Primitives”",
    "Create a semantic variable collection named “Semantic” that references the primitive values by function (e.g. surface-base, text-primary, accent-default)",
    "Add a dark-mode mode to the Semantic collection and assign appropriate primitive values for each semantic token",
    "Verify that at least one text-on-background pair in your starter kit passes WCAG AA (4.5:1) using the Figma Contrast plugin or the WebAIM checker",
    "Apply semantic tokens to all fills and strokes in your starter kit so no component holds a hardcoded hex value",
  ],
  background: [
    "Lecture 1 covered the two-ramp structure (neutral and accent), why OKLCH or carefully tuned HSL produces more perceptually even ramps than automatic generators, and why pure black and pure white read as harsh in most UI contexts. Lecture 2 covered WCAG contrast ratios, the primitive-to-semantic token pipeline, and how Figma’s variable modes power one-click dark mode.",
    "Miao (Figma Engineering Blog, 2022) describes the five dimensions Figma used to name their own semantic tokens: type, UI element, color role, prominence, and interaction state. You do not need that level of granularity today. A lean set of six to ten semantic tokens covers most product surfaces: surface-base, surface-elevated, text-primary, text-secondary, accent-default, accent-subtle, border-default, and danger-default.",
  ],
  instructions: [
    {
      title: "Build your primitive ramps",
      body: "In Figma, create a local variable collection named “Primitives” with a single mode (light). Add two groups: Neutral and Accent. Build each as a 9-step ramp: steps 100, 200, 300, 400, 500, 600, 700, 800, and 900. Name variables as Neutral/100, Neutral/200, and so on. For neutral, start from a slightly warm or cool gray rather than a pure gray. For accent, choose your brand color as the 500 base and build outward. Use OKLCH or HSL with manual lightness adjustment at each step. Do not use a generator without inspecting each stop for perceptual evenness.",
    },
    {
      title: "Build your semantic layer",
      body: "Create a second variable collection named “Semantic” with two modes: Light and Dark. In Light mode, assign semantic names to primitive values. Minimum set: surface-base (Neutral/50 or a very light neutral), surface-elevated (white or Neutral/100), text-primary (Neutral/900), text-secondary (Neutral/600), accent-default (Accent/500), accent-subtle (Accent/100), border-default (Neutral/200), danger-default (a red at roughly step 600). Each semantic token references a primitive value, not a hardcoded hex.",
    },
    {
      title: "Add dark mode values",
      body: "Switch to the Dark mode column in the Semantic collection. Reassign each token to an appropriate primitive value for a dark surface. Dark mode is not inversion: surface-base in dark mode is typically Neutral/950 or Neutral/900, not Neutral/50 flipped. Text-primary in dark mode should be Neutral/50 or Neutral/100, not the inverse of Neutral/900. Accent-default may stay at Accent/500 or shift one step lighter to Accent/400 to maintain contrast against a dark background. Check each assignment visually before moving on.",
    },
    {
      title: "Test contrast",
      body: "Using the Figma Contrast plugin (or by copying values into the WebAIM checker at webaim.org/resources/contrastchecker/), test at least these three pairs in both modes: text-primary on surface-base, text-secondary on surface-base, and accent-default on surface-base. Each pair must pass WCAG AA (4.5:1 for normal-weight text at 16px or smaller, 3:1 for large text at 18px or 14px bold). Record the ratio for each pair. If any pair fails, adjust the darker value one or two steps and retest.",
    },
    {
      title: "Apply tokens to your starter kit",
      body: "Open your Week 1 starter kit file. Select each component and replace every hardcoded fill and stroke with a semantic variable. In the Figma inspector, click the fill swatch, switch from solid color to library variable, and choose the appropriate semantic token. When every component references a semantic token, create a frame and apply the Semantic collection’s Dark mode to it. The frame should switch to dark mode completely. If any component does not change, it still holds a hardcoded value.",
    },
    {
      title: "Demo for a section partner",
      body: "Show your partner the mode switch. Flip between Light and Dark. For each mode: name the semantic token driving the card background, confirm the text-on-background pair passes AA, and point to one place where you had to adjust a primitive value because the first assignment looked wrong. Give your partner the same two minutes. The goal is not perfection; it is a working system that can be improved.",
    },
  ],
  deliverables: [
    "A Figma file with a Primitives collection (neutral and accent ramps, 9 steps each) and a Semantic collection (light and dark modes, at minimum 8 semantic tokens)",
    "Contrast test results for three pairs in both modes, each passing WCAG AA",
    "A starter kit where every fill and stroke references a semantic variable rather than a hardcoded hex value",
    "A one-sentence explanation for each dark-mode token assignment that deviates from the obvious choice",
  ],
  rubric: [
    {
      dimension: "Primitive ramp quality",
      points: 25,
      notes:
        "Nine steps each, perceptually even spacing, no pure #000 or #fff at either end of the neutral ramp",
    },
    {
      dimension: "Semantic layer completeness",
      points: 25,
      notes:
        "At least 8 semantic tokens, all referencing primitives rather than hardcoded values, both modes populated",
    },
    {
      dimension: "Contrast compliance",
      points: 25,
      notes:
        "Three pairs tested in each mode, ratios documented, all pairs pass WCAG AA",
    },
    {
      dimension: "Starter kit wired to tokens",
      points: 15,
      notes:
        "Mode switch changes all components; no hardcoded hex values remain in fills or strokes",
    },
    {
      dimension: "Dark-mode reasoning",
      points: 10,
      notes:
        "Partner can point to at least one non-obvious dark-mode assignment and explain the rationale",
    },
  ],
  hints: [
    "Start the neutral ramp with a hue value slightly above or below zero (a warm gray sits around HSL(30, 6%, L) and a cool gray around HSL(220, 6%, L)). A perfectly neutral gray at HSL(0, 0%, L) often reads as clinical on most displays.",
    "If your accent color is very saturated at step 500, the steps toward 100 and 900 can lose their relationship to the base. Try reducing saturation slightly at the outer steps to keep the family feeling coherent.",
    "When testing contrast in Figma, zoom in to 100% and evaluate the pair at actual text size. A ratio that passes mathematically can still be hard to read if the type is set at 12px or below.",
    "Dark mode accent colors often need to shift one step lighter than their light-mode equivalent. Accent/500 against Neutral/900 may only achieve 3.5:1; Accent/400 against the same background may clear 4.5:1.",
    "The semantic token for text-secondary is the one that most often fails contrast in dark mode. Test it explicitly: Neutral/600 on Neutral/900 rarely clears AA. You will likely need to move it to Neutral/400 or Neutral/300 in dark mode.",
  ],
};

export function Wk04Section() {
  return <ProjectPage spec={spec} />;
}

export const wk04SectionSearchBody =
  "color palette Figma variables primitive semantic tokens neutral ramp accent ramp WCAG contrast dark mode light mode color system starter kit product design Week 4 section design for builders founders";
