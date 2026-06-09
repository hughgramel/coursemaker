import type { ReactNode } from "react";
import { AnchorHeading } from "./AnchorHeading";

/**
 * Reading primitives — render the canonical 6-section reading shape
 * (Title + kicker → Framing → Body → Worked example → Exercises → Takeaways
 * → Bibliography) inside the existing .prose layout. No PDF pipeline; this
 * IS the reading.
 *
 * Authors use these as JSX wrappers and write everything else as standard
 * prose with <AnchorHeading>, <p>, <ul>, code blocks, etc.
 */

export function ReadingPage({
  title,
  id,
  kicker,
  children,
}: {
  title: string;
  id: string;
  kicker?: string;
  children: ReactNode;
}) {
  return (
    <>
      <AnchorHeading as="h1" id={id}>
        {title}
      </AnchorHeading>
      {kicker && <p className="reading-kicker">{kicker}</p>}
      {children}
    </>
  );
}

/** Highlighted "what this reading covers" framing block. */
export function ReadingFraming({ children }: { children: ReactNode }) {
  return <div className="reading-framing">{children}</div>;
}

/** Numbered exercise block. Won't break across a viewport. */
export function Exercise({
  n,
  children,
}: {
  n: number;
  children: ReactNode;
}) {
  return (
    <div className="exercise not-prose">
      <div className="exercise-label">Exercise {n}</div>
      <div className="exercise-body prose">{children}</div>
    </div>
  );
}

/** End-of-reading "Take-aways" — numbered emphasis list. */
export function Takeaways({ children }: { children: ReactNode }) {
  return (
    <>
      <AnchorHeading as="h2" id="takeaways">Take-aways</AnchorHeading>
      <ol className="takeaways">{children}</ol>
    </>
  );
}

/** Optional bibliography — formal references at the end. */
export function Bibliography({ children }: { children: ReactNode }) {
  return (
    <div className="bibliography">
      <AnchorHeading as="h2" id="bibliography">Further reading</AnchorHeading>
      {children}
    </div>
  );
}

/** Inline aside / callout — for definitions, asides, gotchas. */
export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: "note" | "warn";
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className={`callout callout-${variant} not-prose`}>
      {title && <div className="callout-title">{title}</div>}
      <div className="callout-body prose">{children}</div>
    </div>
  );
}
