import React, { ReactNode } from "react";
import { Header, HeaderProps } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { SidebarNav, SidebarNavProps } from "../SidebarNav/SidebarNav";

export interface LayoutProps {
  children: ReactNode;
  headerProps: HeaderProps;
  sidebarProps: SidebarNavProps;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  headerProps,
  sidebarProps,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#f6f9fc] min-h-screen w-full flex flex-row-reverse ${className}`}
    >
      {/* Sidebar - Full height on the right */}
      <aside className="w-72 md:w-60 sm:w-52 bg-white border-l border-gray-200 flex-shrink-0 hidden md:block">
        <SidebarNav {...sidebarProps} />
      </aside>

      {/* Page content: Header + Main + Footer */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Header - Starts after the sidebar */}
        <header className="w-full bg-color-mode-surface-bg-screen shadow-[0px_4px_10px_#0000000a] z-50">
          <Header {...headerProps} />
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-6 md:p-4 sm:p-3 max-w-[1200px] mx-auto">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-gray-200 z-50 bottom-0 left-0">
          <Footer />
        </footer>
      </div>
    </div>
  );
};
