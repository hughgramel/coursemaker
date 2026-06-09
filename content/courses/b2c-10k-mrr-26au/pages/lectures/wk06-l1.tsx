import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Picking a wedge channel",
  date: "Week 6 Lecture 1",
  week: 6,
  topics: [
    "The 19 traction channels (Weinberg &amp; Mares) and why most do not apply to a solo founder",
    "Channel-product fit: why the same product succeeds on one channel and fails on another",
    "The &lsquo;one channel obsession&rsquo; rule for weeks 6-9",
    "Case study: Pieter Levels on SEO, Marc Lou on Twitter/X, Tony Dinh on Product Hunt",
    "The Bullseye Framework: outer ring, middle ring, inner ring",
  ],
  slidesHref: "/c/b2c-10k-mrr-26au/slides/wk06-l1.pdf",
  readings: [
    {
      title: "Week 6 reading: Picking your wedge channel and building an SEO engine",
      href: "/c/b2c-10k-mrr-26au/readings/wk06",
      note: "Required before section",
    },
    {
      title: "Traction: How Any Startup Can Achieve Explosive Customer Growth (Weinberg &amp; Mares, 2015)",
      href: "https://www.amazon.com/Traction-Startup-Achieve-Explosive-Customer/dp/1591848369",
      note: "The 19-channel taxonomy and the Bullseye Framework; read chapters 1-3 and the chapter covering your chosen channel",
    },
    {
      title: "Drive Growth by Picking the Right Lane (Hockenmaier &amp; Rachitsky, First Round Review, 2019)",
      href: "https://review.firstround.com/drive-growth-by-picking-the-right-lane-a-customer-acquisition-playbook-for-consumer-startups/",
      note: "Three growth lanes for consumer companies; case studies from Thumbtack, Airbnb, and Booking.com",
    },
    {
      title: "All the ways to grow your product (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/all-the-ways-to-grow-your-product",
      note: "Racecar Growth Framework: kickstarts, engines, lubricants, turbo boosts",
    },
    {
      title: "How to kickstart and scale a consumer business (Lenny Rachitsky, 2022)",
      href: "https://www.lennysnewsletter.com/p/kickstarting-and-scaling-a-consumer",
      note: "Only 7 early-user acquisition strategies account for 99% of B2C startup growth",
    },
  ],
  followups: [
    "Outcome: Evaluate, Score your product against 5 candidate channels using the channel-fit worksheet from section. Write one sentence defending your top pick, and one sentence naming the biggest risk with that pick.",
    "Outcome: Apply, Find two indie founders who have succeeded on the channel you scored highest. What did they ship in their first 30 days on that channel? How does their product compare to yours in audience fit?",
    "Outcome: Analyze, Weinberg and Mares argue that channel-product fit matters as much as product-market fit. Describe one case from your own experience (or one you have read about) where a technically good product failed because of channel mismatch.",
  ],
};

export function Wk06L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk06L1SearchBody =
  "traction channels 19 channel-product fit wedge channel Bullseye Framework Weinberg Mares Pieter Levels Marc Lou Product Hunt SEO Twitter channel obsession solo founder lecture Week 6";
