import {
  Car,
  Users,
  DollarSign,
  Fuel,
  Wallet,
} from "lucide-react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { StatData } from "./StatsCardsSection";

// Format number with thousands separator (English)
export const formatNumber = (num: number) => {
  return new Intl.NumberFormat("en-US").format(num);
};

// Static wallet balance data for testing
const walletBalance = 720250;

export const statsData: StatData[] = [
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
    options: ["الافراد", "الشركات"],
    icon: (
      <RocketLaunchIcon className="w-5 h-5" style={{ color: "#E76500" }} />
    ),
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
    icon: <DollarSign className="w-5 h-5" style={{ color: "#E76500" }} />,
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
    icon: <Fuel className="w-5 h-5" style={{ color: "#E76500" }} />,
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
    options: ["الافراد", "الشركات"],
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
    options: ["الافراد", "الشركات"],
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
    options: ["الافراد", "الشركات"],
    icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
];

// Default selected options for cards with option buttons
export const defaultSelectedOptions = { 3: 1, 9: 1, 10: 1, 11: 1 };

