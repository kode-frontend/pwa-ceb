function SectionHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="section_header">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center leading-[0] not-italic pb-1 pt-4 px-4 relative text-left w-full">
          <div className="basis-0 font-sans grow min-h-px min-w-px relative shrink-0 text-[#191919] text-[16px] tracking-[-0.16px]">
            <h4 className="block leading-[24px] font-semibold">
              Аналитика финансов
            </h4>
          </div>
          <div className="font-sans relative shrink-0 text-[#316dcc] text-[14px] text-nowrap tracking-[-0.14px]">
            <p className="adjustLetterSpacing block leading-[20px] whitespace-pre font-semibold">
              Подробнее
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;
