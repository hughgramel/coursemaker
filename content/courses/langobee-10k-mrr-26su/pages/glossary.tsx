import { AnchorHeading } from "@/components/AnchorHeading";

export function GlossaryPage() {
  return (
    <>
      <AnchorHeading as="h1" id="glossary">Glossary</AnchorHeading>
      <p>
        The canonical language of this course. Every reading, lecture, and assignment uses
        these terms in exactly these senses. When the wider industry has competing words
        for the same idea, the entry picks one and lists the rest under Avoid. In this
        course, "real" always means de-alted: internal accounts, alts, bots, and anonymous
        crawlers excluded.
      </p>

      <AnchorHeading as="h2" id="measurement">Measurement</AnchorHeading>
      <dl>
        <dt id="vanity-metric"><strong>Vanity metric</strong></dt>
        <dd>
          A number that can only go up and connects to no decision, like total registered
          users or cumulative pageviews. LangoBee's 103 profiles is one; its 4 real weekly
          actives is not. <em>Avoid:</em> top-line numbers, growth stats.
        </dd>
        <dt id="de-alting"><strong>De-alting</strong></dt>
        <dd>
          Removing founder, alt, test, bot, and anonymous accounts from a metric before
          reading it. The step that turned "106 weekly actives" into 4. <em>Avoid:</em> data
          cleaning, filtering (both are vaguer).
        </dd>
        <dt id="aarrr-funnel"><strong>AARRR funnel</strong></dt>
        <dd>
          The five-stage diagnostic lens: Acquisition, Activation, Retention, Revenue,
          Referral. Each stage owns one conversion rate; the weakest stage is the
          bottleneck. <em>Avoid:</em> pirate metrics (same thing), growth funnel.
        </dd>
        <dt id="north-star-metric"><strong>North-star metric</strong></dt>
        <dd>
          The single de-alted number the whole operation steers by, chosen because it
          predicts retention and revenue together. For LangoBee: weekly active readers who
          complete at least one piece of content. <em>Avoid:</em> KPI soup, OKR (a different
          tool).
        </dd>
        <dt id="cohort"><strong>Cohort</strong></dt>
        <dd>
          Every user who signed up in the same window, tracked together over time. The only
          honest way to read retention; blended averages hide decay. <em>Avoid:</em> user
          base, segment (a segment cuts by attribute, not by time).
        </dd>
      </dl>

      <AnchorHeading as="h2" id="strategy">Strategy</AnchorHeading>
      <dl>
        <dt id="thesis"><strong>Thesis</strong></dt>
        <dd>
          The written, falsifiable statement of why this business wins, kept in one place
          (THESIS.md) so drift is visible. <em>Avoid:</em> vision, strategy doc.
        </dd>
        <dt id="locked-decision"><strong>Locked decision</strong></dt>
        <dd>
          A choice recorded in the thesis that stays settled until evidence formally
          reopens it. Conflicting work requires an explicit note, not silent drift.
          <em>Avoid:</em> assumption.
        </dd>
        <dt id="pivot-criteria"><strong>Pivot criteria</strong></dt>
        <dd>
          Pre-committed conditions (a state plus a date) under which the current thesis is
          declared falsified. Written before the experiment, so the decision is made with
          clear eyes. <em>Avoid:</em> gut check, vibe check.
        </dd>
        <dt id="kill-criteria"><strong>Kill criteria</strong></dt>
        <dd>
          Pivot criteria applied to a single bet rather than the whole thesis: the metric,
          the threshold, and the date that ends it. Every bet in the operating plan carries
          one. <em>Avoid:</em> exit strategy (that means something else).
        </dd>
        <dt id="time-boxed-experiment"><strong>Time-boxed experiment</strong></dt>
        <dd>
          A test with a fixed end date, a single metric, and pre-written kill criteria. The
          tool that lets a locked decision be challenged without being abandoned.
          <em>Avoid:</em> trying things out.
        </dd>
        <dt id="zoom-in-pivot"><strong>Zoom-in pivot</strong></dt>
        <dd>
          Promoting one feature to become the whole product. The shorts feed becoming
          LangoBee's front door would be one. <em>Avoid:</em> rebrand, restart.
        </dd>
      </dl>

      <AnchorHeading as="h2" id="retention">Retention</AnchorHeading>
      <dl>
        <dt id="broken-vacuum"><strong>Broken vacuum</strong></dt>
        <dd>
          A product handed to users before it reliably works, which poisons every test run
          on it: nobody returns, nobody refers, and you cannot tell whether the thesis or
          the breakage failed. <em>Avoid:</em> MVP (an MVP works for its narrow case).
        </dd>
        <dt id="must-work-checklist"><strong>Must-work checklist</strong></dt>
        <dd>
          The binary list of flows that must pass on real devices before any user is
          invited: feed loads, captions render, word tap answers, content never runs out.
          <em>Avoid:</em> QA pass, smoke test (those are for releases; this gates people).
        </dd>
        <dt id="time-to-value"><strong>Time-to-value</strong></dt>
        <dd>
          Seconds from first open to the first moment the product delivers its promise.
          LangoBee's median session is 34 seconds; value must land inside it.
          <em>Avoid:</em> onboarding length.
        </dd>
        <dt id="guided-first-session"><strong>Guided first session</strong></dt>
        <dd>
          A designed first minute that takes a new user to activation by the hand, instead
          of an empty screen and good luck. <em>Avoid:</em> tutorial, product tour (both
          teach features; this delivers value).
        </dd>
        <dt id="activation"><strong>Activation</strong></dt>
        <dd>
          The earliest user action that predicts return. In LangoBee: the first word tapped.
          Signup is not activation. <em>Avoid:</em> conversion (reserved for money).
        </dd>
        <dt id="retention-hook"><strong>Retention hook</strong></dt>
        <dd>
          The one shipped mechanism that gives a user a reason to come back tomorrow: a
          push notification, a daily-new-for-you email, a streak. Measured by D1, not by
          existence. <em>Avoid:</em> engagement feature.
        </dd>
        <dt id="external-trigger"><strong>External trigger</strong></dt>
        <dd>
          A prompt the product sends (notification, email) to start a session before habit
          exists. External triggers precede internal ones; a new product that sends none is
          relying on memory. <em>Avoid:</em> reminder, nag.
        </dd>
        <dt id="d1-retention"><strong>D1 retention</strong></dt>
        <dd>
          The share of a cohort active again the day after signup, de-alted. This course's
          retention bar: 30% on a hand-recruited cohort. <em>Avoid:</em> next-day stickiness.
        </dd>
        <dt id="retention-curve"><strong>Retention curve</strong></dt>
        <dd>
          A cohort's active share plotted over days since signup. Flattening above zero is
          the signature of product-market fit; decaying to zero is a leaky bucket.
          <em>Avoid:</em> churn chart.
        </dd>
        <dt id="concierge-onboarding"><strong>Concierge onboarding</strong></dt>
        <dd>
          Personally walking each early user through their guided first session, one at a
          time. Unscalable on purpose; the point is learning, not efficiency.
          <em>Avoid:</em> white-glove (enterprise word), hand-holding.
        </dd>
        <dt id="manual-recruiting"><strong>Manual recruiting</strong></dt>
        <dd>
          Finding users one by one in the places they already gather (for LangoBee:
          language-learning Discords). The only acquisition channel this business has
          proven. <em>Avoid:</em> outbound, growth hacking.
        </dd>
        <dt id="mom-test-question"><strong>Mom Test question</strong></dt>
        <dd>
          An interview question about the user's actual past behavior rather than their
          opinion of your idea, so even a polite person cannot mislead you.
          <em>Avoid:</em> survey question, feedback request.
        </dd>
        <dt id="qual-quant-pairing"><strong>Qual-quant pairing</strong></dt>
        <dd>
          At small n, requiring both the number and unprompted human evidence before
          believing a result: D1 at 30% plus two or more "I'd use this again" quotes.
          <em>Avoid:</em> statistical significance (unavailable at n=12).
        </dd>
      </dl>

      <AnchorHeading as="h2" id="monetization">Monetization</AnchorHeading>
      <dl>
        <dt id="value-metric"><strong>Value metric</strong></dt>
        <dd>
          The unit a customer feels they are paying for. LangoBee's candidate: content
          understood at your level, made visible by the comprehension score.
          <em>Avoid:</em> pricing axis.
        </dd>
        <dt id="willingness-to-pay"><strong>Willingness-to-pay</strong></dt>
        <dd>
          What a specific user would actually part with, learned through Mom Test
          discipline and lightweight price-sensitivity questions, never through "would you
          pay?" <em>Avoid:</em> price validation.
        </dd>
        <dt id="freemium-tradeoff"><strong>Freemium trade-off</strong></dt>
        <dd>
          Free tiers buy top-of-funnel volume at the cost of conversion pressure and signal
          clarity; hard paywalls buy signal at the cost of volume. A model choice to test
          against pivot criteria, not a belief. <em>Avoid:</em> pricing strategy (broader).
        </dd>
        <dt id="trial-funnel"><strong>Trial funnel</strong></dt>
        <dd>
          The instrumented path from paywall view to trial_started to paid conversion. At
          LangoBee this funnel exists in code and has never carried a human.
          <em>Avoid:</em> checkout flow.
        </dd>
        <dt id="paywall-moment"><strong>Paywall moment</strong></dt>
        <dd>
          The point in the user journey where payment is requested. The course's argument:
          place it just after demonstrated value (a comprehension score that moved), not at
          the front door. <em>Avoid:</em> gate, wall.
        </dd>
        <dt id="upgrade-trigger"><strong>Upgrade trigger</strong></dt>
        <dd>
          A specific in-product event that makes premium concretely desirable at that
          instant, like hitting the free limit mid-video. Each one is instrumented.
          <em>Avoid:</em> upsell prompt.
        </dd>
        <dt id="trial-to-paid"><strong>Trial-to-paid</strong></dt>
        <dd>
          The share of started trials that convert to a first charge. Card-required trials
          benchmark at 25-50%; the number is meaningless until trials exist.
          <em>Avoid:</em> conversion rate (ambiguous about which step).
        </dd>
        <dt id="churn"><strong>Churn</strong></dt>
        <dd>
          The monthly share of paying subscribers who leave. Under 2% monthly is great for
          consumer subscriptions; months 1-3 churn is an onboarding problem, not a pricing
          one. <em>Avoid:</em> attrition, turnover.
        </dd>
        <dt id="churn-ceiling"><strong>Churn ceiling</strong></dt>
        <dd>
          The MRR plateau implied by acquisition and churn: maximum MRR equals new MRR per
          month divided by churn rate. At 5% monthly churn, $500 of new MRR caps the
          business at $10K. <em>Avoid:</em> growth ceiling (same idea, keep one name).
        </dd>
        <dt id="ltv"><strong>LTV</strong></dt>
        <dd>
          Lifetime value: average revenue per subscriber times average lifetime (one over
          churn). Sets the absolute ceiling on what acquiring a customer may cost.
          <em>Avoid:</em> CLV, customer worth.
        </dd>
        <dt id="cac"><strong>CAC</strong></dt>
        <dd>
          Customer acquisition cost: total spend on a channel divided by paying customers
          it produced. Judged against LTV (3:1 or better) and payback time (months, not
          years). <em>Avoid:</em> cost per acquisition (same thing, keep one name).
        </dd>
        <dt id="mrr-model"><strong>MRR model</strong></dt>
        <dd>
          The working-backward arithmetic from $10K MRR to subscribers, trials, signups,
          and visitors, with every rate either measured or flagged as an assumption.
          <em>Avoid:</em> financial projection (implies more precision than exists).
        </dd>
      </dl>

      <AnchorHeading as="h2" id="distribution">Distribution</AnchorHeading>
      <dl>
        <dt id="community-launch"><strong>Community launch</strong></dt>
        <dd>
          A norms-respecting debut in a venue where the audience already gathers (r/Spanish,
          Show HN), gated on retention so the traffic is not wasted. Repeatable by design.
          <em>Avoid:</em> launch day, going viral.
        </dd>
        <dt id="channel-fit"><strong>Channel fit</strong></dt>
        <dd>
          The match between a venue's audience, norms, and format and what the product can
          honestly offer there. Ranked before posting anywhere; one channel gets the focus.
          <em>Avoid:</em> channel strategy.
        </dd>
        <dt id="utm-discipline"><strong>UTM discipline</strong></dt>
        <dd>
          Tagging every outbound link so each signup carries its source. The May spike was
          never attributed; that mistake does not repeat. <em>Avoid:</em> tracking links
          (the discipline is the point, not the links).
        </dd>
        <dt id="message-match"><strong>Message match</strong></dt>
        <dd>
          The landing page repeats the promise of the post that brought the visitor, in the
          same words. A mismatch wastes the click and the channel.
          <em>Avoid:</em> messaging consistency.
        </dd>
        <dt id="creator-partnership"><strong>Creator partnership</strong></dt>
        <dd>
          Any structured arrangement with a content creator: flat sponsorship, affiliate
          commission, advisor equity, or co-founder split, compared by cost, alignment, and
          reversibility. <em>Avoid:</em> influencer deal.
        </dd>
        <dt id="affiliate-structure"><strong>Affiliate structure</strong></dt>
        <dd>
          Pay-per-result: the creator earns a commission per subscriber delivered.
          Reversible, aligned, and the default first offer; equity is the last resort, not
          the first. <em>Avoid:</em> rev-share (vaguer).
        </dd>
        <dt id="equity-split"><strong>Equity split</strong></dt>
        <dd>
          Permanent ownership exchanged for contribution. Advisor norms top out near 1%;
          50% is co-founder territory and irreversible, so it is priced against years of
          work, not one traffic spike. <em>Avoid:</em> giving away a piece.
        </dd>
        <dt id="outreach-wave"><strong>Outreach wave</strong></dt>
        <dd>
          A batch of personalized first-contact emails sent together with a response
          tracker, sized for learning (20 creators), not spray-and-pray.
          <em>Avoid:</em> cold email campaign.
        </dd>
        <dt id="growth-loop"><strong>Growth loop</strong></dt>
        <dd>
          A cycle whose output feeds its own input: a shared clip brings a viewer who
          shares a clip. Loops compound; funnels only convert what you pour in. LangoBee
          has one candidate loop and it is not yet turning. <em>Avoid:</em> flywheel
          (decorative), viral marketing.
        </dd>
        <dt id="viral-coefficient"><strong>Viral coefficient</strong></dt>
        <dd>
          K: new users generated per existing user per cycle. One share in 30 days means K
          is approximately zero; measured honestly, it tells you whether a loop exists at
          all. <em>Avoid:</em> virality (adjective, not a number).
        </dd>
        <dt id="owned-channel"><strong>Owned channel</strong></dt>
        <dd>
          A distribution surface the business controls (its TikTok, its SEO pages, its
          newsletter) rather than rents (a creator's audience, a subreddit). Compounds with
          content the pipeline already produces. <em>Avoid:</em> organic (describes cost,
          not ownership).
        </dd>
        <dt id="programmatic-seo"><strong>Programmatic SEO</strong></dt>
        <dd>
          Generating many landing pages from structured catalog data (language by topic by
          difficulty) to capture long-tail search, each page answering a real query with
          real product value. <em>Avoid:</em> SEO content (handwritten), doorway pages
          (spam).
        </dd>
        <dt id="content-repurposing"><strong>Content repurposing</strong></dt>
        <dd>
          Reusing the existing pipeline's output (clips, captions, difficulty scores) as
          marketing inventory at near-zero marginal cost. <em>Avoid:</em> content marketing
          (implies writing new things).
        </dd>
      </dl>

      <AnchorHeading as="h2" id="operating">Operating</AnchorHeading>
      <dl>
        <dt id="operating-cadence"><strong>Operating cadence</strong></dt>
        <dd>
          The fixed weekly ritual: grade last week first, read the de-alted input metrics,
          place one bet with its kill criteria. Held in the intel repo where agents can
          audit it. <em>Avoid:</em> standup, check-in.
        </dd>
        <dt id="operating-plan"><strong>Operating plan</strong></dt>
        <dd>
          The capstone document: the thesis, the MRR model, the sequenced bets each with
          kill criteria, and the cadence that reviews them. A living file, not a deck.
          <em>Avoid:</em> business plan, roadmap.
        </dd>
      </dl>
    </>
  );
}

export const glossarySearchBody =
  "Glossary vanity metric de-alting AARRR north star cohort thesis locked decision pivot criteria kill criteria time-boxed experiment zoom-in pivot broken vacuum must-work checklist time-to-value guided first session activation retention hook external trigger D1 retention curve concierge onboarding manual recruiting Mom Test qual-quant value metric willingness to pay freemium trial funnel paywall moment upgrade trigger trial-to-paid churn ceiling LTV CAC MRR model community launch channel fit UTM message match creator partnership affiliate equity split outreach wave growth loop viral coefficient owned channel programmatic SEO content repurposing operating cadence operating plan";
