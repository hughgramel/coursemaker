import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW5, STAR story bank, twelve stories",
  tagline: "Pre-loaded stories beat on-the-spot improv every time: the behavioral round is won in the week before the interview, not the minute the question lands.",
  outDate: "Week 7",
  dueDate: "Week 9",
  overview: [
    "The behavioral round is not a test of your memory under pressure. It is a test of the preparation you did before you walked in. Interviewers at FAANG-tier and growth-stage companies compare candidates against a hiring bar by scoring each answer against a rubric of leadership principles or competencies. Candidates who have already chosen their strongest stories, structured them, and rehearsed them aloud consistently outperform candidates who are equally experienced but have not done the prep. Twelve well-chosen stories, one for each major principle cluster, cover roughly 90% of the question space you will encounter in any structured behavioral loop.",
    "The deliverable is a written bank of twelve stories in STAR form. Each story should be tagged with the leadership principles or competencies it lands. Write tight: the spoken version of every story must come in under three minutes. That constraint forces you to cut setup and get to your contribution faster, which is exactly what interviewers want. The stories you write here will travel with you across every company you interview at for the next several years. Invest in them now.",
  ],
  goals: [
    "Apply STAR structure to real experiences from your own history.",
    "Analyze the mapping between each story and the leadership principles it covers.",
    "Evaluate which of your candidate stories are strongest and cut the weaker ones.",
    "Create new stories from past projects that you have not previously framed for interviews.",
    "Identify gaps in your principle coverage and fill them deliberately.",
  ],
  instructions: [
    {
      title: "Pick a target company and list its principles",
      body: "Choose one company as your primary target for this assignment. Look up its official leadership framework and copy the full list. Amazon has 16 Leadership Principles (LP) from the primary document at https://www.amazon.jobs/content/en/our-workplace/leadership-principles. Google evaluates on four General Cognitive Ability and four Googleyness/Leadership criteria (GCAs). Meta focuses on focus, move fast, and be bold. Stripe publishes its operating principles internally but summarized versions circulate widely. Write your target company and its full principle list at the top of your submission document.",
      steps: [
        "State the company name and the number of principles in its framework.",
        "List every principle by name. Do not summarize or combine them.",
        "Note which two or three principles the company is known to weight most heavily in engineering loops.",
      ],
    },
    {
      title: "Brainstorm 20+ candidate story sources",
      body: "Before picking your twelve stories, build a wider candidate pool. Think across the last two years: group projects, internships, hackathons, side projects, course failures, moments where you led without a title, moments where you disagreed with a decision and acted on it, moments where you had to deliver under constraint. Write a one-sentence description of each candidate. Aim for at least twenty. Breadth here makes the selection step in step 3 meaningful.",
      steps: [
        "List at least twenty candidate story sources in one or two sentences each.",
        "Mark any that involve a measurable outcome you can state in numbers (users, latency, dollars, percentage).",
        "Mark any that involve conflict, disagreement, or a decision you made against someone’s advice.",
      ],
    },
    {
      title: "Select the twelve stories that span the principle space",
      body: "Review your candidate list against the principle list from step 1. Pick the twelve stories that together cover as many principles as possible, with at least one story per principle if you can manage it. Favor stories where you personally drove the outcome, not stories where the team succeeded and you participated. Conflict stories and failure stories are often underrepresented in early-career banks but score very well on principles like “Have Backbone” or “Learn and Be Curious.” Include at least two.",
      steps: [
        "Write your twelve selected stories by title only (not full STAR yet).",
        "Next to each, list the principle or principles it is intended to cover.",
        "Verify that every principle on your list from step 1 is covered by at least one story. Flag any gaps.",
      ],
    },
    {
      title: "Write each story in STAR form",
      body: "Write all twelve stories. Each story must follow the STAR format exactly: Situation in two sentences, Task in one sentence, Action in three to five sentences with the focus on your personal contribution (not the team’s), Result in one to two sentences with numbers wherever possible. The Action section is where most candidates fail: they say “we built” and “our team decided.” Interviewers are calibrating YOU against the hiring bar, not your team. Every sentence in Action must start with “I” or describe a specific choice you made.",
      steps: [
        "Situation: set the context. Two sentences. What was the environment and what was the problem?",
        "Task: one sentence. What were you specifically responsible for delivering?",
        "Action: three to five sentences. What did YOU do, step by step? Cut anything that starts with “we.”",
        "Result: one to two sentences. What happened? State a number if you have one.",
      ],
    },
    {
      title: "Time each story aloud and revise",
      body: "Read each of your twelve stories aloud with a timer running. Your target is under three minutes per story. If a story runs long, cut the Situation first, then trim the Action to your three most decisive steps. A story that comes in at 2:30 and is crisp will score better than one that runs 4:00 and covers every detail. Record which stories are over time and note where you cut.",
      steps: [
        "Time each of the twelve stories aloud. Record the duration next to each title.",
        "For any story over three minutes, identify the one section you will trim and make the cut in writing.",
        "Re-time the trimmed stories to confirm they land under three minutes.",
      ],
    },
    {
      title: "Tag each story with 1-3 principles",
      body: "Return to your coverage map. Tag each final story with the one to three principles it hits most strongly. Note that the same underlying experience can be framed to land on different principles depending on which element of the story you emphasize in the opening sentence. A story about a project that almost missed a deadline can land on “Deliver Results,” “Bias for Action,” or “Earn Trust” depending on what you choose to foreground. Write a one-sentence framing note for each alternate read.",
    },
    {
      title: "Write one stretch story for your weakest principle",
      body: "Look at your coverage map. Identify the principle you have the weakest story for, either no story at all or a story you rated low in step 3. Write a new STAR story specifically to cover it. This story may come from an experience you did not initially consider because it did not feel impressive enough. Interviewers do not require billion-dollar outcomes. They are evaluating signal about how you think and act. A small project where you made a clear decision under constraint can be stronger than a large project where you were one of fifty contributors.",
    },
  ],
  deliverables: [
    "Twelve complete STAR stories, each tagged with the leadership principles it covers.",
    "A leadership-principle coverage map: a table listing every principle from your target company and the story or stories that cover it.",
    "A recording of your three best stories told aloud (audio file or voice memo). Each must come in under three minutes.",
  ],
  rubric: [
    { dimension: "Coverage of principles", points: 25, notes: "Every principle from your target company’s framework is covered by at least one story. Gaps are acknowledged and explained." },
    { dimension: "STAR structure rigor", points: 20, notes: "All four sections present and in order. Situation is two sentences or fewer. Result includes a number." },
    { dimension: "Action specificity", points: 20, notes: "Every sentence in the Action section describes something YOU did. No “we” sentences without an immediate follow-up naming your specific contribution." },
    { dimension: "Recording quality", points: 15, notes: "Three stories recorded, each under three minutes, audible, and told without reading from the page." },
    { dimension: "Stretch story", points: 10, notes: "The stretch story targets the weakest principle and holds up under STAR scrutiny." },
    { dimension: "Polish", points: 10, notes: "Stories are free of filler phrases. Numbers are specific. Formatting is consistent." },
  ],
  hints: [
    "Read Amazon’s Leadership Principles at https://www.amazon.jobs/content/en/our-workplace/leadership-principles before you write a single story. The definitions are more nuanced than the names suggest.",
    "Read Gergely Orosz’s “Confessions from a Big Tech Hiring Manager” for a candid account of what debrief meetings actually look like and what makes a story forgettable vs. memorable.",
    "Joel Spolsky’s Guerrilla Guide to Interviewing covers the signal interviewers are looking for when they ask behavioral questions. It is short and worth reading in full.",
    "The “team did” trap is the single most common failure mode. Interviewers are calibrating you individually against a hiring bar. If your team of six built the feature, tell the story of your slice of the work, not the team’s story with you mentioned.",
    "One story can cover multiple principles. Frame the opening sentence toward the principle you are targeting. “I had to deliver a feature with half the engineers we had planned for” opens toward Deliver Results. “I disagreed with the tech lead’s approach and had to decide whether to escalate” opens toward Have Backbone.",
    "Failure stories score better than people expect. “Tell me about a time you failed” is not a trap. Interviewers want to see that you have a growth mindset and can reflect accurately on what went wrong.",
  ],
  late: "Late submissions lose 10% per day up to three days. After three days, no credit. Submit anyway, because HW6 asks you to rehearse from this bank.",
};

export function Hw5() { return <ProjectPage spec={spec} />; }
export const hw5SearchBody = "HW5 STAR story bank behavioral interview leadership principles Amazon Google Meta Stripe twelve stories coverage map recording";
