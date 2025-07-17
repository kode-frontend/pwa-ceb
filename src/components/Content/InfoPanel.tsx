function InfoPanel() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[20px] md:rounded-[24px] shrink-0 w-full shadow-sm">
      <div className="relative shrink-0 w-full">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start px-4 md:px-6 lg:px-8 py-3 md:py-4 relative w-full">
            <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative rounded-xl shrink-0 w-full">
              <div className="basis-0 font-['SF_Pro_Display:Medium',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191919] text-[16px] md:text-[17px] lg:text-[18px] text-center tracking-[-0.16px]">
                <p className="block leading-[24px] md:leading-[26px]">
                  Проверьте правильность реквизитов перед отправкой переводов и платежей!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;