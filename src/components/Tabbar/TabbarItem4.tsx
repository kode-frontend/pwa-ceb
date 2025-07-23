import { svgPaths } from "@shared/constants/svgPaths";

function TabbarItem4({ active = false }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-center justify-start min-h-px min-w-px pb-1 pt-2 px-0 relative shrink-0"
      data-name="tabbar_item"
    >
      <div
        className="relative shrink-0 size-6"
        data-name="Iconex/Light/Settings"
      >
        <div
          className="absolute h-[18px] left-[3.466px] top-[3px] w-[17.067px]"
          data-name="Settings"
        >
          <div className="absolute bottom-[-5%] left-[-5.287%] right-[-5.288%] top-[-5%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 19 20"
            >
              <g id="Settings">
                <circle
                  cx="2.7"
                  cy="2.7"
                  id="Ellipse 33"
                  r="2.7"
                  stroke={active ? "#316DCC" : "#b6b6b6ff"}
                  strokeWidth="1.8"
                  transform="matrix(-1 0 0 1 12.2337 7.3)"
                />
                <path
                  d={svgPaths.p3069ad00}
                  fill={active ? "#316DCC" : "#b6b6b6ff"}
                  id="Subtract"
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
          Настройки
        </p>
      </div>
    </div>
  );
}

export default TabbarItem4;
