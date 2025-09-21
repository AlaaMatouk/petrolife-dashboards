import React, { ReactNode } from "react";

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
}

interface HeaderProps {
  title: string;
  titleIconSrc?: string;
  navigationIcons: NavigationIcon[];
  extraContent?: ReactNode; // هنا نحط SearchBar أو أي كومبوننت تاني
}

const Header: React.FC<HeaderProps> = ({
  title,
  titleIconSrc,
  navigationIcons,
  extraContent,
}) => {
  return (
    <header
      className="absolute top-0 left-[calc(50%_-_720px)] w-[1440px] h-[72px] flex bg-color-mode-surface-bg-screen shadow-[0px_4px_10px_#0000000a]"
      role="banner"
    >
      <div className="flex mt-[15px] w-[1066px] h-11 ml-[61px] relative items-center justify-between">
        {/* Navigation Icons */}
        <nav className="inline-flex items-center gap-6" role="navigation">
          {navigationIcons.map((icon, idx) => (
            <button
              key={idx}
              className="relative w-10 h-10 bg-color-mode-surface-bg-icon-gray rounded-md overflow-hidden border border-color-mode-text-icons-t-placeholder hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue transition-opacity"
              aria-label={icon.text || `Navigation item ${icon.id}`}
            >
              {icon.src && (
                <img
                  className="absolute w-5 h-5 top-2.5 left-2.5"
                  alt={icon.alt}
                  src={icon.src}
                />
              )}
              {icon.vectors && (
                <div className="relative w-5 h-5 top-2.5 left-2.5">
                  {icon.vectors.map((vector, i) => (
                    <img
                      key={i}
                      className={vector.className}
                      alt={vector.alt}
                      src={vector.src}
                    />
                  ))}
                </div>
              )}
              {icon.text && (
                <span className="absolute top-[calc(50%-9px)] left-[calc(50%-10px)]">
                  {icon.text}
                </span>
              )}
            </button>
          ))}
        </nav>
        {/* Extra Content (SearchBar) */}
        {extraContent && <div>{extraContent}</div>}
        
        {/* Title + Extra Content */}
        <div className="inline-flex items-center gap-4">
          {/* Title + Icon */}
          <div className="inline-flex items-center gap-2">
            <h1 className="font-headings-h1-h6-heading-5 text-color-mode-text-icons-t-sec">
              {title}
            </h1>
            {titleIconSrc && (
              <img src={titleIconSrc} alt="icon" className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
