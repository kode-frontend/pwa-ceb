import Block from "../Content/Block";
import Block1 from "../Content/Block1";

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full">
          <Block />
          <Block1 />
        </div>
      </div>
    </div>
  );
}

export default Container16;
