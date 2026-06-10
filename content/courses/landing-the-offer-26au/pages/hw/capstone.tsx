import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Capstone, Application sprint, full mock loop, one unconventional move",
  tagline: "Week 10 is the dress rehearsal for every job search you will run for the rest of your career.",
  outDate: "Week 7",
  dueDate: "Week 10",
  overview: [
    "The capstone integrates the formal funnel AND the side-door track into a single three-week sprint. Weeks 1 through 9 built the individual skills: the ATS-clean resume, the behavioral story bank, the DSA repertoire, the system design vocabulary, the referral strategy, and the unconventional-move toolkit. The goal of the capstone is to leave the course not with abstract knowledge but with three live conversations already in motion, one recorded mock loop you have watched and scored, and one unconventional move that has been shipped to a real human at a target company.",
    "Concretely, the deliverables are: 15 high-quality applications each tied to a specific role and tailored to the posting, 5 referral requests using the Week 8 referral-strategy patterns, ONE unconventional move chosen from (an open-source PR submitted to a relevant project, OR a cold-email outreach to three target companies naming a specific problem you would solve, OR a public artifact aimed at a target company and distributed where that company&rsquo;s engineers can find it), ONE recorded full mock loop covering coding plus design plus behavioral run back-to-back, and a written personal hiring playbook. The sprint runs three weeks; the playbook and recording are due at Week 10 section.",
  ],
  goals: [
    "Create a one-week application sprint plan with a target list, application cadence, referral asks, and a daily 30-minute pipeline review.",
    "Apply STAR storytelling, DSA problem-solving, and system design reasoning under back-to-back time pressure in a recorded mock loop.",
    "Create one unconventional move and surface it to a real human at a target company.",
    "Evaluate your own mock-loop recording and identify the top-3 leverage points for improvement.",
    "Create a personal hiring playbook capturing your target list, story bank summary, design preparation cadence, sprint template, and what worked.",
  ],
  instructions: [
    {
      title: "Build the sprint plan",
      body: "Before you send a single application, write the plan. The plan is not aspirational; it is a day-by-day schedule for three weeks. A sprint without a plan becomes spray-and-pray.",
      steps: [
        "Target list: 20 to 30 roles across 10 to 15 companies. For each role, name the company, team if known, job-posting URL, and one specific reason this role fits your positioning from HW1.",
        "Application cadence: 5 applications per week for three weeks, leaving 15 total. Schedule which roles you will apply to in which week, front-loading the roles you want most.",
        "Referral asks: identify 5 people in your network who are inside or adjacent to target companies. Draft the ask for each, using the Week 8 referral-strategy framework.",
        "Daily pipeline review: block 30 minutes each morning to update your tracking spreadsheet, send follow-ups, and prep materials for the next application.",
      ],
    },
    {
      title: "Execute 15 quality applications",
      body: "Quality means each application is tailored: the resume keyword-matches the posting (HW1 pattern), the cover letter or cold-email names one specific thing about the team or problem, and your portfolio link is pointed at the most relevant project. No spray-and-pray.",
      steps: [
        "For each application: pull the posting, run the ATS keyword check from HW1, update your resume bullets if needed, and write a two-paragraph cover note naming a specific team initiative or problem.",
        "Log every application in your tracking spreadsheet the day you submit it: company, role, date, resume version used, cover-note angle, referral contact if applicable.",
        "Mark each entry with its current status and update it weekly. Stale entries with no follow-up are a signal, not a fact.",
      ],
    },
    {
      title: "Send 5 referral requests",
      body: "A referral request is not a cold LinkedIn message asking someone to &ldquo;put in a good word.&rdquo; It is a specific, well-researched ask that makes the ask easy to say yes to. Use the Week 8 patterns.",
      steps: [
        "For each of the 5 contacts: write a two-sentence context-setter (how you know them or why you are reaching out), one sentence on the specific role, and one sentence on why you are a strong fit for that team specifically.",
        "Attach your tailored resume for the role. Keep the message under 150 words.",
        "Log each request: contact name, company, role, date sent, response received (if any).",
      ],
    },
    {
      title: "Pick ONE unconventional move and ship it",
      body: "The unconventional move is the one deliverable most likely to generate a conversation that no application form would have created. Pick one of the three options, plan it in one paragraph, and ship it by end of Week 9.",
      steps: [
        "Option A, open-source PR: find a public repo used by a target company (or a library they are known to contribute to), identify a real bug or documentation gap, open a PR, and send a brief note to your target contact linking the PR and naming what problem it fixes.",
        "Option B, cold-email outreach: write a 200-word cold email to an engineering manager or technical lead at three target companies. Name one specific technical problem their team is known to be working on and describe, in one paragraph, how you would approach it.",
        "Option C, public artifact: write a blog post, build a demo, or produce a case study aimed at a technical problem relevant to your target company. Publish it somewhere engineers at that company will find it (a relevant subreddit, Hacker News, or a technical Slack community). Send the link to one specific person at the company with a one-sentence note.",
        "Log the move: which option you chose, what you shipped, who you sent it to, and the date.",
      ],
    },
    {
      title: "Run a full mock loop, recorded",
      body: "A mock loop is not a practice problem. It is a simulation of a real on-site: back-to-back rounds with no breaks longer than a bathroom stop. Schedule it for the Week 9 weekend so you have time to watch the recording before Week 10 section. You need at least two peers to run this properly.",
      steps: [
        "45 minutes of DSA coding: one medium and one hard problem, timed, with your peer acting as interviewer. Talk through your approach before writing code.",
        "45 minutes of a second coding round: same format, different peer if possible, different problem set.",
        "45 minutes of system design: your peer gives you a one-sentence prompt (design a URL shortener, design a notification system). You lead the entire session at a whiteboard or shared doc.",
        "30 minutes of behavioral: your peer asks 6 to 8 STAR questions from the Week 4 bank. Answer fully. Do not stop after 90 seconds if you have more to say.",
        "Record the entire session. A phone propped on a book is fine. The recording is a deliverable.",
      ],
    },
    {
      title: "Watch the recording and score yourself",
      body: "Watching yourself is uncomfortable. That discomfort is the point. Watch the full recording once, then write the self-critique document.",
      steps: [
        "Score each round on three dimensions: communication clarity (did you explain your reasoning out loud?), technical accuracy (did you arrive at a correct or near-correct solution?), and composure (did you recover when you got stuck?).",
        "Identify your top-3 leverage points: the three specific behaviors that, if changed, would have the largest positive effect on how an interviewer perceives you. Be specific. &ldquo;I need to talk more&rdquo; is not a leverage point. &ldquo;I wrote code for 8 minutes without saying anything in the first coding round&rdquo; is.",
        "For each leverage point, write one concrete practice drill you will run before your next real interview.",
      ],
    },
    {
      title: "Write the personal hiring playbook",
      body: "The playbook is a 2 to 3 page document for yourself, not your professor. It is the artifact you open on the morning after this course ends and actually run. Write it as if future-you has forgotten everything you learned.",
      steps: [
        "Target list: your 10 to 15 target companies with the specific teams or roles you are pursuing and why.",
        "Story bank summary: 5 to 7 STAR stories indexed by competency (leadership, ambiguity, technical depth, failure, cross-functional). One sentence per story is enough for quick recall.",
        "Design preparation cadence: your weekly schedule for staying current on system design (what you read, what you practice, how often).",
        "Sprint template: your week-by-week schedule for the next application sprint, built from what worked and what failed in this one.",
        "What worked: two or three specific tactics from this course that generated real movement (a referral that converted, an unconventional move that got a reply, a story that landed well in the mock).",
      ],
    },
    {
      title: "Demo day in Week 10 section",
      body: "Each student presents for 5 minutes. You will walk the room through your playbook and share one win from the sprint. A win is any forward movement: a reply to a cold email, a referral that converted to a screen, a PR that got merged, a mock-loop insight that changed how you practice. The presentation is not graded on outcome, it is graded on specificity.",
    },
  ],
  deliverables: [
    "Sprint plan: target list (20 to 30 roles), application cadence, referral contact list with drafted asks, daily pipeline review schedule.",
    "Application log: 15 entries, each with company, role, date, resume version, cover-note angle, and current status.",
    "Referral log: 5 entries, each with contact name, company, role, date sent, and response if received.",
    "Unconventional-move artifact: the PR link, cold email text, or published artifact URL, plus a one-paragraph description of what you shipped and who you sent it to.",
    "Mock-loop recording: full unedited video or audio of all four rounds.",
    "Mock-loop self-critique: scores on communication clarity, technical accuracy, and composure for each round, plus top-3 leverage points with one concrete drill per point.",
    "Personal hiring playbook: 2 to 3 pages covering target list, story bank summary, design preparation cadence, sprint template, and what worked.",
  ],
  rubric: [
    { dimension: "Sprint plan", points: 10, notes: "Target list has 20 or more roles with specific reasons. Cadence is day-by-day, not aspirational." },
    { dimension: "Application quality", points: 15, notes: "Each of the 15 entries is tailored: ATS-matched resume, specific cover-note angle. Generic applications score 5." },
    { dimension: "Referral quality", points: 10, notes: "5 requests logged, each under 150 words and specific to a role. Mass-message templates score 0." },
    { dimension: "Unconventional move", points: 20, notes: "One move shipped to a real human before Week 10. Planned but not shipped scores 5. No move scores 0." },
    { dimension: "Mock-loop recording", points: 15, notes: "All four rounds recorded. Partial recordings (missing one round or more) score 8." },
    { dimension: "Mock-loop self-critique", points: 10, notes: "Top-3 leverage points are specific behaviors, not vague traits. Each has a named practice drill." },
    { dimension: "Personal hiring playbook", points: 15, notes: "All five sections present. Playbook reads as a working document, not a homework submission." },
    { dimension: "Demo day presentation", points: 5, notes: "5 minutes, one specific win shared. Missing demo day scores 0." },
  ],
  hints: [
    "Live conversations beat application count. Two referrals that convert to screens are worth more than 15 cold applications. Invest in the referral asks.",
    "The unconventional move is the one that will get you remembered. A merged PR or a cold email that names a real problem will outlast any cover letter. Ship it early in Week 8 so you have a story to tell at demo day.",
    "The playbook is for you, not your professor. Write it in the voice you use when talking to yourself. If it sounds like a homework assignment, rewrite it.",
    "Schedule the mock loop for the Week 9 weekend, Saturday or Sunday, before Week 10 section. If you schedule it for Monday morning you will be exhausted and have no time to process the recording.",
    "The goal is leverage, not perfection. One well-targeted application to a company where you have a referral and a relevant unconventional move beats five generic applications. Use your 15 slots on roles where you have an angle.",
  ],
  late: "Late submissions lose 10% per day. The mock-loop recording and the unconventional-move artifact must be submitted on time; these two cannot be turned in late for partial credit because the demo-day presentation depends on them.",
};

export function HwCapstone() { return <ProjectPage spec={spec} />; }
export const hwCapstoneSearchBody = "Capstone application sprint mock loop unconventional move referral open-source PR cold email public artifact hiring playbook STAR DSA system design behavioral demo day sprint plan";
