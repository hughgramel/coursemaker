import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "The content engine you already have",
  date: "Week 11 Lecture 2",
  week: 11,
  topics: [
    "17,440-video catalog as marketing inventory: how existing pipeline metadata becomes distribution",
    "Clip repurposing pipeline: screen-capture demos of the product playing clips as the safe path",
    "Programmatic SEO for the comprehensible-input long tail: language x topic x difficulty x creator as targetable dimensions",
    "The Law of Shitty Clickthroughs: why owning a channel beats renting one",
  ],
  slidesHref: "/c/langobee-10k-mrr-26su/slides/wk11-l2.pdf",
  readings: [
    {
      title: "Week 11 reading: Owned loops and the content engine",
      href: "/c/langobee-10k-mrr-26su/readings/wk11",
      note: "Required before section",
    },
    {
      title: "Programmatic SEO, Explained for Beginners (Ryan Law, Ahrefs, 2023)",
      href: "https://ahrefs.com/blog/programmatic-seo/",
      note: "Five implementation steps and four real examples including Zapier and Nomadlist",
    },
    {
      title: "Zapier SEO Case Study (Mateusz Makosiewicz, Ahrefs, 2023)",
      href: "https://ahrefs.com/blog/zapier-seo-case-study/",
      note: "Integration-page pattern: every app plus every combination gets a URL",
    },
    {
      title: "Product-Led SEO at Agile100 (Eli Schwartz, 2021)",
      href: "https://www.youtube.com/watch?v=IdqA2xtXaAY",
      note: "SEO built into the product from day one using proprietary data competitors cannot replicate",
    },
    {
      title: "The Law of Shitty Clickthroughs (Andrew Chen, 2012)",
      href: "https://andrewchen.com/the-law-of-shitty-clickthroughs/",
      note: "Every rented channel degrades; owned loops compound",
    },
  ],
  followups: [
    "Outcome (Apply): Open the LangoBee database and run a count of distinct (language, creator_channel, mean_zipf_bucket) combinations across texts. Each unique triple is a potential programmatic SEO page. Pick the top 3 Spanish combinations by text count and write the slug, title tag, and meta description for each.",
    "Outcome (Analyze): The Law of Shitty Clickthroughs predicts that any rented channel (TikTok algorithm, YouTube Shorts recommendations) will decay as novelty fades. Identify the one step in LangoBee's content pipeline that produces a durable owned asset rather than a rented impression.",
    "Outcome (Explain): Schwartz argues that product-led SEO requires proprietary data that competitors cannot replicate. Name the specific data advantage LangoBee's catalog has over a general language-learning site, and write the search query a prospective user would type that only a catalog page could answer.",
  ],
};

export function Wk11L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk11L2SearchBody =
  "content engine marketing inventory clip repurposing pipeline programmatic SEO comprehensible input long tail language topic difficulty creator catalog screen capture demo owned channel law of shitty clickthroughs 17440 videos week 11 lecture 2 distribution";
