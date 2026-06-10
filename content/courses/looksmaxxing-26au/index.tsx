import type { Course } from "@/types/course";
import { config } from "./course.config";

import { HomePage,            homeSearchBody }            from "./pages/home";
import { SyllabusPage,        syllabusSearchBody }        from "./pages/syllabus";
import { TasksPage,           tasksSearchBody }           from "./pages/tasks";
import { HabitsPage,          habitsSearchBody }          from "./pages/habits";
import { LecturesIndexPage,   lecturesIndexSearchBody }   from "./pages/lectures-index";
import { SectionsIndexPage,   sectionsIndexSearchBody }   from "./pages/sections-index";
import { ReadingsIndexPage,   readingsIndexSearchBody }   from "./pages/readings-index";
import { HwIndexPage,         hwIndexSearchBody }         from "./pages/hw-index";

import { Wk01L1Page, wk01L1SearchBody } from "./pages/lectures/wk01-l1";
import { Wk01L2Page, wk01L2SearchBody } from "./pages/lectures/wk01-l2";
import { Wk02L1Page, wk02L1SearchBody } from "./pages/lectures/wk02-l1";
import { Wk02L2Page, wk02L2SearchBody } from "./pages/lectures/wk02-l2";
import { Wk03L1Page, wk03L1SearchBody } from "./pages/lectures/wk03-l1";
import { Wk03L2Page, wk03L2SearchBody } from "./pages/lectures/wk03-l2";
import { Wk04L1Page, wk04L1SearchBody } from "./pages/lectures/wk04-l1";
import { Wk04L2Page, wk04L2SearchBody } from "./pages/lectures/wk04-l2";
import { Wk05L1Page, wk05L1SearchBody } from "./pages/lectures/wk05-l1";
import { Wk05L2Page, wk05L2SearchBody } from "./pages/lectures/wk05-l2";
import { Wk06L1Page, wk06L1SearchBody } from "./pages/lectures/wk06-l1";
import { Wk06L2Page, wk06L2SearchBody } from "./pages/lectures/wk06-l2";
import { Wk07L1Page, wk07L1SearchBody } from "./pages/lectures/wk07-l1";
import { Wk07L2Page, wk07L2SearchBody } from "./pages/lectures/wk07-l2";
import { Wk08L1Page, wk08L1SearchBody } from "./pages/lectures/wk08-l1";
import { Wk08L2Page, wk08L2SearchBody } from "./pages/lectures/wk08-l2";
import { Wk09L1Page, wk09L1SearchBody } from "./pages/lectures/wk09-l1";
import { Wk09L2Page, wk09L2SearchBody } from "./pages/lectures/wk09-l2";
import { Wk10L1Page, wk10L1SearchBody } from "./pages/lectures/wk10-l1";
import { Wk10L2Page, wk10L2SearchBody } from "./pages/lectures/wk10-l2";

import { Wk01SectionPage, wk01SectionSearchBody } from "./pages/sections/wk01";
import { Wk02SectionPage, wk02SectionSearchBody } from "./pages/sections/wk02";
import { Wk03SectionPage, wk03SectionSearchBody } from "./pages/sections/wk03";
import { Wk04Section,     wk04SectionSearchBody } from "./pages/sections/wk04";
import { Wk05SectionPage, wk05SectionSearchBody } from "./pages/sections/wk05";
import { Wk06SectionPage, wk06SectionSearchBody } from "./pages/sections/wk06";
import { Wk07SectionPage, wk07SectionSearchBody } from "./pages/sections/wk07";
import { Wk08SectionPage, wk08SectionSearchBody } from "./pages/sections/wk08";
import { Wk09SectionPage, wk09SectionSearchBody } from "./pages/sections/wk09";
import { Wk10Section,     wk10SectionSearchBody } from "./pages/sections/wk10";

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

import { Hw1Page,         hw1SearchBody }         from "./pages/hw/1";
import { Hw2Page,         hw2SearchBody }         from "./pages/hw/2";
import { Hw3Page,         hw3SearchBody }         from "./pages/hw/3";
import { Hw4Page,         hw4SearchBody }         from "./pages/hw/4";
import { HwCapstonePage,  hwCapstoneSearchBody }  from "./pages/hw/capstone";

