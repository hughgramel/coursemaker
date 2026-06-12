import type { Course } from "@/types/course";
import { config } from "./course.config";
import { HomePage, homeSearchBody } from "./pages/home";
import { SyllabusPage, syllabusSearchBody } from "./pages/syllabus";
import { TasksPage, tasksSearchBody } from "./pages/tasks";
import { GlossaryPage, glossarySearchBody } from "./pages/glossary";
import { LecturesIndexPage, lecturesIndexSearchBody } from "./pages/lectures-index";
import { SectionsIndexPage, sectionsIndexSearchBody } from "./pages/sections-index";
import { ReadingsIndexPage, readingsIndexSearchBody } from "./pages/readings-index";
import { HwIndexPage, hwIndexSearchBody } from "./pages/hw-index";

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
import { Wk11L1Page, wk11L1SearchBody } from "./pages/lectures/wk11-l1";
import { Wk11L2Page, wk11L2SearchBody } from "./pages/lectures/wk11-l2";
import { Wk12L1Page, wk12L1SearchBody } from "./pages/lectures/wk12-l1";
import { Wk12L2Page, wk12L2SearchBody } from "./pages/lectures/wk12-l2";

import { Wk01SectionPage, wk01SectionSearchBody } from "./pages/sections/wk01";
import { Wk02SectionPage, wk02SectionSearchBody } from "./pages/sections/wk02";
import { Wk03SectionPage, wk03SectionSearchBody } from "./pages/sections/wk03";
import { Wk04SectionPage, wk04SectionSearchBody } from "./pages/sections/wk04";
import { Wk05SectionPage, wk05SectionSearchBody } from "./pages/sections/wk05";
import { Wk06SectionPage, wk06SectionSearchBody } from "./pages/sections/wk06";
import { Wk07SectionPage, wk07SectionSearchBody } from "./pages/sections/wk07";
import { Wk08SectionPage, wk08SectionSearchBody } from "./pages/sections/wk08";
import { Wk09SectionPage, wk09SectionSearchBody } from "./pages/sections/wk09";
import { Wk10SectionPage, wk10SectionSearchBody } from "./pages/sections/wk10";
import { Wk11SectionPage, wk11SectionSearchBody } from "./pages/sections/wk11";
import { Wk12SectionPage, wk12SectionSearchBody } from "./pages/sections/wk12";

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
import { Wk11Reading, wk11ReadingSearchBody } from "./pages/readings/wk11";
import { Wk12Reading, wk12ReadingSearchBody } from "./pages/readings/wk12";

import { Hw1Page, hw1SearchBody } from "./pages/hw/1";
import { Hw2Page, hw2SearchBody } from "./pages/hw/2";
import { Hw3Page, hw3SearchBody } from "./pages/hw/3";
import { Hw4Page, hw4SearchBody } from "./pages/hw/4";
import { CapstonePage, capstoneSearchBody } from "./pages/hw/capstone";

