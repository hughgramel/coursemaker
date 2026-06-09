"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SearchIcon } from "./icons";

export interface SearchDoc {
  title: string;
  href: string;
  /** Plain text body searched by includes(). */
  body: string;
  /** Optional breadcrumb shown above the title. */
  breadcrumb?: string;
}

interface SearchBarProps {
  docs: SearchDoc[];
  placeholder?: string;
}

export function SearchBar({ docs, placeholder = "Search CSE 457" }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return docs
      .map((doc) => {
        const titleHit = doc.title.toLowerCase().includes(q);
        const bodyHit = doc.body.toLowerCase().includes(q);
        if (!titleHit && !bodyHit) return null;
        const idx = doc.body.toLowerCase().indexOf(q);
        const snippet =
          idx >= 0
            ? "…" +
              doc.body.slice(Math.max(0, idx - 30), idx + q.length + 60).trim() +
              "…"
            : doc.body.slice(0, 90).trim() + "…";
        return { ...doc, snippet, score: titleHit ? 2 : 1 };
      })
      .filter((r): r is NonNullable<typeof r> => r !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [query, docs]);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full h-full">
      <div className="flex items-center h-full px-4">
        <SearchIcon className="text-[var(--color-faint)] shrink-0" />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="w-full h-full ml-2 bg-transparent outline-none text-[15px] text-[var(--color-heading)] placeholder:text-[var(--color-faint)]"
          aria-label="Search"
        />
      </div>

      {open && results.length > 0 && (
        <div className="absolute left-0 right-0 top-full bg-white border-t border-b border-[var(--color-border)] shadow-md z-30 max-h-[60vh] overflow-y-auto">
          <ul className="py-2">
            {results.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 hover:bg-[var(--color-sidebar)] transition-colors"
                >
                  {r.breadcrumb && (
                    <div className="text-xs uppercase tracking-wide text-[var(--color-faint)] mb-0.5">
                      {r.breadcrumb}
                    </div>
                  )}
                  <div className="text-[15px] font-medium text-[var(--color-primary)]">
                    {r.title}
                  </div>
                  <div className="text-xs text-[var(--color-muted)] mt-0.5 line-clamp-2">
                    {r.snippet}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute left-0 right-0 top-full bg-white border-t border-b border-[var(--color-border)] shadow-md z-30 px-6 py-4">
          <p className="text-sm text-[var(--color-muted)]">No results for &ldquo;{query}&rdquo;.</p>
        </div>
      )}
    </div>
  );
}
