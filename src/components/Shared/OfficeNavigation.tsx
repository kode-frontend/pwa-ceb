import { useNavigate } from "react-router-dom";

import { svgPaths } from "@shared/constants/svgPaths";

function OfficeNavigation() {
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
        <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[16px] md:text-[18px] lg:text-[20px] text-center text-nowrap tracking-[-0.16px]">
          <p className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            Карта
          </p>
        </div>
      </div>

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-end relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-end pl-0 pr-1.5 py-0 relative w-full top-1">
            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[10px] relative shrink-0">
              <div className="relative shrink-0 size-6">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2422 15C10.2422 15.2802 10.1482 15.5149 9.95898 15.7041C9.76978 15.8933 9.53505 15.9873 9.25488 15.9873H7.25488C6.97495 15.9873 6.74087 15.893 6.55176 15.7041C6.36255 15.5149 6.26758 15.2802 6.26758 15V9H6.27051L6.26465 8.99219L0.464844 1.59277C0.340944 1.42757 0.270423 1.25832 0.251953 1.08594C0.233546 0.913742 0.267003 0.737052 0.353516 0.555664C0.440058 0.374337 0.558457 0.238666 0.708008 0.148438C0.857737 0.05819 1.04002 0.0127067 1.25488 0.0126953H15.2549C15.4698 0.0126953 15.652 0.0581787 15.8018 0.148438C15.9514 0.238666 16.0697 0.374289 16.1562 0.555664C16.2428 0.73708 16.2762 0.913717 16.2578 1.08594C16.2393 1.25832 16.1688 1.42757 16.0449 1.59277L10.2451 8.99219L10.2549 9L10.2422 8.99023V15Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.025"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfficeNavigation;
