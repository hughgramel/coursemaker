import type { Course } from "@/types/course";
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
