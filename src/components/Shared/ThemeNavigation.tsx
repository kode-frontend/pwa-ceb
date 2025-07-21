import { useNavigate } from "react-router-dom";

import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "@pages/ColorSelectionScreen";
import { BackArrow } from "@components/Content/BackArrow";

function ThemeNavigation() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/settings");
  };

  const { theme } = useTheme();

  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  const textColor = theme === "standard" ? "black" : "white";

  return (
    <div
      className=" box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full"
      style={{
        backgroundColor,
        alignItems: "center",
      }}
    >
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-col justify-center relative size-full">
          <div className="box-border content-stretch flex flex-col gap-1 items-start justify-center pl-4 pr-0 py-[11px] relative w-full">
            <div
              onClick={handleBack}
              role="button"
              className="h-[22px] relative shrink-0 w-[17px] cursor-pointer"
            >
              <BackArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="basis-0 box-border content-stretch flex flex-col grow h-11 md:h-12 items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
        <div className="font-sans leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] lg:text-[20px] text-center text-nowrap tracking-[-0.16px]">
          <p
            className="adjustLetterSpacing block leading-[24px] whitespace-pre"
            style={{ color: textColor }}
          >
            Настройка темы
          </p>
        </div>
      </div>

      <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center justify-end relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-end pl-0 pr-1.5 py-0 relative w-full">
            <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[10px] relative shrink-0">
              <div className="relative shrink-0">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9414 11.62L17.5014 9.06L14.9414 6.5"
                    stroke={textColor}
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.26172 9.06H17.4317"
                    stroke={textColor}
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.26172 17C4.84172 17 1.26172 14 1.26172 9C1.26172 4 4.84172 1 9.26172 1"
                    stroke={textColor}
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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

export default ThemeNavigation;
