import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 7 section: STAR story bank workshop",
  tagline:
    "Write 12 STAR stories from your own history, map them to leadership principles, and stress-test three under timed peer review.",
  outDate: "Week 7",
  dueDate: "Week 7 (bring drafts to section; full bank due with HW 5)",
  overview: [
    "A behavioral interview is only as good as the stories behind it. The goal of this section is to leave with 12 drafted STAR stories mapped to the leadership principles your target companies assess. You will not polish every story today. You will draft all 12, then spend the final hour letting three of them be stress-tested by a peer under real interview conditions.",
    "The story bank is the raw material for HW 5 (due week 9). Section is where you build the foundation. Come with a list of 12 experiences from your past -- group projects, internships, hackathons, side projects, classes where something went wrong. If you cannot name 12 experiences before section, bring 8 and extend the list during the first activity.",
    "HW 3 (recorded mock coding interview) is due this week. Bring the link or file.",
  ],
  goals: [
    "Draft all 12 STAR stories in the bank format (Situation, Task, Action, Result), each under 250 words",
    "Map each story to at least one leadership principle using the mapping table in the week 7 reading",
    "Identify the two or three stories that carry the most individual ownership signal",
    "Receive and apply peer feedback on three stories under timed conditions (2 minutes per story, 3-minute debrief per story)",
    "Leave with a prioritized list: which stories are ready to tell in an interview and which need another draft",
  ],
  instructions: [
    {
      title: "Pre-work: list 12 source experiences",
      body: "Before section, write a list of 12 experiences from your academic and project history. Include at minimum: two group project experiences (one that went well, one that did not), one internship or work experience, one hackathon or competition, one side project, one course where you failed or struggled, and one time you disagreed with someone on a technical decision. Bring this list. You will use it as the input for drafting.",
    },
    {
      title: "Activity 1: draft all 12 STAR stories (35 minutes)",
      body: "For each experience on your list, write a STAR story in the four-section format. Target 150-250 words per story. Keep the Situation section to two sentences maximum. Put most of the word count in Action. Use first-person singular ('I decided', 'I shipped', 'I ran') in the Action section -- not 'we'. Record each story in a shared doc or your own notes so your peer reviewer can read it.",
      steps: [
        "Situation (2 sentences): company or class name, semester or time, team size, what was at stake",
        "Task (1-2 sentences): your specific responsibility or the decision that was yours to make",
        "Action (3-5 sentences): the concrete steps you took, in sequence, using 'I' as the subject",
        "Result (1-2 sentences): what happened, including at least one number if possible",
      ],
    },
    {
      title: "Activity 2: map stories to leadership principles (15 minutes)",
      body: "Open the week 7 reading and use the mapping table to assign each story to one primary leadership principle. You may assign a secondary principle if the story genuinely covers two, but do not force it. The goal is to see which principles you have covered and which have no stories yet. Common gaps for CS undergrads: Earn Trust, Have Backbone and Disagree and Commit, and Hire and Develop the Best. Note these gaps -- they point to experiences you may be underusing.",
    },
    {
      title: "Activity 3: timed peer review (45 minutes)",
      body: "Pair with a partner. Each person picks three stories to stress-test. For each story: the candidate tells the story aloud in under two minutes while the reviewer tracks time and takes notes. At two minutes the reviewer calls time. The reviewer then spends three minutes giving feedback using the three criteria below. Swap roles after three stories. Do not skip the timer -- the discipline of the two-minute ceiling is the whole point.",
      steps: [
        "Criterion 1 (ownership): Did the Action section use first-person singular for the key decisions?",
        "Criterion 2 (result): Can the reviewer repeat the result back in one sentence with a specific number?",
        "Criterion 3 (principle fit): Does the story clearly land on the principle the candidate claimed to demonstrate?",
      ],
    },
    {
      title: "Activity 4: triage and prioritize (5 minutes)",
      body: "After peer review, mark each story in one of three states: Ready (can tell in an interview today), Needs revision (core content is there but result is vague or ownership is weak), and Needs a different story (the experience does not demonstrate the principle well enough -- pull from a different source). The Needs revision and Needs different story items become your HW 5 work queue.",
    },
  ],
  deliverables: [
    "12 drafted STAR stories in the four-section format, each 150-250 words",
    "A mapping table: story number, experience name, primary leadership principle, secondary principle (if any)",
    "Three stories with written peer feedback on ownership language, result specificity, and principle fit",
    "A triage list: how many stories are Ready, Needs revision, or Needs different story",
    "HW 3 link or file (recorded mock coding interview): due this week",
  ],
  rubric: [
    {
      dimension: "Coverage: 12 stories drafted with all four STAR sections present",
      points: 30,
      notes: "Each story must have a named Situation, a named Task, an Action in first-person singular, and a Result. Incomplete stories receive partial credit based on sections present.",
    },
    {
      dimension: "Principle mapping: each story mapped to at least one principle",
      points: 20,
      notes: "Mapping must use the principle names from the week 7 reading. Generic labels ('leadership', 'teamwork') do not count.",
    },
    {
      dimension: "Timed peer review: three stories reviewed with written feedback",
      points: 30,
      notes: "Feedback must address all three criteria (ownership language, result specificity, principle fit). Feedback that only says 'good job' receives no credit.",
    },
    {
      dimension: "Triage list with honest assessment",
      points: 20,
      notes: "The triage list must assign every story to one of the three states. Stories marked Ready should be ones you could actually tell in an interview today, not aspirationally.",
    },
  ],
  hints: [
    "The Situation is the most over-written section. If your Situation runs more than three sentences, cut it. The interviewer does not need the full context of your senior thesis to understand your story.",
    "If your Result section does not have a number, ask yourself: what changed after I did this? Latency, user count, grade, turnaround time, team satisfaction score -- any concrete metric is better than 'it went well'.",
    "The principle Bias for Action is not asking whether you moved fast. It is asking whether you made a decision with incomplete information. A story where you waited for consensus does not demonstrate this principle.",
    "If you find yourself using 'we' in the Action section, ask who specifically made the decision. If it was genuinely a group decision, find a different story where you were the individual decision-maker.",
    "The timed peer review feels awkward. That is the point. Two minutes is shorter than you think, and the discomfort of being cut off at two minutes is better rehearsal than practicing alone.",
    "A common gap: the Earn Trust principle requires a story where you repaired a damaged relationship or disclosed a mistake. Most CS undergrads have this story (a group project that went badly) but do not frame it in those terms.",
  ],
  late: "Section worksheets submitted within 48 hours of section receive full credit. After that, deduct 10 points per day. The peer-review feedback must be completed during section to receive credit for Activity 3.",
};

export function Wk07Section() {
  return <ProjectPage spec={spec} />;
}

export const wk07SectionSearchBody =
  "STAR story bank workshop behavioral interview leadership principles timed peer review ownership language result specificity principle fit Situation Task Action Result HW5 story bank 12 stories Week 7 section landing the offer";
