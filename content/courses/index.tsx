/**
 * Course registry — add a new course by importing it here.
 * The registry is small enough to keep manual; `scripts/new-course.mjs`
 * automatically appends new entries via a marker comment.
 */
import type { Course } from "@/types/course";
import { course as cse457_26sp } from "./cse457-26sp";
import { course as b2c10kMrr26au } from "./b2c-10k-mrr-26au";


// COURSEMAKER:REGISTRY_START — do not delete this marker.
export const courses: Course[] = [
  cse457_26sp,  b2c10kMrr26au,
];
// COURSEMAKER:REGISTRY_END — do not delete this marker.

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.config.slug === slug);
}

export function allCourseSlugs(): string[] {
  return courses.map((c) => c.config.slug);
}
