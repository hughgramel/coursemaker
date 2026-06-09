import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Callout,
} from "@/components/ReadingPage";

export function Wk09SectionPage() {
  return (
    <ReadingPage
      id="wk09-section"
      title="Week 9 section: Wire one lifecycle email"
      kicker="B2C to $10k MRR &middot; Autumn 2026 &middot; Section"
    >
      <ReadingFraming>
        <p>
          By the end of this session you will have ONE triggered lifecycle
          message live in production with a measured open and click baseline,
          plus a written uplift estimate you can defend with data. The work is
          solo, but you will do a two-minute ship review with a partner before
          you leave.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You have read the Week 9
          reading, attended both lectures, and have chosen a lifecycle tool
          (Resend, Loops, Customer.io, or OneSignal). You have at least one
          event you can fire from your backend or client when a user takes a
          specific action. You do not need a referral mechanism wired yet;
          that is the Thursday build block.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="pick-your-message">Step 1: Pick your message (5 minutes)</AnchorHeading>
      <p>
        Choose exactly one message from the starter set. Do not plan two. You
        are picking the one that will have the highest impact on your D7
        retention given where your funnel leaks today.
      </p>
      <ol>
        <li>
          <strong>Welcome message.</strong> Trigger: user completes signup or
          first meaningful onboarding step. Goal: confirm the aha-moment is
          coming and remove the most common first-week question. Pick this if
          your D1 retention is below 30%.
        </li>
        <li>
          <strong>Day-3 nudge.</strong> Trigger: user signed up 3 days ago
          AND has not returned since activation. Goal: pull back early
          drop-offs before they are lost. Pick this if D1 retention is
          acceptable but D7 is low.
        </li>
        <li>
          <strong>Churn-risk message.</strong> Trigger: paid user who has not
          opened the app or taken a core action in N days (pick N based on
          your normal usage cadence). Goal: prevent involuntary and passive
          churn before the next billing cycle. Pick this if you already have
          paying users and your monthly churn rate is above 5%.
        </li>
      </ol>

      <Callout title="One message, fully wired">
        <p>
          A half-wired message that fires but has no tracking is worse than no
          message at all. You cannot learn from it. Commit to shipping one
          message end-to-end: trigger fires, message sends, open and click are
          tracked, baseline is recorded.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="wire-the-trigger">Step 2: Wire the trigger (40 minutes)</AnchorHeading>
      <p>
        The trigger is the event that causes the message to send. Every
        lifecycle tool has a webhook or SDK call pattern; the steps below
        follow the same logic regardless of provider.
      </p>
      <ol>
        <li>
          <strong>Identify the server-side event.</strong> For a welcome
          message, this is typically the user creation hook in your auth
          system. For a day-3 nudge, it is a scheduled job that queries users
          who signed up 72 hours ago. For a churn-risk message, it is a
          scheduled job querying paid users with no activity in N days.
        </li>
        <li>
          <strong>Fire the event to your lifecycle tool.</strong> Using Resend,
          this looks like{" "}
          <code>resend.emails.send(&#123; to, subject, react: WelcomeEmail(&#123;name&#125;) &#125;)</code>.
          Using OneSignal for push, it is{" "}
          <code>createNotification(&#123; include_external_user_ids: [userId], contents: &#123;en: &ldquo;...&rdquo;&#125; &#125;)</code>.
          Using Customer.io, it is a track event call:{" "}
          <code>cio.identify(userId, &#123; email &#125;)</code> followed by{" "}
          <code>cio.track(userId, &#123; name: &ldquo;signed_up&rdquo; &#125;)</code>.
        </li>
        <li>
          <strong>Test in a sandbox.</strong> Send the message to yourself.
          Verify it arrives, that the subject line is correct, that dynamic
          fields (name, product name, link) render without{" "}
          <code>undefined</code> or <code>[object Object]</code>. Fix before
          enabling for real users.
        </li>
        <li>
          <strong>Enable for new users only (feature flag if possible).</strong>{" "}
          If you have a feature-flag system, gate the new trigger behind it.
          This lets you turn it off instantly if something is wrong.
        </li>
        <li>
          <strong>Confirm in production.</strong> Sign up with a real email
          address that you did not use in testing. Verify the message arrives,
          on time, with no errors. Check your lifecycle tool&rsquo;s event log
          to confirm the trigger fired.
        </li>
      </ol>

      <AnchorHeading as="h2" id="write-copy">Step 3: Write the copy (15 minutes)</AnchorHeading>
      <p>
        Lifecycle copy has one job: get the user to take one specific action.
        Write to that action. Not to your brand voice, not to your feature
        list.
      </p>
      <ol>
        <li>
          <strong>Subject line.</strong> For email: 6-10 words, specific, no
          &ldquo;Your account&rdquo; or &ldquo;Welcome to [Product]&rdquo;
          generic openers. The subject line is the only thing the user reads
          before deciding to open. OneSignal benchmarks (Langholz, 2021)
          show push open rates at roughly 20%; email under 2% on average.
          Your subject line must work against those odds.
        </li>
        <li>
          <strong>Body.</strong> One paragraph. State the one action you want
          the user to take. Link to the exact screen or feature, not the
          homepage.
        </li>
        <li>
          <strong>CTA.</strong> One button or link. The text should be the
          action, not a noun: &ldquo;Finish your setup&rdquo; beats
          &ldquo;Setup&rdquo;.
        </li>
        <li>
          <strong>Unsubscribe / opt-out.</strong> Transactional messages
          (password reset, receipt) do not require opt-out. Every
          lifecycle/marketing message does, by law (CAN-SPAM, GDPR). Include
          it. Most tools add this automatically; verify it is present.
        </li>
      </ol>

      <AnchorHeading as="h2" id="measure">Step 4: Record your baseline and write the uplift estimate (10 minutes)</AnchorHeading>
      <p>
        Before the session ends, record three numbers in your growth log and
        write a one-paragraph uplift estimate.
      </p>
      <ol>
        <li>
          <strong>Baseline metric.</strong> The number this message is
          designed to move. For a welcome message: current D1 retention rate.
          For a day-3 nudge: current D7 retention rate. For a churn-risk
          message: current monthly churn rate. Write the exact current value
          and the date you pulled it.
        </li>
        <li>
          <strong>Send count and open rate.</strong> After your first 24-48
          hours, pull the open rate from your tool&rsquo;s dashboard. For
          push, 15-25% is a healthy starting benchmark (OneSignal, Langholz
          2021). For email, 20-35% open rate is achievable for lifecycle
          messages to opted-in users.
        </li>
        <li>
          <strong>Click rate.</strong> Pull the click-through rate on your
          CTA. A well-targeted lifecycle email to opted-in users should
          achieve 5-15% CTR. If your CTR is below 2%, the copy or the link
          destination is wrong.
        </li>
        <li>
          <strong>Uplift estimate.</strong> Write one paragraph: &ldquo;My
          current [D7 retention / D1 retention / monthly churn] is [X%].
          Based on [N] sends with a [Y%] click rate, and assuming clicked
          users retain at [Z%] vs [W%] for non-clicked users, I expect this
          message to move [metric] by approximately [delta].&rdquo; You do
          not need real cohort data yet; use the click rate as a proxy for
          re-engagement intent and be honest about the assumption.
        </li>
      </ol>

      <AnchorHeading as="h2" id="ship-review">Step 5: Two-minute ship review (pair)</AnchorHeading>
      <p>
        Pair with the person next to you. Each person has two minutes to show:
      </p>
      <ol>
        <li>The message, live in their tool&rsquo;s dashboard (or in their inbox if just sent).</li>
        <li>The trigger condition in one sentence.</li>
        <li>The baseline metric and uplift estimate paragraph.</li>
      </ol>
      <p>
        The reviewer asks one question only: &ldquo;What would make you
        confident this is working by Friday?&rdquo; The presenter answers in
        one sentence. That answer goes in the growth log.
      </p>

      <AnchorHeading as="h2" id="deliverables">Deliverables</AnchorHeading>
      <ul>
        <li>One triggered lifecycle message live in production (welcome, day-3, or churn-risk).</li>
        <li>Baseline metric recorded with date in your growth log.</li>
        <li>Open and click rates recorded (pull again Friday).</li>
        <li>Written uplift estimate (one paragraph, posted in shared doc).</li>
      </ul>
    </ReadingPage>
  );
}

export const wk09SectionSearchBody =
  "lifecycle email triggered welcome day-3 churn-risk wire trigger copy subject line CTA baseline open rate click rate uplift estimate Resend OneSignal Customer.io section Week 9";
