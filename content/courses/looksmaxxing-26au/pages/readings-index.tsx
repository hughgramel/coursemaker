import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const readings: { week: number; title: string; mission: string }[] = [
  { week: 1,  title: "Attractiveness research and what you can actually change", mission: "Replace forum confidence with calibrated belief." },
  { week: 2,  title: "Baseline, sleep, and the habit machine",                   mission: "Set up the measurement and routine layer that runs eight weeks." },
  { week: 3,  title: "Skincare from skin biology forward",                       mission: "Run a four-product routine you can defend from dermatology evidence." },
  { week: 4,  title: "Hair, hair loss, and a haircut that fits your face",       mission: "Decide on treatment if relevant; pick a cut and a wash schedule." },
  { week: 5,  title: "Strength, protein, and body recomposition",                mission: "Train and eat for a visible jawline over ten weeks." },
  { week: 6,  title: "Dental, whitening, and the jawline myths",                 mission: "Hold the daily floor; critique the jawline pseudoscience." },
  { week: 7,  title: "Fit, color, and the five-look capsule",                    mission: "Dress your proportions; rotate five outfits that work." },
  { week: 8,  title: "Beard, brows, fragrance, hands",                           mission: "Add the finishing layer without overdoing any single piece." },
  { week: 9,  title: "Posture, gait, and being photographed",                    mission: "Carry yourself well, and let the camera show it." },
  { week: 10, title: "Body dysmorphia and the twelve-week plan",                 mission: "Survive the rabbit hole; plan the next twelve weeks." },
];

export function ReadingsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="readings">Readings</AnchorHeading>
      <p>
        The weekly readings ARE the textbook, original writing, vetted from
        primary sources, with full bibliography per reading. Start each week
        here.
      </p>
      <table>
        <thead>
          <tr><th>Wk</th><th>Reading</th><th>Mission</th></tr>
        </thead>
        <tbody>
          {readings.map((r) => {
            const wk = `wk${r.week.toString().padStart(2, "0")}`;
            return (
              <tr key={r.week}>
                <td>{r.week}</td>
                <td><a href={`${base}/readings/${wk}`}>{r.title}</a></td>
                <td>{r.mission}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const readingsIndexSearchBody =
  "Readings index attractiveness baseline sleep habits skincare hair loss strength dental jawline fit color capsule beard fragrance posture body dysmorphia twelve-week plan";
