import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk06Reading() {
  return (
    <ReadingPage
      id="wk06"
      title="Week 6: Price as a hypothesis"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers value-metric pricing, the premium-only vs freemium decision at
          pre-validation scale, how to run willingness-to-pay conversations using the Van
          Westendorp method inside a Mom Test frame, and how the CC-required trial funnel works
          end to end. By the end you will be able to state what each pricing model tests, run five
          WTP conversations using a structured script, and wire the <code>trial_started</code>{" "}
          PostHog event to LangoBee's Stripe webhook.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Mom Test discipline from week 5 (how to ask
          about past behavior rather than hypothetical opinion). The pivot criteria framework from
          week 2 (the conditions that would reopen the freemium question). Week 3's guided first
          session (the activation moment that determines where a paywall would feel earned vs
          hostile, a question this reading raises for week 7).
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-price-as-test">
        1. Price is a test of belief
      </AnchorHeading>
      <p>
        Setting a price is not an accounting exercise. It is a statement about what you believe
        your product is worth to the person paying for it. Every price is a hypothesis. Like all
        hypotheses, it can be tested, and the test produces real evidence.
      </p>
      <p>
        LangoBee's current hypothesis: access to a curated library of 17,440 native-speaker
        videos, with word-level comprehension tracking and per-text difficulty scoring, is worth
        $7.99 per month to someone who is serious about learning Spanish through comprehensible
        input. The 14-day CC-required trial is the test instrument. Zero{" "}
        <code>trial_started</code> events in PostHog as of June 2026 means the test has not run
        yet. The first job is not optimizing the price. It is making the test run once.
      </p>
      <p>
        Kevin Hale frames this directly in his YC pricing lecture: "The best founders treat pricing
        like a product decision. You make a bet, you observe the reaction, you iterate." His
        10-5-20 rule states that you can raise prices by 10% and lose only 5% of customers, or
        raise by 20% and double your revenue per customer with moderate churn. But none of that
        applies until you have customers. Before you have customers, pricing is a filter for
        intent. (Hale, 2019)
      </p>

      <AnchorHeading as="h2" id="2-value-metric">
        2. The value metric
      </AnchorHeading>
      <p>
        The <strong>value metric</strong> is the unit of value your product delivers for which
        customers are willing to pay more as they receive more. Choosing the right value metric
        aligns your pricing with the customer's experience of progress.
      </p>
      <p>
        For a per-seat product like Slack, the value metric is team members: more members means
        more communication value, so you charge per seat. For a usage-based product like Twilio,
        the value metric is messages sent. For a flat subscription like Netflix, the value metric
        is access itself: you pay to unlock the library, and usage above a minimum does not cost
        more.
      </p>
      <p>
        LangoBee uses flat subscription pricing. The value metric is access to the comprehensible-input
        library. A learner who watches 10 videos per week and one who watches 3 per week pay the
        same amount. This is defensible if the value of access itself is high enough to justify
        the price. It becomes a problem if the marginal user sees no reason to pay because they
        can get comprehensible-input content for free elsewhere (Dreaming Spanish's free YouTube
        channel, for example).
      </p>
      <p>
        Patrick Campbell's research at ProfitWell across 30,000+ subscription companies finds
        that flat-rate pricing is most durable when the product creates value the customer cannot
        easily replicate. For LangoBee, that defensibility argument rests on: (1) the word-status
        tracking across 17,440 videos, which no free YouTube channel offers, and (2) the
        difficulty-matched watch-next ranker, which is genuinely unique. The flat-rate pricing
        hypothesis is that these two things are worth $7.99/mo on their own. (Campbell, 2022)
      </p>

      <Callout title="The value metric question">
        <p>
          Write the answer to this question before your five WTP interviews: what is the one
          thing a LangoBee subscriber gets that they cannot replicate by watching Dreaming Spanish
          on YouTube for free? If you cannot answer this in one concrete sentence, the interviews
          will not tell you what you need to know.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="3-premium-vs-freemium">
        3. Premium-only vs freemium: what each model tests
      </AnchorHeading>
      <p>
        Premium-only and freemium are not better or worse in the abstract. They run different
        experiments. Choosing between them at pre-validation scale is a question of which
        experiment you need to run right now.
      </p>
      <p>
        <strong>Premium-only with a CC-required trial</strong> tests whether the product is strong
        enough that a stranger will commit their card to try it. A user who enters their card has
        passed a commitment test. They have signaled intent, not just curiosity. If nobody enters
        their card, you have learned something urgent: either the product is not reaching the right
        people, the perceived value is too low, or the price is the barrier. Each of these has a
        different fix.
      </p>
      <p>
        <strong>Freemium</strong> tests whether you can grow an audience large enough that a small
        conversion rate covers costs. The benchmark from Poyar's 2026 survey of 200 software
        products: freemium converts 3-5% of signups to paid (good), up to 8-12% (great). At
        LangoBee's current traffic of 174 real direct visitors per month from Discord, a 5%
        freemium conversion rate produces 0.3 paying customers per month. Freemium scales when
        top-of-funnel is large. LangoBee's top-of-funnel is not large. (Poyar, 2026)
      </p>
      <p>
        The freemium question routes through week 2's pivot criteria, not through this week's
        section. The locked decision is premium-only. The condition that would reopen freemium is
        explicit: if the next four weeks produce zero <code>trial_started</code> events from real
        humans, and the WTP interviews show that price is the primary barrier (not awareness or
        product quality), then a zoom-in pivot to a freemium acquisition model becomes a defined
        hypothesis with kill criteria.
      </p>
      <p>
        Campbell's framing from his Business of Software keynote is the clearest statement of
        the distinction: "Freemium is an acquisition model, not a revenue model. If you choose
        freemium, you are choosing to spend money acquiring users in exchange for the chance to
        convert a small fraction of them later. That is a legitimate bet. But it requires a
        different funnel, a different cost structure, and a different growth model than a
        trial-to-paid subscription." (Campbell, 2022)
      </p>

      <AnchorHeading as="h2" id="4-competitive-frame">
        4. The competitive frame: LingQ, Duolingo, Dreaming Spanish
      </AnchorHeading>
      <p>
        Pricing is always relative. The learner comparing LangoBee to alternatives is not asking
        "is $7.99 a lot?" They are asking "is $7.99 for LangoBee a better deal than $7/mo for
        Duolingo Super, or $12.99/mo for LingQ, or $8/mo for Dreaming Spanish?" The answer to
        that question depends on what the learner values and what they currently use.
      </p>
      <p>
        <strong>LingQ at $12.99/mo</strong> is the established premium benchmark for
        comprehensible-input readers. It has a large library of user-generated content across
        dozens of languages, a mature vocabulary tracking system, and a known brand in the
        CI-learning community. LangoBee at $7.99/mo is 38% cheaper. That gap claims LangoBee
        delivers comparable or greater value at a lower price, or it signals less maturity.
        Which framing the learner applies depends on what they already know.
      </p>
      <p>
        <strong>Duolingo Super at ~$7/mo</strong> is not a direct competitor in function, but it
        is a competitor for wallet share and mental model. A learner paying for Duolingo Super
        already has a mental model of "I pay for language apps." The question is whether they will
        pay for a second one, or whether LangoBee needs to be a replacement, not an addition.
        Duolingo's freemium tier is a powerful acquisition engine; LangoBee has no equivalent.
      </p>
      <p>
        <strong>Dreaming Spanish at ~$8/mo</strong> is the most direct ideological competitor:
        CI-first, video-heavy, Spanish-primary. Dreaming Spanish's free YouTube channel has
        hundreds of hours of content with no paywall. The premium Patreon gives access to more
        content and early material. LangoBee's advantage over Dreaming Spanish is not content
        volume (Dreaming Spanish wins there) but the tracking layer: word status across all
        content, per-text comprehension scoring, watch-next difficulty ranking. Whether learners
        will pay for that tracking layer on top of consuming content they could also find on
        YouTube is the core WTP question for this week's interviews.
      </p>

      <AnchorHeading as="h2" id="5-wtp-conversations">
        5. Running willingness-to-pay conversations
      </AnchorHeading>
      <p>
        A willingness-to-pay conversation is not a survey. You are not trying to establish
        statistical confidence. You are trying to hear the words a specific type of person uses
        when they think about price, understand what they currently pay for similar tools, and
        identify whether your price is in the range they consider reasonable.
      </p>
      <p>
        The Mom Test discipline from week 5 applies directly here. Ask about their life first:
        how much do they currently spend on language learning tools? What are those tools? When
        did they last pay for something and what made them decide it was worth it? These questions
        anchor the conversation in real behavior before you introduce any price context.
      </p>
      <p>
        Campbell's framework from his First Round interview specifies the research sequence:
        establish current spending behavior, then present the product, then ask the four Van
        Westendorp price threshold questions, then close with a reaction to the specific price.
        Running these steps out of order produces unreliable data. If you ask "how much would you
        pay?" before establishing what they currently pay, the answer is a hypothetical guess
        untethered from real spending behavior. (Campbell, 2016)
      </p>
      <p>
        Madhavan Ramanujam is direct on this point in his Lenny interview: "WTP conversations
        must happen before you set a price. Not after. If you already have a price in your head,
        you will hear confirmation in whatever they say. The conversations are useful only if the
        outcome can actually change your decision." For LangoBee's purposes, this means the
        interviews must be able to produce evidence that $7.99/mo is too high, too low, or in
        range, and you must be willing to act on each finding. (Ramanujam, 2022)
      </p>

      <AnchorHeading as="h2" id="6-van-westendorp">
        6. The Van Westendorp method
      </AnchorHeading>
      <p>
        The Van Westendorp price sensitivity meter is a four-question method for eliciting the
        price range a specific customer segment considers acceptable. It does not tell you the
        single optimal price. It gives you a range with two clear boundaries: below the "too
        cheap" threshold, quality concerns arise; above the "too expensive" threshold, price
        objections dominate.
      </p>
      <p>
        The four questions, asked in sequence with the product visible:
      </p>
      <ol>
        <li>"At what price would this feel so cheap that you'd question the quality?"</li>
        <li>"At what price would this start to feel like a good deal?"</li>
        <li>"At what price would this start to feel expensive, but you'd still consider it?"</li>
        <li>"At what price would this be so expensive you would not buy it regardless?"</li>
      </ol>
      <p>
        Plot the five responses for each question on a number line. The range between the median
        "too cheap" and median "too expensive" answers is the acceptable price range for this
        group. The range between the median "good deal" and "getting expensive" answers is the
        preferred range. (Ramanujam, 2022)
      </p>
      <p>
        For LangoBee at $7.99/mo, the interview results will tell you one of three things:
        (a) $7.99 is below the acceptable range, meaning the product signals low quality at this
        price and you should consider raising it; (b) $7.99 is within the acceptable range, which
        validates the current price as a reasonable hypothesis; (c) $7.99 is above the acceptable
        range for this group, which means price may be the barrier to trial and the freemium
        question becomes more urgent.
      </p>
      <p>
        Five conversations is not a statistically valid sample. It is enough to identify
        obvious misalignment. If four out of five people say $7.99 is "too expensive" in the
        context of what LangoBee currently offers, that is a signal worth acting on. If four out
        of five say it is a "good deal," the price hypothesis is holding and the bottleneck is
        elsewhere in the funnel.
      </p>

      <Callout title="What a weak WTP answer sounds like">
        <p>
          "I might pay something like that, I guess." This is not useful. It is a hypothetical,
          weakly stated. Push for specifics: "When you say 'something like that,' what's the
          number that comes to mind?" And always ask for past behavior to anchor it: "What's the
          last subscription you paid for that was in that range, and why did it feel worth it?"
        </p>
      </Callout>

      <AnchorHeading as="h2" id="7-trial-funnel">
        7. The trial funnel: CC-required mechanics
      </AnchorHeading>
      <p>
        A <strong>trial funnel</strong> is the sequence of steps a new user takes from first
        awareness of a product to completing a trial signup. For LangoBee the steps are:
        awareness (Discord, search, or referral), landing on langobee.com, viewing the product,
        clicking to start a trial, entering credit card details in Stripe Checkout, and landing
        on the post-checkout confirmation screen.
      </p>
      <p>
        The critical distinction in trial design is between CC-required and CC-optional. Poyar's
        2022 guide on reverse trials establishes the benchmark: CC-required trials convert 25-50%
        of trial starters to paying customers, versus 8% for CC-optional. The mechanism is
        straightforward: someone who has entered their card has already made a micro-commitment.
        Failing to cancel requires inaction rather than action. Loss aversion works in the
        product's favor. (Poyar, 2022)
      </p>
      <p>
        The cost of CC-required is a smaller top-of-funnel. Some users who would try a CC-optional
        product will not enter their card. Poyar's per-1,000-visitor math from 2026 data: freemium
        generates about 90 signups and 5 paying customers per 1,000 visitors; CC-required trials
        generate about 25 trial starts and 6-12 paying customers per 1,000 visitors. Per visitor,
        the CC-required path produces more paying customers even with a smaller top-of-funnel.
        (Poyar, 2026)
      </p>
      <p>
        For LangoBee with 174 real direct visitors per month, the arithmetic is clear:
        CC-required produces more signal per real human reached. The choice is confirmed by the
        current acquisition reality: top-of-funnel is the binding constraint, not conversion rate.
        Widening the top-of-funnel is week 9's problem. This week's problem is getting the funnel
        to fire at all.
      </p>

      <AnchorHeading as="h2" id="8-trial-length">
        8. Trial length: what the evidence supports
      </AnchorHeading>
      <p>
        LangoBee's 14-day trial is a defensible default. Whether it is the right length is an
        empirical question that cannot be answered until trial events are flowing.
      </p>
      <p>
        Poyar's 2026 benchmark data shows that longer trials convert better than shorter ones.
        Trials above 17 days convert at 45.7% vs lower rates for 7-day trials. The explanation:
        a learner using a language app needs more than one or two sessions to form a habit or
        judge whether the tool fits their workflow. Seven days may not be enough time for most
        users to even try the product seriously.
      </p>
      <p>
        The counterargument for shorter trials: urgency. A 7-day trial with a countdown creates
        pressure to engage. A 30-day trial feels open-ended and the user may forget about it.
        The data suggests the urgency effect is weaker than the engagement effect for most products,
        but this is category-dependent. For a language app where the value requires at least one
        full reading or video session to experience, 14 days is probably enough. Testing 21 days
        against 14 days is a reasonable experiment for week 8 once you have enough volume.
      </p>
      <p>
        The more important finding from RevenueCat's 2025 State of Subscription Apps report: 82%
        of trial starts occur on day 0, and early engagement in the first 3 days is the strongest
        predictor of trial conversion. This means the trial length question is secondary to the
        onboarding question: does the user experience the core value in the first 3 days? If not,
        no trial length fixes that. (RevenueCat Research Team, 2025, via week 7 sources as context;
        the primary signal for this week is trial structure, not paywall optimization.)
      </p>

      <AnchorHeading as="h2" id="9-firing-the-event">
        9. Firing the first trial_started event
      </AnchorHeading>
      <p>
        As of June 2026, LangoBee's Stripe checkout and webhook infrastructure are fully wired.
        The missing piece is a single <code>posthog.capture</code> call in the right place. This
        section explains where that place is and why.
      </p>
      <p>
        The correct location is the Stripe webhook handler for <code>checkout.session.completed</code>,
        not the client-side checkout success redirect. The reason is reliability: a browser
        redirect fires only if the user successfully lands on the success page, which requires
        their browser session to remain intact. A webhook fires when Stripe confirms the session
        server-side, regardless of what happens to the browser. For revenue tracking, the webhook
        is the canonical source of truth.
      </p>
      <p>
        The event must use PostHog's server-side <code>posthog-node</code> client, not the
        browser <code>posthog-js</code> client. Server-side capture identifies the user by their
        internal ID. Client-side capture can fail if the user closes the tab before the JavaScript
        executes.
      </p>
      <p>
        The minimum viable event payload:
      </p>
      <pre>{`{
  distinctId: userId,          // internal user ID, not Stripe customer ID
  event: 'trial_started',
  properties: {
    plan: priceId,             // Stripe price ID: distinguishes monthly from annual
    price_usd: 7.99,           // normalized monthly price
    trial_length_days: 14,
    source: utmSource ?? 'direct'
  }
}`}</pre>
      <p>
        Four properties is enough for the first firing. The goal is to prove the pipeline works.
        Enriching the event with more properties is week 7's work, once the basic pipeline is
        confirmed.
      </p>

      <AnchorHeading as="h2" id="10-zero-events">
        10. Why zero events is two problems, not one
      </AnchorHeading>
      <p>
        Zero <code>trial_started</code> events in PostHog can mean two different things, and
        both are probably true for LangoBee right now.
      </p>
      <p>
        <strong>The code problem:</strong> the <code>posthog.capture</code> call has never been
        added to the webhook handler. Even if a user had completed a checkout, the event would
        not fire. This is a gap in the instrumentation, not a gap in the product.
      </p>
      <p>
        <strong>The funnel problem:</strong> no real user has reached the Stripe Checkout page.
        LangoBee's funnel has a top-of-funnel problem (174 real visitors/30d from Discord
        recruiting) and likely an awareness-to-checkout conversion problem (the user who lands on
        langobee.com may not find a clear path to the trial signup). Both must be fixed, but they
        are separate problems with separate fixes.
      </p>
      <p>
        The section this week addresses the code problem first, because it is binary and
        fixable today. The funnel problem is addressed by getting real humans to the checkout page
        this week, which is the HW3 deliverable: one verified <code>trial_started</code> event
        in PostHog from a real checkout, not just a test-mode completion.
      </p>

      <AnchorHeading as="h2" id="exercises">
        Exercises
      </AnchorHeading>
      <p>Complete these before section. Each is answerable from this reading and your LangoBee context.</p>

      <Exercise n={1}>
        <p>
          State LangoBee's value metric in one sentence. Then write one sentence explaining why
          flat-rate subscription pricing is defensible given that value metric, and one sentence
          explaining the condition under which it would stop being defensible (when a Dreaming
          Spanish free user would have no reason to pay for LangoBee).
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          LangoBee's price is $7.99/mo. LingQ is $12.99/mo. Using the per-1,000-visitor math from
          Poyar (2026), calculate how many paying customers LangoBee would produce per month at
          current traffic (174 real visitors/30d) under the CC-required trial model (25-50%
          trial-to-paid conversion). Show your work. Then write one sentence on what that number
          implies about the priority: funnel volume vs funnel conversion rate.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write the four Van Westendorp questions adapted specifically to LangoBee. Each question
          should reference the product's actual value (the comprehensible-input library with
          word-tracking and difficulty ranking), not a generic subscription. Then write one sentence
          on what answer to question 4 ("too expensive") would tell you about whether $7.99/mo is
          outside the acceptable range for the comprehensible-input learner segment.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          The CC-required trial converts at 25-50% of trial starts to paying customers, versus
          5-6% for freemium. LangoBee has 174 real direct visitors per month. Campbell (2022)
          argues that freemium is an acquisition model, not a revenue model. Write two sentences:
          (a) why the CC-required trial is the right model at LangoBee's current traffic volume,
          and (b) the specific traffic milestone at which the freemium math would start to look
          competitive with CC-required (show the arithmetic).
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Describe the code change required to fire the first <code>trial_started</code> event in
          PostHog. Name: the file location (by function type, not exact path), the PostHog SDK
          variant to use (server-side or client-side) and why, and the three minimum properties
          the event must carry to be useful for future analysis.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">
        Going deeper (optional)
      </AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week:</strong> draft the WTP interview script, run five
          conversations, complete the price-positioning worksheet, and wire the trial_started event.
          The section is the hands-on implementation of everything in this reading.
        </li>
        <li>
          <strong>Lecture 2 (this week):</strong> The trial funnel. CC-required mechanics,
          trial length benchmarks, and a step-by-step walkthrough of the Stripe-to-PostHog
          pipeline.
        </li>
        <li>
          <strong>Pricing, Retention, and Growth Strategies That Work (Patrick Campbell, 2022):</strong>{" "}
          the full Business of Software keynote is 45 minutes and goes deeper on value-metric
          selection and the freemium-as-acquisition-model framework than this reading covers.{" "}
          <a href="https://businessofsoftware.org/talks/pricing-retention-and-growth-strategies/">
            businessofsoftware.org/talks/pricing-retention-and-growth-strategies/
          </a>
        </li>
        <li>
          <strong>Community:</strong> Indie Hackers (
          <a href="https://www.indiehackers.com/">indiehackers.com</a>) is the best forum for
          founder pricing discussions with real revenue numbers. Search for "pricing consumer
          subscription" to find case studies from solo founders in similar situations. The
          build-in-public culture means MRR numbers and pricing pivots are documented honestly.
        </li>
        <li>
          <strong>HW3 "First dollar"</strong> goes out this week. The deliverable is one verified{" "}
          <code>trial_started</code> event in PostHog from a real checkout. Due at the end of
          week 6.
        </li>
      </ul>

      <Takeaways>
        <li>
          Price is a hypothesis about value. LangoBee's $7.99/mo claim is that word-tracking and
          difficulty-matched recommendations are worth that amount on top of free comprehensible-input
          content. The WTP interviews this week test that claim directly.
        </li>
        <li>
          Premium-only tests whether strangers will pay before proof. Freemium tests whether
          volume compensates for low conversion. At 174 real visitors per month, premium-only
          produces more paying customers per visitor. Freemium becomes competitive only with a
          much larger top-of-funnel.
        </li>
        <li>
          Van Westendorp gives you a price range from five real conversations. The range tells you
          whether $7.99/mo is too low (quality signal), acceptable, or too high (price barrier).
          Five conversations is enough to identify obvious misalignment.
        </li>
        <li>
          Zero trial_started events is two separate problems: the capture call has never been
          wired (code), and no real user has reached checkout (funnel). Fix the code problem first
          because it is binary; then work on getting a real human to checkout.
        </li>
        <li>
          The trial_started event belongs in the Stripe webhook handler, not the client-side
          success redirect. Webhooks are reliable; browser redirects are not. Use posthog-node,
          not posthog-js, for the server-side capture call.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Campbell, P. (2016). The price is right: Essential tips for nailing your pricing
          strategy. First Round Review.{" "}
          <a href="https://review.firstround.com/the-price-is-right-essential-tips-for-nailing-your-pricing-strategy/">
            review.firstround.com/the-price-is-right-essential-tips-for-nailing-your-pricing-strategy/
          </a>
          . Covers the four-question WTP survey, how to build buyer personas, and the value-metric
          framework for a consumer subscription product.
        </p>
        <p>
          Campbell, P. (2022). Pricing, retention, and growth strategies that work. Business of
          Software USA 2022.{" "}
          <a href="https://businessofsoftware.org/talks/pricing-retention-and-growth-strategies/">
            businessofsoftware.org/talks/pricing-retention-and-growth-strategies/
          </a>
          . The source for "freemium is an acquisition model, not a revenue model" and for the
          ProfitWell data on value-metric pricing growth rates.
        </p>
        <p>
          Hale, K. (2019). Startup pricing 101. Y Combinator Startup School.{" "}
          <a href="https://www.youtube.com/watch?v=jwXlo9gy_k4">
            youtube.com/watch?v=jwXlo9gy_k4
          </a>
          . The foundational YC lecture on value-based vs cost-plus pricing and the 10-5-20 rule
          for iterative price-raising.
        </p>
        <p>
          Poyar, K. (2022). Your guide to reverse trials. Growth Unhinged.{" "}
          <a href="https://kylepoyar.substack.com/p/your-guide-to-reverse-trials">
            kylepoyar.substack.com/p/your-guide-to-reverse-trials
          </a>
          . The source for per-1,000-visitor conversion benchmarks across freemium, CC-optional,
          and CC-required trial models.
        </p>
        <p>
          Poyar, K. (2026). A new look at free-to-paid conversion: Insights from a survey of 200
          software products. Growth Unhinged.{" "}
          <a href="https://www.growthunhinged.com/p/free-to-paid-conversion-report">
            growthunhinged.com/p/free-to-paid-conversion-report
          </a>
          . The 2026 benchmark report: CC-required trials convert 25-35% (good) to 50-60%
          (great); freemium converts 3-5% (good) to 8-12% (great).
        </p>
        <p>
          Ramanujam, M. (2022). The art and science of pricing. Lenny's Newsletter interview.{" "}
          <a href="https://www.lennysnewsletter.com/p/the-art-and-science-of-pricing-madhavan">
            lennysnewsletter.com/p/the-art-and-science-of-pricing-madhavan
          </a>
          . The source for the Van Westendorp method, including when and how to run it, and
          Ramanujam's argument that WTP conversations must precede price-setting.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk06ReadingSearchBody =
  "price hypothesis value metric premium-only freemium willingness-to-pay Van Westendorp WTP interview Mom Test pricing competitive frame LingQ Duolingo Dreaming Spanish CC-required trial trial funnel trial_started PostHog Stripe webhook 14-day trial conversion benchmarks week 6 monetization";
