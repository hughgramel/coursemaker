import type { Course } from "@/types/course";
import { config } from "./course.config";

import { HomePage,          homeSearchBody }          from "./pages/home";
import { SyllabusPage,      syllabusSearchBody }      from "./pages/syllabus";
import { TasksPage,         tasksSearchBody }         from "./pages/tasks";
import { LecturesIndexPage, lecturesIndexSearchBody } from "./pages/lectures-index";
import { SectionsIndexPage, sectionsIndexSearchBody } from "./pages/sections-index";
import { ReadingsIndexPage, readingsIndexSearchBody } from "./pages/readings-index";
import { HwIndexPage,       hwIndexSearchBody }       from "./pages/hw-index";

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
import { Wk07L1, wk07L1SearchBody } from "./pages/lectures/wk07-l1";
import { Wk07L2, wk07L2SearchBody } from "./pages/lectures/wk07-l2";
import { Wk08L1, wk08L1SearchBody } from "./pages/lectures/wk08-l1";
import { Wk08L2, wk08L2SearchBody } from "./pages/lectures/wk08-l2";
import { Wk09L1, wk09L1SearchBody } from "./pages/lectures/wk09-l1";
import { Wk09L2, wk09L2SearchBody } from "./pages/lectures/wk09-l2";
import { Wk10L1, wk10L1SearchBody } from "./pages/lectures/wk10-l1";
import { Wk10L2, wk10L2SearchBody } from "./pages/lectures/wk10-l2";

import { Wk01Section, wk01SectionSearchBody } from "./pages/sections/wk01";
import { Wk02Section, wk02SectionSearchBody } from "./pages/sections/wk02";
import { Wk03Section, wk03SectionSearchBody } from "./pages/sections/wk03";
import { Wk04Section, wk04SectionSearchBody } from "./pages/sections/wk04";
import { Wk05Section, wk05SectionSearchBody } from "./pages/sections/wk05";
import { Wk06Section, wk06SectionSearchBody } from "./pages/sections/wk06";
import { Wk07Section, wk07SectionSearchBody } from "./pages/sections/wk07";
import { Wk08Section, wk08SectionSearchBody } from "./pages/sections/wk08";
import { Wk09Section, wk09SectionSearchBody } from "./pages/sections/wk09";
import { Wk10Section, wk10SectionSearchBody } from "./pages/sections/wk10";

import { Wk01Reading, wk01ReadingSearchBody } from "./pages/readings/wk01";
import { Wk02Reading, wk02ReadingSearchBody } from "./pages/readings/wk02";
import { Wk03Reading, wk03ReadingSearchBody } from "./pages/readings/wk03";
import { Wk04Reading, wk04ReadingSearchBody } from "./pages/readings/wk04";
import { Wk05Reading, wk05ReadingSearchBody } from "./pages/readings/wk05";
import { Wk06Reading, wk06ReadingSearchBody } from "./pages/readings/wk06";
import { Wk07Reading, wk07ReadingSearchBody } from "./pages/readings/wk07";
import { Wk08Reading, wk08ReadingSearchBody } from "./pages/readings/wk08";
import { Wk09Reading, wk09ReadingSearchBody } from "./pages/readings/wk09";
import { Wk10Reading, wk10ReadingSearchBody } from "./pages/readings/wk10";

import { Hw1,        hw1SearchBody }        from "./pages/hw/1";
import { Hw2,        hw2SearchBody }        from "./pages/hw/2";
import { Hw3,        hw3SearchBody }        from "./pages/hw/3";
import { Hw4,        hw4SearchBody }        from "./pages/hw/4";
import { Hw5,        hw5SearchBody }        from "./pages/hw/5";
import { HwCapstone, hwCapstoneSearchBody } from "./pages/hw/capstone";

