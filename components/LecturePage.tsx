import type { LectureSpec } from "@/types/course";
import { AnchorHeading, slugify } from "./AnchorHeading";

export function LecturePage({ spec }: { spec: LectureSpec }) {
  return (
    <>
      <AnchorHeading as="h1" id={slugify(spec.title)}>{spec.title}</AnchorHeading>
      <p className="fs-6 fw-300">
        {spec.week ? `Week ${spec.week} · ` : ""}{spec.date}
      </p>

      <AnchorHeading as="h2" id="topics">Topics</AnchorHeading>
      <ul>{spec.topics.map((t, i) => <li key={i}>{t}</li>)}</ul>

      {(spec.slidesHref || spec.recordingHref) && (
        <>
          <AnchorHeading as="h2" id="materials">Materials</AnchorHeading>
          <ul>
            {spec.slidesHref && <li><a href={spec.slidesHref}>Slides (PDF)</a></li>}
            {spec.recordingHref && <li><a href={spec.recordingHref}>Recording</a></li>}
          </ul>
        </>
      )}

      {spec.readings?.length ? (
        <>
          <AnchorHeading as="h2" id="readings">Readings</AnchorHeading>
          <ul>
            {spec.readings.map((r, i) => (
              <li key={i}>
                {r.href ? <a href={r.href}>{r.title}</a> : r.title}
                {r.note && <> — {r.note}</>}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {spec.followups?.length ? (
        <>
          <AnchorHeading as="h2" id="followups">Follow-up questions</AnchorHeading>
          <ol>{spec.followups.map((f, i) => <li key={i}>{f}</li>)}</ol>
        </>
      ) : null}
    </>
  );
}
