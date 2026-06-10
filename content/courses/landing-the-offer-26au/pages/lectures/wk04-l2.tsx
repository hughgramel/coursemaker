import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "BFS and DFS in interview shape",
  date: "Week 4, Lecture 2",
  week: 4,
  topics: [
    "BFS on trees and grids: the queue-based template, level-order traversal, shortest-path on unweighted graphs",
    "DFS via recursion and stack: pre-order / in-order / post-order, the explicit-stack variant",
    "Graph modeling: turning a real-world problem into nodes and edges, adjacency lists vs. sets",
    "Backtracking as constrained DFS: the decision tree, pruning, and where this shows up in interviews",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk04-l2.pdf",
  readings: [
    {
      title: "Week 4 reading: recursion, trees, and graph traversal",
      href: "/c/landing-the-offer-26au/readings/wk04",
    },
    {
      title: "Back To Back SWE: Binary tree level order traversal (YouTube, 2019)",
      href: "https://www.youtube.com/watch?v=gcR28Hc2TNQ",
    },
    {
      title: "NeetCode Roadmap: Graphs and Backtracking sections",
      href: "https://neetcode.io/roadmap",
    },
  ],
  followups: [
    "Back To Back SWE (2019) argues that a tree is just a graph with no cycles and one designated root. How does that framing change how you read BFS code written for a tree when you see it applied to a grid?",
    "You are given a grid of cells where some cells are walls and others are open. You need to find the shortest path from the top-left cell to the bottom-right cell. Which traversal do you use, and why? What data structure drives the traversal?",
    "Write the BFS template from memory: initialize the queue with the starting node, mark it visited, then iterate. What goes inside the loop? What is the termination condition?",
    "DFS can be implemented with recursion or with an explicit stack. What is the practical difference in an interview? When might the explicit-stack version matter?",
    "Describe a real-world scenario (not a LeetCode problem) that maps naturally onto a graph. Name the nodes, name the edges, and state whether you would use BFS or DFS to answer the most natural question about that graph.",
    "NeetCode places Backtracking after Trees and Graphs in its roadmap. In what sense is backtracking just a DFS with a constraint check added to each recursive call? Write a two-sentence definition.",
  ],
};

export function Wk04L2() {
  return <LecturePage spec={spec} />;
}

export const wk04L2SearchBody =
  "BFS breadth-first search DFS depth-first search trees grids graph modeling adjacency list backtracking queue stack level-order traversal shortest path unweighted graph pre-order in-order post-order constrained DFS decision tree pruning Week 4 Lecture 2 landing the offer";