export const course: Course = {
  config,
  pages: [
    { segments: [],             title: "Home",        searchBody: homeSearchBody,           render: () => <HomePage /> },
    { segments: ["tasks"],      title: "Tasks",       searchBody: tasksSearchBody,          render: () => <TasksPage /> },
    { segments: ["habits"],     title: "Habits",      searchBody: habitsSearchBody,         render: () => <HabitsPage /> },
    { segments: ["syllabus"],   title: "Syllabus",    searchBody: syllabusSearchBody,       render: () => <SyllabusPage /> },
    { segments: ["lectures"],   title: "Lectures",    searchBody: lecturesIndexSearchBody,  render: () => <LecturesIndexPage /> },
    { segments: ["sections"],   title: "Sections",    searchBody: sectionsIndexSearchBody,  render: () => <SectionsIndexPage /> },
    { segments: ["hw"],         title: "Assignments", searchBody: hwIndexSearchBody,        render: () => <HwIndexPage /> },
    { segments: ["readings"],   title: "Readings",    searchBody: readingsIndexSearchBody,  render: () => <ReadingsIndexPage /> },

    { segments: ["lectures", "wk01-l1"], title: "Week 1, Lecture 1, The science of attractiveness",            searchBody: wk01L1SearchBody, render: () => <Wk01L1Page /> },
    { segments: ["lectures", "wk01-l2"], title: "Week 1, Lecture 2, The looksmaxxing landscape",               searchBody: wk01L2SearchBody, render: () => <Wk01L2Page /> },
    { segments: ["lectures", "wk02-l1"], title: "Week 2, Lecture 1, Measuring what you cannot see day to day", searchBody: wk02L1SearchBody, render: () => <Wk02L1Page /> },
    { segments: ["lectures", "wk02-l2"], title: "Week 2, Lecture 2, Sleep, circadian rhythm, recovery",        searchBody: wk02L2SearchBody, render: () => <Wk02L2Page /> },
    { segments: ["lectures", "wk03-l1"], title: "Week 3, Lecture 1, Skin biology for the impatient",            searchBody: wk03L1SearchBody, render: () => <Wk03L1Page /> },
    { segments: ["lectures", "wk03-l2"], title: "Week 3, Lecture 2, The four-product routine",                  searchBody: wk03L2SearchBody, render: () => <Wk03L2Page /> },
    { segments: ["lectures", "wk04-l1"], title: "Week 4, Lecture 1, Hair biology and the hair-loss talk",       searchBody: wk04L1SearchBody, render: () => <Wk04L1Page /> },
    { segments: ["lectures", "wk04-l2"], title: "Week 4, Lecture 2, Wash, cut, style",                          searchBody: wk04L2SearchBody, render: () => <Wk04L2Page /> },
    { segments: ["lectures", "wk05-l1"], title: "Week 5, Lecture 1, Strength training first principles",        searchBody: wk05L1SearchBody, render: () => <Wk05L1Page /> },
    { segments: ["lectures", "wk05-l2"], title: "Week 5, Lecture 2, Eating for a visible jawline",              searchBody: wk05L2SearchBody, render: () => <Wk05L2Page /> },
    { segments: ["lectures", "wk06-l1"], title: "Week 6, Lecture 1, Mouth basics, hygiene, gums, breath",       searchBody: wk06L1SearchBody, render: () => <Wk06L1Page /> },
    { segments: ["lectures", "wk06-l2"], title: "Week 6, Lecture 2, Teeth, alignment, jawline myths",           searchBody: wk06L2SearchBody, render: () => <Wk06L2Page /> },
    { segments: ["lectures", "wk07-l1"], title: "Week 7, Lecture 1, Fit is the whole game",                     searchBody: wk07L1SearchBody, render: () => <Wk07L1Page /> },
    { segments: ["lectures", "wk07-l2"], title: "Week 7, Lecture 2, Color, context, capsule wardrobe",          searchBody: wk07L2SearchBody, render: () => <Wk07L2Page /> },
    { segments: ["lectures", "wk08-l1"], title: "Week 8, Lecture 1, Beards, stubble, eyebrow line",             searchBody: wk08L1SearchBody, render: () => <Wk08L1Page /> },
    { segments: ["lectures", "wk08-l2"], title: "Week 8, Lecture 2, Fragrance, hands, details",                 searchBody: wk08L2SearchBody, render: () => <Wk08L2Page /> },
    { segments: ["lectures", "wk09-l1"], title: "Week 9, Lecture 1, Standing tall, posture and gait",           searchBody: wk09L1SearchBody, render: () => <Wk09L1Page /> },
    { segments: ["lectures", "wk09-l2"], title: "Week 9, Lecture 2, On being photographed",                     searchBody: wk09L2SearchBody, render: () => <Wk09L2Page /> },
    { segments: ["lectures", "wk10-l1"], title: "Week 10, Lecture 1, Body dysmorphia and the rabbit hole",      searchBody: wk10L1SearchBody, render: () => <Wk10L1Page /> },
    { segments: ["lectures", "wk10-l2"], title: "Week 10, Lecture 2, Demo day and your twelve-week plan",       searchBody: wk10L2SearchBody, render: () => <Wk10L2Page /> },

    { segments: ["sections", "wk01"], title: "Week 1 section, Annotate three forum posts",   searchBody: wk01SectionSearchBody, render: () => <Wk01SectionPage /> },
    { segments: ["sections", "wk02"], title: "Week 2 section, Photo station and habit stack", searchBody: wk02SectionSearchBody, render: () => <Wk02SectionPage /> },
    { segments: ["sections", "wk03"], title: "Week 3 section, Bathroom shelf audit",          searchBody: wk03SectionSearchBody, render: () => <Wk03SectionPage /> },
    { segments: ["sections", "wk04"], title: "Week 4 section, Bring two reference cuts",      searchBody: wk04SectionSearchBody, render: () => <Wk04Section /> },
    { segments: ["sections", "wk05"], title: "Week 5 section, Write your program",            searchBody: wk05SectionSearchBody, render: () => <Wk05SectionPage /> },
    { segments: ["sections", "wk06"], title: "Week 6 section, Defend your oral hygiene cycle", searchBody: wk06SectionSearchBody, render: () => <Wk06SectionPage /> },
    { segments: ["sections", "wk07"], title: "Week 7 section, Closet audit and cull",         searchBody: wk07SectionSearchBody, render: () => <Wk07SectionPage /> },
    { segments: ["sections", "wk08"], title: "Week 8 section, Grooming kit show-and-tell",    searchBody: wk08SectionSearchBody, render: () => <Wk08SectionPage /> },
    { segments: ["sections", "wk09"], title: "Week 9 section, Film, review, fix",             searchBody: wk09SectionSearchBody, render: () => <Wk09SectionPage /> },
    { segments: ["sections", "wk10"], title: "Week 10 section, Before, after, plan",          searchBody: wk10SectionSearchBody, render: () => <Wk10Section /> },

    { segments: ["readings", "wk01"], title: "Week 1 reading, Attractiveness research and what you can change", searchBody: wk01ReadingSearchBody, render: () => <Wk01Reading /> },
    { segments: ["readings", "wk02"], title: "Week 2 reading, Baseline, sleep, and the habit machine",          searchBody: wk02ReadingSearchBody, render: () => <Wk02Reading /> },
    { segments: ["readings", "wk03"], title: "Week 3 reading, Skincare from skin biology forward",              searchBody: wk03ReadingSearchBody, render: () => <Wk03Reading /> },
    { segments: ["readings", "wk04"], title: "Week 4 reading, Hair, hair loss, and a haircut that fits",        searchBody: wk04ReadingSearchBody, render: () => <Wk04Reading /> },
    { segments: ["readings", "wk05"], title: "Week 5 reading, Strength, protein, and body recomposition",       searchBody: wk05ReadingSearchBody, render: () => <Wk05Reading /> },
    { segments: ["readings", "wk06"], title: "Week 6 reading, Dental, whitening, and the jawline myths",        searchBody: wk06ReadingSearchBody, render: () => <Wk06Reading /> },
    { segments: ["readings", "wk07"], title: "Week 7 reading, Fit, color, and the five-look capsule",           searchBody: wk07ReadingSearchBody, render: () => <Wk07Reading /> },
    { segments: ["readings", "wk08"], title: "Week 8 reading, Beard, brows, fragrance, hands",                  searchBody: wk08ReadingSearchBody, render: () => <Wk08Reading /> },
    { segments: ["readings", "wk09"], title: "Week 9 reading, Posture, gait, and being photographed",            searchBody: wk09ReadingSearchBody, render: () => <Wk09Reading /> },
    { segments: ["readings", "wk10"], title: "Week 10 reading, Body dysmorphia and the twelve-week plan",        searchBody: wk10ReadingSearchBody, render: () => <Wk10Reading /> },

    { segments: ["hw", "1"],        title: "HW1, Honest baseline audit",                              searchBody: hw1SearchBody,        render: () => <Hw1Page /> },
    { segments: ["hw", "2"],        title: "HW2, Two-week skincare and grooming log",                 searchBody: hw2SearchBody,        render: () => <Hw2Page /> },
    { segments: ["hw", "3"],        title: "HW3, Strength program and nutrition plan",                searchBody: hw3SearchBody,        render: () => <Hw3Page /> },
    { segments: ["hw", "4"],        title: "HW4, Five-look capsule wardrobe",                         searchBody: hw4SearchBody,        render: () => <Hw4Page /> },
    { segments: ["hw", "capstone"], title: "Capstone, Personal twelve-week plan and before-and-after", searchBody: hwCapstoneSearchBody, render: () => <HwCapstonePage /> },
  ],
};
