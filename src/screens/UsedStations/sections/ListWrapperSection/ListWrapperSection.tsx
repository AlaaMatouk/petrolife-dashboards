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
    <article className="flex h-[72px] items-center justify-between relative self-stretch w-full border-b-[0.3px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
      <div className="inline-flex items-center gap-[var(--corner-radius-extra-large-2)] relative flex-[0_0_auto]">
        <div className="flex flex-col w-[45px] items-end relative">
          <div className="relative self-stretch mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--subtitle-subtitle-2-font-size)] text-right tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [font-style:var(--subtitle-subtitle-2-font-style)]">
            {transaction.price}
          </div>
          <div className="relative self-stretch -mt-0.5 font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
            {transaction.currency}
          </div>
        </div>

        <div className="flex flex-col w-[45px] items-end relative">
          <div className="self-stretch mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-orange text-[length:var(--subtitle-subtitle-2-font-size)] text-right tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] relative font-subtitle-subtitle-2 [font-style:var(--subtitle-subtitle-2-font-style)]">
            {transaction.fuelAmount}
          </div>
          <div className="relative self-stretch -mt-0.5 font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
            {transaction.fuelType}
          </div>
        </div>

        <div className="flex flex-col w-[164px] items-end relative">
          <time className="relative self-stretch mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
            {transaction.date}
          </time>
          <div className="relative self-stretch -mt-0.5 font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
            {transaction.dateLabel}
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
        <div className="flex flex-col w-[84px] items-end gap-0.5 relative">
          <div className="w-fit mt-[-1.00px] ml-[-14.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 text-color-mode-text-icons-t-sec whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            {transaction.stationName}
          </div>
          <address className="w-[131px] ml-[-47.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative [direction:rtl] [font-style:var(--body-body-2-font-style)] not-italic">
            {transaction.stationAddress}
          </address>
        </div>

        <img
          className="relative w-11 h-11 object-cover"
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
