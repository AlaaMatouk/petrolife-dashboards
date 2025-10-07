import React from "react";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({ onChange, value }: PasswordInputProps) {
  return (
    <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
      {/* Label */}
      <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[var(--form-active-label-color)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] text-right">
        كلمة المرور
      </label>

      {/* Input Wrapper */}
      <div className="flex h-[46px] items-center justify-between gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
        {/* Input */}
        <div className="flex items-center justify-end flex-1 grow">
          <input
            name="password"
            type="password"
            placeholder="********"
            dir="rtl"
            value={value}
            onChange={onChange}
            className="w-full font-[number:var(--body-body-2-font-weight)] text-[var(--form-active-input-text-color)] placeholder-[var(--form-active-placeholder-color)] tracking-[var(--body-body-2-letter-spacing)] mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none text-right"
          />
        </div>

        {/* Icon (على الشمال) */}
        <svg
          className="h-[1.2em] w-[1.2em] opacity-50 shrink-0 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
      </div>

      {/* Validation Hint */}
      <p className="validator-hint hidden text-red-500 text-sm text-right leading-[1.4]">
        يجب أن تكون كلمة المرور أكثر من 8 أحرف وتشمل:
        <br /> رقم واحد على الأقل
        <br /> حرف صغير واحد على الأقل
        <br /> حرف كبير واحد على الأقل
      </p>
    </div>
  );
}
