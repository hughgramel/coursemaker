import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 8 section: logo studio",
  tagline:
    "Ship three wordmark drafts for your product, then pick one with peer critique.",
  outDate: "Week 8",
  overview: [
    "Most logo processes go wrong in two ways: designers skip the thinking phase and go straight to the software, or they fall in love with their first idea and never pressure-test it. This section is a structured studio session designed to break both habits. You will produce three distinct wordmark drafts in 45 minutes, then put them through a rapid peer critique using two specific tests: silhouette readability and favicon legibility.",
    "The goal is not to finish a logo by the end of section. The goal is to learn how to generate options quickly, evaluate them against concrete criteria rather than personal preference, and make a defensible choice. The draft you select at the end of section becomes the starting point for your HW4 brand sheet.",
  ],
  goals: [
    "Produce three distinct wordmark drafts for your product in Figma using at least two different typeface approaches.",
    "Test each draft at 16x16px (favicon size) and 1200x630px (OG image size) to identify what survives at small scale.",
    "Apply the silhouette test to each draft: fill all layers solid black and evaluate whether the overall shape still communicates.",
    "Receive a structured peer critique on at least one draft using the vocabulary from lecture (wordmark, negative space, silhouette, lockup).",
    "Select one draft to carry forward into HW4, with a written rationale naming at least two criteria you used to decide.",
  ],
  instructions: [
    {
      title: "Before section: set up your Figma workspace (5 min)",
      body: "Create a new page in your existing course Figma file named “WK08 Logo Studio”. Set up four frames: one 1200x400px artboard labeled “Wordmarks”, one 64x64px frame labeled “Favicon test”, one 1200x630px frame labeled “OG test”, and one 800x400px frame labeled “Silhouette test”. You will use all four by the end of section.",
    },
    {
      title: "Draft three wordmarks (30 min)",
      body: "You have 30 minutes to produce three distinct wordmarks on the “Wordmarks” artboard. Constraints:",
      steps: [
        "Each wordmark must use only your product name, no tagline or descriptor.",
        "Draft A: choose a typeface from the Google Fonts Sans-Serif category. Adjust letter-spacing and convert to outlines if you want to modify letterforms.",
        "Draft B: choose a typeface from the Google Fonts Serif or Display category. This should feel different in voice from Draft A.",
        "Draft C: take either Draft A or B and add one modification to create visual interest: a ligature between two letters, a modified counter (the enclosed space in a letter like ‘O’ or ‘e’), a weight contrast between the first letter and the rest, or a simple geometric form attached to or replacing one letterform.",
        "Do not add color yet. Work in black on white for all three drafts.",
        "Do not spend more than 10 minutes on any single draft. The goal is variety, not perfection.",
      ],
    },
    {
      title: "Run the favicon test (5 min)",
      body: "Copy each wordmark into the “Favicon test” frame and scale it to fit within 16x16px. Do not resize the frame. Look at all three at that size without zooming in. Which one is still readable? Which one has collapsed into noise? Note your observations in a text frame next to each.",
    },
    {
      title: "Run the silhouette test (5 min)",
      body: "Copy each wordmark into the “Silhouette test” frame. Select all the layers of each wordmark and set every fill to solid black. Look at the resulting shapes. Does the overall silhouette of each wordmark have a distinct character? Chris Do (The Futur, 2022) calls this the most reliable test for whether a mark has visual identity independent of typeface rendering. Note which silhouette is most distinctive and why.",
    },
    {
      title: "Peer critique (15 min, pairs)",
      body: "Pair with the person next to you. Share your screen. Walk your partner through all three drafts in two minutes without asking for an opinion. Then your partner has three minutes to answer these specific questions:",
      steps: [
        "Which wordmark survives the favicon test best, and what specifically makes it survive?",
        "Does any draft have negative space that is doing intentional work, or is all the space accidental?",
        "Which draft has a voice most consistent with the product it names? Name the voice in one adjective.",
        "If you had to pick one to put on a T-shirt tomorrow, which one and why?",
        "Switch roles and repeat for your partner’s three drafts.",
      ],
    },
    {
      title: "Select and write a rationale (5 min)",
      body: "Choose one draft to carry into HW4. In a text frame on your Figma canvas, write 60-100 words explaining your choice. Your rationale must name at least two of the following criteria: favicon legibility, silhouette distinctiveness, voice match to the product, typeface character, negative space quality, or scalability from billboard to favicon. “I like it best” is not a valid rationale.",
    },
  ],
  deliverables: [
    "A Figma file with the four frames set up as specified, containing all three wordmark drafts.",
    "Favicon test: all three wordmarks scaled to 16x16px with written observations on legibility.",
    "Silhouette test: all three wordmarks filled solid black with a note on which silhouette is most distinctive.",
    "A 60-100 word written rationale for the draft you selected, naming at least two evaluation criteria.",
  ],
  rubric: [
    {
      dimension: "Three distinct drafts produced",
      points: 25,
      notes:
        "Drafts A, B, and C are genuinely distinct in typeface character or approach. Drafts that are minor color or size variations of each other do not qualify.",
    },
    {
      dimension: "Favicon and silhouette tests completed",
      points: 25,
      notes:
        "Both test frames are present and populated. Written observations go beyond “looks good” or “doesn’t work” to name what specifically passes or fails and why.",
    },
    {
      dimension: "Peer critique given and received",
      points: 20,
      notes:
        "Critique uses specific vocabulary from lecture: silhouette, negative space, voice, legibility. Does not say “I like it” without a named reason.",
    },
    {
      dimension: "Selection rationale is criteria-based",
      points: 20,
      notes:
        "Rationale names at least two evaluation criteria and explains how the chosen draft performs on them. Preference without evidence gets partial credit only.",
    },
    {
      dimension: "File organization",
      points: 10,
      notes:
        "Four frames present and labeled as specified. Drafts are on the correct artboard. Test frames are populated.",
    },
  ],
  hints: [
    "If your product name is longer than ten characters, test abbreviating it to the first three or four letters for the favicon and mark applications. A wordmark does not have to do all the work at every size.",
    "The silhouette test is not about making the logo look good in black. It is about discovering whether the shape of the letterforms creates a recognizable outline. A logo that depends on the specific rendering of the typeface for its identity is fragile.",
    "For Draft C, the “one modification” rule is strict. One change to one letterform or one relationship between two letterforms. Two modifications usually make the logo look effortful rather than considered.",
    "If you are stuck choosing a typeface, use this shortcut from Chris Do: write three adjectives that describe your brand voice, then search for those adjectives in the Google Fonts knowledge description field. Do not choose by browsing visually first.",
    "Your favicon will be displayed at 16x16px on a browser tab, often next to favicons from Google, Gmail, and Figma. Test yours next to those. If it disappears into the row visually, the shape is not distinct enough.",
  ],
  late:
    "Figma file and written rationale are due before the next class session. Late submission accepted within 48 hours with a 10-point deduction. Peer critique is in-session only and cannot be made up.",
};

export function Wk08Section() {
  return <ProjectPage spec={spec} />;
}

export const wk08SectionSearchBody =
  "logo studio wordmark drafts peer critique favicon test silhouette test OG image lockup brand identity negative space typeface voice rationale Figma Week 8 section design for builders founders engineers";
