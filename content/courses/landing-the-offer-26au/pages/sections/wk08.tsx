import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 8 section, Triage and ship",
  tagline:
    "Pick ONE unconventional move and ship it before section. Bring the artifact, PR draft, or sent email to peer review.",
  outDate: "Week 8",
  overview: [
    "This week you pick one move from three options, execute it before section, and bring the result to peer review. The three options are: (A) draft and open a pull request on a real open-source project, (B) research a specific problem at a target company and send three cold emails offering to solve it, or (C) build and publish one public artifact aimed at a specific company's engineering team. You do one, not all three.",
    "Section is not a planning session. You plan before you arrive. The session is a peer critique of what you already shipped. Your section partner will read your PR description, read your cold email, or review your artifact, and give you specific feedback on whether it would move a maintainer, a founder, or an engineer to respond.",
    "The goal is to leave section with one real move executed and one piece of honest feedback about whether it is working.",
  ],
  goals: [
    "Make a deliberate triage decision: which of the three options fits your situation this week, and why not the others",
    "Execute the chosen move before section (not during, not after)",
    "Bring a concrete artifact to peer review: a PR link, a sent email screenshot, or a live URL",
    "Give a specific critique of a partner's move using the review criteria below",
    "Leave with one actionable revision to your own move based on peer feedback",
  ],
  background: [
    "Option A (OSS pull request): Find a real open-source project relevant to a target company on your list. Read CONTRIBUTING.md before touching code. Pick an issue tagged 'good first issue' or 'help wanted,' or identify a small, clearly scoped documentation gap. Fork, branch, make a single atomic change, and open a PR with a description that names the problem, describes your fix, explains how you tested it, and asks the maintainer one specific question if you are unsure about anything. The PR does not need to be merged by section. It needs to be open.",
    "Option B (cold emails): Identify a specific, real problem at a target company by using their product, reading their engineering blog, or browsing their open issues. Write a cold email under 150 words to a real person at that company (engineering manager, team lead, or founder at a startup) that names the problem, describes what you would build in two weeks working free, and asks for a 15-minute call to see if it makes sense. Send three emails to three different people or companies. Bring screenshots of the sent emails.",
    "Option C (public artifact): Build something that demonstrates genuine knowledge of a target company's stack, architecture, or product problems. Examples: a detailed technical write-up of how their system probably works, a prototype that addresses a real gap in their product, a blog post that would be useful to their engineering team, or a small open-source tool they could use. Publish it publicly (blog, GitHub, Twitter/X thread). Bring the live URL.",
  ],
  instructions: [
    {
      title: "Before section: decide and ship (due before section)",
      body: "You have three choices. Pick exactly one:",
      steps: [
        "Option A: Find a real OSS project, read CONTRIBUTING.md, open a PR with a description that helps the reviewer say yes. Bring the PR URL.",
        "Option B: Identify a real problem at a target company, write a cold email under 150 words, send it to three people. Bring screenshots of the three sent emails.",
        "Option C: Build and publish one public artifact aimed at a target company's engineering team. Bring the live URL.",
        "Write one paragraph (before section) explaining which option you chose and why it is the right move for your specific situation right now. Be honest about why you did not choose the other two.",
      ],
    },
    {
      title: "At section: peer review your partner's move (20 min)",
      body: "Exchange artifacts with a partner. For each artifact, answer these questions in writing:",
      steps: [
        "What problem does this move address? Is the problem specific and real, or generic?",
        "Would a maintainer, founder, or engineer respond to this? What would make them more likely to?",
        "What is the single weakest part of this artifact or message?",
        "What is the single strongest part?",
        "If you had to rewrite one sentence or change one thing, what would it be?",
      ],
    },
    {
      title: "Debrief: two volunteers share (15 min)",
      body: "Two volunteers walk the section through their move and the peer feedback they received. The group responds to one question: does this move earn a response from a real person at that company, yes or no, and what would it take to get to yes?",
    },
    {
      title: "Revise your move (10 min)",
      body: "Based on the feedback, make one concrete revision before leaving section. If your PR description was too long, shorten it. If your cold email was too vague, name the problem more specifically. If your artifact was not clearly aimed at anyone, add a paragraph that names the target company and what you want them to do with it. The revision happens in section, not later.",
    },
  ],
  deliverables: [
    "One executed move (PR link, sent email screenshots, or live artifact URL) brought to section before it starts",
    "One paragraph explaining which option you chose and why not the other two",
    "Written peer review of your partner's move covering all five questions above",
    "One concrete revision to your own move made during section",
  ],
  rubric: [
    {
      dimension: "Move executed before section",
      points: 40,
      notes:
        "A draft PR, three sent emails, or a live URL. Not a plan, not a work in progress, not a screenshot of a local file. Partial credit (20 pts) for an artifact that exists but is not yet public.",
    },
    {
      dimension: "Triage rationale",
      points: 20,
      notes:
        "One paragraph that explains the choice with specific reasoning about your situation. 'I picked A because I had time' is not sufficient reasoning.",
    },
    {
      dimension: "Peer review quality",
      points: 20,
      notes:
        "All five questions answered. The weakest-part answer must name something specific, not just 'could be better.'",
    },
    {
      dimension: "In-section revision",
      points: 20,
      notes:
        "A concrete change visible in the artifact, message, or description by the end of section.",
    },
  ],
  hints: [
    "Option A is the lowest-risk for most people. A PR that gets reviewed and rejected teaches you more than a cold email that never gets opened. Start with Option A if you are unsure.",
    "For Option B, the email is not a cover letter. It is a specific offer to solve a specific problem. If you find yourself describing your background in the first sentence, you are writing a cover letter. Start with the problem.",
    "For Option C, the artifact must be genuinely useful to the company's team, not just a demonstration that you can build things. A write-up that identifies a real architectural tradeoff in their system is more valuable than a polished demo of a feature they already have.",
    "The peer review question 'would a real person respond to this?' is the only one that matters. If the answer is no, the other questions tell you why.",
    "If you cannot decide between the three options, default to Option A. An open PR on a project a company uses is the most concrete signal you can generate in one week.",
    "HW 4 (system design write-up) is due this week. Complete it before the section session so you are not splitting your attention.",
  ],
};

export function Wk08Section() {
  return <ProjectPage spec={spec} />;
}

export const wk08SectionSearchBody =
  "section triage ship unconventional move pull request cold email public artifact open source OSS peer review build in public find a problem permissionless work Week 8 section landing the offer";
