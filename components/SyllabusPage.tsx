import type { SyllabusSpec } from "@/types/course";
import { AnchorHeading } from "./AnchorHeading";
import { StaffList } from "./StaffList";

/**
 * SyllabusPage — renders the canonical UW-style syllabus from a SyllabusSpec.
 * Sections in order: Overview, Logistics, Staff & Office Hours, Prerequisites
 * + Getting Help, Grading, Resources.
 */
export function SyllabusPage({ spec }: { spec: SyllabusSpec }) {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>

      <AnchorHeading as="h2" id="overview">Overview</AnchorHeading>
      {spec.overview.map((p, i) => <p key={i}>{p}</p>)}

      <AnchorHeading as="h2" id="logistics">Logistics</AnchorHeading>
      <ul>
        {spec.logistics.meeting && <li><strong>Meeting:</strong> {spec.logistics.meeting}</li>}
        {spec.logistics.format && <li><strong>Format:</strong> {spec.logistics.format}</li>}
        {spec.logistics.location && <li><strong>Location:</strong> {spec.logistics.location}</li>}
        {spec.logistics.extras?.map((e, i) => <li key={i}>{e}</li>)}
      </ul>

      <AnchorHeading as="h2" id="staff">Staff &amp; Office Hours</AnchorHeading>
      <StaffList staff={spec.staff} />

      {(spec.prerequisites?.length || spec.gettingHelp?.length) && (
        <>
          <AnchorHeading as="h2" id="getting-help">Prerequisites &amp; Getting Help</AnchorHeading>
          {spec.prerequisites?.length ? (
            <>
              <AnchorHeading as="h3" id="prerequisites">Prerequisites</AnchorHeading>
              <ul>{spec.prerequisites.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </>
          ) : null}
          {spec.gettingHelp?.length ? (
            <>
              <AnchorHeading as="h3" id="getting-help-flow">Where to get help</AnchorHeading>
              <ul>{spec.gettingHelp.map((p, i) => <li key={i}>{p}</li>)}</ul>
            </>
          ) : null}
        </>
      )}

      <AnchorHeading as="h2" id="grading">Grading</AnchorHeading>
      <table>
        <thead><tr><th>Item</th><th>Weight</th><th>Notes</th></tr></thead>
        <tbody>
          {spec.grading.breakdown.map((row, i) => (
            <tr key={i}>
              <td>{row.item}</td>
              <td>{row.weight}</td>
              <td>{row.notes ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {spec.grading.latePolicy && (
        <>
          <AnchorHeading as="h3" id="late-policy">Late policy</AnchorHeading>
          <p>{spec.grading.latePolicy}</p>
        </>
      )}
      {spec.grading.aiPolicy && (
        <>
          <AnchorHeading as="h3" id="ai-policy">AI policy</AnchorHeading>
          <p>{spec.grading.aiPolicy}</p>
        </>
      )}
      {spec.grading.regradePolicy && (
        <>
          <AnchorHeading as="h3" id="regrade-policy">Regrade requests</AnchorHeading>
          <p>{spec.grading.regradePolicy}</p>
        </>
      )}

      {(spec.resources?.required?.length || spec.resources?.optional?.length) && (
        <>
          <AnchorHeading as="h2" id="resources">Resources</AnchorHeading>
          {spec.resources?.required?.length ? (
            <>
              <AnchorHeading as="h3" id="required">Required</AnchorHeading>
              <ul>
                {spec.resources.required.map((r, i) => (
                  <li key={i}>
                    {r.href ? <a href={r.href}>{r.title}</a> : <strong>{r.title}</strong>}
                    {r.note && <> — {r.note}</>}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {spec.resources?.optional?.length ? (
            <>
              <AnchorHeading as="h3" id="optional">Optional</AnchorHeading>
              <ul>
                {spec.resources.optional.map((r, i) => (
                  <li key={i}>
                    {r.href ? <a href={r.href}>{r.title}</a> : <strong>{r.title}</strong>}
                    {r.note && <> — {r.note}</>}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </>
      )}
    </>
  );
}
