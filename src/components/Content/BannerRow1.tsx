import { useNavigate } from "react-router-dom";
import Banner2 from "../Content/Banner2";

function BannerRow1() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/order");
  };
  return (
    <div className="relative shrink-0 w-full" data-name="banner_row">
      <div className="flex flex-row items-center relative size-full cursor-pointer" onClick={handleBack}>
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start px-4 py-0 relative w-full">
          <Banner2 />
        </div>
      </div>
    </div>
  );
}

export default BannerRow1;
