import { svgPaths } from "@shared/constants/svgPaths";

function Search1() {
  return (
    <div className="relative shrink-0 size-5" data-name="search">
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
