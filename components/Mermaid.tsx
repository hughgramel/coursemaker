"use client";

import { useEffect, useId, useRef, useState } from "react";

/**
 * <Mermaid> — client-side renderer for Mermaid diagrams.
 * Lazy-loads the ~1.5MB mermaid bundle on mount so it never blocks SSR.
 *
 * Usage in a reading or lecture page:
 *
 *   <Mermaid chart={`
 *     flowchart LR
 *       A[Input] --> B{Decide}
 *       B -->|yes| C[Render]
 *       B -->|no| D[Drop]
 *   `} />
 *
 * Themed to match the coursemaker palette (purple primary, faint grey
 * borders, system-ui font). Errors render inline as a code block.
 */
export function Mermaid({ chart, alt }: { chart: string; alt?: string }) {
  const id = useId();
  const safeId = "mermaid-" + id.replace(/[^a-zA-Z0-9_-]/g, "");
  const ref = useRef<HTMLDivElement | null>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const mermaidModule = await import("mermaid");
        const mermaid = mermaidModule.default;
        mermaid.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            fontFamily:
              'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: "14px",
            primaryColor: "#f5f6fa",
            primaryTextColor: "#27262b",
            primaryBorderColor: "#5739ce",
            lineColor: "#959396",
            secondaryColor: "#ffffff",
            tertiaryColor: "#ffffff",
            edgeLabelBackground: "#ffffff",
          },
          flowchart: { htmlLabels: true, curve: "basis" },
          sequence: { actorMargin: 50 },
        });
        const { svg: rendered } = await mermaid.render(safeId, chart.trim());
        if (!cancelled) setSvg(rendered);
      } catch (e) {
        if (!cancelled) setErr(e instanceof Error ? e.message : String(e));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [chart, safeId]);

  if (err) {
    return (
      <pre
        className="not-prose"
        style={{
          background: "#fef2f2",
          border: "1px solid #d93c3c",
          padding: "0.75rem 1rem",
          fontSize: "0.85em",
          borderRadius: "6px",
          color: "#7f1d1d",
          whiteSpace: "pre-wrap",
        }}
      >
        {`Mermaid render failed:\n${err}\n\n${chart}`}
      </pre>
    );
  }

  if (!svg) {
    return (
      <div
        ref={ref}
        className="not-prose"
        role="img"
        aria-label={alt ?? "Loading diagram"}
        style={{
          minHeight: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--color-faint)",
          fontSize: "0.85em",
          fontFamily:
            'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
        }}
      >
        Loading diagram…
      </div>
    );
  }

  return (
    <figure
      className="not-prose mermaid-figure"
      role="img"
      aria-label={alt ?? "Diagram"}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
