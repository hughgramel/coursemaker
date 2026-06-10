import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Capstone, Launch package",
  tagline: "Every artifact you would need to actually ship your product: brand sheet, landing page, app screens, App Store screenshots, OG image, and a favicon set. Presented to the room on demo day.",
  outDate: "End of Week 7",
  dueDate: "Demo day, Week 10",
  overview: [
    "The capstone is a complete launch package for your own product. That means a brand sheet, a landing page design, five connected app screens, App Store screenshots that read at thumbnail, an OG image, and a favicon set. Every artifact is derived from the same design tokens. Everything lives in a single, publicly shareable Figma file that a developer could open and build from. It is presented live to the room on demo day at the end of Week 10.",
    "This is not a new assignment. It is all the previous assignments brought into one coherent package. The brand sheet started in HW4. The landing page started in HW3. The component decisions started in HW1. The capstone is where those threads are pulled tight: the same palette governs every screen, the same type scale carries both the marketing page and the app, and the same spacing grid sits underneath every frame. By the time you present on demo day, you are not showing a collection of weekly exercises. You are showing the thing a real launch would need.",
  ],
  goals: [
    "Produce a complete, cohesive visual identity for your product in a single Figma file a developer can read without your narration.",
    "Demonstrate that one brand system can govern a landing page, five app screens, and every marketing asset at the same time.",
    "Apply all five fundamentals from the course (reuse, hierarchy, grid, restraint, ship) to a product you would actually launch.",
    "Export design tokens as CSS custom properties that a developer can drop into a codebase and recognize immediately.",
    "Create App Store screenshots and an OG image that work at reduced size, not just at full resolution.",
    "Present your design decisions out loud, with vocabulary, in three minutes on demo day.",
  ],
  background: [
    "The five fundamentals have been running in the background since Week 1, and the capstone is where all five become visible at once. Reuse: a brand system is only a brand system if the same components appear across every artifact. The button on your landing page and the button inside your app should be the same Figma component. Hierarchy: every screen in your package has one primary message and one primary action. If the eye has nowhere to land, the hierarchy is broken, and that is as true for an OG image at 1200x630 as it is for a 375-wide app screen. Grid: every frame in the file sits on a spacing scale. App Store screenshots on a 9x19 canvas and landing page sections on a 12-column desktop grid share the same 8-point spacing unit. Restraint: a launch package built from one typeface and one palette looks like a brand. A launch package that experiments differently on each artifact looks like a student project. Ship: a frame in your file at the end of every week is what got you here. The capstone is the artifact, not the plan for one.",
    "The other thing the capstone introduces that the weekly assignments did not is the design-to-code handoff. A Figma file with no token export forces a developer to guess at your spacing values, copy hex codes by hand, and re-derive your type scale from the screen. A tokens.css file with named custom properties (--color-surface-base, --text-body-size, --space-4) eliminates that guesswork. The convention is semantic naming over value naming: --color-brand-primary is a useful token name because it tells the developer what the color does; --color-blue-500 is not, because it tells the developer what it is. This distinction matters the moment the palette changes.",
  ],
  instructions: [
    {
      title: "Lock the launch scope in writing (Week 7)",
      body: "Before opening Figma, write one page that fixes the boundaries of your launch package. Scope creep in a visual project is almost always scope creep that happened before the first frame was created. Locking scope in writing forces the decisions that the design will reflect.",
      steps: [
        "Brand promise: one sentence describing what your product does and who it is for. This is the sentence your OG image and hero headline must earn.",
        "Primary CTA: the single action you want a first-time visitor to take. This CTA appears on the landing page, on the first App Store screenshot, and as the primary action on at least one app screen.",
        "Three features: the three things your product does that the landing page will demonstrate. No more than three; the feature triplet section has exactly three slots.",
        "Target persona: one sentence describing the person you are designing for. Post this at the top of your Figma file. Every design decision is answerable against this sentence.",
      ],
    },
    {
      title: "Finalize the brand sheet (Week 8)",
      body: "Pull your HW4 brand sheet forward and finish it. The brand sheet is the contract the rest of the package must honor. Every color in every other artifact must trace back to the palette here. Every weight and size must trace back to the type scale here.",
      steps: [
        "Logo lockup: wordmark or mark-plus-wordmark, in primary, on white, and on the brand’s darkest background. All three must pass WCAG AA at the sizes they will actually appear.",
        "Color palette: primary, secondary, surface, and semantic colors (success, warning, destructive). Each swatch labeled with its token name, its OKLCH or HSL source value, and its hex for developer reference.",
        "Type scale: body, body-sm, label, heading-sm, heading-md, heading-lg, and display. Each entry shows the font family, weight, size in rem, line-height, and letter-spacing. One typeface, used everywhere.",
        "Voice sample: two to three sentences in your product’s voice. This is the copy standard the landing page headline must match.",
      ],
    },
    {
      title: "Finalize the landing page (Week 9)",
      body: "Pull your HW3 landing page forward, apply the finalized brand from HW4, and complete any sections that were stubs. The landing page must be desktop-width and include a mobile-width variant for the hero section at minimum.",
      steps: [
        "Hero: headline, subheadline, primary CTA, and a product visual. The headline must match the voice sample from the brand sheet. The product visual is a screenshot of one of your five app screens.",
        "Feature triplet: three features, three supporting visuals, consistent spacing. The visuals are cropped app screens or icon-plus-copy pairs on the brand grid.",
        "Social proof: one section with at least two testimonials or trust signals, even placeholder copy. The section exists so the layout is complete.",
        "Footer with CTA: a secondary CTA, your logo lockup, and at minimum a Privacy and Terms link. Required for any product that will actually launch.",
      ],
    },
    {
      title: "Design the five app screens (Week 9)",
      body: "Design five connected screens for your product at 390 wide (iPhone 16 canvas). Every screen uses the brand palette and type scale from the brand sheet. Every interactive element uses a component from your starter kit, updated to match the final brand.",
      steps: [
        "Home screen: primary navigation, the user’s most important at-a-glance information, and the path to the primary task. One primary action visible without scrolling.",
        "Primary task screen: the screen where the user does the thing your product exists to do. This is the most important screen in the package. Hierarchy must be correct here first.",
        "Success state: the screen or overlay the user sees after completing the primary task. This is where you can use color expressively because the message is unambiguous.",
        "Empty state: the home or primary task screen before the user has any data. Every field, list, and dashboard has an empty state. Designing it here means your product never shows a blank white rectangle.",
        "Settings screen: account information, preferences, and a sign-out action. The settings screen tests whether your component library actually covers the full range of what a real app ships.",
      ],
    },
    {
      title: "Produce App Store screenshots (Week 9)",
      body: "Design five App Store screenshots at 1290x2796 (iPhone 15 Pro Max, required by Apple). Each screenshot surfaces one feature or benefit with a headline and a cropped or composited app screen. The test for a successful screenshot is whether it reads at the thumbnail size Apple shows in search results, roughly 100px wide.",
      steps: [
        "Screenshot 1 must state the core value proposition in eight words or fewer. This is the screenshot a user sees first.",
        "Screenshots 2 through 5 each cover one feature. Write the headline first, then choose the app screen that supports it. Never choose the screen first.",
        "Use the brand background color as the screenshot background. Do not use gradients or textures that were not on the brand sheet.",
        "Export at 2x minimum. Add an artboard named “Screenshots at thumbnail” where all five are placed at 10% scale so you can see how they read in search.",
      ],
    },
    {
      title: "Produce the OG image and favicon set (Weeks 9-10)",
      body: "The OG image and favicon set are the two assets most builders skip and then regret. The OG image is the first thing a user sees when your link is shared on any platform. The favicon is the first thing a user sees in a tab. Both must work at small sizes and both must be recognizable as your brand.",
      steps: [
        "OG image: 1200x630, with logo, product name, and one-line value proposition. Must read as a thumbnail at 300x158. Export as PNG.",
        "Favicon at 32x32 and 16x16: use the mark alone, not the full wordmark. If your mark is not legible at 16px, simplify it until it is. Export as PNG; reference both in an ICO-compatible structure.",
        "Apple touch icon at 180x180: the mark with sufficient padding that it does not bleed to the rounded corners iOS adds. Export as PNG.",
        "Place all three favicon sizes in a dedicated Figma section next to each other so you can compare legibility at a glance.",
      ],
    },
    {
      title: "Export tokens as CSS custom properties (Week 10)",
      body: "Create a tokens.css file containing every named token from the brand sheet as a CSS custom property. The file is the spec document a developer hands to the implementation. Name every token semantically: what it does, not what it looks like.",
      steps: [
        "Color tokens: surface, text, border, and brand colors. Example: --color-surface-base, --color-text-primary, --color-brand-primary. Do not name tokens after their hex values.",
        "Typography tokens: font family, size for each scale step, line-height for body and heading. Example: --text-body-size, --text-heading-lg-size, --font-family-base.",
        "Spacing tokens: each step on your 8-point scale from 4px to 64px. Example: --space-1 (4px), --space-2 (8px), --space-4 (16px), --space-8 (32px).",
        "Radius and shadow tokens if your design uses them. One token per radius value in use. Zero tokens for values that appear only once.",
      ],
    },
    {
      title: "Prepare the three-minute demo (Week 10)",
      body: "The demo is not a Figma walkthrough. It is a product pitch backed by design decisions you can name. Structure it in three parts: the product (30 seconds), the design system (60 seconds), the artifacts (90 seconds). Practice until the transitions between parts take less than five seconds each.",
      steps: [
        "The product: one sentence naming the product, the person it is for, and the primary CTA. Then show the landing page hero. Stop.",
        "The design system: show the brand sheet. Name the typeface, name the primary color and its role, and point at one place in each of the five app screens where the same token appears.",
        "The artifacts: walk through the five app screens in order (home, primary task, success, empty state, settings). For each screen, name the one design decision you are most confident in and the one you are still not sure about.",
        "Close by showing the App Store screenshot thumbnail artboard and the OG image side by side. Ask the room if both read at small size. This is a question you actually want answered.",
      ],
    },
  ],
  deliverables: [
    "A single Figma file with a public share link. Every artifact (brand sheet, landing page at desktop and mobile-hero widths, five app screens, five App Store screenshots, OG image, favicon set at all three sizes, and a thumbnail-test artboard) must be present and organized into named sections.",
    "tokens.css: a CSS custom properties file exporting every token from the brand sheet. Submitted as a file attachment alongside the Figma link.",
    "A three-minute live demo on demo day, Week 10. You present from the Figma file. You do not need slides. You do need to have practiced at least once before the day.",
  ],
  rubric: [
    { dimension: "Brand sheet", points: 10, notes: "Logo in three states, full palette with token names, type scale with all seven steps, voice sample. Incomplete sections lose points proportionally." },
    { dimension: "Landing page", points: 15, notes: "Hero, feature triplet, social proof, footer CTA. Brand applied consistently from the brand sheet. Mobile hero variant present." },
    { dimension: "App screens (5)", points: 20, notes: "All five screens present (home, primary task, success, empty state, settings). Components reused from the starter kit. Hierarchy correct on every screen. Graded 4 points per screen." },
    { dimension: "App Store screenshots (5)", points: 10, notes: "All five present at correct canvas size. Each has a headline and a supporting visual. Thumbnail-test artboard present and legible." },
    { dimension: "OG image and favicon set", points: 5, notes: "OG image at 1200x630. Favicon at 32x32, 16x16, and 180x180. All three favicon sizes present in the file." },
    { dimension: "Tokens export", points: 10, notes: "tokens.css submitted. Color, type, and spacing tokens present. Semantic naming throughout. Zero tokens named after raw values (no --blue-500)." },
    { dimension: "Coherence across artifacts", points: 15, notes: "The brand sheet governs every artifact. Same palette, same type scale, same spacing grid everywhere. Artifacts that use values not present on the brand sheet lose points here." },
    { dimension: "Demo day presentation", points: 15, notes: "Three-minute limit respected. Product, design system, and artifacts addressed. At least one design decision named with vocabulary from the course on each of the five app screens." },
  ],
  hints: [
    "Build a master Figma page called “Navigation” at the front of the file with one annotated frame linking to each artifact section. The person grading your file should not have to hunt.",
    "Use Figma sections (not just frames) to group each artifact. Sections collapse in the layers panel, which makes a file with 30-plus frames navigable.",
    "Test the favicon in a real browser tab before demo day. Add it to a local HTML file with a link tag and open it. The thumbnail test in Figma is useful but not the same as 16 pixels in Chrome.",
    "Test the App Store screenshots by exporting at 10% and viewing the exported PNG at 100% zoom. If you need to zoom in to read the headline, the headline is too small or too light.",
    "The empty state is not a blank screen with a gray rectangle. It is a screen that answers the question “what do I do next?” with a clear visual and a primary action.",
    "Record yourself doing the three-minute demo once before demo day. Play it back. You will notice at least two places where you said “and then” three times in a row, which means you are narrating rather than presenting. Cut those passages.",
    "Name tokens before you build screens, not after. Tokens named after the fact are almost always named after their visual value (--blue-dark) rather than their role (--color-text-on-brand). The file is harder to hand off as a result.",
    "The same component that appears on the landing page must be the same Figma component that appears in the app. If you have two versions of the same button, you have two brand systems fighting each other. Pick one and detach the other.",
    "Restraint applies to the token file too. Every token in tokens.css should appear in at least two places in the Figma file. A token that appears once is a hard-coded value with extra steps.",
  ],
  late: "Demo day is fixed. If you are not present and have not arranged in advance to present remotely, the Demo day presentation dimension scores zero. The Figma file and tokens.css may be submitted up to 48 hours after demo day with a 15-point late penalty.",
};

export function HwCapstone() { return <ProjectPage spec={spec} />; }
export const hwCapstoneSearchBody = "Capstone launch package brand sheet landing page app screens App Store screenshots OG image favicon set tokens CSS custom properties demo day Figma reuse hierarchy grid restraint ship design-to-code handoff";
