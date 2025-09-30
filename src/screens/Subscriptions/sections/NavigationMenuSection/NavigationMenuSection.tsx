import React, { useState } from "react";

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
  isHighlighted?: boolean;
}

interface NavigationSection {
  title?: string;
  items: NavigationItem[];
}

export const NavigationMenuSection = (): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>("dashboard");

  const mainNavigationItems: NavigationItem[] = [
    {
      id: "dashboard",
      label: "لوحة التحكم",
      icon: "/img/side-icons-1.svg",
      isActive: true,
      isHighlighted: true,
    },
    {
      id: "wallet",
      label: "محفظــــــــــــتي",
      icon: "/img/side-icons-6.svg",
      isHighlighted: true,
    },
  ];

  const resourcesSection: NavigationSection = {
    title: "المــــــــــــــــــــــــــــــوارد",
    items: [
      {
        id: "drivers",
        label: "الســـــــــــائقين",
        icon: "/img/side-icons-3.svg",
        isActive: true,
      },
      {
        id: "cars",
        label: "السيـــــــــــــارات",
        icon: "/img/side-icons-4.svg",
      },
    ],
  };

  const reportsSection: NavigationSection = {
    title: "التقاريــــــــــــــــــــــــــــــر",
    items: [
      {
        id: "sales-report",
        label: "تقرير المبيعات",
        icon: "/img/side-icons-5.svg",
      },
      {
        id: "wallet-report",
        label: "تقرير المحفظة",
        icon: "/img/side-icons-6.svg",
      },
    ],
  };

  const otherNavigationItems: NavigationItem[] = [
    {
      id: "fuel-delivery",
      label: "طلبات توصيل الوقود",
      icon: "/img/side-icons-7.svg",
    },
    {
      id: "subscriptions",
      label: "اشتراكـــــاتي",
      icon: "/img/side-icons-8.svg",
      isHighlighted: true,
    },
    {
      id: "store",
      label: "المتجــــــــــــــر",
      icon: "/img/side-icons-9.svg",
    },
    {
      id: "invoices",
      label: "الفواتيـــــــــــر",
      icon: "/img/side-icons-10.svg",
    },
    {
      id: "support",
      label: "الدعم الفني",
      icon: "/img/side-icons-11.svg",
    },
    {
      id: "settings",
      label: "الإعدادات العامـــــة",
      icon: "/img/side-icons-12.svg",
    },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  const renderNavigationItem = (item: NavigationItem, isSubItem = false) => (
    <nav key={item.id} role="navigation">
      <div
        className={`flex flex-col items-center justify-center gap-2.5 pt-[var(--corner-radius-extra-small)] pr-${isSubItem ? "[var(--corner-radius-extra-large)]" : "[var(--corner-radius-extra-small)]"} pb-[var(--corner-radius-extra-small)] pl-[var(--corner-radius-extra-small)] relative self-stretch w-full flex-[0_0_auto] rounded-[var(--corner-radius-medium)] ${item.isHighlighted ? "bg-color-mode-surface-purple-bg" : ""} cursor-pointer hover:bg-color-mode-surface-purple-bg transition-colors`}
        onClick={() => handleItemClick(item.id)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleItemClick(item.id);
          }
        }}
        aria-label={item.label}
      >
        <div
          className={`flex flex-col h-[41px] items-start justify-center gap-2.5 pt-[var(--corner-radius-medium)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-medium)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-medium)] ${item.isActive ? "bg-color-mode-surface-bg-icon-gray" : ""}`}
        >
          <div className="flex items-center gap-[var(--dimensions-size-small)] relative self-stretch w-full flex-[0_0_auto] mt-[-0.50px] mb-[-0.50px]">
            <div className="flex h-[17px] items-center justify-end gap-2.5 pl-2.5 pr-0 py-2.5 relative flex-1 grow">
              <div className="relative flex-1 h-5 mt-[-12.50px] mb-[-10.50px] font-fine-print-small-medium-underline font-[number:var(--fine-print-small-medium-underline-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--fine-print-small-medium-underline-font-size)] tracking-[var(--fine-print-small-medium-underline-letter-spacing)] leading-[var(--fine-print-small-medium-underline-line-height)] underline whitespace-nowrap [direction:rtl] [font-style:var(--fine-print-small-medium-underline-font-style)]">
                {item.label}
              </div>
            </div>

            <img
              className="relative w-[18px] h-[18px] aspect-[1]"
              alt={`${item.label} icon`}
              src={item.icon}
            />
          </div>
        </div>
      </div>
    </nav>
  );

  const renderSectionHeader = (title: string) => (
    <div className="flex flex-col items-start gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="items-center justify-center gap-[var(--dimensions-size-small)] self-stretch w-full flex-[0_0_auto] flex relative">
        <div className="relative w-[15px] h-[15px] rotate-[90.00deg] aspect-[1]">
          <img
            className="absolute w-[83.33%] h-[83.33%] top-[5.21%] left-[5.21%] rotate-[-90.00deg]"
            alt="Section indicator"
            src="/img/vector-4.svg"
          />

          <img
            className="absolute w-[12.50%] h-[33.33%] top-[40.62%] left-[30.21%] rotate-[-90.00deg]"
            alt="Section indicator detail"
            src="/img/vector-5.svg"
          />
        </div>

        <img
          className="relative flex-1 grow h-px"
          alt="Section divider"
          src="/img/line-47-1.svg"
        />

        <h2 className="relative w-fit mt-[-1.00px] opacity-60 font-headings-h1-h6-heading-6 font-[number:var(--headings-h1-h6-heading-6-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--headings-h1-h6-heading-6-font-size)] tracking-[var(--headings-h1-h6-heading-6-letter-spacing)] leading-[var(--headings-h1-h6-heading-6-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headings-h1-h6-heading-6-font-style)]">
          {title}
        </h2>
      </div>
    </div>
  );

  return (
    <aside
      className="flex flex-col w-[280px] h-[1423px] items-end gap-[var(--corner-radius-extra-large-6)] pt-[var(--dimensions-size-large)] pr-[var(--dimensions-size-large)] pb-[var(--corner-radius-full)] pl-[var(--dimensions-size-medium)] absolute top-0 right-0 bg-color-mode-surface-bg-screen border-l-[0.3px] [border-left-style:solid] border-color-mode-text-icons-t-placeholder"
      data-color-mode-mode="dark"
      role="complementary"
      aria-label="Navigation menu"
    >
      <div className="absolute top-[973px] left-0 w-[280px] h-[59px] bg-color-mode-surface-bg-screen shadow-[0px_-4px_6px_#0000000f]" />

      <div className="flex flex-col items-end gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <header className="inline-flex flex-col items-start gap-2.5 px-2.5 py-0 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[4.15px] relative flex-[0_0_auto]">
            <img
              className="w-[72.84px] aspect-[2.22] relative h-[32.8px]"
              alt="Company logo part 1"
              src="/img/logo-3.png"
            />

            <img
              className="w-[33.01px] aspect-[1.01] relative h-[32.8px]"
              alt="Company logo part 2"
              src="/img/logo-2.png"
            />
          </div>
        </header>

        <nav
          className="flex flex-col items-end gap-[11px] relative self-stretch w-full flex-[0_0_auto]"
          role="navigation"
          aria-label="Main navigation"
        >
          {mainNavigationItems.map((item) => renderNavigationItem(item))}

          <section className="flex flex-col items-start gap-[var(--dimensions-size-XX-small)] relative self-stretch w-full flex-[0_0_auto]">
            {renderSectionHeader(resourcesSection.title!)}
            {resourcesSection.items.map((item) =>
              renderNavigationItem(item, true),
            )}
          </section>

          <section className="flex flex-col items-start gap-[var(--dimensions-size-XX-small)] relative self-stretch w-full flex-[0_0_auto]">
            {renderSectionHeader(reportsSection.title!)}
            {reportsSection.items.map((item) =>
              renderNavigationItem(item, true),
            )}
          </section>

          {otherNavigationItems.map((item) => renderNavigationItem(item))}

          <div className="flex flex-col items-end gap-2.5 pt-[var(--dimensions-size-medium)] pb-[var(--dimensions-size-medium)] px-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[var(--dimensions-size-medium)]">
            <button
              className="flex self-stretch w-full items-center justify-end gap-[var(--dimensions-size-small)] relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => {}}
              aria-label="تسجيل الخروج"
            >
              <div className="flex h-[17px] items-center justify-end gap-2.5 pl-2.5 pr-0 py-2.5 relative flex-1 grow">
                <div className="flex-1 h-5 mt-[-12.50px] mb-[-10.50px] font-[number:var(--fine-print-small-medium-underline-font-weight)] text-color-mode-text-icons-t-red tracking-[var(--fine-print-small-medium-underline-letter-spacing)] leading-[var(--fine-print-small-medium-underline-line-height)] underline [direction:rtl] relative font-fine-print-small-medium-underline text-[length:var(--fine-print-small-medium-underline-font-size)] whitespace-nowrap [font-style:var(--fine-print-small-medium-underline-font-style)]">
                  تسجيل الخروج
                </div>
              </div>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="Logout icon"
                src="/img/side-icons-13.svg"
              />
            </button>
          </div>
        </nav>
      </div>

      <footer className="inline-flex items-center gap-3 px-2.5 py-0 relative flex-[0_0_auto] ml-[-12.00px]">
        <div className="flex flex-col w-[184px] h-[35px] items-start gap-[3px] relative">
          <div className="relative self-stretch h-[18px] mt-[-1.00px] font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
            الشركة المتحدة العالمية
          </div>

          <div className="relative self-stretch h-[18px] mb-[-3.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] text-right tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] whitespace-nowrap [font-style:var(--caption-caption-1-font-style)]">
            hesham@gmail.com
          </div>
        </div>

        <img
          className="relative w-10 h-10 aspect-[1] object-cover"
          alt="User profile picture"
          src="/img/image-2.png"
        />
      </footer>
    </aside>
  );
};
