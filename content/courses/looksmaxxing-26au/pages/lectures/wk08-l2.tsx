import { LecturePage } from "@/components/LecturePage";
import type { LectureSpec } from "@/types/course";

const spec: LectureSpec = {
  title: "Fragrance, hands, and the details that signal care",
  date: "Week 8 Lecture 2",
  week: 8,
  topics: [
    "Top, heart, and base notes: what you smell in the bottle vs. what stays on skin (Curly Fragrance, 2025)",
    "Fragrance families: fresh, woody, oriental, floral and which contexts each fits",
    "Starter kit strategy: one fresh daytime, one warm evening, nothing more",
    "Nail and cuticle care: the cheap visible signal most men skip",
    "Hand cream basics: when and how much",
    "Body odor and antiperspirant: mechanism, timing, and the clinical-strength option",
  ],
  slidesHref: "/c/looksmaxxing-26au/slides/wk08-l2.pdf",
  readings: [
    {
      title: "Week 8 reading: Beard, brows, fragrance, hands",
      href: "/c/looksmaxxing-26au/readings/wk08",
      note: "Required before section",
    },
    {
      title:
        "How to Read a Fragrance Note Sheet: Beginner's Guide (Curly Fragrance, 2025)",
      href: "https://www.youtube.com/watch?v=ccxiyPhMVUk",
      note: "Top/heart/base anatomy, projection vs sillage, fragrance families, starter kit logic",
    },
  ],
  followups: [
    "Outcome (Recommend): Build a two-fragrance starter kit, name the note families in each, and match them to daily and going-out contexts",
  ],
};

export function Wk08L2Page() {
  return <LecturePage spec={spec} />;
}

export const wk08L2SearchBody =
  "fragrance perfume cologne top notes heart notes base notes sillage projection fresh woody oriental floral starter kit daily fragrance occasion fragrance nail care cuticle hand cream body odor antiperspirant clinical strength grooming details Week 8 lecture 2";
