import { useState, useEffect } from "react";
import { Table, Pagination, ExportButton, RTLSelect, LoadingSpinner } from "../../../../components/shared";
import { walletReportsTransactionData } from "../../../../constants/data";
import { Wallet } from "lucide-react";
import { fetchCompaniesDriversTransfer } from "../../../../services/firestore";

interface TransactionData {
  id: string;
  operationName: string;
  operationType: string;
  date: string;
  balance: string;
  debit: string;
}


const filterOptions = [
  { 
    label: "الفترة الزمنية", 
    value: "الكل", 
    icon: "/img/side-icons-2.svg",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "اخر اسبوع", label: "اخر اسبوع" },
      { value: "اخر 30 يوم", label: "اخر 30 يوم" },
      { value: "اخر 6 شهور", label: "اخر 6 شهور" },
      { value: "اخر 12 شهر", label: "اخر 12 شهر" }
    ]
  },
  {
    label: "اسم العملية",
    value: "الكل",
    icon: "/img/side-icons-5.svg",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "تحويل بنكي", label: "تحويل بنكي" },
      { value: "وقود", label: "وقود" },
      { value: "اشتراك مركبات", label: "اشتراك مركبات" },
      { value: "استرداد", label: "استرداد" }
    ]
  },
  {
    label: "نوع العملية",
    value: "الكل",
    icon: "/img/side-icons-4.svg",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "تغذية محفظة", label: "تغذية محفظة" },
      { value: "فاتورة", label: "فاتورة" },
      { value: "استرداد", label: "استرداد" }
    ]
  },
  { 
    label: "نوع التقرير", 
    value: "تحليلي", 
    icon: "/img/side-icons-5.svg",
    options: [
      { value: "تحليلي", label: "تحليلي" },
      { value: "تفصيلي", label: "تفصيلي" },
      { value: "ملخص", label: "ملخص" }
    ]
  },
];

// Helper function to format date
const formatDate = (date: any): string => {
  if (!date) return '-';
  
  try {
    if (date.toDate && typeof date.toDate === 'function') {
      return new Date(date.toDate()).toLocaleString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    if (date instanceof Date) {
      return date.toLocaleString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return new Date(date).toLocaleString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch (error) {
    return String(date);
  }
};

// Helper function to format number
const formatNumber = (num: any): string => {
  if (!num && num !== 0) return '-';
  return new Intl.NumberFormat('en-US').format(Number(num));
};

// Convert transfer data to transaction format
const convertTransfersToTransactions = (transfers: any[]): TransactionData[] => {
  return transfers.map((transfer) => ({
    // رقم العملية = id
    id: transfer.id || '-',
    
    // اسم العملية = car.name.ar (car name in Arabic)
    operationName: transfer.car?.name?.ar || transfer.car?.name?.en || transfer.car?.name || '-',
    
    // نوع العملية = fuelType (if available, otherwise use periodName)
    operationType: transfer.fuelType || transfer.periodName || '-',
    
    // التاريخ = createdDate
    date: formatDate(transfer.createdDate),
    
    // الرصيد = car.balance
    balance: formatNumber(transfer.car?.balance),
    
    // مدين = value
    debit: formatNumber(transfer.value),
  }));
};

const dummyTransactionData: TransactionData[] = [
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "",
  },
  {
    id: "21A254",
    operationName: "وقود",
    operationType: "فاتورة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "",
  },
  {
    id: "21A254",
    operationName: "اشتراك مركبات",
    operationType: "استرداد",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "استرداد",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
];


// Define table columns for the reusable Table component
const tableColumns = [
  {
    key: "balance",
    label: "الرصيد",
    width: "w-[95px] min-w-[95px]",
  },
  {
    key: "debit",
    label: "مدين",
    width: "w-[106px] min-w-[106px]",
  },
  {
    key: "operationName",
    label: "اسم العملية",
    width: "flex-1 grow min-w-[140px]",
  },
  {
    key: "operationType",
    label: "نوع العملية",
    width: "flex-1 grow min-w-[140px]",
  },
  {
    key: "date",
    label: "التاريخ",
    width: "w-[220px] min-w-[220px]",
  },
  {
    key: "id",
    label: "رقم العملية",
    width: "w-[130px] min-w-[130px]",
  },
];

export const TransactionHistorySection = (): JSX.Element => {
  const [filters, setFilters] = useState({
    timePeriod: "الكل",
    operationName: "الكل",
    operationType: "الكل",
    reportType: "تحليلي",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const ITEMS_PER_PAGE = 10;

  // Fetch companies-drivers-transfer data on mount
  useEffect(() => {
    const loadTransactions = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const transfers = await fetchCompaniesDriversTransfer();
        const convertedTransactions = convertTransfersToTransactions(transfers);
        setTransactions(convertedTransactions);
      } catch (err) {
        console.error('Error loading wallet transactions:', err);
        setError('فشل في تحميل المعاملات');
        setTransactions([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTransactions();
  }, []);

  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate pagination
  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedTransactions = transactions.slice(startIndex, endIndex);

  return (
    <section
      className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
      role="region"
      aria-labelledby="transaction-history-title"
    >
      <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative">
          <ExportButton />

          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <h1
              id="transaction-history-title"
              className="relative w-[126px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]"
            >
              تقارير المحفظة
            </h1>

            <Wallet className="relative w-[18px] h-[18px] text-gray-500" />
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div
          className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]"
          role="group"
          aria-label="مرشحات البحث"
        >
          {filterOptions.map((filter, index) => (
            <RTLSelect
              key={index}
              label={filter.label}
              value={filters[filter.label === "الفترة الزمنية" ? "timePeriod" :
                            filter.label === "اسم العملية" ? "operationName" :
                            filter.label === "نوع العملية" ? "operationType" : "reportType"]}
              onChange={(value) => handleFilterChange(
                filter.label === "الفترة الزمنية" ? "timePeriod" :
                filter.label === "اسم العملية" ? "operationName" :
                filter.label === "نوع العملية" ? "operationType" : "reportType",
                value
              )}
              options={filter.options}
              placeholder={filter.value}
            />
          ))}
        </div>

        <div className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
          {isLoading ? (
            <div className="flex items-center justify-center w-full min-h-[400px]">
              <LoadingSpinner message="جاري تحميل المعاملات..." />
            </div>
          ) : error ? (
            <div className="flex items-center justify-center w-full min-h-[400px]">
              <p className="text-red-500 text-center [direction:rtl]">{error}</p>
            </div>
          ) : transactions.length === 0 ? (
            <div className="flex items-center justify-center w-full min-h-[400px]">
              <p className="text-gray-500 text-center [direction:rtl]">لا توجد معاملات متاحة</p>
            </div>
          ) : (
            <>
              <Table
                columns={tableColumns}
                data={paginatedTransactions}
                className="w-full"
                headerClassName="bg-color-mode-surface-bg-icon-gray"
                rowClassName="hover:bg-gray-50"
                cellClassName="text-right [direction:rtl] whitespace-nowrap"
              />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
