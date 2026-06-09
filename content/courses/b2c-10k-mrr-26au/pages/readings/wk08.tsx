import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";
import { Mermaid } from "@/components/Mermaid";

export function Wk08Reading() {
  return (
    <ReadingPage
      id="wk08"
      title="Week 8: app store mechanics, ASO, and the capstone scaffold"
      kicker="B2C to $10k MRR — A 10-Week Growth Manual · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the full distribution decision for a one-person
          product: how Apple and Google review works, how to build a release
          pipeline with TestFlight or Play internal-testing, how to optimize
          your store listing so it converts the traffic you earn, and when a
          PWA install prompt is the better call. By the end you will be able
          to submit a build on your chosen path, apply three ASO principles
          with cited evidence, and defend your distribution decision in writing.
          The reading closes with the Friday capstone scaffold session, which
          you start this week to aim the final two weeks productively.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You have worked through the{" "}
          <strong>aaarrr-funnel</strong>, <strong>activation-rate</strong>,{" "}
          <strong>phased-rollout</strong>, <strong>feature-flag</strong>,{" "}
          <strong>trial-mechanics</strong>, and{" "}
          <strong>wedge-channel</strong> from weeks 1-7. You know your current
          trial-to-paid rate, your D7 retention number, and which channel
          produces your best-fit users. That data is the input material for
          the capstone scaffold at the end of this reading.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="week-at-a-glance">1. Your week at a glance</AnchorHeading>
      <p>
        Week 8 is the &ldquo;ship to a store&rdquo; week. The learning goals are:
      </p>
      <ul>
        <li>Submit to the App Store or Play, navigate review, and recover from a rejection if it comes.</li>
        <li>Explain the TestFlight and Play internal-testing flows for a one-person team.</li>
        <li>Apply three ASO principles to your title, subtitle, and keywords with evidence.</li>
        <li>Decide whether to be on the app stores at all — a PWA-first product is a legitimate answer.</li>
      </ul>
      <p>
        The Bloom outcomes this week are: <strong>Apply</strong> (ship the
        build), <strong>Analyze</strong> (ASO with evidence), and{" "}
        <strong>Evaluate</strong> (defend the distribution decision).
      </p>
      <p>The milestones you are targeting:</p>
      <ol>
        <li>TestFlight build live, OR Play internal-testing build live, OR PWA install prompt shipped.</li>
        <li>Title, subtitle, and keywords rewritten with ASO intent, evidence noted in your journal.</li>
        <li>Five screenshots replaced with conversion-optimized versions (first-three rule applied).</li>
        <li>Capstone scaffold started: funnel diagram, diagnosed problem, intervention candidates listed.</li>
      </ol>
      <p>The metrics you track this week:</p>
      <ul>
        <li>Conversion rate: store listing visit to install.</li>
        <li>Store search keyword rankings for your three chosen keywords.</li>
        <li>TestFlight or internal-test install count.</li>
        <li>MRR delta from any pricing or paywall changes this week.</li>
        <li>Public output count toward the 50-output course target.</li>
      </ul>

      <AnchorHeading as="h2" id="day-by-day">2. Your week, day by day</AnchorHeading>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Morning growth move (30 min)</th>
              <th>Customer hour (60 min)</th>
              <th>Build block (3.5 hrs)</th>
              <th>Measure + reflect (15 min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mon</strong></td>
              <td>Channel-sprint output + &ldquo;shipping to stores this week&rdquo; announcement</td>
              <td>Read 20 reviews of competitor apps; tag positive and negative themes</td>
              <td>Set up App Store Connect or Play Console if not already done</td>
              <td>What is the single rejection risk to fix first?</td>
            </tr>
            <tr>
              <td><strong>Tue</strong></td>
              <td>Channel-sprint output + ASO teardown of a winner in your category</td>
              <td>Watch 3 users browse the app stores via screen-share</td>
              <td>Build the release branch and TestFlight or Play internal-testing build</td>
              <td>Build successful? List failure modes.</td>
            </tr>
            <tr>
              <td><strong>Wed</strong></td>
              <td>Channel-sprint output + share new screenshots publicly for feedback</td>
              <td>Interview 2 power users about their store-listing reaction</td>
              <td>Ship 5 new screenshots</td>
              <td>Are your screenshots clearer than competitors&rsquo;?</td>
            </tr>
            <tr>
              <td><strong>Thu</strong></td>
              <td>Channel-sprint output + capstone scaffold preview post</td>
              <td>If submitted: monitor review status, prep for rejection response</td>
              <td>Submit. Start the capstone scaffold (funnel + problem + interventions)</td>
              <td>Did you submit, or are you sandbagging?</td>
            </tr>
            <tr>
              <td><strong>Fri</strong></td>
              <td>Friday recap: store submission + capstone scaffold</td>
              <td>If approved: monitor listing analytics. If rejected: respond.</td>
              <td>No new features. Tune ASO copy. Run capstone scaffold session.</td>
              <td>Are you on the stores by next Monday?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h2" id="plan-card">3. This week&rsquo;s plan card</AnchorHeading>
      <Callout title="Fill in before Monday morning">
        <p><strong>Distribution path (circle one):</strong> Apple TestFlight / Google Play internal-testing / PWA install prompt</p>
        <p><strong>The single rejection risk I will fix before submitting:</strong> ___</p>
        <p><strong>My current app title (exact):</strong> ___</p>
        <p><strong>My rewritten title (brand + keyword, under 30 chars):</strong> ___</p>
        <p><strong>Three keywords I am targeting:</strong> ___, ___, ___</p>
        <p><strong>The one metric I will check Friday to know if ASO moved:</strong> ___</p>
        <p><strong>Friction that will derail me this week:</strong> ___</p>
      </Callout>

      <AnchorHeading as="h2" id="daily-rules">4. Daily rules</AnchorHeading>
      <Callout title="Course-wide anti-traps">
        <p>The build block does not open until the morning growth move and the customer hour are done. No exceptions.</p>
        <p>Build-block scope is one sentence. If you cannot write it in one sentence, the scope is too large — split it.</p>
        <p>No new features that are not on this week&rsquo;s milestone list.</p>
        <p>Friday review is non-negotiable. Skipping it means the week did not count.</p>
        <p>If the week&rsquo;s growth move feels uncomfortable, that is evidence it is the right one.</p>
      </Callout>

      <AnchorHeading as="h2" id="app-store-review">5. How app store review works</AnchorHeading>
      <p>
        Apple and Google both review every new app and every update before it
        reaches users. Understanding the review process prevents the most
        common week-8 failure: submitting too late and losing several days to
        a rejection cycle.
      </p>

      <AnchorHeading as="h3" id="apple-review">Apple App Store review</AnchorHeading>
      <p>
        Apple&rsquo;s App Review Guidelines organize the rules into five sections.
        Each section maps to a distinct category of rejection:
      </p>
      <ul>
        <li>
          <strong>Safety (section 1):</strong> objectionable content, apps for
          kids, data collection from minors. The data safety section (1.6) has
          become more prominent since ATT. If your app collects any personal
          data, you need a privacy policy URL in App Store Connect before
          submitting.
        </li>
        <li>
          <strong>Performance (section 2):</strong> the rejection that hits solo
          founders most. Section 2.1 requires that your app be complete before
          submission — no placeholder content, no features that crash, no
          &ldquo;coming soon&rdquo; screens. Section 2.3 requires that your
          metadata (screenshots, description) accurately represent the app.
        </li>
        <li>
          <strong>Business (section 3):</strong> the IAP rules. Section 3.1.1
          requires that digital goods sold inside the app use Apple&rsquo;s
          in-app purchase system. You cannot link out to a cheaper web
          subscription or include a button that says &ldquo;subscribe on our
          website.&rdquo; The 2021 court settlement added a narrow exception
          for &ldquo;reader apps&rdquo; — apps that let users access content
          purchased elsewhere — but most solo B2C products do not qualify.
        </li>
        <li>
          <strong>Design (section 4):</strong> section 4.2 prohibits apps with
          minimum functionality (&ldquo;simple utility apps&rdquo; are fine,
          but a wrapper around a website is not). Section 4.1 prohibits copycat
          apps.
        </li>
        <li>
          <strong>Legal (section 5):</strong> privacy, IP, and gambling. Section
          5.1.1 details the privacy policy requirement. Section 5.2 prohibits
          using third-party IP without permission.
        </li>
      </ul>
      <p>
        Median review time in 2026 is approximately 24 hours. Rejections arrive
        via the Resolution Center in App Store Connect. You can appeal or respond
        directly in the same interface. Most rejections are resolvable within one
        business day if the fix is straightforward. Build one day of rejection
        buffer into your week 8 plan.
      </p>

      <AnchorHeading as="h3" id="google-review">Google Play review</AnchorHeading>
      <p>
        Google Play review is generally faster and more permissive than
        Apple&rsquo;s for new apps. For a personal developer account created
        after November 2023, however, Google now requires a closed test with
        at least 12 opted-in testers for a minimum of 14 days before you can
        publish to open testing or production. This requirement catches many
        founders off guard. If you are starting fresh on Android this week, the
        week 8 milestone is the internal-testing build, not a production launch.
      </p>
      <p>
        The Play testing tracks, from fastest to slowest:
      </p>
      <ul>
        <li>
          <strong>Internal testing:</strong> up to 100 testers, build available
          within minutes, no review required. This is the correct track for the
          week 8 milestone.
        </li>
        <li>
          <strong>Closed testing (alpha):</strong> up to 2,000 testers per list,
          Google review required (approximately 24 hours). Required before
          production for personal accounts post-November 2023.
        </li>
        <li>
          <strong>Open testing (beta):</strong> discoverable on Google Play,
          unlimited testers. Requires passing closed testing first.
        </li>
      </ul>
      <p>
        A practical detail with real MRR consequences: Google Play involuntary
        churn runs at 28% versus 14% on iOS (RevenueCat, Tideman, 2025). Google
        Play&rsquo;s billing infrastructure retries failed payments fewer times
        than Apple before canceling a subscription. If you are building on
        Android, implement grace periods and a dunning notification sequence
        from day one.
      </p>

      <AnchorHeading as="h2" id="testflight-pipeline">6. The TestFlight and Play internal-testing pipeline</AnchorHeading>
      <p>
        <strong>TestFlight</strong> distributes pre-release iOS builds to up to
        10,000 external testers. Internal testers (people in your App Store
        Connect team) get the build within 30 minutes of upload. External testers
        require a brief review by Apple before they can access the build.
      </p>
      <p>
        The practical flow for a one-person team: archive your Xcode build, upload
        to App Store Connect, add yourself as an internal tester, and confirm
        the build installs cleanly on a physical device. Then add one or two
        external testers from your user base. The external tester link can be
        shared publicly — it is a URL that takes any iOS user to a TestFlight
        install page. Use this for your week 8 public output: post the TestFlight
        link on your chosen channel and log any feedback from the first ten
        installs.
      </p>
      <p>
        <strong>Play internal testing</strong> is faster. You upload a signed
        Android App Bundle (.aab), create an internal test, add testers by
        email or generate a link, and the build is live within minutes. No
        review required. The section this week walks through each step in
        numbered detail for both paths.
      </p>

      <AnchorHeading as="h2" id="pwa-install">7. The PWA-first alternative</AnchorHeading>
      <p>
        A <strong>PWA install prompt</strong> lets users add your web app to
        their home screen directly from the browser, bypassing both stores. This
        is not a lesser option — for web-first products, it eliminates the 30%
        store commission, removes the review delay from your release cycle, and
        lets you iterate on pricing and paywalls without an approval gate.
      </p>
      <p>
        The browser fires the <code>BeforeInstallPromptEvent</code> when your
        app meets three criteria: served over HTTPS, a valid web app manifest
        (with <code>name</code>, <code>icons</code>, <code>start_url</code>,
        and <code>display: standalone</code> or <code>minimal-ui</code>), and
        a registered service worker. Once the event fires, you intercept it and
        show your own install button at a contextually appropriate moment (MDN
        Web Docs, 2025).
      </p>
      <pre>{`// Intercept the event before the browser shows its default prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Show your own install button when the user reaches the aha moment
  showInstallUI();
});

// Trigger on user gesture
installButton.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') analytics.track('pwa_installed');
  deferredPrompt = null;
});`}</pre>
      <p>
        One important caveat: the <code>BeforeInstallPromptEvent</code> API is
        Chrome-only (and Chromium-based browsers). Safari on iOS does not fire
        this event. iOS users must use Safari&rsquo;s share menu and
        &ldquo;Add to Home Screen&rdquo; manually. Implement a separate iOS
        onboarding banner that explains this flow for Safari users. Test on a
        real iOS device — the flow is less smooth than Android, but it works.
      </p>
      <p>
        The honest trade-off: without store presence, you rely entirely on
        search, paid channels, and word of mouth for discovery. If your
        <strong>wedge-channel</strong> is organic App Store search, a PWA
        makes that channel unavailable. If your wedge channel is SEO, referral,
        or paid social, a PWA is at least as good as a store listing and
        substantially more profitable.
      </p>

      <AnchorHeading as="h2" id="aso">8. ASO: what actually moves rankings</AnchorHeading>
      <p>
        <strong>App Store Optimization (ASO)</strong> is the practice of
        improving your store listing so it ranks higher in search results and
        converts more listing visitors to installs. The two levers are ranking
        (discoverability) and conversion (the listing itself). Most founders
        conflate them; they are separate problems with separate tools.
      </p>

      <AnchorHeading as="h3" id="title-keywords">Title, subtitle, keywords</AnchorHeading>
      <p>
        The app name carries the strongest ranking weight in both stores
        (RevenueCat ASO guide, Kriebernegg, 2022). The practical implication:
        the 30 characters of your app name are the most valuable ASO real
        estate you own. The pattern that works is <code>BrandName: Primary Keyword</code>{" "}
        — for example, &ldquo;Streaks: Habit Tracker&rdquo; or &ldquo;Copilot:
        Budget &amp; Finance.&rdquo; The colon or pipe separates brand identity
        from keyword signal.
      </p>
      <p>
        The App Store subtitle (30 characters) is the second-highest ranking
        field. Use it for a secondary keyword that does not appear in the title.
        The keywords field (100 characters, comma-separated) holds additional
        terms the algorithm indexes but users never see. Do not repeat any word
        already in the title or subtitle — the algorithm ignores duplicates, and
        you waste character budget (AppFollow ASO Title Playbook, 2026).
      </p>
      <p>
        On Google Play, there is no separate keywords field. The short
        description (80 characters) and the full description are both indexed.
        Weave your primary and secondary keywords into prose naturally — the
        Play algorithm penalizes keyword stuffing that reads as unnatural.
      </p>
      <p>
        Choosing the right keywords requires knowing which volume tier to target.
        Apple Search Ads exposes a search popularity score for each keyword
        (0-100). The TrySonar guide (2026) identifies the productive range as
        20-55: real users are searching these terms, but major apps with large
        ASO budgets have not saturated them. A score below 20 means too few
        users search the term; a score above 55 means you are competing against
        established category leaders for every impression.
      </p>

      <AnchorHeading as="h3" id="screenshots-aso">Screenshots: the highest-leverage CRO element</AnchorHeading>
      <p>
        Screenshots are the most critical conversion rate optimization element
        in a store listing (RevenueCat ASO guide, 2022). When a user searches
        for a term on the App Store, they see your app name, icon, and the first
        three screenshots in a row before they decide to tap or scroll. This is
        the <strong>first-three rule</strong>: those three frames do the work
        of a landing page hero section (AppFollow ASO Title Playbook, 2026).
      </p>

      <Mermaid
        alt="Screenshot slot attention diagram: slots 1-3 visible in search, slots 4-10 require tap"
        chart={`flowchart LR
  A["Screenshot 1\\nHero promise"] --> B["Screenshot 2\\nAha moment"] --> C["Screenshot 3\\nSocial proof"]
  C -->|"User must tap 'See all'"| D["Screenshots 4-10\\nFeature detail"]
  style A fill:#4f46e5,color:#fff
  style B fill:#4f46e5,color:#fff
  style C fill:#4f46e5,color:#fff
  style D fill:#94a3b8,color:#fff`}
      />

      <p>
        The two failure modes for screenshots are feature labels and demo screens.
        A feature label names what the app has: &ldquo;Dark mode,&rdquo;
        &ldquo;Offline support,&rdquo; &ldquo;Push notifications.&rdquo; These
        tell the user what you built, not why they should care. The better frame
        is a benefit caption: the outcome the user gets from that feature in their
        specific context. &ldquo;Works the way your eyes do at 11pm&rdquo;
        converts better than &ldquo;Dark mode.&rdquo;
      </p>
      <p>
        A demo screen is a screenshot of the UI with no caption. It assumes the
        user already knows what they are looking at. Most users do not. Write a
        one-line caption on every screenshot. If you remove the caption and the
        screenshot still communicates a clear benefit, the screenshot is strong.
        If it becomes ambiguous without the caption, redesign the visual.
      </p>

      <AnchorHeading as="h2" id="app-store-featuring">9. App Store featuring: what you can and cannot control</AnchorHeading>
      <p>
        Both Apple and Google maintain editorial teams that feature apps in
        curated collections. A feature can produce thousands of installs in a
        single day. Founders sometimes treat this as a goal to engineer toward.
        The honest framing: featuring is a reward for good execution, not a
        strategy you can reliably plan around.
      </p>
      <p>
        What increases the probability of featuring:
      </p>
      <ul>
        <li>
          Shipping support for a new Apple platform API in the same release Apple
          promotes it. The editorial team features apps that showcase new
          capabilities (Live Activities, WidgetKit, SharePlay). The window is
          narrow: ship within the first few weeks of an API&rsquo;s availability.
        </li>
        <li>
          A clean, well-designed listing that follows platform design guidelines.
          Apple editors review your screenshots and description before selecting.
          A listing full of feature labels and generic screenshots does not get
          featured regardless of the app&rsquo;s quality.
        </li>
        <li>
          A direct pitch to the editorial team. Apple provides a form in App Store
          Connect (&ldquo;Promote Your App&rdquo;) for requesting featuring
          consideration. Fill it in with a concrete story about who uses the app
          and what changed for them. Tony Dinh (BlackMagic, Wins, XWord) has
          written about this pattern: ship the new API fast, write the story,
          submit the form (RevenueCat ASO guide, 2022 — citing Dinh&rsquo;s
          public blog posts).
        </li>
      </ul>
      <p>
        What you cannot control: whether the editorial team agrees with your
        pitch, their scheduling, regional featuring decisions, or changes to the
        App Store&rsquo;s featured section design. Treat any featuring as a bonus,
        not a dependency in your growth model.
      </p>

      <AnchorHeading as="h2" id="asa-basics">10. Apple Search Ads basics for indie budgets</AnchorHeading>
      <p>
        <strong>Apple Search Ads (ASA)</strong> places your app at the top of
        App Store search results for keywords you bid on. Seventy percent of
        App Store visitors use search to find apps (TrySonar, 2026). ASA gives
        you direct access to that traffic. The question for a solo founder is
        not whether ASA works — it does — but whether your paywall converts
        well enough to make the economics positive.
      </p>
      <p>
        The measurement framework is straightforward: ASA cost per install (CPI)
        divided into revenue per install (RPI) from the same cohort. If your CPI
        is $2.00, your trial-to-paid rate is 10%, and your annual subscription
        price is $29.99, your RPI is $3.00. The campaign is profitable. If your
        trial-to-paid rate is 2% (the median for freemium apps, per RevenueCat
        State of Subscription Apps 2025), your RPI is $0.60 against a $2.00
        CPI. Scale that and you lose money faster. Fix the paywall first.
      </p>
      <p>
        For a founder running a $5-50/day budget, the TrySonar guide (2026)
        recommends this campaign structure:
      </p>
      <ol>
        <li>
          <strong>Brand campaign (exact match, ~$1/day).</strong> Bid on your
          own app name. This prevents competitors from appearing above you when
          someone searches for you by name. CPI is almost always very low because
          the intent is already yours.
        </li>
        <li>
          <strong>Discovery campaign (search match on, $5-10/day).</strong> Let
          Apple&rsquo;s algorithm show your ad for relevant terms. After 7 days,
          review the search terms report and promote converting terms to exact
          match. Add non-converting terms as negatives.
        </li>
        <li>
          <strong>Keyword campaign (exact match on best terms, $20-50/day).</strong>{" "}
          Once you know which 5-10 keywords convert, run them at exact match
          with controlled bids. Target search popularity scores 20-55 where
          you are not competing with major companies.
        </li>
      </ol>
      <p>
        After 4-6 weeks, pause the campaigns and monitor organic keyword
        ranking. ASA spend builds organic momentum: the algorithm treats
        paid install volume as a signal of relevance and lifts organic rankings
        for those keywords. This is the cyclical strategy: spend, pause, measure
        organic lift, repeat.
      </p>

      <AnchorHeading as="h2" id="aso-case-study">11. ASO in practice: a before-and-after</AnchorHeading>
      <p>
        The AppFollow ASO Title Playbook (2026) documents a recurring pattern in
        competitive keyword analysis: apps that add a primary keyword to their
        title see organic search impressions increase within two to four weeks of
        the change. The playbook provides a methodology for measuring this: record
        your keyword rank for three target terms before the title change, then
        check ranks at the two-week and four-week marks.
      </p>
      <p>
        A representative before-and-after from the playbook&rsquo;s examples:
      </p>
      <pre>{`Before:
  App name: "Voca"
  Subtitle: "The vocabulary app"
  Keyword ranking for "language learning": unranked
  Keyword ranking for "vocabulary quiz": position 28

After (title rewrite: "Voca: Language Vocabulary"):
  App name: "Voca: Language Vocabulary"
  Subtitle: "Quiz, flashcards, daily words"
  Keyword ranking for "language learning": position 14
  Keyword ranking for "vocabulary quiz": position 9
  Keyword ranking for "vocabulary flashcards": position 11`}</pre>
      <p>
        Three weeks after the title change, the app gained 18 new keyword
        rankings in the top 20 for terms related to language learning and
        vocabulary. The subtitle added three additional indexed terms without
        duplicating any word from the name. The keyword field was repopulated
        to remove all words already present in the name or subtitle.
      </p>
      <p>
        Notice what did not change: the icon, the screenshots, the description,
        and the price. A title change alone produced measurable ranking movement
        in under a month with zero paid spend. That is the efficiency argument
        for prioritizing the title before anything else.
      </p>

      <AnchorHeading as="h2" id="capstone-scaffold">12. Friday: capstone scaffold (60 min)</AnchorHeading>
      <p>
        The capstone scaffold is a structured 60-minute session you run this
        Friday to aim the final two weeks of the course at a specific, measurable
        growth problem. The output is not a finished plan — it is a document with
        enough specificity that you can execute against it in weeks 9 and 10
        without re-scoping from scratch.
      </p>
      <p>
        The session has five prompts. Work through them in order. Do not skip
        ahead. Each prompt builds on the previous one.
      </p>
      <ol>
        <li>
          <strong>Funnel diagram (10 min).</strong> Draw your current AARRR
          funnel with real numbers from the last 30 days. Label each stage:
          acquisition (new visitors or new signups), activation (hit the
          aha-moment), retention (returned at D7 or D30), revenue (paid
          conversion or upgrade), referral (net new users from existing users).
          Write the conversion rate between each adjacent pair of stages. No
          estimates — use your actual analytics. If you do not have numbers for
          a stage, write &ldquo;unknown&rdquo; and plan to instrument it next
          week.
        </li>
        <li>
          <strong>Problem quadrant candidate (10 min).</strong> Look at the
          funnel. Find the stage where the biggest volume is leaking. The leak
          is the ratio of users entering a stage divided by users who reach the
          next stage. If 100 users activate but only 8 pay, the
          activation-to-revenue conversion is 8% — that is likely the biggest
          leak. Name it in one sentence: &ldquo;My biggest funnel problem is
          [stage], where I lose [X]% of users.&rdquo; This is your problem
          quadrant candidate. Use the concepts from your weeks 1-7 toolkit:
          is this a retention problem (<strong>d30-retention</strong>), a
          paywall problem (<strong>trial-mechanics</strong>), an activation
          problem (<strong>activation-rate</strong>), or a channel mismatch
          (<strong>wedge-channel</strong>)?
        </li>
        <li>
          <strong>Intervention candidates (15 min).</strong> List three to five
          specific interventions you could run in weeks 9 and 10 to move the
          number at the leaky stage. Each intervention needs: a verb + noun
          description (what you will do), a predicted direction of effect (which
          metric you expect to move and which way), and an effort estimate in
          hours. Do not list interventions for other stages — stay focused on the
          problem you named in prompt 2.
        </li>
        <li>
          <strong>Measurement design draft (15 min).</strong> For each
          intervention candidate, write a measurement plan. What is your control
          condition (what you are comparing against)? What is the metric you will
          read? How many days will you run the intervention before concluding?
          Use the sample-size and p-hacking concepts from week 5. If you cannot
          run a proper A/B test with your current traffic, describe the minimum
          viable measurement: a before-after comparison with a one-week window
          is better than no measurement at all.
        </li>
        <li>
          <strong>Rollback criteria draft (10 min).</strong> For each
          intervention, write the condition under which you would stop and
          revert. A rollback criterion is not &ldquo;if it doesn&rsquo;t
          work&rdquo; — that is too vague. A rollback criterion is a specific
          number or event: &ldquo;If D7 retention drops below X% in the first
          week of running this, I will revert.&rdquo; Or: &ldquo;If trial
          starts fall by more than 15% versus the prior week, I will revert.&rdquo;
          Use the <strong>kill-switch</strong> and{" "}
          <strong>feature-flag</strong> infrastructure you built in weeks 5-6 to
          make rollback operationally easy.
        </li>
      </ol>
      <p>
        At the end of the 60 minutes you should have a one-page document (or
        equivalent notes) that names your top funnel problem, three to five
        intervention candidates, a measurement design for each, and rollback
        criteria. This document is the input to the week 9 section and the
        foundation for your capstone deliverable in week 10.
      </p>
      <p>
        One timing note: the capstone scaffold is not a performance. It is a
        thinking tool. If your funnel diagram reveals that all your stages are
        healthy, the problem is acquisition volume, not conversion rate — that
        is a valid finding, and your interventions should address channel
        scaling rather than funnel optimization.
      </p>

      <AnchorHeading as="h2" id="exercises">13. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Open the Apple App Store Review Guidelines and read section 2
          (Performance) and section 3.1.1 (Payments). List the two rules most
          likely to affect your app given its current feature set and
          monetization model. For each rule, write a one-sentence plan for
          staying inside it. If you are on the PWA path, read the MDN
          installability criteria instead and confirm your app meets all three.
          (Outcome: Evaluate)
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Take your current app title. Apply the AppFollow title formula:
          brand name + separator + primary keyword, 30 characters maximum.
          Run your primary keyword candidate through the Apple Search Ads
          keyword planner. Record the search popularity score. Is it in the
          20-55 range? If not, name two alternative keywords and check their
          scores. Write the final title you will ship this week and one sentence
          explaining your keyword choice. (Outcome: Analyze)
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write captions for your first three screenshots using benefit framing.
          Each caption should describe the outcome the user experiences, not the
          feature name. Then apply the &ldquo;remove the caption&rdquo; test:
          if you removed the caption, would the screenshot alone communicate a
          clear benefit? If not, describe how you would redesign the visual.
          (Outcome: Apply)
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Run the capstone scaffold prompts 1 and 2 right now, before Thursday&rsquo;s
          full session. Draw the funnel with real numbers. Name the leaky stage.
          Write the problem quadrant candidate in one sentence. Bring this to
          Thursday&rsquo;s build block and extend it with prompts 3-5. (Outcome:
          Analyze)
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Make the distribution decision in writing. Answer three questions: (1)
          Does your app&rsquo;s monetization model work better with store IAP or
          your own payment processor? (2) Is your wedge channel App Store search,
          or is it SEO, referral, or paid social? (3) How much does a 3-7 day
          review cycle slow your planned iteration rate? Based on your answers,
          write a one-paragraph defense of your chosen path (Apple, Google, or
          PWA). (Outcome: Evaluate)
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">14. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> Walk through the three distribution
          paths step by step. Non-negotiable milestone: ship before you leave.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> App store mechanics in depth:
          review guidelines, IAP rules, the TestFlight and Play internal-testing
          pipelines, and the PWA-first decision framework.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> ASO and screenshots: the
          title-subtitle-keyword system, the first-three rule, featuring, and
          Apple Search Ads for indie budgets.
        </li>
        <li>
          <strong>HW 4 (Retention engine) — due this week.</strong> Separate
          from the store submission milestone. Confirm deadlines in the syllabus.
        </li>
        <li>
          <strong>Week 9 preview.</strong> Lifecycle messaging and referral loops.
          The week 9 interventions build on the capstone scaffold you produce
          this Friday.
        </li>
      </ul>

      <Takeaways>
        <li>
          Apple review rejects on five dimensions (Safety, Performance, Business,
          Design, Legal). The rejection most likely to hit a solo founder is
          section 2.1 (incomplete app) or section 3.1.1 (bypassing IAP). Know
          the rules before you submit.
        </li>
        <li>
          Google Play internal testing is available within minutes with no review
          required — use it for the week 8 milestone. Personal accounts created
          after November 2023 need 12 closed testers before production access.
        </li>
        <li>
          The app name carries the strongest ASO ranking weight. Spend your 30
          characters on brand plus one primary keyword in the 20-55 search
          popularity range.
        </li>
        <li>
          The first three screenshots function as a landing page hero. Write
          benefit captions (outcomes, not feature labels) and test whether the
          visual communicates without the caption.
        </li>
        <li>
          The Friday capstone scaffold is the most important 60 minutes of the
          week. A funnel diagram with real numbers, a named problem, three
          intervention candidates, and rollback criteria sets up weeks 9 and 10
          to compound instead of improvise.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Apple. &ldquo;App Review Guidelines.&rdquo; 2026.{" "}
          <a href="https://developer.apple.com/app-store/review/guidelines/">
            developer.apple.com/app-store/review/guidelines/
          </a>.
          The authoritative reference for all five review categories. Read
          sections 2 and 3 before every submission.
        </p>
        <p>
          AppFollow team. &ldquo;App Store Optimization Title: 2026 ASO Title Playbook.&rdquo; 2026.{" "}
          <a href="https://appfollow.io/blog/app-store-optimization-title">
            appfollow.io/blog/app-store-optimization-title
          </a>.
          Character limits, keyword placement strategy, A/B methodology, and the
          first-three rule with competitive analysis methodology.
        </p>
        <p>
          Google. &ldquo;Set up an open, closed, or internal test.&rdquo; 2026.{" "}
          <a href="https://support.google.com/googleplay/android-developer/answer/9845334?hl=en">
            support.google.com/googleplay/android-developer/answer/9845334
          </a>.
          Official guide to Play testing tracks. Internal track: up to 100 testers,
          available within minutes, no review required.
        </p>
        <p>
          Kriebernegg, Thomas (RevenueCat). &ldquo;A practical guide to app store
          optimization.&rdquo; 2022.{" "}
          <a href="https://www.revenuecat.com/blog/growth/app-store-optimization-guide/">
            revenuecat.com/blog/growth/app-store-optimization-guide/
          </a>.
          Title carries the strongest ranking weight; screenshots are the most critical
          CRO element; covers both stores plus localization and A/B testing.
        </p>
        <p>
          MDN Web Docs (Mozilla). &ldquo;Trigger installation from your PWA.&rdquo; 2025.{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt">
            developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt
          </a>.
          BeforeInstallPromptEvent API, installability criteria, and how to intercept
          the browser&rsquo;s default prompt.
        </p>
        <p>
          Peter (trysonar.app). &ldquo;Apple Search Ads: The Complete Guide for Indie
          Developers.&rdquo; 2026.{" "}
          <a href="https://trysonar.app/blog/apple-search-ads-guide">
            trysonar.app/blog/apple-search-ads-guide
          </a>.
          $5-50/day campaign structure, keyword score targeting (20-55), and the
          cyclical spend-pause-measure strategy.
        </p>
        <p>
          RevenueCat. &ldquo;State of Subscription Apps 2025.&rdquo; 2025.{" "}
          <a href="https://www.revenuecat.com/state-of-subscription-apps-2025/">
            revenuecat.com/state-of-subscription-apps-2025/
          </a>.
          Benchmarks from 115,000+ apps: trial-to-paid 6.2% median, 20.3% top quartile;
          hard paywall 12.11% vs freemium 2.18%.
        </p>
        <p>
          Tideman, Daphne (RevenueCat). &ldquo;Churn in subscription apps: top 5
          cancellation reasons (and what to do about them).&rdquo; 2025.{" "}
          <a href="https://www.revenuecat.com/blog/growth/subscription-app-churn-reasons-how-to-fix/">
            revenuecat.com/blog/growth/subscription-app-churn-reasons-how-to-fix/
          </a>.
          Google Play involuntary churn at 28% vs 14% iOS; grace periods and retry
          strategies.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk08ReadingSearchBody =
  "app store mechanics Apple review guidelines TestFlight Play internal testing ASO app store optimization title subtitle keywords character limit ranking weight screenshots first-three rule benefit framing featuring indie apps localization Apple Search Ads ASA indie budget CPI PWA install prompt BeforeInstallPromptEvent service worker manifest HTTPS installability distribution decision capstone scaffold funnel diagram problem quadrant intervention candidates measurement design rollback criteria kill-switch feature-flag reading Week 8";
