#!/usr/bin/env node
/**
 * scripts/build-readings.mjs
 *
 * Render every reading deck under content/courses/<slug>/readings/*.md into
 * a styled PDF using the coursemaker-reading.css print stylesheet.
 * Output: public/c/<slug>/readings/<name>.pdf, linkable from the course
 * calendar / lecture pages as `/c/<slug>/readings/<name>.pdf`.
 *
 * Usage:
 *   pnpm readings                      # build every course's readings
 *   pnpm readings cse457-26sp          # one course
 *   pnpm readings cse457-26sp wk01     # one reading by filename prefix
 *
 * Uses md-to-pdf (Puppeteer). Chromium is fetched on first run and
 * reused thereafter (same install as Marp).
 */
import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import process from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const COURSES = join(REPO_ROOT, "content", "courses");
const PUBLIC = join(REPO_ROOT, "public");
const CSS = join(REPO_ROOT, "themes", "coursemaker-reading.css");

async function listCourses() {
  const entries = await readdir(COURSES, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((e) => e.name);
}

async function listReadings(courseSlug) {
  const dir = join(COURSES, courseSlug, "readings");
  if (!existsSync(dir)) return [];
  return (await readdir(dir)).filter((f) => f.endsWith(".md"));
}

function buildOne(srcPath, outPath) {
  console.log(`→ ${basename(srcPath)} → ${outPath.replace(REPO_ROOT + "/", "")}`);
  const res = spawnSync("pnpm", [
    "dlx", "md-to-pdf@latest",
    "--stylesheet", CSS,
    "--body-class", "reading",
    "--launch-options", '{"args":["--no-sandbox"]}',
    "--pdf-options", '{"format":"Letter","margin":{"top":"0.85in","right":"1in","bottom":"1in","left":"1in"},"printBackground":true,"displayHeaderFooter":false}',
    "--dest", dirname(outPath),
    srcPath,
  ], { stdio: "inherit", cwd: REPO_ROOT });
  if (res.status !== 0) {
    console.error(`✖ md-to-pdf failed for ${srcPath}`);
    process.exit(res.status ?? 1);
  }
  // md-to-pdf writes <name>.pdf next to dest dir matching the input basename;
  // rename if needed.
  const wrote = join(dirname(outPath), basename(srcPath, extname(srcPath)) + ".pdf");
  if (wrote !== outPath) {
    spawnSync("mv", [wrote, outPath]);
  }
}

async function main() {
  const [filterCourse, filterReading] = process.argv.slice(2);
  const courses = filterCourse ? [filterCourse] : await listCourses();
  for (const slug of courses) {
    const readings = await listReadings(slug);
    if (!readings.length) {
      console.log(`(${slug}: no readings)`);
      continue;
    }
    for (const file of readings) {
      if (filterReading && !file.startsWith(filterReading)) continue;
      const src = join(COURSES, slug, "readings", file);
      const outDir = join(PUBLIC, "c", slug, "readings");
      await mkdir(outDir, { recursive: true });
      const out = join(outDir, basename(file, extname(file)) + ".pdf");
      buildOne(src, out);
    }
  }
  console.log("✓ done");
}

main().catch((err) => { console.error(err); process.exit(1); });
