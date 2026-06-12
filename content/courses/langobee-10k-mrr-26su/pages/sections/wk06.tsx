import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk06SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="price-as-a-hypothesis">
        Section: Price as a hypothesis
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 6 · Hands-on worksheet</p>

      <p>
        By the end of this section you will have: run five willingness-to-pay conversations using
        Mom Test discipline, completed a price-positioning worksheet against LingQ, Duolingo, and
        Dreaming Spanish, and wired the <code>trial_started</code> PostHog event to your Stripe
        webhook. The trial event is the non-negotiable output. If you leave without it firing in
        PostHog Live Events, tonight is the deadline.
      </p>

      <p>
        Work on your own product throughout. Every step is numbered; do them in order. Steps 1-5
        are retrieval and framing (30 minutes). Steps 6-10 are the WTP interviews and positioning
        worksheet. Steps 11-15 are the trial funnel wiring.
      </p>

      <AnchorHeading as="h2" id="part-1-retrieval">
        Part 1: Week 5 retrieval drill (5 minutes, closed notes)
      </AnchorHeading>

      <p>
        Close the reading. Answer these from memory before looking anything up. Write your answers
        in your founder journal.
      </p>

      <ol>
        <li>
          <strong>Name the three rules of the Mom Test</strong> (Fitzpatrick). Write each as a
          one-sentence rule, not a label.
        </li>
        <li>
          <strong>What is the difference between a compliment and a signal</strong> in a customer
          interview? Give one example of each from a hypothetical conversation about LangoBee.
        </li>
        <li>
          <strong>What is concierge onboarding?</strong> Write the exact condition under which
          week 5 said it is the right move, and the condition under which it is a waste of time.
        </li>
        <li>
          <strong>How many users did week 5 say you need to test with</strong> to uncover
          approximately 85% of usability problems (Nielsen, 2000)? What is the caveat that limits
          that number?
        </li>
        <li>
          <strong>State the one question you should never ask in a customer interview</strong>
          according to the Mom Test. Write it as a full sentence, then write the Mom Test-compliant
          version of the same question.
        </li>
      </ol>

      <p>
        Check your answers against the week 5 reading after you have written them. If you missed
        more than two, reread the Mom Test rules section before continuing.
      </p>

      <AnchorHeading as="h2" id="part-2-wtp-script">
        Part 2: Draft the willingness-to-pay interview script (20 minutes)
      </AnchorHeading>

      <p>
        The WTP interviews this week combine Mom Test discipline (ask about their life, not your
        product) with Van Westendorp price sensitivity questions (four anchored price thresholds).
        Draft your script before running any conversations.
      </p>

      <ol start={6}>
        <li>
          <strong>Write your opening sequence (3-4 questions).</strong> These must be Mom
          Test-compliant: past behavior, not hypothetical opinion. Examples:
          <ul>
            <li>"How much time did you spend practicing Spanish last week?"</li>
            <li>"What did that look like? Walk me through one session."</li>
            <li>
              "What apps or resources are you currently paying for? What do you pay per month,
              roughly?"
            </li>
          </ul>
          Write your own versions. Do not use these verbatim. The goal is to understand their
          current spending behavior before mentioning any price.
        </li>
        <li>
          <strong>Write the transition to the product (1 sentence).</strong> Format: "Let me show
          you what I'm building. I'll take two minutes." Then do a live demo: open LangoBee, pick
          a Spanish video at their stated level, let them watch 30 seconds of the word-status
          tracking in action. Do not narrate features. Let them react.
        </li>
        <li>
          <strong>Write the four Van Westendorp questions</strong> adapted to LangoBee. Use this
          template but replace the bracketed parts with product-specific language:
          <ol type="a">
            <li>
              "At what monthly price would LangoBee feel so cheap that you'd wonder about the
              quality of the content or the curation?"
            </li>
            <li>
              "At what monthly price would it start to feel like a real bargain for what you get?"
            </li>
            <li>
              "At what monthly price would it start to feel expensive, but you'd still consider it
              if you were serious about making progress in Spanish?"
            </li>
            <li>
              "At what monthly price would it be too expensive to try, no matter how good it
              was?"
            </li>
          </ol>
          Write your versions in your founder journal. Ask them in sequence. Write down the
          numbers before moving to the next question.
        </li>
        <li>
          <strong>Write the price anchor question (1 sentence).</strong> After the four Van
          Westendorp questions: "If I told you it's $7.99 per month with a free 14-day trial, what
          would your reaction be?" This question is not in the standard method. It anchors to the
          real price and measures reaction. Record the exact words they use.
        </li>
        <li>
          <strong>Write your closing question (1 sentence).</strong> Format: "Is there anything
          about the pricing model itself, not just the number, that would make you hesitate?" This
          surfaces objections to the CC-required trial structure, not just the price level.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-run-interviews">
        Part 3: Run the five WTP conversations
      </AnchorHeading>

      <p>
        Run five conversations this week. Each takes 20-30 minutes. Recruit from the same pool you
        used in week 5: the 30-person Discord, the Refold Espanol Discord, or the Dreaming Spanish
        community. Do not recruit from a panel or pay for participants. These must be real people
        in the comprehensible-input community.
      </p>

      <ol start={11}>
        <li>
          <strong>For each conversation, record:</strong>
          <ul>
            <li>
              Their current spending on language tools (monthly total, specific apps)
            </li>
            <li>
              Their four Van Westendorp answers (exact numbers for each threshold)
            </li>
            <li>Their reaction to "$7.99/mo with a 14-day free trial" (exact words)</li>
            <li>
              Their objection, if any, to the CC-required structure (exact words)
            </li>
          </ul>
          Record in your founder journal during the conversation, not from memory afterward. You
          will forget nuance within an hour.
        </li>
        <li>
          <strong>After all five conversations, tabulate the Van Westendorp numbers.</strong>{" "}
          List all five responses for each threshold in a simple table:
          <ul>
            <li>Too cheap (quality concern): five answers</li>
            <li>Good deal: five answers</li>
            <li>Getting expensive: five answers</li>
            <li>Too expensive: five answers</li>
          </ul>
          The range between the median "too cheap" and median "too expensive" is your acceptable
          price range. Where do $7.99/mo and $49/yr fall in that range?
        </li>
        <li>
          <strong>Write one sentence summarizing the price signal.</strong> Format: "Based on
          five conversations, $7.99/mo is [inside / below / above] the acceptable range, and the
          most common objection to the CC-required trial was [quote or paraphrase]." If you cannot
          write this sentence from your notes, you did not record enough during the conversations.
          Redo any where your notes are thin.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-positioning-worksheet">
        Part 4: Price-positioning worksheet
      </AnchorHeading>

      <p>
        Fill in this worksheet from the competitive frame and your interview findings. Write your
        answers in your founder journal.
      </p>

      <ol start={14}>
        <li>
          <strong>Complete the positioning table.</strong> For each competitor, write: their
          monthly price, their annual price, their model (freemium vs premium-only vs hybrid),
          and one sentence on what their price implicitly claims about value.
          <ul>
            <li>LingQ: $12.99/mo | ~$107/yr | premium + freemium tier | claims: ___________</li>
            <li>
              Duolingo Super: ~$7/mo | ~$84/yr | freemium + premium tier | claims:
              ___________
            </li>
            <li>
              Dreaming Spanish premium: ~$8/mo | ~$60/yr | freemium + premium tier | claims:
              ___________
            </li>
            <li>
              LangoBee: $7.99/mo | $49/yr | premium-only, CC-required trial | claims:
              ___________
            </li>
          </ul>
        </li>
        <li>
          <strong>Write the "better than LingQ" bar in one sentence.</strong> LingQ is the
          category benchmark at $12.99/mo. LangoBee's price is 38% lower. What does LangoBee
          need to be true for a learner to choose it over LingQ? Write the one thing LangoBee
          must do better, as a sentence the learner would say, not a feature list.
        </li>
        <li>
          <strong>Interleave task (week 3 callback):</strong> You built the guided first session
          in week 3. Look at that session flow now with price in mind. Write one sentence
          answering: at what moment in the guided first session would a paywall feel earned (the
          learner has just experienced the core value), and at what moment would it feel hostile
          (they have not yet gotten anything)? Note this for week 7's paywall placement work.
          Do not redesign the flow now. This is a note for next week.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-trial-wiring">
        Part 5: Wire the trial_started event
      </AnchorHeading>

      <p>
        This part runs in your codebase. The goal is one verified <code>trial_started</code> event
        in PostHog Live Events before you leave this session.
      </p>

      <ol start={17}>
        <li>
          <strong>Locate the Stripe webhook handler.</strong> In your terminal:
          <pre>{`grep -r "checkout.session.completed" apps/web/src --include="*.ts" -l`}</pre>
          Open that file. Confirm it is receiving <code>checkout.session.completed</code> events.
          If it is not, the event has never been wired. Add the handler for that event type first.
        </li>
        <li>
          <strong>Add the PostHog server-side capture call.</strong> Inside the{" "}
          <code>checkout.session.completed</code> handler, after you have retrieved the user ID
          from the session metadata:
          <pre>{`import PostHog from 'posthog-node';

const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  host: 'https://us.i.posthog.com',
});

await posthogClient.capture({
  distinctId: userId,
  event: 'trial_started',
  properties: {
    plan: session.metadata?.priceId ?? 'unknown',
    price_usd: (session.amount_total ?? 0) / 100,
    trial_length_days: 14,
    source: session.metadata?.utmSource ?? 'direct',
  },
});
await posthogClient.shutdown();`}</pre>
          Use <code>posthog-node</code>, not <code>posthog-js</code>. The webhook runs
          server-side. Confirm <code>posthog-node</code> is in your dependencies; install it if
          not.
        </li>
        <li>
          <strong>Test with Stripe test mode.</strong>
          <ol type="a">
            <li>Set your environment to use Stripe test keys (already in .env.local for dev).</li>
            <li>
              Navigate to the LangoBee subscription checkout page and complete a checkout with
              test card <code>4242 4242 4242 4242</code>, any future expiry, any CVC.
            </li>
            <li>
              Open PostHog project 374549 → Activity → Live Events. Filter by event name{" "}
              <code>trial_started</code>.
            </li>
            <li>Confirm the event appears within 60 seconds with the correct properties.</li>
          </ol>
        </li>
        <li>
          <strong>If the event does not appear, debug in order:</strong>
          <ol type="a">
            <li>
              Check Stripe Dashboard → Webhooks → Recent deliveries. Look for the
              checkout.session.completed event. Did Stripe deliver it? What was the HTTP response
              from your handler?
            </li>
            <li>
              Check your Next.js server logs for handler exceptions. The most common cause is a
              missing <code>STRIPE_WEBHOOK_SECRET</code> in the environment, which makes the
              signature verification fail silently.
            </li>
            <li>
              Confirm <code>NEXT_PUBLIC_POSTHOG_KEY</code> is set in{" "}
              <code>apps/web/.env.local</code>. A missing key causes the PostHog client to
              initialize in a no-op state without throwing.
            </li>
          </ol>
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-you-leave-with">
        What you should leave with
      </AnchorHeading>

      <ul>
        <li>
          <strong>Milestone 1:</strong> Five WTP conversations complete, notes in your founder
          journal with all four Van Westendorp thresholds recorded per conversation.
        </li>
        <li>
          <strong>Milestone 2:</strong> One-sentence price summary: where $7.99/mo falls in the
          acceptable range from the interviews.
        </li>
        <li>
          <strong>Milestone 3:</strong> Price-positioning worksheet complete, including the
          "better than LingQ" one-sentence bar and the paywall placement note for week 7.
        </li>
        <li>
          <strong>Milestone 4:</strong> One verified <code>trial_started</code> event visible in
          PostHog Live Events, fired from the Stripe webhook handler in test mode.
        </li>
      </ul>

      <p>
        Milestone 4 is the non-negotiable gate for HW3 "First dollar." If you leave without it,
        complete the wiring tonight and post a PostHog Live Events screenshot showing the event to
        the Discord before midnight. HW3 deliverable: the same screenshot from production (not test
        mode), triggered by a real checkout, with real user identity.
      </p>
    </>
  );
}

export const wk06SectionSearchBody =
  "willingness-to-pay WTP interview Van Westendorp price sensitivity Mom Test pricing positioning worksheet LingQ Duolingo Dreaming Spanish trial_started PostHog Stripe webhook CC-required trial premium-only freemium week 6 section";
