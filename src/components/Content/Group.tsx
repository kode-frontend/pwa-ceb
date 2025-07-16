import { svgPaths } from "@shared/constants/svgPaths";

function Group() {
  return (
    <div
      className="absolute bottom-[8.333%] left-[9.603%] right-[9.603%] top-[8.333%]"
      data-name="Group"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Group">
          <path
            d={svgPaths.p2a1ed400}
            fill="var(--fill-0, #316DCC)"
            id="Vector"
          />
          <path
            d={svgPaths.p98aae80}
            fill="var(--fill-0, #316DCC)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p3b26f280}
            fill="var(--fill-0, #316DCC)"
            id="Vector_3"
          />
        </g>
      </svg>
    </div>
  );
}

export default Group;
