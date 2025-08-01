import { useNavigate } from "react-router-dom";

function BannerRow() {
  const navigate = useNavigate();

  const banner = () => {
    navigate("/pwa-ceb/invite");
  };
  const banner1 = () => {
    navigate("/pwa-ceb/additional-points");
  };
  return (
    <div className="relative shrink-0 w-full" data-name="banner_row">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[8px] items-center justify-start px-4 py-0 relative w-full overflow-x-auto scrollbar-hide">
          <div onClick={banner} className="cursor-pointer">
            <div
              className="h-[132px] overflow-clip relative rounded-3xl shrink-0 w-[343px]"
              data-name="banner"
              style={{
                backgroundImage:
                  "linear-gradient(133.858deg, rgb(197, 91, 249) 0%, rgb(173, 45, 236) 100%)",
              }}
            >
              <div className="relativerounded-lg overflow-hidden">
                <img
                  src="/pwa-ceb/assets/banner1.png"
                  alt="Карта"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div onClick={banner1} className="cursor-pointer">
            <div
              className="h-[132px] overflow-clip relative rounded-3xl shrink-0 w-[343px]"
              data-name="banner"
              style={{
                backgroundImage:
                  "linear-gradient(133.858deg, rgb(197, 91, 249) 0%, rgb(173, 45, 236) 100%)",
              }}
            >
              <div className="relativerounded-lg overflow-hidden">
                <img
                  src="/pwa-ceb/assets/additionalpic.png"
                  alt="Карта"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerRow;
