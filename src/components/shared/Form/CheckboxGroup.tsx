import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  value: string[];
  onChange: (values: string[]) => void;
  error?: string;
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  value,
  onChange,
  error,
  className = '',
}) => {
  const handleToggle = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(v => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  return (
    <div className={`flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative self-stretch w-full flex-[0_0_auto] ${className}`}>
      <div className="relative w-full">
        <div
          className={`flex flex-wrap items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] ${
            error ? 'border-red-500' : ''
          }`}
          role="group"
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleToggle(option.value)}
              className={`flex h-[46px] items-center justify-center gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-large)] relative flex-1 grow rounded-[var(--corner-radius-small)] border-[0.5px] border-solid transition-colors ${
                value.includes(option.value)
                  ? 'border-[0.7px] border-color-mode-text-icons-t-blue bg-blue-50'
                  : 'border-color-mode-text-icons-t-placeholder hover:border-color-mode-text-icons-t-sec cursor-pointer'
              }`}
              role="checkbox"
              aria-checked={value.includes(option.value)}
            >
              <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                <div
                  className={`relative w-fit mt-[-1.00px] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] ${
                    value.includes(option.value)
                      ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-blue font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                      : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[var(--form-active-input-text-color)] [font-style:var(--body-body-2-font-style)]"
                  }`}
                >
                  {option.label}
                </div>
                {value.includes(option.value) && (
                  <Check className="w-4 h-4 text-color-mode-text-icons-t-blue" />
                )}
              </div>
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
