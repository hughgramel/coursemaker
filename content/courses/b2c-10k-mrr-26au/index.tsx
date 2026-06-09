import type { Course } from "@/types/course";
import { config } from "./course.config";

import { HomePage, homeSearchBody } from "./pages/home";
import { SyllabusPage, syllabusSearchBody } from "./pages/syllabus";
import { StaffPage, staffSearchBody } from "./pages/staff";
import { LecturesIndexPage, lecturesIndexSearchBody } from "./pages/lectures-index";
import { SectionsIndexPage, sectionsIndexSearchBody } from "./pages/sections-index";
import { ReadingsIndexPage, readingsIndexSearchBody } from "./pages/readings-index";
import { HwIndexPage,       hwIndexSearchBody }       from "./pages/hw-index";
import { TasksPage,         tasksSearchBody }         from "./pages/tasks";

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
import { Wk05Section,     wk05SectionSearchBody } from "./pages/sections/wk05";
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

import { Hw1Page,        hw1SearchBody }        from "./pages/hw/1";
import { Hw2Page,        hw2SearchBody }        from "./pages/hw/2";
import { Hw3Page,        hw3SearchBody }        from "./pages/hw/3";
import { Hw4Page,        hw4SearchBody }        from "./pages/hw/4";
import { HwCapstonePage, hwCapstoneSearchBody } from "./pages/hw/capstone";

const sb = (s: string | readonly string[]): string =>
  Array.isArray(s) ? s.join(" ") : (s as string);

