import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Callout,
  Takeaways,
} from "@/components/ReadingPage";

export function Wk02SectionPage() {
  return (
    <ReadingPage
      id="wk02-section"
      title="Week 2 Section — Activation audit"
      kicker="B2C to $10k MRR · Autumn 2026 · Section"
    >
      <ReadingFraming>
        <p>
          This section is a structured pair exercise. You and a partner each
          screen-share your onboarding flow end-to-end, observe where the
          other person hesitates or loses the thread, and leave with one
          specific drop-off identified and a fix scoped to ship this week.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You have measured your
          activation rate for the past 30 days (Week 2 milestone 1) and
          walked your own onboarding on a fresh device with screenshots
          (milestone 2). Both are required before section starts.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="before-section">Before section (do this alone)</AnchorHeading>
      <p>
        Complete these three steps before arriving. If you haven&rsquo;t, you
        cannot be a useful observer for your partner.
      </p>
      <ol>
        <li>
          <strong>Measure your activation rate.</strong> Pull 30 days of data.
          Write the number down: <em>X% of users who sign up reach [your
          activation event] within 24 hours.</em>
        </li>
        <li>
          <strong>Walk your own onboarding on a fresh device or incognito
          window.</strong> Screenshot every screen. Note every moment of
          friction or confusion in a list.
        </li>
        <li>
          <strong>Identify your best guess</strong> at the largest drop-off
          step before you arrive. You will test this guess in the session.
        </li>
      </ol>

      <AnchorHeading as="h2" id="pairing">Pairing up (5 minutes)</AnchorHeading>
      <p>
        Pair with someone whose product you have never used. Same-category
        pairs (both fitness apps, both finance tools) are fine and often more
        useful because you bring genuine domain intuition.
      </p>
      <ol>
        <li>Exchange product URLs or app store links now.</li>
        <li>
          Decide who goes first. The first person is the &ldquo;founder&rdquo;;
          the second is the &ldquo;new user.&rdquo;
        </li>
        <li>
          The new user opens the product fresh, in incognito or on their
          phone, and shares their screen. They have never seen this product
          before.
        </li>
      </ol>

      <AnchorHeading as="h2" id="screen-share-round">Screen-share round (20 minutes per person)</AnchorHeading>
      <p>
        Each person gets 20 minutes as &ldquo;new user.&rdquo; The founder
        watches silently. Do not explain, defend, or hint. Your job is to
        observe.
      </p>
      <ol>
        <li>
          <strong>New user:</strong> go to the product&rsquo;s landing page or
          app store listing. Start from zero. Say out loud what you&rsquo;re
          reading, what you expect each button to do, and what confuses you.
          Think aloud the whole time.
        </li>
        <li>
          <strong>Founder:</strong> write down every hesitation, re-read,
          misclick, or pause. Note the exact screen label or step number where
          it happens. Do not speak.
        </li>
        <li>
          <strong>New user:</strong> stop when you either reach the product&rsquo;s
          core feature or decide you would have quit. Say which it was and why.
        </li>
        <li>
          <strong>Founder:</strong> share your drop-off step guess from the
          pre-work. Did the session confirm or contradict it?
        </li>
      </ol>
      <p>Swap roles. Repeat steps 1-4.</p>

      <AnchorHeading as="h2" id="debrief">Debrief (10 minutes together)</AnchorHeading>
      <p>
        Each founder has 5 minutes to talk through what they saw. Use this
        structure:
      </p>
      <ol>
        <li>
          Name the single biggest drop-off step your partner observed. One
          sentence: &ldquo;The biggest drop-off is [step name] because
          [observed behavior].&rdquo;
        </li>
        <li>
          State whether it is friction (extra required action), a value gap
          (user doesn&rsquo;t see the payoff yet), or a trust gap (user isn&rsquo;t
          sure it&rsquo;s safe or worth their data).
        </li>
        <li>
          Name the one change that would reduce it. Scope it to one sentence.
          &ldquo;Remove the email-confirmation gate before first use&rdquo; is
          one sentence. &ldquo;Redesign the whole onboarding&rdquo; is not.
        </li>
      </ol>

      <AnchorHeading as="h2" id="ship-this-week">Ship this week (individual commitment)</AnchorHeading>
      <p>
        Before you leave section, each founder writes down a public commitment:
      </p>
      <ol>
        <li>
          <strong>The fix:</strong> one sentence, scoped to ship by Friday.
        </li>
        <li>
          <strong>The metric:</strong> which activation metric you will watch
          (activation rate, time-to-activation, or drop-off percentage at that
          step).
        </li>
        <li>
          <strong>The baseline:</strong> today&rsquo;s number.
        </li>
        <li>
          <strong>The check-in:</strong> post your before/after as your Friday
          morning growth move this week.
        </li>
      </ol>

      <Callout title="The rule for this section">
        <p>
          Every founder ships at least one activation experiment before Friday
          EOD. A copy change counts. A removed form field counts. A rewritten
          empty-state message counts. Zero experiments shipped means the
          section didn&rsquo;t happen.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="optional-extension">Optional extension: watch a third product</AnchorHeading>
      <p>
        If time allows after both rounds, each pair picks one category-leader
        product (Duolingo, Calm, Notion, Linear) and walks through its
        onboarding together. For each screen, identify: what friction did they
        eliminate? What demo data did they pre-populate? What &ldquo;aha
        moment&rdquo; are they driving toward?
      </p>
      <p>
        Take two teardown notes to bring to lecture this week.
      </p>

      <Takeaways>
        <li>The founder role in section is to observe and not speak. If you defend, you learn nothing.</li>
        <li>One specific fix scoped in one sentence is more valuable than a long redesign wish list.</li>
        <li>Before/after measurement is not optional. An experiment without a metric is just a change.</li>
        <li>Session observation is the unscalable work that tells you what no funnel chart can.</li>
      </Takeaways>
    </ReadingPage>
  );
}

export const wk02SectionSearchBody =
  "activation audit onboarding screen-share pair exercise drop-off session observation friction empty state ship experiment section Week 2 B2C growth";
