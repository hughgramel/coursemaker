#!/usr/bin/env node
/**
 * scripts/build-slides.mjs
 *
 * Render every Marp deck under content/courses/<slug>/slides/*.md into a
 * matching PDF, written to public/c/<slug>/slides/<name>.pdf so the course
 * pages can link to it as /c/<slug>/slides/<name>.pdf.
 *
 * Usage:
 *   pnpm slides                        # build every course's slides
 *   pnpm slides cse457-26sp            # only one course
 *   pnpm slides cse457-26sp wk01       # only one deck (matches by filename prefix)
 *
 * Requires marp-cli, fetched via pnpm dlx the first time (cached afterwards).
 */
import { readdir, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import process from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const COURSES = join(REPO_ROOT, "content", "courses");
const PUBLIC = join(REPO_ROOT, "public");
const THEME = join(REPO_ROOT, "themes", "coursemaker.css");

async function listCourses() {
  const entries = await readdir(COURSES, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function listDecks(courseSlug) {
  const dir = join(COURSES, courseSlug, "slides");
  if (!existsSync(dir)) return [];
  return (await readdir(dir)).filter((f) => f.endsWith(".md"));
}

function buildOne(srcPath, outPath) {
  console.log(`→ ${basename(srcPath)} → ${outPath.replace(REPO_ROOT + "/", "")}`);
  const res = spawnSync("pnpm", [
    "dlx", "@marp-team/marp-cli@latest",
    "--theme", THEME,
    "--allow-local-files",
    "--html",
    "--pdf",
    "-o", outPath,
    srcPath,
  ], { stdio: "inherit", cwd: REPO_ROOT });
  if (res.status !== 0) {
    console.error(`✖ marp failed for ${srcPath}`);
    process.exit(res.status ?? 1);
  }
}

async function main() {
  const [filterCourse, filterDeck] = process.argv.slice(2);
  const courses = filterCourse ? [filterCourse] : await listCourses();
  for (const slug of courses) {
    const decks = await listDecks(slug);
    if (!decks.length) {
      console.log(`(${slug}: no decks)`);
      continue;
    }
    for (const deck of decks) {
      if (filterDeck && !deck.startsWith(filterDeck)) continue;
      const src = join(COURSES, slug, "slides", deck);
      const outDir = join(PUBLIC, "c", slug, "slides");
      await mkdir(outDir, { recursive: true });
      const out = join(outDir, basename(deck, extname(deck)) + ".pdf");
      buildOne(src, out);
    }
  }
  console.log("✓ done");
}

main().catch((err) => { console.error(err); process.exit(1); });
