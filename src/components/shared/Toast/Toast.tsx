import React from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

interface ToastProps {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  title,
  message,
  type,
  onClose,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'info':
        return <Info className="w-5 h-5 text-blue-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'error':
        return 'bg-red-50 border-red-200';
      case 'info':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm w-full p-4 rounded-lg border shadow-lg ${getBgColor()} transform transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-start gap-3">
        {getIcon()}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-medium text-gray-900 [direction:rtl] text-right">
            {title}
          </h4>
          <p className="mt-1 text-sm text-gray-600 [direction:rtl] text-right">
            {message}
          </p>
        </div>
        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
