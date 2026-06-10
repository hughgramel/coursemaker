import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "HW2, 30-problem LeetCode pattern sprint",
  tagline: "Pattern fluency compounds faster than problem count.",
  outDate: "Week 3",
  dueDate: "Week 5",
  overview: [
    "The technical interview does not reward the candidate who has memorized the most solutions. It rewards the candidate who recognizes, within the first two minutes, which pattern a problem belongs to and can execute that pattern under time pressure. Thirty medium problems, solved with a timer and logged with explicit pattern labels, build that recognition muscle in a way that passive reading or watching walkthroughs cannot. The sprint format is deliberate: consistent exposure across a short window forces pattern retrieval rather than slow reconstruction.",
    "The mix requirement drives the value. Six problems from each of five pattern groups, hash map, two-pointer and sliding window, binary tree, BFS/DFS, and dynamic programming, ensures that you cannot hide in the one family you already know. For each problem you log start time, end time, time complexity stated in your own words, and the pattern you recognized. That log becomes a self-diagnosis tool: after thirty problems you will see exactly which patterns cost you time and which you can execute quickly.",
  ],
  goals: [
    "Apply each of the five pattern families (hash map, two-pointer/sliding window, binary tree, BFS/DFS, dynamic programming) to six problems apiece.",
    "Log solve time for every problem and use the log to identify personal speed by pattern.",
    "State time and space complexity in your own words immediately after each solve, before checking any solution.",
    "Mark problems that exceeded 35 minutes as redo candidates and follow through on at least two redos before submission.",
    "Analyze your own bottlenecks: where do you slow down, at problem recognition, at code structure, or at edge cases?",
    "Write a retrospective that evaluates which problems are worth repeating and articulates what changed between problem 1 and problem 30.",
  ],
  instructions: [
    {
      title: "Pull 30 problems from the NeetCode 150 roadmap covering all five groups (6 each)",
      body: "Use the NeetCode 150 roadmap (https://neetcode.io/roadmap) as your source. Select problems explicitly from the five sections: Arrays &amp; Hashing, Two Pointers/Sliding Window, Trees, Graphs (BFS/DFS), and 1-D Dynamic Programming. Do not pull all six from the easy tier within a section; medium-difficulty problems are the target. Log your selections before you start solving.",
      steps: [
        "6 hash map problems (Arrays &amp; Hashing section of the NeetCode 150)",
        "6 two-pointer or sliding window problems (Two Pointers and Sliding Window sections)",
        "6 binary tree problems (Trees section: traversal, path sum, lowest common ancestor, etc.)",
        "6 BFS/DFS problems (Graphs section: connected components, shortest path, islands, etc.)",
        "6 dynamic programming problems (1-D DP section: climbing stairs, house robber, coin change, etc.)",
      ],
    },
    {
      title: "Solve each problem on paper or in an empty editor before submitting",
      body: "Open an empty file or use paper. Do not open LeetCode hints, the NeetCode video, or any solution tab until you have submitted at least one attempt. The constraint is not about being unaided; it is about forcing pattern retrieval before pattern recognition degrades into answer recognition. If you are stuck after 35 minutes, mark the problem as a redo, note where you stopped, and move on. Solving same-family problems back-to-back is encouraged: finishing all six hash map problems in one session builds the pattern memory that spaced-out practice does not.",
    },
    {
      title: "Log start time, end time, complexity, and pattern for every problem",
      body: "Maintain a spreadsheet or plain TSV with one row per problem. The log is a graded deliverable and the raw material for your retrospective. Fill it honestly; inflated times help no one.",
      steps: [
        "Problem name and LeetCode number",
        "Pattern group (hash map, two-pointer, sliding window, binary tree, BFS, DFS, DP)",
        "Start time and end time (wall clock, not estimated)",
        "Time complexity stated in your own words (e.g., O(n) single pass with hash map)",
        "Space complexity stated in your own words",
        "Redo flag: Y if you exceeded 35 minutes or submitted a solution you do not fully understand",
      ],
    },
    {
      title: "Mark any problem over 35 minutes as a redo and complete at least two redos",
      body: "A 35-minute ceiling is not a punishment; it is a signal. If a medium problem takes longer than that, the pattern recognition step is the bottleneck, not implementation. Mark it, finish the sprint, and return to at least two flagged problems before submission. When you redo, reset the timer and attempt from scratch. Log the redo time separately.",
    },
    {
      title: "Write an end-of-sprint retrospective",
      body: "After problem 30, write one document covering three things. First, rank the five pattern families by your average solve time, fastest to slowest. Second, name your weakest pattern and give at least two specific observations from your log that support that claim (not a feeling, actual numbers). Third, write one paragraph on what changed in your problem-solving approach between problem 1 and problem 30, comparing your first attempt at recognizing a pattern to your most recent one.",
    },
  ],
  deliverables: [
    "A logged spreadsheet of all 30 problems with columns for problem name, LeetCode number, pattern group, start time, end time, time complexity, space complexity, and redo flag.",
    "Evidence of at least two redo attempts logged separately in the same spreadsheet.",
    "The end-of-sprint retrospective: pattern ranking by speed, weakest-pattern analysis with supporting log data, and a paragraph on how your approach changed from problem 1 to problem 30.",
  ],
  rubric: [
    {
      dimension: "Coverage (30 problems, 6 per pattern)",
      points: 30,
      notes: "Each problem logged with name, number, and correct pattern label. Off-by-one in a group loses 3 points per group.",
    },
    {
      dimension: "Complexity stated per problem",
      points: 20,
      notes: "Both time and space complexity written in your own words, not copied from a solution. Vague entries (&ldquo;O(n) I think&rdquo;) earn partial credit only.",
    },
    {
      dimension: "Retrospective quality",
      points: 25,
      notes: "Claims tied to specific numbers from the log. Pattern ranking present. Weakest-pattern section names the pattern and cites at least two data points. Change paragraph is specific, not generic.",
    },
    {
      dimension: "Redo mark accuracy",
      points: 15,
      notes: "Problems over 35 minutes are flagged. At least two redo attempts logged with separate timing. Problems solved cleanly and quickly that are flagged as redo without reason lose points.",
    },
    {
      dimension: "Log polish and completeness",
      points: 10,
      notes: "All columns filled for all 30 rows. No missing start/end times. Consistent format throughout.",
    },
  ],
  hints: [
    "Use the NeetCode 150 roadmap explicitly (https://neetcode.io/roadmap) to select problems. It groups problems by pattern and difficulty, which is exactly the structure this assignment requires.",
    "Solve same-family problems back-to-back rather than shuffling. Six hash map problems in a row forces your brain to load and reuse the pattern rather than context-switching after each one.",
    "The goal is recognition speed, not perfect solutions. A solution with a small bug that you identified and fixed at the end is worth more log data than a solution you looked up after ten minutes.",
    "If you are stuck deciding whether a problem is BFS or DFS, log both in the pattern field and note why. That ambiguity is exactly the kind of thing the retrospective should address.",
    "On the redo pass: time yourself fresh, do not look at your first attempt. The number that matters is whether the second solve was faster, and by how much.",
  ],
  late: "Late submissions lose 10 points per calendar day, up to three days. After three days the assignment is not accepted. HW3 builds on the pattern vocabulary this sprint instills; submitting late compresses your preparation window before that assignment.",
};

export function Hw2() {
  return <ProjectPage spec={spec} />;
}

export const hw2SearchBody =
  "HW2 LeetCode pattern sprint hash map two-pointer sliding window binary tree BFS DFS dynamic programming NeetCode 150 complexity solve time retrospective";
