import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW3, Run your weekly system for two weeks",
  tagline: "Operate the system you built in Section 4. Daily routine, weekly batching, at least one collaboration touch.",
  outDate: "Week 4",
  dueDate: "Week 5",
  overview: [
    "The system you designed in Section 4 only works if you run it. This assignment is not about designing a better calendar or debating which template fits you best ,  you chose one at the end of Week 4. For the next fourteen days you execute it: post, reply, batch, and touch at least one collaborator per week. The daily log you keep is the raw data of your practice. The weekly summaries are your first attempt to read that data honestly. Both are required because without the log, the summary is a story; without the summary, the log is noise.",
    "Growth on X is not a publishing problem. It is an operating problem. Most creators who plateau are not out of ideas; they are inconsistent. Consistency is not a personality trait; it is an output of a system run reliably. By the end of these two weeks you will know whether the system you chose fits your life as it actually is or as you imagined it would be. That finding is as valuable as any follower count you accumulate, because it tells you what to adjust before Week 5’s retrospective.",
  ],
  goals: [
    "Execute a daily 60-minute creator routine for 14 consecutive days without redesigning it mid-run.",
    "Complete two 90-minute batching blocks and produce real draft artifacts from each one.",
    "Make one deliberate collaboration touch per week using audience-borrowing or mutual-amplification tactics from Week 3 and Week 4.",
    "Maintain a daily log that captures time, output, replies sent, follows gained, and self-reported energy.",
    "Write two end-of-week summaries that identify what worked, what felt forced, and what you would change.",
    "Produce a 300-word sustainability reflection that answers honestly whether this system can run for 90 more days.",
  ],
  background: [
    "Three frameworks inform the design of this assignment. Justin Welsh’s hub-and-spoke model, documented by Basilio (2023), holds that sustainable daily output requires a weekly anchor: one longer piece of content (a newsletter, an essay, a thread) from which all shorter posts are derived. The system produces volume without requiring daily originality. Dan Koe (2022) adds a complementary routine layer: a three-part daily block covering creation, engagement, and review, each with a fixed time budget. The discipline is not in the tasks themselves but in the fixed ceiling ,  knowing the block ends at 60 minutes removes the perfectionism that kills consistency. Paul Graham’s 2009 “Maker’s Schedule” essay makes the structural argument underneath both: knowledge work that requires sustained attention degrades sharply when it is fragmented across meetings and interruptions. Graham argues that makers need at least one unbroken 90-minute block to do real work. Applied here, that block is your weekly batching session. Protect it the way Graham describes protecting maker time ,  it cannot happen in 20-minute gaps. James Clear (2018) supplies the behavioral underpinning: habit strength is determined by streak integrity more than daily volume. A day where you write one post and send one reply is worth more to your system than a skipped day followed by a compensatory burst.",
  ],
  instructions: [
    {
      title: "Commit to one of three template calendars (from Section 4)",
      body: "Before Day 1, write one sentence in your log naming which template you chose and why it fits your current constraints (time, access to ideas, energy pattern). Do not switch templates during the two weeks. If the chosen template breaks down, note that in your weekly summary and keep running the same template anyway. The data from a broken system is more instructive than a switch.",
      steps: [
        "Hub-and-spoke (Welsh-style): one newsletter or longform anchor per week, 10-15 short posts derived from it across the week.",
        "Theme days: Monday contrarian take, Tuesday personal story, Wednesday tactical tip, Thursday question, Friday roundup.",
        "Free-form daily 60-minute routine: write whatever is most alive that day, reply to 10 accounts, review your metrics for 15 minutes.",
      ],
    },
    {
      title: "Run the daily routine for 14 consecutive days",
      body: "Each day: 15 minutes writing and posting, 30 minutes replying to at least 10 accounts that are 10-100 times your size in the same niche, 15 minutes reviewing what you shipped and logging the numbers. Log your start time and end time. If you go over 60 minutes on a given day, note it ,  overruns are a signal that a part of the routine is under-scoped. The reply targets must be substantive: add a perspective, give a concrete example, or ask a specific question. “Great post!” does not count.",
    },
    {
      title: "Do one batching block per week",
      body: "Once per week, set a 90-minute timer and write 7-10 posts for the coming week. Schedule them in advance or save them as drafts. The block must be uninterrupted, per Graham’s Maker’s Schedule principle: no meetings on either side, no switching tasks partway through. Submit the drafts or scheduled-post screenshots as your batching artifact. The artifact must predate the posts going live ,  retroactive documentation is not accepted.",
    },
    {
      title: "Make one collaboration touch per week",
      body: "Each week, perform exactly one of the following and document who you reached, what you said or posted, and what happened. Choose the option that fits your current follower count and niche. These three options correspond to the audience-borrowing and mutual-amplification tactics covered in Weeks 3 and 4.",
      steps: [
        "Quote-post a peer in your niche with a substantive take that adds a new angle, not just agreement.",
        "DM a creator who is 5-20 times your size with a specific, genuine message referencing one piece of their work.",
        "Send a draft post to one peer and ask for hook feedback, then post the revised version.",
      ],
    },
    {
      title: "Track honestly",
      body: "Your daily log must include: date, time block start and end, number of posts shipped, number of replies sent, follows gained that day, and an energy rating from 1 to 10. At the end of each week (Day 7 and Day 14) write a weekly summary covering: what in the routine worked as designed, what felt forced or hollow, what you would change if you restarted the week, and whether the batching block happened on schedule. Honest summaries score higher than positive ones.",
    },
  ],
  deliverables: [
    "Daily log for 14 days (a spreadsheet or shared doc with one row per day).",
    "Two weekly summaries (one due at Day 7, one at Day 14), each in prose.",
    "Two batching-block artifacts (draft screenshots or scheduled-post exports, one per week).",
    "Documentation of your two collaboration touches (who, what channel, what you said, what happened).",
    "Final reflection (300 words minimum): is this system sustainable for the next 90 days? What specifically needs to change and why?",
  ],
  rubric: [
    { dimension: "14 days run, daily log complete", points: 30, notes: "Missing a day: -2 per day." },
    { dimension: "Routine executed (post + reply + review)", points: 20, notes: "Cumulative reply count must reach 100 or more across the two weeks." },
    { dimension: "Two batching blocks completed", points: 15, notes: "Real artifacts predating live posts. Retroactive documentation scores zero." },
    { dimension: "Two collaboration touches documented", points: 15, notes: "Specific and substantive. Generic quote-posts or one-word DMs score zero." },
    { dimension: "Honest weekly summaries", points: 10, notes: "Must identify at least one thing that felt forced. Purely positive summaries score 5." },
    { dimension: "Sustainability reflection", points: 10, notes: "Realistic and specific. Aspirational pledges without constraint analysis score 5." },
  ],
  hints: [
    "Start the daily routine at the same hour every day. Habit-stack it onto an existing trigger: coffee, the school drop-off, the start of lunch. Clear (2018) shows that context cues matter as much as intent.",
    "If a day is fully derailed, write one post and send one reply. A broken streak is harder to restart than a minimal day. Streak integrity beats volume (Clear, 2018).",
    "Batching works because it separates creation from distribution. Welsh’s system, as Basilio (2023) documents, produces 10-15 posts from a single hub piece per week. Draft into a queue; do not post live during the batch block.",
    "Per Graham (2009): protect your 90-minute batching block the way you would protect a flight departure. Schedule it Sunday evening or Monday morning before the week fills.",
    "If your replies feel performative, you picked the wrong targets. Re-pick: same niche, roughly 10-100 times your size, posting content you would read anyway.",
    "Koe (2022) structures the daily block as creation first, then engagement, then review. Do not reverse the order ,  starting with replies pulls you into reactive mode before you have shipped anything of your own.",
    "Optional: watch Justin Welsh systemize his content live on YouTube (https://www.youtube.com/watch?v=SkR3XB6Bvq8) or Dan Koe walk through a creator day (https://www.youtube.com/watch?v=9Gwp-bqzxwQ).",
  ],
  late: "Late submissions lose 10% per day, up to three days. HW4 depends on having a running system with logged data; submit even if late.",
};

export function Hw3() { return <ProjectPage spec={spec} />; }
export const hw3SearchBody = "HW3 weekly system daily routine batching collaboration creator network hub and spoke 14 days log reply sprint Welsh Koe Graham Basilio";
