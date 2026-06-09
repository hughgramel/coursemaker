import { AnchorHeading } from "@/components/AnchorHeading";
import {
  ReadingPage,
  ReadingFraming,
  Exercise,
  Takeaways,
  Bibliography,
  Callout,
} from "@/components/ReadingPage";

export function Wk06Reading() {
  return (
    <ReadingPage
      id="wk06"
      title="Week 6, Picking your wedge channel and building an SEO engine"
      kicker="B2C to $10k MRR, A 10-Week Growth Manual for Technical Founders · Autumn 2026 · Reading"
    >
      <ReadingFraming>
        <p>
          This reading covers the single most consequential decision of the
          course: which growth channel you will work on for the next four
          weeks. By the end you will be able to score your product against
          five candidate channels using a structured rubric, explain why
          channel-product fit determines whether a good product grows or
          stalls, design a topic cluster and lighthouse article for your
          product, and read Google Search Console as a four-step acquisition
          funnel.
        </p>
        <p>
          <strong>Prerequisites assumed.</strong> You are working with the
          following concepts introduced in weeks 1-5:{" "}
          <strong>AAARRR funnel</strong>, <strong>activation rate</strong>,{" "}
          <strong>north star metric</strong>, <strong>LTV</strong>, and{" "}
          <strong>CAC</strong>. If any of these are unclear, review the week
          1-5 readings before continuing. This reading introduces:
          traction channels, channel-product fit, wedge channel, programmatic
          SEO, topic cluster, backlink, and the search-console funnel.
        </p>
      </ReadingFraming>

      <AnchorHeading as="h2" id="1-week-at-a-glance">1. Your week at a glance</AnchorHeading>

      <p>
        Week 6 has one job: commit to one channel. Every other goal this week
        serves that job.
      </p>

      <p><strong>Bloom outcomes for this week:</strong></p>
      <ul>
        <li>
          <strong>Evaluate:</strong> score your product against 5 candidate
          channels and defend a single pick.
        </li>
        <li>
          <strong>Apply:</strong> publicly commit to the chosen channel for the
          remaining weeks of the course.
        </li>
        <li>
          <strong>Create:</strong> draft a lighthouse article plus a
          topic-cluster map, or the channel-equivalent first piece of content.
        </li>
      </ul>

      <p><strong>Milestones for the week:</strong></p>
      <ul>
        <li>Channel-fit worksheet completed: 5 channels scored, 1 picked, decision documented.</li>
        <li>Public commitment to the chosen channel posted (post, video, or email to peers).</li>
        <li>GSC and Bing Webmaster verified; sitemap submitted (SEO track).</li>
        <li>Lighthouse article drafted (~2k words), or channel-equivalent first asset.</li>
        <li>Topic cluster map: 1 lighthouse + 8-12 supporting pages identified.</li>
      </ul>

      <p><strong>Metrics to track this week:</strong></p>
      <ul>
        <li>GSC impressions (week-over-week from this baseline)</li>
        <li>Channel-specific output count</li>
        <li>Activation rate from new channel traffic</li>
        <li>MRR delta</li>
        <li>Public outputs shipped</li>
      </ul>

      <AnchorHeading as="h2" id="2-day-by-day">2. Your week, day by day</AnchorHeading>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Day</th>
              <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Morning growth (30 min)</th>
              <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Customer hour (60 min)</th>
              <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Build block (3.5 hrs)</th>
              <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Measure + reflect (15 min)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)", fontWeight: 600 }}>Mon</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Public post: &ldquo;I&rsquo;m choosing my channel this week &mdash; here are the 5 candidates.&rdquo;</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Ask 5 customers how they found you.</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Score the 5 channels on the worksheet.</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Which channel feels least painful and gets any signal?</td>
            </tr>
            <tr style={{ backgroundColor: "var(--table-row-alt, #f9f9f9)" }}>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)", fontWeight: 600 }}>Tue</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Public commitment: &ldquo;I&rsquo;m going all-in on [channel] for the next 4 weeks.&rdquo;</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Study 3 indie founders who won this channel.</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>If SEO: install GSC, submit sitemap. Else: equivalent channel setup.</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>What&rsquo;s the first content asset you&rsquo;ll ship Wednesday?</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)", fontWeight: 600 }}>Wed</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Ship Day 1 channel output (article, video, post, or episode).</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Interview a power user with the lighthouse article angle in mind.</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Draft the lighthouse article or channel equivalent.</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Did you finish what you started today?</td>
            </tr>
            <tr style={{ backgroundColor: "var(--table-row-alt, #f9f9f9)" }}>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)", fontWeight: 600 }}>Thu</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Ship Day 2 channel output.</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Compile a topic cluster map from customer language.</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Build a content production template (markdown, design, publishing flow).</td>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>Can you produce 1 piece/day at this template?</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 12px", fontWeight: 600 }}>Fri</td>
              <td style={{ padding: "8px 12px" }}>Friday recap of channel sprint week 1.</td>
              <td style={{ padding: "8px 12px" }}>Pull GSC / channel analytics; record baseline numbers.</td>
              <td style={{ padding: "8px 12px" }}>No new features. Tune the production template.</td>
              <td style={{ padding: "8px 12px" }}>What&rsquo;s your channel output target for next week?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h2" id="3-plan-card">3. This week&rsquo;s plan card</AnchorHeading>

      <Callout title="Fill this in before Monday&rsquo;s morning growth move">
        <p>
          <strong>My 3 milestones this week:</strong>
        </p>
        <ol>
          <li>Channel-fit worksheet completed and scored.</li>
          <li>Public commitment posted (URL: ______________).</li>
          <li>Lighthouse article drafted or Day 1 channel asset shipped.</li>
        </ol>
        <p>
          <strong>My repeating growth move this week:</strong>{" "}
          ______________ (verb + noun, one sentence, 30 minutes max).
        </p>
        <p>
          <strong>The friction that will derail me:</strong>{" "}
          ______________
        </p>
        <p>
          <strong>Note:</strong> After this week, your morning growth move
          locks to one channel. Experimentation across platforms closes
          Monday. Your channel commitment is due by Friday. No switching
          mid-commitment.
        </p>
      </Callout>

      <AnchorHeading as="h2" id="4-daily-rules">4. Daily rules for this week</AnchorHeading>

      <Callout title="Daily rules (course-wide) + this week&rsquo;s platform rule">
        <ul>
          <li>
            <strong>Morning growth move first.</strong> Done before code opens.
            Includes the daily public output. No exceptions.
          </li>
          <li>
            <strong>Customer hour before the build block.</strong> Talk to a
            user, watch a session, or read tickets. The build block does not
            open until the first two slots are done.
          </li>
          <li>
            <strong>Build block scope is one sentence.</strong> If you
            can&rsquo;t write it in one sentence, the scope is too big.
          </li>
          <li>
            <strong>Friday review is non-negotiable.</strong> Score your 3
            milestones (shipped / partial / not shipped). Write one paragraph:
            what compounded, what felt fake, what to drop. Update MRR and
            activation rate.
          </li>
          <li>
            <strong>Platform rule (weeks 6-10):</strong> Experimentation
            across platforms closes Monday. Your channel commitment locks by
            Friday. No switching mid-commitment. Every morning growth move
            from here until the capstone goes to your chosen channel.
          </li>
        </ul>
      </Callout>

      <AnchorHeading as="h2" id="5-traction-channels">5. Traction channels: 19 options, 2-3 that fit</AnchorHeading>

      <p>
        Gabriel Weinberg and Justin Mares catalogued every method a startup
        has ever used to acquire customers and arrived at 19 distinct{" "}
        <strong>traction channels</strong>: viral marketing, PR,
        unconventional PR, search engine marketing, social and display ads,
        SEO, content marketing, email marketing, engineering-as-marketing,
        targeting blogs, business development, sales, affiliate programs,
        existing platforms, trade shows, offline events, speaking engagements,
        and community building. Their core claim: channel-product fit matters
        as much as product-market fit. A technically excellent product on the
        wrong channel grows slowly.
      </p>
      <p>
        Most of those 19 channels do not apply to a solo founder in week 6.
        Paid channels (SEM, display ads) require a marketing budget and a
        validated CAC before they yield positive unit economics. Trade shows
        require travel and an existing brand. Sales requires a team to follow
        up on leads. The channels that remain for a solo founder with thirty
        minutes of morning growth time are: organic search (SEO), content
        marketing, engineering-as-marketing (free tools), social platforms,
        community channels, and launch platforms like Product Hunt. That is
        still five to six distinct options. You still need to pick one.
      </p>
      <p>
        Lenny Rachitsky and Dan Hockenmaier (First Round Review, 2019)
        compress the choice further. They argue there are only three scalable
        growth lanes for consumer companies: performance marketing, virality,
        and content/SEO. Most solo founders with no marketing budget in week 6
        effectively have two lanes: virality and content/SEO. The channel-fit
        worksheet in section helps you decide which of those two lanes, and
        which specific channel within a lane, fits your product at this stage.
      </p>

      <AnchorHeading as="h2" id="6-channel-product-fit">6. Channel-product fit: the concept that changes everything</AnchorHeading>

      <p>
        <strong>Channel-product fit</strong> is the match between where your
        target users discover products like yours and what your product can
        plausibly offer them via that channel. It has two components. First,
        demand-side: does your audience use this channel to find and evaluate
        products in your category? Second, supply-side: can you produce the
        kind of content or asset that this channel rewards, at the frequency
        the channel requires, given your current resources?
      </p>
      <p>
        A mismatch on either dimension is fatal. Consider two hypothetical
        products. The first is a productivity tool for distributed teams.
        Users search actively for solutions: &ldquo;remote team async
        communication tool,&rdquo; &ldquo;time zone converter for distributed
        teams.&rdquo; Search intent is explicit. SEO captures that intent
        directly. The second is an AI art generator. Users do not search for
        this product category before they know it exists. They encounter it
        when a friend shares an image on Twitter or TikTok. Discovery is
        visual and social, not search-driven. Investing heavily in SEO for
        the second product fails on the demand side: the audience is not
        using search to find products like yours. Investing in Twitter for
        the first product may fail on the supply side: if your audience is
        distributed teams with procurement processes rather than individual
        consumers who follow maker accounts, they are not on Twitter looking
        for your product.
      </p>
      <p>
        Arvid Kahl frames this as audience-first product development.
        Before choosing a channel, identify who your product is for and where
        that audience already spends attention. His book{" "}
        <em>Zero to Sold</em> (2020) documents how building FeedbackPanda to
        $55k MRR before acquisition rested on understanding the existing
        online teacher community before building anything. The channel was
        implicit in the audience: teacher communities live on Facebook groups
        and Twitter, not on Hacker News.
      </p>
      <p>
        The Bullseye Framework (Weinberg and Mares, 2015) structures the
        selection process. In the outer ring, brainstorm all 19 channels with
        no filtering. In the middle ring, pick the three with the strongest
        channel-product fit signal and run cheap two-to-four-week experiments
        on each. In the inner ring, one channel is clearly working. Put all
        energy there.
      </p>
      <p>
        The mistake most founders make is staying in the outer ring too long
        (testing five channels simultaneously) or trying to run the inner ring
        with three channels at once. You cannot improve at a channel you only
        visit twice a week. Channel-product fit is not fixed at week 6; it can
        become apparent only after four to six weeks of concentrated work on
        a single channel.
      </p>

      <AnchorHeading as="h2" id="7-wedge-channel">7. The wedge channel: why one obsession beats five experiments</AnchorHeading>

      <p>
        A <strong>wedge channel</strong> is the single growth channel you
        commit to for a defined period of concentrated effort. The word
        &ldquo;wedge&rdquo; comes from the physics of splitting logs: all the
        force applied to a thin edge splits something that diffuse force would
        not. The same principle applies to channel selection. Spreading thirty
        minutes of morning growth time across five channels gives you six
        minutes per channel, which is not enough to learn anything about any
        of them. Concentrating the same thirty minutes on one channel gives
        you data you can act on within two weeks.
      </p>
      <p>
        Rachitsky (2022) documents this pattern across fifty-plus consumer
        companies in his consumer business series. The finding: most
        successful startups master a single growth engine before expanding.
        Airbnb mastered virality (host-side referrals and Craigslist
        integration) before investing in paid. Thumbtack built an SEO engine
        for eighteen to twenty-four months before it contributed meaningful
        revenue. Booking.com ran purely on SEO before pivoting to paid
        marketing in 2004 after Google AdWords launched.
      </p>
      <p>
        Gustaf Alstromer at Y Combinator made the same observation from six
        hundred-plus YC startups (2019): growth before product-market fit is
        the leading cause of startup death, because it masks retention
        problems with acquisition. The corollary for week 6 is: you have
        established enough product stability to commit to a channel. The
        weeks 1-5 experimentation period was the middle ring of the Bullseye.
        Week 6 is the inner ring.
      </p>
      <p>
        Paul Graham&rsquo;s &ldquo;Do Things That Don&rsquo;t Scale&rdquo;
        (2013) provides the micro-level rationale. The manual acquisition work
        of the customer-hour ritual is not a temporary substitute for
        automation. It is the mechanism by which you discover what to
        automate. The same applies to channel work: the first four weeks on a
        channel are necessarily manual, careful, and low-output. That is where
        you learn what the channel rewards.
      </p>

      <AnchorHeading as="h2" id="8-programmatic-seo">8. Programmatic SEO: turning a database into an acquisition engine</AnchorHeading>

      <p>
        <strong>Programmatic SEO</strong> is the practice of generating
        large numbers of unique, indexable web pages from a structured
        database, where each page targets a different long-tail search query.
        Traditional SEO requires writing a new article for each keyword you
        want to rank for. Programmatic SEO replaces writing with engineering:
        you build a template and a database, and each row in the database
        generates a page automatically.
      </p>
      <p>
        The canonical case for indie founders is Nomad List, built by Pieter
        Levels in 2014. The database started as a public Google spreadsheet
        of cities scored on cost of living, internet speed, temperature, and
        safety. Each city became a page at a consistent URL template. Users
        who searched &ldquo;Bangkok for digital nomads&rdquo; or &ldquo;best
        city for remote work&rdquo; landed on the corresponding city page.
        The free page delivered the data. The conversion path was simple: a
        user who wanted to filter cities by budget plus internet speed hit the
        membership paywall. Levels grew Nomad List to $15-25k/month within
        months of launch and reached $20-40k/month with thousands of paying
        members over the following years.
      </p>
      <p>
        Three properties make programmatic SEO well-suited to solo founders.
        First, the engineering investment is front-loaded: build the template
        once and the pages scale automatically as the database grows. Second,
        programmatic SEO reaches long-tail queries that no individual article
        would ever target. There are eight billion Google searches per day;
        most of the volume is in queries that your top-level articles will
        never rank for, but that a city-specific page or comparison page
        might. Third, pages rank passively. A page published in month 3 may
        not reach page 1 until month 9, but when it does, it drives traffic
        without any additional effort.
      </p>
      <p>
        Marc Lou applied a related pattern to free tools. Rather than a
        content database, he built free mini-applications: each tool solved
        one problem, required no signup, and had a descriptive name that
        included the target keyword. The free tool attracted shares and
        embeds, which generated backlinks. The backlinks improved organic
        ranking for his paid products. He reported 30% conversion from free
        tool users to his paid products, driven by the natural overlap between
        the tool&rsquo;s problem and the product&rsquo;s problem.
      </p>

      <AnchorHeading as="h2" id="9-topic-clusters">9. Topic clusters and the lighthouse article</AnchorHeading>

      <p>
        A <strong>topic cluster</strong> is a set of web pages organized
        around one central topic. The cluster has two components: a{" "}
        <strong>lighthouse article</strong> and a set of supporting pages.
      </p>
      <p>
        The lighthouse article is a long, authoritative piece targeting a
        broad, high-intent head keyword. It is the best page on the internet
        for its query: it covers the topic from multiple angles, links to more
        specific resources, and provides enough depth that a user who reads it
        no longer needs to search elsewhere. A realistic length is two thousand
        to four thousand words. The lighthouse article is the anchor of the
        cluster; it must exist before the supporting pages.
      </p>
      <p>
        Supporting pages are shorter, more specific pieces, each targeting a
        long-tail variation of the head keyword. A lighthouse article about
        &ldquo;remote team tools 2026&rdquo; might have supporting pages for
        &ldquo;async video tools for distributed teams,&rdquo; &ldquo;time
        zone converter for remote meetings,&rdquo; and &ldquo;remote team
        calendar apps compared.&rdquo; Each supporting page links back to the
        lighthouse.
      </p>
      <p>
        Search engines interpret the internal linking pattern as a signal of
        topical authority. A site with one lighthouse article and twelve
        supporting pages that all link to and from each other tells the search
        engine: this site owns this topic. That signal typically takes two to
        four months to translate into ranking movement for the lighthouse
        article.
      </p>
      <p>
        The practical process for building a topic cluster is: identify the
        head keyword and confirm it has at least five hundred searches per
        month; list eight to twelve long-tail variations; write the lighthouse
        article; publish supporting pages over four to six weeks; add internal
        links from the lighthouse to each supporting page as they go live. Do
        not reverse this order. A supporting page that exists before the
        lighthouse has no anchor to link back to.
      </p>

      <AnchorHeading as="h2" id="10-backlinks">10. Backlinks: what is realistic</AnchorHeading>

      <p>
        A <strong>backlink</strong> is a link from another website to yours.
        Search engines treat backlinks as votes of trust: a link from a
        relevant, high-authority page increases your ranking potential more
        than a link from an irrelevant or low-authority page.
      </p>
      <p>
        For an indie founder, the realistic backlink strategies are narrow.
        Free tools that others embed or link to generate organic backlinks
        without outreach. Directory listings on Product Hunt, Indie Hackers,
        and relevant niche directories create permanent backlinks at no cost
        beyond the submission time. A Product Hunt or Hacker News launch
        generates a burst of backlinks from coverage posts. Guest posts in
        niche newsletters with active audiences can work if the newsletter
        audience overlaps exactly with your target user.
      </p>
      <p>
        Cold outreach for link exchanges has a response rate near zero for
        products without an existing brand. Paying for links violates
        Google&rsquo;s guidelines and risks a manual penalty that removes the
        site from search results entirely. Both strategies are common advice
        in generic SEO guides; both are wrong for a solo founder&rsquo;s
        context.
      </p>
      <p>
        The single most productive backlink strategy for a solo founder in
        week 6 is: build one free tool that is worth linking to. Marc Lou&rsquo;s
        approach (2024) is the model: minimal scope, no-friction (no signup
        required), a descriptive name that includes the target keyword. The
        tool becomes a permanent backlink generator and an SEO asset for the
        main product simultaneously.
      </p>

      <AnchorHeading as="h2" id="11-case-study-nomad-list">11. Case study: Nomad List&rsquo;s programmatic SEO in full</AnchorHeading>

      <p>
        Pieter Levels launched Nomad List in October 2014 as part of his
        twelve-startups-in-twelve-months challenge. The origin was a public
        Google spreadsheet of cities scored on metrics relevant to digital
        nomads: cost of living, internet speed, weather, safety, and quality
        of life. He posted it on Twitter. Within hours it had been shared
        thousands of times and was picked up by several newsletters. Within
        days it hit number one on Product Hunt.
      </p>
      <p>
        The initial traffic spike was entirely kickstart-driven (Product Hunt,
        Hacker News, Twitter), not SEO. The SEO engine was built over the
        following months as the spreadsheet became a proper database and the
        database became a URL structure.
      </p>
      <p>
        <strong>The page types:</strong>
      </p>
      <ul>
        <li>City pages: <code>/nomad-list/&lt;city&gt;</code>, one per city (two hundred-plus cities at peak)</li>
        <li>Faceted subpages: <code>/nomad-list/&lt;city&gt;/cost-of-living</code>, <code>/nomad-list/&lt;city&gt;/internet-speed</code></li>
        <li>Comparison pages: <code>/compare/&lt;city-a&gt;-vs-&lt;city-b&gt;</code></li>
        <li>Filter pages: <code>/nomad-list/cheap</code>, <code>/nomad-list/warm</code>, <code>/nomad-list/safe</code></li>
      </ul>
      <p>
        <strong>The URL template:</strong> the structure was consistent and
        machine-generated. Adding a new city to the database created four to
        six new indexable pages automatically. Two hundred cities meant eight
        hundred to twelve hundred pages, each targeting a different combination
        of city name and travel/work attribute query.
      </p>
      <p>
        <strong>The conversion path:</strong>
      </p>
      <ol>
        <li>User searches &ldquo;Bangkok cost of living for remote workers&rdquo; or &ldquo;best cities for digital nomads budget.&rdquo;</li>
        <li>Lands on the city page or the filter page. All data is visible for free with no login.</li>
        <li>Wants to filter by two criteria simultaneously (budget under $2k/month AND internet speed above 50 Mbps AND temperature above 20C) &rarr; hits the membership paywall.</li>
        <li>Converts to annual membership. At various stages: $99/year, then $149/year.</li>
      </ol>
      <p>
        The key design decision was not to put the data behind a paywall.
        Making the data free enabled organic sharing and backlinks. The paywall
        was placed at the filtering interaction, which required enough
        engagement to justify payment. A user who just wanted one city&rsquo;s
        data never needed to pay. A user who wanted to compare cities
        systematically did.
      </p>
      <p>
        Levels grew Nomad List to $15-25k/month within the first months,
        reaching $20-40k/month with thousands of paying members. The SEO
        component was not the only driver: the community features (forum,
        chat, member profiles) sustained retention after the acquisition.
        But the programmatic SEO was the compounding engine that made the
        product discoverable long after the launch spike faded.
      </p>

      <AnchorHeading as="h2" id="12-search-console-funnel">12. Reading Google Search Console as a funnel</AnchorHeading>

      <p>
        Google Search Console tracks three core metrics. An{" "}
        <strong>impression</strong> is counted each time a link from your
        site appeared in search results, whether or not the user scrolled
        to see it. A <strong>click</strong> is counted each time a user clicked
        a result that led to your site from Google. The{" "}
        <strong>search-console funnel</strong> combines these with your
        activation data to give a four-step acquisition view:
      </p>
      <pre>{`Impressions  →  Clicks  →  Activation  →  Paid
  (ranked)     (CTR)       (your event)   (MRR)`}</pre>
      <p>
        Each drop between steps is a different optimization problem. A high
        impression count with a low click-through rate means your page is
        ranking but the title or meta description is not compelling for the
        query. A high click count with a low activation rate means the landing
        page does not deliver what the search result promised, or your
        onboarding friction is too high. A high activation rate with a low
        paid conversion rate is a pricing or value proposition problem, which
        is the work of weeks 3-5.
      </p>
      <p>
        Google&rsquo;s documentation notes that position meaning varies by
        result type (carousels, rich results, image packs have different
        position semantics) and that monitoring changes over time matters more
        than absolute values. In week 6 you are establishing baselines. The
        first question is not &ldquo;why is my position 48?&rdquo; but
        &ldquo;what are my baseline numbers so I can detect movement?&rdquo;
      </p>
      <p>
        For a new site in week 6, realistic baseline numbers are: zero to
        fifty impressions per week, zero to five clicks per week, and average
        position between 30 and 80. These numbers are normal. They will not
        move meaningfully in week 6. The purpose of setting up GSC in week 6
        is to have data starting now, so that by week 9 you can see whether
        the SEO work from weeks 6-8 has produced any movement.
      </p>

      <AnchorHeading as="h2" id="13-exercises">13. Exercises</AnchorHeading>

      <Exercise n={1}>
        <p>
          <strong>Channel-fit worksheet.</strong> Score your product against
          five candidate channels using the rubric from section: channel-product
          fit (1-5), effort cost (1-5, lower is better), compounding potential
          (1-5), and indie precedent (1-5). Calculate a total for each channel.
          Write one sentence defending your top pick and one sentence naming
          its biggest failure mode.
        </p>
        <p>
          If you prefer not to use the five channels from the section worksheet
          (SEO, Twitter/X, TikTok, Reddit, Product Hunt), replace any of them
          with channels more relevant to your product category. The scoring
          rubric is the same regardless of which five you evaluate.
        </p>
      </Exercise>

      <Exercise n={2}>
        <p>
          <strong>Topic cluster map.</strong> Design a topic cluster for your
          product. Name your lighthouse article (title + target keyword +
          estimated monthly search volume from Google Keyword Planner or
          similar free tool). Then list eight supporting page titles. Each
          supporting page should target a long-tail variation of the head
          keyword. Draw or write the internal linking structure: which pages
          link to which.
        </p>
      </Exercise>

      <Exercise n={3}>
        <p>
          <strong>Channel-product fit: two examples.</strong> Describe one case
          where channel-product fit was strong (the product grew on the channel
          because the audience used that channel to discover products like it)
          and one case where the fit was poor (the product failed to grow on a
          channel despite effort). You may use examples from this reading, from
          your own experience, or from public founder accounts. For each case,
          name the specific mismatch or match.
        </p>
      </Exercise>

      <Exercise n={4}>
        <p>
          <strong>GSC funnel interpretation.</strong> You have the following
          Google Search Console data for a solo founder&rsquo;s productivity
          tool after six weeks of content publishing:
        </p>
        <pre>{`Impressions:   4,200 / week
Clicks:           63 / week    (CTR 1.5%)
Activation:       12 / week    (19% of clicks)
Paid:              1 / week    (8% of activated)`}</pre>
        <p>
          Identify the weakest step in the funnel. Write one specific
          hypothesis for why that step is weak. Write one change you would
          make to the content or product to test that hypothesis this week.
        </p>
      </Exercise>

      <Exercise n={5}>
        <p>
          <strong>Nomad List conversion path.</strong> Using the programmatic
          SEO case study in section 11, describe the conversion path in your
          own words. Then adapt it to your product: what would the free tier
          be (the content or data you give away for free), where would the
          paywall be placed (the specific action that requires payment), and
          what URL template would you use if you were to build a programmatic
          SEO structure for your product&rsquo;s core data?
        </p>
      </Exercise>

      <AnchorHeading as="h2" id="14-going-deeper">14. Going deeper</AnchorHeading>
      <p>
        The required reading for this week covers all the concepts above.
        If you want more on specific topics, these optional sources in the
        course library go further:
      </p>
      <ul>
        <li>
          <strong>Section worksheet this week.</strong> The channel-fit scoring
          table and commitment post are at{" "}
          <a href="/c/b2c-10k-mrr-26au/sections/wk06">Section: Channel-fit worksheet</a>.
          Complete it before the commitment deadline on Friday.
        </li>
        <li>
          <strong>Lecture 1 slides.</strong> The Bullseye Framework and the
          three case studies (Levels, Lou, Dinh) are covered in detail in the{" "}
          <a href="/c/b2c-10k-mrr-26au/lectures/wk06-l1">Lecture 1 page</a>.
        </li>
        <li>
          <strong>Lecture 2 slides.</strong> Programmatic SEO mechanics,
          the full Nomad List page-type breakdown, and GSC interpretation are
          in the{" "}
          <a href="/c/b2c-10k-mrr-26au/lectures/wk06-l2">Lecture 2 page</a>.
        </li>
        <li>
          <strong>Pieter Levels, Lex Fridman Podcast #440 (2024, 224 min).</strong>{" "}
          A rare long-form conversation with Levels covering his full product
          portfolio ($2M+ ARR solo), daily routine, and programmatic SEO
          mechanics in his own words. Optional but the most concrete primary
          source on the programmatic SEO approach in the course library.
        </li>
        <li>
          <strong>Pieter Levels and Arvid Kahl, &ldquo;Indie Hacking is Dead. Now what?&rdquo; (2023, 62 min).</strong>{" "}
          Levels and Kahl debate the current state of solo founding and how AI
          changes acquisition channels. Relevant to the SEO-vs-social question
          in 2026.
        </li>
        <li>
          <strong>Marc Lou, monthly build-in-public breakdown (2024, 14 min).</strong>{" "}
          The most concrete revenue-transparency example in the library: exact
          numbers by product and channel, including the finding that YouTube
          converts at 3x the rate of Twitter.
        </li>
        <li>
          <strong>Gustaf Alstromer, Growth for Startups (YC Startup School 2019, 46 min).</strong>{" "}
          The companion YouTube video to the YC Library text version. Covers
          channel taxonomy and why growth before PMF kills startups. Worth
          watching if you are uncertain whether you have enough retention signal
          to justify committing to an acquisition channel.
        </li>
        <li>
          <strong>April Dunford, <em>Obviously Awesome</em> (2019).</strong>{" "}
          Optional. Many channel-product mismatches turn out to be positioning
          misfits: the product is positioned for an audience that uses a
          different channel than the audience it actually serves. Dunford&rsquo;s
          five-component positioning framework is a useful diagnostic.
        </li>
        <li>
          <strong>Casey Winters on Lenny&rsquo;s Podcast (2023, 80 min).</strong>{" "}
          Winters (growth advisor to Airbnb, Canva, Reddit, Tinder) on why
          over-reliance on frameworks causes stagnation and how to diagnose
          stalled growth. Directly applicable if your week 5 channel experiments
          produced no signal.
        </li>
        <li>
          <strong>Elena Verna on Lenny&rsquo;s Podcast (2025, 75 min).</strong>{" "}
          Ten growth tactics that reliably fail, including copying competitor
          channels without understanding the underlying loop mechanics.
          Required listening before week 7 viral loop design.
        </li>
        <li>
          <strong>Arvid Kahl, <em>Find Your Following</em> (2022).</strong>{" "}
          Optional. The practical Twitter/X playbook for founders who scored
          Twitter highest on the channel-fit worksheet. Covers intentional
          relationship-building over growth hacks, the follow funnel, and
          build-in-public content strategy.
        </li>
      </ul>

      <Takeaways>
        <li>
          Channel-product fit matters as much as product-market fit. A good
          product on the wrong channel grows slowly; the right product on the
          right channel grows faster than you expect.
        </li>
        <li>
          Of the 19 traction channels, only a handful are available to a solo
          founder with thirty minutes of morning growth time. The realistic
          choice is between virality and content/SEO, with engineering-as-marketing
          (free tools) as a useful complement to either.
        </li>
        <li>
          Programmatic SEO turns a database into hundreds of indexable pages.
          Nomad List is the canonical case: one URL template, two hundred cities,
          a free data tier, and a paywall at the filtering interaction.
        </li>
        <li>
          A topic cluster (1 lighthouse article + 8-12 supporting pages with
          mutual internal links) signals topical authority to search engines.
          The lighthouse must exist before the supporting pages.
        </li>
        <li>
          Google Search Console is a four-step funnel: impressions &rarr; clicks
          &rarr; activation &rarr; paid. Each drop reveals a different problem:
          title/meta, landing page, onboarding, or pricing. Set up GSC now so
          you have data to read in weeks 8-9.
        </li>
      </Takeaways>

      <Bibliography>
        <p>
          Weinberg, G. &amp; Mares, J. (2015).{" "}
          <em>Traction: How Any Startup Can Achieve Explosive Customer Growth.</em>{" "}
          Portfolio/Penguin. The source for the 19-channel taxonomy,
          channel-product fit as a concept, and the Bullseye Framework.
        </p>
        <p>
          Rachitsky, L. (2022). How to kickstart and scale a consumer
          business. <em>Lenny&rsquo;s Newsletter.</em>{" "}
          lennysnewsletter.com/p/kickstarting-and-scaling-a-consumer.
          Six-part series; the SCALE chapter (Step 6) covers the three growth
          engines and the one-engine-at-a-time principle.
        </p>
        <p>
          Rachitsky, L. (2022). All the ways to grow your product.{" "}
          <em>Lenny&rsquo;s Newsletter.</em>{" "}
          lennysnewsletter.com/p/all-the-ways-to-grow-your-product.
          The Racecar Growth Framework with all growth levers mapped.
        </p>
        <p>
          Hockenmaier, D. &amp; Rachitsky, L. (2019). Drive growth by picking
          the right lane. <em>First Round Review.</em>{" "}
          review.firstround.com. Three growth lanes for consumer companies
          with case studies from Thumbtack, Airbnb, and Booking.com.
        </p>
        <p>
          Levels, P. (2018). Confronting your fears and taking a leap with
          Pieter Levels of Nomad List. <em>Indie Hackers Podcast</em>,
          episode 43. indiehackers.com/podcast/043-pieter-levels-of-nomad-list.
          First canonical Nomad List interview; covers the spreadsheet-to-product
          origin and organic growth mechanics.
        </p>
        <p>
          Levels, P. (2019). <em>MAKE: The Indie Maker Handbook.</em>{" "}
          readmake.com. Covers programmatic SEO mechanics, pricing philosophy,
          and automation across a solo product portfolio.
        </p>
        <p>
          Levels, P. (2024). Nomad List founder. levels.io/nomad-list-founder.
          Levels&rsquo; own account of the founding, growth, and pricing
          history of Nomad List.
        </p>
        <p>
          Levels, P. (2024). Lex Fridman Podcast #440: Programming, viral AI
          startups, and digital nomad life. YouTube,
          youtube.com/watch?v=oFtjKbXKqbg. Long-form primary source on
          programmatic SEO mechanics and solo founder growth mindset.
        </p>
        <p>
          Marc Lou (2024). How to get customers with free tool marketing.{" "}
          newsletter.marclou.com/p/marketing-for-product-obsessed-developers.
          Free-tool marketing strategy, 30% conversion from free to paid,
          rules for no-friction mini-apps.
        </p>
        <p>
          Marc Lou (2024). I made $45,250 in February 2024. YouTube,
          youtube.com/watch?v=ZzquF3ie-oA. Revenue breakdown by product and
          channel; the YouTube-vs-Twitter conversion comparison.
        </p>
        <p>
          Alstromer, G. (2019). Growth for startups. Y Combinator Startup
          School. ycombinator.com/library/6k-growth-for-startups. Channel
          taxonomy from six hundred-plus YC companies; why growth before PMF
          kills startups.
        </p>
        <p>
          Google (2026). What are impressions, position, and clicks in Google
          Search Console? support.google.com/webmasters/answer/7042828.
          Official documentation for the three GSC core metrics.
        </p>
        <p>
          Kahl, A. (2020). <em>Zero to Sold: How to Start, Run, and Sell a
          Bootstrapped Business.</em> zerotosold.com. Audience-first product
          development and building-in-public mechanics relevant to channel
          selection.
        </p>
        <p>
          Kahl, A. (2022). <em>Find Your Following: A Twitter Audience-Building
          Masterclass.</em> findyourfollowing.com. Practical Twitter/X strategy
          for founders who choose that channel.
        </p>
        <p>
          Graham, P. (2013). Do things that don&rsquo;t scale.
          paulgraham.com/ds.html. The manual acquisition work of the
          customer-hour ritual as the mechanism for discovering what to
          automate.
        </p>
        <p>
          Balfour, B. &amp; Winters, C. (2019). Growth loops are the new
          funnels. Reforge. reforge.com/blog/growth-loops. The canonical
          essay on growth loops as a superior model to funnels for
          understanding compounding acquisition.
        </p>
        <p>
          Rachitsky, L. (host) &amp; Winters, C. (guest) (2023). Thinking
          beyond frameworks. <em>Lenny&rsquo;s Podcast.</em> YouTube,
          youtube.com/watch?v=QMFvz8utx-Q. First principles over frameworks;
          how to diagnose stalled growth.
        </p>
        <p>
          Rachitsky, L. (host) &amp; Verna, E. (guest) (2025). 10 growth
          tactics that never work. <em>Lenny&rsquo;s Newsletter.</em>{" "}
          lennysnewsletter.com/p/10-growth-tactics-that-never-work-elena-verna.
          Ten reliably-failing growth tactics; growth tactics without a product
          loop are decorations, not engines.
        </p>
        <p>
          Kahl, A. (host) &amp; Levels, P. (guest) (2023). Indie hacking is
          dead. Now what? YouTube, youtube.com/watch?v=9Wjec3wh4p8.
          How AI changes acquisition channels for solo founders.
        </p>
        <p>
          Dunford, A. (2019). <em>Obviously Awesome: How to Nail Product
          Positioning So Customers Get It, Buy It, Love It.</em>{" "}
          aprildunford.com/obviously-awesome. Positioning clarity as a
          prerequisite to channel choice.
        </p>
        <p>
          Altman, S. (2015). Startup Playbook. playbook.samaltman.com.
          Mindset context for growth decisions; only build growth before PMF
          if it is organic.
        </p>
      </Bibliography>
    </ReadingPage>
  );
}

export const wk06ReadingSearchBody =
  "traction channels channel-product fit wedge channel programmatic SEO topic cluster lighthouse article backlink search console funnel GSC impressions clicks Nomad List Pieter Levels Marc Lou Weinberg Mares Bullseye Framework Lenny Rachitsky First Round Review consumer acquisition lanes growth engine reading Week 6";
