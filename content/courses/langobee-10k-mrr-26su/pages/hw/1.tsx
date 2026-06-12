import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW1, The honest dashboard",
  tagline:
    "De-alt, filter the June 2026 bot cohort, and produce a single source-of-truth funnel with a written bottleneck memo and a defended north-star metric.",
  outDate: "End of Week 1",
  dueDate: "End of Week 3 (Friday 11:59pm)",

  overview: [
    "This assignment forces honesty on every number that will drive decisions for the rest of the course. LangoBee has 103 registered profiles. Roughly 50 are real humans. The week of June 1, 2026 added 52 signups, of which approximately 95% are bot or spam registrations (junk domains including a7gi.ru and host315.net, exactly one ever activated). Raw signup counts are a vanity metric in the classic Ries (2009) sense: they can only go up, they feel like progress, and they hide the real story. Your job this week is to burn down the illusion and replace it with numbers that can go down as well as up.",
    "The four deliverables build on each other in sequence. You start by tagging the pollution source definitively (the June 2026 bot cohort). Then you construct a de-alted, bot-filtered dashboard in PostHog HogQL and Supabase SQL, covering real signups, activation, return, and revenue by cohort week. From that dashboard you write a one-page bottleneck memo naming the single weakest AARRR stage with the evidence in front of you. Finally you choose a north-star metric and defend it in one paragraph grounded in the shape of the business. Everything lands in the langobee-intel repo so a cold session six months from now can reproduce every number without calling you.",
    "You will not be graded on the magnitude of the metrics. The June 2026 snapshot shows $0 MRR, four real weekly active users, and a median activated session of 34 seconds. Those are the numbers. Reporting them accurately, with reproducible queries, and diagnosing the right bottleneck is the assignment. Cleaning the data to produce a flattering rate is the only thing that will cause a failing grade here.",
  ],

  goals: [
    "Tag the June 2026 bot-signup cohort in an exclusion list so it never enters a metric again, using the domain-pattern and behavioral signals visible in Supabase (McClure, 2007).",
    "Build a de-alted cohort table in Supabase SQL covering real signups, activation count, and return count for the May 18, May 25, and June 1 cohort weeks, matching the raw figures from the June 2026 snapshot.",
    "Build a matching PostHog HogQL funnel covering acquisition, activation, return, and revenue by cohort week, with founder and bot accounts excluded from every query (Ries, 2009).",
    "Write a one-page bottleneck memo naming the single weakest AARRR stage with the drop-off rate and one specific, product-grounded hypothesis for why it happens (Ries, 2009).",
    "Choose a north-star metric for LangoBee and defend it in one paragraph by applying Rachitsky's six NSM categories to the shape of the business (Rachitsky, 2021).",
    "Save all queries to the langobee-intel repo so results are reproducible without tribal knowledge (Chen, 2015).",
  ],

  background: [
    "The AARRR framework, Acquisition, Activation, Retention, Revenue, Referral, was introduced by McClure (2007) as a diagnostic lens that forces founders to think in stages. Its enduring value is the specificity it demands: a user who signs up but never activates is a different problem from a user who activates and never returns, and both are different from a user who returns but never pays. Without a framework that assigns each user to exactly one stage at any given time, you end up looking at aggregate counts that blend all of those problems together and make none of them legible.",
    "De-alting is the prerequisite for any honest cohort analysis. Chen (2015) argues that the most important step before building a retention table is stripping internal and test accounts from the denominator, because founder activity alone can produce a misleading retention signal that flatters the product and hides the absence of real user engagement. LangoBee's June 2026 snapshot makes this concrete: the founder accounts for 59% of all events in the past 30 days. If you run a cohort table on raw Supabase profiles, every activation and retention rate is pulled upward by behavior the product did not cause. The de-alting step is not a preprocessing nicety; it is what makes the numbers mean something.",
    "Vanity metrics are the enemy of this assignment. Ries (2009) defines vanity metrics as numbers that can only go up: total registered users, raw page views, cumulative downloads. He explains the mechanism of harm precisely: when a vanity metric rises, teams credit their own decisions; when it falls, they blame external conditions. The result is that no shared understanding of what is actually working ever forms. The June 2026 bot cohort is the clearest possible example. Total signups jumped from 19 to 52 week-over-week, which looks like a 2.7x growth event. One user activated. The aggregate count was worse than useless because it actively obscured the signal. The fix is not a better visualization; it is a different denominator, one built from verified real users tracked by cohort week (Ries, 2009).",
    "A north-star metric is your strategy made concrete. Rachitsky (2021) surveyed employees at over 40 growth-stage companies and found that the right NSM sits at the intersection of what creates value for users, what reflects the mechanism by which the business grows, and what the team can actually act on week to week. For a language-learning app, candidate NSMs include words encountered per week (a consumption metric), activated sessions per week (an engagement metric), or DAU (a breadth metric). Rachitsky's framework requires you to score each candidate against the business model: a premium subscription app needs an NSM that correlates with the behavior that predicts conversion and retention, not just content consumption. Amplitude's North Star Playbook (Cutler and Amplitude team, 2019) adds the decomposition test: if you cannot identify three or four input metrics that move the NSM, the NSM is either too broad or not actually in your control.",
  ],

  instructions: [
    {
      title: "Tag the June 2026 bot cohort in the exclusion list",
      body: "The June 1 week added 52 signups of which approximately 95% are bots or spam. The signals are visible in Supabase: junk registrations cluster on domains like a7gi.ru and host315.net, used password auth (not OAuth), and exactly one ever activated. Your job is to make this cohort permanently inert in the data by writing an exclusion record for every identified bot account into a dedicated table in the langobee-intel repo and confirming the filters exclude them from every downstream query.",
      steps: [
        "In Supabase, query auth.users joined against profiles where created_at falls between 2026-06-01 and 2026-06-07. Export the list.",
        "Flag accounts matching bot signals: non-OAuth signup method, email domains with no web presence or on a known spam-domain list, zero activation events in PostHog within 7 days of signup.",
        "Write the identified user IDs to a table or CSV file at langobee-intel/data/excluded-accounts.csv with columns: user_id, reason, flagged_at. Use reason values 'bot-june2026', 'founder', or 'alt'.",
        "Write the Supabase SQL exclusion WHERE clause (e.g., id NOT IN (SELECT user_id FROM excluded_accounts)) as a reusable view or CTE snippet at langobee-intel/sql/exclusions.sql.",
        "Verify: re-run the signup count for the June 1 cohort week using the exclusion filter. It should drop from 52 to approximately 2-3 real signups.",
      ],
    },
    {
      title: "Build the de-alted cohort table in Supabase SQL",
      body: "The cohort table is the factual spine of the entire dashboard. It must cover three cohort weeks (May 18, May 25, June 1), show real signups, activation count, activation rate, return count (users with activity in a week after their signup week), and return rate. Every number must exclude the accounts tagged in the exclusion list from step 1. Save the query to langobee-intel/sql/cohort-table.sql so it is reproducible without explanation.",
      steps: [
        "Define activation: a user is activated when they trigger a word_lookup_opened event or a reading_session_started event within 7 days of signup. This is the first moment the product delivers its core promise (comprehensible-input engagement). Write this definition as a comment at the top of the query.",
        "Write the cohort SQL: group profiles by DATE_TRUNC('week', created_at), left-join against the activation event table, left-join against a subsequent-week activity table. Exclude accounts in the exclusion list.",
        "Expected output against the June 2026 snapshot: May 18 week approximately 15 signups, 12 activated (80%), 6 returned (40%); May 25 week approximately 19 signups, 7 activated (37%), 3 returned (16%); June 1 week approximately 2-3 real signups, 1 activated.",
        "If your numbers diverge from the snapshot by more than 20%, check the exclusion filter first, then the activation event definition. Do not adjust the definition to produce prettier numbers.",
        "Save the final query to langobee-intel/sql/cohort-table.sql with a comment block: description, inputs, dependencies, last-verified date.",
      ],
    },
    {
      title: "Build the PostHog HogQL funnel",
      body: "The PostHog funnel translates the cohort table into a visual AARRR breakdown. It covers four stages: acquisition (distinct persons with any event in the cohort week), activation (persons who triggered the activation event), return (persons active in a week after their signup week), and revenue (persons with a trial_started or subscription_paid event). The founder account and all bot-flagged accounts must be excluded using a person property filter, not a manual exclusion per query.",
      steps: [
        "In PostHog project 374549, create a person property called internal_account (boolean). Set it to true for the founder account and all accounts in the exclusion list. Use the PostHog API or the Persons UI to bulk-set this property.",
        "Create a Funnel insight with four steps: (1) any event WHERE internal_account is not true, (2) word_lookup_opened or reading_session_started as the activation event, (3) any event in a session at least 7 days after first seen (return signal), (4) trial_started or subscription_paid.",
        "Set the date range to cover the full cohort period (May 18 through current date). Segment by first-seen week to produce cohort-level breakdown.",
        "Save the HogQL for each stage as a saved insight in PostHog AND copy the raw HogQL to langobee-intel/posthog/funnel-hogql.sql. The PostHog UI is not the source of truth; the saved query file is.",
        "Take a screenshot of the funnel. This screenshot is a required deliverable. Revenue stage will show 0 conversions; that is correct and expected.",
      ],
    },
    {
      title: "Write the bottleneck memo",
      body: "The memo is one page (roughly 400-600 words or equivalent Markdown). It names the single weakest AARRR stage with the drop-off rate, compares that rate to a relevant benchmark, and offers one specific, product-grounded hypothesis for why it happens. A weak hypothesis sounds like 'users don't see enough value.' A strong hypothesis sounds like 'the May 25 cohort had 37% activation versus 80% for May 18, and the difference correlates with the absence of a language selector on the new signup flow, which means users who signed up in May 25 landed in a Spanish reader without confirming Spanish was their target language.' Specificity is the standard.",
      steps: [
        "List all four AARRR stages from your funnel with raw counts and conversion rates.",
        "Identify the single stage with the largest absolute drop-off, stated as a percentage of the prior-stage population.",
        "Compare that rate to the benchmark: Rachitsky and Timen (2022) report a median B2C activation rate of 25% and mean of 34%. Chen (2015) sets the expectation that un-de-alted cohort tables routinely overstate retention by 30-50% versus clean tables. State whether your rate is above or below the relevant benchmark.",
        "Write one specific hypothesis: name the step in the product where the user drops, describe what the user sees at that moment, and state what you believe they fail to understand or do.",
        "Save the memo as langobee-intel/memos/wk1-bottleneck.md.",
      ],
    },
    {
      title: "Choose and defend a north-star metric",
      body: "A north-star metric is a single number that captures the value the product delivers to users and moves in the direction of long-term revenue. It is not a business metric (MRR) and not a vanity metric (total registered users). For LangoBee, candidates include words encountered per week by real activated users, activated sessions per cohort week, or DAU among non-internal accounts. Apply Rachitsky's (2021) scoring: does the metric reflect value delivery, is it in your control, and does it correlate with the behavior most likely to predict conversion to paid?",
      steps: [
        "List at least three candidate NSMs. For each, write one sentence explaining what user behavior it measures and why that behavior matters to the business.",
        "Apply the decomposition test from Cutler and Amplitude team (2019): can you name three or four input metrics that move this NSM? If not, the NSM is too broad.",
        "Choose one NSM. Write one paragraph defending the choice: state what value it reflects, why it predicts conversion, and what it would mean for the business if it doubled in 90 days.",
        "State the current baseline value from your clean cohort data. This is the number you will track every week for the rest of the course.",
        "Save the choice and defense as a section at the top of langobee-intel/memos/wk1-bottleneck.md, above the bottleneck section.",
      ],
    },
    {
      title: "Commit all artifacts to the langobee-intel repo",
      body: "Reproducibility is a grading dimension. Every number in the memo and dashboard must be derivable from the saved queries without asking you to explain anything. A future agent or a cold session should be able to run langobee-intel/sql/cohort-table.sql against Supabase and get the same numbers that appear in the memo. The PostHog HogQL file should run in project 374549 and reproduce the funnel. The exclusion list should make the bot cohort inert without manual intervention.",
      steps: [
        "Confirm langobee-intel/data/excluded-accounts.csv exists and includes a row for every bot account and every internal account.",
        "Confirm langobee-intel/sql/exclusions.sql contains the reusable WHERE clause snippet with a comment explaining its use.",
        "Confirm langobee-intel/sql/cohort-table.sql runs without error and produces the expected output rows.",
        "Confirm langobee-intel/posthog/funnel-hogql.sql contains the HogQL for all four funnel stages.",
        "Confirm langobee-intel/memos/wk1-bottleneck.md contains the north-star defense section and the bottleneck memo.",
        "Commit all files with a commit message that includes the date and the summary: 'wk1: honest dashboard, bot exclusions, bottleneck memo'.",
      ],
    },
  ],

  deliverables: [
    "langobee-intel/data/excluded-accounts.csv: every bot and internal account tagged with reason and flagged_at date.",
    "langobee-intel/sql/exclusions.sql: reusable exclusion WHERE clause or CTE snippet with documentation comment.",
    "langobee-intel/sql/cohort-table.sql: the de-alted Supabase cohort query covering the three cohort weeks with activation and return columns.",
    "langobee-intel/posthog/funnel-hogql.sql: HogQL for all four AARRR funnel stages with bot and internal accounts excluded.",
    "PostHog funnel screenshot: the four-stage funnel with real, current numbers, segmented by cohort week. Revenue stage will show zero; that is correct.",
    "langobee-intel/memos/wk1-bottleneck.md: the north-star metric defense (one paragraph) plus the bottleneck memo (one page), both grounded in the clean cohort numbers.",
    "Stretch (optional): a short Loom walk-through running the Supabase query live, confirming the bot cohort collapses from 52 to 2-3 real signups after the exclusion filter is applied.",
  ],

  rubric: [
    {
      dimension: "Honesty of the numbers",
      points: 35,
      notes:
        "The June 1 cohort week shows approximately 2-3 real signups after bot filtering, not 52. The founder account is excluded from all rates. Activation and return rates match the clean cohort table output. No cherry-picked date range or denominator.",
    },
    {
      dimension: "Reproducibility of the queries",
      points: 35,
      notes:
        "cohort-table.sql runs against Supabase and produces the memo numbers without any manual steps. funnel-hogql.sql runs in PostHog project 374549. excluded-accounts.csv and exclusions.sql together make the bot cohort inert. Every file has a documentation comment.",
    },
    {
      dimension: "Sharpness of the bottleneck diagnosis",
      points: 20,
      notes:
        "One specific AARRR stage named as the weakest, with the drop-off rate stated. At least one benchmark cited (Rachitsky and Timen, 2022, or Chen, 2015). The hypothesis is product-specific, not generic: it names a screen, an event, or a behavioral gap, not a vague value-perception problem.",
    },
    {
      dimension: "North-star metric defense",
      points: 10,
      notes:
        "One NSM chosen from at least three candidates. Defense paragraph applies Rachitsky's (2021) scoring criteria. Decomposition test attempted: at least two input metrics named. Current baseline value stated from clean data.",
    },
  ],

  hints: [
    "Start with the exclusion list, not the queries. Every downstream number depends on the exclusion filter being correct. If you build the cohort table first and then add exclusions, you will re-run everything. Get the excluded-accounts.csv right first.",
    "The activation event definition matters more than the query syntax. A word_lookup_opened event fired within 7 days of signup is a defensible definition grounded in the product's core loop (the tap-a-word interaction generated 5,225 events in the past 30 days). If you define activation as 'completed the onboarding checklist,' you may find zero activated users, which tells you nothing useful. Define it as the first moment the product does what it promises.",
    "The PostHog internal_account property is the cleanest way to exclude internal traffic globally. Set it once; it applies to every future query. Do not hard-code a user ID list into each HogQL query; that pattern breaks every time you add a new test account.",
    "When the cohort table shows 80% activation for May 18 and 37% for May 25, resist the urge to explain the gap before you have verified it. First confirm that both cohorts use the same activation definition, the same exclusion filter, and the same date window. Analytical errors at this stage compound through every downstream memo.",
    "The north-star metric for a premium subscription language app is almost certainly an engagement metric, not a growth metric. Revenue is an output, not an input. Words encountered per week by real activated users correlates with the behavior (returning to read or watch) that predicts conversion and retention. DAU is a breadth metric that treats a two-second session the same as a two-hour session. The median activated LangoBee session is 34 seconds; DAU will overcount meaningless visits. Rachitsky (2021) and Cutler and Amplitude team (2019) both provide scoring criteria to stress-test your choice before you commit.",
    "The bottleneck memo should take 45 minutes to write if the data is already in front of you. If it is taking longer, you are probably trying to explain a number before you understand it. Write the numbers down first, identify the biggest drop, state the benchmark, state your hypothesis, stop. Diagnosis, not prescription, is the deliverable here.",
  ],

  late:
    "One week late: maximum 80 points. Two weeks late: maximum 60 points. Submissions more than two weeks late are not accepted. The real-numbers requirement applies at any submission date. The June 2026 bot cohort must still be tagged and excluded; do not submit a dashboard that uses unfiltered counts to compensate for a late start.",
};

export function Hw1Page() {
  return <ProjectPage spec={spec} />;
}

export const hw1SearchBody =
  "HW1 honest dashboard de-alting bot filter June 2026 bot cohort vanity metric AARRR funnel PostHog HogQL Supabase SQL cohort table activation return revenue north-star metric bottleneck memo exclusion list langobee-intel reproducibility single source of truth signup spam weekly active users";