export const course: Course = {
  config,
  pages: [
    { segments: [], title: "Home", searchBody: homeSearchBody, render: () => <HomePage /> },
    { segments: ["tasks"], title: "Tasks", searchBody: tasksSearchBody, render: () => <TasksPage /> },
    { segments: ["syllabus"], title: "Syllabus", searchBody: syllabusSearchBody, render: () => <SyllabusPage /> },
    { segments: ["glossary"], title: "Glossary", searchBody: glossarySearchBody, render: () => <GlossaryPage /> },
    { segments: ["lectures"], title: "Lectures", searchBody: lecturesIndexSearchBody, render: () => <LecturesIndexPage /> },
    { segments: ["sections"], title: "Sections", searchBody: sectionsIndexSearchBody, render: () => <SectionsIndexPage /> },
    { segments: ["hw"], title: "Assignments", searchBody: hwIndexSearchBody, render: () => <HwIndexPage /> },
    { segments: ["readings"], title: "Readings", searchBody: readingsIndexSearchBody, render: () => <ReadingsIndexPage /> },

    { segments: ["lectures", "wk01-l1"], title: "L1: The honest dashboard", searchBody: wk01L1SearchBody, render: () => <Wk01L1Page /> },
    { segments: ["lectures", "wk01-l2"], title: "L2: LangoBee's funnel, audited", searchBody: wk01L2SearchBody, render: () => <Wk01L2Page /> },
    { segments: ["lectures", "wk02-l1"], title: "L1: What a thesis is for", searchBody: wk02L1SearchBody, render: () => <Wk02L1Page /> },
    { segments: ["lectures", "wk02-l2"], title: "L2: Pivot or persevere", searchBody: wk02L2SearchBody, render: () => <Wk02L2Page /> },
    { segments: ["lectures", "wk03-l1"], title: "L1: Quality is binary", searchBody: wk03L1SearchBody, render: () => <Wk03L1Page /> },
    { segments: ["lectures", "wk03-l2"], title: "L2: Onboarding to first aha", searchBody: wk03L2SearchBody, render: () => <Wk03L2Page /> },
    { segments: ["lectures", "wk04-l1"], title: "L1: Why they come back", searchBody: wk04L1SearchBody, render: () => <Wk04L1Page /> },
    { segments: ["lectures", "wk04-l2"], title: "L2: Instrumenting return", searchBody: wk04L2SearchBody, render: () => <Wk04L2Page /> },
    { segments: ["lectures", "wk05-l1"], title: "L1: Do things that don't scale", searchBody: wk05L1SearchBody, render: () => <Wk05L1Page /> },
    { segments: ["lectures", "wk05-l2"], title: "L2: Reading tiny cohorts", searchBody: wk05L2SearchBody, render: () => <Wk05L2Page /> },
    { segments: ["lectures", "wk06-l1"], title: "L1: Pricing is a test of belief", searchBody: wk06L1SearchBody, render: () => <Wk06L1Page /> },
    { segments: ["lectures", "wk06-l2"], title: "L2: The trial funnel", searchBody: wk06L2SearchBody, render: () => <Wk06L2Page /> },
    { segments: ["lectures", "wk07-l1"], title: "L1: Paywall placement", searchBody: wk07L1SearchBody, render: () => <Wk07L1Page /> },
    { segments: ["lectures", "wk07-l2"], title: "L2: Trial to paid", searchBody: wk07L2SearchBody, render: () => <Wk07L2Page /> },
    { segments: ["lectures", "wk08-l1"], title: "L1: Unit economics of $10K", searchBody: wk08L1SearchBody, render: () => <Wk08L1Page /> },
    { segments: ["lectures", "wk08-l2"], title: "L2: Working backward to traffic", searchBody: wk08L2SearchBody, render: () => <Wk08L2Page /> },
    { segments: ["lectures", "wk09-l1"], title: "L1: Launching where learners live", searchBody: wk09L1SearchBody, render: () => <Wk09L1Page /> },
    { segments: ["lectures", "wk09-l2"], title: "L2: The launch as an instrument", searchBody: wk09L2SearchBody, render: () => <Wk09L2Page /> },
    { segments: ["lectures", "wk10-l1"], title: "L1: The creator channel", searchBody: wk10L1SearchBody, render: () => <Wk10L1Page /> },
    { segments: ["lectures", "wk10-l2"], title: "L2: Partner, sponsor, or affiliate", searchBody: wk10L2SearchBody, render: () => <Wk10L2Page /> },
    { segments: ["lectures", "wk11-l1"], title: "L1: Loops, not funnels", searchBody: wk11L1SearchBody, render: () => <Wk11L1Page /> },
    { segments: ["lectures", "wk11-l2"], title: "L2: The content engine you already have", searchBody: wk11L2SearchBody, render: () => <Wk11L2Page /> },
    { segments: ["lectures", "wk12-l1"], title: "L1: The weekly machine", searchBody: wk12L1SearchBody, render: () => <Wk12L1Page /> },
    { segments: ["lectures", "wk12-l2"], title: "L2: From here to $10K", searchBody: wk12L2SearchBody, render: () => <Wk12L2Page /> },

    { segments: ["sections", "wk01"], title: "Section 1: Rebuild the de-alted dashboard", searchBody: wk01SectionSearchBody, render: () => <Wk01SectionPage /> },
    { segments: ["sections", "wk02"], title: "Section 2: The fork decision memo", searchBody: wk02SectionSearchBody, render: () => <Wk02SectionPage /> },
    { segments: ["sections", "wk03"], title: "Section 3: The must-work checklist", searchBody: wk03SectionSearchBody, render: () => <Wk03SectionPage /> },
    { segments: ["sections", "wk04"], title: "Section 4: The hook and the D1 dashboard", searchBody: wk04SectionSearchBody, render: () => <Wk04SectionPage /> },
    { segments: ["sections", "wk05"], title: "Section 5: Outreach script and interview guide", searchBody: wk05SectionSearchBody, render: () => <Wk05SectionPage /> },
    { segments: ["sections", "wk06"], title: "Section 6: WTP script and price positioning", searchBody: wk06SectionSearchBody, render: () => <Wk06SectionPage /> },
    { segments: ["sections", "wk07"], title: "Section 7: Paywall placement audit", searchBody: wk07SectionSearchBody, render: () => <Wk07SectionPage /> },
    { segments: ["sections", "wk08"], title: "Section 8: The MRR model", searchBody: wk08SectionSearchBody, render: () => <Wk08SectionPage /> },
    { segments: ["sections", "wk09"], title: "Section 9: Launch drafts and pre-mortem", searchBody: wk09SectionSearchBody, render: () => <Wk09SectionPage /> },
    { segments: ["sections", "wk10"], title: "Section 10: The creator prospect list", searchBody: wk10SectionSearchBody, render: () => <Wk10SectionPage /> },
    { segments: ["sections", "wk11"], title: "Section 11: Three clips through the pipeline", searchBody: wk11SectionSearchBody, render: () => <Wk11SectionPage /> },
    { segments: ["sections", "wk12"], title: "Section 12: Capstone red-team", searchBody: wk12SectionSearchBody, render: () => <Wk12SectionPage /> },

    { segments: ["readings", "wk01"], title: "Week 1 reading: Ground truth", searchBody: wk01ReadingSearchBody, render: () => <Wk01Reading /> },
    { segments: ["readings", "wk02"], title: "Week 2 reading: Thesis discipline", searchBody: wk02ReadingSearchBody, render: () => <Wk02Reading /> },
    { segments: ["readings", "wk03"], title: "Week 3 reading: The broken-vacuum bar", searchBody: wk03ReadingSearchBody, render: () => <Wk03Reading /> },
    { segments: ["readings", "wk04"], title: "Week 4 reading: Hooks", searchBody: wk04ReadingSearchBody, render: () => <Wk04Reading /> },
    { segments: ["readings", "wk05"], title: "Week 5 reading: The 10-user test", searchBody: wk05ReadingSearchBody, render: () => <Wk05Reading /> },
    { segments: ["readings", "wk06"], title: "Week 6 reading: Price as a hypothesis", searchBody: wk06ReadingSearchBody, render: () => <Wk06Reading /> },
    { segments: ["readings", "wk07"], title: "Week 7 reading: Conversion", searchBody: wk07ReadingSearchBody, render: () => <Wk07Reading /> },
    { segments: ["readings", "wk08"], title: "Week 8 reading: The $10K math", searchBody: wk08ReadingSearchBody, render: () => <Wk08Reading /> },
    { segments: ["readings", "wk09"], title: "Week 9 reading: Community launch", searchBody: wk09ReadingSearchBody, render: () => <Wk09Reading /> },
    { segments: ["readings", "wk10"], title: "Week 10 reading: Creators and the 50% question", searchBody: wk10ReadingSearchBody, render: () => <Wk10Reading /> },
    { segments: ["readings", "wk11"], title: "Week 11 reading: Owned loops", searchBody: wk11ReadingSearchBody, render: () => <Wk11Reading /> },
    { segments: ["readings", "wk12"], title: "Week 12 reading: The operating system", searchBody: wk12ReadingSearchBody, render: () => <Wk12Reading /> },

    { segments: ["hw", "1"], title: "HW1: The honest dashboard", searchBody: hw1SearchBody, render: () => <Hw1Page /> },
    { segments: ["hw", "2"], title: "HW2: MVP-grade plus the cohort test", searchBody: hw2SearchBody, render: () => <Hw2Page /> },
    { segments: ["hw", "3"], title: "HW3: First dollar", searchBody: hw3SearchBody, render: () => <Hw3Page /> },
    { segments: ["hw", "4"], title: "HW4: The launch and the creator wave", searchBody: hw4SearchBody, render: () => <Hw4Page /> },
    { segments: ["hw", "capstone"], title: "Capstone: The $10K MRR operating plan", searchBody: capstoneSearchBody, render: () => <CapstonePage /> },
  ],
};
