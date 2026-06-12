import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Capstone: the $10K MRR operating plan",
  tagline:
    "Write the honest operating plan you will run from week 12 forward: where you are, the thesis, the math, sequenced bets with kill criteria, channel findings, and the weekly machine.",
  outDate: "End of week 8",
  dueDate: "End of week 12 (Friday)",

  overview: [
    "Everything in this course has been building toward one artifact: a written operating plan that a future cold session can open and run. Not a pitch deck, not a strategy document, not a reflection essay. A plan with real numbers, sequenced bets with explicit kill criteria, and a weekly cadence spec an agent can audit.",
    "You write the first draft at the end of week 8 using everything through the monetization phase. That draft has blank fields where weeks 9-11 results belong: channel experiment outcomes, measured viral coefficient, programmatic SEO baseline. Weeks 9-11 fill those fields. By week 12 you have a living document with no blank fields left.",
    "The plan lives in your langobee-intel repo as a Markdown file at the path `docs/operating-plan/10k-mrr.md`. It is version-controlled, diffable, and grep-able. Every Friday weekly review produces a commit to that file. The plan is the artifact the course ends with; the Friday machine is the habit that makes it compound.",
    "The stakes are real. Every number you write is sourced or explicitly flagged as an assumption. Every bet has a metric, a time box, and a kill criterion written before execution starts. Cohen's designing-backwards method (Cohen, 2013) gives the arithmetic skeleton; Bryar's weekly business review pattern (Chin, 2023) gives the cadence skeleton. Lavingia's account of what went wrong at Gumroad (Lavingia, 2019) is the before-picture: no weekly cadence that would have surfaced the plateau, no pre-committed kill criteria, no sequenced fallback bets. This plan is designed to be the opposite.",
  ],

  goals: [
    "Write an honest, de-alted snapshot of LangoBee as it stands at week 12, recording the fork decision from week 2 as settled and the June 2026 baseline as the starting line.",
    "State the thesis in one paragraph and name the north-star metric it implies.",
    "Build the MRR model from HW3 with real measured rates substituted where they exist and benchmark assumptions labeled clearly where they do not, sourced from the RevenueCat 2025 dataset (RevenueCat Research Team, 2025) and Rachitsky's churn benchmarks (Rachitsky, 2022a).",
    "Sequence the next 12 months into four ordered bets, each with its success metric, time box, and kill criterion, applying Duke's pre-committed exit-condition framework (Duke, 2023).",
    "Synthesize what weeks 9-11 proved about community, creator, and owned-loop channels and commit to ONE channel for the next quarter.",
    "Specify the Monday weekly machine: the exact cadence, the input metrics table, and the grading logic an agent could execute without interpretation.",
    "Write company-level kill criteria: the evidence, by what date, that would mean pivot or stop.",
  ],

  background: [
    "The arithmetic comes first. Cohen's designing-backwards method (Cohen, 2013) starts from the MRR target and derives the customer count, ARPU, and conversion rates required. At $7.99/month, $10K MRR requires roughly 1,252 paying subscribers. The RevenueCat 2025 benchmark puts median trial-to-paid conversion for education apps at 35-40% and year-one annual subscriber retention at 44.1% (RevenueCat Research Team, 2025). With a 5% monthly churn ceiling, Cohen's max-MRR formula (max MRR = new MRR / cancellation rate) shows that to sustain $10K MRR you need to add at least $500 in new MRR every month indefinitely. Skok's LTV/CAC framework (Skok, 2020) closes the loop: at $7.99/month and 5% monthly churn, LTV is $7.99 / 0.05 = $159.80 per subscriber, which sets the maximum defensible CAC at $53 (one-third of LTV). Every number in the plan must trace back to this arithmetic or be flagged as an assumption.",
    "The churn ceiling is the governing constraint, not traffic. Rachitsky documents the B2C benchmark: 3-5% monthly churn is good; below 2% is great (Rachitsky, 2022a). Carter's subscription value loop framework (Carter, 2024) argues that until month-6 retention exceeds 30%, acquisition spend compounds nothing because churned users erase gains. That is why sequencing matters: the retention bar comes before the first dollar, and the first dollar comes before scaling a channel. Walling's stair-step framework (Walling, 2015) makes this explicit as a three-step sequence with defined exit criteria at each step. The capstone operating plan must encode that sequence, not compress it.",
    "Kill criteria are not a safety net; they are the mechanism that makes the plan falsifiable. Duke's framework (Duke, 2023) requires pre-committed state-plus-date conditions written before execution starts, not after you see results. Setting a kill criterion after observing a miss is rationalization. The plan must contain two levels of kill criteria: bet-level criteria that terminate individual channel or feature bets, and a company-level criterion that would mean pivot or stop. Lavingia's reconstruction of Gumroad's errors (Lavingia, 2019) shows exactly what happens when neither level is present: stalled growth continues because no pre-committed number triggers a review.",
    "The weekly machine is what makes the plan run. Chin's account of Amazon's weekly business review (Chin, 2023) distinguishes controllable input metrics from output metrics and insists that the meeting discuss inputs, not outcomes. For a solo founder the cadence is lighter but the logic is identical: grade last week against pre-committed input targets, read the metrics table, place or kill the week's bets. An agent can audit a machine that outputs a dated, structured commit every Monday. It cannot audit a machine that outputs intentions.",
  ],

  instructions: [
    {
      title: "Section 1: where we are",
      body: "Write the honest June-plus-12-weeks snapshot. Start from the June 2026 baseline (103 registered profiles, ~50 real humans, 4 real weekly active users, $0 MRR, zero trial_started events), state what changed over the 12-week course, and record the fork decision as settled. The fork decision is the choice between premium-only curated library and freemium shorts feed; name the chosen path and the evidence that settled it. If the evidence is inconclusive, say so explicitly and state which assumption is load-bearing. De-alt every number: exclude founder and test accounts from all counts. If a number cannot be de-alted, flag it.",
      steps: [
        "Open PostHog and pull the 12-week cohort table, date-ranged from the course start date, with the founder account and known bot domains excluded.",
        "State the six-number snapshot: registered users (de-alted), weekly active users (de-alted), monthly active users (de-alted), activation rate, trial_started events, and MRR.",
        "Record the fork decision: which path did the data support, what was the deciding evidence, and what would have changed the call.",
        "Write this section in past tense ('as of week 12, LangoBee had...'). No hedging. Flag every estimate with '(est.)' and state the measurement gap.",
      ],
    },
    {
      title: "Section 2: the bet",
      body: "Write the thesis in one paragraph. The thesis names the user, the problem, the mechanism, and why LangoBee is better placed than LingQ or Dreaming Spanish to solve it. Then name the north-star metric: the single number whose weekly movement is the leading indicator that the thesis is working. Rachitsky's subscription value loop (Carter, 2024) identifies three candidate NSM categories for a consumer subscription: value creation, value delivery, and value capture. Pick one and explain why the others do not fit your thesis at this stage.",
      steps: [
        "Write the thesis paragraph: 'LangoBee bets that [user] who [problem] will pay for [mechanism], and wins because [structural advantage].'",
        "Name the north-star metric and its measurement method.",
        "List the two strongest alternative NSMs you considered and the one reason each was rejected.",
        "Confirm the NSM is measurable with existing PostHog instrumentation, not estimated.",
      ],
    },
    {
      title: "Section 3: the math",
      body: "Build the MRR model from HW3. The model has four inputs: monthly new visitors, visitor-to-signup conversion, trial-to-paid conversion, and monthly churn. Where you have measured rates from the 12-week period, fill them in. Where you do not, use the RevenueCat 2025 education benchmark (RevenueCat Research Team, 2025) or the Rachitsky B2C churn benchmark (Rachitsky, 2022a) and label the cell 'benchmark assumption.' The model must output: steady-state MRR at current inputs, months to $10K MRR at current growth rate, and the single input that, if doubled, most reduces time to $10K. Apply Cohen's max-MRR formula to stress-test the ceiling (Cohen, 2025).",
      steps: [
        "Create or update the HW3 spreadsheet with a 'measured vs assumption' column for each of the four inputs.",
        "Fill in measured rates from PostHog: visitor-to-signup, activation rate (use as a proxy for trial intent until trial_started events exist).",
        "Fill in benchmark rates from RevenueCat 2025 for trial-to-paid and year-1 churn where you have no data.",
        "Run Cohen's max-MRR formula: max MRR = (monthly new paid) / (monthly churn rate as a decimal). State whether $10K MRR is achievable at current inputs.",
        "Name the highest-impact input: the one rate that, if moved from its current level to the benchmark 'great' threshold, reduces months-to-$10K the most.",
      ],
    },
    {
      title: "Section 4: sequenced bets",
      body: "Write the next 12 months as four ordered bets. The sequence is fixed by the logic of the business: retention bar first, first dollar second, one repeatable channel third, then scale. Each bet must have a success metric, a time box (start date, end date), and a kill criterion in the form 'if [metric] is below [number] on [date], I will [specific action].' Apply Walling's stair-step exit-criteria discipline (Walling, 2015): each bet has an explicit condition that qualifies you to move to the next step. Do not compress steps. If retention is not cleared, the monetization bet does not start.",
      steps: [
        "Write Bet 1 (retention bar): the metric that defines 'retention is cleared,' the time box, and the kill criterion.",
        "Write Bet 2 (first dollar): the trial-to-paid conversion target, the time box, and the kill criterion.",
        "Write Bet 3 (one repeatable channel): the channel, the metric that defines 'repeatable,' the time box, and the kill criterion.",
        "Write Bet 4 (scale): the traffic or MRR growth rate target, the time box, and the kill criterion.",
        "For each bet, confirm the kill criterion is pre-committed and measurable with existing instrumentation before execution starts.",
      ],
    },
    {
      title: "Section 5: channel plan",
      body: "Synthesize what weeks 9-11 proved. Each of the three channel types (community, creator, owned loop) ran at least one experiment. State the result of each: the input, the output, the conversion rate, and whether the channel is worth the next quarter. Then commit to ONE channel for the next quarter and state the metric that would cause you to switch. Walling's stair-step framework (Walling, 2015) requires that you validate one channel before layering a second: one channel gets full attention this quarter, the others go to maintenance or stop.",
      steps: [
        "Summarize the week 9 community experiment: channel, posts or outreach units, signups attributed, conversion rate.",
        "Summarize the week 10 creator experiment: outreach sent, responses, agreed deals, projected reach.",
        "Summarize the week 11 owned-loop experiment: pages published, organic impressions, signups attributed.",
        "Pick ONE channel for Q4. Write the argument in two sentences: why this channel over the other two at this stage.",
        "State the kill criterion for the chosen channel: 'If [metric] is below [number] on [date], I switch to [alternative].'",
      ],
    },
    {
      title: "Section 6: the weekly machine",
      body: "Write the Monday cadence spec. The spec has three parts: grade last week (did each input metric hit its pre-committed target, yes or no), the input metrics table (the six to eight numbers you read every Monday), and place the bet (what one action you commit to this week, with a Friday check-in). The spec must be specific enough that an agent can execute it without asking you for clarification. It should produce a dated, structured commit to the langobee-intel repo every Monday. Apply Chin's input-over-output discipline (Chin, 2023): the metrics table lists only controllable inputs, not revenue or DAU directly.",
      steps: [
        "List the six to eight input metrics that go in the Monday table. Each metric must be: controllable (you can act on it this week), measurable without human judgment, and leading (it moves before MRR moves).",
        "Write the grading rubric: for each metric, state the weekly target and the label ('on track' vs 'off track') that fires if the target is missed.",
        "Write the bet-placement format: 'This week I will [specific action]. The metric I am moving is [X]. I will check it on [day].'",
        "Write the commit message template for the Monday review: one line of status, one line of this week's bet.",
        "Run the machine once end-to-end before submitting the capstone: produce the week 12 Monday commit to langobee-intel.",
      ],
    },
    {
      title: "Section 7: kill criteria for the thesis",
      body: "Write the company-level kill criteria. These are the pre-committed conditions that would mean pivot or stop, not just kill a single bet. Apply Duke's state-plus-date format (Duke, 2023): each criterion names a specific metric, a specific threshold, and a specific date. The plan must contain at least two: one that triggers a thesis pivot (change the user, the mechanism, or the pricing model) and one that triggers a stop (shut down or hand off). The stop criterion is not a failure; it is the honest acknowledgment that the thesis is falsifiable. Without it, the plan is not falsifiable.",
      steps: [
        "Write the pivot trigger: 'If [metric] is below [number] on [date], the thesis is falsified and I will [specific pivot].'",
        "Write the stop trigger: 'If [metric] is below [number] on [date] after the pivot has been attempted, I will stop and [specific exit action].'",
        "Confirm both criteria are measurable with existing instrumentation.",
        "Confirm the pivot trigger fires before the stop trigger, leaving time to execute the pivot and observe its results.",
        "Stress-test both criteria against the max-MRR formula (Cohen, 2025): is the ceiling implied by current inputs compatible with the thesis, or does the arithmetic alone trigger the pivot criterion?",
      ],
    },
  ],

  deliverables: [
    "A Markdown file at `docs/operating-plan/10k-mrr.md` in the langobee-intel repo, committed and dated. The file must contain all seven sections. Every number is sourced or flagged as an assumption. Every bet has a kill criterion. The document fits in one sitting's read (aim for 2,000-3,500 words).",
    "A week 12 Monday commit to the same file that runs the weekly machine once end-to-end: the graded last-week table, the input metrics for week 12, and the week-12 bet.",
    "A one-paragraph submission note (in your course submission) naming the commit SHA of the final plan, the six input metrics in the Monday table, and the single highest-impact input from the MRR model.",
  ],

  rubric: [
    {
      dimension: "Arithmetic correctness",
      points: 30,
      notes:
        "MRR model closes: inputs multiply to the stated steady-state MRR. Max-MRR formula applied correctly. Every number is sourced or flagged as an assumption. No rounding errors that change the implied months-to-$10K by more than two months.",
    },
    {
      dimension: "Sequencing logic",
      points: 30,
      notes:
        "Four bets are in the correct order (retention bar before first dollar before repeatable channel before scale). No bet starts before its predecessor's exit criterion is met. Time boxes are non-overlapping and realistic for a one-person operation.",
    },
    {
      dimension: "Falsifiability",
      points: 30,
      notes:
        "Every bet has a kill criterion in the state-plus-date format. Company-level pivot and stop criteria present. Both are measurable with existing PostHog instrumentation. The stop criterion fires after the pivot has had time to run.",
    },
    {
      dimension: "Weekly machine is executable",
      points: 10,
      notes:
        "The Monday cadence spec is specific enough to execute without interpretation. The week 12 Monday commit exists in langobee-intel with the correct format. Input metrics are controllable and leading, not output metrics.",
    },
  ],

  hints: [
    "Start with the arithmetic in section 3 before writing sections 2 or 4. The math constrains the thesis and the bets. If the model shows that $10K MRR requires 1,252 subscribers and your current conversion funnel produces two paid users per month, the sequenced bets must address that gap explicitly. Writing the thesis before the math produces aspirational prose; writing the thesis after the math produces a plan (Cohen, 2013).",
    "The churn ceiling governs everything. At 5% monthly churn, the max-MRR formula shows your ceiling at current acquisition rates. If the ceiling is below $10K, no channel bet overcomes it: you must move retention first. Rachitsky documents that early churn (months 1-3) runs 5-50% and reflects activation failure, not product decay (Rachitsky, 2022a). If your measured month-1 churn is above 10%, section 4's Bet 1 is not 'improve something vague'; it is a specific activation fix with a specific target.",
    "A kill criterion that says 'if it doesn't work' is not a kill criterion. Duke's framework is exact: a specific number, a specific date, a specific reversion action (Duke, 2023). If you find yourself writing 'if progress is slow,' go back and ask: what number would a stranger use to call this slow? That number is the kill criterion.",
    "The channel plan in section 5 requires week 9-11 results. If you are writing the week-8 draft before those experiments have run, leave explicit blank fields: '[Week 9 community experiment result]', '[Week 10 creator outreach result]', '[Week 11 SEO baseline]'. Filling blanks with your prior beliefs defeats the purpose of running the experiments.",
    "The weekly machine in section 6 must be boring to run. If it takes more than 15 minutes every Monday, it will not survive the first month after the course ends. The value is in the commit discipline, not the ritual. Six input metrics, one bet, one commit. Chin's account of Amazon's WBR confirms: the meeting is short because the metrics table does the work before anyone speaks (Chin, 2023).",
    "The stop criterion is not pessimism. It is the structural guarantee that the plan is falsifiable. Lavingia's reconstruction of Gumroad (Lavingia, 2019) shows the cost of omitting it: years of continued operation past the point where the thesis was clearly not working, because no pre-committed number forced the question. Write the stop criterion before you close the document.",
    "Sections 1 and 7 are the bookends that make the plan honest. Section 1 names where you actually are, not where you hoped to be. Section 7 names the conditions under which the whole thesis fails. A plan that is honest at both ends is one you can run without flinching every Monday.",
  ],

  late:
    "The week-8 draft (sections 1-4 with benchmark assumptions in section 3, blank fields in sections 5-6) is due at the end of week 8. The final plan with all fields filled is due at the end of week 12 (Friday). One week late: maximum 75 points. Submissions more than one week past the final due date are not accepted. The week-12 Monday machine commit must exist in the langobee-intel repo by the Friday due date to count.",
};

export function CapstonePage() {
  return <ProjectPage spec={spec} />;
}

export const capstoneSearchBody =
  "Capstone operating plan 10k MRR langobee thesis north-star metric MRR model trial-to-paid churn ceiling sequenced bets kill criteria retention bar first dollar repeatable channel scale channel plan community creator owned loop weekly machine Monday cadence input metrics falsifiability arithmetic correctness sequencing logic pivot stop criterion langobee-intel repo living document week 8 week 12 synthesis";
