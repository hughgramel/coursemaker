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

export function Wk01Reading() {
  return (
    <ReadingPage
      id="wk01"
      title="Week 1: the follower funnel, niche positioning, and bio craft"
      kicker="Grow on X: From Zero to 10,000 Followers · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers three things: how the X growth funnel actually
          works, how to pick a niche narrow enough to matter, and how to rewrite
          your bio as a conversion landing page. By the end you will be able to
          name the three steps of the follower funnel, explain the niche/voice/bio
          triangle, and apply a four-element structure to rewrite any bio.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> None. This is week 1. We assume
          you have an X account (or are about to create one) and that you want to
          reach 10,000 followers. No prior knowledge of platform analytics or
          marketing is required.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-the-funnel">
        1. The follower funnel: three steps, three levers
      </AnchorHeading>
      <p>
        Every follower you will ever gain passes through exactly three gates.
        First, your post appears in someone&rsquo;s feed or search results: that
        is an <strong>impression</strong>. Second, that person finds the post
        interesting enough to tap your name and look at your profile: that is a{" "}
        <strong>profile click</strong>. Third, they decide the profile is worth
        following: that is the <strong>follow</strong>. These three steps form a
        conversion funnel, and each step has its own conversion rate.
      </p>

      <Mermaid
        alt="The follower funnel: impression to profile click to follow"
        chart={`flowchart LR\n  A[Impression] --> B[Profile click] --> C[Follow]`}
      />

      <p>
        The funnel matters because it tells you where your growth is actually
        stalling. Many new creators assume their problem is follower count, so
        they chase more impressions: they post more often, use more hashtags, reply
        to bigger accounts hoping for attention. But if your profile-click-to-follow
        rate is 3% while a comparable account converts at 25%, posting more only
        pours more water into a bucket with a hole. The problem is the profile, not
        the content volume.
      </p>
      <p>
        Welsh (2023) describes this in terms of a three-layer funnel: top-of-funnel
        metrics (impressions, likes, follows), middle-of-funnel conversions
        (newsletter signups, website visits), and bottom-of-funnel outcomes
        (purchases, revenue). Follower count lives at the top. It is a necessary
        input, not an end in itself. Welsh writes: &ldquo;The average creator never
        stops focusing on the top of their funnel. To build a real business, you
        have to move people from the top down to the bottom.&rdquo; For this course
        the goal is 10,000 followers, which is a top-of-funnel milestone. But we
        design everything with the full funnel in mind, because the practices that
        drive genuine follower growth (clear positioning, consistent voice, a
        bio that converts) are the same ones that eventually drive revenue.
      </p>

      <AnchorHeading as="h2" id="2-lagging-indicator">
        2. Why follower count is a lagging indicator
      </AnchorHeading>
      <p>
        A <strong>lagging indicator</strong> measures the result of actions you
        took in the past. Your follower count today reflects posts you wrote days or
        weeks ago, a bio you set up months ago, and a positioning decision you made
        (or never made) at the start. You cannot change your follower count today.
        You can only change the inputs that will move it tomorrow.
      </p>
      <p>
        The inputs you can change today are <strong>leading indicators</strong>:
        the quality of the post you are about to write, the clarity of your bio,
        how quickly you reply to the people who comment, whether your profile photo
        matches the energy of your content. These are the levers. Obsessing over
        follower count is like watching the scoreboard instead of watching the
        ball.
      </p>
      <p>
        This matters practically because it changes what you measure week-to-week.
        In the first 30 days, useful metrics include: profile visits per post,
        reply-to-impression ratio (a proxy for how well you provoke conversation),
        and the percentage of your last ten posts that drove at least one new
        follow. These are leading. Checking your total follower count every morning
        is not.
      </p>

      <AnchorHeading as="h2" id="3-shadow-audience">
        3. The shadow audience
      </AnchorHeading>
      <p>
        Every account has two audiences. The <strong>visible audience</strong> is
        the people who like, reply, and repost: they create the social proof you
        can see. The <strong>shadow audience</strong> is larger and quieter. It
        includes lurkers who read every post but never engage publicly, repliers
        who talk about your content to others without tagging you, and sharers who
        send your posts in private messages or group chats. On most content
        platforms, lurkers outnumber vocal followers by a factor of roughly nine
        to one (a formulation sometimes called the 1% rule of internet culture,
        though the exact ratio varies by platform and topic).
      </p>
      <p>
        The shadow audience is not a problem to solve. It is an asset to understand.
        A post that gets 40 likes may have been read by 4,000 people and forwarded
        privately by 200 of them. The 40 likes undercount the real impact. This
        means you should not draw strong conclusions from low engagement on a single
        post, especially early on when your audience is small. What you can do is
        watch for signals that the shadow audience is active: spikes in profile
        visits that do not match a spike in public likes, new followers who mention
        they &ldquo;have been reading for a while,&rdquo; or direct messages from
        people you have never seen in your comments.
      </p>
      <p>
        The shadow audience also shapes what you write. Lurkers read because a topic
        is useful or interesting, not because they want to participate in a public
        conversation. Content that serves the shadow audience tends to be clear,
        self-contained, and useful without requiring context from earlier posts.
        That is good content discipline regardless of audience size.
      </p>

      <AnchorHeading as="h2" id="4-90-day-target">
        4. Setting a 90-day target and working backwards
      </AnchorHeading>
      <p>
        A 90-day target turns a vague ambition into a weekly quota. The arithmetic
        is simple. Suppose you start at 200 followers and want to reach 10,000 in
        90 days. You need 9,800 new followers in 13 weeks, or roughly 754 per week.
        If your current follow rate is 30 followers per post and you post five times
        per week, you are on pace for 150 per week: about one-fifth of what you
        need. Either your per-post follow rate needs to improve, or your posting
        frequency needs to increase, or both.
      </p>
      <p>
        Working backwards forces you to confront the gap between where you are and
        where you want to be. Most people avoid this arithmetic because the gap is
        uncomfortable. But the gap is information. It tells you that your current
        approach, repeated unchanged, will not produce the outcome you want. That
        is not a discouraging conclusion; it is a specific and actionable one.
      </p>

      <Callout title="The 90-day arithmetic in practice">
        <p>
          Start with your target: followers needed minus current count. Divide by
          13 weeks for a weekly quota. Divide the weekly quota by your planned
          posts-per-week to get the required follows-per-post. If that number is
          much higher than your current rate, the gap is in your profile and
          content quality, not in posting volume. Fix the profile first.
        </p>
      </Callout>

      <p>
        The 90-day frame also matters because it is long enough for compounding to
        appear but short enough to stay legible. At 10,000 followers, the
        distribution of your posts widens: each post reaches more people, which
        means more profile clicks, which means more follows. The growth rate in
        weeks 10-13 will be faster than in weeks 1-3 if you are doing the
        foundational work correctly. Kelly (2008) captured the underlying logic
        in a different context: a small base of dedicated readers is worth more than
        a large base of passive ones, because the engaged core shares and
        recommends. You are building toward that core in the first 90 days.
      </p>

      <AnchorHeading as="h2" id="5-niche">
        5. Picking a niche narrow enough to be remembered
      </AnchorHeading>
      <p>
        A niche is a positioning decision, not a topic area. &ldquo;Personal
        finance&rdquo; is a topic. &ldquo;Debt payoff strategies for nurses in
        their first five years of practice&rdquo; is a niche. The difference
        matters because the wider the topic, the more direct competition you face
        and the less clearly any individual reader can identify you as relevant
        to their life.
      </p>
      <p>
        Perell (2019) describes this as the <strong>Personal Monopoly</strong>: the
        intersection of your skills, interests, and perspective that no one else
        occupies in quite the same way. The monopoly is not about being the only
        person who knows a topic. It is about being the only person who combines
        this set of experiences, this voice, and this specific reader in mind.
        Perell writes: &ldquo;Write on the Internet and become known for something
        unique, and serendipity will come next.&rdquo;
      </p>
      <p>
        Welsh (2024) offers a practical three-step approach. First, find a market
        where people are already spending money on a problem: this confirms the
        demand exists. Second, immerse yourself in the conversations happening in
        that market (forums, comment sections, subreddits, existing X accounts).
        Third, find where your own skills and experience intersect with that demand.
        The intersection is your niche. Welsh&rsquo;s key finding: &ldquo;The best
        ideas don&rsquo;t come from brainstorming in isolation.&rdquo;
      </p>
      <p>
        A common fear is that a narrow niche will limit audience size. The
        evidence runs the other way. Graham (2013) described the pattern in the
        context of startups, but it applies directly to creator growth: Facebook
        launched at Harvard only, not because Harvard was the end goal, but because
        intensity within a small defined group produces word-of-mouth that a
        diluted broad audience never does. A creator who is unmistakably useful to
        a specific person grows faster among that person&rsquo;s peers than a
        creator who is vaguely interesting to everyone.
      </p>
      <p>
        Koe (2023) takes the argument one step further: &ldquo;The most profitable
        niche is you. Your interests are what make your brand unique.&rdquo; The
        risk of a purely interest-based niche is that it can feel self-indulgent
        without a clear reader in mind. The practical synthesis: start with your
        authentic interests (Koe), filter them through market demand (Welsh), and
        express the result as a service to a specific person (Perell). That
        combination is defensible.
      </p>

      <AnchorHeading as="h2" id="6-voice-triangle">
        6. The who/what/how triangle
      </AnchorHeading>
      <p>
        Once you have a niche, you need a voice. The <strong>who/what/how
        triangle</strong> is a tool for diagnosing whether your positioning is
        complete. Each corner asks a different question:
      </p>
      <ul>
        <li>
          <strong>Who you serve.</strong> A specific person with a specific
          problem. Not &ldquo;entrepreneurs&rdquo; but &ldquo;first-time founders
          who are pre-revenue and overwhelmed by technical decisions.&rdquo; The
          more precisely you can picture this person, the more directly you can
          write for them.
        </li>
        <li>
          <strong>What you say.</strong> The set of claims, frameworks, and
          perspectives you consistently bring. This is your intellectual
          territory: the ideas you return to, the arguments you make that others
          in your niche do not. Consistency here is what builds recognition.
        </li>
        <li>
          <strong>How you sound.</strong> Tone, sentence rhythm, the kind of humor
          (if any) you use, how you handle disagreement, whether you lead with
          data or story. Voice is the carrier signal. Two creators can say the
          same thing, and the one whose voice resonates with the reader will be
          remembered; the other will be skipped.
        </li>
      </ul>
      <p>
        A common failure mode is a strong &ldquo;what&rdquo; with a weak
        &ldquo;who.&rdquo; The creator has clear opinions but no specific reader
        in mind, so the content feels like it is talking to everyone and
        connecting with no one. Another common failure: a clear &ldquo;who&rdquo;
        and &ldquo;what&rdquo; but a generic &ldquo;how.&rdquo; The voice is
        interchangeable with a dozen other accounts in the niche. The triangle
        gives you a diagnostic: find the weakest corner and fix it first.
      </p>

      <AnchorHeading as="h2" id="7-bio">
        7. Bio as a conversion landing page
      </AnchorHeading>
      <p>
        Your bio is the decision page. A visitor who clicks your profile has
        already expressed interest: they saw something in your post worth
        investigating. Your bio has roughly three seconds and 160 characters to
        convert that interest into a follow. Most bios fail at this by treating
        the space as a resume rather than a pitch.
      </p>
      <p>
        The four-element structure that converts:
      </p>
      <ol>
        <li>
          <strong>Name/identity.</strong> Who you are in one phrase. Not your
          job title, which tells the reader about your past. Your identity as a
          creator: who you help and what you help them do. This is the
          first-line promise.
        </li>
        <li>
          <strong>Headline.</strong> The specific outcome or transformation you
          deliver. Concrete beats abstract. &ldquo;I help indie founders ship
          faster without burning out&rdquo; is a headline. &ldquo;Sharing
          thoughts on startups and life&rdquo; is not.
        </li>
        <li>
          <strong>Proof.</strong> One piece of evidence that the headline is
          credible. This does not need to be a credential. It can be a result
          (&ldquo;went from 0 to 12k in 14 months&rdquo;), an affiliation
          (&ldquo;ex-Google&rdquo;), or a concrete artifact (&ldquo;free
          newsletter, 6,000 readers&rdquo;). The proof lowers the risk of
          following someone who turns out to be irrelevant.
        </li>
        <li>
          <strong>CTA (call to action).</strong> One next step. A link to your
          newsletter, a pinned thread, a free resource. The CTA moves the
          relationship from passive follow to active engagement, which is the
          beginning of the middle-of-funnel journey Welsh (2023) describes.
        </li>
      </ol>
      <p>
        The profile photo and header are silent signals that run before the bio.
        A visitor forms an impression of your account before reading a word. A
        high-contrast photo where your face is clearly visible performs better
        than a logo or a landscape for most solo creators, because people follow
        people. The header image is an opportunity to reinforce your positioning:
        a single line of text, a visual that implies your topic, or social proof
        (&ldquo;join 8,000 readers&rdquo;). The header should be consistent with
        the bio, not decorative.
      </p>

      <AnchorHeading as="h2" id="8-worked-example">
        8. A worked example: rewriting a bio
      </AnchorHeading>
      <p>
        Here is a real-pattern bio rewrite. The original bio reads:
      </p>
      <pre>{`Software engineer at a startup. I write about tech, productivity, and
life. Occasional runner. Views are my own.`}</pre>
      <p>
        Apply the four-element test: no clear identity (job title, not creator
        role), no headline (three topics, no promised outcome), no proof, no CTA.
        The visitor has no reason to follow unless they happen to be interested in
        a vague overlap of tech, productivity, and life from an anonymous
        perspective.
      </p>
      <p>
        Now apply the who/what/how triangle. Suppose the creator&rsquo;s real
        niche is: helping early-career engineers navigate their first year at a
        startup without getting overwhelmed. The &ldquo;who&rdquo; is clear.
        The &ldquo;what&rdquo; is practical survival tactics for the first year.
        The &ldquo;how&rdquo; is direct and tactical, no fluff.
      </p>
      <p>Revised bio:</p>
      <pre>{`I help new engineers survive (and enjoy) their first startup year.
3 years at Series A-C companies. Writing what I wish I&rsquo;d known.
Free weekly guide: [link]`}</pre>
      <p>
        The identity is creator-framed (&ldquo;I help new engineers&rdquo;). The
        headline names the outcome. The proof is specific (three years, a defined
        stage). The CTA is one step. The total character count is under 160. A
        visitor who is a new engineer at a startup will recognize themselves in
        the first line and have a strong reason to follow. A visitor who is not
        that person will self-select out, which is the correct outcome: you want
        followers who need what you offer.
      </p>

      <AnchorHeading as="h2" id="9-exercises">9. Exercises</AnchorHeading>
      <p>Work these before or during section this week.</p>

      <Exercise n={1}>
        <p>
          Draw the follower funnel for your current account (or a hypothetical
          one). At each step, estimate the conversion rate. Where is the biggest
          drop-off? What one change would have the highest impact on that step?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Apply the 90-day arithmetic to your own target. Start with your current
          follower count and a target of 10,000. How many new followers per week
          do you need? How many follows per post, assuming your current (or
          planned) posting frequency? Is that rate realistic given accounts at a
          similar stage in your niche?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Write a one-sentence niche statement in the form: &ldquo;I help
          [specific person] do [specific thing] by [specific method].&rdquo; Then
          identify a real X account that serves that same person. How does their
          positioning differ from yours? Where is the gap you can occupy?
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Apply the four-element bio test to your current bio (or write a bio
          from scratch if you don&rsquo;t have one). Mark each element present or
          absent. Rewrite the bio so all four elements are present in 160
          characters or fewer.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Find three accounts in your niche whose bios convert well (you can tell
          because after reading the bio you immediately understand the promise).
          What do they have in common? What does each do differently from the
          others?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="10-going-deeper">10. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week.</strong> The section worksheet asks you to
          audit five accounts in your niche using the frameworks from this
          reading. Bring your four-element bio rewrite to section for peer review.
        </li>
        <li>
          <strong>Lecture 1 (this week).</strong> Covers the funnel and the
          shadow audience in more depth, with data from real accounts.
        </li>
        <li>
          <strong>Lecture 2 (this week).</strong> Covers the who/what/how
          triangle and bio craft with live rewrites and discussion.
        </li>
        <li>
          <strong>HW 1 (due next week).</strong> Niche and bio rewrite. The
          niche statement and bio draft you produce this week are your raw
          material for the assignment.
        </li>
      </ul>

      <Takeaways>
        <li>
          The follower funnel has three steps (impression, profile click, follow),
          and each step has a conversion rate you can diagnose and improve
          separately.
        </li>
        <li>
          Follower count is a lagging indicator. The leading indicators that
          predict growth (bio clarity, content quality, reply rate) are the ones
          worth tracking weekly.
        </li>
        <li>
          The shadow audience is real and larger than your visible engagement
          suggests. Design content to serve lurkers as well as participants.
        </li>
        <li>
          A defensible niche combines authentic interest (Koe), market demand
          (Welsh), and a specific reader in mind (Perell). Narrow beats broad
          for early-stage growth.
        </li>
        <li>
          A bio that converts has four elements: identity, headline, proof, and
          CTA. Missing any one of them leaks follows you already earned.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Graham, Paul. &ldquo;Do Things that Don&rsquo;t Scale.&rdquo; 2013.{" "}
          <a href="https://paulgraham.com/ds.html">paulgraham.com/ds.html</a>.
          Discusses the value of constrained early audiences and manual growth;
          the Harvard-only Facebook launch as a model for creator niche strategy.
        </p>
        <p>
          Kelly, Kevin. &ldquo;1,000 True Fans.&rdquo; 2008.{" "}
          <a href="https://kk.org/thetechnium/1000-true-fans/">
            kk.org/thetechnium/1000-true-fans/
          </a>
          . The foundational argument for small engaged audiences over large
          passive ones.
        </p>
        <p>
          Koe, Dan. &ldquo;The Most Profitable Niche Is You.&rdquo; 2023.{" "}
          <a href="https://thedankoe.com/letters/the-most-profitable-niche-is-you-how-to-create-your-niche/">
            thedankoe.com/letters/...
          </a>
          . Argues that authentic self-expression is a defensible competitive
          advantage in creator niches.
        </p>
        <p>
          Perell, David. &ldquo;The Ultimate Guide to Writing Online.&rdquo; 2019.{" "}
          <a href="https://perell.com/essay/the-ultimate-guide-to-writing-online/">
            perell.com/essay/the-ultimate-guide-to-writing-online/
          </a>
          . Introduces the Personal Monopoly concept and the role of niche clarity
          in online writing.
        </p>
        <p>
          Welsh, Justin. &ldquo;The Counterintuitive Approach to Uncovering Your
          Profitable Niche.&rdquo; 2024.{" "}
          <a href="https://www.justinwelsh.me/newsletter/the-counterintuitive-approach-to-uncovering-your-profitable-niche">
            justinwelsh.me/newsletter/...
          </a>
          . Three-step framework: find a market, immerse in customer conversations,
          blend skills with demand.
        </p>
        <p>
          Welsh, Justin. &ldquo;Metrics that Matter: Going Beyond Followers and
          Likes.&rdquo; 2023.{" "}
          <a href="https://www.justinwelsh.me/newsletter/metrics-that-matter-going-beyond-followers-likes">
            justinwelsh.me/newsletter/...
          </a>
          . Describes the three-layer creator funnel and the limits of follower
          count as a success metric.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk01ReadingSearchBody =
  "follower funnel impression profile click follow conversion lagging indicator leading indicator shadow audience lurkers niche positioning personal monopoly voice bio craft name headline proof CTA who you serve 90-day target working backwards Week 1 reading X Twitter growth";
