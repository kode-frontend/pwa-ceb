import { svgPaths } from "@shared/constants/svgPaths";

function Icn() {
  return (
    <div className="relative shrink-0 size-5" data-name="icn">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="icn">
          <g id="source">
            <path
              d={svgPaths.p213e3b00}
              fill="var(--stroke-0, white)"
              id="Union"
            />
            <path
              d={svgPaths.p2eb72c80}
              id="Ellipse 33"
              stroke="var(--stroke-0, white)"
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
  );
}

export default Icn;
