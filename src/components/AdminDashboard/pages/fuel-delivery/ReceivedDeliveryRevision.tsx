import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, X } from "lucide-react";

interface ReceivedDeliveryRequestData {
  id: number;
  recipientName: string;
  recipientPhone: string;
  fuelType: string;
  licenseNumber: string;
  siteType: string;
  orderDate: string;
  quantityRequired: string;
  expectedMonthlyQuantity: string;
  deliveryAddress: string;
  status: string;
  transferImage: string;
}

const mockReceivedDeliveryRequestData: ReceivedDeliveryRequestData = {
  id: 1,
  recipientName: "احمد محمد",
  recipientPhone: "002548665824",
  fuelType: "ديزل",
  licenseNumber: "2153",
  siteType: "مصنع",
  orderDate: "25 فبراير 2025، 10:25 ص",
  quantityRequired: "20",
  expectedMonthlyQuantity: "200",
  deliveryAddress: "12 ش الميدان ، محافظة القاهرة",
  status: "قيد المراجعة",
  transferImage:
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
};

export const ReceivedDeliveryRevision = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  // In a real app, you would fetch the delivery request data based on the ID
  const deliveryRequestData = mockReceivedDeliveryRequestData;

  const handleAccept = () => {
    // Handle accept logic here
    console.log("Accepting delivery request:", id);
    // Navigate back or show success message
    navigate("/fuel-delivery-requests/received-delivery-requests");
  };

  const handleReject = () => {
    setIsRejectModalOpen(true);
    // navigate("/fuel-delivery-requests/received-delivery-requests");

  };

  const handleRejectSubmit = () => {
    // Handle reject logic here with reason
    console.log("Rejecting delivery request:", id, "Reason:", rejectionReason);
    // Navigate back or show success message
    setIsRejectModalOpen(false);
    setRejectionReason("");
    navigate("/fuel-delivery-requests/received-delivery-requests");
  };

  const handleRejectCancel = () => {
    setIsRejectModalOpen(false);
    setRejectionReason("");
  };

  return (
    <div className="max-w-[582px] ml-auto" dir="rtl">
      {/* Delivery Request Details Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-7">
          <Eye className="w-[14px] h-[14px] text-[#5A66C1]" />
          <h1 className="text-[14px] font-medium text-[#223548]">
            معاينة طلب التوصيل
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recipient Name */}
          <div className="space-y-2">
            <label className="block text-xs font-normal text-[#A9B4BE]">
              اسم المستلم
            </label>
            <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
              <span className="text-[#5B738B] font-normal text-sm">
                {deliveryRequestData.recipientName}
              </span>
            </div>
          </div>

          {/* Recipient Phone */}
          <div className="space-y-2">
            <label className="block text-xs font-normal text-[#A9B4BE]">
              رقم هاتف المستلم
            </label>
            <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
              <span className="text-[#5B738B] font-normal text-sm">
                {deliveryRequestData.recipientPhone}
              </span>
            </div>
          </div>

          {/* Fuel Type */}
          <div className="space-y-2">
            <label className="block text-xs font-normal text-[#A9B4BE]">
              نوع الوقود
            </label>
            <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
              <span className="text-[#5B738B] font-normal text-sm">
                {deliveryRequestData.fuelType}
              </span>
            </div>
          </div>

          {/* Site Type */}
          <div className="space-y-2">
            <label className="block text-xs font-normal text-[#A9B4BE]">
              نوع الموقع
            </label>
            <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
              <span className="text-[#5B738B] font-normal text-sm">
                {deliveryRequestData.siteType}
              </span>
            </div>
          </div>

          {/* License Number */}
          <div className="space-y-2">
            <label className="block text-xs font-normal text-[#A9B4BE]">
              رقم الترخيص
            </label>
            <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
              <span className="text-[#5B738B] font-normal text-sm">
                {deliveryRequestData.licenseNumber}
              </span>
            </div>
          </div>

          {/* Order Date */}
          <div className="space-y-2">
            <label className="block text-xs font-normal text-[#A9B4BE]">
              تاريخ الطلب
            </label>
            <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
              <span className="text-[#5B738B] font-normal text-sm">
                {deliveryRequestData.orderDate}
              </span>
            </div>
          </div>

          {/* Quantity Required */}
          <div className="space-y-2">
            <label className="block text-xs font-normal text-[#A9B4BE]">
              الكمية المطلوبة باللتر
            </label>
            <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
              <span className="text-[#5B738B] font-normal text-sm">
                {deliveryRequestData.quantityRequired}
              </span>
            </div>
          </div>

          {/* Expected Monthly Quantity */}
          <div className="space-y-2">
            <label className="block text-xs font-normal text-[#A9B4BE]">
              الكمية المتوقعة شهريا باللتر
            </label>
            <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
              <span className="text-[#5B738B] font-normal text-sm">
                {deliveryRequestData.expectedMonthlyQuantity}
              </span>
            </div>
          </div>
        </div>

        {/* Delivery Address Section */}
        <div className="mt-6">
          <label className="block text-xs font-normal text-[#A9B4BE] mb-2">
            عنوان التوصيل
          </label>
          <div className="p-3 bg-[#F5F6F766] rounded-md border border-gray-200">
            <span className="text-[#5B738B] font-normal text-sm">
              {deliveryRequestData.deliveryAddress}
            </span>
          </div>
        </div>

        {/* Transfer Image Section */}
        <h3 className="text-sm font-normal text-[#5B738B] mb-4 mt-4">
          ترخيص الموقع
        </h3>
        <div className="border border-dashed border-[#A9B4BE] rounded-[8px] p-4">
          <div className="flex justify-center">
            <img
              src={deliveryRequestData.transferImage}
              alt="Transfer receipt"
              className="max-w-full h-auto rounded-[8px] shadow-sm flex-1 object-cover"
              style={{ maxHeight: "158px" }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-between">
          <button
            onClick={handleReject}
            className="px-[10px] py-3 bg-white text-[#5B738B] border-[0.8px] border-[#5B738B] font-normal rounded-[8px] w-[104px]"
            style={{ border: "0.8px solid #5B738B" }}
          >
            رجوع
          </button>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-between">
            <button
              onClick={handleReject}
              className="px-[10px] py-3 bg-[#EE3939] text-white font-normal rounded-[8px] w-[104px]"
            >
              رفض الطلب
            </button>
            <button
              onClick={handleAccept}
              className="px-[10px] py-3 bg-[#5A66C1] text-white font-normal rounded-[8px] w-[104px]"
            >
              قبول الطلب
            </button>
          </div>
        </div>
      </div>

       {/* Rejection Reason Modal */}
       {isRejectModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100000000]"
          dir="rtl"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] max-w-[90vw]">
            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-6">
              <button onClick={handleRejectCancel}>
                <X className="w-5 h-5 mt-1 bg-white border border-[#EE3939] rounded-full text-[#EE3939] p-1" />
              </button>
              <h2 className="text-lg font-medium text-[#EE3939]">سبب الرفض</h2>
            </div>

            {/* Modal Content */}
            <div className="mb-6">
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="أدخل سبب الرفض هنا"
                className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-[#EE3939] focus:border-transparent"
                dir="rtl"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3 justify-end">
              <button
                onClick={handleRejectSubmit}
                className="px-4 py-2 flex-1 bg-[#EE3939] text-white rounded-md hover:bg-red-600 transition-colors"
                disabled={!rejectionReason.trim()}
              >
                ارسال
              </button>
              <button
                onClick={handleRejectCancel}
                className="px-4 py-2 bg-white flex-1 text-[#5B738B] border border-[#5B738B] rounded-md hover:bg-gray-50 transition-colors"
                style={{ border: "0.8px solid #5B738B" }}
              >
                رجوع
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReceivedDeliveryRevision;
