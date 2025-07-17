import IconexLightSettings from "../Content/IconexLightSettings";

function TabbarItem4({ active = false }) {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col gap-1 grow items-center justify-start min-h-px min-w-px pb-1 pt-2 px-0 relative shrink-0"
      data-name="tabbar_item"
    >
      <IconexLightSettings active={active} />
      <div
        className={`flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[${
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
