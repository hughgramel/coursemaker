import { AnchorHeading } from "@/components/AnchorHeading";

export function SyllabusPage() {
  return (
    <>
      <AnchorHeading as="h1" id="syllabus">Syllabus</AnchorHeading>
      <p>One-paragraph elevator pitch: arrive with X, leave with Y. Replace this stub.</p>

      <AnchorHeading as="h2" id="what-this-course-is-about">What this course is about</AnchorHeading>
      <p>Two short paragraphs on subject matter + course bias.</p>

      <AnchorHeading as="h2" id="fundamentals">The fundamentals</AnchorHeading>
      <p>3-5 non-negotiable principles the course steers learners toward.</p>
      <ol>
        <li><strong>Principle 1.</strong> One or two sentences.</li>
        <li><strong>Principle 2.</strong> One or two sentences.</li>
        <li><strong>Principle 3.</strong> One or two sentences.</li>
      </ol>

      <AnchorHeading as="h2" id="roadmap">The roadmap</AnchorHeading>
      <h3>Foundations (weeks 1-2)</h3>
      <p>What this phase tackles, what you leave it with.</p>
      <h3>Core mechanics</h3><p>...</p>
      <h3>Composition</h3><p>...</p>
      <h3>Frontier</h3><p>...</p>
      <h3>Synthesis</h3><p>...</p>

      <AnchorHeading as="h2" id="prerequisites">Prerequisites</AnchorHeading>
      <ul><li>What learners bring.</li></ul>

      <AnchorHeading as="h2" id="how-the-work-flows">How the work flows</AnchorHeading>
      <p>Brief paragraph: the daily / weekly rhythm.</p>

      <AnchorHeading as="h2" id="how-you-are-evaluated">How you are evaluated</AnchorHeading>
      <p>Six graded components. Exact weights are confirmed before the term begins; the structure below is fixed.</p>
      <ul>
        <li><strong>Weekly milestones.</strong> Brief description.</li>
        <li><strong>HW1.</strong> Brief description.</li>
      </ul>

      <AnchorHeading as="h2" id="policies">Policies</AnchorHeading>
      <h3>Late work</h3><p>Stub.</p>
      <h3>AI use</h3><p>Stub.</p>

      <AnchorHeading as="h2" id="reading-list">Reading list</AnchorHeading>
      <p>There is no required external textbook. The weekly readings on this site ARE the textbook.</p>
    </>
  );
}

export const syllabusSearchBody = "Syllabus overview fundamentals roadmap prerequisites policies";
