import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW3, Recorded mock coding interview",
  tagline: "You cannot fix what you cannot hear. Recording yourself code aloud is the fastest way to find the gap between how you think you communicate and how your interviewer actually experiences you.",
  outDate: "Week 5",
  dueDate: "Week 7",
  overview: [
    "The biggest gap between practice and real interviews is communication. Solving problems alone in silence builds algorithmic skill, but interviews reward a different behavior: thinking aloud, asking clarifying questions before writing a line, and naming edge cases as you encounter them. Most candidates discover this gap only mid-interview, which is too late to correct. Recording yourself forces honesty. You cannot talk yourself into believing the narration was clear once you have heard the long silences and the skipped constraints.",
    "For this assignment you will pair with a peer or use a free Pramp or Interviewing.io slot, run a 45-minute mock on a medium problem you have not seen before, and narrate everything aloud throughout. After the session you will watch the recording, score yourself against the four-criteria rubric (problem-solving, code quality, communication, optimality), and submit the recording with a 300-word written self-critique. Do not redo the recording if you did not finish the problem. Finishing under time pressure is part of the signal, and an incomplete solution with strong communication scores higher than a correct one delivered in silence.",
  ],
  goals: [
    "Apply the think-aloud technique throughout a live problem, not just at the start.",
    "Demonstrate edge-case enumeration by naming cases before coding, not after.",
    "Critique your own communication against observable evidence in the recording.",
    "Evaluate your performance against a structured four-criteria rubric.",
    "Identify your personal hint pattern: do you wait too long, jump ahead, or miss the interviewer’s signal entirely?",
    "Build comfort with being recorded so the camera stops being a source of performance anxiety.",
  ],
  instructions: [
    {
      title: "Schedule a 45-minute mock session",
      body: "Book a session with a peer (rotate roles so each person both interviews and codes) or claim a free slot on Pramp (https://www.pramp.com) or Interviewing.io (https://interviewing.io). Confirm the appointment at least 48 hours in advance so both parties have time to prepare the recording setup. You must not choose your own problem.",
    },
    {
      title: "Spend 5 minutes clarifying requirements before touching code",
      body: "When you receive the problem, set a visible timer for 5 minutes and use that time only for clarification: restate the problem in your own words, ask about input constraints, confirm expected output format, and name at least two edge cases aloud. Do not write code during this window. If your interviewer gives you the green light early, continue clarifying anyway until you have genuinely exhausted your questions.",
      steps: [
        "Restate the problem in one sentence to confirm you understood it.",
        "Ask: what are the input constraints? (size, sign, nulls, empty collections)",
        "Ask: what should the function return for edge inputs? Name at least two: empty input, single element, all-identical elements.",
        "Propose a brute-force approach aloud before jumping to the optimal one.",
      ],
    },
    {
      title: "Narrate the entire session",
      body: "From the moment you start thinking until you write the last line, speak. Name every data structure you consider and say why you are choosing or rejecting it. Read your code aloud as you type it. When you hit a bug, describe what you expected versus what you see. Silence longer than ten seconds is a red flag; use filler narration (“I’m thinking through the loop invariant here”) rather than going quiet.",
    },
    {
      title: "Record the session",
      body: "Audio is required at minimum; screen recording is strongly recommended. If you are using Pramp or Interviewing.io, check whether the platform records automatically. For peer sessions, use Zoom, Google Meet, or any tool both parties already have. You must get explicit verbal or written permission from your peer before recording. Keep the raw file; do not edit or trim it before submission.",
    },
    {
      title: "Score yourself against the four-criteria rubric",
      body: "After the session, watch the full recording once without pausing. On the second pass, pause and score each of the four criteria on a 1-4 scale: problem-solving (did you reach a working solution?), code quality (readable names, correct logic, no dead code), communication (did you narrate continuously and answer questions promptly?), and optimality (did you discuss time and space complexity and reach a reasonable solution?). The Clément Mihailescu grading rubric (https://www.youtube.com/watch?v=rEJzOhC5ZtQ) and the Tech Interview Handbook coding best practices (https://www.techinterviewhandbook.org/coding-interview-techniques/) are useful references for calibrating each score.",
      steps: [
        "Problem-solving (1-4): did you reach a correct, working solution within time?",
        "Code quality (1-4): clean variable names, no unexplained dead code, correct edge-case handling in the implementation.",
        "Communication (1-4): narration was continuous, clarifying questions were asked upfront, no long silences.",
        "Optimality (1-4): you discussed time and space complexity and moved toward a better solution when the brute force was identified.",
      ],
    },
    {
      title: "Write a 300-word retrospective",
      body: "The retrospective is not a summary of what happened. It answers three specific questions: (1) What did you say well? Cite a timestamp. (2) What did you skip or delay? Name the moment in the recording. (3) What does your interviewer hint pattern look like? Did you wait too long before asking for a nudge, jump to code before the interviewer finished speaking, or miss a repeated hint entirely? Write in first person, past tense, and be specific. Vague self-praise and vague self-criticism both earn low scores on the self-critique dimension.",
    },
  ],
  deliverables: [
    "A link or uploaded file for the recording (unlisted YouTube, Google Drive, or any accessible URL). The full session must be audible.",
    "A completed peer rubric: your interviewer scores you on each of the four criteria with one sentence of evidence per criterion.",
    "A 300-word self-critique covering what you communicated well, what you skipped, and your interviewer hint pattern.",
  ],
  rubric: [
    { dimension: "Recording completeness", points: 20, notes: "Full session is present, audible, and unedited. Both the clarification phase and the coding phase are included." },
    { dimension: "Narration quality", points: 25, notes: "Narration is continuous. Edge cases are named before coding begins. No silent stretches longer than 30 seconds without explanation." },
    { dimension: "Self-critique honesty", points: 25, notes: "Rubric scores are supported by timestamped evidence. Praise and criticism are both grounded in observable moments, not general impressions." },
    { dimension: "Retrospective depth", points: 20, notes: "The 300-word retrospective identifies a specific hint pattern and a specific communication gap, not general observations." },
    { dimension: "Polish", points: 10, notes: "Submission is complete, links work, the peer rubric is filled out by the interviewer, and the retrospective meets the word count." },
  ],
  hints: [
    "The Clément Mihailescu grading rubric (https://www.youtube.com/watch?v=rEJzOhC5ZtQ) is a practical calibration tool. Watch it before you score yourself so you know what a 4 looks like.",
    "The Tech Interview Handbook coding best practices section (https://www.techinterviewhandbook.org/coding-interview-techniques/) maps directly to the code quality criterion. Read it before the session.",
    "Do not redo the recording if you did not finish the problem. A clean, well-narrated incomplete solution is a better artifact than a silent, re-recorded correct one.",
    "If you use Pramp, download your recording immediately after the session. Pramp retention windows are short.",
    "Your interviewer hint pattern is often invisible to you until you watch the tape. Count how many times the interviewer repeated a phrase before you acted on it.",
  ],
  late: "Late submissions lose 10% per day, up to three days. After three days, no credit. The peer who interviewed you cannot complete their own deliverable until you confirm the session happened, so schedule early.",
};

export function Hw3() { return <ProjectPage spec={spec} />; }
export const hw3SearchBody = "HW3 mock coding interview recorded think-aloud edge-case narration rubric self-critique Pramp Interviewing.io communication";
