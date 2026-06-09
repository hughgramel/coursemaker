import type { ReactNode } from "react";
import { AnchorHeading } from "./AnchorHeading";

/**
 * Reading primitives — render the canonical 6-section reading shape
 * (Title + kicker → Framing → Body → Worked example → Exercises → Takeaways
 * → Bibliography) inside the existing .prose layout. No PDF pipeline; this
 * IS the reading.
 *
 * The outer <div className="reading-prose"> swaps the body to a serif at a
 * narrower measure, drops all "card" chrome, and uses typographic conventions
 * (Abstract. run-in, hanging "Exercise N." labels, hairline bibliography rule)
 * instead of UI boxes. See `app/globals.css` for the rules.
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
    <div className="reading-prose">
      <AnchorHeading as="h1" id={id}>
        {title}
      </AnchorHeading>
      {kicker && <p className="reading-kicker">{kicker}</p>}
      {children}
    </div>
  );
}

/** "Abstract."-style framing block. Italic, run-in label, no box. */
export function ReadingFraming({ children }: { children: ReactNode }) {
  return <div className="reading-framing">{children}</div>;
}

/** Hanging "Exercise N." run-in label, italic body. No card. */
export function Exercise({
  n,
  children,
}: {
  n: number;
  children: ReactNode;
}) {
  return (
    <div className="exercise">
      <span className="exercise-label">Exercise {n}</span>
      <span className="exercise-body">{children}</span>
    </div>
  );
}

/** Plain italic ordered list. */
export function Takeaways({ children }: { children: ReactNode }) {
  return (
    <>
      <AnchorHeading as="h2" id="takeaways">Take-aways</AnchorHeading>
      <ol className="takeaways">{children}</ol>
    </>
  );
}

/** Hairline-rule bibliography. Hanging-indent references. */
export function Bibliography({ children }: { children: ReactNode }) {
  return (
    <div className="bibliography">
      <h2 id="bibliography">Further reading</h2>
      {children}
    </div>
  );
}

/** Inline aside / definition. Hairline left rule, no fill. */
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
    <div className={`callout callout-${variant}`}>
      {title && <span className="callout-title">{title}</span>}
      <span className="callout-body">{children}</span>
    </div>
  );
}
