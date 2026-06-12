import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Pricing is a test of belief",
  date: "Week 6 Lecture 1",
  week: 6,
  topics: [
    "The value metric: what you charge per unit of value delivered",
    "Premium-only vs freemium: what each model tests at pre-validation scale",
    "$7.99/mo and $49/yr against LingQ, Duolingo Super, and Dreaming Spanish",
    "Van Westendorp price sensitivity: a lightweight four-question field method",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk06-l1.pdf",
  readings: [
    {
      title: "Week 6 reading: Price as a hypothesis",
      href: "/c/langobee-10k-mrr-26su/readings/wk06",
      note: "Required before section",
    },
    {
      title: "Startup Pricing 101 (Kevin Hale, YC 2019)",
      href: "https://www.youtube.com/watch?v=jwXlo9gy_k4",
      note: "Cost-plus vs value-based pricing; the 10-5-20 rule for iterative price-raising",
    },
    {
      title: "The Price is Right (Patrick Campbell, First Round 2016)",
      href: "https://review.firstround.com/the-price-is-right-essential-tips-for-nailing-your-pricing-strategy/",
      note: "The four-question WTP survey and how to build buyer personas from it",
    },
    {
      title: "The Art and Science of Pricing (Madhavan Ramanujam, Lenny 2022)",
      href: "https://www.lennysnewsletter.com/p/the-art-and-science-of-pricing-madhavan",
      note: "Van Westendorp and conjoint methods; WTP conversations before building",
    },
  ],
  followups: [
    "Outcome (Explain): Write two sentences: one for why premium-only is the locked decision for LangoBee right now, and one for what evidence from week 2's pivot criteria would reopen the freemium question.",
    "Outcome (Apply): Draft four van Westendorp questions adapted to LangoBee. Make each question specific to the value the product delivers, not to a generic subscription.",
    "Outcome (Explain): LingQ charges $12.99/mo, Duolingo Super ~$7/mo, Dreaming Spanish ~$8/mo. LangoBee is at $7.99/mo. Write one sentence on where LangoBee sits in the competitive frame and what that positioning claims about relative value.",
  ],
};

export function Wk06L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk06L1SearchBody =
  "pricing value metric premium-only freemium willingness-to-pay van Westendorp price sensitivity LingQ Duolingo Dreaming Spanish competitive pricing $7.99 $49 trial subscription lecture week 6";
