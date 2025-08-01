import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "./ColorSelectionScreen";

import momentcreditwrapperlight from "/assets/momentcreditwrapperlight.png";
import momentcreditwrapper from "/assets/momentcreditwrapper.png";
import momentcredit from "/assets/momentcredit.png";

export default function CreditMomentScreen() {
  const { theme } = useTheme();

  const backgroundColor =
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  const wrapperImage =
    theme === "standard"
      ? momentcreditwrapperlight
      : momentcreditwrapper;
  return (
    <div className="h-full overflow-hidden relative">
      <div className="flex flex-col justify-around h-[100%] p-0 m-0 leading-none">
        <img
          src={wrapperImage}
          alt="Картинка 2"
          className="block w-full z-1"
          style={{ backgroundColor }}
        />
      </div>
      <img
        src={momentcredit}
        alt="Картинка 3"
        className="block w-full relative bottom-[-39px]"
      />
    </div>
  );
}
