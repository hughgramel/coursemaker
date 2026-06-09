import type { Course } from "@/types/course";
import { config } from "./course.config";
import { HomePage, homeSearchBody } from "./pages/home";
import { SyllabusPage, syllabusSearchBody } from "./pages/syllabus";
import { LecturesIndex, lecturesIndexSearchBody } from "./pages/lectures";
import { SectionsIndex, sectionsIndexSearchBody } from "./pages/sections";
import { HwIndex, hwIndexSearchBody } from "./pages/hw";
import { ReadingsIndex, readingsIndexSearchBody } from "./pages/readings";
import { TasksPage, tasksSearchBody as tasksPageSearchBody } from "./pages/tasks";

import { Wk01L1, wk01L1SearchBody } from "./pages/lectures/wk01-l1";
import { Wk01L2, wk01L2SearchBody } from "./pages/lectures/wk01-l2";
import { Wk02L1, wk02L1SearchBody } from "./pages/lectures/wk02-l1";
import { Wk02L2, wk02L2SearchBody } from "./pages/lectures/wk02-l2";
import { Wk03L1, wk03L1SearchBody } from "./pages/lectures/wk03-l1";
import { Wk03L2, wk03L2SearchBody } from "./pages/lectures/wk03-l2";
import { Wk04L1, wk04L1SearchBody } from "./pages/lectures/wk04-l1";
import { Wk04L2, wk04L2SearchBody } from "./pages/lectures/wk04-l2";
import { Wk05L1, wk05L1SearchBody } from "./pages/lectures/wk05-l1";
import { Wk05L2, wk05L2SearchBody } from "./pages/lectures/wk05-l2";
import { Wk06L1, wk06L1SearchBody } from "./pages/lectures/wk06-l1";
import { Wk06L2, wk06L2SearchBody } from "./pages/lectures/wk06-l2";

import { Wk01Section, wk01SectionSearchBody } from "./pages/sections/wk01";
import { Wk02Section, wk02SectionSearchBody } from "./pages/sections/wk02";
import { Wk03Section, wk03SectionSearchBody } from "./pages/sections/wk03";
import { Wk04Section, wk04SectionSearchBody } from "./pages/sections/wk04";
import { Wk05Section, wk05SectionSearchBody } from "./pages/sections/wk05";
import { Wk06Section, wk06SectionSearchBody } from "./pages/sections/wk06";

import { Wk01Reading, wk01ReadingSearchBody } from "./pages/readings/wk01";
import { Wk02Reading, wk02ReadingSearchBody } from "./pages/readings/wk02";
import { Wk03Reading, wk03ReadingSearchBody } from "./pages/readings/wk03";
import { Wk04Reading, wk04ReadingSearchBody } from "./pages/readings/wk04";
import { Wk05Reading, wk05ReadingSearchBody } from "./pages/readings/wk05";
import { Wk06Reading, wk06ReadingSearchBody } from "./pages/readings/wk06";

import { Hw1, hw1SearchBody } from "./pages/hw/1";
import { Hw2, hw2SearchBody } from "./pages/hw/2";
import { Hw3, hw3SearchBody } from "./pages/hw/3";
import { Hw4, hw4SearchBody } from "./pages/hw/4";
import { HwCapstone, hwCapstoneSearchBody } from "./pages/hw/capstone";

