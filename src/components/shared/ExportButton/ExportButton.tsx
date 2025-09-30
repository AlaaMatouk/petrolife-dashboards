import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

interface ExportButtonProps {
  onExport?: (format: string) => void;
  className?: string;
  buttonText?: string;
  showExcel?: boolean;
  showPDF?: boolean;
  showCSV?: boolean;
}

export const ExportButton: React.FC<ExportButtonProps> = ({
  onExport = (format: string) => console.log(`Exporting as ${format}`),
  className = "",
  buttonText = "تصدير",
  showExcel = true,
  showPDF = true,
  showCSV = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleExport = (format: string) => {
    onExport(format);
    setIsOpen(false);
  };

  const updateMenuPosition = () => {
    if (!buttonRef) return;
    
    const rect = buttonRef.getBoundingClientRect();
    const menuWidth = 150;
    const viewportWidth = window.innerWidth;
    
    let left = rect.right + 4;
    
    if (left + menuWidth > viewportWidth) {
      left = rect.left - menuWidth - 4;
    }
    
    const newPosition = {
      top: rect.bottom + 4,
      left: Math.max(4, left)
    };
    
    setMenuPosition(newPosition);
  };

  useEffect(() => {
    if (isOpen) {
      updateMenuPosition();
      
      const handleScroll = () => updateMenuPosition();
      const handleResize = () => updateMenuPosition();
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isOpen, buttonRef]);

  const exportOptions = [];
  
  if (showExcel) {
    exportOptions.push({
      format: 'excel',
      label: 'ملف Excel',
      icon: <FileSpreadsheet className="w-4 h-4" />
    });
  }
  
  if (showPDF) {
    exportOptions.push({
      format: 'pdf',
      label: 'ملف PDF',
      icon: <FileText className="w-4 h-4" />
    });
  }
  
  if (showCSV) {
    exportOptions.push({
      format: 'csv',
      label: 'ملف CSV',
      icon: <FileText className="w-4 h-4" />
    });
  }

  return (
    <div className="relative">
      <button
        ref={setButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors ${className}`}
        aria-label="تصدير البيانات"
      >
        <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
          <Download className="w-4 h-4 text-gray-500" />
          <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
            <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
              {buttonText}
            </span>
          </div>
        </div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {createPortal(
            <div 
              className="fixed w-40 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
              style={{
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`
              }}
            >
              <div className="py-1">
                {exportOptions.map((option) => (
                  <button
                    key={option.format}
                    onClick={() => handleExport(option.format)}
                    className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-end gap-2 transition-colors"
                  >
                    <span>{option.label}</span>
                    {option.icon}
                  </button>
                ))}
              </div>
            </div>,
            document.body
          )}
        </>
      )}
    </div>
  );
};
