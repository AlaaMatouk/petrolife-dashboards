import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../../../context/ToastContext";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from "../../../../config/firebase";

export const AddIndividuals = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    address: "",
  });

  const [profilePhotoFile, setProfilePhotoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form data
  const validateForm = (): string[] => {
    const errors: string[] = [];

    if (!formData.name.trim()) {
      errors.push("اسم العميل مطلوب");
    }

    if (!formData.email.trim()) {
      errors.push("البريد الإلكتروني مطلوب");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("البريد الإلكتروني غير صحيح");
    }

    if (!formData.phoneNumber.trim()) {
      errors.push("رقم الهاتف مطلوب");
    }

    if (!profilePhotoFile) {
      errors.push("الصورة الشخصية مطلوبة");
    }

    return errors;
  };

  // Check if email already exists
  const checkEmailExists = async (email: string): Promise<boolean> => {
    try {
      const clientsRef = collection(db, "clients");
      const q = query(clientsRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking email:", error);
      return false;
    }
  };

  // Upload image to Firebase Storage
  const uploadImage = async (file: File): Promise<string> => {
    const fileName = `clients/profile-photos/${Date.now()}_${file.name}`;
    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      addToast({
        title: "خطأ في التحقق",
        message: validationErrors.join(", "),
        type: "error",
      });
      return;
    }

    // Check if email already exists
    const emailExists = await checkEmailExists(formData.email);
    if (emailExists) {
      addToast({
        title: "خطأ في البيانات",
        message: "البريد الإلكتروني مستخدم بالفعل",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error("لا يوجد مستخدم مسجل الدخول حالياً");
      }

      // Upload profile photo to Firebase Storage
      let profilePhotoUrl = "";
      if (profilePhotoFile) {
        profilePhotoUrl = await uploadImage(profilePhotoFile);
      }

      // Create client document
      const clientData = {
        // Basic info
        name: formData.name.trim(),
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        city: formData.city || "",
        address: formData.address.trim() || "",
        profilePhoto: profilePhotoUrl,

        // Auto-generated UID (will be set by document ID)
        uid: "", // This will be updated after document creation

        // Default values
        isActive: true,
        type: "Customer",

        // Timestamps and user info
        createdDate: serverTimestamp(),
        createdUserId: currentUser.email || currentUser.uid,

        // Account status for display
        accountStatus: {
          active: true,
          text: "مفعل",
        },
      };

      // Add document to Firestore
      const docRef = await addDoc(collection(db, "clients"), clientData);

      // Update the document with its own ID as uid
      // Note: We're not using updateDoc here to match the existing pattern
      // The uid field can be set to the document ID if needed

      // Success message
      addToast({
        title: "تم بنجاح",
        message: "تم إضافة العميل بنجاح",
        type: "success",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        city: "",
        address: "",
      });
      setProfilePhotoFile(null);

      // Navigate back to individuals list
      navigate("/individuals");
    } catch (error) {
      console.error("Error adding client:", error);
      addToast({
        title: "خطأ",
        message: "فشل في إضافة العميل. يرجى المحاولة مرة أخرى.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/individuals");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-[16px] text-[#5B738B] font-bold mb-6 text-right">
        إضافة عميل جديد
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Client Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              اسم العميل <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
              البريد الالكتروني <span className="text-red-500">*</span>
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
              htmlFor="phoneNumber"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              رقم الهاتف <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
              placeholder="العنوان بالتفصيل هنا"
            />
          </div>

          {/* Profile Photo */}
          <div>
            <label
              htmlFor="profilePhoto"
              className="block text-sm font-normal text-[#5B738B] mb-1"
            >
              الصورة الشخصية <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              onChange={(e) => setProfilePhotoFile(e.target.files?.[0] || null)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            disabled={isSubmitting}
            className="px-[10px] py-3 bg-gray-500 text-white rounded-[8px] hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            إلغاء
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-[10px] py-3 bg-[#5A66C1] text-white rounded-[8px] hover:bg-[#4A56B1] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                جاري الإضافة...
              </>
            ) : (
              "إضافة العميل"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
