import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk07SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="audit-the-paywall">
        Section: Audit the live paywall
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 7 · Hands-on worksheet</p>

      <p>
        By the end of this section you will have a complete map of every
        point in LangoBee's current flow where payment is mentioned, a
        diagnosis of why zero real users have entered the trial funnel,
        and a written recommendation for one change to make this week.
        Work on the live product throughout. No staging environment.
      </p>

      {/* ---- RETRIEVAL DRILL ---- */}
      <AnchorHeading as="h2" id="part-0-retrieval">
        Part 0: Five-minute retrieval drill (week 6 concepts)
      </AnchorHeading>

      <p>
        Close all readings. Answer from memory. Write your answers in
        your founder journal before reading on. Checking answers takes
        30 seconds after each item.
      </p>

      <ol>
        <li>
          <strong>Value metric.</strong> State LangoBee's value metric
          in one sentence. What did you decide it measures? What PostHog
          event name tracks the action most correlated with it?
        </li>
        <li>
          <strong>Trial benchmarks.</strong> What does Poyar (2026) report
          as the "good" and "great" trial-to-paid conversion rates for a
          CC-required free trial? What does the RevenueCat 2025 benchmark
          report as the median trial-to-paid rate across all subscription
          apps?
        </li>
        <li>
          <strong>WTP questions.</strong> Name the three willingness-to-pay
          question types you learned in week 6. For each, write the exact
          wording you would use for LangoBee at $7.99/month.
        </li>
        <li>
          <strong>Interleave (week 4):</strong> Name one retention hook
          you identified in week 4 that doubles as a trial-nurture
          touchpoint. How would you repurpose it as a day-3 trial email
          trigger? Write the trigger condition in one sentence.
        </li>
      </ol>

      <p>
        Scoring: 4/4 correct means you can use the concepts without
        looking them up. 2-3/4 means re-read the week 6 reading before
        continuing. Below 2/4: re-read week 6 fully before this section.
      </p>

      {/* ---- PART 1: STRANGER WALK ---- */}
      <AnchorHeading as="h2" id="part-1-stranger-walk">
        Part 1: Walk the app as a stranger
      </AnchorHeading>

      <p>
        Open an incognito window. Go to langobee.com. Do not log in.
        Walk through every path a new user can take, writing down every
        point where payment is mentioned. For each point, record:
      </p>

      <ol start={5}>
        <li>
          <strong>Map every payment mention.</strong> Create a table with
          these four columns: (a) screen or URL, (b) exact text or UI
          element that mentions payment or premium, (c) what the user has
          done in the product by this point, and (d) whether demonstrated
          value has occurred yet (yes / no / partial). A row for each
          payment mention found.
        </li>
        <li>
          <strong>Count the experience deficit.</strong> For every "no"
          in the demonstrated-value column: how many taps, videos watched,
          or comprehension scores has the user seen before hitting this
          gate? If the answer is zero, write "zero-experience gate" next
          to that row.
        </li>
        <li>
          <strong>Identify the credit-card friction point.</strong> Find
          the exact screen where a new user is asked for a credit card.
          Write down (a) what they have seen in the product before reaching
          it, (b) whether the credit card ask comes before or after the
          first comprehension score is visible, and (c) whether a real
          user on Discord could have seen the product's core value before
          this screen.
        </li>
      </ol>

      {/* ---- PART 2: UPGRADE TRIGGER MAP ---- */}
      <AnchorHeading as="h2" id="part-2-trigger-map">
        Part 2: Map every upgrade trigger
      </AnchorHeading>

      <ol start={8}>
        <li>
          <strong>List every upgrade trigger in the codebase.</strong>{" "}
          Search the codebase for "premium", "trial", "upgrade", "paywall",
          and "subscribe". For each result, record: (a) file and line,
          (b) the user action or condition that fires it, (c) what the
          user sees, and (d) which of the four placement strategies
          (onboarding, contextual, buy-now, campaign) it matches from
          Parizek (2024).
        </li>
        <li>
          <strong>Check for contextual triggers.</strong> A contextual
          trigger fires in response to a user action: a word tap, a video
          completion, or a comprehension score appearing. Does any current
          trigger fire after one of these events? Write "yes" with the
          trigger name, or "none found."
        </li>
        <li>
          <strong>Check for inaction triggers.</strong> An inaction trigger
          fires when a user who activated has not returned in N days. Does
          any current trigger use this condition? Write "yes" or "none
          found."
        </li>
        <li>
          <strong>Note the comprehension-score moment.</strong> Open a
          video in the reader as a logged-in user. After watching 30 seconds,
          check whether the comprehension score updates and is visible.
          Write: (a) the exact screen element that shows the score, (b)
          whether a premium prompt appears near it, and (c) whether this
          moment qualifies as "demonstrated value" per the Meinertzhagen
          (2023) definition (the user has seen a specific, personal result).
        </li>
      </ol>

      {/* ---- PART 3: DIAGNOSIS ---- */}
      <AnchorHeading as="h2" id="part-3-diagnosis">
        Part 3: Diagnose the zero-trial problem
      </AnchorHeading>

      <ol start={12}>
        <li>
          <strong>Pull the PostHog funnel.</strong> Open PostHog project
          374549. Build a funnel: signed_up &rarr; video_opened (or
          equivalent) &rarr; word_lookup_opened &rarr; trial_started.
          Set the date range to "Last 90 days." Write the conversion rate
          at each step.
        </li>
        <li>
          <strong>Find where the funnel ends.</strong> At which step does
          the funnel reach zero? Write the step name and the count at
          that step.
        </li>
        <li>
          <strong>Classify the problem using the four churn
          categories.</strong> Based on your funnel data, which category
          applies: never-activated, value-not-seen, price, or competitive?
          Write one sentence of evidence from PostHog for the category
          you chose.
        </li>
        <li>
          <strong>Apply the paywall-moment test.</strong> Using your
          stranger walk (steps 5-7) and your funnel data (steps 12-14),
          answer: does the current paywall appear before or after the
          user's first demonstrated-value moment? If before, identify the
          one change (move the paywall to after the first comprehension
          score is shown) that addresses the diagnosis. If after, the
          problem is something else: write what.
        </li>
      </ol>

      {/* ---- PART 4: RECOMMENDATION ---- */}
      <AnchorHeading as="h2" id="part-4-recommendation">
        Part 4: Write the one-change recommendation
      </AnchorHeading>

      <ol start={16}>
        <li>
          <strong>Write the paywall-move recommendation.</strong> In your
          founder journal, write a one-paragraph recommendation with this
          structure: (a) current state (where the paywall is today, what
          the user has seen before hitting it), (b) proposed change (where
          to move it and what trigger to use), (c) expected direction of
          change in trial_started rate (cite Meinertzhagen 2023 or
          Parizek 2024 as the mechanism), and (d) one risk of the move.
        </li>
        <li>
          <strong>Evaluate the hard-paywall decision.</strong> Barnard
          and Carter (2026) argue that hard paywalls convert 5x better
          than freemium at sub-billion-dollar scale. LangoBee currently
          uses a hard paywall with zero conversions. Write one sentence:
          is the problem the hard paywall itself, or the placement of the
          hard paywall? What is the smallest change you would make to test
          which is true?
        </li>
        <li>
          <strong>Write the instrumentation gap.</strong> To confirm any
          paywall-placement change worked, you need a funnel event
          immediately before and after the paywall. List the two PostHog
          events you would add (or verify already exist) to instrument the
          paywall moment. Write their names and the user action that
          triggers each.
        </li>
      </ol>

      {/* ---- SELF-GRADING RUBRIC ---- */}
      <AnchorHeading as="h2" id="rubric">Self-grading rubric</AnchorHeading>

      <p>
        Grade yourself before leaving. Each item is worth one point.
        A score of 5/6 or higher means the section is complete.
      </p>

      <ul>
        <li>
          <strong>1. Payment-mention map:</strong> You have a table with
          at least three rows, each naming a screen, the payment text
          found, and a demonstrated-value yes/no rating.
        </li>
        <li>
          <strong>2. Upgrade trigger list:</strong> You have found and
          listed every place in the codebase where an upgrade trigger
          fires, with file/line references.
        </li>
        <li>
          <strong>3. Comprehension-score moment:</strong> You have
          written whether the comprehension score is visible before the
          first payment ask and whether a contextual trigger fires near it.
        </li>
        <li>
          <strong>4. PostHog funnel:</strong> You have run the four-step
          funnel and know the step where the funnel reaches zero.
        </li>
        <li>
          <strong>5. One-change recommendation:</strong> You have a
          written paragraph naming the specific move (not "improve the
          paywall") with a cited mechanism and a named risk.
        </li>
        <li>
          <strong>6. Instrumentation gap:</strong> You have named the
          two PostHog events needed to measure the change.
        </li>
      </ul>

      <p>
        If your score is below 5/6, complete the missing items tonight.
        The week 8 unit-economics model depends on having a real
        trial_started rate, even a hypothetical one based on your
        one-change scenario. Without it, the model has no input.
      </p>
    </>
  );
}

export const wk07SectionSearchBody =
  "paywall audit stranger walk upgrade trigger map comprehension score zero trial diagnosis PostHog funnel payment mention map hard paywall placement recommendation instrumentation gap week 7 section worksheet monetization LangoBee";
