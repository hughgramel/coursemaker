import { Sidebar } from "./Sidebar";
import { SearchBar } from "./SearchBar";
import type { SearchDoc } from "./SearchBar";
import type { SiteConfig } from "@/types/course";

interface MainLayoutProps {
  site: SiteConfig;
  searchDocs: SearchDoc[];
  children: React.ReactNode;
}

export function MainLayout({ site, searchDocs, children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Sidebar site={site} />
      <div className="md:ml-[var(--sidebar-width)]">
        <header className="h-[var(--main-header-height)] bg-white border-b border-[var(--color-border)] sticky top-0 z-10">
          <div className="max-w-[1000px] h-full">
            <SearchBar docs={searchDocs} placeholder={`Search ${site.title}`} />
          </div>
        </header>
        <main className="px-4 md:px-8 py-6 md:py-8">
          <article className="max-w-[var(--content-max-width)] mx-auto prose">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}
