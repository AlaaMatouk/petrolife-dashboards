import React, { useState } from "react";

const navigationIcons = [
  {
    id: 1,
    src: "/img/component-1.svg",
    alt: "Component",
  },
  {
    id: 2,
    src: "/img/component-1-1.svg",
    alt: "Component",
  },
  {
    id: 3,
    vectors: [
      {
        src: "/img/vector.svg",
        alt: "Vector",
        className: "absolute w-2.5 h-2.5 top-1 left-1",
      },
      {
        src: "/img/vector-1.svg",
        alt: "Vector",
        className: "absolute w-[18px] h-[18px] top-0 left-0",
      },
    ],
  },
];

export const DashboardHeaderSection = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  return (
    <header
      className="absolute w-[1440px] h-[72px] top-0 left-0 bg-white shadow-md border-b border-gray-200"
      role="banner"
    >
      <div className="flex w-[1066px] items-center justify-between relative top-[15px] left-[61px]">
        {/* Navigation Icons */}
        <nav
          className="inline-flex items-center gap-6 relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            {navigationIcons.map((icon) => (
              <button
                key={icon.id}
                className="relative w-10 h-10 bg-gray-100 rounded-md overflow-hidden border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                aria-label={`Navigation button ${icon.id}`}
              >
                {icon.src ? (
                  <img
                    className="absolute w-5 h-5 top-2.5 left-2.5"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ) : (
                  <div className="relative w-5 h-5 top-2.5 left-2.5">
                    <div className="relative w-[18px] h-[18px] top-px left-px">
                      {icon.vectors?.map((vector, index) => (
                        <img
                          key={index}
                          className={vector.className}
                          alt={vector.alt}
                          src={vector.src}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}

            <button
              className="relative w-10 h-10 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              aria-label="Language selector"
            >
              <span className="absolute top-[11px] left-2.5 font-medium text-gray-700 text-sm">
                En
              </span>
            </button>
          </div>
        </nav>

        {/* Search + Wallet */}
        <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col w-[378px] items-end justify-center gap-2.5 px-4 py-2 bg-gray-100 rounded-full border border-gray-300"
            role="search"
          >
            <div className="inline-flex items-center justify-end gap-2 w-full">
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف"
                className="flex-1 text-sm text-gray-600 bg-transparent border-none outline-none placeholder-gray-400"
              />

              <button
                type="submit"
                className="w-5 h-5 hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-sm transition-opacity"
                aria-label="Submit search"
              >
                <img className="w-4 h-4" alt="Search" src="/img/vector-3.svg" />
              </button>
            </div>
          </form>

          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors">
            <span className="font-semibold text-gray-700 text-base">
              محفظــــــــــــــتي
            </span>
            <img
              className="w-5 h-5"
              alt="Portfolio icon"
              src="/img/side-icons.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
