import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 10 section: mutual critique of launch packages",
  tagline:
    "Review every classmate&rsquo;s launch package in structured pairs, using the full vocabulary of the course.",
  outDate: "Week 10",
  dueDate: "Week 10 (bring your complete launch package to section)",
  overview: [
    "This is the capstone section. You arrive with a complete launch package: brand sheet, landing page design, five app screens, App Store assets, and OG image. You present it to two peers in structured fifteen-minute reviews. They give specific, vocabulary-grounded feedback. You do the same for them.",
    "The goal of mutual critique is not approval. It is calibration. A peer who has done the same ten weeks of work you have will see things in your launch package that you cannot see yourself, precisely because they have internalized the same frameworks. They know what a type scale should feel like, what an 8-point grid violation looks like, what a weak CTA pattern smells like. Their feedback is signal, not noise.",
    "You leave section with two structured critique documents and a revised launch package that addresses at least two specific findings. The revision is not about chasing perfection. It is about practicing the skill of hearing a note and acting on it quickly, which is what the rest of your career will require.",
  ],
  goals: [
    "Present your complete launch package clearly in seven minutes, covering every deliverable",
    "Use course vocabulary to justify at least three design decisions when challenged",
    "Give two structured critiques that cite specific principles, not general impressions",
    "Identify the single weakest element in each classmate&rsquo;s package and name the exact fix",
    "Revise at least two elements in your own package based on peer feedback, and document what changed and why",
  ],
  instructions: [
    {
      title: "Arrive with your complete launch package (0 min)",
      body: "Your launch package must include all five deliverables before section starts. Missing deliverables cannot be completed during section.",
      steps: [
        "Brand sheet: logo lockup (wordmark plus mark), color palette, type system, voice summary, one-page format",
        "Landing page design: full-page Figma file including hero, social proof band, feature section, and CTA, on an 8-point grid",
        "Five app screens: sign-in, empty state, primary task, success state, and error state, sharing one component library",
        "App Store assets: six screenshots sized for the 6.5-inch iPhone display, readable at thumbnail size",
        "OG image: 1200 &times; 630px, includes product name and a one-line value proposition, derived from your brand sheet",
      ],
    },
    {
      title: "Round 1: present to your first peer (20 min)",
      body: "Pair with your first peer. The presenter has seven minutes to walk through the full launch package in Figma. Suggested order: brand sheet first (anchors the visual language), landing page second (shows the brand applied at scale), app screens third (shows the brand in a UI context), marketing assets last (shows how it all packages for distribution). The reviewer takes written notes and does not speak during the presentation. After the presentation, the reviewer has eight minutes to deliver structured feedback using the rubric below. Roles reverse for the second presenter.",
    },
    {
      title: "Structured feedback format (use for every critique)",
      body: "Each critique must address all four of these questions. Vague feedback (&ldquo;it feels off&rdquo;) does not count.",
      steps: [
        "Visual consistency: does the brand sheet govern the landing page and app screens, or do the three feel like they came from three different products? Name one specific inconsistency if you find one.",
        "Hierarchy and grid: pick one screen or page section and audit it against the 8-point grid and type scale. Name one specific alignment or spacing violation, or confirm it is clean.",
        "CTA and conversion: does the landing page&rsquo;s primary CTA stand out as the most visually dominant interactive element on the page? If not, name what is competing with it.",
        "Thumbnail test: look at the App Store screenshots at 25% zoom. Can you read the product name and the primary value proposition? If not, name the specific readability problem.",
      ],
    },
    {
      title: "Round 2: second peer (20 min)",
      body: "Find a new partner. Repeat the full presentation and structured feedback sequence. Your second reviewer has not seen your work before. Where feedback from both reviewers overlaps, that is your highest-confidence signal. Where they disagree, you have a judgment call to make.",
    },
    {
      title: "Revision period (15 min)",
      body: "Spend fifteen minutes in your Figma file making targeted revisions. You do not have to accept every note. You must change at least two things and write one sentence in a Figma text frame explaining each change and which critique prompted it. Documenting the reasoning is as important as making the change.",
    },
    {
      title: "Group debrief (5 min)",
      body: "Two volunteers share one revision they made and whether they think it improved the work. The group gives a quick yes or no vote. This is not about consensus; it is about training the group to make fast judgments and defend them.",
    },
  ],
  deliverables: [
    "Complete launch package with all five deliverables submitted before section",
    "Written structured critique for two peers, covering all four rubric questions for each",
    "Revised launch package with at least two documented changes and a one-sentence explanation of each",
  ],
  rubric: [
    {
      dimension: "Launch package: all five deliverables present and complete",
      points: 25,
      notes:
        "Brand sheet, landing page, five app screens, App Store assets, and OG image all present. Missing deliverables score zero for this dimension.",
    },
    {
      dimension: "Visual system coherence: brand, landing page, and app screens feel like one product",
      points: 20,
      notes:
        "Same type scale, same color tokens, same spacing discipline across all three surfaces. Inconsistencies that would be caught by the structured critique questions cost points.",
    },
    {
      dimension: "Critique quality: specific, vocabulary-grounded, actionable",
      points: 20,
      notes:
        "Each critique covers all four structured questions. Feedback cites a specific element and a specific principle. &ldquo;Looks good&rdquo; or &ldquo;feels off&rdquo; without a principle name scores zero.",
    },
    {
      dimension: "Presentation: covers all deliverables, uses course vocabulary to defend decisions",
      points: 20,
      notes:
        "Presenter names the design decisions behind at least three choices. Defends at least one choice when challenged. Does not say &ldquo;I just liked it.&rdquo;",
    },
    {
      dimension: "Revision quality: changes are documented and traceable to feedback",
      points: 15,
      notes:
        "At least two changes. Each has a one-sentence explanation naming the feedback that prompted it. Changes must be visible in the final Figma file.",
    },
  ],
  hints: [
    "The most common launch package failure is a brand sheet that was designed in isolation and never applied to the other deliverables. Before section, open your brand sheet and your landing page side by side. Are they using the same color tokens? The same type scale? If not, fix the landing page to match the brand sheet, not the other way around.",
    "Seven minutes is not much time. Practice your walkthrough once before section. Know in advance which three decisions you will defend if challenged. The most defensible decisions are the ones tied to a specific principle: &ldquo;I used the 8-point grid&rdquo; or &ldquo;I kept the type scale to five steps.&rdquo;",
    "The thumbnail test for App Store screenshots is ruthless. At 25% zoom on a standard monitor, your screenshot is about the size it will appear in a search result on a phone. If you cannot read it, no one can.",
    "When giving critique, the most useful sentence structure is: &ldquo;[Specific element] violates [specific principle] because [specific reason]. The fix is [specific change].&rdquo; Four parts, one sentence. Anything shorter is vague. Anything longer is an essay.",
    "If two reviewers independently flag the same problem, act on it. If they contradict each other, that is a judgment call. Write down both views before you decide, and make sure you can defend whichever path you choose.",
  ],
  late:
    "Launch packages submitted after the section start time receive a 15-point deduction. Packages submitted more than 48 hours after section receive a 30-point deduction. Peer critique notes cannot be completed retroactively.",
};

export function Wk10Section() {
  return <ProjectPage spec={spec} />;
}

export const wk10SectionSearchBody =
  "mutual critique launch package demo day brand sheet landing page app screens App Store assets OG image structured feedback visual consistency hierarchy grid CTA thumbnail test revision peer critique capstone CAPSTONE Week 10 section design for builders founders engineers";
