import { useTheme } from "@context/ThemeProvider";
import { useNavigate } from "react-router-dom";
import { svgPaths } from "@shared/constants/svgPaths";

function Button5({ scrollY = 0 }: { scrollY?: number }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isCompressed = scrollY > 99;

  const handleClick = () => {
    navigate("/pwa-ceb/scan-qr");
  };

  const backgroundColor = theme === "standard" ? "#316dcc" : "white";
  const textColor = theme === "standard" ? "white" : "black";
  const svgStrokeColor = theme === "standard" ? "white" : "black";

  return (
    <div
      className="transition-all duration-300"
      style={{
        width: isCompressed ? "36px" : "auto",
        height: "36px",
      }}
      data-name="button"
    >
      <div
        className="h-full"
        style={{
          width: isCompressed ? "36px" : "auto",
          height: "36px",
          padding: isCompressed ? "6px" : "6px 12px 6px 12px",
          gap: isCompressed ? "0px" : "4px",
          backgroundColor,
          borderRadius: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
      >
        <div className="flex-shrink-0 cursor-pointer" onClick={handleClick}>
          <div className="relative shrink-0 size-6" data-name="icon">
            <div
              className="absolute contents left-[3px] top-[3px]"
              data-name="vuesax/linear/scan-barcode"
            >
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
            </div>
          </div>
        </div>

        {!isCompressed && (
          <div
            onClick={handleClick}
            role="button"
            className="font-sans leading-[0] not-italic text-[#191919] text-[12px] text-left text-nowrap tracking-[-0.12px] transition-opacity duration-300 whitespace-nowrap cursor-pointer"
            style={{
              opacity: isCompressed ? 0 : 1,
              width: isCompressed ? 0 : "auto",
            }}
          >
            <p
              className="adjustLetterSpacing block leading-[16px]"
              style={{ color: textColor }}
            >
              Оплата по QR
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Button5;
