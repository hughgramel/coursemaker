import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk05SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="discord-outreach-interview-guide">
        Section: Discord outreach and the Mom Test interview
      </AnchorHeading>
      <p className="fs-6 fw-300">Week 5 · Hands-on worksheet</p>

      <p>
        By the end of this session you will have two saved message drafts ready
        to send into the Refold Espanol Discord, a written kill-threshold
        verdict for your current cohort, a five-question Mom Test interview
        guide, and one completed practice interview with signal-versus-noise
        classification. Every step is numbered; do them in order.
      </p>

      <p>
        Work on your own product throughout. Do not skip the retrieval drill:
        retrieving answers before checking the source material is what makes
        the memory stick.
      </p>

      <AnchorHeading as="h2" id="part-0-retrieval-drill">
        Part 0: Retrieval drill (5 minutes)
      </AnchorHeading>

      <p>
        Answer all five questions from memory. Write your answers before you
        look anything up. You will check them against weeks 3-4 readings after
        Part 4.
      </p>

      <ol>
        <li>
          <strong>Name the four stages of the Hook Model and give a language-app example for each stage.</strong>{" "}
          Write them out in order. If you can only recall three, write the three
          you remember and mark the fourth as a blank.
        </li>
        <li>
          <strong>Define D1 retention in one sentence.</strong>{" "}
          Then state the specific threshold week 4 set as the bar for
          LangoBee.
        </li>
        <li>
          <strong>What does a "flattening" retention curve tell you that a "decaying" curve does not?</strong>{" "}
          Write one or two sentences. Think about what each shape implies
          about the long-run behavior of the user base.
        </li>
        <li>
          <strong>Week 4's retention hook for LangoBee: what was the proposed Investment mechanic?</strong>{" "}
          Name the specific action the user takes that makes the product better
          for them on the next visit.
        </li>
        <li>
          <strong>At LangoBee's current D1, is the retention curve flattening or decaying?</strong>{" "}
          State which and write one sentence on what that implies for the next
          experiment.
        </li>
      </ol>

      <p>
        Set your answers aside. Proceed without checking. You will return to
        them after Part 4.
      </p>

      <AnchorHeading as="h2" id="part-1-discord-outreach-script">
        Part 1: Write the Discord outreach script (15 minutes)
      </AnchorHeading>

      <p>
        The Refold Espanol Discord has approximately 9,500 members and is the
        only channel that has delivered meaningful signups so far: 174 people
        joined through manual Discord recruiting. The structure of past posts is
        unknown, which means you are starting fresh. This part produces two
        saved drafts: a public channel post and a follow-up DM.
      </p>

      <ol start={6}>
        <li>
          <strong>Read the server rules.</strong>{" "}
          Join or open the Refold Espanol Discord at{" "}
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">
            discord.com/servers/refold-espanol-es-667734565309382657
          </a>
          . Find the rules channel. Note any restrictions on self-promotion,
          links, or product announcements. Write down the relevant rule numbers
          or quotes in your founder journal before drafting anything.
        </li>
        <li>
          <strong>Draft a 3-sentence value post.</strong>{" "}
          Sentence one: one observation about comprehensible input that is true
          and useful to someone in this community whether or not they ever use
          LangoBee. Sentence two: one concrete thing LangoBee does that solves
          a named problem the community already talks about. Sentence three: one
          ask (a DM invitation or a link). Keep the total under 100 words.
        </li>
        <li>
          <strong>Apply the give-before-ask test.</strong>{" "}
          Delete the third sentence (the ask). Read the remaining two sentences.
          Would a lurker find this useful on its own? If yes, the post passes.
          If no, rewrite sentence one or two until the post helps someone with
          the ask removed. Do not move on until it passes.
        </li>
        <li>
          <strong>Write the follow-up DM script.</strong>{" "}
          Two to three sentences for someone who responds positively to the
          channel post. The DM should: acknowledge what they said, state
          concretely what you are offering (a free session, early access, a
          specific outcome), and tell them the one thing you need from them
          (a reply, a calendar link, a click). No vague "love to chat" language.
        </li>
        <li>
          <strong>Save both drafts.</strong>{" "}
          Create "discord-post-v1.md" and "discord-dm-v1.md" in your founder
          journal folder. Paste the final text of each into the respective file.
          The filenames are the deliverables; do not move forward without them.
        </li>
      </ol>

      <p>
        <strong>Deliverable:</strong> Two message drafts, saved as
        discord-post-v1.md and discord-dm-v1.md.
      </p>

      <AnchorHeading as="h2" id="part-2-kill-threshold-check">
        Part 2: Interleave from week 2: pivot kill-threshold check (10 minutes)
      </AnchorHeading>

      <p>
        In week 2 you wrote kill criteria for the current thesis: specific
        numbers that would tell you the thesis is wrong. This step checks your
        incoming cohort result against those criteria. The goal is a one-sentence
        verdict, written down, before you build anything else this week.
      </p>

      <ol start={11}>
        <li>
          <strong>Pull up your week-2 kill-criteria document.</strong>{" "}
          Open the file or journal entry where you wrote the criteria. If you
          cannot find it, write "kill criteria not found" and reconstruct the
          most important one from memory before continuing.
        </li>
        <li>
          <strong>State the current D1 number from PostHog.</strong>{" "}
          Use only de-aliased, real-user data. No bot traffic, no your own
          sessions. Write the number and the date range it covers.
        </li>
        <li>
          <strong>Compare D1 to the kill threshold.</strong>{" "}
          Does your current D1 meet, exceed, or fall below the threshold you
          set in week 2? Write the comparison explicitly: "[current D1]
          vs. [kill threshold from week 2]."
        </li>
        <li>
          <strong>Write your one-sentence verdict.</strong>{" "}
          Format: "The cohort result [does / does not] trip the week-2 kill
          criterion because ___." Fill in the blank with the specific number
          and threshold. Do not editorialize; just state the fact.
        </li>
        <li>
          <strong>Write one next-experiment statement.</strong>{" "}
          If the threshold is tripped: do not pivot today. Write the single
          next experiment that would confirm or deny whether the signal is real
          (not a data artifact, not a bad cohort). If the threshold is not
          tripped: write what additional evidence would be needed before this
          criterion could trigger. One sentence in either case.
        </li>
      </ol>

      <p>
        <strong>Deliverable:</strong> One-sentence verdict and one
        next-experiment statement, written in your founder journal.
      </p>

      <AnchorHeading as="h2" id="part-3-interview-guide">
        Part 3: Write the post-session interview guide (15 minutes)
      </AnchorHeading>

      <p>
        After each concierge onboarding session you run a 10-minute interview.
        These questions must ask about the user's life and past behavior, not
        about your product. The Mom Test rule: if the question could be answered
        with a compliment, it is a bad question.
      </p>

      <ol start={16}>
        <li>
          <strong>Write five Mom Test-compliant questions (Q1-Q5).</strong>{" "}
          Each question must satisfy all three rules: it talks about their life
          and behavior (not your idea), it asks about the past (not the
          future), and it is open enough that the interviewer does most of the
          listening. Write Q1 through Q5 in a numbered list.
        </li>
        <li>
          <strong>Apply the bad-data filter to each question.</strong>{" "}
          Mark any question that could produce a compliment (C), a hypothetical
          answer (H), or a wishlist answer (W). For each marked question, write
          a rewritten version that removes the flaw. A question can have more
          than one mark. Do not move on until every question is either clean or
          has a rewritten version.
        </li>
        <li>
          <strong>Add one follow-up probe for each question.</strong>{" "}
          After each Q1-Q5, write: "Follow-up: Tell me more about the last time
          that happened." You do not need to invent a unique probe for each;
          this exact phrase works for all five and trains you to use it.
        </li>
        <li>
          <strong>Write the two-unprompted-praise bar.</strong>{" "}
          Copy this sentence into your guide, then fill in the blanks: "I will
          count this session as a positive signal if the user says something
          unprompted that is positive AND specific, twice. Praise that I
          prompted does not count. The two positive specifics are not listed in
          advance: I will know them when they happen."
        </li>
        <li>
          <strong>Save the guide.</strong>{" "}
          Create "interview-guide-v1.md" in your founder journal folder. The
          file should contain Q1-Q5 with bad-data annotation, each follow-up
          probe, and the two-unprompted-praise bar. This file is the
          deliverable; a mental note is not.
        </li>
      </ol>

      <p>
        <strong>Deliverable:</strong> Five-question guide with bad-data
        annotation, saved as interview-guide-v1.md.
      </p>

      <AnchorHeading as="h2" id="part-4-practice-interview">
        Part 4: Run one live practice interview (10 minutes)
      </AnchorHeading>

      <p>
        You will practice the interview once before using it with a real user.
        Your agent plays a Spanish learner at B1 level who uses Dreaming Spanish
        and Anki but has never used LangoBee. The agent's job is to give
        realistic, in-character answers and to deflect or give generic answers
        to any leading question. Your job is to get through all five questions
        and classify each response.
      </p>

      <ol start={21}>
        <li>
          <strong>Open a new conversation with your agent.</strong>{" "}
          Paste this role prompt exactly:
          <pre>{`You are a Spanish learner at B1 level. You watch Dreaming Spanish videos for 30 minutes per day and review Anki cards. You have never used LangoBee. Answer my questions in character. If I ask a leading question, give a generic or deflecting answer.`}</pre>
        </li>
        <li>
          <strong>Run through your five questions from Part 3.</strong>{" "}
          Ask Q1 through Q5 in order, using the follow-up probe after each one
          when the answer is thin. Record the agent's responses verbatim in a
          scratch document. Do not edit or summarize them during the interview.
        </li>
        <li>
          <strong>Apply the Mom Test filter to each response.</strong>{" "}
          After the interview is over, read each response and mark it as one of:
          <ul>
            <li>
              <strong>Signal</strong>: a concrete past fact about their behavior
              or situation (a date, a number, a specific frustration, a named
              workaround).
            </li>
            <li>
              <strong>Noise</strong>: a compliment, a general statement of
              satisfaction, or vague praise ("it sounds useful", "I would like
              that").
            </li>
            <li>
              <strong>Wishlist</strong>: a statement about what they would want
              in a hypothetical future ("it would be cool if...", "I wish there
              was...").
            </li>
          </ul>
          Write the classification next to each response.
        </li>
        <li>
          <strong>Write one sentence of what you learned.</strong>{" "}
          State one thing you learned from the practice interview that you would
          not have learned from PostHog data alone. It can be about the
          question quality, the user's behavior model, or a gap in your
          assumptions. One sentence; be specific.
        </li>
        <li>
          <strong>Check your retrieval drill answers.</strong>{" "}
          Return to your Part 0 answers. Now open weeks 3-4 readings and check
          each one. Mark each answer correct, partially correct, or wrong. Do
          not change what you wrote; just annotate it.
        </li>
      </ol>

      <p>
        <strong>Deliverable:</strong> Five recorded responses with Mom Test
        classification, and retrieval drill answers annotated.
      </p>

      <AnchorHeading as="h2" id="self-grading-rubric">
        Self-grading rubric
      </AnchorHeading>

      <p>
        Grade each item 1, 2, or 3. Be honest: this rubric is for you, not for
        anyone else.
      </p>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Standard</th>
            <th>Your grade (1-3)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Retrieval drill</td>
            <td>All 5 answered from memory before checking any source</td>
            <td>___</td>
          </tr>
          <tr>
            <td>Discord post</td>
            <td>
              Give-before-ask test passes: post still helps someone with the ask
              removed
            </td>
            <td>___</td>
          </tr>
          <tr>
            <td>Kill-threshold check</td>
            <td>
              One-sentence verdict written with the specific kill criterion
              cited by number or value
            </td>
            <td>___</td>
          </tr>
          <tr>
            <td>Interview guide</td>
            <td>
              5 questions written, bad-data annotation applied, no leading
              questions remain
            </td>
            <td>___</td>
          </tr>
          <tr>
            <td>Practice interview</td>
            <td>
              5 responses recorded verbatim, Mom Test classification (Signal /
              Noise / Wishlist) applied to each
            </td>
            <td>___</td>
          </tr>
        </tbody>
      </table>

      <p>
        Grade scale: 3 = complete and correct, 2 = complete but weak, 1 =
        incomplete. Minimum score to proceed to week 6: 13 out of 15.
      </p>

      <AnchorHeading as="h2" id="what-you-leave-with">
        What you should leave with
      </AnchorHeading>

      <ul>
        <li>
          <strong>discord-post-v1.md</strong> and{" "}
          <strong>discord-dm-v1.md</strong> saved in your founder journal, each
          passing the give-before-ask test.
        </li>
        <li>
          <strong>Kill-threshold verdict</strong> for the current cohort:
          one sentence, written down, with the specific number cited.
        </li>
        <li>
          <strong>interview-guide-v1.md</strong> saved in your founder journal:
          five questions, bad-data annotated, follow-up probes included.
        </li>
        <li>
          <strong>One practice interview</strong> completed with the agent, five
          responses recorded verbatim, each classified as Signal, Noise, or
          Wishlist.
        </li>
        <li>
          <strong>Retrieval drill answers</strong> checked against weeks 3-4
          readings and annotated with correct / partially correct / wrong.
        </li>
      </ul>

      <p>
        If you leave without all five, complete them before the week 6 section.
        The Discord post and interview guide are inputs to the week 6 concierge
        session; showing up without them means you will spend week 6 writing
        instead of doing.
      </p>
    </>
  );
}

export const wk05SectionSearchBody =
  "Discord outreach script give before ask Mom Test interview guide concierge onboarding practice interview retrieval drill Hook Model D1 retention flattening decaying kill criteria pivot week 5 section worksheet";
