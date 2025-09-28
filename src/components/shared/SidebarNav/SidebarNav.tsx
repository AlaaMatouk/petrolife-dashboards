import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Logo } from "./components/Logo";
import { MenuItem, NavigationItem } from "./components/MenuItem";
import { SectionHeader } from "./components/SectionHeader";
import { UserProfile } from "./components/UserProfile";
import { LogoutButton } from "./components/LogoutButton";
import { useUI, useAuth } from "../../../hooks/useGlobalState";
import { isRouteMatch } from "../../../constants/routes";

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface SidebarNavProps {
  sections: NavigationSection[];
  topItems?: NavigationItem[];
  bottomItems?: NavigationItem[];
  userInfo?: {
    name: string;
    email: string;
    avatar: string;
  };
  onLogout?: () => void;
  className?: string;
  logo?: {
    primary: string;
    secondary: string;
  };
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  sections,
  topItems = [],
  bottomItems = [],
  userInfo,
  onLogout,
  className = "",
  logo = {
    primary: "/img/logo-3.png",
    secondary: "/img/logo-2.png",
  },
}) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string>("");
  const { sidebarCollapsed } = useUI();
  const { user } = useAuth();


  const handleMenuItemClick = (item: NavigationItem) => {
    setActiveItem(item.id);
    if (item.onClick) {
      item.onClick();
    }
  };

  // Check if item is active based on current pathname
  const isItemActive = (item: NavigationItem) => {
    if (item.href) {
      return isRouteMatch(item.href, location.pathname) || 
             location.pathname === item.href || 
             location.pathname.startsWith(item.href + '/');
    }
    return item.isActive || activeItem === item.id;
  };

  return (
    <nav
      className={`flex flex-col h-full bg-white border-l border-gray-200 transition-all duration-300 ${
        sidebarCollapsed ? 'w-16' : 'w-72 md:w-60 sm:w-52'
      } ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Logo */}
      <Logo {...logo} />

      {/* Navigation Menu */}
      <div className="flex flex-col flex-1 overflow-y-auto px-2 py-2" role="menu">
        {/* Top Items */}
        <div className="space-y-1 mb-4">
          {topItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={isItemActive(item)}
              onClick={handleMenuItemClick}
            />
          ))}
        </div>

        {/* Sections */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            <SectionHeader title={section.title} />
            <div className="space-y-1 mt-2">
              {section.items.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  isSubItem={true}
                  isActive={isItemActive(item)}
                  onClick={handleMenuItemClick}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Bottom Items */}
        <div className="space-y-1 mb-4">
          {bottomItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={isItemActive(item)}
              onClick={handleMenuItemClick}
            />
          ))}
        </div>

        {/* Logout Button */}
        <div className="mt-auto">
          <LogoutButton onLogout={onLogout} />
        </div>
      </div>

      {/* User Profile */}
      {(userInfo || user) && <UserProfile userInfo={userInfo || user!} />}
    </nav>
  );
};
