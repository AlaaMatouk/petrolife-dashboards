import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export const AddIndividuals = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    individualName: "",
    individualCode: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    nationalId: "",
    taxNumber: "",
    address: ""
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [addressFile, setAddressFile] = useState<File | null>(null);
  const [nationalIdFile, setNationalIdFile] = useState<File | null>(null);
  const [taxCertificateFile, setTaxCertificateFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your submit logic here
    console.log("Form data:", formData, { 
      imageFile, 
      addressFile, 
      nationalIdFile, 
      taxCertificateFile 
    });

    // After successful submission, navigate back to individuals list
    // navigate("/individuals");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-[16px] text-[#5B738B] font-bold mb-6 text-right">
        إضافة عميل جديد
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Individual Name */}
          <div>
            <label
              htmlFor="individualName"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              اسم العميل
            </label>
            <input
              type="text"
              id="individualName"
              name="individualName"
              value={formData.individualName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="اسم العميل هنا"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              البريد الالكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
              <option value="">اختر المدينة</option>
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
              htmlFor="address"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              العنوان
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="العنوان بالتفصيل هنا"
            />
          </div>
          {/* Image */}
          <div>
            <label
              htmlFor="individualImage"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              الصورة الشخصية
            </label>
            <input
              type="file"
              id="individualImage"
              name="individualImage"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
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
            إضافة العميل
          </button>
        </div>
      </form>
    </div>
  );
};

