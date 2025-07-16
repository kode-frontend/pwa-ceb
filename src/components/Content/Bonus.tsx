import Icon from "../Content/Icon";

function Bonus() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-1.5 py-1 relative rounded-[100px] shrink-0"
      data-name="bonus"
    >
      <div className="absolute border-[0.5px] border-[rgba(25,25,25,0.01)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#191919] text-[10px] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          1 243.31
        </p>
      </div>
      <Icon />
    </div>
  );
}

export default Bonus;
