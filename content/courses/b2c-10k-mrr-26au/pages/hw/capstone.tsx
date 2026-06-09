import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Capstone — Plan + ship the path to $10k MRR",
  tagline:
    "Diagnose your funnel, choose ONE 30-day intervention, defend it in 5 minutes.",
  outDate: "End of Week 8 (scaffold) — Week 10 (full defense)",
  dueDate: "End of Week 10 — live defense in the clinic",

  overview: [
    "Every concept in this course — the AAARRR funnel, cohort retention curves, paywall placement, channel-product fit, A/B test discipline, lifecycle messaging, viral loops, rollback runbooks — has been pointing at this moment. The capstone is the synthesis: a defended, evidence-grounded plan that a stranger could read and fund. It is not a slide deck, it is not a wishlist, and it is not a summary of what you learned. It is a binding commitment to the single highest-leverage move you will execute starting the Monday after the course ends.",
    "You will use Lenny Rachitsky's 'all the ways to grow' framework (Rachitsky, 2022) as the diagnostic skeleton, and Gustaf Alstromer's growth talk (Alstromer, 2019) as the evaluative lens. Alstromer is unequivocal: growth before product-market fit is the leading cause of startup death, and the only honest signal of PMF is retention. The capstone asks you to read your own data the way a stranger would — with no attachment to the narrative you have been telling yourself — and then commit to the one move your numbers actually support.",
    "The stakes are real. You are not turning in a paper; you are standing in front of the class and defending a plan you will execute with your own time and money in the 30 days that follow. The post-course commitment you sign is not a formality. The 50+ public outputs you have shipped across the course have already built an audience you can ask for help. The capstone is where the rhythm the course installed becomes self-sustaining — or doesn't.",
  ],

  goals: [
    "Analyze the four-quadrant diagnostic (leak / ceiling / price / channel) against your own course-long data and name the single quadrant that explains your stalled or slow MRR.",
    "Evaluate candidate interventions against the 30-day shippability constraint and choose ONE — specific, scoped, and executable — that targets the diagnosed quadrant.",
    "Create the full defended plan: funnel diagram with real numbers, cohort + retention curve, MRR plot across 10 weeks, measurement design, rollback criterion, and 5-minute live presentation.",
    "Apply the measurement discipline from Week 5 (Kohavi et al., 2020; Alstromer, 2019): name a target metric, a target delta, a deadline, and at least two confounders that threaten the measurement.",
    "Commit publicly and in writing to executing the 30-day plan starting the Monday after the course ends.",
  ],

  background: [
    "The four-quadrant diagnosis is the conceptual core of Week 10. A stalled MRR curve can have exactly four root causes, and conflating them is the most common diagnostic error. Leak: users are arriving but not activating or retaining — the product is not delivering its core promise reliably. Ceiling: the addressable audience you can reach through your chosen channel is exhausted or saturated. Price: the product delivers value but the price-to-value ratio is misaligned — either too high to convert or too low to compound. Channel: the channel itself is working, but it is the wrong channel for the product, and you are reaching people who will never pay. Each quadrant demands a different intervention; a fix aimed at the wrong quadrant is not just wasted work, it is misleading evidence. Stripe's MRR guide frames this clearly: when MRR stops growing, the path forward depends entirely on where in the conversion chain the break lives (Stripe, 2026).",
    "The 'single highest-leverage intervention' rule exists because founders systematically try to fix everything at once. Rachitsky and Hockenmaier document this failure mode in their consumer acquisition playbook: startups that pursue multiple channels simultaneously achieve mediocrity in all of them; the ones that win pick one lane and commit (Hockenmaier and Rachitsky, 2019). The same principle applies to product interventions. A 30-day plan that targets leak AND price AND channel is not a plan — it is a to-do list. You will commit to ONE intervention: one hypothesis, one target metric, one rollback criterion. If the intervention works, you will have earned the right to pick the next one.",
    "Measurement discipline is the difference between a plan and a guess. The Week 5 framework — feature flags, phased rollouts, and explicit rollback runbooks — was not just operational hygiene; it was the foundation for the capstone. Kohavi, Tang, and Xu establish the standard: a controlled experiment is the gold standard for causal inference, and the second-best thing, when you lack the traffic to run one, is a pre-registered prediction with a concrete falsification criterion (Kohavi et al., 2020). Your capstone measurement design must include: the specific metric you are moving, the magnitude of the change you expect (not 'go up' but 'increase by X% by day 30'), the method you will use to measure it, and at least two confounders — external events, seasonality, survivorship bias in your cohort — that could produce the observed change even if your intervention has no effect.",
    "The rollback criterion is not a safety net — it is a forcing function for honesty. Alstromer's framing is direct: if you cannot articulate the number that would cause you to revert, you do not actually believe in your measurement design (Alstromer, 2019). Writing the rollback criterion before you ship is the most important act of intellectual discipline in the capstone. It forces you to think adversarially about your own plan: what does failure look like, and at what point does the cost of continuing exceed the cost of reversing? A rollback criterion is not 'if it doesn't work I'll try something else.' It is a specific number, a specific date, and a specific reversion action.",
  ],

  instructions: [
    {
      title: "Funnel diagram with real numbers",
      body: "Pull every stage of your funnel from your course-long analytics. This is the cumulative picture: acquisition (total new visitors or app opens), installation or onboarding entry, activation (your named activation event from HW1), and paid (MRR or total paying users). Annotate each stage with the actual numbers from your dashboard — not estimates, not rounded figures. The funnel diagram is the first 60 seconds of your defense, and it must stand alone: a stranger reading it should be able to see exactly where you are losing people.",
      steps: [
        "Open PostHog (or your equivalent) and set the date range to the full course period.",
        "Pull the four-stage funnel: acquisition → onboarding entry → activation event → paid conversion.",
        "Annotate each stage arrow with the absolute count and the conversion rate from the previous stage.",
        "Export or screenshot the diagram for inclusion in your written plan.",
        "If any number is estimated rather than measured, flag it explicitly with '(est.)' and explain why you cannot measure it directly.",
      ],
    },
    {
      title: "Cohort + retention curve",
      body: "Show your D1/D7/D30 retention curve for the cohorts you have accumulated over the course. Identify the curve shape — smiling (flattening asymptote), flat (no drop-off but no growth), or decaying (never flattens). Then overlay your power-user segment from HW2: the top 5% by usage, and the one action they took in week 1 that the rest of your users did not. The cohort chart and the power-user segment together tell you whether retention is a leak problem or a ceiling problem.",
      steps: [
        "Build or re-pull the D1/D7/D30 cohort table from PostHog or your SQL dashboard.",
        "Plot the retention curve (percentage retained on the Y-axis, days since signup on the X-axis).",
        "Annotate the curve with its shape name and the asymptote value if it has flattened.",
        "Add a second annotation: the one action your power users took in week 1 that correlates with long-term retention.",
        "Include the cohort chart in your written plan.",
      ],
    },
    {
      title: "MRR curve",
      body: "Plot your MRR every Friday from Week 1 through Week 10 — this is the course-long MRR chart. Use the Friday snapshots from your founder journal. Annotate every inflection point: a pricing change, a new channel output, a feature ship, a churn spike. The MRR curve is the aggregate story; the funnel and cohort charts are the mechanism. Together they should tell a consistent narrative — if the MRR curve contradicts the funnel numbers, find the discrepancy before your defense.",
      steps: [
        "Retrieve the 10 Friday MRR snapshots from your founder journal (first recorded in HW1).",
        "Plot them as a line chart (week on X-axis, MRR in USD on Y-axis, starting at $0 if that was week 1).",
        "Annotate every inflection point — both upward and downward — with the event that caused it.",
        "If MRR is still $0 after 10 weeks, plot the zero line and annotate the specific points where you expected a lift and did not get one.",
      ],
    },
    {
      title: "Diagnose the quadrant",
      body: "Pick exactly ONE of: leak, ceiling, price, channel. State the quadrant, then provide three pieces of evidence from your own numbers that support the diagnosis and at least one counterargument you considered and rejected. The diagnosis is the most important analytical judgment in the capstone. A diagnosis with no counterargument is not a diagnosis — it is a preference. A diagnosis with three pieces of supporting evidence and a rejected alternative demonstrates that you read your data rather than your wishlist.",
      steps: [
        "Write the quadrant name and a one-sentence diagnosis: 'My MRR is stalled because [quadrant] — specifically, [evidence in one sentence].'",
        "List three data points from your funnel, cohort chart, or MRR curve that support the diagnosis.",
        "State the strongest alternative quadrant you considered, and explain one data point that rules it out.",
        "Confirm the diagnosis with a peer before finalising — ask them to argue against it.",
      ],
    },
    {
      title: "Choose ONE 30-day intervention",
      body: "The intervention must be specific, scoped, and shippable in 30 days by one person. It must target the diagnosed quadrant directly. It is not a strategy ('improve retention') — it is an action ('ship a day-7 triggered email with a personalised re-engagement offer and measure D30 retention lift in the next cohort'). Rachitsky's growth engine framework is useful here: the best interventions compound across your existing loops rather than requiring you to build new ones (Rachitsky, 2022).",
      steps: [
        "Write the intervention in one sentence: 'In the next 30 days I will [specific action] in order to move [specific metric] by [target delta].'",
        "Confirm it targets only the diagnosed quadrant.",
        "Confirm it can be designed, built, and measured by one person in 30 days.",
        "List the three largest scope risks — things that could cause it to take longer than 30 days — and how you will contain each.",
      ],
    },
    {
      title: "Measurement design",
      body: "Name the one number that must move if the intervention is working. State the target delta (how much it must move), the target deadline (by which date), and the method you will use to measure it. Then name at least two confounders: external events, seasonal patterns, survivorship effects, or product changes running in parallel that could produce the observed change even if your intervention has zero effect. A measurement design without confounders is optimism, not analysis.",
      steps: [
        "State the primary metric: 'The number I am moving is [metric name] as measured by [tool/query].'",
        "State the target delta: 'I expect it to move from [baseline] to [target] by [date].'",
        "Describe the measurement method: how often you will check it, what query or dashboard you will use, and how you will control for confounders.",
        "List at least two confounders that threaten the measurement and how you will detect or control for each.",
      ],
    },
    {
      title: "Rollback criterion",
      body: "Write the number that would force you to revert or abandon the intervention. This criterion must be stated before you ship — setting it after you see the results is not a rollback criterion, it is rationalisation. The rollback criterion should be a specific number (not a direction), a specific date (not 'after a while'), and a specific reversion action (not 'reconsider'). Apply the kill-switch discipline from Week 5: the criterion is your pre-committed stopping rule (Statsig, 2026).",
      steps: [
        "Write the rollback trigger: 'If [metric] is below [number] on [date], I will [specific reversion action].'",
        "Confirm the trigger is measurable with your current instrumentation — do not set a criterion you cannot measure.",
        "Confirm the trigger date is before the 30 days are up, so you have time to revert and still recover.",
        "Include the rollback criterion verbatim in your written plan and your defense slide deck.",
      ],
    },
    {
      title: "5-minute presented defense",
      body: "You will present in the Week 10 clinic. The defense is structured: 60 seconds on your funnel (show the numbers, name the quadrant); 60 seconds on the diagnosis (evidence, rejected alternative); 90 seconds on the intervention (specific, scoped, one sentence, three scope risks); 60 seconds on measurement and rollback (target delta, deadline, two confounders, rollback trigger); 30 seconds on the ask — one specific thing the class can help you with in the next 30 days. The class and staff will Q&A after each defense. A calm, evidence-grounded answer to a hostile question is worth more than a polished slide.",
      steps: [
        "Build a slide deck of 5–8 slides following the timing structure above.",
        "Practice the defense out loud at least twice before the clinic — time yourself.",
        "Post a dry-run summary publicly (your chosen channel) by Thursday of Week 10 and solicit tough questions.",
        "Prepare a one-sentence answer to each of the following: 'Why this quadrant and not [alternative]?'; 'Why will this intervention work when similar ones didn't before?'; 'What happens if the rollback criterion fires?'",
      ],
    },
    {
      title: "Post-course commitment",
      body: "Sign and submit a one-paragraph commitment to execute the 30-day plan starting the Monday after the course ends. Digital signature is fine. This is not a formality: the course's philosophy, grounded in Paul Graham's 'do things that don't scale' and Alstromer's retention-first framing, is that the rhythm instilled over 10 weeks only compounds if you keep it going. The commitment is the mechanism. Publish the companion 1-page public output — 'Here is my path to $10k MRR' — on any channel you have used during the course (Indie Hackers, X/Twitter, LinkedIn, Reddit, your own blog — your call).",
      steps: [
        "Write the commitment paragraph: 'Starting [Monday date], I will execute [intervention] for 30 days. The number I am moving is [metric]. My rollback date is [date]. I am asking [specific ask] from the community.'",
        "Sign it digitally and include it as the final page of your written plan.",
        "Write and publish the 1-page public output: 'Here is my path to $10k MRR.' Include your funnel diagnosis, your intervention, and your 30-day target. Link to it in your submission.",
        "Submit all deliverables before the end of Week 10.",
      ],
    },
  ],

  deliverables: [
    "Written plan (PDF, 4–8 pages — quality over length): funnel diagram with real numbers, cohort + retention curve, 10-week MRR curve with annotated inflection points, one-quadrant diagnosis with evidence and rejected alternative, intervention sentence, measurement design, rollback criterion, and signed post-course commitment.",
    "5-minute slide deck (5–8 slides) for the live defense in the Week 10 clinic — structured per the timing in Instruction 8.",
    "Post-course commitment signed (digital is fine), included as the final page of the written plan.",
    "1-page public output: 'Here is my path to $10k MRR' — published on any channel you have used during the course (Indie Hackers, X/Twitter, LinkedIn, Reddit, your blog, etc.). Submit the URL.",
  ],

  rubric: [
    {
      dimension: "Funnel diagram uses REAL numbers",
      points: 10,
      notes:
        "All four stages present (acquisition → onboarding → activation → paid); actual counts and conversion rates annotated; no estimates unless flagged.",
    },
    {
      dimension: "Cohort + retention curve uses real data",
      points: 10,
      notes:
        "D1/D7/D30 curve plotted from production cohort data; curve shape named; power-user segment annotated with the week-1 differentiating action.",
    },
    {
      dimension: "MRR curve plotted across 10 weeks",
      points: 5,
      notes:
        "All 10 Friday snapshots present; inflection points annotated with the causal event; $0 line acceptable if annotated.",
    },
    {
      dimension: "Diagnosis names ONE quadrant with cited evidence",
      points: 15,
      notes:
        "Single quadrant stated; three supporting data points from the student's own numbers; strongest alternative considered and ruled out with evidence.",
    },
    {
      dimension: "Intervention is specific, scoped, and shippable in 30 days",
      points: 20,
      notes:
        "One-sentence intervention targets the diagnosed quadrant; scope risks listed; no strategy language — only actions. This is the highest-weighted dimension.",
    },
    {
      dimension: "Measurement design includes metric, delta, deadline, and confounders",
      points: 10,
      notes:
        "Primary metric named with baseline and target; target date stated; at least two confounders identified with detection/control approach.",
    },
    {
      dimension: "Rollback criterion is concrete and measurable",
      points: 5,
      notes:
        "Stated as '[metric] below [number] on [date]'; reversion action named; criterion is measurable with existing instrumentation.",
    },
    {
      dimension: "5-minute defense is clear, calm, and survives Q&A",
      points: 15,
      notes:
        "Timing structure followed; evidence-grounded answers to hostile questions; class and staff Q&A handled without retreating to vagueness.",
    },
    {
      dimension: "Post-course commitment signed",
      points: 10,
      notes:
        "Commitment paragraph present and signed; 1-page public output published and URL submitted before the end of Week 10.",
    },
  ],

  hints: [
    "If you cannot name ONE quadrant, your numbers are not honest yet — go back to your dashboard. The most common reason founders cannot diagnose is that they are looking at aggregate metrics instead of cohort metrics. Aggregate retention can look fine while every new cohort is decaying faster than the last (Rachitsky, 2020).",
    "Interventions that try to fix two quadrants at once fail both. Picking ONE feels like you are leaving something on the table. You are not — you are making the next 30 days falsifiable. If you target leak and the leak does not close, you have learned something. If you target leak and price simultaneously and MRR goes up, you have learned nothing.",
    "A 30-day plan with 5 milestones beats a 90-day plan with 20. Alstromer's framing is useful: the question is not 'what is the optimal strategy over the next quarter?' It is 'what is the single thing I can ship and measure before the next review?' (Alstromer, 2019). Scope the intervention to fit inside 30 days of one-person work.",
    "If your rollback criterion is 'I'll just feel it,' you do not have one. Write a number. The kill-switch discipline from Week 5 applies here: the criterion must be settable before you ship, measurable with your existing instrumentation, and specific enough that you could explain it to a skeptic (Statsig, 2026).",
    "Defend the plan as if the staff is the most skeptical investor you will ever pitch. The class has watched your product for 10 weeks. They will know if a number is cherry-picked, if the diagnosis contradicts the funnel data, or if the intervention is actually three interventions in a trench coat. Prepare for the adversarial version of every question.",
    "The post-course commitment is the point. The course is over; the rhythm is not. The founders who reach $10k MRR from here are not the ones with the most sophisticated plan — they are the ones who shipped the intervention on Monday, measured it on Friday, and posted the update publicly. The 50+ public outputs you have shipped across the course are the proof that you can do this.",
    "If you have shipped 50+ public outputs across the course, you have built an audience you can ask for help. Do not be afraid to ask. The 1-page public output is not just a deliverable — it is a direct request to your community to help you get to $10k MRR. Name what you need: beta testers, feedback on pricing, introductions to a channel partner, a retweet. Be specific.",
  ],

  late:
    "The written plan: one week late, maximum 75 points. Submissions more than one week late are not accepted for the written plan. The live defense cannot be made up — it is scheduled in the Week 10 clinic. The post-course commitment must be submitted before the end of Week 10 to count. Real-number requirement applies at any submission date.",
};

export function HwCapstonePage() {
  return <ProjectPage spec={spec} />;
}

export const hwCapstoneSearchBody =
  "Capstone plan ship path to 10k MRR funnel diagnosis leak ceiling price channel quadrant intervention 30-day plan rollback criterion measurement design cohort retention curve MRR curve 10 weeks power-user segment activation rate D1 D7 D30 Lenny Rachitsky all the ways to grow YC Alstromer growth talk diagnostic quadrant pivot frame graduate to compound build-in-public post-course commitment live defense clinic Week 10 synthesis";
