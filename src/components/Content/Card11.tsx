import { useNavigate } from "react-router-dom";

function Card11() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/invest");
  };
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[132px] min-h-px min-w-px overflow-clip relative rounded-3xl shrink-0 cursor-pointer"
      data-name="card"
      onClick={handleBack}
    >
      <div className="relative w-[100%] h-[100%] overflow-hidden">
        <img
          src="/pwa-ceb/assets/flower.png"
          alt="Карта"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute left-[56.5px] size-[135px] top-[19px]"
        data-name="illustration"
      >
        <div
          className="absolute bg-center bg-cover bg-no-repeat left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[135px_135px] size-[135px] top-0"
          data-name="img"
        />
        <div
          className="absolute bg-[#298fef] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[135px_135px] mix-blend-color opacity-50 size-[135px] top-0"
          data-name="img"
        />
      </div>
    </div>
  );
}

export default Card11;
