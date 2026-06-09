import type { Course } from "@/types/course";
import { config } from "./course.config";
import { HomePage, homeSearchBody } from "./pages/home";
import { SyllabusPage, syllabusSearchBody } from "./pages/syllabus";
import {
  ProjectsIndexPage,
  MazeGamePage,
  ModelerPage,
  TracerPage,
  SimulatorPage,
  ArtifactPage,
} from "./pages/projects";
import { LabsPage, labsSearchBody } from "./pages/labs";
import { ArtifactWinnersPage, artifactWinnersSearchBody } from "./pages/artifact-winners";

export const course: Course = {
  config,
  pages: [
    { segments: [], title: "Home", searchBody: homeSearchBody, render: () => <HomePage /> },
    { segments: ["syllabus"], title: "Syllabus", searchBody: syllabusSearchBody, render: () => <SyllabusPage /> },
    { segments: ["project"], title: "Projects", render: () => <ProjectsIndexPage /> },
    { segments: ["project", "maze-game"], title: "Project 1 MazeGame", render: () => <MazeGamePage /> },
    { segments: ["project", "modeler"], title: "Project 2 Modeler", render: () => <ModelerPage /> },
    { segments: ["project", "tracer"], title: "Project 3 Tracer", render: () => <TracerPage /> },
    { segments: ["project", "simulator"], title: "Project 4 Simulator", render: () => <SimulatorPage /> },
    { segments: ["project", "artifact"], title: "Project 5 Artifact", render: () => <ArtifactPage /> },
    { segments: ["labs"], title: "Lab Resources", searchBody: labsSearchBody, render: () => <LabsPage /> },
    { segments: ["artifact-winners"], title: "Artifact Winners", searchBody: artifactWinnersSearchBody, render: () => <ArtifactWinnersPage /> },
  ],
};
