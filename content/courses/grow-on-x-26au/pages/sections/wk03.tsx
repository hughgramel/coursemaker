import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 3 section — Reply sprint",
  tagline:
    "Borrow distribution from established accounts by putting real replies in the right places at the right time.",
  outDate: "Week 3",
  dueDate: "Week 3 (bring results to section)",
  overview: [
    "At near-zero followers your posts reach almost no one cold. The fastest way to get your name in front of an existing audience is to reply, substantively and early, to accounts larger than yours in the same niche. This section sprint runs that experiment live: you pick 10 target accounts, post one genuine reply to each within the first hour of their next post, and DM 5 of them with a specific, non-transactional message. The next day you check profile clicks.",
    "This is a manual, one-person operation. That is the point. Paul Graham (2013) wrote that the most common unscalable thing founders have to do at the start is recruit users manually. Creator growth at zero followers works the same way. You cannot automate your way to 10k; you have to earn the first 500 one conversation at a time.",
    "HW 2 (twenty posts) is due this week. Bring your post log and this section worksheet to class.",
  ],
  goals: [
    "Execute a real &ldquo;engagement velocity&rdquo; experiment by replying inside the first hour of a post&rsquo;s life",
    "Distinguish reply patterns that generate profile clicks from those that generate nothing",
    "Write a DM that offers value before asking for anything",
    "Track profile-click data and connect it to specific reply quality",
    "Internalize why borrowed distribution beats cold posting at zero followers",
  ],
  instructions: [
    {
      title: "Pick 10 target accounts",
      body: "Choose 10 accounts in your niche with between 10,000 and 200,000 followers. At least five should be in the 10k-50k range (close enough to reply under competitive conditions). List each handle, follower count, and typical posting frequency. Remove any account that posts fewer than three times per week.",
    },
    {
      title: "Set up a monitoring method",
      body: "You need to know when each target posts so you can reply within 60 minutes. Options: turn on notifications for each account in the X app, check their profiles at a set time each morning, or use a third-party notification tool. Write down your monitoring method before the sprint starts.",
    },
    {
      title: "Write one substantive reply per account",
      body: "When each target posts, reply within 60 minutes. The reply must do one of the following: add a specific data point or example the original post did not include; respectfully complicate one of the claims; answer a question the original post implicitly asked. Length: 2-4 sentences is enough. Do not write &ldquo;great point&rdquo; or any variant. Record the post URL and the exact text of your reply.",
      steps: [
        "Specific addition: cite a number, name, or example the original post omitted",
        "Complication: name one condition under which the claim does not hold",
        "Answer: if the post asks a question, answer it directly and briefly",
        "Do NOT: agree generically, promote your own content, or ask a follow-up question with no substance",
      ],
    },
    {
      title: "DM 5 of the 10 accounts",
      body: "Within 24 hours of your reply, send a DM to 5 of the 10 accounts. The DM must be specific to something they posted recently (not just their account in general) and must not ask for anything: no follow-back request, no collaboration pitch, no link to your content. A one or two sentence observation is enough. Record each DM verbatim.",
    },
    {
      title: "Track profile clicks the next day",
      body: "24 hours after each reply, open X Analytics (analytics.twitter.com) and record your profile-click count for that day. Compare it to your baseline from the previous week&rsquo;s average. Note which replies, if any, you can trace to a spike.",
    },
    {
      title: "Write a short debrief",
      body: "Write 150-250 words answering: Which reply got the most engagement? What made it different from the others? Did profile clicks rise? What would you do differently in round two? Bring this to section.",
    },
  ],
  deliverables: [
    "A list of 10 target accounts with handles, follower counts, and your monitoring method",
    "10 replies with post URL, timestamp, and full reply text for each",
    "5 DM texts recorded verbatim",
    "Profile-click data: baseline average and the day-after number",
    "150-250 word debrief answering the four questions above",
    "HW 2 post log (twenty posts): due this week",
  ],
  rubric: [
    {
      dimension: "Reply quality: specific, additive, non-sycophantic",
      points: 35,
      notes: "Each reply rated pass/fail on the criteria above. Partial credit for borderline replies with written justification",
    },
    {
      dimension: "Timing: replies within 60 minutes of post",
      points: 20,
      notes: "Timestamp recorded; credit on a sliding scale if timing was close",
    },
    {
      dimension: "DM quality: specific, no ask",
      points: 20,
      notes: "All 5 DMs recorded; each checked for specificity and absence of a request",
    },
    {
      dimension: "Debrief: data cited, honest assessment",
      points: 25,
      notes: "Profile-click data present; debrief answers all four questions",
    },
  ],
  hints: [
    "Set up notifications the night before the sprint. The 60-minute window goes fast, especially for accounts that post in the morning.",
    "Reply quality matters more than reply count. One specific, well-placed reply on a 50k-follower account outperforms ten generic replies across smaller accounts.",
    "The DM does not need to be long. Two sentences that reference something specific the person wrote recently will land better than a paragraph that could have been sent to anyone.",
    "If you cannot find a natural reply prompt in the first week, quote-post instead. The distribution mechanics are similar and the effort is the same.",
    "Comparing your profile clicks on sprint days versus non-sprint days is the only reliable signal you have at this stage. Track it carefully.",
    "HW 2 is due this week. If you are behind on posts, the sprint also counts toward posting practice. A reply is a post.",
  ],
  late: "Section worksheets submitted within 48 hours of section receive full credit. After that, deduct 10 points per day. The DM and reply log must be completed before section to receive timing credit.",
};

export function Wk03Section() {
  return <ProjectPage spec={spec} />;
}

export const wk03SectionSearchBody =
  "section reply sprint borrowed distribution engagement velocity 60 minutes DM outreach target accounts profile clicks manual outreach do things that don't scale Week 3 worksheet";
