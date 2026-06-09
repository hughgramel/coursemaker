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

export function Wk02Reading() {
  return (
    <ReadingPage
      id="wk02"
      title="Week 2: hooks, patterns, and format fit"
      kicker="Grow on X: From Zero to 10,000 Followers · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers two things: how to write a first line that earns
          the click, and how to choose the right post format for any idea. By the
          end you will be able to write five hooks for a single claim using five
          different patterns, identify which pattern any post in your feed is using
          and say whether it works, and pick the right format for a given idea and
          explain that choice.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Niche positioning, ideal-reader
          definition, and voice calibration from week 1. We assume you have written
          at least a draft bio and can describe your target reader in one sentence.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="what-you-should-be-able-to-do">
        1. What you should be able to do after this reading
      </AnchorHeading>
      <p>
        Three things. First, take any single claim and write five distinct hooks
        for it, one for each of the Bush and Cole opener patterns. Second, look
        at any post in your feed and name the pattern it uses, then explain
        whether the execution earns the click or squanders it. Third, given a
        raw idea, decide which format carries it best: single post, thread, quote
        post, reply, or image, and give a specific reason why the other formats
        would be weaker.
      </p>
      <p>
        Each section below targets at least one of those three things. The
        exercises at the end are designed so you can verify your progress before
        section this week.
      </p>

      <AnchorHeading as="h2" id="2-the-first-line">
        2. The first line is the only line that competes
      </AnchorHeading>
      <p>
        X collapses posts to roughly 210 characters before the &ldquo;show
        more&rdquo; cut. On a phone, that is one strong sentence, maybe two weak
        ones. The reader&rsquo;s decision to click or scroll takes under a second.
        Welsh (2022) puts it plainly: &ldquo;The first line is more important
        than 95% of the rest of the post.&rdquo; The post below the fold does not
        compete for attention. It is a reward for the reader who already decided
        your first line was worth their time.
      </p>
      <p>
        This changes how you should allocate editing effort. Most new creators
        spend 80% of their time writing the body and 5% writing the first line.
        The proportion should be closer to the reverse. A mediocre body attached
        to a sharp first line will get read. A brilliant body attached to a weak
        first line will not.
      </p>
      <p>
        Graham (2015) makes a related point about prose friction: &ldquo;Written
        language is more complex, which makes it more work to read. It&rsquo;s
        also more formal and distant, which gives the reader&rsquo;s attention
        permission to drift.&rdquo; The first line is where that drift begins or
        is prevented. Every word above the fold should be doing active work.
      </p>
      <p>
        The practical test: read your first line as if you had never heard of
        yourself. Would a stranger in your niche stop scrolling? If the answer is
        &ldquo;probably not,&rdquo; the first line needs work before anything
        else.
      </p>

      <AnchorHeading as="h2" id="3-six-patterns">
        3. Six opener patterns that work
      </AnchorHeading>
      <p>
        Bush and Cole (2022) document six single-sentence opener patterns that
        consistently earn attention. Each works for a different reason. Learning
        all six means you will never be stuck writing the same kind of hook twice.
      </p>
      <p>
        <strong>Strong declarative.</strong> A direct, confident statement that
        takes a position. &ldquo;Most creators plateau at 500 followers for one
        reason: they post topics, not ideas.&rdquo; This works because it makes a
        claim specific enough to verify or dispute. Neutral statements produce
        neutral responses. A declarative that hedges (&ldquo;it could be argued
        that&rdquo;) is not a declarative.
      </p>
      <p>
        <strong>Thought-provoking question.</strong> A question the reader cannot
        answer without reading the post. &ldquo;Why do some accounts with
        terrible writing grow faster than accounts with beautiful prose?&rdquo;
        This works when the question is one the reader has actually wondered.
        If the answer is obvious, the reader scrolls past. The question must have
        a non-obvious answer that the post genuinely delivers.
      </p>
      <p>
        <strong>Controversial opinion.</strong> A statement that takes a side
        many people in the niche would resist. &ldquo;Posting every day is the
        worst advice most new creators receive.&rdquo; This works because
        disagreement is also a reason to click. The opinion must be one you can
        defend in the body; if the post walks it back, the reader feels tricked.
      </p>
      <p>
        <strong>Moment in time.</strong> Drop the reader into a specific scene
        before giving any context. &ldquo;Three months into posting daily, I had
        47 followers. I almost deleted the account.&rdquo; This works because
        humans process narrative before argument. The moment must be specific:
        who, when, what happened. Abstract scene-setting (&ldquo;I was
        struggling&rdquo;) is not a moment.
      </p>
      <p>
        <strong>Vulnerable statement.</strong> An admission that costs something
        to say publicly. &ldquo;I spent six months building an audience in the
        wrong niche because I was too afraid to niche down.&rdquo; This works
        because vulnerability is rare on a platform built around performance.
        It earns trust fast. The vulnerability must be real; performed
        vulnerability reads as manipulation.
      </p>
      <p>
        <strong>Weird unique insight.</strong> A counter-intuitive observation
        that reframes something the reader thought they understood. &ldquo;The
        accounts that grow fastest are not the ones that post most often. They
        are the ones that edit most ruthlessly.&rdquo; This works because it
        promises a new frame, and new frames are one of the few things worth
        reading on a platform full of repeated conventional wisdom.
      </p>

      <Callout title="Bush and Cole on the first chip">
        <p>
          &ldquo;Once they eat the first chip, they&rsquo;re 10X more likely to
          eat the 2nd, the 3rd, and so on.&rdquo; (Bush and Cole, 2022.) The
          metaphor is useful because it makes the asymmetry concrete: the first
          chip (the hook) does not have to be the best chip. It just has to be
          good enough that the reader picks up the bag. Everything after that is
          easier.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-curiosity-gap-vs-specificity">
        4. Curiosity gap versus specificity
      </AnchorHeading>
      <p>
        There are two ways to make a reader want to click. The first is the
        <strong> curiosity gap</strong>: withhold information they want. &ldquo;The
        one thing most creators skip.&rdquo; The second is{" "}
        <strong>specificity</strong>: give enough concrete detail that the reader
        recognizes their own problem. &ldquo;The one thing most creators skip in
        month two, when growth slows.&rdquo;
      </p>
      <p>
        Cole (2021) names the underlying force the <strong>Rate of
        Revelation</strong>: &ldquo;how quickly a piece of writing reveals
        multiple bits of information that move the reader forward.&rdquo; A
        curiosity-gap hook raises the rate of expectation. A specificity hook
        raises the rate of recognition. The best hooks do both: they name the
        problem specifically and withhold the answer.
      </p>
      <p>
        Generic curiosity-gap hooks fail because they produce clicks that do not
        compound. A reader who clicks &ldquo;the one thing most creators
        skip&rdquo; and finds generic advice does not follow you. A reader who
        clicks &ldquo;the one thing most creators skip in month two&rdquo; and
        finds accurate, specific advice recognizes that you understand their
        situation, and that recognition converts to a follow.
      </p>
      <p>
        The diagnostic question for any hook: can the reader tell whether the
        post is for them? If the answer is no, the hook needs more specificity.
        If the answer is yes but the reader can also already guess the content,
        the hook needs a curiosity gap. Both problems are fixable; the first is
        more common.
      </p>
      <p>
        Examples of generic hooks and what makes them fail:
      </p>
      <ul>
        <li>&ldquo;Here&rsquo;s what I learned from five years of posting&rdquo;
          &mdash; generic time signal, no specific promise. The reader cannot
          tell if those five years produced anything relevant to them.</li>
        <li>&ldquo;Most people get this wrong&rdquo; &mdash; generic target,
          no identifiable problem. &ldquo;This&rdquo; could be anything.</li>
        <li>&ldquo;This changed everything for me&rdquo; &mdash; generic emotion,
          no transferable idea. The reader has no reason to believe it will
          change anything for them.</li>
      </ul>
      <p>
        Each of these can be fixed by adding one specific detail. &ldquo;Here
        is what I learned from five years of posting&rdquo; becomes &ldquo;After
        five years of posting, I still can&rsquo;t predict which posts go viral.
        But I can predict which ones earn followers.&rdquo; The added detail
        narrows the promise and raises the curiosity gap simultaneously.
      </p>

      <AnchorHeading as="h2" id="5-hook-to-payoff">
        5. Hook-to-payoff alignment
      </AnchorHeading>
      <p>
        A hook is a contract. The reader gives attention; the post gives the
        promised value. Breaking the contract damages trust faster than a weak
        hook does, because the reader has already invested time. Basilio (2023)
        reports Bush&rsquo;s framing: &ldquo;The hook of the tweet is the most
        important part. It&rsquo;s kind of like a YouTube video thumbnail, if it
        sucks no one is going to keep reading.&rdquo; The thumbnail analogy is
        useful in both directions: a misleading thumbnail may earn the click,
        but it earns a dislike, not a subscriber.
      </p>
      <p>
        Each pattern creates a specific contract:
      </p>
      <ul>
        <li><strong>Strong declarative</strong> promises proof. The body must
          either demonstrate the claim or precisely define it. A claim hook
          followed by a vague opinion is broken alignment.</li>
        <li><strong>Thought-provoking question</strong> promises an answer the
          reader could not have guessed. The body must deliver that specific
          answer, not a different, easier question.</li>
        <li><strong>Controversial opinion</strong> promises a defense. The body
          must engage the strongest counterargument, not just restate the
          opinion with examples.</li>
        <li><strong>Moment in time</strong> promises a resolution and a point.
          The body must complete the story and name what it means. A story that
          ends without a lesson has broken its contract.</li>
        <li><strong>Vulnerable statement</strong> promises insight earned
          through the experience. The body must deliver the specific thing
          learned, not a general motivational conclusion.</li>
        <li><strong>Weird unique insight</strong> promises the counter-intuitive
          frame in full. The body must explain why the conventional view is
          wrong and what the correct view implies.</li>
      </ul>
      <p>
        A simple audit: read only your hook, then skip to your last line. Does
        the last line answer what the hook asked? If there is a gap between
        what the hook implied and what the body delivered, that gap is where
        readers stop following.
      </p>

      <AnchorHeading as="h2" id="6-worked-example">
        6. A worked example: one claim, five hooks
      </AnchorHeading>
      <p>
        Source claim: &ldquo;Creators who reply to every comment in their first
        three months grow 40% faster than those who do not, according to platform
        data from accounts studied by Basilio (2023).&rdquo;
      </p>
      <p>
        Here are five hooks for that single claim, one per pattern:
      </p>
      <pre>{`Strong declarative:
"Reply to every comment for your first three months.
 That one habit accounts for 40% of early follower growth."

Thought-provoking question:
"What do the fastest-growing accounts in every niche
 have in common that has nothing to do with content quality?"

Controversial opinion:
"Spending time on your posts is less important than spending
 time in your comments. Most creators have the ratio backwards."

Moment in time:
"Month two. 120 followers. I started replying to every
 comment, even the one-word ones. Growth changed direction."

Weird unique insight:
"The engagement algorithm doesn't care how good your post is.
 It cares whether you stayed in the conversation after you posted."`}</pre>
      <p>
        Each hook makes the same underlying point but creates a different
        contract. The strong declarative promises a causal claim backed by
        data. The thought-provoking question promises a non-obvious common
        factor. The controversial opinion promises a defense of a position most
        people resist. The moment in time promises a story that resolved. The
        weird unique insight promises a new frame for how the algorithm works.
      </p>
      <p>
        In section this week, you will run this exercise with twenty hooks
        instead of five. The goal is to exhaust the obvious options before
        committing to one. The best hook rarely comes first.
      </p>

      <AnchorHeading as="h2" id="7-post-formats">
        7. Post formats: what each one does
      </AnchorHeading>
      <p>
        The pattern you pick for your first line determines what the hook
        promises. The format you pick determines how much space you have to
        deliver on it. These two decisions are separate, and getting one right
        while getting the other wrong produces misalignment in a different
        direction: a tight single post that tried to be a thread, or a
        thread that should have been one sentence.
      </p>
      <p>
        <strong>Single post.</strong> One idea, one argument, one payoff, all
        within 280 characters. Bush and Cole (2022) make the test explicit:
        start every idea as a single post. If it gets strong engagement, you
        have evidence the idea earns more space. If it does not, expanding it
        into a thread would only have amplified a weak signal. Basilio (2023)
        reports that Bush posts 8-10 single tweets weekly, then expands only
        the top two. The single post is the atomic unit and the test environment.
      </p>
      <p>
        <strong>Thread.</strong> A sequence of posts where each tweet stands
        alone but the sequence earns more than the parts. Bush and Cole (2022)
        prescribe four components: a lead-in tweet that works as a standalone
        hook, main points (3-7 tweets, one idea each), a TL;DR recap, and a
        specific CTA. The lead-in tweet is the only tweet non-followers see.
        If it cannot justify the thread on its own, the thread does not earn
        its length. Bush and Cole are direct: &ldquo;Every single word in your
        lead-in tweet should help with one of these two goals, otherwise you
        should cut it.&rdquo; The two goals are: headline (what is this about)
        and hook (why should I care).
      </p>
      <p>
        <strong>Quote post.</strong> Your take on someone else&rsquo;s post,
        surfaced to the audience of the original. Three uses: amplify (agree
        and add a specific frame), critique (disagree and explain precisely
        why), or contextualize (add a frame the original lacked). The commentary
        is your post; the quoted content is the evidence. A quote post that
        only says &ldquo;this&rdquo; or &ldquo;great point&rdquo; adds nothing
        and earns nothing.
      </p>
      <p>
        <strong>Reply.</strong> The lowest-barrier format and the most underused
        one among new creators. A well-placed reply on a large account&rsquo;s
        post can earn more impressions than a standalone post of the same
        quality, because the large account&rsquo;s audience is already assembled.
        The reply must stand alone: assume most readers will not click through
        to the original. A reply that teaches something earns followers; a reply
        that performs engagement earns nothing.
      </p>
      <p>
        <strong>Image post.</strong> One visual, one point. Welsh (2022) calls
        this the above-the-fold constraint applied to visuals: the image must
        communicate before the viewer reads the caption. A screenshot that proves
        a single claim is stronger than a polished infographic with three claims.
        If you cannot say what the image proves in one sentence, the image is
        doing too much.
      </p>

      <AnchorHeading as="h2" id="8-format-fit">
        8. Format fit: matching the container to the idea
      </AnchorHeading>
      <p>
        The right format is not a preference. It is a function of what the idea
        actually needs. Bush and Cole (2022) describe formats as constraints that
        sharpen ideas, not containers you choose based on mood. The decision
        tree below makes the choice explicit.
      </p>

      <Mermaid
        alt="Format-fit decision flowchart: from raw idea to single post, thread, quote post, reply, or image post"
        chart={`flowchart TD
  A[Raw idea] --> B{Fits in 280 characters?}
  B -- Yes --> C[Single post]
  B -- No --> D{3 to 7 distinct sub-points?}
  D -- Yes --> E[Thread]
  D -- No --> F{Reacting to another post?}
  F -- Yes --> G{Adding your own take?}
  G -- Yes --> H[Quote post]
  G -- No --> I[Reply]
  F -- No --> J{One visual proves the point?}
  J -- Yes --> K[Image post]
  J -- No --> L[Rethink the idea]`}
      />

      <p>
        A few notes on how to use the flowchart honestly. &ldquo;Fits in 280
        characters&rdquo; does not mean &ldquo;can be compressed to 280
        characters by cutting all the evidence.&rdquo; It means the idea is
        genuinely complete in that space. If compression removes the reason to
        care, the idea does not fit. &ldquo;3 to 7 distinct sub-points&rdquo;
        means each point is independently interesting, not just a variation on
        the hook. And &ldquo;rethink the idea&rdquo; at the bottom is not a
        failure state. An idea that cannot be contained in any format is
        usually two ideas, or an idea that has not been sharpened enough yet.
        Return to the first line: what exactly are you claiming?
      </p>

      <AnchorHeading as="h2" id="9-lean-writing">
        9. Lean writing: start small and earn more space
      </AnchorHeading>
      <p>
        Bush and Cole (2022) call the expansion from single post to thread{" "}
        &ldquo;lean writing.&rdquo; The core principle: test as a single tweet
        first; expand only if engagement validates. This matters for two reasons.
        First, engagement on the single tweet is evidence that the idea earns
        more space. Without that evidence, a thread is speculation. Second,
        the hook from the single tweet transfers unchanged into the lead-in
        tweet of the thread. As Bush and Cole write: &ldquo;Notice how the
        first sentence, and each of the Main Points, is the exact same as the
        original tweet.&rdquo; The main points come from unpacking what the
        single tweet implied. The lean approach also forces you to find the
        minimum viable version of any idea before inflating it.
      </p>
      <p>
        This connects back to the diagnostic from section 5. If your single
        post hook does not stand alone, the thread built on top of it will not
        stand either. The hook is the load-bearing wall.
      </p>

      <AnchorHeading as="h2" id="10-exercises">10. Exercises</AnchorHeading>
      <p>Work these before section. The section lab builds on the first two.</p>

      <Exercise n={1}>
        <p>
          Take one factual claim from your niche: a specific, verifiable
          statement you could say out loud at a dinner table without footnotes.
          Write one hook for it using each of the six Bush and Cole patterns:
          strong declarative, thought-provoking question, controversial opinion,
          moment in time, vulnerable statement, and weird unique insight. Label
          each with its pattern. Read them back to back. Which one would you
          publish first, and why?
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Open your feed and find five posts. For each post, identify the opener
          pattern it uses (or the closest match). Then answer: does the body
          deliver on what the hook promises? Name one specific thing the body
          either confirms or breaks. If a post uses no recognizable pattern,
          describe what it uses instead and whether it works.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          Take an idea you have been sitting on. Run it through the format-fit
          flowchart. Write down which format the flowchart points to and why.
          Then write the idea in that format. If the format turns out to be
          wrong when you try to write it, go back to the flowchart and identify
          which decision was wrong.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Find one post in your feed that uses a curiosity-gap hook without
          enough specificity. Rewrite the first line so it retains the
          curiosity gap but adds enough detail that the reader can tell whether
          the post is for them. Keep the rewrite under 210 characters.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          Write the lead-in tweet for a thread on a topic in your niche. Then
          check it against the Bush and Cole test: does every word serve either
          &ldquo;headline&rdquo; or &ldquo;hook&rdquo;? Cut the words that do
          neither. How many words survived?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="11-going-deeper">11. Going deeper</AnchorHeading>
      <ul>
        <li>
          <strong>Section this week: Hook lab.</strong> Twenty hooks against one
          source claim. Peer rating on specificity and curiosity. The exercises
          above are preparation; section is the live rep.
        </li>
        <li>
          <strong>Lecture 1 this week.</strong> Covers the 210-character
          constraint and the five core patterns in more depth, with worked
          examples from real posts.
        </li>
        <li>
          <strong>Lecture 2 this week.</strong> Covers format fit in practice,
          with the lean writing expansion method and live format decisions.
        </li>
        <li>
          <strong>HW2 (out this week).</strong> Twenty posts in seven days.
          Every post you write uses the hook patterns from this reading. The
          format-fit flowchart is your decision guide.
        </li>
        <li>
          <strong>Optional: Viral Writing 101</strong> (Bush, Cole, Shaan Puri
          on YouTube, ~55 min):&nbsp;
          <a href="https://www.youtube.com/watch?v=fN1kLxB1JIc">
            watch the full session at youtube.com
          </a>.
          Watch this for a live demonstration of how the patterns work across
          different voices and niches.
        </li>
        <li>
          <strong>Optional: Writing Twitter Threads 101</strong> (Mack, Bush,
          Cole on YouTube, ~60 min):&nbsp;
          <a href="https://www.youtube.com/watch?v=0d-0evLKYL4">
            watch the full session at youtube.com
          </a>.
          Watch this before writing your first thread. The format decisions in
          section 7 of this reading map directly to what they demonstrate live.
        </li>
      </ul>

      <Takeaways>
        <li>
          The first line is the only line that competes. Allocate most of your
          editing effort there, not in the body.
        </li>
        <li>
          Six patterns cover most of what works: strong declarative,
          thought-provoking question, controversial opinion, moment in time,
          vulnerable statement, and weird unique insight. Each creates a
          different contract with the reader.
        </li>
        <li>
          Curiosity gap without specificity earns clicks that do not compound
          into followers. The best hooks name the problem specifically and
          withhold the answer.
        </li>
        <li>
          Hook-to-payoff alignment is the contract. Breaking it costs more than
          a weak hook does, because the reader already invested time.
        </li>
        <li>
          Format is not preference. Single post, thread, quote post, reply, and
          image post each fit different idea shapes. Match the container to the
          idea, starting with the smallest container that holds it.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Basilio, Chenell. &ldquo;How Dickie Bush Went From 0 to 326k Twitter
          Followers in 30 Months.&rdquo; 2023.{" "}
          <a href="https://growthinreverse.com/dickie-bush/">
            growthinreverse.com/dickie-bush/
          </a>
          . Documents Bush&rsquo;s posting cadence and the hook-as-thumbnail
          framing.
        </p>
        <p>
          Bush, Dickie, and Nicolas Cole. &ldquo;6 Proven Single-Sentence
          Openers to Hook Your Reader&rsquo;s Attention.&rdquo; Ship 30 for 30,
          2022.{" "}
          <a href="https://www.ship30for30.com/post/6-proven-single-sentence-openers-to-hook-your-reader-s-attention">
            ship30for30.com
          </a>
          . Source for the six opener patterns and the first-chip metaphor.
        </p>
        <p>
          Bush, Dickie, and Nicolas Cole. &ldquo;How to Write a Twitter Thread:
          The Complete Guide.&rdquo; Ship 30 for 30, 2022.{" "}
          <a href="https://www.ship30for30.com/post/how-to-write-a-twitter-thread">
            ship30for30.com
          </a>
          . Source for the Lead-In Tweet + Main Points + TL;DR + CTA structure
          and the &ldquo;every word must serve headline or hook&rdquo; test.
        </p>
        <p>
          Bush, Dickie, and Nicolas Cole. &ldquo;Lean Writing on Twitter: Tweet
          to Thread to Atomic Essay.&rdquo; Ship 30 for 30, 2022.{" "}
          <a href="https://www.ship30for30.com/post/lean-writing-on-twitter-how-to-turn-a-tweet-into-a-thread-into-an-atomic-essay">
            ship30for30.com
          </a>
          . Source for the test-as-single-tweet-first principle and the hook
          transfer method.
        </p>
        <p>
          Cole, Nicolas. <em>The Art and Business of Online Writing.</em> 2021.
          Source for the Rate of Revelation concept and the role of information
          density in keeping readers moving.
        </p>
        <p>
          Graham, Paul. &ldquo;Write Like You Talk.&rdquo; 2015.{" "}
          <a href="https://paulgraham.com/talk.html">paulgraham.com/talk.html</a>
          . Source for the observation that formality gives the reader&rsquo;s
          attention permission to drift.
        </p>
        <p>
          Welsh, Justin. &ldquo;How to Go Viral in 3 Steps: The Anatomy of a
          Viral Post.&rdquo; 2022.{" "}
          <a href="https://www.justinwelsh.me/newsletter/the-anatomy-of-a-viral-linkedin-post">
            justinwelsh.me
          </a>
          . Source for the 210-character above-the-fold constraint and the
          claim that the first line outweighs 95% of the rest.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk02ReadingSearchBody =
  "hooks hook patterns six openers strong declarative thought-provoking question controversial opinion moment in time vulnerable statement weird unique insight curiosity gap specificity hook-to-payoff alignment rate of revelation post formats single post thread quote post reply image post format fit lean writing 210 characters above the fold Week 2 reading X Twitter growth";
