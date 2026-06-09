import type { ProjectSpec } from "@/types/course";
import { AnchorHeading, slugify } from "./AnchorHeading";
import { Label } from "./Label";

/**
 * ProjectPage — canonical project / homework handout layout.
 * Sections: Overview, Goals, Background (optional), Instructions, Deliverables,
 * Rubric, Hints, Late.
 */
export function ProjectPage({ spec }: { spec: ProjectSpec }) {
  return (
    <>
      <AnchorHeading as="h1" id={slugify(spec.title)}>{spec.title}</AnchorHeading>
      {spec.tagline && <p className="fs-6 fw-300">{spec.tagline}</p>}
      <p>
        {spec.outDate && <><Label variant="purple">Out {spec.outDate}</Label>{" "}</>}
        {spec.dueDate && <Label variant="red">Due {spec.dueDate}</Label>}
      </p>

      <AnchorHeading as="h2" id="overview">Overview</AnchorHeading>
      {spec.overview.map((p, i) => <p key={i}>{p}</p>)}

      <AnchorHeading as="h2" id="goals">Learning goals</AnchorHeading>
      <ul>{spec.goals.map((g, i) => <li key={i}>{g}</li>)}</ul>

      {spec.background?.length ? (
        <>
          <AnchorHeading as="h2" id="background">Background</AnchorHeading>
          {spec.background.map((p, i) => <p key={i}>{p}</p>)}
        </>
      ) : null}

      <AnchorHeading as="h2" id="instructions">Instructions</AnchorHeading>
      <ol>
        {spec.instructions.map((task, i) => (
          <li key={i}>
            <strong>{task.title}</strong>
            {task.body && <p className="mt-1">{task.body}</p>}
            {task.steps?.length ? (
              <ul>{task.steps.map((s, j) => <li key={j}>{s}</li>)}</ul>
            ) : null}
          </li>
        ))}
      </ol>

      <AnchorHeading as="h2" id="deliverables">Deliverables</AnchorHeading>
      <ul>{spec.deliverables.map((d, i) => <li key={i}>{d}</li>)}</ul>

      {spec.rubric?.length ? (
        <>
          <AnchorHeading as="h2" id="rubric">Rubric</AnchorHeading>
          <table>
            <thead><tr><th>Dimension</th><th>Points</th><th>Notes</th></tr></thead>
            <tbody>
              {spec.rubric.map((r, i) => (
                <tr key={i}>
                  <td>{r.dimension}</td>
                  <td>{r.points}</td>
                  <td>{r.notes ?? ""}</td>
                </tr>
              ))}
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>{spec.rubric.reduce((s, r) => s + r.points, 0)}</strong></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </>
      ) : null}

      {spec.hints?.length ? (
        <>
          <AnchorHeading as="h2" id="hints">Hints &amp; FAQ</AnchorHeading>
          <ul>{spec.hints.map((h, i) => <li key={i}>{h}</li>)}</ul>
        </>
      ) : null}

      {spec.late && (
        <>
          <AnchorHeading as="h2" id="late">Late policy</AnchorHeading>
          <p>{spec.late}</p>
        </>
      )}
    </>
  );
}
