import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddSupervisor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    supervisorName: "",
    supervisorCode: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [permissions, setPermissions] = useState<Record<string, boolean>>({
    individualsManagement: false,
    serviceProvidersManagement: false,
    serviceProvidersReportsManagement: false,
    salesReportsManagement: false,
    fuelDeliveryRequestsManagement: false,
    vehicleConstantsManagement: false,
    applicationServicesManagement: false,
    applicationDefaultAccountsManagement: false,
    subscriptionsManagement: false,
    advertisementsManagement: false,
    technicalSupportManagement: false,
    stationsManagement: false,
    driversManagement: false,
    financialReportsManagement: false,
    walletManagement: false,
    companiesManagement: false,
    supervisorsManagement: false,
    petrolifeDriversManagement: false,
    petrolifeRepresentativesManagement: false,
    petrolifeVehiclesManagement: false,
    petrolifeProductsManagement: false,
    governorRequestsManagement: false,
    invoicesReportsManagement: false,
    countriesConstantsManagement: false,
    categoriesConstantsManagement: false,
    discountCouponsManagement: false,
    customNotificationsManagement: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (permissionKey: string) => {
    setPermissions((prev) => ({
      ...prev,
      [permissionKey]: !prev[permissionKey],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here
    console.log("Form data:", formData, { imageFile, permissions });

    // After successful submission, navigate back to supervisors list
    // navigate("/supervisors");
  };

  const handleCancel = () => {
    navigate("/supervisors");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-[16px] text-[#5B738B] font-bold mb-6 text-right">
        إضافة مشرف جديد
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Supervisor Name */}
          <div>
            <label
              htmlFor="supervisorName"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              اسم المشرف
            </label>
            <input
              type="text"
              id="supervisorName"
              name="supervisorName"
              value={formData.supervisorName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="اسم المشرف هنا"
            />
          </div>

          {/* Supervisor Code */}
          <div>
            <label
              htmlFor="supervisorCode"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              البريد الالكتروني
            </label>
            <input
              type="text"
              id="supervisorCode"
              name="supervisorCode"
              value={formData.supervisorCode}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="test@gmail.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              رقم الهاتف
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="رقم الهاتف هنا"
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              المدينة
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 text-[#5B738B]  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            >
              <option value="الرياض">الرياض</option>
              <option value="جدة">جدة</option>
              <option value="مكة المكرمة">مكة المكرمة</option>
              <option value="المدينة المنورة">المدينة المنورة</option>
              <option value="الدمام">الدمام</option>
              <option value="الخبر">الخبر</option>
              <option value="الطائف">الطائف</option>
              <option value="أبها">أبها</option>
              <option value="تبوك">تبوك</option>
              <option value="بريدة">بريدة</option>
              <option value="حائل">حائل</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="supervisorName"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              العنوان
            </label>
            <input
              type="text"
              id="supervisorName"
              name="supervisorName"
              value={formData.supervisorName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="العنوان بالتفصيل هنا"
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="supervisorImage"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              صوره المشرف
            </label>
            <input
              type="file"
              id="supervisorImage"
              name="supervisorImage"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            />
          </div>

          {/* Work Number */}
          <div>
            <label
              htmlFor="supervisorName"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              الرقم الوظيفي
            </label>
            <input
              type="text"
              id="supervisorName"
              name="supervisorName"
              value={formData.supervisorName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="الرقم الوظيفي هنا"
            />
          </div>

          {/* Supervisor Access */}
          <div className="md:col-span-3">
            <label className="block text-sm font-normal text-[#5B738B] mb-[12px]">
              صلاحيات المشرف
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* إدارة الأفراد */}
              <div
                className="relative flex items-center gap-2  p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.individualsManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("individualsManagement")}
              >

                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.individualsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.individualsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة الأفراد
                </span>
              </div>

              {/* إدارة مزودي الخدمة */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.serviceProvidersManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("serviceProvidersManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.serviceProvidersManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.serviceProvidersManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة مزودي الخدمة
                </span>
              </div>

              {/* إدارة تقارير المبيعات */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.salesReportsManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("salesReportsManagement")}
              >
               <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.salesReportsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.salesReportsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة تقارير المبيعات
                </span>
              </div>

              {/* إدارة طلبات توصيل الوقود */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.fuelDeliveryRequestsManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("fuelDeliveryRequestsManagement")}
              >
               <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.fuelDeliveryRequestsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.fuelDeliveryRequestsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة طلبات توصيل الوقود
                </span>
              </div>

              {/* إدارة ثوابت المركبات */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.vehicleConstantsManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("vehicleConstantsManagement")}
              >
               <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.vehicleConstantsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.vehicleConstantsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة ثوابت المركبات
                </span>
              </div>

              {/* إدارة خدمات التطبيق */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.applicationServicesManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("applicationServicesManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.applicationServicesManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.applicationServicesManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة خدمات التطبيق
                </span>
              </div>

              {/* إدارة الاشتراكات */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.subscriptionsManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("subscriptionsManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.subscriptionsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.subscriptionsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة الاشتراكات
                </span>
              </div>

              {/* إدارة الدعم الفني */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.technicalSupportManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("technicalSupportManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.technicalSupportManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.technicalSupportManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة الدعم الفني
                </span>
              </div>

              {/* إدارة المحطات */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.stationsManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("stationsManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.stationsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.stationsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة المحطات
                </span>
              </div>

              {/* إدارة السائقين */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.driversManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("driversManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.driversManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.driversManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة السائقين
                </span>
              </div>

              {/* إدارة التقارير المالية */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.financialReportsManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("financialReportsManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.financialReportsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.financialReportsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة التقارير المالية
                </span>
              </div>

              {/* إدارة المحفظة */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.walletManagement 
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("walletManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.walletManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.walletManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">
                  إدارة المحفظة
                </span>
              </div>

              {/* إدارة الشركات */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.companiesManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("companiesManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.companiesManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.companiesManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة الشركات</span>
              </div>

              {/* إدارة المشرفين */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.supervisorsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("supervisorsManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.supervisorsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.supervisorsManagement ? (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة المشرفين</span>
              </div>

              {/* إدارة سائقي بترولايف */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.petrolifeDriversManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("petrolifeDriversManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.petrolifeDriversManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.petrolifeDriversManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة سائقي بترولايف</span>
              </div>

              {/* إدارة مندوبي بترولايف */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.petrolifeRepresentativesManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("petrolifeRepresentativesManagement")}
              >
                 <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.petrolifeRepresentativesManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.petrolifeRepresentativesManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة مندوبي بترولايف</span>
              </div>

              {/* إدارة مركبات بترولايف */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.petrolifeVehiclesManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("petrolifeVehiclesManagement")}
              >
                  <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.petrolifeVehiclesManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.petrolifeVehiclesManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة مركبات بترولايف</span>
              </div>

              {/* إدارة منتجات بترولايف */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.petrolifeProductsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("petrolifeProductsManagement")}
              >
                  <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.petrolifeProductsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.petrolifeProductsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة منتجات بترولايف</span>
              </div>

              {/* إدارة تقارير مزودي الخدمة */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.serviceProvidersReportsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("serviceProvidersReportsManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.serviceProvidersReportsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.serviceProvidersReportsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة تقارير مزودي الخدمة</span>
              </div>

              {/* إدارة طلبات المحافظ */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.governorRequestsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("governorRequestsManagement")}
              >
                  <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.governorRequestsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.governorRequestsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة طلبات المحافظ</span>
              </div>

              {/* إدارة تقارير الفواتير */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.invoicesReportsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("invoicesReportsManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.invoicesReportsManagement 
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.invoicesReportsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة تقارير الفواتير</span>
              </div>

              {/* إدارة ثوابت البلدان */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.countriesConstantsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("countriesConstantsManagement")}
              >
                  <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.countriesConstantsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.countriesConstantManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة ثوابت البلدان</span>
              </div>

              {/* إدارة ثوابت التصنيفات */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.categoriesConstantsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("categoriesConstantsManagement")}
              >
                  <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.categoriesConstantsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.categoriesConstantsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة ثوابت التصنيفات</span>
              </div>

              {/* إدارة الحسابات الافتراضية */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.applicationDefaultAccountsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("applicationDefaultAccountsManagement")}
              >
                <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.applicationDefaultAccountsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.applicationDefaultAccountsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة الحسابات الافتراضية</span>
              </div>

              {/* إدارة الإعلانات */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.advertisementsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("advertisementsManagement")}
              >
                 <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.advertisementsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.advertisementsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة الإعلانات</span>
              </div>

              {/* إدارة كوبونات الخصم */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.discountCouponsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("discountCouponsManagement")}
              >
               <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.discountCouponsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.discountCouponsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة كوبونات الخصم</span>
              </div>

              {/* إدارة الاشعارات المخصصة */}
              <div
                className="relative flex items-center gap-2 p-[10px] rounded-[4px] cursor-pointer "
                style={{ 
                  border: permissions.customNotificationsManagement
                    ? '1px solid #5A66C1' 
                    : '0.5px solid #A9B4BE' 
                }}
                onClick={() => handlePermissionChange("customNotificationsManagement")}
              >
                  <div
                  className={`w-3 h-3 rounded-[2px] border-[0.7px] flex items-center justify-center ${
                    permissions.customNotificationsManagement
                      ? "bg-[#5A66C1]"
                      : "border-[#A9B4BE] "
                  }`}
                >
                  {permissions.customNotificationsManagement ? (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : 
                  <svg
                      className="w-3 h-3 text-[#A9B4BE] border-[0.7px] border-[#A9B4BE] rounded-[2px]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                </div>
                <span className="text-sm text-[#5B738B] text-right">إدارة الاشعارات المخصصة</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="submit"
            className="px-[10px] py-3 bg-[#5A66C1] text-white rounded-[8px]"
          >
            إضافة المشرف
          </button>
        </div>
      </form>
    </div>
  );
};
