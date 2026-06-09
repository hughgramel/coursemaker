import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "grow-on-x-26au",
  title: "Grow on X",
  fullTitle: "Grow on X: From Zero to 10,000 Followers",
  term: "Autumn 2026",
  description:
    "A 6-week practical course for solo creators going from near-zero to 10,000 followers on X. Niche and positioning, post craft, the algorithm, the reply game, sustainable weekly systems, analytics, and a 90-day playbook. Sources from Paul Graham, Kevin Kelly, the open-sourced X algorithm, Justin Welsh, Dickie Bush, Nicolas Cole, David Perell, Dan Koe, Andrew Chen, and recent X algorithm reporting.",
  hero: {
    src: "/c/grow-on-x-26au/hero.svg",
    alt: "A small node growing into a network of connected accounts",
  },
  navGroups: [
    {
      items: [
        { label: "Home", href: "" },
        { label: "Syllabus", href: "syllabus" },
        {
          label: "Lectures",
          href: "lectures",
          children: [
            { label: "Wk 1 — The follower funnel",         href: "lectures/wk01-l1" },
            { label: "Wk 1 — Niche, voice, and bio",       href: "lectures/wk01-l2" },
            { label: "Wk 2 — Anatomy of a hook",           href: "lectures/wk02-l1" },
            { label: "Wk 2 — Post formats",                href: "lectures/wk02-l2" },
            { label: "Wk 3 — How posts spread on X",       href: "lectures/wk03-l1" },
            { label: "Wk 3 — The reply game",              href: "lectures/wk03-l2" },
            { label: "Wk 4 — Calendars and batching",      href: "lectures/wk04-l1" },
            { label: "Wk 4 — Collaboration and network",   href: "lectures/wk04-l2" },
            { label: "Wk 5 — What to measure",             href: "lectures/wk05-l1" },
            { label: "Wk 5 — Testing and iterating",       href: "lectures/wk05-l2" },
            { label: "Wk 6 — The 10k roadmap",             href: "lectures/wk06-l1" },
            { label: "Wk 6 — Life after 10k",              href: "lectures/wk06-l2" },
          ],
        },
        {
          label: "Sections",
          href: "sections",
          children: [
            { label: "Wk 1 — Audit five accounts",         href: "sections/wk01" },
            { label: "Wk 2 — Hook lab",                    href: "sections/wk02" },
            { label: "Wk 3 — Reply sprint",                href: "sections/wk03" },
            { label: "Wk 4 — Build your weekly system",    href: "sections/wk04" },
            { label: "Wk 5 — Read your analytics",         href: "sections/wk05" },
            { label: "Wk 6 — Capstone demo day",           href: "sections/wk06" },
          ],
        },
        {
          label: "Assignments",
          href: "hw",
          children: [
            { label: "HW1 — Niche and bio rewrite",            href: "hw/1" },
            { label: "HW2 — Twenty posts in seven days",        href: "hw/2" },
            { label: "HW3 — Run your system for two weeks",     href: "hw/3" },
            { label: "HW4 — Thirty-day growth experiment",      href: "hw/4" },
            { label: "Capstone — 90-day playbook",              href: "hw/capstone" },
          ],
        },
        {
          label: "Readings",
          href: "readings",
          children: [
            { label: "Wk 1 — Funnel, niche, bio",                  href: "readings/wk01" },
            { label: "Wk 2 — Hooks and formats",                   href: "readings/wk02" },
            { label: "Wk 3 — The algorithm and the reply game",    href: "readings/wk03" },
            { label: "Wk 4 — The weekly system",                   href: "readings/wk04" },
            { label: "Wk 5 — Analytics and iteration",             href: "readings/wk05" },
            { label: "Wk 6 — The 90-day playbook",                 href: "readings/wk06" },
          ],
        },
      ],
    },
    {
      items: [
        { label: "Kevin Kelly — 1,000 True Fans",              href: "https://kk.org/thetechnium/1000-true-fans/", external: true },
        { label: "Paul Graham — Do Things That Don't Scale",   href: "https://paulgraham.com/ds.html", external: true },
        { label: "X algorithm (open source)",                   href: "https://github.com/twitter/the-algorithm", external: true },
        { label: "Justin Welsh — The Saturday Solopreneur",    href: "https://www.justinwelsh.me/newsletter", external: true },
        { label: "Dan Koe — Letters",                           href: "https://thedankoe.com/letters/", external: true },
        { label: "Growth in Reverse (Chenell Basilio)",         href: "https://growthinreverse.com/", external: true },
      ],
    },
  ],
  footer: {
    lines: [
      "A course website built with coursemaker.",
      "© 2026 Course staff.",
    ],
  },
};
