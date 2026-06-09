import type { SiteConfig } from "@/types/course";

export const config: SiteConfig = {
  slug: "b2c-10k-mrr-26au",
  title: "B2C → $10k MRR",
  fullTitle: "B2C to $10k MRR — A 10-Week Growth Manual for Technical Founders",
  term: "Autumn 2026",
  description:
    "A 10-week growth manual for technical founders shipping a B2C product. Each week is a concrete task; case studies of real journeys to $10k MRR (langobee, Nomad List, Typing Mind, Tony Dinh's apps, Marc Lou's portfolio) get applied to your own product.",
  hero: {
    src: "/c/b2c-10k-mrr-26au/hero.svg",
    alt: "A revenue curve compounding from zero toward ten thousand",
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
            { label: "Wk 1 — The funnel",                href: "lectures/wk01-l1" },
            { label: "Wk 1 — Reading metrics honestly",  href: "lectures/wk01-l2" },
            { label: "Wk 2 — Activation",                href: "lectures/wk02-l1" },
            { label: "Wk 2 — Onboarding teardown",       href: "lectures/wk02-l2" },
            { label: "Wk 3 — Pricing for B2C",           href: "lectures/wk03-l1" },
            { label: "Wk 3 — Paywall design",            href: "lectures/wk03-l2" },
            { label: "Wk 4 — Retention",                 href: "lectures/wk04-l1" },
            { label: "Wk 4 — Cohort analysis",           href: "lectures/wk04-l2" },
            { label: "Wk 5 — A/B testing rigor",         href: "lectures/wk05-l1" },
            { label: "Wk 5 — Release management",        href: "lectures/wk05-l2" },
            { label: "Wk 6 — Picking a wedge channel",   href: "lectures/wk06-l1" },
            { label: "Wk 6 — SEO + content engines",     href: "lectures/wk06-l2" },
            { label: "Wk 7 — Social + virality",         href: "lectures/wk07-l1" },
            { label: "Wk 7 — Paid acquisition basics",   href: "lectures/wk07-l2" },
            { label: "Wk 8 — App store mechanics",       href: "lectures/wk08-l1" },
            { label: "Wk 8 — ASO + screenshots",         href: "lectures/wk08-l2" },
            { label: "Wk 9 — Lifecycle messaging",       href: "lectures/wk09-l1" },
            { label: "Wk 9 — Referral loops",            href: "lectures/wk09-l2" },
            { label: "Wk 10 — Diagnosing stalled MRR",   href: "lectures/wk10-l1" },
            { label: "Wk 10 — Past $10k: scaling up",    href: "lectures/wk10-l2" },
          ],
        },
        {
          label: "Sections",
          href: "sections",
          children: [
            { label: "Wk 1 — Wire your funnel",          href: "sections/wk01" },
            { label: "Wk 2 — Activation audit",          href: "sections/wk02" },
            { label: "Wk 3 — Pricing experiment",        href: "sections/wk03" },
            { label: "Wk 4 — Build a cohort chart",      href: "sections/wk04" },
            { label: "Wk 5 — Design one A/B test",       href: "sections/wk05" },
            { label: "Wk 6 — Channel-fit worksheet",     href: "sections/wk06" },
            { label: "Wk 7 — Write one viral asset",     href: "sections/wk07" },
            { label: "Wk 8 — Ship to the app store",     href: "sections/wk08" },
            { label: "Wk 9 — Wire one lifecycle email",  href: "sections/wk09" },
            { label: "Wk 10 — Stall diagnosis clinic",   href: "sections/wk10" },
          ],
        },
        {
          label: "Assignments",
          href: "hw",
          children: [
            { label: "HW1 — Funnel + first instrumentation",         href: "hw/1" },
            { label: "HW2 — Pricing + paywall",                       href: "hw/2" },
            { label: "HW3 — Wedge channel sprint",                    href: "hw/3" },
            { label: "HW4 — Retention engine",                        href: "hw/4" },
            { label: "Capstone — Plan + ship the path to $10k MRR",   href: "hw/capstone" },
          ],
        },
        {
          label: "Readings",
          href: "readings",
          children: [
            { label: "Wk 1 — The B2C funnel",            href: "readings/wk01" },
            { label: "Wk 2 — Activation",                href: "readings/wk02" },
            { label: "Wk 3 — Pricing",                   href: "readings/wk03" },
            { label: "Wk 4 — Retention",                 href: "readings/wk04" },
            { label: "Wk 5 — Experimentation + release", href: "readings/wk05" },
            { label: "Wk 6 — Wedge channels + SEO",      href: "readings/wk06" },
            { label: "Wk 7 — Social, virality, paid",    href: "readings/wk07" },
            { label: "Wk 8 — App stores + ASO",          href: "readings/wk08" },
            { label: "Wk 9 — Lifecycle + referral",      href: "readings/wk09" },
            { label: "Wk 10 — Diagnosis + scaling",      href: "readings/wk10" },
          ],
        },
        { label: "Staff", href: "staff" },
      ],
    },
    {
      items: [
        { label: "Stripe Atlas guides",                       href: "https://stripe.com/atlas/guides", external: true },
        { label: "Indie Hackers",                              href: "https://www.indiehackers.com/", external: true },
        { label: "Pieter Levels — MAKE (free chapters)",       href: "https://readmake.com/", external: true },
        { label: "Marc Lou — Indie maker resources",           href: "https://marclou.com/", external: true },
        { label: "Lenny's Newsletter",                          href: "https://www.lennysnewsletter.com/", external: true },
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
