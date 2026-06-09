import Link from "next/link";
import { courses } from "@/content/courses";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-sidebar)]">
      <header className="border-b border-[var(--color-border)] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-medium text-[var(--color-heading)]">coursemaker</div>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/design" className="text-[var(--color-primary)] hover:underline">
              Design library
            </Link>
            <Link href="/template" className="text-[var(--color-primary)] hover:underline">
              Create a new course
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-[var(--color-heading)] text-4xl font-light leading-tight mb-3">
          A creatable template for course websites.
        </h1>
        <p className="text-[var(--color-body)] text-lg max-w-2xl mb-10">
          Inspired by the{" "}
          <a
            className="text-[var(--color-primary)] hover:underline"
            href="https://courses.cs.washington.edu/courses/cse457/26sp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UW CSE 457
          </a>{" "}
          site (Just the Docs theme). Built data-first so you can scaffold a new
          course, drop in some pages, and ship.
        </p>

        <section>
          <h2 className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-3">
            Courses ({courses.length})
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((c) => (
              <li key={c.config.slug}>
                <Link
                  href={`/c/${c.config.slug}`}
                  className="block bg-white border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
                >
                  <div className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-1">
                    {c.config.term}
                  </div>
                  <div className="text-lg font-medium text-[var(--color-heading)] mb-1">
                    {c.config.fullTitle}
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">
                    {c.pages.length} page{c.pages.length === 1 ? "" : "s"} ·{" "}
                    {c.config.slug}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/design"
            className="block bg-white border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="text-base font-medium text-[var(--color-heading)] mb-1">
              Design library
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              Every component, color, type style and label variant on one page.
            </div>
          </Link>
          <Link
            href="/template"
            className="block bg-white border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="text-base font-medium text-[var(--color-heading)] mb-1">
              Create a new course
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              CLI scaffolder + step-by-step prompt for Claude Code to spin one up.
            </div>
          </Link>
          <a
            href="https://github.com"
            className="block bg-white border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-primary)] transition-colors"
          >
            <div className="text-base font-medium text-[var(--color-heading)] mb-1">
              Source
            </div>
            <div className="text-sm text-[var(--color-muted)]">
              All sources live in <code className="bg-[var(--color-sidebar)] px-1 rounded">content/courses/</code>.
            </div>
          </a>
        </section>
      </main>
    </div>
  );
}
