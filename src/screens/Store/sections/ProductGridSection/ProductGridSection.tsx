import React, { useState } from "react";

const productData = [
  {
    id: 1,
    name: "منتج رقم 1",
    price: "150.00",
    originalPrice: "200.00",
    image: "/img/image-2.png",
    discount: "25%",
  },
  {
    id: 2,
    name: "منتج رقم 2",
    price: "120.00",
    originalPrice: "160.00",
    image: "/img/image-6-2.png",
    discount: "25%",
  },
  {
    id: 3,
    name: "منتج رقم 3",
    price: "180.00",
    originalPrice: "240.00",
    image: "/img/image-7-1.png",
    discount: "25%",
  },
  {
    id: 4,
    name: "منتج رقم 4",
    price: "90.00",
    originalPrice: "120.00",
    image: "/img/image-8-1.png",
    discount: "25%",
  },
  {
    id: 5,
    name: "منتج رقم 5",
    price: "210.00",
    originalPrice: "280.00",
    image: "/img/image-9-1.png",
    discount: "25%",
  },
  {
    id: 6,
    name: "منتج رقم 6",
    price: "75.00",
    originalPrice: "100.00",
    image: "/img/image-10.png",
    discount: "25%",
  },
  {
    id: 7,
    name: "منتج رقم 7",
    price: "300.00",
    originalPrice: "400.00",
    image: "/img/image-11-1.png",
    discount: "25%",
  },
  {
    id: 8,
    name: "منتج رقم 8",
    price: "135.00",
    originalPrice: "180.00",
    image: "/img/logo-2.png",
    discount: "25%",
  },
  {
    id: 9,
    name: "منتج رقم 9",
    price: "165.00",
    originalPrice: "220.00",
    image: "/img/logo-3.png",
    discount: "25%",
  },
  {
    id: 10,
    name: "منتج رقم 10",
    price: "225.00",
    originalPrice: "300.00",
    image: "/img/paper-money-or-dollar-bills-and-blue-credit-card-3d-illustration.png",
    discount: "25%",
  },
  {
    id: 11,
    name: "منتج رقم 11",
    price: "105.00",
    originalPrice: "140.00",
    image: "/img/image-20DI.png",
    discount: "25%",
  },
  {
    id: 12,
    name: "منتج رقم 12",
    price: "195.00",
    originalPrice: "260.00",
    image: "/img/image-2car.png",
    discount: "25%",
  },
];

export const ProductGridSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex w-[648px] items-center gap-[var(--corner-radius-medium)] relative">
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <button
              onClick={() => setActiveTab("purchases")}
              className={`flex flex-col w-[94px] items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative rounded-[var(--corner-radius-small)] border-[0.2px] border-solid transition-colors ${
                activeTab === "purchases"
                  ? "bg-color-mode-surface-purple-bg border-color-mode-text-icons-t-primary-gray"
                  : "border-color-mode-text-icons-t-placeholder"
              }`}
            >
              <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto] mr-[-1.00px]">
                  <div
                    className={`relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] ${
                      activeTab === "purchases"
                        ? "text-color-mode-text-icons-t-primary-gray"
                        : "text-color-mode-text-icons-t-placeholder"
                    }`}
                  >
                    مشتريــــــــــاتي
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("all")}
              className={`w-[98px] items-start pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 flex flex-col gap-2.5 relative rounded-[var(--corner-radius-small)] transition-colors ${
                activeTab === "all"
                  ? "bg-color-mode-surface-purple-bg"
                  : "border-[0.2px] border-solid border-color-mode-text-icons-t-placeholder"
              }`}
            >
              <div className="w-[169px] mr-[-91.00px] flex items-center gap-[var(--corner-radius-small)] relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
                    كل المنتجات
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <div className="relative w-[103px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
            المنتجات
          </div>

          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt="Side icons"
            src="/img/side-icons.svg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {productData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white rounded-[var(--corner-radius-medium)] shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = "/img/image-2.png"; // Fallback image
                }}
              />
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-md">
                {product.discount}
              </div>
            </div>

            <div className="p-4 flex flex-col gap-3 flex-1">
              <div className="text-right">
                <h3 className="font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)] line-clamp-2">
                  {product.name}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [font-style:var(--subtitle-subtitle-2-font-style)]">
                    {product.price} ر.س
                  </span>
                  <span className="font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] line-through">
                    {product.originalPrice}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <img
                    className="w-4 h-4"
                    alt="Currency icon"
                    src="/img/icon.svg"
                  />
                </div>
              </div>

              <button className="w-full bg-color-mode-surface-primary-blue text-color-mode-text-icons-t-btn-negative py-3 px-4 rounded-[var(--corner-radius-small)] font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)] transition-colors hover:opacity-90 hover:bg-blue-600">
                أضف إلى السلة
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full mt-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-color-mode-surface-primary-blue rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
