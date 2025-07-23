import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "./ColorSelectionScreen";

export default function CreditMomentScreen() {
  const { theme } = useTheme();

  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src="/pwa-ceb/assets/momentcreditwrapper.png"
          alt="Картинка 2"
          className={`block w-full bg-[${backgroundColor}]`}
        />
        <img
          src="/pwa-ceb/assets/momentcredit.png"
          alt="Картинка 3"
          className="block w-full"
        />
      </div>
    </div>
  );
}
