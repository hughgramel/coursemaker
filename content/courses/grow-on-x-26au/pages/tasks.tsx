"use client";

import { useEffect, useState } from "react";
import { AnchorHeading } from "@/components/AnchorHeading";
import { config } from "../course.config";

const base = `/c/${config.slug}`;
const STORAGE_KEY = `coursemaker:${config.slug}:tasks-v1`;

type Task = { id: string; label: string; href: string };
type Group = { kind: "Reading" | "Slides" | "Section" | "Assignments"; tasks: Task[] };
type Week = { n: number; title: string; groups: Group[] };

const weeks: Week[] = [
  {
    n: 1,
    title: "Foundations",
    groups: [
      { kind: "Reading", tasks: [
        { id: "wk01-reading", label: "Read Week 1 — Funnel, niche, bio", href: `${base}/readings/wk01` },
      ]},
      { kind: "Slides", tasks: [
        { id: "wk01-slides-l1", label: "Review slides — Lecture 1: The follower funnel", href: `${base}/slides/wk01-l1.pdf` },
        { id: "wk01-slides-l2", label: "Review slides — Lecture 2: Niche, voice, and bio craft", href: `${base}/slides/wk01-l2.pdf` },
      ]},
      { kind: "Section", tasks: [
        { id: "wk01-section", label: "Complete section — Audit five accounts in your niche", href: `${base}/sections/wk01` },
      ]},
      { kind: "Assignments", tasks: [
        { id: "wk01-hw1-start", label: "Start HW1 — Define your niche and rewrite your bio", href: `${base}/hw/1` },
      ]},
    ],
  },
  {
    n: 2,
    title: "Core mechanics: writing",
    groups: [
      { kind: "Reading", tasks: [
        { id: "wk02-reading", label: "Read Week 2 — Hooks and formats", href: `${base}/readings/wk02` },
      ]},
      { kind: "Slides", tasks: [
        { id: "wk02-slides-l1", label: "Review slides — Lecture 1: Anatomy of a hook", href: `${base}/slides/wk02-l1.pdf` },
        { id: "wk02-slides-l2", label: "Review slides — Lecture 2: Post formats and when each wins", href: `${base}/slides/wk02-l2.pdf` },
      ]},
      { kind: "Section", tasks: [
        { id: "wk02-section", label: "Complete section — Hook lab (twenty hooks)", href: `${base}/sections/wk02` },
      ]},
      { kind: "Assignments", tasks: [
        { id: "wk02-hw1-submit", label: "Submit HW1 — Niche and bio rewrite", href: `${base}/hw/1` },
        { id: "wk02-hw2-start",  label: "Start HW2 — Ship twenty posts in seven days", href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 3,
    title: "Core mechanics: distribution",
    groups: [
      { kind: "Reading", tasks: [
        { id: "wk03-reading", label: "Read Week 3 — The algorithm and the reply game", href: `${base}/readings/wk03` },
      ]},
      { kind: "Slides", tasks: [
        { id: "wk03-slides-l1", label: "Review slides — Lecture 1: How posts spread on X", href: `${base}/slides/wk03-l1.pdf` },
        { id: "wk03-slides-l2", label: "Review slides — Lecture 2: The reply game and reaching out first", href: `${base}/slides/wk03-l2.pdf` },
      ]},
      { kind: "Section", tasks: [
        { id: "wk03-section", label: "Complete section — Reply sprint (10 replies + 5 DMs)", href: `${base}/sections/wk03` },
      ]},
      { kind: "Assignments", tasks: [
        { id: "wk03-hw2-submit", label: "Submit HW2 — Twenty posts in seven days", href: `${base}/hw/2` },
      ]},
    ],
  },
  {
    n: 4,
    title: "Composition",
    groups: [
      { kind: "Reading", tasks: [
        { id: "wk04-reading", label: "Read Week 4 — The weekly system", href: `${base}/readings/wk04` },
      ]},
      { kind: "Slides", tasks: [
        { id: "wk04-slides-l1", label: "Review slides — Lecture 1: Content calendars and batching", href: `${base}/slides/wk04-l1.pdf` },
        { id: "wk04-slides-l2", label: "Review slides — Lecture 2: Collaboration and the network", href: `${base}/slides/wk04-l2.pdf` },
      ]},
      { kind: "Section", tasks: [
        { id: "wk04-section", label: "Complete section — Build your weekly system", href: `${base}/sections/wk04` },
      ]},
      { kind: "Assignments", tasks: [
        { id: "wk04-hw3-start",      label: "Start HW3 — Run your weekly system for two weeks", href: `${base}/hw/3` },
        { id: "wk04-capstone-start", label: "Start Capstone — 90-day playbook (early scaffolding)", href: `${base}/hw/capstone` },
      ]},
    ],
  },
  {
    n: 5,
    title: "Frontier: analytics",
    groups: [
      { kind: "Reading", tasks: [
        { id: "wk05-reading", label: "Read Week 5 — Analytics and iteration", href: `${base}/readings/wk05` },
      ]},
      { kind: "Slides", tasks: [
        { id: "wk05-slides-l1", label: "Review slides — Lecture 1: What to measure", href: `${base}/slides/wk05-l1.pdf` },
        { id: "wk05-slides-l2", label: "Review slides — Lecture 2: Testing and iterating", href: `${base}/slides/wk05-l2.pdf` },
      ]},
      { kind: "Section", tasks: [
        { id: "wk05-section", label: "Complete section — Read your analytics (classify top 10 posts)", href: `${base}/sections/wk05` },
      ]},
      { kind: "Assignments", tasks: [
        { id: "wk05-hw3-submit", label: "Submit HW3 — Weekly system run", href: `${base}/hw/3` },
        { id: "wk05-hw4-start",  label: "Start HW4 — Your thirty-day growth experiment", href: `${base}/hw/4` },
      ]},
    ],
  },
  {
    n: 6,
    title: "Synthesis",
    groups: [
      { kind: "Reading", tasks: [
        { id: "wk06-reading", label: "Read Week 6 — The 90-day playbook", href: `${base}/readings/wk06` },
      ]},
      { kind: "Slides", tasks: [
        { id: "wk06-slides-l1", label: "Review slides — Lecture 1: The 10k roadmap", href: `${base}/slides/wk06-l1.pdf` },
        { id: "wk06-slides-l2", label: "Review slides — Lecture 2: Sustainable growth and life after 10k", href: `${base}/slides/wk06-l2.pdf` },
      ]},
      { kind: "Section", tasks: [
        { id: "wk06-section", label: "Present at section — Capstone demo day", href: `${base}/sections/wk06` },
      ]},
      { kind: "Assignments", tasks: [
        { id: "wk06-hw4-submit",      label: "Submit HW4 — Design and week-1 data", href: `${base}/hw/4` },
        { id: "wk06-capstone-submit", label: "Submit Capstone — 90-day playbook", href: `${base}/hw/capstone` },
      ]},
    ],
  },
];

const allTasks = weeks.flatMap((w) => w.groups.flatMap((g) => g.tasks));

export function TasksPage() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const arr = JSON.parse(raw) as unknown;
        if (Array.isArray(arr)) {
          setDone(new Set(arr.filter((x): x is string => typeof x === "string")));
        }
      }
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(done)));
    } catch {
      /* ignore */
    }
  }, [done, mounted]);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const reset = () => {
    if (window.confirm("Reset all task progress? This cannot be undone.")) {
      setDone(new Set());
    }
  };

  const completeCount = allTasks.filter((t) => done.has(t.id)).length;
  const totalCount = allTasks.length;
  const pct = mounted && totalCount > 0 ? Math.round((completeCount / totalCount) * 100) : 0;

  return (
    <>
      <AnchorHeading as="h1" id="tasks">Tasks</AnchorHeading>
      <p className="fs-6 fw-300">
        {mounted ? `${completeCount} of ${totalCount} complete (${pct}%)` : `${totalCount} tasks total`}
      </p>
      <p>
        Track your progress through the course. Tick off each reading, slide deck, section, and
        assignment as you finish it. Progress saves in your browser&rsquo;s local storage on this
        device. Use <button
          type="button"
          onClick={reset}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            color: "var(--color-primary)",
            cursor: "pointer",
            textDecoration: "underline",
            font: "inherit",
          }}
        >reset all</button> to start over.
      </p>

      {mounted && totalCount > 0 && (
        <div
          aria-label={`Progress: ${pct} percent`}
          style={{
            width: "100%",
            height: "8px",
            background: "var(--color-primary-tint)",
            borderRadius: "4px",
            overflow: "hidden",
            margin: "0.5rem 0 1.5rem",
          }}
        >
          <div
            style={{
              width: `${pct}%`,
              height: "100%",
              background: "var(--color-primary)",
              transition: "width 0.2s",
            }}
          />
        </div>
      )}

      {weeks.map((w) => {
        const wkTotal = w.groups.flatMap((g) => g.tasks).length;
        const wkDone = w.groups.flatMap((g) => g.tasks).filter((t) => done.has(t.id)).length;
        const wkComplete = mounted && wkDone === wkTotal;
        return (
          <section
            key={w.n}
            style={{
              opacity: wkComplete ? 0.55 : 1,
              transition: "opacity 0.2s",
            }}
          >
            <AnchorHeading as="h2" id={`week-${w.n}`}>
              Week {w.n} — {w.title} {mounted && <span className="fs-6 fw-300">({wkDone}/{wkTotal})</span>}
            </AnchorHeading>
            {w.groups.map((g) => (
              <div key={g.kind}>
                <AnchorHeading as="h3" id={`week-${w.n}-${g.kind.toLowerCase()}`}>
                  {g.kind}
                </AnchorHeading>
                <ul className="not-prose" style={{ listStyle: "none", paddingLeft: 0, marginTop: "0.25rem" }}>
                  {g.tasks.map((t) => {
                    const isDone = mounted && done.has(t.id);
                    const isExternal = t.href.endsWith(".pdf");
                    return (
                      <li
                        key={t.id}
                        style={{
                          padding: "0.4rem 0",
                          borderBottom: "1px solid var(--color-border, #e5e7eb)",
                          opacity: isDone ? 0.4 : 1,
                          transition: "opacity 0.15s",
                        }}
                      >
                        <label
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            cursor: "pointer",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={isDone}
                            onChange={() => toggle(t.id)}
                            style={{ flex: "0 0 auto", width: "16px", height: "16px", cursor: "pointer" }}
                          />
                          <a
                            href={t.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            style={{
                              textDecoration: isDone ? "line-through" : "none",
                              color: "inherit",
                            }}
                          >
                            {t.label}
                          </a>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </section>
        );
      })}
    </>
  );
}

export const tasksPageSearchBody =
  "Tasks checklist track progress reading slides section assignments local storage Week 1 2 3 4 5 6";
