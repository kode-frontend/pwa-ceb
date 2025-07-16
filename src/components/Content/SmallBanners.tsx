import Stories from "../Content/Stories";
import Stories1 from "../Content/Stories1";
import Stories2 from "../Content/Stories2";
import Stories3 from "../Content/Stories3";

function SmallBanners() {
  return (
    <div className="relative shrink-0 w-full" data-name="small_banners">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-0 relative w-full overflow-x-auto scrollbar-hide">
          <Stories />
          <Stories1 />
          <Stories2 />
          <Stories3 />
        </div>
      </div>
    </div>
  );
}

export default SmallBanners;
