import { useNavigate } from "react-router-dom";
import { svgPaths } from "@shared/constants/svgPaths";
import { useTheme } from "@context/ThemeProvider";

function Search3(backgroundColor: any) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleClick = () => {
    navigate("/notifications", {state: { from: location.pathname } });
  };
  const svgStrokeColor = theme === "standard" ? "black" : "white";
  return (
    <div
      onClick={handleClick}
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-0 relative rounded-[100px] shrink-0 size-9 cursor-pointer"
      data-name="search"
      style={backgroundColor}
    >
      <div className="relative shrink-0 size-5" data-name="icn">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="icn">
            <g id="source">
              <path d={svgPaths.p213e3b00} fill={svgStrokeColor} id="Union" />
              <path
                d={svgPaths.p2eb72c80}
                id="Ellipse 33"
                fill={svgStrokeColor}
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </g>
            <circle
              cx="14"
              cy="4"
              fill="var(--fill-0, #FF0022)"
              id="Ellipse 37"
              r="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Search3;
