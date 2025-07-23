import { useTheme } from "@context/ThemeProvider";
import TopTitle from "./TopTitle";
import { colorOptions } from "@pages/ColorSelectionScreen";

function NavigationBar({ scrollY = 0 }: { scrollY?: number }) {
  const { theme } = useTheme();

  const backgroundColor = theme === "standard" ? "#F1F5FC" :
    colorOptions.find((c) => c.id === theme)?.value || "#316dcc";
  return (
    <div
      className="fixed box-border content-stretch flex flex-col items-start justify-start left-0 p-0 right-0 top-0 z-10"
      data-name="navigation_bar"
      style={{
        backgroundColor,
      }}
    >
      <TopTitle scrollY={scrollY} />
    </div>
  );
}
export default NavigationBar;
