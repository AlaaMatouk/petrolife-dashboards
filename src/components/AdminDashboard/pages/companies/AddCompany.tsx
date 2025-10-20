import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AddCompany = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    companyCode: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    commercialRegNumber: "",
    taxNumber:""
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [addressFile, setAddressFile] = useState<File | null>(null);
  const [taxCertificateFile, setTaxCertificateFile] = useState<File | null>(null);
  const [commercialRegistrationFile, setCommercialRegistrationFile] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submit logic here
    console.log("Form data:", formData, { 
      imageFile, 
      addressFile, 
      taxCertificateFile, 
      commercialRegistrationFile 
    });

    // After successful submission, navigate back to companies list
    // navigate("/companies");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-[16px] text-[#5B738B] font-bold mb-6 text-right">
        إضافة شركة جديدة
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              اسم الشركة
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="اسم الشركة هنا"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="companyCode"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              البريد الالكتروني
            </label>
            <input
              type="email"
              id="companyCode"
              name="companyCode"
              value={formData.companyCode}
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

          {/* Brand Name */}
          <div>
            <label
              htmlFor="brandName"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              اسم العلامة التجارية
            </label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="ادخل اسم العلامة هنا"
            />
          </div>

          {/* Commercial Registration Number */}
          <div>
            <label
              htmlFor="commercialRegNumber"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              رقم السجل التجاري
            </label>
            <input
              type="text"
              id="commercialRegNumber"
              name="commercialRegNumber"
              value={formData.commercialRegNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="ادخل رقم السجل التجاري هنا"
            />
          </div>

          {/* Tax Number */}
          <div>
            <label
              htmlFor="taxNumber"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              رقم ضريبة القيمة المضافة
            </label>
            <input
              type="text"
              id="taxNumber"
              name="taxNumber"
              value={formData.taxNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="ادخل رقم السجل التجاري هنا"
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
              htmlFor="companyAddress"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              العنوان
            </label>
            <input
              type="text"
              id="companyAddress"
              name="companyAddress"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="العنوان بالتفصيل هنا"
            />
          </div>

          {/* Image */}
          <div>
            <label
              htmlFor="companyImage"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              لوجو الشركة
            </label>
            <input
              type="file"
              id="companyImage"
              name="companyImage"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            />
          </div>

          {/* Address File */}
          <div>
            <label
              htmlFor="addressFile"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              ملف العنوان
            </label>
            <input
              type="file"
              id="addressFile"
              name="addressFile"
              accept=".pdf,.doc,.docx,image/*"
              onChange={(e) => setAddressFile(e.target.files?.[0] || null)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            />
          </div>

          {/* Tax Certificate File */}
          <div>
            <label
              htmlFor="taxCertificateFile"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              شهادة الضرائب
            </label>
            <input
              type="file"
              id="taxCertificateFile"
              name="taxCertificateFile"
              accept=".pdf,.doc,.docx,image/*"
              onChange={(e) => setTaxCertificateFile(e.target.files?.[0] || null)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            />
          </div>

          {/* Commercial Registration File */}
          <div>
            <label
              htmlFor="commercialRegistrationFile"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              السجل التجاري
            </label>
            <input
              type="file"
              id="commercialRegistrationFile"
              name="commercialRegistrationFile"
              accept=".pdf,.doc,.docx,image/*"
              onChange={(e) => setCommercialRegistrationFile(e.target.files?.[0] || null)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="submit"
            className="px-[10px] py-3 bg-[#5A66C1] text-white rounded-[8px]"
          >
            إضافة الشركة
          </button>
        </div>
      </form>
    </div>
  );
};
