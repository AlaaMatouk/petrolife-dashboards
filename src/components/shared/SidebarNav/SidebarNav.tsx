import React, { useState } from "react";

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
  hasBackground?: boolean;
  onClick?: () => void;
  href?: string;
}

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
  const [activeItem, setActiveItem] = useState<string>("");

  const handleMenuItemClick = (item: NavigationItem) => {
    setActiveItem(item.id);
    if (item.onClick) {
      item.onClick();
    }
  };

  const renderMenuItem = (item: NavigationItem, isSubItem = false) => {
    const isActive = item.isActive || activeItem === item.id;
    const hasActiveBackground = item.hasBackground && isActive;

    return (
      <button
        key={item.id}
        onClick={() => handleMenuItemClick(item)}
        className={`flex flex-col items-center justify-center gap-2.5 pt-[var(--corner-radius-extra-small)] pr-${
          isSubItem
            ? "[var(--corner-radius-extra-large)]"
            : "[var(--corner-radius-extra-small)]"
        } pb-[var(--corner-radius-extra-small)] pl-[var(--corner-radius-extra-small)] relative self-stretch w-full flex-[0_0_auto] rounded-[var(--corner-radius-medium)] ${
          hasActiveBackground
            ? "bg-color-mode-surface-bg-icon-gray"
            : item.hasBackground
            ? "bg-color-mode-surface-purple-bg"
            : ""
        } hover:bg-color-mode-surface-purple-bg transition-colors`}
        role="menuitem"
        tabIndex={0}
        aria-current={isActive ? "page" : undefined}
        aria-label={item.label}
      >
        <div className="flex flex-col h-[41px] items-start justify-center gap-2.5 pt-[var(--corner-radius-medium)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-medium)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-medium)]">
          <div className="mt-[-0.50px] mb-[-0.50px] flex items-center gap-[var(--dimensions-size-small)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex h-[17px] justify-end pl-2.5 pr-0 py-2.5 flex-1 grow items-center gap-2.5 relative">
              <span className="relative flex-1 h-5 mt-[-12.50px] mb-[-10.50px] font-fine-print-small-medium- font-[number:var(--fine-print-small-medium-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--fine-print-small-medium-font-size)] tracking-[var(--fine-print-small-medium-letter-spacing)] leading-[var(--fine-print-small-medium-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--fine-print-small-medium-font-style)]">
                {item.label}
              </span>
            </div>
            <img
              className="relative w-[18px] h-[18px] aspect-[1]"
              alt={`${item.label} icon`}
              src={item.icon}
            />
          </div>
        </div>
      </button>
    );
  };

  const renderSectionHeader = (title: string) => (
    <div className="flex flex-col items-start gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center justify-center gap-[var(--dimensions-size-small)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-[15px] h-[15px] rotate-[90.00deg] aspect-[1]">
          <div className="relative w-[13px] h-[13px] top-px left-px">
            <img
              className="absolute w-[13px] h-[13px] top-0 left-0 rotate-[-90.00deg]"
              alt="Expand icon"
              src="/img/vector-6.svg"
            />
            <img
              className="absolute w-1.5 h-[3px] top-[5px] left-1 rotate-[-90.00deg]"
              alt="Arrow"
              src="/img/vector-7.svg"
            />
          </div>
        </div>
        <img
          className="relative flex-1 grow h-px"
          alt="Divider line"
          src="/img/line-47-1.svg"
        />
        <h3 className="relative w-fit mt-[-1.00px] opacity-60 font-headings-h1-h6-heading-6 font-[number:var(--headings-h1-h6-heading-6-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--headings-h1-h6-heading-6-font-size)] tracking-[var(--headings-h1-h6-heading-6-letter-spacing)] leading-[var(--headings-h1-h6-heading-6-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headings-h1-h6-heading-6-font-style)]">
          {title}
        </h3>
      </div>
    </div>
  );

  return (
    <nav
      className={`flex flex-col h-full items-end gap-[var(--corner-radius-extra-large-6)] 
             pt-[var(--dimensions-size-large)] pr-[var(--dimensions-size-large)] 
             pb-[var(--corner-radius-full)] pl-[var(--dimensions-size-medium)] 
             bg-white text-black border-l border-gray-200 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex flex-col items-end gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <header className="inline-flex flex-col items-start gap-2.5 px-2.5 py-0 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[4.15px] relative flex-[0_0_auto]">
            <img
              className="w-[72.84px] aspect-[2.22] relative h-[32.8px]"
              alt="Company logo part 1"
              src={logo.primary}
            />
            <img
              className="w-[33.01px] aspect-[1.01] relative h-[32.8px]"
              alt="Company logo part 2"
              src={logo.secondary}
            />
          </div>
        </header>

        <div
          className="flex flex-col items-end gap-[11px] relative self-stretch w-full flex-1 overflow-y-auto"
          role="menu"
        >
          {topItems.map((item) => renderMenuItem(item))}

          {sections.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="flex flex-col items-start gap-[var(--dimensions-size-XX-small)] relative self-stretch w-full flex-[0_0_auto]"
            >
              {renderSectionHeader(section.title)}
              {section.items.map((item) => renderMenuItem(item, true))}
            </div>
          ))}

          {bottomItems.map((item) => renderMenuItem(item))}

          {onLogout && (
            <button
              className="flex flex-col items-end gap-2.5 pt-[var(--dimensions-size-medium)] pb-[var(--dimensions-size-medium)] px-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[var(--dimensions-size-medium)]"
              role="menuitem"
              tabIndex={0}
              onClick={onLogout}
              aria-label="تسجيل الخروج"
            >
              <div className="justify-end flex items-center gap-[var(--dimensions-size-small)] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex h-[17px] justify-end pl-2.5 pr-0 py-2.5 flex-1 grow items-center gap-2.5 relative">
                  <span className="flex-1 h-5 mt-[-12.50px] mb-[-10.50px] font-[number:var(--fine-print-small-medium-font-weight)] text-color-mode-text-icons-t-red tracking-[var(--fine-print-small-medium-letter-spacing)] leading-[var(--fine-print-small-medium-line-height)] relative font-fine-print-small-medium text-[length:var(--fine-print-small-medium-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--fine-print-small-medium-font-style)]">
                    تسجيل الخروج
                  </span>
                </div>
                <img
                  className="relative w-[18px] h-[18px] aspect-[1]"
                  alt="Logout icon"
                  src="/img/side-icons-13.svg"
                />
              </div>
            </button>
          )}
        </div>
      </div>

      {userInfo && (
        <footer className="inline-flex items-center gap-3 px-2.5 py-0 relative flex-[0_0_auto] ml-[-12.00px] mt-auto">
          <div className="flex flex-col w-[184px] h-[35px] items-start gap-[3px] relative">
            <div className="relative self-stretch h-[18px] mt-[-1.00px] font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
              {userInfo.name}
            </div>
            <div className="relative self-stretch h-[18px] mb-[-3.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] text-right tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] whitespace-nowrap [font-style:var(--caption-caption-1-font-style)]">
              {userInfo.email}
            </div>
          </div>
          <img
            className="relative w-10 h-10 aspect-[1] object-cover"
            alt="User profile picture"
            src={userInfo.avatar}
          />
        </footer>
      )}
    </nav>
  );
};
