import { AnchorHeading } from "@/components/AnchorHeading";

export function StaffPage() {
  return (
    <>
      <AnchorHeading as="h1" id="staff">Staff</AnchorHeading>
      <p>
        This course is taught by practitioners with real experience in the
        subject. Staff bring their own working examples to the cohort.
      </p>

      <AnchorHeading as="h2" id="how-staff-help">How staff help</AnchorHeading>
      <ul>
        <li><strong>Section.</strong> Where staff guide the week&rsquo;s hands-on activity. Bring real work; sections are not re-lectures.</li>
        <li><strong>Office hours.</strong> 1:1 help on your specific problem. Bring artifacts (drafts, screenshots, code), not abstract questions.</li>
        <li><strong>Capstone defense.</strong> Staff are the most skeptical reviewers your work will face in this course.</li>
      </ul>

      <AnchorHeading as="h2" id="getting-help">Getting help between sessions</AnchorHeading>
      <ul>
        <li>Use the course communication channel (set up in week 1) for content questions and peer accountability.</li>
        <li>Post the actual error or screenshot, not a description of it.</li>
      </ul>

      <p>Specific staff names and office hours are confirmed before the term begins.</p>
    </>
  );
}

export const staffSearchBody = "Staff section office hours capstone defense getting help";
