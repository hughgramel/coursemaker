import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW4, The launch and the creator wave",
  tagline:
    "Execute a community launch, pre-mortem your critics, and send 20 personalized creator outreach emails.",
  outDate: "End of Week 9",
  dueDate: "End of Week 11 (Friday 11:59pm)",

  overview: [
    "This assignment has two parts that open sequentially. Part A is available when Week 9 lectures close. It asks you to execute, or deliberately not-execute, a community launch: a Reddit post in the most-fit subreddit and a Show HN draft, every link UTM-tagged, landing page copy matched to the channel. Part B opens after Week 10 lectures and asks you to build a prospect list from LangoBee's own creator catalog, send 20 personalized outreach emails, and write a memo comparing the economics of flat sponsorship, affiliate, milestone equity, and a 50% distribution partner. You submit everything together at the end of Week 11.",
    "The framing matters. A community launch is not a marketing event; it is a measurement event. You are learning which message, in which community, converts a stranger into a trial. UTM discipline is what converts that learning into a decision. Without tagged links you can only guess whether the post worked. With tagged links you know the source, the cohort, and the D1 return rate (Manalac, 2019).",
    "Part B is a concrete claim about channel economics. Sponsoring a creator for cash versus offering affiliate commission versus offering milestone equity versus offering 50% of the company are not equivalent bets. Each has a different expected value at different stages, and a different risk profile. You will build the math before you commit to any structure. The memo is not a draft pitch deck; it is a decision document you would be comfortable showing an investor or a potential partner as evidence that you thought carefully before proposing terms (Founder Institute, 2020).",
  ],

  goals: [
    "Verify launch readiness by re-running the must-work checklist and recording the D1 return rate from the HW2 cohort as a go/no-go gate.",
    "Execute or explicitly stage a community launch: one Reddit post in the best-fit subreddit, one Show HN draft, every link UTM-tagged, landing page copy matched to the post's hook (Manalac, 2019; Y Combinator, 2012).",
    "Write pre-mortem replies to the ten most likely hostile comments before the post goes live.",
    "Build a 50-creator prospect list ranked by fit from the youtube_creators table (Rachitsky, 2022).",
    "Send 20 personalized outreach emails with a response tracker.",
    "Write the 50%-partner memo: an expected-value comparison of flat sponsorship, affiliate, milestone equity, and a 50% equity partner, ending in a recommendation (Founder Institute, 2020; Influencer Marketing Hub, 2024).",
  ],

  background: [
    "Community launches work when three conditions hold simultaneously: the message matches what that community actually values, the product does not embarrass the person recommending it, and every link is tagged so the result is legible. Manalac (2019) frames launch as a repeatable multi-stage sequence, soft launch, community launch, press launch, broad launch, each with a distinct audience and a distinct message. The community stage is where most solo founders stall because they conflate 'the world should know about this' with 'these specific 3,400 members of r/Spanish care about comprehensible input.' Channel fit requires the latter specificity. Alstromer (2022) draws on patterns across 600-plus YC companies: the founders who got their early customers found one specific online place where those people already concentrated, said something true about that place's values, and tracked every click. Weinberg (2015) makes the same argument with a framework: test cheaply on the two or three most promising channels before concentrating fire. A Reddit post costs nothing; the test is free; the only cost is posting something that embarrasses LangoBee in a community that matters.",
    "The Show HN gate is higher than Reddit but worth clearing. Y Combinator's Show HN guidelines require an interactive, runnable project, not a landing page or a blog post. LangoBee qualifies if a visitor can try the reader or the shorts feed without creating an account, or if the friction to sign up and experience the core loop is under 60 seconds. The community is technically sophisticated and will notice if the product does not work on first click. The upside is that a well-received Show HN produces a spike of qualified traffic, a cohort that includes developers who build tools that might integrate with LangoBee, and a permanent indexed thread. Message-match on HN means framing around what you built and how, not around brand copy (Y Combinator, 2012). 'Show HN: I built a Spanish learning app' is not message-match. 'Show HN: I built a comprehensible-input reader that shows per-word difficulty scores across 17,000 native videos' is.",
    "The pre-mortem is a decision tool, not a PR exercise. Before you post publicly, you write the ten most plausible hostile comments and your replies. The point is not to prepare a defensive FAQ. It is to find the comments you do not have a confident answer for before the post is live rather than after. Annie Duke's kill-criteria framework applies: set your response policy before the pressure is on, when you are still thinking clearly, not while a comment thread is accumulating (Duke, 2022). Common hostile vectors for a language app launch: 'why is this better than LingQ or Dreaming Spanish?', 'the reader is the only feature?', 'this feels like it just scraped YouTube', 'your Spanish is the only language?', 'the comprehension score is meaningless because I recognize 90% of words anyway.' Each of those deserves a one-paragraph, factual, non-defensive reply written before you post.",
    "The creator catalog is a structural advantage most competitors do not have. LangoBee has 2,773 YouTube creators already catalogued with content in the system. A prospect list is not a cold email list; it is a ranked subset of people whose audience is the exact user LangoBee needs and whose content is already inside the product. That alignment is the basis for a personalized outreach email: you can tell a Spanish-language creator exactly which of their videos is in the reader, what the comprehension score is, and what the learner sees when they open it. That specificity converts cold outreach into warm outreach. Rachitsky (2022) documents influencer partnerships as one of the two highest-impact kickstarts for consumer apps with identity-driven audiences, and notes that the best early deals were signed before the creator knew the product would scale.",
    "The 50%-partner memo forces a decision that most founders defer too long. The four structures are not equivalent. A flat sponsorship transfers risk entirely to you: you pay cash, you get one video, you absorb the conversion uncertainty. Affiliate shifts risk to the creator: they earn only on conversions, so they are incentivized to promote to the right audience. Milestone equity is a hybrid: the creator earns equity only when a defined outcome is reached, aligning interests but introducing legal complexity. A 50% equity partner is a co-founder, not a partner: it changes the power structure of the company, requires a vesting schedule and a governance agreement, and should only be considered if the creator brings a strategic asset so large, an audience of one million engaged learners, for example, that it changes the unit economics of the entire company. Walling (2022) argues that equity-heavy creator deals are premature until at least one organic or affiliate channel is validated. The Founder Institute FAST Agreement benchmarks advisor equity at 0.1% to 1% (Founder Institute, 2020); a creator receiving 50% is not an advisor, they are a co-founder, and the decision should be made with that clarity.",
  ],

  instructions: [
    {
      title: "Re-run the must-work checklist and record the go/no-go decision",
      body: "Before drafting a single post, re-run the must-work checklist from HW2: the reader loads a Spanish video, word status persists across sessions, the comprehension score is visible, the trial paywall appears at the right moment. Test on a fresh incognito session, not your logged-in account. Then pull the D1 return rate for the most recent real cohort from PostHog (de-alt your founder account as in HW2). Record the number. If D1 is at or above the bar you set in HW2, you are cleared to launch. If it is below the bar, you still draft the posts and write the pre-mortem, but you write an explicit one-page go/no-go memo stating the metric, the shortfall, and the decision: launch anyway, delay, or stage the posts for a future date.",
      steps: [
        "Open an incognito window and walk through the must-work checklist. Screenshot each step. Log every failure.",
        "Pull D1 return rate from PostHog for the last cohort with at least 5 real users. Record the rate and the date.",
        "Compare against the bar from HW2. If green: proceed to Instruction 2. If red: write the go/no-go memo first, then proceed to draft (not publish) the posts.",
        "Paste the checklist screenshot and the D1 number into your submission. Both are required regardless of the outcome.",
      ],
    },
    {
      title: "Choose the best-fit subreddit and draft the Reddit post",
      body: "LangoBee's most likely Reddit communities are r/Spanish (434k members, direct language match), r/languagelearning (3.4m members, broader but noisier), and r/learnspanish or r/comprehensibleinput for smaller, higher-signal audiences. Pick one community as your primary launch target. Read the last 30 days of top posts in that community before you write a single word. Note: what question format gets the most engagement, what tone the community values, what framing makes a product launch feel like a contribution rather than an advertisement. Then draft the post following those norms.",
      steps: [
        "State your chosen subreddit and write one sentence explaining why it is the best fit over the alternatives (Weinberg, 2015; Alstromer, 2022).",
        "Read the community rules and recent mod posts. Note any restrictions on self-promotion, UTM links, or launch posts. If rules prohibit a direct product post, adjust to a 'what do people think of this approach' framing.",
        "Draft the post body. Lead with a real observation or problem, not a feature list. Include one concrete data point from LangoBee (e.g., '17,000 native Spanish videos ranked by difficulty, free to try'). Avoid superlatives.",
        "Append the product link with a UTM tag: utm_source=reddit, utm_medium=community, utm_campaign=launch-wk9, utm_content=[subreddit-name].",
        "Verify that the UTM-tagged URL resolves correctly and that PostHog captures the parameter on arrival.",
      ],
    },
    {
      title: "Draft the Show HN post",
      body: "Read the Show HN guidelines (Y Combinator, 2012) before drafting. The post title must follow the format 'Show HN: [plain description of what you built].' The product must be live and interactive. The first comment from you, the author, should give context on why you built it, how it works technically, and what you are trying to learn from the HN community. Do not pitch; explain. The audience includes engineers who will test edge cases, linguists who will question your tokenizer, and founders who will ask about monetization. Anticipate all three.",
      steps: [
        "Write the Show HN title. Test it against the guideline: would HN consider this a runnable project or a marketing page?",
        "Confirm the product works without a login for at least one core action (e.g., viewing a video with word difficulty highlighted, browsing the catalog). If it does not, note the gap.",
        "Write the author comment: 3 to 5 paragraphs covering what you built, the technical decisions worth discussing, and one specific thing you want feedback on.",
        "Set the product link UTM: utm_source=hacker-news, utm_medium=community, utm_campaign=launch-wk9, utm_content=show-hn.",
        "Decide: will you post on the week 9 due date or stage it for a later date? State the decision and the reasoning.",
      ],
    },
    {
      title: "Write the pre-mortem: ten hostile comments and replies",
      body: "Before either post goes live, write the ten most plausible hostile comments and your replies. The goal is not to build a FAQ; it is to find the questions you cannot answer confidently, so you can fix the product or the post before you publish. A comment you cannot reply to honestly is a signal that something in the product or the message is broken.",
      steps: [
        "List ten comments, numbered 1 to 10. Draw from these categories: competitive comparison (LingQ, Dreaming Spanish, Duolingo), feature gaps, data provenance (YouTube scraping), language coverage, monetization, comprehension score validity, and any community-specific sensitivities you observed in step 2.",
        "Write a one-to-three sentence reply to each. Replies must be factual and non-defensive. If you cannot reply factually, mark the comment with a flag and note what you would need to fix.",
        "Count the flagged comments. If more than three are flagged, reconsider publishing until those gaps are closed.",
        "Attach the pre-mortem to your submission as a separate section.",
      ],
    },
    {
      title: "Build the 50-creator prospect list",
      body: "The youtube_creators table catalogues 2,773 channels. Your prospect list is a ranked subset of 50 drawn from that table using explicit fit criteria. Fit criteria should include: primary language is Spanish (or the language you are launching with), estimated subscriber range is consistent with micro or mid-tier (10,000 to 500,000), content type involves spoken Spanish at a learnable pace, and at least one of their videos is already in the LangoBee catalog. Rank the 50 by fit, not by subscriber count: a 20,000-subscriber channel whose audience is exactly Spanish learners is a better first contact than a 500,000-subscriber channel whose audience is mostly native Spanish speakers watching entertainment content.",
      steps: [
        "Write a SQL query or PostgREST filter against youtube_creators to pull channels matching your criteria. Include the query in your submission.",
        "Export the results to a spreadsheet with columns: channel_id, channel_name, subscriber_estimate, content_type, fit_score (your ranking, 1 to 50), and notes.",
        "For the top 20 channels, add one sentence of personalization notes: the name of a specific video already in the LangoBee catalog, and one observation about why their audience matches the product.",
        "Submit the spreadsheet as part of your deliverables.",
      ],
    },
    {
      title: "Send 20 personalized outreach emails and start the response tracker",
      body: "Send 20 emails to the top 20 channels on your prospect list. Each email must be personalized: reference one specific video of theirs that is in the reader, describe what a learner sees when they open it, and explain the partnership idea in one sentence. Do not attach a rate card or an equity term sheet to the first email. The goal of the first email is to get a reply, not to close a deal. Rachitsky (2022) documents that the highest-converting influencer outreach is the one that leads with what the creator's audience gets, not what the founder wants.",
      steps: [
        "Write a template with three fill-in slots: creator name, specific video title, and one observation about their content style. The rest of the email is fixed.",
        "Customize each of the 20 emails. Every email must differ in at least the three fill-in slots plus one additional sentence.",
        "Start a response tracker: a spreadsheet or Notion table with columns: creator name, channel URL, email sent date, replied (yes/no), reply content summary, next step.",
        "Send all 20 emails before the submission deadline. Paste the response tracker into your submission showing all 20 rows.",
        "If you receive any replies before the deadline, note the response in the tracker and summarize the tone: positive, curious, negative, or no reply.",
      ],
    },
    {
      title: "Write the 50%-partner memo",
      body: "The memo compares four deal structures: flat sponsorship, affiliate commission, milestone equity, and a 50% equity partner. For each structure, compute an expected value using real LangoBee numbers or conservative estimates where real numbers do not yet exist. The memo ends with a recommendation and the conditions under which you would change it. This document is not aspirational writing; it is arithmetic with a conclusion.",
      steps: [
        "Flat sponsorship: look up the market rate for a nano or micro-tier YouTube creator in the language-learning niche (Influencer Marketing Hub, 2024). State the cash cost per video and the number of trials you would need to convert to break even at LangoBee's current pricing ($7.99/mo or $49/yr).",
        "Affiliate commission: propose a per-trial or per-subscription commission rate. Compute the break-even conversion rate the creator's audience would need to achieve before the affiliate deal costs more than the flat sponsorship equivalent.",
        "Milestone equity: define one concrete milestone (e.g., 500 paying subscribers attributable to the creator's referral links within 90 days). Propose an equity percentage and compute its dilutive cost relative to the company's current implied valuation.",
        "50% equity partner: state honestly whether any single creator's audience is large enough and qualified enough to justify co-founder-level dilution. Benchmark against FAST norms: advisor equity tops out at 1% for the highest engagement level (Founder Institute, 2020). A 50% partner is structurally a co-founder, not an advisor. State the conditions under which that structure would make sense arithmetically.",
        "Write a one-paragraph recommendation naming which structure you would propose first and why, citing at least one number from steps 1 through 4. Cite Walling (2022) on validating organic channels before committing equity.",
      ],
    },
  ],

  deliverables: [
    "Must-work checklist screenshots and D1 return rate from PostHog, dated. If D1 is below the bar, include the go/no-go memo (one page) stating the metric, the shortfall, and the launch decision.",
    "Reddit post draft or live post: the subreddit selection rationale (one sentence), the post body following community norms, and the UTM-tagged link confirmed resolving in PostHog.",
    "Show HN post draft: title, product URL with UTM tag, and the author comment (3 to 5 paragraphs). State whether this is a live post or a staged draft and why.",
    "Pre-mortem document: ten numbered hostile comments with replies, flags clearly marked, and a count of flagged comments with a sentence on your decision.",
    "50-creator prospect list: spreadsheet (50 rows) with channel_id, channel_name, subscriber_estimate, content_type, fit_score, and personalization notes for the top 20.",
    "Response tracker: 20 rows showing creator name, email sent date, replied status, and next step. All 20 must show a sent date on or before the submission deadline.",
    "50%-partner memo: four deal structures with arithmetic, a one-paragraph recommendation, and citations.",
  ],

  rubric: [
    {
      dimension: "Channel norms respected",
      points: 20,
      notes:
        "Reddit post follows the chosen subreddit's tone and rules; Show HN title and author comment follow HN guidelines; neither post reads as marketing copy.",
    },
    {
      dimension: "Attribution airtight",
      points: 20,
      notes:
        "Both links carry correct UTM parameters (source, medium, campaign, content); PostHog screenshot confirms the parameters are captured on arrival; response tracker uses the same source tags.",
    },
    {
      dimension: "Launch gate documented",
      points: 15,
      notes:
        "Must-work checklist re-run with screenshots; D1 rate stated with a date; go/no-go memo present if D1 is below bar; decision is explicit and evidence-backed.",
    },
    {
      dimension: "Pre-mortem credible and complete",
      points: 10,
      notes:
        "Ten comments present; replies are factual and non-defensive; flagged comments are identified rather than papered over.",
    },
    {
      dimension: "Creator prospect list built from the catalog",
      points: 15,
      notes:
        "Query or filter logic shown; 50 rows present; top 20 have personalization notes citing a specific video in the catalog.",
    },
    {
      dimension: "20 emails sent with response tracker",
      points: 10,
      notes:
        "All 20 rows show a sent date; each email references a specific creator video; tracker columns complete.",
    },
    {
      dimension: "Equity math defensible",
      points: 10,
      notes:
        "All four structures computed with real or explicitly-estimated numbers; FAST benchmark cited; recommendation states a condition, not just a preference.",
    },
  ],

  hints: [
    "UTM tags fail silently when the landing page strips query parameters on redirect. Test the full chain: paste your UTM URL into an incognito window, complete a session, then check PostHog's acquisition properties on the resulting session. If utm_source does not appear, the tag is being dropped somewhere in the redirect chain.",
    "The best Reddit posts in language-learning communities are not launch announcements; they are observations or questions with a product link as supporting evidence. 'I built a tool that ranks 17,000 Spanish videos by word difficulty, here is what the difficulty distribution looks like across genres' is more likely to survive moderation and generate genuine replies than 'I built LangoBee, please check it out.'",
    "For Show HN, the author comment is the post. The title gets someone to click; the author comment decides whether they try the product. Write it for an engineer who will immediately open DevTools and check your network requests.",
    "Your pre-mortem should include at least one comment you genuinely do not have a confident answer to. If every reply feels easy, you have not been adversarial enough with yourself. Common blind spots: why the comprehension score is statistically reliable given the sample size per text, and why LangoBee is the right surface for this content rather than just watching the YouTube videos directly.",
    "When building the prospect list, fit beats follower count. A creator with 15,000 subscribers who posts weekly Spanish comprehensible-input content for intermediate learners is worth more to LangoBee than a creator with 300,000 subscribers who posts mix-language lifestyle vlogs. The difference shows up in every metric: reply rate, conversion rate, and audience quality (Chen, 2012).",
    "For the outreach email, name the video title and what the learner sees. 'I noticed your video [title] is in our reader at B1 difficulty level, with the vocabulary highlighted' is a personalization that takes 30 seconds to write and is almost impossible to ignore. Generic outreach asking creators to 'partner' converts at near-zero rates.",
    "The 50%-partner memo is not a pitch to a creator; it is a decision document for yourself. Write it before you talk to anyone. Knowing what terms you are willing to propose, and why, before a conversation means you do not commit to something under social pressure that does not make arithmetic sense.",
  ],

  late:
    "Part A (community launch gate, posts, pre-mortem) accounts for half the grade; Part B (creator list, emails, memo) accounts for the other half. Late submissions accepted for one week past the deadline at a maximum of 80 points. No submissions accepted two weeks past the deadline. The D1 number and UTM screenshots must reflect data from on or before the submission date; you may not back-date measurement.",
};

export function Hw4Page() {
  return <ProjectPage spec={spec} />;
}

export const hw4SearchBody = [
  spec.title,
  spec.tagline ?? "",
  ...spec.overview,
  ...spec.goals,
  ...(spec.background ?? []),
  ...spec.instructions.map(
    (t) => `${t.title} ${t.body ?? ""} ${(t.steps ?? []).join(" ")}`
  ),
  ...spec.deliverables,
  ...(spec.hints ?? []),
].join(" ");
