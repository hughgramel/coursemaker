import type { StaffMember } from "@/types/course";

export function StaffGrid({ staff }: { staff: StaffMember[] }) {
  return (
    <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      {staff.map((p) => (
        <div key={p.name} className="flex gap-3 border border-[var(--color-border)] rounded-lg p-3 bg-white">
          {p.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.photo} alt="" width={64} height={64}
              className="w-16 h-16 rounded-full object-cover shrink-0" />
          ) : (
            <div aria-hidden="true" className="w-16 h-16 rounded-full bg-[var(--color-sidebar)] flex items-center justify-center text-[var(--color-faint)] text-lg shrink-0">
              {p.name.split(/\s+/).map((s) => s[0]).join("").slice(0, 2)}
            </div>
          )}
          <div className="min-w-0">
            <div className="font-medium text-[var(--color-heading)] truncate">{p.name}</div>
            <div className="text-xs uppercase tracking-wider text-[var(--color-faint)] mb-1">{p.role}</div>
            {p.email && (
              <div className="text-xs">
                <a href={`mailto:${p.email}`} className="text-[var(--color-primary)] hover:underline break-all">{p.email}</a>
              </div>
            )}
            {p.officeHours?.length ? (
              <ul className="text-xs mt-1 space-y-0.5">
                {p.officeHours.map((oh, i) => (
                  <li key={i} className="text-[var(--color-body)]">
                    {oh.when}{oh.where ? ` — ${oh.where}` : ""}
                  </li>
                ))}
              </ul>
            ) : null}
            {p.bio && <p className="text-xs text-[var(--color-muted)] mt-1">{p.bio}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
