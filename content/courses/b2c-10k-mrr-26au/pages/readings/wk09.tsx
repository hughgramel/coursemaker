import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk09Reading() {
  return (
    <ReadingPage
      id="wk09"
      title="Week 9 — Lifecycle messaging and referral loops"
      kicker="B2C to $10k MRR &middot; Autumn 2026 &middot; Reading"
    >
      <ReadingFraming>
        <p>
          This reading teaches you how to wire two systems that bring users
          back without you doing the work: lifecycle messages that fire when
          user behavior calls for them, and referral loops that share results
          rather than soliciting invitations. By the end you will be able to
          map a five-message starter set to your product, choose the right
          channel for each message, and design a referral mechanism that
          generates attribution you can trust.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> This reading builds on{" "}
          <strong>activation-event</strong>, <strong>d7-retention</strong>,{" "}
          <strong>d30-retention</strong>, <strong>habit-loop</strong>,{" "}
          <strong>involuntary-churn</strong>, <strong>viral-loop</strong>, and{" "}
          <strong>growth-loop</strong> from earlier weeks. If you have not yet
          defined your activation event, go back to Week 2 before continuing.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="your-week-at-a-glance">1. Your week at a glance</AnchorHeading>
      <p>
        Week 9 sits in the Frontier phase. The core mechanics are wired; the
        question now is whether they compound on their own. Lifecycle messaging
        and referral loops are the two systems most likely to move your D7
        retention and referral count without ongoing effort from you.
      </p>
      <p><strong>Goals.</strong></p>
      <ul>
        <li>Distinguish the three message categories (transactional, marketing, lifecycle) in your own stack.</li>
        <li>Wire one triggered lifecycle message end-to-end before section.</li>
        <li>Ship one referral mechanism with measurement by Thursday.</li>
        <li>Complete capstone draft v1 (4 sections: funnel, problem, intervention, measurement) by Friday.</li>
      </ul>
      <p><strong>Bloom outcomes.</strong></p>
      <ul>
        <li>Apply: Wire one triggered lifecycle message (welcome / day-3 / churn-risk) end-to-end.</li>
        <li>Analyze: Distinguish transactional, marketing, and lifecycle messaging in your own stack.</li>
        <li>Create: Ship one referral mechanism with measurement that survives attribution skepticism.</li>
      </ul>
      <p><strong>Metrics to watch this week.</strong></p>
      <ul>
        <li>Welcome message open and click rates.</li>
        <li>Day-3 to D7 retention lift (compare users who clicked the nudge vs those who did not).</li>
        <li>Referrals per active user (baseline this before Thursday).</li>
        <li>MRR delta: does any of this move paid conversion?</li>
      </ul>

      <AnchorHeading as="h2" id="day-by-day">2. Your week, day by day</AnchorHeading>
      <p>Each cell below maps to one of the four daily slots (30/60/210/15 minutes).</p>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Morning growth move (30 min)</th>
            <th>Customer hour (60 min)</th>
            <th>Build block (210 min)</th>
            <th>Measure + reflect (15 min)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mon</strong></td>
            <td>Post: &ldquo;my lifecycle starter set hypothesis.&rdquo;</td>
            <td>Read 10 transactional emails you received this week. What made any of them good?</td>
            <td>Pick lifecycle tool (Resend, Loops, Customer.io, OneSignal).</td>
            <td>Where in the funnel will a message land best?</td>
          </tr>
          <tr>
            <td><strong>Tue</strong></td>
            <td>Post a lifecycle teardown of a B2C app you use.</td>
            <td>Interview 1 power user: which messages from competitors do they actually remember?</td>
            <td>Wire welcome message (email + push if mobile).</td>
            <td>Is the message actually sending in prod?</td>
          </tr>
          <tr>
            <td><strong>Wed</strong></td>
            <td>Post a screenshot of your welcome message.</td>
            <td>Watch 3 newly-onboarded users. Do they get the message?</td>
            <td>Wire day-3 or churn-risk message (pick one).</td>
            <td>Triggered correctly? Or schedule-decay risk?</td>
          </tr>
          <tr>
            <td><strong>Thu</strong></td>
            <td>Post a share-loop teardown of Duolingo streaks or equivalent.</td>
            <td>Interview 1 user about what they would share from your product.</td>
            <td>Ship referral mechanism (link, share button, or artifact).</td>
            <td>Did you ship a loop or decoration?</td>
          </tr>
          <tr>
            <td><strong>Fri</strong></td>
            <td>Friday recap post: lifecycle + referral wired.</td>
            <td>Pull message open/click + referral counts. Record in growth log.</td>
            <td>No new features. Capstone draft v1 (4 sections).</td>
            <td>What one thing must you defend in week 10?</td>
          </tr>
        </tbody>
      </table>

      <AnchorHeading as="h2" id="plan-card">3. This week&rsquo;s plan card</AnchorHeading>
      <Callout title="Fill in before Monday morning growth move">
        <p><strong>My three milestones for week 9:</strong></p>
        <ol>
          <li>___________________________________________</li>
          <li>___________________________________________</li>
          <li>___________________________________________</li>
        </ol>
        <p><strong>My repeating growth move this week:</strong> _______________________</p>
        <p><strong>The friction most likely to derail me:</strong> ____________________</p>
        <p><strong>Capstone draft v1 sections (due Friday):</strong> funnel / problem / intervention / measurement. Which section is furthest behind? ___________</p>
      </Callout>

      <AnchorHeading as="h2" id="daily-rules">4. Daily rules</AnchorHeading>
      <Callout title="Non-negotiable">
        <p>
          The build block does not open until the morning growth move and
          customer hour are done. No exceptions. If the growth move feels
          uncomfortable (posting a screenshot of a half-finished welcome
          message), that is evidence you should post it. Friday review is
          non-negotiable: skipping it means the week did not count.
          Build-block scope is one sentence. If you cannot state it in one
          sentence, the scope is too large.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="three-categories">5. Three message categories</AnchorHeading>
      <p>
        Most early-stage founders treat all automated messages as
        interchangeable. They are not. The three categories differ in consent
        requirements, deliverability, and user expectations.
      </p>
      <p>
        A <strong>transactional email</strong> is a direct response to a user
        action: a receipt, a password reset link, an account alert. Because
        the user initiated the exchange, transactional messages do not require
        an opt-out link under CAN-SPAM or GDPR. They also enjoy the highest
        deliverability: spam filters assume they are expected. Do not pollute
        this category with promotional content. One promotional sentence in a
        receipt crosses the line and degrades deliverability for every
        transactional message you send.
      </p>
      <p>
        A <strong>marketing message</strong> is sent on a schedule to a
        segment, regardless of what each individual user is doing. Newsletters,
        product announcements, and flash sales are marketing messages. They
        require explicit consent to receive and an opt-out mechanism in every
        message. Open rates for marketing messages are typically below 20% for
        well-curated lists; far lower for cold lists.
      </p>
      <p>
        A <strong>lifecycle message</strong> is triggered by where a specific
        user is in their product journey. It requires the same consent as
        marketing messages, but it fires because of user behavior rather than
        a calendar date. A day-3 nudge fires for users who have not returned
        three days after signup. A churn-risk message fires for paid users who
        have not completed a core action in N days. The trigger condition is
        what makes it lifecycle rather than marketing. Customer.io (Evola,
        2024) reports that lifecycle messages achieve 3-5x the open rates of
        equivalent marketing broadcasts because the content is relevant by
        construction.
      </p>

      <AnchorHeading as="h2" id="starter-set">6. The five-message starter set</AnchorHeading>
      <p>
        Five messages cover the full user journey from signup to churned user.
        Customer.io&rsquo;s framework (Evola, 2024) maps them to the six
        essential lifecycle campaigns; the starter set below is the minimal
        implementation for a solo technical founder.
      </p>
      <p>
        <strong>Welcome.</strong> Trigger: user completes signup or the first
        onboarding step. Goal: confirm the aha-moment is coming and remove the
        most common first-week question. A welcome message is not a feature
        tour. It is one sentence about what the user can do right now, plus a
        link to the one action that leads to the aha-moment. Welcome messages
        achieve 40-60% open rates because curiosity is at its peak at signup;
        that window closes within 48 hours.
      </p>
      <p>
        <strong>Day-3 nudge.</strong> Trigger: user signed up 3 days ago AND
        has not returned since activation. The AND condition is what separates
        lifecycle from schedule: users who returned should never receive this
        message. The goal is to re-engage drop-offs before the habit window
        closes. Nir Eyal&rsquo;s Hook Model (Eyal, 2014) identifies the
        external trigger as the on-ramp to habit formation. The day-3 nudge is
        an external trigger designed to reconnect the user to an internal cue
        they have not yet reinforced on their own.
      </p>
      <p>
        <strong>Paywall hit.</strong> Trigger: user encounters the paywall or
        usage limit for the first time. This moment carries the highest
        purchase intent in the lifecycle. An in-app message here converts
        better than a follow-up email because the user is already in the
        product. If you must send email, send it within minutes of the
        trigger, not hours.
      </p>
      <p>
        <strong>Churn-risk.</strong> Trigger: paid user with no qualifying
        session or core action in N days (set N based on your expected usage
        cadence). Customer.io notes (Evola, 2024) that inactivity is the
        leading predictor of passive churn before the next billing cycle.
        Personalize by the last action taken if possible: &ldquo;You
        haven&rsquo;t run any reports this week&rdquo; beats &ldquo;We miss
        you&rdquo; because it names the behavior the user is at risk of losing.
      </p>
      <p>
        <strong>Win-back.</strong> Trigger: churned user, 30-90 days after
        cancellation. A win-back campaign runs quarterly rather than monthly;
        more frequent is spam. It requires a hook: what has changed since the
        user left? Generic &ldquo;we miss you&rdquo; messages fail because
        they give the user no new information. A win-back that says
        &ldquo;since you left, we shipped [specific improvement that addresses
        the likely churn reason]&rdquo; gives the user a reason to reconsider.
        Customer.io recommends personalizing win-back content by cancellation
        reason when that data is available (Evola, 2024).
      </p>

      <AnchorHeading as="h2" id="push-email-inapp">7. Push vs email vs in-app</AnchorHeading>
      <p>
        Channel selection is the decision most founders skip. They default to
        email because it is what they know, or to push because the open rate
        is higher. Neither is a strategy.
      </p>
      <p>
        OneSignal&rsquo;s seven-factor framework (Langholz, 2021) provides the
        clearest guide for B2C founders:
      </p>
      <p>
        <strong>Open rates.</strong> Push notifications open at roughly 20%
        for B2C apps. Marketing email opens at under 2% on most lists. Lifecycle
        email to opted-in, segmented users performs better, reaching 20-35% in
        well-run programs. The gap is real but not the whole story.
      </p>
      <p>
        <strong>Reach.</strong> Push reaches users who have opted in to
        notifications, approximately 52% of mobile users. Email reaches anyone
        with a confirmed email address. For products where the majority of
        active users have turned off notifications, email is the only channel
        with meaningful reach.
      </p>
      <p>
        <strong>Content length and permanence.</strong> Push is limited to
        roughly 200 characters. It suits urgency and brevity: a streak at
        risk, a time-sensitive offer, a friend&rsquo;s activity. Email has
        no length limit and is permanent: users can search for it, forward it,
        and refer to it later. Receipts, upgrade confirmations, and detailed
        onboarding guides belong in email.
      </p>
      <p>
        <strong>Frequency.</strong> OneSignal recommends no more than two push
        notifications per day before opt-out rates spike (Langholz, 2021).
        Email performs best at weekly or biweekly cadence for most B2C
        products. In-app messages have no strict frequency limit because the
        user is already in the app and chose to be there.
      </p>
      <p>
        The practical rule: use push for urgency and real-time triggers, email
        for permanence and long-form content, in-app for paywall moments and
        feature discovery during an active session. Most founders should start
        with email (lower ops complexity) and add push only after the email
        lifecycle is stable.
      </p>

      <AnchorHeading as="h2" id="triggered-vs-scheduled">8. Triggered vs scheduled</AnchorHeading>
      <p>
        A scheduled message fires at a fixed time to a fixed segment. A
        triggered message fires when a specific user-event occurs. The
        distinction matters more than which tool you use or what you write.
      </p>
      <p>
        Scheduled messages decay over time for a structural reason: your user
        base accumulates people at every stage of the journey, but your message
        is written for one stage. A Monday morning re-engagement email is
        relevant for users who have been inactive for a week; it is noise for
        users who opened the app yesterday; it is alarming for users who just
        signed up. The same message degrades in relevance as the list grows.
      </p>
      <p>
        Triggered messages do not decay. Every new user who hits the trigger
        condition receives the message at the right moment, regardless of when
        they signed up. One setup produces consistent relevance indefinitely.
      </p>
      <p>
        Eyal&rsquo;s Hook Model (2014) frames this clearly: the external
        trigger must arrive at the moment the user is closest to taking the
        desired action. A churn-risk message sent on day 14 of inactivity
        reaches a user at the moment they are most likely to be open to
        re-engagement. The same message sent as a monthly batch blast catches
        some users at that moment and misses most of them.
      </p>

      <AnchorHeading as="h2" id="referral-types">9. Incentivized vs organic referrals</AnchorHeading>
      <p>
        Referral programs divide into two mechanics. An{" "}
        <strong>incentivized referral</strong> offers a reward to the referrer,
        the referred user, or both. An organic referral happens because the
        user genuinely wants to share, with no reward involved.
      </p>
      <p>
        Incentivized referrals convert at a higher rate per invite because
        there is a clear reason for the referrer to act. They require unit
        economics that hold: if the cost of the reward exceeds the lifetime
        value of the acquired user, the program is loss-making at scale. For
        indie B2C founders, cash and discount incentives are often
        unaffordable. The Dropbox two-sided incentive worked because 500MB of
        cloud storage cost Dropbox fractions of a cent to provide (GrowSurf,
        Petrova 2026). If you cannot find a reward that is cheap to deliver
        but high in perceived value, incentivized referrals are the wrong
        starting point.
      </p>
      <p>
        Organic referrals are more durable because the motivation is
        intrinsic. They require the product to create moments worth sharing,
        which is a product design question, not a marketing question.
      </p>

      <AnchorHeading as="h2" id="two-sided-incentive">10. The Dropbox two-sided incentive</AnchorHeading>
      <p>
        Dropbox grew from 100,000 to 4 million users in 15 months using a
        program where both the referrer and the referred user received 500MB
        of storage (GrowSurf, Petrova 2026). The program succeeded because of
        five structural properties that most imitations miss.
      </p>
      <p>
        First, the reward was the product itself. Dropbox users wanted
        storage. Earning more storage by sharing felt like using the product
        better, not like performing a promotional task.
      </p>
      <p>
        Second, the referral appeared at the end of onboarding, after the user
        had experienced the product. New users who had not yet reached an
        aha-moment were not asked to refer.
      </p>
      <p>
        Third, the interface was transparent: a dashboard showed exactly how
        much storage the user had earned and how many referrals remained before
        the cap. Progress visibility drives completion.
      </p>
      <p>
        Fourth, the sharing flow had minimal friction. One page, multiple share
        options, pre-written copy. Every additional step after the share
        decision is an attrition point.
      </p>
      <p>
        Fifth, shared Dropbox files sent emails to non-users, creating
        secondary acquisition loops beyond direct referrals.
      </p>
      <p>
        Three things to check before copying this model: the economics (is
        your reward cheap to deliver?), the timing (do you have an aha-moment
        after which to ask?), and fraud exposure (self-referrals are the most
        common abuse pattern and require at least IP-level detection).
      </p>

      <AnchorHeading as="h2" id="share-result-loop">11. Share-the-result loop</AnchorHeading>
      <p>
        Share-the-product loops ask the referrer to pitch the product. The
        recipient must evaluate an invitation. This is the same friction as
        any acquisition channel: why should I try something I have never seen?
      </p>
      <p>
        A <strong>share-result loop</strong> shares an artifact produced by
        using the product. The recipient sees the result before they see the
        pitch. The friction is lower because the value is visible in the
        shared content itself.
      </p>
      <p>
        Duolingo&rsquo;s Friend Streak (2024) is the canonical modern example.
        The mechanic: two users maintain a shared daily learning streak. Both
        must complete a lesson each day to keep the streak alive. The streak
        count is a result both users produced together.
      </p>
      <p>
        Users with at least one Friend Streak are 22% more likely to complete
        their daily lesson than users without one (Duolingo, 2024). The Friend
        Streak works for three reasons. First, the shared object (the streak
        count) has intrinsic meaning to the recipient because it represents a
        joint commitment. Second, breaking it has a social cost, not just a
        personal habit cost. Third, the push notification that warns a user
        their friend has completed their lesson is a trigger that converts at
        high rates because it arrives when the social pressure is highest.
      </p>
      <p>
        Through the lens of the Hook Model (Eyal, 2014), the Friend Streak
        transforms an individual habit loop into a social one. The investment
        step (maintaining the streak) is compounded by a second person&rsquo;s
        investment. Losing the streak costs social capital, not just personal
        momentum. This is why the mechanic is sticky in a way that a
        generic &ldquo;invite a friend&rdquo; prompt never is.
      </p>

      <AnchorHeading as="h2" id="case-study">12. Case study: Duolingo friend streaks as a share-result loop</AnchorHeading>
      <p>
        Duolingo&rsquo;s original streak mechanic was an individual counter:
        how many consecutive days had the user completed a lesson? The streak
        built an internal trigger. Users who had maintained a 30-day streak
        reported higher daily completion rates and stronger emotional responses
        to streak loss than new users.
      </p>
      <p>
        The Friend Streak extends this mechanic socially without changing its
        core logic. The unit of accountability shifts from the individual to
        the pair. Each user now has an audience for their streak: one person
        who cares whether the streak holds.
      </p>
      <p>
        The 22% lift in daily lesson completion (Duolingo, 2024) is a
        retention improvement, not a viral acquisition number. The primary
        loop is: users with Friend Streaks retain better, which means they are
        present longer, which means they have more opportunities to invite new
        users and to maintain Friend Streaks with others. The growth effect is
        secondary to the retention effect.
      </p>
      <p>
        This is the structure of a share-result loop that actually compounds:
        it improves retention for existing users, and that retention is visible
        to potential new users as social proof. The Duolingo Wrapped
        screenshot, the Wordle grid, the shared streak count: all of them share
        a result first and an invitation implicitly. The recipient sees evidence
        of value before they are asked to do anything.
      </p>
      <p>
        For a solo technical founder, the question is: what result does your
        product generate that a user would share even without an incentive?
        That is the starting point for a share-result loop. If no such result
        exists, the loop cannot be built around a share mechanic. Build the
        result first.
      </p>

      <AnchorHeading as="h2" id="measuring-referrals">13. Measuring referrals without lying</AnchorHeading>
      <p>
        Referral attribution is imprecise by nature. The honest approach is
        to pick one measurement method, acknowledge its failure mode, and track
        trends over time rather than treating any single number as absolute
        truth.
      </p>
      <p>
        <strong>Referral link with UTM parameters</strong> is the most common
        method. Accurate for users who click the shared link directly. Fails
        to capture referrals where the recipient heard about the product in
        person or searched for it after seeing the shared artifact. In products
        with high mobile share rates, link-click attribution undercounts by
        20-40%.
      </p>
      <p>
        <strong>Promo codes</strong> are accurate when redeemed. They miss
        users who heard the code, forgot it, and signed up directly. They also
        create pricing complexity if the code grants a discount.
      </p>
      <p>
        <strong>Self-reported &ldquo;how did you hear about us?&rdquo;</strong>{" "}
        captures referrals that link tracking misses. Response rates are low
        (20-40% of users fill in the field) and recall is imprecise. Use it
        as a supplement to link tracking, not a replacement.
      </p>
      <p>
        The number that matters most is <strong>referrals per active user
        per month</strong>. Not total referrals, not raw K-factor. This metric
        denominates by active users, which ties referral output to engagement.
        A product with 100 active users and 10 referrals per month has a
        stronger referral signal than a product with 1,000 passive users and
        15 referrals. Set your baseline before launching any referral
        mechanic; without a baseline, you cannot measure lift.
      </p>

      <AnchorHeading as="h2" id="exercises">14. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          Map each of the five messages in the starter set (welcome, day-3
          nudge, paywall hit, churn-risk, win-back) to your product. For each
          message, write the trigger condition in one sentence: &ldquo;Send
          when [user_event] and [time_condition].&rdquo; If you do not have
          the event data to fire any of the triggers, name the one
          instrumentation change needed to make it possible.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Using OneSignal&rsquo;s channel framework (Langholz, 2021): for
          each of the five messages above, decide whether the primary channel
          should be push, email, or in-app. Write one sentence per message
          explaining why. Then identify any message where you would use a
          secondary channel as a fallback (for example, email if the user has
          disabled push). What condition determines when the fallback fires?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Sketch a share-result loop for your product. What is the result your
          product generates? Can it be expressed as a shareable artifact (an
          image, a number, a score, a report)? Who in the recipient&rsquo;s
          social graph would find that artifact interesting before they have
          used your product? If you cannot name a result worth sharing, write
          one sentence on what product change would create one.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          The Dropbox referral program worked because the reward (storage) was
          the core product value (GrowSurf, Petrova 2026). For your product,
          name the single thing your users most want more of. Can you offer
          that thing as a referral reward without (a) breaking your pricing
          model, (b) creating meaningful fraud exposure, and (c) generating
          negative unit economics? If any of the three fails, name the
          simpler alternative you would build instead.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write your referral attribution plan in three sentences: (1) the
          primary measurement method and its known failure mode, (2) the
          secondary method you will use to cross-check it, and (3) the
          baseline number you will record before launching the mechanism. If
          your current tools cannot produce a referral count at all, state
          what you would need to instrument first.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">15. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section worksheet this week.</strong> Wire one triggered
          lifecycle message end-to-end. Record baseline, open rate, click
          rate, and uplift estimate in your growth log.
        </li>
        <li>
          <strong>Lecture 1 slides.</strong> Cover the five-message starter
          set, the push vs email decision framework, and the triggered vs
          scheduled distinction in detail.
        </li>
        <li>
          <strong>Lecture 2 slides.</strong> Cover the Dropbox two-sided
          incentive teardown and the Duolingo Friend Streak as a share-result
          loop.
        </li>
        <li>
          <strong>HW4: Retention engine.</strong> Due this week. Combines
          your lifecycle message baseline with the referral mechanism baseline.
        </li>
        <li>
          <strong>Optional.</strong> Andrew Chen, <em>The Cold Start
          Problem</em> (2021). Chapters on escape velocity and viral loops
          extend the growth-loop and viral-loop concepts from Weeks 7-8. Read
          if your product has network effects; skip if it does not.
        </li>
      </ul>

      <Takeaways>
        <li>Lifecycle messages are event-triggered, not calendar-scheduled. The trigger condition is what makes them relevant by construction; without it, you have a marketing blast, not a lifecycle system.</li>
        <li>The five-message starter set (welcome, day-3 nudge, paywall hit, churn-risk, win-back) covers the full user journey with one-time setup that compounds in relevance as your user base grows.</li>
        <li>Push opens at roughly 20%, email at under 2% on average. Push wins for urgency and brevity; email wins for permanence and long-form content. In-app wins for paywall moments during an active session.</li>
        <li>Share-the-result loops outperform share-the-product loops because the shared artifact carries its own value before the recipient signs up. Duolingo&rsquo;s Friend Streak generates a 22% lift in daily lesson completion by making the streak social, not by offering an invitation reward.</li>
        <li>Referral measurement is imprecise. Track referrals per active user per month, pick one attribution method, acknowledge its failure mode, and measure trends rather than absolutes.</li>
      </Takeaways>

      <Bibliography>
        <p>
          Customer.io, Molly Evola (2024). &ldquo;Six essential ongoing lifecycle
          campaigns every marketer needs.&rdquo;{" "}
          <em>customer.io/learn/lifecycle-marketing/essential-lifecycle-marketing-campaigns</em>.
          The six-campaign framework used in sections 5 and 6 of this reading.
        </p>
        <p>
          Duolingo (2024). &ldquo;Friend Streak: a new way to stay motivated
          together.&rdquo; <em>blog.duolingo.com/friend-streak/</em>.
          Source for the 22% daily lesson completion lift cited in sections 11
          and 12.
        </p>
        <p>
          Eyal, Nir (2014). <em>Hooked: How to Build Habit-Forming Products.</em>
          Portfolio/Penguin. The Hook Model framework (trigger, action, variable
          reward, investment) informs sections 8 and 11.
        </p>
        <p>
          GrowSurf, Sandra Petrova (2026). &ldquo;The Dropbox Referral Program:
          3900% Growth in 15 Months.&rdquo; <em>growsurf.com/blog/dropbox-referral-program/</em>.
          Source for the Dropbox program mechanics and five success factors in
          section 10.
        </p>
        <p>
          OneSignal, Sasha Langholz (2021). &ldquo;Deciding When and How to Use
          Email vs. Push Notifications.&rdquo;{" "}
          <em>onesignal.com/blog/deciding-when-and-how-to-use-email-vs-push-notifications/</em>.
          Source for the channel decision framework and open-rate benchmarks in
          section 7.
        </p>
        <p>
          Chen, Andrew (2021). <em>The Cold Start Problem: How to Start and Scale
          Network Effects.</em> Harper Business. Optional deeper reading for
          network-effect products; the key quote on atomic networks is cited in
          the Lecture 2 slides.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk09ReadingSearchBody =
  "lifecycle messaging transactional email marketing lifecycle triggered scheduled five-message starter set welcome day-3 churn-risk win-back push email in-app open rate click rate referral loops incentivized organic two-sided incentive Dropbox share-result loop Duolingo friend streak attribution habit loop Hook Model Nir Eyal Customer.io OneSignal GrowSurf reading Week 9";
