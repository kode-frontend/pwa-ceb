import { useNavigate } from "react-router-dom";
import { useTheme } from "@context/ThemeProvider";
import Close from "./Close";

interface CardProps {
  onRemove: () => void;
  title: string;
  navigateLink: string;
  icon: React.ComponentType;
}

function Card({ onRemove, title, navigateLink, icon: Icon }: CardProps) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const backgroundColor = theme === "standard" ? "white" : "#FFFFFF1F";
  const textColor = theme === "standard" ? "#191919" : "white";

  const handleBack = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    navigate(navigateLink);
  };
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative rounded-[20px] shrink-0 size-[110px] cursor-pointer"
      data-name="card"
      onClick={handleBack}
      style={{ backgroundColor }}
    >
      <div className="absolute border-[0.5px] border-[rgba(255,255,255,0.01)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="relative shrink-0 w-full" data-name="container">
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-row items-start justify-between pb-3 pl-3 pr-2.5 pt-2.5 relative w-full">
            <Icon />
            <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
              <div className="flex-none rotate-[270deg]">
                <div
                  className="overflow-clip relative size-4"
                  data-name="close"
                >
                  <Close onRemove={onRemove} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full cursor-pointer"
        data-name="text_container"
      >
        <div className="flex flex-row items-end relative size-full">
          <div className="box-border content-stretch flex flex-row gap-2.5 items-end justify-start p-[12px] relative size-full">
            <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left tracking-[-0.14px]">
              <p className="block leading-[20px]" style={{ color: textColor }}>
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
