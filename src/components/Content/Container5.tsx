import Container4 from "../Content/Container4";
import Close5 from "../Content/Close5";

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="container">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-row items-start justify-between pb-3 pl-3 pr-2.5 pt-2.5 relative w-full">
          <Container4 />
          <div className="flex h-[16px] items-center justify-center relative shrink-0 w-[16px]">
            <div className="flex-none rotate-[270deg]">
              <Close5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container5;
