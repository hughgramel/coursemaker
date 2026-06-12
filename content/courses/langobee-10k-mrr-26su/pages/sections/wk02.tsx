import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk02SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="fork-decision-memo">
        Section: Write the fork decision memo
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 2 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have a written fork decision memo
        that treats the premium-library direction and the freemium-shorts
        direction as two separate falsifiable hypotheses, each with its own
        metric, kill threshold, and time box. You will also have a decision date
        on the calendar. Nothing about today's session requires shipping code;
        it requires thinking precisely and writing the results down.
      </p>

      <p>
        Work on your own product throughout. The memo you write here will
        become the basis for THESIS.md in your repo. Complete the steps in
        order.
      </p>

      <AnchorHeading as="h2" id="retrieval-drill">
        Part 0: Retrieval drill (5 minutes, no notes)
      </AnchorHeading>

      <p>
        Before opening anything, answer these from memory. Write your answers
        in your founder journal, then check them against last week's reading.
      </p>

      <ol>
        <li>
          <strong>De-alting.</strong> What is de-alting and why does it
          matter for reading LangoBee's cohort data? Name the specific
          inflation it removes.
        </li>
        <li>
          <strong>Vanity vs actionable.</strong> LangoBee's PostHog project
          shows 103 registered profiles and 5,225 word_lookup_opened events in
          30 days. Which of those two numbers is more actionable and why? What
          is the one-sentence test from Ries (2009) you applied?
        </li>
        <li>
          <strong>AARRR stages.</strong> Name all five AARRR stages in order.
          Then place these two LangoBee data points in their correct stage:
          (a) 24% of real signups ever return; (b) zero trial_started events
          ever fired.
        </li>
        <li>
          <strong>North-star metric.</strong> What is the difference between a
          north-star metric and a vanity metric? Name the candidate north-star
          metric you identified last week for LangoBee.
        </li>
      </ol>

      <p>
        Check your answers before moving on. If you missed (b) from question 2,
        re-read Ries (2009) before writing the memo below: the actionability
        test is a prerequisite for writing kill thresholds.
      </p>

      <AnchorHeading as="h2" id="part-1-state-the-two-directions">
        Part 1: State the two directions as falsifiable hypotheses
      </AnchorHeading>

      <p>
        A falsifiable hypothesis is a claim that can be proven wrong by
        data. "We will grow the shorts feed" is not falsifiable. "Spanish
        learners who watch three shorts in their first session will return at
        a rate above 30% in the following seven days" is falsifiable.
      </p>

      <ol start={5}>
        <li>
          <strong>Write Hypothesis A: the premium library.</strong> Use this
          template exactly:
          <pre>{`Hypothesis A (library): [named customer segment] will [specific behavior]
at or above [metric threshold] within [time window], demonstrating
that the premium-library thesis is valid.`}</pre>
          The named customer segment must be specific: not "language learners"
          but "self-directed adult Spanish learners pursuing comprehensible
          input." The specific behavior must be something PostHog can measure:
          "start a 14-day trial" or "return for a second reading session within
          7 days of signup." Write your version in your founder journal.
        </li>
        <li>
          <strong>Write Hypothesis B: the shorts feed.</strong> Use the same
          template:
          <pre>{`Hypothesis B (shorts): [named customer segment] will [specific behavior]
at or above [metric threshold] within [time window], demonstrating
that the freemium-shorts thesis is valid.`}</pre>
          Do not write both hypotheses to succeed on the same metric. If both
          claim "users return at 30% D7," you cannot distinguish the theses.
          Each hypothesis must be falsifiable independently.
        </li>
        <li>
          <strong>Gut-check each hypothesis.</strong> For each one, answer:
          "If this exact behavior occurred at the exact threshold, would I
          personally be convinced enough to double down?" If the answer is no,
          raise the threshold. Hypotheses you would explain away after they hit
          are not real hypotheses.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-write-kill-thresholds">
        Part 2: Write the kill thresholds
      </AnchorHeading>

      <p>
        A kill threshold is the specific condition under which you stop the
        experiment and do not continue. Annie Duke (2022) calls these
        "state-plus-date conditions." They have two required parts: a state
        (a metric below a number) and a date (the calendar date at which you
        read the state).
      </p>

      <ol start={8}>
        <li>
          <strong>Write the kill threshold for Hypothesis A.</strong> Format:
          <pre>{`Kill A: If [metric] is below [number] on [calendar date],
the library thesis is falsified and building for it stops.`}</pre>
          The metric should be the same one named in Hypothesis A. If
          Hypothesis A is about trial starts, Kill A is "fewer than N trial
          starts." The number should be one where, if you observed it, you
          would genuinely stop, not rationalize.
        </li>
        <li>
          <strong>Write the kill threshold for Hypothesis B.</strong> Same
          format. If Hypothesis B is about D7 retention on the shorts surface,
          Kill B names the D7 retention floor.
        </li>
        <li>
          <strong>Run the pre-mortem for each threshold.</strong> For each
          kill threshold: write the three most convincing stories you would
          tell yourself to avoid calling the experiment dead even if the metric
          missed. Write them down. Then write one sentence explaining why each
          story does not override the threshold. This step takes 10 minutes and
          is not optional. Kill thresholds without a pre-mortem are aspirations.
          (Duke, 2022)
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-set-the-time-box">
        Part 3: Set the time box and decision date
      </AnchorHeading>

      <ol start={11}>
        <li>
          <strong>Set the time box.</strong> Both hypotheses must have the same
          time box so they can be compared fairly. Pick a window between 4 and
          8 weeks from today. Write the start date and end date as calendar
          dates, not as "4 weeks from now."
        </li>
        <li>
          <strong>Set the decision date.</strong> The decision date is the
          calendar date at which you will read the results and make the fork
          decision. It must be on or after the end of the time box, but not
          more than one week after. Write this date into your calendar now.
          Block 90 minutes. Label it "fork decision review."
        </li>
        <li>
          <strong>Decide which hypothesis is in active test.</strong> You can
          run only one experiment at a time with full attention. Pick one. You
          are not required to pick the one you prefer; you are required to state
          which one you are testing and why the other is deferred. Write one
          sentence for each: "Hypothesis A is active because..." and
          "Hypothesis B is deferred because..."
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-write-the-memo">
        Part 4: Assemble and write the memo
      </AnchorHeading>

      <p>
        Now compile everything into a single document. The memo is not a
        narrative; it is a structured record. Use the template below. Fill in
        every field; leave none blank. If you do not know a number, write
        "unknown, need to measure" and note how you will get it before the
        time box opens.
      </p>

      <pre>{`FORK DECISION MEMO
Date written: [today's date]
Decision date: [calendar date]
Time box: [start date] to [end date]

HYPOTHESIS A (LIBRARY)
Claim: [one falsifiable sentence]
Customer: [specific named segment]
Metric: [named PostHog event or SQL measure]
Win threshold: [number] by [date]
Kill threshold: below [number] on [calendar date]
Active or deferred: [active / deferred]
Deferred reason (if deferred): [one sentence]

HYPOTHESIS B (SHORTS)
Claim: [one falsifiable sentence]
Customer: [specific named segment]
Metric: [named PostHog event or SQL measure]
Win threshold: [number] by [date]
Kill threshold: below [number] on [calendar date]
Active or deferred: [active / deferred]
Deferred reason (if deferred): [one sentence]

CURRENT CONTEXT (June 2026 snapshot)
Library: 17,440 texts, 24% ever-return rate, 0 trial_started events ever
Shorts: 408 impressions, 101 completions, 13 real users, 1 share, 28% completion
MRR: $0
Decision-maker: [your name]`}</pre>

      <ol start={14}>
        <li>
          <strong>Write the completed memo into a file.</strong> Save it as
          <code>docs/fork-decision-2026.md</code> in your repo and commit it.
          The commit message should be "docs: add fork decision memo for
          library vs shorts, [today's date]." Version-controlling this is not
          ceremony; it is what lets a future session, or a future you, audit
          whether the decision was made deliberately and what evidence
          justified it.
        </li>
        <li>
          <strong>Create THESIS.md.</strong> The active hypothesis from the
          memo becomes the locked claim in THESIS.md. Add the win condition and
          the kill threshold. Commit it separately: "docs: add THESIS.md with
          active hypothesis and kill threshold."
        </li>
      </ol>

      <AnchorHeading as="h2" id="interleaving-week-1">
        Interleaving: one concept from week 1
      </AnchorHeading>

      <p>
        Before closing the session, apply one concept from two weeks earlier
        to the memo you just wrote.
      </p>

      <ol start={16}>
        <li>
          <strong>Map each hypothesis metric to an AARRR stage.</strong> Look
          at the metric you named for Hypothesis A and the metric for Hypothesis
          B. Write which AARRR stage each one lives in (acquisition, activation,
          retention, revenue, or referral). If both metrics live in the same
          stage, that is a signal the two theses are harder to distinguish than
          you thought. Name the stage and note whether you need a different
          metric for one of them.
        </li>
      </ol>

      <AnchorHeading as="h2" id="self-grade">
        Self-grading rubric
      </AnchorHeading>

      <p>Check each item before you leave the session.</p>

      <ul>
        <li>
          <strong>Hypothesis A is falsifiable.</strong> A specific behavior,
          a specific threshold, a specific time window. No open-ended language
          ("grow," "explore," "test").
        </li>
        <li>
          <strong>Hypothesis B is falsifiable.</strong> Same standard. The two
          hypotheses use different metrics so they can be distinguished.
        </li>
        <li>
          <strong>Each hypothesis has a kill threshold.</strong> State plus
          date. Not "if things go badly" but a specific number on a specific
          calendar date.
        </li>
        <li>
          <strong>Pre-mortem completed for each threshold.</strong> Three
          counter-stories written and each one answered.
        </li>
        <li>
          <strong>Decision date is on your calendar.</strong> 90-minute block,
          labeled, not moveable.
        </li>
        <li>
          <strong>Memo is committed to the repo.</strong> As
          <code>docs/fork-decision-2026.md</code> with the active hypothesis
          also in THESIS.md.
        </li>
        <li>
          <strong>Each metric is mapped to an AARRR stage.</strong> No
          unmapped metrics in the memo.
        </li>
      </ul>

      <p>
        If any item is unchecked, complete it before moving to week 3. The fork
        decision memo is the prerequisite for the activation work in week 3:
        you cannot identify the activation event for a thesis you have not
        stated.
      </p>
    </>
  );
}

export const wk02SectionSearchBody =
  "fork decision memo premium library freemium shorts hypothesis kill threshold time box decision date THESIS.md pre-mortem AARRR retrieval drill falsifiable hypothesis LangoBee week 2 section worksheet";
