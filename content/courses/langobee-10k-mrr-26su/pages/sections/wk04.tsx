import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk04SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="choose-your-hook">
        Section: Choose your hook, build your D1 dashboard
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 4 · Hands-on worksheet</p>

      <p>
        By the end of this section you will have picked one retention hook to ship
        this sprint, written its event spec, and built the PostHog D1 dashboard
        that will judge whether the hook is working. You will leave with a written
        hook spec and a live dashboard showing your current D1 return rate.
      </p>

      <p>
        Everything here operates on the real LangoBee product. Use PostHog project
        374549 and Supabase throughout. The de-alted filter from week 1 applies to
        every query: exclude the founder account, alt accounts, and any user whose
        email domain appeared in the June bot-signup wave.
      </p>

      {/* ---- RETRIEVAL DRILL ---- */}
      <AnchorHeading as="h2" id="retrieval-drill">
        Part 0: Retrieval drill (5 minutes)
      </AnchorHeading>

      <p>
        Do not open your notes. Answer from memory. Write your answers before
        moving to Part 1.
      </p>

      <ol>
        <li>
          <strong>Broken vacuum.</strong> In week 3, you defined the broken-vacuum
          standard for LangoBee's reader. State it in one sentence: what is the
          minimum the reader must do reliably before it is worth driving traffic
          to it?
        </li>
        <li>
          <strong>Activation definition.</strong> Write LangoBee's activation
          event in the exact format from week 3: "A user has activated when they
          have [specific action] within [timeframe] of signing up." Do not look
          it up.
        </li>
        <li>
          <strong>Time-to-value.</strong> What is the approximate time-to-value
          for an activated LangoBee user, and which event in PostHog signals
          that they have received it? Name the event.
        </li>
      </ol>

      <p>
        If you could not answer all three from memory, re-read the week 3 section
        worksheet before continuing.
      </p>

      {/* ---- PART 1: HOOK COMPARISON ---- */}
      <AnchorHeading as="h2" id="part-1-hook-comparison">
        Part 1: Compare the three candidate hooks (20 minutes)
      </AnchorHeading>

      <p>
        LangoBee has three retention hooks that are buildable this sprint. None
        is shipped today. Evaluate each honestly before choosing one.
      </p>

      <ol start={4}>
        <li>
          <strong>PWA push notification.</strong> Web push is available in the
          browser (PWA manifest is already configured). The notification is an
          external trigger. The implementation requires: (a) requesting
          notification permission, (b) registering a service worker push handler,
          (c) a server-side send job (Edge Function or cron), (d) a PostHog event
          for{" "}
          <code>push_notification_sent</code> and{" "}
          <code>push_notification_opened</code>.
          <br />
          <br />
          Honest constraint: permission prompt conversion on the web is 5-15% in
          cold contexts. At LangoBee's current user volume (roughly 4 real WAU),
          a push send of 20 users yields a maximum of 3 opens. That is one
          cohort data point.
        </li>
        <li>
          <strong>Daily "new for you" email.</strong> Supabase auth already
          delivers transactional email. A daily digest could surface one new
          Spanish short that matches the user's comprehension range (the{" "}
          <code>mean_zipf</code> score and current word status are already
          computed). Implementation: (a) a scheduled Edge Function that queries
          the watch-next ranker, (b) an email template with one video link,
          (c) Supabase's email provider or a transactional relay, (d) PostHog
          events for{" "}
          <code>digest_email_sent</code> and{" "}
          <code>digest_email_clicked</code>.
          <br />
          <br />
          Honest constraint: email open rates for consumer apps in 2024 average
          20-25%. At 4 real WAU, a daily email reaches 4 inboxes. This is a
          qualitative signal generator, not a statistically reliable test.
        </li>
        <li>
          <strong>Streak surface at session end.</strong> LangoBee already has{" "}
          <code>daily_stats</code> and{" "}
          <code>courses.streak_days</code> in the Supabase schema.
          The streak is computed but not surfaced. Shipping this hook means:
          (a) showing the current streak count on the session-end screen,
          (b) a "you're on a [N]-day streak, come back tomorrow" message, (c)
          no new infrastructure. Implementation is entirely front-end.
          <br />
          <br />
          Honest constraint: a streak surface is an internal-trigger amplifier,
          not an external trigger. It does nothing for users who do not return
          at least twice to see the streak grow. At D1 rates below 30%, most
          users never see a streak above 1.
        </li>
        <li>
          <strong>Write your comparison table.</strong> In your founder journal,
          make a three-row table with columns: hook name, external trigger it uses,
          internal trigger it aims to cultivate, implementation days, and minimum
          measurable signal at current volume. Fill in all cells before step 8.
        </li>
      </ol>

      {/* ---- PART 2: CHOOSE AND WRITE THE SPEC ---- */}
      <AnchorHeading as="h2" id="part-2-hook-spec">
        Part 2: Choose one hook and write its event spec (15 minutes)
      </AnchorHeading>

      <ol start={8}>
        <li>
          <strong>Choose one hook.</strong> Pick the hook with the shortest path
          from code to measurable signal at your current user volume. Write the
          name of the hook you chose and one sentence explaining why you chose it
          over the other two. If you chose the streak surface: note that it is
          buildable in one day but will only produce signal after users return
          twice. If you chose push or email: note the permission or volume
          constraint you will have to live with.
        </li>
        <li>
          <strong>Write the event spec.</strong> For the hook you chose, define
          every PostHog event it requires. Use this format for each event:
          <pre>{`Event name: <snake_case_name>
Fired when: <exact human-readable condition>
Properties: <list of key: value pairs>
Success metric: <what you will read in PostHog to judge this hook>`}</pre>
          Example for the streak surface:
          <pre>{`Event name: streak_surface_shown
Fired when: user reaches session-end screen and streak_days >= 1
Properties: streak_days: number, session_words_read: number
Success metric: D1 return rate for users who saw the streak surface vs those who did not`}</pre>
          Write the complete spec for every event your chosen hook requires before
          continuing.
        </li>
        <li>
          <strong>State the null hypothesis.</strong> Write one sentence: "If this
          hook has no effect, I expect D1 return rate to remain at approximately
          [X]%." Use the current D1 rate you will calculate in Part 3.
        </li>
      </ol>

      {/* ---- PART 3: DE-ALTED D1 DASHBOARD (INTERLEAVED: DE-ALTING FROM WEEK 1) ---- */}
      <AnchorHeading as="h2" id="part-3-d1-dashboard">
        Part 3: Build the D1 dashboard (20 minutes)
      </AnchorHeading>

      <p>
        This part uses the de-alting work from week 1. The D1 dashboard must
        exclude internal accounts before you can trust the number you are trying
        to move. If you skip the de-alting step, you are measuring the wrong
        population.
      </p>

      <ol start={11}>
        <li>
          <strong>Re-verify your de-alting filter.</strong> Open PostHog project
          374549. Navigate to Persons. Confirm that the filter you built in week 1
          (exclude accounts with <code>email contains hughgramel</code>, exclude
          accounts with signup domains <code>a7gi.ru</code>,{" "}
          <code>host315.net</code>, and any other junk domain you identified) is
          still saved as a cohort or filter. If it was lost, rebuild it now.
          Do not proceed with a dashboard that includes internal or bot accounts.
        </li>
        <li>
          <strong>Define D1 return in PostHog.</strong> D1 retention means: a
          user who performed any qualifying event (reading, video play, word
          lookup) on day 0 of their cohort week, and returned to perform any
          qualifying event on day 1 or 2 (within 48 hours). In PostHog Retention:
          <ol type="a">
            <li>
              Open <strong>Retention</strong> under Analysis. Select "Retention
              type: Recurring" (not "First Time").
            </li>
            <li>
              Set the start event to{" "}
              <code>reading_session_started</code> or{" "}
              <code>$pageview</code> filtered to reader or shorts URLs.
            </li>
            <li>
              Set the return event to the same event.
            </li>
            <li>
              Set period to "Day". Set the time range to "Last 8 weeks."
            </li>
            <li>
              Apply your de-alting cohort as a filter under "Filter by cohort."
            </li>
          </ol>
        </li>
        <li>
          <strong>Read the Day 1 column.</strong> The Day 1 column shows the
          percentage of users who returned exactly one day after their first
          qualifying event. Write this number in your founder journal. LangoBee's
          June 2026 snapshot shows approximately 24% of real signups ever return
          at all; your D1 number may be higher or lower depending on how you
          define the qualifying event.
        </li>
        <li>
          <strong>Save and name the chart.</strong> Save this retention chart as
          "D1 retention (de-alted) - wk04 baseline." Pin it to your main
          PostHog dashboard. This is the number your retention hook will try to
          move.
        </li>
        <li>
          <strong>Add a D7 and D30 row.</strong> Read the Day 7 and Day 30
          columns from the same retention chart. Write all three numbers (D1, D7,
          D30) as fractions: "N returned of M who were eligible." Percentages
          without the denominator are not useful at small n.
        </li>
      </ol>

      {/* ---- PART 4: COHORT CURVE SHAPE ---- */}
      <AnchorHeading as="h2" id="part-4-curve-shape">
        Part 4: Read the curve shape (10 minutes)
      </AnchorHeading>

      <ol start={16}>
        <li>
          <strong>Plot the two cohorts.</strong> From the de-alted Supabase data
          (or PostHog cohort table), locate these two cohort weeks:
          <ul>
            <li>
              <strong>May 18 week:</strong> 15 signups, 12 activated, 6 returned
              later.
            </li>
            <li>
              <strong>May 25 week:</strong> 19 signups, 7 activated, 3 returned
              later.
            </li>
          </ul>
          Calculate the return rate for each cohort as a percentage of activated
          users: May 18 is 6/12 = 50%. May 25 is 3/7 = 43%. Write both numbers.
        </li>
        <li>
          <strong>State what you can conclude.</strong> Two data points. Write one
          sentence on whether the curve is flattening or decaying based on these
          two cohorts, and one sentence on why this conclusion is not statistically
          reliable. The honest answer: two data points with n under 15 per cohort
          produce a 95% confidence interval wider than the observed difference.
          You cannot yet tell the two patterns apart.
        </li>
        <li>
          <strong>State what you need to know.</strong> Write the sample size you
          would need to distinguish a flattening curve (floor at 40%) from a
          decaying one (trending toward 0%) with reasonable confidence. A rough
          answer: you need at least 30 activated users per cohort week to draw
          any curve-shape conclusion. Write how many weeks of current growth rate
          that would require, using LangoBee's recent signup-to-activation
          numbers.
        </li>
      </ol>

      {/* ---- PART 5: SELF-GRADING ---- */}
      <AnchorHeading as="h2" id="self-grading">
        Self-grading rubric
      </AnchorHeading>

      <p>Check each item before you close the session.</p>

      <ul>
        <li>
          <strong>Retrieval drill:</strong> All three answers (broken vacuum,
          activation definition, time-to-value event) written from memory before
          opening notes. (Pass / Did not attempt)
        </li>
        <li>
          <strong>Hook comparison table:</strong> All three hooks evaluated with
          all five columns filled in. (Pass / Incomplete)
        </li>
        <li>
          <strong>Hook chosen with written rationale:</strong> One hook selected,
          one sentence written explaining the choice. (Pass / Not written)
        </li>
        <li>
          <strong>Event spec complete:</strong> Every PostHog event for the chosen
          hook specified with name, fired-when condition, properties, and success
          metric. (Pass / Missing events)
        </li>
        <li>
          <strong>D1 dashboard live:</strong> Retention chart saved in PostHog,
          de-alting filter applied, chart named and pinned, D1/D7/D30 numbers
          written as fractions. (Pass / Not built)
        </li>
        <li>
          <strong>Curve shape read honestly:</strong> Two cohort return rates
          calculated, conclusion written with the small-n caveat. (Pass /
          Over-concluded)
        </li>
        <li>
          <strong>Null hypothesis written:</strong> One sentence stating the D1
          rate you expect if the hook has no effect. (Pass / Not written)
        </li>
      </ul>

      <p>
        If any item is "Not built" or "Incomplete," complete it before the next
        lecture. The D1 dashboard is the measurement instrument for the rest of
        the retention phase. Running without it means you have no way to judge
        whether the hook you ship is working.
      </p>
    </>
  );
}

export const wk04SectionSearchBody =
  "retention hook PWA push notification daily email streak surface event spec D1 dashboard PostHog de-alting cohort curve flattening decaying small-n LangoBee May cohorts retrieval drill broken vacuum activation time-to-value section worksheet week 4";
