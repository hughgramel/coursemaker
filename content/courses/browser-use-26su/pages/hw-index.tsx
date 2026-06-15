import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;

const rows: { code: string; title: string; out: string; due: string; href: string }[] = [
  { code: "HW1", title: "Run and narrate your first agents", out: "Week 1", due: "Week 3", href: "hw/1" },
  { code: "HW2", title: "Trace the perception pipeline", out: "Week 3", due: "Week 5", href: "hw/2" },
  { code: "HW3", title: "Build a custom-tool agent with structured output", out: "Week 6", due: "Week 8", href: "hw/3" },
  { code: "HW4", title: "Harden an authenticated agent", out: "Week 8", due: "Week 10", href: "hw/4" },
  { code: "Capstone", title: "Ship and defend a browser-use agent", out: "Week 7", due: "Week 10", href: "hw/capstone" },
];

export function HwIndexPage() {
  return (
    <>
      <AnchorHeading as="h1" id="assignments">Assignments</AnchorHeading>
      <p>
        Four homeworks plus a capstone. Each homework is out for two weeks and builds one piece
        of the toolkit: running and reading agents, tracing what the agent perceives, writing
        custom tools with structured output, and hardening an authenticated agent. The capstone
        ties it all together into one agent you design, test, and defend. Every assignment uses
        only concepts taught by the week it is assigned.
      </p>
      <table>
        <thead>
          <tr><th>Code</th><th>Title</th><th>Out</th><th>Due</th></tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.code}>
              <td>{r.code}</td>
              <td><a href={`${base}/${r.href}`}>{r.title}</a></td>
              <td>{r.out}</td>
              <td>{r.due}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const hwIndexSearchBody =
  "assignments homework index browser-use run narrate agents perception pipeline custom tools structured output harden authenticated agent capstone";
