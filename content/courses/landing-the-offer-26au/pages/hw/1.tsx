import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW1, Resume and portfolio audit",
  tagline: "Find what the hiring funnel cuts before it ever reaches a human, and fix it.",
  outDate: "Week 1",
  dueDate: "Week 3",
  overview: [
    "Most candidates lose the job before any human reads their name. An ATS keyword screen runs first, and a resume that doesn’t mirror the language in a target job posting gets filtered out automatically. Even when a resume clears the ATS, a recruiter skimming your GitHub sees a wall of boilerplate and moves on. The hiring funnel is unforgiving at the top: if your resume and portfolio don’t earn a second look, nothing else in this course matters.",
    "This assignment makes you do four things that most candidates skip. First, you will run an ATS keyword audit against three real companies and mark every gap in red. Second, you will rewrite your five strongest project descriptions as accomplishment bullets, each carrying an action, a result, a sense of scale, and the technology used. Third, you will rebuild one GitHub README so that a visitor grasps the value of the project in the first 30 seconds. Fourth, you will draft a 100-word proposal for a public artifact to ship by end of term, your first step toward building the kind of public proof that bypasses the front door of the hiring funnel entirely.",
  ],
  goals: [
    "Apply an ATS keyword screen to your own resume and identify specific gaps against target-company job postings.",
    "Analyze each project description for what it claims vs. what evidence it provides.",
    "Rewrite project descriptions as accomplishment bullets that carry action, result, scale, and technology.",
    "Evaluate your strongest GitHub repo against the “30-second value” standard and identify what a first visitor cannot quickly determine.",
    "Create a README that front-loads the pitch, screenshot, reason it matters, and quick-start steps.",
    "Create a concrete proposal for one public artifact that advances your positioning with target companies.",
  ],
  instructions: [
    {
      title: "Run an ATS keyword audit on your resume",
      body: "Pull three recent job postings from your target-company-list (companies you genuinely want to work at). Print or export each posting, then print your current resume. With a red pen, mark every keyword that appears in the postings but is absent from your resume. Pay attention to exact phrasing: if the posting says “cross-functional collaboration” and your resume says “worked with multiple teams,” the ATS system may not match them. The goal is a marked-up resume that shows, visually, where the gaps are.",
      steps: [
        "Choose three target companies and find one active job posting each that matches the role you are targeting.",
        "Highlight every skill, tool, and phrase that appears in all three postings but is missing or phrased differently on your resume.",
        "Count the total gaps. Note which keywords appear across all three postings, those are the highest-priority additions.",
      ],
    },
    {
      title: "Rewrite your top 5 project descriptions as accomplishment bullets",
      body: "Identify the five project descriptions on your resume that matter most to your target companies. Each one should be rewritten as a single bullet following the accomplishment-bullet formula: action verb + what you built or did + measurable result or outcome + scale or scope + technology used. Bullets without a number are weak. If you genuinely have no metric, invent a proxy: users, requests per second, test coverage percentage, lines of code removed. The result does not need to be a business KPI, it needs to be specific.",
      steps: [
        "List your top 5 project descriptions as they appear on your resume today.",
        "For each one, identify: the action verb, the result (with a number if possible), the scale or scope, and the technology.",
        "Write the rewritten bullet. Read it aloud. If it sounds like a job description instead of an achievement, rewrite it.",
      ],
    },
    {
      title: "Rewrite your strongest GitHub repo README",
      body: "Pick the one public repo a recruiter or hiring manager is most likely to look at. Open it in a private browser window the way a stranger would. The README needs to load its value in the first 30 seconds: a one-line pitch at the top, a screenshot or demo gif, a paragraph on why the project matters or what problem it solves, and a “how to run it” section that actually works. Most READMEs fail because they start with installation instructions instead of the point. Fix that.",
      steps: [
        "Write a one-line pitch for the repo that a non-technical recruiter can understand.",
        "Add a screenshot, demo gif, or live link above the fold, before any installation steps.",
        "Add a “why it matters” paragraph of 2-4 sentences that connects the project to a real problem.",
        "Verify the “how to run” section works from a clean checkout.",
      ],
    },
    {
      title: "Write a 100-word proposal for one public artifact",
      body: "A public artifact is something a hiring manager can find and read before your interview: a blog post, a demo site, a written case study of a project, a conference talk recording. This is how side-door-paths into companies work, someone finds your writing or your demo and reaches out before you ever apply. Choose one artifact you can realistically ship by end of term and write a 100-word proposal. Name what it is, who it is for, what it will demonstrate about your skills, and how you will distribute it so target companies can find it.",
    },
    {
      title: "Submit all materials",
      body: "Assemble your submission as a single document or shared folder. Include every piece listed in the deliverables section. Name files clearly: before-resume.pdf, after-resume.pdf, README-before.md, README-after.md, artifact-proposal.pdf (or .docx). Submissions missing the before versions cannot be graded on audit quality.",
    },
  ],
  deliverables: [
    "Before and after resume PDFs, with the before version showing red-pen markup or a digital equivalent of keyword gaps annotated.",
    "A written list of your top 5 rewritten accomplishment bullets, with the original text shown above each rewrite.",
    "Before and after versions of your GitHub README (either two files or a before screenshot + the updated live link).",
    "A 100-word public-artifact proposal naming the artifact type, audience, skills demonstrated, and distribution plan.",
  ],
  rubric: [
    { dimension: "ATS keyword audit", points: 20, notes: "Three postings referenced, gaps clearly identified, priority keywords noted." },
    { dimension: "Accomplishment bullets", points: 25, notes: "Each bullet has an action verb, a result, a number or proxy metric, and a technology. No bullet reads as a job description." },
    { dimension: "GitHub README rewrite", points: 25, notes: "One-line pitch present, visual above the fold, why-it-matters paragraph, working quick-start. Value is clear in 30 seconds." },
    { dimension: "Public-artifact proposal", points: 20, notes: "Artifact type is specific, audience is named, skills demonstrated are stated, distribution plan is concrete." },
    { dimension: "Polish and before/after comparison", points: 10, notes: "Before versions submitted, changes are substantive not cosmetic, formatting is clean." },
  ],
  hints: [
    "Lead every bullet with the verb, not “I worked on” or “Responsible for.” The action is the point.",
    "Every bullet needs a number. If you reduced load time, by how much? If you added a feature, how many users used it? Estimate if you must, but be specific.",
    "The ATS system matches exact phrases, not synonyms. If the posting says “React.js” and your resume says “React,” add both.",
    "Your README is a project-narrative document, not a setup guide. State the problem first, the solution second, the instructions third.",
    "The public artifact does not need to be finished now, it needs a concrete plan. A 100-word proposal with a realistic timeline beats a vague idea.",
  ],
  late: "Late submissions lose 10% per day, up to three days. After three days, no credit. Submit the before versions even if the rewrites are incomplete.",
};

export function Hw1() { return <ProjectPage spec={spec} />; }
export const hw1SearchBody = "HW1 resume portfolio ATS keyword audit accomplishment bullet GitHub README public artifact hiring funnel target company positioning";
