import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";

function Group33489() {
  const { theme } = useTheme();
  const backgroundColor = theme === "standard" ? "white" : "black";
  return (
    <div className="absolute inset-[12.5%]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="Group 33489">
          <path
            clipRule="evenodd"
            d={svgPaths.p2b1d1e00}
            fill={backgroundColor}
            fillRule="evenodd"
            id="Vector 5 (Stroke)"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p29025700}
            fill={backgroundColor}
            fillRule="evenodd"
            id="Vector 6 (Stroke)"
          />
        </g>
      </svg>
    </div>
  );
}

export default Group33489;
