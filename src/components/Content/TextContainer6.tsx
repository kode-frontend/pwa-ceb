import Label6 from "../Content/Label6";

function TextContainer6() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[90px] items-start justify-between left-0 p-[10px] top-0 w-[148px]"
      data-name="text_container"
    >
      <div
        className="font-['SF_Pro_Display:Medium',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#ffffff] text-[12px] text-left tracking-[-0.12px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[16px]">
          5% кэшбэк на одежду
          <br />в июне
        </p>
      </div>
      <Label6 />
    </div>
  );
}

export default TextContainer6;
