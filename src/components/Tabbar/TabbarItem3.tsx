import { svgPaths } from "@shared/constants/svgPaths";

function TabbarItem3({ active = false }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-center justify-start min-h-px min-w-px pb-1 pt-2 px-0 relative shrink-0"
      data-name="tabbar_item"
    >
      <div
        className="relative shrink-0 size-6"
        data-name="vuesax/linear/messages-2"
      >
        <div
          className="absolute contents left-[3px] top-[3px]"
          data-name="vuesax/linear/messages-2"
        >
          <div
            className="absolute bottom-[12.497%] left-[12.5%] right-[12.5%] top-[12.5%]"
            data-name="messages-2"
          >
            <div className="absolute bottom-[-5.025%] left-[-5%] right-[-5%] top-[-5%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
              >
                <g id="messages-2">
                  <path
                    d={svgPaths.p4a3d00}
                    id="Vector"
                    stroke={active ? "#316DCC" : "#b6b6b6ff"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                  <path
                    d={svgPaths.p5be9d70}
                    id="Vector_2"
                    stroke={active ? "#316DCC" : "#b6b6b6ff"}
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
      <div
        className={`flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[${
          active ? "#191919" : "#9ba5b3"
        }] text-[10px] text-left text-nowrap tracking-[-0.1px]`}
      >
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          Чат
        </p>
      </div>
    </div>
  );
}

export default TabbarItem3;
