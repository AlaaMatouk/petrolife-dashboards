import React, { ReactNode, useState } from "react";
import { Bell, Sun, Search, ShoppingCart } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export interface HeaderProps {
  title: string;
  titleIconSrc?: React.ReactNode;
  showSearch?: boolean;
  searchProps?: SearchBarProps;
  extraContent?: ReactNode;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "البحث...",
  onSearch,
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
    console.log("Search query:", searchQuery);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className={`flex items-center h-[46px] w-full min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] rounded-full border border-gray-300 bg-white px-4 shadow-sm ${className}`}
      role="search"
    >
      {/* Input */}
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder={placeholder}
        dir="rtl"
        className="flex-1 text-sm text-color-mode-text-icons-t-primary-gray bg-transparent border-none outline-none placeholder-color-mode-text-icons-t-placeholder text-right pr-2"
      />
      {/* Icon */}
      <button
        type="submit"
        className="flex items-center justify-center text-gray-500 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue rounded-full transition-opacity p-1"
        aria-label="Submit search"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
};

export const Header: React.FC<HeaderProps> = ({
  title,
  titleIconSrc,
  showSearch = false,
  searchProps,
  extraContent,
  className = "",
}) => {
  return (
    <header
      className={`w-full bg-white shadow-sm border-b border-gray-200 ${className}`}
      role="banner"
    >
      <div className="flex flex-wrap w-full max-w-7xl mx-auto items-center justify-between px-4 lg:px-8 md:px-4 sm:px-2 py-4 gap-3">
        {/* Navigation Icons ثابتة */}
        <nav
          className="flex items-center gap-3"
          role="navigation"
          aria-label="Main navigation"
        >
          <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
            <Bell className="w-4 h-4 text-gray-600" />
          </button>

          <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
            <ShoppingCart className="w-4 h-4 text-gray-600" />
          </button>

          <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
            <Sun className="w-4 h-4 text-gray-600" />
          </button>

          <button className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200">
            <span className="font-medium text-gray-600 text-sm">EN</span>
          </button>
        </nav>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-end gap-2 w-auto sm:w-auto flex-1 sm:flex-none">
          {/* Search Bar */}
          {showSearch && (
            <div className="w-full sm:w-auto mr-2 flex-1 max-w-[600px]">
              <SearchBar {...searchProps} />
            </div>
          )}

          {/* Title + Icon */}
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-normal text-[#5B738B]">{title}</h1>
            {titleIconSrc && <span>{titleIconSrc}</span>}
          </div>

          {/* Extra Content */}
          {extraContent && (
            <div className="flex items-center">{extraContent}</div>
          )}
        </div>
      </div>
    </header>
  );
};
