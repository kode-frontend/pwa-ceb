import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";

function ScanBarcode() {
  const { theme } = useTheme();
  const svgStrokeColor = theme === "standard" ? "white" : "black"
  return (
    <div
      className="absolute left-[3px] size-[18px] top-[3px]"
      data-name="scan-barcode"
    >
      <div className="absolute bottom-[-5%] left-[-5%] right-[-5%] top-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
        >
          <g id="scan-barcode">
            <path
              d={svgPaths.p3f5644b0}
              id="Vector"
              stroke={svgStrokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p32095a60}
              id="Vector_2"
              stroke={svgStrokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p3e3fbd00}
              id="Vector_3"
              stroke={svgStrokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p2a890100}
              id="Vector_4"
              stroke={svgStrokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p2781b980}
              id="Vector_5"
              stroke={svgStrokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.pa72f680}
              id="Vector_6"
              stroke={svgStrokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p1a3ae480}
              id="Vector_7"
              stroke={svgStrokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            <path
              d={svgPaths.p1f30e640}
              id="Vector_8"
              stroke={svgStrokeColor}
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

export default ScanBarcode;
