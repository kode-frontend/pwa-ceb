import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";
import { useNavigate } from "react-router-dom";

function Search1() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleClickSearch = () => {
    navigate("/pwa-ceb/search");
  };
  const svgStrokeColor = theme === "standard" ? "black" : "white";
  return (
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
          <path
            d={svgPaths.pca30200}
            fill={svgStrokeColor}
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

export default Search1;
