import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk12SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="capstone-working-session">
        Section: Capstone working session
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 12 · Synthesis · Capstone due</p>

      <p>
        This is the capstone session. You will present the $10K MRR operating
        plan you built this week, red-team it against the kill criteria, and
        run the weekly cadence once end to end. Everything operates on the real
        LangoBee business.
      </p>

      <p>
        No slides are required. Your artifacts are: the operating plan document,
        the kill-criteria checklist, and the Monday report you ran this week.
        Bring all three open before you start Part 0.
      </p>

      {/* ---- RETRIEVAL DRILL ---- */}
      <AnchorHeading as="h2" id="part-0-retrieval-drill">
        Part 0: Whole-course retrieval drill (5 minutes)
      </AnchorHeading>

      <p>
        Do not open your notes. One question per phase. Write your answers
        before moving to Part 1. If you cannot answer a question from memory,
        note the gap: that is the section of the course to re-read before
        the capstone is submitted.
      </p>

      <ol>
        <li>
          <strong>Foundations (weeks 1-2).</strong> State LangoBee's current
          thesis in one sentence in the exact format from week 2: customer,
          problem, and willingness to pay. Then state the kill threshold you
          wrote in THESIS.md: the specific metric and number that would
          falsify it.
        </li>
        <li>
          <strong>Retention (weeks 3-5).</strong> What is LangoBee's D1
          return rate on de-alted, bot-excluded real cohorts from the May 18
          and May 25 weeks? State the number. Then name the one retention
          hook you shipped and the PostHog event that measures whether it
          is working.
        </li>
        <li>
          <strong>Monetization (weeks 6-8).</strong> State the MRR model
          from week 8 in one line: target subscriber count, ARPA, and the
          monthly churn rate the model assumed. Then state whether
          LangoBee's current churn is above or below the model's assumption,
          and how you know.
        </li>
        <li>
          <strong>Distribution (weeks 9-11).</strong> Name the one
          community-launch channel you ran in week 9 and the UTM slug you
          used. State its conversion: signups generated, activation rate,
          and whether it met the channel-fit bar you set before launching.
        </li>
        <li>
          <strong>Synthesis (this week).</strong> State the Max MRR formula
          from memory. Then plug in LangoBee's current new-MRR rate and
          cancellation rate and state the ceiling it implies.
        </li>
      </ol>

      <p>
        If you could not answer all five from memory, take 10 minutes to scan
        the relevant week's reading before continuing. The operating plan you
        present in Part 3 must reference all five phase outputs.
      </p>

      {/* ---- PART 1: RUN THE CADENCE ---- */}
      <AnchorHeading as="h2" id="part-1-run-the-cadence">
        Part 1: Run the Monday cadence once end to end (20 minutes)
      </AnchorHeading>

      <p>
        The Monday cadence is the operating system. Before planning anything
        new, grade last week.
      </p>

      <ol start={6}>
        <li>
          <strong>Open langobee-intel.</strong> Create this week's Monday
          report entry. The format, established over the past twelve weeks,
          is: north-star table first, then theme-blocked calendar, then the
          graded bets list. Do not skip the north-star table even if the
          numbers are discouraging.
        </li>
        <li>
          <strong>Grade last week.</strong> For each bet you placed last
          Monday, write one of three grades: green (met the week's input
          metric target), yellow (within 20% of target), red (missed by
          more than 20% or did not run). A bet left ungraded is treated as
          red. Write the grade and a one-sentence diagnosis, not a
          narrative excuse.
        </li>
        <li>
          <strong>Fill the north-star table.</strong> Five rows, from
          memory of what the numbers were as of Sunday evening. The table
          must include: real WAU (de-alted), D1 return rate (latest
          cohort), MRR, trial starts (cumulative), and one input metric
          from your current growth bet. If any cell is unknown, write
          "unknown" and flag it for the Wednesday agent pull.
        </li>
        <li>
          <strong>Upgrade one metric to Amazon WBR standard.</strong> Pick
          one metric in your north-star table that is currently an output
          metric (you can only observe it). Rewrite it as a controllable
          input metric (you can act on it this week). Example: "D1 return
          rate" is an output; "new push opt-ins this week" is the
          corresponding input. Write the input metric and the threshold
          that counts as a green grade.
        </li>
        <li>
          <strong>Commit the report to langobee-intel.</strong> The entry
          is not done until it is committed. An uncommitted report does not
          close the loop; the next session cannot read it.
        </li>
      </ol>

      {/* ---- PART 2: RED-TEAM THE PLAN ---- */}
      <AnchorHeading as="h2" id="part-2-red-team">
        Part 2: Red-team against the self-deception checklist (25 minutes)
      </AnchorHeading>

      <p>
        Before presenting the operating plan, run it through the five
        self-deceptions that have appeared in this course. Each one has
        shown up in LangoBee's own numbers at least once in the past twelve
        weeks. Be precise: name the specific number in your plan that each
        check could invalidate.
      </p>

      <ol start={11}>
        <li>
          <strong>Vanity count check.</strong> Find the largest raw count in
          your plan (registered users, total impressions, total video plays).
          Restate it as a cohort-based rate. If the rate version of the same
          number does not support the plan, revise the plan before
          continuing.
        </li>
        <li>
          <strong>Bot-signup inflation check.</strong> LangoBee's June 1
          week added 52 apparent signups of which approximately 1 was real.
          Any growth projection that starts from total signup counts is
          wrong by a factor that cannot be assumed away. State the
          bot-excluded real signup rate your plan uses. If you do not know
          it, pause and compute it from Supabase before continuing.
        </li>
        <li>
          <strong>Founder dogfooding inflation check.</strong> The June 2026
          snapshot showed 59% of all PostHog events were generated by the
          founder account. Any engagement or retention figure that includes
          founder activity is fiction. Confirm that every metric in your
          plan was pulled with the de-alted filter active. If it was not,
          re-pull and re-state.
        </li>
        <li>
          <strong>One-spike-is-a-channel check.</strong> A single Show HN
          post, a single creator mention, or a single Reddit thread can
          produce a traffic spike that looks like a channel. A channel is
          repeatable: you can go back and do it again with a predictable
          result. For each acquisition channel in your plan, state how many
          independent repetitions you have run and what the variance was
          across them. If the answer is "one," label it "spike, not channel"
          in the plan.
        </li>
        <li>
          <strong>Max MRR ceiling check.</strong> Using the formula from
          lecture 2 (Max MRR equals new MRR divided by cancellation rate),
          compute the ceiling implied by your plan's assumed acquisition
          rate and churn rate. If the ceiling is below $10K at the plan's
          target churn rate, the plan is internally inconsistent: you must
          either lower the churn assumption or raise the acquisition rate.
          Revise and restate.
        </li>
      </ol>

      <p>
        After running all five checks, mark each as: clean (the plan
        survives the check), revised (you updated the plan to fix it), or
        blocked (you do not have the data to run the check and must get it
        before submitting). A blocked check is not a passing grade.
      </p>

      {/* ---- PART 3: PRESENT THE PLAN ---- */}
      <AnchorHeading as="h2" id="part-3-present-plan">
        Part 3: Present the operating plan (15 minutes)
      </AnchorHeading>

      <p>
        The operating plan is the capstone deliverable. It has four sections.
        Present each one in the order listed. You are not reading slides; you
        are narrating a plan you built and believe in.
      </p>

      <ol start={16}>
        <li>
          <strong>Sequenced bets (3 minutes).</strong> State the three bets
          in order. Bet 1 must be a retention bet (the D1 bar: 30% or above
          on a real cohort of at least 20 users). Bet 2 must be a revenue
          bet (the first dollar: at least one trial started and converted).
          Bet 3 must be a channel bet (one repeatable acquisition path with
          at least three independent repetitions and a cost-per-signup you
          can defend). State the evidence threshold that closes each bet and
          opens the next.
        </li>
        <li>
          <strong>Channel math (3 minutes).</strong> For the channel bet,
          state the arithmetic: required trial starts per month to reach
          $10K MRR at the plan's ARPA and churn rate, required signups per
          month at the observed trial-start rate, and required traffic per
          month at the observed signup rate. If any conversion rate in the
          chain is an assumption rather than a measured number, say so and
          state the evidence you will use to validate it.
        </li>
        <li>
          <strong>Kill criteria (3 minutes).</strong> For each of the three
          bets, state the kill criterion in the exact format from week 2:
          "If [metric] is below [threshold] by [date], this bet is dead and
          I move to the fallback." Name the fallback for each bet. A bet
          with no fallback named is not a plan; it is a hope.
        </li>
        <li>
          <strong>12-month view (3 minutes).</strong> State the month you
          expect to close Bet 1, the month you expect to close Bet 2, and
          the month you expect to reach $10K MRR. Map each month to a
          specific observable event (a PostHog cohort table, a Stripe MRR
          figure, a UTM-tracked acquisition run) that will confirm the
          milestone. If the timeline requires all three bets to run in
          parallel, explain why you believe the single-founder bandwidth
          constraint does not apply.
        </li>
        <li>
          <strong>Course grade (3 minutes).</strong> Grade the twelve weeks
          against the course's mission. For each of the five phases,
          state: one thing proven (evidence from LangoBee's real numbers),
          one thing killed (a hypothesis that failed), and one thing still
          open (a question the course did not close). Read these aloud.
          Anything "still open" is the agenda for the next session after
          today.
        </li>
      </ol>

      {/* ---- SELF-GRADING RUBRIC ---- */}
      <AnchorHeading as="h2" id="self-grading-rubric">
        Self-grading rubric
      </AnchorHeading>

      <p>
        Grade yourself on each item below before submitting. Green means the
        criterion is fully met. Yellow means it is met with caveats you have
        named. Red means it is not met and you know why.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9em",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                  width: "60%",
                }}
              >
                Criterion
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Your grade (G / Y / R)
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Evidence or caveat
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "Monday report committed to langobee-intel with north-star table and graded bets",
              "All five retrieval-drill questions answered from memory (or gaps named)",
              "Five self-deception checks run; each marked clean, revised, or blocked",
              "Operating plan has three sequenced bets in the correct order (retention, dollar, channel)",
              "Channel math is stated with measured conversion rates, not assumptions, or assumptions are labeled",
              "Kill criteria written in state-plus-date format for all three bets",
              "12-month timeline is traceable to specific observable events in PostHog or Stripe",
              "Course grade completed: proven, killed, open for each of the five phases",
              "Max MRR ceiling check does not contradict the plan's $10K target",
              "All metrics in the plan were pulled with the de-alted, bot-excluded filter active",
            ].map((criterion, i) => (
              <tr key={i}>
                <td
                  style={{
                    padding: "6px 10px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {criterion}
                </td>
                <td
                  style={{
                    padding: "6px 10px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {" "}
                </td>
                <td
                  style={{
                    padding: "6px 10px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Submit when all ten criteria are green or yellow. A red on any
        criterion means the capstone is incomplete. Fix the red before
        submitting: a submitted capstone with a known red is not a
        capstone, it is a draft.
      </p>

      {/* ---- INTERLEAVING TASK ---- */}
      <AnchorHeading as="h2" id="interleaving-task">
        Interleaving task: the cohort table from week 4 (10 minutes)
      </AnchorHeading>

      <p>
        Pull the D1 cohort table from PostHog using the same de-alted filter
        you built in week 4. Compare the May 18 cohort (15 real signups, 12
        activated, 6 returned) against the most recent full cohort in the
        table. Write three numbers: D1 retention then, D1 retention now,
        and the direction of change. If retention has improved, name the
        specific hook that you shipped between week 4 and today. If it has
        not improved, name the hypothesis for why not, and check whether
        your Bet 1 kill criterion is triggered.
      </p>

      <p>
        This task is not new work. It is confirmation that the operating
        plan is grounded in the same measurement system the course built in
        week 4.
      </p>
    </>
  );
}

export const wk12SectionSearchBody =
  "capstone working session operating plan red-team kill criteria self-deception checklist vanity count bot signup inflation founder dogfooding one spike channel Max MRR ceiling Monday cadence langobee-intel north-star table retrieval drill whole-course synthesis week 12";
