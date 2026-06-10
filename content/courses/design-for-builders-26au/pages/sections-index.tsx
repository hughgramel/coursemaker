import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface Row { week: number; title: string; ships: string; }

const rows: Row[] = [
  { week: 1,  title: "Rebuild a landing-page section in Figma",      ships: "A pixel-accurate Figma rebuild with auto-layout and components" },
  { week: 2,  title: "Design critique, three real interfaces",        ships: "Three annotated screenshots calling out hierarchy and gestalt grouping" },
  { week: 3,  title: "Type audit and fix on your landing page",       ships: "Before-and-after frames of your own landing-page typography" },
  { week: 4,  title: "Build your product palette as variables",       ships: "A Figma file with neutral ramp, accent ramp, and semantic color tokens" },
  { week: 5,  title: "Pixel-grid drill on three real screens",         ships: "Three product screens rebuilt on an 8-point grid" },
  { week: 6,  title: "Hero-section critique and rebuild",              ships: "A teardown and a rebuild of three SaaS heroes" },
  { week: 7,  title: "Five-screen app flow with your component library", ships: "Sign-in, empty state, primary task, success, error, all connected" },
  { week: 8,  title: "Logo studio, three wordmark drafts",              ships: "Three wordmark drafts and a chosen direction with rationale" },
  { week: 9,  title: "Asset studio for launch",                         ships: "An assets folder with every font, icon, photo, and illustration you need" },
  { week: 10, title: "Mutual critique, peer launch packages",            ships: "Written critique of two classmates plus a revised demo of yours" },
];

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export function SectionsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="sections">Sections</AnchorHeading>
      <p>
        One section per week, always hands-on in Figma. Sections are the
        feedback loop: the lecture teaches the move, the section is where you
        make it.
      </p>
      <table>
        <thead><tr><th>Wk</th><th>Section</th><th>What you ship</th></tr></thead>
        <tbody>
          {rows.map((r) => {
            const wk = `wk${pad(r.week)}`;
            return (
              <tr key={r.week}>
                <td>{r.week}</td>
                <td><a href={`${base}/sections/${wk}`}>{r.title}</a></td>
                <td>{r.ships}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export const sectionsIndexSearchBody =
  "Sections index hands-on Figma critique audit palette grid hero component library logo assets mutual critique";
