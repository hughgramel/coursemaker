import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk03SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="run-the-checklist">
        Section: Run the must-work checklist
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 3 &middot; Hands-on worksheet</p>

      <p>
        By the end of this section you will have run LangoBee&rsquo;s must-work checklist on a
        real phone and a real laptop, filed every defect you found as a GitHub issue, and written
        the first draft of a 60-second guided first session. You will also have located, in
        PostHog, the specific moment where the 34-second median session ends.
      </p>

      <p>
        Work on the live production app at langobee.com throughout. Do not use localhost. The
        checklist must reflect what your actual users experience today.
      </p>

      <AnchorHeading as="h2" id="retrieval-drill">
        Part 0: 5-minute retrieval drill (week 2 concepts)
      </AnchorHeading>

      <p>
        Answer these from memory before opening any notes. Write your answers in your founder
        journal. You have five minutes.
      </p>

      <ol>
        <li>
          What is the difference between a pivot and a zoom-in pivot? Give a one-sentence
          definition of each and name the lever that a zoom-in pivot touches.
        </li>
        <li>
          Week 2 introduced kill thresholds as pre-committed state-plus-date conditions. Write
          LangoBee&rsquo;s current kill threshold for the premium-only thesis in the format:
          &ldquo;If [metric] does not reach [number] by [date], we [action].&rdquo;
        </li>
        <li>
          Name the four levers in the First Round pivot framework and identify which one is
          most misaligned for LangoBee right now, based on the June 2026 snapshot (103 profiles,
          4 real WAU, $0 MRR, 34-second median session).
        </li>
      </ol>

      <p>
        <strong>Interleaved concept (week 1):</strong> Your cohort table from week 1 showed that
        the May 25 cohort had 19 signups and 7 activations. What was the activation rate? How does
        it compare to the 25% median benchmark from Rachitsky and Timen (2022)? Write one sentence.
      </p>

      <AnchorHeading as="h2" id="must-work-checklist">
        Part 1: The must-work checklist
      </AnchorHeading>

      <p>
        A must-work checklist is the minimum bar before inviting anyone to your product. Every
        item is binary: pass or fail. A single fail means the checklist does not pass. Run this
        checklist on two devices: an iPhone (Safari, add to home screen as PWA) and a laptop
        (Chrome, desktop viewport). Record your results in the table below.
      </p>

      <p>
        For each item, note: pass, fail, or intermittent. For any fail or intermittent, open
        a GitHub issue before moving to the next item. The issue title must match the checklist
        item exactly.
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
                  width: "5%",
                }}
              >
                #
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                  width: "45%",
                }}
              >
                Checklist item
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                  width: "20%",
                }}
              >
                iPhone Safari PWA
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                  width: "20%",
                }}
              >
                Desktop Chrome
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "6px 10px",
                  borderBottom: "2px solid currentColor",
                  width: "10%",
                }}
              >
                Issue filed?
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "S1",
                item: "Signup flow completes without error (email + password, no OAuth)",
              },
              {
                id: "S2",
                item: "Onboarding language selection saves correctly and routes to the feed",
              },
              {
                id: "F1",
                item: "Shorts feed loads at least 5 videos within 3 seconds on Wi-Fi",
              },
              {
                id: "F2",
                item: "First video in feed autoplays or requires at most one tap to start",
              },
              {
                id: "F3",
                item: "Captions render on-screen and are legible at default font size",
              },
              {
                id: "F4",
                item: "Caption text is correctly segmented (words do not bleed together)",
              },
              {
                id: "W1",
                item: "Tapping any word opens the word-tap popup within 500 ms",
              },
              {
                id: "W2",
                item: "Popup shows a definition (not a blank card or loading spinner)",
              },
              {
                id: "W3",
                item: "Tapping a word marks it as learning (amber highlight persists on reload)",
              },
              {
                id: "C1",
                item: "Scrolling through the feed shows at least 10 distinct videos without hitting an empty state",
              },
              {
                id: "C2",
                item: "Watch-next recommendation after completing a video loads a different video",
              },
              {
                id: "P1",
                item: "App is installable as PWA from Safari (Add to Home Screen prompt works)",
              },
              {
                id: "P2",
                item: "Installed PWA opens to the feed, not a browser error or blank screen",
              },
              {
                id: "P3",
                item: "Safe-area insets are respected on iPhone (no content hidden under status bar or home indicator)",
              },
            ].map((row) => (
              <tr key={row.id}>
                <td
                  style={{
                    padding: "6px 10px",
                    borderBottom: "1px solid #ddd",
                    fontFamily: "monospace",
                  }}
                >
                  {row.id}
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  {row.item}
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  &nbsp;
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  &nbsp;
                </td>
                <td style={{ padding: "6px 10px", borderBottom: "1px solid #ddd" }}>
                  &nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Count your fails and intermittents. Write the total in your founder journal. Any item in
        the S or W rows that fails is a ship-blocker: do not invite new users until it passes.
        F and C failures are high priority but not immediate ship-blockers. P failures matter
        most for iPhone users, who are likely your early-adopter cohort.
      </p>

      <AnchorHeading as="h2" id="rageclick-diagnosis">
        Part 2: Locate where the session dies
      </AnchorHeading>

      <p>
        LangoBee recorded 223 rageclicks in the last 30 days. A rageclick is three or more
        rapid clicks on the same element in quick succession, almost always a signal of
        frustrated expectation. Open PostHog and complete the following steps.
      </p>

      <ol>
        <li>
          <strong>Pull rageclick events.</strong> In PostHog, go to{" "}
          <em>Session Recordings &rarr; Filter by rageclick</em>. Set the date range to the last
          30 days. You should see a list of sessions that contain at least one rageclick.
        </li>
        <li>
          <strong>Watch five sessions end-to-end.</strong> Pick sessions from users who are not
          your own account (filter out your email). For each session, write down: (a) the URL
          the user was on when the rageclick occurred, (b) the element they clicked, and (c) how
          long the session lasted after the rageclick.
        </li>
        <li>
          <strong>Identify the median session drop-off point.</strong> In PostHog, go to{" "}
          <em>Funnels</em> and build a funnel with these steps:
          <ol type="a">
            <li>
              <strong>Step 1:</strong> <code>$pageview</code> (any page)
            </li>
            <li>
              <strong>Step 2:</strong> <code>word_lookup_opened</code>
            </li>
          </ol>
          Set the conversion window to 24 hours. What percentage of sessions reach step 2?
          Write the number. This is your activation rate.
        </li>
        <li>
          <strong>Find the 34-second session boundary.</strong> In PostHog, go to{" "}
          <em>Session Recordings</em> and sort by session duration. Filter to sessions between
          20 and 50 seconds. Watch three of these. Write one sentence per session: where does it
          end, and what did the user appear to be doing?
        </li>
        <li>
          <strong>Write your hypothesis.</strong> Based on what you saw in steps 2-4, write two
          or three sentences: what is the most likely explanation for the 34-second median session?
          Is the user encountering broken UI, running out of clear next action, or abandoning
          before the word-tap loop starts? Name the specific element or moment where you believe
          the session ends.
        </li>
      </ol>

      <AnchorHeading as="h2" id="guided-first-session">
        Part 3: Design the 60-second guided first session
      </AnchorHeading>

      <p>
        A guided first session has one job: get a new user to their first aha moment before
        they stop. For LangoBee, the aha moment is{" "}
        <code>word_lookup_opened</code>: the first time a user taps a word and sees the
        definition. Every step before that moment exists to enable it. Every step that is not
        necessary to enable it should be removed.
      </p>

      <ol>
        <li>
          <strong>Map the current path.</strong> Open an incognito window and sign up for
          LangoBee as a new user. Write down every screen, prompt, and tap required before
          you reach the first word tap. Count them.
        </li>
        <li>
          <strong>Time the current path.</strong> Do it again with a stopwatch. How many seconds
          does it take from landing on the signup page to firing <code>word_lookup_opened</code>{" "}
          for the first time? Write the number.
        </li>
        <li>
          <strong>Identify the removable steps.</strong> For each step in your map, ask: does
          removing this step prevent the user from reaching their first word tap? If no, mark it
          as a candidate for removal or deferral.
        </li>
        <li>
          <strong>Write the new script.</strong> Design a path from signup to first word tap
          that fits in 60 seconds. Write each step as a one-sentence description of what the user
          sees and does. The script must cover:
          <ul>
            <li>Signup or skip-signup (if any)</li>
            <li>Language selection (can this default to Spanish?)</li>
            <li>First video shown (how is it selected?)</li>
            <li>First caption visible (is a tap prompt shown?)</li>
            <li>First word tapped and popup seen</li>
          </ul>
        </li>
        <li>
          <strong>Time the new script.</strong> Walk through your redesigned path with a
          stopwatch. If it exceeds 60 seconds, remove one more step. Repeat until it fits.
        </li>
        <li>
          <strong>File a GitHub issue for the guided first session.</strong> Title:{" "}
          <em>Guided first session: reach word_lookup_opened in 60 seconds</em>. Body: paste
          your script from step 4. Label: <code>onboarding</code>, <code>activation</code>.
        </li>
      </ol>

      <AnchorHeading as="h2" id="self-grading">
        Self-grading rubric
      </AnchorHeading>

      <p>
        Score yourself before leaving. Each milestone is worth one point. Four points is the
        passing bar for this section.
      </p>

      <ol>
        <li>
          <strong>Checklist completed on both devices.</strong> Every item has a pass, fail, or
          intermittent result recorded. No blanks.
        </li>
        <li>
          <strong>GitHub issues filed for every fail and intermittent.</strong> Each issue title
          matches the checklist item exactly. Severity label applied (ship-blocker or high).
        </li>
        <li>
          <strong>Rageclick hypothesis written.</strong> You watched at least five sessions and
          wrote a specific, falsifiable hypothesis about where the 34-second session ends. Not
          &ldquo;users are confused&rdquo; but a specific element or moment.
        </li>
        <li>
          <strong>Activation rate measured.</strong> You have a number from the PostHog funnel
          (signups to word_lookup_opened within 24 hours). You compared it to the 25% median
          benchmark.
        </li>
        <li>
          <strong>Guided first session script filed as a GitHub issue.</strong> The path fits
          in 60 seconds when you timed it. Steps are written in one sentence each.
        </li>
      </ol>

      <p>
        If you scored 3 or below, the checklist and the rageclick diagnosis are the priority.
        The guided first session script can be finished tonight. Post your checklist results and
        rageclick hypothesis to the course Discord before 9 AM tomorrow. This is your HW1
        deliverable: the checklist run is the submission.
      </p>
    </>
  );
}

export const wk03SectionSearchBody =
  "must-work checklist LangoBee feed captions word tap popup iPhone Safari PWA desktop Chrome rageclicks session recordings 34-second median session guided first session 60 seconds activation word_lookup_opened GitHub issues defects onboarding section worksheet Week 3";
