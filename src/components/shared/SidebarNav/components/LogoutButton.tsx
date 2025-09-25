import React from 'react';

interface LogoutButtonProps {
  onLogout?: () => void;
}

export const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  if (!onLogout) return null;

  return (
    <button
      onClick={onLogout}
      className="flex flex-col items-end gap-2.5 pt-[var(--dimensions-size-medium)] pb-[var(--dimensions-size-medium)] px-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[var(--dimensions-size-medium)]"
      role="menuitem"
      tabIndex={0}
      aria-label="تسجيل الخروج"
    >
      <div className="justify-end flex items-center gap-[var(--dimensions-size-small)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex h-[17px] justify-end pl-2.5 pr-0 py-2.5 flex-1 grow items-center gap-2.5 relative">
          <span className="flex-1 h-5 mt-[-12.50px] mb-[-10.50px] font-[number:var(--fine-print-small-medium-font-weight)] text-color-mode-text-icons-t-red tracking-[var(--fine-print-small-medium-letter-spacing)] leading-[var(--fine-print-small-medium-line-height)] relative font-fine-print-small-medium text-[length:var(--fine-print-small-medium-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--fine-print-small-medium-font-style)]">
            تسجيل الخروج
          </span>
        </div>
        <img
          className="relative w-[18px] h-[18px] aspect-[1]"
          alt="Logout icon"
          src="/img/side-icons-13.svg"
        />
      </div>
    </button>
  );
};
