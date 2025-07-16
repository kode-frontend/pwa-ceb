import Content5 from "../Content/Content5";
import Content6 from "../Content/Content6";
import Content7 from "../Content/Content7";

function Cards3() {
  return (
    <div className="relative shrink-0 w-full" data-name="cards">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start pb-0.5 pt-1 px-4 relative w-full overflow-x-auto scrollbar-hide">
          <div className="flex flex-row items-center self-stretch shrink-0">
            <Content5 />
          </div>
          <div className="flex flex-row items-center self-stretch shrink-0">
            <Content6 />
          </div>
          <div className="flex flex-row items-center self-stretch shrink-0">
            <Content7 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards3;
