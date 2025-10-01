import React, { ReactNode } from "react";
import { Header, HeaderProps } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { SidebarNav, SidebarNavProps } from "../SidebarNav/SidebarNav";
import { useUI } from "../../../hooks/useGlobalState";

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
  const { sidebarCollapsed, theme } = useUI();
  
  return (
    <div
      className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} min-h-screen w-full flex flex-row-reverse transition-colors duration-300 ${className}`}
    >
      {/* Sidebar - Full height on the right */}
      <aside className={`${sidebarCollapsed ? 'w-16' : 'w-72 md:w-60 sm:w-52'} ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-l flex-shrink-0 hidden md:block shadow-sm transition-all duration-300`}>
        <SidebarNav {...sidebarProps} />
      </aside>

      {/* Page content: Header + Main + Footer */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Header - Starts after the sidebar */}
        <header className="w-full bg-white shadow-sm border-b border-gray-200 z-50">
          <Header {...headerProps} />
        </header>

        {/* Main content */}
        <main className={`flex-1 overflow-auto ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
          <div className="p-4 lg:p-6 md:p-4 sm:p-3 max-w-7xl mx-auto">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-white border-t border-gray-200 z-50">
          <Footer />
        </footer>
      </div>
    </div>
  );
};
