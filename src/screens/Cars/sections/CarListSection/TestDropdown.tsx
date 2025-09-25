import React, { useState } from 'react';
import { MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';
import { createPortal } from 'react-dom';

export const TestDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const updateMenuPosition = () => {
    if (!buttonRef) return;
    
    const rect = buttonRef.getBoundingClientRect();
    const menuWidth = 192; // 48 * 4 (w-48 = 12rem = 192px)
    const viewportWidth = window.innerWidth;
    
    // Calculate position to the right of the icon
    let left = rect.right + window.scrollX + 4;
    
    // If menu would go off-screen to the right, position it to the left of the icon
    if (left + menuWidth > viewportWidth) {
      left = rect.left + window.scrollX - menuWidth - 4;
    }
    
    const newPosition = {
      top: rect.top + window.scrollY,
      left: Math.max(4, left) // Ensure it doesn't go off-screen to the left
    };
    
    setMenuPosition(newPosition);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(updateMenuPosition, 0);
    }
  };

  const handleAction = (action: string) => {
    console.log(`${action} clicked`);
    setIsOpen(false);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Test Dropdown Menu</h3>
      <div className="relative">
        <button
          ref={setButtonRef}
          onClick={handleClick}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <MoreVertical className="w-4 h-4" />
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {createPortal(
            <div 
              className="fixed w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
              style={{
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`
              }}
            >
                <div className="py-1">
                  <button
                    onClick={() => handleAction('view')}
                    className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    عرض التفاصيل
                  </button>
                  <button
                    onClick={() => handleAction('edit')}
                    className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    تعديل
                  </button>
                  <button
                    onClick={() => handleAction('delete')}
                    className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    حذف
                  </button>
                </div>
              </div>,
              document.body
            )}
          </>
        )}
      </div>
    </div>
  );
};
