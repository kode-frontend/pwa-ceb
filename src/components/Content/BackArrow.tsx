import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";

export const BackArrow = () => {
  const { theme } = useTheme();
  const fillColor = theme === "standard" ? "black" : "white";
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 17 22"
    >
      <path d={svgPaths.p18459280} fill={fillColor} />
    </svg>
  );
};
