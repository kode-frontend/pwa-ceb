import { useNavigate } from "react-router-dom";
import Banner2 from "../Content/Banner2";

function BannerRow1() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/order");
  };
  return (
    <div className="relative shrink-0 w-full" data-name="banner_row">
      <div className="flex flex-row items-center relative size-full cursor-pointer" onClick={handleBack}>
        <div className="box-border p-[16px] relative w-[100%] rounded-3xl overflow-hidden">
          <Banner2 />
        </div>
      </div>
    </div>
  );
}

export default BannerRow1;
