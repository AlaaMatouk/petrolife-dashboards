import React, { useState } from "react";
import { Table, Pagination, ExportButton } from "../../../../components/shared";
import { MoreVertical } from "lucide-react";

export const OrderDetailsSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(3);

  const orderData = [
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "مكتمل", type: "completed" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "جاري المراجعة", type: "reviewing" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "مرفوض", type: "rejected" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "بانتظار التوصيل", type: "pending" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "مكتمل", type: "completed" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "مكتمل", type: "completed" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "مكتمل", type: "completed" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "مكتمل", type: "completed" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "مكتمل", type: "completed" },
    },
    {
      id: "21A254",
      date: "21 فبراير 2025 - 5:05 ص",
      product: "بنزين 91",
      quantity: "20",
      totalValue: "34.6",
      recipient: "أحمد محمد",
      phone: "00965284358",
      address: "12 ش المنيل ، مصر",
      status: { text: "مكتمل", type: "completed" },
    },
  ];

  const tableColumns = [
    {
      key: "actions",
      label: "الإجراءات",
      width: "w-[80px] min-w-[80px]",
      render: () => (
        <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors">
          <MoreVertical className="w-4 h-4 text-gray-500" />
        </button>
      ),
    },
    {
      key: "status",
      label: "حالة الطلب",
      width: "flex-1 grow min-w-[140px]",
      render: (value: any) => {
        const styles = getStatusStyles(value.type);
        return (
          <div className={`inline-flex items-center justify-center gap-2 px-3 py-1 ${styles.container} rounded-md`}>
            <div className={`w-1.5 h-1.5 ${styles.dot} rounded-full`} />
            <span className={`text-sm font-medium ${styles.text}`}>
              {value.text}
            </span>
          </div>
        );
      },
    },
    {
      key: "address",
      label: "العنوان",
      width: "flex-1 grow min-w-[200px]",
    },
    {
      key: "phone",
      label: "رقم الهاتف",
      width: "w-[120px] min-w-[120px]",
    },
    {
      key: "recipient",
      label: "اسم المستلم",
      width: "w-[110px] min-w-[110px]",
    },
    {
      key: "totalValue",
      label: "اجمالي القيمة",
      width: "w-[100px] min-w-[100px]",
    },
    {
      key: "quantity",
      label: "الكمية",
      width: "w-[70px] min-w-[70px]",
    },
    {
      key: "product",
      label: "اسم المنتج",
      width: "w-[100px] min-w-[100px]",
    },
    {
      key: "date",
      label: "تاريخ الطلب",
      width: "w-[180px] min-w-[180px]",
    },
    {
      key: "id",
      label: "كود الطلب",
      width: "w-[80px] min-w-[80px]",
    },
  ];

  const getStatusStyles = (type: string) => {
    switch (type) {
      case "completed":
        return {
          container: "bg-gray-100",
          text: "text-gray-700",
          dot: "bg-gray-500",
        };
      case "reviewing":
        return {
          container: "bg-orange-100",
          text: "text-orange-700",
          dot: "bg-orange-500",
        };
      case "rejected":
        return {
          container: "bg-red-100",
          text: "text-red-700",
          dot: "bg-red-500",
        };
      case "pending":
        return {
          container: "bg-[#EBF8FF]",
          text: "text-blue-700",
          dot: "bg-blue-500",
        };
      default:
        return {
          container: "bg-gray-100",
          text: "text-gray-700",
          dot: "bg-gray-500",
        };
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Navigate to page ${page}`);
  };

  return (
    <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
        <Table
          columns={tableColumns}
          data={orderData}
          className="w-full"
          headerClassName="bg-color-mode-surface-bg-icon-gray"
          rowClassName="hover:bg-gray-50"
          cellClassName="text-right [direction:rtl] whitespace-nowrap"
        />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={20}
        onPageChange={handlePageChange}
        className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
      />
    </div>
  );
};
