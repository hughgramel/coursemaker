import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 4 section, Build your weekly system",
  tagline:
    "Design the daily routine, batching schedule, and post-mix model you will actually run for the next two weeks.",
  outDate: "Week 4",
  overview: [
    "Knowing the theory of batching and content calendars is not the same as having a system. This section asks you to build yours on paper: a concrete daily 60-minute creator routine, a weekly batching block, a monthly retrospective slot, and a post-mix model that specifies what share of your posts will be evergreen, timely, and personal.",
    "You will choose or adapt one of three template calendars provided below and annotate it for your own life: when you write, when you reply, when you review, and when you will not be available. The goal is a one-page plan you can pin up and actually follow for HW 3, which starts this week.",
    "By the end of section you should also have identified at least one creator network you want to join or build, with a concrete first step written down.",
  ],
  goals: [
    "Translate the 60-minute daily routine (15 post + 30 reply + 15 review) into calendar blocks that fit your actual schedule",
    "Design a weekly batching session: when it happens, how long it runs, and what you produce in it",
    "Set a post-mix target: what percentage of your posts will be evergreen, timely, and personal over the next two weeks",
    "Identify one creator network to join or build, and write the first concrete action you will take this week",
    "Produce a one-page weekly calendar you can hand to your section partner for feedback",
  ],
  background: [
    "The daily routine from lecture: 15 minutes writing or scheduling one post, 30 minutes replying with genuine added value, 15 minutes reviewing last week’s metrics and noting what to adjust. This totals 60 minutes and is designed to fit around work or school hours.",
    "The three template calendars below offer different shapes. Template A front-loads the batching block on Sunday afternoon. Template B splits batching across two shorter blocks (Wednesday evening and Saturday morning). Template C uses a rolling daily micro-batch: every day produces three days of future posts. Choose whichever matches your energy and schedule, then annotate it with your real time slots.",
  ],
  instructions: [
    {
      title: "Pick a template calendar and annotate it",
      body: "Choose Template A, B, or C from the handout. Print or copy it. Fill in the actual clock times that correspond to each block given your real schedule. If none of the templates fits, design your own using the same block types (batch, daily routine, review, rest).",
    },
    {
      title: "Set your post-mix targets for the next two weeks",
      body: "Decide what share of your posts over the next 14 days will be evergreen (no expiry date, useful any time), timely (tied to a current event or trend), and personal (your story, opinion, or process). Write the three percentages. They must sum to 100. Explain in one sentence why you chose that balance for your niche.",
    },
    {
      title: "Plan your batching block",
      body: "Write down: the day and time of your main batching session this week, how long you will run it, and what you will produce in it. A reasonable output for a two-hour session is 5-7 drafted posts plus one thread outline. If you have less time, lower the output target rather than skipping the session.",
    },
    {
      title: "Schedule your monthly retrospective",
      body: "The monthly retrospective is a 30-minute review: what worked, what flopped, what you will change. Put it on your calendar for the last Saturday or Sunday of each month. Write the specific date for this month’s slot. The retrospective is the only place where you revise your strategy rather than just executing it.",
    },
    {
      title: "Identify one creator network to join or build",
      body: "A creator network is a small group of accounts in adjacent niches who amplify each other’s work with genuine engagement, not reciprocal like-swaps. Identify one such group that already exists in your space, or name three creators you would invite to start one. Write the first action you will take this week: a direct message, a reply in public, or an introduction.",
    },
    {
      title: "Trade calendars with a section partner",
      body: "Share your annotated one-page calendar with the person sitting next to you. Give each other two minutes of feedback: one thing that looks realistic and one potential gap or conflict. Revise your calendar based on the feedback before you leave.",
    },
  ],
  deliverables: [
    "An annotated weekly calendar with real time blocks for batch session, daily routine (15+30+15), and monthly retrospective",
    "Post-mix targets for the next two weeks (evergreen / timely / personal percentages with one-sentence rationale)",
    "A batching plan: day, time, duration, and expected output for this week’s session",
    "One creator network action item: group identified or three creators named, first step written down",
    "Section partner feedback received and one revision made to your calendar",
  ],
  rubric: [
    {
      dimension: "Calendar specificity",
      points: 30,
      notes: "Real clock times filled in, not just labels; rest and life commitments visible",
    },
    {
      dimension: "Post-mix rationale",
      points: 20,
      notes: "Percentages are deliberate, not arbitrary; rationale ties to your niche",
    },
    {
      dimension: "Batching plan completeness",
      points: 20,
      notes: "Day, time, duration, and output target are all present and credible",
    },
    {
      dimension: "Network action item",
      points: 20,
      notes: "A specific first step named, not just a general intention",
    },
    {
      dimension: "Partner feedback incorporated",
      points: 10,
      notes: "At least one change made to the calendar after peer review",
    },
  ],
  hints: [
    "The 15-minute writing slot is for scheduling a post you already drafted in the batching block, not for writing from scratch. If you are writing from scratch every day, your batching block is not working.",
    "Timely posts have a short shelf life. If you schedule them more than 48 hours in advance, they may land after the moment has passed. Keep timely posts out of the batching block and write them day-of.",
    "Personal posts are the hardest to batch because they require something to have happened. Instead, keep a running list of observations, reactions, and small wins throughout the week. The batching block turns that list into posts.",
    "A creator network is not a follow-for-follow agreement. It is a group of people who read each other’s work closely enough to add genuine context in replies and quote posts. Start small: three people is enough.",
    "If you find that the 60-minute daily routine is not fitting, do not abandon it on the days when it won’t fit. Cut 15-minute slices. A 15-minute reply session on a busy day keeps the habit alive.",
  ],
};

export function Wk04Section() {
  return <ProjectPage spec={spec} />;
}

export const wk04SectionSearchBody =
  "section weekly system daily routine batching schedule post-mix evergreen timely personal content calendar creator network retrospective template calendar 60 minutes Week 4 worksheet";
