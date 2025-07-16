import Banner from "../Content/Banner";
import Banner1 from "../Content/Banner1";

function BannerRow() {
  return (
    <div className="relative shrink-0 w-full" data-name="banner_row">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-0 relative w-full overflow-x-auto scrollbar-hide">
          <Banner />
          <Banner1 />
        </div>
      </div>
    </div>
  );
}

export default BannerRow;