export const course: Course = {
  config,
  pages: [
    { segments: [], title: "Home", searchBody: homeSearchBody, render: () => <HomePage /> },
    { segments: ["syllabus"], title: "Syllabus", searchBody: syllabusSearchBody, render: () => <SyllabusPage /> },
    { segments: ["staff"], title: "Staff", searchBody: staffSearchBody, render: () => <StaffPage /> },

    { segments: ["lectures"],   title: "Lectures",    searchBody: lecturesIndexSearchBody, render: () => <LecturesIndexPage /> },
    { segments: ["sections"],   title: "Sections",    searchBody: sectionsIndexSearchBody, render: () => <SectionsIndexPage /> },
    { segments: ["readings"],   title: "Readings",    searchBody: readingsIndexSearchBody, render: () => <ReadingsIndexPage /> },
    { segments: ["hw"],         title: "Assignments", searchBody: hwIndexSearchBody,       render: () => <HwIndexPage /> },
    { segments: ["tasks"],      title: "Tasks",       searchBody: tasksSearchBody,         render: () => <TasksPage /> },

    { segments: ["lectures", "wk01-l1"], title: "Wk 1, The B2C funnel",           searchBody: wk01L1SearchBody, render: () => <Wk01L1Page /> },
    { segments: ["lectures", "wk01-l2"], title: "Wk 1, Reading metrics honestly", searchBody: wk01L2SearchBody, render: () => <Wk01L2Page /> },
    { segments: ["lectures", "wk02-l1"], title: "Wk 2, Activation",               searchBody: wk02L1SearchBody, render: () => <Wk02L1Page /> },
    { segments: ["lectures", "wk02-l2"], title: "Wk 2, Onboarding teardown",      searchBody: wk02L2SearchBody, render: () => <Wk02L2Page /> },
    { segments: ["lectures", "wk03-l1"], title: "Wk 3, Pricing for B2C",          searchBody: wk03L1SearchBody, render: () => <Wk03L1Page /> },
    { segments: ["lectures", "wk03-l2"], title: "Wk 3, Paywall design",           searchBody: wk03L2SearchBody, render: () => <Wk03L2Page /> },
    { segments: ["lectures", "wk04-l1"], title: "Wk 4, Retention",                searchBody: wk04L1SearchBody, render: () => <Wk04L1Page /> },
    { segments: ["lectures", "wk04-l2"], title: "Wk 4, Cohort analysis",          searchBody: wk04L2SearchBody, render: () => <Wk04L2Page /> },
    { segments: ["lectures", "wk05-l1"], title: "Wk 5, A/B testing rigor",        searchBody: wk05L1SearchBody, render: () => <Wk05L1Page /> },
    { segments: ["lectures", "wk05-l2"], title: "Wk 5, Release management",       searchBody: wk05L2SearchBody, render: () => <Wk05L2Page /> },
    { segments: ["lectures", "wk06-l1"], title: "Wk 6, Picking a wedge channel",  searchBody: wk06L1SearchBody, render: () => <Wk06L1Page /> },
    { segments: ["lectures", "wk06-l2"], title: "Wk 6, SEO + content engines",    searchBody: wk06L2SearchBody, render: () => <Wk06L2Page /> },
    { segments: ["lectures", "wk07-l1"], title: "Wk 7, Social + virality",        searchBody: wk07L1SearchBody, render: () => <Wk07L1Page /> },
    { segments: ["lectures", "wk07-l2"], title: "Wk 7, Paid acquisition basics",  searchBody: wk07L2SearchBody, render: () => <Wk07L2Page /> },
    { segments: ["lectures", "wk08-l1"], title: "Wk 8, App store mechanics",      searchBody: wk08L1SearchBody, render: () => <Wk08L1Page /> },
    { segments: ["lectures", "wk08-l2"], title: "Wk 8, ASO + screenshots",        searchBody: wk08L2SearchBody, render: () => <Wk08L2Page /> },
    { segments: ["lectures", "wk09-l1"], title: "Wk 9, Lifecycle messaging",      searchBody: wk09L1SearchBody, render: () => <Wk09L1Page /> },
    { segments: ["lectures", "wk09-l2"], title: "Wk 9, Referral loops",           searchBody: wk09L2SearchBody, render: () => <Wk09L2Page /> },
    { segments: ["lectures", "wk10-l1"], title: "Wk 10, Diagnosing stalled MRR",  searchBody: wk10L1SearchBody, render: () => <Wk10L1Page /> },
    { segments: ["lectures", "wk10-l2"], title: "Wk 10, Past $10k: what changes", searchBody: wk10L2SearchBody, render: () => <Wk10L2Page /> },

    { segments: ["sections", "wk01"], title: "Wk 1 Section, Wire your funnel",          searchBody: sb(wk01SectionSearchBody), render: () => <Wk01SectionPage /> },
    { segments: ["sections", "wk02"], title: "Wk 2 Section, Activation audit",          searchBody: sb(wk02SectionSearchBody), render: () => <Wk02SectionPage /> },
    { segments: ["sections", "wk03"], title: "Wk 3 Section, Pricing experiment",        searchBody: sb(wk03SectionSearchBody), render: () => <Wk03SectionPage /> },
    { segments: ["sections", "wk04"], title: "Wk 4 Section, Build a cohort chart",      searchBody: sb(wk04SectionSearchBody), render: () => <Wk04Section /> },
    { segments: ["sections", "wk05"], title: "Wk 5 Section, Design one A/B test",       searchBody: sb(wk05SectionSearchBody), render: () => <Wk05Section /> },
    { segments: ["sections", "wk06"], title: "Wk 6 Section, Channel-fit worksheet",     searchBody: sb(wk06SectionSearchBody), render: () => <Wk06SectionPage /> },
    { segments: ["sections", "wk07"], title: "Wk 7 Section, Write one viral asset",     searchBody: sb(wk07SectionSearchBody), render: () => <Wk07SectionPage /> },
    { segments: ["sections", "wk08"], title: "Wk 8 Section, Ship to the stores",        searchBody: sb(wk08SectionSearchBody), render: () => <Wk08SectionPage /> },
    { segments: ["sections", "wk09"], title: "Wk 9 Section, Wire one lifecycle email",  searchBody: sb(wk09SectionSearchBody), render: () => <Wk09SectionPage /> },
    { segments: ["sections", "wk10"], title: "Wk 10 Section, Stall diagnosis clinic",   searchBody: sb(wk10SectionSearchBody), render: () => <Wk10Section /> },

    { segments: ["readings", "wk01"], title: "Wk 1 Reading, The B2C funnel",         searchBody: wk01ReadingSearchBody, render: () => <Wk01Reading /> },
    { segments: ["readings", "wk02"], title: "Wk 2 Reading, Activation",             searchBody: wk02ReadingSearchBody, render: () => <Wk02Reading /> },
    { segments: ["readings", "wk03"], title: "Wk 3 Reading, Pricing",                searchBody: wk03ReadingSearchBody, render: () => <Wk03Reading /> },
    { segments: ["readings", "wk04"], title: "Wk 4 Reading, Retention",              searchBody: wk04ReadingSearchBody, render: () => <Wk04Reading /> },
    { segments: ["readings", "wk05"], title: "Wk 5 Reading, Experimentation + release", searchBody: wk05ReadingSearchBody, render: () => <Wk05Reading /> },
    { segments: ["readings", "wk06"], title: "Wk 6 Reading, Wedge channels + SEO",   searchBody: wk06ReadingSearchBody, render: () => <Wk06Reading /> },
    { segments: ["readings", "wk07"], title: "Wk 7 Reading, Social, virality, paid", searchBody: wk07ReadingSearchBody, render: () => <Wk07Reading /> },
    { segments: ["readings", "wk08"], title: "Wk 8 Reading, App stores + ASO",       searchBody: wk08ReadingSearchBody, render: () => <Wk08Reading /> },
    { segments: ["readings", "wk09"], title: "Wk 9 Reading, Lifecycle + referral",   searchBody: wk09ReadingSearchBody, render: () => <Wk09Reading /> },
    { segments: ["readings", "wk10"], title: "Wk 10 Reading, Diagnosis + scaling",   searchBody: wk10ReadingSearchBody, render: () => <Wk10Reading /> },

    { segments: ["hw", "1"],        title: "HW1, Funnel + first instrumentation",        searchBody: sb(hw1SearchBody),        render: () => <Hw1Page /> },
    { segments: ["hw", "2"],        title: "HW2, Pricing + paywall",                     searchBody: sb(hw2SearchBody),        render: () => <Hw2Page /> },
    { segments: ["hw", "3"],        title: "HW3, Wedge channel sprint",                  searchBody: sb(hw3SearchBody),        render: () => <Hw3Page /> },
    { segments: ["hw", "4"],        title: "HW4, Retention engine",                      searchBody: sb(hw4SearchBody),        render: () => <Hw4Page /> },
    { segments: ["hw", "capstone"], title: "Capstone, Plan + ship the path to $10k MRR", searchBody: sb(hwCapstoneSearchBody), render: () => <HwCapstonePage /> },
  ],
};
