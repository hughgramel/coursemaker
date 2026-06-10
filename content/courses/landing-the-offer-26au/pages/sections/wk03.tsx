import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 3 section: pattern sprint 1",
  tagline:
    "Three timed mediums, one per pattern, back-to-back, with a structured debrief after each.",
  outDate: "Week 3",
  dueDate: "Week 3 (bring your solutions and notes to section)",
  overview: [
    "Knowing a pattern and executing it under a clock are two different skills. This sprint closes the gap. You will solve three LeetCode-medium problems in sequence, each one targeting a single pattern from Lecture 2: hash map, two pointer, and sliding window. Each problem gets a hard 25-minute cap. When time runs out, you stop coding and start debriefing, even if the solution is incomplete.",
    "The debrief is not optional and is not an afterthought. NeetCode (2020) built his interview preparation around deliberate review of failed attempts, not just repetition of successful ones. The 10-minute debrief after each problem is where the learning happens: you name the pattern, state the complexity, identify where you lost time, and note what you would do differently in round two.",
    "HW 1 (resume and portfolio audit) is due this week. HW 2 (30-problem LeetCode pattern sprint) is released today.",
  ],
  goals: [
    "Execute the hash-map pattern on a medium problem and state its time and space complexity without being prompted",
    "Recognize the two-pointer entry condition (sorted input or a symmetric search space) and apply the pattern without reverting to a nested loop",
    "Set up and maintain the sliding-window invariant for a medium problem in under 25 minutes",
    "Identify, post-solve, the exact moment where you lost time or deviated from the pattern",
    "Articulate the O(n) vs. O(n²) tradeoff for each pattern by reasoning from first principles",
  ],
  instructions: [
    {
      title: "Problem 1: hash map (25 minutes)",
      body: "Solve LeetCode 1 (Two Sum) or LeetCode 49 (Group Anagrams). Your choice. Start your timer before you read the problem. Write a brute-force solution first if you need to orient yourself, but name its complexity and explain why the hash-map approach improves it before you code the optimized version. Record: time to first working solution, time complexity, space complexity.",
    },
    {
      title: "Debrief 1 (10 minutes)",
      body: "Stop coding at 25 minutes regardless of state. Answer in writing: (1) Did you use the hash-map pattern or something else? (2) What is the time complexity of your solution? (3) Where did you spend more than 3 minutes on a single step? (4) What would you do differently in 60 seconds if you had to start over?",
    },
    {
      title: "Problem 2: two pointers (25 minutes)",
      body: "Solve LeetCode 167 (Two Sum II, sorted array) or LeetCode 15 (3Sum). Start the timer. Before writing any code, write one sentence naming the entry condition that makes two pointers valid for this problem. Implement without a nested loop. Record: time to first working solution, time complexity, space complexity.",
    },
    {
      title: "Debrief 2 (10 minutes)",
      body: "Stop at 25 minutes. Answer in writing: (1) Did you write a nested loop at any point, even as a draft? (2) What is the time complexity? (3) Did you correctly identify the two-pointer entry condition before coding? (4) What would you say to your interviewer right now to explain your approach in 30 seconds?",
    },
    {
      title: "Problem 3: sliding window (25 minutes)",
      body: "Solve LeetCode 3 (Longest Substring Without Repeating Characters) or LeetCode 567 (Permutation in String). Before coding, write out your window invariant in one sentence: what condition expands the window, and what condition shrinks it? Code the solution, maintaining the invariant throughout. Record: time to first working solution, time complexity, space complexity.",
    },
    {
      title: "Debrief 3 (10 minutes)",
      body: "Stop at 25 minutes. Answer in writing: (1) Did your final solution respect the invariant you stated before coding? (2) What is the time complexity? (3) Which of the three sprints was hardest, and why? (4) What single concept from the reading or lecture do you need to revisit before HW 2?",
    },
    {
      title: "Group debrief in section (15 minutes)",
      body: "Compare your debrief notes with a partner. For each problem, agree on: the correct time complexity, the exact entry condition for the pattern, and the most common mistake. Write one sentence per problem summarizing what the class agrees you will watch for in HW 2.",
    },
  ],
  deliverables: [
    "Three code solutions (complete or incomplete) with your recorded time-to-solution for each",
    "Three written debriefs (four questions each, answered honestly including incomplete attempts)",
    "One complexity statement per problem: time and space, with a one-line justification",
    "Group debrief summary: three sentences, one per problem, from your partner discussion",
  ],
  rubric: [
    {
      dimension: "Pattern identification: correct pattern named before coding",
      points: 25,
      notes:
        "Credit for naming the pattern and its entry condition in writing before writing any code",
    },
    {
      dimension: "Complexity analysis: correct time and space stated post-solve",
      points: 25,
      notes:
        "O-notation for both time and space, with a one-line justification. Partial credit for correct time with incorrect space",
    },
    {
      dimension: "Debrief quality: specific, honest, action-oriented",
      points: 30,
      notes:
        "Each debrief answers all four questions. “I ran out of time” is not an acceptable answer to question 3 without identifying the specific step",
    },
    {
      dimension: "Group debrief: three consensus sentences produced",
      points: 20,
      notes:
        "One sentence per pattern; sentence must name the pattern, the entry condition, and the common mistake",
    },
  ],
  hints: [
    "Set a phone timer, not a mental estimate. The 25-minute cap is the point. If you ignore it, you skip the constraint that makes this practice useful.",
    "Writing the invariant or entry condition before coding is not a formality. It forces you to commit to an approach before you are deep in implementation, which is what an interviewer expects.",
    "An incomplete solution with a correct complexity analysis scores more on the rubric than a complete solution where you cannot state the complexity.",
    "For the group debrief, disagreement on complexity is productive. If you and your partner disagree, work through it until you agree or both articulate why you still disagree.",
    "HW 2 is 30 problems spread across the same three patterns plus stack, binary search, and linked list. The sprint today is your calibration run: use the debrief notes to plan how much time to budget per problem in HW 2.",
  ],
  late:
    "Section worksheets submitted within 48 hours of section receive full credit. Late submissions lose 10 points per day. The debrief notes must include the pre-code invariant or entry condition to receive pattern-identification credit.",
};

export function Wk03Section() {
  return <ProjectPage spec={spec} />;
}

export const wk03SectionSearchBody =
  "section pattern sprint timed mediums hash map two pointer sliding window debrief complexity analysis O(n) O(n squared) entry condition invariant 25 minutes LeetCode medium Week 3 landing the offer";
