import type { CourseModule, ModuleNote } from "@/types/course";
import { AnchorHeading, slugify } from "./AnchorHeading";
import { Label } from "./Label";
import { cn } from "@/lib/cn";

function renderNote(note: ModuleNote, key: number): React.ReactNode {
  if (note.kind === "text") return <span key={key}>{note.text}</span>;
  if (note.kind === "link") {
    return (
      <a key={key} href={note.href} target={note.href.startsWith("http") ? "_blank" : undefined}
        rel={note.href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {note.text}
      </a>
    );
  }
  if (note.kind === "label") {
    return <Label key={key} variant={note.variant}>{note.text}</Label>;
  }
  if (note.kind === "row") {
    return (
      <span key={key}>
        {note.items.map((sub, i) => (
          <span key={i}>
            {i > 0 && (sub.kind === "label" || note.items[i - 1].kind === "label" ? " " : ", ")}
            {renderNote(sub, i)}
          </span>
        ))}
      </span>
    );
  }
  return null;
}

export function WeekModule({ module: m }: { module: CourseModule }) {
  const id = m.id ?? slugify(m.title);
  const headingClass =
    m.size === "h2-small" ? "fs-4" : m.size === "h3" ? "text-gamma" : "";

  return (
    <>
      <AnchorHeading as={m.size === "h3" ? "h3" : "h2"} id={id} className={cn(headingClass)}>
        {m.title}
      </AnchorHeading>
      <div className="module">
        <dl>
          {m.entries.flatMap((entry, i) => [
            <dt key={`dt-${i}`}>{entry.date}</dt>,
            ...entry.notes.map((note, j) => (
              <dd key={`dd-${i}-${j}`}>{renderNote(note, j)}</dd>
            )),
          ])}
        </dl>
      </div>
    </>
  );
}
