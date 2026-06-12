import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk08SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="build-the-mrr-model">
        Section: Build the MRR model spreadsheet
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 8 &middot; Hands-on worksheet</p>

      <p>
        By the end of this session you will have a spreadsheet (or a set of
        clearly labeled calculations in your founder journal) that takes
        LangoBee&rsquo;s real prices and plugs in three growth scenarios.
        You will know exactly how many monthly visitors each scenario requires
        and which funnel rate is the biggest source of uncertainty in the whole
        model.
      </p>

      <AnchorHeading as="h2" id="part-0-retrieval">
        Part 0: Five-minute retrieval drill (week 7 review)
      </AnchorHeading>

      <p>
        Close the reading. Answer these from memory. Write your answers before
        checking anything.
      </p>
      <ol>
        <li>
          <strong>Paywall moment.</strong> What is the &ldquo;paywall
          moment,&rdquo; and why does placing the paywall earlier, immediately
          after the aha moment rather than after extended free use, tend to
          increase trial starts?
        </li>
        <li>
          <strong>Trial-to-paid stages.</strong> Name the three stages a user
          passes through between first visiting LangoBee and becoming a paying
          subscriber. For each stage, state the direction of the conversion
          rate that defines it.
        </li>
        <li>
          <strong>Churn defined.</strong> Write the formula for monthly churn
          rate in plain words. A subscription product had 200 active subscribers
          at the start of the month and lost 12 by month-end (before any new
          signups). What is its monthly churn rate?
        </li>
        <li>
          <strong>RevenueCat benchmark.</strong> RevenueCat&rsquo;s State of
          Subscription Apps 2025 reports a median trial-to-paid conversion
          rate for apps with CC-required trials. What is that median range?
          What do top performers achieve?
        </li>
      </ol>
      <p>
        Check your answers against the week 7 reading before moving to Part 1.
        If you missed any, note the gap in your founder journal.
      </p>

      <AnchorHeading as="h2" id="part-1-the-subscriber-count">
        Part 1: Nail the subscriber count
      </AnchorHeading>

      <ol>
        <li>
          <strong>Monthly plan math.</strong> LangoBee&rsquo;s monthly price
          is $7.99. Write the equation for the subscriber count required to
          hit exactly $10,000 MRR on the monthly plan alone. Compute it.
          Round up.
        </li>
        <li>
          <strong>Annual plan math.</strong> The annual plan is $49/yr. Convert
          it to a monthly equivalent (divide by 12; keep two decimal places).
          Write the subscriber count required to hit $10,000 MRR if all
          subscribers are on the annual plan. Compute it. Round up.
        </li>
        <li>
          <strong>Blend.</strong> Assume 60% of paying subscribers choose
          annual and 40% choose monthly. Compute the blended ARPA (average
          revenue per account per month). Then compute the subscriber count
          at the blended ARPA. Label this your &ldquo;base case.&rdquo;
        </li>
        <li>
          <strong>Write it down.</strong> In your founder journal, record these
          three numbers: (a) monthly-only subscriber count, (b) annual-only
          subscriber count, (c) blended subscriber count. You will refer to
          these throughout the section.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-the-churn-ceiling">
        Part 2: Build the churn ceiling
      </AnchorHeading>

      <ol start={5}>
        <li>
          <strong>Ceiling formula.</strong> The churn ceiling formula is:
          <pre>{`Steady-state subscribers = New subscribers per month / Monthly churn rate`}</pre>
          At 5% monthly churn, what is the maximum sustainable subscriber
          count if you add exactly 63 new subscribers per month? At 3%? At 2%?
          Compute all three.
        </li>
        <li>
          <strong>New-sub rate required.</strong> Work backward: to sustain
          your blended-ARPA subscriber count (from step 3) at 5% monthly
          churn, how many new paying subscribers must you add every month?
          Write the arithmetic step by step.
        </li>
        <li>
          <strong>Monthly churn scenarios.</strong> Create a small table in
          your spreadsheet or journal:
          <pre>{`Churn rate | Subs needed | New subs/mo needed | Max MRR at 63 new/mo
-----------+-------------+--------------------+---------------------
    2%     |             |                    |
    3%     |             |                    |
    5%     |             |                    |
    8%     |             |                    |`}</pre>
          Fill in every cell. The &ldquo;Max MRR at 63 new/mo&rdquo; column
          uses the ceiling formula with 63 new monthly subscribers at your
          blended ARPA.
        </li>
        <li>
          <strong>Insight check.</strong> Write one sentence: at 5% monthly
          churn and 63 new subscribers per month, what MRR ceiling are you
          locked into? Does that ceiling reach $10K MRR? What churn rate
          would be needed to reach $10K MRR at exactly 63 new subscribers
          per month?
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-three-scenarios">
        Part 3: Three growth scenarios
      </AnchorHeading>

      <p>
        Three acquisition scenarios for LangoBee. Each has a different
        visitor-to-signup rate, signup-to-trial rate, and trial-to-paid rate
        based on the channel&rsquo;s realistic properties. Fill in the
        required monthly visitors for each.
      </p>

      <ol start={9}>
        <li>
          <strong>Scenario A: community-led.</strong> Acquisition via Reddit
          (r/Spanish, r/languagelearning, r/dreamingspanish) and Discord
          posting. Realistic visitor-to-signup rate: 3-5% (interest-driven
          audience, cold channel). Signup-to-trial rate: 25% (no pre-warmup).
          Trial-to-paid rate: 35% (CC-required, RevenueCat median).
          <ul>
            <li>
              Compute: monthly visitors needed to generate the new-sub/mo
              count from step 6 at the low end of each rate (pessimistic),
              then at the high end (optimistic).
            </li>
            <li>
              Write the pessimistic and optimistic visitor counts. Are either
              achievable today with LangoBee&rsquo;s direct/Discord-only
              channel? (June 2026 snapshot: 174 direct visitors/month.)
            </li>
          </ul>
        </li>
        <li>
          <strong>Scenario B: creator-led.</strong> A comprehensible-input
          YouTuber (50K-200K subs) mentions LangoBee in one video per month.
          Realistic visitor-to-signup rate: 5-8% (pre-warmed audience,
          high intent). Signup-to-trial rate: 35%. Trial-to-paid rate: 40%.
          <ul>
            <li>
              Compute pessimistic and optimistic visitor counts using the
              same approach as step 9.
            </li>
            <li>
              How many total YouTube impressions would generate the required
              visitor count if the video-to-click rate is 1%? Does a 50K-sub
              creator realistically produce that impression volume?
            </li>
          </ul>
        </li>
        <li>
          <strong>Scenario C: loop-led.</strong> The shorts share loop:
          a learner shares a short clip, the share drives a new visitor.
          Realistic visitor-to-signup rate: 2-4% (cold share context).
          Signup-to-trial rate: 20% (no language-context framing).
          Trial-to-paid rate: 30% (lower intent from share traffic).
          <ul>
            <li>
              Compute pessimistic and optimistic visitor counts.
            </li>
            <li>
              June 2026 snapshot: 408 shorts impressions and 1 share in 30
              days. At that share rate, how many impressions per month would
              the loop need to sustain the required visitor count?
            </li>
          </ul>
        </li>
        <li>
          <strong>Scenario comparison table.</strong> Fill in this summary:
          <pre>{`Scenario       | Visitors/mo (pessim.) | Visitors/mo (optim.) | Key constraint
---------------+-----------------------+----------------------+----------------
Community-led  |                       |                      |
Creator-led    |                       |                      |
Loop-led       |                       |                      |`}</pre>
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-ltv-and-cac">
        Part 4: LTV and the maximum defensible CAC
      </AnchorHeading>

      <ol start={13}>
        <li>
          <strong>LTV at the monthly plan.</strong> Use the formula:
          <pre>{`LTV = ARPA / Monthly churn rate`}</pre>
          At $7.99/mo and 5% monthly churn, compute LTV. At 3% monthly churn.
          At 2% monthly churn. Note: this is an indefinite-horizon LTV for
          illustration; real LTV should be capped at a reasonable subscriber
          lifetime.
        </li>
        <li>
          <strong>LTV:CAC constraint.</strong> Skok (2020) recommends a
          minimum LTV:CAC ratio of 3:1. Using your LTV at 5% monthly churn,
          compute the maximum CAC that satisfies the 3:1 rule.
        </li>
        <li>
          <strong>RevenueCat reality check.</strong> RevenueCat&rsquo;s 2025
          report shows a median Year 1 LTV per payer of $10.97 for education
          apps (P90: $52.41). Use $10.97 as the conservative LTV. What is
          the maximum CAC under the 3:1 rule at that LTV? Write it.
        </li>
        <li>
          <strong>Channel CAC estimate.</strong> For each scenario, estimate
          the approximate cost per acquired customer:
          <ul>
            <li>
              Community-led: founder time at $50/hr, 5 hrs/month posting and
              engaging. Divide total cost by new subscribers generated.
            </li>
            <li>
              Creator-led: assume a $200 micro-creator sponsorship per
              month. Divide by new subscribers.
            </li>
            <li>
              Loop-led: near-zero cash cost; estimate founder time at $50/hr
              for 2 hrs/month maintaining the share mechanic.
            </li>
          </ul>
          For each scenario, state whether the estimated CAC fits under the
          maximum defensible CAC from step 15.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-interleaving">
        Part 5: Which funnel rate is the least trustworthy number? (week 1
        concept, applied here)
      </AnchorHeading>

      <p>
        This is the interleaving task. It revisits a concept from week 1: the
        difference between vanity metrics and actionable metrics, now applied
        to the MRR model you just built.
      </p>

      <ol start={17}>
        <li>
          <strong>Identify the soft number.</strong> Look at the three funnel
          rates in your model: visitor-to-signup, signup-to-trial, and
          trial-to-paid. LangoBee has zero trial starts ever (June 2026
          snapshot). Which of these three rates is the least trustworthy
          input in the entire model? Write one paragraph defending your
          choice. Consider: which rate has the most variance across real
          products? Which rate does LangoBee have zero data on?
        </li>
        <li>
          <strong>Sensitivity analysis.</strong> Hold all other rates fixed
          at their pessimistic values. Vary your &ldquo;least trustworthy
          rate&rdquo; across its plausible range (e.g., 25%-60% for
          trial-to-paid). Show how the required monthly visitor count
          changes as this single rate moves. At what value of this rate
          does the model become infeasible (visitor count exceeds a
          reasonable ceiling)?
        </li>
        <li>
          <strong>One experiment to resolve it.</strong> Write one concrete
          experiment, runnable in 30 days, that would replace your assumed
          rate with real data. Specify: what you would ship or do, the
          metric you would track, the sample size you need, and what
          outcome would make you revise the rate up or down.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-6-homework">
        Part 6: Assignment status
      </AnchorHeading>

      <p>
        <strong>HW3 is due this week.</strong> If you have not yet submitted
        HW3, complete it before leaving this session. HW3 requires a
        submitted paywall wireframe and the paywall placement decision from
        week 7.
      </p>
      <p>
        <strong>Capstone assignment goes out this week.</strong> The
        &ldquo;$10K MRR Operating Plan&rdquo; capstone is now live. It is
        due at the end of week 12. The model you built today is the
        quantitative backbone of that plan. Save your spreadsheet or journal
        notes in a file named <code>mrr-model-wk08.md</code> or similar.
        You will extend it in weeks 9-11 as you develop and test each
        distribution channel.
      </p>

      <AnchorHeading as="h2" id="what-you-leave-with">
        What you should leave with
      </AnchorHeading>
      <ul>
        <li>
          <strong>Milestone 1:</strong> Subscriber count computed at all three
          pricing configurations (monthly-only, annual-only, blended).
        </li>
        <li>
          <strong>Milestone 2:</strong> Churn ceiling table filled in at four
          churn rates.
        </li>
        <li>
          <strong>Milestone 3:</strong> Three-scenario table with required
          monthly visitor counts, pessimistic and optimistic.
        </li>
        <li>
          <strong>Milestone 4:</strong> Maximum defensible CAC computed and
          compared against each scenario&rsquo;s estimated CAC.
        </li>
        <li>
          <strong>Milestone 5:</strong> One experiment written to resolve the
          least trustworthy funnel rate.
        </li>
        <li>
          <strong>HW3 submitted. Capstone file saved.</strong>
        </li>
      </ul>
    </>
  );
}

export const wk08SectionSearchBody =
  "MRR model spreadsheet subscriber count churn ceiling blended ARPA three scenarios community-led creator-led loop-led funnel rates visitor signup trial paid LTV CAC maximum defensible CAC sensitivity analysis least trustworthy funnel rate HW3 capstone operating plan week 8 section worksheet";
