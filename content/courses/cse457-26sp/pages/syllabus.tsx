import { AnchorHeading } from "@/components/AnchorHeading";

export function SyllabusPage() {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>
      <p>
        CSE 457 introduces the foundations of computer graphics: geometric
        modeling, rendering, animation, and interaction. Students gain hands-on
        experience through five projects culminating in an open-ended Artifact.
      </p>

      <AnchorHeading as="h2" id="instructors">Instructors</AnchorHeading>
      <p>
        <strong>Lecture:</strong> Tuesdays / Thursdays (Q&amp;A), CSE2 G10. All
        lectures are pre-recorded — see the homepage calendar for links.
      </p>

      <AnchorHeading as="h2" id="grading">Grading</AnchorHeading>
      <table>
        <thead><tr><th>Component</th><th>Weight</th></tr></thead>
        <tbody>
          <tr><td>Project 1 MazeGame</td><td>10%</td></tr>
          <tr><td>Project 2 Modeler</td><td>15%</td></tr>
          <tr><td>Project 3 Tracer</td><td>20%</td></tr>
          <tr><td>Project 4 Simulator</td><td>15%</td></tr>
          <tr><td>Project 5 Artifact</td><td>30%</td></tr>
          <tr><td>Participation</td><td>10%</td></tr>
        </tbody>
      </table>

      <AnchorHeading as="h2" id="policies">Policies</AnchorHeading>
      <p>
        Late submissions lose 10% per day, up to three days. Collaboration is
        permitted on conceptual discussions but all submitted code and artifacts
        must be your own. Generative AI use must be disclosed.
      </p>

      <AnchorHeading as="h2" id="resources">Resources</AnchorHeading>
      <ul>
        <li>Ed Discussion Board — primary place to ask questions.</li>
        <li>Canvas — grade book, assignment submission.</li>
        <li>Office hours — see Ed for weekly schedule.</li>
      </ul>
    </>
  );
}

export const syllabusSearchBody =
  "Syllabus instructors grading projects participation policies late submissions collaboration AI use resources Ed Discussion Canvas office hours";
