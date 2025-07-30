import { svgPaths } from "@shared/constants/svgPaths";
import { useNavigate } from "react-router-dom";

function ButtonSettingsFavorite() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/add-service");
  };
  return (
    <div
      className="basis-0 bg-[rgba(255,255,255,0.08)] box-border content-stretch flex flex-row gap-2.5 grow items-center justify-center min-h-px min-w-px px-0 py-4 relative rounded-[20px] shrink-0 border-[0.5px] border-[rgba(255,255,255,0.01)] border-solid  cursor-pointer"
      data-name="button"
      onClick={handleBack}
    >
      <div className="absolute inset-0 pointer-events-none rounded-[20px]" />
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
                fill="var(--fill-0, white)"
                fillRule="evenodd"
                id="Vector 5 (Stroke)"
              />
              <path
                clipRule="evenodd"
                d={svgPaths.p29025700}
                fill="var(--fill-0, white)"
                fillRule="evenodd"
                id="Vector 6 (Stroke)"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[14px] text-left text-nowrap tracking-[-0.28px]">
        <p className="adjustLetterSpacing block leading-[20px] whitespace-pre">
          Настроить избранное
        </p>
      </div>
    </div>
  );
}

export default ButtonSettingsFavorite;
