import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 5 section — Design one A/B test",
  tagline:
    "Pick one thing to test, run the sample-size math on paper, then either ship the test or write a 'why I&rsquo;m not testing this' memo.",
  outDate: "Week 5",
  overview: [
    "A/B testing is not about having a lot of traffic. It is about having enough traffic to detect the change you care about, with the confidence level you require, before you run out of time. This section asks you to do that math on paper for one real hypothesis from your own product.",
    "If the math shows you have enough traffic, you will set up the test using a feature flag and a pre-registered decision rule. If the math shows you do not have enough traffic, you will write a 500-word memo explaining why, what alternative you will run instead (painted-door test, qualitative interview, or no test at all), and what evidence threshold would change your mind.",
    "The deliverable is either a live test or a memo, not both. Section time is for doing the arithmetic together, comparing notes, and catching mistakes before you ship anything.",
  ],
  goals: [
    "Apply the sample-size heuristic: n per variant = 16 × (baseline rate × (1 - baseline rate)) / MDE², where MDE is the minimum detectable effect expressed as an absolute change in the metric",
    "State a clear hypothesis in the form: changing X will move metric Y from Z% to Z+delta% because of reason R",
    "Decide whether to run an A/B test, a painted-door test, or neither, with a written rationale",
    "If running an A/B test: define the control, the variant, the primary metric, the pre-registered decision rule, and the earliest end date",
    "If not running an A/B test: produce a 500-word memo with the sample-size math shown and an alternative evidence plan",
  ],
  background: [
    "The sample-size formula in long form: you need enough users in each variant to detect the change you care about (the minimum detectable effect, or MDE) at a false-positive rate of 5% and a false-negative rate of 20%. A rough closed-form approximation is n per variant = 16 × variance / MDE², where variance = baseline × (1 - baseline) for binary metrics like conversion rate. For example: if your activation rate is 20% (0.2) and you want to detect a 4 percentage-point improvement (MDE = 0.04), then n = 16 × (0.2 × 0.8) / (0.04²) = 16 × 0.16 / 0.0016 = 1,600 users per variant, or 3,200 total.",
    "The peeking problem: if you look at results before you have your target sample size and stop when p &lt; 0.05, your actual false-positive rate is much higher than 5%. The fix is simple: decide your end date before you start, and do not call the test early unless you have a pre-registered stopping rule. Most solo founders should run tests for a minimum of one week (to cover day-of-week effects) and a maximum of four weeks.",
    "Painted-door tests are the low-traffic alternative. A painted-door test shows users a button, page, or option that does not yet exist and measures click-through rate as a proxy for demand. It is not an A/B test: it has no control group and proves nothing about causal effect. But it is faster and cheaper than a full build, and it is honest with users if you follow up the click with a 'coming soon' message or a waitlist.",
  ],
  instructions: [
    {
      title: "Write your hypothesis",
      body: "State the hypothesis in one sentence: changing X will move metric Y from Z% to Z+delta% because R. Be specific about all four parts. 'Improving the onboarding flow will increase activation' is not a hypothesis. 'Adding a progress bar to the onboarding wizard will increase activation rate from 18% to 23% because users currently abandon when they cannot see how many steps remain' is a hypothesis.",
    },
    {
      title: "Compute your required sample size",
      body: "Use the heuristic: n per variant = 16 × (baseline × (1 - baseline)) / MDE². Fill in your baseline metric (the current value from your analytics), your MDE (the smallest effect that would actually change your decisions), and solve for n. Then divide n by your daily or weekly unique users to get the run time in days or weeks. Write the arithmetic out step by step. If you are unsure of your baseline, use your best estimate and note the uncertainty.",
      steps: [
        "Baseline rate: the current value of your primary metric (write the number and where it came from)",
        "MDE: the smallest change worth acting on, as an absolute percentage point change",
        "Variance: baseline × (1 - baseline)",
        "n per variant = 16 × variance / MDE²",
        "Total n = 2 × n per variant",
        "Run time = total n / (weekly unique users exposed to the test)",
      ],
    },
    {
      title: "Make the ship-or-memo decision",
      body: "If run time is 4 weeks or fewer, proceed to step 4 (ship the test). If run time exceeds 4 weeks, or if your weekly traffic is below 200 unique users, skip to step 5 (write the memo). There is no shame in writing the memo: pretending you have enough traffic to run a valid A/B test when you do not produces misleading results and wastes time.",
    },
    {
      title: "Ship the test (if traffic threshold met)",
      body: "Set up the test using a feature flag in PostHog, Statsig, or your own config table. Define and write down before you touch code: the control (what users see today), the variant (the single change), the primary metric (one number), the minimum run time (at least 7 days, enough to cover a full week cycle), and the decision rule (you will call variant the winner only if p &lt; 0.05 AND the effect is at least MDE in size at the end of the run period). Do not read results before the run period ends.",
    },
    {
      title: "Write the 'why I&rsquo;m not testing this' memo (if traffic threshold not met)",
      body: "The memo must include: the hypothesis, the sample-size arithmetic showing the required run time, a statement of why that run time is impractical, a description of the alternative evidence you will gather instead (painted-door test with a specific click metric, qualitative interviews with a specific question, or a decision to ship the change without a test), and the evidence threshold that would convince you to reverse the change if it was wrong. 500 words minimum. This memo is a legitimate deliverable. Writing it out protects you from the expensive mistake of running an underpowered test and believing the result.",
    },
    {
      title: "Peer review in section",
      body: "Swap your hypothesis + arithmetic with the person next to you. Check: is the baseline metric a real number from their analytics or a guess? Is the MDE the smallest effect that would actually change their decisions, or did they pick a large MDE to make the test shorter? Is the decision rule written down before the test runs? Give one piece of specific feedback. Revise before you leave.",
    },
  ],
  deliverables: [
    "Hypothesis in one sentence: X, Y, Z%, delta%, reason R",
    "Sample-size arithmetic with all steps shown: baseline, MDE, variance, n per variant, total n, run time in weeks",
    "Decision: ship test or write memo, with one-sentence rationale",
    "Either: a live A/B test with a feature flag and a written decision rule, or a 500-word memo with sample-size math and an alternative evidence plan",
    "Section peer review received and one revision made",
  ],
  rubric: [
    {
      dimension: "Hypothesis specificity",
      points: 25,
      notes: "All four parts present (X, Y, current %, delta, reason); no vague language",
    },
    {
      dimension: "Sample-size arithmetic",
      points: 30,
      notes: "All steps shown; baseline is a real number; MDE is defensible; run time computed correctly",
    },
    {
      dimension: "Ship-or-memo decision quality",
      points: 20,
      notes: "Decision follows from the arithmetic; rationale is specific",
    },
    {
      dimension: "Test setup or memo completeness",
      points: 20,
      notes: "Test: decision rule pre-registered. Memo: alternative plan is concrete and 500+ words",
    },
    {
      dimension: "Peer review incorporated",
      points: 5,
      notes: "At least one revision made after peer feedback",
    },
  ],
  hints: [
    "Most early-stage products do not have enough traffic to A/B test conversion rate changes. That is the honest answer for most of you. Write the memo well: it is evidence of clear thinking, not failure.",
    "The MDE is not the effect you hope to see. It is the smallest effect you would actually act on. If a 1% improvement in conversion would not change your roadmap decisions, your MDE should be larger than 1%. Inflating the MDE makes the math easier but makes the test less useful.",
    "A painted-door test is not dishonest if you tell users the feature is coming soon after they click. The ethical failure is showing a button with no follow-up at all. Always close the loop.",
    "The 'minimum 7 days' rule for run time exists because behavior on Mondays differs from behavior on Saturdays. A 3-day test that happens to span a weekend gives you systematically skewed data.",
    "If you set up a feature flag and then look at the results every day, you are peeking. Set a calendar reminder for your end date and look only then.",
  ],
};

export function Wk05Section() {
  return <ProjectPage spec={spec} />;
}

export const wk05SectionSearchBody =
  "A/B test design sample size formula MDE minimum detectable effect baseline conversion rate feature flag decision rule peeking painted door test memo traffic threshold section worksheet Week 5 B2C growth experimentation";
