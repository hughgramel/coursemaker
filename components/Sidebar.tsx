"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavGroup, NavItem, SiteConfig } from "@/types/course";
import { ChevronRightIcon, MenuIcon, CloseIcon, ExternalIcon } from "./icons";
import { resolveNavHref } from "@/lib/course";
import { cn } from "@/lib/cn";

interface SidebarProps {
  site: SiteConfig;
}

function isActiveItem(site: SiteConfig, item: NavItem, pathname: string): boolean {
  if (resolveNavHref(site, item.href) === pathname) return true;
  if (item.children?.some((c) => isActiveItem(site, c, pathname))) return true;
  return false;
}

function NavItemRow({
  site,
  item,
  pathname,
  depth,
  onNavigate,
}: {
  site: SiteConfig;
  item: NavItem;
  pathname: string;
  depth: number;
  onNavigate: () => void;
}) {
  const resolved = resolveNavHref(site, item.href);
  const isActive = resolved === pathname;
  const isAncestorActive = isActiveItem(site, item, pathname);
  const hasChildren = !!item.children?.length;
  const [expanded, setExpanded] = useState(item.defaultOpen ?? isAncestorActive);

  useEffect(() => {
    if (isAncestorActive) setExpanded(true);
  }, [isAncestorActive]);

  const isExternal = item.external || /^https?:\/\//i.test(item.href);

  const linkClass = cn(
    "flex-1 relative block py-1 pr-12 transition-colors",
    "text-[15px] leading-10",
    isActive
      ? "text-[var(--color-primary)] font-semibold"
      : "text-[var(--color-heading)] font-medium hover:text-[var(--color-primary)]"
  );

  const itemBg = isActive
    ? "before:absolute before:inset-0 before:bg-[var(--color-primary-tint)] before:z-[-1]"
    : "";

  return (
    <li className="relative">
      <div
        className={cn(
          "relative flex items-stretch",
          isActive && "bg-[var(--color-primary-tint)]"
        )}
      >
        <Link
          href={resolved}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          onClick={onNavigate}
          className={cn(linkClass, itemBg)}
          style={{ paddingLeft: `${depth * 1 + 1}rem` }}
        >
          <span className="inline-flex items-center gap-1.5">
            {item.label}
            {isExternal && <ExternalIcon className="text-[var(--color-faint)]" />}
          </span>
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${item.label}`}
            aria-expanded={expanded}
            onClick={(e) => {
              e.preventDefault();
              setExpanded((v) => !v);
            }}
            className={cn(
              "w-12 shrink-0 flex items-center justify-center transition-colors",
              "text-[var(--color-faint)] hover:text-[var(--color-primary)]",
              "hover:bg-[var(--color-primary-tint)]"
            )}
          >
            <ChevronRightIcon
              className={cn("transition-transform duration-150", expanded && "rotate-90")}
            />
          </button>
        )}
      </div>
      {hasChildren && expanded && (
        <ul className="bg-white/50">
          {item.children!.map((child) => (
            <NavItemRow
              key={child.href}
              site={site}
              item={child}
              pathname={pathname}
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function NavGroupBlock({
  site,
  group,
  pathname,
  onNavigate,
}: {
  site: SiteConfig;
  group: NavGroup;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <ul className="list-none m-0 p-0">
      {group.items.map((item) => (
        <NavItemRow
          key={item.href + item.label}
          site={site}
          item={item}
          pathname={pathname}
          depth={0}
          onNavigate={onNavigate}
        />
      ))}
    </ul>
  );
}

export function Sidebar({ site }: SidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center h-[60px] bg-[var(--color-sidebar)] border-b border-[var(--color-border)] px-4 sticky top-0 z-20">
        <Link
          href={`/c/${site.slug}`}
          className="text-xl font-normal text-[var(--color-heading)] flex-1"
        >
          {site.title}
        </Link>
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="w-10 h-10 flex items-center justify-center text-[var(--color-heading)] hover:text-[var(--color-primary)]"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Sidebar (drawer on mobile, fixed on desktop) */}
      <aside
        className={cn(
          "bg-[var(--color-sidebar)] flex flex-col",
          "md:fixed md:top-0 md:left-0 md:bottom-0 md:w-[var(--sidebar-width)] md:border-r md:border-[var(--color-border)] md:z-10",
          mobileOpen ? "block" : "hidden md:flex"
        )}
        aria-label="Sidebar navigation"
      >
        {/* Desktop site title */}
        <div className="hidden md:flex items-center h-[60px] px-4 shrink-0">
          <Link
            href={`/c/${site.slug}`}
            className="text-2xl font-normal text-[var(--color-heading)] hover:text-[var(--color-primary)] leading-tight"
          >
            {site.title}
          </Link>
        </div>

        <nav
          role="navigation"
          aria-label="Main"
          className="flex-1 overflow-y-auto sidebar-scroll md:pt-2"
        >
          {site.navGroups.map((group, i) => (
            <div key={i}>
              {i > 0 && (
                <hr className="my-6 mx-4 border-0 border-t border-[var(--color-border)]" />
              )}
              <NavGroupBlock
                site={site}
                group={group}
                pathname={pathname}
                onNavigate={() => setMobileOpen(false)}
              />
            </div>
          ))}
        </nav>

        {site.footer && (
          <footer className="px-8 py-4 text-[12px] leading-tight text-[var(--color-muted)] shrink-0">
            {site.footer.lines.map((line, i) => (
              <p key={i} className="my-1">
                {line}
              </p>
            ))}
          </footer>
        )}
      </aside>
    </>
  );
}
