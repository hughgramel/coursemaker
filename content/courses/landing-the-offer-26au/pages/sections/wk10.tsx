import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 10 section: mock interview marathon",
  tagline:
    "Run a full virtual on-site with four back-to-back rounds (coding, coding, design, behavioral), debrief with your partner, and leave with one concrete improvement to make before you start interviewing for real.",
  outDate: "Week 10",
  dueDate: "Week 10 (bring your capstone components to section)",
  overview: [
    "This section is the closest simulation of an actual on-site you will get in the course. You run four rounds back-to-back with a partner: two coding rounds, one system design round, and one behavioral round. Each round is timed and conducted as if the stakes are real. You do not pause to ask if your answer is good. You do not check the solution after each round. You finish the marathon first, then debrief.",
    "The goal is not to perform perfectly. The goal is to experience the accumulated pressure of four consecutive rounds, identify where your execution breaks down under that pressure, and name one specific fix. A student who runs this marathon and walks out knowing their single highest-leverage improvement is better prepared than a student who has done twenty isolated practice problems.",
    "Capstone components are due this week. Bring your application sprint log, your recorded mock loop critique, and your documentation of your one unconventional move. The debrief draws on all three.",
  ],
  goals: [
    "Complete four timed interview rounds consecutively without stopping to evaluate performance mid-stream",
    "Identify where your execution degraded across the marathon: which round, which moment, and why",
    "Give structured feedback to your partner on one specific improvement per round",
    "Connect your mock loop performance to your capstone critique and name the highest-leverage fix",
    "Leave section with a one-sentence commitment to the single thing you will practice before your first real interview",
  ],
  instructions: [
    {
      title: "Arrive prepared (0 min)",
      body: "Before section, confirm your setup: a quiet environment with a shared coding pad (leetcode.com, coderpad.io, or a shared Google Doc), a whiteboard or drawing tool for the design round, and a timer visible to both participants. Bring your capstone components. If you are missing any component, notify your TA before section starts.",
    },
    {
      title: "Round 1: coding (45 min)",
      body: "Your partner plays the interviewer. The interviewer selects a LeetCode-medium problem from any of the patterns covered in weeks 3-5 (hash map, two pointer, sliding window, BFS/DFS, DP). The candidate solves it in 45 minutes. The interviewer should give the same hints a real interviewer would give: confirm the candidate understands the problem, offer a nudge if completely stuck for more than 5 minutes, and ask the candidate to walk through a test case before finalizing. The interviewer takes notes on the rubric dimensions: problem-solving approach, communication, code quality, and edge-case handling.",
    },
    {
      title: "Round 2: coding (45 min)",
      body: "Swap roles. The new candidate solves a different LeetCode-medium problem. Choose a problem from a different pattern category than Round 1 so both participants face variety. Use the same 45-minute limit and the same hint protocol. The interviewer notes the same four rubric dimensions.",
    },
    {
      title: "Round 3: system design (45 min)",
      body: "Return to the original roles (Round 1 candidate is the candidate again). The interviewer picks one of these prompts: design a URL shortener, design a rate limiter, or design a distributed job queue. The candidate drives the design conversation using the week 6 framework: clarify requirements, estimate capacity, name the components and data flow, name the storage choice and why, name the biggest tradeoff. The interviewer asks at least two probing questions about the design. No access to the week 6 notes.",
    },
    {
      title: "Round 4: behavioral (30 min)",
      body: "Swap roles again. The new candidate runs a behavioral round using three STAR stories from their story bank. The interviewer picks the leadership signals to probe: one ownership story, one conflict story, one failure story. The candidate delivers each story in under 3 minutes. The interviewer flags any story that runs over time or fails to land a clear takeaway. This round ends at 30 minutes, not 45.",
    },
    {
      title: "Debrief (30 min)",
      body: "Now you debrief. Each person takes 10 minutes. Do not re-run the problems. Focus on the pattern across the four rounds.",
      steps: [
        "In which round did your performance degrade the most? Name the specific moment.",
        "Was the degradation caused by a knowledge gap, a communication gap, or fatigue? Be honest.",
        "What is the one thing, if you fixed it before your first real on-site, that would have the highest impact?",
        "Did the accumulated pressure of four consecutive rounds reveal anything that isolated practice did not?",
      ],
    },
    {
      title: "Written commitment (5 min)",
      body: "Write one sentence on paper or in your notes: the single thing you will practice before your first real interview, and the specific way you will practice it. Not &ldquo;get better at DP&rdquo; but &ldquo;solve two DP mediums per week for the next three weeks narrating aloud.&rdquo; Share your sentence with your partner before leaving section.",
    },
  ],
  deliverables: [
    "Completed capstone document: application sprint log (at least three live conversations initiated), one unconventional move documentation, and recorded mock loop with written critique",
    "Interviewer notes for both rounds you conducted (one coding round, one behavioral or design round), covering all four rubric dimensions",
    "Written one-sentence commitment naming your highest-leverage improvement and the specific practice plan",
    "Brief verbal debrief with your partner: each person names one thing they observed in the other that the other did not mention",
  ],
  rubric: [
    {
      dimension: "Application sprint: at least three live conversations initiated",
      points: 25,
      notes:
        "A live conversation is a scheduled phone screen, an email exchange where a specific role was discussed, or a referral that produced a response. A submitted portal application with no reply does not count.",
    },
    {
      dimension: "Unconventional move: documented and targeted at a specific company",
      points: 20,
      notes:
        "One unconventional move (open-source PR, cold-email work proposal, or find-a-problem artifact) aimed at one specific company. The documentation names the company, the move, the artifact or message, and the response (even if the response was silence).",
    },
    {
      dimension: "Mock loop critique: recording reviewed, one highest-leverage fix named",
      points: 20,
      notes:
        "The critique must name a specific moment in a specific round. &ldquo;I need to communicate better&rdquo; is not a fix. &ldquo;In round 2 I stopped narrating after minute 15 and the interviewer had no idea what I was doing&rdquo; is a fix.",
    },
    {
      dimension: "Interviewer feedback: structured notes for two rounds conducted",
      points: 20,
      notes:
        "Notes must reference the four rubric dimensions (problem-solving, communication, code quality, edge cases for coding; or components, data flow, tradeoffs, probing for design; or structure, timing, takeaway for behavioral). &ldquo;Good job&rdquo; is not feedback.",
    },
    {
      dimension: "Written commitment: specific and actionable",
      points: 15,
      notes:
        "One sentence naming the improvement and the practice method. Must be specific enough that a stranger could evaluate in two weeks whether it was done.",
    },
  ],
  hints: [
    "The most common marathon failure is stopping after Round 2 to discuss how it went. Do not do this. The accumulated pressure of Rounds 3 and 4 is exactly what you are trying to experience. Save all discussion for the debrief.",
    "If you are the interviewer and the candidate is completely stuck for more than 7 minutes with no progress, give one hint: restate the problem in a different way or suggest a data structure. Real interviewers do this. Silence for 10 minutes tells you nothing useful.",
    "For the design round, the candidate should speak for at least 35 of the 45 minutes. Silence in a design interview signals that you do not have enough material. If the candidate runs dry at minute 20, the interviewer should ask a probing question to keep the conversation moving.",
    "For the behavioral round, the interviewer should stop the candidate the moment a story runs past 3 minutes and say: &ldquo;Let&rsquo;s say that&rsquo;s time. What was the result?&rdquo; This is exactly what happens in a real behavioral interview and candidates need to practice the constraint.",
    "The debrief is not a consolation session. The goal is honest diagnosis, not reassurance. The most useful feedback you can give a partner is the one thing they did that they probably did not notice themselves.",
    "Your written commitment is a contract with yourself. If you write &ldquo;practice communicating while coding,&rdquo; that is too vague to execute. Write the specific problem set, the specific frequency, and whether you will record yourself. The more specific the commitment, the more likely you keep it.",
  ],
  late: "Capstone components submitted after the section start time receive a 10-point deduction. Components submitted more than 48 hours after section receive a 25-point deduction. Interviewer notes from the marathon cannot be completed after section.",
};

export function Wk10Section() {
  return <ProjectPage spec={spec} />;
}

export const wk10SectionSearchBody =
  "mock interview marathon full virtual on-site four rounds coding coding design behavioral back-to-back debrief capstone application sprint unconventional move mock loop critique highest-leverage fix peer feedback Week 10 section landing the offer";
