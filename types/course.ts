/**
 * Types for the course template / design library.
 * A course = SiteConfig + a tree of pages. Each page is identified by its
 * slug array (relative to the course root) and renders a React node.
 */

import type { ReactNode } from "react";

export type LabelVariant = "purple" | "red" | "blue" | "green" | "yellow";

export interface CourseLabel {
  text: string;
  variant?: LabelVariant;
}

/** A single nav entry in the sidebar. */
export interface NavItem {
  label: string;
  /** Path *relative to the course root*. Use `""` for the course home page.
   *  Absolute URLs (http*) are rendered as external. */
  href: string;
  external?: boolean;
  children?: NavItem[];
  defaultOpen?: boolean;
}

export interface NavGroup {
  items: NavItem[];
}

export interface SiteConfig {
  /** Identifier used in URLs: /c/<slug>. Letters/digits/hyphens only. */
  slug: string;
  /** Short title in the sidebar (e.g. "CSE 457"). */
  title: string;
  /** Full course name used in metadata. */
  fullTitle: string;
  /** Term shown under the H1 (e.g. "Spring 2026"). */
  term: string;
  /** Length of the course in weeks. Shown on the home card as "N-week course". */
  weeks?: number;
  /** Used in og:description and meta. */
  description: string;
  /** Canonical URL of the original (optional, used in metadata). */
  url?: string;
  /** Custom hero — usually a course-owned SVG file under
   *  content/courses/<slug>/hero.svg. Can also be a PNG/JPG, or null for none. */
  hero?: HeroAsset | null;
  /** Deprecated: use `hero` instead. Kept for back-compat. */
  heroImage?: string | null;
  /** Primary navigation groups. Separated by hr. */
  navGroups: NavGroup[];
  /** Footer attribution lines (rendered as paragraphs). */
  footer?: { lines: string[] };
  /** Optional theme overrides. */
  theme?: Partial<CourseTheme>;
}

/** Course hero asset.
 *  Every course owns its own piece of art. Drop a file under
 *  content/courses/<slug>/hero.svg (or .png) and reference it here.
 */
export interface HeroAsset {
  /** Path under /public, or an absolute URL. */
  src: string;
  alt: string;
  /** Defaults to 1200×400. */
  width?: number;
  height?: number;
}

export interface CourseTheme {
  primary: string;
  primaryStrong: string;
  sidebar: string;
  background: string;
  bodyText: string;
  heading: string;
}

/** Syllabus shape — universal across UW course sites. */
export interface SyllabusSpec {
  overview: string[]; // paragraphs
  logistics: {
    meeting?: string;
    format?: string;
    location?: string;
    extras?: string[];
  };
  staff: StaffMember[];
  prerequisites?: string[];
  gettingHelp?: string[];
  grading: {
    breakdown: { item: string; weight: string; notes?: string }[];
    latePolicy?: string;
    aiPolicy?: string;
    regradePolicy?: string;
  };
  resources?: {
    required?: ResourceItem[];
    optional?: ResourceItem[];
  };
}

export interface StaffMember {
  name: string;
  role: "Instructor" | "TA" | "Co-Instructor" | "Grader" | string;
  email?: string;
  /** Path under /public or absolute URL. */
  photo?: string;
  officeHours?: { when: string; where?: string }[];
  bio?: string;
}

export interface ResourceItem {
  title: string;
  href?: string;
  note?: string;
}

/** Project / homework handout shape. */
export interface ProjectSpec {
  title: string;
  /** Short one-liner, e.g. "Build a hierarchical 3D character modeler." */
  tagline?: string;
  dueDate?: string;
  outDate?: string;
  overview: string[];
  goals: string[];
  background?: string[];
  /** Numbered tasks. Each may have sub-bullets. */
  instructions: ProjectTask[];
  deliverables: string[];
  rubric?: { dimension: string; points: number; notes?: string }[];
  hints?: string[];
  late?: string;
}

export interface ProjectTask {
  title: string;
  body?: string;
  steps?: string[];
}

/** Lecture page shape. */
export interface LectureSpec {
  title: string;
  date: string;
  week?: number;
  topics: string[];
  slidesHref?: string;
  recordingHref?: string;
  readings?: ResourceItem[];
  followups?: string[];
}

/** A single dt/dd entry inside a Module. */
export interface ModuleEntry {
  date: string;
  notes: ModuleNote[];
}

export type ModuleNote =
  | { kind: "text"; text: string }
  | { kind: "link"; text: string; href: string }
  | { kind: "label"; text: string; variant: LabelVariant }
  | { kind: "row"; items: ModuleNote[] };

export interface CourseModule {
  title: string;
  size?: "h2" | "h2-small" | "h3";
  id?: string;
  entries: ModuleEntry[];
}

/** A single page belonging to a course. */
export interface CoursePage {
  /** Path segments relative to course root. `[]` = course home. */
  segments: string[];
  /** Title used for browser tab + breadcrumb. */
  title: string;
  /** Short description used in the search index. */
  description?: string;
  /** Plain text used for search; if omitted, the title is used. */
  searchBody?: string;
  /** Renderer for the page content. */
  render: () => ReactNode;
}

/** Full course bundle: config + pages. */
export interface Course {
  config: SiteConfig;
  pages: CoursePage[];
}
