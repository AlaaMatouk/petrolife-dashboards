import { useDataInitialization } from "../../hooks/useDataInitialization";
import { LayoutSimple } from "../shared/Layout/LayoutSimple";
import {
  serviceDistributerNavigationMenuData,
  userInfo
} from "../../constants/data";
import {
  Droplets,
  Fuel,
  Wallet
} from "lucide-react";
import dashboardIcon from "../../assets/imgs/icons/dashboard.svg";

// Dashboard icon component
const DashboardIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <img 
    src={dashboardIcon} 
    alt="Dashboard" 
    className={className}
  />
);
import BannerSection from "../sections/BannerSection/BannerSection";
import ConsumptionSection from "../sections/ConsumptionSection/ConsumptionSection";
import { SubscriptionAndLocationsSection } from "../sections/SubscriptionAndLocationsSection";
import FuelConsumptionByCitiesSection from "../sections/FuelConsumptionByCitiesSection";
import { DeliverySurveySection } from "../sections/DeliverySurveySection";
import MostUsedSection from "../sections/MostUsedSection/MostUsedSections";
import { StationLocationsMap } from "../sections/StationLocationsMap";

export const ServiceDistributerDashboard = () => {
  useDataInitialization();

  const fuelData = [
    {
      type: "ديزل",
      amount: "185 .L",
      color: "text-color-mode-text-icons-t-orange"
    },
    {
      type: "بنزين 95",
      amount: "548 .L",
      color: "text-color-mode-text-icons-t-red"
    },
    {
      type: "بنزين 91",
      amount: "845 .L",
      color: "text-color-mode-text-icons-t-green"
    }
  ];

  const statsData = [
    {
      title: "اجمالي تكلفة الوقود",
      total: "الاجمالي 13700",
      breakdown: [
        {
          type: "ديزل",
          amount: "6500",
          color: "text-color-mode-text-icons-t-orange"
        },
        {
          type: "بنزين 95",
          amount: "5000",
          color: "text-color-mode-text-icons-t-red"
        },
        {
          type: "بنزين 91",
          amount: "2200",
          color: "text-color-mode-text-icons-t-green"
        }
      ],
      icon: <img src="/src/assets/imgs/icons/money-bag-orange.svg" alt="droplet" className="w-5 h-5" />,
    },
    {
      title: "اجمالي اللترات",
      content: fuelData,
      icon: <img src="/src/assets/imgs/icons/droplet-orange.svg" alt="droplet" className="w-5 h-5" />,
      type: "fuel"
    },
    {
      title: "نوع الخدمة",
      value: "تعبئة وقود",
      icon: <img src="/src/assets/imgs/icons/dashboard-orange.svg" alt="droplet" className="w-5 h-5" />,
    },
    {
      title: "عدد المحطـــــــــــــــات",
      value: "42",
      icon: <img src="/src/assets/imgs/icons/petrol-station-orange.svg" alt="petrol station" className="w-5 h-5" />
    },
    {
      title: "عدد العمــــــــــال",
      value: "1250",
      icon: <img src="/src/assets/imgs/icons/user-group-orange.svg" alt="petrol station" className="w-5 h-5" />,
      type: "oil"
    },
    {
      title: "عدد العمـــــــــلاء",
      breakdown: [
        {
          type: "ديزل",
          amount: "6500",
          color: "text-color-mode-text-icons-t-orange"
        },
        {
          type: "بنزين 95",
          amount: "5000",
          color: "text-color-mode-text-icons-t-red"
        },
        {
          type: "بنزين 91",
          amount: "2200",
          color: "text-color-mode-text-icons-t-green"
        }
      ],
      icon: <img src="/src/assets/imgs/icons/user-group-orange.svg" alt="petrol station" className="w-5 h-5" />,
    }
  ];

  const stationsData = [
    { name: "محطة الصالح", address: "15 ش الرياض، الرياض", price: 2543, fuel: "542", type: "بنزين 91" },
    { name: "محطة الصالح", address: "15 ش الرياض، الرياض", price: 2543, fuel: "542", type: "بنزين 91" },
    { name: "محطة الصالح", address: "15 ش الرياض، الرياض", price: 2543, fuel: "542", type: "بنزين 91" },
    { name: "محطة الصالح", address: "15 ش الرياض، الرياض", price: 2543, fuel: "542", type: "بنزين 91" },
    { name: "محطة الصالح", address: "15 ش الرياض، الرياض", price: 2543, fuel: "542", type: "بنزين 91" },
  ];

  const driversData = [
    { name: "محمد أحمد", phone: "00965284358", cost: 2543, fuel: "542", type: "بنزين 91" },
    { name: "محمد أحمد", phone: "00965284358", cost: 2543, fuel: "542", type: "بنزين 91" },
    { name: "محمد أحمد", phone: "00965284358", cost: 2543, fuel: "542", type: "بنزين 91" },
    { name: "محمد أحمد", phone: "00965284358", cost: 2543, fuel: "542", type: "بنزين 91" },
    { name: "محمد أحمد", phone: "00965284358", cost: 2543, fuel: "542", type: "بنزين 91" },
  ];

  //   if (!isInitialized) {
  return (
    <LayoutSimple
      headerProps={{
        title: "لوحة التحكم",
        titleIconSrc: <DashboardIcon className="w-5 h-5 text-gray-500" />,
        showSearch: false
      }}
      sidebarProps={{
        sections: serviceDistributerNavigationMenuData.sections,
        topItems: serviceDistributerNavigationMenuData.topItems,
        bottomItems: serviceDistributerNavigationMenuData.bottomItems,
        userInfo: userInfo
      }}
    >
      {/* conditionally rendering the loading state */}

      {/* <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل البيانات...</p>
          </div>
        </div> */}

      <BannerSection />
      <SubscriptionAndLocationsSection statsData={statsData} />
      <ConsumptionSection />
      <FuelConsumptionByCitiesSection />
      <StationLocationsMap title="مواقع محطات بترولايف" />
      <DeliverySurveySection />
      <MostUsedSection 
        stationsData={stationsData} 
        driversData={driversData}
        stationsTitle="محطات الوقود الأكثر استخداما"
        driversTitle="الأفراد الأكثر استهلاكا"
      />
    </LayoutSimple>
  );
  //   }

  //   return <ComprehensiveDashboard />;
};
