import React from "react";

const carData = [
  {
    id: 1,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17.svg",
        avatar2: "/img/ellipse-18.svg",
      },
    ],
  },
  {
    id: 2,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "كبيرة", icon: "/img/component-4-1.svg" },
    drivers: [
      {
        name: "محمد، مراد، عبدالك..",
        avatar1: "/img/ellipse-17-1.svg",
        avatar2: "/img/ellipse-18-1.svg",
        avatar3: "/img/ellipse-19.svg",
      },
    ],
  },
  {
    id: 3,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "متوسطة", icon: "/img/component-4-2.svg" },
    drivers: [{ name: "محمد", avatar1: "/img/ellipse-17-2.svg" }],
  },
  {
    id: 4,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "VIP", icon: "/img/component-4-3.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-3.svg",
        avatar2: "/img/ellipse-18-2.svg",
      },
    ],
  },
  {
    id: 5,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-4.svg",
        avatar2: "/img/ellipse-18-3.svg",
      },
    ],
  },
  {
    id: 6,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: null,
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-5.svg",
        avatar2: "/img/ellipse-18-4.svg",
      },
    ],
  },
  {
    id: 7,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-6.svg",
        avatar2: "/img/ellipse-18-5.svg",
      },
    ],
  },
  {
    id: 8,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-7.svg",
        avatar2: "/img/ellipse-18-6.svg",
      },
    ],
  },
  {
    id: 9,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-8.svg",
        avatar2: "/img/ellipse-18-7.svg",
      },
    ],
  },
  {
    id: 10,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-9.svg",
        avatar2: "/img/ellipse-18-8.svg",
      },
    ],
  },
];

const paginationData = [
  { page: "التالي", type: "next", icon: "/img/icon-16-arrow-right.svg" },
  { page: "20", type: "number" },
  { page: "...", type: "ellipsis" },
  { page: "7", type: "number" },
  { page: "6", type: "number" },
  { page: "5", type: "number" },
  { page: "4", type: "number" },
  { page: "3", type: "current" },
  { page: "2", type: "number" },
  { page: "1", type: "number" },
  { page: "السابق", type: "prev", icon: "/img/icon-16-arrow-left.svg" },
];

