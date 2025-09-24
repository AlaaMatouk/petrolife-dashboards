import React from 'react';
import { useDrivers, useUI, useAuth, useNotifications } from '../../../hooks/useGlobalState';

export const StateTest: React.FC = () => {
  const { drivers, addDriver, updateDriver, deleteDriver } = useDrivers();
  const { sidebarCollapsed, toggleSidebar, theme, setTheme } = useUI();
  const { user, login, logout } = useAuth();
  const { addNotification } = useNotifications();

  const handleAddTestDriver = () => {
    const newDriver = {
      id: Date.now(),
      driverCode: `TEST${Date.now()}`,
      driverName: "سائق تجريبي",
      phone: "00965123456789",
      address: "عنوان تجريبي",
      fuelType: "بنزين 91",
      financialValue: "1000 / 800",
      carNumber: "TEST123",
      carCategory: { text: "تجريبي", icon: "/img/component-4-11.svg" },
      accountStatus: { active: true, text: "مفعل" },
    };
    
    addDriver(newDriver);
    addNotification({
      id: Date.now().toString(),
      title: "تم إضافة سائق جديد",
      message: `تم إضافة السائق ${newDriver.driverName} بنجاح`,
      type: "success",
      timestamp: new Date(),
      read: false,
    });
  };

  const handleToggleDriverStatus = (id: number) => {
    const driver = drivers.find(d => d.id === id);
    if (driver) {
      updateDriver(id, {
        accountStatus: {
          active: !driver.accountStatus.active,
          text: !driver.accountStatus.active ? "مفعل" : "معطل"
        }
      });
    }
  };

  const handleLogin = () => {
    const testUser = {
      id: "1",
      name: "مستخدم تجريبي",
      email: "test@example.com",
      avatar: "/img/image-2.png",
      role: "admin" as const,
    };
    login(testUser);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">اختبار الحالة العامة</h3>
      
      {/* Authentication Test */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">المصادقة:</h4>
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">مرحباً، {user.name}</span>
            <button
              onClick={logout}
              className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
            >
              تسجيل الخروج
            </button>
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
          >
            تسجيل الدخول
          </button>
        )}
      </div>

      {/* UI State Test */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">واجهة المستخدم:</h4>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
          >
            {sidebarCollapsed ? "إظهار الشريط الجانبي" : "إخفاء الشريط الجانبي"}
          </button>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="px-3 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
          >
            تبديل المظهر ({theme === 'light' ? 'فاتح' : 'داكن'})
          </button>
        </div>
      </div>

      {/* Drivers Test */}
      <div className="mb-4">
        <h4 className="font-medium text-gray-700 mb-2">السائقين ({drivers.length}):</h4>
        <div className="flex items-center gap-2 mb-2">
          <button
            onClick={handleAddTestDriver}
            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
          >
            إضافة سائق تجريبي
          </button>
        </div>
        <div className="max-h-32 overflow-y-auto">
          {drivers.slice(0, 5).map((driver) => (
            <div key={driver.id} className="flex items-center justify-between py-1 px-2 bg-gray-50 rounded mb-1">
              <span className="text-sm text-gray-700">{driver.driverName}</span>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  driver.accountStatus.active 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {driver.accountStatus.text}
                </span>
                <button
                  onClick={() => handleToggleDriverStatus(driver.id)}
                  className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
                >
                  تبديل
                </button>
                <button
                  onClick={() => deleteDriver(driver.id)}
                  className="text-xs px-2 py-1 bg-red-100 text-red-800 rounded hover:bg-red-200"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* State Info */}
      <div className="text-xs text-gray-500">
        <p>الحالة الحالية: {drivers.length} سائق، الشريط الجانبي {sidebarCollapsed ? 'مخفي' : 'ظاهر'}</p>
      </div>
    </div>
  );
};
