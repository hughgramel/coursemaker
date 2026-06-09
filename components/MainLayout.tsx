import { Sidebar } from "./Sidebar";
import type { SiteConfig } from "@/types/course";

interface MainLayoutProps {
  site: SiteConfig;
  children: React.ReactNode;
}

export function MainLayout({ site, children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Sidebar site={site} />
      <div className="md:ml-[var(--sidebar-width)]">
        <main className="px-4 md:px-8 py-6 md:py-8">
          <article className="max-w-[var(--content-max-width)] mx-auto prose">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
