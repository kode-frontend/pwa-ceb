import Overlay from "@components/Content/Overlay";
import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "./ColorSelectionScreen";

export const CreditsScreen = () => {
  const { theme } = useTheme();
  const backgroundColor =
    theme === "standard"
      ? "#FFFFFF"
      : colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  pt-[51px] pb-[51px]"
      data-name="кредиты"
      style={{ backgroundColor }}
    >
      <Overlay />
      <div
        className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full z-1"
        data-name="content"
      >
        <img
          src={`/pwa-ceb/assets/сontainercredits.png`}
          alt="Картинка 3"
          className="block w-full"
        />
      </div>
    </div>
  );
};
