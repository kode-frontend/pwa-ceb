function ChatsNavigation() {
  return (
    <div className="bg-[#316dcc] box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 box-border content-stretch flex flex-col grow h-11 md:h-12 items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
        <div className="font-sans leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-center text-nowrap tracking-[-0.16px]">
          <h3 className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            Контактный центр
          </h3>
        </div>
      </div>

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-end relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-end pl-0 pr-1.5 py-0 relative w-full top-1">
            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[10px] relative shrink-0">
              <div className="relative shrink-0 size-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatsNavigation;
