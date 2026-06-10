import { AnchorHeading } from "@/components/AnchorHeading";

export function SyllabusPage() {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>
      <p>
        Arrive in week 1 with a draft resume, a vague target list, and the gnawing
        feeling that your CS degree is necessary but not sufficient. Leave in
        week 10 with a calibrated target list, a story bank, a portfolio
        artifact, a recorded mock loop, an ongoing open-source contribution
        (or a cold-email response, or a public artifact at a target company),
        and a written playbook for the rest of your search.
      </p>

      <AnchorHeading as="h2" id="what-this-course-is-about">What this course is about</AnchorHeading>
      <p>
        This is a course on getting a new-graduate software engineering job, taught
        as a quarter-long sprint with a heavy bias toward technical interview
        preparation. The first half builds the coding-interview backbone (data
        structures, algorithms, system design, communication). The second half
        runs the rest of the funnel from both directions: the formal pipeline
        (recruiters, applications, on-sites, negotiation) and the side-door
        pipeline (open source, unpaid stints, find-a-problem-and-just-solve-it).
        Most courses cover the first track. We cover both because both work,
        and the candidates who win at scale combine them.
      </p>
      <p>
        The bias of this course: pattern recognition over memorization, ownership
        over passive applications, written rehearsal over wishful improvisation,
        and one shipped artifact over ten started ones. We assume you can write
        code. We do not assume you have ever told a STAR story, run a system
        design end to end, or computed total compensation from a 4-year RSU
        schedule.
      </p>

      <AnchorHeading as="h2" id="fundamentals">The five fundamentals</AnchorHeading>
      <p>Non-negotiable across all ten weeks.</p>
      <ol>
        <li>
          <strong>Two tracks, run in parallel.</strong> The formal pipeline (apply,
          recruit, interview, offer) and the side-door pipeline (open source,
          unpaid stints, find-a-problem) compound. Run them concurrently from
          week 1.
        </li>
        <li>
          <strong>Pattern fluency over problem count.</strong> Thirty problems
          solved with their pattern named beats two hundred problems solved
          by rote. Speed comes from recognition, not recall.
        </li>
        <li>
          <strong>Rehearsed beats spontaneous.</strong> Twelve STAR stories
          written and timed aloud is the difference between landing on the
          hiring bar and rambling. Same for system design walkthroughs and
          negotiation scripts.
        </li>
        <li>
          <strong>Public artifacts compound.</strong> A merged PR, a working
          demo, a written analysis published on your own surface, all
          accumulate. By week 10 they are your second resume.
        </li>
        <li>
          <strong>One offer is enough; two is leverage.</strong> The goal of
          the formal pipeline is a real offer in hand by graduation. The goal
          of the second offer is the conversation that gets the first offer
          improved.
        </li>
      </ol>

      <AnchorHeading as="h2" id="roadmap">The roadmap</AnchorHeading>
      <h3>Foundations (weeks 1-2)</h3>
      <p>
        How SWE hiring actually works (funnel anatomy, where applicants get
        filtered, the side doors at every stage). Self-positioning: resume that
        passes both the ATS keyword screen and a 30-second human read, GitHub
        as marketing, LinkedIn for SWE, and at least one public artifact you
        commit to shipping by week 10. You leave this phase with a target list
        of 30-50 roles and a recruiter-ready resume.
      </p>

      <h3>Core mechanics (weeks 3-5)</h3>
      <p>
        Three weeks deep on the coding interview. Week 3 covers the format,
        complexity reasoning, and the three early patterns (hash map, two
        pointer, sliding window). Week 4 covers recursion, trees, BFS, and DFS.
        Week 5 covers dynamic programming and the meta-skill of communicating
        while you code. Each week ends in a timed pattern sprint with peer
        debrief.
      </p>

      <h3>Composition (weeks 6-7)</h3>
      <p>
        Week 6 covers system design as a conversation: the rubric, requirements
        clarification, capacity estimation, storage and caching tradeoffs.
        Week 7 covers behavioral interviews (leadership principles, STAR
        structure) and the full interview loop end to end (phone screen,
        virtual on-site, debrief). You run a full mock loop with peers.
      </p>

      <h3>Frontier (weeks 8-9)</h3>
      <p>
        Week 8 is the unconventional path: open source as resume, unpaid
        stints when they are worth it, cold-emailing companies to work for
        free for two weeks, finding a real problem at a target company and
        shipping a fix without asking permission. This is the week that
        separates the candidates who play the game from those who simply
        wait in line. Week 9 runs the formal pipeline end to end (recruiters,
        applications, take-homes, on-sites, follow-ups) and the negotiation
        conversation (total comp, leveling, equity, competing offers, the
        "this is our best offer" pushback).
      </p>

      <h3>Synthesis (week 10)</h3>
      <p>
        Capstone. A one-week application sprint that produces at least three
        live conversations, a recorded full mock loop, one executed
        unconventional move, and a written personal hiring playbook for the
        rest of your search. Demo day in section.
      </p>

      <AnchorHeading as="h2" id="prerequisites">Prerequisites</AnchorHeading>
      <ul>
        <li>Two semesters of programming, with a data structures and algorithms course recommended.</li>
        <li>Comfort writing code in at least one of Python, Java, C++, JavaScript, or Go.</li>
        <li>Basic familiarity with version control (git) and the command line.</li>
        <li>The intent to actually apply for new-grad SWE roles within the next 6-12 months.</li>
      </ul>

      <AnchorHeading as="h2" id="how-the-work-flows">How the work flows</AnchorHeading>
      <p>
        Each week has two lectures, one reading (the textbook chapter generated
        by this course), one section (hands-on, often timed), and zero-to-two
        assignment events. The weekly cadence: read on Monday, attend lecture 1
        Tuesday, lecture 2 Thursday, section on Friday, work assignments and
        capstone over the weekend. Pipeline review (a 30-minute look at your
        own application log and side-door progress) belongs in your week on
        Sundays, the same day every week. Capstone work starts in week 7.
      </p>

      <AnchorHeading as="h2" id="how-you-are-evaluated">How you are evaluated</AnchorHeading>
      <p>
        Six graded components. Exact weights are confirmed before the term
        begins; the structure below is fixed.
      </p>
      <ul>
        <li><strong>Weekly section participation.</strong> Hands-on worksheets, peer review, and (in later weeks) live mock interviews and negotiation role-plays. Attendance and contribution.</li>
        <li><strong>HW1, Resume and portfolio audit.</strong> Out week 1, due week 3. Before-and-after resume, rewritten GitHub README, public-artifact proposal.</li>
        <li><strong>HW2, 30-problem LeetCode pattern sprint.</strong> Out week 3, due week 5. Logged solve times, pattern recognition retrospective.</li>
        <li><strong>HW3, Recorded mock coding interview.</strong> Out week 5, due week 7. A 45-minute recording with self-critique against the rubric.</li>
        <li><strong>HW4, System design write-up.</strong> Out week 6, due week 8. A 5-8 page end-to-end design for a well-known product, with a Mermaid diagram.</li>
        <li><strong>HW5, STAR story bank.</strong> Out week 7, due week 9. Twelve stories mapped to leadership principles, three recorded.</li>
        <li><strong>Capstone.</strong> Out week 7, due week 10. One-week application sprint (15 applications + 5 referrals), one executed unconventional move, full recorded mock loop, written personal hiring playbook.</li>
      </ul>

      <AnchorHeading as="h2" id="policies">Policies</AnchorHeading>
      <h3>Late work</h3>
      <p>
        Each assignment has a 48-hour late window with a standard deduction.
        Beyond 48 hours, the assignment is not accepted without a documented
        emergency. The reason is calibration: by week 9 you are practicing the
        deadline discipline that real on-sites and offer windows demand. Train
        the habit now.
      </p>
      <h3>AI use</h3>
      <p>
        AI assistants are allowed and encouraged for resume drafting, mock
        interview question generation, system design self-review, and writing
        feedback. AI assistants are not allowed for LeetCode problem solutions
        you submit for HW2, for the recorded coding interview (HW3), or for
        the STAR stories you write about your own experience (HW5). The
        principle: AI is a fine training partner; it is not a stand-in for
        the muscle you are building.
      </p>

      <AnchorHeading as="h2" id="reading-list">Reading list</AnchorHeading>
      <p>
        There is no required external textbook. The weekly readings on this
        site ARE the textbook, written for this course. If you want to go
        deeper, the books and resources below are worth owning.
      </p>
      <ul>
        <li><a href="https://www.crackingthecodinginterview.com/" target="_blank" rel="noopener noreferrer">Cracking the Coding Interview</a> by Gayle Laakmann McDowell. The canonical reference. Worth owning if you want a curated 189-problem set with worked solutions.</li>
        <li><a href="https://www.amazon.com/System-Design-Interview-Insiders-Guide/dp/1736049119" target="_blank" rel="noopener noreferrer">System Design Interview: An Insider&rsquo;s Guide</a> by Alex Xu. Volume 1 is the most accessible book-length introduction to system design as it is asked in interviews.</li>
        <li><a href="https://dataintensive.net/" target="_blank" rel="noopener noreferrer">Designing Data-Intensive Applications</a> by Martin Kleppmann. Deeper than any interview needs, and the book that will keep paying you back for the rest of your career.</li>
        <li><a href="https://www.elementsofprogramminginterviews.com/" target="_blank" rel="noopener noreferrer">Elements of Programming Interviews</a> by Aziz, Lee, and Prakash. Tougher problem set than CTCI; pick this one if you have already worked through NeetCode 150.</li>
        <li><a href="https://www.techinterviewhandbook.org/" target="_blank" rel="noopener noreferrer">Tech Interview Handbook</a> by Yangshun Tay. Free, online, comprehensive. Cross-referenced throughout this course.</li>
      </ul>
    </>
  );
}

export const syllabusSearchBody =
  "Syllabus Landing the Offer SWE job search senior CS students Autumn 2026 hiring funnel side doors interview prep DSA system design behavioral negotiation open source unpaid stint capstone roadmap fundamentals prerequisites grading policies reading list";
