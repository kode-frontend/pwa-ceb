import { BackArrow } from "@components/Content/BackArrow";
import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "@pages/ColorSelectionScreen";
import { svgPaths } from "@shared/constants/svgPaths";
import { useLocation, useNavigate } from "react-router-dom";

function ScanQrNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleBack = () => {
    const splitPath = location.state?.from?.split("/");
    const correctPath = `/${splitPath[splitPath.length - 1]}`;
    navigate(correctPath);
  };

  const { theme } = useTheme();

  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";

  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      style={{
        backgroundColor,
      }}
    >
      {/* Back Button */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-col justify-center relative size-full">
          <div
            className="box-border content-stretch flex flex-col gap-1 items-start justify-center pl-4 pr-0 py-[11px] relative w-full cursor-pointer"
            onClick={handleBack}
            role="button"
          >
            <div className="h-[22px] relative shrink-0 w-[17px]">
              <BackArrow />
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="basis-0 box-border content-stretch flex flex-col grow h-11 md:h-12 items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
        <div className="font-sans leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-center text-nowrap tracking-[-0.16px]">
          <h3 className="adjustLetterSpacing block leading-[24px] whitespace-pre">
            Оплата по QR-коду
          </h3>
        </div>
      </div>

      {/* Hidden Logout Button */}
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-end relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-end pl-0 pr-1.5 py-0 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[10px] relative shrink-0">
              <div className="opacity-0 relative shrink-0 size-6 md:size-7">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 19 18"
                >
                  <path
                    d={svgPaths.p1be90200}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d="M6.99999 9.06H17.17"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPaths.pac33c80}
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
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

export default ScanQrNavigation;
