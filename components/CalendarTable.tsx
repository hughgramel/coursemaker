import type { ScheduleUnit, ScheduleRow } from "@/types/course";
import { AnchorHeading, slugify } from "./AnchorHeading";
import { Label } from "./Label";

function renderReading(items: ScheduleRow["reading"]) {
  if (!items?.length) return null;
  return items.map((it, i) => (
    <span key={i}>
      {i > 0 && "; "}
      {typeof it === "string" ? it : <a href={it.href}>{it.text}</a>}
    </span>
  ));
}

function renderResources(items: ScheduleRow["resources"]) {
  if (!items?.length) return null;
  return items.map((it, i) => (
    <span key={i}>
      {i > 0 && ", "}
      <a href={it.href}>{it.text}</a>
    </span>
  ));
}

export function CalendarTable({ units }: { units: ScheduleUnit[] }) {
  return (
    <>
      {units.map((unit) => (
        <section key={unit.title}>
          <AnchorHeading as="h2" id={slugify(unit.title)}>{unit.title}</AnchorHeading>
          <table>
            <thead>
              <tr>
                <th style={{ width: "7rem" }}>Date</th>
                <th>Topic</th>
                <th>Reading</th>
                <th>Resources</th>
              </tr>
            </thead>
            <tbody>
              {unit.rows.map((row, i) => (
                <tr key={i}>
                  <td className="whitespace-nowrap">{row.date}</td>
                  <td>
                    {row.topic}
                    {row.badge && <> <Label variant={row.badge.variant ?? "purple"}>{row.badge.text}</Label></>}
                  </td>
                  <td>{renderReading(row.reading)}</td>
                  <td>{renderResources(row.resources)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </>
  );
}
