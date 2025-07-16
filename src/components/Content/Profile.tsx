import { svgPaths } from "@shared/constants/svgPaths";

function Profile() {
  return (
    <div
      className="absolute bottom-[12.5%] left-[23.752%] right-[23.748%] top-[12.5%]"
      data-name="profile"
    >
      <div className="absolute bottom-[-5%] left-[-7.144%] right-[-7.142%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 13 17"
        >
          <g id="profile">
            <path
              d={svgPaths.p22c05c00}
              id="vector"
              stroke="var(--stroke-0, white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p34361300}
              id="rec"
              stroke="var(--stroke-0, white)"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Profile;
