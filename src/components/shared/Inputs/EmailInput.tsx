import React from "react";

interface EmailInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function EmailInput({ onChange, value }: EmailInputProps) {
  return (
    <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
      {/* Label */}
      <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] text-right">
        البريد الالكتروني
      </label>

      {/* Input Wrapper */}
      <div className="flex h-[46px] items-center justify-between gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
        {/* Input */}
        <div className="flex items-center justify-end flex-1 grow">
          <input
            name="email"
            type="email"
            placeholder="mail@site.com"
            dir="rtl"
            required
            value={value}
            onChange={onChange}
            className="w-full font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder tracking-[var(--body-body-2-letter-spacing)] mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none text-right"
          />
        </div>

        {/* Icon */}
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
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
      </div>

      {/* Validation Hint */}
      <div className="validator-hint hidden text-red-500 text-sm">
        Enter valid email address
      </div>
    </div>
  );
}
