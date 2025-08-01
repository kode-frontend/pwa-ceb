import { useNavigate } from "react-router-dom";

import stories1 from "/assets/stories1.png";
import stories2 from "/assets/stories2.png";
import ecosystem from "/assets/ecosystem.png";

function SmallBanners() {
  const navigate = useNavigate();

  const storie1 = () => {
    navigate("/bank-deposit");
  };
  const storie2 = () => {
    navigate("/promise-pay");
  };
  const storie3 = () => {
    navigate("/promise-pay-points");
  };
  return (
    <div className="relative shrink-0 w-full" data-name="small_banners">
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-[8px] items-center justify-start px-4 py-0 relative w-full overflow-x-auto scrollbar-hide">
          <div onClick={storie1} className="cursor-pointer">
            <div
              className="h-[90px] overflow-clip relative rounded-2xl shrink-0 w-[148px]"
              data-name="stories"
              style={{
                backgroundImage:
                  "linear-gradient(121.304deg, rgb(48, 148, 241) 0%, rgb(21, 131, 233) 100%)",
              }}
            >
              <div className="relativerounded-lg overflow-hidden">
                <img
                  src={stories1}
                  alt="Карта"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div onClick={storie2} className="cursor-pointer">
            <div
              className="h-[90px] overflow-clip relative rounded-2xl shrink-0 w-[148px]"
              data-name="stories"
              style={{
                backgroundImage:
                  "linear-gradient(121.304deg, rgb(245, 94, 67) 0%, rgb(226, 66, 38) 100%)",
              }}
            >
              <div className="relativerounded-lg overflow-hidden">
                <img
                  src={stories2}
                  alt="Карта"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div onClick={storie3} className="cursor-pointer">
            <div
              className="h-[90px] overflow-clip relative rounded-2xl shrink-0 w-[148px]"
              data-name="stories"
              style={{
                backgroundImage:
                  "linear-gradient(121.304deg, rgb(26, 198, 126) 0%, rgb(19, 185, 116) 100%)",
              }}
            >
              <div
                className="absolute left-16 size-[124px] top-0"
                data-name="illustration"
              >
                <div
                  className="absolute bg-center bg-cover bg-no-repeat left-1/2 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[142px_142px] size-[142px] top-1/2 translate-x-[-50%] translate-y-[-50%]"
                  data-name="img"
                />
                <div
                  className="absolute bg-[#19c27c] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9px] mask-size-[142px_142px] mix-blend-color opacity-50 size-[124px] top-0"
                  data-name="img"
                />
              </div>
              <div className="relative w-[100%] h-[100%] overflow-hidden">
                <img
                  src={ecosystem}
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

export default SmallBanners;
