import { useTheme } from "@context/ThemeProvider";

import { colorOptions } from "@pages/ColorSelectionScreen";
import TopbarProfileButton from "./ui/TopbarProfileButton";
import TopbarNavigationButtons from "./ui/TopbarNavigationButtons";

function BasicBarNavigation({ scrollY = 0 }: { scrollY?: number }) {
  const { theme } = useTheme();

  const backgroundColor =
    theme === "standard"
      ? "#F1F5FC"
      : colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  return (
    <div
      className="fixed box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0 z-10"
      data-name="navigation_bar"
      style={{
        backgroundColor,
      }}
    >
      <div className="relative shrink-0 w-full" data-name="top_title">
        <div className="flex flex-row items-center relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
            <TopbarProfileButton />
            <TopbarNavigationButtons scrollY={scrollY} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BasicBarNavigation;