export const course: Course = {
  config,
  pages: [
    { segments: [],           title: "Home",        searchBody: homeSearchBody,          render: () => <HomePage /> },
    { segments: ["tasks"],    title: "Tasks",       searchBody: tasksSearchBody,         render: () => <TasksPage /> },
    { segments: ["syllabus"], title: "Syllabus",    searchBody: syllabusSearchBody,      render: () => <SyllabusPage /> },
    { segments: ["lectures"], title: "Lectures",    searchBody: lecturesIndexSearchBody, render: () => <LecturesIndexPage /> },
    { segments: ["sections"], title: "Sections",    searchBody: sectionsIndexSearchBody, render: () => <SectionsIndexPage /> },
    { segments: ["hw"],       title: "Assignments", searchBody: hwIndexSearchBody,       render: () => <HwIndexPage /> },
    { segments: ["readings"], title: "Readings",    searchBody: readingsIndexSearchBody, render: () => <ReadingsIndexPage /> },

    { segments: ["lectures", "wk01-l1"], title: "Week 1, Lecture 1: How SWE hiring actually works",         searchBody: wk01L1SearchBody, render: () => <Wk01L1 /> },
    { segments: ["lectures", "wk01-l2"], title: "Week 1, Lecture 2: The new-grad pipeline",                 searchBody: wk01L2SearchBody, render: () => <Wk01L2 /> },
    { segments: ["lectures", "wk02-l1"], title: "Week 2, Lecture 1: Resumes that pass two readers",         searchBody: wk02L1SearchBody, render: () => <Wk02L1 /> },
    { segments: ["lectures", "wk02-l2"], title: "Week 2, Lecture 2: GitHub, LinkedIn, and public artifacts", searchBody: wk02L2SearchBody, render: () => <Wk02L2 /> },
    { segments: ["lectures", "wk03-l1"], title: "Week 3, Lecture 1: The coding interview format",           searchBody: wk03L1SearchBody, render: () => <Wk03L1 /> },
    { segments: ["lectures", "wk03-l2"], title: "Week 3, Lecture 2: Two-pointer, hash map, sliding window", searchBody: wk03L2SearchBody, render: () => <Wk03L2 /> },
    { segments: ["lectures", "wk04-l1"], title: "Week 4, Lecture 1: Recursion as a pattern",                searchBody: wk04L1SearchBody, render: () => <Wk04L1 /> },
    { segments: ["lectures", "wk04-l2"], title: "Week 4, Lecture 2: BFS and DFS in interview shape",        searchBody: wk04L2SearchBody, render: () => <Wk04L2 /> },
    { segments: ["lectures", "wk05-l1"], title: "Week 5, Lecture 1: Dynamic programming without the panic", searchBody: wk05L1SearchBody, render: () => <Wk05L1 /> },
    { segments: ["lectures", "wk05-l2"], title: "Week 5, Lecture 2: Communicating while you code",          searchBody: wk05L2SearchBody, render: () => <Wk05L2 /> },
    { segments: ["lectures", "wk06-l1"], title: "Week 6, Lecture 1: System design as a conversation",       searchBody: wk06L1SearchBody, render: () => <Wk06L1 /> },
    { segments: ["lectures", "wk06-l2"], title: "Week 6, Lecture 2: Storage, caching, and scale",           searchBody: wk06L2SearchBody, render: () => <Wk06L2 /> },
    { segments: ["lectures", "wk07-l1"], title: "Week 7, Lecture 1: Behavioral interviews are pattern matching", searchBody: wk07L1SearchBody, render: () => <Wk07L1 /> },
    { segments: ["lectures", "wk07-l2"], title: "Week 7, Lecture 2: The interview loop end to end",         searchBody: wk07L2SearchBody, render: () => <Wk07L2 /> },
    { segments: ["lectures", "wk08-l1"], title: "Week 8, Lecture 1: Open source as resume",                 searchBody: wk08L1SearchBody, render: () => <Wk08L1 /> },
    { segments: ["lectures", "wk08-l2"], title: "Week 8, Lecture 2: Unpaid stints and find-a-problem moves", searchBody: wk08L2SearchBody, render: () => <Wk08L2 /> },
    { segments: ["lectures", "wk09-l1"], title: "Week 9, Lecture 1: Recruiters, applications, take-homes, on-sites", searchBody: wk09L1SearchBody, render: () => <Wk09L1 /> },
    { segments: ["lectures", "wk09-l2"], title: "Week 9, Lecture 2: Negotiation, leveling, multi-offer dynamics",    searchBody: wk09L2SearchBody, render: () => <Wk09L2 /> },
    { segments: ["lectures", "wk10-l1"], title: "Week 10, Lecture 1: The application sprint",              searchBody: wk10L1SearchBody, render: () => <Wk10L1 /> },
    { segments: ["lectures", "wk10-l2"], title: "Week 10, Lecture 2: Demo day and personal playbook",      searchBody: wk10L2SearchBody, render: () => <Wk10L2 /> },

    { segments: ["sections", "wk01"], title: "Week 1 section: Target-company-list workshop",        searchBody: wk01SectionSearchBody, render: () => <Wk01Section /> },
    { segments: ["sections", "wk02"], title: "Week 2 section: Resume teardown clinic",              searchBody: wk02SectionSearchBody, render: () => <Wk02Section /> },
    { segments: ["sections", "wk03"], title: "Week 3 section: Pattern sprint 1",                    searchBody: wk03SectionSearchBody, render: () => <Wk03Section /> },
    { segments: ["sections", "wk04"], title: "Week 4 section: Pattern sprint 2",                    searchBody: wk04SectionSearchBody, render: () => <Wk04Section /> },
    { segments: ["sections", "wk05"], title: "Week 5 section: Pattern sprint 3",                    searchBody: wk05SectionSearchBody, render: () => <Wk05Section /> },
    { segments: ["sections", "wk06"], title: "Week 6 section: System design lab",                   searchBody: wk06SectionSearchBody, render: () => <Wk06Section /> },
    { segments: ["sections", "wk07"], title: "Week 7 section: STAR story bank workshop",            searchBody: wk07SectionSearchBody, render: () => <Wk07Section /> },
    { segments: ["sections", "wk08"], title: "Week 8 section: Triage week",                         searchBody: wk08SectionSearchBody, render: () => <Wk08Section /> },
    { segments: ["sections", "wk09"], title: "Week 9 section: Pipeline and negotiation lab",        searchBody: wk09SectionSearchBody, render: () => <Wk09Section /> },
    { segments: ["sections", "wk10"], title: "Week 10 section: Mock interview marathon",            searchBody: wk10SectionSearchBody, render: () => <Wk10Section /> },

    { segments: ["readings", "wk01"], title: "Week 1 reading: The hiring funnel and the side doors",     searchBody: wk01ReadingSearchBody, render: () => <Wk01Reading /> },
    { segments: ["readings", "wk02"], title: "Week 2 reading: Positioning for two readers",              searchBody: wk02ReadingSearchBody, render: () => <Wk02Reading /> },
    { segments: ["readings", "wk03"], title: "Week 3 reading: The coding interview, format and patterns", searchBody: wk03ReadingSearchBody, render: () => <Wk03Reading /> },
    { segments: ["readings", "wk04"], title: "Week 4 reading: Recursion, trees, and graphs",             searchBody: wk04ReadingSearchBody, render: () => <Wk04Reading /> },
    { segments: ["readings", "wk05"], title: "Week 5 reading: Dynamic programming and the spoken solve", searchBody: wk05ReadingSearchBody, render: () => <Wk05Reading /> },
    { segments: ["readings", "wk06"], title: "Week 6 reading: System design end to end",                 searchBody: wk06ReadingSearchBody, render: () => <Wk06Reading /> },
    { segments: ["readings", "wk07"], title: "Week 7 reading: STAR and the full loop",                   searchBody: wk07ReadingSearchBody, render: () => <Wk07Reading /> },
    { segments: ["readings", "wk08"], title: "Week 8 reading: The unconventional path",                  searchBody: wk08ReadingSearchBody, render: () => <Wk08Reading /> },
    { segments: ["readings", "wk09"], title: "Week 9 reading: Closing offers",                           searchBody: wk09ReadingSearchBody, render: () => <Wk09Reading /> },
    { segments: ["readings", "wk10"], title: "Week 10 reading: The two-track playbook",                  searchBody: wk10ReadingSearchBody, render: () => <Wk10Reading /> },

    { segments: ["hw", "1"],        title: "HW1, Resume and portfolio audit",                              searchBody: hw1SearchBody,        render: () => <Hw1 /> },
    { segments: ["hw", "2"],        title: "HW2, 30-problem LeetCode pattern sprint",                      searchBody: hw2SearchBody,        render: () => <Hw2 /> },
    { segments: ["hw", "3"],        title: "HW3, Recorded mock coding interview",                          searchBody: hw3SearchBody,        render: () => <Hw3 /> },
    { segments: ["hw", "4"],        title: "HW4, System design write-up",                                  searchBody: hw4SearchBody,        render: () => <Hw4 /> },
    { segments: ["hw", "5"],        title: "HW5, STAR story bank",                                         searchBody: hw5SearchBody,        render: () => <Hw5 /> },
    { segments: ["hw", "capstone"], title: "Capstone, Application sprint, full mock loop, one unconventional move", searchBody: hwCapstoneSearchBody, render: () => <HwCapstone /> },
  ],
};
