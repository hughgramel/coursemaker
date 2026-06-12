import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk01SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="rebuild-the-de-alted-dashboard">
        Section: Rebuild the de-alted dashboard
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 1 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have replaced every raw aggregate on your PostHog
        dashboard with de-alted cohort-week numbers: signups, activation rate, and return rate,
        broken out by the week the user signed up and with founder, alt, and bot accounts removed.
        You will also have the SQL equivalents of the same queries running against Supabase. Both
        query sets become the baseline every subsequent week builds from.
      </p>

      <AnchorHeading as="h2" id="part-0-memory-drill">
        Part 0: Write down your numbers from memory (5 minutes)
      </AnchorHeading>

      <p>
        Before opening any dashboard, write down your best guesses for the following numbers as
        of today. Do not look anything up. This is the calibration drill: the gap between what
        you think is true and what is actually true is where bad decisions live.
      </p>

      <ol>
        <li>Total registered profiles in Supabase right now.</li>
        <li>Weekly active users last week (authenticated, any event).</li>
        <li>Monthly active users last 30 days (authenticated, any event).</li>
        <li>Activation rate for the May 18 cohort week (signups who completed at least one reading event).</li>
        <li>Number of the June 1 cohort week signups you believe are real humans.</li>
        <li>Percentage of all PostHog events in the last 30 days that come from the founder account.</li>
      </ol>

      <p>
        Write these six numbers down and date the page. You will compare them to the real numbers
        at the end of Part 1.
      </p>

      <AnchorHeading as="h2" id="part-1-de-alted-wau-mau">
        Part 1: De-alted WAU and MAU from HogQL
      </AnchorHeading>

      <p>
        Open PostHog project 374549. Navigate to{" "}
        <strong>Data management &rsaquo; SQL editor</strong>. Run each query below. The
        de-alting filter excludes the founder account, known alt emails, and accounts whose
        email domain appears in a short spam-domain list. Adjust the list as you discover new
        bot domains.
      </p>

      <p>
        <strong>Query 1: De-alted WAU (last 7 days)</strong>
      </p>
      <pre>{`-- HogQL: de-alted WAU (last 7 complete days)
SELECT
  count(DISTINCT person_id) AS wau_real
FROM events
WHERE
  timestamp >= now() - interval 7 DAY
  AND timestamp <  now()
  -- exclude founder and known alts
  AND person.properties.$email NOT IN (
    'hughgramelspacher@gmail.com'
    -- add any other founder/alt emails here
  )
  -- exclude bot signup domains
  AND NOT match(
    person.properties.$email,
    '(?i)(a7gi\\.ru|host315\\.net|mailnull\\.com|guerrillamail|sharklasers)'
  )
  -- authenticated users only (have a non-anonymous distinct_id)
  AND NOT person.properties.$is_identified = false
`}</pre>

      <p>
        <strong>Query 2: De-alted MAU (last 30 days)</strong>
      </p>
      <pre>{`-- HogQL: de-alted MAU (last 30 days)
SELECT
  count(DISTINCT person_id) AS mau_real
FROM events
WHERE
  timestamp >= now() - interval 30 DAY
  AND timestamp <  now()
  AND person.properties.$email NOT IN (
    'hughgramelspacher@gmail.com'
  )
  AND NOT match(
    person.properties.$email,
    '(?i)(a7gi\\.ru|host315\\.net|mailnull\\.com|guerrillamail|sharklasers)'
  )
  AND NOT person.properties.$is_identified = false
`}</pre>

      <p>
        <strong>Query 3: Founder share of all events (sanity check)</strong>
      </p>
      <pre>{`-- What fraction of all events in the last 30 days came from the founder?
SELECT
  round(
    100.0 * countIf(
      person.properties.$email = 'hughgramelspacher@gmail.com'
    ) / count(*),
    1
  ) AS founder_pct
FROM events
WHERE timestamp >= now() - interval 30 DAY
`}</pre>

      <p>
        Record all three numbers. Compare to your memory-drill estimates from Part 0. Write
        one sentence on the largest gap you found.
      </p>

      <AnchorHeading as="h2" id="part-2-cohort-signups-activation">
        Part 2: Cohort-week signups, activation, and return
      </AnchorHeading>

      <p>
        The Supabase queries below use the <code>auth.users</code> table (signup data) joined to
        the <code>reading_events</code> table (activation and return evidence). Run these with
        the service-role key or from the Supabase SQL editor under your project. Replace the
        email exclusion list to match your actual alt accounts.
      </p>

      <p>
        <strong>Query 4: Cohort-week signup and activation counts</strong>
      </p>
      <pre>{`-- Supabase: signups and activation by cohort week (all-time)
-- Activation = at least one reading_event within 7 days of signup
WITH cohorts AS (
  SELECT
    u.id                                         AS user_id,
    date_trunc('week', u.created_at)             AS cohort_week,
    u.email
  FROM auth.users u
  WHERE
    u.email NOT IN ('hughgramelspacher@gmail.com')
    AND u.email NOT SIMILAR TO '%(a7gi\\.ru|host315\\.net|mailnull\\.com)%'
),
activation AS (
  SELECT DISTINCT
    r.user_id
  FROM reading_events r
  JOIN auth.users u ON u.id = r.user_id
  JOIN cohorts c    ON c.user_id = r.user_id
  WHERE
    r.local_date <= (c.cohort_week + interval '7 days')::date
)
SELECT
  c.cohort_week::date                           AS cohort_week,
  count(*)                                      AS signups,
  count(a.user_id)                              AS activated,
  round(
    100.0 * count(a.user_id) / nullif(count(*), 0),
    1
  )                                             AS activation_pct
FROM cohorts c
LEFT JOIN activation a ON a.user_id = c.user_id
GROUP BY c.cohort_week
ORDER BY c.cohort_week;
`}</pre>

      <p>
        <strong>Query 5: Return rate (did any cohort user come back after their first week?)</strong>
      </p>
      <pre>{`-- Supabase: return rate by cohort week
-- "Returned" = at least one reading_event more than 7 days after signup
WITH cohorts AS (
  SELECT
    u.id                              AS user_id,
    date_trunc('week', u.created_at)  AS cohort_week
  FROM auth.users u
  WHERE
    u.email NOT IN ('hughgramelspacher@gmail.com')
    AND u.email NOT SIMILAR TO '%(a7gi\\.ru|host315\\.net|mailnull\\.com)%'
),
returned AS (
  SELECT DISTINCT r.user_id
  FROM reading_events r
  JOIN cohorts c ON c.user_id = r.user_id
  WHERE
    r.local_date > (c.cohort_week + interval '7 days')::date
)
SELECT
  c.cohort_week::date              AS cohort_week,
  count(*)                         AS signups,
  count(ret.user_id)               AS returned,
  round(
    100.0 * count(ret.user_id) / nullif(count(*), 0),
    1
  )                                AS return_pct
FROM cohorts c
LEFT JOIN returned ret ON ret.user_id = c.user_id
GROUP BY c.cohort_week
ORDER BY c.cohort_week;
`}</pre>

      <p>
        Fill in the table below with the results for the three cohort weeks named in the
        course brief:
      </p>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Cohort week</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Signups</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Activated</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Activation %</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Returned</th>
              <th style={{ textAlign: "right", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Return %</th>
            </tr>
          </thead>
          <tbody>
            {[
              "May 18 week",
              "May 25 week",
              "Jun 1 week",
            ].map((week) => (
              <tr key={week}>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", fontWeight: 600 }}>{week}</td>
                {Array.from({ length: 5 }).map((_, i) => (
                  <td key={i} style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", textAlign: "right", color: "#999" }}>
                    ___
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h2" id="part-3-bot-diagnosis">
        Part 3: Diagnose the June 1 bot-signup spike
      </AnchorHeading>

      <p>
        The June 1 cohort week added 52 signups but only 1 activated. Run the query below to
        inspect the signup characteristics. You are looking for three bot signals: (1) junk
        email domains, (2) password-based auth with no OAuth, (3) zero events after signup.
      </p>

      <pre>{`-- Supabase: inspect June 1 cohort week signups
SELECT
  u.email,
  u.raw_app_meta_data->>'provider'   AS auth_provider,
  u.created_at::date                 AS signup_date,
  count(r.user_id)                   AS reading_events_ever
FROM auth.users u
LEFT JOIN reading_events r ON r.user_id = u.id
WHERE
  u.created_at >= '2026-06-01'
  AND u.created_at  < '2026-06-08'
GROUP BY u.email, u.raw_app_meta_data->>'provider', u.created_at
ORDER BY reading_events_ever ASC, u.created_at ASC;
`}</pre>

      <p>
        After reviewing the output, write a one-paragraph diagnosis answering:
      </p>
      <ul>
        <li>What email-domain patterns appear in the non-activating signups?</li>
        <li>What auth provider did most of them use?</li>
        <li>What single filter would remove at least 90% of them from your dashboards?</li>
      </ul>

      <AnchorHeading as="h2" id="part-4-posthog-saved-queries">
        Part 4: Save the de-alted queries as PostHog insights
      </AnchorHeading>

      <ol>
        <li>
          In PostHog, navigate to <strong>Insights &rsaquo; New insight &rsaquo; SQL</strong>.
          Paste Query 1 (de-alted WAU). Name it <strong>"De-alted WAU (rolling 7d)"</strong>.
          Save it.
        </li>
        <li>
          Repeat for Query 2 as <strong>"De-alted MAU (rolling 30d)"</strong>. Save it.
        </li>
        <li>
          Create a new <strong>Dashboard</strong> called <strong>"Ground truth"</strong>. Pin
          both saved insights to it. This is your single source of truth dashboard. You will add
          to it each week.
        </li>
        <li>
          On the same dashboard, add a <strong>Trends</strong> insight showing{" "}
          <code>user signed up</code> events over the last 8 weeks, with the de-alting person
          filter applied (exclude the founder email and bot domains). Name it{" "}
          <strong>"De-alted weekly signups"</strong>.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-reflect">
        Part 5: Reflect
      </AnchorHeading>

      <ol>
        <li>
          <strong>Compare memory vs reality.</strong> Return to your Part 0 list. For each of
          the six numbers, write: guessed vs actual, and one word for the direction of the
          error (over / under / correct). Which number surprised you most?
        </li>
        <li>
          <strong>Name the vanity metric you were relying on most.</strong> Look at the raw
          aggregate counts you had before this session. Which one did you mentally reach for
          first when thinking about LangoBee's health? Write one sentence explaining why it
          qualifies as a vanity metric under Ries's three-A test.
        </li>
        <li>
          <strong>Name your north-star metric candidate.</strong> Based on the de-alted
          numbers you now have, propose one candidate north-star metric. It must be: (a) a
          leading indicator of subscription revenue, (b) something users do in the product,
          and (c) expressible as either a HogQL query or a Supabase SQL expression. Write the
          query skeleton.
        </li>
      </ol>

      <AnchorHeading as="h2" id="rubric">
        Self-grading rubric
      </AnchorHeading>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Checkpoint</th>
              <th style={{ textAlign: "left", padding: "6px 10px", borderBottom: "2px solid currentColor" }}>Done?</th>
            </tr>
          </thead>
          <tbody>
            {[
              "Memory-drill numbers written down before any dashboard was opened",
              "De-alted WAU and MAU queries run and numbers recorded",
              "Founder event-share percentage calculated",
              "Cohort table filled in for May 18, May 25, and Jun 1 weeks",
              "Jun 1 bot-spike diagnosed with domain, provider, and filter identified",
              "PostHog 'Ground truth' dashboard created with de-alted WAU, MAU, and signup trend pinned",
              "Memory vs reality comparison written with direction-of-error labels",
              "Vanity metric identified with one-sentence Ries three-A test explanation",
              "North-star metric candidate named with query skeleton",
            ].map((item) => (
              <tr key={item}>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>{item}</td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd", color: "#999" }}>[ ]</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        If any checkbox is empty at the end of the session, complete it before opening the
        next lecture. The cohort table and the Ground truth dashboard are the inputs to every
        decision made in weeks 2 through 12. Starting with incomplete baselines compounds
        forward.
      </p>
    </>
  );
}

export const wk01SectionSearchBody =
  "de-alted dashboard HogQL SQL PostHog Supabase WAU MAU cohort week signups activation return rate bot diagnosis June 2026 spike north star metric vanity metrics memory drill section worksheet week 1";
