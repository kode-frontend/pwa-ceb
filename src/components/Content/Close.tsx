import { svgPaths } from "@shared/constants/svgPaths";

function Close() {
  return (
    <div
      className="absolute h-[8.204px] left-[3.9px] top-[3.9px] w-[8.203px]"
      data-name="close"
    >
      <div className="absolute bottom-[-0.002%] left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 9"
        >
          <g id="close">
            <path
              d={svgPaths.p1b65d400}
              fill="var(--fill-0, white)"
              fillOpacity="0.7"
              id="Union"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Close;
