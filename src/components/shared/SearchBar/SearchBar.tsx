import React, { useState } from "react";

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
  className = "",
  size = "md",
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={` flex items-center gap-2 bg-color-mode-surface-bg-icon-gray rounded-full border border-color-mode-text-icons-t-placeholder ${sizeClasses[size]} ${className}`}
      role="search"
    >
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={
          placeholder || "بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف"
        }
        className="  flex-1 text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
      />

      <button
        type="submit"
        className="w-6 h-6 flex items-center justify-center hover:opacity-70 focus:outline-none rounded-full"
        aria-label="Submit search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};
