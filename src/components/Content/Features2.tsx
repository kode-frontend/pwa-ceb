import Features from "../Content/Features";
import Features1 from "../Content/Features1";

function Features2() {
  return (
    <div className="relative shrink-0 w-full" data-name="features">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start pb-4 pt-2 px-4 relative w-full">
          <Features />
          <Features1 />
        </div>
      </div>
    </div>
  );
}

export default Features2;
