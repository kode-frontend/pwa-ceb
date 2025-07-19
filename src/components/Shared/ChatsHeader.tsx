import { svgPaths } from "@shared/constants/svgPaths";

function ChatsHeader() {
  return (
    <div className="fixed bg-[#316dcc] box-border content-stretch flex flex-col items-start justify-start left-0 p-0 w-full z-[9999]">
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
        {/* Back Button */}
        <div className="basis-0 grow min-h-px min-w-px opacity-0 relative shrink-0">
          <div className="flex flex-col justify-center relative size-full">
            <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center pl-4 pr-0 py-[11px] relative w-full">
              <div className="h-[22px] relative shrink-0 w-[17px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 17 22"
                >
                  <path d={svgPaths.p18459280} fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="basis-0 box-border content-stretch flex flex-col grow h-11 items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
          <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap tracking-[-0.16px]">
            <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Контактный центр
            </p>
          </div>
        </div>

        {/* Search Button */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="flex flex-row items-center justify-end relative size-full">
            <div className="box-border content-stretch flex flex-row items-center justify-end pl-0 pr-1.5 py-0 relative w-full">
              <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[10px] relative shrink-0">
                <div className="relative shrink-0 size-6">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                  >
                    <path d={svgPaths.p2774e700} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatsHeader;
