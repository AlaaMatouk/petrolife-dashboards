import { useState } from "react";
import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import { Table, TimeFilter } from "../../components/shared";
import { adminNavigationMenuData, userInfo } from "../../constants/data";
import {
  MapPin,
  Fuel,
  Wallet,
  Car,
  Users,
  FileText,
  Download,
  DollarSign,
} from "lucide-react";
import sideIcons1 from "../../../static/img/side-icons-1.svg";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

// Stats Cards Section
const StatsCardsSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: number}>({3: 1, 9: 1,10:1,11:1});

  // Static wallet balance data for testing
  const walletBalance = 720250;

  // Format number with thousands separator (English)
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const statsData = [
    {
      title: "السائقين",
      categories: [
        { name: "سائقو الشركات", count: 3500 },
        { name: "سائقونا بتوصيل الوقود", count: 220 },
      ],
      total: { name: "الاجمالي", count: 3720 },
      icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
    {
      title: "الشركات",
      categories: [
        { name: "حسابات بواسطة المناديب", count: 520 },
        { name: "حسابات مباشرة", count: 1000 },
      ],
      total: { name: "الاجمالي", count: 1520 },
      icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
    {
      title: "المستخدمين",
      categories: [
        { name: "مزودي الخدمة", count: 84 },
        { name: "افراد", count: 4256 },
        { name: "شركات", count: 1520 },
        { name: "مشرفين", count: 254 },
      ],
      icon: <Users className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
    {
      title: "الاشتراكات",
      categories: [
        { name: "الاشتراكات المنتهية", count: 14 },
        { name: "Premium", count: 125 },
        { name: "Classic", count: 524 },
        { name: "Basic", count: 254 },
      ],
      options: [ "الافراد","الشركات",],
      icon: <RocketLaunchIcon className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
    {
      title: "السيارات المشتركة",
      categories: [
        { name: "VIP", count: 200 },
        { name: "كبيرة", count: 2000 },
        { name: "متوسطة", count: 2500 },
        { name: "صغيرة", count: 1000 },
      ],
      total: { name: "الاجمالي", count: 5700 },
      icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
    {
      title: "اجمالي السيارات",
      categories: [
        { name: "VIP", count: 425 },
        { name: "كبيرة", count: 4536 },
        { name: "متوسطة", count: 3250 },
        { name: "صغيرة", count: 1250 },
      ],
      total: { name: "الاجمالي", count: 9461 },
      icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
    {
      title: "اجمالي تكلفة الوقود",
      breakdown: [
        {
          type: "ديزل",
          amount: "6500",
          color: "text-color-mode-text-icons-t-orange",
        },
        {
          type: "بنزين 95",
          amount: "5000",
          color: "text-color-mode-text-icons-t-red",
        },
        {
          type: "بنزين 91",
          amount: "2200",
          color: "text-color-mode-text-icons-t-green",
        },
      ],
      total: { name: "الاجمالي", count: 13700 },
      icon: <DollarSign className="w-5 h-5" style={{ color: "#E76500"}} />,
    },
    {
      title: "اجمالي اللترات",
      breakdown: [
        {
          type: "ديزل",
          amount: "185 .L",
          color: "text-color-mode-text-icons-t-orange",
        },
        {
          type: "بنزين 95",
          amount: "548 .L",
          color: "text-color-mode-text-icons-t-red",
        },
        {
          type: "بنزين 91",
          amount: "845 .L",
          color: "text-color-mode-text-icons-t-green",
        },
      ],
      total: { name: "الاجمالي", count: 2238 },
      icon: <Fuel className="w-5 h-5" style={{ color: "#E76500"}} />,
    },
    {
      title: "رصيد محافظ العملاء",
      amount: formatNumber(walletBalance),
      icon: <Wallet className="w-5 h-5" style={{ color: "#E76500" }} />,
      type: "wallet",
    },
    {
      title: "عمليات تغيير الاطارات",
      categories: [
        { name: "VIP", count: 425 },
        { name: "كبيرة", count: 4536 },
        { name: "متوسطة", count: 3250 },
        { name: "صغيرة", count: 1250 },
      ],
      options: [ "الافراد","الشركات",],
      icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
    {
      title: "عمليات غسيل السيارات",
      categories: [
        { name: "VIP", count: 425 },
        { name: "كبيرة", count: 4536 },
        { name: "متوسطة", count: 3250 },
        { name: "صغيرة", count: 1250 },
      ],
      options: [ "الافراد","الشركات",],
      icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
    {
      title: "عمليات تغيير الزيوت",
      categories: [
        { name: "VIP", count: 425 },
        { name: "كبيرة", count: 4536 },
        { name: "متوسطة", count: 3250 },
        { name: "صغيرة", count: 1250 },
      ],
      options: [ "الافراد","الشركات",],
      icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
                      onClick={() => setSelectedOptions(prev => ({
                        ...prev,
                        [index]: optionIndex
                      }))}
                      className="px-[10px] py-1 rounded-[8px] transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: isSelected ? "#F9F3FF" : "rgba(245, 246, 247, 0.4)",
                        color: isSelected ? "#223548" : "#A9B4BE",
                        fontSize: "12px",
                        fontWeight: "400",
                        border: "none",
                        cursor: "pointer"
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
          <div className="flex  items-center justify-end">
            <div
              className="w-10 h-10 absolute bottom-[8px] left-[8px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFF3F9" }}
            >
              {stat.icon}
            </div>

            {stat.categories ? (
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
                    {catIndex < stat.categories.length - 1 && (
                      <div className="w-px h-8 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            ) : stat.breakdown ? (
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
                    {fuelIndex < stat.breakdown.length - 1 && (
                      <div className="w-px h-8 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xl text-[#5B738B] font-bold">
                {stat.amount}
              </p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

// Subscription and Locations Section
const SubscriptionAndLocationsSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Subscription Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg lg:col-span-1">
        {/* Main Title */}
        <div className="text-right mb-6">
          <h3 className="text-lg font-bold text-purple-800 [direction:rtl] text-right">
            اشتراكي الحالي
          </h3>
        </div>

        {/* Two Information Boxes */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Package Type Box */}
          <div className="bg-yellow-50 rounded-lg p-4 shadow-sm text-center">
            <div className="text-lg font-bold text-purple-800 mb-1">
              نوع الباقة
            </div>
            <div className="text-xs text-purple-800">سنوي</div>
          </div>

          {/* Number of Vehicles Box */}
          <div className="bg-yellow-50 rounded-lg p-4 shadow-sm text-center">
            <div className="text-lg font-bold text-purple-800 mb-1">
              عدد المركبات
            </div>
            <div className="text-xs text-purple-800">120</div>
          </div>
        </div>

        {/* Explanatory Text */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 text-orange-500">
            <div className="w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-center [direction:rtl]">
              نوع الاشتراك يُحدد تلقائياً وفقاً لعدد المركبات.
            </span>
          </div>
        </div>

        {/* Remaining Days Section */}
        <div className="text-center">
          <div className="text-sm text-purple-800 mb-3 [direction:rtl] text-center">
            الأيام المتبقية من الاشتراك
          </div>

          {/* Countdown Numbers */}
          <div className="text-2xl font-bold text-orange-500 mb-2 [direction:rtl] text-center">
            24 : 152 : 245
          </div>

          {/* Time Unit Labels */}
          <div className="flex justify-center gap-6 text-xs text-gray-700 [direction:rtl]">
            <span>يوم</span>
            <span>ساعة</span>
            <span>دقيقة</span>
          </div>
        </div>
      </div>

      {/* Station Locations Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm lg:col-span-2">
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-1.5">
            <h3 className="relative text-right h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
              مواقع محطات بترولايف
            </h3>
            <MapPin className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        <div className="h-48 rounded-lg overflow-hidden relative">
          <img
            src="/img/vector-map.svg"
            alt="World map with Petrolife station locations"
            className="w-full h-full object-cover"
          />

          {/* Map Markers */}
          <div className="absolute top-[83.20%] left-[86.43%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
          <div className="absolute top-[86.89%] left-[93.55%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
          <div className="absolute top-[32.17%] left-[12.70%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
          <div className="absolute top-[41.80%] left-[15.43%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
          <div className="absolute top-[19.88%] left-[50.88%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
          <div className="absolute top-[45.90%] left-[66.21%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
          <div className="absolute top-[40.78%] left-[82.32%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
          <div className="absolute top-[14.96%] left-[56.74%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
          <div className="absolute top-[36.07%] left-[50.10%] w-2 h-2 bg-primary-500 rounded-full cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

// Consumption Section
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
                    backgroundColor: "white",
                    color:
                      selectedPeriod === option.value ? "#5A66C1" : "#6B7280",
                    border:
                      selectedPeriod === option.value
                        ? "2px solid #5A66C1"
                        : "2px solid #9CA3AF",
                    borderRadius: "8px",
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Title */}
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-[var(--form-section-title-color)]">
                المبيعات
              </h2>
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
            <div className="text-base text-gray-500 mb-1 [direction:rtl]">
              الطلبات المكتملة
            </div>
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
                <span className="text-sm font-medium text-gray-700 [direction:rtl]">
                  {category.total}/{category.count}
                </span>
                <span className="text-sm font-medium text-gray-900 [direction:rtl]">
                  {category.name}
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 flex justify-end">
                <div
                  className="h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: "#5A66C1",
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

  const maxConsumption = Math.max(
    ...citiesData.map((city) => city.consumption)
  );

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
                <div
                  className="w-full bg-gray-100 rounded-full"
                  style={{ height: "240px" }}
                >
                  <div
                    className="w-full rounded-full transition-all duration-700"
                    style={{
                      height: `${height}%`,
                      position: "absolute",
                      bottom: 0,
                      backgroundColor: "#5A66C1",
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

// Most Used Stations and Drivers Section
const MostUsedSection = () => {
  const [selectedStationsFilter, setSelectedStationsFilter] =
    useState("اخر 12 شهر");
  const [selectedDriversFilter, setSelectedDriversFilter] =
    useState("اخر 12 شهر");

  const stationsData = [
    {
      name: "محطة الصالح",
      address: "15 ش الرياض، الرياض",
      price: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
    {
      name: "محطة الصالح",
      address: "15 ش الرياض، الرياض",
      price: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
    {
      name: "محطة الصالح",
      address: "15 ش الرياض، الرياض",
      price: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
    {
      name: "محطة الصالح",
      address: "15 ش الرياض، الرياض",
      price: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
    {
      name: "محطة الصالح",
      address: "15 ش الرياض، الرياض",
      price: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
  ];

  const driversData = [
    {
      name: "محمد أحمد",
      phone: "00965284358",
      cost: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
    {
      name: "محمد أحمد",
      phone: "00965284358",
      cost: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
    {
      name: "محمد أحمد",
      phone: "00965284358",
      cost: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
    {
      name: "محمد أحمد",
      phone: "00965284358",
      cost: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
    {
      name: "محمد أحمد",
      phone: "00965284358",
      cost: 2543,
      fuel: "542",
      type: "بنزين 91",
    },
  ];

  // Table columns for stations
  const stationsColumns = [
    {
      key: "fuel",
      label: "الوقود",
      width: "min-w-[100px]",
      render: (_: any, station: any) => (
        <div className="text-right">
          <div className="font-medium text-orange-500">
            {station?.fuel || "N/A"}
          </div>
          <div className="text-gray-500">{station?.type || "N/A"}</div>
        </div>
      ),
    },
    {
      key: "price",
      label: "السعر",
      width: "min-w-[100px]",
      render: (_: any, station: any) => (
        <div className="text-right">
          <div className="font-medium text-blue-600">
            {station?.price || "N/A"}
          </div>
          <div className="text-gray-500">ر.س</div>
        </div>
      ),
    },
    {
      key: "station",
      label: "المحطة",
      width: "min-w-[200px]",
      render: (_: any, station: any) => (
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-medium text-gray-800 [direction:rtl] text-right">
              {station?.name || "N/A"}
            </div>
            <div className="text-sm text-gray-500 [direction:rtl] text-right">
              {station?.address || "N/A"}
            </div>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <Fuel className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      ),
    },
  ];

  // Table columns for drivers
  const driversColumns = [
    {
      key: "fuel",
      label: "الوقود",
      width: "min-w-[100px]",
      render: (_: any, driver: any) => (
        <div className="text-right">
          <div className="font-medium text-orange-500">
            {driver?.fuel || "N/A"}
          </div>
          <div className="text-gray-500">{driver?.type || "N/A"}</div>
        </div>
      ),
    },
    {
      key: "cost",
      label: "التكلفة",
      width: "min-w-[100px]",
      render: (_: any, driver: any) => (
        <div className="text-right">
          <div className="font-medium text-blue-600">
            {driver?.cost || "N/A"}
          </div>
          <div className="text-gray-500">ر.س</div>
        </div>
      ),
    },
    {
      key: "driver",
      label: "السائق",
      width: "min-w-[200px]",
      render: (_: any, driver: any) => (
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-medium text-gray-800 [direction:rtl] text-right">
              {driver?.name || "N/A"}
            </div>
            <div className="text-sm text-gray-500 [direction:rtl] text-right">
              {driver?.phone || "N/A"}
            </div>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Most Used Stations */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="mb-6">
          <div className="flex justify-end mb-4">
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <h3 className="mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                المحطات الأكثر استخداما
              </h3>
              <Fuel className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div className="flex justify-start">
            <TimeFilter
              selectedFilter={selectedStationsFilter}
              onFilterChange={setSelectedStationsFilter}
            />
          </div>
        </div>

        <Table columns={stationsColumns} data={stationsData} className="mb-4" />
      </div>

      {/* Most Consuming Drivers */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="mb-6">
          <div className="flex justify-end mb-4">
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <h3 className="mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                السائقين الأكثر استهلاكا
              </h3>
              <Users className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div className="flex justify-start">
            <TimeFilter
              selectedFilter={selectedDriversFilter}
              onFilterChange={setSelectedDriversFilter}
            />
          </div>
        </div>

        <Table columns={driversColumns} data={driversData} className="mb-4" />
      </div>
    </section>
  );
};

// Latest Orders Table
const LatestOrdersSection = () => {
  const ordersData = [
    {
      code: "21A254",
      type: "وقود 91",
      driver: "احمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      value: "20",
      cumulative: "200",
    },
    {
      code: "21A254",
      type: "منتج",
      driver: "--",
      date: "21 فبراير 2025 - 5:05 ص",
      value: "20",
      cumulative: "180",
    },
    {
      code: "21A254",
      type: "وقود 91",
      driver: "احمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      value: "20",
      cumulative: "160",
    },
    {
      code: "21A254",
      type: "وقود 91",
      driver: "احمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      value: "20",
      cumulative: "140",
    },
    {
      code: "21A254",
      type: "وقود 91",
      driver: "احمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      value: "20",
      cumulative: "120",
    },
  ];

  // Table columns for orders
  const ordersColumns = [
    {
      key: "cumulative",
      label: "تراكمي العمليات (ر.س)",
      width: "min-w-[150px]",
      render: (_: any, order: any) => (
        <div className="text-right text-sm text-gray-800 [direction:rtl]">
          {order?.cumulative || "N/A"}
        </div>
      ),
    },
    {
      key: "value",
      label: "قيمة العملية",
      width: "min-w-[100px]",
      render: (_: any, order: any) => (
        <div className="text-right text-sm text-gray-800 [direction:rtl]">
          {order?.value || "N/A"}
        </div>
      ),
    },
    {
      key: "date",
      label: "تاريخ العملية",
      width: "min-w-[150px]",
      render: (_: any, order: any) => (
        <div className="text-right text-sm text-gray-800 [direction:rtl]">
          {order?.date || "N/A"}
        </div>
      ),
    },
    {
      key: "driver",
      label: "اسم السائق",
      width: "min-w-[120px]",
      render: (_: any, order: any) => (
        <div className="text-right text-sm text-gray-800 [direction:rtl]">
          {order?.driver || "N/A"}
        </div>
      ),
    },
    {
      key: "type",
      label: "نوع العملية",
      width: "min-w-[120px]",
      render: (_: any, order: any) => (
        <div className="text-right text-sm text-gray-800 [direction:rtl]">
          {order?.type || "N/A"}
        </div>
      ),
    },
    {
      key: "code",
      label: "كود العملية",
      width: "min-w-[120px]",
      render: (_: any, order: any) => (
        <div className="text-right text-sm text-gray-800 [direction:rtl]">
          {order?.code || "N/A"}
        </div>
      ),
    },
  ];

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <button className="flex items-center gap-2 px-3 py-2 border border-gray-500 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <span className="text-sm font-medium [direction:rtl]">
            عرض المزيد
          </span>
        </button>
        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <h3 className="mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            أحدث الطلبات
          </h3>
          <FileText className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      <Table columns={ordersColumns} data={ordersData} className="mb-4" />
    </section>
  );
};

// Main Dashboard Component
export const Index = (): JSX.Element => {
  return (
    <LayoutSimple
      headerProps={{
        admin: true,
        title: "لوحة التحكم",
        titleIconSrc: <img src={sideIcons1} alt="logo" className="w-5 h-5" />,
        showSearch: true,
        searchProps: {
          placeholder: "بحث برقم العميل / العملية / السجل التجاري / رقم الهاتف",
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: adminNavigationMenuData.sections,
        topItems: adminNavigationMenuData.topItems,
        bottomItems: adminNavigationMenuData.bottomItems,
        anotherSections: adminNavigationMenuData.anotherSections,
        userInfo: userInfo,
      }}
    >
      <div className="space-y-8">
        {/* All Cards - 4 rows of 3 cards each */}
        <StatsCardsSection />

        {/* Subscription and Locations */}
        <SubscriptionAndLocationsSection />

        {/* Consumption Section */}
        <ConsumptionSection />

        {/* New Dashboard Sections */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <FuelDeliveryRequestsSection />
          <MyCarsSection />
        </section>

        {/* Fuel Consumption by Cities */}
        <FuelConsumptionByCitiesSection />

        {/* Most Used Section */}
        <MostUsedSection />

        {/* Latest Orders */}
        <LatestOrdersSection />
      </div>
    </LayoutSimple>
  );
};
