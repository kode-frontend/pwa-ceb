import Icon from "../Content/Icon";

function Bonus1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-1 items-center justify-start px-2 py-1 relative rounded-[100px] shrink-0"
      data-name="bonus"
    >
      <div className="absolute inset-0 rounded-[100px] pointer-events-none border border-[rgb(25 25 25 / 14%)]" />
      <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[10px] text-left text-nowrap tracking-[-0.1px]">
        <p className="adjustLetterSpacing block leading-[12px] whitespace-pre">
          753.42
        </p>
      </div>
      <Icon />
    </div>
  );
}

export default Bonus1;
