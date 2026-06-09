import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The 10k roadmap",
  date: "Week 6, Lecture 1",
  week: 6,
  topics: [
    "Three growth phases and what defines each: 0&rarr;1k (proving the niche), 1k&rarr;5k (compounding distribution), 5k&rarr;10k (network leverage)",
    "What changes at each phase: the content strategy, distribution approach, and network moves that work at each tier but fail at the others",
    "Milestone planning with realistic timelines: what the data says about average monthly growth rates at each phase",
    "Common stalls and how to break through each: the plateau at 500, the plateau at 2k, the wall at 8k",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk06-l1.pdf",
  readings: [
    {
      title: "Week 6 reading: your 90-day playbook",
      href: "/c/grow-on-x-26au/readings/wk06",
    },
    {
      title: "Justin Welsh: The 5 Phases of Solopreneurship (2023)",
      href: "https://www.justinwelsh.me/newsletter/the-5-phases-of-solopreneurship",
    },
    {
      title: "Nathan Barry: Creator Flywheels (2023)",
      href: "https://nathanbarry.com/creator-flywheels/",
    },
  ],
  followups: [
    "Welsh (2023) describes five solopreneur phases: Survival, Systems, Growth, Defense, Automation. Map those five onto the three growth phases from lecture (0&rarr;1k, 1k&rarr;5k, 5k&rarr;10k). Where do the maps align and where do they differ?",
    "A creator at 900 followers posts consistently but has been stuck for six weeks. Using the phase framework, list three diagnostic questions you would ask before recommending any change.",
    "The lecture identifies three distinct &ldquo;stall points.&rdquo; Choose one and write a specific 30-day plan to break through it. Your plan must name the metrics you will watch and the threshold at which you will change tactics.",
    "At 0&rarr;1k, borrowed distribution (replies, collaborations) matters more than original reach. At 5k&rarr;10k, your own distribution begins to carry weight. What is the transition point, and how would a creator know they&rsquo;ve crossed it?",
    "The 90-day milestone plan asks you to set a target follower count per 30-day period. Given what you now know about growth rates, what is a realistic target for someone in your niche starting from zero? Show the reasoning, not just the number.",
  ],
};

export function Wk06L1() {
  return <LecturePage spec={spec} />;
}

export const wk06L1SearchBody =
  "10k roadmap three growth phases 0 to 1k 1k to 5k 5k to 10k milestone planning realistic timelines stall points plateau content strategy distribution network leverage 90-day plan Week 6 Lecture 1";
