import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "System design as a conversation",
  date: "Week 6, Lecture 1",
  week: 6,
  topics: [
    "The interview rubric: what a senior engineer is actually scoring when they watch you at a whiteboard",
    "Requirements clarification: functional vs. non-functional requirements and why you ask before you draw",
    "Capacity estimation: back-of-envelope QPS, storage, and bandwidth math that earns credibility",
    "The order of operations: requirements &rarr; API design &rarr; data model &rarr; high-level diagram &rarr; deep dive",
    "Common failure modes: jumping to solutions, skipping constraints, defending a design instead of adapting it",
  ],
  slidesHref: "/c/landing-the-offer-26au/slides/wk06-l1.pdf",
  readings: [
    {
      title: "Week 6 reading: designing a URL shortener end to end",
      href: "/c/landing-the-offer-26au/readings/wk06",
    },
    {
      title: "ByteByteGo: System design interview, a step-by-step guide (YouTube)",
      href: "https://www.youtube.com/watch?v=i7twT3x5yv8",
    },
    {
      title: "System Design Primer (Donne Martin, GitHub)",
      href: "https://github.com/donnemartin/system-design-primer",
    },
  ],
  followups: [
    "ByteByteGo (2023) states that the goal of step one is not to solve the problem but to agree on what problem you are actually solving. What is the difference between a functional requirement and a non-functional requirement? Give one example of each for a ride-sharing app.",
    "Write out a capacity estimation for a URL shortener that handles 100 million redirect requests per day. Compute the reads per second, the write rate (assuming a 100:1 read-to-write ratio), and the storage needed to hold one year of short URLs. Show your arithmetic.",
    "The System Design Primer (Martin, 2017) describes the interview as a chance to show how you think, not just what you know. What does that mean in practice? Name two specific behaviors that signal strong process to an interviewer, and two that signal weak process.",
    "Most candidates lose points in system design before drawing a single box (ByteByteGo, 2023). Describe the &ldquo;order of operations&rdquo; from this lecture. Which step do candidates most often skip, and what does skipping it cost them?",
    "A candidate is asked to design Twitter&rsquo;s timeline feature. They immediately draw a database and an API server. What requirements questions should they have asked first? List at least four, and explain what design decision each answer would change.",
    "HW 4 is out this week: a system design write-up for a well-known product, due week 8. Before next lecture, pick your product and write down the functional and non-functional requirements you would clarify if asked to design it.",
  ],
};

export function Wk06L1() {
  return <LecturePage spec={spec} />;
}

export const wk06L1SearchBody =
  "system design interview rubric requirements clarification functional non-functional capacity estimation QPS storage bandwidth back of envelope order of operations API design data model high-level diagram deep dive failure modes constraints whiteboard senior engineer Week 6 Lecture 1 landing the offer";
