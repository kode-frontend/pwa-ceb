import { useTheme } from "@context/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { svgPaths } from "@shared/constants/svgPaths";

function Button() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/add-service");
  };

  const backgroundColor = theme === "standard" ? "#316DCC" : "white";
  const backgroundColorSvg = theme === "standard" ? "white" : "black";
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-0 relative rounded-[100px] shrink-0 w-11 cursor-pointer"
      data-name="button"
      style={{ backgroundColor }}
      onClick={handleBack}
    >
      <div className="relative shrink-0 size-6" data-name="icon_line/Plus">
        <div className="absolute inset-[12.5%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 18 18"
          >
            <g id="Group 33489">
              <path
                clipRule="evenodd"
                d={svgPaths.p2b1d1e00}
                fill={backgroundColorSvg}
                fillRule="evenodd"
                id="Vector 5 (Stroke)"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p29025700}
                fill={backgroundColorSvg}
                fillRule="evenodd"
                id="Vector 6 (Stroke)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Button;
