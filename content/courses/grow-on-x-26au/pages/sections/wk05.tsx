import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 5 section — Read your analytics",
  tagline:
    "Pull your last 30 days of X analytics. Classify your top 10 posts by hook pattern, format, and topic. Identify two patterns to double down on and one to retire.",
  outDate: "Week 5",
  overview: [
    "Most creators look at their analytics to feel good or feel bad. Neither is useful. This section trains a different habit: reading your data to make two or three specific decisions about next week's posting. You will export or screenshot 30 days of analytics, classify your best-performing posts along three dimensions, and leave section with a written plan.",
    "The classification is the work. Knowing that a post got 4,000 impressions is information; knowing that it got 4,000 impressions because it used a number hook on a Tuesday about a contrarian claim in your niche is a pattern you can replicate. By the end of section you will have two patterns to repeat and one to stop.",
  ],
  goals: [
    "Pull 30 days of post-level analytics from the X Analytics dashboard and identify the top 10 posts by impressions.",
    "Classify each of the top 10 posts by hook pattern (claim, contrast, number, story-open, question), format (single post, thread, image, quote), and topic.",
    "Calculate impressions-per-follower and profile-visit-to-follow rate from the 30-day summary tab.",
    "Identify two post patterns that appear consistently in the top 10 and that you will post more of.",
    "Identify one post pattern that underperforms consistently and that you will stop using.",
    "Write a one-paragraph posting plan for the next two weeks based on your findings.",
  ],
  instructions: [
    {
      title: "Export your analytics (before section)",
      body: "Go to analytics.twitter.com. Set the date range to the last 30 days. Screenshot or export the summary tab (total impressions, profile visits, new followers). Then open the &ldquo;Tweets&rdquo; tab and sort by impressions. Screenshot or copy the top 10 posts with their impression counts, link clicks, and engagement rates. Bring this data to section.",
    },
    {
      title: "Calculate your two rates (10 min)",
      body: "On your summary tab, find: (a) total impressions, (b) your follower count at the start of the period, (c) total profile visits, (d) new followers gained. Calculate:",
      steps: [
        "Impressions per follower = total impressions divided by follower count at period start.",
        "Profile-visit-to-follow rate = new followers divided by profile visits, expressed as a percentage.",
        "Write both numbers at the top of your worksheet. Healthy benchmarks: impressions per follower above 1.0x; profile-visit-to-follow rate above 5%.",
      ],
    },
    {
      title: "Classify the top 10 posts (20 min)",
      body: "For each of your top 10 posts by impressions, fill in three columns:",
      steps: [
        "Hook pattern: C (claim), CT (contrast), N (number), S (story-open), Q (question). If the post has no clear hook, write NH (no hook).",
        "Format: single, thread, image, quote, poll.",
        "Topic: one or two words describing the subject matter (e.g., &ldquo;writing speed&rdquo;, &ldquo;morning routine&rdquo;, &ldquo;pricing advice&rdquo;).",
        "Optional: note the day of the week the post went out.",
      ],
    },
    {
      title: "Spot the patterns (10 min)",
      body: "Look across your classification table. Ask:",
      steps: [
        "Which hook pattern or patterns appear in 4 or more of the top 10?",
        "Which format appears in 4 or more of the top 10?",
        "Is there a topic cluster? Do 3 or more posts share a topic label?",
        "Is there any pattern in the day of the week?",
        "Write down the two patterns you see most clearly. These are your &ldquo;double down&rdquo; patterns.",
      ],
    },
    {
      title: "Identify one pattern to retire (5 min)",
      body: "Now look at posts you published in the last 30 days that are NOT in your top 10. Are there hook patterns, formats, or topics that appear repeatedly in the underperformers? Pick the single clearest underperforming pattern. Write one sentence explaining why you think it underperforms.",
    },
    {
      title: "Write your two-week plan (10 min)",
      body: "Write a paragraph (100-150 words) covering: your two rates and what they tell you, your two double-down patterns with at least one example post idea for each, and the pattern you are retiring and what you will post instead. This paragraph becomes the written deliverable for section.",
    },
    {
      title: "Group debrief (15 min)",
      body: "Two volunteers share their classification tables and two-week plans. The group discusses: Did the same patterns show up for multiple people, or are the winning patterns niche-specific? What would change if the profile-visit-to-follow rate was 1% versus 10%?",
    },
  ],
  deliverables: [
    "Summary tab screenshot or export showing 30-day totals: impressions, profile visits, new followers.",
    "Classification table: top 10 posts with hook pattern, format, and topic filled in for each.",
    "Two calculated rates written at the top of your worksheet: impressions per follower and profile-visit-to-follow rate.",
    "A 100-150 word two-week posting plan identifying two patterns to double down on and one to retire.",
  ],
  rubric: [
    {
      dimension: "Analytics pulled and top 10 identified",
      points: 15,
      notes: "Must show actual post-level data, not just summary totals.",
    },
    {
      dimension: "Classification table complete",
      points: 25,
      notes: "All three columns (hook, format, topic) filled for all 10 posts.",
    },
    {
      dimension: "Rates calculated correctly",
      points: 20,
      notes: "Impressions per follower and profile-visit-to-follow rate are present and the arithmetic is correct.",
    },
    {
      dimension: "Pattern identification",
      points: 20,
      notes: "Two double-down patterns named with evidence from the table; one retire pattern named with a reason.",
    },
    {
      dimension: "Two-week plan quality",
      points: 20,
      notes: "Plan is specific: includes example post ideas, references the two rates, and names the retired pattern.",
    },
  ],
  hints: [
    "If analytics.twitter.com shows &ldquo;not enough data,&rdquo; use the native post analytics (tap the bar chart icon below each post). Copy the impression counts manually for your last 30 posts and rank them yourself.",
    "A post can appear in the top 10 by impressions but have a very low engagement rate. Note this. High impressions plus low engagement often means the algorithm surfaced it without the content earning the attention.",
    "If your profile-visit-to-follow rate is below 2%, the section worksheet is most useful as a prompt to rewrite your bio before section ends. Bring a draft bio revision.",
    "The retire decision is the most valuable part of this exercise. It is easy to say &ldquo;I will post more.&rdquo; It is harder to commit to stopping something. Pick one pattern and actually stop it for two weeks.",
    "HW4 (30-day growth experiment) asks you to run a systematic A/B test starting this week. Your double-down patterns from today are the starting hypotheses for that experiment.",
  ],
  late: "Bring printed or digital data to section. Late submission of the written plan is accepted up to 48 hours after section with a 10-point deduction.",
};

export function Wk05Section() {
  return <ProjectPage spec={spec} />;
}

export const wk05SectionSearchBody =
  "read your analytics section worksheet 30 days X analytics top 10 posts classify hook pattern format topic impressions per follower profile visit to follow rate double down retire weekly retrospective Week 5 section";
