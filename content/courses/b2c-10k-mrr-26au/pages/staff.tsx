import { AnchorHeading } from "@/components/AnchorHeading";
import { StaffList } from "@/components/StaffList";
import type { StaffMember } from "@/types/course";

const staff: StaffMember[] = [
  {
    name: "TBD",
    role: "Instructor",
    officeHours: [{ when: "TBD", where: "TBD" }],
    bio: "Practitioner with first-hand experience scaling at least one B2C product past $10k MRR. The instructor's own funnel, dashboard, and current MRR are shared with the class on Day 1 — the course practices what it teaches.",
  },
  {
    name: "TBD",
    role: "TA",
    officeHours: [{ when: "TBD", where: "TBD" }],
    bio: "Indie founder or growth practitioner who has shipped a B2C product. Available for 1:1 product help and dashboard debugging.",
  },
];

export function StaffPage() {
  return (
    <>
      <AnchorHeading as="h1" id="staff">Staff</AnchorHeading>
      <p>
        Staff slots are filled before the course begins. Office hours are 1:1
        product help — bring your dashboard, your cohort chart, your paywall,
        not abstract questions.
      </p>
      <AnchorHeading as="h2" id="course-staff">Course staff</AnchorHeading>
      <StaffList staff={staff} />
      <AnchorHeading as="h2" id="getting-help">Getting help</AnchorHeading>
      <ul>
        <li>Post to the course Discord for content questions — answered within 24 hours.</li>
        <li>Bring your real numbers to section every week.</li>
        <li>Office hours are for 1:1 product help.</li>
        <li>Peer accountability groups are assigned in week 1 and swapped at week 6 when channel commitments lock.</li>
      </ul>
    </>
  );
}

export const staffSearchBody =
  "Staff instructor TA office hours office-hours Discord 1:1 help peer accountability";
