import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";
import { useNavigate } from "react-router-dom";

function TopbarSearchButton(backgroundColor: any) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleClickSearch = () => {
    navigate("/search", { state: { from: location.pathname } });
  };
  const svgStrokeColor = theme === "standard" ? "black" : "white";
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-0 relative rounded-[100px] shrink-0 size-9"
      data-name="search"
      style={backgroundColor}
    >
      <div
        className="relative shrink-0 size-5 cursor-pointer"
        data-name="search"
        onClick={handleClickSearch}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="search">
            <path d={svgPaths.pca30200} fill={svgStrokeColor} id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default TopbarSearchButton
;
