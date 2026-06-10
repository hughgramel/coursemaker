import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 9 section: pipeline triage and negotiation role-play",
  tagline:
    "Review your live pipeline with a peer, then practice the negotiation conversation before you have to run it for real.",
  outDate: "Week 9",
  overview: [
    "This section has two equal halves. In the first hour you bring your current pipeline to a structured peer review: every active application, its current stage, and the next action you plan to take. Your partner reads the pipeline as if they were a trusted advisor. They are looking for stalled conversations you have not followed up on, companies you are undervaluing, and cases where you should accelerate or cut. The goal is to leave with a triage decision on every open row: advance, hold, drop, or escalate with a competing offer.",
    "In the second hour you practice negotiation out loud, in pairs, switching sides. One person plays the candidate, the other plays the recruiter. The recruiter script includes a salary anchor, the &ldquo;this is our best offer&rdquo; line, and a soft exploding-offer deadline. After 15 minutes you swap sides and run a different scenario. The debrief focuses on two things: did you negotiate as a matter of policy (McKenzie, 2012), and did you keep the conversation positive throughout (Qureshi, 2016)? Most people discover that the version in their head sounds more confident than the words that come out in practice.",
  ],
  goals: [
    "Triage every active application into one of four states: advance, hold, drop, or escalate with a competing offer",
    "Identify at least one stalled conversation in your pipeline that needs a follow-up this week",
    "Deliver the &ldquo;I have a competing offer&rdquo; script in the role-play without breaking the positive tone",
    "Respond to the &ldquo;this is our best offer&rdquo; pushback with a specific counter that does not accept or reject",
    "Ask for a deadline extension on an exploding offer using the Qureshi Part 2 framework",
    "Give your partner two specific pieces of feedback: one on pipeline management and one on negotiation delivery",
  ],
  instructions: [
    {
      title: "Prepare your pipeline doc (before section)",
      body: "Before you arrive, export or write out every active application in a single document. Each row should have: company name, current stage (applied, phone screen, on-site scheduled, offer, other), date of last contact, and the one next action you plan. If you have no active applications yet, bring your target list with the three companies you plan to contact this week. The review only works if there is real data on the table.",
    },
    {
      title: "Pipeline peer review (30 minutes each partner)",
      body: "Partner A shares their pipeline doc. Partner B reads it and gives a verbal triage pass: identify any row that has been idle for more than seven days with no scheduled next action (stall risk), any company that is undervalued given Partner A&rsquo;s profile (promotion candidate), and any company where the stage mismatch suggests a follow-up email should go out today. Partner A takes notes. Then swap. Each review is 15 minutes; keep it moving. After both reviews, each person updates their pipeline doc with at least one action they are committing to take before the end of the week.",
    },
    {
      title: "Negotiation scenario A: standard competing-offer conversation (15 minutes)",
      body: "Partner A plays the candidate, Partner B plays a recruiter. The recruiter opens by reading the offer aloud: $138,000 base, $15,000 signing bonus, 80 RSUs over four years with a one-year cliff. The candidate has a competing offer from another company at $150,000 base with no signing bonus and 60 RSUs on a standard schedule. The candidate&rsquo;s job is to raise the competing offer without giving the exact number first, keep the tone positive, and ask for an improvement in base or equity. The recruiter&rsquo;s job is to defend the offer, then deliver the line: &ldquo;We&rsquo;ve done everything we can; this is our best offer.&rdquo; The candidate must respond without accepting or rejecting.",
    },
    {
      title: "Negotiation scenario B: exploding offer (15 minutes)",
      body: "Swap roles. Partner B is now the candidate; Partner A is the recruiter. The recruiter offers $142,000 base and says the offer expires in 48 hours. The candidate expects to hear from a second company in five days. The candidate&rsquo;s job is to ask for a two-week extension using a reason that is honest and non-threatening. The recruiter applies light pressure (&ldquo;the team is waiting to start onboarding&rdquo;) but does not explicitly deny the extension. The candidate must exit the call with either an agreed extension or a clear plan for the next conversation.",
    },
    {
      title: "Debrief (15 minutes, full group)",
      body: "Go around the room. Each pair names: (1) the one pipeline change they committed to, (2) the moment in the negotiation role-play where they felt least confident, and (3) one specific word or phrase they will use differently next time. The instructor highlights two or three patterns observed across the pairs. Common issues: candidates who reveal the competing offer number too early, candidates who accept &ldquo;best offer&rdquo; at face value without a counter, and candidates who apologize for negotiating.",
    },
  ],
  deliverables: [
    "An updated pipeline doc with a triage decision (advance, hold, drop, or escalate) on every row and at least one concrete next action committed to before the end of the week",
    "A written note (one paragraph) on the negotiation role-play: what you did well, what you would say differently, and the one phrase you are adding to your script",
    "Two pieces of written feedback given to your partner: one on pipeline management, one on negotiation delivery",
  ],
  rubric: [
    {
      dimension: "Pipeline triage quality",
      points: 30,
      notes:
        "Every row has a triage state; stalled conversations are identified; at least one committed action is specific enough to complete this week",
    },
    {
      dimension: "Negotiation role-play execution",
      points: 35,
      notes:
        "Candidate maintains positive tone throughout; competing offer is raised without anchoring prematurely; &ldquo;best offer&rdquo; pushback receives a specific counter rather than acceptance or rejection",
    },
    {
      dimension: "Peer feedback quality",
      points: 20,
      notes:
        "Both feedback items are specific: they name a moment, a phrase, or a row, and suggest a concrete improvement rather than a general direction",
    },
    {
      dimension: "Written negotiation reflection",
      points: 15,
      notes:
        "Reflection identifies a specific weakness and names the exact phrase or script change that addresses it",
    },
  ],
  hints: [
    "If your pipeline is empty, that is the most important thing to fix this week. The role-play is still worth doing because you will need these scripts in a matter of weeks. But leave section with at least three companies you will contact before next class.",
    "The recruiter in the role-play is not your adversary. They want you to sign. The role-play is practice for finding a resolution that works for both sides, not practice for winning an argument.",
    "McKenzie (2012) says negotiating as a policy is more valuable than deciding case by case. Before the role-play begins, make a private commitment: you will negotiate this offer, full stop. That decision removes the hesitation from your voice.",
    "When the recruiter says &ldquo;this is our best offer,&rdquo; the correct response is not to believe them immediately and not to call them a liar. The correct response is to acknowledge the statement, reaffirm your enthusiasm, and ask one specific question: &ldquo;Is there any flexibility on the equity component?&rdquo;",
    "Qureshi (2016) recommends always having a reason for your requests that the recruiter can take back to their manager. &ldquo;I have a competing offer at a higher base&rdquo; is a reason. &ldquo;I just think I deserve more&rdquo; is not.",
  ],
};

export function Wk09Section() {
  return <ProjectPage spec={spec} />;
}

export const wk09SectionSearchBody =
  "pipeline triage peer review negotiation role-play competing offer best offer pushback exploding offer BATNA recruiter conversation application cadence follow-up total compensation equity vesting signing bonus Week 9 section landing the offer";
