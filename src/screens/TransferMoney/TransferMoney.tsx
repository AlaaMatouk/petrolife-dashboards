import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightLeft, User, Banknote } from "lucide-react";
import { useAuth } from "../../hooks/useGlobalState";
import { useToast } from "../../context/ToastContext";
import { ROUTES } from "../../constants/routes";

export const TransferMoney = (): JSX.Element => {
  const navigate = useNavigate();
  const { company } = useAuth();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    recipientEmail: "",
    recipientName: "",
    amount: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.recipientEmail || !formData.amount) {
      addToast({
        title: 'خطأ في البيانات',
        message: 'يرجى ملء جميع الحقول المطلوبة',
        type: 'error',
      });
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      addToast({
        title: 'خطأ في المبلغ',
        message: 'يرجى إدخال مبلغ صحيح',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Implement the actual transfer logic here
      // This would typically call a Firebase function or API endpoint
      
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      addToast({
        title: 'نجح التحويل',
        message: `تم تحويل ${amount} ر.س بنجاح`,
        type: 'success',
      });
      
      // Reset form
      setFormData({
        recipientEmail: "",
        recipientName: "",
        amount: "",
        notes: "",
      });
      
      // Navigate back to wallet after 1 second
      setTimeout(() => {
        navigate(ROUTES.WALLET);
      }, 1000);
      
    } catch (error) {
      console.error('Transfer error:', error);
      addToast({
        title: 'فشل التحويل',
        message: 'حدث خطأ أثناء تحويل الأموال',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate(ROUTES.WALLET);
  };

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto gap-6 mt-6 px-4 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleCancel}
          className="text-color-mode-text-icons-t-sec hover:text-color-mode-text-icons-t-blue transition-colors"
        >
          إلغاء
        </button>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-color-mode-text-icons-t-sec [direction:rtl]">
            تحويل الأموال
          </h1>
          <ArrowRightLeft className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Current Balance Card */}
      <div className="bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder p-6">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-color-mode-text-icons-t-blue">
            {company?.balance ? new Intl.NumberFormat('en-US').format(company.balance) : '0'} <span className="text-lg">ر.س</span>
          </div>
          <div className="text-right [direction:rtl]">
            <p className="text-sm text-color-mode-text-icons-t-placeholder">الرصيد الحالي</p>
            <p className="text-base text-color-mode-text-icons-t-sec">{company?.name || 'الشركة'}</p>
          </div>
        </div>
      </div>

      {/* Transfer Form */}
      <form onSubmit={handleSubmit} className="bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder p-8">
        <div className="flex flex-col gap-6">
          {/* Recipient Email */}
          <div className="flex flex-col gap-2 [direction:rtl]">
            <label className="text-sm font-medium text-color-mode-text-icons-t-sec">
              البريد الإلكتروني للمستلم <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="recipientEmail"
                value={formData.recipientEmail}
                onChange={handleInputChange}
                placeholder="example@email.com"
                required
                className="w-full px-4 py-3 pr-12 bg-white border border-color-mode-text-icons-t-placeholder rounded-[var(--corner-radius-small)] text-right [direction:rtl] focus:outline-none focus:border-color-mode-text-icons-t-blue"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Recipient Name (Optional) */}
          <div className="flex flex-col gap-2 [direction:rtl]">
            <label className="text-sm font-medium text-color-mode-text-icons-t-sec">
              اسم المستلم (اختياري)
            </label>
            <div className="relative">
              <input
                type="text"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleInputChange}
                placeholder="اسم المستلم"
                className="w-full px-4 py-3 pr-12 bg-white border border-color-mode-text-icons-t-placeholder rounded-[var(--corner-radius-small)] text-right [direction:rtl] focus:outline-none focus:border-color-mode-text-icons-t-blue"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Amount */}
          <div className="flex flex-col gap-2 [direction:rtl]">
            <label className="text-sm font-medium text-color-mode-text-icons-t-sec">
              المبلغ (ر.س) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
                placeholder="0.00"
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-3 pr-12 bg-white border border-color-mode-text-icons-t-placeholder rounded-[var(--corner-radius-small)] text-right [direction:rtl] focus:outline-none focus:border-color-mode-text-icons-t-blue"
              />
              <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Notes */}
          <div className="flex flex-col gap-2 [direction:rtl]">
            <label className="text-sm font-medium text-color-mode-text-icons-t-sec">
              ملاحظات (اختياري)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="أضف ملاحظات حول التحويل..."
              rows={4}
              className="w-full px-4 py-3 bg-white border border-color-mode-text-icons-t-placeholder rounded-[var(--corner-radius-small)] text-right [direction:rtl] focus:outline-none focus:border-color-mode-text-icons-t-blue resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end mt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 rounded-[var(--corner-radius-small)] border border-color-mode-text-icons-t-placeholder text-color-mode-text-icons-t-sec hover:bg-color-mode-surface-bg-icon-gray transition-colors"
            >
              إلغاء
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 rounded-[var(--corner-radius-small)] bg-color-mode-text-icons-t-blue text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'جاري التحويل...' : 'تحويل الآن'}
            </button>
          </div>
        </div>
      </form>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-[var(--corner-radius-medium)] p-4 [direction:rtl]">
        <p className="text-sm text-blue-800">
          <strong>ملاحظة:</strong> سيتم خصم المبلغ من رصيدك الحالي وإضافته إلى حساب المستلم فورًا. تأكد من صحة البريد الإلكتروني قبل التحويل.
        </p>
      </div>
    </div>
  );
};


