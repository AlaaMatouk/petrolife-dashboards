import { useState } from "react";
import { Download, Fuel } from "lucide-react";
import { TimeFilter } from "../../shared/TimeFilter/TimeFilter";


//TODO: make it dynamic and accept props
const ConsumptionSection = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("12 شهر");
    
    const months = [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
    ];
  
    const timeOptions = [
      { id: "week", label: "اسبوع", value: "اسبوع" },
      { id: "month", label: "30 يوم", value: "30 يوم" },
      { id: "sixMonths", label: "6 شهور", value: "6 شهور" },
      { id: "year", label: "12 شهر", value: "12 شهر" },
    ];
  
    const legendItems = [
      {
        text: "بطاريات",
        color: "var(--core-colors-green-green-6)",
        width: "w-[46px]",
      },
      {
        text: "إطارات",
        color: "var(--core-colors-mango-mango-6)",
        width: "w-10",
      },
      {
        text: "زيوت",
        color: "var(--text-secondary)",
        width: "w-7",
      },
      {
        text: "وقـــــــــود",
        color: "var(--core-colors-red-red-6)",
        width: "w-[51px]",
        containerWidth: "w-[50px]",
        marginLeft: "ml-[-8.00px]",
      },
      {
        text: "غســـــيل",
        color: "var(--color-mode-text-icons-t-blue)",
        width: "w-12",
        containerWidth: "w-[51px]",
        marginLeft: "ml-[-4.00px]",
      },
    ];
  
    return (
      <section className="mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          {/* First Row - Title and Time Periods on Right, Legend on Left */}
          <div className="flex items-center justify-between mb-6">
            {/* Legend - Left */}
            <div className="flex items-center">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2">
                  {legendItems.map((item, index) => (
                    <div
                      key={index}
                      className={`${
                        item.containerWidth
                          ? `flex ${item.containerWidth} items-center justify-end gap-0.5`
                          : "inline-flex items-center gap-0.5"
                      }`}
                    >
                      <div
                        className={`${item.width} h-3.5 ${
                          item.marginLeft || ""
                        } font-bold text-xs tracking-[0.40px] leading-[19.2px] whitespace-nowrap [font-family:'Tajawal',Helvetica] [direction:rtl]`}
                        style={{ color: item.color }}
                      >
                        {item.text}
                      </div>
                      <div
                        className="w-[5px] h-[5px] rounded-[1px]"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Title and Time Periods - Right */}
            <div className="flex items-center gap-4">
              {/* Time Period Buttons */}
              <div className="flex items-center gap-2">
                {timeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedPeriod(option.value)}
                    className="px-4 py-2 text-sm rounded-lg transition-all"
                    style={{
                      backgroundColor: 'white',
                      color: selectedPeriod === option.value ? '#5A66C1' : '#6B7280',
                      border: selectedPeriod === option.value ? '2px solid #5A66C1' : '2px solid #9CA3AF',
                      borderRadius: '8px'
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
  
              {/* Title */}
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-[var(--form-section-title-color)]">المبيعات</h2>
                <Fuel className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
  
          {/* Second Row - Chart */}
          <div className="w-full">
            {/* Graph Background */}
            <div className="relative w-full h-[220px] flex flex-col justify-end">
              <img
                className="w-full h-full object-contain"
                alt="Graph background"
                src="/img/bgDD.png"
              />
  
              {/* Months row */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between px-2">
                {months.map((month, index) => (
                  <div
                    key={index}
                    className="text-[var(--text-secondary)] text-[0.8rem] md:text-[0.9rem] font-medium text-center"
                  >
                    {month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  // Fuel Delivery Requests Section
  const FuelDeliveryRequestsSection = () => {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-gray-600 [direction:rtl] text-right">
            المكتملة 20 / الملغية 22
          </div>
          <h3 className="text-xl font-bold text-gray-800 [direction:rtl] text-right">
            طلبات توصيل الوقود
          </h3>
        </div>
        
        {/* Donut Chart */}
        <div className="flex justify-center items-center">
          <div className="relative w-48 h-48">
            {/* Background Circle */}
            <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="6"
              />
              {/* Progress Circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#5A66C1"
                strokeWidth="6"
                strokeDasharray={`${49 * 2.83} 283`}
                strokeLinecap="round"
              />
            </svg>
            
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-base text-gray-500 mb-1 [direction:rtl]">الطلبات المكتملة</div>
              <div className="text-4xl font-bold text-gray-900">49%</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  // My Cars Section
  const MyCarsSection = () => {
    const carCategories = [
      { name: "سيارات صغيرة", count: 20, total: 85 },
      { name: "سيارات متوسطة", count: 25, total: 85 },
      { name: "سيارات كبيرة", count: 30, total: 85 },
      { name: "سيارات VIP", count: 10, total: 85 },
    ];
  
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div className="text-sm text-gray-600 [direction:rtl] text-right">
            اجمالي السيارات 85
          </div>
          <h3 className="text-xl font-bold text-gray-800 [direction:rtl] text-right">
            سياراتي
          </h3>
        </div>
        
        {/* Car Categories */}
        <div className="space-y-6">
          {carCategories.map((category, index) => {
            const percentage = (category.count / category.total) * 100;
            return (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 [direction:rtl]">{category.total}/{category.count}</span>
                  <span className="text-sm font-medium text-gray-900 [direction:rtl]">{category.name}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 flex justify-end">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor: '#5A66C1'
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  // Fuel Consumption by Cities Section
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

export default ConsumptionSection;
export { FuelDeliveryRequestsSection, MyCarsSection, FuelConsumptionByCitiesSection };
  