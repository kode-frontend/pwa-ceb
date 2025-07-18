export function AccountTabs() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="scrollbar-hide box-border content-stretch flex flex-row font-sans gap-4 items-start justify-start leading-[0] not-italic overflow-x-auto pb-1 pt-4 px-4 relative text-[16px] text-left text-nowrap tracking-[-0.16px] w-full">
          <div className="relative shrink-0 text-[#191919] whitespace-nowrap">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre font-sans">
              Карты и счета (3)
            </p>
          </div>
          <div className="relative shrink-0 text-[#9ba5b3] whitespace-nowrap">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Кредиты (1)
            </p>
          </div>
          <div className="relative shrink-0 text-[#9ba5b3] whitespace-nowrap">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Вклады
            </p>
          </div>
          <div className="relative shrink-0 text-[#9ba5b3] whitespace-nowrap">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Инвестиции
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
