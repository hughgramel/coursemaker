import { AnchorHeading } from "@/components/AnchorHeading";

export function StaffPage() {
  return (
    <>
      <AnchorHeading as="h1" id="staff">Staff</AnchorHeading>
      <p>
        This course is taught by practitioners with first-hand experience
        scaling at least one B2C product past $10k MRR. Staff bring their own
        funnel, dashboard, and current MRR to share with the class on Day 1 —
        the course practices what it teaches.
      </p>

      <AnchorHeading as="h2" id="how-staff-help">How staff help</AnchorHeading>
      <ul>
        <li>
          <strong>Section.</strong> Where staff guide the week&rsquo;s
          hands-on activity. Bring your real numbers; sections are not
          re-lectures.
        </li>
        <li>
          <strong>Office hours.</strong> 1:1 product help. Bring your
          dashboard, your cohort chart, your paywall, your store listing —
          not abstract questions.
        </li>
        <li>
          <strong>Capstone defense (week 10).</strong> Staff are the most
          skeptical investors you&rsquo;ll pitch in this course. The defense
          is the point: it&rsquo;s where the plan gets stress-tested before
          you commit 30 days of your life to it.
        </li>
      </ul>

      <AnchorHeading as="h2" id="getting-help">Getting help between sessions</AnchorHeading>
      <ul>
        <li>Use the course communication channel (set up in week 1) for content questions and peer accountability.</li>
        <li>Peer accountability groups are assigned in week 1 and swapped at week 6 when channel commitments lock.</li>
        <li>If you&rsquo;re stuck on something concrete (a Stripe integration, a TestFlight reject, an SQL cohort query), post the actual error or screenshot, not a description of it.</li>
      </ul>

      <p>
        Specific staff names, office hours, and the course communication channel
        are confirmed before the term begins.
      </p>
    </>
  );
}

export const staffSearchBody =
  "Staff section office hours capstone defense peer accountability getting help";
