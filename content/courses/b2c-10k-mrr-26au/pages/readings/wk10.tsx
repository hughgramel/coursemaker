import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk10Reading() {
  return (
    <ReadingPage
      id="wk10"
      title="Week 10 — Synthesis: diagnosing stalled MRR and writing the path to $10k"
      kicker="B2C to $10k MRR · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This is the synthesis reading. By the end of it you will be able to
          do three things: diagnose a stalled MRR curve using the{" "}
          <strong>leak / ceiling / price / channel quadrant</strong>, decide
          whether to pivot the product, the channel, or the price based on
          specific trigger rules rather than general frustration, and write a
          30-day intervention plan you can defend out loud in five minutes. You
          walk into section Friday with this reading behind you and your
          dashboard in front of you.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Every concept introduced in
          weeks 1-9: the{" "}
          <strong>AAARRR funnel</strong>, <strong>MRR</strong>,{" "}
          <strong>activation rate</strong>, <strong>D7 and D30 retention</strong>,{" "}
          <strong>retention curve shape</strong>, <strong>LTV</strong>,{" "}
          <strong>CAC</strong>, <strong>wedge channel</strong>,{" "}
          <strong>A/B test</strong>, <strong>lifecycle messages</strong>,{" "}
          <strong>growth loops</strong>, and <strong>feature flags</strong>.
          This reading synthesizes all of them. If any concept is unfamiliar,
          return to the reading for the week that introduced it before
          continuing.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="your-week">1. Your week at a glance</AnchorHeading>
      <p>
        Week 10 has one goal: defend the single highest-leverage move for your
        next 30 days. Everything else this week is preparation for that
        defense.
      </p>
      <p><strong>Learning goals for this week:</strong></p>
      <ul>
        <li>Diagnose a stalled MRR curve using the leak / ceiling / price / channel quadrant.</li>
        <li>Decide whether to pivot product, channel, or price and articulate the trigger.</li>
        <li>Choose one intervention for the next 30 days and defend it.</li>
        <li>Read your dashboard like a stranger would.</li>
      </ul>
      <p><strong>Milestones:</strong></p>
      <ul>
        <li>Funnel diagram with real numbers for your product.</li>
        <li>Diagnosed quadrant: leak / ceiling / price / channel, written down with evidence.</li>
        <li>30-day intervention plan: 1 metric to move, by how much, by when.</li>
        <li>Measurement design and rollback criterion.</li>
        <li>5-minute presented defense to class on Friday.</li>
      </ul>
      <p><strong>Bloom outcomes:</strong></p>
      <ul>
        <li>Analyze: diagnose your funnel using the leak / ceiling / price / channel quadrant.</li>
        <li>Evaluate: choose the single highest-leverage 30-day intervention with a stated rollback trigger.</li>
        <li>Create: write and defend the path-to-$10k-MRR plan in a 5-minute presented capstone.</li>
      </ul>
      <p><strong>Metrics to report Friday:</strong> final MRR snapshot, course-long activation delta, course-long retention delta, total channel output (target: 50+ weekday outputs).</p>

      <AnchorHeading as="h2" id="day-by-day">2. Your week, day by day</AnchorHeading>
      <div style={{ overflowX: "auto" }}>
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
              <td>Channel output + &ldquo;capstone defense this Friday&rdquo; post</td>
              <td>Pull all 10 weeks of funnel data; print or screenshot</td>
              <td>Build the funnel diagram with real numbers</td>
              <td>Where is the leakiest stage?</td>
            </tr>
            <tr>
              <td><strong>Tue</strong></td>
              <td>Channel output + post your diagnosed quadrant</td>
              <td>Talk to 2 peers; ask them to diagnose your funnel cold</td>
              <td>Write the 30-day plan: 1 metric, target, deadline</td>
              <td>Did peers agree with your quadrant?</td>
            </tr>
            <tr>
              <td><strong>Wed</strong></td>
              <td>Channel output + capstone draft public; ask for tough questions</td>
              <td>Interview 1 power user about your intervention idea</td>
              <td>Write the measurement design + rollback criterion</td>
              <td>What number would force you to revert?</td>
            </tr>
            <tr>
              <td><strong>Thu</strong></td>
              <td>Channel output + dry-run the 5-min defense, public</td>
              <td>Tune the deck based on feedback</td>
              <td>Slide deck final pass</td>
              <td>Can you say it in 5 min without notes?</td>
            </tr>
            <tr>
              <td><strong>Fri</strong></td>
              <td>Final public post: &ldquo;here&rsquo;s my path to $10k MRR&rdquo;</td>
              <td>Last user conversation of the course</td>
              <td>Capstone defense in the live clinic. Then nothing.</td>
              <td>What changes Monday morning when the course ends?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h2" id="plan-card">3. This week&rsquo;s plan card</AnchorHeading>
      <Callout title="This week's plan card">
        <p>
          <strong>Note:</strong> Friday&rsquo;s plan card IS the capstone defense. Fill
          this in before Thursday&rsquo;s dry run.
        </p>
        <p>
          Current MRR: _____________ &nbsp;|&nbsp; 10-week MRR delta: _____________
        </p>
        <p>
          Diagnosed quadrant (circle one): &nbsp;<strong>Leak</strong> &nbsp;/&nbsp;{" "}
          <strong>Ceiling</strong> &nbsp;/&nbsp; <strong>Price</strong> &nbsp;/&nbsp;{" "}
          <strong>Channel</strong>
        </p>
        <p>
          Evidence (two numbers): _____________ and _____________
        </p>
        <p>
          30-day intervention: _____________________________________________
        </p>
        <p>
          Metric to move: _____________ Target: _____________ Deadline: _____________
        </p>
        <p>
          Rollback criterion (a number, not a feeling): _____________________________________________
        </p>
        <p>
          The one thing I need help with: _____________________________________________
        </p>
      </Callout>

      <AnchorHeading as="h2" id="daily-rules">4. Daily rules</AnchorHeading>
      <Callout title="Course-wide anti-trap clauses (final week)">
        <ul>
          <li>The build block does not open until the morning growth move and customer hour are done. No exceptions.</li>
          <li>The capstone defense is not optional. A no-show is a zero on all three Bloom outcomes.</li>
          <li>Friday review is non-negotiable. It is also the capstone defense. One ritual serves both.</li>
          <li>Build-block scope this week is one sentence: the funnel diagram, the 30-day plan, the measurement design, the deck. Each day has one deliverable. Do not merge them.</li>
          <li>No new features this week. None. The course is over. The analysis week is the worst possible time to ship.</li>
        </ul>
      </Callout>

      <AnchorHeading as="h2" id="quadrant">5. The four-quadrant diagnostic</AnchorHeading>
      <p>
        Gustaf Alstromer, based on working with 600+ YC startups, argues that
        before any growth work makes sense, the product must retain users. That
        principle, applied to a stalled MRR curve, produces four possible
        diagnoses: the funnel is leaking, the channel has hit a ceiling, the
        price is wrong, or the channel itself is the wrong one.
      </p>
      <p>
        Stripe&rsquo;s MRR guide decomposes recurring revenue into three components:
        new MRR (from new subscribers), expansion MRR (from upgrades and seat
        additions), and churn MRR (from cancellations and downgrades). A stall
        can come from any of the three running out, or from all three staying
        flat simultaneously. The quadrant maps onto these components directly.
      </p>

      <AnchorHeading as="h3" id="quadrant-leak">Leak</AnchorHeading>
      <p>
        A <strong>leak</strong> is a retention problem presenting as a growth
        problem. New MRR appears in small bursts after campaigns, then the
        curve flattens because churned MRR cancels incoming MRR. The
        activation rate and D7 retention are the diagnostic numbers.
      </p>
      <p>
        Symptoms: activation rate below 25%, D7 retention below 15%, D30
        retention below 10%. The MRR curve grows in steps after marketing
        pushes, then plateaus. When you compare new signups to paying
        conversions, the gap is large and stable rather than shrinking over
        time.
      </p>
      <p>
        Fix lane: stop acquisition work until activation is above 35% and D7
        is above 20%. The leak costs more in churned revenue than you gain
        from incremental acquisition. The activation event, the onboarding
        flow, and time-to-value are the variables to run A/B tests on.
      </p>

      <AnchorHeading as="h3" id="quadrant-ceiling">Ceiling</AnchorHeading>
      <p>
        A <strong>ceiling</strong> is a channel problem presenting as a product
        problem. Retention is decent. The product works for the users who reach
        it. But the wedge channel is saturated: the audience that the channel
        reaches is too small or too exhausted to produce new MRR.
      </p>
      <p>
        Symptoms: D30 retention above 20%, activation above 30%, MRR flat for
        four or more weeks despite ongoing channel output, CAC rising as the
        audience narrows. Lenny Rachitsky&rsquo;s Racecar framework names this as a
        missing growth engine: one engine (the wedge) ran well enough to reach
        $3k-$10k MRR, but there is no second engine to carry the next phase.
      </p>
      <p>
        Fix lane: find the second engine. This is not about posting more on the
        same channel. It is about identifying whether the product has a referral
        loop, whether there is an SEO cluster worth seeding, or whether a
        different platform reaches a different but adjacent audience.
      </p>

      <AnchorHeading as="h3" id="quadrant-price">Price</AnchorHeading>
      <p>
        A <strong>price</strong> problem means the product delivers value but
        the price is wrong relative to willingness to pay. Users stay as free
        users. They do not cancel; they also do not upgrade. Trial-to-paid
        conversion is the diagnostic number.
      </p>
      <p>
        Symptoms: D30 retention above 25%, trial-to-paid conversion below 4%,
        Sean Ellis PMF survey below 40% &ldquo;very disappointed&rdquo; (Ellis, 2019),
        users describe the product as &ldquo;nice to have&rdquo; rather than
        &ldquo;can&rsquo;t imagine not having it.&rdquo; Expansion MRR is near
        zero.
      </p>
      <p>
        Fix lane: run a pricing test. Raise the price, add a higher tier, or
        close the activation gap between free and paid value so users
        experience the paid-level value before the paywall. Rahul Vohra&rsquo;s
        Superhuman PMF engine gives a structured method for this: survey
        active users, segment by the &ldquo;very disappointed&rdquo; answer,
        build toward what those users love while removing the barriers that
        keep near-converts back.
      </p>

      <AnchorHeading as="h3" id="quadrant-channel">Channel</AnchorHeading>
      <p>
        A <strong>channel</strong> problem at $10k MRR is not the same as the
        channel problem a pre-revenue product has. At this stage, the product
        retains. Activation is decent. Paid conversion is reasonable. But the
        CAC has grown past LTV divided by three, or the total addressable
        audience on the current channel is too small to reach $30k MRR.
      </p>
      <p>
        Elena Verna: &ldquo;Growth tactics without a product loop are decorations,
        not engines.&rdquo; A channel problem at $10k MRR is often a product-loop
        problem: the product does not generate referrals or organic content
        that feeds new users back into the top of the funnel.
      </p>
      <p>
        Fix lane: find channel-product fit for a second platform. Map your
        current K-factor. If it is near zero, the product&rsquo;s share events and
        referral mechanics need work before the next channel experiment.
      </p>

      <AnchorHeading as="h2" id="self-audit">6. Reading your own dashboard like a stranger would</AnchorHeading>
      <p>
        The hardest part of diagnosis is that you know your own story. You know
        why last month was slow (you were heads-down on a feature), why that
        cohort churned faster (a pricing change), why the activation rate
        dropped in week 6 (you changed the onboarding flow). A stranger who
        looked at your dashboard for three minutes would not know any of that.
        They would read the numbers.
      </p>
      <p>
        Reading your own dashboard like a stranger requires a deliberate act:
        cover the axes and ask what the shape of the curve says before you
        know the dates. A flat MRR curve with a spike in week 7 tells a
        stranger: something worked once but did not compound. A steady incline
        tells a stranger: the channel is working and the product retains.
        A step-function with long plateaus between steps tells a stranger:
        the founder is batch-working instead of compounding.
      </p>
      <p>
        The self-audit checklist forces the stranger&rsquo;s view:
      </p>
      <ol>
        <li>MRR for all 10 course weeks: write them in a row. What is the shape?</li>
        <li>Activation rate for the past 30 days: one number. Is it above 25%?</li>
        <li>D7 and D30 retention for the most recent complete cohort: two numbers. What curve shape do they imply?</li>
        <li>Funnel conversion rates at each AAARRR stage: where does the funnel lose the most people?</li>
        <li>The primary quadrant: given the above, which one word (leak, ceiling, price, channel) has the most evidence?</li>
      </ol>
      <p>
        If any of the five are unavailable because you have not instrumented
        them, that is the diagnosis: you have been flying without instruments.
        The fix lane for missing data is the same as the fix lane for a leak:
        instrument the gap before running any other experiment.
      </p>

      <AnchorHeading as="h2" id="pivot-frame">7. When to pivot the product vs the channel vs the price</AnchorHeading>
      <p>
        Casey Winters, who has worked on growth at Pinterest, Airbnb, Canva,
        Reddit, and Faire, puts it directly: &ldquo;The problem with frameworks is
        they tell you what to do, not why it works. Once conditions change, the
        framework breaks.&rdquo; The pivot trigger rules below are not a framework
        to follow blindly. They are a set of conditions that, when met, make
        a specific kind of change necessary rather than optional.
      </p>

      <AnchorHeading as="h3" id="pivot-product">Pivot the product when</AnchorHeading>
      <ul>
        <li>D30 retention is below 10% after three separate iterations of the activation flow.</li>
        <li>The Ellis PMF survey (Sean Ellis, 2019) is below 20% &ldquo;very disappointed&rdquo; across two distinct user segments.</li>
        <li>No user, interviewed directly, reports the product as irreplaceable.</li>
        <li>The retention curve is decaying rather than flattening, and the decay has persisted for at least four cohort weeks.</li>
      </ul>
      <p>
        Do not pivot the product because a competitor launched something new.
        Do not pivot the product because you are bored with the current
        direction. Pivot the product when the evidence of a leak is clear
        and the activation-side fixes have been exhausted.
      </p>

      <AnchorHeading as="h3" id="pivot-channel">Pivot the channel when</AnchorHeading>
      <ul>
        <li>D30 retention is above 20% in a small segment but near zero across the broad audience coming from the current channel.</li>
        <li>Ten or more weeks of consistent output on the wedge channel have produced no compounding (each week&rsquo;s output produces about the same reach as the previous week&rsquo;s).</li>
        <li>CAC on the current channel is above LTV divided by two, and rising.</li>
        <li>The audience reachable on the current channel is too small to reach the target MRR.</li>
      </ul>
      <p>
        A channel pivot does not mean abandoning the wedge channel. It means
        starting the search for a second channel while the wedge continues to
        run. The wedge channel, even if saturated, produces the cash flow that
        funds the search for the next one.
      </p>

      <AnchorHeading as="h3" id="pivot-price">Pivot the price when</AnchorHeading>
      <ul>
        <li>Trial-to-paid conversion is below 4% and D30 retention is above 25%.</li>
        <li>Net revenue retention is below 80% (churned MRR is not being offset by expansion).</li>
        <li>Users describe the product in interviews as &ldquo;good value&rdquo; but still cancel when the trial ends.</li>
        <li>Adding a higher pricing tier has not been tested and the current tier is the only option.</li>
      </ul>
      <p>
        Most early B2C founders are underpriced. The instinct to keep the price
        low to reduce friction for new users is understandable but counterproductive
        once the product retains. A higher price signals higher value, raises
        the LTV that justifies channel spend, and, counterintuitively, reduces
        churn by selecting for users who are committed enough to pay more.
      </p>

      <AnchorHeading as="h2" id="keep-going">8. Honest assessment: should you keep going?</AnchorHeading>
      <p>
        This section is not motivational. It is a real conversation.
      </p>
      <p>
        Pieter Levels, in MAKE, writes: &ldquo;Shipping is the easy part. Deciding
        to stop is the hardest skill.&rdquo; He wrote a book about building
        bootstrapped products and shipping constantly, and he includes a
        chapter on stopping. That is worth noting.
      </p>
      <p>
        The diagnostic quadrant tells you what the obstacle is. It does not
        tell you whether the obstacle is worth clearing. Three questions help:
      </p>
      <ol>
        <li>
          <strong>Is the problem real?</strong> Users who report genuine pain
          without being prompted are different from users who say &ldquo;yes that
          sounds annoying&rdquo; when asked. Real pain produces unsolicited feedback,
          high D7 retention in the best cohorts, and users who find workarounds
          rather than churning.
        </li>
        <li>
          <strong>Is your solution the right one?</strong> D30 retention above
          20% in any cohort, without promotional incentives, is evidence the
          solution works for some segment of users. Below 10% across all
          cohorts after multiple activation-flow iterations is evidence it does
          not.
        </li>
        <li>
          <strong>Is the market reachable?</strong> A product that retains the
          users it gets but cannot find more of them is a ceiling problem.
          That is solvable. A product where the ICP (ideal customer profile)
          is too narrow to reach $10k MRR on any channel at a viable CAC may
          not be.
        </li>
      </ol>
      <p>
        A yes to all three means the stall is a solvable problem. A no to one
        is a signal that the current path has a structural constraint that the
        diagnostic quadrant cannot resolve by itself.
      </p>
      <p>
        The honest version of &ldquo;keep going&rdquo; is not &ldquo;this will definitely
        work.&rdquo; It is: &ldquo;the evidence points to a specific fixable problem,
        I know what to try next, and I am willing to run the 30-day test
        with a real rollback criterion.&rdquo; That is enough.
      </p>

      <AnchorHeading as="h2" id="shape-of-next-stretch">9. The shape of the next stretch: $10k to $30k to $100k MRR</AnchorHeading>
      <p>
        Each milestone changes what the business requires. The constraints at
        $10k MRR are not the constraints at $30k MRR.
      </p>
      <p>
        At $10k MRR, the product is real and the channel exists. The constraint
        is usually one of two things: acquisition volume (the channel works
        but is too small) or product maturity (the product retains a small
        segment but has not broadened). The diagnostic quadrant tells you which.
      </p>
      <p>
        At $30k MRR, the constraint shifts. The first hire is plausible. The
        product needs systems rather than heroics: a deployment pipeline that
        doesn&rsquo;t require the founder to push to production at midnight, a
        support queue that has answers for the 20 most common questions, a
        channel strategy that runs on a weekly rhythm rather than a personal
        energy surge. Anu Hariharan&rsquo;s framework for consumer subscription
        businesses is useful here: MRR growth rate, user retention, paid CAC,
        and LTV are the four metrics investors look at because they are the
        four metrics that determine whether the business can survive the
        founder taking a week off.
      </p>
      <p>
        At $100k MRR, growth becomes a function rather than a personal output.
        The SEO cluster that was seeded at $10k MRR is now producing organic
        traffic. The lifecycle sequence that was built at $30k is now the
        reason D30 retention is 5 percentage points above the cohort average
        from two years ago. Brian Balfour&rsquo;s observation from &ldquo;The Universal
        Growth Loop&rdquo; applies: Acquire, Engage, Retain, Monetize, Reinvest,
        Acquire. A product that short-circuits any node in the loop stalls.
        At $100k MRR, all five nodes are running simultaneously.
      </p>

      <AnchorHeading as="h2" id="hire-vs-ai">What to hire vs what AI absorbs</AnchorHeading>
      <p>
        In 2026, the question is not whether to hire but what requires a
        human. AI handles first-pass copywriting for lifecycle messages,
        image and video asset generation for creative testing, customer support
        triage for FAQ-level questions, and the instrumentation code for
        adding new analytics events. The cost of these tasks has fallen by
        an order of magnitude in the past three years.
      </p>
      <p>
        What still requires a human: judgment on what to build next, relationships
        with distribution partners and editorial contacts, the editorial voice
        that makes your brand recognizable rather than interchangeable, and the
        decision about when to stop running an experiment that is clearly not
        working. AI can draft the rollback document; only you can decide when
        the number has been bad long enough to trigger it.
      </p>
      <p>
        The practical hiring signal at bootstrapped $10k MRR: hire when a
        task is recurring (takes the same two or more hours every week),
        below your highest-leverage work, and teachable in a week of
        onboarding. At $10k MRR, the first hire is usually support or
        operations, not growth. Growth belongs to the founder until the
        product retains well enough that channel work compounds on its own.
      </p>

      <AnchorHeading as="h2" id="bootstrap-vs-funded">When to take money vs stay bootstrapped</AnchorHeading>
      <p>
        This is a judgment call. The inputs are market size, CAC structure,
        time horizon, and your stress tolerance under different kinds of
        pressure.
      </p>
      <p>
        Raise when the product retains (D30 above 20% at minimum), the channel
        is proven (CAC below LTV divided by three), and the constraint is
        acquisition volume rather than product or channel fit. Raising before
        those conditions means paying a high price (dilution, board expectations,
        reporting requirements) to learn lessons that the next 90 days of
        bootstrapped operation would teach at no cost.
      </p>
      <p>
        Stay bootstrapped when the TAM is below $50M (a VC investment at those
        terms rarely makes sense for either party), when the product is a
        lifestyle business by design, or when you have runway to keep running
        experiments without external capital. Pieter Levels built Nomad List
        to $2M+ ARR as a solo bootstrapped founder. That would have been an
        unusual VC investment and a clear example of a product that should
        never have been funded.
      </p>
      <p>
        The most common mistake: raising because the product is not growing
        and the founder believes capital will fix it. Capital does not fix a
        leak. It fills the bucket faster while it drains.
      </p>

      <AnchorHeading as="h2" id="graduate-to-compound">10. The graduate-to-compound mindset</AnchorHeading>
      <p>
        Nine weeks of this course were about linear growth tactics: one output
        produces one unit of reach. The morning growth move produces one piece
        of content. The A/B test produces one data point. The lifecycle message
        goes to one cohort. These are the right tactics when the product is
        not yet retaining and the funnel is not yet instrumented.
      </p>
      <p>
        <strong>Graduate to compound</strong> means shifting, after the
        product retains, toward tactics whose outputs generate their own
        outputs. A lifecycle message sequence, once built, runs on every new
        activation without additional marginal effort. A programmatic SEO
        cluster, once seeded, accumulates search ranking over months without
        daily posting. A brand, once established as a recognizable voice on
        a platform, makes future channel output more effective per unit because
        the audience already knows what to expect.
      </p>
      <p>
        The first compound move available to most B2C founders at $10k MRR:
        a five-email lifecycle sequence triggered by the activation event, with
        each email having one job: moving the user to the next natural usage
        moment in the product. If this sequence lifts D30 retention by five
        percentage points, LTV increases, CAC ceiling rises, and every
        acquisition channel becomes more efficient. This is the kind of
        investment that pays dividends at $30k MRR and again at $100k MRR.
      </p>
      <p>
        Lenny Rachitsky&rsquo;s Racecar framework distinguishes between growth
        engines (the channels that produce new users at scale) and lubricants
        (the product and messaging improvements that make those channels more
        efficient). Most founders at $10k MRR have one engine and almost no
        lubricants. Building one lifecycle sequence is building a lubricant.
        It is less exciting than a new channel experiment. It compounds.
      </p>

      <AnchorHeading as="h2" id="case-studies">11. Case studies: stalled MRR diagnosis from indie hackers</AnchorHeading>
      <p>
        Two patterns appear repeatedly in indie hacker post-mortems and
        retrospectives for B2C products that stall in the $3k-$15k MRR range.
        These are composites drawn from the pattern, not single-company case
        studies.
      </p>

      <AnchorHeading as="h3" id="case-study-leak">Case study: the leak that looked like a ceiling</AnchorHeading>
      <p>
        A solo founder built a productivity app targeting remote workers. At
        week 10 of her build-in-public journey, MRR was $4,200 and had been
        flat for six weeks. She had been posting consistently on X (Twitter)
        and had a following. Her diagnosis: the channel was saturated. Her
        plan: find a second channel.
      </p>
      <p>
        A cold audit of her numbers told a different story. Signups were 200
        per month. Paying conversions were 18 per month. That is a 9% signup-to-paid
        rate, which is reasonable for a freemium product. But D30 retention
        for the paying cohort was 41%, which is good. D30 retention for the
        free-to-never-converted cohort was 4%.
      </p>
      <p>
        The issue: the activation event she had defined in week 1 was &ldquo;create
        a workspace.&rdquo; The activation event that actually predicted payment was
        &ldquo;invite a teammate.&rdquo; Users who created a workspace and never invited
        anyone had a 4% D30 retention rate. Users who invited one or more
        teammates had a 52% D30 retention rate.
      </p>
      <p>
        She did not have a ceiling. She had a leak in the activation flow:
        the onboarding did not push users toward the invite action early
        enough. When she moved the invite prompt to step 2 of onboarding
        (from step 6), signup-to-invite went from 8% to 31% and MRR grew
        22% in the following month without any change to channel activity.
      </p>

      <AnchorHeading as="h3" id="case-study-price">Case study: the price problem that looked like a retention problem</AnchorHeading>
      <p>
        A second founder built a personal finance tracking tool. At $6,800 MRR,
        growth had stalled. His D30 retention for the free tier was 38%, which
        is excellent for consumer SaaS. His trial-to-paid conversion was 2.1%.
        His diagnosis: the product was not sticky enough. His plan: build more
        features to increase engagement before asking users to pay.
      </p>
      <p>
        A cold audit of exit surveys revealed a different signal. The most
        common reason users gave for not upgrading was not &ldquo;I don&rsquo;t use it
        enough.&rdquo; It was &ldquo;I&rsquo;m not sure it&rsquo;s worth $19 a month.&rdquo; When the
        founder ran the Ellis PMF survey, 44% of active free-tier users
        answered &ldquo;very disappointed&rdquo; to the &ldquo;how would you feel if you could
        no longer use this product&rdquo; question. The PMF signal was strong.
        The willingness-to-pay signal was weak at $19.
      </p>
      <p>
        He tested a $9/month tier and a $12/month tier against the existing
        $19/month via a feature flag rollout. Trial-to-paid conversion at
        $9 was 7.4%. At $12 it was 5.1%. At $19 it remained 2.1%. He
        launched the $9 tier. MRR grew 38% in the following six weeks without
        acquiring a single new user, purely from converting the existing
        D30-retained free base.
      </p>
      <p>
        The lesson: high D30 retention in the free tier with low paid
        conversion is a price problem first and a features problem second.
        More features before a price test would have taken three months and
        probably not moved the conversion rate.
      </p>

      <AnchorHeading as="h2" id="capstone-defense">12. Friday: your 5-minute capstone defense</AnchorHeading>
      <p>
        The defense is not a pitch. It is a diagnosis. The audience is not
        being asked to invest. They are being asked to evaluate whether your
        diagnosis of the primary quadrant is supported by the numbers you
        present, and whether the intervention you propose is the right one
        given that diagnosis.
      </p>
      <p>
        The five-minute structure:
      </p>
      <ol>
        <li>
          <strong>60 seconds: funnel.</strong> Current MRR. Activation rate.
          D7 and D30 retention. Funnel conversion rates at each stage. Four
          or five numbers. Say them out loud without softening them.
        </li>
        <li>
          <strong>60 seconds: diagnosis.</strong> Name the quadrant. Give the
          two numbers that point there. Do not give four quadrants. Give one.
          If two quadrants apply, name the primary one and say which you are
          deprioritizing and why.
        </li>
        <li>
          <strong>90 seconds: intervention.</strong> What you will do. The
          specific metric it moves. The target. The deadline. Why this
          intervention addresses the primary quadrant rather than a different
          one. This is the longest segment because the intervention has to be
          defensible, not just plausible.
        </li>
        <li>
          <strong>60 seconds: measurement and rollback.</strong> How you
          will measure the intervention&rsquo;s effect: which metric, measured
          how, at what frequency. The rollback criterion: the specific number
          that would tell you to revert. Not a feeling. A number.
        </li>
        <li>
          <strong>30 seconds: ask for help.</strong> Name the single thing you
          most need from someone else to make this intervention work. This
          might be a distribution contact, a technical pattern someone has
          solved before, or a second opinion on the rollback criterion. End
          with a specific ask.
        </li>
      </ol>
      <p>
        Practice this out loud Thursday morning. The five-minute constraint
        is not a test of brevity; it is a test of clarity. If you cannot say
        the diagnosis and the intervention in five minutes without notes, the
        diagnosis is not clear enough.
      </p>

      <AnchorHeading as="h2" id="exercises">13. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          Apply the self-audit checklist to your product. Write down all five
          numbers (MRR curve shape, activation rate, D7 retention, D30
          retention, primary funnel leak stage). Given these five numbers,
          which of the four quadrants (leak, ceiling, price, channel) has
          the most supporting evidence? Write one sentence naming the quadrant
          and two numbers that support it.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Run the Ellis PMF survey (Sean Ellis, 2019) question on your five
          most active users this week: &ldquo;How would you feel if you could no
          longer use this product?&rdquo; with the options &ldquo;very disappointed,&rdquo;
          &ldquo;somewhat disappointed,&rdquo; and &ldquo;not disappointed.&rdquo; What
          percentage answered &ldquo;very disappointed&rdquo;? Based on the Superhuman
          PMF engine (Vohra, 2018), what does that percentage tell you about
          whether a price problem or a product problem is the primary
          constraint?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write the rollback criterion for your proposed 30-day intervention.
          The criterion must name a specific number (not a feeling), a
          specific date (not &ldquo;after a month&rdquo;), and the specific action you
          will take if the number is not reached by that date. Then ask
          yourself: if that number is not reached, what does that tell you
          about which quadrant diagnosis was correct?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Map your current growth motion onto the Racecar framework
          (Rachitsky, 2022). Identify which of the five components you
          have (kickstart, engine, lubricant, turbo boost, accelerant) and
          which are absent. For the most important absent component, write
          one sentence describing what a 30-day experiment to build it would
          look like.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Look at the two case studies in section 11. For each case study,
          identify which quadrant the founder initially diagnosed, which
          quadrant the evidence actually supported, and what number revealed
          the misdiagnosis. Now apply that same check to your own diagnosis:
          is there a number in your dashboard you have been contextualizing
          away that points toward a different quadrant than the one you named
          in exercise 1?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">14. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet (Friday).</strong> The stall diagnosis
          clinic is where this reading lands. Arrive with the five numbers
          from exercise 1 and the rollback criterion from exercise 3.
        </li>
        <li>
          <strong>Lecture 1 (Monday/Tuesday).</strong> Live diagnosis of three
          student products. The diagnostic quadrant from this reading is the
          shared language for that session.
        </li>
        <li>
          <strong>Lecture 2 (Wednesday/Thursday).</strong> The graduate-to-compound
          mindset and the shape of the next stretch. Builds directly on section 10
          of this reading.
        </li>
        <li>
          <strong>After the course.</strong> The path-to-$10k-MRR plan card
          from section 3 of this reading is your week 1 post-course agenda.
          The course ends Friday. The rhythm doesn&rsquo;t.
        </li>
      </ul>

      <Takeaways>
        <li>MRR stalls have four causes: leak (activation and retention problem), ceiling (channel saturation), price (willingness-to-pay mismatch), and channel (CAC ceiling or wrong distribution). Name the primary quadrant before choosing the fix.</li>
        <li>The self-audit checklist produces five numbers. A diagnosis without all five is guessing. If a number is unavailable because you haven&rsquo;t instrumented it, that is the diagnosis.</li>
        <li>Pivot triggers for product, channel, and price each require specific evidence: a number below a threshold, sustained over multiple cohort weeks, after the obvious alternative fixes have been tried.</li>
        <li>The graduate-to-compound mindset means starting one 90-day compounding move (a lifecycle sequence, an SEO cluster, a brand format) before the course ends. Compound moves take 90 days to show signal. Start one this week.</li>
        <li>The course ends Friday. The rhythm doesn&rsquo;t. Monday morning is the first day of the intervention you defended.</li>
      </Takeaways>

      <Bibliography>
        <p>
          Alstromer, Gustaf. &ldquo;Growth for Startups.&rdquo; Y Combinator Library, 2019.
          ycombinator.com/library/6k-growth-for-startups. Text version of the
          YC Startup School lecture on measuring PMF via retention, premature
          growth as a cause of startup death, and growth channel taxonomy.
        </p>
        <p>
          Alstromer, Gustaf. &ldquo;Gustaf Alstr&ouml;mer: Growth for Startups (YC Startup
          School 2019).&rdquo; YouTube, 2019. youtube.com/watch?v=6lY9CYIY4pQ. 46-minute
          recorded talk; companion video to the YC Library text version with
          live Q&amp;A.
        </p>
        <p>
          Balfour, Brian. &ldquo;The Universal Growth Loop.&rdquo; brianbalfour.com, 2023.
          brianbalfour.com/quick-takes/universal-growth-loop. Optional deeper
          reading. The Acquire-Engage-Retain-Monetize-Reinvest loop; how to
          identify the weakest node.
        </p>
        <p>
          Ellis, Sean. &ldquo;Using Product/Market Fit to Drive Sustainable Growth.&rdquo;
          GrowthHackers / Medium, 2019.
          medium.com/growthhackers/using-product-market-fit-to-drive-sustainable-growth-58e9124ee8db.
          The canonical primary source for the 40% &ldquo;very disappointed&rdquo;
          PMF threshold.
        </p>
        <p>
          Hariharan, Anu. &ldquo;Nine Business Models and the Metrics Investors Want.&rdquo;
          YC Startup School, 2019. startupschool.org/videos/66. For consumer
          subscription: MRR growth rate, user retention, paid CAC, and LTV
          as the four investor-facing metrics.
        </p>
        <p>
          Levels, Pieter. <em>MAKE: The Indie Maker Handbook.</em> readmake.com, 2019.
          Bootstrapped product building; pricing philosophy, monetisation,
          and the keep-going framing for solo founders.
        </p>
        <p>
          Rachitsky, Lenny. &ldquo;All the ways to grow your product.&rdquo; Lenny&rsquo;s
          Newsletter, 2022.
          lennysnewsletter.com/p/all-the-ways-to-grow-your-product. The Racecar
          Growth Framework: kickstarts, engines, lubricants, turbo boosts,
          and mid-stage accelerants.
        </p>
        <p>
          Rachitsky, Lenny. &ldquo;What is good retention?&rdquo; Lenny&rsquo;s Newsletter, 2020.
          lennysnewsletter.com/p/what-is-good-retention-issue-29. Evidence-based
          retention benchmarks: consumer SaaS 40% good / 70% great at 6 months.
        </p>
        <p>
          Ries, Eric. <em>The Lean Startup.</em> Crown Business, 2011. Optional
          deeper reading. Canonical vocabulary for build-measure-learn, MVPs,
          validated learning, and the pivot-or-persevere decision.
        </p>
        <p>
          Stripe. &ldquo;What is monthly recurring revenue?&rdquo; stripe.com, 2026.
          stripe.com/resources/more/what-is-monthly-recurring-revenue. Expansion
          MRR, churn MRR, and contraction MRR as the building blocks for
          diagnosing a stalled growth curve.
        </p>
        <p>
          Temperton, James. &ldquo;The most useful customer retention metrics, ranked.&rdquo;
          PostHog, 2024. posthog.com/product-engineers/customer-retention-metrics.
          Good monthly SaaS churn: 3-7%. Net revenue retention formula and
          gross vs net churn distinction.
        </p>
        <p>
          Temperton, James. &ldquo;Retention rate vs churn rate: an intro to churn
          analysis.&rdquo; PostHog, 2024.
          posthog.com/product-engineers/churn-rate-vs-retention-rate. Voluntary
          vs involuntary churn; cohort-level vs aggregate measurement; net
          negative churn.
        </p>
        <p>
          Vandervell, Andy. &ldquo;In-depth: How to measure product-market fit.&rdquo;
          PostHog, 2023. posthog.com/founders/measure-product-market-fit.
          Seven leading and lagging PMF indicators including word-of-mouth,
          the Ellis survey, engagement, retention curves, burn multiple, and
          LTV/CAC ratio.
        </p>
        <p>
          Verna, Elena. &ldquo;10 growth tactics that never work.&rdquo; Lenny&rsquo;s Newsletter,
          2025.
          lennysnewsletter.com/p/10-growth-tactics-that-never-work-elena-verna.
          Why growth tactics without a product loop are noise; the matching
          condition between tactic and loop mechanic.
        </p>
        <p>
          Vohra, Rahul. &ldquo;How Superhuman Built an Engine to Find Product/Market
          Fit.&rdquo; First Round Review, 2018.
          review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/.
          The four-step PMF engine: survey, segment, roadmap, track weekly.
          PMF score as a leading indicator you can move.
        </p>
        <p>
          Winters, Casey. &ldquo;Thinking beyond frameworks.&rdquo; Lenny&rsquo;s Podcast, 2023.
          youtube.com/watch?v=QMFvz8utx-Q. Why frameworks break when conditions
          change; diagnosing stalled growth from first principles; channel-product
          fit failures.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk10ReadingSearchBody =
  "synthesis diagnostic quadrant leak ceiling price channel stalled MRR self-audit dashboard pivot product channel price trigger keep going graduate to compound lifecycle SEO brand $10k $30k $100k MRR hire AI bootstrapped funded capstone defense 5-minute defense rollback criterion case study indie hacker Ellis PMF survey Superhuman Vohra Racecar Rachitsky Alstromer Levels Stripe retention cohort activation rate reading Week 10";
