import { ProjectPage } from "@/components/ProjectPage";
import type { ProjectSpec } from "@/types/course";

const spec: ProjectSpec = {
  title: "Week 4 section, Pattern sprint 2",
  tagline:
    "Three timed mediums covering binary trees, BFS, and DFS, followed by a structured debrief on what each solution reveals about your pattern fluency.",
  outDate: "Week 4",
  overview: [
    "Pattern sprint 2 puts the recursion and traversal patterns from lecture under timed conditions. You will solve three LeetCode-medium problems back to back, each drawn from a different pattern: one binary-tree problem solved with recursion, one BFS problem, and one DFS problem. The time limit is 20 minutes per problem.",
    "The debrief is as important as the problems. After all three problems you will examine your own solutions for three things: whether you stated the base case before writing code, whether you chose the right traversal and can defend that choice, and whether your solution handles the edge cases you named before starting.",
    "By the end of section you should be able to recognize the recursive sub-problem in a binary-tree question within the first two minutes of reading it, write the BFS queue template from memory without looking it up, and explain in one sentence why BFS finds shortest paths on unweighted graphs while DFS does not.",
  ],
  goals: [
    "Implement a recursive binary-tree solution under 20-minute time pressure and confirm the base case is explicit",
    "Write the BFS queue template from memory and apply it to a new problem",
    "Apply DFS (recursive or explicit-stack) to a graph or tree problem and state the time and space complexity",
    "Debrief each solution: did you name the approach before writing code? Did you check edge cases?",
    "Identify which of the three patterns felt least fluent and note one LeetCode problem to review before next week",
  ],
  background: [
    "The three patterns from lecture: (1) recursive binary-tree traversal, where each call handles one node and delegates to left and right sub-trees; (2) BFS with a queue, which processes nodes level by level and finds shortest paths on unweighted graphs; (3) DFS with recursion or an explicit stack, which explores one path fully before backtracking. These are the three most common tree and graph patterns in coding interviews.",
    "Before each problem: state the approach in one sentence, name any edge cases you see, then write code. After each problem: state the time complexity and space complexity. These habits are what the debrief checks, not just whether the code passes.",
  ],
  instructions: [
    {
      title: "Problem 1: binary tree recursion (20 minutes)",
      body: "Your TA will assign one of the following: Maximum Depth of Binary Tree (LeetCode 104), Diameter of Binary Tree (LeetCode 543), or Invert Binary Tree (LeetCode 226). Before writing code, say aloud: the recursive case in one sentence, and all base cases. Write the solution. After the timer, confirm your complexity and test one edge case: the empty tree (root is null).",
    },
    {
      title: "Problem 2: BFS (20 minutes)",
      body: "Your TA will assign one of the following: Binary Tree Level Order Traversal (LeetCode 102), Rotting Oranges (LeetCode 994), or Number of Islands (LeetCode 200, BFS version). Write the BFS template from memory first (queue initialization, visited marking, neighbor loop), then adapt it to the specific problem. After the timer, answer: why does BFS give the correct shortest-path answer here while DFS would not?",
    },
    {
      title: "Problem 3: DFS (20 minutes)",
      body: "Your TA will assign one of the following: Path Sum (LeetCode 112), Number of Islands (LeetCode 200, DFS version), or Clone Graph (LeetCode 133). Choose recursion or explicit stack and state why. After the timer, answer: what is the space complexity of your solution in the worst case, and what tree shape or graph shape causes that worst case?",
    },
    {
      title: "Debrief: three questions per solution",
      body: "For each of your three solutions, answer these questions with your section partner: (1) Did you name the recursive case or traversal choice before writing code? (2) Did your solution handle a null or empty input correctly? (3) What would break your solution? Trade solutions with your partner and look for one thing they handled that you did not.",
    },
    {
      title: "Fluency map",
      body: "Rate each of the three patterns (binary-tree recursion, BFS, DFS) as fluent, shaky, or blocked. Write one LeetCode problem you will do before next week for each pattern you rated shaky or blocked. A fluent pattern is one you can write the template for from memory without thinking; shaky means you needed to look something up or got stuck for more than five minutes; blocked means you could not complete the problem.",
    },
  ],
  deliverables: [
    "Three working solutions (or honest partial solutions with a clear statement of where you got stuck)",
    "Complexity analysis for each solution: time and space, with one-sentence justification",
    "Debrief answers for each problem: approach named before coding, edge cases checked, one thing a partner caught",
    "Fluency map: three patterns rated, at least one follow-up problem named for any pattern rated shaky or blocked",
  ],
  rubric: [
    {
      dimension: "Solution correctness",
      points: 40,
      notes: "Full credit for a passing solution; half credit for a solution that handles the main case but fails on null/empty inputs",
    },
    {
      dimension: "Complexity analysis",
      points: 20,
      notes: "Both time and space stated with a one-sentence justification; must name the worst-case input shape",
    },
    {
      dimension: "Debrief quality",
      points: 25,
      notes: "All three debrief questions answered per problem; partner review completed; at least one concrete thing caught by the partner named",
    },
    {
      dimension: "Fluency map",
      points: 15,
      notes: "Three patterns rated; follow-up problem named for each shaky or blocked pattern; ratings are honest (a solution that took 18 minutes is not fluent)",
    },
  ],
  hints: [
    "On binary-tree problems, write the function signature and the base case first, before anything else. The base case for almost every tree recursion is: if the node is null, return the appropriate identity value (0 for count/depth, null for a search, true for a vacuous condition).",
    "The BFS template is always the same: initialize a queue with the start node, mark it visited immediately (not when you dequeue it), and in the loop: dequeue, process, enqueue unvisited neighbors. The most common bug is marking nodes visited on dequeue rather than on enqueue, which allows duplicates in the queue.",
    "For DFS on a graph (not a tree), you need a visited set to avoid cycles. For DFS on a tree, you do not, because trees have no cycles. Know which structure you are working with before you start.",
    "If your recursive solution gets a stack-overflow error on large inputs in a real interview, say so explicitly and offer the iterative version. The interviewer wants to see that you understand the tradeoff, not just that you can write the code.",
    "Backtracking problems (like permutations or combinations) are DFS problems where you undo your choice after each recursive call. The pattern is: make a choice, recurse, undo the choice. If you can implement DFS fluently, backtracking is a small extension.",
  ],
};

export function Wk04Section() {
  return <ProjectPage spec={spec} />;
}

export const wk04SectionSearchBody =
  "section pattern sprint 2 timed mediums binary tree recursion BFS DFS debrief fluency map base case queue stack traversal graph modeling LeetCode medium Week 4 section landing the offer";
