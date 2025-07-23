import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "./ColorSelectionScreen";

export default function CreditMomentScreen() {
  const { theme } = useTheme();

  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  const wrapperImage =
    theme === "standard"
      ? "momentcreditwrapperlight.png"
      : "momentcreditwrapper.png";
  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full p-0 m-0 leading-none">
        <img
          src={`/pwa-ceb/assets/${wrapperImage}`}
          alt="Картинка 2"
          className="block w-full z-1"
          style={{ backgroundColor }}
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
