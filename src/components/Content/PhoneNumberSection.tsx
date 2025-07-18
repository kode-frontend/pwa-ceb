import { svgPaths } from "@shared/constants/svgPaths";

function PhoneNumberSection() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[20px] md:rounded-[24px] shrink-0 w-full shadow-sm">
      <div className="relative shrink-0 w-full">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 md:px-6 lg:px-8 py-3 md:py-4 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
              <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191919] text-[16px] md:text-[17px] lg:text-[18px] text-left tracking-[-0.16px]">
                <p className="block leading-[24px] md:leading-[26px]">
                  Номер телефона
                </p>
              </div>
              <div className="relative shrink-0 size-6 md:size-7">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <path d={svgPaths.p211ffb00} fill="#6F7884" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-start px-4 md:px-6 lg:px-8 py-3 md:py-4 relative w-full">
            <div className="basis-0 box-border content-stretch flex flex-row gap-1 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#191919] text-[16px] md:text-[17px] lg:text-[18px] text-left tracking-[-0.16px]">
                <p className="block leading-[24px] md:leading-[26px]">
                  +7 (929) 1** 45 00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneNumberSection