import { useNavigate } from "react-router-dom";

function Card12() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/pwa-ceb/new-product");
  };
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[132px] min-h-px min-w-px overflow-clip relative rounded-3xl shrink-0 cursor-pointer"
      data-name="card"
      onClick={handleBack}
    >
      <div className="relative w-[100%] h-[100%] overflow-hidden">
        <img
          src="/pwa-ceb/assets/cardspic.png"
          alt="Карта"
          className="absolute object-cover"
        />
      </div>
      <div
        className="absolute left-[32.5px] size-[184px] top-[19px]"
        data-name="illustration"
      >
        <div
          className="absolute bg-center bg-cover bg-no-repeat left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[184px_184px] size-[184px] top-0"
          data-name="img"
        />
      </div>
    </div>
  );
}

export default Card12;
