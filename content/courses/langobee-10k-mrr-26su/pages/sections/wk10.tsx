import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk10SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="build-the-outreach-list">
        Section: Build the outreach list
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 10 · Hands-on worksheet</p>

      <p>
        By the end of this section you will have a 50-creator prospect list drawn from
        LangoBee's own catalog, five personalized outreach emails written and ready to
        send, a UTM-tagged affiliate link for the first wave, and a written recommendation
        on the equity question. Work in order. Do not skip the retrieval drill.
      </p>

      <AnchorHeading as="h2" id="retrieval-drill">
        Part 0: Retrieval drill (5 minutes)
      </AnchorHeading>

      <p>
        Close the slides and reading. Answer from memory. Write your answers before
        moving to Part 1.
      </p>

      <ol>
        <li>
          <strong>Channel fit (week 9).</strong> Name the three signals you use to judge
          whether a traction channel is worth testing. What is the Bullseye test's budget
          and time ceiling for a valid channel experiment?
        </li>
        <li>
          <strong>Burn risk (week 9).</strong> If a $500 sponsorship test requires 32
          paying customers to break even, and your trial-to-paid conversion rate is
          estimated at 5%, how many trial starts does the video need to generate? Is that
          number realistic from a 30k-subscriber channel?
        </li>
        <li>
          <strong>UTM discipline (week 9).</strong> Write the UTM parameters you would
          attach to the link in a YouTube description to attribute a sponsorship to the
          correct creator and video. Name all five UTM parameters and give a concrete
          value for each.
        </li>
        <li>
          <strong>FAST agreement (this week).</strong> What is the maximum advisor equity
          the FAST agreement specifies for an expert advisor at the idea stage? Why does
          that ceiling matter when evaluating a creator equity offer?
        </li>
        <li>
          <strong>Three deal structures (this week).</strong> Name the three structures
          from Lecture 2 in order of commitment, from most reversible to least. For each,
          name one condition that makes it the right structure at LangoBee's current stage.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-1-cac-check">
        Part 1: Interleave from week 8 - compute the defensible CAC (15 minutes)
      </AnchorHeading>

      <p>
        Before building the prospect list, anchor the math. This task is drawn from week
        8's unit economics work. You need a maximum defensible CAC before you can judge
        whether a sponsorship is worth the price.
      </p>

      <ol>
        <li>
          <strong>Recall your LTV estimate from week 8.</strong> If you have not yet
          calculated LTV, use the floor assumption: $7.99/mo, 5% monthly churn, average
          lifetime = 1 divided by 0.05 = 20 months, LTV = $7.99 times 20 = $159.80.
          Write this number.
        </li>
        <li>
          <strong>Apply the 3:1 LTV:CAC target.</strong> The defensible CAC ceiling is
          LTV divided by 3. At $159.80 LTV, that is $53.27 per paying customer. Write
          this number.
        </li>
        <li>
          <strong>Apply it to a $500 sponsorship test.</strong> At a $53.27 CAC ceiling,
          a $500 video needs at least how many paying customers to be defensible? Show the
          arithmetic:
          <pre>{`$500 / $53.27 = 9.4 → round up → 10 paying customers minimum`}</pre>
        </li>
        <li>
          <strong>Translate to trial starts.</strong> At 5% trial-to-paid conversion,
          10 paying customers requires 200 trial starts from one video. Write that number
          in your founder journal. This is your success threshold for the outreach test.
        </li>
        <li>
          <strong>Sanity check.</strong> Is 200 trial starts realistic from a single
          30k-subscriber micro-creator video? Write one sentence with your honest
          assessment. (There is no required answer. The point is to run the math before
          committing cash.)
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-prospect-list">
        Part 2: Build the 50-creator prospect list (20 minutes)
      </AnchorHeading>

      <ol start={6}>
        <li>
          <strong>Run the base query against the catalog.</strong> Open a Supabase SQL
          editor connected to the LangoBee production database and run:
          <pre>{`SELECT
  creator_name,
  channel_url,
  COUNT(*)          AS clip_count,
  AVG(mean_zipf)    AS avg_difficulty,
  MIN(created_at)   AS earliest_clip
FROM texts
WHERE language = 'es'
  AND type = 'Video'
  AND is_public = true
GROUP BY creator_name, channel_url
HAVING COUNT(*) >= 3
ORDER BY clip_count DESC
LIMIT 100;`}</pre>
          This returns Spanish creators with at least 3 clips in the catalog, ranked by
          catalog presence. Export to CSV.
        </li>
        <li>
          <strong>Trim to 50 prospects.</strong> From the 100 results, select the top
          50 by the following priority order:
          <ol type="a">
            <li>Creators with 10+ clips in the catalog (highest content alignment)</li>
            <li>Among ties, prefer creators whose {"`avg_difficulty`"} is between 4.5 and
            6.0 (intermediate content, the app's sweet spot)</li>
            <li>Remove any creator whose channel URL is empty or whose name is clearly a
            media company rather than an individual creator</li>
          </ol>
        </li>
        <li>
          <strong>Build a tracking sheet.</strong> Create a spreadsheet with columns:
          creator_name, channel_url, clip_count, avg_difficulty, subscriber_count
          (to be filled manually), outreach_status (default: "not contacted"),
          response (blank), notes (blank). Fill in clip_count and avg_difficulty from
          the query. Leave subscriber_count blank until step 9.
        </li>
        <li>
          <strong>Research subscriber counts for the top 20.</strong> Open the first 20
          channel URLs. Record the subscriber count in your tracking sheet. Flag any
          creator with more than 500k subscribers as "macro" and deprioritize them for
          the first wave (Lecture 1: micro-tier first).
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-email-template">
        Part 3: Write the outreach template (10 minutes)
      </AnchorHeading>

      <ol start={10}>
        <li>
          <strong>Write the base email template.</strong> It must have these four parts in
          order. Do not deviate from the structure.
          <ol type="a">
            <li>
              <strong>Specific opener (2 sentences).</strong> Name the creator. Name a
              specific video of theirs that is in the LangoBee catalog. Example: "Hi
              [Name], your video '[Title]' is one of the most-watched clips in LangoBee's
              Spanish catalog right now. Learners are using it to study." Do not write
              "I love your content." Write the specific fact.
            </li>
            <li>
              <strong>What the app does (2 sentences).</strong> State the product clearly.
              "LangoBee is a language-learning app built around real YouTube content.
              Learners track their vocabulary word-by-word as they watch videos from
              creators like you." No feature list. One product sentence, one audience
              sentence.
            </li>
            <li>
              <strong>The ask (1 sentence).</strong> "I would like to offer you a sponsored
              integration in one of your videos." Nothing about equity. Nothing about
              partnership structure. One sentence.
            </li>
            <li>
              <strong>The next step (1 sentence).</strong> "If this is something you would
              consider, I can send a one-page brief with rates and exact language." Make
              it easy to say yes or no with no commitment.
            </li>
          </ol>
          Write the full template. It should be under 150 words.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-personalize">
        Part 4: Personalize the first five emails (20 minutes)
      </AnchorHeading>

      <ol start={11}>
        <li>
          <strong>Select the top five prospects.</strong> From your tracking sheet, select
          the top five creators by clip_count who are in the micro tier (under 500k
          subscribers). These are your first five.
        </li>
        <li>
          <strong>For each of the five, complete the personalization checklist:</strong>
          <ul>
            <li>Confirm the specific video name from the database. Visit the video to
            verify it is still live.</li>
            <li>Read the video's comment section for 3 minutes. Note one piece of
            feedback learners left that connects to what LangoBee does. Add this to your
            notes column.</li>
            <li>Write the personalized opener using the specific video name and one
            concrete detail you observed.</li>
            <li>Paste your base template and replace the opener with the personalized
            version. Make no other changes.</li>
          </ul>
        </li>
        <li>
          <strong>Set up UTM tracking.</strong> For each creator, create a unique UTM
          link pointing to langobee.com:
          <pre>{`utm_source=youtube
utm_medium=creator-sponsorship
utm_campaign=wk10-outreach
utm_content=[creator_name_slug]`}</pre>
          Use a URL shortener if needed for readability in video descriptions. Record the
          full UTM URL in your tracking sheet next to the creator name.
        </li>
        <li>
          <strong>Do not send yet.</strong> Mark the five emails as "ready to send" in
          the tracking sheet. You will send them as part of the outreach wave after
          completing the equity recommendation in Part 5.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-5-equity-recommendation">
        Part 5: Write the equity recommendation (15 minutes)
      </AnchorHeading>

      <ol start={15}>
        <li>
          <strong>State the question precisely.</strong> Write this exact question in
          your founder journal: "Do I need a YouTuber partner to give 50% of LangoBee
          to in order to reach $10K MRR?"
        </li>
        <li>
          <strong>Run the three-scenario EV model.</strong> Fill in the following table
          from memory using the numbers in this week's reading. If you cannot recall a
          number, use a conservative estimate and note it.
          <pre>{`Scenario           | Structure      | Upfront cost | EV if $10K MRR | EV if PMF fails
-------------------|----------------|--------------|----------------|----------------
Flat sponsorship   | $500 cash      | $500         | +revenue        | -$500 (bounded)
Affiliate only     | 25% commission | $0           | +75% revenue    | $0 (bounded)
50% equity         | Half company   | $0 cash      | +big ceiling    | -half of exit`}</pre>
          The point is not to compute exact numbers. It is to make the asymmetry visible.
        </li>
        <li>
          <strong>Write a one-paragraph recommendation.</strong> It must answer the
          stated question directly with one of three positions:
          <ul>
            <li>"No. The expected value of a $500 flat-fee test dominates a 50% equity
            grant at this stage because [reason]."</li>
            <li>"Yes, but only under these specific conditions: [list]."</li>
            <li>"Not yet. The right sequence is [affiliate structure] first, then equity
            after [milestone]."</li>
          </ul>
          Your paragraph must cite at least one number from the EV model and reference
          the FAST agreement ceiling.
        </li>
        <li>
          <strong>Post your recommendation</strong> to the class Discord before leaving
          section. One paragraph, no more. Other founders will respond with pushback.
          Engage with the pushback.
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-you-leave-with">
        What you should leave with
      </AnchorHeading>

      <ul>
        <li>
          <strong>Milestone 1:</strong> A 50-creator prospect list in a tracking
          spreadsheet with clip_count, avg_difficulty, and subscriber tier filled in
          for the top 20.
        </li>
        <li>
          <strong>Milestone 2:</strong> A base outreach email template under 150 words
          with all four structural elements.
        </li>
        <li>
          <strong>Milestone 3:</strong> Five personalized emails, each with a specific
          video reference, a UTM-tagged link, and status "ready to send" in the tracker.
        </li>
        <li>
          <strong>Milestone 4:</strong> A written one-paragraph equity recommendation
          posted to the class Discord, answering "do I need a YouTuber partner at 50%?"
          with expected-value math.
        </li>
      </ul>

      <p>
        If you leave without all four milestones, complete them before the start of
        week 11. The outreach wave starts in week 11; the emails must be ready.
      </p>
    </>
  );
}

export const wk10SectionSearchBody =
  "creator outreach prospect list youtube_creators catalog SQL query 50 creators personalized emails UTM tracking equity recommendation FAST agreement EV model flat sponsorship affiliate milestone retrieval drill week 10 section worksheet";
