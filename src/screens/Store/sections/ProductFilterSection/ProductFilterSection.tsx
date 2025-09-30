import React, { useState } from "react";

const filterCategories = [
  { id: "accessories", label: "اكسسوارات" },
  { id: "parts", label: "قطع غيار" },
  { id: "oils", label: "زيوت" },
  { id: "motors", label: "مواتير" },
  { id: "tires", label: "إطارات" },
  { id: "filters", label: "فلاتر" },
  { id: "all", label: "كل المنتجات" },
];

const products = [
  {
    id: 1,
    image: "/img/image-10.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-3.svg",
    starIcon: "/img/side-icons-15.svg",
    heartIcon: "/img/vector-7.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 2,
    image: "/img/image-7-1.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-3.svg",
    starIcon: "/img/side-icons-15.svg",
    heartIcon: "/img/vector-7.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 3,
    image: "/img/image-9-1.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-3.svg",
    starIcon: "/img/side-icons-15.svg",
    heartIcon: "/img/vector-7.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 4,
    image: "/img/image-6-2.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-3.svg",
    starIcon: "/img/side-icons-15.svg",
    heartIcon: "/img/vector-7.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 5,
    image: "/img/image-9-1.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-7.svg",
    starIcon: "/img/side-icons-15.svg",
    heartIcon: "/img/vector-7.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 6,
    image: "/img/image-6-2.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-7.svg",
    starIcon: "/img/side-icons-15.svg",
    heartIcon: "/img/vector-7.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 7,
    image: "/img/image-11-1.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-7.svg",
    starIcon: "/img/side-icons-15.svg",
    heartIcon: "/img/vector-7.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 8,
    image: "/img/image-8-1.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-7.svg",
    starIcon: "/img/side-icons-15.svg",
    heartIcon: "/img/vector-7.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 9,
    image: "/img/image-6-2.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-11.svg",
    starIcon: "/img/side-icons-23.svg",
    heartIcon: "/img/vector-11.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 10,
    image: "/img/image-11-1.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-11.svg",
    starIcon: "/img/side-icons-23.svg",
    heartIcon: "/img/vector-11.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 11,
    image: "/img/image-8-1.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-11.svg",
    starIcon: "/img/side-icons-23.svg",
    heartIcon: "/img/vector-11.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
  {
    id: 12,
    image: "/img/image-7-1.png",
    category: "فلاتر",
    title: "دعم ظهر كرسي السيارة",
    description:
      "دعم ظهر مميز مصنوع بخامات عالية الجودة بحيث تتحمل القدرة على المقاومة والحفاظ على حالته لأطول فترة ممكنة.",
    rating: 4.5,
    reviews: 12,
    likes: 40,
    cartIcon: "/img/component-1-11.svg",
    starIcon: "/img/side-icons-23.svg",
    heartIcon: "/img/vector-11.svg",
    shareIcon: "/img/side-icons-24.svg",
  },
];

const ProductCard = ({ product }: { product: (typeof products)[0] }) => {
  return (
    <article className="inline-flex items-center gap-2.5 p-2.5 relative flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-medium)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
      <div className="flex flex-col w-[227px] items-start gap-3 relative">
        <div className="relative self-stretch w-full h-[148px] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
          <div
            className="relative top-[calc(50.00%_-_78px)] left-[calc(50.00%_-_78px)] w-[156px] h-[156px] bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${product.image})` }}
          />
        </div>

        <div className="flex flex-col items-end gap-[17px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-end gap-[var(--corner-radius-small)] self-stretch w-full flex relative flex-[0_0_auto]">
            <div className="flex-col items-end gap-[var(--corner-radius-small)] self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="flex items-center justify-end gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex-1 h-[19px] mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-orange text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] relative font-subtitle-subtitle-3 [font-style:var(--subtitle-subtitle-3-font-style)]">
                  {product.category}
                </div>
                <div className="relative w-1.5 h-1.5 bg-color-mode-text-icons-t-orange rounded-[3px]" />
              </div>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="self-stretch mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 [font-style:var(--subtitle-subtitle-2-font-style)]">
                  {product.title}
                </h3>
                <p className="self-stretch font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] relative font-caption-caption-1 [font-style:var(--caption-caption-1-font-style)]">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                <p className="w-[97px] h-[18px] mt-[-1.00px] font-normal text-color-mode-text-icons-t-sec text-base text-left leading-4 whitespace-nowrap [direction:rtl] relative [font-family:'Tajawal',Helvetica]">
                  <span className="font-[number:var(--subtitle-subtitle-2-font-weight)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] font-subtitle-subtitle-2 [font-style:var(--subtitle-subtitle-2-font-style)] text-[length:var(--subtitle-subtitle-2-font-size)]">
                    {product.rating}{" "}
                  </span>
                  <span className="text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 [font-style:var(--body-body-2-font-style)] font-[number:var(--body-body-2-font-weight)]">
                    ({product.reviews} مراجعة)
                  </span>
                </p>
                <img
                  className="relative w-[18px] h-[18px] aspect-[1]"
                  alt="Star rating"
                  src={product.starIcon}
                />
              </div>

              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                  <div className="relative w-[13px] h-[13px] aspect-[1]">
                    <img
                      className="absolute w-[70.92%] h-[77.92%] top-[4.17%] left-[8.24%]"
                      alt="Heart"
                      src={product.heartIcon}
                    />
                  </div>
                  <div className="relative w-[19px] h-[18px] mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                    {product.likes}
                  </div>
                </div>
                <img
                  className="relative w-[18px] h-[18px] aspect-[1]"
                  alt="Share"
                  src={product.shareIcon}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[var(--corner-radius-medium)] relative self-stretch w-full flex-[0_0_auto]">
            <button
              className="inline-flex flex-col h-[42px] items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] bg-color-mode-surface-bg-orange-light rounded-[var(--corner-radius-small)]"
              aria-label="Add to cart"
            >
              <img
                className="relative w-5 h-5 mb-[-2.00px] aspect-[1]"
                alt="Add to cart"
                src={product.cartIcon}
              />
            </button>

            <button className="items-center justify-center pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 flex-1 grow bg-color-mode-surface-primary-blue flex flex-col gap-2.5 relative rounded-[var(--corner-radius-small)]">
              <div className="justify-center self-stretch w-full flex items-center gap-[var(--corner-radius-small)] relative flex-[0_0_auto]">
                <div className="w-fit mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] relative font-subtitle-subtitle-3 [font-style:var(--subtitle-subtitle-3-font-style)]">
                  شراء الآن
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ProductFilterSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
  };

  const productRows = [
    products.slice(0, 4),
    products.slice(4, 8),
    products.slice(8, 12),
  ];

  return (
    <section className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
      <nav
        className="flex items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]"
        role="tablist"
      >
        {filterCategories.map((category) => (
          <button
            key={category.id}
            role="tab"
            aria-selected={activeFilter === category.id}
            onClick={() => handleFilterClick(category.id)}
            className={`flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-1 grow rounded-[var(--corner-radius-small)] border-[0.2px] border-solid ${
              activeFilter === category.id
                ? "border-color-mode-text-icons-t-blue"
                : "border-color-mode-text-icons-t-placeholder"
            }`}
          >
            <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
              <div
                className={`relative flex-1 h-[18px] mt-[-1.00px] text-center tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] ${
                  activeFilter === category.id
                    ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--subtitle-subtitle-3-font-size)] font-subtitle-subtitle-3 [font-style:var(--subtitle-subtitle-3-font-style)]"
                    : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--body-body-2-font-size)] [font-style:var(--body-body-2-font-style)]"
                }`}
              >
                {category.label}
              </div>
            </div>
          </button>
        ))}
      </nav>

      <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
        {productRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="w-[1045px] items-start gap-5 flex relative flex-[0_0_auto]"
          >
            {row.map((product, index) => (
              <div
                key={product.id}
                className={index === 3 ? "mr-[-3.00px]" : ""}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
