import Link from "next/link";
import { AnchorHeading } from "@/components/AnchorHeading";
import { Label } from "@/components/Label";
import { WeekModule } from "@/components/WeekModule";
import { LinkIcon, SearchIcon, MenuIcon, ChevronRightIcon, DocIcon, CloseIcon, ExternalIcon } from "@/components/icons";

const tokens = [
  { name: "--color-primary", value: "#7253ed", note: "Brand purple — links, active nav, icons." },
  { name: "--color-primary-strong", value: "#5739ce", note: "Button base / gradient bottom stop." },
  { name: "--color-primary-tint", value: "rgba(114,83,237,0.08)", note: "Hover backgrounds." },
  { name: "--color-heading", value: "#27262b", note: "Heading text." },
  { name: "--color-body", value: "#5c5962", note: "Body text." },
  { name: "--color-muted", value: "#706e71", note: "Footer / secondary text." },
  { name: "--color-faint", value: "#959396", note: "Icons / placeholder text." },
  { name: "--color-sidebar", value: "#f5f6fa", note: "Sidebar background, code blocks." },
  { name: "--color-border", value: "#eeebee", note: "Dividers, table cell borders." },
  { name: "--color-red-1", value: "#d93c3c", note: "Due date labels." },
  { name: "--color-blue-1", value: "#2869e6", note: "Lab labels (Fab, VR)." },
  { name: "--color-green-1", value: "#10ac7d", note: "Status: ready / success." },
];

const typeSamples = [
  { class: "text-alpha", label: "Alpha — 36px (h1)", text: "Introduction to Computer Graphics" },
  { class: "text-beta", label: "Beta — 24px (h2)", text: "Calendar" },
  { class: "text-gamma", label: "Gamma — 18px (h3)", text: "Lecture Material" },
  { class: "text-delta", label: "Delta — 12px (h4)", text: "WEEK 1 OVERVIEW" },
];

