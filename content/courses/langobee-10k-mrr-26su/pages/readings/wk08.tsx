import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk08Reading() {
  return (
    <ReadingPage
      id="wk08"
      title="Week 8: The $10K math"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading works through the arithmetic of $10K MRR from first
          principles using LangoBee&rsquo;s real prices. By the end you will be
          able to compute the exact subscriber count at any price and churn
          assumption, derive the monthly visitor requirement for three
          acquisition scenarios, state the churn ceiling and explain why it
          caps growth independently of traffic, and set a maximum defensible
          CAC from a modeled LTV.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Paywall moment and trial-to-paid
          conversion stages (week 7), willingness-to-pay and LangoBee&rsquo;s
          pricing rationale (week 6), and churn as a retention concept (week 7).
          This week introduces: mrr-model, churn-ceiling, ltv, cac.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-subscriber-count">
        1. The subscriber count, done honestly
      </AnchorHeading>
      <p>
        The first move in any MRR model is to compute the subscriber count at your
        actual prices. LangoBee charges $7.99 per month or $49 per year. The
        annual plan normalizes to $4.08 per month ($49 / 12 = $4.0833). These
        two prices anchor three planning scenarios.
      </p>
      <pre>{`--- Subscriber count math (June 2026 snapshot) ---

Monthly plan only:
  Target MRR          = $10,000
  ARPA (monthly)      = $7.99
  Subscribers needed  = $10,000 / $7.99 = 1,251.6 → 1,252

Annual plan only:
  Target MRR          = $10,000
  ARPA (monthly equiv)= $49 / 12 = $4.0833
  Subscribers needed  = $10,000 / $4.0833 = 2,449.2 → 2,450

60/40 blend (60% annual, 40% monthly):
  Blended ARPA = (0.60 × $4.0833) + (0.40 × $7.99)
               = $2.45 + $3.196
               = $5.646 / month
  Subscribers needed = $10,000 / $5.646 = 1,771.8 → 1,772`}</pre>
      <p>
        Three different subscriber targets driven entirely by which plan mix
        you assume. The annual-only scenario demands 96% more subscribers than
        the monthly-only scenario because annual ARPA is 49% lower on a monthly
        basis.
      </p>
      <p>
        This math is not a trick: it reflects a genuine strategic tension. Annual
        plans reduce churn (subscribers can only churn at renewal, not every 30
        days), which improves retention. But they require more raw customers to
        hit the same MRR. RevenueCat&rsquo;s 2025 benchmark data shows annual plan
        year-1 retention at 44.1% for subscription apps versus meaningfully lower
        for monthly plans (RevenueCat Research Team, 2025). The retention gain
        from annual plans partially offsets the higher subscriber requirement.
      </p>

      <AnchorHeading as="h2" id="2-churn-as-a-tax">
        2. Churn as a compounding tax
      </AnchorHeading>
      <p>
        Churn is the percentage of active subscribers who cancel in a given
        period. At 5% monthly churn, one subscriber in twenty cancels every
        month. That sounds small. The compounding behavior makes it large.
      </p>
      <pre>{`--- Churn compounding over 12 months ---

Starting cohort: 1,000 subscribers
Monthly churn: 5%

End of month 1:  1,000 × (1 - 0.05)^1  = 950
End of month 3:  1,000 × (1 - 0.05)^3  = 857
End of month 6:  1,000 × (1 - 0.05)^6  = 735
End of month 12: 1,000 × (1 - 0.05)^12 = 540

After 12 months, 46% of the original cohort has churned.
After 24 months: 1,000 × (1 - 0.05)^24 = 292. 71% gone.`}</pre>
      <p>
        Rachitsky (2022) benchmarks B2C monthly churn: 3-5% is &ldquo;good,&rdquo;
        under 2% is &ldquo;great.&rdquo; Early cohorts (months 1-3) often run
        5-50% because the users who signed up before the product was fully shaped
        churn fast. That early churn reflects activation failure, not permanent
        product-market fit decay. Cohort-based churn analysis reveals this; a
        blended monthly churn rate hides it.
      </p>
      <p>
        The practical consequence for LangoBee: if the first subscribers arrive
        at 8% monthly churn (realistic for a new product), the model deteriorates
        sharply. Bringing churn down to 5% before scaling acquisition is not
        a nicety. It is the prerequisite for the math to work.
      </p>

      <AnchorHeading as="h2" id="3-the-churn-ceiling">
        3. The churn ceiling
      </AnchorHeading>
      <p>
        The churn ceiling is the maximum sustainable subscriber count given a
        fixed new-subscriber rate and a fixed monthly churn rate. It derives
        from setting the net change in subscribers per month to zero: new
        subscribers minus churned subscribers equals zero.
      </p>
      <pre>{`--- Churn ceiling derivation ---

Let:
  N = new paying subscribers added per month (constant)
  c = monthly churn rate (decimal)
  S = steady-state subscriber count

At steady state:
  Subscribers gained per month = Subscribers lost per month
  N = S × c
  S = N / c

Example: N = 63 new subscribers/month, c = 5%
  S = 63 / 0.05 = 1,260 subscribers
  MRR ceiling at $7.99 = 1,260 × $7.99 = $10,067

Example: N = 63, c = 8% (early-cohort typical)
  S = 63 / 0.08 = 788 subscribers
  MRR ceiling = 788 × $7.99 = $6,296  (never reaches $10K)

Example: N = 63, c = 2%
  S = 63 / 0.02 = 3,150 subscribers
  MRR ceiling = 3,150 × $7.99 = $25,169`}</pre>
      <p>
        The ceiling is not a forecast. It is the plateau the business
        approaches asymptotically. It becomes visible months before revenue
        actually plateaus because the math is deterministic.
      </p>
      <p>
        Skok (2020) makes this explicit in his SaaS Metrics 2.0 guide: the
        churn rate is the most important lever in a subscription business
        precisely because it sets the ceiling that acquisition spend fights
        against. More traffic cannot break through the ceiling; only lower
        churn raises it.
      </p>
      <p>
        Walling (2022) states the bootstrapper version of the same insight:
        at 5% monthly churn the math of reaching $10K MRR becomes extremely
        hard to sustain, because every month of churn erases a fraction of
        what acquisition spent the month before.
      </p>

      <Callout title="Why 63 new subscribers per month?">
        <p>
          At the blended ARPA of $5.646 and 5% monthly churn, the churn
          ceiling equals $10K MRR when the new-subscriber rate is:
        </p>
        <pre>{`N = $10,000 / ($5.646 × (1/0.05))
  = $10,000 / ($5.646 × 20)
  = $10,000 / $112.92
  = 88.6 → 89 new subscribers/month`}</pre>
        <p>
          At the monthly-only price of $7.99: N = $10,000 / ($7.99 / 0.05) = 62.6 → 63 per month.
          This reading uses 63 as the reference number for monthly-plan scenarios.
          Adjust to 89 for the blended scenario.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-working-backward-to-traffic">
        4. Working backward to traffic
      </AnchorHeading>
      <p>
        Given a target new-subscriber rate, you can work backward through the
        funnel to compute required monthly visitors. Three conversion rates
        connect visitors to paying subscribers:
      </p>
      <pre>{`Visitors → Signups:          visitor-to-signup rate (v2s)
Signups  → Trial starts:     signup-to-trial rate (s2t)
Trials   → Paying customers: trial-to-paid rate (t2p)

Monthly visitors needed = New subs/month / (v2s × s2t × t2p)`}</pre>
      <p>
        Where do the benchmark rates come from? RevenueCat&rsquo;s 2025
        report is the most current source: CC-required trials convert 25-35%
        of trial starters to paid at the &ldquo;good&rdquo; threshold and
        50-60% at the &ldquo;great&rdquo; threshold. The median across all
        CC-required trials sits at 35-40%, with top performers above 60% when
        trials exceed four days (RevenueCat Research Team, 2025).
      </p>
      <p>
        Visitor-to-signup rates vary more by channel than by product. Carter
        (2024) notes that organic and community acquisition channels for
        consumer subscription apps typically convert 3-6% of cold visitors to
        signups, while pre-warmed audiences (creator referrals, prior email
        list) can reach 5-10%. LangoBee&rsquo;s CC-required trial, which asks
        visitors to commit a payment method immediately, likely sits at the
        lower end of cold-traffic ranges, around 2-4%.
      </p>
      <p>
        Signup-to-trial is the rate with the least published benchmark data
        and the highest variance. It depends entirely on where and how the
        paywall appears. RevenueCat&rsquo;s 2025 report establishes that only
        1.7% of all app downloads convert to paid within 30 days at the
        median, with top apps reaching 4.2%. The implied signup-to-trial rate
        for a CC-required trial landing somewhere in the 15-40% range
        (RevenueCat Research Team, 2025). A rate under 15% usually indicates
        either a weak paywall placement or a product that has not yet
        demonstrated its aha moment before asking for payment.
      </p>

      <AnchorHeading as="h2" id="5-three-scenarios">
        5. Three acquisition scenarios
      </AnchorHeading>
      <p>
        Each scenario assumes a different channel with different funnel rates.
        All scenarios target 63 new paying subscribers per month (monthly plan,
        5% churn ceiling at $10K MRR).
      </p>
      <pre>{`--- Scenario A: Community-led (Reddit, Discord) ---

Assumed rates (cold community traffic):
  v2s = 3-5%   s2t = 20-30%   t2p = 35%

Monthly visitors needed:
  Pessimistic: 63 / (0.03 × 0.20 × 0.35) = 63 / 0.0021 = 30,000
  Optimistic:  63 / (0.05 × 0.30 × 0.35) = 63 / 0.00525 = 12,000

LangoBee today: ~174 direct visitors/month (June 2026 snapshot)
Gap to pessimistic target: 30,000 / 174 = 172x current volume


--- Scenario B: Creator-led (YouTube micro-creator) ---

Assumed rates (pre-warmed audience):
  v2s = 5-8%   s2t = 35%   t2p = 40%

Monthly visitors needed:
  Pessimistic: 63 / (0.05 × 0.35 × 0.40) = 63 / 0.007 = 9,000
  Optimistic:  63 / (0.08 × 0.35 × 0.40) = 63 / 0.0112 = 5,625

Channel math: a 100K-sub creator at 1% click-through = 1,000 visitors.
To reach 5,625-9,000 visitors requires 5-9 such mentions per month,
or one mention from a creator with 500K-900K subscribers.


--- Scenario C: Loop-led (shorts share loop) ---

Assumed rates (cold share context):
  v2s = 2-4%   s2t = 20%   t2p = 30%

Monthly visitors needed:
  Pessimistic: 63 / (0.02 × 0.20 × 0.30) = 63 / 0.0012 = 52,500
  Optimistic:  63 / (0.04 × 0.20 × 0.30) = 63 / 0.0024 = 26,250

LangoBee today: 408 shorts impressions, 1 share/month (June 2026 snapshot)
At 1 share per 408 impressions: impressions needed = 52,500 visitors × 408 = 21M
At 2% of shares convert to visitors: impressions needed = 52,500 / 0.02 / 408 = impractical
The loop is pre-validation.`}</pre>

      <Callout title="Scenario comparison">
        <pre>{`Scenario       Visitors/mo (pessimistic)  Visitors/mo (optimistic)
-----------    -------------------------  ------------------------
Community-led  30,000                     12,000
Creator-led    9,000                      5,625
Loop-led       52,500                     26,250

Current LangoBee baseline: ~174 direct visitors/month`}</pre>
      </Callout>

      <p>
        Creator-led has the lowest visitor requirement because the channel
        pre-filters for intent: a comprehensible-input YouTube audience has
        already self-selected as language learners willing to use apps.
        Community-led requires more visitors but is executable today with no
        cash spend. The loop-led scenario requires the most visitors of all
        three because its funnel rates are worst (cold audience, no language
        context framing at the share point).
      </p>
      <p>
        Carter (2024) frames this clearly in the Subscription Value Loop:
        word-of-mouth and organic acquisition only compound reliably once the
        product&rsquo;s Value Creation stage (unique value, rapid activation,
        repeatable engagement) is operating. The loop-led scenario is only
        viable after the product has demonstrated it can retain users who
        arrive via shares.
      </p>

      <AnchorHeading as="h2" id="6-ltv-and-cac">
        6. LTV and the maximum defensible CAC
      </AnchorHeading>
      <p>
        LTV (customer lifetime value) is the total revenue a subscriber
        generates over their subscription life. The formula-based version:
      </p>
      <pre>{`LTV = ARPA / Monthly churn rate

At $7.99/mo and 5% churn:  LTV = $7.99 / 0.05 = $159.80
At $7.99/mo and 3% churn:  LTV = $7.99 / 0.03 = $266.33
At $7.99/mo and 2% churn:  LTV = $7.99 / 0.02 = $399.50`}</pre>
      <p>
        These formula-derived numbers assume subscribers remain indefinitely.
        They are theoretical maximums. RevenueCat&rsquo;s 2025 report grounds
        the number in observed behavior for education apps:
      </p>
      <pre>{`--- RevenueCat 2025: Education app LTV per payer, Year 1 ---

Median:  $10.97
P75:     $24.00 (approx)
P90:     $52.41

Planning range: $10.97 (conservative) to $52.41 (optimistic)`}</pre>
      <p>
        The gap between the formula-derived LTV ($159.80 at 5% churn) and the
        observed median ($10.97) is explained by real behavior: most subscribers
        cancel within the first year. The formula assumes they do not. Use the
        formula for long-run planning; use the RevenueCat observed median for
        near-term CAC discipline.
      </p>
      <p>
        Skok (2020) establishes the LTV:CAC rule: the ratio should exceed 3:1,
        and months to recover CAC should be under 12. At the conservative
        LTV of $10.97:
      </p>
      <pre>{`--- Maximum defensible CAC ---

Rule: LTV / CAC >= 3

Conservative (LTV = $10.97):
  Max CAC = $10.97 / 3 = $3.66

Base case (LTV = $52.41, P90):
  Max CAC = $52.41 / 3 = $17.47

Optimistic (formula-derived LTV at 5% churn, $159.80):
  Max CAC = $159.80 / 3 = $53.27`}</pre>
      <p>
        Rachitsky (2022) shows a pattern across breakout B2C subscription
        companies: the winners stay lean and target one-month payback periods
        rather than LTV-based justification. At $7.99/mo ARPA, a one-month
        payback means CAC under $7.99. That is stricter than even the
        conservative 3:1 rule at the $10.97 LTV.
      </p>

      <AnchorHeading as="h2" id="7-per-scenario-cac">
        7. Per-scenario CAC estimates
      </AnchorHeading>
      <pre>{`--- Community-led ---

Cost: 5 hours founder time/month at $50/hr = $250
New subs/month: 63 (target)
CAC = $250 / 63 = $3.97

Vs. maximum defensible CAC at conservative LTV: $3.66
Result: slightly above the floor; within the base-case ceiling of $17.47.


--- Creator-led (micro-sponsorship) ---

Cost: $200 sponsorship/month
New subs/month: 63
CAC = $200 / 63 = $3.17

Vs. maximum defensible CAC at conservative LTV: $3.66
Result: within even the conservative floor.


--- Loop-led ---

Cost: 2 hours founder time/month at $50/hr = $100
New subs/month: 63 (at optimistic visitor volume, which is unvalidated)
CAC = $100 / 63 = $1.59

Result: lowest cash CAC, but requires 26,250-52,500 visitors/month
vs. LangoBee's current 174. The CAC is notional until the loop works.`}</pre>
      <p>
        Creator-led is the only scenario where the CAC math works at both the
        conservative and base-case LTV while the traffic requirement is in a
        plausible range (5,600-9,000 monthly visitors from creator mentions).
      </p>

      <AnchorHeading as="h2" id="8-the-quick-ratio">
        8. The Quick Ratio as a health check
      </AnchorHeading>
      <p>
        The Quick Ratio is a one-number measure of subscription growth health.
        It answers: for every subscriber you lose, how many new ones did you
        gain?
      </p>
      <pre>{`Quick Ratio = (New subscribers + Resurrected subscribers) / Churned subscribers

Above 4:   growing fast and efficiently
2-4:       healthy growth
1-2:       barely growing; churn nearly matches acquisition
Below 1:   shrinking`}</pre>
      <p>
        At $0 MRR with zero paying subscribers, LangoBee&rsquo;s Quick Ratio
        is undefined. The first subscribers make it calculable. The target for
        months 1-6: keep Quick Ratio above 2. A Quick Ratio below 2 before
        $3K MRR is an early warning that churn is already eating into growth
        before scale.
      </p>
      <p>
        Walling&rsquo;s stair-step framework (2015) treats $10K MRR as the
        threshold that changes which marketing channels become viable. Below
        it, you cannot afford paid acquisition. The Quick Ratio is the metric
        that tells you whether organic and creator channels are compounding
        fast enough to reach $10K MRR before the founder&rsquo;s attention runs out.
      </p>

      <AnchorHeading as="h2" id="9-ltt-what-langobee-doesnt-know">
        9. What LangoBee does not know yet
      </AnchorHeading>
      <p>
        The model built in this reading is arithmetic, not measurement. Every
        rate is assumed from benchmarks because LangoBee has zero trial starts
        and zero paying customers as of June 2026. That means:
      </p>
      <pre>{`Known:
  Prices: $7.99/mo, $49/yr
  Subscriber count required at blended ARPA: 1,772

Unknown (modeled from benchmarks, not data):
  Visitor-to-signup rate: assumed 2-8% by channel
  Signup-to-trial rate:   assumed 20-40%
  Trial-to-paid rate:     assumed 25-40% (RevenueCat median 35-40%)
  Monthly churn:          assumed 5% (good B2C benchmark)
  LTV:                    assumed $10.97-$52.41 (RevenueCat education)

The model's output is only as good as its worst assumed rate.
The worst assumed rate is signup-to-trial, because LangoBee has
no paywall impression data and no trial starts at all.`}</pre>
      <p>
        The immediate implication: the first experiment is not optimizing
        conversion. It is getting the first 10-20 trial starts so any of these
        rates can be replaced with a real number. A model built on one real
        data point is better than a model built on five benchmark assumptions.
      </p>

      <AnchorHeading as="h2" id="10-exercises">
        10. Exercises
      </AnchorHeading>
      <p>
        Complete these before or during section. Recall from the reading; do
        not look up the answers.
      </p>

      <Exercise n={1}>
        <p>
          LangoBee tests a new annual price of $59/yr instead of $49/yr.
          Assuming a 60/40 blend (60% annual, 40% monthly) and targeting
          $10,000 MRR, compute the new blended ARPA and the new subscriber
          count needed. By what percentage does the required subscriber count
          fall compared to the $49/yr scenario? Show your work.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Write the churn ceiling formula from memory. Then: at 4% monthly
          churn and a new-subscriber rate of 80 per month, what is the
          steady-state subscriber count? If ARPA is $5.65, what is the
          steady-state MRR? Does this reach $10,000 MRR?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          A friend argues that the loop-led scenario has the lowest CAC
          ($1.59 per subscriber) and should therefore be prioritized. Write
          two sentences explaining why this argument is incomplete. What
          condition must be true before the loop-led CAC is real rather than
          notional?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Using the RevenueCat 2025 median LTV of $10.97 and the 3:1
          LTV:CAC rule, what is the maximum allowable CAC? Now compute the
          maximum allowable CAC if Rachitsky&rsquo;s one-month payback rule
          applies instead (CAC must be recovered within one month&rsquo;s
          ARPA). Which rule is stricter at this LTV, and by how much?
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          In the community-led scenario (pessimistic: 30,000 visitors/month
          needed), LangoBee&rsquo;s current visitor count is 174 per month.
          Compute the growth multiplier required and the compounding monthly
          visitor growth rate needed to reach 30,000 visitors in 12 months
          starting from 174. Is this growth rate achievable from a standing
          start in a niche community channel? Write one sentence of honest
          assessment.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="11-going-deeper">
        11. Going deeper
      </AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet:</strong> Build the MRR model spreadsheet
          this week and stress-test all three scenarios with your own assumptions.
          The section opens with a retrieval drill on week 7.
        </li>
        <li>
          <strong>Capstone assignment:</strong> The $10K MRR Operating Plan
          goes out this week and is due at the end of week 12. The model built
          in this reading is the quantitative backbone of the capstone.
        </li>
        <li>
          <strong>SaaS Metrics 2.0</strong> (David Skok, 2020) contains the
          full derivation of LTV, CAC, and churn formulas with spreadsheet
          models.{" "}
          <a href="https://www.forentrepreneurs.com/saas-metrics-2/">
            forentrepreneurs.com/saas-metrics-2/
          </a>
        </li>
        <li>
          <strong>The Subscription Value Loop</strong> (Phil Carter, 2024)
          maps the full consumer subscription growth arc and provides top-quartile
          conversion and year-1 retention benchmarks from RevenueCat&rsquo;s
          dataset.{" "}
          <a href="https://www.lennysnewsletter.com/p/the-subscription-value-loop-a-framework">
            lennysnewsletter.com/p/the-subscription-value-loop-a-framework
          </a>
        </li>
        <li>
          <strong>Community to follow:</strong> Indie Hackers (indiehackers.com).
          The largest archive of bootstrapped-founder revenue journeys with
          transparent MRR numbers. Search for &ldquo;language app&rdquo; or
          &ldquo;consumer subscription&rdquo; to find comparable businesses
          sharing real unit economics.
        </li>
      </ul>

      <Takeaways>
        <li>$10K MRR requires 1,252 subscribers at $7.99/mo, 2,450 at $49/yr annual-only, or 1,772 at a 60/40 blend. The annual plan raises subscriber count needed but reduces monthly churn exposure.</li>
        <li>The churn ceiling (new subs per month divided by monthly churn rate) sets an absolute MRR cap that more traffic cannot break. At 5% churn and 63 new subs/month, the ceiling is $10,067. At 8% churn, it drops to $6,296.</li>
        <li>Creator-led acquisition requires the fewest monthly visitors (5,600-9,000) to generate 63 new paying subscribers per month, because the channel pre-filters for intent. Community-led needs 12,000-30,000. Loop-led needs 26,000-52,500 and is unvalidated.</li>
        <li>RevenueCat&rsquo;s 2025 education-app median LTV is $10.97 per payer, implying a maximum defensible CAC of $3.66 under the 3:1 rule. Creator-led and loop-led scenarios stay within this ceiling; community-led is marginal.</li>
        <li>LangoBee has zero trial starts. Every rate in this model is a benchmark assumption. The first actionable experiment is generating 10-20 trial starts so the signup-to-trial rate can be replaced with a real number.</li>
      </Takeaways>

      <Bibliography>
        <p>
          Carter, P. (2024). The Subscription Value Loop: A framework for
          consumer subscription growth. Lenny&rsquo;s Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/the-subscription-value-loop-a-framework">
            lennysnewsletter.com/p/the-subscription-value-loop-a-framework
          </a>{" "}
          Consumer subscription growth stages; top-quartile LTV and retention benchmarks from RevenueCat.
        </p>
        <p>
          Rachitsky, L. (2022). What Is Good Monthly Churn. Lenny&rsquo;s Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/monthly-churn-benchmarks">
            lennysnewsletter.com/p/monthly-churn-benchmarks
          </a>{" "}
          B2C churn benchmarks (good 3-5%, great under 2%); churn ceiling problem defined.
        </p>
        <p>
          Rachitsky, L. (2022). How to Win in Consumer Subscription.
          Lenny&rsquo;s Newsletter.{" "}
          <a href="https://www.lennysnewsletter.com/p/winning-at-consumer-subscription">
            lennysnewsletter.com/p/winning-at-consumer-subscription
          </a>{" "}
          One-month payback discipline and operating patterns of breakout B2C subscription companies.
        </p>
        <p>
          RevenueCat Research Team. (2025). State of Subscription Apps 2025.
          RevenueCat.{" "}
          <a href="https://www.revenuecat.com/state-of-subscription-apps-2025/">
            revenuecat.com/state-of-subscription-apps-2025/
          </a>{" "}
          Education LTV ($10.97 median, $52.41 P90), trial-to-paid (35-40% for CC-required), annual plan year-1 retention (44.1%).
        </p>
        <p>
          Skok, D. (2020). SaaS Metrics 2.0. For Entrepreneurs.{" "}
          <a href="https://www.forentrepreneurs.com/saas-metrics-2/">
            forentrepreneurs.com/saas-metrics-2/
          </a>{" "}
          LTV, CAC, MRR formulas and benchmarks; LTV:CAC 3:1 rule; churn as the key subscription lever.
        </p>
        <p>
          Walling, R. (2015). The Stair Step Method of Bootstrapping.
          robwalling.com.{" "}
          <a href="https://robwalling.com/essays/2015/03/26/the-stair-step-method-of-bootstrapping">
            robwalling.com/essays/2015/03/26/the-stair-step-method-of-bootstrapping
          </a>{" "}
          $10K MRR as the threshold that changes viable marketing channels; sequenced bootstrapping bets.
        </p>
        <p>
          Walling, R. (2022). Episode 602: Explaining SaaS Metrics to a Child.
          Startups for the Rest of Us.{" "}
          <a href="https://www.startupsfortherestofus.com/episodes/episode-602-explaining-saas-metrics-to-a-child">
            startupsfortherestofus.com/episodes/episode-602-explaining-saas-metrics-to-a-child
          </a>{" "}
          MRR, churn, LTV, and CAC from first principles; 5% monthly churn as the cap on $10K MRR sustainability.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk08ReadingSearchBody =
  "unit economics $10K MRR subscriber count 1252 blended ARPA churn ceiling compounding tax quick ratio LTV lifetime value CAC customer acquisition cost maximum defensible CAC three scenarios community-led creator-led loop-led visitor-to-signup signup-to-trial trial-to-paid funnel arithmetic RevenueCat education benchmarks $10.97 median LTV SaaS metrics Skok churn ceiling formula bootstrapper stair step LangoBee mrr model week 8 reading monetization";
