import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const handleClick = () => {
    navigate("/pwa-ceb/profile");
  };

  const svgStrokeColor = theme === "standard" ? "black" : "white";

  return (
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
  );
}

export default Profile;