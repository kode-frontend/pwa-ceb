import IconLinePlus from "../Content/IconLinePlus";

function Button() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-2.5 h-full items-center justify-center p-0 relative rounded-[100px] shrink-0 w-11"
      data-name="button"
    >
      <IconLinePlus />
    </div>
  );
}

export default Button;
