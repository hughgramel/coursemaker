import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW4, Brand sheet for your product",
  tagline: "One Figma frame. Every contractor you hire reads it first.",
  outDate: "End of Week 8",
  dueDate: "End of Week 9",
  overview: [
    "Every decision you have made in weeks 1 through 8 leaves a residue: your component naming conventions, your type scale, your color tokens, your landing page copy tone. This assignment collects that residue into a single artifact. A brand sheet is a one-page Figma document (A3 or 1600&times;2400&thinsp;px) that answers the four questions any new collaborator asks the moment they sit down to work on your product: what does the name look like, what colors and type govern the product, and how does the product speak to people?",
    "The deliverable is not a mood board and it is not a style guide. It is a working reference. A freelance engineer integrating a third-party widget should be able to open this frame and know which hex value to use for a primary button. A copywriter writing an onboarding email should be able to read the voice samples and match the register without asking you a question. If the sheet cannot do that, it is not done.",
  ],
  goals: [
    "Distill your product&rsquo;s identity into a wordmark that is legible at 32&thinsp;px and readable at billboard scale.",
    "Define a minimum set of lockups a collaborator would need to place your brand in different contexts.",
    "Carry your color tokens and type system from prior assignments forward into a single authoritative reference.",
    "Write voice-and-tone examples grounded in the actual language of your product, not abstract descriptors.",
    "Produce a sheet that a contractor could pick up and use without a briefing call.",
  ],
  background: [
    "A wordmark is a logotype: the product name set in a specific typeface, weight, and color, treated as a graphic. A mark (or logomark) is a symbol alone, with no text. A combination mark (or combo mark) pairs the two. Most early-stage products do not need a standalone mark, because they do not yet have the brand recognition for a mark to carry meaning on its own. For HW4, a wordmark or combo mark is sufficient. Do not design a mark-only identity unless you have a very specific reason.",
    "A lockup is a sanctioned arrangement of brand elements. The two lockups you will define here are the horizontal lockup (wordmark or mark + wordmark side by side, used in navbars and email headers) and the icon-only lockup (the wordmark reduced to a single character or the mark alone, used at favicon scale). These two cover the vast majority of placement scenarios a small product encounters.",
    "Favicon (16&times;16 or 32&times;32&thinsp;px), OG image (1200&times;630&thinsp;px), and billboard (roughly 3000&times;1000&thinsp;px or larger) are three radically different rendering environments. A wordmark that reads clearly as body text will likely fail at favicon scale: the letterforms collapse. Testing at these three sizes before committing to a direction is not optional.",
    "Voice and tone are separate concerns. Voice is the consistent character of how your product speaks: direct, warm, technical, irreverent. Tone shifts the delivery of that voice depending on context: a confirmation message and an error message share the same voice but use different tones. A useful exercise is to write the same message in your product voice and then rewrite it in a corporate, neutral register. The gap between the two versions is where your voice lives. For this assignment, you will write three snippets covering three distinct tonal registers: a headline, a body paragraph, and an error or empty state.",
  ],
  instructions: [
    {
      title: "Draft 3&ndash;5 wordmark options",
      body: "Set your product name in at least three different typefaces at the same size, weight, and color. Do not customize letterforms yet. The goal is to find the right typographic personality before you refine anything. For each candidate, note the typeface name, the weight, and one sentence explaining what the choice communicates about the product.",
      steps: [
        "Use Fontshare or Google Fonts. No paid typefaces for this assignment.",
        "Try at least one serif, one geometric sans, and one grotesque sans. Mixing categories forces you to make a real choice rather than defaulting to the first result.",
        "Export each candidate at three sizes: 32&thinsp;px, 200&thinsp;px, and 1200&thinsp;px wide. Pin them to a comparison canvas in your Figma file.",
      ],
    },
    {
      title: "Run a peer critique and pick one direction",
      body: "Share the comparison canvas with at least two peers before Week 9. Collect one specific observation from each person: not &ldquo;I like this one&rdquo; but &ldquo;the geometric sans reads as more technical because the counters are open.&rdquo; Use the feedback to eliminate options and commit to one wordmark direction.",
      steps: [
        "Document the critique in a sticky note or annotation layer inside the Figma file. Graders will read it.",
        "State which option you chose and why you eliminated the others. One sentence per eliminated option is enough.",
      ],
    },
    {
      title: "Test the wordmark at favicon size and billboard size",
      body: "Export the chosen wordmark at 32&times;32&thinsp;px and examine it at 100% zoom. If individual letters are indistinct, you need either a simplified version (usually the first letter or a custom mark) or a heavier weight. Then export at 1200&thinsp;px wide and check stroke contrast, spacing, and optical weight.",
      steps: [
        "If the full wordmark fails at 32&thinsp;px, design a favicon-specific version: a single character, a monogram, or a minimal mark. This becomes your icon-only lockup.",
        "If the wordmark fails at billboard scale (letters look too light, spacing feels loose), note the adjustments you would make and whether those adjustments break the small-scale version.",
      ],
    },
    {
      title: "Define two lockups",
      body: "A lockup is a constrained, reusable composition. Produce a horizontal lockup (mark or first-character symbol + wordmark, side by side) and an icon-only lockup (mark or initial, square crop, suitable for app icons and favicons). Both lockups should exist as named Figma components.",
      steps: [
        "Horizontal lockup: set a fixed ratio between symbol height and wordmark cap-height. 1:1 and 0.8:1 are both common starting points.",
        "Icon-only lockup: produce on a white background and on a dark background. Confirm legibility on both.",
        "Add a clear-space rule to each lockup: a minimum margin expressed as a multiple of the mark height.",
      ],
    },
    {
      title: "Add the brand palette",
      body: "Pull your color tokens from HW1 and HW3. Name them semantically. The minimum required set for this sheet is: one primary action color, one primary surface color, one body text color, one subdued text color, and one semantic error color. If you have secondary brand colors, include them.",
      steps: [
        "Show each color as a filled swatch (at least 80&times;80&thinsp;px), its hex value, and its semantic name (primary, surface, text, text-subdued, error). Do not use descriptive names like &ldquo;bright blue.&rdquo;",
        "Show the primary color on both a light and a dark background to confirm contrast. Note the WCAG AA pass or fail next to each pairing.",
      ],
    },
    {
      title: "Add the type system",
      body: "Document the two tiers of your type system: display (used for headings, heroes, and large callouts) and body (used for paragraphs, labels, and UI copy). For each tier, state the typeface, weight, size (in rem or px), and line-height.",
      steps: [
        "Show a display example at the size it appears in your product: a short heading like the product tagline.",
        "Show a body example at the size it appears in UI: a 3&ndash;4 sentence paragraph.",
        "If display and body use the same typeface, note the weight and size difference that separates them.",
      ],
    },
    {
      title: "Write three voice-and-tone snippets",
      body: "Each snippet is a short piece of real product copy written in your product&rsquo;s voice. The three required registers are: (1) a marketing headline (the kind that appears on a landing page hero), (2) a body paragraph (the kind that appears in an onboarding modal or a feature explanation), and (3) an error or empty-state message (the kind a user sees when something goes wrong or when a list is empty).",
      steps: [
        "Each snippet must be copy you would actually ship. No lorem ipsum, no placeholder text.",
        "Under each snippet, write one sentence explaining what the voice choice communicates: why this word and not a different one, why this length and not longer.",
        "If the error or empty-state message uses a different tone than the headline, note that shift explicitly. Tone variation is intentional, not inconsistency.",
      ],
    },
    {
      title: "Add three do/don&rsquo;t pairs for logo usage",
      body: "A do/don&rsquo;t pair shows a correct usage and a specific incorrect usage side by side, with a one-line rule. Common violations: placing the wordmark on a low-contrast background, stretching or distorting the lockup, setting the wordmark in a different typeface, using the full wordmark where only the icon-only lockup fits.",
      steps: [
        "Each pair must show the actual wordmark in the incorrect state, not an abstract illustration. If the rule is &ldquo;do not place on a background below 4.5:1 contrast,&rdquo; show the wordmark on exactly that background.",
        "Label the do side in green and the don&rsquo;t side in red. Use the semantic color tokens you defined in step 5.",
      ],
    },
  ],
  deliverables: [
    "Figma share link to the brand sheet (view access, anyone with the link). The frame must be A3 (297&times;420&thinsp;mm) or 1600&times;2400&thinsp;px.",
    "250-word writeup defending your wordmark direction: why this typeface, why this weight, what you learned from the peer critique, and how the favicon version relates to the full wordmark.",
  ],
  rubric: [
    { dimension: "Wordmark works at favicon and billboard", points: 20, notes: "Both sizes tested and documented. If the full wordmark fails at favicon scale, a justified icon-only version is present." },
    { dimension: "Lockups present and named as components", points: 15, notes: "Horizontal and icon-only lockups exist as named Figma components with clear-space rules." },
    { dimension: "Color and type pulled from prior tokens", points: 20, notes: "Palette uses semantic names. Type system documents typeface, weight, size, and line-height for display and body tiers." },
    { dimension: "Voice samples are in real product voice", points: 15, notes: "All three snippets are shippable copy. Each has a one-sentence voice note. No lorem ipsum." },
    { dimension: "Do/don&rsquo;t pairs show the actual violation", points: 10, notes: "Each pair renders the wordmark in the incorrect state. Abstract labels without a rendered example score 0." },
    { dimension: "Sheet is presentable to a contractor", points: 10, notes: "A grader should be able to read the sheet without a briefing. Unlabeled swatches, unnamed components, or missing values reduce this score." },
    { dimension: "Writeup defends wordmark choices", points: 10, notes: "250 words minimum. Must reference the peer critique and explain the favicon resolution." },
  ],
  hints: [
    "A competition canvas is worth making before you open your own file: collect the wordmarks of five products you admire (or compete with) and pin them side by side. Notice which ones you can read at a glance at 40&thinsp;px. Notice which ones feel distinct from each other. Your wordmark needs to be legible in that company.",
    "Test every wordmark candidate in greyscale before you test it in color. If it does not read clearly in greyscale, the color is doing work the form should be doing. Color is the last thing to lock, not the first.",
    "Fontshare (fontshare.com) and Google Fonts are the only permitted type sources for this assignment. Both have strong options. On Fontshare: Satoshi, Clash Display, General Sans, and Cabinet Grotesk. On Google Fonts: Inter, DM Sans, Syne, and Outfit. Do not default to Inter because it is familiar; choose it only if it fits.",
    "Semantic color naming matters more than it seems. &ldquo;Primary&rdquo; tells a developer which token to use for a call-to-action button. &ldquo;Blue-500&rdquo; does not. When you name a token, ask: what is its job in the UI, not what does it look like.",
    "WCAG AA contrast for body text is 4.5:1. For large text (18&thinsp;pt or 14&thinsp;pt bold) it is 3:1. The Figma plugin Contrast (by Able) will check this in one click. Run it on every text-on-background pairing on your sheet.",
    "The writeup is graded for specificity, not length. &ldquo;I chose Satoshi because its geometric construction felt modern&rdquo; is a weak defense. &ldquo;I chose Satoshi because its open apertures held up at 32&thinsp;px where DM Sans condensed to illegibility, and the peer critique confirmed that both reviewers read it as technical without being cold&rdquo; is a defense.",
  ],
  late: "Late submissions lose 10% per day, up to three days.",
};

export function Hw4() { return <ProjectPage spec={spec} />; }
export const hw4SearchBody = "HW4 brand sheet wordmark lockup favicon OG image billboard color tokens type system voice tone do dont logo usage Figma brand identity";
