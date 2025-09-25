import { useState, useCallback } from 'react';

interface Toast {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Date.now().toString();
    const newToast = { ...toast, id };
    
    console.log("🍞 Adding toast:", newToast);
    setToasts(prev => {
      const updated = [...prev, newToast];
      console.log("🍞 Updated toasts array:", updated);
      return updated;
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      console.log("🍞 Auto removing toast:", id);
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
  };
};
