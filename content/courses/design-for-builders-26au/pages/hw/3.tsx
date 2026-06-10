import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW3, Design a full landing page for your product in Figma",
  tagline: "Apply your type scale, color palette, and 8pt grid to a complete page: hero through footer, desktop and mobile.",
  outDate: "Week 6",
  dueDate: "Week 7",
  overview: [
    "A landing page is the first thing a stranger sees. It has to earn attention before it can explain anything. This assignment asks you to design a complete landing page for your own product &mdash; not a generic exercise, not a redesign of something that already exists, but a real page for the thing you are actually building. You will work from hero to footer, using the starter kit, type scale, color palette, and 8pt grid you assembled in earlier weeks.",
    "The constraint is intentional. Everything on the page must come from the system you have already built. If your type scale has no display size large enough for the hero headline, you will feel that gap now, while it is cheap to fix. If your palette has no color that reads as a call-to-action button, you will find out before you hand the page to a developer. Landing pages expose the limits of a design system faster than any other format, which is why this assignment comes at the end of the first half of the course.",
  ],
  goals: [
    "Design a complete landing page layout from hero to footer at full fidelity in Figma.",
    "Apply your type scale, color palette, and 8pt grid consistently across every section.",
    "Write and position a hero headline and subhead that communicate your product&rsquo;s value in five seconds or less.",
    "Demonstrate understanding of social proof, feature presentation, and FAQ as structural page elements.",
    "Produce a responsive mobile variant and articulate the layout decisions that changed between breakpoints.",
  ],
  background: [
    "A landing page has a known anatomy. Hero section at the top, social-proof band immediately below, feature explanation in the middle, FAQ to remove objections near the bottom, footer with a secondary call-to-action. This order is not arbitrary. It mirrors the mental sequence of a first-time visitor: &ldquo;What is this? Who else uses it? What does it actually do? What are the catches? How do I start?&rdquo; Every section answers one question in that sequence. Reordering the sections means reordering the conversation, which usually breaks trust rather than building it.",
    "The hero is the section that determines whether a visitor reads anything else. It has four elements: a headline that names the outcome, a subhead that names who it is for and how it works, a primary call-to-action, and a visual (screenshot, illustration, or diagram) that makes the product concrete. The headline and subhead do not need to be clever; they need to be clear. &ldquo;The fastest way to schedule client calls&rdquo; outperforms &ldquo;Reclaim your calendar&rdquo; for most products because it names a specific outcome for a specific person. The visual exists to answer the question &ldquo;but what does it look like?&rdquo; before the visitor has to click anything.",
    "A feature triplet is three cards or columns, each describing one distinct capability. Parallel structure is mandatory: the same grammatical form, the same number of lines, the same visual weight. Triplets work because three items feel complete without feeling overwhelming. They also respect the grid: three equal columns at desktop width map cleanly onto a 12-column system with four columns each. At mobile width, they stack to a single column without rewriting.",
    "Social proof belongs above the fold or just below the hero, not at the bottom. Visitors discount proof that appears only after they have already decided to look around. Two common forms are a logo band (five to eight company logos, grayscale, roughly equal size) and a quote block (a single sentence with attribution). If you have no real social proof yet, use clearly labeled placeholders. Do not fabricate logos or names; mark them as &ldquo;Placeholder&rdquo; in the design.",
    "The bottom-of-page CTA repeats the primary action for visitors who scrolled the whole page but did not convert at the hero. It should be short: a headline reframing the offer, one sentence of reinforcement, and the same button as the hero. It is the last thing the visitor sees before the footer.",
  ],
  instructions: [
    {
      title: "Write copy first",
      body: "Before opening Figma, write the page copy in a plain text document. You need: a hero headline (ten words or fewer), a hero subhead (one to two sentences), button text for the primary CTA, three feature names with one-sentence descriptions each, two to three FAQ questions with answers, and a bottom-of-page CTA headline. Writing copy in text first forces you to commit to the message before you start making layout decisions. If you cannot write the headline in a text file, you cannot design it in Figma.",
    },
    {
      title: "Sketch three hero layouts before opening Figma",
      body: "On paper or in a basic drawing tool, sketch three different arrangements for the hero section: text left with visual right, text centered with visual below, and one layout of your choice. For each sketch, mark where the headline, subhead, CTA button, and visual sit. Choose one layout to build. Write one sentence explaining why you chose it.",
    },
    {
      title: "Build the hero in Figma using your type scale and palette",
      body: "Create a desktop frame at 1440px wide. Place your headline using the largest display size in your type scale. Place your subhead using the secondary body size. Use your primary action color for the CTA button. Use your 8pt grid: no element should be placed at a y-position that is not a multiple of 8. Add a placeholder visual (a filled rectangle labeled &ldquo;Product screenshot&rdquo; is acceptable) if you do not have a real one.",
    },
    {
      title: "Add a social-proof band",
      body: "Below the hero, add a band containing either five to eight company logos or one quote with attribution. If you have real logos or quotes, use them. If you do not, place rectangles labeled &ldquo;Logo placeholder&rdquo; or a text block labeled &ldquo;[Customer quote placeholder]&rdquo;. Using placeholders is acceptable; unlabeled invented content is not. Keep all logos or quote elements at the same visual weight and align them to the same baseline.",
    },
    {
      title: "Add three feature cards",
      body: "Design a features section with exactly three cards or columns. Each card must have an icon or illustration, a feature name, and a one-sentence description. Use parallel structure: the same grammatical form for each feature name, the same number of lines for each description, the same internal spacing within each card. Align all three cards to the 8pt grid. No card should be taller than another.",
    },
    {
      title: "Add an FAQ section",
      body: "Design an FAQ section with two to four questions. Each question should be a separate accordion row or a question-answer pair. Style the question text distinctly from the answer text using your type scale (for example, use your heading-sm size for questions and body size for answers). The FAQ section does not need to be interactive in Figma; a static expanded state is sufficient.",
    },
    {
      title: "Add a footer with a secondary CTA",
      body: "Design a footer containing: a bottom-of-page CTA (short headline plus the same primary button from the hero), your product name or logo, and two to four navigation links. The footer background may use a contrasting color from your palette if it helps close the page visually. Keep the CTA left-aligned or centered; do not bury it in the link columns.",
    },
    {
      title: "Design a mobile variant",
      body: "Duplicate your desktop frames and create a second set at 390px wide. Adjust the layout for mobile: the hero stacks to a single column (text above, visual below), the feature cards stack vertically, the social-proof logos wrap or scroll, and the FAQ rows remain full-width. Check that no text is smaller than 16px at mobile. Type scale step names do not need to change, but the pixel values may need to be one step smaller than on desktop.",
    },
  ],
  deliverables: [
    "Figma share link with view access, containing both the desktop frames and the mobile frames. All frames should be named clearly (for example: &ldquo;Desktop &ndash; Hero&rdquo;, &ldquo;Mobile &ndash; Full Page&rdquo;).",
    "A 300-word written response explaining: why you chose the hero layout you sketched, how you used color to guide attention (CTA, section breaks, footer), how your type hierarchy communicates importance, and what one element you would test first with a real user.",
  ],
  rubric: [
    { dimension: "Hero reads in 5 seconds", points: 20, notes: "Headline is ten words or fewer; outcome is clear without scrolling; CTA is visible on load." },
    { dimension: "Social proof present and placed well", points: 10, notes: "Band appears within the first two sections. Placeholders are acceptable if labeled." },
    { dimension: "Feature triplet uses parallel structure", points: 15, notes: "Identical grammatical form, equal card height, consistent internal spacing. Any broken parallel: -5 per instance." },
    { dimension: "Type scale and palette held consistently", points: 15, notes: "Every text element maps to a named scale step. Every color maps to the defined palette. One-off values: -3 each." },
    { dimension: "Spacing on 8pt grid", points: 10, notes: "All padding and gap values are multiples of 8. Spot-check: five random spacing measurements. Each non-multiple: -2." },
    { dimension: "Mobile variant works", points: 15, notes: "Single-column layout, no horizontal overflow, no text below 16px. Missing mobile frames: 0." },
    { dimension: "Writeup defends choices", points: 15, notes: "All four topics addressed (hero layout, color, type hierarchy, test target). Vague responses without specific reasoning score half." },
  ],
  hints: [
    "Write the headline last, not first. Draft it after you know the subhead, the features, and the CTA. The headline summarizes the page; it is easier to summarize once the page exists.",
    "If your color palette has no obvious action color, pick the most saturated hue in the palette and use it only for buttons and links. Reserve it. The rule is: if everything is emphasized, nothing is.",
    "The 8pt grid applies to spacing between elements, not to font sizes. Your type scale steps are already set. The grid governs padding, margin, gap, and component height.",
    "Social proof logo bands look broken when logos vary wildly in height. Constrain all logos to the same bounding-box height (40px or 48px works well) and let width vary. This keeps the band visually level without making logos look distorted.",
    "For the mobile variant, start by turning off the grid and asking what the most important single element is on each section. That element goes first. Stack everything else below it. This is faster than trying to reflow the desktop layout mechanically.",
    "The FAQ section earns its place by removing the last objection before the bottom CTA. Write the questions as a skeptical visitor would ask them, not as a founder would phrase a product benefit.",
    "Design the CTA button state (default, hover, and focus) at least in a component, even if you only use default in the mockup. It forces you to check that the action color works at both full opacity and a lighter tint.",
  ],
  late: "Late submissions lose 10% per day, up to three days. HW4 builds on this page; if you are behind, submit a partial design rather than nothing.",
};

export function Hw3() { return <ProjectPage spec={spec} />; }
export const hw3SearchBody = "HW3 landing page Figma hero social proof feature triplet FAQ footer 8pt grid type scale color palette mobile responsive layout design system";
