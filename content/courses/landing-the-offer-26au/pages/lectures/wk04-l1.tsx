import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Recursion as a pattern",
  date: "Week 4, Lecture 1",
  week: 4,
  topics: [
    "Translating a problem into a recursive case: how to spot the self-similar sub-problem",
    "Base case discipline: what makes a base case correct and why missing it causes stack overflow",
    "The call stack: how frames accumulate on recursive calls and unwind on return",
    "When recursion loses to iteration: stack depth limits, tail calls, and the tradeoffs that matter in an interview",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk04-l1.pdf",
  readings: [
    {
      title: "Week 4 reading: recursion, trees, and graph traversal",
      href: "/c/landing-the-offer-26au/readings/wk04",
    },
    {
      title: "NeetCode Roadmap: Trees and Backtracking sections",
      href: "https://neetcode.io/roadmap",
    },
    {
      title: "Coding Interview University: Trees section (jwasham, GitHub)",
      href: "https://github.com/jwasham/coding-interview-university",
    },
  ],
  followups: [
    "Write a recursive function to compute the sum of all values in a binary tree. Identify the base case, the recursive case, and sketch the call stack for a three-node tree (root with two leaves).",
    "NeetCode&rsquo;s roadmap places Trees after Stack in its learning sequence. Why does understanding the call stack make tree recursion easier to reason about? Give a concrete example.",
    "Compare an iterative in-order traversal (using an explicit stack) with a recursive one. When would you prefer the iterative version in an interview setting?",
    "Coding Interview University notes that a recursive approach requires O(h) space for the call stack, where h is the tree height. For a balanced binary tree of n nodes, what is h? For a degenerate (linked-list-shaped) tree, what is h?",
    "A function calls itself without a valid base case. Walk through what happens on the call stack. At what point does the program fail, and what error will you see?",
    "Pick one LeetCode problem from the Trees section of NeetCode&rsquo;s roadmap. Before writing any code, write out the recursive case in one sentence and the base case(s) in one sentence each.",
  ],
};

export function Wk04L1() {
  return <LecturePage spec={spec} />;
}

export const wk04L1SearchBody =
  "recursion pattern recursive case base case call stack stack frame binary tree traversal iteration tail call stack overflow depth limit induction self-similar subproblem Week 4 Lecture 1 landing the offer";
