import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

interface Row { week: number; title: string; mission: string; }

const rows: Row[] = [
  { week: 1,  title: "Figma as your design environment",                   mission: "Learn the tool well enough that it stops getting in the way" },
  { week: 2,  title: "Visual literacy, what your eye actually sees",        mission: "Acquire vocabulary for hierarchy, contrast, and grouping" },
  { week: 3,  title: "Typography, the 80% lever",                            mission: "Pick a typeface on purpose and build a scale that holds up" },
  { week: 4,  title: "Color, building a palette you can use",                mission: "Mix a 9-step ramp, hit WCAG contrast, derive a dark mode" },
  { week: 5,  title: "Layout, grids, and spacing",                           mission: "Put every pixel on an 8-point grid" },
  { week: 6,  title: "Landing pages that convert",                           mission: "Compose the proven hero, social proof, features, CTA stack" },
  { week: 7,  title: "App UI, screens, states, and component systems",       mission: "Design a flow that handles the empty, loading, and error cases" },
  { week: 8,  title: "Brand identity, logo, wordmark, and the system",       mission: "Ship a wordmark that works at favicon and billboard size" },
  { week: 9,  title: "Marketing assets and where to legally source them",    mission: "Source everything you need without paying enterprise prices" },
  { week: 10, title: "Synthesis, ship your launch package",                   mission: "Hand the design off to code with tokens, components, and a spec" },
];

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

export function ReadingsIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="readings">Readings</AnchorHeading>
      <p>
        The weekly readings ARE the textbook. Original writing, citing only
        vetted primary sources: Refactoring UI, Figma Learn, Butterick&rsquo;s
        Practical Typography, Brad Frost&rsquo;s Atomic Design, Nielsen Norman
        Group, Stripe&rsquo;s design engineering blog, and named instructors on
        YouTube.
      </p>
      <table>
        <thead><tr><th>Wk</th><th>Reading</th><th>Mission</th></tr></thead>
        <tbody>
          {rows.map((r) => {
            const wk = `wk${pad(r.week)}`;
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
  "Readings index Figma typography color layout landing pages app UI brand identity marketing assets synthesis textbook";
