import { useState } from "react";
import { Download } from "lucide-react";
import { TimeFilter } from "../../shared/TimeFilter/TimeFilter";

const FuelConsumptionByCitiesSection = () => {
    const [selectedFilter, setSelectedFilter] = useState("اخر 12 شهر");
  
    const citiesData = [
      { name: "الرياض", consumption: 15 },
      { name: "جدة", consumption: 70 },
      { name: "مكة", consumption: 45 },
      { name: "الرياض", consumption: 60 },
      { name: "الرياض", consumption: 75 },
      { name: "الرياض", consumption: 80 },
      { name: "الرياض", consumption: 65 },
      { name: "الرياض", consumption: 20 },
      { name: "الرياض", consumption: 85 },
      { name: "الرياض", consumption: 90 },
      { name: "الرياض", consumption: 95 },
    ];
  
    const maxConsumption = Math.max(...citiesData.map(city => city.consumption));
  
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium [direction:rtl]">تصدير</span>
            </button>
            <TimeFilter
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800 [direction:rtl] text-right">
            استهلاك الوقود للمدن
          </h3>
        </div>
        
        {/* Bar Chart */}
        <div className="h-80 flex items-end justify-between gap-1">
          {citiesData.map((city, index) => {
            const height = (city.consumption / maxConsumption) * 100;
            return (
              <div key={index} className="flex flex-col items-center flex-1">
                {/* Bar */}
                <div className="relative w-6 mb-3">
                  <div className="w-full bg-gray-100 rounded-full" style={{ height: '240px' }}>
                      <div
                        className="w-full rounded-full transition-all duration-700"
                        style={{ 
                          height: `${height}%`,
                          position: 'absolute',
                          bottom: 0,
                          backgroundColor: '#5A66C1'
                        }}
                      ></div>
                  </div>
                </div>
                {/* City Name */}
                <div className="text-xs text-gray-600 [direction:rtl] text-center font-medium">
                  {city.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default FuelConsumptionByCitiesSection;