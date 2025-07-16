function Tabs() {
  return (
    <div className="relative shrink-0 w-full" data-name="tabs">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row font-['SF_Pro_Display:Semibold',_sans-serif] gap-4 items-start justify-start leading-[0] not-italic pb-1 pt-4 px-4 relative text-[16px] text-left text-nowrap tracking-[-0.16px] w-full">
          <div className="relative shrink-0 text-[#191919]">
            <p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">
              Карты и счета (6)
            </p>
          </div>
          <div className="relative shrink-0 text-[#9ba5b3]">
            <p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">
              Кредиты
            </p>
          </div>
          <div className="relative shrink-0 text-[#9ba5b3]">
            <p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">
              Вклады
            </p>
          </div>
          <div className="relative shrink-0 text-[#9ba5b3]">
            <p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">
              Инвестиции
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
