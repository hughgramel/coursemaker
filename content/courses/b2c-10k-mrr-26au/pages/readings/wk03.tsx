import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk03Reading() {
  return (
    <ReadingPage
      id="wk03-pricing"
      title="Week 3: Pricing and the paywall"
      kicker="B2C to $10k MRR &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading gives you the concepts and the numbers you need to pick
          a price, design a paywall, and defend both choices in one page. By the
          end you will be able to compute a rough LTV and CAC for your product,
          choose between a hard, soft, or metered paywall, set trial length
          from data rather than convention, and explain why the same product
          might warrant different prices in different markets.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You are already comfortable
          with <strong>activation-event</strong>, <strong>aha-moment</strong>,
          and <strong>time-to-value</strong> from Week 1, and with{" "}
          <strong>MRR</strong> from Week 2. This reading introduces nine new
          concepts: <strong>freemium</strong>, <strong>anchor-price</strong>,{" "}
          <strong>hard-paywall</strong>, <strong>soft-paywall</strong>,{" "}
          <strong>metered-paywall</strong>, <strong>trial-mechanics</strong>,{" "}
          <strong>ltv</strong>, <strong>cac</strong>, and{" "}
          <strong>ppp-pricing</strong>.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="week-at-a-glance">1. Your week at a glance</AnchorHeading>

      <AnchorHeading as="h3" id="learning-goals">Learning goals</AnchorHeading>
      <ul>
        <li>Compare free, freemium, paid, and hybrid models with one tradeoff each.</li>
        <li>Place a paywall (hard, soft, or metered) and defend the choice.</li>
        <li>Compute a rough LTV and CAC for your product, including which numbers you are guessing.</li>
        <li>Explain anchor pricing and at least one B2C anchor pattern that worked.</li>
      </ul>

      <AnchorHeading as="h3" id="milestones">Milestones this week</AnchorHeading>
      <ul>
        <li>A 1-page pricing brief: model, anchor, trial mechanics, paywall placement.</li>
        <li>A paywall live in production (hard, soft, or metered).</li>
        <li>Stripe (or RevenueCat / App Store IAP) wired to a working test purchase.</li>
        <li>First $1 of new MRR, or a written explanation of why no one bought.</li>
      </ul>

      <AnchorHeading as="h3" id="bloom-outcomes">Bloom outcomes</AnchorHeading>
      <ul>
        <li><strong>Apply:</strong> Place a paywall (hard, soft, or metered) live in your product.</li>
        <li><strong>Evaluate:</strong> Defend a chosen pricing model against three alternatives in one page.</li>
        <li><strong>Create:</strong> Author a 1-page pricing brief with anchor, trial mechanics, and paywall placement.</li>
      </ul>

      <AnchorHeading as="h3" id="metrics">Metrics to track</AnchorHeading>
      <ul>
        <li>Trial start rate</li>
        <li>Trial-to-paid conversion (or estimate)</li>
        <li>Average revenue per paying user</li>
        <li>MRR delta</li>
        <li>Public outputs shipped</li>
      </ul>

      <AnchorHeading as="h2" id="week-day-by-day">2. Your week, day by day</AnchorHeading>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Morning growth move (30 min)</th>
            <th>Customer hour (60 min)</th>
            <th>Build block (3.5 hr)</th>
            <th>Measure + reflect (15 min)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mon</strong></td>
            <td>Post your pricing hypothesis publicly; ask for criticism.</td>
            <td>Interview 2 paying users (or willingness-to-pay calls if 0 paying).</td>
            <td>Draft the pricing brief.</td>
            <td>What price did you flinch saying out loud?</td>
          </tr>
          <tr>
            <td><strong>Tue</strong></td>
            <td>Public comparison: 3 competitors&rsquo; price points + your hypothesis.</td>
            <td>Read 10 reviews or tweets of competitors&rsquo; pricing.</td>
            <td>Wire Stripe (or RevenueCat) to a test purchase.</td>
            <td>Did the test purchase complete?</td>
          </tr>
          <tr>
            <td><strong>Wed</strong></td>
            <td>Post &ldquo;here&rsquo;s my paywall placement; why?&rdquo;</td>
            <td>Watch session replays of users hitting your current paywall (if any).</td>
            <td>Ship the paywall.</td>
            <td>Where did the paywall feel rude vs welcome?</td>
          </tr>
          <tr>
            <td><strong>Thu</strong></td>
            <td>Public post: &ldquo;live pricing experiment going live today.&rdquo;</td>
            <td>DM 5 users who almost converted last month with the new offer.</td>
            <td>Add PPP / localized pricing OR remove a free-tier limit (pick one).</td>
            <td>Trial starts vs yesterday?</td>
          </tr>
          <tr>
            <td><strong>Fri</strong></td>
            <td>Friday public &ldquo;first paying user&rdquo; or &ldquo;no paying users, here&rsquo;s what I&rsquo;m changing&rdquo; post.</td>
            <td>Talk to any user who paid this week (or one who didn&rsquo;t).</td>
            <td>No new features. Tune paywall copy from real data.</td>
            <td>Trial-to-paid rate so far?</td>
          </tr>
        </tbody>
      </table>

      <AnchorHeading as="h2" id="plan-card">3. This week&rsquo;s plan card</AnchorHeading>

      <Callout title="Fill this in before Monday morning">
        <p>
          Three milestones I will ship this week:
          <br />1. _______________________________________________
          <br />2. _______________________________________________
          <br />3. _______________________________________________
        </p>
        <p>
          My repeating growth move this week (verb + noun, one platform):
          <br />_______________________________________________
        </p>
        <p>
          The friction most likely to derail me, and how I will handle it:
          <br />_______________________________________________
        </p>
      </Callout>

      <AnchorHeading as="h2" id="daily-rules">4. Daily rules</AnchorHeading>
      <ul>
        <li>The build block does not open until the morning growth move and customer hour are done. No exceptions.</li>
        <li>Build-block scope is one sentence. If you cannot write it in one sentence, the scope is too large.</li>
        <li>No new features that are not on this week&rsquo;s milestone list.</li>
        <li>Friday review is non-negotiable. Skipping it means the week did not count.</li>
        <li>Every weekday you ship one piece of public output before the build block opens.</li>
      </ul>

      <AnchorHeading as="h2" id="model-choice">5. Model choice: free, freemium, paid, hybrid</AnchorHeading>
      <p>
        The first pricing decision is not the number. It is the model. Four
        options exist for B2C, and each accepts a specific tradeoff that you
        should name before you launch.
      </p>
      <p>
        A <strong>free</strong> model acquires users at the lowest possible
        barrier. The tradeoff: you must either monetize attention (ads,
        sponsorship) or convert a small fraction to a paid tier later. Free
        products that never monetize are charities, not businesses.
      </p>
      <p>
        A <strong>freemium</strong> model gives users a permanent free tier and
        charges for an upgrade. The conversion signal is clear in principle: a
        user who upgrades has self-identified as a power user. The tradeoff:
        the free tier creates a large population of users who will never pay,
        consuming support, infrastructure, and mental overhead. RevenueCat
        data from 115,000+ apps puts the day-35 conversion rate for freemium
        apps at 2.18%. Hard paywall apps hit 12.11% by the same date. That
        gap should be part of your model decision, not an afterthought.
      </p>
      <p>
        A <strong>paid</strong> model (one-time or subscription) requires payment
        before or shortly after the aha-moment. One-time pricing made sense for
        Tony Dinh&rsquo;s DevUtils because there were no recurring server costs.
        Subscription pricing made sense for his Black Magic product because it
        pulled live data from Twitter&rsquo;s API every hour. His rule: &ldquo;if
        there are no recurring costs to maintain the software, I don&rsquo;t charge
        customers recurring costs.&rdquo; That is a real rule. Stating it out loud
        before you pick a model forces honesty about your cost structure.
      </p>
      <p>
        A <strong>hybrid</strong> model mixes elements: a free tier that converts
        to a subscription, or a one-time purchase that adds a subscription for
        premium features. Hybrids are common but cognitively expensive for users.
        They work best when the free and paid tiers serve genuinely different use
        cases, not when &ldquo;free&rdquo; is just a slower path to the same outcome.
      </p>

      <AnchorHeading as="h2" id="anchor-price">6. Anchor pricing</AnchorHeading>
      <p>
        Every price a user sees is evaluated relative to a reference point they
        already hold. That reference is the <strong>anchor</strong>. You do not
        choose whether to anchor your price. You choose whether to anchor it
        deliberately.
      </p>
      <p>
        The simplest anchor technique: show a higher price first and cross it
        out. A user who sees &ldquo;$199/year&rdquo; crossed out, then &ldquo;$99/year,&rdquo;
        evaluates $99 against $199. A user who sees only $99 evaluates it against
        zero, or against the last subscription price they paid elsewhere.
      </p>
      <p>
        Pieter Levels applied this logic when pricing Nomad List. His rule, stated
        on the Indie Hackers podcast, was that price is not about the cost of
        running the service. It is about the value to the user. A user who saves
        a week of research by using Nomad List does not care that the server costs
        $40/month. They care that the outcome is worth more than the price.
      </p>
      <p>
        Patrick Campbell of ProfitWell (now Paddle) synthesized research from
        30,000+ subscription companies and reached the same conclusion: willingness
        to pay should drive product decisions before any feature is built. Most
        founders get this backwards: they build a feature, then set a price, then
        discover the price was wrong. The correct order is to understand what users
        will pay for a given outcome, then build the minimum product that delivers
        that outcome.
      </p>
      <p>
        The $9.99 myth deserves one paragraph. Charm pricing (prices ending in .99
        or .95) does produce a measurable effect, but the effect depends on the
        buyer&rsquo;s existing frame. In categories where $X.99 is the norm (consumer
        apps, media subscriptions), $9.99 beats $10 slightly. In categories where
        round numbers signal quality (premium software, professional tools), $10
        beats $9.99. The practical takeaway: unless you have tested both, pick a
        round number you can say out loud without embarrassment and move on.
      </p>

      <AnchorHeading as="h2" id="paywall-types">7. Hard, soft, and metered paywalls</AnchorHeading>
      <p>
        The <strong>hard paywall</strong> stops the user before they access the
        core product. Payment is required to continue. This is not the same as
        a bad user experience. When a product&rsquo;s core value requires the paid
        tier, showing the free tier first creates a false promise. Hard paywalls
        convert at 12.11% by day 35 (RevenueCat, 2025) precisely because they
        select for users who have already decided they want the product.
      </p>
      <p>
        The <strong>soft paywall</strong> lets users experience some of the
        product before paying. The paywall appears at a natural transition:
        after the aha-moment, at a feature boundary, or at the end of a free
        session. Soft paywalls have lower conversion rates than hard paywalls,
        but they allow users to build intent before being asked to pay. The
        critical design decision is placement: too early (before the aha-moment)
        and the user has no reason to pay; too late (after they have met their
        goal for the session) and the urgency is gone.
      </p>
      <p>
        The <strong>metered paywall</strong> ties payment to usage. The user
        pays per document, per API call, per seat, or per gigabyte. The
        advantage is that heavy users pay more and light users pay less or
        nothing, which reduces the felt risk of trying the product. The
        disadvantage is that LTV is hard to predict at the moment of
        acquisition: a user might generate $2 in their first month and $200
        in their sixth. Metered paywalls work best when usage varies by an
        order of magnitude across your user base and your marginal cost scales
        with usage.
      </p>

      <AnchorHeading as="h2" id="paywall-placement">8. Paywall placement</AnchorHeading>
      <p>
        Placement determines what emotional state the user is in when they
        encounter the paywall. Three canonical positions:
      </p>
      <p>
        <strong>At signup:</strong> the user sees the paywall before using
        anything. This maximizes revenue per visitor but minimizes the number
        of visitors who get far enough to evaluate the product. Use this only
        if your product&rsquo;s value is immediately legible from the landing page
        alone, or if you have a strong brand signal that pre-qualifies the user.
      </p>
      <p>
        <strong>Post-aha-moment:</strong> the user has just experienced the
        core value of the product and is asked to pay to continue. This is the
        warmest moment for the paywall. The user has a specific, recent reason
        to believe the product is worth the money. The challenge is identifying
        the aha-moment precisely. If you mis-identify it and place the paywall
        one step too early, you wall off the moment of value rather than
        following it.
      </p>
      <p>
        <strong>Threshold-based:</strong> the user has exceeded a limit (three
        projects, ten exports, five seats) and is asked to upgrade. This is the
        most specific form of soft paywall. The user is invested: they have
        already created things they do not want to lose. Refusal to pay is an
        active decision to abandon work, not a passive choice to not start.
        Threshold-based paywalls have high conversion per triggered user but
        require that users reach the threshold, which means the free tier must
        be generous enough to build that investment.
      </p>

      <AnchorHeading as="h2" id="trial-mechanics">9. Trial mechanics</AnchorHeading>
      <p>
        A trial gives users time-limited access to the paid tier before
        charging. The design decisions are: whether to offer a trial, how long
        to make it, what to gate during the trial, and how to handle the end
        of the trial.
      </p>
      <p>
        The RevenueCat 2025 benchmark data on trials is specific enough to
        drive decisions. Eighty-two percent of trial starts happen on install
        day. This single fact has a large implication: the session where a user
        installs your app and starts a trial is your highest-value moment to invest in.
        If your onboarding is slow, 82% of your trial cohort has already
        started their clock before they have seen your product&rsquo;s value.
      </p>
      <p>
        Trial-to-paid conversion improves with longer trials. The RevenueCat
        data shows 45.7% trial-to-paid conversion for trials of 17-32 days.
        Shorter trials show lower rates. The practical question is whether a
        longer trial matches the time-to-value of your product. A user needs
        to experience the product long enough to feel the benefit. If your
        product&rsquo;s value is visible in the first session, a 7-day trial may
        be more than enough. If the product value compounds over weeks (a habit
        tracker, a journaling tool, a learning product), a 14-day trial cuts
        the evaluation period short.
      </p>
      <p>
        The median annual subscription across RevenueCat&rsquo;s dataset is
        approximately $29.99. This anchors what &ldquo;normal&rdquo; looks like in
        consumer apps. It is not a target; it is a data point about the market
        you are competing in.
      </p>

      <AnchorHeading as="h2" id="ltv-cac">10. LTV and CAC for B2C founders</AnchorHeading>
      <p>
        <strong>Lifetime value (LTV)</strong> is the total revenue a single
        customer generates before they churn. For a subscription product:
      </p>
      <pre>{`LTV = ARPU / monthly_churn_rate

Example:
ARPU = $12/month
monthly churn = 5%
LTV = $12 / 0.05 = $240`}</pre>
      <p>
        If you do not know your churn rate yet, you are guessing. Say so. A
        reasonable first estimate for a B2C monthly subscription is 5-10%
        monthly churn (matching the RevenueCat year-1 monthly retention of 17%,
        which implies roughly 83% leaving over 12 months, or about 14% monthly).
        Use that estimate, label it an estimate, and update it as data arrives.
      </p>
      <p>
        <strong>Customer acquisition cost (CAC)</strong> is the total cost of
        acquiring one paying customer. For a solo founder, the dominant cost
        is time.
      </p>
      <pre>{`CAC = (paid_spend + time_cost) / new_paying_customers

Example:
$0 paid spend
10 hours/week on growth × $100/hour opportunity cost = $1,000/week
5 new paying customers/week
CAC = $1,000 / 5 = $200`}</pre>
      <p>
        The ratio that matters is LTV / CAC. A ratio above 3 is the canonical
        threshold for a sustainable B2C business. Below 3, you are either paying
        too much to acquire customers or not extracting enough value per customer.
        For a solo founder in the first months, LTV / CAC is almost always
        below 1 because time costs dominate. The goal is not to hit 3 now. The
        goal is to build a spreadsheet where you can see which variable to pull.
      </p>
      <p>
        Anu Hariharan at Y Combinator frames this clearly: for consumer businesses,
        track user retention first, not dollar retention, because the volume of
        users matters at this stage. LTV / CAC matters more once you have enough
        data to measure churn accurately.
      </p>

      <AnchorHeading as="h2" id="ppp-pricing">11. Purchasing power parity pricing</AnchorHeading>
      <p>
        A price that is accessible in San Francisco is unaffordable for a
        developer in Lagos or a student in Bucharest. <strong>PPP pricing</strong>
        adjusts your price by the ratio of local purchasing power to a baseline
        (usually the US), derived from World Bank or OECD GDP data.
      </p>
      <p>
        Sebastien Castiel documented his implementation of PPP on a React hooks
        course. His results showed 20-50% revenue increases from markets that
        previously bounced on price. The mechanism is straightforward: detect
        the user&rsquo;s country via IP geolocation at checkout, look up the PPP
        factor for that country, and apply a discount in one of three bands
        (20%, 40%, 60%). Avoid a smooth curve; three bands are easier to reason
        about and less exploitable.
      </p>
      <p>
        Anti-abuse considerations: limit one purchase per IP or device for the
        discounted price, set a floor at your marginal hosting cost per user,
        and monitor for bulk purchasing patterns (buying 10 licenses at the 60%
        discount and reselling). These are real risks but manageable ones; the
        revenue upside from unlocking emerging markets typically outweighs the
        abuse cost.
      </p>
      <p>
        For a mobile product using App Store IAP or Google Play Billing, both
        platforms offer storefront price localization natively. You set a price
        in USD and the store converts it to local currency at a rate that
        roughly approximates purchasing power. This is not a full PPP
        implementation, but it removes the friction of foreign currency
        conversion and reduces cart abandonment from international users.
      </p>

      <AnchorHeading as="h2" id="case-study">12. Case study: Tony Dinh&rsquo;s pricing decisions</AnchorHeading>
      <p>
        Tony Dinh is a Vietnamese software developer who left a salaried
        engineering job and grew to $45K/month in revenue across multiple
        products within two years. His essay on Indie Hackers (2023) is the
        most specific public account of B2C pricing decisions from a solo
        technical founder at the stage this course targets.
      </p>
      <p>
        His pricing history across four products illustrates the model-choice
        framework from section 5:
      </p>
      <ul>
        <li>
          <strong>DevUtils ($9 one-time):</strong> A macOS developer utilities
          app. No server. No API. No recurring cost. Dinh chose one-time pricing
          and called the rule explicitly: recurring costs justify recurring
          charges; software without them does not earn a subscription.
        </li>
        <li>
          <strong>Black Magic ($4/month, grew to $14K MRR before acquisition):</strong>
          A Twitter analytics tool that pulled live data from Twitter&rsquo;s API
          every hour. The API had a cost. The recurring cost justified the
          recurring charge. Dinh scaled this to $14K MRR and sold it for $128K.
        </li>
        <li>
          <strong>Xnapper ($6K/month revenue):</strong> A screenshot tool for
          macOS. One-time pricing with an optional extras pack. The baseline
          product has no server costs; the extras (cloud storage, team features)
          do.
        </li>
        <li>
          <strong>TypingMind ($22K in the first 7 days, $30K/month ongoing):</strong>
          A better UI for ChatGPT. Launched at $9 one-time when the OpenAI API
          was the dominant cost and the product did not require its own server.
          Dinh later added a hosted model option with a subscription tier as the
          product&rsquo;s server costs grew.
        </li>
      </ul>
      <p>
        The pattern across all four products: the pricing model tracks the cost
        structure. Where Dinh departs from convention is in the pricing
        sequencing: he built the audience (on Twitter, publicly, with a daily
        posting habit) before launch, and priced each product after observing
        what users were already willing to pay for related tools.
      </p>
      <p>
        His Twitter following let him run what amounts to a continuous
        willingness-to-pay experiment: post about the problem, watch who
        engages, launch a product to that audience, and observe conversion.
        This is a form of value-based pricing that does not require formal
        conjoint surveys; it requires consistent public output over time.
      </p>

      <AnchorHeading as="h2" id="exercises">13. Exercises</AnchorHeading>
      <p>These exercises should be answerable from this reading alone.</p>

      <Exercise n={1}>
        <p>
          Your product has 80 monthly subscribers at $12/month. Three
          subscribers canceled last month. Compute MRR, monthly churn rate,
          and LTV. Show your work. Then state one assumption you made that
          you do not yet have data to confirm.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          RevenueCat data shows hard paywall apps converting at 12.11% vs
          freemium at 2.18% by day 35. Describe one product type where
          freemium would still be the right choice despite this gap, and
          explain the specific mechanism that makes freemium win in that case.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Tony Dinh&rsquo;s rule is: &ldquo;if there are no recurring costs to
          maintain the software, I don&rsquo;t charge customers recurring costs.&rdquo;
          Apply this rule to your product. If your product has no server costs,
          what is your model? If it does have server costs, estimate the monthly
          cost per user at 1,000 users. Does the rule produce a price that
          covers those costs at a reasonable conversion rate?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          You are placing a paywall in a journaling app. The aha-moment for
          this app is completing the third journal entry in a week, which
          happens on average on day 6. Propose a paywall placement and trial
          length. Justify both choices using the RevenueCat trial data and the
          definition of aha-moment from Week 1.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          A user in Brazil visits your checkout page. Your standard price is
          $10/month. Brazil&rsquo;s PPP factor relative to the US is approximately
          0.35. What would a PPP-adjusted price be? Round to the nearest $0.50.
          List one anti-abuse measure you would implement alongside this
          discount.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">14. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet (Week 3 section).</strong> Write your
          1-page pricing brief using the four sections: model, anchor, trial
          mechanics, paywall placement.
        </li>
        <li>
          <strong>Lecture 1 (Pricing for B2C).</strong> Covers the model
          decision and anchor pricing with more worked examples.
        </li>
        <li>
          <strong>Lecture 2 (Paywall design).</strong> Covers hard, soft, and
          metered paywalls with the RevenueCat benchmark data in depth.
        </li>
        <li>
          <strong>Assignment HW2 (Pricing + paywall).</strong> The deliverable
          is a live paywall wired to Stripe, plus the pricing brief from section.
        </li>
      </ul>

      <Takeaways>
        <li>Model choice is a tradeoff: freemium reaches more users but converts 6x worse than a hard paywall by day 35. Name the tradeoff before you choose.</li>
        <li>An anchor is the first number a buyer sees. You are always anchoring your price; the only question is whether you do it deliberately.</li>
        <li>Place the paywall after the aha-moment. A paywall that precedes value is a wall; one that follows value is an invitation.</li>
        <li>LTV = ARPU / monthly churn. If you do not know your churn rate, write down your best estimate and label it as such.</li>
        <li>PPP pricing unlocks revenue from users who bounce only on price, not on intent. The implementation is one afternoon in Stripe.</li>
      </Takeaways>

      <Bibliography>
        <p>
          RevenueCat. &ldquo;State of Subscription Apps 2025.&rdquo; revenuecat.com,
          2025. Data from 115,000+ apps. Primary source for trial mechanics
          benchmarks (82% of trial starts on day 0; hard paywall 12.11% vs
          freemium 2.18% at day 35; 45.7% trial-to-paid for 17-32 day trials;
          year-1 retention: yearly 44.1%, monthly 17%).
        </p>
        <p>
          Dinh, Tony. &ldquo;My solopreneur story: zero to $45K/mo in 2 years.&rdquo;
          Indie Hackers, 2023. indiehackers.com. Primary source for
          one-time vs subscription model decisions across DevUtils, Black Magic,
          Xnapper, and TypingMind. Key quote on recurring costs.
        </p>
        <p>
          Allen, Courtland (interviewer) and Pieter Levels (subject).
          &ldquo;Confronting Your Fears and Taking a Leap with Pieter Levels
          of Nomad List.&rdquo; Indie Hackers Podcast #43, 2018. Source for
          value-based anchor pricing: &ldquo;the price is not about the cost.&rdquo;
        </p>
        <p>
          Campbell, Patrick and Paddle / ProfitWell. &ldquo;Pricing Strategy Guide:
          Unlock Growth with These 3 Strategies.&rdquo; paddle.com, 2022. Research
          synthesis from 30,000+ subscription companies on willingness-to-pay,
          price anchoring, and LTV.
        </p>
        <p>
          Castiel, Sebastien. &ldquo;Purchasing Power Parity: fair pricing for
          your SaaS product.&rdquo; scastiel.dev, 2021. First-person account of PPP
          implementation on a React hooks course, with 20-50% revenue increase
          from emerging markets.
        </p>
        <p>
          Hariharan, Anu (Y Combinator). &ldquo;Nine Business Models and the
          Metrics Investors Want.&rdquo; YC Startup School, 2019. Source for consumer
          business metric priorities: user retention over dollar retention at
          early stage.
        </p>
        <p>
          Ramanujam, Madhavan and Georg Tacke. <em>Monetizing Innovation: How
          Smart Companies Design the Product Around the Price.</em> Wiley, 2016.
          Optional reference for willingness-to-pay methodology and
          outcome-based pricing frameworks.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk03ReadingSearchBody =
  "pricing B2C freemium anchor price hard paywall soft paywall metered paywall trial mechanics LTV CAC PPP purchasing power parity Tony Dinh Pieter Levels RevenueCat subscription one-time model choice reading Week 3";
