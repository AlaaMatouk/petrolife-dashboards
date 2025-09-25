import React from 'react';
import { Link } from 'react-router-dom';

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
  hasBackground?: boolean;
  onClick?: () => void;
  href?: string;
}

interface MenuItemProps {
  item: NavigationItem;
  isSubItem?: boolean;
  isActive: boolean;
  onClick: (item: NavigationItem) => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  item, 
  isSubItem = false, 
  isActive, 
  onClick 
}) => {
  const hasActiveBackground = item.hasBackground && isActive;

  if (item.href) {
    return (
      <Link
        to={item.href}
        onClick={() => onClick(item)}
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
      </Link>
    );
  }

  return (
    <button
      onClick={() => onClick(item)}
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
