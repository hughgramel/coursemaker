import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 2 section, Design critique",
  tagline: "Bring three real interfaces and decompose their visual hierarchy in front of the group.",
  outDate: "Week 2",
  overview: [
    "Reading about CRAP and Gestalt is necessary but not enough. You develop visual literacy by doing it out loud, in public, with immediate feedback. This section is a structured critique session: each person brings three screenshots, walks the group through the visual hierarchy of one of them, and receives specific corrections on what they named correctly and what they missed.",
    "You will leave section with a practiced ability to decompose any interface into its CRAP principles and Gestalt groupings, and with vocabulary to describe what you see rather than just reacting to it.",
  ],
  goals: [
    "Name every CRAP principle present in at least two of your three screenshots.",
    "Identify the Gestalt grouping mechanism (proximity, similarity, closure, or figure-ground) in at least one element per screenshot.",
    "Explain why your eye moves in the order it does through one screenshot, using visual hierarchy vocabulary.",
    "Receive a critique and revise one verbal description based on peer or instructor feedback.",
    "Give one specific critique of a classmate&rsquo;s interface that uses the vocabulary from lecture.",
  ],
  instructions: [
    {
      title: "Before section: choose your three screenshots (preparation)",
      body: "Bring three screenshots of real interfaces. Not mockups, not Dribbble shots: real products you use or have shipped. Rules for choosing:",
      steps: [
        "At least one should be a product you have personally shipped or are currently building.",
        "At least one should be a product you admire for its visual clarity.",
        "At least one should be a product you find visually confusing or cluttered.",
        "Each screenshot should be a single screen, not a scrolled composite. The whole screen must be visible.",
        "Have the screenshots on your laptop or phone, ready to share on screen.",
      ],
    },
    {
      title: "Annotate privately (10 min)",
      body: "Before any discussion, annotate all three screenshots on your own. For each screenshot, write brief notes answering these four questions:",
      steps: [
        "Where does my eye land first? Why? (Name the contrast signal: size, weight, color, or space.)",
        "What elements repeat? Do those repetitions create a readable system or do they just recur?",
        "Is there a clear alignment grid? What evidence supports your answer?",
        "Which elements are grouped by proximity? Does that grouping match the semantic meaning of the content?",
      ],
    },
    {
      title: "Volunteer critique (30 min, ~3 people)",
      body: "Three volunteers share one screenshot with the group and walk through their annotation out loud. The presenter speaks for two minutes without interruption. Then the group has three minutes to ask one clarifying question each. The instructor names one thing the presenter got right and one thing they missed or mislabeled. Volunteers should pick the screenshot they found hardest to describe, not easiest.",
    },
    {
      title: "Pair analysis (15 min)",
      body: "With a partner, swap one screenshot each. Annotate your partner&rsquo;s screenshot using the same four questions above, then compare annotations. Look for disagreements: places where you called something a proximity group and they called it a similarity group, or where you thought the hierarchy was intentional and they thought it was accidental. Disagreements are the most interesting data.",
    },
    {
      title: "Debrief (5 min)",
      body: "The group names one CRAP principle that appeared in almost every screenshot discussed, and one Gestalt mechanism that the group consistently mislabeled or missed. These become the vocabulary watch-items for the Week 2 assignment.",
    },
  ],
  deliverables: [
    "Three annotated screenshots with written answers to the four analysis questions.",
    "One revised annotation incorporating feedback from the pair or group critique.",
    "One written critique of a classmate&rsquo;s screenshot using CRAP and Gestalt vocabulary.",
  ],
  rubric: [
    { dimension: "Screenshots prepared and annotated before section", points: 20, notes: "All three questions answered for each screenshot. Partial credit if annotations are present but thin." },
    { dimension: "Critique uses correct vocabulary", points: 30, notes: "CRAP terms and Gestalt terms used accurately, not as decorative labels." },
    { dimension: "Eye movement explanation is causal", points: 20, notes: "Must name the specific signal (not just 'it felt right'). Must explain why that signal is stronger than alternatives." },
    { dimension: "Peer critique is specific and constructive", points: 20, notes: "Points to a specific element. Uses a principle name. Does not say 'I like it' or 'it looks off'." },
    { dimension: "Revision incorporates feedback", points: 10, notes: "The revised annotation changes at least one claim based on what the critique revealed." },
  ],
  hints: [
    "If you struggle to name the eye-entry point, cover the screen and reveal it slowly from the top-left corner. The first element that demands your attention is the entry point.",
    "Alignment is harder to see on complex screens. Temporarily ignore color and content: does the layout still hold? If spacing feels inconsistent, you are likely looking at an alignment problem.",
    "When you disagree with a classmate about which Gestalt principle is operating, you are often both right. Proximity and similarity can reinforce each other or work against each other on the same element.",
    "The &ldquo;confusing&rdquo; screenshot is usually the most instructive. Choose it for the volunteer critique if you can. The reason it is confusing is almost always a CRAP violation.",
    "Refactoring UI (Wathan &amp; Schoger, 2018) shows that most amateur UI problems come down to lack of hierarchy, not lack of talent. When a layout feels off, look for contrast or proximity violations before looking for anything else.",
  ],
};

export function Wk02Section() {
  return <ProjectPage spec={spec} />;
}

export const wk02SectionSearchBody =
  "design critique visual hierarchy CRAP principles contrast repetition alignment proximity Gestalt grouping figure-ground screenshots annotate decompose eye movement section worksheet Week 2 design for builders";
