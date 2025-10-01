import React from 'react';

// CarNumberInput component for grouped car number input - v1.1

interface CarNumberInputProps {
  label: string;
  lettersValue: string;
  numbersValue: string;
  onLettersChange: (value: string) => void;
  onNumbersChange: (value: string) => void;
  onLettersBlur?: () => void;
  onNumbersBlur?: () => void;
  lettersPlaceholder?: string;
  numbersPlaceholder?: string;
  lettersError?: string;
  numbersError?: string;
  required?: boolean;
  className?: string;
}

export const CarNumberInput: React.FC<CarNumberInputProps> = (props) => {
  const {
    label,
    lettersValue,
    numbersValue,
    onLettersChange,
    onNumbersChange,
    onLettersBlur,
    onNumbersBlur,
    lettersPlaceholder = "الحروف",
    numbersPlaceholder = "الأرقام",
    lettersError,
    numbersError,
    required = false,
    className = '',
  } = props;
  const hasError = lettersError || numbersError;

  return (
    <div className={`flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow ${className}`}>
      <label className="self-stretch font-normal text-[var(--form-active-label-color)] [direction:rtl] relative mt-[-1.00px] [font-family:'Tajawal',Helvetica] text-sm leading-[22.4px]">
        <span className="tracking-[var(--body-body-2-letter-spacing)] font-body-body-2 [font-style:var(--body-body-2-font-style)] font-[number:var(--body-body-2-font-weight)] leading-[var(--body-body-2-line-height)] text-[length:var(--body-body-2-font-size)]">
          {label}
          {required && <span className="text-red-500 mr-1">*</span>}
        </span>
      </label>

      <div className="relative w-full">
        <div className={`flex h-[46px] items-center gap-2 relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid transition-colors ${
          hasError 
            ? 'border-red-500 bg-red-50' 
            : 'border-color-mode-text-icons-t-placeholder hover:border-color-mode-text-icons-t-sec focus-within:border-color-mode-text-icons-t-blue'
        }`}>
             {/* Numbers Input */}
             <div className="flex flex-col items-end gap-1 relative flex-1 grow">
            {/* <label className="text-xs text-color-mode-text-icons-t-placeholder [direction:rtl] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
              الأرقام
            </label> */}
            <div className="flex h-[32px] items-center justify-end pt-[3px] pb-0 px-2 relative flex-1 grow">
              <input
                type="text"
                value={numbersValue}
                onChange={(e) => onNumbersChange(e.target.value)}
                onBlur={onNumbersBlur}
                placeholder={numbersPlaceholder}
                className={`text-right relative w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none ${
                  numbersError 
                    ? 'text-red-500 placeholder-red-300' 
                    : 'text-[var(--form-active-input-text-color)] placeholder-[var(--form-active-placeholder-color)]'
                }`}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-color-mode-text-icons-t-placeholder mx-1" />

 {/* Letters Input */}
 <div className="flex flex-col items-end gap-1 relative flex-1 grow">
            {/* <label className="text-xs text-color-mode-text-icons-t-placeholder [direction:rtl] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
              الحروف
            </label> */}
            <div className="flex h-[32px] items-center justify-end pt-[3px] pb-0 px-2 relative flex-1 grow">
              <input
                type="text"
                value={lettersValue}
                onChange={(e) => onLettersChange(e.target.value)}
                onBlur={onLettersBlur}
                placeholder={lettersPlaceholder}
                className={`text-right relative w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none ${
                  lettersError 
                    ? 'text-red-500 placeholder-red-300' 
                    : 'text-[var(--form-active-input-text-color)] placeholder-[var(--form-active-placeholder-color)]'
                }`}
              />
            </div>
          </div>
      
        </div>

        {/* Error Messages */}
        {(lettersError || numbersError) && (
          <div className="absolute top-full left-0 right-0 mt-1 px-2">
            <p className="text-red-500 text-xs font-medium [direction:rtl] text-right">
              {lettersError || numbersError}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
