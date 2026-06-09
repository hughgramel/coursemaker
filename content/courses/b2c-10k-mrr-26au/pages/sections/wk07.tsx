import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk07SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="write-one-viral-asset">Section: Write one viral asset</AnchorHeading>
      <p className="fs-6 fw-300">Week 7 &middot; Hands-on worksheet</p>

      <p>
        By the end of this section you will have designed, built, and shipped
        one shareable artifact into your live product, with a share-click event
        firing into your analytics stack. You will report your asset URL and
        your K-factor estimate to the class before you leave.
      </p>

      <p>
        A viral asset is any piece of content your product creates or displays
        that a user has a reason to share with someone who is not yet your
        customer. The asset does the acquisition work; you do not.
      </p>

      <AnchorHeading as="h2" id="pick-your-asset">Part 1: Pick your asset type</AnchorHeading>

      <p>
        Choose exactly one from the list below. The rule: pick the type that
        gives the sharer a clear social reason to share (they look good, they
        prove something, they invite others to a value they already have). If
        none of these fit your product, write a one-sentence explanation of why
        and propose a custom type before moving to Part 2.
      </p>

      <ol>
        <li>
          <strong>Share card.</strong> A designed image (OG-card-sized, 1200x630
          or 800x800) showing a user&rsquo;s result, milestone, or stat. The
          user taps &ldquo;Share&rdquo; and the card goes to Twitter/X,
          LinkedIn, or Instagram Stories. Classic example: Spotify Wrapped,
          Duolingo streak card, Strava route map. Works for any product that
          produces a measurable output.
        </li>
        <li>
          <strong>Public profile or stat page.</strong> A publicly accessible
          URL that shows one user&rsquo;s activity, rank, or portfolio. The
          user shares the URL. Works for any product with user-generated content
          or a leaderboard. Example: Nomad List&rsquo;s public user profiles,
          GitHub contribution graph.
        </li>
        <li>
          <strong>Embed widget.</strong> A code snippet or iframe the user
          pastes into their own site, readme, or portfolio. The widget shows
          live data from your product (a badge, a chart, a counter). Every
          embed is a passive acquisition touchpoint. Works for developer tools,
          analytics products, and SaaS with publishable metrics.
        </li>
        <li>
          <strong>Public stat or status page.</strong> A URL that shows
          aggregate or live product data: your uptime, your community size, your
          total outputs generated. The user shares it as social proof. Works for
          infrastructure, community, or productivity tools where scale is a
          signal of quality.
        </li>
        <li>
          <strong>Referral share message.</strong> A pre-written tweet, post, or
          message the user can send in one tap, with a tracked referral link.
          Lower design lift than a card, but lower virality ceiling too. Use
          only if your product has a clear invite dynamic (users want their
          contacts to join them).
        </li>
      </ol>

      <p>
        Write your choice and one sentence on why the sharer has a reason to
        share before moving on. If you cannot write the sentence, pick a
        different type.
      </p>

      <AnchorHeading as="h2" id="spec-the-asset">Part 2: Spec the asset (15 minutes)</AnchorHeading>

      <ol start={6}>
        <li>
          <strong>Define the trigger moment.</strong> Write the exact in-product
          moment when the asset appears or the share button becomes visible.
          Format: &ldquo;The share button appears when [user does X].&rdquo; Be
          specific. &ldquo;When they finish something&rdquo; is not specific
          enough. &ldquo;When they complete their 7th consecutive day&rdquo; is.
        </li>
        <li>
          <strong>Write the share text.</strong> Draft the default text that
          pre-populates the share dialog. It must: (a) describe what the sharer
          accomplished, (b) name your product, (c) include your product URL.
          Keep it under 240 characters. Write three variants and pick the one
          that makes the sharer look best, not the one that promotes your
          product the most.
        </li>
        <li>
          <strong>Sketch the visual.</strong> For share cards and public pages:
          draw a rough wireframe on paper (one minute). The card should have
          at most three elements: a headline stat or milestone, the user&rsquo;s
          name or handle, and your product name or logo. Clutter kills shares.
        </li>
        <li>
          <strong>Define success.</strong> Write: &ldquo;This asset is working
          if [N]% of users who see the trigger share it within [timeframe].&rdquo;
          For a new asset with no baseline, a target of 5-15% is reasonable.
          Write your target now, before you build.
        </li>
      </ol>

      <AnchorHeading as="h2" id="build-the-asset">Part 3: Build and ship (60-90 minutes)</AnchorHeading>

      <ol start={10}>
        <li>
          <strong>Build the minimum viable version.</strong> Do not redesign
          your product to support the asset. The rule: if you cannot ship it
          in 90 minutes, you have scoped it too large. Cut until it ships.
          For share cards, a server-side OG image endpoint (Vercel&rsquo;s{" "}
          <code>@vercel/og</code>, or a plain canvas-to-PNG) is usually the
          right tool. For public pages, a read-only route with no login
          requirement.
        </li>
        <li>
          <strong>Wire the share-click event.</strong> Before you ship, add
          this call to every share button in your product:
          <pre>{`posthog.capture('share_clicked', {
  asset_type: 'share_card',      // or 'public_profile', 'embed', etc.
  trigger_moment: 'streak_7',    // your specific trigger
  destination: 'twitter',        // or 'linkedin', 'copy_link', etc.
});`}</pre>
          This is non-negotiable. An asset you cannot measure is decoration, not
          an engine.
        </li>
        <li>
          <strong>Wire the new-user attribution event.</strong> If a new user
          arrives via a share link, capture:
          <pre>{`posthog.capture('signup_from_share', {
  source_asset: 'share_card',
  referrer_user_id: referrerId,  // if you pass it in the URL
});`}</pre>
          Even a rough referral parameter in the URL (
          <code>?ref=share&amp;uid=XYZ</code>) lets you estimate how many
          signups each share generates.
        </li>
        <li>
          <strong>Deploy to production.</strong> Localhost shares do not count.
          The asset must be live at a real URL before the end of section.
        </li>
      </ol>

      <AnchorHeading as="h2" id="estimate-k-factor">Part 4: Estimate your K-factor</AnchorHeading>

      <p>
        K-factor measures how many new users each existing user generates
        through sharing. The formula:
      </p>
      <pre>{`K = (shares sent per active user) × (conversion rate on those shares)`}</pre>
      <p>
        You will not have real data yet if you shipped the asset today. Use
        estimates for the first calculation and replace them with real numbers
        by Friday.
      </p>

      <ol start={14}>
        <li>
          <strong>Pull or estimate shares sent per active user.</strong> If you
          have prior share data, use it. If not, write a conservative estimate:
          what share rate have you seen on similar products, or what does your
          gut say? Write the number and label it &ldquo;estimated.&rdquo;
        </li>
        <li>
          <strong>Estimate conversion rate on shares.</strong> For most B2C
          products, a cold share (someone clicks a link from a friend) converts
          at 2-15%. Use 5% as your baseline unless you have data that says
          otherwise.
        </li>
        <li>
          <strong>Compute K.</strong> Multiply. Write the result. Interpret it
          using Andrew Chen&rsquo;s benchmarks: K above 1.0 is exponential
          (rare), 0.75 is 4x amplification, 0.5 is 2x, 0.1 is modest. Most
          early products have K between 0.05 and 0.3.
        </li>
        <li>
          <strong>Write the intervention.</strong> Given your K-factor estimate,
          what is the single highest-leverage change to increase it? Is it
          increasing the share rate (better trigger moment, better copy)? Or
          increasing the conversion rate on shares (better landing page, better
          product hook for new visitors)? Write one sentence naming the
          intervention.
        </li>
      </ol>

      <AnchorHeading as="h2" id="class-report">Part 5: Report to the class</AnchorHeading>

      <ol start={18}>
        <li>
          <strong>Share your asset URL in the class channel.</strong> Everyone
          clicks. You get your first real impression data in real time.
        </li>
        <li>
          <strong>Prepare a 90-second report.</strong> You will share: (a) the
          asset type you chose and why the sharer has a reason to share, (b)
          the trigger moment, (c) your K-factor estimate, (d) the one
          intervention you identified.
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-you-leave-with">What you should leave with</AnchorHeading>

      <ul>
        <li>
          <strong>Milestone 1:</strong> One viral asset live in production at a
          real URL.
        </li>
        <li>
          <strong>Milestone 2:</strong> A <code>share_clicked</code> event
          firing in PostHog (or equivalent), confirmed in Live events.
        </li>
        <li>
          <strong>Milestone 3:</strong> A written K-factor estimate (even if
          fully estimated today) with your calculation shown.
        </li>
        <li>
          <strong>Milestone 4:</strong> One named intervention to improve K,
          written in your founder journal.
        </li>
      </ul>

      <p>
        If you leave without all four, complete them tonight. The asset must be
        in production before your Friday morning growth move, when you will
        feature it in your channel output for the week.
      </p>
    </>
  );
}

export const wk07SectionSearchBody =
  "viral asset share card public profile embed public stat page share-click event K-factor telemetry wiring shareable artifact section worksheet Week 7";
