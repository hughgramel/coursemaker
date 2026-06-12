import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk09SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="draft-and-survive">
        Section: Draft the posts, pre-mortem the objections
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 9 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have: a drafted Reddit post and a
        drafted Show HN post, each with a tagged URL; a written answer to the
        ten most hostile comments either post will receive; and a passing
        must-work checklist run on your current production build. You will not
        press submit today. The posts go live only after the retention gate
        clears.
      </p>

      <AnchorHeading as="h2" id="retrieval-drill">
        Part 1: Retrieval drill (5 minutes)
      </AnchorHeading>

      <p>
        Answer these from memory before opening any notes. Write your answers
        in your founder journal. You will check them against the week 8 reading
        after the drill.
      </p>

      <ol>
        <li>
          <strong>The subscriber math.</strong> LangoBee's pricing is $7.99/month
          or $49/year. How many paying subscribers at those prices produce exactly
          $10,000 MRR? Show the calculation for each plan separately. (If you do
          not remember the exact price, use the number you recorded in week 8.)
        </li>
        <li>
          <strong>The churn ceiling.</strong> If LangoBee acquires 50 new
          subscribers per month and monthly churn is 8%, what is the maximum MRR
          the business can reach before new subscribers and lost subscribers
          cancel each other out? State the formula and the number.
        </li>
        <li>
          <strong>Why the churn ceiling matters for launch timing.</strong> In
          one sentence: if you drive a surge of new signups from a Reddit post
          into a product with an 8% monthly churn rate, what happens to MRR in
          month 4? You do not need to calculate; state the direction and the
          reason.
        </li>
      </ol>

      <p>
        Check your answers against your week 8 notes. If any answer was wrong,
        write the correct formula before moving to Part 2. The churn ceiling
        concept is load-bearing for everything that follows.
      </p>

      <AnchorHeading as="h2" id="must-work-checklist">
        Part 2: Must-work checklist re-run (interleave from week 3)
      </AnchorHeading>

      <p>
        The must-work checklist from week 3 is a launch precondition. Run it
        now, on a private browser window on a mobile device (or a mobile
        emulator), from the production URL, as a brand-new user. Complete every
        step in order. Do not skip steps because you have run them before.
      </p>

      <ol>
        <li>
          Open <code>https://langobee.com</code> in a fresh private window.
          Time how long it takes for the first above-the-fold content to render.
          Write the number. Target: under 3 seconds on a throttled mobile connection.
        </li>
        <li>
          Find and tap the primary call to action on the landing page. Does it
          lead directly to either a tryout experience or a signup form? Record
          what you see.
        </li>
        <li>
          Complete the signup flow as a new user. Count the number of steps
          between pressing "Get started" and reaching the first Spanish video or
          text. Write the count.
        </li>
        <li>
          Tap one word in the first Spanish text or video you land on. Does the
          word popup appear? Does it show a definition? Does tapping mark the
          word as learning? Confirm all three.
        </li>
        <li>
          Check the rageclicks signal. In PostHog, open the session recording for
          your test session. Did you trigger any rageclicks during the flow? Note
          any friction you felt.
        </li>
        <li>
          <strong>Pass/fail gate.</strong> The checklist passes only if: (a)
          load time under 3 seconds, (b) CTA leads to a tryout or signup, (c)
          first word tap shows a definition, (d) zero confusing dead-ends in the
          flow. If any step fails, record the failure and pause the launch
          sequence until it is fixed. Do not proceed to Part 3 until the
          checklist passes.
        </li>
      </ol>

      <AnchorHeading as="h2" id="community-ranking">
        Part 3: Rank the four communities by channel fit
      </AnchorHeading>

      <p>
        Score each community on three dimensions. Use the community data in
        the course materials. Write your scores and the one-sentence rationale
        for each.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9em",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Community
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Audience overlap (1-5)
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Self-promo norms (1-5)
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Prior tool reception (1-5)
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              "r/languagelearning",
              "r/Spanish",
              "r/dreamingspanish",
              "Show HN",
            ].map((community) => (
              <tr key={community}>
                <td
                  style={{
                    padding: "6px 10px",
                    borderBottom: "1px solid #ddd",
                    fontWeight: 600,
                  }}
                >
                  {community}
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  ___
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  ___
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  ___
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  ___
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        After scoring, write the launch order: which community gets the first
        post, which gets the second, which requires the karma runway first. One
        sentence of reasoning per community.
      </p>

      <AnchorHeading as="h2" id="draft-reddit-post">
        Part 4: Draft the Reddit post
      </AnchorHeading>

      <p>
        Write the Reddit post for the community you ranked highest that can
        accept a post today (before karma is built). r/dreamingspanish is
        the likely candidate. Follow the structure below exactly.
      </p>

      <ol>
        <li>
          <strong>Title.</strong> State a problem or observation, not a product
          announcement. The title must not contain the word "launch" or "check
          out." Aim for: something a learner in that community would recognize as
          describing their own experience.
        </li>
        <li>
          <strong>First paragraph.</strong> Tell the story of why you built this.
          One or two sentences about your own experience as a comprehensible-input
          learner. No product features yet.
        </li>
        <li>
          <strong>Second paragraph.</strong> Describe the product in terms of
          what it does for the learner, not what the technology does. "Every word
          you tap gets tracked so you know your comprehension going in" is better
          than "word-level status tracking with a per-text comprehension score."
        </li>
        <li>
          <strong>Third paragraph.</strong> The ask. State explicitly what kind
          of feedback you want. "Does the difficulty matching feel right for your
          level?" is a real ask. "Let me know what you think" is not.
        </li>
        <li>
          <strong>Tagged URL.</strong> End with the URL carrying the correct UTM
          parameters for this community (from Part 6 below). Do not use a bare
          domain.
        </li>
      </ol>

      <p>
        Write the full draft in your founder journal. Then read it aloud. If any
        sentence sounds like a press release, delete it and replace it with what
        a learner would say to a friend.
      </p>

      <AnchorHeading as="h2" id="draft-show-hn">
        Part 5: Draft the Show HN post
      </AnchorHeading>

      <ol>
        <li>
          <strong>Title.</strong> Format: "Show HN: LangoBee -- [one-sentence
          description that contains a concrete differentiator]." The description
          must name what LangoBee does differently from LingQ or Duolingo in
          plain language.
        </li>
        <li>
          <strong>Top comment.</strong> Write the comment you will post
          immediately after submitting. It must contain: (a) a link with no
          signup required, or with a clear one-tap demo path; (b) the honest
          stage you are at (number of real users, MRR); (c) the specific thing
          you want feedback on. Three paragraphs maximum.
        </li>
        <li>
          <strong>Demo path check.</strong> Confirm that the URL you will link
          lands a visitor on a playable Spanish video with no signup wall. If
          your current product requires an account before a word can be tapped,
          you either need a demo mode or you need to defer Show HN until demo
          mode exists. Record the answer: demo mode exists (yes/no), demo URL:
          ____________.
        </li>
      </ol>

      <AnchorHeading as="h2" id="utm-tags">
        Part 6: Build the UTM tag set
      </AnchorHeading>

      <p>
        For each of the four communities, build the tagged URL. Use the
        parameter standard from the Lecture 2 slides. Paste each URL into your
        founder journal and confirm it resolves to the correct landing page.
      </p>

      <pre>{`utm_source = hackernews | reddit
utm_medium = community
utm_campaign = wk09-show-hn | wk09-r-ll | wk09-r-spanish | wk09-r-ds

Example:
https://langobee.com?utm_source=reddit&utm_medium=community&utm_campaign=wk09-r-ds`}</pre>

      <p>
        After building all four URLs, open the PostHog Acquisition dashboard and
        confirm it is recording source data. You will check this dashboard 7 days
        after each post goes live.
      </p>

      <AnchorHeading as="h2" id="premortem">
        Part 7: Pre-mortem the top ten hostile comments
      </AnchorHeading>

      <p>
        List the ten most likely hostile or skeptical comments your posts will
        receive. For each one, write the response you will give. The response
        must be: honest (do not dispute a true criticism), specific (not
        "thanks for the feedback"), and forward-pointing (what will change, or
        why the criticism does not apply).
      </p>

      <p>
        Use these ten as your starting list. Add any others that are specific
        to the community you are targeting.
      </p>

      <ol>
        <li>
          <strong>"Another subscription app. Why would I pay when LingQ exists?"</strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: LingQ charges $12.99/month and does not have a curated
            vertical feed of short-form CI content. Name the specific
            difference, not the general category difference.
          </em>
        </li>
        <li>
          <strong>"LingQ already does this. What's different?"</strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: word-level status tracking is a feature LingQ has. The
            specific differentiator is the comprehension score before you start
            a video, plus the shorts feed of native CI content. Name those.
          </em>
        </li>
        <li>
          <strong>"Why is there no free tier? This looks like a cash grab."</strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: the honest answer includes why premium-only was the design
            decision and what the trial looks like. Do not be defensive about
            pricing; explain the reasoning.
          </em>
        </li>
        <li>
          <strong>"The catalog is just YouTube embeds. I can use YouTube directly."</strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: the difference is word-level comprehension tracking as you
            watch, not the video source. A learner who uses YouTube directly
            does not know what percentage of words they understood. Name that.
          </em>
        </li>
        <li>
          <strong>"The app doesn't work on iOS / Firefox / [specific browser]."</strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: thank them, confirm the specific failure, state whether it is
            a known issue or a new one, and give a timeline. Do not minimize.
          </em>
        </li>
        <li>
          <strong>"I tried it for 5 minutes and the word popup didn't work."</strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: this is a must-work checklist failure. Ask for the device and
            browser, reproduce it, fix it same day if possible. The 223
            rageclicks/30d in PostHog mean this is a real pattern.
          </em>
        </li>
        <li>
          <strong>
            "Why would I use this instead of Dreaming Spanish's own platform?"
          </strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: Dreaming Spanish's platform does not track word-level status.
            LangoBee is designed for learners who want to know exactly what
            they know before they watch. Name the comprehension score.
          </em>
        </li>
        <li>
          <strong>"The Spanish catalog is biased toward one accent / region."</strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: the catalog has 8,310 Spanish texts from 2,773 creators.
            Acknowledge if this is true and describe how creators are selected.
            If you do not know the regional breakdown, say so honestly.
          </em>
        </li>
        <li>
          <strong>
            "I signed up and got a credit card prompt immediately. No thanks."
          </strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: the current paywall design requires a credit card for the
            14-day trial. This is a known friction point. Either explain the
            reasoning or commit to a design change. Do not dismiss the objection.
          </em>
        </li>
        <li>
          <strong>"Is this actually maintained? The last update was X months ago."</strong>
          <br />
          Response draft: ___________________________________________________
          <br />
          <em>
            Hint: you ship regularly. Name one specific thing that shipped in
            the last 30 days. The shorts feed, the watch-next ranker, the
            comprehension score -- any of these work.
          </em>
        </li>
      </ol>

      <AnchorHeading as="h2" id="retention-gate-check">
        Part 8: Retention gate check
      </AnchorHeading>

      <p>
        Before any launch post goes live, both of these must be true. Check them
        now and record the result.
      </p>

      <ol>
        <li>
          <strong>Cohort retention check.</strong> Open PostHog. Pull the most
          recent cohort week with at least 10 real users (excluding bots and your
          own accounts). What is the day-7 return rate for that cohort? Write the
          number. Is it above 30%?
          <br />
          Result: _____________________ Pass / Fail (circle one)
        </li>
        <li>
          <strong>Must-work checklist.</strong> Did Part 2 above produce a full
          pass (all six steps clear)?
          <br />
          Result: Pass / Fail (circle one)
        </li>
      </ol>

      <p>
        If both pass: the posts drafted in Parts 4 and 5 are ready to submit.
        Schedule the Show HN post for a Tuesday through Thursday between 8 AM
        and 11 AM US Eastern time (peak HN traffic window).
      </p>

      <p>
        If either fails: record the specific gap, add it to your week's build
        priority, and re-run this checklist before submitting.
      </p>

      <AnchorHeading as="h2" id="self-grading">
        Self-grading rubric
      </AnchorHeading>

      <p>
        Score yourself on each item. Total of 10 points. A score of 7 or above
        means the session was complete.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.9em",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Item
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Points
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                }}
              >
                Your score
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Retrieval drill: all three week 8 answers correct or self-corrected", "1"],
              ["Must-work checklist: all six steps completed and result recorded", "1"],
              ["Community ranking table: all four communities scored with rationale", "1"],
              ["Reddit post draft: complete, title does not contain 'launch' or 'check out', tagged URL present", "2"],
              ["Show HN draft: title in correct format, top comment has honest stage + demo link", "2"],
              ["UTM tag set: all four tagged URLs built and confirmed resolving", "1"],
              ["Pre-mortem: all ten hostile comments have a written response draft", "1"],
              ["Retention gate check: both conditions checked and result recorded", "1"],
            ].map(([item, points]) => (
              <tr key={item}>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  {item}
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  {points}
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  ___
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        If your score is below 7: identify which items you did not complete and
        finish them before the end of the day. The pre-mortem and the must-work
        checklist are the two items most commonly skipped and most consequential
        to skip. Do not post without them.
      </p>
    </>
  );
}

export const wk09SectionSearchBody =
  "community launch Reddit Show HN draft post pre-mortem hostile comments UTM tags must-work checklist retention gate channel fit ranking r/languagelearning r/Spanish r/dreamingspanish Hacker News burn risk retrieval drill churn ceiling subscriber math week 9 section worksheet";
