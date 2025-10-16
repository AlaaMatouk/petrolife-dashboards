import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import { fetchNotifications } from "../../../services/firestore";

interface NotificationItem {
  id: string;
  body: string;
  createdDate: any;
  companies: string[];
  title?: string;
  [key: string]: any;
}

export const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch notifications when dropdown opens
  useEffect(() => {
    if (isOpen && notifications.length === 0) {
      loadNotifications();
    }
  }, [isOpen]);

  const loadNotifications = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNotifications();
      setNotifications(data);
    } catch (err: any) {
      console.error("Error loading notifications:", err);
      setError("فشل تحميل الإشعارات");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: any) => {
    try {
      // Handle Firestore Timestamp
      const jsDate = date?.toDate ? date.toDate() : new Date(date);
      
      const now = new Date();
      const diffMs = now.getTime() - jsDate.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);

      if (diffMins < 1) {
        return "الآن";
      } else if (diffMins < 60) {
        return `منذ ${diffMins} دقيقة`;
      } else if (diffHours < 24) {
        return `منذ ${diffHours} ساعة`;
      } else if (diffDays < 7) {
        return `منذ ${diffDays} يوم`;
      } else {
        return jsDate.toLocaleDateString("ar-SA", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }
    } catch (error) {
      console.error("Error formatting date:", error);
      return "تاريخ غير متاح";
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const unreadCount = notifications.length;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="relative flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
        aria-label="Notifications"
      >
        <Bell className="w-4 h-4 text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-[500px] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">الإشعارات</h3>
              {notifications.length > 0 && (
                <span className="text-xs text-gray-500">
                  {notifications.length} إشعار
                </span>
              )}
            </div>
          </div>

          {/* Notifications List */}
          <div className="overflow-y-auto flex-1">
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
                <p className="text-sm text-gray-500 mt-2">جاري التحميل...</p>
              </div>
            ) : error ? (
              <div className="p-8 text-center">
                <p className="text-sm text-red-500">{error}</p>
                <button
                  onClick={loadNotifications}
                  className="mt-2 text-xs text-blue-500 hover:underline"
                >
                  إعادة المحاولة
                </button>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                <p className="text-sm text-gray-500">لا توجد إشعارات جديدة</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                  >
                    {notification.title && (
                      <h4 className="text-sm font-semibold text-gray-800 mb-1 text-right">
                        {notification.title}
                      </h4>
                    )}
                    <p className="text-sm text-gray-700 text-right mb-2 leading-relaxed">
                      {notification.body}
                    </p>
                    <p className="text-xs text-gray-500 text-right">
                      {formatDate(notification.createdDate)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Optional refresh button */}
          {notifications.length > 0 && (
            <div className="p-2 border-t border-gray-200 bg-gray-50">
              <button
                onClick={loadNotifications}
                className="w-full text-xs text-blue-600 hover:text-blue-700 font-medium py-1"
              >
                تحديث
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

