import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 6 section — Capstone demo day",
  tagline:
    "Present your 90-day playbook to two peers. Get feedback on your weekly system, your milestone plan, and your first 30 days of posts.",
  outDate: "Week 6",
  dueDate: "Week 6 (bring your playbook to section)",
  overview: [
    "This is the final section of the course. You arrive with a completed 90-day playbook and a capstone document that synthesizes everything from weeks 1-5: your niche positioning, your bio, your content calendar, your reply strategy, your collaboration plan, your signal metrics, and your iteration system. You present that playbook to two peers who give structured feedback. Then you revise.",
    "HW 4 (the 30-day experiment) is due this week. You should bring your experiment log and its conclusions to section; they feed directly into the milestone plan section of your playbook.",
    "The goal is to leave section with a playbook you would actually execute starting tomorrow, not a document that looks complete but stalls on day one. Peer feedback is calibration, not approval. The test of a good playbook is whether someone who knows nothing about your niche can read it and understand exactly what you will post on each of the first 30 days.",
  ],
  goals: [
    "Articulate the three phases of your growth plan and what changes at each phase",
    "Receive and apply specific peer feedback on your milestone targets and weekly system",
    "Identify the single biggest risk in your first 30 days and name a mitigation",
    "Give structured feedback to two peers using the rubric criteria as a frame",
    "Leave with a revised playbook that addresses at least two pieces of peer feedback",
  ],
  instructions: [
    {
      title: "Arrive with your capstone document (0 min)",
      body: "Your capstone document must include all six components before section starts. Missing components cannot be completed during section time.",
      steps: [
        "Niche statement: one sentence naming your specific audience and the problem you solve for them",
        "Optimized bio: the final version you plan to use, with a hook, a credibility signal, and a call to action",
        "90-day milestone plan: follower targets at day 30, 60, and 90, with the reasoning behind each number",
        "Weekly system: a template for your minimum viable week, naming post types, posting days, and reply time",
        "First 30 days of posts: titles or hook lines for at least 30 posts, organized by week",
        "HW 4 conclusions: a one-paragraph summary of what your 30-day experiment taught you and how it changed your plan",
      ],
    },
    {
      title: "Peer presentation round 1 (15 min)",
      body: "Pair with your first peer. Each person has 5 minutes to walk through their playbook. The presenter speaks; the listener takes notes. The presenter should spend no more than 1 minute on background and at least 3 minutes on the first 30 days of posts and the weekly system. Listener: do not ask questions during the presentation. Write them down.",
    },
    {
      title: "Peer feedback round 1 (10 min)",
      body: "The listener gives structured feedback using these four questions:",
      steps: [
        "Is the niche specific enough that a stranger would know immediately whether it is for them? If not, what is still too broad?",
        "Are the milestone targets realistic given the phase framework from lecture? Too aggressive, too conservative, or about right?",
        "Is the weekly system executable by a real person with a day job? Where is the first place it will break down?",
        "Look at the first 30 post hooks. Pick the three strongest and the three weakest. Name what makes each strong or weak.",
      ],
    },
    {
      title: "Peer presentation round 2 (15 min)",
      body: "Switch roles. The listener from round 1 presents; the presenter from round 1 becomes the listener. Same format: 5 minutes presentation, 10 minutes feedback.",
    },
    {
      title: "Second peer review (25 min)",
      body: "Find a second peer (not your round 1 partner). Repeat the presentation and feedback sequence with a fresh perspective. Your second reviewer has not heard your plan before. Note where feedback from reviewer 1 and reviewer 2 agrees: that is your highest-signal information.",
    },
    {
      title: "Revision and debrief (15 min)",
      body: "Spend 10 minutes revising your playbook based on peer feedback. You do not have to accept every note, but you must update at least two things and write one sentence explaining each change. Final 5 minutes: two volunteers share one piece of feedback that changed their plan, and the group votes on whether the revision made it stronger.",
    },
  ],
  deliverables: [
    "Completed capstone document with all six components (submitted before section)",
    "HW 4 experiment log and one-paragraph conclusion",
    "Written notes from two peer reviews (at least three points of feedback from each reviewer)",
    "Revised capstone with at least two documented changes and a one-sentence explanation of each",
  ],
  rubric: [
    {
      dimension: "Niche and bio: specific, executable, honest",
      points: 15,
      notes:
        "Niche names a real audience and a real problem. Bio has all three components. Vague positioning loses full credit.",
    },
    {
      dimension: "90-day milestone plan: targets grounded in phase logic",
      points: 20,
      notes:
        "Targets at 30, 60, 90 days. Reasoning present. Targets must be consistent with the phase framework, not just aspirational numbers.",
    },
    {
      dimension: "Weekly system: minimum viable week described and realistic",
      points: 20,
      notes:
        "Post types named. Days or cadence specified. System must survive a week where the creator is busy. &ldquo;Post every day&rdquo; without a batch strategy is not a system.",
    },
    {
      dimension: "First 30 posts: hooks written, organized by week",
      points: 25,
      notes:
        "At least 30 hooks or post titles. Organized by week. At least four distinct post formats represented. Hook quality assessed: specific, payoff-aligned, niche-appropriate.",
    },
    {
      dimension: "Peer feedback given: structured, honest, useful",
      points: 10,
      notes:
        "Evidence of written feedback notes for two peers. Feedback must reference the four structured questions, not just &ldquo;looks good.&rdquo;",
    },
    {
      dimension: "Revision quality: changes documented and explained",
      points: 10,
      notes:
        "At least two documented changes. Each change has a one-sentence explanation. The explanation must reference the peer feedback that prompted it.",
    },
  ],
  hints: [
    "The most common capstone failure is a first-30-posts list that is all the same format. Aim for at least four distinct formats: thread, single post, reply, quote-post.",
    "Milestone targets that match the average for your niche are fine. Targets that are 10x the average require an explanation of what you will do differently.",
    "The weekly system must survive the hardest week of the term, not the easiest. Think about what you will do when you have three deadlines and a family event.",
    "Peer feedback is most useful when it is specific and negative. &ldquo;The hook on post 12 promises a number but doesn&rsquo;t deliver one&rdquo; is useful. &ldquo;Good work&rdquo; is not.",
    "HW 4 conclusions belong in the playbook. If your experiment showed that threads underperformed single posts, your first 30 days should reflect that.",
    "After section, you can keep building. The 90-day playbook is a living document. The version you submit is the version you start from.",
  ],
  late: "Capstone documents submitted after the section start time receive a 15-point deduction. Documents submitted more than 48 hours after section receive a 30-point deduction. Peer feedback notes cannot be completed after section.",
};

export function Wk06Section() {
  return <ProjectPage spec={spec} />;
}

export const wk06SectionSearchBody =
  "capstone demo day 90-day playbook peer feedback niche statement bio milestone plan weekly system first 30 posts HW4 30-day experiment revision structured feedback Week 6 section";
