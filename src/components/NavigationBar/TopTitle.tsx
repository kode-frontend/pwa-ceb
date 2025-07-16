import Search from "../Content/Search";
import Content9 from "../Content/Content9";

function TopTitle({ scrollY = 0 }: { scrollY?: number }) {
  return (
    <div className="relative shrink-0 w-full" data-name="top_title">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-2 relative w-full">
          <Search />
          <Content9 scrollY={scrollY} />
        </div>
      </div>
    </div>
  );
}

export default TopTitle;
