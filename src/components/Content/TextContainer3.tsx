import Label3 from "../Content/Label3";

function TextContainer3() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[90px] items-start justify-between left-0 p-[10px] top-0 w-[148px]"
      data-name="text_container"
    >
      <div
        className="font-sans leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left tracking-[-0.12px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[16px]">19% по вкладу на 1 год</p>
      </div>
      <Label3 />
    </div>
  );
}

export default TextContainer3;
