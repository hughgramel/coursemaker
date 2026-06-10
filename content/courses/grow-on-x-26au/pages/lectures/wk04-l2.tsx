import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Collaboration and the network",
  date: "Week 4, Lecture 2",
  week: 4,
  topics: [
    "Mutual amplification: how creators help each other grow without trading integrity",
    "Reply guys, group chats, and the friendly-cluster effect: the social mechanics of small networks",
    "Quote-post chains and collaborative threads: formats that create shared reach",
    "When to participate, when to stay quiet: protecting your niche signal",
  ],
  slidesHref: "/c/grow-on-x-26au/slides/wk04-l2.pdf",
  readings: [
    {
      title: "Week 4 reading, Building a sustainable weekly system",
      href: "/c/grow-on-x-26au/readings/wk04",
    },
    {
      title: "Chenell Basilio, The growth lever of top creators that no one talks about (Growth in Reverse, 2024)",
      href: "https://growthinreverse.com/connections/",
    },
  ],
  followups: [
    "Basilio (2024) describes Sahil Bloom’s WhatsApp group of creators with 15-40k followers who amplify each other’s work. What distinguishes that from an engagement pod? What would make it cross the line?",
    "The “friendly-cluster effect” says that being seen in the replies of accounts your audience already follows increases your discoverability. Pick three accounts your target audience likely follows. Write one reply to each that adds value without being promotional.",
    "A quote-post chain gives each participant shared reach: your followers see the chain, and so do the original poster’s followers. Describe a topic in your niche where a collaborative thread would work well. Who would you invite, and in what order?",
    "Basilio (2024) notes “the creators who win are not the ones building in silence by themselves.” Yet many creators in technical or academic niches fear that networking looks performative. How would you join a real reciprocal network without compromising the signal of your content?",
    "There are moments when staying quiet is the right move: when a controversy is outside your niche, when you lack the context to add value, when engaging could mislead your audience. Name one recent public X discussion where participating would have hurt more than helped for a creator in your niche.",
  ],
};

export function Wk04L2() {
  return <LecturePage spec={spec} />;
}

export const wk04L2SearchBody =
  "collaboration network mutual amplification reply guys group chats friendly cluster quote-post collaborative threads creator network reciprocal amplification engagement pods niche signal Week 4 Lecture 2";
