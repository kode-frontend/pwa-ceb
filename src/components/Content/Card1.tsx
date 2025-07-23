import { useNavigate } from "react-router-dom";
import Container3 from "../Content/Container3";
import { useTheme } from "@context/ThemeProvider";

function Card1() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const backgroundColor = theme === "standard" ? "white" : "#FFFFFF1F";
  const textColor = theme === "standard" ? "#191919" : "white";

  const handleBack = () => {
    navigate("/pwa-ceb/sbp");
  };
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-[20px] shrink-0 size-[110px] cursor-pointer"
      data-name="card"
      onClick={handleBack}
      style={{ backgroundColor }}
    >
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Container3 />
      <div
        className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full cursor-pointer"
        data-name="text_container"
      >
        <div className="flex flex-row items-end relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-end justify-start p-[12px] relative size-full">
            <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left tracking-[-0.14px]">
              <p className="block leading-[20px]" style={{ color: textColor }}>
                Перевод по СБП
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
