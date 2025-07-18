function Tabs() {
  return (
    <div className="relative shrink-0 w-full" data-name="tabs">
      <div className="relative w-full overflow-x-auto scrollbar-hide">
        <div className="flex flex-row gap-4 px-4 pb-1 pt-4 text-[16px] leading-[0] font-sans whitespace-nowrap w-max">
          <div className="shrink-0 text-[#191919]">
            <p className="leading-[24px]">Карты и счета (6)</p>
          </div>
          <div className="shrink-0 text-[#9ba5b3]">
            <p className="leading-[24px]">Кредиты</p>
          </div>
          <div className="shrink-0 text-[#9ba5b3]">
            <p className="leading-[24px]">Вклады</p>
          </div>
          <div className="shrink-0 text-[#9ba5b3]">
            <p className="leading-[24px]">Инвестиции</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
