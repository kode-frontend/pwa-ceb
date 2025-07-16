import { svgPaths } from "@shared/constants/svgPaths";

function Headphones() {
  return (
    <div
      className="absolute left-[3px] size-[18px] top-[3px]"
      data-name="Headphones"
    >
      <div className="absolute inset-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="Headphones">
            <path
              d={svgPaths.p1a98f00}
              id="Rectangle 74"
              stroke="var(--stroke-0, #316DCC)"
              strokeLinecap="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p1c79f480}
              id="Rectangle 75"
              stroke="var(--stroke-0, #316DCC)"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p1889e280}
              id="Rectangle 76"
              stroke="var(--stroke-0, #316DCC)"
              strokeWidth="1.8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Headphones;
