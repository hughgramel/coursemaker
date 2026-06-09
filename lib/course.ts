import type { Course, CoursePage, SiteConfig } from "@/types/course";

/** Convert page segments to a URL-safe slug joined with "/". */
export function segmentsToKey(segments: string[]): string {
  return segments.join("/");
}

/** Course-relative href used inside content (NOT including /c/<slug>). */
export function pageHref(course: SiteConfig, segments: string[]): string {
  const base = `/c/${course.slug}`;
  if (segments.length === 0) return base;
  return `${base}/${segments.join("/")}`;
}

/** Look up a course page by its slug segments. */
export function findPage(course: Course, segments: string[]): CoursePage | undefined {
  const key = segmentsToKey(segments);
  return course.pages.find((p) => segmentsToKey(p.segments) === key);
}

/** Resolve a nav item href to an absolute URL for this course.
 *  Rules:
 *    - Absolute URLs (http*) are returned as-is.
 *    - Course-relative hrefs (no leading slash) are joined under /c/<slug>/.
 *    - Slugs starting with "/" are treated as site-absolute.
 */
export function resolveNavHref(course: SiteConfig, href: string): string {
  if (/^https?:\/\//i.test(href)) return href;
  if (href.startsWith("/")) return href;
  if (href === "") return `/c/${course.slug}`;
  return `/c/${course.slug}/${href}`;
}
