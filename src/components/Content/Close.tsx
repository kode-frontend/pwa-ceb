import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";

interface CloseProps {
  onRemove?: () => void;
}

function Close({ onRemove }: CloseProps) {
  const { theme } = useTheme();
  const backgroundColor = theme === "standard" ? "#6F7884" : "white";
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onRemove?.();
  };
  return (
    <div
      className="absolute h-[8.204px] left-[3.9px] top-[3.9px] w-[8.203px] cursor-pointer"
      data-name="close"
      onClick={handleClick}
    >
      <div className="absolute bottom-[-0.002%] left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 9 9"
        >
          <g id="close">
            <path
              d={svgPaths.p1b65d400}
              fill={backgroundColor}
              fillOpacity="0.7"
              id="Union"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Close;
