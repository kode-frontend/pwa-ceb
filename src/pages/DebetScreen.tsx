import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "./ColorSelectionScreen";

export default function DebetScreen() {
  const { theme } = useTheme();

  const backgroundColor =
    theme === "standard"
      ? "#FFFFFF"
      : colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  const wrapperImage = theme === "standard" ? "debetstandard.png" : "debet.png";
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start size-full">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src={`/pwa-ceb/assets/${wrapperImage}`}
          alt="Картинка 2"
          className="block w-full z-1"
          style={{ backgroundColor }}
        />
        <img
          src="/pwa-ceb/assets/debetsheet.png"
          alt="Картинка 3"
          className="block w-full"
          style={{ top: "10px" }}
        />
      </div>
    </div>
  );
}
