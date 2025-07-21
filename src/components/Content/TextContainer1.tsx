import { useTheme } from "@context/ThemeProvider";

function TextContainer1() {
  const { theme } = useTheme();

  const textColor = theme === "standard" ? "#191919" : "white";
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full cursor-pointer"
      data-name="text_container"
    >
      <div className="flex flex-row items-end relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-end justify-start p-[12px] relative size-full">
          <div className="basis-0 font-sans grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-left tracking-[-0.14px]">
            <p className="block leading-[20px]" style={{ color: textColor }}>
              Перевод по СБП
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextContainer1;
