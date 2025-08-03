import { useNavigate } from "react-router-dom";

import { useTheme } from "@context/ThemeProvider";

import { svgPaths } from "@shared/constants/svgPaths";

function TopbarProfileButton() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const containerStyle = {
    backgroundColor: theme === "standard" ? "white" : "#FFFFFF14",
  };

  const handleClick = () => {
    navigate("/profile", { state: { from: location.pathname } });
  };

  const svgStrokeColor = theme === "standard" ? "black" : "white";
  return (
    <div
      className="bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-0 relative rounded-[100px] shrink-0 size-9"
      data-name="search"
      style={containerStyle}
    >
      <div className="relative shrink-0 size-5" data-name="profile">
        <div
          onClick={handleClick}
          className="absolute bottom-[12.5%] left-[23.752%] right-[23.748%] top-[12.5%] cursor-pointer"
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
                  stroke={svgStrokeColor}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d={svgPaths.p34361300}
                  id="rec"
                  stroke={svgStrokeColor}
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopbarProfileButton;
