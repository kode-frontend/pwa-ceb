import { svgPaths } from "@shared/constants/svgPaths";

function Settings({active = false}) {
  return (
    <div
      className="absolute h-[18px] left-[3.466px] top-[3px] w-[17.067px]"
      data-name="Settings"
    >
      <div className="absolute bottom-[-5%] left-[-5.287%] right-[-5.288%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19 20"
        >
          <g id="Settings">
            <circle
              cx="2.7"
              cy="2.7"
              id="Ellipse 33"
              r="2.7"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeWidth="1.8"
              transform="matrix(-1 0 0 1 12.2337 7.3)"
            />
            <path
              d={svgPaths.p3069ad00}
              fill={active ? "#316DCC" : "#b6b6b6ff"}
              id="Subtract"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Settings;
