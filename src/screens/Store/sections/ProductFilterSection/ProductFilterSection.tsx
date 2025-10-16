import { useState, useEffect } from "react";
import { Star, ShoppingCart, Store } from "lucide-react";
import { fetchProducts } from "../../../../services/firestore";
import { LoadingSpinner } from "../../../../components/shared";
import { useGlobalState } from "../../../../context/GlobalStateContext";
import { useToast } from "../../../../hooks/useToast";

const filterCategories = [
  { id: "accessories", label: "اكسسوارات" },
  { id: "parts", label: "قطع غيار" },
  { id: "oils", label: "زيوت" },
  { id: "motors", label: "مواتير" },
  { id: "tires", label: "إطارات" },
  { id: "filters", label: "فلاتر" },
  { id: "all", label: "كل المنتجات" },
];

const ProductCard = ({ product }: { product: any }) => {
  const { dispatch } = useGlobalState();
  const { addToast } = useToast();

  // Extract product details with proper handling of nested objects
  // Based on Firestore structure: title.ar/en, desc.ar/en, image (string), price (number)
  const getTitleText = (prod: any): string => {
    if (prod.title?.ar) return prod.title.ar;
    if (prod.title?.en) return prod.title.en;
    if (typeof prod.title === 'string') return prod.title;
    if (prod.name?.ar) return prod.name.ar;
    if (prod.name?.en) return prod.name.en;
    if (typeof prod.name === 'string') return prod.name;
    return "منتج";
  };

  const getDescriptionText = (prod: any): string => {
    if (prod.desc?.ar) return prod.desc.ar;
    if (prod.desc?.en) return prod.desc.en;
    if (typeof prod.desc === 'string') return prod.desc;
    if (prod.description?.ar) return prod.description.ar;
    if (prod.description?.en) return prod.description.en;
    if (typeof prod.description === 'string') return prod.description;
    return "";
  };

  const getCategoryText = (prod: any): string => {
    if (prod.category?.ar) return prod.category.ar;
    if (prod.category?.en) return prod.category.en;
    if (typeof prod.category === 'string') return prod.category;
    return "منتجات";
  };

  const title = getTitleText(product);
  const description = getDescriptionText(product);
  const category = getCategoryText(product);
  const image = product.image || product.imageUrl || product.img || "/img/image-10.png";
  const rating = product.rating || 4.5;
  const reviews = product.reviews || product.reviewsCount || 0;
  const price = product.price || product.salePrice || 0;

  const handleAddToCart = () => {
    const cartItem = {
      id: `cart-${product.id}-${Date.now()}`, // Unique cart item ID
      productId: product.id,
      title: title,
      price: price,
      quantity: 1,
      image: image,
      category: category,
    };

    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    addToast({ 
      title: "نجح", 
      message: "تمت إضافة المنتج إلى السلة", 
      type: "success" 
    });
  };

  return (
    <article className="flex flex-col items-start gap-2.5 p-2.5 relative w-full bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-medium)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
      <div className="flex flex-col w-full items-start gap-3 relative">
        <div className="relative self-stretch w-full h-[148px] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
          <div
            className="relative top-[calc(50.00%_-_78px)] left-[calc(50.00%_-_78px)] w-[156px] h-[156px] bg-cover bg-[50%_50%]"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>

        <div className="flex flex-col items-end gap-[17px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-end gap-[var(--corner-radius-small)] self-stretch w-full flex relative flex-[0_0_auto]">
            <div className="flex-col items-end gap-[var(--corner-radius-small)] self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="flex items-center justify-end gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex-1 h-[19px] mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-orange text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] relative font-subtitle-subtitle-3 [font-style:var(--subtitle-subtitle-3-font-style)]">
                  {category}
                </div>
                <div className="relative w-1.5 h-1.5 bg-color-mode-text-icons-t-orange rounded-[3px]" />
              </div>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <h3 className="self-stretch mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 [font-style:var(--subtitle-subtitle-2-font-style)]">
                  {title}
                </h3>
                {description && (
                  <p className="self-stretch font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] relative font-caption-caption-1 [font-style:var(--caption-caption-1-font-style)]">
                    {description}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                <p className="w-[97px] h-[18px] mt-[-1.00px] font-normal text-color-mode-text-icons-t-sec text-base text-left leading-4 whitespace-nowrap [direction:rtl] relative [font-family:'Tajawal',Helvetica]">
                  <span className="font-[number:var(--subtitle-subtitle-2-font-weight)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] font-subtitle-subtitle-2 [font-style:var(--subtitle-subtitle-2-font-style)] text-[length:var(--subtitle-subtitle-2-font-size)]">
                    {rating}{" "}
                  </span>
                  <span className="text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 [font-style:var(--body-body-2-font-style)] font-[number:var(--body-body-2-font-weight)]">
                    ({reviews} مراجعة)
                  </span>
                </p>
                <Star className="relative w-[18px] h-[18px] text-orange-500" />
              </div>

              <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
                <span className="text-blue-500 font-subtitle-subtitle-2 text-[length:var(--subtitle-subtitle-2-font-size)]">ر.س</span>
                <div className="relative w-[19px] h-[18px] mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                  {price}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[var(--corner-radius-medium)] relative self-stretch w-full flex-[0_0_auto]">
            <button 
              onClick={handleAddToCart}
              className="flex items-center justify-center w-[42px] h-[42px] bg-gray-100 hover:bg-orange-100 rounded-[var(--corner-radius-small)] transition-colors cursor-pointer"
              aria-label="إضافة إلى السلة"
            >
              <ShoppingCart className="w-[18px] h-[18px] text-orange-500" />
            </button>

            <button 
              onClick={handleAddToCart}
              className="items-center justify-center pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 flex-1 grow bg-color-mode-surface-primary-blue hover:bg-blue-700 flex flex-col gap-2.5 relative rounded-[var(--corner-radius-small)] transition-colors cursor-pointer"
            >
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
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const firestoreProducts = await fetchProducts();
        setProducts(firestoreProducts);
      } catch (err) {
        console.error('Error loading products:', err);
        setError('فشل في تحميل المنتجات.');
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
  };

  // Helper function to safely extract category text
  const getCategoryText = (prod: any): string => {
    if (prod.category?.ar) return prod.category.ar;
    if (prod.category?.en) return prod.category.en;
    if (typeof prod.category === 'string') return prod.category;
    return "";
  };

  // Filter products based on active category
  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => {
        const category = getCategoryText(product);
        return category === activeFilter;
      });

  return (
    <section className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
      {/* Section Header with Buttons */}
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex w-[648px] items-center gap-[var(--corner-radius-medium)] relative">
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
            <button
              onClick={() => setActiveFilter("purchases")}
              className={`flex flex-col w-[94px] items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative rounded-[var(--corner-radius-small)] border-[0.2px] border-solid transition-colors ${
                activeFilter === "purchases"
                  ? "bg-color-mode-surface-purple-bg border-color-mode-text-icons-t-primary-gray"
                  : "border-color-mode-text-icons-t-placeholder"
              }`}
            >
              <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto] mr-[-1.00px]">
                  <div
                    className={`relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] ${
                      activeFilter === "purchases"
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
              onClick={() => setActiveFilter("all")}
              className={`w-[98px] items-start pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 flex flex-col gap-2.5 relative rounded-[var(--corner-radius-small)] transition-colors ${
                activeFilter === "all"
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

          <Store className="relative w-[18px] h-[18px] text-gray-500" />
        </div>
      </div>

      {/* Filter Categories */}
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

      {/* Products Grid with Flex Layout */}
      {isLoading ? (
        <LoadingSpinner size="lg" message="جاري تحميل المنتجات..." />
      ) : error ? (
        <div className="flex items-center justify-center w-full py-8">
          <p className="text-red-500 text-center [direction:rtl]">{error}</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="flex items-center justify-center w-full py-8">
          <p className="text-gray-500 text-center [direction:rtl]">لا توجد منتجات</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};
