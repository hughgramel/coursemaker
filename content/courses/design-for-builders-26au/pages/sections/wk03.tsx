import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 3 section: typography audit",
  tagline:
    "Fix the one design problem that costs more credibility than any other: bad type.",
  outDate: "Week 3",
  dueDate: "Week 3 (bring screenshots to section)",
  overview: [
    "Most product builders ship with default browser fonts or the first sans-serif they found on Google Fonts. The type usually works, in the sense that the words are legible. But legible and good are not the same thing. This section runs a structured audit of the typography on your own landing page or product UI, using the vocabulary from this week: scale, line-height, measure, and typeface voice. You will identify the top three problems, propose fixes, and implement at least one before section.",
    "The point is not to redesign your product. It is to learn to see type the way a designer does: as a system with specific, measurable properties. Once you can see the problems, fixing them takes minutes in CSS or Figma.",
    "HW2 (type-only redesign) is assigned this week. The work you do in this audit is direct preparation for that assignment.",
  ],
  goals: [
    "Apply the type scale concept to an existing product and identify where sizes are arbitrary vs. systematic",
    "Measure actual line-height and measure (ch) on body text and compare to the comfortable ranges from the reading",
    "Name the typefaces in use and classify them by voice: does the classification match the brand?",
    "Propose at least one concrete fix using the terms from the reading: scale ratio, line-height ratio, measure, or typeface substitution",
    "Practice critiquing type out loud, which is the skill HW2 is building toward",
  ],
  instructions: [
    {
      title: "Pick one page to audit",
      body: "Choose your own landing page, product dashboard, or any product page you have edit access to. If you do not have a product yet, audit a competitor or a product you use every day. You need a URL and the ability to open browser DevTools on it.",
    },
    {
      title: "Identify the typefaces",
      body: "Open DevTools and inspect the body text. Note the font-family stack. Then inspect a headline. Are the same or different typefaces used? For each typeface, write: name, classification (serif, sans-serif, display), and one word describing its voice (formal, friendly, technical, neutral, etc.).",
    },
    {
      title: "Measure the type scale",
      body: "Inspect at least five text elements: the main headline, a subhead, a card title, body copy, and a label or caption. Record the font-size in pixels for each. Then ask: do these sizes follow a recognizable ratio (1.25, 1.333, 1.5, 2)? Or are they arbitrary? If you cannot see a pattern, the scale is probably arbitrary.",
      steps: [
        "Main headline: record font-size in px",
        "Subhead: record font-size in px",
        "Card title or section heading: record font-size in px",
        "Body paragraph text: record font-size in px",
        "Label, caption, or helper text: record font-size in px",
        "Check each step ratio: does size[n+1] / size[n] approximate a consistent multiplier?",
      ],
    },
    {
      title: "Measure line-height and measure",
      body: "Inspect the body text element. Record: font-size, line-height (in px or as a ratio), and the rendered column width. To find the column width in characters, paste a paragraph into a character counter and divide by line count, or use the CSS ch unit as a guide. Compare your measurements to Butterick&rsquo;s recommended line-height range (120-145% of point size) and the 45-75ch measure rule.",
    },
    {
      title: "Identify the top three problems",
      body: "Based on your measurements, name the top three typography problems on this page. Use the vocabulary from the reading. Examples: &ldquo;No consistent scale: font sizes are 14, 18, 22, 28, 36 with no detectable ratio.&rdquo; Or: &ldquo;Line-height is 1.2 on body text at 16px, which is below Butterick&rsquo;s 120% minimum.&rdquo; Or: &ldquo;Measure is approximately 95ch, nearly 30% wider than the 75ch maximum.&rdquo;",
    },
    {
      title: "Propose and implement one fix",
      body: "Pick the highest-impact problem and implement a fix before section. If you are working in code, change the CSS. If you are working in Figma, update the text style. Take a before-and-after screenshot. Write two sentences explaining the change: what you changed and why it improves readability.",
    },
    {
      title: "Prepare to present",
      body: "Bring to section: the URL or Figma file, your measurement notes, the list of three problems, and the before-and-after screenshots with written explanation. You will have three minutes to walk the group through your findings.",
    },
  ],
  deliverables: [
    "URL or Figma file of the audited page",
    "Typeface identification: name, classification, and voice for each typeface in use",
    "Type scale measurements: five size values and the computed ratios between them",
    "Line-height and measure measurements for body text, compared to the recommended ranges",
    "Three specific typography problems named using reading vocabulary",
    "Before-and-after screenshots for at least one implemented fix, with a two-sentence explanation",
  ],
  rubric: [
    {
      dimension: "Measurements: accurate and complete",
      points: 30,
      notes: "All five scale values recorded; line-height and measure measured. Partial credit if DevTools access was unavailable and estimates were justified.",
    },
    {
      dimension: "Problem identification: specific and vocabulary-grounded",
      points: 35,
      notes: "Three problems named using reading terms (scale, line-height, measure, voice). Generic statements like &ldquo;the font looks bad&rdquo; earn no credit.",
    },
    {
      dimension: "Implemented fix: before-and-after present, explanation clear",
      points: 25,
      notes: "Screenshots show a real change. Two-sentence explanation references the specific problem and the fix applied.",
    },
    {
      dimension: "Presentation: concise, covers findings in three minutes",
      points: 10,
      notes: "Arrives with materials prepared. Does not read from notes.",
    },
  ],
  hints: [
    "The fastest way to find font-size and line-height: open DevTools, click the element, open the Computed panel, and search for &ldquo;font-size&rdquo; and &ldquo;line-height&rdquo;. They appear as pixel values even if the source CSS uses rem or em.",
    "To estimate measure without counting characters manually: find a 300px wide column in your page. A 16px body font in a typical sans-serif fits roughly 60 characters per line at that width. The exact ch value depends on the specific typeface.",
    "If the existing type scale looks arbitrary, try fitting it to the nearest modular scale ratio. The free tool at typescale.com lets you enter sizes and compare them to standard ratios. Naming the nearest scale, even if the original was not intentional, still counts as analysis.",
    "The most common body text problem in builder products: line-height is the browser default (1.2), and the column is too wide. Both of these are one CSS line to fix. High impact, low effort.",
    "For the typeface voice question: ask yourself what kind of person or institution the typeface sounds like. A humanist sans (like Inter or Lato) sounds like a knowledgeable colleague. A geometric sans (like Futura or Nunito) sounds like a friendly, modern brand. A transitional serif (like Georgia) sounds like a newspaper or textbook. None of these is wrong: they just carry different signals.",
  ],
  late: "Section worksheets submitted within 48 hours of section receive full credit. After that, deduct 10 points per day. The before-and-after screenshot must be completed before submission.",
};

export function Wk03Section() {
  return <ProjectPage spec={spec} />;
}

export const wk03SectionSearchBody =
  "typography audit section type scale line-height measure ch typeface classification voice serif sans-serif DevTools font-size body text column width before after fix landing page product Week 3 worksheet design for builders";
