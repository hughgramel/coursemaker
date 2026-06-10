import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const lectures: { week: number; l1: string; l2: string; phase: string }[] = [
  { week: 1,  l1: "The science of attractiveness",            l2: "The looksmaxxing landscape and how to read it", phase: "Foundations" },
  { week: 2,  l1: "Measuring what you cannot see day to day", l2: "Sleep, circadian rhythm, recovery",             phase: "Foundations" },
  { week: 3,  l1: "Skin biology for the impatient",           l2: "The four-product routine",                       phase: "Core mechanics" },
  { week: 4,  l1: "Hair biology and the hair-loss talk",      l2: "Wash, cut, style",                              phase: "Core mechanics" },
  { week: 5,  l1: "Strength training first principles",       l2: "Eating for a visible jawline",                  phase: "Core mechanics" },
  { week: 6,  l1: "Mouth basics: hygiene, gums, breath",      l2: "Teeth, alignment, and the jawline myth",        phase: "Composition" },
  { week: 7,  l1: "Fit is the whole game",                    l2: "Color, context, capsule wardrobe",              phase: "Composition" },
  { week: 8,  l1: "Beards, stubble, and the eyebrow line",    l2: "Fragrance, hands, and details",                 phase: "Frontier" },
  { week: 9,  l1: "Standing tall: posture and gait",          l2: "On being photographed",                         phase: "Frontier" },
  { week: 10, l1: "Body dysmorphia and the rabbit hole",      l2: "Demo day and your twelve-week plan",            phase: "Synthesis" },
];

export function LecturesIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="lectures">Lectures</AnchorHeading>
      <p>Two lectures per week, paired with that week&rsquo;s reading and section. Slides render to PDF.</p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Lecture 1</th><th>Lecture 2</th><th>Phase</th></tr>
        </thead>
        <tbody>
          {lectures.map((l) => {
            const wk = `wk${l.week.toString().padStart(2, "0")}`;
            return (
              <tr key={l.week}>
                <td>{l.week}</td>
                <td>
                  <a href={`${base}/lectures/${wk}-l1`}>{l.l1}</a>{" · "}
                  <a href={`${base}/slides/${wk}-l1.pdf`}>slides</a>
                </td>
                <td>
                  <a href={`${base}/lectures/${wk}-l2`}>{l.l2}</a>{" · "}
                  <a href={`${base}/slides/${wk}-l2.pdf`}>slides</a>
                </td>
                <td>{l.phase}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const lecturesIndexSearchBody =
  "Lectures index attractiveness halo effect measurement sleep skincare retinoid sunscreen hair loss minoxidil finasteride strength training body recomposition dental jawline myth fit color capsule wardrobe beard fragrance posture photography body dysmorphia";
