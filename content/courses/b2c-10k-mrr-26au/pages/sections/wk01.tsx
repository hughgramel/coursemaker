import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk01SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="wire-your-funnel">Section: Wire your funnel</AnchorHeading>
      <p className="fs-6 fw-300">Week 1 &middot; Hands-on worksheet</p>

      <p>
        By the end of this section you will have PostHog (or a lightweight
        SQL alternative) running in your production environment, one named
        activation event firing, and a single-screen chart showing the
        acquisition-to-paid funnel. You will report your real numbers to
        the class before you leave.
      </p>

      <p>
        Work on your own product throughout. If you do not yet have a live
        product, use the provided demo app linked in the course sidebar. Every
        step below is numbered; do them in order.
      </p>

      <AnchorHeading as="h2" id="part-1-install">Part 1: Install PostHog</AnchorHeading>

      <ol>
        <li>
          <strong>Create a free PostHog Cloud account</strong> at{" "}
          <a href="https://app.posthog.com/signup">app.posthog.com/signup</a>.
          Select &ldquo;Cloud (US)&rdquo; unless you have a data-residency
          requirement.
        </li>
        <li>
          <strong>Copy your project API key.</strong> It lives under{" "}
          <em>Settings &rarr; Project &rarr; Project API key</em>. It looks like{" "}
          <code>phc_XXXX</code>.
        </li>
        <li>
          <strong>Install the SDK for your stack.</strong> Common options:
          <ul>
            <li>
              JavaScript / React / Next.js:{" "}
              <code>npm install posthog-js</code>, then initialize once at app
              root with your API key and host{" "}
              <code>https://us.i.posthog.com</code>.
            </li>
            <li>
              Python (Flask / FastAPI / Django):{" "}
              <code>pip install posthog</code>, then{" "}
              <code>posthog.api_key = &apos;phc_XXXX&apos;</code> in your app
              factory.
            </li>
            <li>
              Ruby on Rails: <code>gem install posthog-ruby</code>, initialize
              in an initializer file.
            </li>
            <li>
              iOS / Android: use the PostHog mobile SDK listed at{" "}
              <a href="https://posthog.com/docs/libraries">posthog.com/docs/libraries</a>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Send a test event.</strong> In your browser console (or a
          one-off script), call:
          <pre>{`posthog.capture('test_event', { source: 'section_worksheet' });`}</pre>
          Wait 30 seconds, then check <em>Activity &rarr; Live events</em> in
          PostHog. You should see the event appear. If you do not, check your
          API key and host URL.
        </li>
        <li>
          <strong>Verify in production.</strong> Deploy to your live
          environment (not localhost). Trigger the test event from the live
          URL. Confirm it appears in Live events. Localhost events are fine
          for testing but do not reflect real user behavior.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-activation">Part 2: Define and emit your activation event</AnchorHeading>

      <ol start={6}>
        <li>
          <strong>Write your activation event definition in one sentence.</strong>{" "}
          Format: &ldquo;A user has activated when they have [specific action]
          within [timeframe] of signing up.&rdquo; Examples:
          <ul>
            <li>
              &ldquo;A user has activated when they have created their first
              project within 24 hours of signing up.&rdquo;
            </li>
            <li>
              &ldquo;A user has activated when they have completed one full
              session (played audio for at least 60 seconds) within 48 hours of
              install.&rdquo;
            </li>
          </ul>
          Write yours in your founder journal before moving on.
        </li>
        <li>
          <strong>Add the activation event call to your code.</strong> Find
          the exact line in your codebase where the activating action occurs.
          Add:
          <pre>{`posthog.capture('user_activated', {
  activation_type: 'created_first_project',  // your specific action
  time_since_signup_hours: hoursElapsed,     // if calculable
});`}</pre>
          Give the event a name specific to your product. Do not use a generic
          name like &ldquo;activated&rdquo;; use &ldquo;first_project_created&rdquo;,
          &ldquo;first_session_completed&rdquo;, &ldquo;first_payment_linked&rdquo;,
          or similar.
        </li>
        <li>
          <strong>Test the event end-to-end.</strong> Create a fresh test
          account in your production app. Walk through the onboarding flow
          until you hit the activation step. Check PostHog Live events to
          confirm the <code>user_activated</code> event fired with the correct
          properties.
        </li>
        <li>
          <strong>Write down your guessed activation rate.</strong> Before
          looking at any data: what percentage of new signups do you believe
          reach activation? Write the number. You will compare it to the real
          number in step 14.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-dashboard">Part 3: Build the funnel dashboard</AnchorHeading>

      <ol start={10}>
        <li>
          <strong>Open PostHog &rarr; Funnels.</strong> Click &ldquo;New
          funnel&rdquo;. Add these steps in order:
          <ol type="a">
            <li>
              <strong>Step 1: Acquisition.</strong> Event:{" "}
              <code>user signed up</code> (or whatever your signup event is
              named). If you do not have a signup event yet, use{" "}
              <code>$pageview</code> filtered to your <code>/signup</code>{" "}
              URL as a proxy.
            </li>
            <li>
              <strong>Step 2: Activation.</strong> Event: the event you
              defined in step 7.
            </li>
            <li>
              <strong>Step 3: Paid.</strong> Event: your payment success event
              (e.g. <code>subscription_started</code>, or Stripe webhook
              ingested as a PostHog event). If you have no paid users yet,
              add this step as a placeholder with zero completions.
            </li>
          </ol>
          Set the date range to &ldquo;Last 30 days&rdquo;.
        </li>
        <li>
          <strong>Save the funnel as &ldquo;Core funnel.&rdquo;</strong> Pin it
          to your PostHog dashboard.
        </li>
        <li>
          <strong>Add an MRR trend chart.</strong> If you use Stripe, install
          the PostHog Stripe connector under{" "}
          <em>Settings &rarr; Integrations</em>. If you prefer SQL, add a
          simple query in PostHog&apos;s SQL editor:
          <pre>{`SELECT
  date_trunc('month', created) AS month,
  sum(amount) / 100.0           AS mrr_dollars
FROM charges
WHERE status = 'succeeded'
  AND created >= now() - interval '3 months'
GROUP BY 1
ORDER BY 1;`}</pre>
          If you have no paid users, skip the MRR chart and write &ldquo;MRR:
          $0 as of [today&apos;s date]&rdquo; directly in your founder journal.
        </li>
        <li>
          <strong>Screenshot your dashboard.</strong> It should show, on one
          screen: acquisition count, activation count, activation rate (%), paid
          count or $0 MRR. Share this screenshot in the class Slack channel
          before the end of section.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-reflect">Part 4: Reflect</AnchorHeading>

      <ol start={14}>
        <li>
          <strong>Compare your guessed vs actual activation rate.</strong>{" "}
          Look at the funnel you built. What is the real activation rate? How
          far off was your guess from step 9? Write one sentence explaining the
          gap.
        </li>
        <li>
          <strong>Write your MRR snapshot.</strong> Using the dashboard you
          built, write in your founder journal: &ldquo;MRR as of [today]: $X.
          This reflects [N] paying customers at an average of $[Y]/month.&rdquo;
          If MRR is $0, write that exactly. Leaving it blank is not allowed.
        </li>
        <li>
          <strong>Identify one vanity metric on your dashboard.</strong> Look
          at everything PostHog is auto-capturing (total pageviews, total
          events). Pick one number that feels good but would not help you
          decide whether to build feature A or feature B. Write its name and
          one sentence on why it is vanity.
        </li>
        <li>
          <strong>Prepare your class report (2 minutes).</strong> You will
          share three numbers: (a) activation rate, (b) MRR, (c) the vanity
          metric you identified. No slides needed. Just the numbers and one
          sentence on what surprised you.
        </li>
      </ol>

      <AnchorHeading as="h2" id="alternative-no-posthog">Alternative: no PostHog</AnchorHeading>
      <p>
        If your stack does not support PostHog (for example, a purely
        server-side script, a CLI tool, or a native desktop app), use this
        SQL-only approach instead:
      </p>
      <ol>
        <li>
          Add a <code>user_events</code> table to your database:{" "}
          <code>user_id, event_name, created_at, properties (jsonb)</code>.
        </li>
        <li>
          Call <code>INSERT INTO user_events ...</code> at the same points
          where you would call <code>posthog.capture</code>.
        </li>
        <li>
          Build the funnel dashboard as a SQL query and paste the results
          screenshot into Slack.
        </li>
      </ol>
      <p>
        The principle is identical: every path through your product should be
        observable. The tool is secondary.
      </p>

      <AnchorHeading as="h2" id="what-you-leave-with">What you should leave with</AnchorHeading>
      <ul>
        <li>
          <strong>Milestone 1:</strong> PostHog (or equivalent) installed and
          verified with at least one test event in production.
        </li>
        <li>
          <strong>Milestone 2:</strong> One <code>activation</code> event
          firing in production code, confirmed in PostHog Live events.
        </li>
        <li>
          <strong>Milestone 3:</strong> A single-screen dashboard showing
          acquisition &rarr; activation &rarr; paid (even if paid is $0).
        </li>
        <li>
          <strong>Milestone 4:</strong> First MRR number written in your
          founder journal, dated today.
        </li>
      </ul>
      <p>
        If you leave without all four, complete them tonight and post your
        dashboard screenshot to the class Slack by 9 AM tomorrow. This is
        not optional: every subsequent week builds on these baselines.
      </p>
    </>
  );
}

export const wk01SectionSearchBody =
  "PostHog instrumentation funnel dashboard activation event MRR setup wire your funnel hands-on section worksheet Week 1";
