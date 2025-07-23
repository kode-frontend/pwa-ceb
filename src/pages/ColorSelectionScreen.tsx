import { ThemeId } from "@context/overlayThemes";
import { useTheme } from "@context/ThemeProvider";
import { svgPaths } from "@shared/constants/svgPaths";

export const colorOptions: { id: ThemeId; name: string; value: string }[] = [
  { id: "calm-blue", name: "Спокойный синий", value: "#316dcc" },
  { id: "deep-turquoise", name: "Глубокая бирюза", value: "#008080" },
  { id: "standard", name: "Стандартный", value: "#FFFFFF" },
  { id: "sea-blue", name: "Морской синий", value: "#1e90ff" },
];

const updateThemeColorMeta = (color: string) => {
  const metaTag = document.querySelector("meta[name=theme-color]");
  if (metaTag) {
    metaTag.setAttribute("content", color);
  }
};


export const ColorSelectionScreen = () => {
  
  const { theme, setTheme } = useTheme();
  
  return (
    <div className="bg-[#f2f3f5] box-border content-stretch flex flex-col items-start justify-start size-full  ">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-3 relative size-full">
          <div className="bg-white box-border content-stretch flex flex-col items-start justify-start overflow-clip p-0 relative rounded-[20px] shrink-0 w-full">
            {/* Header */}
            <div className="relative shrink-0 w-full">
              <div className="relative size-full">
                <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-4 py-3 relative w-full">
                  <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="font-medium text-[#191919] text-[16px] leading-[24px] tracking-[-0.16px]">
                      <p>Выберите тему</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Options */}
            {colorOptions.map((option) => (
              <ColorOptionItem
                key={option.id}
                option={option}
                selected={option.id === theme}
                onSelect={setTheme}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ColorOptionItemProps {
  option: { id: ThemeId; name: string; value: string };
  selected: boolean;
  onSelect: (id: ThemeId) => void;
}

const ColorOptionItem = ({
  option,
  selected,
  onSelect,
}: ColorOptionItemProps) => {
  const handleClick = () => {
    onSelect(option.id);
    updateThemeColorMeta(option.value);
  };
  return (
    <div
      className="relative shrink-0 w-full cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-center px-4 py-3 relative w-full">
          <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="flex flex-row grow items-center gap-3 min-w-0">
              <div className="flex flex-col gap-1 grow items-start justify-center min-w-0">
                <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                  <div className="text-[#191919] text-[16px] leading-[24px] truncate">
                    <p>{option.name}</p>
                  </div>
                </div>
              </div>
            </div>
            <RadioButton checked={selected} color={option.value} />
          </div>
        </div>
      </div>
    </div>
  );
};

const RadioButton = ({
  checked,
  color,
}: {
  checked: boolean;
  color: string;
}) => {
  return (
    <div className="relative shrink-0 size-6">
      <div className="absolute box-border content-stretch flex flex-row gap-1 items-center justify-center left-1/2 p-[10px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <div className="relative shrink-0 size-6">
          <svg
            className="block size-full"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            {checked ? (
              <path
                d={svgPaths.pf1830f2}
                fill={color === "#FFFFFF" ? "#1e90ff" : color}
              />
            ) : (
              <path d={svgPaths.p1ee5e230} fill="#E2E4EA" />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};
