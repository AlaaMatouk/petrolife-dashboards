import { userDataColumns } from "../../../../constants/data";

export const UserDataSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
      <div className="flex flex-col items-end gap-[var(--corner-radius-medium)] relative self-stretch w-full flex-[0_0_auto]">
        <header className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <h2 className="relative w-[103px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
            بيانات العميل
          </h2>

          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt="Side icons"
            src="/img/side-icons.svg"
          />
        </header>

        <div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
          {userDataColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col items-start justify-center gap-[var(--corner-radius-medium)] relative flex-1 grow"
            >
              {column.fields.map((field, fieldIndex) => (
                <div
                  key={fieldIndex}
                  className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative self-stretch w-full flex-[0_0_auto]"
                >
                  <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                    {field.label}
                  </label>

                  <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                    <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)] [direction:rtl]">
                        {field.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
