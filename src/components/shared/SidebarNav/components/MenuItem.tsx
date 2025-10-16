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

const MenuItemContent: React.FC<{ item: NavigationItem; isSubItem: boolean; isActive: boolean }> = ({ 
  item, 
  isSubItem, 
  isActive 
}) => {
  return (
    <div 
      className="flex items-center justify-end gap-3 w-full py-3 px-4 rounded-lg transition-all duration-200"
      style={isActive ? { backgroundColor: '#F9F3FF' } : {}}
    >
      <span className={`flex-1 text-sm font-medium text-right whitespace-nowrap transition-colors ${
        isActive 
          ? "text-[var(--form-section-title-color)]" 
          : "text-[var(--form-readonly-input-text-color)] group-hover:text-purple-700"
      }`}>
        {item.label}
      </span>
      <img
        className="w-5 h-5 flex-shrink-0"
        alt={`${item.label} icon`}
        src={item.icon}
      />
    </div>
  );
};

export const MenuItem: React.FC<MenuItemProps> = ({ 
  item, 
  isSubItem = false, 
  isActive, 
  onClick 
}) => {
  const baseClasses = `w-full rounded-lg transition-all duration-200 ${
    isActive
      ? "border-2 border-[#5A66C1] shadow-md"
      : "hover:bg-purple-50 hover:border-2 hover:border-purple-200 border-2 border-transparent"
  } ${isSubItem ? "ml-4" : ""}`;

  if (item.href) {
    return (
      <Link
        to={item.href}
        onClick={() => onClick(item)}
        className={`${baseClasses} group`}
        role="menuitem"
        tabIndex={0}
        aria-current={isActive ? "page" : undefined}
        aria-label={item.label}
      >
        <MenuItemContent item={item} isSubItem={isSubItem} isActive={isActive} />
      </Link>
    );
  }

  return (
    <button
      onClick={() => onClick(item)}
      className={`${baseClasses} group`}
      role="menuitem"
      tabIndex={0}
      aria-current={isActive ? "page" : undefined}
      aria-label={item.label}
    >
      <MenuItemContent item={item} isSubItem={isSubItem} isActive={isActive} />
    </button>
  );
};
