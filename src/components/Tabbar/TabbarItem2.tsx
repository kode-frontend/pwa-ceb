import { useTheme } from "@context/ThemeProvider";
import { colorOptions } from "@pages/ColorSelectionScreen";
import { svgPaths } from "@shared/constants/svgPaths";

function TabbarItem2({ active = false }) {
  const { theme } = useTheme();
  const backgroundColor = active
    ? colorOptions.find((c) => c.id === theme)?.value
    : "#b6b6b6ff";
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-center justify-start min-h-px min-w-px pb-1 pt-2 px-0 relative shrink-0"
      data-name="tabbar_item"
    >
      <div className="relative shrink-0 size-6" data-name="coins">
        <div
          className="absolute h-[18px] left-[3.066px] top-[3px] w-[17.856px]"
          data-name="coins"
        >
          <div className="absolute bottom-[-4.998%] left-[-5.041%] right-[-5.041%] top-[-5%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 20 20"
            >
              <g id="coins">
                <path
                  d={svgPaths.p4974400}
                  id="vector"
                  stroke={backgroundColor}
                  strokeWidth="1.8"
                />
                <path
                  d={svgPaths.p21deb000}
                  id="vector_2"
                  stroke={backgroundColor}
                  strokeWidth="1.8"
                />
                <path
                  d={svgPaths.p19b993f0}
                  id="vector_3"
                  stroke={backgroundColor}
                  strokeWidth="1.8"
                />
                <path
                  d={svgPaths.p381ed800}
                  id="vector_4"
                  stroke={backgroundColor}
                  strokeWidth="1.8"
                />
                <circle
                  cx="14.806"
                  cy="14.95"
                  id="vector_5"
                  r="4.05"
                  stroke={backgroundColor}
                  strokeWidth="1.8"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[${
          active ? "#191919" : "#9ba5b3"
        }] text-[10px] text-left text-nowrap tracking-[-0.1px]`}
      >
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          Кредиты
        </p>
      </div>
    </div>
  );
}

export default TabbarItem2;
