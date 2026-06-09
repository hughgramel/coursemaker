#!/usr/bin/env node
/**
 * scripts/new-course.mjs
 *
 * Scaffold a new course under content/courses/<slug>/ and register it in
 * content/courses/index.tsx between the COURSEMAKER:REGISTRY_START and
 * COURSEMAKER:REGISTRY_END markers.
 *
 * Usage:
 *   pnpm new-course --slug cse455-26au --title "CSE 455" --full-title "CSE 455 – Computer Vision" --term "Autumn 2026"
 *
 * Flags:
 *   --slug         REQUIRED. URL slug, [a-z0-9-]+.
 *   --title        REQUIRED. Short title (sidebar).
 *   --full-title   REQUIRED. Full course name.
 *   --term         REQUIRED. Term label, e.g. "Autumn 2026".
 *   --description  Optional. Defaults to a generic blurb.
 *   --weeks        Optional. Number of instructional weeks (6-12, default 10).
 *                  Currently informational only — the generated home page is
 *                  empty by default; coursemaker-create populates it.
 *   --hero-image   Optional. Path or URL of the course hero (SVG preferred).
 *   --force        Overwrite the directory if it already exists.
 *
 * Designed to be called non-interactively by Claude Code or CI.
 */

import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const COURSES_DIR = join(REPO_ROOT, "content", "courses");
const REGISTRY_FILE = join(COURSES_DIR, "index.tsx");

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const k = a.slice(2);
    if (k === "force") { out.force = true; continue; }
    const v = argv[i + 1];
    if (v === undefined || v.startsWith("--")) { out[k] = true; continue; }
    out[k] = v;
    i++;
  }
  return out;
}

function fail(msg) {
  console.error(`new-course: ${msg}`);
  process.exit(1);
}

async function exists(path) {
  try { await access(path, constants.F_OK); return true; } catch { return false; }
}

