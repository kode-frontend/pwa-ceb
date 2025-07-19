import { svgPaths } from "@shared/constants/svgPaths";

function Messages2({active = false}) {
  return (
    <div
      className="absolute bottom-[12.497%] left-[12.5%] right-[12.5%] top-[12.5%]"
      data-name="messages-2"
    >
      <div className="absolute bottom-[-5.025%] left-[-5%] right-[-5%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="messages-2">
            <path
              d={svgPaths.p4a3d00}
              id="Vector"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p5be9d70}
              id="Vector_2"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Messages2;
