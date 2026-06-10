import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const sections: { week: number; title: string; ship: string }[] = [
  { week: 1,  title: "Annotate three forum posts",                ship: "Three claims labeled and one written threat-model paragraph." },
  { week: 2,  title: "Photo station and habit stack",             ship: "Week-zero photo set, baseline measurements, habit stack on paper." },
  { week: 3,  title: "Bathroom shelf audit",                      ship: "Four products chosen and an AM/PM routine card on the mirror." },
  { week: 4,  title: "Bring two reference cuts",                  ship: "Reference photos, hair type, and a decision on hair-loss treatment." },
  { week: 5,  title: "Write your program, peer review",           ship: "Four-day program written; calories and protein calculated." },
  { week: 6,  title: "Defend your oral hygiene cycle",            ship: "24-hour cycle with timings, plus three written critiques of jawline claims." },
  { week: 7,  title: "Closet audit and cull",                     ship: "Every top photographed and scored; a five-look capsule sketched." },
  { week: 8,  title: "Grooming kit show-and-tell",                ship: "Three grooming-kit swaps named with reasoning." },
  { week: 9,  title: "Film, review, fix",                         ship: "Posture and gait videos, two action items, new weekly photo set." },
  { week: 10, title: "Before, after, plan",                       ship: "Before-and-after presentation and a written twelve-week plan." },
];

export function SectionsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="sections">Sections</AnchorHeading>
      <p>One hands-on section per week. Not a re-lecture, the feedback loop where you do the work and ship the artifact.</p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Section</th><th>What you ship</th></tr>
        </thead>
        <tbody>
          {sections.map((s) => {
            const wk = `wk${s.week.toString().padStart(2, "0")}`;
            return (
              <tr key={s.week}>
                <td>{s.week}</td>
                <td><a href={`${base}/sections/${wk}`}>{s.title}</a></td>
                <td>{s.ship}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const sectionsIndexSearchBody =
  "Sections index annotate forum posts photo station habit stack bathroom shelf audit reference cuts program peer review oral hygiene cycle closet audit cull grooming kit show and tell film review fix before after plan";
