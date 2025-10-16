import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExportButton } from '../../../../../components/shared';

export const ActionButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
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

      <ExportButton />
    </div>
  );
};

