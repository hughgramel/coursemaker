import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Social + virality",
  date: "Week 7 Lecture 1",
  week: 7,
  topics: [
    "Twitter/X build-in-public mechanics: the Marc Lou and Tony Dinh playbooks",
    "TikTok and the demo-shaped product opportunity",
    "The share-card tactic: viral assets baked into the product itself",
    "K-factor and viral loops vs growth loops: why they are not the same thing",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk07-l1.pdf",
  readings: [
    {
      title: "Week 7 reading: Social, virality, and the basics of paid",
      href: "/c/b2c-10k-mrr-26au/readings/wk07",
      note: "Required before section",
    },
    {
      title: "Braindump on Viral Loops (Andrew Chen, 2025)",
      href: "https://andrewchen.substack.com/p/braindump-on-viral-loops",
      note: "The mathematical foundation of K-factor and why modern virality lives in retention loops",
    },
    {
      title: "Growth Loops are the New Funnels (Balfour & Winters, Reforge, 2019)",
      href: "https://www.reforge.com/blog/growth-loops",
      note: "Why loops compound and funnels do not; four acquisition loop types",
    },
  ],
  followups: [
    "Outcome (Apply): Using share events you already have (or can instrument today), compute your K-factor. Write the formula out: K = (invites sent per user) x (conversion rate on those invites). What would need to be true to push K above 0.5?",
    "Outcome (Analyze): Andrew Chen argues that ‘modern virality depends on retention-driven loops across multiple sessions rather than single-session conversions.’ Describe one place in your product where a retained user’s behavior could generate a new user. If no such place exists today, name the one you would build first.",
    "Outcome (Evaluate): Elena Verna says ‘growth tactics without a product loop are decorations, not engines.’ Pick one growth tactic you have tried or are considering. Write one sentence on what product loop it relies on. If there is no loop, does the tactic still make sense?",
  ],
};

export function Wk07L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk07L1SearchBody =
  "social virality build-in-public Twitter X Marc Lou Tony Dinh TikTok demo share card viral asset K-factor viral loop growth loop lecture Week 7";
