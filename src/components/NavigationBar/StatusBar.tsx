import { svgPaths } from "@shared/constants/svgPaths";

function StatusBar() {
  return (
    <div
      className="h-[47px] overflow-clip relative shrink-0 w-full"
      data-name="Status bar"
    >
      <div
        className="absolute h-[11.096px] left-[33.451px] top-[20.168px] w-[28.197px]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 29 12"
        >
          <g id="Vector">
            <path d={svgPaths.p2f3dd000} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3b459d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.pc34b900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p10cffe00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[11.992px] right-[19.599px] top-[19px] w-[47.417px]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 48 12"
        >
          <g id="Vector">
            <path
              clipRule="evenodd"
              d={svgPaths.p2380f680}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
            <path d={svgPaths.p7327400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f59c0f0} fill="var(--fill-0, white)" />
            <path
              clipRule="evenodd"
              d={svgPaths.p1dd37940}
              fill="var(--fill-0, white)"
              fillRule="evenodd"
            />
          </g>
        </svg>
      </div>
      <div
        className="absolute h-[11.07px] right-[74.395px] top-[19.922px] w-[16.605px]"
        data-name="Vector"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 17 12"
        >
          <g id="Vector">
            <path d={svgPaths.p3a05d00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p75b3660} fill="var(--fill-0, white)" />
            <path d={svgPaths.p39149e00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p44fec00} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default StatusBar;
