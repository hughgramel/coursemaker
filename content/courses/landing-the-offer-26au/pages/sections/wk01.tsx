import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 1 section: target-company-list workshop",
  tagline:
    "Build a 30+ row spreadsheet of target companies ranked by fit, reach, and side-door accessibility before you send a single application.",
  outDate: "Week 1",
  overview: [
    "Before you write a resume bullet or practice a LeetCode problem, you need to know who you are applying to and why. This section gives you a structured 75 minutes to build the document you will work from all term: a target-company list with at least 30 rows, ranked by how well each company fits your skills and interests, how realistic an offer is given your current profile, and how accessible the side doors are. A list built with this level of care is qualitatively different from a random collection of company names. It tells you where to concentrate effort, which relationships to activate, and which companies are worth the overhead of a cold application.",
    "You are not committing to these companies permanently. The list is a working document. What matters today is that every row has enough structure to drive a decision: tier, side-door tag, and the one thing you would need to be true to move the company to a higher tier. The section ends with a brief peer review: swap lists with a classmate, identify the two rows that look most promising, and flag any company that seems mis-tiered. You will refine the list throughout the term as you learn more about the companies and as your own profile improves.",
  ],
  goals: [
    "Name the three tiers of a target list (reach, match, safety) and place at least 8 companies in each",
    "Tag each company with at least one side-door path: referral contact, open-source sponsorship, prior intern presence, or public artifact opportunity",
    "Articulate why each top-10 company belongs at its tier given your current skills, GPA, and project history",
    "Identify the one concrete action that would improve your odds at each reach-tier company",
    "Practice reading a company as a recruiting target: understand its recruiting calendar, typical offer timing, and known interview format",
    "Give and receive one round of peer feedback on tier placement and side-door coverage",
  ],
  instructions: [
    {
      title: "Create the spreadsheet",
      body: "Open a blank spreadsheet (Google Sheets works well for sharing). Create columns: Company, Tier (reach / match / safety), Why this tier, Side-door tag (referral / open-source / prior-intern / public-artifact / none), Contact or project name, Recruiting calendar note, Next action. You will fill these in during the session.",
    },
    {
      title: "Brainstorm 40-50 companies",
      body: "Start with quantity, not quality. List every company you have heard of in the last year, every company a friend mentioned, every company whose product you use, and every company whose engineering blog you have read. Do not filter yet. A list that starts at 40 is easier to cut to 30 than a list that starts at 15 and needs to grow. Big tech, mid-stage startups, defense tech, fintech, infrastructure companies, and local employers are all fair game.",
    },
    {
      title: "Assign a tier to each company",
      body: "Reach: you would be thrilled and somewhat surprised to get an offer. Match: you are a plausible hire at your current level and would be a strong fit for the role. Safety: you are confident you can get to offer stage and would accept if nothing better materialized. Aim for roughly 8-12 companies at each tier. If you have 20 reach companies and 2 safety companies, recalibrate. Be honest: wishful thinking at this stage wastes interview cycles later.",
    },
    {
      title: "Tag the side doors",
      body: "For each company, answer: do you know someone who works or has worked there (referral)? Does the company sponsor or heavily use an open-source project you could contribute to (open-source)? Does the company have a well-known internship program you missed or could still enter (prior-intern)? Is there a public artifact (blog post, demo, tool) that a hiring manager at that company would find useful enough to share (public-artifact)? Tag each company with the best path. If the answer is &ldquo;none&rdquo; for every option, flag the row: cold portal applications to companies where you have no foothold are low-yield.",
    },
    {
      title: "Write the next action",
      body: "For your top 10 companies, write one concrete next action in the final column. Examples: &ldquo;Email [name] this week to ask about open roles,&rdquo; &ldquo;Find the open-source project this company maintains and read the contribution guide,&rdquo; or &ldquo;Check application open date on their careers page.&rdquo; The action should be completable in under an hour. Vague entries like &ldquo;look into this company more&rdquo; do not count.",
    },
    {
      title: "Peer review",
      body: "Swap your list with a classmate. Review their list for 10 minutes: identify the two rows that look most promising given what you know about their background, and flag any company that seems mis-tiered (either aspirationally over-rated or unnecessarily under-rated). Return the list with two written comments. Use the final 15 minutes to discuss and update your own tier assignments based on the feedback.",
    },
    {
      title: "Finalize and export",
      body: "Before leaving section, make sure you have at least 30 rows, every row has a tier and a side-door tag, and your top 10 rows have a next action. Export a snapshot (PDF or share link) to submit as your section deliverable. You will continue editing this list throughout the term.",
    },
  ],
  deliverables: [
    "A spreadsheet with at least 30 companies, each tagged with tier (reach / match / safety) and at least one side-door path",
    "A written &ldquo;why this tier&rdquo; note for each of your top 10 companies (1-2 sentences each)",
    "Next-action entries for all top-10 companies, each specific enough to complete in under an hour",
    "A snapshot or export of the list at section end, plus two written peer-review comments you gave your partner",
  ],
  rubric: [
    {
      dimension: "Coverage: 30+ companies with tier and side-door tag",
      points: 30,
      notes:
        "All rows have a tier assigned and at least one side-door tag; distribution across tiers is realistic",
    },
    {
      dimension: "Quality of tier reasoning",
      points: 25,
      notes:
        "Top-10 &ldquo;why this tier&rdquo; notes name specific evidence (skills, projects, contacts), not just enthusiasm",
    },
    {
      dimension: "Specificity of next actions",
      points: 25,
      notes:
        "Each top-10 next action names a person, project, or URL and is completable in under an hour",
    },
    {
      dimension: "Peer review contribution",
      points: 20,
      notes:
        "Two substantive written comments given; feedback is specific (names rows and explains the reasoning)",
    },
  ],
  hints: [
    "Do not anchor the list to companies you have already heard of. Some of the best entry-level SWE hiring is at companies with 50-500 engineers that are not household names. Ask classmates and your TAs for names you have not considered.",
    "A &ldquo;none&rdquo; side-door tag is not a reason to drop a company, but it is a reason to ask: what would it take to create a side door? Sometimes the answer is &ldquo;nothing reasonable,&rdquo; but sometimes it is &ldquo;one open-source commit.&rdquo;",
    "The reach tier is not where you put companies you have heard are hard to get into. It is where you put companies where your current profile is genuinely below their typical hire. A company that is selective but whose typical hire looks like you is a match.",
    "If you find yourself with fewer than 8 safety companies, the most common reason is that the list is too narrowly focused on brand-name employers. A company that will give you an offer and let you do good work is a safety company worth taking seriously.",
    "The list is a living document. You will drop companies, add companies, and re-tier companies as you learn more. Do not try to get it perfect today. Get it started.",
  ],
};

export function Wk01Section() {
  return <ProjectPage spec={spec} />;
}

export const wk01SectionSearchBody =
  "target company list reach match safety tier side-door referral open source recruiter pipeline spreadsheet workshop peer review new-grad SWE job search Week 1 section landing the offer";
