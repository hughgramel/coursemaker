import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Hair biology and the hair-loss conversation you should have at 22",
  date: "Week 4 Lecture 1",
  week: 4,
  topics: [
    "Hair growth cycle: anagen, catagen, telogen, and follicular miniaturization",
    "Androgenetic alopecia: DHT, the Norwood-Hamilton scale, and why it starts earlier than most men expect",
    "Minoxidil RCT evidence: 5% vs 2% vs placebo (Olsen et al., 2002)",
    "Finasteride systematic review evidence and side-effect data (Mella et al., 2010)",
    "When to see a dermatologist and what to ask",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk04-l1.pdf",
  readings: [
    {
      title: "Week 4 reading: Hair, hair loss, and a haircut that fits your face",
      href: "/c/looksmaxxing-26au/readings/wk04",
      note: "Required before section",
    },
    {
      title:
        "Male Androgenetic Alopecia (Trüeb, Endotext/NCBI Bookshelf, 2015)",
      href: "https://www.ncbi.nlm.nih.gov/books/NBK278957/",
      note: "Pathophysiology, Norwood-Hamilton classification, and FDA-approved treatments",
    },
    {
      title:
        "Efficacy and safety of finasteride for androgenetic alopecia: a systematic review (Mella et al., 2010)",
      href: "https://pubmed.ncbi.nlm.nih.gov/20956649/",
      note: "12 RCTs, n = 3,927; efficacy data and sexual side-effect signal",
    },
    {
      title:
        "Affordable treatment for hair loss? Dermatologist explains (Dr. Sam Ellis, 2022)",
      href: "https://www.youtube.com/watch?v=zoNDhLLdf3Q",
      note: "Clinical decision framework for oral and topical minoxidil",
    },
  ],
  followups: [
    "Outcome (Explain): Describe the three phases of the hair growth cycle and explain how DHT shortens the anagen phase in androgenetic alopecia",
    "Outcome (Explain): State the mean non-vellus hair regrowth advantage of 5% topical minoxidil over placebo from the Olsen 2002 RCT, and give the finasteride long-term hair-count improvement figure from Mella 2010",
  ],
};

export function Wk04L1Page() {
  return <LecturePage spec={spec} />;
}

export const wk04L1SearchBody =
  "hair growth cycle anagen catagen telogen androgenetic alopecia DHT dihydrotestosterone Norwood Hamilton follicular miniaturization minoxidil 5% topical RCT Olsen 2002 finasteride systematic review Mella 2010 sexual side effects dermatologist AGA treatment hair loss Week 4 lecture 1";
