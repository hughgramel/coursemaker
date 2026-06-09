import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW3 — Wedge channel sprint",
  tagline: "Commit to ONE channel. Produce four weeks of output. Measure honestly.",
  outDate: "End of Week 6",
  dueDate: "End of Week 7 (Friday 11:59pm) — but the channel commitment extends through Week 10",

  overview: [
    "Every traction channel looks appealing in theory. In practice, channel-product fit is as narrow and unforgiving as product-market fit: the distribution mechanism has to match how your users already behave, what your product is, and — critically — what you can sustain shipping every weekday at 7am. Pieter Levels built Nomad List into a $20–40k/month business on programmatic SEO (Nomad List founder page, levels.io) because its core asset was structured data, and structured data generates pages that Google can index at scale. Marc Lou built his audience and product distribution on Twitter/X because his products were inherently demonstrable in 280 characters and short videos (Marc Lou free-tool marketing essay, 2024). Tony Dinh launched Black Magic and Xnapper by committing to Product Hunt sequentially — a repeatable beachhead for an audience that was already there (Tony Dinh: zero to $45k/mo, 2023). None of them diversified early. All three picked one lane and drove it past the point of doubt.",
    "Starting in Week 6, this course enforces a 'one channel obsession' rule through Week 9. You will score your product against five candidate channels, publicly commit to the single channel you pick, and produce output in that channel every weekday for the next four weeks. The commitment is not reversible mid-sprint without escalating to staff with data. The only acceptable exit condition before Week 10 is a documented failure — defined as: zero non-bot engagement on 8+ outputs, or a channel infrastructure problem that cannot be resolved in 48 hours.",
    "HW3 covers the first two weeks of the sprint (Weeks 6 and 7). By the end of Week 7 you will have: a scored and defended channel decision, a functioning channel infrastructure, a log of at least 8–12 outputs with URLs and dates, a viral asset shipped into the product, and a one-page memo deciding whether your channel goes into Weeks 8–10 or needs staff review. Week 7 also introduces K-factor, viral loops, and the CAC ceiling — these are not optional extras but mandatory complements to a channel that compounds.",
  ],

  goals: [
    "Score your product against five candidate channels using the Week 6 rubric criteria and defend a single pick with evidence.",
    "Set up the full channel infrastructure (GSC + sitemap for SEO; ads account for paid; posting cadence + profile for social) before shipping the first output.",
    "Produce 8–12 channel outputs over a two-week sprint — defined as content, posts, pages, or experiments that a real audience can engage with.",
    "Compute a K-factor estimate from real share-event data and ship at least one viral asset that compounds the chosen channel.",
    "Write a channel decision memo that either commits the channel through Week 10 or escalates to staff with data.",
  ],

  background: [
    "Weinberg and Mares catalogued 19 traction channels — viral marketing, PR, SEM, social ads, SEO, content, email, engineering-as-marketing, targeting blogs, BD, sales, affiliates, existing platforms, tradeshows, offline events, speaking, and community building (Traction, 2015). Their key insight is the Bullseye Framework: most channels fail for a given product, a few look promising, and one will be your primary driver. The mistake most early-stage founders make is running multiple channels in parallel and declaring all of them insufficient, when the real problem is that none received enough concentrated effort to produce a signal. Channel-product fit matters as much as product-market fit, and it is similarly specific.",
    "First Round Review's consumer-acquisition playbook (Hockenmaier and Rachitsky, 2019) narrows the realistic acquisition universe for B2C founders even further: three lanes exist at scale — performance marketing, virality, and content/SEO — and most companies master one before expanding to a second. Lenny Rachitsky's 'Build your growth engine' (Step 6 of the consumer-business series, 2022) reinforces this: Airbnb mastered virality (70%+ of host acquisition), Thumbtack spent 18–24 months building SEO before it paid off, and Booking.com pivoted from SEO to paid in 2004 only after the SEO engine was running. The throughline across every case study is concentration.",
    "Reforge's 'Growth Loops are the New Funnels' (Balfour and Winters, 2019) introduces the mental model that governs Week 7: a loop is a closed system where outputs become inputs. A viral loop is one acquisition loop type; content/SEO loops and paid loops are others. The loop framing forces the question 'how does one cohort of users generate the next cohort?' and exposes whether your channel actually compounds or merely drains budget. Andrew Chen's 'Braindump on Viral Loops' (2025) provides the mathematical foundation: a viral factor above 1.0 means exponential growth; 0.9 produces 10x the install base; 0.5 doubles it. Modern virality, he argues, depends on retention-driven loops across multiple sessions rather than single-session conversions — which is why shipping a viral asset without wiring share-event telemetry is decoration, not an engine (Elena Verna, Lenny Podcast, 2025).",
    "The discipline of NOT switching channels mid-sprint is itself a skill. Every channel looks underperforming at day five. SEO takes 12–18 weeks before GSC impressions compound; Twitter takes 3–4 weeks to identify which post formats generate follows; Product Hunt launches benefit from a warm audience you build before launch day. Switching channels early is the most common sprint-killing failure mode — it guarantees that no channel ever gets enough reps to produce a clean signal. The Week 6 commitment post is specifically designed to be irreversible: once you have told your audience what you are doing, sunk-cost becomes your friend.",
  ],

  instructions: [
    {
      title: "Score your product against five candidate channels",
      body: "Using the Week 6 section scoring rubric, evaluate five channels on four axes: (1) audience match — does your target user already live here?, (2) asset fit — does the thing you are building produce content/data/demos that work in this medium?, (3) founder bandwidth — can you ship one output per weekday for four weeks without burning out?, (4) time-to-signal — how many weeks before you know if it is working? Score each 1–5 per axis. Produce a filled scoring sheet with totals.",
      steps: [
        "Candidate channels to consider: programmatic SEO, content SEO (lighthouse article pattern), Twitter/X build-in-public, Reddit community marketing, Product Hunt launch, YouTube demos, TikTok / short video, email/newsletter, engineering-as-marketing (free tools), paid (Meta or Google).",
        "For each channel, write one sentence explaining why you scored it as you did on 'asset fit' — this is the axis most founders misjudge.",
        "Identify the top two channels by total score. Write a paragraph defending why the higher-scoring one is the right pick, or why you are choosing the second-highest if you have a legitimate reason.",
      ],
    },
    {
      title: "Pick ONE channel and write the 1-paragraph defense",
      body: "State your channel decision in a single paragraph posted publicly (Twitter, LinkedIn, your blog, or a peer Slack). The paragraph must name: the channel, the specific reason it fits your product's assets, one founder who has won this channel with a similar product type, and the metric you will use to know if it is working. This post is your public commitment — screenshot it for your deliverable.",
    },
    {
      title: "Set up channel infrastructure before shipping the first output",
      body: "Each channel has specific setup requirements. Complete setup on Day 1 (Week 6 Tuesday), and do not begin counting outputs until setup is verified.",
      steps: [
        "SEO: Install Google Search Console, verify the property, submit your sitemap. Install Bing Webmaster Tools. Confirm GSC is recording impressions. (Google Search Console docs, 2026)",
        "Paid (Meta or Google): Create the ads account, install the Pixel or conversion API, run a $0 test conversion to verify the event fires. Do not spend until the event pipeline is confirmed.",
        "Twitter/X: Set up a dedicated posting cadence in a scheduler or calendar. Optimize the profile bio for your product's keyword. Schedule your first three posts.",
        "Reddit: Identify the two or three subreddits with the highest density of your target user. Read the rules. Establish comment karma before posting a link.",
        "Product Hunt: Follow the product, create a draft listing, and line up five people who will upvote on launch day.",
        "YouTube/TikTok: Create the channel, configure the banner and description, confirm upload and editing workflow is in place.",
        "Engineering-as-marketing (free tool): Define the free tool's scope, confirm it is live at a public URL with no signup friction, and verify it is indexable by search engines.",
      ],
    },
    {
      title: "Produce 8–12 outputs over the two-week sprint",
      body: "Target roughly two outputs per weekday over two weeks. An output is a discrete unit a real audience can engage with: an article, a tweet or thread, a Reddit post, a YouTube video, a Product Hunt comment, a free tool page, a paid ad creative, or a programmatic SEO page cluster. Log each output in the output log (deliverable 2) with the URL and date published.",
      steps: [
        "Quality floor: each output must be complete and public before it counts. Drafts do not count.",
        "If your channel is SEO, your 8–12 outputs are the lighthouse article plus 7–11 supporting cluster pages. They must be published and indexed (use the URL Inspection tool in GSC) to count.",
        "If your channel is paid, your outputs are ad creative variants — each variant is one output. You need at least one live ad to count, but creative variants are the primary lever.",
        "Weekday rhythm: the Week 6 and Week 7 daily routines in the syllabus suggest specific output days. Follow them; the cadence is the assignment.",
      ],
    },
    {
      title: "Measure channel-specific outputs at the end of each week",
      body: "Pull your channel analytics at the end of Week 6 Friday and again at the end of Week 7 Friday. Record the raw numbers in a screenshot for each week.",
      steps: [
        "SEO: GSC impressions, clicks, average position for the target page cluster. Note week-over-week delta.",
        "Twitter/X: impressions, engagements, profile visits, and new followers per output.",
        "Reddit: upvotes, comments, and click-through on each post.",
        "YouTube/TikTok: views, watch time, and channel subscribers gained.",
        "Paid: impressions, clicks, conversions, spend, and calculated CAC per ad creative variant.",
        "Engineering-as-marketing / free tools: unique visitors, signups, and conversion rate to paid.",
      ],
    },
    {
      title: "Wire one viral asset that compounds the channel",
      body: "By end of Week 7 Wednesday, ship one viral asset into the product itself — not just into the channel. A viral asset is something users encounter inside your product that creates a natural, low-friction sharing moment: a public stats page, a shareable report, an embeddable widget, a 'made with [Product]' share card, or a referral mechanism. Wire share-event telemetry so you can count how many times the asset was triggered and how many resulting sign-ups occurred. (Andrew Chen, Braindump on Viral Loops, 2025; Reforge Growth Loops, 2019)",
      steps: [
        "The asset must be live in production — not a mockup — to count.",
        "The share event must fire an analytics event you can query. If you do not have analytics installed, install PostHog or a lightweight pixel before building the asset.",
        "Estimate your K-factor at the end of Week 7: (new sign-ups from viral asset) / (active users who triggered the share event). Even if the number is small, compute it.",
        "Cross-reference the viral asset with your channel: if your channel is Twitter, the share card should generate tweets. If your channel is SEO, the shareable output should generate backlinks.",
      ],
    },
    {
      title: "Compile the sprint data and identify what is compounding vs decaying",
      body: "After pulling Week 7 Friday analytics, write a two-paragraph analysis: (1) which outputs generated non-zero signal (defined as at least one organic engagement not attributable to you), and (2) whether the signal is growing week-over-week (compounding) or declining (decaying). You are not expected to be growing yet — you are expected to be honest.",
    },
    {
      title: "Write the channel decision memo",
      body: "One page maximum. Structure: (1) Channel you committed to and the date of the public post. (2) Outputs produced and the two or three that generated the most signal. (3) Viral asset shipped — K-factor estimate and what it means. (4) Verdict: CONTINUE (channel goes into Weeks 8–10 with the same strategy) or ESCALATE (you have a specific data-backed reason to believe the channel is wrong and you need staff guidance). ESCALATE is not failure — it is the honest use of the assignment. What is not acceptable is silence: if you are seeing zero signal, the memo is where you say so.",
    },
  ],

  deliverables: [
    "Channel-fit scoring sheet: five channels scored on the four-axis rubric, one channel picked, and a paragraph defending the choice.",
    "Output log: a list of 8–12 produced outputs with URL, date published, and channel platform for each.",
    "Channel-specific analytics screenshots: one screenshot at end of Week 6, one at end of Week 7, with the relevant metrics labeled.",
    "Viral asset screenshot or link, plus the share-event telemetry showing trigger count and resulting sign-ups, and the K-factor estimate.",
    "Channel decision memo (one page): CONTINUE or ESCALATE verdict with supporting data.",
    "Public output: the Week 6 channel commitment post (screenshot + URL) showing it was posted publicly.",
  ],

  rubric: [
    {
      dimension: "Channel-fit scoring is defended with evidence",
      points: 15,
      notes: "Scoring sheet complete; paragraph defense names a real founder analogue and a specific metric signal.",
    },
    {
      dimension: "Channel commitment is public and irreversible until Week 10",
      points: 10,
      notes: "Public post URL submitted; post is live and undeleted at submission time.",
    },
    {
      dimension: "8+ outputs produced and logged",
      points: 25,
      notes: "Each output has a public URL and a date. Drafts or password-protected pages do not count.",
    },
    {
      dimension: "Output quality: at least 3 outputs received non-zero signal",
      points: 15,
      notes: "Signal = at least one organic engagement (upvote, reply, impression, click) not attributable to the submitter.",
    },
    {
      dimension: "Viral asset shipped and measured",
      points: 15,
      notes: "Asset is live in production, share-event telemetry fires, K-factor estimate computed even if small.",
    },
    {
      dimension: "Decision memo identifies next steps with data",
      points: 10,
      notes: "CONTINUE or ESCALATE verdict; supported by Week 6 and Week 7 analytics numbers.",
    },
    {
      dimension: "Public output shipped",
      points: 10,
      notes: "Sprint-results post (Week 7 Friday recap) published publicly with real numbers.",
    },
  ],

  hints: [
    "The channel you can stand to do every weekday at 7am beats the channel you 'should' do. Consistency compounds; enthusiasm decays. Score founder bandwidth honestly.",
    "Programmatic SEO is the highest-leverage channel for indie B2C right now if your product has structured data — Nomad List exists for a reason (levels.io, Lex Fridman Podcast #440, 2024). If your product does not produce indexable data at scale, programmatic SEO is not your channel.",
    "Don't run paid before $5k MRR. The CAC arithmetic almost never works: your LTV is too uncertain, your creative untested, and your conversion funnel unoptimized. Use the 'why not yet' memo instead.",
    "Build-in-public on Twitter/X works if you can show real numbers. Marc Lou built $45K/month in February 2024 by being transparent about revenue (YouTube, 2024). It does not work if your product is pre-revenue and your posts are about the vision. Audiences follow results, not plans.",
    "The viral asset is not a growth hack — it is a product feature. If users have no reason to share it, adding a share button changes nothing. Design the share trigger first (what moment makes a user want to show this to someone else?), then build the asset around that moment.",
    "GSC impressions take 48–72 hours to appear after a page is indexed. Don't measure SEO on Day 1 or Day 3. Measure on Friday of each week against the previous Friday.",
  ],
};

export function Hw3Page() {
  return <ProjectPage spec={spec} />;
}

export const hw3SearchBody = [
  spec.title,
  spec.tagline ?? "",
  ...spec.overview,
  ...spec.goals,
  ...(spec.background ?? []),
  ...spec.instructions.map((t) => `${t.title} ${t.body ?? ""} ${(t.steps ?? []).join(" ")}`),
  ...spec.deliverables,
  ...(spec.hints ?? []),
].join(" ");
