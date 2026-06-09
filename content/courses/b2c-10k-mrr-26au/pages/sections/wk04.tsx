import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 4 section: Build a cohort chart",
  tagline:
    "Write the SQL or PostHog query for your D1/D7/D30 cohort retention, run it against your real data, and read the curve shape out loud.",
  outDate: "Week 4",
  overview: [
    "Talking about retention without a cohort table is guessing. This section asks you to stop guessing. You will write the query, run it, paste the numbers into a table, name the curve shape, and share it with a partner.",
    "There are two paths: SQL (for founders with a Postgres, MySQL, or SQLite database) and PostHog (for founders who instrumented with the PostHog SDK in week 1). Both produce the same output: a table where each row is a signup cohort and each column is a retention interval (D1, D7, D30).",
    "You will leave section with a real cohort chart, a named retention shape, and one hypothesis about what changed between your worst cohort and your best.",
  ],
  goals: [
    "Write a working D1/D7/D30 cohort retention query for your product",
    "Read the output table and name the retention curve shape (smiling, flat, or decaying)",
    "Identify which signup cohort has the best D30 retention and form one hypothesis about why",
    "Write one sentence describing your power-user query: the event that separates your top 5% from everyone else",
    "Share your cohort chart with a partner and receive one piece of feedback",
  ],
  background: [
    "N-day retention asks: of the users who signed up in week W, what percentage returned on exactly day N? Unbounded retention asks: of those users, what percentage returned on day N or any day after? For most B2C products at this stage, N-day retention is cleaner: it shows discrete peaks and valleys that correspond to real usage patterns (weekly habits show up at D7, monthly billing cycles at D30).",
    "The SQL pattern below groups users by the calendar week of their signup, then counts how many returned at each interval. &ldquo;Returned&rdquo; means you saw a usage event (a row in your events table) from that user on day N, where day 0 is signup day. The key step is the DATE_DIFF join: for each (user, signup_date) pair, find all usage events and compute the difference in days.",
    "PostHog users can skip the SQL entirely. In your PostHog project, navigate to Retention (left sidebar), set the start event to your activation event (e.g., &ldquo;signed_up&rdquo; or &ldquo;completed_onboarding&rdquo;), set the return event to your north-star usage event (e.g., &ldquo;session_started&rdquo; or &ldquo;task_created&rdquo;), and set the interval to &ldquo;Day.&rdquo; PostHog draws the cohort table for you. Screenshot it and paste the numbers into the template below.",
  ],
  instructions: [
    {
      title: "Choose your path: SQL or PostHog",
      body: "If you have a database with an events or sessions table, use the SQL path. If you instrumented with PostHog in week 1, use the PostHog path. If you have neither, use the stub table at the bottom of this section and work through the math by hand with hypothetical numbers.",
    },
    {
      title: "SQL path: run the cohort query",
      body: "Adapt the query below for your schema. The query assumes a table named events with columns user_id, event_name, and created_at. Replace those column names with your actual schema. Run the query, copy the output, and fill in the cohort table template in step 4.",
      steps: [
        "Identify your activation event name (the event that marks &ldquo;user signed up and completed something meaningful&rdquo;).",
        "Identify your retention event name (the event that means &ldquo;user came back and used the product&rdquo;).",
        "Replace ACTIVATION_EVENT and RETENTION_EVENT in the query below.",
        "Run the query against your database and copy the results.",
      ],
    },
    {
      title: "SQL template (Postgres)",
      body: "Copy this query, replace the event names and table/column names to match your schema, then run it.",
    },
    {
      title: "PostHog path: set up the retention chart",
      body: "In PostHog, go to Retention in the left sidebar. Set Start event to your activation event (e.g., signed_up). Set Return event to your core usage event. Set interval to Day and period to 30 days. Click Update. PostHog renders a table where row 0 is always 100% and each cell shows the share of that cohort that returned on that day. Read off D1 (column 1), D7 (column 7), and D30 (column 30) for each cohort week.",
    },
    {
      title: "Fill in the cohort table",
      body: "Using the output from your query or PostHog, fill in the table template. Each row is one signup week. Columns are D1, D7, and D30 retention as a percentage.",
      steps: [
        "List your four most recent complete signup weeks (W-4, W-3, W-2, W-1, where W-1 is last week).",
        "For each week, write the D1, D7, and D30 retention percentages.",
        "If D30 data is not yet available for the most recent cohort, write &ldquo;too early&rdquo; and use the most recent available cohort for the shape analysis.",
      ],
    },
    {
      title: "Name your retention curve shape",
      body: "Look at the D1, D7, D30 column for your oldest complete cohort. Is the curve smiling (D1 drops fast, then D7 and D30 are relatively stable, implying a core of habitual users), flat (steady small decline from D1 to D30, implying consistent but not habit-level usage), or decaying (steep continuous drop from D1 to D30, implying most users never come back)? Write the shape name and one sentence explaining which part of the data led you to that conclusion.",
    },
    {
      title: "Identify your best cohort and form a hypothesis",
      body: "Compare D30 across all the cohort weeks you filled in. Which signup week has the highest D30 retention? Write one hypothesis (one sentence, starting with &ldquo;I think D30 is higher for this cohort because...&rdquo;) about what changed during that week: a product change, a channel change, a pricing change, or a seasonal effect.",
    },
    {
      title: "Write your power-user query (or PostHog insight)",
      body: "Your power users are the top 5% by usage in the past 30 days. Define usage in terms of an event count (e.g., &ldquo;users with more than 20 sessions in 30 days&rdquo;) or a specific action (e.g., &ldquo;users who invited at least one other user&rdquo;). Write the SQL or describe the PostHog filter you would use. You do not need to run it now, but you should be able to describe it precisely enough that someone else could write the query from your description.",
    },
    {
      title: "Share with a partner and get one piece of feedback",
      body: "Show your completed cohort table and curve-shape name to the person sitting next to you. Give each other two minutes of feedback: one observation about the data that surprised you, and one question about the methodology (how did they define &ldquo;returned&rdquo;, what counts as their activation event, etc.). Revise your curve-shape sentence if the conversation changed your interpretation.",
    },
  ],
  deliverables: [
    "A completed cohort table with D1/D7/D30 retention percentages for at least three signup cohort weeks",
    "The retention curve shape named (smiling, flat, or decaying) with a one-sentence justification",
    "One hypothesis (one sentence) about why your best-D30 cohort outperformed the others",
    "A description of your power-user query: the event name and threshold that separates your top 5%",
    "One piece of feedback received from a section partner, noted in your founder journal",
  ],
  rubric: [
    {
      dimension: "Query correctness",
      points: 30,
      notes:
        "The SQL or PostHog setup correctly measures D1/D7/D30 as defined (N-day, not unbounded); activation and return events are named and defensible",
    },
    {
      dimension: "Cohort table completeness",
      points: 20,
      notes:
        "At least three cohort weeks filled in with percentages (not just &ldquo;good&rdquo; or &ldquo;bad&rdquo;); cells marked &ldquo;too early&rdquo; only for incomplete cohorts",
    },
    {
      dimension: "Curve-shape diagnosis",
      points: 20,
      notes:
        "Shape named correctly from the data; justification cites specific cells in the table, not general impressions",
    },
    {
      dimension: "Best-cohort hypothesis",
      points: 15,
      notes:
        "Hypothesis is falsifiable: a specific event or change named, not a vague &ldquo;maybe the product got better&rdquo;",
    },
    {
      dimension: "Power-user definition",
      points: 15,
      notes:
        "Event name and threshold are specific enough that someone else could run the query; not just &ldquo;active users&rdquo;",
    },
  ],
  hints: [
    "The hardest part of the SQL query is the self-join. If you get stuck, simplify: first write a query that returns every (user_id, signup_date, event_date) pair, then add the DATE_DIFF column, then filter and group. Breaking it into steps makes it debuggable.",
    "If your activation event and your first usage event are the same row in the database, D1 retention will always look artificially high. Check whether &ldquo;signed up&rdquo; and &ldquo;first used the product&rdquo; are separate events in your schema. If they are the same event, use a different return event for the retention query.",
    "PostHog&rsquo;s retention table uses the same user across rows. If a user signed up in week 1 and returned in week 3, they appear in the week-1 row, not the week-3 row. This is correct behavior. Do not mistake it for a bug.",
    "A decaying curve is not a death sentence. It tells you where to look next: week-5 will cover acquisition and channel-product fit. A decaying curve plus a channel that brings in the wrong user is more fixable than a decaying curve plus no channel at all.",
    "When in doubt about which event to use as the return event, pick the one that most closely corresponds to your north-star metric from week 1. If your north-star is &ldquo;tasks completed,&rdquo; use task_completed as the return event. Consistency between your north-star and your retention definition makes the data easier to act on.",
  ],
};

export function Wk04Section() {
  return <ProjectPage spec={spec} />;
}

export const wk04SectionSearchBody =
  "section cohort chart SQL query PostHog D1 D7 D30 retention table cohort week signup week activation event return event curve shape smiling flat decaying power user top 5% best cohort hypothesis involuntary churn dunning Week 4 worksheet";