export const CarListSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1077px] items-start gap-5 absolute top-28 left-[50px]">
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
              <button className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors">
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      إضافة سيارة جديدة
                    </span>
                  </div>

                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt="إضافة سيارة جديدة"
                    src="/img/side-icons-13.svg"
                  />
                </div>
              </button>

              <button className="flex flex-col w-[150px] items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors">
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      اعدادات السيارات
                    </span>
                  </div>

                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt="اعدادات السيارات"
                    src="/img/side-icons-14.svg"
                  />
                </div>
              </button>

              <button className="relative self-stretch w-[79px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors">
                <span className="absolute w-[46.84%] h-[56.67%] top-[23.33%] left-[13.92%] flex items-center justify-center font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
                  تصدير
                </span>

                <div className="absolute w-[26.91%] h-[48.48%] top-[24.24%] left-[63.26%] flex">
                  <div className="flex-1 w-[21.26px] relative">
                    <img
                      className="absolute w-[58.33%] h-[75.00%] top-[10.04%] left-[18.48%]"
                      alt="تصدير"
                      src="/img/icon.svg"
                    />
                  </div>
                </div>
              </button>
            </div>

            <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
              <h1 className="relative w-[117px] h-5 mt-[-1.00px] ml-[-7.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                السيــــــــــــــارت (23)
              </h1>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="السيارات"
                src="/img/side-icons-15.svg"
              />
            </div>
          </div>
        </header>

        <main className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-7 items-end relative">
                <div className="relative self-stretch w-full h-[42px] bg-color-mode-surface-bg-icon-gray" />

                {carData.map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-end gap-2.5 pt-[var(--corner-radius-medium)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-medium)] pl-[var(--corner-radius-none)] relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    <button aria-label="خيارات السيارة">
                      <img
                        className="relative w-[18px] h-[18px] aspect-[1]"
                        alt="خيارات"
                        src="/img/side-icons-25.svg"
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-end relative flex-1 grow">
                <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                  <h2 className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    السائقون
                  </h2>
                </div>

                {carData.map((car, index) => (
                  <div
                    key={car.id}
                    className="flex h-[42px] items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] pt-[9px] pb-2 relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                      <span className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {car.drivers[0].name}
                      </span>

                      <div
                        className={`relative ${car.drivers[0].avatar3 ? "w-[46px] h-[24.6px]" : car.drivers[0].avatar2 ? "w-10 h-[24.59px]" : "w-6 h-6"}`}
                      >
                        {car.drivers[0].avatar3 ? (
                          <>
                            <img
                              className="absolute top-0 left-[22px] w-6 h-6 aspect-[1] object-cover"
                              alt="سائق"
                              src={car.drivers[0].avatar1}
                            />
                            <img
                              className="-top-0.5 left-[9px] w-7 h-7 absolute aspect-[1] object-cover"
                              alt="سائق"
                              src={car.drivers[0].avatar2}
                            />
                            <img
                              className="-top-0.5 -left-0.5 w-7 h-7 absolute aspect-[1] object-cover"
                              alt="سائق"
                              src={car.drivers[0].avatar3}
                            />
                          </>
                        ) : car.drivers[0].avatar2 ? (
                          <>
                            <img
                              className="top-0 left-4 w-6 h-6 absolute aspect-[1] object-cover"
                              alt="سائق"
                              src={car.drivers[0].avatar1}
                            />
                            <img
                              className="-top-0.5 -left-0.5 w-7 h-7 absolute aspect-[1] object-cover"
                              alt="سائق"
                              src={car.drivers[0].avatar2}
                            />
                          </>
                        ) : (
                          <div
                            className="relative w-6 h-6 bg-cover bg-[50%_50%]"
                            style={{
                              backgroundImage: `url(${car.drivers[0].avatar1})`,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-[129px] items-end relative">
                <div className="flex h-[42px] items-center justify-end gap-1.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full bg-color-mode-surface-bg-icon-gray">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
                    <h2 className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      تصنيف السيارة
                    </h2>
                  </div>

                  <button aria-label="ترتيب حسب تصنيف السيارة">
                    <img
                      className="w-3.5 h-3.5 relative aspect-[1]"
                      alt="ترتيب"
                      src="/img/side-icons-29.svg"
                    />
                  </button>
                </div>

                {carData.map((car, index) => (
                  <div
                    key={car.id}
                    className="flex items-center justify-end gap-1 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    {car.category ? (
                      <>
                        <span className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {car.category.name}
                        </span>
                        <img
                          className="relative w-3.5 h-3.5 aspect-[1]"
                          alt={car.category.name}
                          src={car.category.icon}
                        />
                      </>
                    ) : (
                      <span className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        --
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-[97px] items-end relative">
                <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                  <h2 className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    نوع الوقود
                  </h2>
                </div>

                {carData.map((car, index) => (
                  <div
                    key={car.id}
                    className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    <span className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {car.fuelType}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-[106px] items-end relative">
                <div className="flex h-[42px] items-center justify-end gap-1 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full bg-color-mode-surface-bg-icon-gray">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px]">
                    <h2 className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      سنة الاصدار
                    </h2>
                  </div>

                  <button aria-label="ترتيب حسب سنة الاصدار">
                    <img
                      className="w-3.5 h-3.5 relative aspect-[1]"
                      alt="ترتيب"
                      src="/img/side-icons-29.svg"
                    />
                  </button>
                </div>

                {carData.map((car, index) => (
                  <div
                    key={car.id}
                    className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    <span className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {car.year}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-[79px] items-end relative">
                <div className="flex h-[42px] items-center justify-end gap-1 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full bg-color-mode-surface-bg-icon-gray">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0 relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px]">
                    <h2 className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      الطراز
                    </h2>
                  </div>

                  <button aria-label="ترتيب حسب الطراز">
                    <img
                      className="w-3.5 h-3.5 relative aspect-[1]"
                      alt="ترتيب"
                      src="/img/side-icons-29.svg"
                    />
                  </button>
                </div>

                {carData.map((car, index) => (
                  <div
                    key={car.id}
                    className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    <span className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {car.model}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-[81px] items-end relative">
                <div className="flex h-[42px] items-center justify-end gap-1 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full bg-color-mode-surface-bg-icon-gray">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-[3px] pb-0 px-0 relative flex-[0_0_auto] mt-[-1.50px] mb-[-1.50px]">
                    <h2 className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      الماركة
                    </h2>
                  </div>

                  <button aria-label="ترتيب حسب الماركة">
                    <img
                      className="w-3.5 h-3.5 relative aspect-[1]"
                      alt="ترتيب"
                      src="/img/side-icons-29.svg"
                    />
                  </button>
                </div>

                {carData.map((car, index) => (
                  <div
                    key={car.id}
                    className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    <span className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {car.brand}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-[119px] items-end relative">
                <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                  <h2 className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    اسم السيارة
                  </h2>
                </div>

                {carData.map((car, index) => (
                  <div
                    key={car.id}
                    className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    <span className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {car.carName}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col w-[85px] items-end relative">
                <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                  <h2 className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    رقم السيارة
                  </h2>
                </div>

                {carData.map((car, index) => (
                  <div
                    key={car.id}
                    className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                  >
                    <span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {car.carNumber}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <nav
            className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
            aria-label="صفحات السيارات"
          >
            <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
              {paginationData.map((item, index) => {
                if (item.type === "next") {
                  return (
                    <button
                      key={index}
                      className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
                    >
                      <img
                        className="relative w-4 h-4"
                        alt="التالي"
                        src={item.icon}
                      />
                      <span className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {item.page}
                      </span>
                    </button>
                  );
                } else if (item.type === "prev") {
                  return (
                    <button
                      key={index}
                      className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
                    >
                      <span className="relative w-fit ml-[-3.50px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {item.page}
                      </span>
                      <img
                        className="mr-[-3.50px] relative w-4 h-4"
                        alt="السابق"
                        src={item.icon}
                      />
                    </button>
                  );
                } else if (item.type === "current") {
                  return (
                    <button
                      key={index}
                      className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative bg-color-mode-surface-primary-blue rounded overflow-hidden"
                      aria-current="page"
                    >
                      <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                        <span className="mt-[-11.00px] mb-[-9.00px] ml-[-2.50px] mr-[-2.50px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative tracking-[var(--subtitle-subtitle-3-letter-spacing)] relative w-fit font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
                          {item.page}
                        </span>
                      </div>
                    </button>
                  );
                } else if (item.type === "ellipsis") {
                  return (
                    <div
                      key={index}
                      className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
                    >
                      <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                        <span className="relative w-fit mt-[-11.00px] mb-[-9.00px] ml-[-5.00px] mr-[-5.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {item.page}
                        </span>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <button
                      key={index}
                      className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
                    >
                      <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                        <span
                          className={`font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)] ${
                            item.page === "20"
                              ? "mt-[-11.00px] mb-[-9.00px] ml-[-6.50px] mr-[-6.50px]"
                              : item.page === "7"
                                ? "mt-[-11.00px] mb-[-9.00px] ml-[-2.00px] mr-[-2.00px]"
                                : item.page === "6"
                                  ? "mt-[-11.00px] mb-[-9.00px] ml-[-3.00px] mr-[-3.00px]"
                                  : item.page === "5"
                                    ? "mt-[-11.00px] mb-[-9.00px] ml-[-3.00px] mr-[-3.00px]"
                                    : item.page === "4"
                                      ? "mt-[-11.00px] mb-[-9.00px] ml-[-3.00px] mr-[-3.00px]"
                                      : item.page === "2"
                                        ? "mt-[-11.00px] mb-[-9.00px] ml-[-2.50px] mr-[-2.50px]"
                                        : "mt-[-11.00px] mb-[-9.00px] ml-[-2.00px] mr-[-2.00px]"
                          }`}
                        >
                          {item.page}
                        </span>
                      </div>
                    </button>
                  );
                }
              })}
            </div>
          </nav>
        </main>
      </div>
    </section>
  );
};
