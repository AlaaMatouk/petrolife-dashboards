import React from "react";

interface TransactionItem {
  id: number;
  price: string;
  currency: string;
  fuelAmount: string;
  fuelType: string;
  date: string;
  dateLabel: string;
  stationName: string;
  stationAddress: string;
  stationImage: string;
}

const transactionData: TransactionItem[] = [
  {
    id: 1,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20US.svg",
  },
  {
    id: 2,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-1US.svg",
  },
  {
    id: 3,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-2US.svg",
  },
  {
    id: 4,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-3US.svg",
  },
  {
    id: 5,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-4US.svg",
  },
  {
    id: 6,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-5US.svg",
  },
  {
    id: 7,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-6US.svg",
  },
  {
    id: 8,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-7US.svg",
  },
  {
    id: 9,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-8US.svg",
  },
  {
    id: 10,
    price: "2543",
    currency: "ر.س",
    fuelAmount: "542",
    fuelType: "بنزين 91",
    date: "21 فبراير 2025 , 10:15 ص",
    dateLabel: "تاريخ الاستخدام",
    stationName: "محطة الصالح",
    stationAddress: "15 ش الرياض، الرياض",
    stationImage: "/img/ellipse-20-9US.svg",
  },
];

const TransactionRow: React.FC<{ transaction: TransactionItem }> = ({
  transaction,
}) => {
  return (
    <article className="flex h-[72px] items-center justify-between relative self-stretch w-full border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        <div className="flex flex-col w-[45px] items-end relative">
          <div className="relative self-stretch text-color-mode-text-icons-t-blue font-medium text-sm">
            {transaction.price}
          </div>
          <div className="relative self-stretch text-color-mode-text-icons-t-sec text-xs">
            {transaction.currency}
          </div>
        </div>

        <div className="flex flex-col w-[45px] items-end relative">
          <div className="self-stretch text-color-mode-text-icons-t-orange font-medium text-sm">
            {transaction.fuelAmount}
          </div>
          <div className="relative self-stretch text-color-mode-text-icons-t-sec text-xs">
            {transaction.fuelType}
          </div>
        </div>

        <div className="flex flex-col w-[164px] items-end relative">
          <time className="relative self-stretch text-[var(--form-readonly-input-text-color)] font-medium text-sm text-right">
            {transaction.date}
          </time>
          <div className="relative self-stretch text-[var(--form-readonly-label-color)] text-xs text-right">
            {transaction.dateLabel}
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
        <div className="flex flex-col items-end gap-1 relative">
          <div className="text-[var(--form-readonly-input-text-color)] font-medium text-sm">
            {transaction.stationName}
          </div>
          <address className="text-[var(--form-readonly-label-color)] text-xs not-italic">
            {transaction.stationAddress}
          </address>
        </div>

        <img
          className="w-11 h-11 object-cover rounded-lg"
          alt={`${transaction.stationName} station logo`}
          src={transaction.stationImage}
        />
      </div>
    </article>
  );
};

export const ListWrapperSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]"
      role="region"
      aria-label="Transaction history"
    >
      {transactionData.map((transaction) => (
        <TransactionRow key={transaction.id} transaction={transaction} />
      ))}
    </section>
  );
};
