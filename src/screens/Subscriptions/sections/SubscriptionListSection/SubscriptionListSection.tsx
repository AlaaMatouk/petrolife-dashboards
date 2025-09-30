import React from "react";

const currentSubscriptionData = {
  price: "150",
  paymentMethod: "محفظة",
  vehicleCount: "15",
  packageType: "سنوى",
  expiryDate: "12 فبراير 2026",
  packageName: "الباقة البرونزية",
  subscriptionDate: "12 فبراير 2025"
};

const historyTableData = [
  {
    id: 1,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 2,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 3,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 4,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 5,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 6,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 7,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 8,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 9,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  },
  {
    id: 10,
    packageCode: "21A254",
    packageName: "بنزين 91",
    subscriptionDate: "21 فبراير 2025 - 5:05 ص",
    expiryDate: "21 فبراير 2025 - 5:05 ص",
    operationType: "20",
    subscriptionCost: "20"
  }
];

const paginationData = [
  { page: 1, active: false },
  { page: 2, active: false },
  { page: 3, active: true },
  { page: 4, active: false },
  { page: 5, active: false },
  { page: 6, active: false },
  { page: 7, active: false },
  { page: "...", active: false },
  { page: 20, active: false }
];

export const SubscriptionListSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1077px] items-start gap-5 absolute top-28 left-[50px]" role="main" aria-label="قسم قائمة الاشتراكات">
<article className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
<div className="flex flex-col items-end gap-7 relative self-stretch w-full flex-[0_0_auto]">
<header className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
<h2 className="relative w-[103px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
الباقة الحالية
            </h2>
<img
              className="relative w-[18px] h-[18px] aspect-[1]"
              alt="أيقونة الباقة الحالية"
              src="/img/side-icons-14.svg"
            />
</header>
<div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
<div className="flex flex-col items-start justify-center gap-[var(--corner-radius-medium)] relative flex-1 grow">
<div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
<div className="flex-col items-end gap-[var(--corner-radius-extra-small)] flex-1 grow flex relative">
<label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
السعر (ر.س)
                  </label>
<div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
<div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
<span className="mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
{currentSubscriptionData.price}
                      </span>
</div>
</div>
</div>
<div className="flex-col items-end gap-[var(--corner-radius-extra-small)] flex-1 grow flex relative">
<label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
طريقة الدفع
                  </label>
<div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
<div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
{currentSubscriptionData.paymentMethod}
                      </span>
</div>
</div>
</div>
</div>
<div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
<label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
عدد المركبات
                </label>
<div className="justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)] flex flex-col items-end relative">
<div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
<span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
{currentSubscriptionData.vehicleCount}
                    </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-start justify-center gap-[var(--corner-radius-medium)] relative flex-1 grow">
<div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
<label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
نوع الباقة
                </label>
<div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
<div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
{currentSubscriptionData.packageType}
                    </span>
</div>
</div>
</div>
<div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
<label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
تاريخ الانتهاء
                </label>
<div className="justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)] flex flex-col items-end relative">
<div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
{currentSubscriptionData.expiryDate}
                    </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col items-start justify-center gap-[var(--corner-radius-medium)] relative flex-1 grow">
<div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
<label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
اسم الباقة
                </label>
<div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
<div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
{currentSubscriptionData.packageName}
                    </span>
</div>
</div>
</div>
<div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
<label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
تاريخ الاشتراك
                </label>
<div className="justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)] flex flex-col items-end relative">
<div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
{currentSubscriptionData.subscriptionDate}
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col w-[138px] items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] bg-color-mode-surface-bg-orange-light rounded-[var(--corner-radius-small)]">
<div className="items-center justify-center gap-[var(--corner-radius-small)] self-stretch w-full flex-[0_0_auto] flex relative">
<div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
<span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-orange text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
باقاتنا المميزة
              </span>
</div>
<img
              className="relative w-[18px] h-[18px] aspect-[1]"
              alt="أيقونة الباقات المميزة"
              src="/img/side-icons-15.svg"
            />
</div>
</div>
</article>
<article className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
<div className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
<button className="relative w-[79px] h-[30px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder bg-transparent hover:bg-color-mode-surface-bg-icon-gray transition-colors" aria-label="تصدير البيانات">
<span className="absolute w-[46.84%] h-[56.67%] top-[23.33%] left-[13.92%] flex items-center justify-center font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
تصدير
              </span>
<div className="absolute w-[26.91%] h-[48.48%] top-[24.24%] left-[63.26%] flex">
<div className="flex-1 w-[21.26px] relative">
<img
                    className="absolute w-[58.33%] h-[75.00%] top-[9.06%] left-[18.48%]"
                    alt="أيقونة التصدير"
                    src="/img/icon.svg"
                  />
</div>
</div>
</button>
<header className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
<h2 className="relative w-[156px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
سجل الباقات السابقة
              </h2>
<img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="أيقونة سجل الباقات السابقة"
                src="/img/side-icons-16.svg"
              />
</header>
</div>
</div>
<div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
<div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
<div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
<table className="flex flex-col items-end relative flex-1 grow" role="table" aria-label="جدول سجل الباقات السابقة">
<thead className="relative self-stretch w-full h-[42px] bg-color-mode-surface-bg-icon-gray">
<tr className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
<th className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[91px] flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
كود الباقة
                      </span>
</th>
<th className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[117px] flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
اسم الباقة
                      </span>
</th>
<th className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[255px] flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
تاريخ الاشتراك
                      </span>
</th>
<th className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[203px] flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
تاريخ الانتهاء
                      </span>
</th>
<th className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[159px] flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
<span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
الحالة
</span>
</th>
</tr>
</thead>
<tbody>
{historyTableData.map((subscription, index) => (
<tr key={index} className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
<td className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[117px] flex-[0_0_auto] bg-white border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
<span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
{subscription.packageCode}
</span>
</td>
<td className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[255px] flex-[0_0_auto] bg-white border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
<span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
{subscription.packageName}
</span>
</td>
<td className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[203px] flex-[0_0_auto] bg-white border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
<span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
{subscription.subscriptionDate}
</span>
</td>
<td className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[203px] flex-[0_0_auto] bg-white border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
<span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
{subscription.expiryDate}
</span>
</td>
<td className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative w-[159px] flex-[0_0_auto] bg-white border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
<span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
{subscription.operationType}
</span>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>
</div>
</article>
</section>
);
};