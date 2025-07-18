import { svgPaths } from "@shared/constants/svgPaths";
import { useNavigate } from "react-router-dom";

function Search1() {
  const navigate = useNavigate();
  const handleClickSearch = () => {
    navigate("/pwa-ceb/search");
  };
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
            fill="var(--stroke-0, white)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

export default Search1;
