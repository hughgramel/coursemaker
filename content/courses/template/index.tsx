import type { Course } from "@/types/course";
import { config } from "./course.config";
import { HomePage,         homeSearchBody }         from "./pages/home";
import { SyllabusPage,     syllabusSearchBody }     from "./pages/syllabus";
import { TasksPage,        tasksSearchBody }        from "./pages/tasks";
import { LecturesIndexPage, lecturesIndexSearchBody } from "./pages/lectures-index";
import { SectionsIndexPage, sectionsIndexSearchBody } from "./pages/sections-index";
import { ReadingsIndexPage, readingsIndexSearchBody } from "./pages/readings-index";
import { HwIndexPage,       hwIndexSearchBody }       from "./pages/hw-index";
import { Wk01Reading,       wk01ReadingSearchBody }   from "./pages/readings/wk01";
import { Wk01L1,            wk01L1SearchBody }        from "./pages/lectures/wk01-l1";
import { Wk01Section,       wk01SectionSearchBody }   from "./pages/sections/wk01";
import { Hw1,               hw1SearchBody }           from "./pages/hw/1";

export const course: Course = {
  config,
  pages: [
    { segments: [],                       title: "Home",                searchBody: homeSearchBody,          render: () => <HomePage /> },
    { segments: ["tasks"],                title: "Tasks",               searchBody: tasksSearchBody,         render: () => <TasksPage /> },
    { segments: ["syllabus"],             title: "Syllabus",            searchBody: syllabusSearchBody,      render: () => <SyllabusPage /> },
    { segments: ["lectures"],             title: "Lectures",            searchBody: lecturesIndexSearchBody, render: () => <LecturesIndexPage /> },
    { segments: ["lectures", "wk01-l1"],  title: "Week 1, Lecture 1",   searchBody: wk01L1SearchBody,        render: () => <Wk01L1 /> },
    { segments: ["sections"],             title: "Sections",            searchBody: sectionsIndexSearchBody, render: () => <SectionsIndexPage /> },
    { segments: ["sections", "wk01"],     title: "Week 1, Section",     searchBody: wk01SectionSearchBody,   render: () => <Wk01Section /> },
    { segments: ["hw"],                   title: "Assignments",         searchBody: hwIndexSearchBody,       render: () => <HwIndexPage /> },
    { segments: ["hw", "1"],              title: "HW 1",                searchBody: hw1SearchBody,           render: () => <Hw1 /> },
    { segments: ["readings"],             title: "Readings",            searchBody: readingsIndexSearchBody, render: () => <ReadingsIndexPage /> },
    { segments: ["readings", "wk01"],     title: "Week 1, Reading",     searchBody: wk01ReadingSearchBody,   render: () => <Wk01Reading /> },
  ],
};
