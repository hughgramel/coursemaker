import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Dynamic programming without the panic",
  date: "Week 5, Lecture 1",
  week: 5,
  topics: [
    "Recurrence first, code second: why writing the recurrence relation before touching the keyboard catches design errors early",
    "Memoization vs. tabulation: top-down recursion with a cache versus bottom-up iteration over a table, and how to choose",
    "1D vs. 2D state: recognizing which problems need a single array and which need a grid, and why the state shape drives the solution",
    "The classic problem set: Climbing Stairs, House Robber, Coin Change, Longest Common Subsequence, and what each one teaches",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk05-l1.pdf",
  readings: [
    {
      title: "Week 5 reading: dynamic programming and interview communication",
      href: "/c/landing-the-offer-26au/readings/wk05",
    },
    {
      title: "NeetCode: Top 5 Dynamic Programming Patterns for Coding Interviews (YouTube, 2021)",
      href: "https://www.youtube.com/watch?v=mBNrRy2_hVs",
    },
    {
      title: "Tushar Roy: Dynamic Programming playlist (YouTube, 2016)",
      href: "https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr",
    },
  ],
  followups: [
    "Write the recurrence for Climbing Stairs in plain math before writing any code. Then convert it to a bottom-up tabulation. What is the time complexity and space complexity of the tabulated version?",
    "NeetCode (2021) argues that recognizing a DP problem as a 0/1 knapsack variant gives you the recurrence for free. Pick one problem from the 1D DP section of the NeetCode roadmap and identify which of the five DP pattern families it belongs to. Explain your reasoning.",
    "Memoization and tabulation produce the same answers. When would you prefer one over the other in an interview? Name one advantage and one disadvantage of each approach.",
    "Tushar Roy (2016) teaches every DP problem by drawing the state table before writing code. For House Robber with input [2, 7, 9, 3, 1], draw the dp array by hand (one cell per house). What does dp[i] represent? What is dp[4]?",
    "A candidate writes a correct recursive solution to a DP problem but gets TLE (time limit exceeded). Walk through what is happening. What is the time complexity of the naive recursive version of Fibonacci, and how does memoization fix it?",
    "HW2 (30-problem LeetCode sprint) is due this week. HW3 (recorded mock coding interview) is now out.",
  ],
};

export function Wk05L1() {
  return <LecturePage spec={spec} />;
}

export const wk05L1SearchBody =
  "dynamic programming recurrence relation memoization tabulation 1D DP 2D DP top-down bottom-up climbing stairs house robber coin change longest common subsequence knapsack state space overlapping subproblems optimal substructure Week 5 Lecture 1 landing the offer";
