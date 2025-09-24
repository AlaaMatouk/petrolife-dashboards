import React from "react";

export const OrderDetailsSection = (): JSX.Element => {
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

  const paginationNumbers = [1, 2, 3, 4, 5, 6, 7, "...", 20];

  const getStatusStyles = (type: string) => {
    switch (type) {
      case "completed":
        return {
          container: "bg-color-mode-surface-bg-icon-gray",
          text: "text-color-mode-text-icons-t-sec",
          dot: "bg-color-mode-text-icons-t-sec",
        };
      case "reviewing":
        return {
          container: "bg-color-mode-surface-bg-orange-light",
          text: "text-color-mode-text-icons-t-orange",
          dot: "bg-color-mode-text-icons-t-orange",
        };
      case "rejected":
        return {
          container: "bg-color-mode-surface-red-bg",
          text: "text-color-mode-text-icons-t-red",
          dot: "bg-color-mode-text-icons-t-red",
        };
      case "pending":
        return {
          container: "bg-color-mode-surface-blue-bg",
          text: "text-color-mode-text-icons-t-blue",
          dot: "bg-color-mode-text-icons-t-blue",
        };
      default:
        return {
          container: "bg-color-mode-surface-bg-icon-gray",
          text: "text-color-mode-text-icons-t-sec",
          dot: "bg-color-mode-text-icons-t-sec",
        };
    }
  };

  return (
    <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-7 items-end relative">
            <div className="relative self-stretch w-full h-[42px] bg-color-mode-surface-bg-icon-gray" />

            {orderData.map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pt-[var(--corner-radius-medium)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-medium)] pl-[var(--corner-radius-none)] relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <img
                  className="relative w-[18px] h-[18px] aspect-[1]"
                  alt="Side icons"
                  src="/img/side-icons-11.svg"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-end relative flex-1 grow">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  حالة الطلب
                </div>

                <img
                  className="relative w-3.5 h-3.5 aspect-[1]"
                  alt="Side icons"
                  src="/img/side-icons-12.svg"
                />
              </div>
            </div>

            {orderData.map((order, index) => {
              const styles = getStatusStyles(order.status.type);
              return (
                <div
                  key={index}
                  className="flex h-[42px] items-center justify-end gap-2.5 pt-[var(--corner-radius-extra-small)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-extra-small)] pl-[var(--corner-radius-none)] relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                >
                  <div
                    className={`inline-flex items-center justify-center gap-[var(--corner-radius-extra-small)] pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] ${styles.container} rounded-[var(--corner-radius-small)]`}
                  >
                    <div
                      className={`w-fit mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] ${styles.text} text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] relative font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]`}
                    >
                      {order.status.text}
                    </div>

                    <div
                      className={`relative w-1.5 h-1.5 ${styles.dot} rounded-[3px]`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-end relative flex-1 grow">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                العنوان
              </div>
            </div>

            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <p className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  {order.address}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[116px] items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                رقم الهاتف
              </div>
            </div>

            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  {order.phone}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[104px] items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                اسم المستلم
              </div>
            </div>

            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  {order.recipient}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[98px] items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                اجمالي القيمة
              </div>
            </div>

            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  {order.totalValue}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[62px] items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                الكمية
              </div>
            </div>

            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  {order.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[94px] items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                اسم المنتج
              </div>
            </div>

            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  {order.product}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[179px] items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                تاريخ الطلب
              </div>
            </div>

            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <p className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  {order.date}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-20 items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                كود الطلب
              </div>
            </div>

            {orderData.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  {order.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
          <div className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
            <img
              className="relative w-4 h-4"
              alt="Icon arrow right"
              src="/img/icon-16-arrow-right.svg"
            />

            <div className="w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              التالي
            </div>
          </div>

          {paginationNumbers.map((number, index) => (
            <div
              key={index}
              className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden ${number === 3 ? "bg-color-mode-surface-primary-blue" : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"}`}
            >
              <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                <div
                  className={`mt-[-11.00px] mb-[-9.00px] ml-[-2.50px] mr-[-2.50px] tracking-[var(--body-body-2-letter-spacing)] relative w-fit text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap ${number === 3 ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative font-subtitle-subtitle-3 [font-style:var(--subtitle-subtitle-3-font-style)]" : "font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec font-body-body-2 [font-style:var(--body-body-2-font-style)]"}`}
                >
                  {number}
                </div>
              </div>
            </div>
          ))}

          <div className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
            <div
              className="w-fit ml-[-3.50px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-
[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]"
            >
              السابق
            </div>

            <img
              className="mr-[-3.50px] relative w-4 h-4"
              alt="Icon arrow left"
              src="/img/icon-16-arrow-left.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
