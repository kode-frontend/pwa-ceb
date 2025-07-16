import { svgPaths } from "@shared/constants/svgPaths";

function Home({ active = false }) {
  return (
    <div
      className="absolute h-[17.661px] left-[2.998px] top-[3.166px] w-[18px]"
      data-name="home"
    >
      <div className="absolute bottom-[-5.096%] left-[-5%] right-[-5%] top-[-5.096%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="home">
            <path
              d="M10.0015 15.2325V12.5329"
              id="Vector"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p4c1e880}
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

export default Home;
