import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 1 section: audit five accounts in your niche",
  tagline:
    "Reverse-engineer what works in your prospective niche before you write a single post.",
  outDate: "Week 1",
  overview: [
    "Before you commit to a niche and a voice, you need evidence. This section asks you to study five accounts that already operate in the space you want to enter. You are looking for patterns: what kinds of posts get traction, how their bios are structured, how frequently they post, and what role replies play in their presence. The goal is a short written audit you can bring to section for discussion.",
    "You are not copying these accounts. You are building a map of the territory so that when you write your niche statement and rewrite your bio (HW 1), you know what you are differentiating from. The audit also primes your eye: after studying five accounts closely, you will start noticing things in your own feed that you missed before.",
  ],
  goals: [
    "Identify the structural elements of a high-performing X bio (name, headline, proof, CTA)",
    "Recognize the difference between top-of-funnel content (impressions, likes) and engagement that signals deeper audience interest (replies, saves, profile clicks)",
    "Describe the posting cadence and reply pattern that sustains follower growth in a given niche",
    "Articulate at least two practices from your audit that you will adopt and two that you will intentionally avoid",
    "Produce a one-paragraph niche statement you can refine into HW 1",
  ],
  instructions: [
    {
      title: "Select five accounts",
      body: "Choose five accounts that operate in your prospective niche. At least three should have between 5,000 and 100,000 followers (established but not so large that their context is unreadable). At most one may be a large account with over 500,000 followers. Record each account handle and follower count.",
    },
    {
      title: "Audit each bio",
      body: "For each account, copy the current bio text into your notes. Mark which of the four elements (name/identity, headline, proof, CTA) are present. Note what is missing. Rate the bio 1-5 on how clearly it answers: who is this person and why should I follow them?",
    },
    {
      title: "Study the top three posts",
      body: "For each account, find the three posts with the highest engagement visible on their profile (likes plus replies is a reasonable proxy if impression data is unavailable). For each post, record: format (thread, single tweet, image, poll), topic, approximate word count, and what you think drove the engagement.",
    },
    {
      title: "Observe the reply pattern",
      body: "Scroll through the account&rsquo;s recent replies (the &ldquo;Replies&rdquo; tab). Does this account reply to comments on its own posts? Does it reply to others in the niche? Replies are often where the shadow audience becomes visible. Note whether the account treats replies as a growth channel or ignores them.",
    },
    {
      title: "Estimate posting cadence",
      body: "Count how many original posts (not reposts) the account published in the last 30 days. Divide by 30 for a daily rate. Note whether there are obvious gaps (vacations, platform breaks) and whether the cadence correlates with engagement.",
    },
    {
      title: "Synthesize your findings",
      body: "Write a short summary (150-250 words) covering: the two practices you will copy, the two you will avoid, and one thing that surprised you. End with a one-sentence niche statement for your own account in the form: &ldquo;I help [specific person] do [specific thing] by [specific method].&rdquo;",
    },
  ],
  deliverables: [
    "A table or list with the five account handles, follower counts, and bio ratings (bring this to section)",
    "Notes on the top three posts for each account (format, topic, what drove engagement)",
    "Observations on reply pattern and posting cadence for each account",
    "A 150-250 word synthesis with two copy practices, two avoid practices, one surprise, and a one-sentence niche statement",
  ],
  rubric: [
    {
      dimension: "Coverage: five accounts fully audited",
      points: 30,
      notes: "All five have bio rating, top-3 posts, reply pattern, and cadence noted",
    },
    {
      dimension: "Depth of post analysis",
      points: 30,
      notes: "Format, topic, and engagement driver are named for each post; not just counts",
    },
    {
      dimension: "Quality of synthesis",
      points: 30,
      notes: "Copy/avoid choices are specific and justified; niche statement follows the template",
    },
    {
      dimension: "Section participation",
      points: 10,
      notes: "Brings audit to section and contributes to group discussion",
    },
  ],
  hints: [
    "Use the &ldquo;Replies&rdquo; tab, not just the main feed. A creator who replies actively to their audience is doing something different from one who only broadcasts.",
    "Do not pick accounts purely by follower count. A highly engaged account at 8,000 followers is often more instructive than a coasting account at 200,000.",
    "If you cannot decide on a niche yet, pick a topic you are considering and audit that. The audit will either confirm or change your direction.",
    "The one-sentence niche statement will become the raw material for HW 1. Write it even if it feels wrong. You can revise it after section feedback.",
    "Screen-capture the bios and top posts now. Accounts change their bios frequently and you may want to reference the original version later.",
  ],
};

export function Wk01Section() {
  return <ProjectPage spec={spec} />;
}

export const wk01SectionSearchBody =
  "section audit five accounts niche bio reply pattern posting cadence shadow audience engagement Week 1 worksheet";
