import React from "react";
import { useNavigate } from "react-router-dom";
import { ExportButton } from "../../../../components/shared";
import { CirclePlus } from "lucide-react";
import { ROUTES } from "../../../../constants/routes";

export const OrderListSection = (): JSX.Element => {
  const navigate = useNavigate();

  const handleCreateRequest = () => {
    navigate(ROUTES.CREATE_DELIVERY_REQUEST);
  };

  return (
    <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
          <button
          onClick={handleCreateRequest}
          className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue focus:ring-opacity-50"
          type="button"
          aria-label="انشاء طلب توصيل جديد"
        >
          <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
              <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                انشاء طلب توصيل جديد
              </span>
            </div>

            <CirclePlus className="relative w-[18px] h-[18px] text-gray-500" />
          </div>
        </button>

        <ExportButton />
        </div>

        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <h1 className="w-[103px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            الطلبات
          </h1>

          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt="أيقونة الطلبات"
            src="/img/side-icons-1.svg"
          />
        </div>
      </div>
    </header>
  );
};
