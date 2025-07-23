import { useTheme } from "@context/ThemeProvider";
import { useLocation } from "react-router-dom";
import { colorOptions } from "./ColorSelectionScreen";

export default function CreditScreen() {
  const location = useLocation();
  const { theme } = useTheme();

  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  const imageName = location.state?.image || "creditssheet.png";

  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
      <div className="flex flex-col p-0 m-0 leading-none">
        <img
          src={`/pwa-ceb/assets/${imageName}`}
          alt="Картинка 3"
          className="block w-full"
          style={{ backgroundColor }}
        />
      </div>
    </div>
  );
}
