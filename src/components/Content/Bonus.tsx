import Icon from "../Content/Icon";

function Bonus() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="bonus"
    >
      <div className="absolute inset-0 rounded-[100px] pointer-events-none border border-[rgba(25,25,25,0.1)]" />

      <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[10px] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          1 243.31
        </p>
      </div>
      <Icon />
    </div>
  );
}

export default Bonus;
