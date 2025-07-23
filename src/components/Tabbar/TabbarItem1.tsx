import { svgPaths } from "@shared/constants/svgPaths";

function TabbarItem1({ active = false }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-center justify-start min-h-px min-w-px pb-1 pt-2 px-0 relative shrink-0"
      data-name="tabbar_item"
    >
      <div
        className="relative shrink-0 size-6"
        data-name="transfer-4-svgrepo-com 1"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <g id="transfer-4-svgrepo-com 1">
            <path
              d={svgPaths.pea3a400}
              fill={active ? "#316DCC" : "#b6b6b6ff"}
              id="å½¢ç¶"
              stroke={active ? "#316DCC" : "#b6b6b6ff"}
            />
          </g>
        </svg>
      </div>
      <div
        className={`flex flex-col font-sans justify-center leading-[0] not-italic relative shrink-0 text-[${
          active ? "#191919" : "#9ba5b3"
        }] text-[10px] text-left text-nowrap tracking-[-0.1px]`}
      >
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          Платежи
        </p>
      </div>
    </div>
  );
}

export default TabbarItem1;
