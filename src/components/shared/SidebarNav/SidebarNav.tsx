import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Logo } from "./components/Logo";
import { MenuItem, NavigationItem } from "./components/MenuItem";
import { SectionHeader } from "./components/SectionHeader";
import { UserProfile } from "./components/UserProfile";
import { LogoutButton } from "./components/LogoutButton";
import { useUI, useAuth } from "../../../hooks/useGlobalState";

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
      return location.pathname === item.href;
    }
    return item.isActive || activeItem === item.id;
  };

  return (
    <nav
      className={`flex flex-col h-full items-end gap-[var(--corner-radius-extra-large-6)] 
             pt-[var(--dimensions-size-large)] pr-[var(--dimensions-size-large)] 
             pb-[var(--corner-radius-full)] pl-[var(--dimensions-size-medium)] 
             bg-white text-black border-l border-gray-200 transition-all duration-300
             ${sidebarCollapsed ? 'w-16' : 'w-72 md:w-60 sm:w-52'} ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-col items-end gap-10 relative self-stretch w-full flex-[0_0_auto]">
        {/* Logo */}
        <Logo {...logo} />

        {/* Navigation Menu */}
        <div
          className="flex flex-col items-end gap-[11px] relative self-stretch w-full flex-1 overflow-y-auto"
          role="menu"
        >
          {/* Top Items */}
          {topItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={isItemActive(item)}
              onClick={handleMenuItemClick}
            />
          ))}

          {/* Sections */}
          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col items-start gap-[var(--dimensions-size-XX-small)] relative self-stretch w-full flex-[0_0_auto]"
            >
              <SectionHeader title={section.title} />
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
          ))}

          {/* Bottom Items */}
          {bottomItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={isItemActive(item)}
              onClick={handleMenuItemClick}
            />
          ))}

          {/* Logout Button */}
          <LogoutButton onLogout={onLogout} />
        </div>
      </div>

      {/* User Profile */}
      {(userInfo || user) && <UserProfile userInfo={userInfo || user!} />}
    </nav>
  );
};
