import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW4, Your thirty-day growth experiment",
  tagline: "One specific hypothesis. One signal metric. Thirty days to find out.",
  outDate: "Week 5",
  dueDate: "Week 6 (design + first week’s data)",
  overview: [
    "Weeks 1 through 4 asked you to run a system someone else designed and proved out. This assignment asks you to move one step further: form a specific hypothesis about your own account, build a fair test around it, and run the first seven days. The design and the week-1 data are due in Week 6. You then continue days 8 through 30 on your own and report results back to the class channel after the course ends. Think of this as a transition from following a playbook to writing one.",
    "To make the hypothesis concrete: if your HW3 data shows an impressions-per-follower ratio of 1.4, and you suspect that posting between 7-8 AM Eastern instead of noon will raise it to 2.0, that is a testable claim. If your profile-visit-to-follow rate (Statweestics, 2026) is sitting at 1.8% and you believe threading two posts per week instead of zero will lift it to 3%, that is a testable claim. If your reply-to-target tactic is generating 0.3 net follows per reply session and you think switching target accounts to a more engaged sub-niche will double that, that is a testable claim. All three are specific, measurable, and grounded in your existing data from HW3 rather than guesswork.",
  ],
  goals: [
    "Form a hypothesis that names a single change, a signal metric, a real baseline, and a realistic target.",
    "Choose an A/B or pre-post comparison structure and define explicit stopping and kill rules.",
    "Calculate your current impressions-per-follower and profile-visit-to-follow rates from HW3 data as your baseline.",
    "Execute the first seven days of the experiment and log every day honestly.",
    "Write a week-1 retrospective that leads to an explicit continue, adjust, or kill decision.",
    "Distinguish vanity metrics from signal metrics when someone else describes their results to you.",
  ],
  background: [
    "Eric Ries’s distinction between vanity metrics and actionable metrics (2009) is the foundation of this assignment. Total follower count and total likes are vanity metrics: they go up almost regardless of what you do, and they tell you nothing about whether your specific change caused anything. Impressions per follower and profile-visit-to-follow rate are actionable metrics because they react to specific inputs and reveal whether the audience you already have is amplifying your work. Lenny Rachitsky’s framing of the North Star Metric, or NSM (2021), sharpens this: every account at every stage has one metric that, if it moves in the right direction, predicts downstream growth better than anything else. For most accounts in the 0-1k phase, that NSM is profile-visit-to-follow rate, because it reflects whether new visitors are finding your content compelling enough to commit. Statweestics (2026) documents that accounts with a profile-visit-to-follow rate above 3% grow roughly twice as fast as accounts at or below 1.5%, holding posting frequency constant. Welsh (2023) maps this onto a funnel: impressions drive profile visits, profile visits drive follows, follows drive trust, trust drives revenue. A 30-day experiment that moves one metric in that funnel is the simplest honest test of whether you understand your own account.",
  ],
  instructions: [
    {
      title: "Pick ONE specific hypothesis",
      body: "Format: “Doing X for 30 days will move metric Y from baseline B to target T.”",
      steps: [
        "X = a single change. Options: shift posting time by two or more hours, change format mix (e.g., from 100% singles to 30% threads), switch your hook pattern (e.g., from question hooks to bold-claim hooks), change your reply targets to a different sub-niche, or add one collaboration touch per week. Pick exactly one.",
        "Y = a signal metric. Acceptable choices: impressions per follower, profile-visit-to-follow rate, net follows per week, or replies received from target-tier accounts. Not acceptable: total follower count, total impressions, total likes, or total retweets.",
        "B = your real baseline. Pull the number from your HW3 daily log. If HW3 data is sparse, use the last 14 days from your native X analytics. State the date range explicitly.",
        "T = your target. State a number and justify it in one sentence. “I expect 2.0 because Statweestics (2026) reports that accounts in my niche average 1.9 at this follower count” is a justification. “I expect it to be higher” is not.",
      ],
    },
    {
      title: "Design the comparison",
      body: "Either A/B (alternate days or alternate weeks between control and treatment) or pre-post (baseline = HW3 weeks 1-2, treatment = the next 14 days). Pre-post is simpler; A/B is cleaner. Both are acceptable.",
      steps: [
        "State which approach you chose and why it fits your posting volume. Pre-post requires at least 7 days of baseline data from HW3 and at least 14 days of treatment. A/B alternating weeks requires at least 14 days of each condition to produce a readable signal.",
        "Write your stopping rule: “I will call this a win if Y reaches T by day 21. If Y has not moved in the target direction by day 21, I will call it flat.”",
        "Write your kill switch: the condition under which you abandon the experiment early to protect your account. Example: “If impressions per follower drops more than 40% below baseline for three straight days, I stop and revert.” The kill switch protects you from running a harmful change all the way to day 30 out of sunk-cost commitment.",
      ],
    },
    {
      title: "Run the first 7 days",
      body: "Execute the experiment as designed. Each day, log the following in a single row: date, posts shipped, the value of your signal metric for that day, and any deviation from the plan (none is fine; forced breaks or schedule changes must be noted). A deviation is not a failure; undocumented deviations are a data integrity problem.",
    },
    {
      title: "Run the week-1 retrospective",
      body: "At the end of day 7, write a structured retrospective of 300 to 500 words covering four things: (1) your signal metric’s current value versus your target, (2) one observation that surprised you, (3) one thing you would change about the experiment design now that you have real data, and (4) your explicit decision: continue as designed, adjust the treatment (explain what changes and why), or kill (explain what the data showed and what you would test next). Ries (2009) calls this the “pivot or persevere” decision. Name it clearly.",
    },
  ],
  deliverables: [
    "Experiment design document: hypothesis in X→Y from B to T format, comparison structure (A/B or pre-post), stopping rule, and kill switch.",
    "Baseline data sheet pulled from HW3 (or last 14 days of native X analytics), with date range labeled.",
    "Seven-day execution log: one row per day with posts shipped, signal metric value, and deviations.",
    "Week-1 retrospective (300-500 words): signal metric value versus target, one surprise, one design change you would make, and an explicit continue/adjust/kill decision.",
    "Written commitment (one sentence) to continue to day 30 and post results to the class channel after the course ends.",
  ],
  rubric: [
    { dimension: "Hypothesis is specific and testable", points: 25, notes: "X is one change, Y is named, B is a real number from real data, T has a justification." },
    { dimension: "Metric is a signal metric, not vanity", points: 20, notes: "Total followers or total likes as Y scores zero on this dimension." },
    { dimension: "Comparison structure is clean (stopping + kill rules)", points: 15, notes: "Both rules are concrete. Vague rules (“if it’s not working”) score 5." },
    { dimension: "Week-1 execution logged honestly", points: 20, notes: "Deviations documented, not hidden. A perfect log with no deviations is fine if credible." },
    { dimension: "Retrospective leads to a decision", points: 20, notes: "Continue, adjust, or kill is stated explicitly with evidence from the log." },
  ],
  hints: [
    "Ries (2009): a metric is actionable only if a specific action reliably causes it to change. Before you commit to your Y, ask: “What exactly would I do differently if this number went up?” If you can’t answer, pick a different metric.",
    "Rachitsky (2021): most early-stage accounts have more than one plausible NSM. Pick the one that is closest to the revenue outcome you care about. Profile-visit-to-follow rate sits one step upstream of follower count; net follows per week sits two steps upstream of reach. The closer to the outcome, the more signal.",
    "Statweestics (2026): the median profile-visit-to-follow rate across 4,200 surveyed accounts in the 0-5k range was 1.7%. If your baseline is below 1%, the bottleneck is almost certainly the profile itself, not the posting frequency. In that case, re-running HW1 on your bio before starting the experiment is a legitimate pre-treatment.",
    "Welsh (2023): treat day 7 as a genuine decision point, not a formality. If the signal metric moved in the wrong direction by day 7, that is real information. An early adjust is not a failure; it is the experiment doing what it is supposed to do.",
    "Kill switches feel pessimistic to write and valuable to have. The sunk-cost pull at day 25 of a flat experiment is real. Write the kill condition at the start, when you are still objective.",
    "Optional: Kallaway walks through a practical growth experiment on X in “Twitter Marketing: How To Grow An Audience On X In 2026” (~18 min, https://www.youtube.com/watch?v=7hqGOI5wba8). Watch before finalizing your hypothesis design.",
  ],
  late: "Late submissions lose 10% per day, up to three days.",
};

export function Hw4() { return <ProjectPage spec={spec} />; }
export const hw4SearchBody = "HW4 thirty-day growth experiment hypothesis signal metric impressions per follower profile visit to follow A/B test pre-post comparison stopping rule kill switch week-1 retrospective Ries vanity metrics Rachitsky NSM Statweestics Welsh funnel";
