import { useNavigate } from "react-router-dom";

import { svgPaths } from "@shared/constants/svgPaths";

function AnalyticsNavigation() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/");
  };

  return (
    <div className="bg-[#316dcc] box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-col justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center pl-4 pr-0 py-[11px] relative w-full">
            <div
              onClick={handleBack}
              role="button"
              className="h-[22px] relative shrink-0 w-[17px] cursor-pointer"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 17 22"
              >
                <path d={svgPaths.p18459280} fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="basis-0 box-border content-stretch flex flex-col grow h-11 md:h-12 items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
        <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] md:text-[18px] lg:text-[20px] text-center text-nowrap tracking-[-0.16px]">
          <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            Аналитика финансов
          </p>
        </div>
      </div>

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-end relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-end pl-0 pr-1.5 py-0 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[10px] relative shrink-0">
              <div className="relative shrink-0 size-6 md:size-7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsNavigation;
