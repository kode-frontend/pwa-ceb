import IconLinePlus1 from "../Content/IconLinePlus1";

function Button1() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col gap-2.5 h-[110px] items-center justify-center px-2 py-0 relative rounded-[20px] shrink-0"
      data-name="button"
    >
      <IconLinePlus1 />
      <div className="font-sans leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] text-center tracking-[-0.14px] w-[86px]">
        <p className="adjustLetterSpacing block leading-[20px]">
          Добавить действие
        </p>
      </div>
    </div>
  );
}

export default Button1;
