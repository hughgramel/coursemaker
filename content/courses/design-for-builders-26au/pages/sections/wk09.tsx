import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 9 section: asset studio",
  tagline:
    "Collect every asset your product needs for launch from legal, free sources. Leave with a checked license log and production-ready files.",
  outDate: "Week 9",
  dueDate: "Week 9 (bring your asset log to section)",
  overview: [
    "Before you can ship your capstone launch package in Week 10, you need every raw asset in place: a favicon set, an OG image, App Store screenshots (or marketing mockups), a confirmed icon set, a confirmed typeface, and at least one photo or illustration. This section is a structured work sprint to build that asset inventory in one session.",
    "The rule for this section is simple: every asset must have a documented license before it goes into your production file. “I think it’s free” is not a license entry. You will keep a running log in a shared spreadsheet or Figma table and verify each asset before you use it.",
    "HW 4 (your brand sheet) is due this week. The assets you collect today should be consistent with the brand decisions you made in that assignment: the typeface from your brand sheet, the color ramp from Week 4, the wordmark from Week 8. This section is not a redesign session. It is a production session.",
  ],
  goals: [
    "Export a complete favicon set (16px ICO, 32px PNG, 180px Apple touch icon, 512px PNG) from your brand mark",
    "Produce a 1200×630px OG image that reads clearly in a link preview at full size and in a 240px thumbnail crop",
    "Produce at least two App Store screenshot frames (or web marketing mockups) with device frames and text overlays",
    "Confirm and document the license for every font, icon set, photo, and illustration in your production file",
    "Identify at least one asset that would require a paid license for the use case you have in mind",
  ],
  instructions: [
    {
      title: "Set up the asset log (before anything else)",
      body: "Create a table in Figma or a shared spreadsheet with five columns: Asset name, Source URL, License type, Commercial use permitted (yes/no), Attribution required (yes/no). You will fill one row per asset before adding that asset to any production frame. Do not use an asset whose row is incomplete. The log is a deliverable, not optional bookkeeping.",
    },
    {
      title: "Favicon set (15 min)",
      body: "Start from your brand mark (the single icon or letterform you designed in Week 8). Create four Figma frames: 16×16px, 32×32px, 180×180px (Apple touch icon), and 512×512px (PWA / app store icon). At 16px, the mark must be legible without detail: simplify it if needed. At 512px, it can carry texture and color. Export all four. The 180px version needs 20px of padding inside the safe zone (the platform adds a rounded corner mask on top). Add “design-for-builders-26au/assets/icons” as the font source in your log with license “your own original work”.",
    },
    {
      title: "OG image (20 min)",
      body: "Create a 1200×630px frame. Place your wordmark (top-left or centered), a one-sentence value proposition, and one supporting visual (a product screenshot, an illustration, or a simple geometric shape in your brand color). Keep all critical content inside an 80px margin on every side. The supporting visual should be on the right half of the frame or in the background so the text block sits clearly on one side. Export the frame at 1x (1200×630px exactly). Crop a copy to 240×240px and check that the product name is still readable. If it is not, simplify.",
    },
    {
      title: "App Store screenshots or marketing mockups (30 min)",
      body: "Build two screenshot frames at 1290×2796px (iPhone 6.7“, the required primary size for iOS App Store). If your product is web-only, use a 1440×900px desktop mockup instead. Each frame has three layers: a background fill in your brand color or a neutral, a device frame (use a Community Figma resource or a simple wireframe outline), and a text overlay with one feature message in large type. The text overlay should be readable at 320px thumbnail width. The feature message should complete the sentence “Now you can, ” in five words or fewer.",
    },
    {
      title: "Icon set confirmation (10 min)",
      body: "Confirm the icon set you will use in your product (Lucide, Phosphor, Iconify, or another source). Open its license page directly (not a summary) and fill in the log row. Note whether attribution is required, whether modification is permitted, and whether the license covers App Store distribution. If you plan to use multiple icon sets, each needs its own row.",
    },
    {
      title: "Photo and illustration sourcing (15 min)",
      body: "If your OG image or marketing screenshots use a photo or illustration from an external source (Unsplash, Pexels, Open Peeps, or similar), open the license page for that specific asset and fill in the log row. For Unsplash: go to unsplash.com/license, not the asset page description. For Open Peeps: go to openpeeps.com and read the CC0 notice. For Pexels: go to pexels.com/license. Log the exact license name and whether it is truly commercial-use-free without attribution.",
    },
    {
      title: "Peer license review (10 min)",
      body: "Exchange your asset log with a partner. Your partner checks: is every row complete? Is the license type specific (not just “free”)? Is the source URL the actual license page, not a landing page? Flag any row that seems incomplete or uncertain. The person whose log is being reviewed cannot argue during the review. Write down the flags and check them after.",
    },
  ],
  deliverables: [
    "Asset log with one completed row per asset: name, source URL, license type, commercial use (yes/no), attribution required (yes/no)",
    "Favicon set: four sizes exported as PNG (or ICO for 16px) and organized in a Figma frame",
    "OG image at 1200×630px, exported at 1x, with thumbnail crop check documented",
    "Two App Store screenshot frames (or marketing mockups for web products) with device frames and text overlays",
    "Written peer-review flags from your license log review (even if all rows pass)",
  ],
  rubric: [
    {
      dimension: "Asset log: complete and specific",
      points: 25,
      notes:
        "Every asset has a row. License type is the actual license name (e.g. “SIL OFL 1.1,” “ISC,” “Unsplash License,” “CC0”), not “free.” Source URL goes to the license page, not the asset page. Commercial use and attribution columns are filled.",
    },
    {
      dimension: "Favicon set: four sizes, legible at 16px",
      points: 20,
      notes:
        "All four sizes present and exported. The 16px version is legible as a distinct shape. The 180px version has safe-zone padding. The 512px version carries the full brand mark.",
    },
    {
      dimension: "OG image: reads clearly at full size and at 240px crop",
      points: 20,
      notes:
        "Product name and value proposition are visible within the safe zone. Background and text have sufficient contrast. Thumbnail crop check is present (a 240px copy in the Figma file or a note on the frame).",
    },
    {
      dimension: "Screenshots / mockups: device frame and text overlay in place",
      points: 20,
      notes:
        "Two frames at the correct dimensions. Each has a background, a device frame or mockup outline, and a text overlay with a feature message of five words or fewer. The message is readable at 320px thumbnail width.",
    },
    {
      dimension: "Peer review: flags noted and addressed",
      points: 15,
      notes:
        "Written flags from the partner review are present. The reviewed person either corrected the flagged rows or wrote a one-sentence explanation of why the row is correct as written.",
    },
  ],
  hints: [
    "The 16px favicon is the hardest. If your brand mark has a letterform with serifs or fine strokes, they will disappear at 16px. The fix is to use only the boldest, simplest version of the mark at that size: one letter, one shape, high contrast.",
    "Many “free for commercial use” photo sites have changed their terms. Always read the current license page for the site, not a blog post summarizing it. Licenses change. The page does not lie.",
    "The OG image safe zone matters because platforms crop unpredictably. LinkedIn pads the image differently than Slack, which crops differently than iMessage. If your logo is flush with the edge of the frame, it will be cut off somewhere.",
    "For App Store screenshots, the text overlay is the primary message. The device frame is supporting evidence that the app exists. If the text overlay is hard to read, the screenshot fails regardless of how good the app screens look inside the device frame.",
    "Lucide uses ISC. Phosphor uses MIT. Both are permissive. Neither requires user-visible attribution. But the license file must be present in your project (usually satisfied automatically when you install via npm). Confirm this before you ship.",
    "If you are not building a mobile app, the “App Store screenshot” deliverable maps to a marketing mockup for your web product. Use a 1440×900px browser frame from the Figma Community. The design constraints (text overlay + device frame + feature message) are identical.",
  ],
  late:
    "Asset logs submitted without license source URLs receive a 10-point deduction. Logs submitted more than 48 hours after section receive a 20-point deduction. The peer review flags cannot be completed after section.",
};

export function Wk09Section() {
  return <ProjectPage spec={spec} />;
}

export const wk09SectionSearchBody =
  "asset studio favicon OG image App Store screenshots marketing mockups license log SIL OFL ISC MIT CC0 Unsplash Pexels Open Peeps icon set font license photo illustration commercial use attribution legal sources HW4 brand sheet Week 9 section design for builders";
