import Content8 from "@components/Content/Content8";
import Overlay from "@components/Content/Overlay";
import { colorOptions } from "./ColorSelectionScreen";
import { useTheme } from "@context/ThemeProvider";

export const HomeScreen = () => {
  const { theme } = useTheme();
  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value;
  return (
    <div
      className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  pt-[51px]"
      data-name="главная"
    >
      <div
        className={`bg-[${backgroundColor === "#FFFFFF" ? "#f1f5fc" : backgroundColor}] h-[50vh] w-full z-0 fixed top-0`}
      />
      <Overlay />
      <Content8 />
      <div className={`bg-[#f2f3f5] h-[50vh] w-full z-[-1] fixed bottom-0`} />
    </div>
  );
};
