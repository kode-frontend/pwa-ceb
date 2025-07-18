import { useNavigate } from "react-router-dom";
import Stories from "../Content/Stories";
import Stories1 from "../Content/Stories1";
import Stories2 from "../Content/Stories2";

function SmallBanners() {
  const navigate = useNavigate();

  const storie1 = () => {
    navigate("/pwa-ceb/bank-deposit");
  };
  const storie2 = () => {
    navigate("/pwa-ceb/promise-pay");
  };
  const storie3 = () => {
    navigate("/pwa-ceb/promise-pay-points");
  };
  return (
    <div className="relative shrink-0 w-full" data-name="small_banners">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-0 relative w-full overflow-x-auto scrollbar-hide">
          <div onClick={storie1} className="cursor-pointer">
            <Stories />
          </div>
          <div onClick={storie2} className="cursor-pointer">
            <Stories1 />
          </div>
          <div onClick={storie3} className="cursor-pointer">
            <Stories2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallBanners;
