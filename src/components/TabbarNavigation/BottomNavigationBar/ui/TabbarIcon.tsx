import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "@pages/ColorSelectionScreen";
import TabbarIconMap, { TabbarRoute } from "../mapper/TabbarIconMap";

interface TabbarIconProps {
  active: boolean;
  route: TabbarRoute;
}

function TabbarIcon({ active, route }: TabbarIconProps) {
  const { theme } = useTheme();
  const isThemeStandard = theme === "standard";

  const themeColor = colorOptions.find((c) => c.id === theme)?.value;
  const backgroundColor = !active
    ? "#b6b6b6ff"
    : isThemeStandard
    ? "#316DCC"
    : themeColor || "#b6b6b6ff";
  return (
    <div
      className="absolute h-[17.661px] left-[2.998px] top-[3.166px] w-[18px]"
      data-name="home"
    >
      <div className="absolute bottom-[-5.096%] left-[-5%] right-[-5%] top-[-5.096%]">
        {TabbarIconMap(backgroundColor, route)}
      </div>
    </div>
  );
}
export default TabbarIcon;
