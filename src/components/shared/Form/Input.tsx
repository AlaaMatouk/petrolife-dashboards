import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
  type?: 'text' | 'number' | 'tel' | 'email';
  className?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  required = false,
  type = 'text',
  className = '',
  icon,
}) => {
  return (
    <div className={`flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow ${className}`}>
      <label className="self-stretch font-normal text-color-mode-text-icons-t-sec [direction:rtl] relative mt-[-1.00px] [font-family:'Tajawal',Helvetica] text-sm leading-[22.4px]">
        <span className="tracking-[var(--body-body-2-letter-spacing)] font-body-body-2 [font-style:var(--body-body-2-font-style)] font-[number:var(--body-body-2-font-weight)] leading-[var(--body-body-2-line-height)] text-[length:var(--body-body-2-font-size)]">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </span>
      </label>

      <div className="relative w-full">
        <div className={`flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid transition-colors ${
          error 
            ? 'border-red-500 bg-red-50' 
            : 'border-color-mode-text-icons-t-placeholder hover:border-color-mode-text-icons-t-sec focus-within:border-color-mode-text-icons-t-blue'
        }`}>
          {icon && <div className="flex-shrink-0">{icon}</div>}
          <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
            <input
              type={type}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onBlur={onBlur}
              placeholder={placeholder}
              className={`text-right relative w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none ${
                error 
                  ? 'text-red-500 placeholder-red-300' 
                  : 'text-color-mode-text-icons-t-placeholder'
              }`}
            />
          </div>
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
