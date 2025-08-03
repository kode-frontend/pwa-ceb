import { useNavigate } from "react-router-dom";

import { useTheme } from "@context/ThemeProvider";

import { colorOptions } from "@pages/ColorSelectionScreen";

import { BackArrow } from "@components/Content/BackArrow";
import { SearchButton } from "@components/Content/SearchButton";

function AddServiceNavigation() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleBack = () => {
    navigate("/home");
  };
  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  return (
    <div
      className="fixed box-border content-stretch flex flex-col items-start justify-start left-0 p-0 w-full z-[9999]"
      style={{
        backgroundColor,
      }}
    >
      <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
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

        {/* Title */}
        <div className="basis-0 box-border content-stretch flex flex-col grow h-11 items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
          <div className="font-sans leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap tracking-[-0.16px]">
            <h3 className="adjustLetterSpacing block leading-[24px] whitespace-pre">
              Добавить сервис
            </h3>
          </div>
        </div>

        {/* Search Button */}
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
          <div className="flex flex-row items-center justify-end relative size-full">
            <div className="box-border content-stretch flex flex-row items-center justify-end pl-0 pr-1.5 py-0 relative w-full">
              <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[10px] relative shrink-0">
                <div className="relative shrink-0 size-6">
                  <SearchButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddServiceNavigation;
