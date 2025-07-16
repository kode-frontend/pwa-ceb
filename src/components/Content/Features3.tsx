import Card11 from "../Content/Card11";
import Card12 from "../Content/Card12";

function Features3() {
  return (
    <div className="relative shrink-0 w-full" data-name="features">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[16px] relative w-full overflow-x-auto">
          <Card11 />
          <Card12 />
        </div>
      </div>
    </div>
  );
}

export default Features3;
