import Link from "next/link";

export default function TemplatePage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-6 h-[60px] flex items-center justify-between">
          <Link href="/" className="text-lg font-medium text-[var(--color-heading)] hover:text-[var(--color-primary)]">
            ← coursemaker
          </Link>
          <span className="text-sm text-[var(--color-muted)]">Create a new course</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 prose">
        <h1>Create a new course</h1>
        <p>
          Three ways, depending on whether you&rsquo;re a human, an LLM, or a CI
          pipeline. All three produce the same shape under{" "}
          <code>content/courses/&lt;slug&gt;/</code>.
        </p>

        <h2 id="cli">1. The CLI scaffolder</h2>
        <p>The fastest path — one command, fully non-interactive:</p>
        <pre><code>{`pnpm new-course \\
  --slug cse455-26au \\
  --title "CSE 455" \\
  --full-title "CSE 455 – Computer Vision" \\
  --term "Autumn 2026"`}</code></pre>
        <p>The script:</p>
        <ul>
          <li>creates <code>content/courses/&lt;slug&gt;/</code> with <code>course.config.ts</code>, <code>index.tsx</code>, and a few starter pages,</li>
          <li>registers the course inside <code>content/courses/index.tsx</code> using the <code>COURSEMAKER:REGISTRY</code> marker comments,</li>
          <li>refuses to clobber an existing slug (use <code>--force</code> to overwrite).</li>
        </ul>

        <h2 id="claude">2. Prompt for Claude Code</h2>
        <p>Paste this into Claude Code (or any agent that can run shell + write files):</p>
        <blockquote>
          <strong>Goal:</strong> add a new course to this coursemaker repo for
          <em> &lt;Course code&gt; — &lt;Course name&gt;, &lt;term&gt;</em>.
          <br />
          <strong>Steps:</strong>
          <ol>
            <li>Run <code>pnpm new-course --slug &lt;slug&gt; --title &quot;&lt;short&gt;&quot; --full-title &quot;&lt;full&gt;&quot; --term &quot;&lt;term&gt;&quot;</code>.</li>
            <li>Edit <code>content/courses/&lt;slug&gt;/course.config.ts</code> to set the nav, footer, and hero image.</li>
            <li>Edit <code>content/courses/&lt;slug&gt;/pages/home.tsx</code> — replace the placeholder weeks with real calendar entries (use the <code>WeekModule</code> primitive and <code>Label</code> variants).</li>
            <li>Add new pages as <code>content/courses/&lt;slug&gt;/pages/&lt;name&gt;.tsx</code> and register them in <code>index.tsx</code>.</li>
            <li>Run <code>pnpm build</code> to verify. Visit <code>/c/&lt;slug&gt;</code>.</li>
          </ol>
        </blockquote>

        <h2 id="by-hand">3. By hand</h2>
        <p>If you prefer to copy-paste:</p>
        <ol>
          <li>Duplicate <code>content/courses/cse457-26sp/</code> to <code>content/courses/&lt;your-slug&gt;/</code>.</li>
          <li>Edit <code>course.config.ts</code>: change <code>slug</code>, <code>title</code>, <code>fullTitle</code>, <code>term</code>, <code>navGroups</code>.</li>
          <li>Edit the <code>pages/</code> renderers.</li>
          <li>Import the new course in <code>content/courses/index.tsx</code> and append it to the <code>courses</code> array.</li>
        </ol>

        <h2 id="primitives">Primitives you have</h2>
        <ul>
          <li><code>AnchorHeading</code> — h1/h2/h3 with anchor link icon (see <Link href="/design#prose-elements">design library</Link>).</li>
          <li><code>WeekModule</code> — the calendar dt/dd primitive. Pass a <code>CourseModule</code>.</li>
          <li><code>Label</code> — purple/red/blue/green/yellow status pill.</li>
          <li><code>SearchBar</code> — wired automatically via <code>buildSearchDocs(course)</code>.</li>
          <li><code>Sidebar</code> — driven by <code>navGroups</code> in your config.</li>
        </ul>

        <p>
          See the <Link href="/design">design library</Link> for everything
          rendered in isolation, and <Link href="/c/cse457-26sp">CSE 457</Link>{" "}
          for a full reference course.
        </p>
      </main>
    </div>
  );
}
