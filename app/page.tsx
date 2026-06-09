import Link from "next/link";
import { courses } from "@/content/courses";

const REPO_URL = "https://github.com/hughgramel/coursemaker";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.66.8.55C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export default function Home() {
  const visibleCourses = courses.filter((c) => c.config.slug !== "cse457-26sp");

  return (
    <div className="min-h-screen bg-[var(--color-sidebar)]">
      <header className="border-b border-[var(--color-border)] bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-medium text-[var(--color-heading)]">coursemaker</div>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              Create a new course
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="text-[var(--color-heading)] hover:text-[var(--color-primary)]"
            >
              <GitHubIcon />
            </a>
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
            Courses ({visibleCourses.length})
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visibleCourses.map((c) => (
              <li key={c.config.slug}>
                <Link
                  href={`/c/${c.config.slug}`}
                  className="aspect-square flex flex-col justify-between bg-white border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
                >
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-2">
                      {c.config.term}
                    </div>
                    <div className="text-xl font-medium text-[var(--color-heading)] leading-snug">
                      {c.config.fullTitle}
                    </div>
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
      </main>
    </div>
  );
}
