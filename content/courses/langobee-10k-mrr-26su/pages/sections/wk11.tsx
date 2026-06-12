import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk11SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="owned-loops-section">Section: Stand up one owned channel</AnchorHeading>
      <p className="fs-6 fw-300">Week 11 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have: (a) produced three clips through the
        repurposing pipeline and posted them to one owned channel, (b) published five
        programmatic catalog page stubs and confirmed at least one is indexed, and (c) defined
        a loop metric dashboard with a baseline reading from the June 2026 snapshot.
        HW4 is due this week and covers all three deliverables.
      </p>

      <AnchorHeading as="h2" id="retrieval-drill">Part 0: Retrieval drill (5 minutes)</AnchorHeading>

      <p>
        Answer these from memory before opening any notes. Write your answers in your founder
        journal. You will use them in Part 2.
      </p>

      <ol>
        <li>
          <strong>Week 10 deal structures.</strong> Name the three deal structures covered
          last week for creator partnerships (equity, affiliate, flat sponsorship). For each,
          state the typical cash-equivalent cost and the scenario where it is the right choice.
        </li>
        <li>
          <strong>Week 10 market rates.</strong> What is the flat-fee range for a micro-creator
          (10k-100k subscribers) on YouTube? What equity range does the FAST agreement specify
          for a growth-stage advisor?
        </li>
        <li>
          <strong>Week 10 channel-fit test.</strong> What was the one question the week 9
          UTM data was supposed to answer about the Discord channel? Did it answer it?
        </li>
      </ol>

      <p>
        If any answer is blank, read the week 10 lecture notes before continuing. The interleaved
        task in Part 4 of this worksheet depends on week 10 knowledge.
      </p>

      <AnchorHeading as="h2" id="part-1-channel">Part 1: Choose and set up your owned channel</AnchorHeading>

      <ol>
        <li>
          <strong>Pick one channel.</strong> TikTok, Instagram Reels, and YouTube Shorts are the
          three viable short-form options. Choose exactly one for this sprint. Criteria: which
          platform do comprehensible-input learners of Spanish already use? Check the Refold
          Espanol Discord and r/Spanish for the answer before deciding.
        </li>
        <li>
          <strong>Create the account.</strong> Channel name: "LangoBee" or a variant that is
          available. Bio: one sentence describing what the channel posts. Example: "Spanish
          comprehensible input clips with word-by-word highlighting. See what you actually
          understand." Do not include the product URL yet. Earn the click.
        </li>
        <li>
          <strong>Confirm the content policy.</strong> Before posting anything, read the
          platform's terms of service on third-party video content. Your posting format is
          screen-capture demos of your product interface playing clips, not the original
          creator's video. If the platform's terms make even this ambiguous, note it here
          and consult before posting.
        </li>
        <li>
          <strong>Write in your founder journal:</strong> "Chosen channel: [name]. Reason:
          [one sentence]. Account URL: [url]. Policy check: [done / flagged issue]."
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-pipeline">Part 2: Produce three clips through the pipeline</AnchorHeading>

      <p>
        The clip format is a screen-capture of LangoBee's shorts feed playing a video. The
        word-highlighting overlay is the product demo. You are not posting the creator's
        content; you are posting a product demo that happens to feature their clip.
      </p>

      <ol start={5}>
        <li>
          <strong>Select three clips from the catalog.</strong> Criteria for selection:
          <ul>
            <li>Spanish language (the current primary market)</li>
            <li>mean_zipf between 4.0 and 5.5 (A2-B1 difficulty: accessible to the widest learner segment)</li>
            <li>Completion rate above 50% in the existing feed data (quality signal)</li>
            <li>Duration: 30-60 seconds (optimal for short-form platforms)</li>
          </ul>
          Query your Supabase database to find candidates. Write the three clip IDs and
          their mean_zipf values in your founder journal.
        </li>
        <li>
          <strong>Record the screen-capture for each clip.</strong> Use QuickTime (Mac)
          or any screen recorder. Open LangoBee in a browser at a clean viewport (no
          bookmarks bar, no DevTools). Play the clip. Record for the full duration.
          Trim to 30-60 seconds. No voiceover is required; the word-highlighting animation
          is the story.
        </li>
        <li>
          <strong>Add a text overlay.</strong> At the start of each clip, add a one-line
          caption: "Spanish [topic] - tap a word to see what it means." This sets the
          expectation before the viewer decides to scroll past. Do not add end-screen
          CTAs yet. Measure completion first.
        </li>
        <li>
          <strong>Post all three.</strong> Post them as separate uploads, not a single
          compilation. Space them out: one per day for three consecutive days. Give each a
          brief description with relevant hashtags. Candidates: #learnspanish
          #comprehensibleinput #spanishlearning. No promotional copy. The product demo
          is the copy.
        </li>
        <li>
          <strong>Write in your founder journal:</strong> "Clips posted: [ids]. Post URLs:
          [urls]. Posted on: [dates]."
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-seo">Part 3: Publish five catalog page stubs</AnchorHeading>

      <p>
        A catalog page stub is a real, indexable page in the LangoBee web app at a URL like
        <code>/catalog/es/cooking/a2</code>. It does not need to be complete; it needs to
        be real enough that Google can index it and a user who lands on it understands the
        value proposition.
      </p>

      <ol start={10}>
        <li>
          <strong>Define the URL structure.</strong> Slug pattern:
          <code>/catalog/[language]/[topic]/[level]</code>. For Spanish cooking at A2, this
          is <code>/catalog/es/cooking/a2</code>. Write the five slug targets in your
          founder journal. All five should be Spanish for this sprint (the highest-volume
          language in the catalog).
        </li>
        <li>
          <strong>Define the page template.</strong> Each catalog page needs at minimum:
          <ul>
            <li>
              <code>{"<title>"}</code>: "Spanish [topic] videos for [level] learners - LangoBee"
            </li>
            <li>
              A one-paragraph description of what comprehensible-input means at this level
              (reuse the same copy across levels, substituting the level name)
            </li>
            <li>A list of 3-5 matching videos with title, creator, and difficulty score</li>
            <li>One embedded demo clip from the list (the same screen-capture you made in Part 2 counts)</li>
          </ul>
        </li>
        <li>
          <strong>Implement and deploy five pages.</strong> If building a programmatic route
          in Next.js, create a single dynamic route at
          <code>app/catalog/[lang]/[topic]/[level]/page.tsx</code> and seed it with five
          real data combinations. Deploy to production (not localhost).
        </li>
        <li>
          <strong>Submit to Google Search Console.</strong> Open Search Console for langobee.com.
          Use the URL Inspection tool to request indexing for each of the five pages. This does
          not guarantee fast indexing, but it does notify Google that the pages exist.
        </li>
        <li>
          <strong>Write in your founder journal:</strong> "Catalog pages deployed: [5 URLs].
          Search Console submission: [done/pending]. Expected indexing date: [30 days from now]."
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-interleave">Part 4: Interleaved task (week 4 concept)</AnchorHeading>

      <p>
        This task exercises the retention-hook concept from week 4. The question: does this
        week's owned channel work feed the retention loop, or only top-of-funnel acquisition?
      </p>

      <ol start={15}>
        <li>
          <strong>Map the channel to the AARRR stage.</strong> Write two rows in a table:
          <ul>
            <li>
              <strong>Social clips (TikTok/Reels/Shorts):</strong> Which AARRR stage does
              this channel primarily serve? Write the stage name and one sentence explaining
              why. Then answer: does a user who arrives from a clip ever encounter the
              retention hook (word-level status tracking, streak, comprehension score)?
              If yes, when? If no, what would need to change?
            </li>
            <li>
              <strong>Catalog SEO pages:</strong> Same question. Which stage? Does the
              page visitor encounter the retention hook before they leave, or only after
              signup?
            </li>
          </ul>
        </li>
        <li>
          <strong>Write a one-sentence diagnosis.</strong> Based on your mapping, state
          whether week 11's channel work feeds only acquisition, or whether it also touches
          retention. If it only touches acquisition: name the one change that would connect
          the new channel to the retention hook.
        </li>
      </ol>

      <p>
        This is the week 4 interleave. The Hooked Model (Eyal, 2021) argues that external
        triggers (the social clip, the catalog page) must eventually connect to internal
        triggers (the desire to know a word, the satisfaction of comprehension) or they
        produce one-time visits, not retained learners. Your diagnosis above is the test.
      </p>

      <AnchorHeading as="h2" id="part-5-loop-metric">Part 5: Define the loop metric and its dashboard</AnchorHeading>

      <ol start={17}>
        <li>
          <strong>Define the loop metric in one sentence.</strong> Format: "The loop is
          turning when [metric] reaches [threshold] over [time window]." Example: "The loop
          is turning when share-to-signup rate reaches 5% over a rolling 30-day window."
          Write your version. The metric must be computable from PostHog data you already have.
        </li>
        <li>
          <strong>Compute the baseline.</strong> Using the June 2026 snapshot:
          <ul>
            <li>Total shares (30 days): 1</li>
            <li>Total feed impressions (30 days): 408</li>
            <li>Real feed users: 13</li>
            <li>Share rate: 1/408 = 0.0025</li>
            <li>Share-to-signup rate: unknown (no attribution on the 1 share)</li>
          </ul>
          Write these numbers in your founder journal as the week 11 baseline. You will
          compare against them in week 12.
        </li>
        <li>
          <strong>Build the dashboard in PostHog.</strong> Add three charts to your existing
          PostHog dashboard:
          <ul>
            <li>Chart 1: "Feed share events" - count of share events per day, last 30 days</li>
            <li>Chart 2: "Feed impressions" - count of shorts_feed_impression events, last 30 days</li>
            <li>Chart 3: "Share rate" - Chart 1 divided by Chart 2. If PostHog does not support
            formula charts directly, compute it as a SQL insight: <code>SELECT count(distinct event) filter (where event = 'shorts_shared') * 1.0 / nullif(count(distinct event) filter (where event = 'shorts_feed_impression'), 0) as share_rate FROM events WHERE timestamp &gt;= now() - interval '30 days'</code></li>
          </ul>
        </li>
        <li>
          <strong>Set the threshold date.</strong> Write in your founder journal: "I will
          re-evaluate the loop on [date 30 days from today]. If share rate has not reached
          [your threshold from step 17], I will treat the shorts loop as pre-functional and
          shift loop investment to the SEO channel."
        </li>
      </ol>

      <AnchorHeading as="h2" id="rubric">Self-grading rubric</AnchorHeading>

      <p>
        Grade yourself on each milestone before leaving this session. Mark each as Done,
        Partial (started but not complete), or Not started.
      </p>

      <ul>
        <li>
          <strong>Channel standing (Part 1):</strong> Account created, bio written, content
          policy confirmed, URL recorded.
        </li>
        <li>
          <strong>Three clips posted (Part 2):</strong> Three screen-capture demos uploaded to
          the chosen platform, spaced over three days, clip IDs and post URLs logged.
        </li>
        <li>
          <strong>Five catalog pages live (Part 3):</strong> Five pages at
          <code>/catalog/[lang]/[topic]/[level]</code> deployed and reachable in production,
          Search Console submissions filed.
        </li>
        <li>
          <strong>Interleaved retention diagnosis (Part 4):</strong> AARRR stage mapped for
          both channels, one-sentence diagnosis written.
        </li>
        <li>
          <strong>Loop metric dashboard (Part 5):</strong> Loop metric defined in one sentence,
          baseline numbers logged, three PostHog charts added, threshold date written in
          founder journal.
        </li>
        <li>
          <strong>HW4 submitted:</strong> Distribution channel audit delivered. See the HW4
          prompt for the required format. This section is the hands-on component; the HW4
          writeup is the reflection component.
        </li>
      </ul>

      <p>
        If any milestone is Not started: complete it before the end of the day. If it remains
        incomplete by Friday, write one sentence in your founder journal explaining the
        specific blocker. Do not leave it blank.
      </p>
    </>
  );
}

export const wk11SectionSearchBody =
  "owned channel stand up shorts TikTok Instagram Reels YouTube Shorts clip repurposing screen capture demo catalog pages programmatic SEO loop metric dashboard share rate K-factor baseline PostHog HW4 week 11 section worksheet distribution retention hook interleaved";