export const course: Course = {
  config,
  pages: [
    { segments: [],                                  title: "Home",                                          searchBody: homeSearchBody,             render: () => <HomePage /> },
    { segments: ["tasks"],                           title: "Tasks",                                         searchBody: tasksPageSearchBody,        render: () => <TasksPage /> },
    { segments: ["syllabus"],                        title: "Syllabus",                                      searchBody: syllabusSearchBody,         render: () => <SyllabusPage /> },

    { segments: ["lectures"],                        title: "Lectures",                                      searchBody: lecturesIndexSearchBody,    render: () => <LecturesIndex /> },
    { segments: ["sections"],                        title: "Sections",                                      searchBody: sectionsIndexSearchBody,    render: () => <SectionsIndex /> },
    { segments: ["hw"],                              title: "Assignments",                                   searchBody: hwIndexSearchBody,          render: () => <HwIndex /> },
    { segments: ["readings"],                        title: "Readings",                                      searchBody: readingsIndexSearchBody,    render: () => <ReadingsIndex /> },

    { segments: ["lectures", "wk01-l1"],             title: "Wk 1 — The follower funnel",                    searchBody: wk01L1SearchBody,           render: () => <Wk01L1 /> },
    { segments: ["lectures", "wk01-l2"],             title: "Wk 1 — Niche, voice, and bio",                  searchBody: wk01L2SearchBody,           render: () => <Wk01L2 /> },
    { segments: ["lectures", "wk02-l1"],             title: "Wk 2 — Anatomy of a hook",                      searchBody: wk02L1SearchBody,           render: () => <Wk02L1 /> },
    { segments: ["lectures", "wk02-l2"],             title: "Wk 2 — Post formats",                           searchBody: wk02L2SearchBody,           render: () => <Wk02L2 /> },
    { segments: ["lectures", "wk03-l1"],             title: "Wk 3 — How posts spread on X",                  searchBody: wk03L1SearchBody,           render: () => <Wk03L1 /> },
    { segments: ["lectures", "wk03-l2"],             title: "Wk 3 — The reply game",                         searchBody: wk03L2SearchBody,           render: () => <Wk03L2 /> },
    { segments: ["lectures", "wk04-l1"],             title: "Wk 4 — Calendars and batching",                 searchBody: wk04L1SearchBody,           render: () => <Wk04L1 /> },
    { segments: ["lectures", "wk04-l2"],             title: "Wk 4 — Collaboration and network",              searchBody: wk04L2SearchBody,           render: () => <Wk04L2 /> },
    { segments: ["lectures", "wk05-l1"],             title: "Wk 5 — What to measure",                        searchBody: wk05L1SearchBody,           render: () => <Wk05L1 /> },
    { segments: ["lectures", "wk05-l2"],             title: "Wk 5 — Testing and iterating",                  searchBody: wk05L2SearchBody,           render: () => <Wk05L2 /> },
    { segments: ["lectures", "wk06-l1"],             title: "Wk 6 — The 10k roadmap",                        searchBody: wk06L1SearchBody,           render: () => <Wk06L1 /> },
    { segments: ["lectures", "wk06-l2"],             title: "Wk 6 — Life after 10k",                         searchBody: wk06L2SearchBody,           render: () => <Wk06L2 /> },

    { segments: ["sections", "wk01"],                title: "Wk 1 — Audit five accounts",                    searchBody: wk01SectionSearchBody,      render: () => <Wk01Section /> },
    { segments: ["sections", "wk02"],                title: "Wk 2 — Hook lab",                               searchBody: wk02SectionSearchBody,      render: () => <Wk02Section /> },
    { segments: ["sections", "wk03"],                title: "Wk 3 — Reply sprint",                           searchBody: wk03SectionSearchBody,      render: () => <Wk03Section /> },
    { segments: ["sections", "wk04"],                title: "Wk 4 — Build your weekly system",               searchBody: wk04SectionSearchBody,      render: () => <Wk04Section /> },
    { segments: ["sections", "wk05"],                title: "Wk 5 — Read your analytics",                    searchBody: wk05SectionSearchBody,      render: () => <Wk05Section /> },
    { segments: ["sections", "wk06"],                title: "Wk 6 — Capstone demo day",                      searchBody: wk06SectionSearchBody,      render: () => <Wk06Section /> },

    { segments: ["readings", "wk01"],                title: "Wk 1 — Funnel, niche, bio",                     searchBody: wk01ReadingSearchBody,      render: () => <Wk01Reading /> },
    { segments: ["readings", "wk02"],                title: "Wk 2 — Hooks and formats",                      searchBody: wk02ReadingSearchBody,      render: () => <Wk02Reading /> },
    { segments: ["readings", "wk03"],                title: "Wk 3 — The algorithm and the reply game",       searchBody: wk03ReadingSearchBody,      render: () => <Wk03Reading /> },
    { segments: ["readings", "wk04"],                title: "Wk 4 — The weekly system",                      searchBody: wk04ReadingSearchBody,      render: () => <Wk04Reading /> },
    { segments: ["readings", "wk05"],                title: "Wk 5 — Analytics and iteration",                searchBody: wk05ReadingSearchBody,      render: () => <Wk05Reading /> },
    { segments: ["readings", "wk06"],                title: "Wk 6 — The 90-day playbook",                    searchBody: wk06ReadingSearchBody,      render: () => <Wk06Reading /> },

    { segments: ["hw", "1"],                         title: "HW1 — Niche and bio rewrite",                    searchBody: hw1SearchBody,              render: () => <Hw1 /> },
    { segments: ["hw", "2"],                         title: "HW2 — Twenty posts in seven days",               searchBody: hw2SearchBody,              render: () => <Hw2 /> },
    { segments: ["hw", "3"],                         title: "HW3 — Run your system for two weeks",            searchBody: hw3SearchBody,              render: () => <Hw3 /> },
    { segments: ["hw", "4"],                         title: "HW4 — Thirty-day growth experiment",             searchBody: hw4SearchBody,              render: () => <Hw4 /> },
    { segments: ["hw", "capstone"],                  title: "Capstone — 90-day playbook",                     searchBody: hwCapstoneSearchBody,       render: () => <HwCapstone /> },
  ],
};