function camelFromSlug(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

function esc(s) { return s.replace(/`/g, "\\`").replace(/\$/g, "\\$"); }

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const required = ["slug", "title", "full-title", "term"];
  for (const k of required) {
    if (!args[k] || typeof args[k] !== "string") fail(`missing required flag --${k}`);
  }
  const slug = args.slug;
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
    fail(`invalid --slug "${slug}". Use lowercase letters, digits, hyphens.`);
  }
  const title = args.title;
  const fullTitle = args["full-title"];
  const term = args.term;
  const description = args.description || `A course website for ${fullTitle} (${term}).`;
  const heroImage = args["hero-image"] || null;
  const weeks = args.weeks ? Number(args.weeks) : 10;
  if (Number.isNaN(weeks) || weeks < 6 || weeks > 12) {
    fail(`invalid --weeks "${args.weeks}". Must be an integer between 6 and 12.`);
  }

  const courseDir = join(COURSES_DIR, slug);
  if (await exists(courseDir) && !args.force) {
    fail(`directory already exists: ${courseDir}. Use --force to overwrite.`);
  }

  await mkdir(join(courseDir, "pages"), { recursive: true });

  const configTs = `import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "${slug}",
  title: ${JSON.stringify(title)},
  fullTitle: ${JSON.stringify(fullTitle)},
  term: ${JSON.stringify(term)},
  description: ${JSON.stringify(description)},
  ${heroImage
    ? `hero: { src: ${JSON.stringify(heroImage)}, alt: ${JSON.stringify(fullTitle)} },`
    : `hero: null,`}
  // Flat sidebar. NO children/dropdowns. Each parent links to a real
  // landing page. coursemaker-create generates the index pages in step 5b.
  navGroups: [
    {
      items: [
        { label: "Home",        href: "" },
        { label: "Syllabus",    href: "syllabus" },
        { label: "Lectures",    href: "lectures" },
        { label: "Sections",    href: "sections" },
        { label: "Assignments", href: "hw" },
        { label: "Readings",    href: "readings" },
        { label: "Tasks",       href: "tasks" },
        { label: "Staff",       href: "staff" },
      ],
    },
  ],
  footer: {
    lines: ["Built with coursemaker."],
  },
};
`;

  const homeTsx = `import { AnchorHeading } from "@/components/AnchorHeading";
import { WeekModule } from "@/components/WeekModule";
import { Hero } from "@/components/Hero";
import type { CourseModule } from "@/types/course";
import { config } from "../course.config";

const base = \`/c/\${config.slug}\`;

const weeks: CourseModule[] = [
  {
    title: "Week 1", size: "h2-small",
    entries: [
      { date: "TBD", notes: [{ kind: "text", text: "Replace me with real content." }] },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <div className="not-prose">
        <Hero hero={config.hero} legacyImage={config.heroImage} />
      </div>
      <AnchorHeading as="h1" id="${slug}" className="mb-2">
        ${esc(fullTitle)}
      </AnchorHeading>
      <p className="fs-6 fw-300">${esc(term)}</p>
      <p>
        ${esc(description)} View the <a href={\`\${base}/syllabus\`}>syllabus</a> for details.
      </p>

      <AnchorHeading as="h2" id="calendar">Calendar</AnchorHeading>
      {weeks.map((w) => <WeekModule key={w.title} module={w} />)}
    </>
  );
}

export const homeSearchBody =
  "${esc(fullTitle)} ${esc(term)} calendar";
`;

  const syllabusTsx = `import { AnchorHeading } from "@/components/AnchorHeading";

export function SyllabusPage() {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>
      <p>Course overview, grading, policies. Replace this stub with real text.</p>
    </>
  );
}

export const syllabusSearchBody = "Syllabus grading policies";
`;

  const indexTsx = `import type { Course } from "@/types/course";
import { config } from "./course.config";
import { HomePage, homeSearchBody } from "./pages/home";
import { SyllabusPage, syllabusSearchBody } from "./pages/syllabus";

export const course: Course = {
  config,
  pages: [
    { segments: [], title: "Home", searchBody: homeSearchBody, render: () => <HomePage /> },
    { segments: ["syllabus"], title: "Syllabus", searchBody: syllabusSearchBody, render: () => <SyllabusPage /> },
  ],
};
`;

  await writeFile(join(courseDir, "course.config.ts"), configTs, "utf8");
  await writeFile(join(courseDir, "pages", "home.tsx"), homeTsx, "utf8");
  await writeFile(join(courseDir, "pages", "syllabus.tsx"), syllabusTsx, "utf8");
  await writeFile(join(courseDir, "index.tsx"), indexTsx, "utf8");

  // Register in content/courses/index.tsx
  const varName = camelFromSlug(slug).replace(/[^A-Za-z0-9_]/g, "_");
  const registry = await readFile(REGISTRY_FILE, "utf8");
  if (registry.includes(`./${slug}`)) {
    console.log(`new-course: ${slug} already registered, skipping registry update.`);
  } else {
    const importLine = `import { course as ${varName} } from "./${slug}";`;
    const lastImportIdx = registry.lastIndexOf("import ");
    const eolAfter = registry.indexOf("\n", lastImportIdx);
    let updated = registry.slice(0, eolAfter + 1) + importLine + "\n" + registry.slice(eolAfter + 1);

    const startMarker = "// COURSEMAKER:REGISTRY_START";
    const endMarker = "// COURSEMAKER:REGISTRY_END";
    const startIdx = updated.indexOf(startMarker);
    const endIdx = updated.indexOf(endMarker);
    if (startIdx === -1 || endIdx === -1) {
      fail(`could not find registry markers in ${REGISTRY_FILE}.`);
    }
    const block = updated.slice(startIdx, endIdx);
    // Insert the new entry as the last array item, preserving trailing comma.
    const newBlock = block.replace(
      /(\];)\s*$/m,
      "" // strip
    );
    // Easier: find "]\;" inside the block and inject before it.
    const before = updated.slice(0, endIdx);
    const after = updated.slice(endIdx);
    const injected = before.replace(/(\n\];)\s*$/m, `  ${varName},\n];\n`);
    if (injected === before) {
      fail("could not inject new entry into courses array — check formatting of index.tsx.");
    }
    updated = injected + after;
    await writeFile(REGISTRY_FILE, updated, "utf8");
  }

  console.log(`\n✓ Created course "${slug}" (${weeks} weeks).`);
  console.log(`  • ${courseDir}`);
  console.log(`  • registered in ${REGISTRY_FILE}`);
  console.log(`\nNext:`);
  console.log(`  pnpm dev     # then open http://localhost:3000/c/${slug}`);
}

main().catch((err) => fail(err.stack || String(err)));
