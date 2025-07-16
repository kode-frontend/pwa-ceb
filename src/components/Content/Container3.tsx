import Container2 from "../Content/Container2";
import Close3 from "../Content/Close3";

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between pb-3 pl-3 pr-2.5 pt-2.5 relative w-full">
          <Container2 />
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
            <div className="flex-none rotate-[270deg]">
              <Close3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container3;
