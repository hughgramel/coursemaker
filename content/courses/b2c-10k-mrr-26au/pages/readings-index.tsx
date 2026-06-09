import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const readings: { week: number; title: string; mission: string }[] = [
  { week: 1,  title: "The B2C funnel",                 mission: "Make your funnel honest." },
  { week: 2,  title: "Activation",                     mission: "Cut your time-to-first-value in half." },
  { week: 3,  title: "Pricing for B2C",                mission: "Pick a price that someone will pay this week." },
  { week: 4,  title: "Retention",                      mission: "Make your retention curve smile." },
  { week: 5,  title: "Experimentation + release",      mission: "Build the loop that lets you ship 10× without breaking 10×." },
  { week: 6,  title: "Wedge channels + SEO",           mission: "Commit to ONE growth channel for the rest of the course." },
  { week: 7,  title: "Social, virality, paid",         mission: "Bake one growth loop into the product itself." },
  { week: 8,  title: "App stores + ASO",               mission: "Ship to a store (or commit to PWA) with a real release pipeline." },
  { week: 9,  title: "Lifecycle + referral",           mission: "Wire the messages that bring people back without you doing the work." },
  { week: 10, title: "Diagnosis + scaling past $10k",  mission: "Defend the single highest-leverage move for your next 30 days." },
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
          <tr>
            <th>Wk</th>
            <th>Reading</th>
            <th>Mission</th>
          </tr>
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
  "Readings index textbook funnel activation pricing retention experimentation release management wedge channels SEO social virality paid app stores ASO lifecycle referral diagnosis $10k MRR";
