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

const HIDDEN_FROM_GRID = new Set(["cse457-26sp", "template"]);

export default function Home() {
  const visibleCourses = courses.filter((c) => !HIDDEN_FROM_GRID.has(c.config.slug));

  return (
    <div className="min-h-screen bg-[var(--color-sidebar)]">
      <header className="border-b border-[var(--color-border)] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <div className="text-xl font-medium text-[var(--color-heading)]">coursemaker</div>
          <nav className="flex items-center gap-4 sm:gap-6 text-sm">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              <span className="hidden sm:inline">Create a new course</span>
              <span className="sm:hidden">New course</span>
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

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-[var(--color-heading)] text-3xl sm:text-4xl font-light leading-tight mb-8 sm:mb-10">
          A creatable template for course websites.
        </h1>

        <section>
          <h2 className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-3">
            Courses ({visibleCourses.length})
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {visibleCourses.map((c) => (
              <li key={c.config.slug}>
                <Link
                  href={`/c/${c.config.slug}`}
                  className="h-full block bg-white border border-[var(--color-border)] rounded-lg p-5 hover:border-[var(--color-primary)] hover:shadow-sm transition-all"
                >
                  <div className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-1.5">
                    {c.config.term}
                  </div>
                  <div className="text-base font-medium text-[var(--color-heading)] leading-snug mb-2">
                    {c.config.fullTitle}
                  </div>
                  <div className="text-sm text-[var(--color-muted)]">
                    {c.config.weeks ? `${c.config.weeks}-week course` : `${c.pages.length} pages`}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-10 text-sm text-[var(--color-muted)]">
          See the{" "}
          <Link href="/c/template" className="text-[var(--color-primary)] hover:underline">
            sample course
          </Link>{" "}
          for a fully populated example of every page type.
        </p>

        <section className="mt-16 pt-10 border-t border-[var(--color-border)]">
          <h2 className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-3">
            Build your own course
          </h2>
          <p className="text-base text-[var(--color-heading)] font-light leading-snug mb-6 max-w-2xl">
            Generate a full course site (curriculum, ~20 lectures, ~10 readings, slide decks, assignments)
            from a one-line topic prompt. Runs as a Claude Code skill.
          </p>

          <ol className="space-y-6 text-sm text-[var(--color-body)] max-w-2xl">
            <li>
              <div className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-1.5">
                Step 1, prerequisites
              </div>
              <p className="leading-relaxed">
                Install{" "}
                <a
                  href="https://claude.com/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  Claude Code
                </a>{" "}
                and clone this repo (or your own fork). You will need Node.js 22+ and pnpm.
              </p>
              <pre className="mt-2 bg-white border border-[var(--color-border)] rounded p-3 overflow-x-auto text-[13px] leading-snug">
{`git clone https://github.com/hughgramel/coursemaker
cd coursemaker
pnpm install`}
              </pre>
            </li>

            <li>
              <div className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-1.5">
                Step 2, install the skill
              </div>
              <p className="leading-relaxed">
                The skill ships with this repo, but you can also install it into any other workspace via{" "}
                <a
                  href="https://skills.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  skills.sh
                </a>
                :
              </p>
              <pre className="mt-2 bg-white border border-[var(--color-border)] rounded p-3 overflow-x-auto text-[13px] leading-snug">
{`npx skills add hughgramel/coursemaker`}
              </pre>
              <p className="leading-relaxed mt-2 text-[var(--color-muted)]">
                Adds it to <code className="text-[12px] bg-white px-1 py-0.5 rounded border border-[var(--color-border)]">.claude/skills/coursemaker-create/</code>.
              </p>
            </li>

            <li>
              <div className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-1.5">
                Step 3, run the skill
              </div>
              <p className="leading-relaxed">
                Open Claude Code at the repo root and run the slash command with your topic.
                Example prompts:
              </p>
              <pre className="mt-2 bg-white border border-[var(--color-border)] rounded p-3 overflow-x-auto text-[13px] leading-snug">
{`/coursemaker-create cryptography for undergrads
/coursemaker-create modern web performance, 10 weeks
/coursemaker-create history of jazz harmony`}
              </pre>
              <p className="leading-relaxed mt-2 text-[var(--color-muted)]">
                The skill asks 2-3 clarifying questions (audience, length, emphasis), proposes a
                curriculum graph for sign-off, runs a source pass, then fans out subagents to write
                every lecture, reading, section, slide deck, and assignment in parallel. End to end
                takes 20-40 minutes.
              </p>
            </li>

            <li>
              <div className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-1.5">
                Step 4, preview and ship
              </div>
              <pre className="mt-2 bg-white border border-[var(--color-border)] rounded p-3 overflow-x-auto text-[13px] leading-snug">
{`pnpm dev   # http://localhost:3000/c/<your-course-slug>
pnpm build # static export
vercel     # deploy`}
              </pre>
            </li>
          </ol>

          <p className="mt-8 text-sm text-[var(--color-muted)] max-w-2xl leading-relaxed">
            Full skill docs live in{" "}
            <a
              href={`${REPO_URL}/blob/main/.claude/skills/coursemaker-create/SKILL.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              <code className="text-[12px]">.claude/skills/coursemaker-create/SKILL.md</code>
            </a>
            . Two companion skills (
            <a
              href={`${REPO_URL}/blob/main/.claude/skills/coursemaker-readings/SKILL.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >coursemaker-readings</a>
            ,{" "}
            <a
              href={`${REPO_URL}/blob/main/.claude/skills/coursemaker-slides/SKILL.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >coursemaker-slides</a>
            ) ship in the same repo and are invoked by the master skill automatically.
          </p>
        </section>
      </main>
    </div>
  );
}
