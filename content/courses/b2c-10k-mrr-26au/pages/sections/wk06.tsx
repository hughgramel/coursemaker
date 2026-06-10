import { AnchorHeading } from "@/components/AnchorHeading";

export function Wk06SectionPage() {
  return (
    <>
      <AnchorHeading as="h1" id="channel-fit-worksheet">Section: Channel-fit worksheet</AnchorHeading>
      <p className="fs-6 fw-300">Week 6 · Hands-on worksheet</p>

      <p>
        By the end of this section you will have scored your product against
        five candidate channels, picked one to commit to for the remaining
        weeks of the course, and posted your public commitment before you
        leave. This is the channel decision that locks in place for weeks 6-10
        and the capstone. Treat it accordingly.
      </p>

      <p>
        Work on your own product throughout. Every step is numbered; do them
        in order. Do not skip the scoring table: the numbers matter more than
        your gut feeling at this stage.
      </p>

      <AnchorHeading as="h2" id="part-1-score">Part 1: Score your five channels</AnchorHeading>

      <p>
        Use the scoring rubric below. The five channels in the table are the
        most common picks for B2C solo founders; replace any column with a
        channel that is more relevant to your market (e.g., YouTube, TikTok,
        email newsletter, Discord community, App Store/ASO).
      </p>

      <p>
        <strong>Scoring rubric.</strong> Each dimension is scored 1-5:
      </p>
      <ul>
        <li>
          <strong>Channel-product fit (1-5).</strong> Does your product solve
          a problem that people already search for, share, browse, or discuss
          on this channel? 5 = strong existing demand signal; 1 = no evidence
          your audience uses this channel to find products like yours.
        </li>
        <li>
          <strong>Effort cost (1-5, lower is better).</strong> How much
          time and skill does this channel demand per week, given your current
          resources? 1 = very high ongoing cost (e.g., daily video production
          with no editing experience); 5 = low cost relative to your current
          workflow.
        </li>
        <li>
          <strong>Compounding potential (1-5).</strong> Does early work on
          this channel accumulate over time (pages rank, audience grows,
          backlinks accrue), or does reach reset to zero every week? 5 = strong
          compounding; 1 = no carry-over from one week to the next.
        </li>
        <li>
          <strong>Indie precedent (1-5).</strong> How many solo or small-team
          B2C founders have demonstrably succeeded on this channel for a
          product in your category? 5 = multiple well-documented cases; 1 = no
          known precedent.
        </li>
      </ul>

      <p>
        Fill in the table for your own product. The pre-filled rows show
        example reasoning for a generic SaaS tool aimed at remote workers
        ,  edit every cell to reflect your specific product.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Channel</th>
              <th style={{ textAlign: "center", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Channel-product fit (1-5)</th>
              <th style={{ textAlign: "center", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Effort cost (1-5, lower=better)</th>
              <th style={{ textAlign: "center", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Compounding potential (1-5)</th>
              <th style={{ textAlign: "center", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Indie precedent (1-5)</th>
              <th style={{ textAlign: "center", padding: "8px 12px", borderBottom: "2px solid var(--border-color, #e0e0e0)" }}>Total (20 max)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: "var(--table-row-alt, #f9f9f9)" }}>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>
                <strong>SEO / organic search</strong>
                <br />
                <small style={{ color: "var(--text-muted, #666)" }}>Example: “My users search for ‘remote work tool for designers’ ,  strong intent signal.”</small>
              </td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>4</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>3</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>5</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>4</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)", fontWeight: 600 }}>16</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>
                <strong>Twitter/X (build in public)</strong>
                <br />
                <small style={{ color: "var(--text-muted, #666)" }}>Example: “Tech-adjacent audience but my users are designers, not developers ,  partial fit.”</small>
              </td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>2</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>4</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>3</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>4</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)", fontWeight: 600 }}>13</td>
            </tr>
            <tr style={{ backgroundColor: "var(--table-row-alt, #f9f9f9)" }}>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>
                <strong>TikTok / short video</strong>
                <br />
                <small style={{ color: "var(--text-muted, #666)" }}>Example: “High reach potential but no video production experience ,  effort cost is prohibitive right now.”</small>
              </td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>3</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>1</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>2</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>2</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)", fontWeight: 600 }}>8</td>
            </tr>
            <tr>
              <td style={{ padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>
                <strong>Reddit (subreddit targeting)</strong>
                <br />
                <small style={{ color: "var(--text-muted, #666)" }}>Example: “r/digitalnomad is 700k members; high intent but strict self-promotion rules require genuine engagement.”</small>
              </td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>4</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>3</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>2</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)" }}>3</td>
              <td style={{ textAlign: "center", padding: "8px 12px", borderBottom: "1px solid var(--border-color, #e0e0e0)", fontWeight: 600 }}>12</td>
            </tr>
            <tr style={{ backgroundColor: "var(--table-row-alt, #f9f9f9)" }}>
              <td style={{ padding: "8px 12px" }}>
                <strong>Product Hunt</strong>
                <br />
                <small style={{ color: "var(--text-muted, #666)" }}>Example: “Great for launch spike but not a repeatable weekly channel ,  low compounding value.”</small>
              </td>
              <td style={{ textAlign: "center", padding: "8px 12px" }}>3</td>
              <td style={{ textAlign: "center", padding: "8px 12px" }}>4</td>
              <td style={{ textAlign: "center", padding: "8px 12px" }}>1</td>
              <td style={{ textAlign: "center", padding: "8px 12px" }}>5</td>
              <td style={{ textAlign: "center", padding: "8px 12px", fontWeight: 600 }}>13</td>
            </tr>
          </tbody>
        </table>
      </div>

      <AnchorHeading as="h2" id="part-2-decide">Part 2: Make the decision</AnchorHeading>

      <ol>
        <li>
          <strong>Circle the channel with the highest total.</strong> If two
          channels are within 2 points of each other, write one sentence
          naming the tiebreaker. Acceptable tiebreakers: existing audience
          you already have there, a piece of content you could ship this
          week, or direct evidence from week 1-5 experimentation.
        </li>
        <li>
          <strong>Write your commitment statement.</strong> Format: “I am
          committing to [channel] for weeks 6-10 because [one sentence of
          evidence]. My first output on this channel will be [specific thing]
          shipped by [day of week].” Write it in your founder journal
          before posting.
        </li>
        <li>
          <strong>Write the biggest risk.</strong> Every channel has a failure
          mode. Name yours: “This channel will fail for my product
          if [specific condition].” Naming the risk is not a reason to
          switch; it is a signal to watch.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-3-commit">Part 3: Post your commitment publicly</AnchorHeading>

      <ol start={4}>
        <li>
          <strong>Post to your chosen channel before you leave section.</strong>{" "}
          The post should contain: the channel you picked, a one-sentence reason,
          and what you will ship this week. Tag three classmates. Example
          post text (edit to your voice and product):
          <blockquote style={{ borderLeft: "3px solid var(--primary, #5b4fcf)", paddingLeft: "1rem", margin: "1rem 0", fontStyle: "italic" }}>
            “I’m committing to SEO for the next 4 weeks. My product
            helps remote teams track time zones; the demand is clearly search-driven.
            First output this week: a 2k-word lighthouse article targeting
            ‘best time zone converter for distributed teams’.”
          </blockquote>
        </li>
        <li>
          <strong>Share the post URL in the class Slack.</strong> This is your
          accountability record. After this week, your morning growth move
          stays on this channel for the rest of the course. No switching
          mid-commitment.
        </li>
      </ol>

      <AnchorHeading as="h2" id="part-4-seo-setup">Part 4: If you chose SEO ,  set up now</AnchorHeading>

      <p>
        If your worksheet points to SEO, complete these steps before the end
        of section. If you chose a different channel, replace these steps with
        the equivalent setup for your channel (e.g., profile optimization for
        Twitter, subreddit rules review for Reddit, scheduling tool for short
        video).
      </p>

      <ol start={6}>
        <li>
          <strong>Verify your domain in Google Search Console.</strong> Go to{" "}
          <a href="https://search.google.com/search-console">search.google.com/search-console</a>.
          Add your property as a domain (not URL prefix). Follow the DNS TXT
          verification step. Verification can take up to 72 hours, but the
          process must start today.
        </li>
        <li>
          <strong>Submit your sitemap.</strong> In GSC: Sitemaps → enter
          the path to your sitemap (commonly <code>/sitemap.xml</code>). If you
          do not have one, generate it with your framework’s built-in
          tool or a free sitemap generator.
        </li>
        <li>
          <strong>Verify Bing Webmaster Tools.</strong> Go to{" "}
          <a href="https://www.bing.com/webmasters">bing.com/webmasters</a> and
          add your site. Bing accounts for 8-12% of search volume; it takes
          5 minutes to set up and there is no reason to skip it.
        </li>
        <li>
          <strong>Record your baseline.</strong> In your founder journal, write
          today’s GSC numbers: impressions, clicks, average position, and
          total indexed pages. If all are zero, write that. These are your week
          6 baselines; every subsequent week you compare against them.
        </li>
      </ol>

      <AnchorHeading as="h2" id="what-you-leave-with">What you should leave with</AnchorHeading>
      <ul>
        <li>
          <strong>Milestone 1:</strong> Channel-fit worksheet fully scored
          (5 channels, all four dimensions, totals calculated).
        </li>
        <li>
          <strong>Milestone 2:</strong> One channel committed to in writing,
          with a risk statement.
        </li>
        <li>
          <strong>Milestone 3:</strong> Public commitment posted with the URL
          shared in class Slack.
        </li>
        <li>
          <strong>Milestone 4 (SEO track):</strong> GSC and Bing Webmaster
          verified, sitemap submitted, baseline numbers recorded.
        </li>
      </ul>

      <p>
        If you leave without milestones 1-3, complete them by 9 AM tomorrow.
        The public commitment is non-negotiable: it is the accountability
        mechanism that makes the channel commitment real. After this week,
        your morning growth move locks to one channel. No switching.
      </p>
    </>
  );
}

export const wk06SectionSearchBody =
  "channel fit worksheet scoring rubric SEO Twitter TikTok Reddit Product Hunt wedge channel channel commitment public commitment Google Search Console GSC Bing Webmaster sitemap section Week 6";
