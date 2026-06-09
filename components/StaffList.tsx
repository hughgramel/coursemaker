import type { StaffMember } from "@/types/course";

/**
 * StaffList — CSE-457-style inline staff listing.
 * Plain prose, no photo cards. One paragraph per person.
 */
export function StaffList({ staff }: { staff: StaffMember[] }) {
  return (
    <div>
      {staff.map((p) => (
        <p key={p.name}>
          <strong>{p.name}</strong>{" "}
          <span className="text-[var(--color-muted)]">({p.role})</span>
          {p.email && (
            <>
              {" — "}
              <a href={`mailto:${p.email}`}>{p.email}</a>
            </>
          )}
          {p.officeHours?.length ? (
            <>
              <br />
              <span className="text-[var(--color-muted)]">
                Office hours:{" "}
                {p.officeHours
                  .map((oh) => `${oh.when}${oh.where ? ` (${oh.where})` : ""}`)
                  .join("; ")}
              </span>
            </>
          ) : null}
          {p.bio && (
            <>
              <br />
              <span>{p.bio}</span>
            </>
          )}
        </p>
      ))}
    </div>
  );
}
