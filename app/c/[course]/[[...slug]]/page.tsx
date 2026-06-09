import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MainLayout } from "@/components/MainLayout";
import { allCourseSlugs, getCourseBySlug } from "@/content/courses";
import { findPage } from "@/lib/course";

interface PageProps {
  params: Promise<{ course: string; slug?: string[] }>;
}

export function generateStaticParams() {
  const out: { course: string; slug?: string[] }[] = [];
  for (const slug of allCourseSlugs()) {
    const c = getCourseBySlug(slug)!;
    for (const page of c.pages) {
      out.push({ course: slug, slug: page.segments.length ? page.segments : undefined });
    }
  }
  return out;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { course: courseSlug, slug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) return {};
  const page = findPage(course, slug ?? []);
  const pageTitle = page?.title ?? "Page";
  return {
    title: `${pageTitle} | ${course.config.title}`,
    description: page?.description ?? course.config.description,
  };
}

export default async function CoursePage({ params }: PageProps) {
  const { course: courseSlug, slug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) notFound();
  const page = findPage(course, slug ?? []);
  if (!page) notFound();

  return (
    <MainLayout site={course.config}>
      {page.render()}
    </MainLayout>
  );
}
