import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk11Reading() {
  return (
    <ReadingPage
      id="wk11"
      title="Week 11: Owned loops and the content engine"
      kicker="LangoBee to $10K MRR · Summer 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers growth loops and how they differ from linear acquisition funnels,
          how to measure the viral coefficient honestly, and how to turn LangoBee's existing
          17,440-video catalog into two owned distribution channels: short-form social
          repurposing and programmatic SEO. By the end you will be able to draw LangoBee's
          candidate loop, compute its K-factor from the June 2026 data, and design the first
          five programmatic catalog pages.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> Community launch and channel fit (week 9),
          creator deal structures and UTM attribution (week 10). You should know what a
          Bullseye test is and why the existing Discord channel is the only proven acquisition
          source.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-loops-vs-funnels">1. Growth loops are not funnels</AnchorHeading>
      <p>
        A linear acquisition funnel has two defining properties: it starts with an external
        input you provide, and it ends when the user pays or leaves. Growth is always
        proportional to what you pour in at the top. Stop pouring and growth stops.
      </p>
      <p>
        A growth loop is different in one structural way: the output of one cycle becomes an
        input to the next. Users who engage with the product generate outputs (shares, content,
        referrals, data) that bring in new users, who generate more outputs, who bring in more
        users. The loop compounds without a fresh external investment at every cycle.
      </p>
      <p>
        Balfour, Winters, Kwok, and Chen (2018) describe three loop types that apply to consumer
        products. An acquisition loop turns user engagement into new-user acquisition. An
        engagement loop turns product usage into content or social proof that keeps existing
        users engaged. A monetization loop turns revenue into product improvements that
        increase willingness to pay. The strongest companies run all three, but building the
        first one is enough to change the economics of distribution.
      </p>
      <p>
        The practical difference for a solo founder: a funnel requires your labor at every cycle.
        A loop, once turning, does not. LangoBee's current acquisition comes entirely from
        manual Discord recruiting. That is a funnel with you as the top. The shorts feed is the
        candidate loop input. Whether it is actually a loop depends on whether shares are
        happening and whether shares produce signups.
      </p>

      <Callout title="Loop vs funnel: the test">
        <p>
          Ask: when a new user signs up, did any other user cause it without your involvement?
          If yes, a loop is running. If every signup traces back to something you personally did
          (a Discord message, a Reddit post, a cold DM), you have a funnel. LangoBee's June 2026
          answer: every signup traces to something you did. There is no loop yet.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="2-the-candidate-loop">2. The candidate loop and what it requires</AnchorHeading>
      <p>
        LangoBee has one candidate acquisition loop: a user sees a clip in the shorts feed,
        watches it to completion, shares it to someone outside the app, that person discovers
        LangoBee, signs up, and becomes a feed user who may share clips in turn.
      </p>
      <p>
        This loop has four stages, each with a conversion rate:
      </p>
      <ul>
        <li><strong>Impression to completion:</strong> 101 completions from 408 impressions, 28%.</li>
        <li><strong>Completion to share:</strong> 1 share from 101 completions, roughly 1%.</li>
        <li><strong>Share to new signup:</strong> unknown. There is no attribution on the one share.</li>
        <li><strong>New signup to feed user:</strong> unknown. It depends on whether the new signup activates.</li>
      </ul>
      <p>
        For the loop to compound at any level, you need a measurable share-to-signup rate.
        With 1 share in 30 days, you do not have enough data to measure it. The loop is
        not broken; it is pre-functional. The distinction matters: pre-functional means the
        mechanism exists but the volume is too low to observe. Broken means the mechanism
        fails even with sufficient volume.
      </p>

      <AnchorHeading as="h2" id="3-viral-coefficient">3. The viral coefficient, measured honestly</AnchorHeading>
      <p>
        The viral coefficient (K-factor) is defined as:
      </p>
      <pre>{`K = (shares per user) x (signups per share)`}</pre>
      <p>
        A K above 1 means each user produces more than one new user. The product grows on its
        own. A K below 1 means external acquisition is still needed to maintain size. Almost
        every product operates below K = 1 almost all the time. This is normal.
      </p>
      <p>
        Chen (2009) makes a point that is often omitted from K-factor discussions: K measures
        only one variable in the growth model. A product with K = 0.3 and strong LTV can build
        a healthy business. K is not the goal. K is one diagnostic. The mistake is to either
        ignore it (pretending the loop exists when it does not) or to optimize it in isolation
        (goosing share counts without checking whether shares produce retained users).
      </p>
      <p>
        LangoBee's K-factor from the June 2026 snapshot:
      </p>
      <pre>{`K = (1 share / 13 real feed users) x (0 measured signups / 1 share)
K = 0.077 x 0 = 0`}</pre>
      <p>
        The honest answer is K = 0, not because no one is sharing but because there is not
        enough data to measure the second term. The loop is a hypothesis, not a confirmed
        mechanism.
      </p>

      <Callout title="What would change the K-factor reading?">
        <p>
          You need two things: (1) enough shares to compute a stable share-to-signup rate
          (statistical minimum: 20 shares), and (2) attribution that links each share to
          subsequent signups. Neither exists yet. The week 11 section task is to post three
          clips, which will begin to produce the volume. Adding UTM parameters to share links
          is the attribution step.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-the-share-loop-is-not-working">4. Honesty about the current state</AnchorHeading>
      <p>
        One share in 30 days from 13 real feed users means the loop is not working. This is
        not a judgment; it is a diagnostic. The right response is not to dismiss the mechanism
        but to ask which stage is the bottleneck.
      </p>
      <p>
        Three hypotheses about where the loop fails at LangoBee right now:
      </p>
      <ul>
        <li>
          <strong>The share surface is broken or invisible.</strong> If the share button is
          hard to find or the share link does not work without an account, shares will not
          happen regardless of how much users enjoy the content. This is the most common
          failure mode for pre-revenue products. Audit the share flow in a fresh browser
          before drawing any other conclusions.
        </li>
        <li>
          <strong>The clips in the feed are not share-worthy.</strong> A user shares a clip
          when they want someone else to see it. That requires the clip to be either
          surprising, amusing, or useful to someone they know. A clips pool of 17,440 texts
          contains share-worthy content. The question is whether the feed surfaces it.
        </li>
        <li>
          <strong>The user base is too small to produce a stable share rate.</strong> With 13
          real feed users, a single share is a rate of 7.7%. Two shares would be 15.4%. The
          variance is too high to draw conclusions. This is the pre-functional diagnosis:
          more volume is needed before the mechanism can be judged.
        </li>
      </ul>
      <p>
        Audit the share surface first. It is the only hypothesis you can test without more
        users.
      </p>

      <AnchorHeading as="h2" id="5-the-content-engine">5. The content engine you already have</AnchorHeading>
      <p>
        Most products in the distribution phase face a supply problem: they need content to
        feed a social channel and must create it from scratch. LangoBee does not have this
        problem. The catalog contains 17,440 videos from 2,773 creators, already quality-gated,
        difficulty-scored, and language-tagged. Every video is a potential source for a
        clip demo.
      </p>
      <p>
        The pipeline that populates the catalog (fetch captions, score difficulty, quality-gate,
        upload) runs with near-zero marginal cost per clip. The same agent-driven process that
        built the catalog can be adapted to select, screen-record, and caption clips for social
        posting. The content supply is not the constraint.
      </p>
      <p>
        What is the constraint? The screen-capture recording step is still manual. An agent
        can select candidates from the catalog using SQL; it cannot record a browser session.
        This is the one human step in the repurposing pipeline. Three clips per week is
        achievable manually. Automating beyond that requires either headless browser tooling
        or a Capacitor-based screen recording flow.
      </p>

      <AnchorHeading as="h2" id="6-the-safe-repurposing-path">6. Safe and risky repurposing</AnchorHeading>
      <p>
        YouTube creators retain rights to their content. Reposting a creator's clip verbatim
        on TikTok or Instagram is copyright infringement unless you have explicit permission.
        This is not a gray area. The connection to week 10's deal structures: if you have a
        partnership agreement with a creator, that agreement should include a content license
        clause that specifies what you can post. Without such a clause, the partnership
        does not grant posting rights.
      </p>
      <p>
        The safe path is screen-capture demos of your product interface. A recording of
        LangoBee's word-highlighting feed playing a Spanish cooking video is a product demo.
        You own the interface. The underlying video plays as part of the product experience,
        just as it does for any user. This is equivalent to recording a screen session of
        any web application that embeds a YouTube player.
      </p>
      <p>
        The screen-capture format has an additional benefit: it shows the product, not just the
        content. A viewer who finds the clip interesting sees the word-highlighting immediately.
        The demo is the ad.
      </p>

      <AnchorHeading as="h2" id="7-programmatic-seo">7. Programmatic SEO from catalog metadata</AnchorHeading>
      <p>
        Programmatic SEO creates many keyword-targeted pages from a template plus structured
        data. Law (2023) defines the five steps: find scalable keywords, check search intent,
        source data, build templates, publish. LangoBee has already completed steps two and
        three for a large set of long-tail queries. The catalog metadata is the data source.
        The remaining work is to identify the keywords and build the template.
      </p>
      <p>
        The keyword structure emerges directly from the catalog dimensions:
      </p>
      <pre>{`language x topic x difficulty = one keyword cluster

"Spanish cooking videos for beginners"
"Intermediate French news comprehensible input"
"B2 Italian podcast transcripts"
"Russian A1 children's stories"
`}</pre>
      <p>
        These are real search queries. They have relatively low search volume individually,
        but there are hundreds or thousands of unique combinations in the catalog, and
        almost no competitor is targeting them with pages built on structured per-video data.
        The opportunity is in the long tail, not in generic head terms like "learn Spanish."
      </p>
      <p>
        Makosiewicz (2023) describes Zapier's integration-page strategy: one page per app
        combination, all built from the same template with different data. Zapier generates
        1.6 million organic visits per month from this approach. The analogy for LangoBee
        is direct: one page per language-topic-level combination, all built from the same
        template. The catalog already contains the data; the template is the engineering
        work.
      </p>

      <Callout title="The value-first requirement">
        <p>
          Schwartz (2021) argues that product-led SEO requires pages that deliver value before
          asking for a signup. A catalog page that shows a list of 10 video titles and then
          gates everything behind a signup form is thin content. A catalog page that shows
          a list of 10 videos with their difficulty scores, one embedded demo clip, and a sample
          word lookup is a product experience. The page itself is the demo. Gating too early
          here is the same mistake as the front-door paywall: the user has not seen the value yet.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="8-owned-vs-rented">8. Owned channels vs rented channels</AnchorHeading>
      <p>
        Chen (2012) observed that every marketing channel starts at a high clickthrough rate and
        degrades toward near-zero over time. The mechanism: novelty fades, competitors copy the
        format, and the audience that remains is mainstream rather than the early adopters who
        clicked on unfamiliar things. He called this the Law of Shitty Clickthroughs.
      </p>
      <p>
        A rented channel is one where a platform controls distribution: TikTok's algorithm,
        Instagram's feed ranking, YouTube's recommendation engine. These channels can generate
        large early reach, but the platform captures most of the value and can change the
        economics at any time. TikTok's algorithm change in a given month is not your problem
        to control.
      </p>
      <p>
        An owned channel is one where you control the full stack: the URL, the content, the
        audience relationship. Programmatic catalog pages are owned. An email list is owned.
        A short-form social account is partially owned (you control the content) but distributed
        via a rented platform.
      </p>
      <p>
        The Bullseye test from week 9 (Weinberg, 2015) applies here: run cheap tests on both
        the social channel and the catalog SEO pages. Measure cost per signup and retention
        of acquired users. The channel that produces higher-quality users at lower cost wins
        the sprint. Then double down on that one.
      </p>

      <AnchorHeading as="h2" id="9-the-loop-metric">9. Defining the loop metric</AnchorHeading>
      <p>
        A loop metric is the specific number that tells you whether the loop is turning. For
        the shorts-share-viewer loop, the loop metric is share-to-signup rate: of every clip
        shared from the feed, what percentage produces at least one new authenticated user
        within 7 days?
      </p>
      <p>
        This metric has a prerequisite: share links must carry UTM parameters so you can
        attribute signups to shares. Without attribution, you can count shares but you cannot
        close the loop. Adding UTM parameters to the share link is a one-line code change.
      </p>
      <p>
        The June 2026 baseline for the loop metric: 1 share, 0 attributable signups, 30-day
        window. This is not a rate; it is a count of near zero. The target for a measurable
        rate: 20 shares in 30 days. At the current volume (1 share per month), reaching 20
        shares requires either 20x more feed users or 20x higher share rate per user. Both
        are achievable if the clip posting from Part 2 of the section worksheet drives new
        feed signups.
      </p>
      <p>
        The loop dashboard should show three numbers each week: shares, impressions, and the
        ratio. When the ratio reaches 5% (1 in 20 shares produces a new feed user), the loop
        is producing measurable output. That is not a turning loop; it is a signal worth
        investigating further.
      </p>

      <AnchorHeading as="h2" id="exercises">Exercises</AnchorHeading>
      <p>Complete these from memory before section.</p>

      <Exercise n={1}>
        <p>
          Draw the shorts-share-viewer loop on paper. Label all four stages and each transition
          arrow with the metric that measures it. Using LangoBee's June 2026 data (408
          impressions, 101 completions, 1 share, 13 real feed users), write the numeric value
          for each stage you can compute. For the stages you cannot compute, write what data
          you would need to fill in the gap.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          Explain in two sentences the structural difference between a growth loop and a linear
          acquisition funnel. Then identify the reinvestment step in the shorts loop: what is
          the output that becomes a new input?
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          LangoBee's catalog contains Spanish cooking videos at mean_zipf 4.2, French current
          events at mean_zipf 5.1, and Italian film clips at mean_zipf 5.8. Write the URL slug,
          title tag, and one-sentence meta description for a programmatic SEO page targeting each
          of the three. Use the
          <code>/catalog/[lang]/[topic]/[level]</code> slug structure and the CEF level that
          corresponds to each mean_zipf value (4.0-4.5 = A2, 4.5-5.0 = B1, 5.0-5.5 = B2).
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          Andrew Chen (2012) argues that every rented channel decays toward near-zero clickthrough
          rate over time. TikTok is a rented channel. Programmatic catalog pages are an owned
          channel. Using the Law of Shitty Clickthroughs, explain why running both in parallel
          makes sense in week 11 but why the long-term bet should favor the owned channel.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          You post three screen-capture demo clips this week. After 7 days, the results are:
          Clip A: 1,200 views, 8 shares. Clip B: 340 views, 1 share. Clip C: 890 views,
          0 shares. Two of the 9 total shares produced new signups (confirmed via UTM). Compute
          the share rate and the share-to-signup rate. Then write one sentence on whether the
          loop is turning or still pre-functional.
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="going-deeper">Going deeper</AnchorHeading>
      <ul>
        <li>
          Section worksheet this week: Stand up one owned channel, produce three clips, publish
          five catalog page stubs, define the loop metric dashboard.
        </li>
        <li>
          Reforge, "Growth Loops are the New Funnels" (Balfour, Winters, Kwok, and Chen, 2018):
          the canonical treatment of acquisition, engagement, and monetization loop types with
          mapping frameworks.{" "}
          <a href="https://www.reforge.com/blog/growth-loops">reforge.com/blog/growth-loops</a>
        </li>
        <li>
          Ahrefs, "6 Things I Love About Zapier's SEO Strategy" (Makosiewicz, 2023): the
          integration-page pattern in detail, with traffic figures, and how internal linking
          makes the system self-expanding.{" "}
          <a href="https://ahrefs.com/blog/zapier-seo-case-study/">ahrefs.com/blog/zapier-seo-case-study/</a>
        </li>
        <li>
          <strong>Refold Espanol Discord</strong> ({" "}
          <a href="https://discord.com/servers/refold-espanol-es-667734565309382657">discord.com/servers/refold-espanol-es-667734565309382657</a>
          ): the highest-signal community for comprehensible-input Spanish learners. Observe
          what content they share organically before designing the clip posting strategy.
        </li>
        <li>
          Week 12 reading: Synthesis, operating plan, and the path to $10K MRR. Week 11's
          channel work feeds directly into the operating plan's distribution section.
        </li>
      </ul>

      <Takeaways>
        <li>A growth loop produces outputs that seed new inputs, compounding over time. A funnel produces growth proportional to external input at the top. LangoBee currently runs on a funnel, not a loop.</li>
        <li>The shorts-share-viewer loop is a hypothesis. With 1 share from 408 impressions in 30 days, the K-factor is effectively zero. The loop is pre-functional, not broken: the share surface needs auditing before any other diagnosis.</li>
        <li>Safe clip repurposing is screen-capture demos of the product interface. Reposting creator content without a licensing agreement is copyright infringement, not a gray area.</li>
        <li>The 17,440-video catalog contains the raw material for programmatic SEO pages targeting long-tail queries like "Spanish comprehensible input cooking videos for beginners." The data exists; the template is the engineering work.</li>
        <li>Every rented channel (TikTok, Instagram) decays in performance over time. Owned channels (catalog pages, email) compound. Build both in parallel; the long-term bet is on owned.</li>
      </Takeaways>

      <Bibliography>
        <p>
          Balfour, B., Winters, C., Kwok, K., and Chen, A. (2018). Growth loops are the new funnels.
          Reforge.{" "}
          <a href="https://www.reforge.com/blog/growth-loops">reforge.com/blog/growth-loops</a>.
          Canonical framework distinguishing acquisition, engagement, and monetization loops
          from linear funnels.
        </p>
        <p>
          Chen, A. (2009). Viral coefficient: What it does and does NOT measure.{" "}
          <a href="https://andrewchen.com/viral-coefficient/">andrewchen.com/viral-coefficient/</a>.
          Foundational essay arguing that K-factor measures only one variable and cannot
          substitute for a full growth model.
        </p>
        <p>
          Chen, A. (2012). The Law of Shitty Clickthroughs.{" "}
          <a href="https://andrewchen.com/the-law-of-shitty-clickthroughs/">andrewchen.com/the-law-of-shitty-clickthroughs/</a>.
          Every marketing channel decays toward near-zero as novelty fades and competitors copy;
          owned channels are the durable alternative.
        </p>
        <p>
          Chen, A. (2021). The Cold Start Problem. Talks at Google.{" "}
          <a href="https://www.youtube.com/watch?v=TSnYO34b3TA">youtube.com/watch?v=TSnYO34b3TA</a>.
          Viral loop design and the share trigger that converts content consumption into
          a compounding acquisition loop.
        </p>
        <p>
          Law, R. (2023). Programmatic SEO, explained for beginners. Ahrefs.{" "}
          <a href="https://ahrefs.com/blog/programmatic-seo/">ahrefs.com/blog/programmatic-seo/</a>.
          Five-step framework for keyword-targeted page generation at scale; four real-world
          examples including Nomadlist and Zapier.
        </p>
        <p>
          Makosiewicz, M. (2023). 6 things I love about Zapier's SEO strategy: a case study.
          Ahrefs.{" "}
          <a href="https://ahrefs.com/blog/zapier-seo-case-study/">ahrefs.com/blog/zapier-seo-case-study/</a>.
          Integration-page pattern generating 1.6M organic visits/month, directly analogous
          to LangoBee's language-topic-difficulty catalog pages.
        </p>
        <p>
          Schwartz, E. (2021). Product-Led SEO at Agile100.{" "}
          <a href="https://www.youtube.com/watch?v=IdqA2xtXaAY">youtube.com/watch?v=IdqA2xtXaAY</a>.
          SEO built into the product using proprietary data competitors cannot replicate;
          the framework for catalog pages as product experiences rather than brochures.
        </p>
        <p>
          Weinberg, G. (2015). The Bullseye framework for getting traction.{" "}
          <a href="https://medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e">medium.com/@yegg/the-bullseye-framework-for-getting-traction-ef49d05bfd7e</a>.
          Three-ring framework: brainstorm all 19 channels, test the 2-3 most promising cheaply,
          double down on the single winner.
        </p>
        <p>
          LangoBee June 2026 snapshot. Primary data from PostHog project 374549, Supabase,
          and Stripe. Cited throughout as "June 2026 snapshot." Catalog: 17,440 texts, 2,773
          creators. Shorts feed: 408 impressions, 101 completions, 1 share, 13 real feed users
          over 30 days.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk11ReadingSearchBody =
  "growth loop funnel viral coefficient K-factor shorts share viewer loop candidate 408 impressions 1 share 13 users pre-functional clip repurposing screen capture demo copyright safe path programmatic SEO catalog pages language topic difficulty long tail comprehensible input owned channel rented channel law of shitty clickthroughs loop metric share-to-signup rate UTM attribution Zapier integration pages week 11 distribution";
