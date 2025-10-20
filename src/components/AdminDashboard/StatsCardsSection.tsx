import { useState } from "react";

// Type definitions for the stats data structure
export interface StatCategory {
  name: string;
  count: number;
}

export interface StatBreakdown {
  type: string;
  amount: string;
  color: string;
}

export interface StatTotal {
  name: string;
  count: number;
}

export interface StatData {
  title: string;
  icon: React.ReactNode;
  categories?: StatCategory[];
  breakdown?: StatBreakdown[];
  total?: StatTotal;
  options?: string[];
  amount?: string;
  type?: string;
}

export interface StatsCardsSectionProps {
  statsData: StatData[];
  defaultSelectedOptions?: { [key: number]: number };
  style?: string;
}

const StatsCardsSection = ({ 
  statsData, 
  defaultSelectedOptions = {},
  style = ""
}: StatsCardsSectionProps) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: number;
  }>(defaultSelectedOptions);

  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ${style}`}>
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="relative w-full bg-color-mode-surface-bg-screen rounded-[16px] rounded-bl-[28px] border-[0.2px] border-solid border-[#A9B4BE] p-6 flex flex-col justify-between"
        >
          {/* Upper row - title */}
          {!stat.total && !stat.options ? (
            <div className="flex justify-end mb-4">
              <span className="text-base text-color-mode-text-icons-t-sec">
                {stat.title}
              </span>
            </div>
          ) : stat.options ? (
            <div className="flex justify-between mb-4">
              {/* Options buttons */}
              <div className="flex gap-2">
                {stat.options.map((option, optionIndex) => {
                  const isSelected = selectedOptions[index] === optionIndex;
                  return (
                    <button
                      key={optionIndex}
                      onClick={() =>
                        setSelectedOptions((prev) => ({
                          ...prev,
                          [index]: optionIndex,
                        }))
                      }
                      className="px-[10px] py-1 rounded-[8px] transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: isSelected
                          ? "#F9F3FF"
                          : "rgba(245, 246, 247, 0.4)",
                        color: isSelected ? "#223548" : "#A9B4BE",
                        fontSize: "12px",
                        fontWeight: "400",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {/* Title with enhanced styling */}
              <span className="text-base text-color-mode-text-icons-t-sec">
                {stat.title}
              </span>
            </div>
          ) : (
            <div className="flex justify-between mb-4">
              <span className="text-base text-color-mode-text-icons-t-sec">
                {typeof stat.total === "object" &&
                stat.total !== null &&
                "name" in stat.total
                  ? `${stat.total.name} ${stat.total.count}`
                  : ""}
              </span>
              <span className="text-base text-color-mode-text-icons-t-sec">
                {stat.title}
              </span>
            </div>
          )}

          {/* Lower row - value and icon */}
          <div className="flex items-center justify-end">
            <div
              className="w-10 h-10 absolute bottom-[8px] left-[8px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFF3F9" }}
            >
              {stat.icon}
            </div>

            {stat.categories && stat.categories.length > 0 ? (
              <div className="flex items-center  gap-[10px]">
                {stat.categories.map((category, catIndex) => (
                  <div key={catIndex} className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-bold text-[#5B738B]">
                        {category.count}
                      </span>
                      <span className="text-xs text-color-mode-text-icons-t-sec text-right">
                        {category.name}
                      </span>
                    </div>
                    {catIndex < stat.categories!.length - 1 && (
                      <div className="w-px h-8 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            ) : stat.breakdown && stat.breakdown.length > 0 ? (
              <div className="flex items-center gap-4">
                {stat.breakdown.map((fuel, fuelIndex) => (
                  <div key={fuelIndex} className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-bold text-[#5B738B]">
                        {fuel.amount}
                      </span>
                      <span className={`${fuel.color} text-xs font-bold`}>
                        {fuel.type}
                      </span>
                    </div>
                    {fuelIndex < stat.breakdown!.length - 1 && (
                      <div className="w-px h-8 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xl text-[#5B738B] font-bold">{stat.amount}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default StatsCardsSection;

