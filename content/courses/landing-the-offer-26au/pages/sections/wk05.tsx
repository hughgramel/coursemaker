import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 5 section: pattern sprint 3",
  tagline:
    "Two timed DP mediums back to back, then a recorded narrated solve with peer feedback on both the solution and how you communicated it.",
  outDate: "Week 5",
  overview: [
    "This section has two parts. The first is a timed problem sprint: you will solve two dynamic programming mediums under interview conditions, 25 minutes each. You will write the recurrence relation before touching the code editor. The second part is a recorded narrated solve: one person in each pair picks a third DP problem, solves it aloud in 20 minutes while their partner records audio or video, and the pair then spends 10 minutes giving structured feedback on both the solution and the communication.",
    "The narration component is the new work this week. The goal is not to perform perfectly. The goal is to get on record once before HW3 (the mock coding interview) so you know what your default habits are. Most people discover two things in their first recorded solve: they go silent when they get stuck, and they skip edge cases when they are under time pressure. Both are fixable with deliberate practice, but you have to see them first.",
  ],
  goals: [
    "Write the recurrence relation for a 1D DP problem in math notation before writing any code",
    "Convert a memoized top-down solution to a bottom-up tabulation and state the space complexity of each",
    "Enumerate at least three edge cases for a DP problem before starting to code",
    "Narrate a 20-minute problem-solving session aloud, keeping the interviewer informed at each decision point",
    "Give structured feedback on a peer’s recorded solve using the communication rubric from Lecture 2",
    "Receive feedback and identify the single highest-leverage improvement for your own communication",
  ],
  instructions: [
    {
      title: "Problem sprint (50 minutes total)",
      body: "Each problem gets 25 minutes. Use the NeetCode Roadmap 1D DP section to pick two mediums you have not solved before. Before opening a code editor for each problem:",
      steps: [
        "Read the problem statement and write the recurrence relation in plain math. What does dp[i] represent? What is the base case? What is the transition?",
        "Enumerate edge cases: empty input, single element, all zeros, negative numbers if applicable.",
        "Decide: memoization or tabulation? Write your choice and one sentence of justification.",
        "Then code. If you finish under 20 minutes, convert your solution to the other approach (if you used memoization, write the tabulation version, and vice versa).",
        "Write your time complexity and space complexity at the bottom of the solution.",
      ],
    },
    {
      title: "Recorded narrated solve (30 minutes total)",
      body: "Pair up. One person is the candidate, one is the interviewer. The interviewer picks a DP medium the candidate has not seen (use the NeetCode 1D DP or 2D DP section). The candidate has 20 minutes to solve it aloud. The interviewer records audio or video (phone is fine) and takes notes on the communication rubric below.",
      steps: [
        "Candidate: open the problem, read it aloud, then ask at least one clarifying question before doing anything else.",
        "Candidate: state your initial approach aloud, including whether you are thinking top-down or bottom-up and why.",
        "Candidate: enumerate edge cases aloud before writing code.",
        "Candidate: if you get stuck, narrate the stuck state. Say what you know, what you are trying, and what is not working. Do not go silent.",
        "Candidate: when you have a solution, walk through it with a concrete example before declaring it correct.",
        "Interviewer: when the 20 minutes are up, stop the recording and deliver feedback using the rubric below.",
      ],
    },
    {
      title: "Peer feedback using the communication rubric (10 minutes)",
      body: "The interviewer delivers feedback on four dimensions, one at a time. Be specific: cite a moment in the recording, not a general impression.",
      steps: [
        "Clarifying questions: did the candidate ask at least one question before coding? Was it the right question?",
        "Think-aloud continuity: were there silences longer than 30 seconds? What happened just before each silence?",
        "Edge-case coverage: which edge cases were named, and which were missed? Were any cases checked redundantly?",
        "Recovery behavior: when the candidate got stuck (and most do), what did they do? Did the strategy work?",
        "Each dimension gets one specific “strength” observation and one specific “change” suggestion.",
      ],
    },
    {
      title: "Individual reflection (5 minutes)",
      body: "Before leaving section, write two sentences: one naming the single communication habit you will practice before HW3, and one naming the DP concept that is still least clear after today. Bring both to office hours or to your own practice sessions this week.",
    },
  ],
  deliverables: [
    "Two DP problem solutions with recurrence relation written in math, edge cases enumerated, and time/space complexity stated",
    "The recording of your narrated solve (audio or video, any format), submitted to the course platform or shared via link",
    "Written feedback delivered to your partner: four dimensions, one strength and one change each",
    "A two-sentence individual reflection: one communication habit to practice before HW3, one DP concept still unclear",
  ],
  rubric: [
    {
      dimension: "Recurrence relation quality",
      points: 20,
      notes:
        "Recurrence is written in math notation before code appears. dp[i] definition is explicit. Base case and transition are both present.",
    },
    {
      dimension: "Solution correctness and complexity",
      points: 25,
      notes:
        "Both problems produce correct output on the provided test cases. Time and space complexity are stated and correct.",
    },
    {
      dimension: "Narrated solve: think-aloud continuity",
      points: 20,
      notes:
        "No silent gaps longer than 30 seconds. Candidate narrates approach, stuck states, and decisions throughout.",
    },
    {
      dimension: "Narrated solve: edge cases and clarifying questions",
      points: 15,
      notes:
        "At least one clarifying question asked before coding. At least two edge cases enumerated aloud before writing the first line.",
    },
    {
      dimension: "Peer feedback quality",
      points: 20,
      notes:
        "Feedback cites specific moments in the recording. Each of the four dimensions has a distinct strength and a distinct change suggestion.",
    },
  ],
  hints: [
    "The recurrence step is not optional. Candidates who skip to code first almost always write an incorrect DP solution and then patch it without understanding why. The recurrence is the solution.",
    "If you cannot define what dp[i] represents in one sentence, you do not understand the state yet. Stop and answer that question before writing any code.",
    "Common silences in a narrated solve happen at three moments: reading the problem, getting stuck on the transition, and debugging a wrong answer. Prepare a phrase for each: what will you say aloud while you think through each one?",
    "For peer feedback, the most valuable observation is almost always about silence, not about the solution. Getting a correct answer while staying silent the whole time is a worse interview performance than getting a wrong answer while communicating clearly.",
    "HW3 (recorded mock coding interview) is now out. The structure of this section is a direct rehearsal for HW3. The recording you make today is practice, not evaluation. Use it to calibrate.",
  ],
  late: "The two problem solutions and written peer feedback are due at end of section. The recording link is due within 24 hours of section. Late recordings accepted up to 48 hours with a 10-point deduction.",
};

export function Wk05Section() {
  return <ProjectPage spec={spec} />;
}

export const wk05SectionSearchBody =
  "pattern sprint DP dynamic programming recurrence relation memoization tabulation narrated solve think aloud peer feedback edge case enumeration clarifying questions communication rubric mock interview recording Week 5 section landing the offer";