export default function DesignLibraryPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-[var(--color-heading)] hover:text-[var(--color-primary)]">
            ← coursemaker
          </Link>
          <span className="text-sm text-[var(--color-muted)]">Design library</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 prose">
        <AnchorHeading as="h1" id="design-library">Design library</AnchorHeading>
        <p>
          Every token, type style and component used across the coursemaker
          template. Modeled after the &ldquo;Just the Docs&rdquo; Jekyll theme used
          by the original CSE 457 site.
        </p>

        <AnchorHeading as="h2" id="color-tokens">Color tokens</AnchorHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 not-prose">
          {tokens.map((t) => (
            <div key={t.name} className="flex items-center gap-3 border border-[var(--color-border)] rounded-md p-3 bg-white">
              <div
                className="w-12 h-12 rounded-md border border-[var(--color-border)] shrink-0"
                style={{ background: t.value }}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="font-mono text-xs text-[var(--color-heading)] truncate">{t.name}</div>
                <div className="font-mono text-xs text-[var(--color-muted)]">{t.value}</div>
                <div className="text-xs text-[var(--color-muted)] mt-0.5">{t.note}</div>
              </div>
            </div>
          ))}
        </div>

        <AnchorHeading as="h2" id="typography">Typography</AnchorHeading>
        <div className="not-prose space-y-4 border border-[var(--color-border)] rounded-md p-5 bg-white">
          {typeSamples.map((s) => (
            <div key={s.class} className="flex items-baseline gap-6">
              <div className="font-mono text-xs text-[var(--color-faint)] w-44 shrink-0">{s.label}</div>
              <div className={s.class} style={{ color: "var(--color-heading)" }}>{s.text}</div>
            </div>
          ))}
          <div className="flex items-baseline gap-6">
            <div className="font-mono text-xs text-[var(--color-faint)] w-44 shrink-0">Body — 16px</div>
            <p className="m-0">Lectures are pre-recorded; in-person sessions are Q&amp;A only.</p>
          </div>
        </div>

        <AnchorHeading as="h2" id="labels">Labels</AnchorHeading>
        <p>Compact status pills with a vertical gradient — used inline next to dates.</p>
        <div className="not-prose flex flex-wrap items-center gap-2 border border-[var(--color-border)] rounded-md p-5 bg-white">
          <Label variant="purple">P1 out</Label>
          <Label variant="red">P1 Due</Label>
          <Label variant="blue">Fab Lab</Label>
          <Label variant="green">Submitted</Label>
          <Label variant="yellow">Optional</Label>
        </div>

        <AnchorHeading as="h2" id="buttons">Buttons</AnchorHeading>
        <div className="not-prose flex flex-wrap items-center gap-3 border border-[var(--color-border)] rounded-md p-5 bg-white">
          <button type="button" className="btn">Default</button>
          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="btn btn-blue">Blue</button>
          <button type="button" className="btn btn-green">Green</button>
        </div>

        <AnchorHeading as="h2" id="icons">Icons</AnchorHeading>
        <div className="not-prose grid grid-cols-2 md:grid-cols-4 gap-3 border border-[var(--color-border)] rounded-md p-5 bg-white">
          {[
            { name: "LinkIcon", el: <LinkIcon /> },
            { name: "SearchIcon", el: <SearchIcon /> },
            { name: "MenuIcon", el: <MenuIcon /> },
            { name: "ChevronRightIcon", el: <ChevronRightIcon /> },
            { name: "DocIcon", el: <DocIcon /> },
            { name: "CloseIcon", el: <CloseIcon /> },
            { name: "ExternalIcon", el: <ExternalIcon /> },
          ].map((i) => (
            <div key={i.name} className="flex items-center gap-2 text-sm text-[var(--color-body)]">
              <span className="w-8 h-8 inline-flex items-center justify-center bg-[var(--color-sidebar)] rounded">
                {i.el}
              </span>
              <code className="text-xs">{i.name}</code>
            </div>
          ))}
        </div>

        <AnchorHeading as="h2" id="prose-elements">Prose elements</AnchorHeading>
        <p>
          The <code>.prose</code> wrapper sets up the canonical heading scale,
          link underline, code style, blockquote, table and list.
        </p>
        <h3 id="example-h3">A third-level heading</h3>
        <p>
          A paragraph with <a href="#">a link</a>, some <code>inline code</code>,
          and <strong>bold emphasis</strong>. Hover the heading anchors to see
          the link icon fade in.
        </p>
        <blockquote>
          This is a blockquote. Used for callouts, warnings, and editor notes
          inside course content.
        </blockquote>
        <table>
          <thead><tr><th>Component</th><th>Weight</th></tr></thead>
          <tbody>
            <tr><td>Project 1</td><td>10%</td></tr>
            <tr><td>Project 2</td><td>15%</td></tr>
            <tr><td>Project 5 Artifact</td><td>30%</td></tr>
          </tbody>
        </table>

        <AnchorHeading as="h2" id="week-module">Week module</AnchorHeading>
        <p>
          The calendar primitive — a definition list rendered as a date / event
          grid, with labels mixed inline.
        </p>
        <WeekModule
          module={{
            title: "Week 4 (example)",
            size: "h2-small",
            id: "week-example",
            entries: [
              {
                date: "Apr 21",
                notes: [
                  { kind: "row", items: [
                    { kind: "link", text: "Ray Tracing 1", href: "#" },
                    { kind: "link", text: "Ray Tracing 2", href: "#" },
                  ]},
                  { kind: "row", items: [
                    { kind: "label", text: "P2 Due", variant: "red" },
                    { kind: "label", text: "P3 out", variant: "purple" },
                  ]},
                ],
              },
              { date: "Apr 23", notes: [{ kind: "text", text: "Q&A" }] },
            ],
          }}
        />

        <AnchorHeading as="h2" id="hero">Hero art</AnchorHeading>
        <p>
          Each course owns a single piece of static hero art (usually an SVG)
          stored under <code>content/courses/&lt;slug&gt;/</code> and referenced
          from its <code>course.config.ts</code>. The <code>coursemaker-create</code>{" "}
          skill commissions or generates one as part of new-course setup.
        </p>

        <AnchorHeading as="h2" id="sidebar">Sidebar</AnchorHeading>
        <p>
          The sidebar is its own component (see <code>components/Sidebar.tsx</code>).
          Open a course to view it live: <Link href="/c/cse457-26sp">CSE 457</Link>.
        </p>
      </main>
    </div>
  );
}
