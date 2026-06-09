import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Capstone — Your 90-day playbook to 10,000 followers",
  tagline: "The plan you commit to running after this course ends. Phased, specific, and grounded in YOUR Week 5 data.",
  outDate: "Week 4",
  dueDate: "Week 6 (presented at demo day, finalized for class channel by end of week)",
  overview: [
    "HW3 ran the system for two weeks. HW4 tested one hypothesis for 30 days. The capstone does neither of those things: it builds the complete 90-day roadmap you will execute after the course ends, with three distinct milestone phases, a concrete weekly system, and 30 post titles planned at the format level. It synthesizes every framework, metric, and habit you have encountered in Weeks 1 through 5 into a single document you can open on the morning after Week 6 and actually run. It is due Week 6, presented live at demo day, and revised with peer feedback before being posted to the class channel.",
    "The one rule that separates a useful playbook from an aspirational one: every number in the document must trace back to your real data from HW1 through HW4. Your 30-day follower target is not the number you wish for; it is your HW3 weekly growth rate multiplied by 4.3. Your monetization path is not the one that sounds most lucrative; it is the one your current trust battery (Clouse, 2023) can actually support. Your highest-risk assumption is not &ldquo;I might lose motivation&rdquo;; it is the specific strategic bet your playbook depends on that could be wrong. Grounding every section in real numbers is what turns a wish list into a plan.",
  ],
  goals: [
    "Define realistic 30/60/90-day follower targets grounded in YOUR baseline growth rate from HW3.",
    "Specify the weekly system (daily routine, batching block, collaboration cadence) you commit to running.",
    "Plan the first 30 days of posts at the title-and-format level: 30 titles, each with hook pattern, format, posting time, and topic.",
    "Identify which monetization path (newsletter, paid product, sponsorship, community) best fits your audience&rsquo;s current trust state.",
    "Surface the single highest-risk assumption in your playbook and name the metric that will tell you if it is wrong.",
  ],
  background: [
    "Welsh (2023) maps creator growth across five phases, each with a different primary constraint: phase 1 (0&ndash;1k) is a discovery problem, phase 2 (1k&ndash;10k) is a trust problem, and phases 3 through 5 are leverage problems. Most learners in this course are in phase 1 or early phase 2, which means the bottleneck is reaching new people consistently, not monetizing the ones already there. Barry (2019, 2023) describes a flywheel in which audience borrowing from larger accounts compounds over time: a reply that surfaces in a large account&rsquo;s thread reaches an audience that already trusts the context, converting at higher rates than cold discovery. Jin (2020) reframes the target from &ldquo;10,000 followers&rdquo; to &ldquo;100 true fans&rdquo;: a small group of highly engaged readers who buy everything you make is more durable than a large group that follows passively. Clouse&rsquo;s trust battery (2023) operationalizes this: every follower arrives with a low-charge battery, and each piece of original, useful work charges it a small amount; each self-promotional post drains it. A monetization decision that requires high trust from a low-charge battery will fail regardless of audience size. Newton&rsquo;s retrospective on Platformer (2025) provides the long-run evidence: subscriber loyalty at scale was earned by original reporting no one else was doing, not by audience size accumulated.",
  ],
  instructions: [
    {
      title: "Set your phased milestones (0&rarr;1k, 1k&rarr;5k, 5k&rarr;10k)",
      body: "Before you pick numbers, re-read Welsh (2023) on phase 1 timelines. Most learners overshoot by 2&times; or more because they assume growth is linear. It is not: early growth is slow, then it compounds once the trust battery across a small audience is charged enough to produce organic referrals.",
      steps: [
        "30-day target: take your HW3 net-follows-per-week average, multiply by 4.3, and add your current count. That is your honest 30-day target. If that number is less than 50, state it anyway.",
        "60-day target: estimate the phase shift you expect. If you hit your 30-day target, which leading indicator (profile-visit-to-follow rate, impressions per follower, or reply engagement rate from HW4) tells you that the flywheel is beginning to compound? Set the 60-day target to reflect a realistic acceleration, not a linear extrapolation.",
        "90-day target: 10,000 is aspirational for most accounts starting under 500 followers. State your honest 90-day target and the specific condition (not wishful thinking) under which 10,000 would be reachable from your starting point.",
      ],
    },
    {
      title: "Commit to a weekly system",
      body: "Take the calendar you ran in HW3 and finalize it for the next 90 days. Name the template (hub-and-spoke, theme days, or free-form daily). State the specific day and time of your weekly batching block, the daily routine length, and your one collaboration touch per week. If HW3 showed that a piece of the system broke down, fix it here with a specific structural change, not a pledge to try harder.",
      steps: [
        "Daily routine: start time, length in minutes, three tasks in order (creation, engagement, review).",
        "Weekly batching block: day, start time, duration. State where you will write (tool and location matter for habit-stacking).",
        "Collaboration cadence: one touch per week. Name the type (quote-post, DM, peer-review swap) and the target tier (follower count range).",
        "Monthly retrospective: a 30-minute slot on the last Sunday of each month. Review your signal metrics from HW4 against your phase targets and decide what to adjust.",
      ],
    },
    {
      title: "Plan first 30 days at the title level",
      body: "Write 30 post titles. A mix of singles and threads is expected; aim for at least 6 threads and 24 singles, or adjust if your HW3 data shows a different format performing better. For each title, specify four things.",
      steps: [
        "Hook pattern: question, bold claim, contrarian take, specific number, personal story opener, or how-to.",
        "Format: single post, thread (state approximate length), quote-post of a specific account type, or poll.",
        "Target posting time: specific hour and timezone, drawn from your HW3 timing data.",
        "Topic: one phrase that names the specific subject, narrow enough that you could write the post right now.",
      ],
    },
    {
      title: "Pick your monetization path",
      body: "From Welsh&rsquo;s 5 phases (2023), Barry&rsquo;s ladders (2019), Jin&rsquo;s 100 fans (2020), and Clouse&rsquo;s trust battery (2023): choose one monetization path that fits where your audience is now, not where you hope it will be at 10k. State the first product or offer you would ship and the minimum trust-battery charge you think it requires.",
      steps: [
        "Newsletter: low barrier, builds direct relationship, works at 500&ndash;1k followers if the list converts. First product: a paid issue or a low-price PDF.",
        "Paid product (course, template, guide): requires demonstrated expertise and a warm audience. Welsh (2023) puts the reliable launch floor at 5k engaged followers for most niches.",
        "Sponsorship: requires consistent impressions and a trackable niche. Barry (2023) documents that sponsors pay for audience quality, not raw size, so niche clarity from HW1 matters more here than follower count.",
        "Community (cohort, Discord, membership): requires the highest trust battery charge of the four. Clouse (2023) and Jin (2020) both argue this path works best when 100 people already know and trust you specifically, not just your content.",
      ],
    },
    {
      title: "Stress-test your plan",
      body: "Name one assumption your playbook depends on that could be wrong. Not &ldquo;I might not stay consistent&rdquo; (that is a discipline issue, not a strategic assumption). The assumption should be specific to your strategy: a claim about your audience&rsquo;s behavior, your niche&rsquo;s growth ceiling, or your format&rsquo;s performance. Then state the metric that would tell you the assumption is wrong, and describe what you would do instead.",
    },
  ],
  deliverables: [
    "90-day playbook document (4&ndash;6 pages or equivalent slides). Five sections: phased targets, weekly system, first 30 days of posts (with the four-field format for each), monetization path with justification, and highest-risk assumption with contingency.",
    "Live demo presentation in Week 6 section (5 minutes). You will walk the room through your targets, your weekly system, and one post from your 30-day plan.",
    "Peer-review notes from demo day: at least two pieces of written feedback you received, with the name of the reviewer.",
    "Revised playbook reflecting the peer feedback, posted to the class channel by end of Week 6. The revision must change at least one substantive thing in response to specific feedback received.",
  ],
  rubric: [
    { dimension: "Targets are realistic and grounded in your data", points: 20, notes: "30/60/90 numbers map back to HW3 baseline. Aspirational numbers without data trail score 10." },
    { dimension: "Weekly system is concrete and sustainable", points: 15, notes: "Specific times, batching block named, collaboration cadence defined. Vague pledges score 5." },
    { dimension: "First 30 days of posts planned at title level", points: 20, notes: "30 titles, each with hook pattern + format + time + topic. Incomplete tables lose 1 point per missing field." },
    { dimension: "Monetization choice justified", points: 15, notes: "Tied to specific sources and your audience&rsquo;s current trust state, not future aspirations." },
    { dimension: "Highest-risk assumption named honestly", points: 10, notes: "Not &ldquo;I might not stay consistent.&rdquo; Specific to your strategy, with a named metric and a contingency." },
    { dimension: "Peer review and revision quality", points: 20, notes: "At least two pieces of reviewer feedback documented. Playbook shows real changes, not cosmetic edits." },
  ],
  hints: [
    "Re-read Welsh (2023) on the 5 phases before setting targets. The phase 1 timeline for most accounts starting under 200 followers is 3&ndash;6 months to 1k, not weeks. Set the number your data supports.",
    "Jin (2020): 100 paying superfans at $1,000 per year is the same revenue as 1,000 casual buyers at $100 per year, and in most niches the 100 superfans are easier to reach. Your monetization math should run both scenarios.",
    "Clouse (2023): do not pick a monetization path that requires a trust-battery level you have not yet earned. A community launch at 800 followers with a low-engagement rate will damage the battery, not charge it.",
    "Newton (2025): subscriber loyalty at scale came from original work that no other account was doing. Before finalizing your 30-day post plan, ask which 5 of the 30 posts only you could write. Put those five in weeks 1 and 2.",
    "Run the playbook past one person outside this class before your demo day presentation. If they cannot paraphrase your strategy back to you in two sentences, simplify. Complexity that requires explanation is a risk, not a feature.",
    "Optional: Welsh&rsquo;s &ldquo;8M Business with 0 Employees&rdquo; (~43 min, https://www.youtube.com/watch?v=ZkwYxYfkfYU) covers the full monetization ladder from first newsletter issue to paid product. Barry&rsquo;s &ldquo;Becoming a Billion-Dollar Creator&rdquo; (~50 min, https://www.youtube.com/watch?v=v-xAQXohY5I) details the flywheel mechanics for audience borrowing at scale. Watch both before finalizing your monetization section.",
  ],
  late: "Late submissions lose 10% per day. If you submit on time but did not participate in peer review at demo day, your score is capped at 80%. The peer review and revision cycle is not optional extra credit; it is half the capstone.",
};

export function HwCapstone() { return <ProjectPage spec={spec} />; }
export const hwCapstoneSearchBody = "Capstone 90-day playbook 10000 followers phased milestones weekly system post plan monetization trust battery Welsh Barry Jin Clouse Newton peer review demo day";
