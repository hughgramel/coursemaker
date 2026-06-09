import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk07Reading() {
  return (
    <ReadingPage
      id="wk07"
      title="Week 7 &mdash; Social, virality, and the basics of paid"
      kicker="B2C to $10k MRR &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This week you will bake one growth loop into your product. By the
          end of the reading you will be able to define K-factor and compute
          it from real data, tell a viral loop apart from a growth loop, size
          your CAC ceiling from a credible LTV estimate, and decide whether
          paid acquisition fits your product right now.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You should already know what
          the <strong>AAARRR funnel</strong> is and where your product leaks
          most. You should have a working definition of <strong>LTV</strong>{" "}
          and <strong>CAC</strong> from weeks 2-3, a committed{" "}
          <strong>wedge channel</strong> from week 6, and at least one live{" "}
          <strong>activation event</strong> firing in production. The concepts{" "}
          <strong>channel-product fit</strong> and{" "}
          <strong>traction channels</strong> from weeks 5-6 are the direct
          predecessors to this week&rsquo;s material.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="your-week-at-a-glance">1. Your week at a glance</AnchorHeading>
      <p>
        Week 7 sits in the Composition phase of the course. The three Bloom
        outcomes that frame everything below:
      </p>
      <ul>
        <li>
          <strong>Apply:</strong> Compute your K-factor from real share-event
          data.
        </li>
        <li>
          <strong>Evaluate:</strong> Decide whether paid acquisition fits your
          product now and articulate the trigger.
        </li>
        <li>
          <strong>Create:</strong> Ship one viral asset into the product with
          measurement wired.
        </li>
      </ul>
      <p>
        The milestones that prove you hit them: one viral asset in production,
        a growth-loop diagram (one page, on paper), your CAC ceiling written
        down, and either a $50-$200 paid test with a measured CAC or a written
        &ldquo;why not yet&rdquo; memo.
      </p>
      <p>
        Metrics to track this week: K-factor, shares per active user, CAC if
        you are testing paid, MRR delta, and public outputs shipped.
      </p>

      <AnchorHeading as="h2" id="week-day-by-day">2. Your week, day by day</AnchorHeading>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Morning growth (30 min)</th>
              <th>Customer hour (60 min)</th>
              <th>Build block (3.5 hrs)</th>
              <th>Measure + reflect (15 min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mon</strong></td>
              <td>Channel sprint Day 6 output.</td>
              <td>Find 3 viral assets your competitors ship; teardown each one.</td>
              <td>Sketch your growth loop diagram on paper.</td>
              <td>Where in the loop do users actually share?</td>
            </tr>
            <tr>
              <td><strong>Tue</strong></td>
              <td>Channel sprint Day 7 output; post the loop diagram publicly.</td>
              <td>Talk to 2 power users about what they&rsquo;d share and why.</td>
              <td>Spec one viral asset: share card, public profile, or embed.</td>
              <td>Is the asset shareable for the right reason?</td>
            </tr>
            <tr>
              <td><strong>Wed</strong></td>
              <td>Channel sprint Day 8 output.</td>
              <td>Watch how 3 users hit the share trigger (session replay or live).</td>
              <td>Build the viral asset.</td>
              <td>Did it ship today, or did scope sprawl?</td>
            </tr>
            <tr>
              <td><strong>Thu</strong></td>
              <td>Channel sprint Day 9 output, featuring the new asset.</td>
              <td>If paid-testing: write 5 ad creative variants from customer language.</td>
              <td>Ship the asset to production. Wire share-event telemetry.</td>
              <td>K-factor estimate by Friday?</td>
            </tr>
            <tr>
              <td><strong>Fri</strong></td>
              <td>Friday channel recap + loop recap.</td>
              <td>Pull share events from the new asset; estimate K-factor.</td>
              <td>No new features. Tune the share-asset copy only.</td>
              <td>Loop installed? Or just decoration?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h2" id="plan-card">3. This week&rsquo;s plan card</AnchorHeading>
      <Callout title="Fill this in before Monday build block">
        <p>
          <strong>My three milestones this week:</strong>
          <br />1. ___________________________________________________
          <br />2. ___________________________________________________
          <br />3. ___________________________________________________
        </p>
        <p>
          <strong>My one repeating growth move:</strong>{" "}
          ___________________________ (verb + noun, every day)
        </p>
        <p>
          <strong>The friction that will derail me:</strong>{" "}
          ___________________________________________________
        </p>
        <p>
          <strong>Paid test decision:</strong> Yes / No. If yes: platform,
          budget, and five creative variants listed. If no: one sentence on
          what trigger would change the answer.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="daily-rules">4. Daily rules</AnchorHeading>
      <p>
        These are the course-wide anti-trap clauses, repeated here because
        week 7 is when founders first feel the pull to skip them.
      </p>
      <ul>
        <li>The build block does not open until the morning growth move and customer hour are done. No exceptions.</li>
        <li>Build-block scope is one sentence. If you cannot write it, the scope is too large.</li>
        <li>No new features that are not on this week&rsquo;s milestone list.</li>
        <li>Friday review is non-negotiable. Skipping it means the week did not count.</li>
        <li>If the week&rsquo;s growth move feels uncomfortable, that is evidence it is the right one.</li>
      </ul>

      <AnchorHeading as="h2" id="build-in-public">5. Build-in-public</AnchorHeading>
      <p>
        <strong>Build-in-public</strong> is the practice of shipping work
        publicly in front of an audience as you go, rather than revealing a
        finished product at launch. It is a distribution strategy, not a
        personality trait.
      </p>
      <p>
        The mechanics: each public post is a micro-launch. It creates a
        feedback loop before you have product analytics, generates social proof
        before you have revenue, and produces indexable content for search. The
        compounding effect is that an audience built on build-in-public posts is
        pre-qualified: every person who follows you through the building process
        already understands what the product does and why you are building it.
      </p>
      <p>
        Marc Lou&rsquo;s free-tool marketing strategy (2024) is a specific form
        of build-in-public that pairs two tactics: shipping free mini-tools that
        solve one job with no signup required, then posting the launch on
        Twitter/X. The free tool is shareable (free, no friction, one job done
        well). The post is shareable (transparent numbers, surprising result, or
        clever mechanic). Lou reported 30% conversion from free-tool visitor to
        paid customer by keeping the handoff natural.
      </p>
      <p>
        Tony Dinh built Black Magic (a Twitter analytics tool) to $14k MRR
        before selling it for $128k, using Twitter/X as the only acquisition
        channel (Tony Dinh, Indie Hackers, 2023). His principle: &ldquo;Twitter
        lets me have a direct line to my users before, during, and after launch.
        That&rsquo;s worth more than any ad budget.&rdquo;
      </p>
      <p>
        The platform rule for this course: if you committed to Twitter/X as your
        wedge channel in week 6, this week&rsquo;s viral asset goes there first.
        If you committed to a different channel, the asset should match that
        channel&rsquo;s sharing norms.
      </p>
      <p>
        One caution from Arvid Kahl&rsquo;s work on audience-first building
        (Zero to Sold, 2020): build-in-public works when each post creates value
        for the audience, not when it is a broadcast of progress updates. The
        question to ask before posting: &ldquo;Why would a non-customer want to
        read this?&rdquo;
      </p>

      <AnchorHeading as="h2" id="k-factor-viral-loop">6. K-factor and the viral loop</AnchorHeading>
      <p>
        Andrew Chen&rsquo;s 2025 essay on viral loops is the authoritative
        source on K-factor for this course. The definition is precise:
      </p>
      <pre>{`K = (invites or share actions sent per user cohort)
    ×
    (conversion rate from invite/share to new signup)`}</pre>
      <p>
        A K above 1.0 means each user cohort generates more than one new user,
        producing exponential growth. Chen&rsquo;s benchmarks: K of 0.9 yields
        10x amplification of an input cohort; 0.75 yields 4x; 0.5 yields 2x.
        Most early-stage B2C products have K between 0.05 and 0.3. A K of 0.3
        is not failure. It means every 10 acquired users generate 3 more through
        sharing. That is meaningful compounding on top of organic growth.
      </p>
      <p>
        Chen distinguishes between the &ldquo;golden age&rdquo; of virality
        (2005-2010), when email-based invite systems could achieve K above 1.0
        routinely, and modern virality, where browser privacy and mobile app
        stores have changed the mechanics. The key shift: &ldquo;Modern virality
        depends on retention-driven loops across multiple sessions rather than
        single-session conversions.&rdquo; This means designing the viral moment
        into a retained user&rsquo;s natural workflow, not into the onboarding
        flow or the signup confirmation email.
      </p>
      <p>
        A <strong>viral loop</strong> is a specific mechanism where a user&rsquo;s
        action generates an invitation or exposure that brings in a new user, who
        then starts the loop again. The canonical modern example is Figma: every
        shared design file is a viral loop. The recipient must create a Figma
        account to comment or edit. The sharing action is motivated by the
        user&rsquo;s work (collaborating on a design), not by an incentive
        program.
      </p>
      <p>
        The share-card tactic described in the section worksheet is one
        implementation of a viral loop. The trigger is a retention event (a
        milestone the user has earned). The share action is motivated by social
        signaling. The card carries the product brand and URL. The new viewer
        arrives with a warm referral signal because a person they trust shared it.
      </p>

      <AnchorHeading as="h2" id="growth-loop">7. Growth loops: the bigger picture</AnchorHeading>
      <p>
        Balfour and Winters at Reforge (2019) introduced the term{" "}
        <strong>growth loop</strong> to describe a closed system where the
        output of one user cohort becomes the input for acquiring the next.
        Viral loops are one type of growth loop, but not the only type.
      </p>
      <p>
        The Reforge taxonomy identifies four acquisition loop types:
      </p>
      <ul>
        <li>
          <strong>Viral loop:</strong> user action brings in new users directly
          (organic word-of-mouth, incentivized referral, or casual contact).
        </li>
        <li>
          <strong>Content loop:</strong> users create content that surfaces in
          search (SEO) or on social feeds, driving new user acquisition. This is
          the loop behind programmatic SEO products.
        </li>
        <li>
          <strong>Sales loop:</strong> revenue from one customer cohort funds
          outbound sales or partnerships that bring in the next cohort.
        </li>
        <li>
          <strong>Paid loop:</strong> revenue from one customer cohort funds
          paid advertising that brings in the next cohort.
        </li>
      </ul>
      <p>
        The question a loop forces: how does cohort 1 generate cohort 2? Funnels
        measure one cohort&rsquo;s journey from acquisition to revenue. Loops
        measure the compound rate at which one cohort produces the conditions
        for the next. A product with a genuine loop compounds; a product without
        one requires constant new input to stay flat.
      </p>
      <p>
        Lenny Rachitsky&rsquo;s growth-engines framework (2022) covers the same
        territory at a higher level: virality, SEO, and paid are three distinct
        engines, and most successful consumer companies mastered one before
        expanding to a second. Airbnb is 70%+ virality-driven on the host side.
        Booking.com pivoted from SEO to paid in 2004 only after validating that
        paid could be profitable at small budgets. Thumbtack took 18-24 months
        to see meaningful results from SEO before it became their primary engine.
        Each engine has a different time-to-payoff and capital requirement.
      </p>
      <p>
        Elena Verna&rsquo;s formulation is the sharpest summary of the risk:
        &ldquo;Growth tactics without a product loop are decorations, not
        engines.&rdquo; (Lenny&rsquo;s Podcast, 2025). A share button is not a
        viral loop. A share button attached to a moment where the user has a
        genuine reason to share, and where the recipient has a genuine reason to
        sign up, is a viral loop.
      </p>

      <AnchorHeading as="h2" id="case-study-marc-lou">8. Case study: Marc Lou&rsquo;s Twitter-driven launch playbook</AnchorHeading>
      <p>
        Marc Lou&rsquo;s February 2024 revenue breakdown (YouTube, 2024) offers
        the most concrete primary-source evidence for what a build-in-public
        viral loop looks like at $45k/month. The numbers he published: ShipFast
        (his boilerplate), marketing mini-tools, and a YouTube channel operating
        together as a single acquisition system.
      </p>
      <p>
        The loop structure:
      </p>
      <ol>
        <li>
          Lou ships a free mini-tool (one job, no signup, descriptive name for
          SEO). The tool is functional on first visit.
        </li>
        <li>
          He posts the launch on Twitter/X with transparent metrics (how long it
          took to build, early usage numbers, whether it converted to paid).
        </li>
        <li>
          The post is shared by followers who find the transparency compelling.
          Each share reaches new developers who are potential ShipFast customers.
        </li>
        <li>
          New visitors who land on the free tool see a natural conversion path to
          ShipFast. Lou&rsquo;s reported conversion rate: 30% from free tool to
          paid product.
        </li>
        <li>
          YouTube converts at 3x the rate of Twitter because video creates a
          deeper product demonstration. &ldquo;People who discover my websites
          from YouTube are 300% more likely to become customers than if they
          discover them from X.&rdquo;
        </li>
      </ol>
      <p>
        Three things to notice about this loop. First, the free tool is itself a
        viral asset: it is shareable because it is free, frictionless, and does
        one job well. Second, the Twitter post is the distribution mechanism for
        the tool, not the product. The post drives traffic; the tool closes
        conversions. Third, the CAC on this loop is time, not money: Lou&rsquo;s
        paid spend is near zero. The loop&rsquo;s K-factor lives in the
        shareability of the free tools and the compounding SEO value of
        descriptive tool names.
      </p>
      <p>
        The lesson for a technical founder at $0-$10k MRR: you do not need a
        viral coefficient above 1.0 to make a loop work. You need a loop that
        compounds faster than churn removes it. Lou&rsquo;s loop compounds
        because each new tool creates a new SEO surface, a new Twitter post, and
        a new conversion path, all at near-zero marginal cost.
      </p>

      <AnchorHeading as="h2" id="cac-ceiling">9. CAC ceiling</AnchorHeading>
      <p>
        Your <strong>CAC ceiling</strong> is the maximum you can profitably
        spend to acquire one customer, given your LTV. It is not the maximum
        you are willing to spend; it is the maximum the unit economics permit.
      </p>
      <pre>{`CAC ceiling = LTV / target LTV:CAC ratio

Example:
  LTV = $180 (18-month average lifetime at $10/mo)
  Target ratio: 3:1
  CAC ceiling = $180 / 3 = $60

At $60 CAC, every $1 spent returns $3. Below $60, the channel is profitable.
Above $60, you are buying growth at a loss.`}</pre>
      <p>
        Use median cohort LTV, not your best cohort. Use net LTV after payment
        processing fees, refunds, and infrastructure costs. Paddle/ProfitWell&rsquo;s
        research across 30,000+ subscription companies (2022) is consistent:
        below a 2:1 LTV:CAC ratio, retention or pricing needs to be fixed before
        paid acquisition makes sense.
      </p>
      <p>
        The CAC ceiling is also a diagnostic tool. If your organic CAC (time
        spent on content, community, and build-in-public divided by customers
        acquired) is already above your ceiling, paid will be worse. Organic
        channels can have high implicit CAC when the founder&rsquo;s time is not
        costed. Write your founder time cost into the calculation: if you earn
        $100/hour as an engineer and you spend 20 hours per week on organic
        distribution, that is $2,000/week of organic spend. Divide by organic
        customers acquired to get your real organic CAC.
      </p>

      <AnchorHeading as="h2" id="conversion-api">10. Conversion API</AnchorHeading>
      <p>
        The <strong>conversion API</strong> (Meta&rsquo;s term; Google calls it
        enhanced conversions) is a server-to-server event pipeline that sends
        conversion data directly from your backend to the ad platform, bypassing
        browser-based tracking limitations.
      </p>
      <p>
        Since iOS 14.5 in April 2021, browser-based ad pixels have lost 20-40%
        of conversion attribution because of app tracking transparency and the
        Safari ITP (Intelligent Tracking Prevention) mechanism. If you run a
        Meta pixel alone, you will under-report conversions, your algorithm will
        optimize against incomplete data, and your CAC will appear higher than it
        is. The conversion API fixes this by sending a hashed version of the
        user&rsquo;s email and phone from your server at the moment of a
        confirmed conversion event.
      </p>
      <p>
        Implementation pattern for a technical founder: when your Stripe webhook
        receives a <code>payment_intent.succeeded</code> event, fire a server-side
        POST to Meta&rsquo;s Conversions API endpoint with the purchase value and
        a hashed email. Match this against the browser pixel event using the same
        event ID to deduplicate. The First Round Review consumer-acquisition
        playbook (Hockenmaier &amp; Rachitsky, 2019) cites accurate attribution
        as a prerequisite for any paid channel decision, and server-side events
        are now required to achieve it.
      </p>

      <AnchorHeading as="h2" id="creative-as-leverage">11. Creative as leverage</AnchorHeading>
      <p>
        <strong>Creative as leverage</strong> is the claim that ad creative
        quality is the primary variable in paid acquisition performance, not
        audience targeting. The supporting evidence: automated audience systems
        on Meta and Google have become effective at finding buyers. The remaining
        differentiation lives in the creative.
      </p>
      <p>
        The practical implication: a technical founder should spend more time
        writing and testing ad copy than tuning audience parameters. The
        Hockenmaier and Rachitsky framework (2019) documents this from the
        Booking.com case study: Booking&rsquo;s paid channel success in 2004-2007
        was driven by rapid creative iteration, not advanced targeting.
      </p>
      <p>
        Writing creative from customer language means pulling exact phrases from
        support tickets, user interviews, review sites, and community posts.
        Copy that mirrors what a customer already thinks about their problem
        reads as truth; copy that describes the product from the founder&rsquo;s
        perspective reads as advertising. The test: show the headline to a target
        customer and ask &ldquo;does this sound like something you would say or
        something a startup would say?&rdquo;
      </p>
      <p>
        The five-variant rule: write five headlines from five distinct customer
        pain statements, test them at equal spend, and cut the bottom three after
        a week. This is the smallest paid experiment that generates a useful
        signal.
      </p>

      <AnchorHeading as="h2" id="exercises">12. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          <strong>Draw your growth loop on paper.</strong> Take a blank sheet.
          Draw a circle. Label the four nodes: Acquire, Engage, Retain,
          Monetize. Add arrows showing how each node feeds the next. Then add a
          fifth arrow: from Monetize back to Acquire, showing what mechanism
          (paid spend, referral from retained user, content from retained user,
          or word-of-mouth from activated user) closes the loop. Label each
          arrow with the specific mechanism in your product. If an arrow is
          missing, the loop is not closed: write &ldquo;broken&rdquo; and name
          what you would need to build to close it.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Compute your K-factor estimate using the formula:
        </p>
        <pre>{`K = (shares sent per active user) × (conversion rate on shares)`}</pre>
        <p>
          Use real data if you have it. If you do not, use conservative
          estimates (5% share rate, 5% conversion on shares) and label the
          result &ldquo;estimated.&rdquo; Then write: what is the single change
          to your product or share mechanic that would double the share rate?
          What would double the conversion rate on shares? Which lever is more
          tractable for your product this week?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Calculate your CAC ceiling. Use your median cohort LTV (from the LTV
          calculation you did in week 2-3). Apply a 3:1 LTV:CAC target ratio.
          Write the resulting CAC ceiling in dollars. Then answer: is your
          current organic CAC (founder hours &times; your hourly rate, divided
          by customers acquired in the last 30 days) above or below that
          ceiling? If above, what does that imply about adding paid?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Elena Verna argues that &ldquo;growth tactics without a product loop
          are decorations, not engines.&rdquo; Pick one growth tactic you have
          tried or are planning to try this week. Write one sentence naming the
          product loop the tactic relies on (the in-product mechanism that turns
          a new visitor into a user who generates the next visitor). If there is
          no product loop backing the tactic, write &ldquo;no loop&rdquo; and
          decide whether to run it anyway or design a loop first.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write your paid decision memo. One page maximum. Structure: (a) your
          CAC ceiling from exercise 3, (b) your current MRR and whether it
          clears $5k, (c) your LTV:CAC ratio on organic channels, (d) your
          verdict: paid test now, or not yet. If &ldquo;not yet&rdquo;: write
          the single metric that, when it changes, would flip your verdict. If
          &ldquo;yes&rdquo;: name the platform, the budget, and write the first
          headline for each of your five creative variants.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">13. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet (this week):</strong> The section builds
          directly on this reading. Complete exercises 1-3 before you arrive.
        </li>
        <li>
          <strong>Lecture 1 follow-up questions:</strong> Bring your K-factor
          estimate and growth loop diagram to the post-lecture discussion.
        </li>
        <li>
          <strong>Lecture 2 follow-up questions:</strong> Bring your CAC ceiling
          calculation and paid decision memo.
        </li>
        <li>
          <strong>Week 8 (optional early read):</strong> Next week covers mobile,
          App Store, and the week 8 capstone scaffold. The viral asset you ship
          this week may need a mobile share sheet if your product has mobile
          users.
        </li>
        <li>
          <strong>Optional deeper reading from the course library:</strong>{" "}
          Andrew Chen, <em>The Cold Start Problem</em> (2021) covers network
          effects and viral loops in marketplace and social products at much
          greater depth. Brian Balfour&rsquo;s &ldquo;Universal Growth Loop&rdquo;
          (2023) is the 10-minute version of the Reforge growth-loop framework.
          Both are in the course source library and are marked optional.
        </li>
      </ul>

      <Takeaways>
        <li>
          K-factor is the number of new users each existing user generates
          through sharing. Most early-stage products have K between 0.05 and
          0.3. A K below 1.0 still compounds meaningfully on top of organic
          growth.
        </li>
        <li>
          A viral loop is a specific type of growth loop where a user action
          directly brings in a new user. Growth loops include viral, content,
          sales, and paid subtypes. Every durable growth system is a loop, not
          a funnel.
        </li>
        <li>
          Modern virality lives in retained users&rsquo; natural workflows, not
          in one-time invite blasts. Design the share trigger into a moment the
          user is already motivated to complete.
        </li>
        <li>
          Your CAC ceiling is LTV divided by your target LTV:CAC ratio. Paid
          acquisition is almost never the right first move before $5k MRR
          because you lack the LTV data to set the ceiling accurately, and
          paid amplifies a leaky funnel.
        </li>
        <li>
          Creative quality is the primary variable in paid performance.
          Write ad copy from customer language pulled from support tickets and
          interviews, not from your product positioning document.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Chen, Andrew. &ldquo;Braindump on Viral Loops.&rdquo;{" "}
          <em>andrewchen.substack.com</em>, 2025. The primary source for
          K-factor mechanics, the history of viral loops, and the shift to
          retention-driven virality.
        </p>
        <p>
          Balfour, Brian, and Casey Winters. &ldquo;Growth Loops are the New
          Funnels.&rdquo; <em>Reforge Blog</em>, 2019. Introduces the growth
          loop framework and the four acquisition loop types.
        </p>
        <p>
          Hockenmaier, Dan, and Lenny Rachitsky. &ldquo;Drive Growth by Picking
          the Right Lane.&rdquo; <em>First Round Review</em>, 2019. Consumer
          acquisition playbook covering the three growth lanes; paid creative
          strategy and CAC discipline.
        </p>
        <p>
          Rachitsky, Lenny. &ldquo;Kickstarting and scaling a consumer
          business &mdash; Step 6: SCALE: Build your growth engine.&rdquo;{" "}
          <em>Lenny&rsquo;s Newsletter</em>, 2022. Growth engines overview with
          Airbnb, Booking.com, and Thumbtack case studies.
        </p>
        <p>
          Lou, Marc. &ldquo;How to get customers with free tool marketing.&rdquo;{" "}
          <em>newsletter.marclou.com</em>, 2024. Build-in-public free-tool loop
          with conversion data.
        </p>
        <p>
          Lou, Marc. &ldquo;I made $45,250 in February 2024.&rdquo; YouTube,
          2024. Concrete revenue breakdown showing the viral-asset loop in
          practice.
        </p>
        <p>
          Dinh, Tony. &ldquo;My solopreneur story: zero to $45K/mo in 2 years.&rdquo;{" "}
          <em>Indie Hackers</em>, 2023. Build-in-public mechanics for a Twitter-native
          indie product portfolio.
        </p>
        <p>
          Dinh, Tony, and Courtland Allen. &ldquo;Growing Multiple Products to
          $18k/mo Revenue.&rdquo; <em>Indie Hackers Podcast</em> episode 260, 2022.
          Twitter as a direct line to users before, during, and after launch.
        </p>
        <p>
          Kahl, Arvid. <em>Zero to Sold</em>, 2020. Audience-first building
          and build-in-public mechanics from FeedbackPanda ($55K MRR, acquired).
        </p>
        <p>
          Kahl, Arvid. <em>Find Your Following</em>, 2022. Twitter audience-building
          strategy for founders who committed to Twitter/X as their wedge channel.
        </p>
        <p>
          Paddle / ProfitWell. &ldquo;Pricing Strategy Guide.&rdquo; 2022.
          LTV:CAC ratio benchmarks from 30,000+ subscription companies.
        </p>
        <p>
          Verna, Elena, and Lenny Rachitsky. &ldquo;10 growth tactics that never
          work.&rdquo; <em>Lenny&rsquo;s Newsletter / Podcast</em>, 2025. Why
          growth tactics without a product loop are decorations.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk07ReadingSearchBody =
  "social virality build-in-public K-factor viral loop growth loop CAC ceiling conversion API creative as leverage share card Marc Lou Tony Dinh Andrew Chen Reforge paid acquisition reading Week 7";
