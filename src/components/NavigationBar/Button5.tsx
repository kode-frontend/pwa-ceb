import { useTheme } from "@context/ThemeProvider";
import Icon2 from "../Content/Icon2";
import { useNavigate } from "react-router-dom";

function Button5({ scrollY = 0 }: { scrollY?: number }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isCompressed = scrollY > 99;

  const handleClick = () => {
    navigate("/pwa-ceb/scan-qr");
  };

  const backgroundColor = theme === "standard" ? "#316dcc" : "white";
  const textColor = theme === "standard" ? "white" : "black"

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
          <Icon2 />
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
            <p className="adjustLetterSpacing block leading-[16px]" style={{color: textColor}}>
              Оплата по QR
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Button5;
