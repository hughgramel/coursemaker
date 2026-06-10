import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface Row { week: number; l1: string; l2: string; phase: string; }

const rows: Row[] = [
  { week: 1,  l1: "Figma for people who think in code",                l2: "Your design environment, libraries, plugins",     phase: "Foundations" },
  { week: 2,  l1: "CRAP, the four moves every designer makes",          l2: "Gestalt, how the brain groups things",            phase: "Foundations" },
  { week: 3,  l1: "How type works, anatomy and voice",                  l2: "Type systems, scales, line-height, measure",      phase: "Core mechanics" },
  { week: 4,  l1: "Color theory for screens, not paintings",            l2: "Palettes, contrast, and dark mode",               phase: "Core mechanics" },
  { week: 5,  l1: "The 8-point grid",                                   l2: "Grids, columns, and responsive layout in Figma",  phase: "Core mechanics" },
  { week: 6,  l1: "Landing-page anatomy",                               l2: "Designing the hero",                              phase: "Composition" },
  { week: 7,  l1: "App UI, the screens you always need",                l2: "Component systems, variants, states",             phase: "Composition" },
  { week: 8,  l1: "Logos, wordmarks, marks, and lockups",               l2: "Brand systems beyond the logo",                   phase: "Frontier" },
  { week: 9,  l1: "App Store screenshots and the marketing surface",    l2: "Asset hunting, fonts, icons, photos, legally",    phase: "Frontier" },
  { week: 10, l1: "Demo day",                                            l2: "Design to code, handoff, tokens",                phase: "Synthesis" },
];

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export function LecturesIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="lectures">Lectures</AnchorHeading>
      <p>
        Two lectures per week, paired with that week&rsquo;s reading and
        section. Each lecture has a slide deck rendered to PDF.
      </p>
      <table>
        <thead><tr><th>Wk</th><th>Lecture 1</th><th>Lecture 2</th><th>Phase</th></tr></thead>
        <tbody>
          {rows.map((r) => {
            const wk = `wk${pad(r.week)}`;
            return (
              <tr key={r.week}>
                <td>{r.week}</td>
                <td>
                  <a href={`${base}/lectures/${wk}-l1`}>{r.l1}</a>{" · "}
                  <a href={`${base}/slides/${wk}-l1.pdf`}>slides</a>
                </td>
                <td>
                  <a href={`${base}/lectures/${wk}-l2`}>{r.l2}</a>{" · "}
                  <a href={`${base}/slides/${wk}-l2.pdf`}>slides</a>
                </td>
                <td>{r.phase}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const lecturesIndexSearchBody =
  "Lectures index Figma typography color layout landing pages app UI brand identity marketing assets capstone";
