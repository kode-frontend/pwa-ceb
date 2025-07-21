import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";

export const SearchButton = () => {
  const { theme } = useTheme();
  const fillColor = theme === "standard" ? "black" : "white";
  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24 24"
    >
      <path d={svgPaths.p2774e700} fill={fillColor} />
    </svg>
  );
};
