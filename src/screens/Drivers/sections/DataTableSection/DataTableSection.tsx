import React from "react";
import { useNavigate } from "react-router-dom";

const vehicleStats = [
  {
    title: "سائقي السيارات ال VIP",
    count: "3",
    icon: "/img/component-4.svg",
  },
  {
    title: "سائقي السيارات الكبيرة",
    count: "10",
    icon: "/img/component-4-1.svg",
  },
  {
    title: "سائقي السيارات المتوسطة",
    count: "12",
    icon: "/img/component-5.svg",
  },
  {
    title: "سائقي السيارات الصغيرة",
    count: "20",
    icon: "/img/component-4-2.svg",
  },
];

const driversData = [
  {
    id: 1,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145224",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 2,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1000",
    carNumber: "2145224",
    carCategory: { text: "كبيرة", icon: "/img/component-4-4.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 3,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145224",
    carCategory: { text: "متوسطة", icon: "/img/component-4-5.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 4,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "-- / 1400",
    carNumber: "2145224",
    carCategory: { text: "VIP", icon: "/img/component-4-6.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 5,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145224",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 6,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "--",
    carCategory: { text: "--", icon: null },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 7,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145224",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 8,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145224",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: false, text: "معطل" },
  },
  {
    id: 9,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145224",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: false, text: "معطل" },
  },
  {
    id: 10,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145224",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: false, text: "معطل" },
  },
];

const paginationNumbers = [20, "...", 7, 6, 5, 4, 3, 2, 1];

export const DataTableSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col  items-end gap-5  ">
      <div className="flex flex-col items-end justify-center gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="flex flex-col items-end gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[229px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
              توزيع السائقين على السيارات
            </div>

            <img
              className="relative w-[18px] h-[18px] aspect-[1]"
              alt="Side icons"
              src="/img/side-icons-14.svg"
            />
          </div>

          <div className="flex h-[119px] items-center gap-5 relative  w-full">
            {vehicleStats.map((stat, index) => (
              <div
                key={index}
                className="relative flex-1 grow h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
              >
                <div className="flex flex-col w-[161px] items-end gap-[var(--corner-radius-large)] absolute top-[calc(50.00%_-_40px)] right-5">
                  <div className="w-fit mt-[-1.00px] font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-center tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] relative font-body-body-1 whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
                    {stat.title}
                  </div>

                  <div className="relative self-stretch font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] text-right tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] [font-style:var(--headline-h5b-font-style)]">
                    {stat.count}
                  </div>
                </div>

                <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

                <img
                  className="absolute top-[81px] left-[18px] w-5 h-5 aspect-[1]"
                  alt="Component"
                  src={stat.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-5 relative self-stretch  flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
          <div className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder">
                  <button onClick={() => navigate("/adddriver")}>
                    <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                        <div className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                          إضافة سائق جديد
                        </div>
                      </div>

                      <img
                        className="relative w-[18px] h-[18px] aspect-[1]"
                        alt="Side icons"
                        src="/img/side-icons-15.svg"
                      />
                    </div>
                  </button>
                </div>

                <div className="relative self-stretch w-[79px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                  <button>
                    {" "}
                    <div className="absolute w-[46.84%] h-[56.67%] top-[23.33%] left-[13.92%] flex items-center justify-center font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
                      تصدير
                    </div>
                    <div className="absolute w-[26.91%] h-[48.48%] top-[24.24%] left-[63.26%] flex">
                      <div className="flex-1 w-[21.26px] relative">
                        <img
                          className="absolute w-[58.33%] h-[75.00%] top-[10.04%] left-[18.48%]"
                          alt="Icon"
                          src="/img/icon.svg"
                        />
                      </div>
                    </div>{" "}
                  </button>
                </div>
              </div>

              <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
                <div className="relative w-[148px] h-5 mt-[-1.00px] ml-[-38.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                  عدد الســـــــائقين (45)
                </div>

                <img
                  className="relative w-[18px] h-[18px] aspect-[1]"
                  alt="Side icons"
                  src="/img/side-icons-16.svg"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-7 items-end relative">
                  <div className="relative self-stretch w-full h-[42px] bg-color-mode-surface-bg-icon-gray" />

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-2.5 pt-[var(--corner-radius-medium)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-medium)] pl-[var(--corner-radius-none)] relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <img
                        className="relative w-[18px] h-[18px] aspect-[1]"
                        alt="Side icons"
                        src="/img/side-icons-26.svg"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-[111px] items-end relative">
                  <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                    <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        حالة الحساب
                      </div>

                      <img
                        className="relative w-3.5 h-3.5 aspect-[1]"
                        alt="Side icons"
                        src="/img/side-icons-28.svg"
                      />
                    </div>
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex h-[42px] items-center justify-end gap-2.5 pt-[var(--corner-radius-extra-small)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-extra-small)] pl-[var(--corner-radius-none)] relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="inline-flex items-center gap-[var(--corner-radius-small)] relative flex-[0_0_auto]">
                        <div
                          className={`relative w-[39.48px] h-6 rounded-[77.42px] overflow-hidden rotate-[-180.00deg] ${
                            driver.accountStatus.active
                              ? "bg-color-mode-surface-primary-green"
                              : "bg-system-colors-fills-secondary"
                          }`}
                        >
                          <div
                            className={`absolute top-[calc(50.00%_-_11px)] h-[21px] w-[21px] bg-color-mode-surface-bg-screen rounded-[77.42px] shadow-[0px_2.32px_0.77px_#0000000f,0px_2.32px_6.19px_#00000026,0px_0px_0px_0.77px_#0000000a] ${
                              driver.accountStatus.active
                                ? "right-0.5"
                                : "left-0.5"
                            }`}
                          />
                        </div>

                        <div className="relative w-[43px] h-[19px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {driver.accountStatus.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-[129px] items-end relative">
                  <div className="flex h-[42px] items-center justify-end gap-1.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full bg-color-mode-surface-bg-icon-gray">
                    <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
                      <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        تصنيف السيارة
                      </div>
                    </div>

                    <img
                      className="relative w-3.5 h-3.5 aspect-[1]"
                      alt="Side icons"
                      src="/img/side-icons-28.svg"
                    />
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-1 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driver.carCategory.text}
                      </div>

                      {driver.carCategory.icon && (
                        <img
                          className="relative w-3.5 h-3.5 aspect-[1]"
                          alt="Component"
                          src={driver.carCategory.icon}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-24 items-end relative">
                  <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                    <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      رقم السيارة
                    </div>
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driver.carNumber}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-[136px] items-end relative">
                  <div className="flex h-[41px] items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] pt-[18px] pb-2.5 relative self-stretch w-full bg-color-mode-surface-bg-icon-gray">
                    <div className="inline-flex flex-col items-end justify-center relative flex-[0_0_auto] mt-[-9.50px] mb-[-9.50px]">
                      <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        القيمة المالية (ر.س)
                      </div>

                      <div className="relative w-fit -mt-1.5 font-[number:var(--caption-8-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--caption-8-font-size)] text-left tracking-[var(--caption-8-letter-spacing)] leading-[var(--caption-8-line-height)] [direction:rtl] font-caption-8 whitespace-nowrap [font-style:var(--caption-8-font-style)]">
                        (المستخدمة / المحددة) يوميا
                      </div>
                    </div>
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driver.financialValue}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-[86px] items-end relative">
                  <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                    <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      نوع الوقود
                    </div>
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driver.fuelType}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-[155px] items-end relative">
                  <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                    <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      العنوان
                    </div>
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <p className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        {driver.address}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-[117px] items-end relative">
                  <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                    <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      رقم الهاتف
                    </div>
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driver.phone}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-[101px] items-end relative">
                  <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                    <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      اسم السائق
                    </div>
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driver.driverName}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col w-[86px] items-end relative">
                  <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                    <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      كود السائق
                    </div>
                  </div>

                  {driversData.map((driver) => (
                    <div
                      key={driver.id}
                      className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driver.driverCode}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
                <div className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                  <img
                    className="relative w-4 h-4"
                    alt="Icon arrow right"
                    src="/img/icon-16-arrow-right.svg"
                  />

                  <div className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    التالي
                  </div>
                </div>

                {paginationNumbers.map((number, index) => (
                  <div
                    key={index}
                    className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden ${
                      number === 3
                        ? "bg-color-mode-surface-primary-blue"
                        : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
                    }`}
                  >
                    <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                      <div
                        className={`relative w-fit mt-[-11.00px] mb-[-9.00px] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap ${
                          number === 3
                            ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-[length:var(--subtitle-subtitle-3-font-size)] font-subtitle-subtitle-3 [font-style:var(--subtitle-subtitle-3-font-style)] ml-[-2.50px] mr-[-2.50px]"
                            : "font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] font-body-body-2 [font-style:var(--body-body-2-font-style)]"
                        } ${
                          number === 20
                            ? "ml-[-6.50px] mr-[-6.50px]"
                            : number === "..."
                            ? "ml-[-5.00px] mr-[-5.00px]"
                            : number === 7
                            ? "ml-[-2.00px] mr-[-2.00px]"
                            : number === 6 || number === 5 || number === 4
                            ? "ml-[-3.00px] mr-[-3.00px]"
                            : number === 2
                            ? "ml-[-2.50px] mr-[-2.50px]"
                            : number === 1
                            ? "ml-[-2.00px] mr-[-2.00px]"
                            : ""
                        }`}
                      >
                        {number}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                  <div className="relative w-fit ml-[-3.50px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    السابق
                  </div>

                  <img
                    className="mr-[-3.50px] relative w-4 h-4"
                    alt="Icon arrow left"
                    src="/img/icon-16-arrow-left.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
