import React from 'react';

interface RadioOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface RadioGroupProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  error?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  value,
  onChange,
  options,
  error,
  required = false,
  className = '',
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow ${className}`}>
      <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-[var(--form-active-label-color)] tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
        {label}
        {required && <span className="text-red-500 mr-1">*</span>}
      </label>

      <div className="relative w-full">
        <div
          className={`flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] ${
            error ? 'border-red-500' : ''
          }`}
          role="radiogroup"
        >
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={disabled ? undefined : () => onChange(option.label)}
              disabled={disabled}
              className={`flex h-[46px] items-center justify-center gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-large)] relative flex-1 grow rounded-[var(--corner-radius-small)] border-[0.5px] border-solid transition-colors ${
                disabled
                  ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                  : value === option.label
                  ? 'border-[0.7px] border-color-mode-text-icons-t-blue'
                  : 'border-color-mode-text-icons-t-placeholder hover:border-color-mode-text-icons-t-sec cursor-pointer'
              }`}
              role="radio"
              aria-checked={value === option.label}
            >
              <div
                className={`inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto] ${
                  option.id === "medium"
                    ? "ml-[-11.62px] mr-[-11.62px]"
                    : option.id === "small"
                    ? "ml-[-5.12px] mr-[-5.12px]"
                    : ""
                }`}
              >
                <div
                  className={`relative w-fit mt-[-1.00px] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] ${
                    value === option.label
                      ? option.id === "small"
                        ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-blue font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                        : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-blue [font-style:var(--body-body-2-font-style)]"
                      : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec [font-style:var(--body-body-2-font-style)]"
                  }`}
                >
                  {option.label}
                </div>
                {option.icon}
              </div>
              {value === option.label && (
                <img
                  className="absolute top-0 left-0 w-3.5 h-3.5"
                  alt="Selected"
                  src="/img/rectangle-22DI.svg"
                />
              )}
            </button>
          ))}
        </div>

        {error && (
          <div className="absolute top-full left-0 right-0 mt-1 px-2">
            <p className="text-red-500 text-xs font-medium [direction:rtl] text-right">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
