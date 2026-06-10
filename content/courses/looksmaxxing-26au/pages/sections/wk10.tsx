import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk10Section() {
  return (
    <div>
      <h1>Section 10: Demo day and twelve-week plan</h1>
      <p className="fs-6 fw-300">Week 10 &middot; Hands-on worksheet</p>

      <p>
        This is the final section of the course. You will present your
        before-and-after data to two peers, then present and receive feedback on
        your twelve-week plan. The goal is not to show off results. The goal is
        to close the gap between what you intended at week zero and what you can
        carry forward past week ten.
      </p>

      <AnchorHeading as="h2" id="part-1-before-after">
        Part 1: Before-and-after presentation (20 minutes, pairs)
      </AnchorHeading>
      <p>
        Each person presents their data to a partner. Use your week-zero photos,
        measurements, and whatever tracking you have kept across the course.
        The presentation is five minutes maximum. The feedback is five minutes
        maximum. Then you swap.
      </p>
      <ol>
        <li>
          <strong>Show the photos side by side.</strong> Front, side, and
          three-quarter if you have them, taken in the same lighting and
          position. Do not crop or filter. If your photos are inconsistent
          (different angles, different lighting), say so and explain what you
          can and cannot conclude from them.
        </li>
        <li>
          <strong>Report the measurements.</strong> State your week-zero and
          week-ten numbers: weight trend (7-day average), any tape measurements
          you took, and any pillar-specific metrics you tracked (for example,
          skin condition, hairline notes, whether you started a treatment).
        </li>
        <li>
          <strong>Name two verifiable changes.</strong> Not impressions. Two
          things you can back up with a number, a photo, or a written log. If
          nothing is verifiable, say that honestly and name what stopped you
          from tracking.
        </li>
        <li>
          <strong>Name one thing that stalled and why.</strong> Every plan
          breaks somewhere. Name where yours broke. A plausible honest
          explanation (schedule, injury, barrier impaired, forgot) is more
          useful than &ldquo;I could have done better.&rdquo;
        </li>
        <li>
          <strong>Peer feedback.</strong> The listener gives one observation
          the presenter did not mention and one question. Not reassurance. An
          observation that is specific and comes from watching the data, not
          from wanting to be kind.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-2-twelve-week-plan">
        Part 2: Twelve-week plan presentation (20 minutes, pairs)
      </AnchorHeading>
      <p>
        You wrote your twelve-week plan before or during section. Present the
        plan-on-a-page to your partner. The presentation is four minutes. The
        feedback is four minutes. Then swap.
      </p>
      <ol>
        <li>
          <strong>Walk through each pillar.</strong> For each of the eight rows
          in your plan (skin, hair, body, dental, style, posture, sleep, mental
          health), state the one habit you are committing to and the specific
          behavior: when it happens, how often, and what &ldquo;done&rdquo;
          looks like for the week.
        </li>
        <li>
          <strong>Name the anchor habit for each pillar.</strong> Per the Fogg
          (2021) framework, every new behavior needs a prompt. For each pillar,
          identify the existing routine it attaches to. &ldquo;After I brush
          my teeth at night, I apply tretinoin&rdquo; is an anchor.
          &ldquo;I will do it at some point in the evening&rdquo; is not.
        </li>
        <li>
          <strong>State your quarterly review date.</strong> This is a
          calendar event, not an intention. Name the date. If you do not name
          a date, you will not hold the review.
        </li>
        <li>
          <strong>Identify the one pillar most likely to break first.</strong>
          Honest self-assessment. Which habit is the hardest to anchor, the
          most dependent on external conditions, or the one you are least
          motivated to maintain? Name it and say what you will do if it breaks.
        </li>
        <li>
          <strong>Peer feedback.</strong> The listener looks for two things:
          (a) any habit in the plan that lacks a specific prompt or definition
          of done, and (b) any pillar that looks like it is carrying too much
          or too little commitment given what they know about the presenter.
          One comment on each, specific and honest.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-group-debrief">
        Part 3: Group debrief (15 minutes, whole room)
      </AnchorHeading>
      <p>
        The TA or instructor leads three questions. Each question gets two or
        three responses from volunteers. The goal is to leave the room with one
        piece of evidence-based clarity that you did not have when you arrived.
      </p>
      <ol>
        <li>
          <strong>What single change over ten weeks had the highest
          return for the time it cost?</strong> Name the pillar and be specific.
          &ldquo;Sunscreen&rdquo; is specific enough. &ldquo;Taking care of
          myself&rdquo; is not.
        </li>
        <li>
          <strong>What surprised you about your own tracking data?</strong>
          Something you expected to see that did not appear, or something you
          did not expect that did. If you did not track consistently enough to
          answer this, say that and name what you would do differently.
        </li>
        <li>
          <strong>What is the one thing from the lecture on BDD and
          comparison that you intend to carry into how you use the
          internet going forward?</strong> Honest. Not performative. If the
          lecture did not change anything, say why.
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-to-ship">
        What to ship
      </AnchorHeading>
      <ul>
        <li>
          Your completed plan-on-a-page: all eight pillars filled in, with
          specific habit, prompt, and frequency for each. A quarterly review
          date on your calendar.
        </li>
        <li>
          Your before-and-after data: week-zero and week-ten photos (or a
          written explanation of why you do not have both), and any measurement
          data you collected. Two verifiable changes named in writing.
        </li>
        <li>
          One written sentence naming the pillar most likely to break first
          and what you will do if it does.
        </li>
        <li>
          Peer feedback received: one observation and one question from your
          partner on both your before-and-after and your plan. Written down,
          not just heard.
        </li>
      </ul>
    </div>
  );
}

export const wk10SectionSearchBody =
  "section demo day before and after presentation twelve-week plan eight pillars skin hair body dental style posture sleep mental health anchor habit prompt quarterly review date Fogg peer feedback group debrief verifiable changes stalled honest assessment plan on a page capstone Week 10 worksheet looksmaxxing";
