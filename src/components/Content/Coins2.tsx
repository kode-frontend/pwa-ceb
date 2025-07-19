import { svgPaths } from "@shared/constants/svgPaths";

function Coins2({active = false}) {
  return (
    <div
      className="absolute h-[18px] left-[3.066px] top-[3px] w-[17.856px]"
      data-name="coins"
    >
      <div className="absolute bottom-[-4.998%] left-[-5.041%] right-[-5.041%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="coins">
            <path
              d={svgPaths.p4974400}
              id="vector"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p21deb000}
              id="vector_2"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p19b993f0}
              id="vector_3"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p381ed800}
              id="vector_4"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeWidth="1.8"
            />
            <circle
              cx="14.806"
              cy="14.95"
              id="vector_5"
              r="4.05"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeWidth="1.8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Coins2;
