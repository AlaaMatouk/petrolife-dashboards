import {
  Car,
  Users,
  DollarSign,
  Fuel,
  Wallet,
  ShoppingBag,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { StatData } from "./StatsCardsSection";

// Format number with thousands separator (English)
export const formatNumber = (num: number) => {
  return new Intl.NumberFormat("en-US").format(num);
};

// Static wallet balance data for testing
const walletBalance = 720250;

export const statsData: StatData[] = [
  {
    title: "رصيد المحفظة",
    amount: formatNumber(walletBalance),
    icon: <Wallet className="w-5 h-5" style={{ color: "#E76500" }} />,
    type: "wallet",
  },
  {
    title: "التكلفة الإجمالية للمشتريات",
    amount: "14,254 ر.س",
    icon: <ShoppingBag className="w-5 h-5" style={{ color: "#E76500" }} />,
    type: "purchaseCost",
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
    icon: <Fuel className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
  {
    title: "السائقين النشطين / المعطلين",
    categories: [
      { name: "نشطين", count: 14 },
      { name: "معطلين", count: 54 },
    ],
    icon: <Users className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
  {
    title: "السيارات",
    categories: [
      { name: "صغيرة", count: 20 },
      { name: "متوسطة", count: 25 },
      { name: "كبيرة", count: 30 },
      { name: "VIP", count: 10 },
    ],
    total: { name: "الاجمالي", count: 85 },
    icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
  {
    title: "الطلبات المكتملة / الملغية",
    categories: [
      { name: "مكتملة", count: 12 },
      { name: "ملغية", count: 10 },
    ],
    icon: <CheckCircle className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
  {
    title: "عمليات تغيير الزيوت",
    categories: [
      { name: "صغيرة", count: 1250 },
      { name: "متوسطة", count: 3250 },
      { name: "كبيرة", count: 4536 },
      { name: "VIP", count: 425 },
    ],
    icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
  {
    title: "عمليات غسيل السيارات",
    categories: [
      { name: "صغيرة", count: 1250 },
      { name: "متوسطة", count: 3250 },
      { name: "كبيرة", count: 4536 },
      { name: "VIP", count: 425 },
    ],
    icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
  {
    title: "عمليات تغيير الإطارات",
    categories: [
      { name: "صغيرة", count: 1250 },
      { name: "متوسطة", count: 3250 },
      { name: "كبيرة", count: 4536 },
      { name: "VIP", count: 425 },
    ],
    icon: <Car className="w-5 h-5" style={{ color: "#E76500" }} />,
  },
];

// Default selected options for cards with option buttons
export const defaultSelectedOptions = {};
