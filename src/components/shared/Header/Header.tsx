import React, { ReactNode, useState } from "react";
interface Vector {
  src: string;
  alt?: string;
  className?: string;
}

interface NavigationIcon {
  id?: number;
  src?: string | null;
  alt?: string;
  vectors?: Vector[];
  text?: string;
  onClick?: () => void;
}

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

interface WalletButtonProps {
  label: string;
  iconSrc: string;
  onClick?: () => void;
}

export interface HeaderProps {
  title: string;
  titleIconSrc?: string;
  navigationIcons: NavigationIcon[];
  showSearch?: boolean;
  searchProps?: SearchBarProps;
  walletButton?: WalletButtonProps;
  extraContent?: ReactNode;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "بحث ",
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
      className={`flex flex-col w-[378px] items-end justify-center gap-2.5 px-4 py-2 bg-color-mode-surface-bg-icon-gray rounded-full border border-color-mode-text-icons-t-placeholder ${className}`}
      role="search"
    >
      <div className="inline-flex items-center justify-end gap-2 w-full">
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={placeholder}
          className="flex-1 text-sm text-color-mode-text-icons-t-primary-gray bg-transparent border-none outline-none placeholder-color-mode-text-icons-t-placeholder"
        />
        <button
          type="submit"
          className="w-5 h-5 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue rounded-sm transition-opacity"
          aria-label="Submit search"
        >
          <img className="w-4 h-4" alt="Search" src="/img/vector-3.svg" />
        </button>
      </div>
    </form>
  );
};

export const Header: React.FC<HeaderProps> = ({
  title,
  titleIconSrc,
  navigationIcons,
  showSearch = false,
  searchProps,
  extraContent,
  className = "",
}) => {
  return (
    <header
      className={`w-full h-[72px] bg-color-mode-surface-bg-screen shadow-[0px_4px_10px_#0000000a] ${className}`}
      role="banner"
    >
      <div className="flex w-full max-w-[1066px] items-center justify-between relative top-[15px] left-[61px] px-4 lg:px-8 md:px-4 sm:px-2">
        {/* Navigation Icons */}
        <nav
          className="inline-flex items-center gap-6 relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            {navigationIcons.map((icon) => (
              <button
                key={icon.id || Math.random()}
                className="relative w-10 h-10 bg-color-mode-surface-bg-icon-gray rounded-md overflow-hidden border border-color-mode-text-icons-t-placeholder hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue transition-opacity"
                aria-label={icon.text || `Navigation button ${icon.id}`}
                onClick={icon.onClick}
              >
                {icon.src ? (
                  <img
                    className="absolute w-5 h-5 top-2.5 left-2.5"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ) : icon.vectors ? (
                  <div className="relative w-5 h-5 top-2.5 left-2.5">
                    <div className="relative w-[18px] h-[18px] top-px left-px">
                      {icon.vectors.map((vector, index) => (
                        <img
                          key={index}
                          className={vector.className}
                          alt={vector.alt}
                          src={vector.src}
                        />
                      ))}
                    </div>
                  </div>
                ) : icon.text ? (
                  <span className="absolute top-[11px] left-2.5 font-medium text-color-mode-text-icons-t-primary-gray text-sm">
                    {icon.text}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </nav>

        {/* Search + Wallet */}
        <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]">
          {/* Search Bar */}
          {showSearch && <SearchBar {...searchProps} />}

          {/* Wallet Button */}
          {/* {walletButton && (
            <button
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-color-mode-surface-bg-icon-gray focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue transition-colors"
              onClick={walletButton.onClick}
              aria-label={walletButton.label}
            >
              <span className="font-semibold text-color-mode-text-icons-t-sec text-base">
                {walletButton.label}
              </span>
              <img
                className="w-5 h-5"
                alt="Portfolio icon"
                src={walletButton.iconSrc}
              />
            </button>
          )} */}

          {/* Title + Icon */}
          <div className="inline-flex items-center gap-2 flex-[0_0_auto]">
            <h1 className="text-lg font-semibold text-color-mode-text-icons-t-primary-gray">
              {title}
            </h1>{" "}
            {titleIconSrc && (
              <img
                src={titleIconSrc}
                alt={`${title} icon`}
                className="w-6 h-6"
              />
            )}
          </div>

          {/* Extra Content */}
          {extraContent && <div>{extraContent}</div>}
        </div>
      </div>
    </header>
  );
};
